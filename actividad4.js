// ejercicio 2 

var x = Number(prompt("Dame un número"))
var y = 1;
while (y<=x){
    if (y % 5 === 0) console.log(y);
    y++
}

//ejercicio 3 

var numero = Number(prompt('introduce un numero'));
var index = 1

do{
    if(index % 5 === 0){
        console.log(index)
    }
    index++;
} while(index <= numero);

//ejercicio 4

for(i=1; i<=50; i++){
    if(i % 2!==0){
        console.log(' ${i} es impar')
    }
}