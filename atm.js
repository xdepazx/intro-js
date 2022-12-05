

// localstorage
window.localStorage.setItem('userMar', 926);
var userMar = localStorage.getItem('userMar');
var saldoMar1 = parseInt(userMar);
console.log(saldoMar1)

window.localStorage.setItem('userMarina', 638);
var userMarina = localStorage.getItem('userMarina');
var saldoMarina1 = parseInt(userMarina);
console.log(saldoMarina1)

window.localStorage.setItem('userIlse', 781);
var userIlse = localStorage.getItem('userIlse');
var saldoIlse1 = parseInt(userIlse);
console.log(saldoIlse1)

window.localStorage.getItem('userMar');

//convertir a objeto JS de JSON
JSON.parse(window.localStorage.getItem('userMar'));
JSON.parse(window.localStorage.getItem('userMarina'));
JSON.parse(window.localStorage.getItem('userIlse'));



// log in intento 2

function ingresar()
{
    var usuario = document.getElementById("myForm").elements[0].value;
    var password = document.getElementById("myForm").elements[1].value;
    if(usuario=="Marina" && password=="abc")
        {
            window.location.href='ingreso-marina.html';
        }
    else if(usuario=="Ilse" && password=="123")
        {
            window.location.href="ingreso-ilse.html";
        }
    else if(usuario=="Mar" && password=="456")
        {
            window.location.href="ingreso-mar.html";
        }
    else 
        {
            window.alert("Usuario y/o contraseña incorrecta, inténtalo de nuevo");
        }
}

// funcion saldo Mar
function verSaldo ()
{
    document.getElementById("saldo").innerHTML = "Tu saldo es de " + saldoMar1;
}

function verSaldoIlse ()
{
    document.getElementById("saldoIlse").innerHTML = "Tu saldo es de " + saldoIlse1;
}

function verSaldoMarina ()
{
    document.getElementById("saldoMarina").innerHTML = "Tu saldo es de " + saldoMarina1;
}

//funcion ingresar dinero MAR
function ingreso() {
    ingreso = parseInt(prompt("Cantidad que vas a ingresar"));
    saldoMar1 = saldoMar1 + ingreso;
    if(ingreso == 0) {
        alert("Inválido, ¡ingresa una cantidad mayor a 0!")
    } else {
    document.getElementById("ingreso-realizado").innerHTML = "Listo, operación realizada. Tu nuevo saldo es de " + saldoMar1;
} 

}

function ingresoMarina() {
    ingreso = parseInt(prompt("Cantidad que vas a ingresar"));
    saldoMarina1 = saldoMarina1 + ingreso;
    if(ingreso == 0) {
        alert("Inválido, ¡ingresa una cantidad mayor a 0!")
    } else {
    document.getElementById("ingreso-realizado").innerHTML = "Listo, operación realizada. Tu nuevo saldo es de " + saldoMarina1;
} 
}

function ingresoIlse() {
    ingreso = parseInt(prompt("Cantidad que vas a ingresar"));
    saldoIlse1 = saldoIlse1 + ingreso;
    if(ingreso == 0) {
        alert("Inválido, ¡ingresa una cantidad mayor a 0!")
    } else {
    document.getElementById("ingreso-realizado").innerHTML = "Listo, operación realizada. Tu nuevo saldo es de " + saldoIlse1;
} 
}

//funcion retirar

function retiro ()
{
    rt = parseInt(prompt("Cuanto vas a retirar"));
    // saldo = document.getElementById('saldo');
    saldoMar1 = saldoMar1 - rt;
    if(rt > saldoMar1) {
        window.alert("Esta cantidad excede tu saldo actual, inténtalo de nuevo")
    }
    else {
        console.log("Listo, operación realizada. Tu nuevo saldo es de")
        
    }
    document.getElementById("rt-realizado").innerHTML = "Listo, operación realizada. Tu nuevo saldo es de " + saldoMar1;
}

function retiroMarina ()
{
    rt = parseInt(prompt("Cuanto vas a retirar"));
    // saldo = document.getElementById('saldo');
    saldoMarina1 = saldoMarina1 - rt;
    if(rt > saldoMarina1) {
        window.alert("Esta cantidad excede tu saldo actual, inténtalo de nuevo")
    }
    else {
        console.log("Listo, operación realizada. Tu nuevo saldo es de")
        
    }
    document.getElementById("rt-realizado").innerHTML = "Listo, operación realizada. Tu nuevo saldo es de " + saldoMarina1;
}

function retiroIlse ()
{
    rt = parseInt(prompt("Cuanto vas a retirar"));
    // saldo = document.getElementById('saldo');
    saldoIlse1 = saldoIlse1 - rt;
    if(rt > saldoIlse1) {
        window.alert("Esta cantidad excede tu saldo actual, inténtalo de nuevo")
    }
    else {
        console.log("Listo, operación realizada. Tu nuevo saldo es de")
        
    }
    document.getElementById("rt-realizado").innerHTML = "Listo, operación realizada. Tu nuevo saldo es de " + saldoIlse1;
}