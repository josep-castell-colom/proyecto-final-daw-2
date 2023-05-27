<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $model): Response
    {
        return $user->id === $model->id
        ? Response::allow()
        : Response::deny(
            'No tiene permisos para actualizar este usuario.'
        );
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User $model): Response
    {
           return $user->id === $model->id
        ? Response::allow()
        : Response::deny(
            'No tiene permisos para eliminar este usuario.'
        );
    }
}
