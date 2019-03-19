<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Server::class, function (Faker $faker) {
	$subscribtions = \App\Models\Subscribtion::all();
    return [
    	'subscribtion_id' => function() use ($faker, $subscribtions) {
    		return $faker->randomElement($subscribtions)->id;
    	},
    	'application' => $faker->catchPhrase,
        'location' => sprintf('%s, %s', $faker->city, $faker->country),
        'size' => sprintf('%sGB SSD, %sGB RAM, %sx CPU', $faker->randomDigitNotNull, $faker->randomDigitNotNull, $faker->randomDigitNotNull),
        'image' => $faker->randomElement([
        	'Oracle WebLogic Application Server',
        	'Apache Tomcat',
        	'Microsoft IIS',
        	'WebSphere Application Server',
        	'Red Hat JBoss Enterprise Application Platform',
        	'Oracle GlassFish Server',
        	'Microsoft Application Server',
        	'Magic xpa Application Platform',
        	'SAP NetWeaver Application Server',
        	'TIBCO Service Grid',
        ]),
        'snapshot' => $faker->sha1 . '-some.img',
        'domain' => $faker->domainName,
        'ip' => $faker->ipv4,
        'is_active' => $faker->boolean(50),
    ];
});
