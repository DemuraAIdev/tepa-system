<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Admins::factory()->create([
            'name' => 'Admin',
            'email' => 'test@test.com',
            'password' => bcrypt('12345678'),
            'role' => 'superadmin',
        ]);

        \App\Models\Admins::factory()->create([
            'name' => 'Admin',
            'email' => 'test2@test.com',
            'password' => bcrypt('12345678'),
            'role' => 'admin',
        ]);
    }
}
