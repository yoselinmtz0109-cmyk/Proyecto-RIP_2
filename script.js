/* =====================================================
   SISTEMA DE VENTANAS
===================================================== */

function abrirVentana(id, boton) {

    // Buscar todas las ventanas
    const ventanas = document.querySelectorAll(".ventana");

    // Ocultar todas
    ventanas.forEach(function (ventana) {

        ventana.classList.remove("activa");

    });


    // Buscar la ventana seleccionada
    const ventanaSeleccionada =
        document.getElementById(id);


    // Mostrarla
    if (ventanaSeleccionada) {

        ventanaSeleccionada.classList.add("activa");

    }


    // Buscar todos los botones del menú
    const botones =
        document.querySelectorAll(".menu-item");


    // Quitar activo
    botones.forEach(function (item) {

        item.classList.remove("activo");

    });


    // Activar botón seleccionado
    if (boton) {

        boton.classList.add("activo");

    }

}


/* =====================================================
   PORTADA DEL VIDEO DE YOUTUBE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const enlace = document.getElementById("video-rip");

    if (enlace) {

        const id = enlace.dataset.video;

        enlace.href = "https://www.youtube.com/watch?v=" + id;

        enlace.querySelector("img").src =
            "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";

    }

});
