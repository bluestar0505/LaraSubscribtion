<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AgentsResource extends JsonResource
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
            'name' => $this->name,
            'is_active' => $this->is_active,
            'email' => $this->email,
            'phone' => $this->phone,
            'address' => $this->address,
            'bank_account_iban' => $this->bank_account_iban,
            'bank_name' => $this->bank_name,
            'bank_branch' => $this->bank_branch,
            'location' => $this->location,
            'commission_type' => $this->commission_type,
            'commission_agreed' => $this->commission_agreed,
            'commission_count' => $this->commission_count,
            'active' => $this->active,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
