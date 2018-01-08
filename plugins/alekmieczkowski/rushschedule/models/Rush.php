<?php namespace AlekMieczkowski\RushSchedule\Models;

use Model;

/**
 * Model
 */
class Rush extends Model
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
    public $table = 'alekmieczkowski_rushschedule_';

    //attach image
    public $attachOne = [
        'schedule' => 'System\Models\File'
    ];
}
