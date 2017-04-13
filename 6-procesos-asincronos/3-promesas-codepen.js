// Este es el ejemplo de codepen utilizando promesas en vez de callbacks
// y utilizando fetch en vez de un metodo get escrito de forma manual

function handleError(err) {
  console.log(`El request fallo: ${err}`)
}

let luke

fetch('http://www.swapi.co/api/people/1/')
  .then(response => response.json())
  .then(json => {
    luke = json
    return fetch(luke.homeworld)
  })
  .then(response => response.json())
  .then(json => {
    luke.homeworld = json
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
  })
  .catch(err => handleError(err))
