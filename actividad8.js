//ejercicio 1

//ejercicio 2
function sumaArreglo (arreglo) {
    let suma=0;
    for (var index = 0; index < arreglo.length; index++){
    suma += arreglo[index];
    }
    return suma
    }
    console.log(sumaArreglo([1, 2, 3, 4, 10, 11]))

//ejercicio 3
    function palindrome (frase){
        for (var i=0;i <frase.length/2;i++){
            if(frase[i]==frase[frase.length-i+1]){
            }else{
                return "No es palindromo'
            }
        }
        return "Es un palindromo"
        }
         var palabra = prompt("Inserta la palabra")
        console.log(palindrome(palabra))

// ejercicio 4
let convertirTemp = (temperatura, grados) => {
let resultado;
switch (grados) {
case "C":
    resultado = temperatura * 1.8 + 32;
    console.log(
        temperatura + "grados C * 1.8 + 32 = " + resultado + " grados F"
    );
    break;
case "F":
resultado = (temperatura - 32) * 0.555555556;
console.log(
"(" +
temperatura + " grados C * 1.8 + 32 = " + resultado + " grados F"
- 32) * 0.55 = "+
grados F"
):
break;
default:
break;
console. Log("Sólo puedo conventir grados C o grados F, intenta de nuevo");
I
sonventirTemp(26, "C");
convertirTemp(90, "F");
rasurarar.
convertirTemp(90,
4):