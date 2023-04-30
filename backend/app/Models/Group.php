<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Group extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'city',
        'description',
        'image',
    ];

    /**
     * The users that belong to the groups
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class)
            ->withTimestamps();
    }

    /**
     * The sections that belong to the group
     */
    public function sections(): HasMany
    {
        return $this->hasMany(Section::class);
    }

    /**
     * The styles that belong to the groups
     */
    public function styles(): BelongsToMany
    {
        return $this->belongsToMany(Style::class)
            ->withTimestamps();
    }

    /**
     * The timeframes that belong to the groups
     */
    public function timeframes(): BelongsToMany
    {
        return $this->belongsToMany(Timeframe::class)
            ->withTimestamps();
    }
}
