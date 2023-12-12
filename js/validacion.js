const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#email");
const area = document.querySelector("#area");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");


document.getElementById('form').addEventListener('submit', function (e) {
  
  e.preventDefault(); // Previene el envío del formulario por defecto
  
  var validarEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var validarNombre = /^[A-Za-z\s]+$/;

  var validarAsunto = /^(?!.*[^A-Za-z0-9\s].*|[A-Za-z0-9\s].*[^A-Za-z0-9\s].*)[A-Za-z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/]+$/;

  if (nombre.value == "" || !validarNombre.test(nombre.value)) {
    swal({
      title: "¡Información faltante!",
      text: "Ingresar nombre o apodo",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    nombre.focus()
    return false;
  }

  //si no tiene un formato de Email sale esto
  if (!validarEmail.test(correo.value)) {
    swal({
      title: "¡Información erronea o faltante!",
      text: "Ingresá un correo electrónico válido",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    correo.focus()
    return false;
  }

  //si no seleccionó el área de interés
  if (area.value == "default") {
    swal({
      title: "¡Información faltante!",
      text: "Elegí el área de tu interés",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    area.focus()
    return false;
  }

  // si el asunto tiene más de 50 letras o ninguna sale esto
  
  if (asunto.value.length == 0 || asunto.value.length > 35 || !validarAsunto.test(asunto.value)) {
    swal({
      title: "¡Atención!",
      text: "El asunto de tu mensaje no puede estar vacío, no puede superar los 35 caracteres",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    asunto.focus()
    return false;
  }

  // si el mensaje tiene menos de 30 caracteres y más de 1000 caracteres sale este msj
  if (mensaje.value.length == 0 || mensaje.value.length > 1000) {
    swal({
      title: "¡Atención!",
      text: "Tu mensaje está vacio o supera la cantidad de caracteres permitidos",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    mensaje.focus()
    return false;
  }

    swal({
    title: '¿Estás seguro?',
    text: '¿Quieres enviar este formulario?',
    icon: 'warning',
    buttons: true
    }).then((value) => {
    if (value) {  
      swal({
        title: "Muchas gracias!",
        text: `Tu mensaje ${nombre.value} fue enviado con exito`,
        icon: "success",
        buttons: false,
        timer: 3000
      })
        document.getElementById('form').submit();
    }
  })
});
