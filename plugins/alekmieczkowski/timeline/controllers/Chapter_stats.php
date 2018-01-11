<?php namespace AlekMieczkowski\Timeline\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Chapter_stats extends Controller
{
    public $implement = [
            ];
    
    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('AlekMieczkowski.Timeline', 'Chapter Stats');
    }
}
