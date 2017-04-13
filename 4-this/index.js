// Usando bind para cambiar el contexto de una funcion

class Toggable {
  constructor (element) {
    // inicializar el estado interno
    this.element = element
    this.element.innerHTML = 'Off'
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.element.addEventListener('click', this.onClick)
  }

  onClick (ev) {
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText () {
    this.element.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
