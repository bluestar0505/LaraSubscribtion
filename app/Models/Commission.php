<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commission extends Model
{
	protected $table = 'commissions';

	protected $fillable = [
		'amount',
		'is_settled',
		'is_settled_on',
	];

	public function cycle()
	{
		//???
	}

}
