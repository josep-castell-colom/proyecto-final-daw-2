<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Musicianrole;
use Illuminate\Database\Seeder;
use Termwind\Repositories\Styles;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            InstrumentSeeder::class,
            MusicianroleSeeder::class,
            StyleSeeder::class,
            GroupSeeder::class,
            SectionSeeder::class,
            UserSeeder::class,
            PostSeeder::class,
        ]);
    }
}
