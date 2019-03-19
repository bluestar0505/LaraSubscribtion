<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscribtionCyclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();
        Schema::create('subscribtion_cycles', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->unsignedInteger('cycle_count')->default(0);
            $table->integer('subscribtion_id')->unsigned()->nullable();
            $table->dateTime('cycle_start');
            $table->dateTime('cycle_end');
            $table->double('cycle_amount')->default(0.00);
            $table->boolean('cycle_paid')->default(false);
            $table->dateTime('cycle_paid_on');
            $table->boolean('cycle_ended')->default(false);
            $table->dateTime('cycle_ended_on');
            $table->boolean('cycle_cancelled')->default(false);
            $table->dateTime('cycle_cancelled_on');
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
        Schema::dropIfExists('subscribtion_cycles');
    }
}
