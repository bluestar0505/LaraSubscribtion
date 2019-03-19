<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('users')->insert([
    		'name' => 'Admin',
    		'email' => 'admin@email.com',
    		'password' => bcrypt('admin'),
    	]);

        DB::table('subscribtion_types')->insert([
            'name' => 'Monthly',
            'interval_days' => 30,
        ]);

        DB::table('subscribtion_types')->insert([
            'name' => 'Yearly',
            'interval_days' => 365,
        ]);

        factory(\App\Models\Application::class, 50)->create();
        factory(\App\Models\Subscribtion::class, 50)->create();
        factory(\App\Models\Subscribtion\Cycle::class, 150)->create();
        factory(\App\Models\Server::class, 50)->create();
    }
}
