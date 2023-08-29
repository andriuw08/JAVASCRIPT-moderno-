// Crear html desde el js

const nuevoEnlace = document.createElement('a')
// Agregando el texto
nuevoEnlace.textContent = 'Nuevo Enlace'
// añadiendo el href
nuevoEnlace.href = '/nuevo-enlace'

// console.log(nuevoEnlace)

const navegacion = document.querySelector('.navegacion');
// navegacion = insertBefore(enlace, navegacion.children[1])// le pasamos que es lo que queremos insertar y la posicion, con esto sirve para ingresar en posicion especificas
// aca con la referencia ya podemos hacer literlamente cualquier cosa, incluyendo agregar funciones que impriman cosas y etc
// Ejemplo para crear un card

const parrafo1 = document.createElement('P')
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto')


const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de rock'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p')
parrafo3.textContent = '800 por persona'
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('div')
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'

// Crear el card
const card = document.createElement('div')
info.classList.add('card');

//Asignar imagen
card.appendChild(imagen)

//Pasarle info
card.appendChild(info)

// Colocarlo en hmtl
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0])

