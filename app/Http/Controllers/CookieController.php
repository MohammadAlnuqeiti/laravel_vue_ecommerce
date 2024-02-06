<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CookieController extends Controller
{
    public function setCookie()
    {
        $response = new Response('Cookie Set');
        $response->cookie('cart_items', '11111111111', 60); // 60 minutes expiration time

        return $response;
    }

    public function getCookie(Request $request)
    {
        $value = $request->cookie('example_cookie');

        return response()->json(['cart_items' => $value]);
    }
}
