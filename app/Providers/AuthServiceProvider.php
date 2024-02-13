<?php

namespace App\Providers;

use App\Models\Admins;
use Illuminate\Support\Facades\Gate;
use Illuminate\Auth\Access\Response;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        // Gate::define('viewWebSocketsDashboard', function ($user = null) {
        //     return $user != null;
        // });
        Gate::define('isSuperAdmin', function (Admins $user) {
           return $user->isSuperAdmin()
                ? Response::allow()
                : Response::deny('You must be a super administrator.');
        });
    }
}
