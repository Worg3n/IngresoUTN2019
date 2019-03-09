function mostrar() {
    var altura;
    var promedio;
    var suma = 0;
    var sexo;
    var alturabaja;
    var sexobajo;
    var contMujeresAltas = 0;
    var flag = 0;

    for (var i = 1; i <= 5; i++) {
        altura = parseInt(prompt("Introduza la altura del jugador n°" + i));
        sexo = prompt("Introduzca un sexo");
        while (altura <= 0 || altura >= 250) {
            altura = parseInt(prompt("Error. Introduzca una altura valida"));
        }

        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Introduzca un sexo valido");
        }

        if (altura < alturabaja || flag == 0) {
            alturabaja = altura;
            sexobajo = sexo;
            flag = 1;
        }
        if (altura >= 190) {
            contMujeresAltas++;

        }


        suma += altura;

    }
    promedio = suma / 5;

    alert("El promedio de las alturas es: "+ promedio + "cm, la altura mas baja es: " + alturabaja + "cm, el sexo de la persona con la altura mas baja es " + sexobajo + " y la cantidad de mujeres que superaron los 190cm son: " + contMujeresAltas);
}

