<?php
namespace Octo\Timeline\Components;

use Cms\Classes\ComponentBase;

/**
* Plugin Models
*/
use Octo\Timeline\Models\Entries as Entry;


class Entries extends ComponentBase
{

    public function componentDetails()
    {
        /**
         * Component details.
         */
        return [
            'name'        => 'Timeline',
            'description' => 'Display timeline entries.'
        ];
    }
	
    public function defineProperties()
    {
        return [
		   
        ];
    }
	
    public function onRun()
    {
        /**
         * Init component
         */
        $this->page['entries'] = $this->getEntries();
    }

    public function getEntries() 
    {
        /**
         * Getting entries from database and returning to a partial.
         */
        $result = [];
        $today = date('Y-m-d');
        $entries = Entry::where('public', 1)
            ->where('date', '<=', $today)
            ->orderBy('date', 'desc')
            ->orderBy('time', 'desc')
            ->get();
        foreach($entries as $entry)
        {
            $result[] = $entry;
        }
        return $result;
    }

}
