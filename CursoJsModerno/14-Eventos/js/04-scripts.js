// evento en un formulario

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e){
    e.preventDefault()

    console.log('Buscando...')

    console.log(e)
}

// Con esto podemos prevenir la opcion default de enviar para asi poder hacer busquedas en el api y etc