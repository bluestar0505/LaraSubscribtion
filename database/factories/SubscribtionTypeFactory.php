<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Subscribtion\Type::class, function (Faker $faker) {
    return [
    	'name' => $faker->randomElement(['Monthly', 'Yearly']),
    	'interval_days' => $faker->randomElement([1, 5, 10, 15, 20]),
    ];
});
