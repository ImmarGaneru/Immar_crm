<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $productCount = Product::count();
        $userCount = User::count();

        return Inertia::render('Admin/Dashboard', [
            'productCount' => $productCount,
            'userCount' => $userCount,
        ]);
    }
}
