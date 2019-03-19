<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Http\Resources\CustomersResource;

class CustomersController extends Controller
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
        $customers = Customer::orderBy('id', 'desc');
        if ($request->query('filter') !== null) {
            $filter = json_decode($request->query('filter'));
            if (isset($filter->q) &&trim($filter->q) !== '') {
                $like = '%' . $filter->q . '%';
                $customers->where('name', 'like', $like)
                    ->orWhere('email', 'like', $like)
                    ->orWhere('company', 'like', $like);
            }
        }
        return (CustomersResource::collection($customers->skip($offset)->take($perPage)->get()))
            ->response()
            ->header('Content-Range', sprintf(
                'customers %s-%s/%s', 
                $offset, 
                $limit, 
                Customer::count()
            ))
            ->header('X-Total-Count', Customer::count());
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
            $customer = new Customer(array_merge($request->only([
                'email',
                'phone',
                'name',
                'company',
                'industry',
            ]), ['remote_id' => rand(100, 200)]));
            $customer->save();
            return new CustomersResource($customer);
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
        return new CustomersResource(Customer::find($id));
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
            $customer = Customer::find($id);
            $customer->update($request->only([
                'email',
                'phone',
                'name',
                'company',
                'industry',
            ]));
            return new CustomersResource($customer);
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
            $customer = Customer::find($id);
            $customer->delete();
            return response()->json($customer);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
