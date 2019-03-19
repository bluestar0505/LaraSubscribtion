<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commissions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('amount');
            $table->boolean('is_settled')->default(false);
            $table->dateTime('is_settled_on');
            $table->timestamps();
            
            /*$table->foreign('cycle_id')
                ->references('id')
                ->on('subscribtion_cycles')
                ->onDelete('cascade');*/
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('commissions');
    }
}
