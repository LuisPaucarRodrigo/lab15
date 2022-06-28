<?php

namespace App\Http\Controllers;

use App\Models\productos;
use App\Models\loginclientes;
use Illuminate\Http\Request;

class vuecontroller extends Controller
{
    public function vueProducto()
    {
        $productos = productos::ALL();
        return response()->json($productos);
    }
    public function vueProductomostrarimagen(string $imagen)
    {

    }

}
