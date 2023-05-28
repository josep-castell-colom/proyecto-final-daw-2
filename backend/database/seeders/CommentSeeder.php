<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Comment::factory()->create([
            'id' => 1,
            'body' => 'Això serà gros. De locos.',
            'post_id' => 1,
            'user_id' => 2,
        ]);
        Comment::factory()->create([
            'id' => 2,
            'body' => 'A tope!',
            'post_id' => 1,
            'user_id' => 3,
        ]);
        Comment::factory()->create([
            'id' => 3,
            'body' => 'Us esperam a tots!',
            'post_id' => 2,
            'user_id' => 3,
        ]);
        Comment::factory()->create([
            'id' => 4,
            'body' => 'M\'han dit que és bona, sa cervesa des Madison',
            'post_id' => 2,
            'user_id' => 2,
        ]);
        Comment::factory()->create([
            'id' => 5,
            'body' => 'A metrónomo no vamos. Tot es temps me feis es lio, Dream Theater no somos eh.',
            'post_id' => 5,
            'user_id' => '6',
        ]);

    }
}
