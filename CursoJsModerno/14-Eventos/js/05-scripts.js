// Eventos con scroll

window.addEventListener('scroll', () => {
    console.log('scrolling')
    const scrollPX = window.scrollY
    console.log(scrollPX) // Asi vemos el pixel por el cual hemos hecho scroll, de abajo haci arriba, es decir, si estamos arriba es 0

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect() 
// De esta manera podemos identificar si ya hay un elemento en pantalla, para hacer aanimaciones o etc
    if(ubicacion.top < 100) {
        console.log('El elemento ya es visible')
    } else {
        console.log('Aun no esta visible')
    }
})