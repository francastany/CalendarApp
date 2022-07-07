class Evento {
    constructor(nombre, tipo ,fecha, horario, lugar, descripcion) {
        this.nombre = nombre
        this.tipo = tipo
        this.fecha = fecha
        this.horario = horario
        this.lugar = lugar
        this.descripcion = descripcion
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre
    }
    cambiarTipo(nuevoTipo){
        this.tipo = nuevoTipo
    }
    cambiarFecha(nuevaFecha) {
        this.fecha = nuevaFecha
    }
    cambiarHorario(nuevoHorario) {
        this.horario = nuevoHorario
    }
    cambiarLugar(nuevoLugar) {
        this.lugar = nuevoLugar
    }
    cambiarDescripcion(nuevaDescripcion){
        this.descripcion = nuevaDescripcion
    }
}

const evento1 = new Evento ("Cumple de Juan", "Cumpleaños", "21/07", "18:00", "Casa de Juan (Directorio 4521)", "Llevar torta")
const evento2 = new Evento ("Cena con los Suegros", "Cena", "10/07", "20:30", "San Martin 123", "Pasar a buscar a Martin")
const evento3 = new Evento ("Partido de Futbol", "Futbol", "18/07", "16:00", "Cover Futbol", "Inflar la pelota. Armar los equipos")

let nombreEvento4 = prompt("Ingrese el nombre del Evento")
let tipoEvento4 = prompt("Ingrese el tipo de su Evento")
let fechaEvento4 = prompt("Ingrese fecha de su evento (Formato DD/MM)")
let horaEvento4 = prompt("Ingrese la hora de su Evento (Use `:`)")
let lugarEvento4 = prompt("Ingrese el lugar de su Evento")
let descripcionEvento4 = prompt("Ingrese descripción de su Evento")

const evento4 = new Evento (nombreEvento4, tipoEvento4, fechaEvento4, horaEvento4, lugarEvento4, descripcionEvento4)

const eventos = [evento1, evento2, evento3, evento4]

console.log(eventos)

console.log (`Su evento está en posición: ${eventos.indexOf(evento4)} `)
