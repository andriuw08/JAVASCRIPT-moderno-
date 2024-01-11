// Proyecto como si fuesen tweets para ir guardando ideas, el localStorage funciona para que aunque recarguemos se mantenga la informacion

// Variables
const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')
let tweets = [] // Arreglo para almacenar los tweets

// Event.listeners
eventListeners()
function eventListeners(){
    // agrega tweet
    formulario.addEventListener('submit', agregarTweet)
    // cargar del localStorage
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [] // ESto lo que hace es que busca en el localStorage el tweet, en caso de estar vacio solo le asigna arreglo vacio

        crearHTML()
    })
}

// Funciones
function agregarTweet(e) {
    e.preventDefault()

    // declarar el text-are
    const tweet = document.querySelector('#tweet').value // el punto value hace que nos devuelva el valor

    if(tweet === '') {
        mostrarError('No puede ir vacio') // el parametro es el mensaje que se manda 
        return // recordar que el return en el if hace que si eso ocurre no se ejecute mas las otras lineas de codigo
    } 

    // añadir los tweets

    const tweetObj = {
        id: Date.now(), // Al no tener una base de datos, no tienen id, por lo que podemos usar esto para identificarlos
        tweet
    }
    tweets = [...tweets, tweetObj] // recordar que el sprate operator hace una copia del arreglo y agrega el nuevo 
    console.log(tweets)

    // Crear el HTML con el tweet ya agregado 
    crearHTML()

    // Reiniciar el formulario cuando se crea un elemento
    formulario.reset()
}

// funcion para mostrar el error

function mostrarError(error) {
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    // Insertar en el contenido
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(() => {
        mensajeError.remove()
    }, 3000)
}

// Mostrar el estado de los tweets

function crearHTML() {
    limpiarHTML()
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // crear boton para eliminar
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText = 'X'
            // Para añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id)
            }
            // aca podemos crear el html
            const li = document.createElement('li')
            li.innerText = tweet.tweet

            listaTweets.appendChild(li)
            li.appendChild(btnEliminar)
        } )
    }

    sincronizarStorage()
}

// Agregar tweets al localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets)) // el json.stringufy es para poder convertir el arreglo de a string y poder guardarlo
}

// limpiar html para que no se repita con el appendChild
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild)
    }
}

// FUncion para eliminar los tweets 
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id) // filtra todos los filtros que NO coinciden con el que estamos intentando eliminar
    crearHTML()
}