const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear()
const min = max - 10

// Generar un objeto para hacer busuqeta
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', () => { //Ejecutar cuando se cargo el app
    mostrarAutos(autos)

    // Llena el año 
    llenarSelect()
})

// Escuchar los select
marca.addEventListener('change', e => { // esto lo escucha cuando hace un cambio el selector, es muy usado para los selects
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})

year.addEventListener('change', e => { 
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
})

minimo.addEventListener('change', e => { 
    datosBusqueda.minimo = parseInt(e.target.value)
    filtrarAuto()
})

maximo.addEventListener('change', e => { 
    datosBusqueda.maximo = parseInt(e.target.value)
    filtrarAuto()
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto() 
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto() 
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto() 
})

function mostrarAutos(autos) {
    limpiarHTML()
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, color, transmision, precio } = auto
        const autoHTML = document.createElement('p')

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Color: ${color} - Transmision: ${transmision} - Precio: ${precio    }
        `

        resultado.appendChild(autoHTML) // con apendeCHild no eliminamos el html
    })
}

//Limpiar html
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild) //firstchild evalua si tiene algo adentro 
    }
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

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor ) // Esto es una funcion de alto nivel, lo que hace es que el parametro dela funcion es otra funcion
    console.log(resultado)
    if(resultado.length){
        mostrarAutos(resultado)
    } else {
        noResultado()
    }
}

function noResultado() {
limpiarHTML()

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay ningun Resultado'
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) {
    if( datosBusqueda.marca ) {
        return auto.marca === datosBusqueda.marca
    }
    return auto
}

function filtrarYear(auto) {
    if( datosBusqueda.year ) {
        return auto.year === datosBusqueda.year
    }
    return auto
}

function filtrarMinimo(auto) {
    if( datosBusqueda.minimo ) {
        return auto.precio >= datosBusqueda.minimo
    }
    return auto
}

function filtrarMaximo(auto) {
    if( datosBusqueda.maximo ) {
        return auto.precio <= datosBusqueda.maximo
    }
    return auto
}

function filtrarPuertas(auto) {
    if( datosBusqueda.puertas ) {
        return auto.puertas === datosBusqueda.puertas
    }
    return auto
}

function filtrarTransmision(auto) {
    if( datosBusqueda.transmision ) {
        return auto.transmision === datosBusqueda.transmision
    }
    return auto
}

function filtrarColor(auto) {
    if( datosBusqueda.color ) {
        return auto.color === datosBusqueda.color
    }
    return auto
}