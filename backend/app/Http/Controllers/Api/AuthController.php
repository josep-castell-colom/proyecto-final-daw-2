<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $email = strtolower($request->input('email'));
        $user = User::whereEmail($email)->first();

        if (! $user || ! Hash::check($request->input('password'), $user->password)) {
            throw ValidationException::withMessages([
                'email' => [__('auth.failed')],
            ]);
        }

        $plainTextToken = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'message' => 'Autentificación exitosa',
            'plain-text-token' => $plainTextToken,
        ]);
    }

    /**
     * Register the user
     */
    public function register(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'username' => ['required', 'string'],
            'name' => ['required', 'string'],
            'lastname' => ['required', 'string'],
            'email' => ['required', 'email'],
            'phone' => 'string',
            'address' => 'string',
            'image' => 'string',
            'password' => ['required', 'string'],
        ]);

        $user = User::create($validated);
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Cuenta de usuario creada',
            'access_token' => $token,
            'token_type' => 'Bearer',
        ], 201);
    }
}
