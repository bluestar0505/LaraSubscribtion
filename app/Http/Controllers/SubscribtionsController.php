<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\Customer;
use App\Models\Agent;
use App\Models\Subscribtion;
use App\Models\Subscribtion\Cycle;
use App\Http\Resources\SubscribtionsResource;

/**
 * @group Subscribtions management
 * 
 * APIs for managing subscribtions
 */
class SubscribtionsController extends Controller
{
    /**
     * Display subscribtions list.
     * 
     * @queryParam range Range of results
     * @queryParam perPage Records per page for pagination results
     * @queryParam order string Sort by
     * @queryParam sort string Sort by
     * @queryParam filter Filter records (must look like ['q', '<string for filter by>']) 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $columns = Schema::getColumnListing('subscribtions');
        $range = json_decode($request->query('range'));
        $order = $request->query('order') ? $request->query('order') : 'DESC';
        $perPage = $request->query('perPage') !== null ? (int)$request->query('perPage') : 10;
        $offset = isset($range[0]) ? (int)$range[0] : 0;
        $limit = isset($range[1]) ? (int)$range[1] : $perPage;

        $subscribtions = Subscribtion::orderBy('subscribtions.id', $order);

        if ($request->query('filter') !== null) {
            $filter = json_decode($request->query('filter'));
            /*if (isset($filter->q) &&trim($filter->q) !== '') {
                $like = '%' . $filter->q . '%';
                $subscribtions->where('name', 'like', $like)
                    ->orWhere('email', 'like', $like);
            }*/
        }
        return (SubscribtionsResource::collection($subscribtions->skip($offset)->take($perPage)->get()))
            ->response()
            ->header('Content-Range', sprintf(
                'subscribtions %s-%s/%s', 
                $offset, 
                $limit, 
                Subscribtion::count()
            ))
            ->header('X-Total-Count', Subscribtion::count());
    }

    /**
     * Store a newly created subscirption.
     *
     * @bodyParam remote_id int (not sure about this)
     * @bodyParam customer object required Object of data that represents customer object (see Customer APIs) or if should be used registered customer must look like { 'use_registered': true, 'id': 123 } where id is customer id.
     * @bodyParam agent object Object of data that represents agent object (see Agent APIs). If should be registered without agent must look like { 'dont_use': true } or using agent that already registered -- { 'use_registered': true, 'id': 123 } where id is agent id
     * @bodyParam subscribtion_type int required Id of subscribtion type
     * @bodyParam server array required Server data
     *
     * Error exception returns code 202 instead of 500 -- in case of 500 client app can't load error message content
     *
     * @response 202 {
     *      "error": "Error message"
     * }
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $customer = $this->getCustomer($request->customer);
            $agent = $this->getAgent($request->agent);
            $server = $this->getServer($request->server);
            $subscribtionType = $this->getSubscribtionType($request->subscribtion_type);
            $subscribtion = new Subscribtion([
                'remote_id' => rand(100000, 20000000), //$request->remote_id,
                'is_paused' => false,
                'is_paused_on' => new \DateTime(),
                'is_cancelled' => false,
                'is_cancelled_on' => new \DateTime(),
            ]);
            $subscribtion->customer()->associate($customer);
            $subscribtion->subscribtionType()->associate($subscribtionType);
            if ($agent) {
                $subscribtion->agent()->associate($agent);
            }
            $subscribtion->save();
            return new SubscribtionsResource($subscribtion);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 202);
        }
    }
    
    /**
     * Set subscription paused/resume.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function pause(Request $request, $id)
    {
        try {
            $subscribtion = Subscribtion::find($id);
            $subscribtion->update([
                'is_paused' => boolval($request->is_paused),
                'is_paused_on' => new \DateTime('now'),
            ]);
            $cycles = Cycle::where('subscribtion_id', $subscribtion->id)->get();
            foreach ($cycles as $cycle) {
                $cycle->cycle_cancelled = true;
                $cycle->cycle_cancelled_on = new \DateTime('now');
                $cycle->save();
            }
            return new SubscribtionsResource($subscribtion);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 202);
        }
    }
    
    /**
     * Set subscription cancelled/restore.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function cancel(Request $request, $id)
    {
        try {
            $subscribtion = Subscribtion::find($id);
            $subscribtion->update([
                'is_cancelled' => boolval($request->is_cancelled),
                'is_cancelled_on' => new \DateTime('now'),
            ]);
            return new SubscribtionsResource($subscribtion);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 202);
        }
    }

    /**
     * Get subscription data for edit.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new SubscribtionsResource(Subscribtion::find($id));
    }

    /**
     * Update the specified subscription in storage.
     *
     * @bodyParam remote_id int (not sure about this)
     * @bodyParam is_cancelled boolean required Cancelled status of subscription
     * @bodyParam is_cancelled_on date Date & time of cancellation (if not set will be used current date & time)
     * @bodyParam is_paused boolean required Paused status of description
     * @bodyParam is_paused_on date Date & time of cancellation (if not set will be used current date & time)
     * @bodyParam server object required Object that contains application and server size info (not sure about this)
     * @bodyParam subscribtion_type int required Id of subscribtion type
     *
     * Error exception returns code 202 instead of 500 -- in case of 500 client app can't load error message content
     *
     * @response 202 {
     *      "error": "Error message"
     * }
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $subscribtionType = $this->getSubscribtionType($request->subscribtion_type);
            $subscribtion = Subscribtion::find($id);
            $server = $this->getServer($request->server);
            $updates = $request->only([
                'remote_id',
                'is_cancelled',
                'is_paused',
                'server',
            ]);
            if (isset($request->subscribtion_type['id'])) {
                $updates['subscribtion_type'] = $request->subscribtion_type['id'];
            }
            if ($request->is_paused_on !== null) {
                $updates['is_paused_on'] = new \DateTime($request->is_paused_on);
            }
            if ($request->is_cancelled_on !== null) {
                $updates['is_cancelled_on'] = new \DateTime($request->is_cancelled_on);
            }
            $subscribtion->update($updates);
            return new SubscribtionsResource($subscribtion);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 202);
        }
    }

    /**
     * Remove the specified subscription from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $subscription = Subscribtion::find($id);
            $subscription->delete();
            return response()->json($subscription);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get list of subscription types (used for create/edit forms).
     *
     * @return \Illuminate\Http\Response
     */
    public function types()
    {
        return response()->json(\App\Models\Subscribtion\Type::get(['id', 'name']));
    }


    /**
     * Get servers data (used for create/edit forms).
     *
     * @return \Illuminate\Http\Response
     */
    public function servers()
    {
        return response()->json($this->getServersData());
    }

    /**
     * Check for customer data
     * If `use_registered` prop == true find and return else create new one and return
     *
     * @param  array  $customerData
     * @return \App\Models\Customer | null
     */
    protected function getCustomer($customerData)
    {
        try {
            $remoteId = intval(Customer::max('remote_id')) + 1;
            $customerData['remote_id'] = $remoteId;//rand(100000, 2000000);
            $customer = new Customer($customerData);
            $customer->save();
            return $customer;
        } catch (\Exception $e) {
            return $e->getMessage();
        } 
    }

    /**
     * Check for agent data
     * If `dont_use` prop == true return null
     * If `use_registered` prop == true find and return else create new one and return
     *
     * @param  array  $agentData
     * @return \App\Models\Agent | null
     */
    protected function getAgent($agentData)
    {
        if (isset($agentData['dont_use']) && $agentData['dont_use'] === false) {
            if (isset($agentData['use_registered']) && isset($agentData['id']) && $agentData['use_registered'] === true) {
                return Agent::find($agentData['id']);
            } else {
                try {
                    $remoteId = intval(Agent::max('remote_id')) + 1;
                    $agentData['remote_id'] = $remoteId;//rand(1000000, 20000000);
                    $agent = new Agent($agentData);
                    $agent->save();
                    return $agent;
                } catch (\Exception $e) {
                    return $e->getMessage();
                }
            }
        } else {
            return null;
        }
    }

    /**
     * Get subscribtion types list
     *
     * @param  int  $id
     * @return array
     */
    protected function getSubscribtionType($id)
    {
        try {
            $types = \App\Models\Subscribtion\Type::find($id);
            return $types;
        } catch (\Exception $e) {
            return [];
        }
    }

    public function getServer()
    {
        return null;
    }

    /**
     * Get servers data
     *
     * @param  int  $id
     * @return array
     */
    public function getServersData()
    {
        $servers = \App\Models\Server::get(['id', 'size', 'image'])->unique(function($item) {
            return $item['size'].$item['image'];
        });
        $applications = \App\Models\Server::get(['id', 'size', 'image'])->unique(function($item) {
            return $item['size'].$item['image'];
        });
        return [
            'servers' => ($servers ? $servers->transform(function($item, $key) {
                return ['id' => $key, 'name' => $item['size']];
            })->values() : []),
            'applications' => ($applications ? $applications->transform(function($item, $key) {
                return ['id' => $key, 'name' => $item['image']];
            })->values() : []),
        ];
    }
}
