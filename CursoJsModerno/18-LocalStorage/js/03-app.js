// Tambien podemos agregar o eliminar elementos del localStorage
localStorage.removeItem('nombre')

// Ya que en el localStorage no hay update, se hace asi
const mesesArray = JSON.parse( localStorage.getItem('meses') )

mesesArray.push('Nuevo mes')
console.log(mesesArray)
localStorage.setItem('meses', JSON.stringify(mesesArray)) // Esto actualiza un item ya que en localStorage no hay update como tal 

localStorage.clear() // Esto limpia el localStorage