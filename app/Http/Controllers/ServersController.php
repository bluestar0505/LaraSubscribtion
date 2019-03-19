<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Server;
use App\Http\Resources\ServersResource;

class ServersController extends Controller
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
        $servers = Server::orderBy('id', 'desc');
        return (ServersResource::collection($servers->skip($offset)->take($perPage)->get()))
            ->response()
            ->header('Content-Range', sprintf(
                'servers %s-%s/%s',
                $offset,
                $limit,
                Server::count()
            ))
            ->header('X-Total-Count', Server::count());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new ServersResource(Server::find($id));
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
            $server = Server::find($id);
            $server->update($request->only([
                'application',
                'location',
                'size',
                'image',
                'snapshot',
                'domain',
                'ip',
                'is_active',
            ]));
            return new ServersResource($server);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
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
            $server = Server::find($id);
            $server->delete();
            return response()->json($server);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
