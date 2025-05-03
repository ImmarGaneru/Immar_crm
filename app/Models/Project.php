<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'lead_id',
        'product_id',
        'sales_id',
        'approved_by',
        'status',
    ];

    public function lead(){
        return $this->belongsTo(Lead::class);
    }
    public function product(){
        return $this->belongsTo(Product::class);
    }
    public function sales(){
        return $this->belongsTo(User::class, 'sales_id');
    }
    public function approvedBy(){
        return $this->belongsTo(User::class, 'approved_by');
    }
}
