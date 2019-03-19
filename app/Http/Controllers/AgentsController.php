<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Agent;
use App\Http\Resources\AgentsResource;

class AgentsController extends Controller
{
    /**
     * Display a listing of the resource.
     * Header 'Content-Range' & 'X-Total-Count' needed for frontend
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
        $agents = Agent::orderBy('id', 'desc');
        if ($request->query('filter') !== null) {
            $filter = json_decode($request->query('filter'));
            if (isset($filter->q) &&trim($filter->q) !== '') {
                $like = '%' . $filter->q . '%';
                $agents->where('name', 'like', $like)
                    ->orWhere('email', 'like', $like);
            }
        }
        return (AgentsResource::collection($agents->skip($offset)->take($perPage)->get()))
            ->response()
            ->header('Content-Range', sprintf(
                'agents %s-%s/%s', 
                $offset, 
                $limit, 
                Agent::count()
            ))
            ->header('X-Total-Count', Agent::count());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            $agent = new Agent(array_merge($request->only([
                'email',
                'phone',
                'name',
                'address',
                'bank_account_iban',
                'bank_name',
                'bank_branch',
                'location',
                'commission_agreed',
                'commission_count',
                'active',
            ]), ['remote_id' => rand(100, 200)]));
            $agent->commission_type = trim($request->commission_type);
            $agent->save();
            return new AgentsResource($agent);
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
        $agent = Agent::find($id);
        $response = new AgentsResource(Agent::find($id));
        $response->commission_type = $agent->commission_type;
        return $response;
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
            $agent = Agent::find($id);
            $agent->commission_type = trim($request->commission_type);
            $agent->update(array_merge($request->only([
                'email',
                'phone',
                'name',
                'address',
                'bank_account_iban',
                'bank_name',
                'bank_branch',
                'location',
                'commission_agreed',
                'commission_count',
                'active',
            ]), ['remote_id' => rand(100, 200)]));
            return new AgentsResource($agent);
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
            $agent = Agent::find($id);
            $response = new AgentsResource($agent);
            $agent->delete();
            return response()->json(['data' => $response]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
