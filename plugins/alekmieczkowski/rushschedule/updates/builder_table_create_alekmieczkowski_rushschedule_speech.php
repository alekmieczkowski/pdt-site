<?php namespace AlekMieczkowski\RushSchedule\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAlekmieczkowskiRushscheduleSpeech extends Migration
{
    public function up()
    {
        Schema::create('alekmieczkowski_rushschedule_speech', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->text('speech');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('alekmieczkowski_rushschedule_speech');
    }
}
