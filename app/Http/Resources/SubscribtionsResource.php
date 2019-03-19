<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubscribtionsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'remote_id' => $this->remote_id,
            'customer' => $this->customer,
            'agent' => $this->agent,
            'subscribtion_type' => $this->subscribtionType,
            'cycles' => $this->cycles,
            'server' => $this->server,
            'is_paused' => ($this->is_paused ? true : false),
            'is_paused_on' => $this->is_paused_on,
            'is_cancelled' => ($this->is_cancelled ? true : false),
            'is_cancelled_on' => $this->is_cancelled_on,
            'created_at' => $this->created_at,
        ];
    }
}
