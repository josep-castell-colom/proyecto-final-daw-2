<?php

namespace Database\Seeders;

use App\Models\Group;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Group::factory()->create([
            'id' => 1,
            'name' => 'Es Foradats',
            'city' => 'Palma de Mallorca',
            'description' => 'Feim rumba trash pop metal. O quelcom així, diuen.',
            'image' => '/storage/img/1/esforadats.jpg',
        ]);
    }
}
