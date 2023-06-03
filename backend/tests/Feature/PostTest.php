<?php

namespace Tests\Feature;

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
}
