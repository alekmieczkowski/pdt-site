<?php
namespace Octo\Timeline\Models;

use Model;

/**
 * Model
 */
class Entries extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /*
     * Validation
     */
    public $rules = [
        'title' => 'required|string',
        'text' => 'required',
        'date' => 'required',
        'time' => 'required',
    ];

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'octo_timeline_entries';
}