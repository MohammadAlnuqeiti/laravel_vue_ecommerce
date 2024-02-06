<?php

namespace App\Http\Helpers;

use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Support\Arr;


class Cart
{
    public static function getCartItemsCount(): int
    {
        $request = \request();
        $user = $request->user();
        return CartItem::where('user_id', $user->id)->sum('quantity');
    }

    public static function getCartItems()
    {
        $request = \request();
        $user = $request->user();
        return CartItem::where('user_id', $user->id)->get()->map(
            fn ($item) => ['user_id' => $item->user_id, 'product_id' => $item->product_id, 'quantity' => $item->quantity]
        );
    }

    public static function getCookieCartItems()
    {
        $request = \request();

        return json_decode($request->cookie('cart_items', '[]'), true);
    }

    public static function getCountFromItems($cartItems)
    {
        return array_reduce(
            $cartItems,
            fn ($carry, $item) => $carry + $item['quantity'],
            0
        );
    }

    public static function moveCartItemsIntoDb($cartItemss)
    {
        $request = \request();
        $user = $request->user();
        $dbCartItems = CartItem::where(['user_id' => $request->user()->id])->get()->keyBy('product_id');
        $newCartItems = [];
        $cartItems = $cartItemss->toArray(); // Using the toArray() method
        foreach ($cartItems as $cartItem) {
            if (isset($dbCartItems[$cartItem['product_id']])) {
                continue;
            }
            $newCartItems[] = [
                'user_id' => $request->user()->id,
                'product_id' => $cartItem['product_id'],
                'quantity' => $cartItem['quantity'],
            ];
        }


        if (!empty($newCartItems)) {
            CartItem::insert($newCartItems);
        }

        return CartItem::where('user_id', $user->id)->get()->map(
            fn ($item) => ['user_id' => $item->user_id, 'product_id' => $item->product_id, 'quantity' => $item->quantity]
        );
    }

    /**
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     * @author Zura Sekhniashvili <zurasekhniashvili@gmail.com>
     */
    public static function getProductsAndCartItems(): array|\Illuminate\Database\Eloquent\Collection
    {
        $cartItems = self::getCartItems();
        $ids = Arr::pluck($cartItems, 'product_id');
        $products = Product::query()->whereIn('id', $ids)->get();
        $cartItems = Arr::keyBy($cartItems, 'product_id');

        return [$products, $cartItems];
    }
}
