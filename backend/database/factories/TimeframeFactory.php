<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Timeframe>
 */
class TimeframeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => 1,
            'dayofweek' => fake()->randomNumber(1, true),
            'start' => fake()->randomNumber(6, true),
            'end' => fake()->randomNumber(6, true),
        ];
    }
}
