const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

const formulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')

let editando;

class Citas {
    constructor(){
        this.citas = []
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita]
        console.log(this.citas)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id)
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita) // recordar que el map retorna nuevo arreglo en base al original, en cambio filter retorna el mismo 
    }
}

class UI {
    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12')

        if(tipo = 'error'){
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        divMensaje.textContent = mensaje

        // agregar al dom
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

        setTimeout(() => {
            divMensaje.remove()
        }, 5000)
    }

    imprimirCitas({citas}){ // si lo metemos entre llaves haces el destructuring directamente desde el parametro 
        this.limpiarHTML()
        
        citas.forEach (cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita
            const divCita = document.createElement('div')
            divCita.classList.add('cita', 'p-3')
            divCita.dataset.id = id

            // scrpting
            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-title', 'font-weight-bolde')
            mascotaParrafo.textContent = mascota

            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `
            const telefonoParrafo = document.createElement('p')
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span> ${telefono}
            `
            const fechaParrafo = document.createElement('p')
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">fecha: </span> ${fecha}
            `
            const horaParrafo = document.createElement('p')
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">hora: </span> ${hora}
            `
            const sintomasParrafo = document.createElement('p')
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">sintomas: </span> ${sintomas}
            `

            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
            btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>'
            btnEliminar.onclick = () => eliminarCita(id)

            const btnEditar = document.createElement('button')
            btnEditar.classList.add('btn', 'btn-info')
            btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /> </svg>'
            btnEditar.onclick = () => cargarEdicion(cita)

            // agregar los parrafos
            divCita.appendChild(mascotaParrafo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)

            // agregar cita al html
            contenedorCitas.appendChild(divCita)
        })
    }

    limpiarHTML() {
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}

const ui = new UI()
const administrarCitas = new Citas()


eventListeners()
function eventListeners() {
    mascotaInput.addEventListener('change', datosCitas)
    propietarioInput.addEventListener('change', datosCitas)
    telefonoInput.addEventListener('change', datosCitas)
    fechaInput.addEventListener('change', datosCitas)
    horaInput.addEventListener('change', datosCitas)
    sintomasInput.addEventListener('change', datosCitas)

    formulario.addEventListener('submit', nuevaCita)
}

const citaObj = { // tenemos que estar pendientes que los names de los inputs sean igual que los que vamos a llenar 
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

function datosCitas(e){
    citaObj[e.target.name] = e.target.value
}

function nuevaCita(e){
    e.preventDefault()

    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj

    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios')
        return
    }

    if(editando){
        ui.imprimirAlerta('Editado correctamente')

        // pasar objeto para editar
        administrarCitas.editarCita({...citaObj})


        // regresar boton al estado original 
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cambios'
        //Elimina el modo edicion
        editando = false
    } else {
        // generar id
        citaObj.id = Date.now()

        administrarCitas.agregarCita({...citaObj})// DE esta manera, con los 3 puntos y las llaves le pasamos una copia del objeto, para que no se utilice el mismo objeto original, de esta manera evitamos que mientras que lo vamos llenando se vayan sobreescribiendo los ya creados

        ui.imprimirAlerta('Se agrego correctamente')
    }

    formulario.reset()
    reiniciarObj()

    ui.imprimirCitas(administrarCitas)
}

function reiniciarObj() {
    citaObj.mascota = '',
    citaObj.propietario = '',
    citaObj.telefono = '',
    citaObj.fecha = '',
    citaObj.hora = '',
    citaObj.sintomas = ''
}

function eliminarCita(id) {
    // elimiar
    administrarCitas.eliminarCita(id)

    //avisar
    ui.imprimirAlerta('La cita se elimino correctamente')

    // refrescar
    ui.imprimirCitas(administrarCitas)
}

function cargarEdicion(cita) {
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita
    
    // llenar inputs
    mascotaInput.value = mascota
    propietarioInput.value = propietario
    telefonoInput.value = telefono
    fechaInput.value = fecha
    horaInput.value = hora
    sintomasInput.value = sintomas

    // llenar objeto
    citaObj.mascota = mascota
    citaObj.propietario = propietario
    citaObj.telefono = telefono
    citaObj.fecha = fecha
    citaObj.hora= hora
    citaObj.sintomas = sintomas
    citaObj.id = id

    // cambiar mensaje
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'

    editando = true
}