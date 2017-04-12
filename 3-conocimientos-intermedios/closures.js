// Closures

// funcion para saludar una familia
const saludarFamilia = apellido => {

  return function saludarMiembroDeFamilia (nombre) {
    console.log(`Hola ${nombre} ${apellido}`)
  }
}

// funcion para ponerle un prefijo a una palabra
const hacerPrefijo = prefijo => {

  return function mostrarConPrefijo (palabra) {
    return prefijo + palabra
  }
}

// La misma funcion de arriba, usando arrow functions
const hacerPrefijo2 = prefijo => palabra => prefijo + palabra

const saludarNunez = saludarFamilia("Nunez")
const saludarPerez = saludarFamilia("Perez")

saludarNunez("Gabriel")
saludarNunez("Diana")
saludarNunez("Dianer")
saludarPerez("Dario")
saludarPerez("Julian")
saludarPerez("Roynny")

// Crear una funcion que permita tener prefijos para las palabras
