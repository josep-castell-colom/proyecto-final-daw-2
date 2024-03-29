<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'name',
        'lastname',
        'email',
        'phone',
        'address',
        'image',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The instruments that belong to the users
     */
    public function instruments(): BelongsToMany
    {
        return $this->belongsToMany(Instrument::class)
            ->withTimestamps();
    }

    /**
     * The musicianroles that belong to the users
     */
    public function musicianroles(): BelongsToMany
    {
        return $this->belongsToMany(Musicianrole::class)
            ->withTimestamps();
    }

    /**
     * The groups that belong to the users
     */
    public function groups(): BelongsToMany
    {
        return $this->belongsToMany(Group::class)
            ->withPivot('isAdmin', 'isMember')
            ->withTimestamps();
    }

    /**
     * The styles that belong to the users
     */
    public function styles(): BelongsToMany
    {
        return $this->belongsToMany(Style::class)
            ->withTimestamps();
    }

    /**
     * The posts that belong to the user
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    /**
     * The comments that belong to the user
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * The timeframes that belong to the users
     */
    public function timeframes(): BelongsToMany
    {
        return $this->belongsToMany(Timeframe::class)
            ->withTimestamps();
    }
}
