function desplazarASeccion(id) {
    var elemento = document.getElementById(id);
     if (elemento) {
                elemento.scrollIntoView({ behavior: 'smooth' });
                document.getElementById('menu-movil').classList.remove('activo');
            }
        }
        function alternarMenu() {
            var menu = document.getElementById('menu-movil');
            menu.classList.toggle('activo');
        }
        
        function manejarEnvio(evento) {
            evento.preventDefault();
            
            var consentimiento = document.getElementById('consentimiento').checked;
            if (!consentimiento) {
                mostrarNotificacion('Debes aceptar la política de privacidad para enviar el formulario', 'error');
                return;
            }
            
            mostrarNotificacion('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.', 'exito');
            
            document.getElementById('formulario-contacto').reset();
        }
        
        function mostrarNotificacion(mensaje, tipo) {
            var notificacion = document.getElementById('notificacion');
            notificacion.textContent = mensaje;
            notificacion.className = 'notificacion mostrar ' + tipo;
            
            setTimeout(function() {
                notificacion.classList.remove('mostrar');
            }, 3000);
        }
        
        function mostrarBannerCookies() {
            var aceptado = localStorage.getItem('cookiesAceptadas');
            if (!aceptado) {
                document.getElementById('banner-cookies').classList.add('activo');
            }
        }
        
        function aceptarCookies() {
            localStorage.setItem('cookiesAceptadas', 'true');
            document.getElementById('banner-cookies').classList.remove('activo');
            mostrarNotificacion('Cookies aceptadas', 'exito');
        }
        
        function rechazarCookies() {
            localStorage.setItem('cookiesAceptadas', 'false');
            document.getElementById('banner-cookies').classList.remove('activo');
            mostrarNotificacion('Cookies rechazadas', 'exito');
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            mostrarBannerCookies();
        });