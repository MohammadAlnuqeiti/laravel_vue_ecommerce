<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class AuthUserController extends Controller
{
    public function signup(Request $request)
    {
        // $user = $request->validated();
        $credentials = $request->validate([
            'name'=> ['required', 'string'],
            'email'=> ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'phone'=> ['required','numeric','unique:'.User::class],
            'password' => ['required' , 'confirmed' , 'min:8'],
        ]);
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->password =  Hash::make($request->input('password'));

        $user->save();

        Auth::login($user);

        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'=> ['required', 'email'],
            'password' => 'required',
            'remember' => 'boolean'
        ]);
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);
        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'message' => 'Email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        Auth::login($user);
        // if (!$user->email_verified_at) {
        //     Auth::logout();
        //     return response([
        //         'message' => 'Your email address is not verified'
        //     ], 403);
        // }
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);

    }

    public function logout()
    {
        /** @var \App\Models\User $user */
        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }
}
