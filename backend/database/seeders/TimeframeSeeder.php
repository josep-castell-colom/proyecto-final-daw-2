<?php

namespace Database\Seeders;

use App\Models\Timeframe;
use Illuminate\Database\Seeder;

class TimeframeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $time1 = Timeframe::factory()->create([
            'id' => 1,
            'dayofweek' => 3,
            'start' => 1630,
            'end' => 1900,
        ]);
        $time2 = Timeframe::factory()->create([
            'id' => 2,
            'dayofweek' => 2,
            'start' => 1830,
            'end' => 2130,
        ]);
        $time3 = Timeframe::factory()->create([
            'id' => 3,
            'dayofweek' => 1,
            'start' => 1900,
            'end' => 2200,
        ]);
        $time4 = Timeframe::factory()->create([
            'id' => 4,
            'dayofweek' => 3,
            'start' => 1600,
            'end' => 1830,
        ]);

        $time1->groups()->attach(1, [
            'confirmed' => 1,
        ]);
        $time2->groups()->attach(1);
        $time3->groups()->attach(1);
        $time4->groups()->attach(1);

        $time1->users()->attach(1, [
            'group_id' => 1,
        ]);
        $time2->users()->attach(1, [
            'group_id' => 1,
        ]);
        $time3->users()->attach(2, [
            'group_id' => 1,
        ]);
        $time4->users()->attach(2, [
            'group_id' => 1,
        ]);
    }
}
