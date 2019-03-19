<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAgentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->unsignedInteger('remote_id')->unique();
            $table->boolean('is_active')->default(false);
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('address');
            $table->string('bank_account_iban');
            $table->string('bank_name');
            $table->string('bank_branch');
            $table->string('location');
            $table->double('commission_agreed');
            $table->unsignedInteger('commission_count')->default(12);
            $table->string('commission_type');
            $table->dateTime('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agents');
    }
}
