// fechas

const diaHoy = new Date() // ES importante saber que las fechas son de tipo objeto
const fechaEspecifica = new Date('1-5-2000') // Puede haber diferentes formatos


let valor

valor = diaHoy
valor = diaHoy.getFullYear() // este tipo de metodos obtendra especificamente el momento que le colocalos
// hay metodos para dia, horas, minutos, meses, time para los milisegundos, hay muchos tipos de metodos para la fecha


// el get extrae el valor, y el set sirve para poder modificar la fecha
valor = diaHoy.setFullYear(2010) // edita la fecha 