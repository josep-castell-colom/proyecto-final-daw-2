<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Instrument extends Model
{
    use HasFactory;

    /**
     * The users that belong to the instruments
     */
    public function users(): BelongsToMany
    {
        return $this->BelongsToMany(User::class);
    }
}
