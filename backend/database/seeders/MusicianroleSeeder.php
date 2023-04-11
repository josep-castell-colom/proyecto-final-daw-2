<?php

namespace Database\Seeders;

use App\Models\Musicianrole;
use Illuminate\Database\Seeder;

class MusicianroleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Musicianrole::factory()->create([
            'id' => 1,
            'name' => 'vocalista',
        ]);
        Musicianrole::factory()->create([
            'id' => 2,
            'name' => 'bajista',
        ]);
        Musicianrole::factory()->create([
            'id' => 3,
            'name' => 'baterista',
        ]);
        Musicianrole::factory()->create([
            'id' => 4,
            'name' => 'guitarrista',
        ]);

    }
}
