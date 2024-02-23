const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const selectHipodoge = document.getElementById('hipodoge')
const selectCapipepo = document.getElementById('capipepo')
const selectRatigueya = document.getElementById('ratigueya')
const selectTucapalma = document.getElementById('tucapalma')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataques-Del-Jugador')
const ataqueDelEnemigo = document.getElementById('ataques-Del-Enemigo')

//Variable Globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Creando la clase mokepon
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

//De la clase mokepon, creamos los sgtes objetos o los llamados creaturas mokepon
let hipodoge = new Mokepon('Hipodoge','./assets/hipodoge.png', 5)

let capipepo = new Mokepon('Capipepo','./assets/capipepo.png', 5)

let ratigueya = new Mokepon('Ratigueya','./assets/ratigueya.png', 5)

let tucapalma = new Mokepon('Tucapalma','./assets/tucapalma.png', 5)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

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
//Los cuale representan los nombre de cada creatura
function seleccionarMascotaEnemigo(){
    const selectAleatorio = aleatorio(1, 4)

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

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensaje.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}




window.addEventListener('load', iniciarJuego )