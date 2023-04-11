<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $josep = User::factory()->create([
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
        $rafael = User::factory()->create([
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
        $jaume = User::factory()->create([
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

        $pep = User::factory()->create([
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

        $josep->instruments()->attach(3);
        $josep->musicianroles()->attach(2);
        $josep->groups()->attach(1);
        $josep->styles()->attach(1);
        $josep->styles()->attach(2);
        $josep->styles()->attach(3);
        $josep->styles()->attach(4);

        $rafael->instruments()->attach(1);
        $rafael->musicianroles()->attach(1);
        $rafael->groups()->attach(1);
        $rafael->styles()->attach(1);
        $rafael->styles()->attach(2);
        $rafael->styles()->attach(3);
        $rafael->styles()->attach(4);

        $jaume->instruments()->attach(2);
        $jaume->musicianroles()->attach(4);
        $jaume->groups()->attach(1);
        $jaume->styles()->attach(1);
        $jaume->styles()->attach(2);
        $jaume->styles()->attach(3);
        $jaume->styles()->attach(4);

        $pep->instruments()->attach(4);
        $pep->musicianroles()->attach(3);
        $pep->groups()->attach(1, ['isAdmin' => 1]);
        $pep->styles()->attach(1);
        $pep->styles()->attach(2);
        $pep->styles()->attach(3);
        $pep->styles()->attach(4);
    }
}
