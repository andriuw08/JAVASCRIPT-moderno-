// eventos en el teclado

const busqueda = document.querySelector('.busqueda')

busqueda.addEventListener('keydown', () => {
    console.log('busqueda')
})

// keydown cuando presionamos una tecla
// keyup cuando presionamos pero soltamos
// blur cuando entramos a un input y presionamos afuera
// copy copiar
// paste cuando pegamos algo
// cut cuando cortamos algo
// input cuando hacemos cualquier cosas menos el blur

busqueda.addEventListener('input', (e) => {
    console.log(e)
}) // esto nos va a mostrar todo lo que esta sucediendo con el evento

busqueda.addEventListener('input', (e) => {
    console.log(e.type)
}) // nos dice cual es el elemento en el que estamos escuchando el evento

busqueda.addEventListener('input', (e) => {
    console.log(e.target)
}) // muestra el elemento especifico

busqueda.addEventListener('input', (e) => {
    console.log(e.target.value)
}) // muestra exactamente lo que se esta escribiendo, con esto podemos hacer validaciones, si esta vacio, es igual a, etc
