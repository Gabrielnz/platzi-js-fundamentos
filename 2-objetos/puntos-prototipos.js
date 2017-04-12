// Definiendo la clase Punto, usando prototipos

function Punto (x, y)
{
  this.x = x
  this.y = y
}

// Definiendo los prototipos
Punto.prototype.moverEnX = function moverEnX (x) {
  this.x += x
}

Punto.prototype.moverEnY = function moverEnY (y) {
  this.y += y
}

Punto.prototype.distancia = function distancia (p) {
  const x = this.x - p.x
  const y = this.y - p.y

  return Math.sqrt(x * x + y * y).toFixed(2)
}

/*
crea un nuevo objeto, a ese objeto le asigna como prototipo la funcion Punto,
y por ultimo lo asigna a la variable
 */
const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
