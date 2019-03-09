function mostrar() {//la hora entre 22 y 24
    var hora = parseInt(document.getElementById("laHora").value);

    switch (hora) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("es de mañana");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alert("Es de tarde");
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            alert("es de noche");
            break;
        default:
            if (isNaN(hora)) {
                alert("la hora introducida no es valida");
            }
          if (hora >= 20 && hora<= 24) {
                alert("a dormir");
            }
            break;
    }


}
