
// El ; es necesario, si no se coloca la IIFE se va a ejecutar
// en la misma sentencia que la linea anterior
const nombre = "Gabriel";

(function saludar () {
  console.log(`Hola ${nombre}`)
})()
