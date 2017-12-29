<?php
namespace Octo\Timeline\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateTimelineEntriesTable extends Migration
{
    public function up()
    {
        Schema::create('octo_timeline_entries', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->date('date');
            $table->time('time');
            $table->integer('user');
            $table->string('title', 250);
            $table->text('text');
            $table->boolean('public')->default(1);
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('octo_timeline_entries');
    }
}
