document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    console.log(email)

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner')

    // Asignar eventos
    // inputEmail.addEventListener('blur', function() { // ESto es un callBack, retorna una funcion una vez se cumple el evento
    //     console.log('Sali del input') //Este console.log se ejecuta cuando se sale del input
    // })

    // inputEmail.addEventListener('blur', function(e) {
    //     console.log(e.target.value) // De esta manera imprimimos lo que vamos escribiendo en el input, el cuando se muestra depende del tipo de evento que estamos escuchando
    // })

    // inputAsunto.addEventListener('blur', function(e) {
    //     console.log(e.target.value)
    // })

    // inputMensaje.addEventListener('blur', function(e) {
    //     console.log(e.target.value)
    // })

    inputMensaje.addEventListener('input', validar) // DE esta manera podemos hacerlo ahorrandonos las call Functions, sino usando una funcion para todo
    inputEmail.addEventListener('input', validar)
    inputAsunto.addEventListener('input', validar)

    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();  // ESto hace que no se ejecute la accion por default
        resetFormulario()
    })

    function enviarEmail(e) {
        e.preventDefault()

        spinner.classList.add('flex')
        spinner.classList.remove('hidden')

        setTimeout(() => {
            spinner.classList.remove('flex')
            spinner.classList.add('hidden')
            resetFormulario()

            // Crear alerta
            const alertaExito = document.createElement('P')
            alertaExito.classList.add('bg-greem-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase')
            alertaExito.textContent = 'Mensaje de enviado automatico'
            formulario.appendChild(alertaExito)
            setTimeout(() => {
                alertaExito.remove()
            }, 3000)
        }, 3000)
    }

    function validar(e) {
        console.log(e.target.value)
    }

    // Validar que un campo no este vacio
    function validar(e) {
        // console.log(e.target.parentElement.nextElementSibling) // dom traveling
        if(e.target.value.trim() === ''){ // COn el trim eliminamos los espacios en blanco, para evitar que se llene solo con espacios en blanco
            mostrarAlerta(`EL campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('EL email no es valido', e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return
        }

        // ASignar valores
        email[e.target.name] = e.target.value.trim().toLowerCase()

        comprobarEmail()

        limpiarAlerta(e.target.parentElement)
    }

    function mostrarAlerta(mensaje, referencia) { // con la referencia obtenemos el padre del cual se esta ejecutando el evento, para asi mostrar el mensaje debajo del input que llama el evento
        // Comprobar si ya existe una alerta para eliminarla
        const alerta = referencia.querySelector('.bg-red-600')
        if(alerta) {
            alerta.remove()
        }
        
        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center') // en telwind los atributos se colocan como si fuesen clases directamente en el class

        // Inyectar el mensjae de error en el formulario
        referencia.appendChild(error) // appendChild agrega al final del codigo, innerHtml elimina todo y coloca solo ese codigo hmtl
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600')
        alerta.remove()
    }

    function validarEmail(email) {
        const regex = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const resultado = regex.test(email)
        return resultado
    }

    function comprobarEmail() {
        // console.log(Object.values(email),includes('')) // Con esto obtenemos los valores de arreglo que tiene email, asunto y mensaje adentro, con el includes obtener true en caso de que este lleno o false en caso de vacio 
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return
        }
            btnSubmit.classList.remove('opacity-50')
            btnSubmit.disabled = false
    }

    function resetFormulario(){
        email.email = ''
        email.asunto = ''
        email.mensaje = ''
        formulario.reset()
        comprobarEmail()
    }
})