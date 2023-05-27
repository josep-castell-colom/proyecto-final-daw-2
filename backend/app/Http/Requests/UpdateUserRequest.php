<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'username' => ['string'],
            'name' => ['string'],
            'lastname' => ['string'],
            'email' => ['email'],
            'phone' => ['string'],
            'address' => ['string'],
            'image' => ['string'],
            'password' => ['string'],
        ];
    }
}
