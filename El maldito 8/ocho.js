function mostrar() {
    var numero;
    var respuesta;
    var acumuladorpos = 0;
    var contpos = 0;
    var contpares = 0;
    var contimpares = 0;
    var cont0 = 0;
    var promedio;
    var sumaneg = 0;
    var max;
    var min;
    var letra;
    var flag = 0;
    var sumapos = 0;
    var letramax;
    var letramin;
    do {
        numero = parseInt(prompt("Ingrese un numero que prefiera"));
        while (numero < -100 || numero > 100) {
            numero = parseInt(prompt("Error. Reingrese un numero valido"));
        }
        letra = prompt("Ingrere la letra que quiera");
        while (!(isNaN(letra))) {
            letra = prompt("Error. Reingrere una letra valida");
        }
        respuesta = confirm("Quiere repetir el proceso?");

        if (numero > 0) {
            contpos++;
            acumuladorpos += numero;
        }
        else if (numero < 0) {
            sumaneg += numero;
        }
        else {
            cont0++;
        }

        if (numero % 2 == 0) {
            contpares++;
        } else {
            contimpares++;
        }
        if (flag == 0 || numero > max) {
            max = numero;
            letramax = letra;


        } if (flag == 0 || numero < min) {
            min = numero;
            letramin = letra;
            flag = 1;
        }

    }
    while (respuesta);
    promedio = acumuladorpos / contpos;

    document.write("La cantidad de pares es: " + contpares + "<br> La cantidad de impares es: " + contimpares + "<br> La cantidad de ceros es: " + cont0 + "<br> El promedio de todos los números positivos ingresados: " + promedio + "<br> La suma de todos los números negativos: " + sumaneg + "<br> El número y la letra del máximo y el mínimo: " + max + " " + letramax + " " + min + " " + letramin);





}
