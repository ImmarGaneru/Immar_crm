<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::insert([
            [
                'name' => 'SmartNet 10 Mbps',
                'description' => 'Layanan internet broadband dengan kecepatan hingga 10 Mbps. Cocok untuk penggunaan rumah tangga.',
                'price' => 200000,
            ],
            [
                'name' => 'SmartNet 50 Mbps',
                'description' => 'Paket internet cepat 50 Mbps, cocok untuk UMKM dan kantor kecil.',
                'price' => 500000,
            ],
            [
                'name' => 'SmartBiz 100 Mbps',
                'description' => 'Paket khusus untuk bisnis dengan kecepatan hingga 100 Mbps dan SLA tinggi.',
                'price' => 1200000,
            ],
        ]);
    }
}
