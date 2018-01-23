<?php namespace AlekMieczkowski\RushSchedule\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Rush_graphic extends Controller
{
    public $implement = [
        'Backend\Behaviors\ListController','Backend\Behaviors\FormController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('AlekMieczkowski.RushSchedule', 'Rush Schedule', 'graphic');
    }
}
