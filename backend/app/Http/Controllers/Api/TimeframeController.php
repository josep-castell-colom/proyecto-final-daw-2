<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTimeframeRequest;
use App\Http\Requests\UpdateTimeframeRequest;
use App\Http\Resources\TimeframeCollection;
use App\Http\Resources\TimeframeResource;
use App\Models\Timeframe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class TimeframeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): TimeframeCollection
    {
        return TimeframeCollection::make(Timeframe::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTimeframeRequest $request): TimeframeResource
    {
        $validated = $request->validated();
        $timeframe = Timeframe::create($validated);

        return TimeframeResource::make($timeframe);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): TimeframeResource
    {
        return new TimeframeResource(Timeframe::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTimeframeRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        Timeframe::findOrFail($id)->update($validated);

        return response()->json([
            'data' => new TimeframeResource(Timeframe::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        Timeframe::findOrFail($id)->delete();

        return response()->noContent();
    }
}
