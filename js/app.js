//1- pedir nombre y apellido / dia y hora / mail
//2- crear objeto para almacenar dicha info
//3- alert y console.log "guardaste tu turno correctamente"
//4- guardar el turno
class Turno{
    constructor(nombre, dia, hora, mail){
    this.nombre = nombre,
    this.dia = dia,
    this.hora = hora,
    this.mail = mail
    } 
}

let nombre = prompt('Ingrese su nombre y apellido')
let dia = prompt('Ingrese el dia')
let hora = prompt('Ingrese la hora')
let mail = prompt('Ingrese su mail')

const turno1 = new Turno(nombre,dia,hora,mail)
console.log(turno1)
alert(`Felicitaciones ${nombre}, guardaste tu turno correctamente`)