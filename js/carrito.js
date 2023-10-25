const carrito = {
    prod1: 0,
    prod2: 0,
    prod3: 0,
    prod4: 0,
    prod5: 0,
    prod6: 0
};

function sumarProducto(productoId) {
    const cantidad = Number(document.querySelector(`#p${productoId}`).value);
    const botonAgregar = document.querySelector(`#addp${productoId}`);
    const productoCarrito = `prod${productoId}`;

    if (botonAgregar.textContent === "Agregar") {
        carrito[productoCarrito] += cantidad;
        botonAgregar.textContent = "Quitar";
    } else {
        if (carrito[productoCarrito] >= cantidad) {
            carrito[productoCarrito] -= cantidad;
            if(carrito[productoCarrito]==0) botonAgregar.textContent = "Agregar";
        }
    }

    const totalCarrito = Object.values(carrito).reduce((total, cantidad) => total + cantidad, 0);
    document.querySelector("#cantCarr").textContent = totalCarrito;
}

// Agregar eventos para todos los botones "Agregar" de productos
for (let i = 1; i <= 6; i++) {
    const botonAgregar = document.getElementById(`addp${i}`);
    botonAgregar.addEventListener('click', () => sumarProducto(i));
}

function vaciarCarr(){
    for (let i = 1; i <= 6; i++) {
        const productoCarrito = `prod${i}`;
        document.getElementById(`addp${i}`).textContent = "Agregar";
        carrito[productoCarrito] = 0;
    }
    document.querySelector("#cantCarr").textContent = 0;
}