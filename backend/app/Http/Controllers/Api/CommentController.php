<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Http\Resources\CommentCollection;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): CommentCollection
    {
        return CommentCollection::make(Comment::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCommentRequest $request): CommentResource
    {
        $validated = $request->validated();
        $comment = Comment::create($validated);

        return CommentResource::make($comment);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): CommentResource
    {
        return new CommentResource(Comment::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, string $id): JsonResponse
    {
        $validated = $request->validated();
        Comment::findOrFail($id)->update($validated);

        return response()->json([
            'data' => new CommentResource(Comment::findOrFail($id)),
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): Response
    {
        Comment::findOrFail($id)->delete();

        return response()->noContent();
    }
}
