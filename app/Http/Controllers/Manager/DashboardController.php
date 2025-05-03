<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $customerCount = Lead::whereHas('projects', function ($query) {
            $query->where('status', 'approved');
        })->count();

        $projectCount = Project::count();

        return Inertia::render('Manager/Dashboard', [
            'customerCount' => $customerCount,
            'projectCount' => $projectCount,
        ]);
    }
}
