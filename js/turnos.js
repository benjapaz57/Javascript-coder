class Turno {
    constructor ({ nombre, dia, hora }){
        this.nombre = nombre;
        this.dia = dia;
        this.hora = hora;
    }
}


const guardarDatos = () => {
const turnos = new Turno(
    {
        nombre : document.getElementById("nombre"),
        dia : document.getElementById("dia"),
        hora : document.getElementById("hora"),
    })

    document.getElementById("guardado").innerHTML += `
    <p>${turnos.dia}</p>
    <p>${turnos.hora}</p>
    `

    return turnos 
}