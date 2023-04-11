<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Section extends Model
{
    use HasFactory;

    /**
     * The group that owns the sections
     */
    public function group(): BelongsTo
    {
        return $this->belongsTo(Group::class);
    }
}
