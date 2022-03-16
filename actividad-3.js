//ejercicio 1
// var numero = Number(prompt("escribe un numero"))

var numero = 29;

if (numero % 2 === 0){
    console.log('numero es divisible entre 2');
}else{
    console.log('No es divisible entre 2');
}

//ejercicio 2

var numero = Number(prompt('introduce un numero'))
var numero = 88;
if(numero%2 == 0){
    alert("el número" + numero + 'Es par');
}else{
    alert("el numero" + numero + 'no es par');
}

//ejercicio 3 

var numero = 99;
if(numero === 1000){
    console.log('Ganaste un premio')
}else{
    console.log('sigue participando');
}

// alter


//ejercicio 4
var numero1 = 33;
var numero2 = 89;
if(numero1>numero2){
    console.log('es menor que el primer numero');
}if else(numero1<numero2){
    console.log('es menor que el segundo numero');
}if else(numero1==numero2){
    null
} 

// alt correcta ej 4
var primerNumero = Number(prompt('1 numero'))
var segundoNumero = Number(prompt('2 numero'))

if (primerNumero < segundoNumero){
    console.log("El numero menor es: " + primerNumero);
}else{
    console.log("El numero menor es: " + segundoNumero);
}

//ejercicio 5
var numA = 10;
var numB = 5;
var numC = 10;
if (numA === numB && numA === numC) { console.log("TODOS LOS NUMEROS SON IGUALES")
}else if(numA > numB) { // se cumple si A es mayor que B
if (numA > numC) {
console.log("El número A", numA, "es el mayor")
} else if(numC> numA) {
console.log("El número C", numC, "es el mayor")
} else{
console.log("El número A y el número C son iguales", numA, numC)
}
} else if (numB > numA) { // se cumple si B es mayor que A
if (numB > numC) {
console.log("El número B", numB, "es el mayor")
} else if (numC > numB) {
console.log("El número C", numC, "es el mayor") }else { console.log("El número B y el C son iguales", numB, numC)
}
} else { console.log("El número B y el A son iguales", numA, numB)
}