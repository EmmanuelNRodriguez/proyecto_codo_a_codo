const carrito = {
    "prod1": 0,
    "prod2": 0,
    "prod3": 0,
    "prod4": 0,
    "prod5": 0,
    "prod6": 0
}

function sumarp1(){
    const cantidadP1 = Number(document.querySelector("#p1").value);

    if (document.querySelector("#addp1").textContent == "Agregar"){
    carrito.prod1 = carrito.prod1 + cantidadP1
    document.querySelector("#addp1").textContent = "Quitar";
    } else{
        if(carrito.prod1 >= cantidadP1){
            carrito.prod1 = carrito.prod1 - cantidadP1
            document.querySelector("#addp1").textContent = "Agregar";
        }
    }

 document.querySelector("#cantCarr").textContent = carrito.prod1 + carrito.prod2 + carrito.prod3 + carrito.prod4 + carrito.prod5 + carrito.prod6;

}

function sumarp2(){
    const cantidadP2 = Number(document.querySelector("#p2").value);

    if (document.querySelector("#addp2").textContent == "Agregar"){
    carrito.prod2 = carrito.prod2 + cantidadP2
    document.querySelector("#addp2").textContent = "Quitar";
    } else{
        if(carrito.prod2 >= cantidadP2){
            carrito.prod2 = carrito.prod2 - cantidadP2
            document.querySelector("#addp2").textContent = "Agregar";
        }
    }

 document.querySelector("#cantCarr").textContent = carrito.prod1 + carrito.prod2 + carrito.prod3 + carrito.prod4 + carrito.prod5 + carrito.prod6;

}

function sumarp3(){
    const cantidadP3 = Number(document.querySelector("#p3").value);

    if (document.querySelector("#addp3").textContent == "Agregar"){
    carrito.prod3 = carrito.prod3 + cantidadP3
    document.querySelector("#addp3").textContent = "Quitar";
    } else{
        if(carrito.prod3 >= cantidadP3){
            carrito.prod3 = carrito.prod3 - cantidadP3
            document.querySelector("#addp3").textContent = "Agregar";
        }
    }

 document.querySelector("#cantCarr").textContent = carrito.prod1 + carrito.prod2 + carrito.prod3 + carrito.prod4 + carrito.prod5 + carrito.prod6;

}

function sumarp4(){
    const cantidadP4 = Number(document.querySelector("#p4").value);

    if (document.querySelector("#addp4").textContent == "Agregar"){
    carrito.prod4 = carrito.prod4 + cantidadP4
    document.querySelector("#addp4").textContent = "Quitar";
    } else{
        if(carrito.prod4 >= cantidadP4){
            carrito.prod4 = carrito.prod4 - cantidadP4
            document.querySelector("#addp4").textContent = "Agregar";
        }
    }

 document.querySelector("#cantCarr").textContent = carrito.prod1 + carrito.prod2 + carrito.prod3 + carrito.prod4 + carrito.prod5 + carrito.prod6;

}

function sumarp5(){
    const cantidadP5 = Number(document.querySelector("#p5").value);

    if (document.querySelector("#addp5").textContent == "Agregar"){
    carrito.prod5 = carrito.prod5 + cantidadP5
    document.querySelector("#addp5").textContent = "Quitar";
    } else{
        if(carrito.prod5 >= cantidadP5){
            carrito.prod5 = carrito.prod5 - cantidadP5
            document.querySelector("#addp5").textContent = "Agregar";
        }
    }

 document.querySelector("#cantCarr").textContent = carrito.prod1 + carrito.prod2 + carrito.prod3 + carrito.prod4 + carrito.prod5 + carrito.prod6;

}

function sumarp6(){
    const cantidadP6 = Number(document.querySelector("#p6").value);

    if (document.querySelector("#addp6").textContent == "Agregar"){
    carrito.prod6 = carrito.prod6 + cantidadP6
    document.querySelector("#addp6").textContent = "Quitar";
    } else{
        if(carrito.prod6 >= cantidadP6){
            carrito.prod6 = carrito.prod6 - cantidadP6
            document.querySelector("#addp6").textContent = "Agregar";
        }
    }

 document.querySelector("#cantCarr").textContent = carrito.prod1 + carrito.prod2 + carrito.prod3 + carrito.prod4 + carrito.prod5 + carrito.prod6;

}