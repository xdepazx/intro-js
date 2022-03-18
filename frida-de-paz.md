# Quiz 
​
#### Nombre: __Frida de Paz_
## Chapter 1: Into Programming
​
### Self-Evaluation
​
#### Section: Code
​
---
​
##### 1. What's a program?
​
> 
Un conjunto de instrucciones que las computadoras entienden que hacen algo
​
##### 2. What's a computer language?
​
> 
-- Son el conjunto de reglas que hacen funcionar o hacer algo a las computadoras
​
##### 3. What's a variable?
​
> 
-- una caja que aloja values
​
##### 4. What's a statement?
​
> Son Operadores, nombres y numeros en grupo
​
##### 5. From the statement `a = b * 2` identify its parts _(literals, variables, operators)._
​
> 
-- a es el varible, el operador el signo de =, la expresion es la variable, el signo de * es un operador
​
##### 6. What's an expression?
​
> Una expresion es cuando se compara a variables con operadores
​
##### 7. How many expressions can you indentify from the statement `a = b * 2;`?
​
>  
​
##### 8. What's the difference between `interpreted` and `compiled` code?
​
> _interpretado va leyendo/ejecutando de arriba hacia abajo_
​
##### 9. Is JavaScript `interpreted` or `compiled`? Explain why.
​
> _Interpretado porque se lee de arriba a abajo_
​
#### Section: Try It Yourself
​
---
​
##### 10. Output Exercises.
​
Consider: `var a = 1;`
​
Write the code to: 
​
###### 10.1. print `a` in the __console__
​
> _`// console.log(a)
`_
​
###### 10.2. show `a` in a __popup__
​
> _`// alert(console.log(a))`_
​
##### 11. Input Exercises.
​
Code challenge:
​
Ask the user's name with a __prompt__ message `"Please, type your username"` and store it in a variable `username`, then log the value in the console.
​
Solution:
​
```js
// username = prompt("Please, type your username");
    console.log(username)
```
​
#### Section: Operators
​
---
​
##### 12. Complete the sentence:
​
JavaScript has both u___ and b___ operators, and one special t___ operator
​
> _boolean, typeof_
​
##### 13. Operators types.
​
Name the _types of operators_ you know, and give some __basic__ examples.
​
> _asignacion: simbolo =
    operaciones matemáticas: suma, resta, etc
    typeof: identifica el tipo de datos que estamos usando
    boolean: comparacion, igualdad_
​
#### Section: Values & Types
​
---
​
##### 14. Name JavaScript built-in types aka as _primitive_ values.
​
> _your answer here_
​
##### 15. What's coercion in JS?
​
> _ser explícito_
​
##### 16. Explain the difference between `implicit` and `explicit` coercion in JS. Give examples.
​
> _your answer here_
​
#### Section: Code Comments
​
---
​
##### 17. What are the two types of comments in JS? Give examples.
​
> _// una linea
*/ /* un bloque de lineas
_
​
##### 18. Why is it important to comment code?
​
> _para explicar lo que está pasando y el otro colaborador lo entienda_
​
#### Section Variables
​
---
​
##### 19. Does JavaScript use Static or Weak typing?
​
> _your answer here_
​
##### 20. Describe `static typing` aka `type enforcement`.
​
> _your answer here_
​
##### 21. Describe `weak typing` aka `dynamic typing`.
​
> _your answer here_
​
##### 22. Name some conventions to write constants in JS.
​
> _your answer here_
​
#### Section: Blocks
​
---
​
##### 23. Is this valid code in JS?
​
```js
var amount = 100;
​
{
  amount = amount * 2;
  console.log(amount)
}
```
​
> _no_
​
#### Section: Conditionals
​
---
​
##### 24. Write a block of code to validate if a variable `number` is less than `10` to log `one digit`, log `two digits` otherwise.
​
Solution:
​
```js
// 
var number = 9;
if (number < 10){
    console.log(one digit)
} else {
    console.log(two digits)
}
```
​
#### Section: Loops
​
---
​
##### 25. Write a block of code to log numbers from `0-9` using `while`, `do-while` and `for` loops.
​
**`while`** solution:
​
```js
// your code here
```
​
**`do-while`** solution:
​
```js
// your code here
```
​
**`for`** solution:
​
```js
// your code here
```
​
##### 26. What are the three clauses for a `for` loop?
​
> _your answer here_
​
#### Section: Functions
​
---
​
##### 27. What's a function?
​
> _un valor que contiene uno o varios parámetro que hacen algo_
​
##### 28. Write a function `sum` that receives two numbers as arguments and returns the sum of both.
​
Solution:
​
```js
// 
var a= 1;
var b = 2;
const suma = function (numero, numero2) {
    return a + b;
};
console.log(suma)
```
​
##### 29. What's `scope` in JS?
​
> _la casita de una variable en el código_
​
##### 30. Answer `true` or `false` for the following statements:
​
Consider:
​
```js
function outer() {
  var a = 1;
​
  function inner() {
    var b = 2;
  }
​
  inner();
}
​
outer();
```
​
###### 30.1. Does the `inner` function have access to the `outer` function scope?
​
> _your answer here_
​
###### 30.2. Does the `outer` function have access to the `inner` function scope?
​
> _your answer here_
​
#### Section: Challenges
​
---
​
##### 1.1 Create a function `calculateAreaOfACircle` that receives `radius` as parameter. Use a constant `PI` equal to `3.14159`. _Avoid the temptation of using the `Math`library._
​
Solution:
​
```js
// create the constat PI here
​
​
// create your function here
​
​
// Do NOT touch this code.
console.log('Expect area of a circle with radius = "3" to be "28.27431" ->', calculateAreaOfACircle(3) == 28.27431)
```