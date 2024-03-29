const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataques-Del-Jugador')
const ataqueDelEnemigo = document.getElementById('ataques-Del-Enemigo')
const contenedorTarjetas = document.getElementById('contenedor-Tarjetas')

let mokepones = []
//Variable Globales
let ataqueJugador
let ataqueEnemigo
let opcionMokepones
let selectHipodoge
let selectCapipepo
let selectRatigueya 
let selectTucapalma 
let mascotaJugador
let vidasJugador = 3
let vidasEnemigo = 3

//Creando la clase mokepon - Todas las clases inician con mayuscula
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

//De la clase mokepon, creamos o  instanciamos los sgtes objetos o los llamados creaturas mokepon
let hipodoge  = new Mokepon('Hipodoge','./assets/hipodoge.png', 5)
let capipepo  = new Mokepon('Capipepo','./assets/capipepo.png', 5)
let ratigueya = new Mokepon('Ratigueya','./assets/ratigueya.png', 5)
let tucapalma = new Mokepon('Tucapalma','./assets/tucapalma.png', 5)

//creando y añadiendo valores al array o arreglos, ataques[] a cada objeto con el metodo push
//Atraves de esta forma podemos llegar a los atributos o propiedades de cada objeto
hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌎', id: 'boton-tierra'}
)

capipepo.ataques.push(
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '🌎', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌎', id: 'boton-tierra'}
)

tucapalma.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌎', id: 'boton-tierra'}
)

//Añadiendo cada objeto al arreglo mokepones con el metodo push
mokepones.push(hipodoge, capipepo, ratigueya, tucapalma)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    //El metodo forEach nos ayudara a iterar o recorrer cada uno de nuestros objetos que en este caso este dentro
    //de nuestro arreglo llamado mokepones, en el cual se encuentrs nustros 4 objetos o personajes
    //forEach -> Por cada uno de los elementos de nuestro arreglo(mokepones[]) haz algoo
    mokepones.forEach((mokepon) => {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-mokepon" for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionMokepones

        selectHipodoge = document.getElementById('Hipodoge')
        selectCapipepo = document.getElementById('Capipepo')
        selectRatigueya = document.getElementById('Ratigueya')
        selectTucapalma = document.getElementById('Tucapalma')
    })
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
        spanMascotaJugador.innerHTML = "selectHipodoge.id"
        mascotaJugador = selectHipodoge.id
    } else if (selectCapipepo.checked){
        spanMascotaJugador.innerHTML = "selectCapipepo.id"
        mascotaJugador = selectCapipepo.id
    } else if (selectRatigueya.checked) {
        spanMascotaJugador.innerHTML = "selectRatigueya.id"
        mascotaJugador = selectRatigueya.id
    } else if (selectTucapalma.checked){
        spanMascotaJugador.innerHTML = "selectTucapalma.id"
        mascotaJugador =selectTucapalma.id
    } else { 
        alert("Por Favor Seleccione una mascota ")
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    console.log(ataques)
}

//Seleccion del enemigo aleatoriamente segun el numero escogido aleatoriamente desde un rango de 1 a 4
//Los cuale representan los nombre de cada creatura
function seleccionarMascotaEnemigo(){
    const selectAleatorio = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[selectAleatorio].nombre
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