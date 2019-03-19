<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
	protected $table = 'customers';

	protected $fillable = [
		'remote_id',
		'email',
		'phone',
		'name',
		'company',
		'industry',
	];

	public function subscribtions()
	{
		return $this->hasMany('App\Models\Subscribtion', 'id', 'customer_id');
	}
}
