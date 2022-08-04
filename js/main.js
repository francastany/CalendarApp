//CALENDAR APP

//Creamos/inicializamos variables
const fechaActual = new Date();
const agregarEvento = document.getElementById("agregarEventoForm")
const eventosLista = document.getElementById("eventosLista")
// const proxEventosLista = document.getElementById("proxEventosLista")


//Creamos la clase constructora para los objetos "Eventos"
class Evento{
    constructor(name, description, date, timeStart, timeEnd) {
        this.name = name
        this.description = description
        this.date = date
        this.timeStart = timeStart
        this.timeEnd = timeEnd
    }
}

//Creamos el Array vacío donde guardaremos los Eventos
let eventos = []

//Definimos la función para mostrar los eventos en pantalla
function mostrarEvento() {
    let eventosStorage = JSON.parse(localStorage.getItem("eventos")) // pasar de formato JSON a objeto
    
    eventosLista.innerHTML = ""

    eventosStorage.forEach((evento, indice) => {
        eventosLista.innerHTML += `
        <div class="evento row" id="evento${indice}">
            <span class="evento-name col-6">${evento.name}</span>
            <span class="evento-date col">${evento.date}</span>
            <span class="evento-time col">${evento.timeStart} - ${evento.timeEnd}</span>
            <div class="eventoFooter col-1">
                <svg class="eliminarEvento" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>
            </div>
        </div>
        `
    })
}
function eliminarEvento() {
    let eventosStorage = JSON.parse(localStorage.getItem("eventos"))

    eventosStorage.forEach((evento, indice) => {
        let eliminarEvento = document.getElementById(`evento${indice}`).lastElementChild.lastElementChild
        
        eliminarEvento.addEventListener("click", () => {
            document.getElementById(`evento${indice}`).remove()
            eventos.splice(indice, 1)
            localStorage.setItem("eventos", JSON.stringify(eventos))
            console.log(` ${evento.name} eliminado. `);

            Toastify({
                text: "¡Evento eliminado correctamente!",
                duration: 2000,
                gravity: "bottom", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: false, // Prevents dismissing of toast on hover
                style: {
                  background: "#FF8E3C",
                },
            }).showToast();
        })
    }) 
}

//Llamamos al Local Storage
(localStorage.getItem("eventos")) ? eventos = JSON.parse(localStorage.getItem("eventos")) : localStorage.setItem("eventos", JSON.stringify(eventos))

/* Antigua forma de llamar al Local Storage 
if(localStorage.getItem("eventos")) {
   eventos = JSON.parse(localStorage.getItem("eventos"))
} else { //si no existe una key "tareas", entonces lo crea
    localStorage.setItem("eventos", JSON.stringify(eventos))
} */

mostrarEvento();
eliminarEvento();

if (eventosLista != null || agregarEvento != null) {
    // Evento Submit del formulario para crear los eventos.
    agregarEvento.addEventListener("submit", (event) => {
        event.preventDefault()
    
        let name = document.getElementById("eventName").value
        let description = document.getElementById("eventDescription").value
    
        let date = new Date(document.getElementById("eventDate").value)
        date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000) // Sacando el OffSet por defecto de JS. (No resta un numero al día)
    
        let timeStart = document.getElementById("eventTimeStart").value
        let timeEnd = document.getElementById("eventTimeEnd").value
    
        const evento = new Evento (name, description, date.toLocaleDateString(), timeStart, timeEnd)
        eventos.push(evento)
        
        localStorage.setItem("eventos", JSON.stringify(eventos))
        
        console.log(eventos)
        // console.log(evento.date, fechaActual)
    
        agregarEvento.reset()

        Toastify({
            text: "¡Evento creado correctamente!",
            duration: 2000,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
              background: "#FF8E3C",
            },
        }).showToast();
    })
    
    //Mostrar eventos en pantalla y eliminarlos
    agregarEvento.addEventListener("submit", (evento) => {
        mostrarEvento();
        eliminarEvento();
        
    })

}
