<?php namespace AlekMieczkowski\Timeline\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAlekmieczkowskiTimelineChapterStats extends Migration
{
    public function up()
    {
        Schema::create('alekmieczkowski_timeline_chapter_stats', function($table)
        {
            $table->engine = 'InnoDB';
            $table->smallInteger('brothers');
            $table->string('als');
            $table->integer('countries');
            $table->integer('true_blue');
            $table->integer('awards');
            $table->integer('pallas');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('alekmieczkowski_timeline_chapter_stats');
    }
}
