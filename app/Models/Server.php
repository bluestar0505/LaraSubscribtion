<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
	protected $table = 'servers';

	protected $fillable = [
		'location',
		'size',
		'image',
		'snapshot',
		'domain',
		'ip',
		'is_active',
		'subscribtion_id',
	];

	public function subscribtion()
	{
		return $this->belongsTo('App\Models\Subscribtion', 'subscribtion_id', 'id');
	}
}
