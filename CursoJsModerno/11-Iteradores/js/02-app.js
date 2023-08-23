// Break corta la ejecucion de un for y continue nos permite identificar un elemento y continuar con la ejecucion

for (let i = 0 ; i < 10 ; i++) {
    if ( i === 5 ) {
        console.log("CINCO");
        continue; // lo que hace es que cuanddo llegue aqui lo corta, hace lo que queremos y luego continua con el for 
    }
    console.log(`${i}`)
}