// Callbacks

// Esta instruccion la ejecuta una API externa a JavaScript, por lo que una vez
// lista pasa a la cola de tareas, esperando que el EventLoop la ejecute
setTimeout(function callback() {
  console.log('A')
}, 1000)

// Esto es un cuello de botella en la pila de ejecucion, por lo que tardara un tiempo
// antes de que se ejecute la siguiente linea de ejecucion
for (let i = 0; i < 9999999999; i++) ;

// Luego de que se ejecute esta linea, es que el EventLoop va a revisar la cola de tareas
// y ejecutar la tarea que esta pendiente del setTimeout
console.log('B')
