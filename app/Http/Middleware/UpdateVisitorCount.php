<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Visitors;

class UpdateVisitorCount
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if a record for today's date exists in the visitor_counts table
        $date = now()->format('Y-m-d');
        $visitorCount = Visitors::where('date', $date)->first();

        // If a record doesn't exist, create one
        if (!$visitorCount) {
            $visitorCount = new Visitors();
            $visitorCount->date = $date;
        }

        // Increment the visitor count for today
        $visitorCount->count++;
        $visitorCount->save();

        return $next($request);
    }
}
