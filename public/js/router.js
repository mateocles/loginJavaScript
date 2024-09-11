// Definimos las rutas y sus correspondientes componentes
const routes = {
    '/': '<h1>home Page</h1>',
    '/about': '<h1>aboutme Page</h1>',
    '/contact': '<h1>contact Page</h1>'
};

// Función para cargar la página correcta según la ruta
function router() {
    const app = document.getElementById('app');
    const path = window.location.pathname;
    app.innerHTML = routes[path] || '<h1>404 Page Not Found</h1>';
}

// Función para manejar los clicks en los enlaces de la navegación
function navigate(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    window.history.pushState(null, null, href);
    router();
}

// Detectamos cambios en el historial del navegador (para el botón "atrás" y "adelante")
window.addEventListener('popstate', router);

// Detectamos los clicks en los enlaces de la navegación
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[data-link]').forEach(link => {
        link.addEventListener('click', navigate);
    });
    router(); // Cargamos la ruta inicial
});