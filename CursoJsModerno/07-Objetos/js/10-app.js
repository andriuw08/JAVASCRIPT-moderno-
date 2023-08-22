const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

const medida = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medida);

const resultado = Object.assign(productom, medida);
const resultado2 = { ...producto, ...medida}

console.log(resultado);
console.log(resultado2);

// Son dos maneras de unir dos objetos, los ... es el spread operator
