// TAmbien se puede heredar protos para poder reutilizar metodos 

function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
} // Hay que recordar que a este objeto se le llama constructor

Cliente.prototype.tipoCliente = function() { // ESta es la manera de crear funciones en el proto
    console.log('Desde el proto')
    // aca adentro puedo crear funciones como se suelen hacer de costumbre
    let tipo
    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if(this.saldo> 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    } 
    return tipo
} // Esto hace que sea una funcion unicamente utilizable por Cliente, esto es un proto

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}

function Persona(nombre, saldo, telefono) {
    // this.nombre = nombre
    // this.saldo = saldo // como son los mimos atributos que cliente podemos heredarlos de cliente
    Cliente.call(this, nombre, saldo) // con call mandamos a llamar lo que queremos
    // como si heredamos el constructor de cliente
    this.telefono = telefono
}

// para heredar los protos tambien
Persona.prototype = Object.create(Cliente.prototype) // object.create es solo para copiar los protos de una funcion 
// de esta manera eliminamos el constructor de cliente que habiamos heredado anteriormente, por lo que debemos heredarlo nuevamente 
Persona.prototype.constructor = Cliente // asi heresamos especificamente el constructor

const juan = new Persona('Juan', 10000, 4515236954)
console.log(juan)
console.log(juan.nombreClienteSaldo()) // asi ya podemos utilizar las funciones del los protos que tiene Cliente, ya que son las que hemos heredado

Persona.prototype.mostrarTelefono = function () {
    return `El telefono de ${this.nombre} es ${this.telefono}`
}

console.log(juan.mostrarTelefono())

// El objeto que le da los protos a los demas se llama god object