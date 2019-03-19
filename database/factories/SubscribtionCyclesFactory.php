<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Subscribtion\Cycle::class, function (Faker $faker) {
	$subscribtions = \App\Models\Subscribtion::all();
    return [
    	'subscribtion_id' => function() use ($faker, $subscribtions) {
    		return $faker->randomElement($subscribtions)->id;
    	},
    	'cycle_count' => $faker->randomDigitNotNull,
    	'cycle_start' => $faker->dateTimeBetween('-30 days', '-3 days'),
    	'cycle_end' => $faker->dateTimeBetween('-3 days', '+10 days'),
    	'cycle_amount' => $faker->randomFloat(2),
    	'cycle_paid' => $faker->boolean(30),
    	'cycle_paid_on' => $faker->dateTimeBetween('-3 days', 'now'),
    	'cycle_ended' => $faker->boolean(20),
    	'cycle_ended_on' => $faker->dateTimeBetween('-3 days', 'now'),
    	'cycle_cancelled' => $faker->boolean(30),
    	'cycle_cancelled_on' => $faker->dateTimeBetween('-3 days', 'now'),
    ];
});
