<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $table = 'courses';

    protected $fillable = [
        'name',
        'headline',
        'slug',
        'description',
        'category',
        'price',
        'duration',
        'batch',
        'image',
    ];

    public function curriculums()
    {
        return $this->hasMany(Curriculum::class);
    }
}
