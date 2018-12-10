function validar(form){
    let error = document.getElementsByClassName("error");
    let cont = 0;

    if(!estaVacio(form.cedula)){
        cont++;
        if(!estaVacio(form.nombre)){
            cont++;
            if(validarSelect(form.dia) && validarSelect(form.mes) && validarSelect(form.ano)){
                cont++;
                if(!estaVacio(form.correo)){
                    cont++;
                    if(!estaVacio(form.telefono)){
                        cont++;
                        if(!estaVacio(form.usuario)){
                            if(cantidadCaracteres(form.usuario.value)){
                                if(encontrarNumero(form.usuario.value)){
                                    if(encontrarEspacio(form.usuario.value)){
                                        cont++;
                                        if(!estaVacio(form.clave)){
                                            if(cantidadCaracteres(form.clave.value)){
                                                cont++;
                                                if(!estaVacio(form.verifClave)){
                                                    if(form.verifClave.value == form.clave.value){
                                                        cont++;
                                                        if(validarSelect(form.curso)){
                                                            if(validarSelect(form.nivel)){
                                                                cont++;
                                                                if(!estaVacio(form.horario)){
                                                                    document.getElementById("exito").style.display = "block";
                                                                    form.reset();
                                                                }
                                                                else{
                                                                    mostrarError(error[cont], form.horario)
                                                                }
                                                            }
                                                            else{
                                                                error[cont].innerHTML = " -> Seleccione un nivel";
                                                            }
                                                        }
                                                        else{
                                                            error[cont].innerHTML = " -> Seleccione un curso";
                                                        }
                                                    }
                                                    else{
                                                        error[cont].innerHTML = " -> No son identicas";
                                                        form.verifClave.style.background = "red";
                                                        error[cont-1].innerHTML = " -> No son identicas";
                                                        form.clave.style.background = "red";
                                                    }
                                                }
                                                else{
                                                    mostrarError(error[cont], form.verifClave);
                                                }
                                            }
                                            else{
                                                error[cont].innerHTML = " -> Tiene que tener mas de 4 caracteres"
                                                form.clave.style.background = "red";
                                            }
                                        }
                                        else{
                                            mostrarError(error[cont], form.clave);
                                        }
                                    }
                                    else{
                                        error[cont].innerHTML = " -> No puede haber espacios";
                                        form.usuario.style.background = "red";
                                    }
                                }
                                else{
                                    error[cont].innerHTML = " -> El primer caracter no puede ser número";
                                    form.usuario.style.background = "red";
                                }
                            }
                            else{
                                error[cont].innerHTML = " -> Tiene que tener mas de 4 caracteres"
                                form.usuario.style.background = "red";
                            }
                        }
                        else{
                            mostrarError(error[cont], form.usuario)
                        }
                    }
                    else{
                        mostrarError(error[cont], form.telefono);
                    }
                }
                else{
                    mostrarError(error[cont], form.correo);
                }
            }
            else{
                error[cont].innerHTML = " -> Feha invalida";
            }
        }
        else{
            mostrarError(error[cont], form.nombre);
        }
    }
    else{
        mostrarError(error[cont], form.cedula);
    }
}
function onclick(){
    validar(this.form);
}
function cantidadCaracteres(palabra){
    if(palabra.length >= 4){
        return true
    }
    else{
        return false;
    }
}
function encontrarEspacio(cadena){
    for(let i = 0;i<cadena.length;i++){
        if(cadena.indexOf(" ") >= 0){
            return false;
        }
        else{
            return true;
        }
    }
}
function encontrarNumero(cadena){
    if(!isNaN(parseInt(cadena.charAt(0)))){
        return false;
    }
    else{
        return true;
    }
}
function mostrarError(label, input){
    label.innerHTML = " -> Campo vacío";
    input.style.background = "red";
}
function cambiarColor(input, i){
    input.style.background = "white";
    document.getElementsByClassName("error")[i].innerHTML = "";
    document.getElementById("exito").style.display = "none";
}
document.formulario.registrar.onclick = onclick;
document.formulario.cedula.onkeypress = function(event){
    return validarNumero(event);
}
document.formulario.telefono.onkeypress = function(event){
    return validarNumero(event);
}
document.formulario.cedula.onfocus = function(){
    cambiarColor(this, 0);
}
document.formulario.nombre.onfocus = function(){
    cambiarColor(this, 1);
}
document.formulario.dia.onfocus = function(){
    cambiarColor(this, 2);
}
document.formulario.mes.onfocus = function(){
    cambiarColor(this, 2);
}
document.formulario.ano.onfocus = function(){
    cambiarColor(this, 2);
}
document.formulario.correo.onfocus = function(){
    cambiarColor(this, 3);
}
document.formulario.telefono.onfocus = function(){
    cambiarColor(this, 4);
}
document.formulario.usuario.onfocus = function(){
    cambiarColor(this, 5);
}
document.formulario.clave.onfocus = function(){
    cambiarColor(this, 6);
}
document.formulario.verifClave.onfocus = function(){
    cambiarColor(this, 7);
}
document.formulario.curso.onfocus = function(){
    cambiarColor(this, 8);
}
document.formulario.nivel.onfocus = function(){
    cambiarColor(this, 8);
}
document.formulario.horario.onfocus = function(){
    cambiarColor(this, 9);
}
