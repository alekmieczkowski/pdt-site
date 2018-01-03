<?php namespace AlekMieczkowski\Timeline\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateAlekmieczkowskiTimeline extends Migration
{
    public function up()
    {
        Schema::table('alekmieczkowski_timeline_', function($table)
        {
            $table->integer('id');
            $table->primary(['id']);
        });
    }
    
    public function down()
    {
        Schema::table('alekmieczkowski_timeline_', function($table)
        {
            $table->dropPrimary(['id']);
            $table->dropColumn('id');
        });
    }
}
