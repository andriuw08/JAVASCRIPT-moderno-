// El problema con este codigo es que mientras mas va creciendo el proyecto, mas objetos y mas funciones para cada cosa voy necesitando y se hace complicado cuando es un proyecto en el que trabajan varias personas, aqui puede entrar los protoypes, en las siguiente clase 

function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

const juan = new Cliente('Juan', 500)

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresa(cliente) {
    const {nombre, saldo, categoria} = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo} de la categoria ${categoria}`
}

console.log(formatearCliente(juan))

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria
}

const CCJ = new Empresa('Codigo de juan', 4000, 'Cursos online')
console.log(formatearEmpresa(CCJ))
