<?php namespace AlekMieczkowski\Timeline\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteAlekmieczkowskiTimelineChapterStats extends Migration
{
    public function up()
    {
        Schema::dropIfExists('alekmieczkowski_timeline_chapter_stats');
    }
    
    public function down()
    {
        Schema::create('alekmieczkowski_timeline_chapter_stats', function($table)
        {
            $table->engine = 'InnoDB';
            $table->smallInteger('brothers');
            $table->string('als', 255);
            $table->integer('countries');
            $table->integer('true_blue');
            $table->integer('awards');
            $table->integer('pallas');
        });
    }
}
