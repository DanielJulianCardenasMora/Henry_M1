'use strict';

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  let cuenta = 0;
  return function(){
      cuenta++
      return cuenta;
  }
}



/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e 
invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la 
invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la 
correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea 
necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  /* 
    1. retornar una funcion.
    2. aceptar un argumento e invocar a cb con este (arg)
    3. guardar el argumento junto con el resultado de la invocacion
    4. usar un objeto donde cada propiedad sea el argumento y su valor sea el resulado de la inbocacion de cb.
    5. si se vuelve a llamar con el mismo arg, no tendra que inbocar el cb


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) */

function cacheFunction(cb) {
  
  /*
    1. retorna otra funcion
    2. funcion retornada debe recibir un parametro
    3. funcion retornada debe invocar a la funcion 
    callback que recibe como parametro La funcion cacheFunction
    4. guarda el argumento con el resultado en un objeto
    5. dentro del 
  */
  let cache={}
  return function(arg){
    if (cache.hasOwnProperty(arg)){
      return cache[arg];  
    }else {
      return cache[arg]=cb(arg);  
    }
  }
}

//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, 
  dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, 
  tres funciones que retornen una cadena (string) y el delimitador especificado 
  (asteriscos, guiones, y guiones bajos, respectivamente). 
  Las funciones obtenidas deberían recibir solamente un argumento 
  - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, '*','*');
let textoGuiones = crearCadena.bind(this, '-','-');
let textoUnderscore = crearCadena.bind(this, '_','_');

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
