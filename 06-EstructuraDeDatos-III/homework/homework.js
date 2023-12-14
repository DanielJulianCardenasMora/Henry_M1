'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente

  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/





function BinarySearchTree(value) {

   this.value = value
   this.left = null
   this.right = null

}

BinarySearchTree.prototype.size = function(){

   // ............. esto actua en orden de forma recursiva
   //....................................... solo un dato en la raiz
   if(!this.left && !this.right) return 1

   // ...................................... Si el nodo raiz tiene un solo nodo hijo
   if(!this.right) return 1 + this.left.size()
   // ......... esto aplica recursion a el otro lado y analiza que solo debe devolver 1
   if(!this.left) return 1 + this.right.size()

   // ....................................... El nodo tiene ambos hijos nodos
   return 1 + this.left.size() + this.right.size()


}
BinarySearchTree.prototype.insert = function(value){

   if(value < this.value){

      if(!this.left){

         const myTree = new BinarySearchTree(value)
         this.left = myTree

      }else{

         this.left.insert(value)

      }

   }else if(value >= this.value){

      if(!this.right){

         const myTree = new BinarySearchTree(value)
         this.right = myTree;

      }else{

         this.right.insert(value)

      }

   }

}
BinarySearchTree.prototype.depthFirstForEach = function(cb, recorrido){

   // ................................ paso opciones de recorrido con un parametro que yo especifico.

   if(recorrido === 'in-order' || !recorrido){

      // = nodo izquierdo - nodo padre - nodo derecho
      if(this.left) this.left.depthFirstForEach(cb, recorrido)
      cb(this.value)
      if(this.right) this.right.depthFirstForEach(cb, recorrido)

   }
   // tambien se puede
   // this.left && this.left.depthFirstForEach(cb, recorrido)
   // cb(this.value)
   // this.right && this.right.depthFirstForEach(cb, recorrido)

   if(recorrido === 'pre-order'){

      // nodo padre - nodo izquierdo - nodo dereccho

      cb(this.value)
      this.left && this.left.depthFirstForEach(cb, recorrido)
      this.right && this.right.depthFirstForEach(cb, recorrido)
      
   }

   if(recorrido === 'post-order'){

      // nodo izquierdo - nodo der - nodo padre

      this.left && this.left.depthFirstForEach(cb, recorrido)
      this.right && this.right.depthFirstForEach(cb, recorrido)
      cb(this.value)      

   }

}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []){

   // conteo por niveles

   cb(this.value)
   this.left && arr.push(this.left)
   this.right && arr.push(this.right)

   arr.length && arr.shift().breadthFirstForEach(cb, arr)

}
BinarySearchTree.prototype.contains = function(value){

   if(value === this.value) return true;
   if(value < this.value){
      if(!this.left) return false;
      return this.left.contains(value)
   }
   if(value > this.value){
      if(!this.right) return false;
      return this.right.contains(value)
   }

}



















// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
