<?php

namespace Database\Seeders;

use App\Models\Section;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Section::factory()->create([
            'id' => 1,
            'name' => 'Noticias',
            'description' => 'Aqui colgaremos lo que nos parezca, relacionado con nuestra banda',
            'image' => '/storage/img/1/noticias.jpg',
            'isPublic' => 1,
            'group_id' => 1,
        ]);

        Section::factory()->create([
            'id' => 2,
            'name' => 'Fil privat',
            'description' => 'Aqui penjam coses només per noltros, en privat',
            'image' => '/storage/img/1/filprivat.jpg',
            'isPublic' => 0,
            'group_id' => 1,
        ]);

        Section::factory()->create([
            'id' => 3,
            'name' => 'Ses Blac Meeetal Nius',
            'description' => 'Sentiràs es poder des metal fin ses banyes',
            'image' => '/storage/img/1/sesblackmetalnius.jpg',
            'isPublic' => 1,
            'group_id' => 2,
        ]);

        Section::factory()->create([
            'id' => 4,
            'name' => 'Fil marró de coses privades',
            'description' => 'El inner circle de Muro!',
            'image' => '/storage/img/1/filmarrocosesprivades.jpg',
            'isPublic' => 0,
            'group_id' => 2,
        ]);

        Section::factory()->create([
            'id' => 5,
            'name' => 'El muro del pasteleo',
            'description' => 'Diabétic@s abstenerse porfa',
            'image' => '/storage/img/1/pasteleo.jpg',
            'isPublic' => 1,
            'group_id' => 3,
        ]);
    }
}
