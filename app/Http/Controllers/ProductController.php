<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        $products = Product::latest()->paginate(10);
        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }

    public function create(){
        return Inertia::render('Products/Create');
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
        ]);

        Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
        ]);

        return redirect()->route('products.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    public function edit(Product $product){
        return Inertia::render('Products/Edit', [
            'product' => $product,
        ]);
    }

    public function update(Request $request, Product $product){
        $request->validate([
            'name' => 'required|string|max:100',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
        ]);

        $product->update($request->only('name', 'description', 'price'));

        return redirect()->route('products.index')->with('success', 'Produk berhasil diubah.');
    }
}
