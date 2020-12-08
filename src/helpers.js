export function calcularTotal(cantidad, plazo) {
    /* 
        Cantidades
        0    - 1000  = 25%
        1001 - 5000  = 20%
        5001 - 10000 = 15%
        +10000       = 10%
    */

    let intereses;
    if(cantidad <= 1000)
        intereses = cantidad * .25;
    else if(cantidad > 1000 && cantidad <= 5000)
        intereses = cantidad * .20;
    else if(cantidad > 5000 && cantidad <= 10000)
        intereses = cantidad * .15;
    else
        intereses = cantidad * .10;

    /* 
        Plazos
        2 meses  = 5%
        6 meses  = 10%
        12 meses = 15%
        24 meses = 20%
    */

    switch(plazo){
        case 3:
            intereses += cantidad * .05;
            break;
        case 6:
            intereses += cantidad * .10;
            break;
        case 12:
            intereses += cantidad * .15;
            break;
        case 24: 
            intereses += cantidad * .20;
            break;
        default:
            break;
    }

    return intereses + cantidad;

}