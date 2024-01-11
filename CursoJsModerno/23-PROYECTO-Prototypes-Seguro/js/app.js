// proyecto para hacer cotizacion de un automovil con prototypes


// constructores

function Seguro(marca, year, tipo) {
    this.marca = marca
    this.year = year
    this.tipo = tipo
}

// proto para la cotizacion
Seguro.prototype.cotizarSeguro = function() {

    let cantidad
    const base = 2000
    switch(this.marca) {
        case '1':
            cantidad = base * 1.15
            break
        case '2':
            cantidad = base * 1.05
            break
        case '3':
            cantidad = base * 1.35
            break
        default:
            break
    }

    // leer el año
    // la funcionalidad hara que mientras mas alto sea el año menor va a ser la diferencia
    const diferencia = new Date().getFullYear() - this.year
    cantidad -= ((diferencia * 3) * cantidad) / 100

    // si el seguro es basico o completo cambia la multiplicacion
    if(this.tipo === 'basico') {
        cantidad *= 1.30
    } else {
        cantidad *= 1.50
    }

    return cantidad
}

function UI() {} // va vacio porque se va agregando progresivamente

// llenar el selector de años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max -20

    // llenado del select
    const selectYear = document.querySelector('#year')

    for(let i = max; i > min; i--) {
        let option = document.createElement('option')
        option.value = i
        option.textContent = i
        selectYear.appendChild(option)
    }
}

// proto para las alertas en pantalla
UI.prototype.mostrarMensajer = (mensaje, tipo) => {
    const div = document.createElement('div')
    if(tipo = 'error') {
        div.classList.add('error')
    } else {
        div.classList.add('correcto')
    }

    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje

    // insertar en el formulario
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.insertBefore(div, document.querySelector('#resultado')) // inserta en el segundo valor
    setTimeout(() => {
        div.remove()
    }, 3000)
}

UI.prototype.mostrarResultado = (total, seguro) => {
    // crear resultado
    const div = document.createElement('div')
    div.classList.add('mt-10')

    div.innerHTML = `
        <p class="header"> Tu Resumen </p>
        <p class="font-bold"> Total: ${total}</p>
    `

    const resultadoDiv = document.querySelector('#resultado')
    resultadoDiv.appendChild(div)
}

const ui = new UI()

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones() // comienza a llenar los años
})

eventListener()
function eventListener() {
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e) {
    e.preventDefault()

    // leer los datos
    const marca = document.querySelector('#marca').value
    const year = document.querySelector('#year').value
    const tipo = document.querySelector('input[name="tipo"]:checked').value // esta es la menera de evaluzat un input de tipo radio 

    if(marca === '' || year === '' || tipo === '') {
        ui.mostrarMensajer('Todos los campos son obligatorios', 'error')
        return
    }

    ui.mostrarMensajer('cotizando...', 'exito')

    const seguro = new Seguro(marca, year, tipo)
    const total = seguro.cotizarSeguro()

    ui.mostrarResultado(total, seguro)
}

