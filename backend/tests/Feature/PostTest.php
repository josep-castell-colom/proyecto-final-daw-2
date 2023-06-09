<?php

namespace Tests\Feature;

use App\Models\Group;
use App\Models\Post;
use App\Models\Section;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test HTTP response on get /api/posts is 200
     */
    public function test_get_posts(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
            ->get('/api/posts');
        $response->assertStatus(200);
    }

    /**
     * Test Post model exists
     * @return void
     */
    public function test_post_model_exits(): void
    {
        User::factory()->create();
        Group::factory()->create();
        Section::factory()->create();
        $post = Post::factory()->create();
        $this->assertModelExists($post);
    }

    /**
     * Test the Post model with key 1 exists in DB after creation
     */
    public function test_post_model_with_key_exists(): void
    {
        User::factory()->create();
        Group::factory()->create();
        Section::factory()->create();
        Post::factory()->create();
        $this->assertDatabaseHas('posts', [
            'id' => 1,
        ]);
    }
}