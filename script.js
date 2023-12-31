// Array de productos (simulado, puedes obtenerlo de una base de datos o una API)
const productos = [
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 2', categoria: 'remeras', precio: '$25.00', imagen: 'remera2.jpg' },





    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },
    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },
    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },
    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },
    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },
    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },
    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },





    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },




    { nombre: 'Taza Mario Bros', categoria: 'tazas', precio: '$10.00', imagen: 'tazaMario.jpg' },
    { nombre: 'Taza Compartida', categoria: 'tazas', precio: '$10.00', imagen: 'tazaBob.jpg' },
    { nombre: 'Taza Astronauta', categoria: 'tazas', precio: '$10.00', imagen: 'tazaAstronauta.jpg' },
    { nombre: 'Taza Skate', categoria: 'tazas', precio: '$10.00', imagen: 'tazaSkate.jpg' },
    { nombre: 'Taza Mario Bros', categoria: 'tazas', precio: '$10.00', imagen: 'tazaMario2.jpg' },
    { nombre: 'Taza Dragon Ball', categoria: 'tazas', precio: '$10.00', imagen: 'tazaGoku.jpg' },
    { nombre: 'Taza Dragon ball', categoria: 'tazas', precio: '$10.00', imagen: 'tazaGuku2.jpg' },
    { nombre: 'Taza Star Wars', categoria: 'tazas', precio: '$10.00', imagen: 'tazaWars2.jpg' },
    { nombre: 'Taza Star Wars', categoria: 'tazas', precio: '$10.00', imagen: 'tazaStar.jpg' },
    { nombre: 'Taza Animalitos', categoria: 'tazas', precio: '$10.00', imagen: 'taza1.jpg' },
    { nombre: 'Taza Nasa', categoria: 'tazas', precio: '$10.00', imagen: 'tazaNasa.jpg' },
    { nombre: 'Taza Rick and Morty', categoria: 'tazas', precio: '$10.00', imagen: 'tazaRick.jpg' },
    


    { nombre: 'Bola Navideña1', categoria: 'bolas', precio: '$10.00', imagen: 'taza1.jpg' },
    { nombre: 'Bola Navideña1', categoria: 'bolas', precio: '$10.00', imagen: 'taza1.jpg' },
    { nombre: 'Bola Navideña1', categoria: 'bolas', precio: '$10.00', imagen: 'taza1.jpg' },
    { nombre: 'Bola Navideña1', categoria: 'bolas', precio: '$10.00', imagen: 'taza1.jpg' },
    { nombre: 'Bola Navideña1', categoria: 'bolas', precio: '$10.00', imagen: 'taza1.jpg' },
    { nombre: 'Bola Navideña1', categoria: 'bolas', precio: '$10.00', imagen: 'taza1.jpg' },
    // Agrega más productos según sea necesario
];

document.addEventListener('DOMContentLoaded', function () {
    // Al cargar la página, muestra todos los productos
    mostrarProductos(productos);
});

function filtrarProductos() {
    var categoriaSeleccionada = document.getElementById('categoria').value;

    // Filtra los productos según la categoría seleccionada
    var productosFiltrados = productos.filter(function (producto) {
        return categoriaSeleccionada === 'todos' || producto.categoria === categoriaSeleccionada;
    });

    // Muestra los productos filtrados
    mostrarProductos(productosFiltrados);
}

function mostrarProductos(productosMostrar) {
    var contenedorProductos = document.getElementById('productos');

    contenedorProductos.innerHTML = '';

    productosMostrar.forEach(function (producto) {
        var productoDiv = document.createElement('div');
        productoDiv.className = 'producto';

        var imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        var nombreProducto = document.createElement('p');
        nombreProducto.textContent = producto.nombre;

        var precioProducto = document.createElement('p');
        precioProducto.textContent = 'Precio: ' + producto.precio;

        var personalizarBtn = document.createElement('button');
        personalizarBtn.textContent = 'Personalizar';
        personalizarBtn.addEventListener('click', function () {
            // Al hacer clic en el botón, abrir enlace de WhatsApp
            var mensaje = encodeURIComponent('¡Hola! Estoy interesado/a en personalizar el producto: ' + producto.nombre);
            var whatsappLink = 'https://wa.me/543585063253?text=' + mensaje;
            window.open(whatsappLink, '_blank');
        });

        productoDiv.appendChild(imagen);
        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(precioProducto);
        productoDiv.appendChild(personalizarBtn);

        contenedorProductos.appendChild(productoDiv);
    });
}

function mostrarSeccion(idSeccion) {
    var secciones = document.getElementsByClassName('seccion');

    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    document.getElementById(idSeccion).style.display = 'block';

    if (idSeccion === 'ventas') {
        // Al cambiar a la sección de ventas, muestra todos los productos por defecto
        mostrarProductos(productos);
    }
}
