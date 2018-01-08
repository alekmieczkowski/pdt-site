<?php namespace AlekMieczkowski\ChapterStatistics\Models;

use Model;

/**
 * Model
 */
class Statistics extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'alekmieczkowski_chapterstatistics_';
}
