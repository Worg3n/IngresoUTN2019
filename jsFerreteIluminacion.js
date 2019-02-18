/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var Precio = 35;
    var Marca;
    var Cantidad;
    var Descuento;
    var PrecioConDescuento;

    Cantidad = parseFloat(document.getElementById("Cantidad").value);

    Marca = document.getElementById("Marca").value;

    if (Cantidad >= 6) {
        Descuento = Precio * 50 / 100
        alert("Su descuento es del 50%")
    }

    else if (Cantidad == 5) {
        if (Marca == "ArgentinaLuz") {
            Descuento = Precio * 40 / 100
            alert("Su descuento es del 40%");
        }
        else {
            Descuento = Precio * 30 / 100
            alert("Su descuento es del 30%");
        }
    }

    else if (Cantidad == 4) {
        if (Marca == "FelipeLamparas" || Marca == "ArgentinaLuz") {
            Descuento = Precio * 25 / 100
            alert("Su descuento es del 25%");
        }
        else {
            Descuento = Precio * 20 / 100
        alert("Su descuento es del 20%");
        }
    }
    else if (Cantidad == 3) {
        if (Marca == "ArgentinaLuz") {
            Descuento = Precio * 15 / 100
            alert("Su descuento es del 15%");

        }
        else {
            if (Marca == "FelipeLamparas") {
                Descuento = Precio * 10 / 100
                alert("Su descuento es del 10%");
            }
            else {
                Descuento = Precio * 5 / 100
                alert("Usted no obtuvo descuento");
            }
        }
    }
    else {
        if (Cantidad < 3) {
            Descuento = Precio * 0
        }
    }

    PrecioConDescuento = Precio * Cantidad - Descuento;
    document.getElementById("precioDescuento").value = PrecioConDescuento;



}


