//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var ventas;
    var Mayor;
    var Menor;
    var diaMayor;
    var diaMenor;
    var flag = 0;

    for (var i = 1; i <= 7; i++) {
        ventas = parseInt(prompt("Introduzca lo ganado en el dia " + i));

        while (ventas <= 0 || isNaN(ventas)) {
            ventas = parseInt(prompt("Error. Introduzca lo ganado otra vez"));
        }
        if (ventas > Mayor || flag == 0) {
            Mayor = ventas;
            diaMayor = i;
        }
        if (ventas < Menor || flag == 0) {
            Menor = ventas;
            diaMenor = i;
            flag = 1;
        }


    }
    document.write("el numero mayor es " + Mayor + " en el dia " + diaMayor + "<br>");
    document.write("el numero menor es " + Menor + " en el dia " + diaMenor);

}
