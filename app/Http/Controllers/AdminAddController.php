<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Admins;

class AdminAddController extends Controller
{
    public function index()
    {
        $admins = Admins::all();
        return Inertia::render('Admins/AddAdmin', [
            'admins' => $admins,
        ]);
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:admins,email',
            'password' => 'required|min:8',
            'role' => 'required',
        ]);

        // store
        Admins::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password),
            'role' => $request->role,
        ]);

        // redirect
        return to_route('adminadd');
    }

    public function destroy(Admins $id)
    {
        $id->delete();
        return back();
    }

    public function update(Request $request, Admins $id)
    {
        // if null use data before
        $name = $request->name ?? $id->name;
        $email = $request->email ?? $id->email;
        $password = $request->password ?? $id->password;
        $role = $request->role ?? $id->role;

        // validation
        $request->validate([
            'name' => 'max:255',
            'email' => 'unique:admins,email,' . $id->id,
        ]);

        // store
        $id->update([
            'name' => $name,
            'email' => $email,
            'password' => \Hash::make($password),
            'role' => $role,
        ]);

        // redirect
        return to_route('adminadd');
    }
}
