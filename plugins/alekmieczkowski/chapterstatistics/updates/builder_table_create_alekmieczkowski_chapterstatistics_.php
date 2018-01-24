<?php namespace AlekMieczkowski\ChapterStatistics\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateAlekmieczkowskiChapterstatistics extends Migration
{
    public function up()
    {
        Schema::create('alekmieczkowski_chapterstatistics_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->smallInteger('brothers');
            $table->integer('als');
            $table->smallInteger('countries');
            $table->smallInteger('true_blue');
            $table->integer('awards');
            $table->smallInteger('pallas');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('alekmieczkowski_chapterstatistics_');
    }
}
