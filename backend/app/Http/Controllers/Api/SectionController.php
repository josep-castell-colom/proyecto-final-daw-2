<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSectionRequest;
use App\Http\Requests\UpdateSectionRequest;
use App\Http\Resources\SectionCollection;
use App\Http\Resources\SectionResource;
use App\Http\Resources\StyleResource;
use App\Models\Section;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): SectionCollection
    {
        return SectionCollection::make(Section::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSectionRequest $request): SectionResource
    {
        $validated = $request->validated();
        $section = Section::create($validated);

        return SectionResource::make($section);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): SectionResource
    {
        return new SectionResource(Section::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSectionRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        Section::findOrFail($id)->update($validated);

        return response()->json([
            'data' => new StyleResource(Section::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        Section::findOrFail($id)->delete();

        return response()->noContent();
    }
}
