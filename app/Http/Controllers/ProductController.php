<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use App\Models\Items;
use App\Models\Masuks;
use App\Models\Keluars;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // items all
        $items = Items::orderBy('name', 'asc')->paginate(10);
        return Inertia::render('Admins/Product', [
            'items' => $items,
        ]);
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'name' => 'required|max:255',
            'image_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2040',
            'jenis' => 'required',
            'harga' => 'required|numeric|min:0|max:99999999',
            'productid' => 'required|unique:items,barcode',
            'jumlah' => 'required|numeric|min:0',
        ]);



        // Check if a new image was uploaded
        if ($request->hasFile('image_url')) {
            // Store the new image and update the image_url field
            $imagePath = $request->file('image_url');
            $filename = date('YmdHi') . $imagePath->getClientOriginalName();
            $imagePath->move(public_path('Image/items'), $filename);
            $request->image_url = $filename;
        }

        // store
        Items::create([
            'name' => $request->name,
            'harga' => $request->harga,
            'jumlah' => $request->jumlah,
            'barcode' => $request->productid,
            'jenis' => $request->jenis,
            'image_url' => $request->image_url,
        ]);

        // redirect
        return to_route('product');
    }

    public function update(Request $request, Items $id)
    {
        
        if ($request->jumlah > $id->jumlah) {
            Masuks::create([
                'admin_id' => $request->user()->id,
                'item_id' => $id->id,
                'jumlah' => $request->jumlah - $id->jumlah,
                'total' => $request->jumlah ?? $id->jumlah,
            ]);
        } elseif ($request->jumlah < $id->jumlah) {
            Keluars::create([
                'admin_id' => $request->user()->id,
                'item_id' => $id->id,
                'jumlah' => $id->jumlah - $request->jumlah,
                'total' => $request->jumlah ?? $id->jumlah,
            ]);
        } elseif ($request->jumlah == $id->jumlah) {
            // Do nothing
        }

        // Update the item attributes only if the request is not null
        $id->name = $request->name ?? $id->name;
        $id->harga = $request->harga ?? $id->harga;
        $id->jumlah = $request->jumlah ?? $id->jumlah;
        $id->barcode = $request->productid ?? $id->barcode;
        $id->jenis = $request->jenis ?? $id->jenis;

        // Check if a new image was uploaded
        if ($request->hasFile('image_url')) {
            // Store the new image and update the image_url field
            $imagePath = $request->file('image_url');
            $filename = date('YmdHi') . $imagePath->getClientOriginalName();
            $imagePath->move(public_path('Image/items'), $filename);
            $id->image_url = $filename;
        }

        $id->save();

        // Redirect
        return redirect()->back()->with('message', 'Product updated.');
    }


    public function destroy($id)
    {
        // delete
        $item = Items::find($id);
        $item->delete();

        // redirect
        return redirect()->back()->with('message', 'Product deleted.');
    }
}
