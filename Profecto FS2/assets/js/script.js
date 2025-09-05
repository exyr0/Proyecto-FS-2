function checkChar(text, maxChar, minChar, elementId, errorMin, errorMax){
    if(text.length < minChar){
        document.getElementById(elementId).innerHTML = errorMin;
    }else if (text.length > maxChar){
        document.getElementById(elementId).innerHTML = errorMax;
    }else{
        document.getElementById(elementId).innerHTML = "";
    }
}

const Domains = ['gmail.com', 'duoc.cl', 'profesor.duoc.cl'];
function checkEmail(email) {
    // Check if email contains @
    const atIndex = email.indexOf('@');
    if (atIndex === -1) { //Si no hay simbolo '@', ejecutar
        document.getElementById("domainError").innerHTML = "Ingrese un email válido: (@duoc.cl, @profesor.duoc.cl, @gmail.com)";
        return false;
    }

    const domain = email.slice(atIndex + 1).toLowerCase();

    if(Domains.includes(domain)){//Si pasa todas las validaciones, ejecutar
        document.getElementById("domainError").innerHTML = "";

        return true;
    }else{//Si no tiene un dominio valido, ejecutar
        document.getElementById("domainError").innerHTML = "Ingrese un email válido: (@duoc.cl, @profesor.duoc.cl, @gmail.com)";
        return false;
    }
}

function emailConfirm(email, confEmail, elementId){
    if(email == confEmail){
        document.getElementById(elementId).innerHTML = "";
    }else{
        document.getElementById(elementId).innerHTML = "Los correos especificados no coinciden.";
    }
}

function passwConfirm(pass, confPass, elementId){
    if(pass == confPass){
        document.getElementById(elementId).innerHTML = "";
    }else{
        document.getElementById(elementId).innerHTML = "Las contraseñas especificadas no coinciden.";
    }
}

function enviarForm(text, elementId, errorMsg){
    if(text.length < 1){
        document.getElementById(elementId).innerHTML = errorMsg;
    }
}
