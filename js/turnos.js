$(document).ready(function () {

    // Pacientes
    class Turno {
        constructor({
            nombre,
            dia,
            hora,
        }) {
            this.nombre = nombre;
            this.dia = dia;
            this.hora = hora;
        }
    }

    //VARIABLES
    let listaTurnos = []

    // FUNCIONES
    const guardarDatos = () => {
        const turnos = new Turno(
            {
                nombre: document.getElementById("nombre").value,
                dia: document.getElementById("dia").value,
                hora: document.getElementById("hora").value,
            })

        $('#guardado').append(`
    <li>${turnos.nombre}, ${turnos.dia}, ${turnos.hora}.</li>
    `)
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
        if (localStorage.getItem("listaTurnos") != null) {
            info = agendarTurno(JSON.parse(localStorage.getItem("listaTurnos")))
            return info
        } else {
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
    const form = document.getElementById("formulario")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        // validarUsuario()
        almacenarDatos()
        form.reset()
    })

});

const url = 'http://nolaborables.com.ar/api/v2/feriados/2021';

$("#calendario").append('<button id="btn2">Calendario</button>')

$('#btn2').click(() => {

    let calendario;
    $.get(url, (respuesta, estado) => {

        if (estado == "success") {
            calendario = respuesta;
        }

        calendario.forEach(element => {
            $('#feriados').append(`
        <li>${element.motivo} - ${element.dia}/${element.mes}</li>
        `)
        });

    })


})

//////////////////////////////////////

const validarUsuario = () => {

    const user = "admin";
    const pass = "admin123";
    //verificador 
    let valor = $("#pass").value;
    if (valor == null || valor.lenght == 0 || valor != pass) {
        alert("Contraseña Incorrecta");
    } else {
        alert("Bienvenida")
        localStorage.setItem("usuario_conectado", "true")
        console.log(localStorage.getItem("usuario_conectado"))
    }
}

$("#logIn").append(`
<input type="text" id="user" placeholder"usuario">
<input type="password" id="pass" placeholder"contraseña">
<button id="btn3">Ingresar</button>

`)