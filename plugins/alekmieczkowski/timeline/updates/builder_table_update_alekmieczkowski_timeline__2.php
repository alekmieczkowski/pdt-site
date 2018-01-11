<?php namespace AlekMieczkowski\Timeline\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateAlekmieczkowskiTimeline2 extends Migration
{
    public function up()
    {
        Schema::table('alekmieczkowski_timeline_', function($table)
        {
            $table->increments('id')->change();
        });
    }
    
    public function down()
    {
        Schema::table('alekmieczkowski_timeline_', function($table)
        {
            $table->integer('id')->change();
        });
    }
}
