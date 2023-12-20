'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  /* 
  1. Guardar los factores en un array
  2. Debemos iniciar el array con el elemento 1
  3. Iniciamos nuestro divisor en 2
  4. Objetivo: descomponer el numero que nos pasan por parametro y entregar en array los factores
  5. Lo hacemos con un while
  6. Caso base: mientras el numero sea diferente de 1 o mayor a 1cd
  7. Dentro del while
    - La divicion debe ser exacta o resto 0 con la condicion del if.
    - Si es exacta -> pushear el factor al array
    - Dividimos el numero actual con el divisor del momento
    - Si no es exacta -> incrementamos el valor del divisor
  8. etornar los factores
  */

  const factores = [1];
  let divisor = 2;

  while(num !== 1){

    if(num % divisor === 0){

      factores.push(divisor)
      num /= divisor

    }else divisor++

  }
  
  return factores

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /*
  1. Va comparando de a dos valores: i con i + i
  2. Si el que esta en la posicion i es mayor a i + 1? intercambian posicion
  3. Debe crear una variable auxiliar que guarde el valor que esta en i antes del intercambio
  4. Entregar un array ordenado
  nota: Si el array termino de iterar sin cambios, significa que el array ya esta ordenado
  */

  let semaforo = true;

  while(semaforo){

    semaforo = false
    for (let i = 0; i < array.length - 1; i++) {

      if(array[i] > array[i+1]){
        
        let auxiliar = array[i]
        array[i] = array[i+1]
        array[i+1] = auxiliar

        semaforo = true
      }

    }

  }

  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  /*
  Va sacando el elemento y va comparando con el elemento de la izquierda
  cuando llegamos a la posicion 0 o cuando llega a un valor mas chico
  Tener que manejar dos punteros, uno que inicie en el que i inicie en el indice 1 y j que inicie en 0
  */
  
  for (let i = 0; i < array.length; i++) {

    let j = i - 1
    let auxiliar = array[i]

    while(j >= 0 && array[j] > auxiliar){

      array[j+1] = array[j]
      j--

    }
    array[j+1] = auxiliar

  }
  return array
}


let casas = [ 1, 2, 3, 4, 5, 9, 8, 7, 6]

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {

    let min = i
    for (let j = i + 1; j < array.length; j++) {
      
      if(array[j] < array[min]) min = j
      
    }
    let auxiliar = array[i]
    array[i] = array[min]
    array[min] = auxiliar
    
  }
  return array
}

let y = selectionSort(casas)
console.log(y);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
