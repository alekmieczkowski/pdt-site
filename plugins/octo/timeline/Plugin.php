<?php
namespace Octo\Timeline;

use Event;
use Backend;
use System\Classes\PluginBase;

class Plugin extends PluginBase
{

    public function pluginDetails()
    {
        return [
            'name'        => 'octo.timeline::lang.plugin.name',
            'description' => 'octo.timeline::lang.plugin.description',
            'author'      => 'Mindaugas Butkevicius',
            'icon'        => 'icon-comments-o',
            'homepage'    => 'https://www.octo.lt/plugins/timeline'
        ];
    }

    public function registerComponents()
    {
        return[
            'Octo\Timeline\Components\Entries' => 'entries',
        ];
    }

    public function registerNavigation()
    {
        return [
            'octo.timeline' => [
                'label'       => 'octo.timeline::lang.plugin.name',
                'url'         => Backend::url('octo/timeline/entries'),
                'icon'        => 'icon-comments-o',
                'iconSvg'     => 'plugins/octo/timeline/assets/images/timeline_plugin.svg',
                'permissions' => '',
                'order'       => 500,

                'sideMenu' => [
                    'posts' => [
                    'label'       => 'octo.timeline::lang.menu.side_entries',
                    'icon'        => 'icon-comments-o',
                    'url'         => Backend::url('octo/timeline/entries'),
                    ],
                ]

            ]
        ];
    }

    public function registerSettings()
    {
    }
}
