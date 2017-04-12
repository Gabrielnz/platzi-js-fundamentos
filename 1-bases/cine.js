// Condiciones, expresiones y booleanos
const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameSacha = 'Sacha'
let ageSacha = 26

const nameSanti = 'Santi'
let ageSanti = 12

// si isWithAdult no se pasa por parametro, toma el valor false por defecto
const canWatchStarWars7 = (name, age, isWithAdult = false) =>
{
  if(age >= pgStarWars7)
  {
    alert(`${name} puede pasar a ver ${starWars7}`)
  }
  else if (isWithAdult)
  {
    alert(`${name} puede pasar a ver ${starWars7}.
    Aunque su edad es ${age}, se encuentra acompanada/o por un adulto.`)
  }
  else
  {
    alert(`${name} no puede pasar a ver ${starWars7}.
    Tiene ${age} anios y necesita tener ${pgStarWars7}`)
  }
}

canWatchStarWars7(nameSacha, ageSacha)
canWatchStarWars7(nameSanti, ageSanti, true)
