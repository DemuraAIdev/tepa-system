<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('masuks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->constrained(
                table: 'admins', indexName: 'admin_masuk'
            )->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('item_id')->constrained(
                table: 'items', indexName: 'items_id_masuk'
            )->onUpdate('cascade')->onDelete('cascade');
            $table->bigInteger('jumlah');
            $table->bigInteger('total');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('masuks');
    }
};
