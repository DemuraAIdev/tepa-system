<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Items;

class Keluars extends Model
{
    use HasFactory;
    protected $fillable = ['admin_id','item_id', 'jumlah', "total"];

    public function item()
    {
        return $this->belongsTo(Items::class, 'item_id', 'id');
    }
}
