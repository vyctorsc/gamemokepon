//Variable Globales
let ataqueJugador = ''

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
    const selectAleatorio = aleatorioEnemigo(1, 4)
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
    alert(ataqueJugador)
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    alert(ataqueJugador)
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    alert(ataqueJugador)
}

function aleatorioEnemigo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}




window.addEventListener('load', iniciarJuego )