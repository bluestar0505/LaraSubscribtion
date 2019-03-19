<?php

use Faker\Generator as Faker;

$factory->define(\App\Models\Agent::class, function (Faker $faker) {
    return [
        'remote_id' => rand(10, 1000000),
        'name' => $faker->name,
        'is_active' => $faker->randomElement([true, false]),
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->tollFreePhoneNumber,
        'address' => $faker->address,
        'bank_account_iban' => $faker->iban('US'),
        'bank_name' => $faker->company,
        'bank_branch' => $faker->catchPhrase,
        'location' => $faker->address,
        'commission_agreed' => $faker->randomFloat(2, 10, 100),
        'commission_count' => $faker->numberBetween(12, 200),
        'commission_type' => $faker->randomElement(['flat', 'percentage']),
        'active' => $faker->dateTime,
    ];
});
