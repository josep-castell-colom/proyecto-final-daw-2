<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Group;
use Auth;
use DB;
use Illuminate\Http\Request;

class GroupUserController extends Controller
{
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = Auth::user();
        $group = Group::findOrFail($id);
        $group->users()->attach(
            $user->id, [
                'isAdmin' => $request->isAdmin,
                'isMember' => $request->isMember,
            ]
        );

        return response()->json([
            'message' => 'Usuario añadido al grupo',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = Auth::user();
        DB::table('group_user')
            ->where('user_id', '=', $user->id)
            ->where('group_id', '=', $id)
            ->delete();

        return response()->json([
            'message' => 'Usuario eliminado del grupo',
        ]);
    }
}
