<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscribtionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::enableForeignKeyConstraints();
        Schema::create('subscribtions', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->unsignedInteger('remote_id')->unique();
            $table->integer('customer_id')->unsigned()->nullable();
            $table->integer('agent_id')->unsigned()->nullable();
            $table->integer('subscribtion_type')->unsigned()->nullable();
            // application
            $table->boolean('is_paused')->default(false);
            $table->dateTime('is_paused_on');
            $table->boolean('is_cancelled')->default(false);
            $table->dateTime('is_cancelled_on');
            $table->timestamps();
            $table->foreign('customer_id')
                ->references('id')
                ->on('customers')
                ->onDelete('cascade');
            $table->foreign('agent_id')
                ->references('id')
                ->on('agents')
                ->onDelete('cascade');
            $table->foreign('subscribtion_type')
                ->references('id')
                ->on('subscribtion_types')
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
        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Schema::dropIfExists('subscribtions');
        DB::statement('SET FOREIGN_KEY_CHECKS=1');
    }
}
