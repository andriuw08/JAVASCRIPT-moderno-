// Variables y selectores
const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')


// Eventos
eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)

    formulario.addEventListener('submit', agregarGasto)
}



// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto) // EL number se encarga de convertirlo simepre a un numero entero
        this.restante = Number(presupuesto)
        this.gastos = []
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto] // recordar que esto esta haciendo una copia de gastos y le esta agregando el contendio de gasto
        this.calcularRestante()
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 ) // intera sobre todo el agrega y devuelve un total
        this.restante = this.presupuesto - gastado
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id != id )
        this.calcularRestante()
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const {presupuesto, restante} = cantidad
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert')

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        divMensaje.textContent = mensaje

        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        setTimeout(() => {
            divMensaje.remove()
        }, 3000)
    }

    mostarGastos(gastos) {
        this.limpiarHTML()
        gastos.forEach( gasto => {
            const {cantidad, nombre, id} = gasto
            const nuevoGasto = document.createElement('li')
            nuevoGasto.className = 'list-group-item d-flex justify-conten-between align-items-center'
            nuevoGasto.dataset.id = id

            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`

            const btnBorrar = document.createElement('button')
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')
            btnBorrar.innerHTML = 'Borrar &times'
            btnBorrar.onclick = () => {
                eliminarGasto(id)
            }
            nuevoGasto.appendChild(btnBorrar)
            
            gastoListado.appendChild(nuevoGasto)
        });
    }

    limpiarHTML() {
        while(gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante
    }

    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto, restante} = presupuestoObj

        const restanteDiv = document.querySelector('.restante')

        // comrobar y cambiar el color cuando pasa el %
        if((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning')
            restanteDiv.classList.add('alert-danger')
        } else if((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success')
            restanteDiv.classList.add('alert-warning')
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert- warning')
            restanteDiv.classList.add('alert-success')
        }

        // validar restate negativo
        if(restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error')
            formulario.querySelector('button[type="submit"]').disabled = true
        }
    }
}

const ui = new UI()
let presupuesto


// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Cual es tu presupuesto?')

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) { // el isNan evalua si estamos intentando meter una string como si fuese un numero
        window.location.reload() // esto recarga la pagina
    }

    presupuesto = new Presupuesto(presupuestoUsuario)
    ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e) {
    e.preventDefault()

    // leer dato
    const nombre = document.querySelector('#gasto').value
    const cantidad = document.querySelector('#cantidad').value

    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
        return
    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error')
        return
    }

    const gasto = { nombre, cantidad, id: Date.now() } // esto es lo contrario a un destructuring, une el nombre y la cantidad en gasto
    presupuesto.nuevoGasto(gasto)
    ui.imprimirAlerta('Gasto agregado correctamente')

    // imprimir los gastos
    const { gastos, restante } = presupuesto
    ui.mostarGastos(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuesto(presupuesto)

    formulario.reset()
}

function eliminarGasto(id) {
    // esto elimina de la clase
    presupuesto.eliminarGasto(id)

    // esto elimina del html
    const { gastos, restante } = presupuesto
    ui.mostarGastos(gastos)
    ui.actualizarRestante(restante)
    ui.comprobarPresupuesto(presupuesto)
}