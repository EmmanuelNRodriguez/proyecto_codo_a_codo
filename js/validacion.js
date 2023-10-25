    const nombre=document.querySelector("#nombre")
    const correo=document.querySelector("#email")
    const asunto=document.querySelector("#asunto")
    const mensaje=document.querySelector("#mensaje")


    function validarForm(){

    var validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if(nombre.value == ""){
        alert("Debe ingresar su Nombre")
        return false
    } 

    //si no tiene un formato de Email sale esto
    if( !validarEmail.test(correo.value) ){  
		alert('Ingrese un E-mail Valido');
        return false
	}
    // si el asunto tiene más de 50 letras o ninguna sale esto
    if(asunto.value.length > 50 || asunto.value.length == 0){   
        alert("Por favor ingrese el asunto con un limite de 50 caracteres")
        return false
    }

    // si el mensaje tiene menos de 30 caracteres y más de 1000 caracteres sale este msj
    if((mensaje.value.length < 30) || (mensaje.value.length > 1000)){   
        alert("Su mensaje debe contener entre 30 y 1000 caracteres")
        return false
    }
    
    alert("Su Email fue enviado con exito, pronto nos contactaremos contigo.")
}

