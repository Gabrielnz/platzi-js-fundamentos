// Ciclo for

const nombre = 'Gabriel'
const dias = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
]

function correr ()
{
  const min = 5
  const max = 15
  // retorna un numero random entre 5 y 15
  return Math.round(Math.random() * (max - min) + min)
}

let totalKms = 0
const length = dias.length
for (let i = 0; i < length; i++)
{
  const kms = correr()
  totalKms += kms
  console.log(`El dia ${dias[i]} ${nombre} corrio ${kms} kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrio ${promedioKms.toFixed(2)} kms`)
