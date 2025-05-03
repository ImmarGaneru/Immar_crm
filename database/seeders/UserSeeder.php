<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin PT Smart',
            'email' => 'admin@smart.com',
            'roles' => 'admin',
        ]);
        User::factory()->create([
            'name' => 'Manager PT Smart',
            'email' => 'manager@smart.com',
            'roles' => 'manager',
        ]);
        User::factory()->create([
            'name' => 'Sales PT Smart',
            'email' => 'sales@smart.com',
            'roles' => 'sales',
        ]);
        User::factory()->count(5)->create([
            'roles' => 'sales',
        ]);
    }
}
