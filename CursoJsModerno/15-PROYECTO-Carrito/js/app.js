// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let actirulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    //Vaciar el carrito de compras
    vaciarCarritoBtn.addEventListener('click', () => {
        actirulosCarrito = [] //Reseteo del arreglo
        limpiarHTML() // Eliminar html
    })
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

//Elimina un curso del carrito 
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        //Elimina del arreglo de articulosCarriot por el data-id
        actirulosCarrito = actirulosCarrito.filter( curso => curso.id != cursoId )

        //Limpiar HTML
        carritoHTML();
    }
}

// Vaciar carrito de compras
fun

// Lee el contenido del HTML al que le dimos click y extae la informacoin del curso
function leerDatosCurso(curso) {
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito 
    const existe = actirulosCarrito.some( curso => curso.id === infoCurso.id )
    if (existe) {
        // Actualizamos la cantidad
        const cursos = actirulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso
            } else {
                return curso
            }
        } )
        actirulosCarrito = [...cursos]
    } else {
        //Agrega elementos al arreglo de carritos
        actirulosCarrito = [...actirulosCarrito, infoCurso];
    }

    console.log(actirulosCarrito)

    carritoHTML()
}

// Muestra le carrito de compras en el html
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML();

    // Recorre el carriot y genera el html
    actirulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${imagen}" width="100"> </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> X </a> </td>
        `

        // Agrega el HTML al tbody
        contenedorCarrito.appendChild(row)
    })
}

//Elimina los cursos del tbody
function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}


