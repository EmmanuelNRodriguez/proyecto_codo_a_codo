const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#email");
const area = document.querySelector("#area");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

function validarForm() {
  var validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (nombre.value == "") {
    alert("Ingresá tu nombre o apodo");
    return false;
  }

  //si no tiene un formato de Email sale esto
  if (!validarEmail.test(correo.value)) {
    alert("Ingresá un correo electrónico válido");
    return false;
  }

  //si no seleccionó el área de interés
  if (area.value == "") {
    alert("Elegí el área de tu interés");
    return false;
  }

  // si el asunto tiene más de 50 letras o ninguna sale esto
  if (asunto.value.length == 0 || asunto.value.length > 35) {
    alert(
      "El asunto de tu mensaje no puede estar vacío ni puede superar los 35 caracteres."
    );
    return false;
  }

  // si el mensaje tiene menos de 30 caracteres y más de 1000 caracteres sale este msj
  if (mensaje.value.length == 0 || mensaje.value.length > 1000) {
    alert("Tu mensaje está vacío y no puede superar los 1000 caracteres");
    return false;
  }

  alert(
    nombre.value.toUpperCase() +
      "\n¡Tu mensaje dirigído a " +
      area.value.toUpperCase() +
      " fue enviado con éxito!\nMuy pronto te enviaremos una respuesta."
  );
}
