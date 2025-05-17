// Función que muestra un mensaje emergente (alerta) cuando el usuario hace clic en un botón
function mostrarMensaje() {
    alert("¡Gracias por visitar mi página!"); // Muestra una ventana emergente con el mensaje
}

// Función que cambia el tema de la página entre modo claro y oscuro
function cambiarTema() {
    document.body.classList.toggle("oscuro"); // Alterna la clase 'oscuro' en el cuerpo del documento (cambia los estilos)
}

// Selecciona todos los enlaces dentro del menú de navegación
document.querySelectorAll('nav ul li a').forEach(enlace => {
    
    // Agrega un evento de clic a cada enlace
    enlace.addEventListener('click', function(event) {
        
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace (saltos bruscos)
        
        let destino = document.querySelector(this.getAttribute('href')); // Obtiene la sección objetivo del enlace
        
        destino.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente a la sección seleccionada
    });
});

// Evento para detectar cuando el usuario copia contenido de la página
document.addEventListener("copy", function() {
    alert("¡Has copiado texto de la página!"); // Muestra una alerta informando que se ha copiado texto
});
