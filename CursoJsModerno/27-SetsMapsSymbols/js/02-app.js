// WeakSet la diferencia es que en un set puedes pasar cualquier valor mientras que weakset solo puedes pasar o agregar objetos

const weakset = new WeakSet() //

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakset.add(cliente)

console.log(weakset.has(cliente)) // este tipo de funcion va a retornar un booleano, true en caso de encontrarlo y false en caso de no encontrarlo 

console.log(weakset)