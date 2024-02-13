<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Gate;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Models\Audits;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {


        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
       

        $request->authenticate();

        $request->session()->regenerate();
         // event login and logout
         $admin = Auth::guard('web')->user();

         $audits = new Audits();
         $audits->admin_id = $admin->id;
         $audits->action = 'login';
         $audits->timestamps = now();
         $audits->save();

        return Gate::allows('isSuperAdmin') ? redirect('/dashboard') : redirect('/sellingz');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // event login and logout
        $admin = Auth::guard('web')->user();

        $audits = new Audits();
        $audits->admin_id = $admin->id;
        $audits->action = 'logout';
        $audits->timestamps = now();
        $audits->save();

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
