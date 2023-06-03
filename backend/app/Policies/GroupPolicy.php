<?php

namespace App\Policies;

use App\Models\Group;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\DB;

class GroupPolicy
{
    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Group $group): Response
    {
        $groupuser_id = DB::table('group_user')
            ->select('group_id', 'isAdmin')
            ->where('user_id', $user->id)
            ->get();
        foreach ($groupuser_id as $group_) {
            if ($group->id === $group_->group_id && $group_->isAdmin) {
                return Response::allow();
            }
        }

        return Response::deny(
                'No tiene permisos para actualizar este grupo.'
            );
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Group $group): Response
    {
        $groupuser_id = DB::table('group_user')
            ->select('group_id', 'isAdmin')
            ->where('user_id', $user->id)
            ->get();
        foreach ($groupuser_id as $group_) {
            if (
             $group->id === $group_->group_id
            && $group_->isAdmin
            ) {
                return Response::allow();
            }
        }

        return Response::deny(
                'No tiene permisos para eliminar este grupo.'
            );
    }
}
