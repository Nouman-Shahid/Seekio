<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function storePreferences(Request $request)
    {
        $request->validate([
            'course' => 'required|string',
        ]);


        $request->user()->update([
            'preference' => $request->course,
        ]);
        return redirect()->route('dashboard');
    }
}
