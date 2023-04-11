<?php

namespace Database\Seeders;

use App\Models\Instrument;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InstrumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Instrument::factory()->create([
            'id' => 1,
            'name' => 'voz',
        ]);
        Instrument::factory()->create([
            'id' => 2,
            'name' => 'guitarra eléctrica',
        ]);
        Instrument::factory()->create([
            'id' => 3,
            'name' => 'bajo',
        ]);
        Instrument::factory()->create([
            'id' => 4,
            'name' => 'batería',
        ]);
    }
}
