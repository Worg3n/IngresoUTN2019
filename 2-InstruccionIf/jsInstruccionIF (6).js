function Mostrar() {
    var edad
    edad = parseFloat(document.getElementById("edad").value);

    if (edad >= 18) {
        alert("Usted es mayor de edad");
    }
    else if (edad < 13) {
        alert("Es un niño");
    }
    else {
        alert("es un adolescente");
    }


}








