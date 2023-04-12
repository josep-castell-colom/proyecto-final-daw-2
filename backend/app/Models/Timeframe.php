<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Timeframe extends Model
{
    use HasFactory;

    /**
     * The users that belong to the timeframes
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->withTimestamps();
    }

    /**
     * The groups that belong to the timeframe
     */
    public function groups(): BelongsToMany
    {
        return $this->belongsToMany(Group::class)
            ->withTimestamps();
    }
}
