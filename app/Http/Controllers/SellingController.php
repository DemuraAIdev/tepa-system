<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Masuks;
use App\Models\Keluars;
use App\Models\Items;


class SellingController extends Controller
{
    public function index()
    {
        return Inertia::render('Admins/SellingTabs');
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'productid' => 'required',
            'jumlah' => 'required|numeric|min:0',
        ]);

        // store
        if ($request->type == 'in') {
            $item = Items::where('barcode', $request->productid)->first();
            Masuks::create([
                'admin_id' => $request->user()->id,
                'item_id' => $item->id,
                'jumlah' => $request->jumlah,
                'total' => $item->jumlah + $request->jumlah,
            ]);

            $item->jumlah = $item->jumlah + $request->jumlah;
            $item->save();
        } else {
            $item = Items::where('barcode', $request->productid)->first();
            Keluars::create([
                'admin_id' => $request->user()->id,
                'item_id' => $item->id,
                'jumlah' => $request->jumlah,
                'total' => $item->jumlah - $request->jumlah,
            ]);
            $item->jumlah = $item->jumlah - $request->jumlah;
            $item->save();
        }

        // redirect
        return to_route('selling');
    }
}
