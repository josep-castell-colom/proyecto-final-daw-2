<?php

namespace Database\Seeders;

use App\Models\Style;
use Illuminate\Database\Seeder;

class StyleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Style::factory()->create([
            'id' => 1,
            'name' => 'rock',
        ]);

        Style::factory()->create([
            'id' => 2,
            'name' => 'rumba',
        ]);

        Style::factory()->create([
            'id' => 3,
            'name' => 'trash',
        ]);

        Style::factory()->create([
            'id' => 4,
            'name' => 'pop',
        ]);

        Style::factory()->create([
            'id' => 5,
            'name' => 'black metal',
        ]);
    }
}
