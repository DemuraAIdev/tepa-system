<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use App\Models\Items;
use App\Models\Keluars;
use App\Models\Masuks;
use App\Models\Visitors;
use App\Models\Audits;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Illuminate\Http\Response;

class DashboardController extends Controller
{
    public function index(Request $request)

    {
       

        $audit = Audits::with('admin')->latest()->take(8)->get();

        $currentMonth = now()->format('m'); // Get the current month
        $visitors = Visitors::whereMonth('created_at', $currentMonth)
            ->selectRaw('day(created_at) as day, sum(count) as visitor_count')
            ->groupBy('day')
            ->get();
    
        $formattedVisitors = $visitors->map(function ($visitor) {
            return [
                'day' => $visitor->day,
                'Visitor' => $visitor->visitor_count,
            ];
        });



        $items = Items::latest()->take(8)->get();
        $year = date('Y');
        $masuks = Masuks::whereYear('created_at', $year)->get();
        $keluars = Keluars::whereYear('created_at', $year)->get();


        $monthlyData = [];
        for ($month = 1; $month <= 12; $month++) {
            $monthlyMasuk = $masuks->filter(function ($masuk) use ($month) {
                return $masuk->created_at->month === $month;
            })->avg('jumlah');

            $monthlyKeluar = $keluars->filter(function ($keluar) use ($month) {
                return $keluar->created_at->month === $month;
            })->avg('jumlah');

            $monthName = date("F", mktime(0, 0, 0, $month, 1, $year));

            $monthlyData[] = [
                'name' => $monthName,
                'Inward' => $monthlyMasuk,
                'Outward' => $monthlyKeluar,
            ];
        }


        return Inertia::render('Admins/Dashboard', [
            'items' => $items,
            'audit' => $audit,
            'monthlyData' => $monthlyData,
            'visitors' => $formattedVisitors,
        ]);
    }
}
