<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Group;
use App\Models\Post;
use App\Models\Section;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test assert a Comment is registered on DB after created
     */
    public function test_comment_model_exists_in_db(): void
    {
        User::factory()->create();
        Group::factory()->create();
        Section::factory()->create();
        Post::factory()->create();
        $comment = Comment::factory()->create();
        $this->assertModelExists($comment);
    }
}
