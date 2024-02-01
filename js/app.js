//Variable Globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    const botonMascotaJugador = document.getElementById('boton-mascota')
    const botonFuego = document.getElementById('boton-fuego')
    const botonAgua = document.getElementById('boton-agua')
    const botonTierra = document.getElementById('boton-tierra')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    const selectHipodoge = document.getElementById('hipodoge')
    const selectCapipepo = document.getElementById('capipepo')
    const selectRatigueya = document.getElementById('ratigueya')
    const selectTucapalma = document.getElementById('tucapalma')
    const spanMascotaJugador = document.getElementById('mascota-jugador')

    if (selectHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (selectCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (selectRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (selectTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else { 
        alert("Por Favor Seleccione una mascota ")
    }

    seleccionarMascotaEnemigo()
}

//Seleccion del enemigo aleatoriamente segun el numero escogido aleatoriamente desde un rango de 1 a 4
//Los cualea representan los nombre de cada creatura
function seleccionarMascotaEnemigo(){
    const selectAleatorio = aleatorio(1, 4)
    const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (selectAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (selectAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (selectAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    } else {
        spanMascotaEnemigo.innerHTML = "Tucapalma"
    }
}
 
//Ataque del Jugador segun sea su eleccion presionando alguno de los botones de ataque - invoca la funcion
function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

//El ataque escogido por el enemigo aleatoriamente
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    
    combate()
}

//Definicion de quien gana, pierde o empata
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" ) {
        crearMensaje("GANASTE")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador = vidasJugador - 1
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones!! GANASTE :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, PERDISTE :(")
    }
        
}

function crearMensaje(resultadoBatalla) {
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + '¡¡'+ resultadoBatalla +'!!'

    sectionMensaje.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}




window.addEventListener('load', iniciarJuego )