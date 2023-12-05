'use strict';

function BinarioADecimal(num) {
      
   var numInt = num.split('');
   var indice = [];
   var cuenta = 0;

   // ===== Hacer un arreglo con el indice del numero por separado.

   for (var i=0; i<numInt.length; i++){
      var pos = (numInt[i] * 0) + cuenta;
      cuenta++;
      indice.push(pos);   
   }

   // ===== Hacer un arreglo con el indice de derecha a izquierda.

   var indiceRev = indice.reverse();

   // ===== Hacer un arreglo con un numero base 2 por cada num binario recivido.

   var baseDos = numInt.map(
      (num) => {
         return ((num*0)+2);
      }
   )

   // ===== Multiplicar cada numero 2 por la potencia del indice de derecha a izquierda.
   
   var potencia = [];
   for (var i=0; i<baseDos.length; i++){
      var numPot = baseDos[i] ** indiceRev[i];
      potencia.push(numPot);
   }
   
   // ===== Incluir en un array nuevo aquellos resultados que vengan de un numero binario 1

   var sinCero = [];
   for (var i=0; i<numInt.length; i++){
      if (numInt[i] == 1){
         sinCero.push(potencia[i]);
      }
   }

   // ===== Sumar los valores de todos los resultados 

   var sumaFin = 0;
   for (var i=0; i<sinCero.length; i++){
      sumaFin += sinCero[i];
   }

   return sumaFin;

}

function DecimalABinario(num) {}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
