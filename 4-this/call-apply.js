// Usando call y apply

const gabriel = {
  nombre: "Gabriel",
  apellido: "Nunez"
}

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < veces; i++) {
    console.log(str)
  }
}

// Call ejecuta inmediatamente la funcion
saludar.call(gabriel, 3, true)

// Apply hace lo mismo que Call, pero recibiendo un array de parametros
saludar.apply(gabriel, [3, true])

// Call puede usarse con un array de parametros de la siguiente forma
const params = [3, true]

saludar.call(gabriel, ...params)
