<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'id' => 1,
            'username' => 'josep',
            'name' => 'Josep',
            'lastname' => 'Castell',
            'email' => 'josep@patata.es',
            'phone' => '555-34-67-55',
            'address' => 'C/ des Oms 33, Bunyola',
            'image' => '/storage/img/1/josep.jpg',
            'password' => Hash::make('patata123'),
        ]);
        User::factory()->create([
            'id' => 2,
            'username' => 'rafael',
            'name' => 'Rafael',
            'lastname' => 'Ivorra',
            'email' => 'rafael@patata.es',
            'phone' => '555-34-87-55',
            'address' => 'C/ des Pomers 33, Palma',
            'image' => '/storage/img/1/rafael.jpg',
            'password' => Hash::make('patata123'),
        ]);
        User::factory()->create([
            'id' => 3,
            'username' => 'jaume',
            'name' => 'Jaume',
            'lastname' => 'Rullàn',
            'email' => 'jaume@patata.es',
            'phone' => '555-94-67-55',
            'address' => 'C/ de ses Peres 44, Palma',
            'image' => '/storage/img/1/jaume.jpg',
            'password' => Hash::make('patata123'),
        ]);

        User::factory()->create([
            'id' => 4,
            'username' => 'pep',
            'name' => 'Pep',
            'lastname' => 'González',
            'email' => 'pep@patata.es',
            'phone' => '455-94-67-55',
            'address' => 'C/ des Tarongers 14, Palma',
            'image' => '/storage/img/1/pep.jpg',
            'password' => Hash::make('patata123'),
        ]);
    }
}
