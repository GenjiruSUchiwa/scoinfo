<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class FrontController extends Controller
{
    public function index(): View
    {
        return view('front.index');
    }
    public function home(): View
    {
        return view('home.index');
    }
}
