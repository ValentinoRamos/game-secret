let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números");

    } else {
        //Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        } 
}
    
}

function verificarNumeroUsuario() {

    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos) === 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");    
   } else {
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p","El número secreto es menor")
    } else {
        asignarTextoElemento("p","El número secreto es mayor")
    } 
    intentos++;
    vaciarCaja();
   }
    return; 
}

function vaciarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() { 
    asignarTextoElemento("h1","El juego del número secreto");
    asignarTextoElemento("p",`Elige un número entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar Caja
    vaciarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","True");
    
}

condicionesIniciales();

// ejercicios de práctica

let listaGenerica = []
let lenguajesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"];
lenguajesDeProgramacion.push("Java","Ruby","GoLang")

function mostrarLenguajes(lista) {
    lista.reverse()
    console.log(lista)
    return;
}

mostrarLenguajes(lenguajesDeProgramacion);
