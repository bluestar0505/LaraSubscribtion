<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;
use App\Http\Resources\ApplicationsResource;

class ApplicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $range = json_decode($request->query('range'));
        $perPage = $request->query('perPage') !== null ? (int)$request->query('perPage') : 10;
        $offset = isset($range[0]) ? (int)$range[0] : 0;
        $limit = isset($range[1]) ? (int)$range[1] : $perPage;
        $applications = Application::orderBy('id', 'desc');
        return (ApplicationsResource::collection($applications->skip($offset)->take($perPage)->get()))
            ->response()
            ->header('Content-Range', sprintf(
                'applications %s-%s/%s',
                $offset,
                $limit,
                Application::count()
            ))
            ->header('X-Total-Count', Application::count());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $application = new Application($request->only([
                'name',
            ]));
            $application->save();
            return new ApplicationsResource($application);
        } catch (\Exception $e) {
            /**
             * Send HTTP status 202 to avoid real error on client
             */
            return response()->json([
                'error' => $e->errorInfo[2],
            ], 202);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new ApplicationsResource(Application::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $application = Application::find($id);
            $application->update($request->only([
                'name',
            ]));
            return new ApplicationsResource($application);
        } catch (\Exception $e) {
            /**
             * Send HTTP status 202 to avoid real error on client
             */
            return response()->json([
                'error' => $e->errorInfo[2],
            ], 202);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $application = Application::find($id);
            $response = new ApplicationsResource($application);
            $application->delete();
            return new ApplicationsResource($response);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
