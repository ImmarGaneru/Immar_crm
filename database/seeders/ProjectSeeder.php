<?php

namespace Database\Seeders;

use App\Models\Lead;
use App\Models\Product;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $leads = Lead::all();
        $products = Product::all();
        $salesUsers = User::where('roles', 'sales')->get();
        $managerUsers = User::where('roles', 'manager')->get();

        if ($leads->isEmpty() || $products->isEmpty() || $salesUsers->isEmpty() || $managerUsers->isEmpty()) {
            $this->command->warn('Pastikan leads, products, sales, dan manager sudah tersedia sebelum menjalankan seeder ini.');
            return;
        }

        for ($i = 0; $i < 12; $i++) {
            Project::create([
                'lead_id' => $leads->random()->id,
                'product_id' => $products->random()->id,
                'sales_id' => $salesUsers->random()->id,
                'approved_by' => $managerUsers->random()->id,
                'status' => fake()->randomElement(['pending', 'approved', 'rejected']),
            ]);
        }
    }
}
