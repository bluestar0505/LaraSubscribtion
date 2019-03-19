<?php

namespace App\Models\Subscribtion;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
	protected $table = 'subscribtion_types';

	protected $fillable = [
		'name',
		'interval_days',
	];
}
