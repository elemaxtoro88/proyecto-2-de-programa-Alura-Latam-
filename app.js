// document.querySelector vincula elemento de html en js
// .innerHTML = ejecuta la orden dentro del html
let listaDeNumerosSorteados = []
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 100;
let intentosMaximos = 7

function asignarTextoElemento(elemento, texto)
{let elementoHtml = document.querySelector (elemento);
elementoHtml.innerHTML = texto;
return; }

function verificarIntento() 
{let numeroUsuario = parseInt(document.getElementById("valorUsuario").value); 
     if(numeroUsuario === numeroSecreto) 
    {asignarTextoElemento("p",`Acertaste!, bien hecho!,los hiciste en ${intentos  } ${intentos === 1 ?"intento" : "intentos"}`);
   document.getElementById("reiniciar").removeAttribute("disabled");
} else  
     { if (numeroUsuario > numeroSecreto) 
                {asignarTextoElemento("p","El numero es menor");}
                else {asignarTextoElemento("p","El numero es mayor");
                } intentos++;
                }
                
 if (intentos  == intentosMaximos ) {asignarTextoElemento("p",`Game over ya fueron ${intentosMaximos} intentos`)
 document.getElementById("reiniciar").removeAttribute("disabled");
            document.getElementById("verificar").setAttribute("disabled", "true");}
 
 limpiarCaja()
 

        return;
    }
function limpiarCaja() {let valorCaja = document.getElementById("valorUsuario");
    valorCaja.value = (""); intentos +1
}
 
function generarNumeroSecreto() 
{let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaDeNumerosSorteados);

    if (listaDeNumerosSorteados.length == numeroMaximo) {
asignarTextoElemento ("p","Ya se sortearon todos los numeros");}
 else {
    if (listaDeNumerosSorteados.includes(numeroGenerado)) { 
        return generarNumeroSecreto();
 } else {
    listaDeNumerosSorteados.push(numeroGenerado);
    return numeroGenerado }
 }
}

function condicionesIniciales() {
asignarTextoElemento("h1","Juego del numero secreto");
asignarTextoElemento("p",`Indica el numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

 }
function reiniciarJuego() { 
    limpiarCaja()
    condicionesIniciales()
    document.querySelector("#reiniciar").setAttribute("disabled", "true")
    }
condicionesIniciales()
