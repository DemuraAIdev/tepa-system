<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Masuks;
use App\Models\Keluars;
use App\Models\Items;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use App\Http\Requests\StoreTransactionRequest;
use App\Models\Order;
use App\Models\Transaction;


class SellingController extends Controller
{
    public function index()
    {
        return Inertia::render('Admins/SellingTabs', [
            'items' => Items::get(),
            'kode_inv' => IdGenerator::generate(['table' => 'transactions', 'field' => 'kode_inv', 'length' => 10, 'prefix' => 'INV-']),
        ]);
    }

    public function store(StoreTransactionRequest $request)
    {

        $validated = $request->validated();

        // $validated now contains the validated data from the request
        // You can now proceed with your logic for storing the transaction


        // for each item in the items array, you can create a new Order
        foreach ($validated['items'] as $item) {
            Order::create([
                'kode_inv' => $validated['kode_inv'],
                'nama_barang' => $item['nama_barang'],
                'qty' => $item['qty'],
                'harga_jual' => $item['harga_jual'],
                'subtotal' => $item['subtotal'],

            ]);

            Keluars::create([
                'admin_id' => $validated['user_id'],
                'item_id' => $item['item_id'],
                'jumlah' => $item['qty'],
                'total' => Items::where('id', $item['item_id'])->first()->jumlah - $item['qty'],
            ]);

            Items::where('id', $item['item_id'])->decrement('jumlah', $item['qty']);
        }


        $transaction = Transaction::create([
            'kode_inv' => $validated['kode_inv'],
            'total' => $validated['total'],
        ]);

        // return response true
        return response()->json(['success' => true, 'transaction_id' => $transaction->id]);

    }


}
