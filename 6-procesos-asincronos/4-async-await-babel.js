// Este es el ejemplo de codepen utilizando async-await en vez de promesas,
// y corriendolo en el Repl de Babeljs.io, con los siguientes presets:
// es2015, react, stage-2

function handleError(err) {
  console.log(`El request fallo: ${err}`)
}

async function getLuke() {

  try {
    const responseLuke = await fetch('http://www.swapi.co/api/people/1/')
    let luke = await responseLuke.json()
    const responseHomeworld = await fetch(luke.homeworld)
    luke.homeworld = await responseHomeworld.json()
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
  } catch (err) {
    handleError(err)
  }
}

getLuke()
