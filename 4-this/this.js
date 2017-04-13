// This

class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }

  // Se puede asignar this a una variable y usarla en la funcion declarada
  listarAmigos () {
    const _this = this
    this.amigos.forEach(function (amigo) {
      console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
    })
  }

  // Se puede especificar a la funcion que haga binding del this del contexto en el
  // cual fue declarada
  listarAmigos2 () {
    this.amigos.forEach(function (amigo) {
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    }.bind(this))
  }

  // Cuando se define una arrow function, dentro del cuerpo de esa function
  // this va a tomar el valor que tiene this fuera del contexto en el cual fue declarada
  // dicha funcion
  listarAmigos3 () {
    this.amigos.forEach(amigo => {
      console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
    })
  }
}

const gabriel = new Persona("Gabriel", ["Roynny", "Eliecer", "Tulio"])
