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
            'image' => '/assets/images/users/josep.jpg',
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
            'image' => '/assets/images/users/rafael.jpg',
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
            'image' => '/assets/images/users/jaume.jpg',
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
            'image' => '/assets/images/users/pep.jpg',
            'password' => Hash::make('patata123'),
        ]);

        $joana = User::factory()->create([
            'id' => 5,
            'username' => 'joana',
            'name' => 'Joana',
            'lastname' => 'Marí',
            'email' => 'joana@patata.es',
            'phone' => '257-54-67-55',
            'address' => 'C/ de ses Vinyes 34, Muro',
            'image' => '/assets/images/users/joana.jpg',
            'password' => Hash::make('patata123'),
        ]);

        $maria = User::factory()->create([
            'id' => 6,
            'username' => 'maria',
            'name' => 'Maria',
            'lastname' => 'Joan',
            'email' => 'maria@patata.es',
            'phone' => '965-64-27-15',
            'address' => 'C/ des Torrent 94, Muro',
            'image' => '/assets/images/users/maria.jpg',
            'password' => Hash::make('patata123'),
        ]);

        $antonia = User::factory()->create([
            'id' => 7,
            'username' => 'antonia',
            'name' => 'Antònia',
            'lastname' => 'Coll',
            'email' => 'antonia@patata.es',
            'phone' => '955-63-23-81',
            'address' => 'C/ de ses Figues Seques, 12',
            'image' => 'assets/images/users/antonia.jpg',
            'password' => Hash::make('patata123'),
        ]);

        $miquel = User::factory()->create([
            'id' => 8,
            'username' => 'miquel',
            'name' => 'Miquel',
            'lastname' => 'Bonnin',
            'email' => 'miquel@patata.es',
            'phone' => '905-13-22-81',
            'address' => 'C/ Mula Francis, 14',
            'image' => 'assets/images/users/miquel.jpg',
            'password' => Hash::make('patata123'),
        ]);

        $donna = User::factory()->create([
            'id' => 9,
            'username' => 'donna',
            'name' => 'Donna',
            'lastname' => 'Troy',
            'email' => 'donna@patata.es',
            'phone' => '555-45-33-22',
            'address' => 'C/ de Sa Mola, 4',
            'image' => 'assets/img/users/donna.jpg',
            'password' => Hash::make('patata123'),
        ]);

        $mateu = User::factory()->create([
            'id' => 10,
            'username' => 'mateu',
            'name' => 'Mateu',
            'lastname' => 'Llabrés',
            'email' => 'mateu@patata.es',
            'phone' => '452-63-78-23',
            'address' => 'C/de sa Serra, 1',
            'image' => 'assets/img/users/mateu.jpg',
            'password' => Hash::make('patata123'),
        ]);

        $josep->instruments()->attach(3);
        $josep->musicianroles()->attach(2);
        $josep->groups()->attach(1, ['isMember' => 1]);
        $josep->groups()->attach(2);
        $josep->styles()->attach(1);
        $josep->styles()->attach(2);
        $josep->styles()->attach(3);
        $josep->styles()->attach(4);

        $rafael->instruments()->attach(1);
        $rafael->musicianroles()->attach(1);
        $rafael->groups()->attach(1, ['isMember' => 1]);
        $rafael->styles()->attach(1);
        $rafael->styles()->attach(2);
        $rafael->styles()->attach(3);
        $rafael->styles()->attach(4);

        $jaume->instruments()->attach(2);
        $jaume->musicianroles()->attach(4);
        $jaume->groups()->attach(1, ['isMember' => 1]);
        $jaume->styles()->attach(1);
        $jaume->styles()->attach(2);
        $jaume->styles()->attach(3);
        $jaume->styles()->attach(4);

        $pep->instruments()->attach(4);
        $pep->musicianroles()->attach(3);
        $pep->groups()->attach(1, ['isAdmin' => 1, 'isMember' => 1]);
        $pep->styles()->attach(1);
        $pep->styles()->attach(2);
        $pep->styles()->attach(3);
        $pep->styles()->attach(4);

        $joana->instruments()->attach(1);
        $joana->instruments()->attach(2);
        $joana->musicianroles()->attach(1);
        $joana->groups()->attach(2, ['isAdmin' => 1, 'isMember' => 1]);
        $joana->groups()->attach(1, ['isMember' => 1]);
        $joana->styles()->attach(5);

        $maria->instruments()->attach(1);
        $maria->instruments()->attach(4);
        $maria->musicianroles()->attach(3);
        $maria->groups()->attach(2, ['isMember' => 1]);
        $maria->groups()->attach(1);
        $maria->styles()->attach(5);

        $antonia->instruments()->attach(3);
        $antonia->musicianroles()->attach(2);
        $antonia->groups()->attach(2, ['isMember' => 1]);
        $antonia->styles()->attach(5);

        $miquel->instruments()->attach(1);
        $miquel->musicianroles()->attach(1);
        $miquel->groups()->attach(3, ['isAdmin' => 1, 'isMember' => 1]);
        $miquel->styles()->attach(4);

        $donna->instruments()->attach(3);
        $donna->musicianroles()->attach(2);
        $donna->groups()->attach(3, ['isMember' => 1]);
        $donna->styles()->attach(4);

        $mateu->instruments()->attach(2);
        $mateu->musicianroles()->attach(4);
        $mateu->groups()->attach(3, ['isMember' => 1]);
        $mateu->styles()->attach(4);
        $mateu->styles()->attach(2);
    }
}
