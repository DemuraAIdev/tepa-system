<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Audits;

class LogSuccessfulLogout
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */


    public function handle($event)
    {
        $audit = new Audits();
        $audit->user_id = $event->user->id;
        $audit->action = 'logout';
        $audit->timestamp = now();
        $audit->save();
    }
    
}
