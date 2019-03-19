<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Subscribtion::class, function (Faker $faker) {
    $agents = factory(App\Models\Agent::class, 20)->create();
    $types = \App\Models\Subscribtion\Type::all();
    return [
        'remote_id' => rand(10, 1000000),
        'customer_id' => function() {
            return factory(App\Models\Customer::class)->create()->id;
        },
        'agent_id' => function() use ($faker, $agents) {
            if ($faker->boolean(30)) {
                return ($faker->randomElement($agents))->id;
            }
            return factory(App\Models\Agent::class)->create()->id;  
        },
        'subscribtion_type' => function() use ($faker, $types) {
            return $types[intval($faker->boolean(30))];
        },
        'is_paused' => $faker->boolean(50),
        'is_paused_on' => $faker->dateTime(),
        'is_cancelled' => $faker->boolean(50),
        'is_cancelled_on' => $faker->dateTime(),
    ];
});
