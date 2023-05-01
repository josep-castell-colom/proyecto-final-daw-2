<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStyleRequest;
use App\Http\Requests\UpdateStyleRequest;
use App\Http\Resources\StyleCollection;
use App\Http\Resources\StyleResource;
use App\Models\Style;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class StyleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): StyleCollection
    {
        return StyleCollection::make(Style::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStyleRequest $request): StyleResource
    {
        $validated = $request->validated();
        $style = Style::create($validated);

        return StyleResource::make($style);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): StyleResource
    {
        return new StyleResource(Style::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStyleRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        Style::findOrFail($id)->update($validated);

        return response()->json([
            'data' => new StyleResource(Style::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        Style::findOrFail($id)->delete();

        return response()->noContent();
    }
}
