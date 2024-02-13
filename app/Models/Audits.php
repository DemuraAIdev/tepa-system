<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Admins;

class Audits extends Model
{
    use HasFactory;
    protected $fillable = ['admin_id','login', 'logout'];

    public function admin()
    {
        return $this->belongsTo(Admins::class, 'admin_id');
    }
}
