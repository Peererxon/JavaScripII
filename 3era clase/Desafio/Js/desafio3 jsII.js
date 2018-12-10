// let noestanvacios=false;//bandera
// let nombrevalido=false;//bandera
let error=document.getElementById("error");
//utilizacion de la funciones para verificar los datos validos

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
document.registro.cedula.onkeypress=validar_numero;
document.registro.telefono.onkeypress=validar_numero;
document.registro.correo.onblur=validarcorreo;
document.registro.nombre.onblur=nombre_valido;
document.registro.Nusuario.onblur=usuario_valido;
document.registro.Nusuario.onkeypress=sin_espacio;
document.registro.confirmacion.onblur=confirmarclave;
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//

function campos_vacios(formulario){
	let exitoso=document.getElementById("exitoso");
	if (esta_vacio(formulario.cedula,"Es obligatorio ingresar una cedula")){
			error.style.visibility="visible"
			return false;
	}else if (esta_vacio(formulario.nombre,"Es obligatorio ingresar un nombre")){
				return false;
		 }else if (esta_vacio(formulario.correo,"Es obligatorio ingresar un correo")){
		 			return false;
			 	}else if (esta_vacio(formulario.Nusuario,"Es obligatorio ingresar un nombre de usuario")){
			 				return false;
			 	  	}else if (esta_vacio(formulario.clave,"Es obligatorio ingresar una clave")){
			 	  				return false;
					  	}else if (esta_vacio(formulario.confirmacion,"ingrese la confirmacion de la clave")){
					  				return false;
			 					}else if (validar_select(formulario.dia,"Debe indicar una fecha de nacimiento")){
			 								return false;
			 							}else if (validar_select(formulario.mes,"Debe indicar un mes de nacimiento")){
			 									return false;
			 								}else if (validar_select(formulario.año,"Debe indicar un año de nacimiento")){
			 										return false;
			 									}else{
			 										exitoso.style.visibility="visible"
			 										return true;
			 										}
	
}
//creacion de la funcion para verificar el nombre

//***********************************************************************************************//
function nombre_valido(){
	let alertanombre=document.getElementById("alertanombre");
	if (isNaN(this.value) || this.value=="" ) {  // si no es un numero o esta vacio
		this.style.backgroundColor="white";
		alertanombre.style.visibility="hidden";
		return true;
	}else{ 
			this.style.backgroundColor="red";
			alertanombre.style.visibility="visible";
			this.focus();
			return false;
		}
}
//***********************************************************************************************//

//creacion de la funcion para verificar el usuario

//¡?¡?¡????¡?¡??¡?¡?¡?¡??¡?¡?¡?¡?¡?¡?¡?¡¡??¡¡?¡??¡?¡?¡¡?¡?¡??¡¡?¡??¡¡?¡??¡¡?¡???¡¡?¡?¡?¡??¡¡?¡?¡//
function usuario_valido(){
	let alertausuario=document.getElementById("alertausuario");
	let tamañonombre=document.registro.Nusuario.value.length;
	let nombre=document.registro.Nusuario.value;
	primeraletra=nombre.substr(0,1);
	if ( (isNaN(primeraletra) || this.value=="") && tamañonombre>=4 ) {  // si no es un numero (primeraletra),tamaño mayor a 3
		this.style.backgroundColor="white";
		alertausuario.style.visibility="hidden";
		return true;
	}else{ 
			this.style.backgroundColor="red";
			alertausuario.style.visibility="visible";
			this.focus();
			return false;
		}
}
//¡?¡?¡????¡?¡??¡?¡?¡?¡??¡?¡?¡?¡?¡?¡?¡?¡¡??¡¡?¡??¡?¡?¡¡?¡?¡??¡¡?¡??¡¡?¡??¡¡?¡???¡¡?¡?¡?¡??¡¡?¡?¡//

function confirmarclave(){
	let alertaconfirmacion=document.getElementById("alertaconfirmacion");
	let tamañoclave=document.registro.clave.value.length;
	let clave=document.registro.clave.value;
	if ( this.value===clave) {  // si no es un numero (primeraletra),tamaño mayor a 3
		this.style.backgroundColor="white";
		alertaconfirmacion.style.visibility="hidden";
		return true;
	}else if (this.value!==clave && tamañoclave>=1) { 
			this.style.backgroundColor="red";
			alertaconfirmacion.style.visibility="visible";
			return false;
		}
}


/*function enviar(){
	if (nombre_valido(formulario) && nombrevalido==true){
		return true;//hacer algo
	}else{
		alert("REVISAR: hay campo invalidos");
		return false;
		}

}*/

function sin_espacio(e){
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
	// para bloquear backspace
    if (tecla==32) return false;
}
