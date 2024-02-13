<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Items;
use App\Models\Masuks;
use App\Models\Keluars;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{


    public function index()
    {
        $masuk = Masuks::select('id', 'admin_id', 'item_id', 'total', 'jumlah')
            ->addSelect(\DB::raw("'masuk' as type"))
            ->addSelect(\DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as formatted_created_at"))
            ->get();
    
        $keluar = Keluars::select('id', 'admin_id', 'item_id', 'total', 'jumlah')
            ->addSelect(\DB::raw("'keluar' as type"))
            ->addSelect(\DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as formatted_created_at"))
            ->get();
    
        $mergedData = $masuk->concat($keluar)->sortBy('formatted_created_at');
    
        // Connect with the Items table
        $mergedData->load('item');
    
        return Inertia::render('Admins/Report', [
            'data' => $mergedData,
        ]);
    }
    
    
    
    
    
}
