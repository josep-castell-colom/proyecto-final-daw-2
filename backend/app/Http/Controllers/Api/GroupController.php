<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGroupRequest;
use App\Http\Requests\UpdateGroupRequest;
use App\Http\Resources\GroupCollection;
use App\Http\Resources\GroupResource;
use App\Models\Group;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): GroupCollection
    {
        return GroupCollection::make(Group::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGroupRequest $request): GroupResource
    {
        $validated = $request->validated();
        $group = Group::create($validated);

        return GroupResource::make($group);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): GroupResource
    {
        return new GroupResource(Group::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGroupRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        $group = Group::findOrFail($id);
        $this->authorize('update', $group);
        $group->update($validated);
        if (isset($request->user_id)) {
            $group->users()->attach(
                $request->user_id, [
                    'isAdmin' => $request->isAdmin,
                    'isMember' => $request->isMember,
                ]
            );
        }

        return response()->json([
            'data' => new GroupResource(Group::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        $group = Group::findOrFail($id);
        $this->authorize($group);
        $group->delete();

        return response()->noContent();
    }
}
