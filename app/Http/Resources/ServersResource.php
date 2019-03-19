<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServersResource extends JsonResource
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
            'application' => $this->application,
            'location' => $this->location,
            'size' => $this->size,
            'image' => $this->image,
            'snapshot' => $this->snapshot,
            'domain' => $this->domain,
            'ip' => $this->ip,
            'is_active' => ($this->is_active ? true : false),
        ];
    }
}
