<?php namespace AlekMieczkowski\RushSchedule\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateAlekmieczkowskiRushscheduleSpeech extends Migration
{
    public function up()
    {
        Schema::table('alekmieczkowski_rushschedule_speech', function($table)
        {
            $table->text('chair_name');
            $table->integer('bond');
        });
    }
    
    public function down()
    {
        Schema::table('alekmieczkowski_rushschedule_speech', function($table)
        {
            $table->dropColumn('chair_name');
            $table->dropColumn('bond');
        });
    }
}
