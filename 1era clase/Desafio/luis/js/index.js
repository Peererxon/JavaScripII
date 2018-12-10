var n=0;
var alumnos_aprobados=0;
var alumnos_procesados=0;
var acumulador_notas=0;

function promedio_desafios(desafio1,desafio2,desafio3,desafio4){
 if(isNaN(desafio1)||isNaN(desafio2)||isNaN(desafio3)||isNaN(desafio4)||desafio1<0||desafio1>100||desafio2<0||desafio2>100||desafio3<0||desafio3>100||desafio4<0||desafio4>100){ 
     alert("Asegurese de ingresar datos válidos")
 	 return 0
 	}
 
 else{
      return(desafio1+desafio2+desafio3+desafio4)/4; 
     }
 
}
function aprobadono(examen,resultado){
	if(examen>=80 && examen<=100 && resultado>=80 && resultado<=100){
		alumnos_aprobados=alumnos_aprobados+1;
		return("Aprobo")
	}
	else
		return("Reprobo")
}

function procesar(){
alumnos_procesados= alumnos_procesados+1
let desafio1=parseInt(document.registrarnotas.desafio1.value);
let desafio2=parseInt(document.registrarnotas.desafio2.value);     
let desafio3=parseInt(document.registrarnotas.desafio3.value);     
let desafio4=parseInt(document.registrarnotas.desafio4.value);  
var examen=parseInt(document.registrarnotas.examen.value);   
var resultado=promedio_desafios(desafio1,desafio2,desafio3,desafio4);
var estado=aprobadono(examen,resultado);
document.registrarnotas.promedio.value=resultado;
document.registrarnotas.estado.value=estado;
document.registrarnotas.btnAgregar.disabled=false;
acumulador_notas=acumulador_notas+examen
}


function agregar(){
n++;   
let formulario=document.getElementById("calificaciones");
let nombre=document.registrarnotas.nombre.value;
let desafio1=document.registrarnotas.desafio1.value;
let desafio2=document.registrarnotas.desafio2.value;     
let desafio3=document.registrarnotas.desafio3.value;     
let desafio4=document.registrarnotas.desafio4.value;
let promedio_seccion=acumulador_notas/alumnos_procesados
let porc_alum_aprobados=((alumnos_aprobados/alumnos_procesados)*100)
var examen=document.registrarnotas.examen.value;
document.registrarnotas.btnAgregar.disabled=true;

formulario.innerHTML+=n+" - "+nombre+"<br>"
formulario.innerHTML+="Nota desafio1: "+desafio1+" puntos <br>"
formulario.innerHTML+="Nota desafio2: "+desafio2+" puntos <br>"
formulario.innerHTML+="Nota desafio3: "+desafio3+" puntos <br>"
formulario.innerHTML+="Nota desafio4: "+desafio4+" puntos <br>"
formulario.innerHTML+="Nota examen: "+examen+" puntos <br>"
formulario.innerHTML+="Promedio Seccion del examen:"+promedio_seccion+" puntos <br>"
formulario.innerHTML+="Cantidad de alumnos aprobados:"+alumnos_aprobados+" <br>"
formulario.innerHTML+="Porcentaje de alumnos aprobados:"+porc_alum_aprobados+" % <br>"
document.registrarnotas.reset();
}




