<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Musicianrole;
use Illuminate\Database\Seeder;

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
            GroupSeeder::class,
            UserSeeder::class,
        ]);
    }
}
