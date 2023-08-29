// QuerySelector es la mejor manera de devolver elementos del html

const card = document.querySelector('.card');
console.log(card) // Retorna solo el primero que encuentre
// Funciona como selectores de css

const info = document.querySelector('.premium .info')
console.log(info)

// Seleccionar un hijo especifico como si fuese un selector de css
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)')
console.log(segundoCard)
// De esta manera estamos accediendo al segundo card
// Tambien se puede seleccionar ids pero usando #, como si fuese css