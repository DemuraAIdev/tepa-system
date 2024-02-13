<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use App\Models\Items;
use Inertia\Inertia;

class ItemsController extends Controller
{
    public function index(Request $request)
    {
        $items = Items::query()
            ->when($request->query('search'), function ($query, $search) {
                return $query->where('name', 'like', '%'.$search.'%');
            })
            ->get();
    
        return Inertia::render('Supplies', [
            'items' => $items,
        ]);
    }

    public function latest5()
    {
        $items = Items::latest()->take(5)->get();
        return Inertia::render('Welcome', [
            'items' => $items,
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
