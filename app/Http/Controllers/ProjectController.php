<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Models\Product;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index(){
        $user = Auth::user();

        $projects = Project::with(['lead', 'product', 'sales', 'approvedBy'])
            ->when($user->roles === 'sales', function ($query) use ($user) {
                $query->where('sales_id', $user->id);
            })
            ->latest()
            ->paginate(10);

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
        ]);
    }

    public function create(){
        return Inertia::render('Projects/Create', [
            'leads' => Lead::where('created_by', Auth::id())->get(),
            'products' => Product::all(),
        ]);
    }

    public function store(Request $request){
        if (Auth::user()->roles !== 'sales') {
            abort(403, 'Unauthorized action.');
        }
        $request->validate([
            'lead_id' => ['required', Rule::exists('leads', 'id')->where('created_by', Auth::id())],
            'product_id' => 'required|exists:products,id',

        ]);

        Project::create([
            'lead_id' => $request->lead_id,
            'product_id' => $request->product_id,
            'sales_id' => Auth::id(),
            'status' => 'pending',
        ]);

        return redirect()->route('projects.index')->with('message', 'Project berhasil dibuat.');
    }

    public function edit(Project $project)
    {
        $user = Auth::user();

        if ($user->roles !== 'sales' || $project->sales_id !== $user->id || $project->status !== 'pending') {
            abort(403, 'Unauthorized action.');
        }

        return Inertia::render('Projects/Edit', [
            'project' => $project,
            'leads' => Lead::where('created_by', $user->id)->get(),
            'products' => Product::all(),
        ]);
    }

    public function update(Request $request, Project $project){
        $user = Auth::user();

        if ($user-> roles !== 'sales' || $project->sales_id !== $user->id || $project->status !== 'pending'){
            abort(403, 'Unauthorized action.');
        }

        if (in_array($project->status, ['approved', 'rejected'])) {
            abort(403, 'Project sudah disetujui atau ditolak.');
        }

        $request->validate([
            'lead_id' => ['required', Rule::exists('leads', 'id')->where('created_by', $user->id)],
            'product_id' => 'required|exists:products,id',
        ]);

        if (
            $project->lead_id == $request->lead_id &&
            $project->product_id == $request->product_id
        ) {
            return redirect()->route('projects.index')->with('message', 'Project tidak berubah.');
        }

        $project->update([
            'lead_id' => $request->lead_id,
            'product_id' => $request->product_id,
        ]);

        return redirect()->route('projects.index')->with('message', 'Project berhasil dirubah.');
    }

    public function show(Project $project){
        return Inertia::render('Projects/Show', [
            'project' => $project->load(['lead', 'product', 'sales', 'approvedBy']),
            'userRole' => Auth::user()->roles,
        ]);
    }

    public function approve(Project $project){
        if (Auth::user()->roles !== 'manager'){
            abort(403, 'Unauthorized action.');
        }

        $project->update([
            'status' => 'approved',
            'approved_by' => Auth::id(),
        ]);

        return redirect()->route('projects.index')->with('message', 'Project berhasil disetujui.');
    }

    public function reject(Project $project)
    {
        if (Auth::user()->roles !== 'manager'){
            abort(403, 'Unauthorized action.');
        }

        $project->update([
            'status' => 'rejected',
            'approved_by' => Auth::id(),
        ]);

        return redirect()->route('projects.index')->with('message', 'Project berhasil ditolak.');
    }
}
