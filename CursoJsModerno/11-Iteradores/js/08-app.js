// forIn

const pendientes = ['Tarea', 'Comer', 'Entrenar']

for ( let pendiente in pendientes ) {
    console.log(pendiente)
}

//ForIn es para iterar sobre objetos

const automovil = {
    modelo: 'Camaro',
    year: 1980,
    motor: '6.8'
}

for ( let propiedad in automovil ) {
    console.log(`${automovil[propiedad]}`)
}

