<?php

namespace Tests\Feature;

use App\Models\Group;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GroupTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test HTTP response on .../api/groups endpoint is 200
     * @return void
     */
    public function test_get_groups(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
            ->get('/api/groups');
        $response->assertStatus(200);
    }

    /**
     * Test Group model exists in DB after creation
     */
    public function test_group_model_exists_in_db(): void
    {
        $group = Group::factory()->create();
        $this->assertModelExists($group);
    }
}