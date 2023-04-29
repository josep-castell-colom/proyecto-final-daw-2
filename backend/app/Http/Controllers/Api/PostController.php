<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as HttpResponse;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): PostCollection
    {
        return PostCollection::make(Post::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request): PostResource
    {
        $validated = $request->validated();
        $post = Post::create($validated);

        return PostResource::make($post);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): PostResource
    {
        return new PostResource(Post::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        Post::findOrFail($id)->update($validated);

        return response()->json([
            'data' => new PostResource(Post::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): HttpResponse
    {
        Post::findOrFail($id)->delete();

        return response()->noContent();
    }
}
