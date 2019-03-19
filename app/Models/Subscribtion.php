<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscribtion extends Model
{
	protected $table = 'subscribtions';

	protected $fillable = [
		'remote_id',
		'is_paused',
		'is_paused_on',
		'is_cancelled',
		'is_cancelled_on',
		'customer_id',
		'agent_id',
		'subscribtion_type',
	];

	public function customer()
	{
		return $this->belongsTo('App\Models\Customer', 'customer_id', 'id');
	}

	public function agent()
	{
		return $this->belongsTo('App\Models\Agent', 'agent_id', 'id');
	}

	public function subscribtionType()
	{
		return $this->belongsTo('App\Models\Subscribtion\Type', 'subscribtion_type', 'id');
	}

	public function cycles()
	{
		return $this->hasMany('App\Models\Subscribtion\Cycle');
	}

	public function server()
	{
		return $this->hasOne('App\Models\Server');
	}
}
