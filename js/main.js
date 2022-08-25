//CALENDAR APP

//Creamos variables
const fechaActual = new Date().toLocaleDateString(); //Fecha de hoy en formato String (Mes, Día, Año)
const agregarEvento = document.getElementById("agregarEventoForm")
const eventosLista = document.getElementById("eventosLista")
const proxEventosLista = document.getElementById("proxEventosLista")
const contactoForm = document.getElementById("contactoForm")
const contactosLista = document.getElementById("contactosLista")


//Creamos la clase constructora para los objetos "Eventos" "Contactos"
class Evento{
    constructor(name, description, date, timeStart, timeEnd) {
        this.name = name
        this.description = description
        this.date = date
        this.timeStart = timeStart
        this.timeEnd = timeEnd
    }
}
//Creamos la clase constructora para los objetos "Contactos"
class Contacto{
    constructor(nombre, email, telefono) {
        this.nombre = nombre
        this.email = email
        this.telefono = telefono
    }
}

//Creamos los Array vacíos donde guardaremos los Eventos y los Contactos
let eventos = []
let contactos = []

//Definimos la función para mostrar los eventos en pantalla
function mostrarEvento() {
    let eventosStorage = JSON.parse(localStorage.getItem("eventos")) // pasar de formato JSON a objeto
    console.log(eventosStorage);
    
    eventosLista.innerHTML = "" //Reseteamos el Div, para no repetir eventos.
    proxEventosLista.innerHTML = "" //Reseteamos el Div, para no repetir eventos.

    eventosStorage.forEach((evento, indice) => { 
        //Evaluamos si la fecha de cada evento es mayor a la fecha de Hoy. Si es así, escribimos el evento en un Div, sino, en otro.
        (fechaActual == evento.date) ? eventosLista.innerHTML += ` 
        <div class="evento row" id="evento${indice}">
            <span class="evento-name col-6 ">${evento.name}</span>
            <span class="evento-date col">${evento.date}</span>
            <span class="evento-time col">${evento.timeStart} - ${evento.timeEnd}</span>
            <div class="eventoFooter col-1">
                <svg class="eliminarEvento" height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>
            </div>
        </div>
        ` : proxEventosLista.innerHTML += `
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
    let eventosStorage = JSON.parse(localStorage.getItem("eventos")) //Llamamos al array "eventos" en Local Storage

    eventosStorage.forEach((evento, indice) => { 
        let eliminarEvento = document.getElementById(`evento${indice}`).lastElementChild.lastElementChild //Creamos el botón para eliminar evento
        
        eliminarEvento.addEventListener("click", () => { //Creamos la función para eliminar eventos.
            document.getElementById(`evento${indice}`).remove() //Eliminamos del HTML
            eventos.splice(indice, 1) //Eliminamos del Array
            localStorage.setItem("eventos", JSON.stringify(eventos)) //Eliminamos del LS
            console.log(` ${evento.name} eliminado. `); //Mostramos en consola el evento eliminado

            Toastify({ // Creamos toast con Librería para evento eliminado.
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

function mostrarContactos() {
    let contactosStorage = JSON.parse(localStorage.getItem("contactos"))

    contactosLista.innerHTML = ""
    contactosStorage.forEach((contacto, indice) => {
        contactosLista.innerHTML += 
        `
        <div class="contacto bg-light" id="contacto${indice}">
            <i class="fa fa-user"></i>
            <span>${contacto.nombre}</span>
            <span>${contacto.email}</span>
            <span>${contacto.telefono}</span>
            <span>
                <svg height="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>
            </span>
        </div> 
        `
    })

}
function eliminarContacto() {
    let contactosStorage = JSON.parse(localStorage.getItem("contactos"))

    contactosStorage.forEach((contacto, indice) => {
        let eliminarContactoBtn = document.getElementById(`contacto${indice}`).lastElementChild.lastElementChild //Identificamos el botón para eliminar contacto
    
        eliminarContactoBtn.addEventListener('click', () => {
            document.getElementById(`contacto${indice}`).remove() //Eliminamos del HTML
            contactos.splice(indice, 1) //Eliminamos del Array
            localStorage.setItem("contactos", JSON.stringify(contactos)) //Eliminamos del LS
    
            Toastify({ // Creamos toast con Librería para evento eliminado.
                text: "¡Contacto eliminado correctamente!",
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
//Llamamos a la key en el Local Storage; sino, la creamos.
(localStorage.getItem("eventos")) ? eventos = JSON.parse(localStorage.getItem("eventos")) : localStorage.setItem("eventos", JSON.stringify(eventos));

(localStorage.getItem("contactos")) ? contactos = JSON.parse(localStorage.getItem("contactos")) : localStorage.setItem("contactos", JSON.stringify(contactos));


if (eventosLista != null && agregarEvento != null) { //Detectamos en que page nos encontramos. Si estos div son 'null', entonces ejecutamos el código correspondiente a otra página.
    mostrarEvento();
    eliminarEvento();
    // Evento Submit del formulario para crear los eventos.
    agregarEvento.addEventListener("submit", (event) => {
        event.preventDefault() //Prevenimos recarga de la página
    
        //Creamos el evento
        let name = document.getElementById("eventName").value
        let description = document.getElementById("eventDescription").value
    
        let date = new Date(document.getElementById("eventDate").value)
        date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000) // Sacando el OffSet por defecto de JS. (No resta un numero al día)
    
        let timeStart = document.getElementById("eventTimeStart").value
        let timeEnd = document.getElementById("eventTimeEnd").value
    
        const evento = new Evento (name, description, date.toLocaleDateString(), timeStart, timeEnd) // Constituimos al evento mediante la clase constructora
        eventos.push(evento) // Metemos el evento al Array

        localStorage.setItem("eventos", JSON.stringify(eventos)) //Pisamos el Local Storage con el Array que contiene el evento creado
    
        agregarEvento.reset() //Reseteamos el Form

        Toastify({ //Creamos toast para evento añadido
            text: "¡Evento creado correctamente!",
            duration: 2000,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
              background: "#FF8E3C",
            },
        }).showToast();

        //Mostrar eventos en pantalla y eliminarlos
        mostrarEvento();
        eliminarEvento();
    })
    
} else if(eventosLista === null && contactoForm === null) {

    const calendarDate = new Date();
    calendarDate.setDate(1) //Seteamos la fecha al primer día del mes para saber en que día de la semana comienza el mismo.

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const diasDeSemana = [
        "Dom",
        "Lun",
        "Mar",
        "Mier",
        "Jue",
        "Vie",
        "Sab",
    ];
    const diasDeSemanaLong = [
        "Domingo",
        "Lunes",
        "Marter",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];


    const mostrarCalendario = () => {
        const diasDelMes = document.querySelector('.days') //Div contenedor
        const ultimoDia = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate() //Ultimo día del mes actual
        
        const UltDiaMesAnterior = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 0).getDate() //Ultimo día del mes anterior
        console.log(UltDiaMesAnterior);
        const indicePrimerDia = calendarDate.getDay()
        console.log(indicePrimerDia);
        const indiceUltDia = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDay()
        console.log(indiceUltDia);
        const proximosDias = 7 - indiceUltDia - 1
        
        let dias = ""
        
    
        
        //Titulo del calendario
        document.querySelector('.date h1').innerHTML = meses[calendarDate.getMonth()]
        document.querySelector('.date p').innerHTML = `${diasDeSemana[new Date().getDay()]}, ${new Date().getDate()} de ${meses[new Date().getMonth()]} de ${new Date().getUTCFullYear()}`
        //Mostrar días del mes anterior
        for(let x = indicePrimerDia; x > 0; x--) {
            dias += `<div class="prev-date">${UltDiaMesAnterior - x + 1}</div>`
        }
        
        //Mostrar días del mes y destacar día de hoy
        for(let i = 1; i <= ultimoDia; i++) {
            if(i === new Date().getDate() && calendarDate.getMonth() === new Date().getMonth()){
                dias += `<div class="day today">${i}</div>`
            } else {
                dias += `<div class="day">${i}</div>`
            }
        }
        
        //Mostrar días del proximo mes
        for(let a = 1; a <= proximosDias; a++) {
            dias += `<div class="next-date">${a}</div>`
        }
        diasDelMes.innerHTML = dias
    
        mostrarEventoSelec();
    
    }

    document.getElementById("calendarEvents-title").lastElementChild.innerHTML = `${diasDeSemanaLong[new Date().getDay()]} ${new Date().getDate()} de ${meses[new Date().getMonth()]}`

    function mostrarEventoSelec() {
        
        let arrDias = Array.from(document.querySelectorAll('.day'))

        arrDias.forEach((dia, indice) => {
            dia.addEventListener('click', () => {
                // console.log(indice + 1)
                const nuevaFecha = new Date()
                nuevaFecha.setFullYear(calendarDate.getFullYear())
                nuevaFecha.setMonth(calendarDate.getMonth())
                nuevaFecha.setDate(indice + 1)

                document.getElementById("calendarEvents-title").lastElementChild.innerHTML = `${diasDeSemanaLong[nuevaFecha.getDay()]} ${nuevaFecha.getDate()} de ${meses[nuevaFecha.getMonth()]}`
            })
        })

    }

    // mostrarEventoSelec();
    mostrarCalendario();

    document.querySelector('.prev').addEventListener('click', () => {
        calendarDate.setMonth(calendarDate.getMonth() - 1)
        mostrarCalendario()
    })

    document.querySelector('.next').addEventListener('click', () => {
        calendarDate.setMonth(calendarDate.getMonth() + 1)
        mostrarCalendario()
    })

} else{
    
    contactoForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let contactoNombre = document.getElementById("contactoNombre").value
        let contactoEmail = document.getElementById("contactoEmail").value
        let contactoTelefono = document.getElementById("contactoTelefono").value

        const contacto = new Contacto (contactoNombre, contactoEmail, contactoTelefono)
        contactos.push(contacto)

        localStorage.setItem("contactos", JSON.stringify(contactos))

        contactoForm.reset() //Reseteamos el Form

        Toastify({ //Creamos toast para evento creado
            text: "¡Contacto creado correctamente!",
            duration: 2000,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
              background: "#FF8E3C",
            },
        }).showToast();

        mostrarContactos();
        eliminarContacto();
    })
    
    mostrarContactos();
    eliminarContacto();
}
