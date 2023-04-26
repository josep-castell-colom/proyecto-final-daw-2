<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInstrumentRequest;
use App\Http\Requests\UpdateInstrumentRequest;
use App\Http\Resources\InstrumentCollection;
use App\Http\Resources\InstrumentResource;
use App\Models\Instrument;
use Illuminate\Http\Request;

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
    public function show(string $id)
    {
        return new InstrumentResource(Instrument::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // $validated = $request->validate([
        //     'name' => ['string', 'required', 'max:255'],
        // ]);
        // $instrument = Instrument::findOrFail($id)->update($validated);
        // return InstrumentResource::make($instrument);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Instrument::findOrFail($id)->delete();
        return response()->noContent() ;
    }
}
