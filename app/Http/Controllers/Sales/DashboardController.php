<?php

namespace App\Http\Controllers\Sales;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $user = Auth::user();

        $leadCount = Lead::where('created_by', $user->id)->count();

        $acceptedCount = Project::where('sales_id', $user->id)->where('status', 'accepted')->count();
        $rejectedCount = Project::where('sales_id', $user->id)->where('status', 'rejected')->count();

        return Inertia::render('Sales/Dashboard', [
            'leadCount' => $leadCount,
            'acceptedCount' => $acceptedCount,
            'rejectedCount' => $rejectedCount,
        ]);
    }
}
