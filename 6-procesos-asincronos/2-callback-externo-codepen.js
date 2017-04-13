// este codigo se corre en codepen a manera de ejemplo, evitando tener que importar librerias
// y usar Node.js

function get(URL, callback) {
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function () {
    const DONE = 4
    const OK = 200

    if(this.readyState === DONE) {
      // Los callbacks siempre reciben como primer parametro el error, en caso de que haya ocurrido
      // de lo contrario se le manda null
      if(this.status === OK) {
        callback(null, JSON.parse(this.responseText))
      } else {
        callback(new Error(`Se produjo un error al realizar el request: ${this.status}`))
      }
    }
  }

  xhr.open('GET', URL)
  xhr.send(null)
}

function handleError(err) {
  console.log(`El request fallo: ${err}`)
}

// Primer callback
get('http://www.swapi.co/api/people/1/', function onResponse(err, luke) {

  if (err) return handleError(err)

  // Segundo callback
  get(luke.homeworld, function onHomeworldResponse(err, homeworld) {

    if (err) return handleError(err)

    luke.homeworld = homeworld
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
  })
})
