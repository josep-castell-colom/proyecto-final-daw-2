<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()->create([
            'id' => 1,
            'title' => 'Sa setmana qui ve tenim bolo',
            'body' => 'Està confirmat, tocam en es Madison Square Garden. S\'han venut totes ses entrades. Podeu penjar-ho en es fil de notícies.',
            'image' => '/storage/img/1/bolo.jpg',
            'section_id' => 2,
            'user_id' => 1,
        ]);

        Post::factory()->create([
            'id' => 2,
            'title' => 'Concert al Madison Square Garden',
            'body' => 'Com anam, foradats. Es proper divendres farem un concert al Madison Square Garden. Us esperam!',
            'image' => '/storage/img/1/bolo.jpg',
            'section_id' => 1,
            'user_id' => 3,
        ]);
    }
}
