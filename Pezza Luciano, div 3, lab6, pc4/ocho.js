function mostrar() {
    var letras;
    var numeros;
    var suma = 0;
    var contpares = 0;
    var cant0 = 0;
    var prompos;
    var sumaneg = 0;
    var max;
    var min;
    var respuesta;
    var cantimpares = 0;
    var contpos = 0;
    var flag = 0;
    do {

        numeros = parseInt(prompt("Introduzca un numero las veces que quiera"));

        while (numeros < -100 || numeros > 100) {
            numeros = parseInt(prompt("Error. Reintroduzca un numero las veces que quiera"));
        }
        letras = prompt("Introduzca una letra");

        while (!(isNaN(letras))) {
            letras = prompt("Introduzca una letra valida");
        }

        if (numeros >= 1) {
            contpos++;

        }
        else if (numeros <= -1) {
            sumaneg = sumaneg + numeros;
        }
        else {
            cant0++;
        }
        if (numeros % 2 == 0) {
            contpares++;
        }
        else {
            cantimpares++;
        }


        if (numeros < max || flag == 0) {
            max = numeros;
            letras = numeros;
        }

        if (numeros > min || flag == 0) {
            min = numeros;
            letras = numeros;
            flag = 1;

        }

        respuesta = prompt("Introduzca s para repetir el proceso");
        suma = suma + numeros;
    }
    while (respuesta == "s");
    prompos = suma / contpos;

    document.write("el la cantidad de pares que hay son " + contpares + "<br>" + "La cantidad de numeros imapres son " + cantimpares + "<br>" + "La cantidad de 0 son " + cant0 + "<br>" + "El promedio de todos los positvios ingresados son:" + prompos + "<br>" + "La suma de los negativos es: " + sumaneg + "<br>" + "El numero y letra del max y el minimo son:" + min + "" + letras + " y " + max + "" + letras);

}

