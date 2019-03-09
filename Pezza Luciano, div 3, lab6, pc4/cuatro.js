function mostrar() {
    var numero1 = parseInt(prompt("Introduzca el numero1"));
    var numero2 = parseInt(prompt("Introduzca el numero2"));
    var resta;
    resta = numero1 - numero2;
    if (numero1 == numero2) {
        alert(numero1 + "" + numero2);
    }
    else if (numero1 < numero2){
        alert(numero1 + numero2);
    }
   else {
       alert(resta);
    if(resta > 10){
     alert("la resta es " + resta + " y supero a 10");
    }   
    }


}
