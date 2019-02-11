/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var Precio1;
    var Precio2;
    var Precio3;
    var sumatotal;
    
    Precio1 = parseInt(document.getElementById("PrecioUno").value);
    Precio2 = parseInt(document.getElementById("PrecioDos").value);
    Precio3 = parseInt(document.getElementById("PrecioTres").value);
    
    sumatotal = Precio1 + Precio2 + Precio3;

   alert("La suma de sus productos es " + sumatotal);
}
function Promedio () 
{
    var Precio1;
    var Precio2;
    var Precio3;
    var sumatotal;
    var promedio;
    
    Precio1 = parseInt(document.getElementById("PrecioUno").value);
    Precio2 = parseInt(document.getElementById("PrecioDos").value);
    Precio3 = parseInt(document.getElementById("PrecioTres").value);
    
    sumatotal = Precio1 + Precio2 + Precio3;
    promedio = sumatotal / 3;
    alert(promedio);
}
function PrecioFinal () 
{
	var Precio1;
    var Precio2;
    var Precio3;
    var sumatotal;
    var porcentaje;
    var Iva;
    Precio1 = parseInt(document.getElementById("PrecioUno").value);
    Precio2 = parseInt(document.getElementById("PrecioDos").value);
    Precio3 = parseInt(document.getElementById("PrecioTres").value);
    sumatotal = Precio1 + Precio2 + Precio3;
   porcentaje = sumatotal * 21 / 100;
   Iva = sumatotal + porcentaje;
    alert("su precio final es " + sumatotal + " Pero tambien se le agrege el iva y por lo tanto es " + Iva);
}