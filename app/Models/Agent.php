<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{
	protected $table = 'agents';
	protected $commisionTypes = [
		'flat' => 'Flat rate',
		'percentage' => 'Percentage',
	];
	protected $fillable = [
		'remote_id',
		'name',
		'is_active',
		'email',
		'phone',
		'address',
		'bank_account_iban',
		'bank_name',
		'bank_branch',
		'location',
		'commission_agreed',
		'commission_count',
		'commission_type',
		'active',
	];

	/**
	 * Set type of commission
	 */
	public function setCommissionType($commissionTypeKey)
	{
		if (!array_key_exists($commissionTypeKey, $this->commissionTypes)) {
			throw new Exception('Commission type "' . $commissionTypeKey . '" not registered...', 1);
		}
		$this->attributes['commission_type'] = $commissionTypeKey;
	}

	/**
	 * Get type of commission
	 */
	public function getCommissionType()
	{
		return $this->attributes['commission_type'];
	}

	/**
	 * Relation for subscribtions
	 */
	public function subscribtions()
	{
		return $this->hasMany('App\Models\Subscribtion', 'id', 'agent_id');
	}
}
