<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductUserController extends Controller
{
    public function index()
    {
        $products = Product::query()
            ->where('published', '=', 1)
            ->orderBy('updated_at', 'desc')
            ->paginate(5);

        return response()->json($products);
    }

    public function view(Product $product)
    {
        return response()->json($product);
    }

    public function productsHome()
    {
        $products = Product::query()
            ->where('published', '=', 1)
            ->orderBy('updated_at', 'desc')->get();

        $categories = Category::all();
        return response()->json([
            'products' => $products,
            'categories' => $categories
        ]);
    }
}
