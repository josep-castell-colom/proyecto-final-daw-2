<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'username' => $this->username,
            'name' => $this->name,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'password' => $this->password,
            'phone' => $this->password,
            'address' => $this->address,
            'image' => $this->image,
            'instruments' => $this->instruments,
            'musicianroles' => $this->musicianroles,
            'groups' => $this->groups,
            'styles' => $this->styles,
            'comments' => $this->comments,
            'timeframes' => $this->timeframes,
        ];
    }
}
