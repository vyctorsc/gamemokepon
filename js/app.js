//Variable Globales
let ataqueJugador
let ataqueEnemigo

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
    }{
        
    }
}

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

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    
    crearMensaje()
}

function crearMensaje() {
    let sectionMensaje = document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo

    sectionMensaje.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}




window.addEventListener('load', iniciarJuego )