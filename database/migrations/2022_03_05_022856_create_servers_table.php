<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('subscribtion_id')->unsigned()->nunllable();
            $table->string('application');
            $table->string('location');
            $table->string('size');
            $table->string('image');
            $table->string('snapshot');
            $table->string('domain');
            $table->string('ip');
            $table->boolean('is_active')->default(false);
            $table->timestamps();
            $table->foreign('subscribtion_id')
                ->references('id')
                ->on('subscribtions')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servers');
    }
}
