// forEach y Map, son la mejor forma de reccorer, en lugar de un for, while o dowhile

// forEach se ejecuta una vez por cada uno de los elementos

const pendientes = ['Tarea', 'Comer', 'Entrenar']

pendientes.forEach( (pendiente, id) => { //Pendiente va a ser en donde se va a almacenar cada uno de los valores del arreglo
    console.log(`${id}: ${pendiente}`) // el id es para que tome la posicion
})

// Hay que recordar que con map funciona exactamente igual pero es para que guardemos la informacion en una nueva variable

