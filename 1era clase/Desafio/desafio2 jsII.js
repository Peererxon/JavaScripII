var cantidadaprovados=0;
var cantidad_alumnos=0;
var acum_examen=0;
var p=0;
var cantidad_reprovados=0;
function desafio_promedio(Ndesafio1,Ndesafio2,Ndesafio3,Ndesafio4){
 
      return(Ndesafio1+Ndesafio2+Ndesafio3+Ndesafio4)/4; 
 
}
function estadoalumno(examen,resultado){
	if( (examen>=80 && examen<=100) && (resultado>=80 && resultado<=100) ){
		cantidadaprovados=cantidadaprovados+1;
		return("Aprobado")
	}else if( (examen<80 && examen>=0) || (resultado<80 && resultado>=0) ){ 
			cantidad_reprovados=cantidad_reprovados+1;
			return("Reprobado")
		   }else{ 
		   	alert("debe ingresar notas validas");
		   	return ("dato incorrecto")
		   	}
}

function procesar(){
let Ndesafio1=parseInt(document.registrodenotas.desafio1.value);
let Ndesafio2=parseInt(document.registrodenotas.desafio2.value);     
let Ndesafio3=parseInt(document.registrodenotas.desafio3.value);     
let Ndesafio4=parseInt(document.registrodenotas.desafio4.value);  
var examen=parseInt(document.registrodenotas.examen.value);   
var resultado=desafio_promedio(Ndesafio1,Ndesafio2,Ndesafio3,Ndesafio4);
var estado=estadoalumno(examen,resultado);
document.registrodenotas.promedio.value=resultado;
document.registrodenotas.estado.value=estado;
document.registrodenotas.guardarBoton.disabled=false;
acum_examen=acum_examen+examen;
}


function agregar(){
p++;
if (document.registrodenotas.estado.value=="dato incorrecto"||document.registrodenotas.estado.value==undefined){
	document.registrodenotas.guardarBoton.disabled=true;
	document.registrodenotas.reset();
}
else{
	cantidad_alumnos= cantidad_alumnos+1;
	let resultados=document.getElementById("alumnos");
let nombre=document.registrodenotas.nombre.value;
let Rdesafio1=document.registrodenotas.desafio1.value;
let Rdesafio2=document.registrodenotas.desafio2.value;     
let Rdesafio3=document.registrodenotas.desafio3.value;     
let Rdesafio4=document.registrodenotas.desafio4.value;
let cedula=document.registrodenotas.cedula.value;
let promedio_seccion=acum_examen/cantidad_alumnos
let procetaje_aprovados=((cantidadaprovados/cantidad_alumnos)*100);
let porcentaje_reprovados=((cantidad_reprovados/cantidad_alumnos)*100);
var examen=document.registrodenotas.examen.value;
document.registrodenotas.guardarBoton.disabled=true;

resultados.innerHTML+="Alumno °"+p+" - "+nombre+"<br>"
resultados.innerHTML+="cedula :"+cedula+"<br>"
resultados.innerHTML+="Nota desafio1: "+Rdesafio1+" puntos <br>"
resultados.innerHTML+="Nota desafio2: "+Rdesafio2+" puntos <br>"
resultados.innerHTML+="Nota desafio3: "+Rdesafio3+" puntos <br>"
resultados.innerHTML+="Nota desafio4: "+Rdesafio4+" puntos <br>"
resultados.innerHTML+="Nota examen: "+examen+" puntos <br>"
resultados.innerHTML+="Promedio Seccion del examen:"+promedio_seccion+" puntos <br>"
resultados.innerHTML+="Cantidad de alumnos aprobados:"+cantidadaprovados+" <br>"
resultados.innerHTML+="Porcentaje de alumnos aprobados:"+procetaje_aprovados+" % <br>"
resultados.innerHTML+="Cantidad de alumnos reprovados:"+cantidad_reprovados+" <br>"
resultados.innerHTML+="Porcentaje de alumnos reprovados:"+porcentaje_reprovados+" % <br>"
resultados.innerHTML+="<hr>"
document.registrodenotas.reset();}



}