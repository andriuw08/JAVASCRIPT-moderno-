// mostrar ocultar 
const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

// estar atento por si se presiona
btnFlotante.addEventListener('click', mostrarOcultarFooter)

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo')){
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo')
    } else {
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
    }
}
