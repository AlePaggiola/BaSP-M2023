console.log("04-if-else");

/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o 
igual que 0,5 mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

console.log("04.a");

var number;
console.log(Math.random());

if ((number >= 0, 5)) {
  alert("Greater than or equal to 0,5");
} else {
  alert("Lower than 0,5");
}

/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.*/

var age = 22;
if (age < 2) {
  console.log("Bebe");
} else if (age >= 2 && age <= 12) {
  console.log("Niño");
} else if (age >= 13 && age <= 19) {
  console.log("Adolecente");
} else if (age >= 20 && age <= 30) {
  console.log("Joven");
} else if (age >= 31 && age <= 60) {
  console.log("Adulto");
} else if (age >= 61 && age <= 75) {
  console.log("Adulto Mayor");
} else {
  console.log("Anciano");
}
