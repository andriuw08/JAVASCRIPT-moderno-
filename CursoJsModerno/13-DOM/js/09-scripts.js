// Como eliminar elementos del dom
// Por ejemplo para eliminar elementos, de un carrito, un like de una foto, etc

const primerEnlace = document.querySelector('a')
console.log(primerEnlace)
primerEnlace.remove();

// La otra opcion es eliminar desde el padre 
let navegacion = document.querySelector('.navegacion');
console.log(navegacion.children)
navegacion.removeChild( navegacion.children[2] )