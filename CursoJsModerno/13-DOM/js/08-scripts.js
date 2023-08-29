// Recorrer el dom como si fuese un mapa

let navegacion = document.querySelector('nav');
console.log(navegacion.childNodes) // Los espacios en blanco se convierten en elementos, por ejemplo los saltos de linea en nuestro codigo

// La mejor manera es hacerlo con el children, ya que  con esto va  amostrar solamente los elementos html
console.log(navegacion.children) // Podemos acceder a elementos especificos con las posiciones []

// Por ejemplo podemos usarlo para saber los hijos y asi poder usarlos especificamente

let card = document.querySelector('.card');
console.log(card.children) // Asi sabremos que hijos tienen los cards
console.log(card.children[1].children)
// Podemos editar cosas de esta manera
card.children[1].children[1].textContent = 'Nuevos heading desde el traveling'
console.log(card.children[1].children[1].textContent)
// Es mas que nada para tener un camino a seguir mas especifico