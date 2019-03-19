<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CustomersResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'remote_id' => $this->remote_id,
            'email' => $this->email,
            'phone' => $this->phone,
            'name' => $this->name,
            'company' => $this->company,
            'industry' => $this->industry,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
