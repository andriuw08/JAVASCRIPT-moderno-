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

const pedro = new Cliente('Pedro', 6000)
console.log(pedro.tipoCliente())
console.log(pedro.nombreClienteSaldo())
pedro.retiraSaldo(1000)
console.log(pedro.nombreClienteSaldo)

console.log(pedro)

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria
}

const CCJ = new Empresa('Codigo de juan', 4000, 'Cursos online')
