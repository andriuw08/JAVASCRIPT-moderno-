const dinero = 500;
const totalPagar = 300;
const tarjeta = true

if ( dinero > totalPagar ) {
    console.log("Si puede pagar")
} else if ( tarjeta ) {
    console.log("Si puedo pagar con la tarjeta")
} else {
    console.log("Fondos insuficientes")
}