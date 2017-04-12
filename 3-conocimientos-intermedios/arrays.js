// Arrays

// spread operator ...

// reduce: va acumulando un valor por cada elemento del array
const suma = (...numeros) => numeros.reduce((acum, numero) => acum += numero, 0)

// map: regresa un array habiendo realizado una operacion con cada elemento del mismo
const dobles = (...dobles) => dobles.map(numero => numero * 2)

// filter: regresa un array con los elementos filtrados con lo que se defina en la funcion
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

suma(4, 8, 12, 35, 7)
dobles(2, 4, 5, 7)
pares(2, 5, 8, 7, 10, 0)
