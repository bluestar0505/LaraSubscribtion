<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Customer::class, function (Faker $faker) {
    return [
        'remote_id' => rand(10, 1000000),
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->tollFreePhoneNumber,
        'name' => $faker->name,
        'company' => $faker->company,
        'industry' => $faker->bs,
    ];
});
