<?php
namespace Octo\Timeline\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class UpdateUserColumn extends Migration
{
    public function up()
    {
        Schema::table('octo_timeline_entries', function($table)
        {
            $table->integer('user')->default(0)->change();
        });
    }
    
    public function down()
    {
        Schema::table('octo_timeline_entries', function($table)
        {
            $table->integer('user')->default(null)->change();
        });
    }
}
