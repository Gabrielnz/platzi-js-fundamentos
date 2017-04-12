// Scope global

function saludar10 () {
  const nombre = "Gabriel"
  // Scope local
  for (let i = 0; i < 10; i++) {
    console.log(`Hola ${nombre}`)
  }
}

saludar10()
