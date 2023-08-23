// while se ejecuta mientras la condicion se cumpla

let i = 0;

// while( i < 10) {
//     console.log(`Numero ${i}`)
//     i++;
// } // Se ejecuta mienttras que i sea menor a 10

while ( i < 100 ) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Fizz Buzz`)
    } else if ( i % 3 === 0 ) {
        console.log(`${i} Fizz`)
    } else if ( i % 5 === 0 ) {
        console.log(`${i} Buzz`)
    } else {
        console.log(`${i}`)
    }

    i++;
}