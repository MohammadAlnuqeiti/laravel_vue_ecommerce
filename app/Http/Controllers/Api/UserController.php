<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $users = User::query()->orderBy('id', 'desc')->paginate(10);

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserCreateRequest $request)
    {
        // $user = $request->validated();
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->password =  Hash::make($request->input('password'));
        $user->is_admin = $request->input('is_admin');

        $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
        Storage::disk('public')->putFileAs('images/users', $request->image, $imageName); //بحدد الصورة اللي بدي احفضها و بأي اسم اريد ان أحفظها به

        $user->image = $imageName;

        $user->save();

        // return new UserResource($user);
        return response(new UserResource($user) , 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     */
    public function update(Request $request, string $id)
    {
        $data = User::findOrfail($id);
        $old_email = $data->email;
        $old_phone = $data->phone;
        $old_image = $data->image;
        // return $request->phone;

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required'],
            'phone' => ['required'],
            'is_admin' => ['required'],
        ]);
        $data->name = $request->name;
        $data->is_admin = $request->is_admin;
        if ($old_email !== $request->email) {
            $request->validate([
                'email' => ['required', 'email', 'max:255', 'unique:' . User::class],

            ]);

            $data->email = $request->email;
        }
        if ($old_phone != $request->phone) {
            $request->validate([
                'phone' => ['required', 'unique:' . User::class],

            ]);

            $data->phone = $request->phone;
        }
        if ($request->password) {
            $request->validate([
                'password' => ['required', 'confirmed', 'min:8'],

            ]);

            $data->password = Hash::make($request->password);
        }
        if ($request->file('image')) {
            $photoName = $request->file('image')->getClientOriginalName();
            $request->file('image')->storeAs('public/images/users', $photoName);
            $data->image = $photoName;
        }

        $data->save();

        // return response()->json([
        //     'message' => 'Item updated successfully'
        // ]);
        return response(new UserResource($data) , 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::where("id", $id)->delete();
        return response("", 204);
    }
}
