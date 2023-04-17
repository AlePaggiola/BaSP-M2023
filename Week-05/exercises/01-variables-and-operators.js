console.log("01-variables-and-operators");

/* a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.*/

console.log("01.a");
var firstNum = 14;
var secondNum = 7;
var thirdNum = firstNum + secondNum;

console.log(thirdNum);

/* b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

console.log("01.b");

var string1 = "Hi, ";
var string2 = "are you from Montevideo?";
var string3 = string1 + string2;

console.log(string3);

/* c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).*/

console.log("01.c");

var pet1 = "black cat";
var pet2 = "white cat";
var pets = pet1.length + pet2.length;

console.log(pets);
