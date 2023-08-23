// Las arrow functions es una manera mas rapida de escribir una funcion
aprendiendo = () => {
    console.log('Aprendiendo js')
}

// Tambien se puede escribir asi 
aprendiendo2 = (tecnologia) => `Aprendiendo ${tecnologia}`;
// Si tiene solo una linea no es necesario las llaves y el return es implicito

console.log(aprendiendo2('Js'))

// Si en nuestra arroz funcion solo pasaremos un parametor, podemos quitar el parentesis

aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
// Si tiene solo una linea no es necesario las llaves y el return es implicito

console.log(aprendiendo2('Js'))