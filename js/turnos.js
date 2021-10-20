// Pacientes
class Turno {
    constructor ({ 
        nombre, 
        dia, 
        hora, 
    }){
        this.nombre = nombre;
        this.dia = dia;
        this.hora = hora;
    }
}

//VARIABLES
let listaTurnos = [];

// FUNCIONES
const guardarDatos = () => {
    const turnos = new Turno(
        {
            nombre : document.getElementById("nombre").value,
            dia : document.getElementById("dia").value,
            hora : document.getElementById("hora").value,
        })

    document.getElementById("guardado").innerHTML += `
    <p>${turnos.nombre}</p>
    <p>${turnos.dia}</p>
    <p>${turnos.hora}</p>
    `
    console.log(turnos)
    return turnos 
}

const agendarTurno = (lista) => {
    lista.push(guardarDatos())
    return lista
}

//verificador
const verificarTurno = () => {
    let info;
    if (localStorage.getItem("listaTurnos") != null){
        info = agendarTurno(JSON.parse(localStorage.getItem("listaTurnos")))
        return info
    }else {
        agendarTurno(listaTurnos)
        info = listaTurnos
        return info
    }
}
//guardar datos
const almacenarDatos = () => {
    listaTurnos = verificarTurno()
    localStorage.setItem("listaTurnos", JSON.stringify(listaTurnos))
}



// EVENTOS
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault()
    almacenarDatos()
})