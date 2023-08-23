// En caso de estar vacio alguno de los parametros, podemos crear un parametro por default para que no sea undefined
// Se hace igualandolo a vacio, sin embargo yo prefiero hacerlo o afuera o adentro de la funcion, no en el parametro

function saludar(nombre, apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Juan', 'Perez')


