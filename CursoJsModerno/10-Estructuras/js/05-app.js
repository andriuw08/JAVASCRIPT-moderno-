// Si se tienen muchas condiciones es mejor utilizar un switch case

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo': 
        console.log(`Pagaste con ${efectivo}`);
        break;
    default: 
        console.log("Aun no has seleccionado un metodo de pago");
        break;
}

// Tambien se le pueden agregar funciones que se ejecuten en ese caso
