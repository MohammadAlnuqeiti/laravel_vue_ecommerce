<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'max:2000'],
            'image' => ['nullable', 'image' ,'mimes:jpeg,png,jpg,gif'],
            'price' => ['required', 'numeric'],
            'description' => ['required', 'string'],
            'published' => ['required', 'boolean'],
            'category_id' => ['required']
        ];
    }
}