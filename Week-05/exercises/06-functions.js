console.log("06-functions");

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log("06.a");

function suma(number1, number2) {
  return number1 + number2;
}

var result = suma(14, 5);

console.log(result);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log("06.b");

function suma(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    alert("Un parametro ingresado no es un numero");
    return NaN;
  } else {
    return number1 + number2;
  }
}
console.log(suma(14, "not a number"));

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.*/

console.log("06.c");

function validateInteger(x) {
  if (x % 1 == 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}
console.log(validateInteger("14"));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y 
que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/

console.log("06.d");

function sumaEnteros(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    alert("Un parametro ingresado no es un numero");
    return NaN;
  } else if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    alert("Uno o ambos numeros ingresados no son enteros, se redondera");
    number1 = Math.round(number1);
    number2 = Math.round(number2);
  }
  return suma(number1, number2);
}

console.log(sumaEnteros(14.5, 5));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.*/

console.log("06.e");

function isInteger(num) {
  return num % 1 === 0;
}

function roundToInteger(num) {
  return Math.round(num);
}

function sumaEnteros(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    alert("Un parametro ingresado no es un numero");
    return NaN;
  } else {
    if (!isInteger(number1)) {
      alert("El primer número no es entero, se redondeará");
      number1 = roundToInteger(number1);
    }
    if (!isInteger(number2)) {
      alert("El segundo número no es entero, se redondeará");
      number2 = roundToInteger(number2);
    }
  }
  return suma(number1, number2);
}

console.log(sumaEnteros(14, 5));

console.log(sumaEnteros(14.5, 5));
