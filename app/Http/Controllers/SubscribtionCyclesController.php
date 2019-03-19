<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscribtion;
use App\Models\Subscribtion\Cycle;
use App\Http\Resources\SubscribtionsResource;

class SubscribtionCyclesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $subscribtionId
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $subscribtionId)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $subscribtionId
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $subscribtionId)
    {
        try {
            $subscribtion = Subscribtion::find($subscribtionId);
            if ($subscribtion) {
                $previousCycles = Cycle::where('subscribtion_id', $subscribtionId)->get();
                foreach ($previousCycles as $prev) {
                    $prev->cycle_ended = true;
                    $prev->cycle_ended_on = new \DateTime('now');
                    $prev->save();
                }
                $cycle = new Cycle($request->only([
                    'cycle_amount',
                    'cycle_start',
                    'cycle_end',
                    'cycle_paid',
                    'cycle_cancelled',
                    'cycle_ended',
                ]));
                if ($request->cycle_paid) {
                    $cycle['cycle_paid_on'] = new \DateTime($request->cycle_paid_on);
                }
                if ($request->cycle_cancelled) {
                    $cycle['cycle_cancelled_on'] = new \DateTime($request->cycle_cancelled_on);
                }
                if ($request->cycle_ended) {
                    $cycle['cycle_ended_on'] = new \DateTime($request->cycle_ended_on);
                }
                $cycle->subscribtion()->associate($subscribtion);
                $cycle->save();
                return new SubscribtionsResource($subscribtion);
            } else {
                return response()->json([
                    'error' => 'Subscribtion not found...',
                ], 202);
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 202);
        }
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
