<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;

class EditProfileAdminController extends Controller
{
    public function editProfile(Request $request, string $id){

        return Auth::user();
        // $data = User::findOrfail($id);
        // $old_email = $data->email;
        // $old_phone = $data->phone;

        // $request->validate([
        //     'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required'],
        //     'phone' => ['required'],
        // ]);
        // $data->name = $request->name;
        // if ($old_email !== $request->email) {
        //     $request->validate([
        //         'email' => ['required', 'email', 'max:255', 'unique:' . User::class],

        //     ]);

        //     $data->email = $request->email;
        // }
        // if ($old_phone != $request->phone) {
        //     $request->validate([
        //         'phone' => ['required', 'unique:' . User::class],

        //     ]);

        //     $data->phone = $request->phone;
        // }
        // if ($request->file('image')) {
        //     $request->validate([
        //         'image' => ['nullable', 'image' ,'mimes:jpeg,png,jpg,gif'],
        //     ]);
        //     $photoName = $request->file('image')->getClientOriginalName();
        //     $request->file('image')->storeAs('public/images/users', $photoName);
        //     $data->image = $photoName;
        // }

        // $data->save();
        // return response(new UserResource($data) , 201);
    }

    public function changePassword(Request $request, string $id)
    {


        $request->validate([
            'old_password' => 'required',
            'password' => 'required|confirmed|min:8',
        ]);


        $user = User::findOrfail($id);

        if (!Hash::check($request->old_password, $user->password)) {

            return response()->json([
                'message' => 'The old password is incorrect.',
                'status' => 400,
            ]);
        }

        $user->update([
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'password updated successfully',
            'status' => 201,
        ]);

    }
}
