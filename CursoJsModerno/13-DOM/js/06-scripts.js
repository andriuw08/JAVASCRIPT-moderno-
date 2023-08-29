// modificar textos o imagenes desde el js

const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado)
console.log(encabezado.innerText) // Trae el texto
console.log(encabezado.textContent) // tambien trae el texto, pero siempre lo encuentro, a pesar de que el visibily sea none 
console.log(encabezado.innerHTML) // Trae el html

// si queremos modificar el texto
document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

// Tambien lo podemos hacer con una variable
const nuevoHeading = 'Nuevos Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// Tambien lo podemos hacer con imagenes
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'