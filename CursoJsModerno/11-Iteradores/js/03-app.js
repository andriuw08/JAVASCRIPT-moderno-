// Ejercicio fizz buzz

// 3 6 9 12... fizz
// 5 10 15 10... buzz
// 15 30 45... fizz buzz

for (let i = 1 ; i < 101 ; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Fizz Buzz`)
    } else if ( i % 3 === 0 ) {
        console.log(`${i} Fizz`)
    } else if ( i % 5 === 0 ) {
        console.log(`${i} Buzz`)
    } else {
        console.log(`${i}`)
    }
}