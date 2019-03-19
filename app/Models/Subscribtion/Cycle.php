<?php

namespace App\Models\Subscribtion;

use Illuminate\Database\Eloquent\Model;

class Cycle extends Model
{
	protected $table = 'subscribtion_cycles';

	protected $fillable = [
		'subscribtion_id',
		'cycle_count',
		'cycle_start',
		'cycle_end',
		'cycle_amount',
		'cycle_paid',
		'cycle_paid_on',
		'cycle_ended',
		'cycle_ended_on',
		'cycle_cancelled',
		'cycle_cancelled_on',
	];

	public function subscribtion()
	{
		return $this->belongsTo('App\Models\Subscribtion', 'subscribtion_id', 'id');
	}
}
