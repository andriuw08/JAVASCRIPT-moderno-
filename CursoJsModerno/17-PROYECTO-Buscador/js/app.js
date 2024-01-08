const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')

const max = new Date().getFullYear()
const min = max - 10

document.addEventListener('DOMContentLoaded', () => { //Ejecutar cuando se cargo el app
    mostrarAutos()

    // Llena el año 
    llenarSelect()
})

function mostrarAutos() {
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, color, transmision, precio } = auto
        const autoHTML = document.createElement('p')

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Color: ${color} - Transmision: ${transmision} - Precio: ${precio    }
        `

        resultado.appendChild(autoHTML)
    })
}

// Generar años para le select d eaños
function llenarSelect() {
    for( let i = max ; i >= min ; i-- ) { //Lo hace de la fecha actual hasta 10 años menos
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}