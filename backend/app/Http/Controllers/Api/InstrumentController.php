<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInstrumentRequest;
use App\Http\Requests\UpdateInstrumentRequest;
use App\Http\Resources\InstrumentCollection;
use App\Http\Resources\InstrumentResource;
use App\Models\Instrument;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class InstrumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): InstrumentCollection
    {
        return InstrumentCollection::make(Instrument::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInstrumentRequest $request): InstrumentResource
    {
        $validated = $request->validated();
        $instrument = Instrument::create($validated);

        return InstrumentResource::make($instrument);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): InstrumentResource
    {
        return new InstrumentResource(Instrument::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInstrumentRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        Instrument::findOrFail($id)->update($validated);

        return response()->json([
            'data' => new InstrumentResource(Instrument::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        Instrument::findOrFail($id)->delete();

        return response()->noContent();
    }
}
