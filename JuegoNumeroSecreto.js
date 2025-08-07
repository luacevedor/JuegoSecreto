//let titulo = document.querySelector("h1");
//titulo.innerHTML = 'Juego Numero Secreto';


//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'indica un numero del 1 al 10';

let numeroSecreto = 1;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

//console.log(typeof(numeroUsuario));
console.log(numeroSecreto);
//console.log(typeof(numeroSecreto));
//console.log(numeroUsuario);
//console.log(numeroUsuario === numeroSecreto);
console.log(intentos);


if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

} else {
    if(numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'el numero secreto es menor');
     } else {
        asignarTextoElemento('p', 'el numero secreto es mayor');
     }
     intentos++;
     limpiarCaja();

}
return;

}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log (numeroGenerado);
  console.log (listaNumerosSorteados);
  //si ya sorteamos todos los numeros
if(listaNumerosSorteados.length == numeroMaximo) {
  asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
}

  //si el numero generado esta incluido en la lista
 if (listaNumerosSorteados.includes(numeroGenerado)) {
  return generarNumeroSecreto();
 } else {
  listaNumerosSorteados.push(numeroGenerado);
  return numeroGenerado;
 }

}

function condicionesIniciales() {
    asignarTextoElemento('h1','juego numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de nuemeros
    //generar numero aleatorio
    //inicializar el numero e intentos
    condicionesIniciales();
    //deshabilitar el boton nuevo juego

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();



//Crea una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
    console.log("¡Hola, mundo!");
  }
  
  mostrarHola();







