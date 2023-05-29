<?php

namespace Database\Seeders;

use App\Models\Group;
use DB;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $esforadats = Group::factory()->create([
            'id' => 1,
            'name' => 'Es Foradats',
            'city' => 'Palma de Mallorca',
            'description' => 'Feim rumba trash pop metal. O quelcom així, diuen.',
            'image' => '/assets/img/groups/esforadats.jpg',
        ]);

        $esforadats->styles()->attach(1);
        $esforadats->styles()->attach(2);
        $esforadats->styles()->attach(3);
        $esforadats->styles()->attach(4);

        $sesbledes = Group::factory()->create([
            'id' => 2,
            'name' => 'Ses Bledes',
            'city' => 'Muro',
            'description' => 'Cantam molt bé, som tope pros',
            'image' => '/assets/img/groups/sesbledes.jpg',
        ]);

        $sesbledes->styles()->attach(5);

        //Load data from DB dump
        DB::unprepared(file_get_contents('database/seeders/dumps/groups.sql'));

    }
}
