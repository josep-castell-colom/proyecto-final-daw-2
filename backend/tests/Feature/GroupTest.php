<?php

namespace Tests\Feature;

use App\Models\Group;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GroupTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test HTTP response on get /api/groups is 200
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
    public function test_group_model_exists(): void
    {
        $group = Group::factory()->create();
        $this->assertModelExists($group);
    }

    /**
     * Test the Group Model with key 1 exists in DB after creation
     */
    public function test_group_model_whith_key_exists(): void
    {
        Group::factory()->create();
        $this->assertDatabaseHas('groups', [
            'id' => 1,
        ]);
    }

    public function test_user_can_create_group(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
        ->postJson('api/groups', [
            'id' => 2,
            'name' => 'Patata',
            'city' => 'Patata City',
            'description' => 'Patata Music',
            'image' => 'assets/img/groups/patata.jpg',
        ]);
        $response->assertStatus(201)
            ->assertJson([
                'data' => [
                    'id' => 2,
                    'name' => 'Patata',
                    'city' => 'Patata City',
                    'description' => 'Patata Music',
                    'image' => 'assets/img/groups/patata.jpg',
                    'users' => [],
                    'sections' => [],
                    'styles' => [],
                    'timeframes' => [],
                ],
            ]);
    }
}
