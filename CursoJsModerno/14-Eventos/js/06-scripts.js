// Event Bubbling

const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en card')
})

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en info')
})

titulo.addEventListener('click', (e) => {
    e.stopPropagation() // Hace que solo se ejecute una vez y no se propague
    console.log('click en titulo')
})

// Es cuando al presionar sobre un evento se progagan y hacen que se ejjecuten los temas