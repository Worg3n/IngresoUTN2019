//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var sumadelperimetro;
    var lado;
    lado = parseInt(document.getElementById("lado").value);

    sumadelperimetro = lado * 3;
    alert("el perimetro es " + sumadelperimetro + " Cm");
}

