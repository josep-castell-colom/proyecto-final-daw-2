<?php

namespace Database\Seeders;

use App\Models\Post;
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
            'image' => '/assets/images/posts/bolo.jpg',
            'section_id' => 2,
            'user_id' => 1,
        ]);

        Post::factory()->create([
            'id' => 2,
            'title' => 'Concert al Madison Square Garden',
            'body' => 'Com anam, foradats. Es proper divendres farem un concert al Madison Square Garden. Us esperam!',
            'image' => '/assets/images/posts/bolo.jpg',
            'section_id' => 1,
            'user_id' => 3,
        ]);

        Post::factory()->create([
            'id' => 3,
            'title' => 'Burzum estàn bastant bé',
            'body' => 'Encara que es tipo és un beneït cap de fava.',
            'image' => '/assets/images/posts/burzum.jpg',
            'section_id' => 3,
            'user_id' => 5,
        ]);

        Post::factory()->create([
            'id' => 4,
            'title' => 'Això des facepaint com va?',
            'body' => 'No sé com punyetes llevarme tot aquest potingue de sa cara.',
            'image' => '/assets/images/posts/facepaint.jpg',
            'section_id' => 4,
            'user_id' => 6,
        ]);

        Post::factory()->create([
            'id' => 5,
            'title' => 'Hem tret una cançó nova',
            'body' => 'Sa bataca va a tota castanya, rollo tututututacatutututaca però costera avall',
            'image' => '/assets/images/posts/bataca.jpg',
            'section_id' => '3',
            'user_id' => 7,
        ]);
    }
}
