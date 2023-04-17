console.log("02-strings");

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log("02.a");

var longWord = "stethoscope";
console.log(longWord.toUpperCase());

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log("02.b");

var firstString = "friendship";
var newString = firstString.substring(0, 5);

console.log(newString);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/

console.log("02.c");

var moreThanTen = "programming";
var secondNewString = moreThanTen.substring(8);

console.log(secondNewString);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log("02.d");

var possible = "this is really difficult";
var reallyPossible = possible.substring(1, 0);
var questioningMyself = possible.substring(1, 24);

console.log(reallyPossible.toUpperCase() + questioningMyself.toLowerCase());

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer
espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log("02.e");

var raquis = "magnificent cat";
var kitten = raquis.indexOf(" ");

console.log(kitten);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)*/

console.log("02.f");

var long = "appreciate motivation";
var tooLong = long.substring(0, 1);
var reallyLong = long.substring(10, 12);
var wayTooLong = long.substring(1, 10);
var takeMeBackToFigma = long.substring(12, 22);

console.log(
  tooLong.toUpperCase() +
    wayTooLong.toLowerCase() +
    reallyLong.toUpperCase() +
    takeMeBackToFigma.toLowerCase()
);
