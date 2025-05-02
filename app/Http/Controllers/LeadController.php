<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LeadController extends Controller
{
    public function index(){
        $leads = Lead::where('created_by', Auth::id())->paginate(10);

        return Inertia::render('Leads/Index', [
            'leads' => $leads,
        ]);
    }

    public function create() {
        return Inertia::render('Leads/Create');
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|email|unique:leads',
            'phone' => 'required|max:20',
            'address' => 'required'
        ]);

        Lead::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'created_by' => Auth::id()
        ]);

        return redirect()->route('leads.index')->with('success', 'Lead berhasil dibuat.');;
    }

    public function edit(Lead $lead){
        return Inertia::render('Leads/Edit', [
            'lead' => $lead
        ]);
    }

    public function update(Request $request, Lead $lead)
    {
        $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|email|unique:leads,email,' . $lead->id,
            'phone' => 'required|max:20',
            'address' => 'required'
        ]);

        $lead->update($request->all());

        return redirect()->route('leads.index')->with('success', 'Lead berhasil dirubah.');;
    }

    public function destroy(Lead $lead)
    {
        $lead->delete();

        return redirect()->route('leads.index')->with('success', 'Lead berhasil dihapus.');;
    }
}
