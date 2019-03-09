function mostrar() {
    var continente;
    var descuentoAmerica = 100 * 50 / 100;
    var descuentoAmericatotal = 100 - descuentoAmerica;

    var descuentoAmericaDebito = 100 * 60 / 100;
    var descuentoAmericaDebitototal = 100 - descuentoAmericaDebito;

    var descuentoAfrica = 100 * 60 / 100;
    var descuentoAfricatotal = 100 - descuentoAfrica;

    var descuentoAfricaMP = 100 * 75 / 100;
    var descuentoAfricaMPtotal = 100 - descuentoAfricaMP;

    var descuentoEuropa = 100 * 20 / 100;
    var descuentoEuropatotal = 100 - descuentoEuropa;

    var descuentoEuropaDebito = 100 * 35 / 100;
    var descuentoEuropaDebitototal = 100 - descuentoEuropaDebito;

    var descuentoEuropaMP = 100 * 30 / 100;
    var descuentoEuropaMPtotal = 100 - descuentoEuropaMP;

    var descuentoEuropaCOM = 100 * 25 / 100;
    var descuentoEuropaCOMtotal = 100 - descuentoEuropaCOM;

    var descuentoContinente = 100 * 20 / 100;
    var descuentoContinentetotal = 100 - descuentoContinente;

    continente = document.getElementById("Marca").value;
    switch (continente) {
        case "América":
            alert("Usted tiene un 50% de descuento que serian " + descuentoAmericatotal + "$ por dia y si ademas paga por debito se le agrega un 10% mas de descuneto que serian " + descuentoAmericaDebitototal + "$ por dia");
            break;
        case "África":
            alert("Usted tiene un 60% de descuento y seria en total " + descuentoAfricatotal + "$ por dia y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento  " + descuentoAfricaMPtotal + "$ por dia");
            break;
        case "Europa":
            alert("Usted tiene un descuento inicial del 20% y serian " + descuentoEuropatotal + "$ por dia. Pero si usted paga con debito se le suma un 15% de descuento y seria en total " + descuentoEuropaDebitototal + "$ por dia. Pero si usted elije pagar via mercadopago se le agregaran 10% de descuento y serian " + descuentoEuropaMPtotal + "$ por dia. Y si elije cualquier otro metodo de pago se le agrega igual un 5% de descuento que seria en total " + descuentoEuropaCOMtotal + "$ por dia");
            break;
        default:
            alert("Usted obtiene un descuento del 20% y sera " + descuentoContinentetotal + "$ por dia");



    }
}
