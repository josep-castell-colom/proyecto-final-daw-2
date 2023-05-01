<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMusicianroleRequest;
use App\Http\Requests\UpdateMusicianroleRequest;
use App\Http\Resources\MusicianRoleCollection;
use App\Http\Resources\MusicianRoleResource;
use App\Models\Musicianrole;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class MusicianroleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): MusicianRoleCollection
    {
        return MusicianRoleCollection::make(Musicianrole::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMusicianroleRequest $request): MusicianRoleResource
    {
        $validated = $request->validated();
        $musicianrole = Musicianrole::create($validated);

        return MusicianRoleResource::make($musicianrole);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): MusicianRoleResource
    {
        return new MusicianRoleResource(Musicianrole::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMusicianroleRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        Musicianrole::findOrFail($id)->update($validated);

        return response()->json([
            'data' => new MusicianRoleResource(Musicianrole::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        Musicianrole::findOrFail($id)->delete();

        return response()->noContent();
    }
}
