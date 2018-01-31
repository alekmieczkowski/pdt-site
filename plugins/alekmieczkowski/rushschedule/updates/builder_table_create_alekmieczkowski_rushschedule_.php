<?php namespace AlekMieczkowski\RushSchedule\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAlekmieczkowskiRushschedule extends Migration
{
    public function up()
    {
        Schema::create('alekmieczkowski_rushschedule_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('name');
            $table->dateTime('date');
            $table->text('description');
            $table->text('location');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('alekmieczkowski_rushschedule_');
    }
}
