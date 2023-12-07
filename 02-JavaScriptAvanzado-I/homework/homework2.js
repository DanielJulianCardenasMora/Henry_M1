// Primer ejercicio

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a; 
      console.log(b); // 8
      b = c;
      var x = 5; 
   };
   f(a, b, c); 
   console.log(b); // 9
};
c(8, 9, 10); 
console.log(b); // 10
console.log(x); // 1

// Segundo ejercicio

console.log(bar); // undefined
// console.log(baz); // undefined // ! BAZ IS NOT DEFINED
foo();
function foo() {
    console.log('Hola!'); // Hola
}
var bar = 1;
baz = 2;

// Tercer ejercicio

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco'; 
}
console.log(instructor); // Franco // Franco por statement 
// y por ser var, se reasigna, si es let, solo vive localmente

// Cuarto ejercicio

var instructor2 = 'Tony';
console.log(instructor2);
(function () {
   if (true) {
      var instructor2 = 'Franco';
      console.log(instructor2);
   }
})();
console.log(instructor2); // Tony // Tony por ser cambiada dentro de
// la funcion y afuera sigue igual


// Dentro de una funcion, las variables declaradas no 
// alteran las variables de afuera

// Quinto ejercicio

var instructor3 = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor3 = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor3); // The flash
   console.log(pm); // Reverse flash
}
console.log(instructor3); // The flash
console.log(pm); // Franco

// Sexto ejercicio

6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // Undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 33 - 10 = 23
3>2>1 // false
// [] == ![] // true

// Septimo ejercicio

function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

// Octavo ejercicio.

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack; 
}

console.log(getFood(false)); // Undefined

// Noveno ejercicio

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio de rosa

var test = obj.prop.getFullname;

console.log(test()); // Undefined

// Decimo ejercicio

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing(); // 1, 4, 3, 2