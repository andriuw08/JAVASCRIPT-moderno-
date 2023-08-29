// Tambien podemos cambiar el css del documento, quitar o agregar clases

// const encabezado = document.querySelector('h1')
// encabezado.style.backgroundColor = 'red'
// // Las clases son igual pero sin el guion, sino con la segunda palabra en mayusculas
// encabezado.style.fontFamily = 'Arial';

// Agregar clases
const card = document.querySelector('.card')
card.classList.add('nueva-clase')
// console.log(card.classList)

// Quitar clases
card.classList.remove('nueva-clase')
console.log(card.classList)