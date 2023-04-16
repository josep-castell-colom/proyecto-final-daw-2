<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GroupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'city' => $this->city,
            'description' => $this->description,
            'image' => $this->image,
            'users' => $this->users,
            'sections' => $this->sections,
            'styles' => $this->styles,
            'timeframes' => $this->timeframes,
        ];
    }
}
