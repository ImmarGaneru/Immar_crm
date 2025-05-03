<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index(){
        $leads = Lead::with(['projects' => function($query){
            $query->where('status', 'approved')->with('product');
        }])
        ->whereHas('projects', function($query){
            $query->where('status', 'approved');
        })
        ->paginate(10);

        return Inertia::render('Customers/Index', [
            'leads' => $leads,
        ]);
    }
}
