class Evento{
    constructor(name, description, date, timeStart, timeEnd) {
        this.name = name
        this.description = description
        this.date = date
        this.timeStart = timeStart
        this.timeEnd = timeEnd
    }
}
const eventos = []

const agregarEvento = document.getElementById("agregarEventoForm")
const eventosLista = document.getElementById("eventosLista")


agregarEvento.addEventListener("submit", (event) => {
    event.preventDefault()

    let name = document.getElementById("eventName").value
    let description = document.getElementById("eventDescription").value
    let date = document.getElementById("eventDate").value
    let timeStart = document.getElementById("eventTimeStart").value
    let timeEnd = document.getElementById("eventTimeEnd").value

    const evento = new Evento (name, description, date, timeStart, timeEnd)
    eventos.push(evento)
    console.log(eventos)

    agregarEvento.reset()
})

agregarEvento.addEventListener("submit", (evento) => {
    eventos.forEach(evento => {
        eventosLista.innerHTML += `
        <li class="evento">
            <span class="evento-name">${evento.name}</span>
            <span class="evento-date">${evento.date}</span>
            <span class="evento-time">${evento.timeStart} - ${evento.timeEnd}</span>
        </li>
        `
    })
})

