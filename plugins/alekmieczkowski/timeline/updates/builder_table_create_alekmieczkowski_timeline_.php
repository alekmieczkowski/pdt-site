<?php namespace AlekMieczkowski\Timeline\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAlekmieczkowskiTimeline extends Migration
{
    public function up()
    {
        Schema::create('alekmieczkowski_timeline_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->text('event');
            $table->date('date');
            $table->text('description');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('alekmieczkowski_timeline_');
    }
}
