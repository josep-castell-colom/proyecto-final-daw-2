<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Random\Engine\Secure;

class Post extends Model
{
    use HasFactory;

    /**
     * The user that owns the posts
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The section that owns the posts
     */
    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }
}
