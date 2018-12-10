var acumExam=0;
var aprobados=0;
var alumnos=0;
var n=0;

function validarCampos(campo){
    if(!(esta_vacio(campo.nombre,"Llennar el nombre"))){
        if(!(esta_vacio(campo.desafio1,"Digite la nota 1"))){
            if(!(esta_vacio(campo.desafio2,"Digite la nota 2"))){
                if(!(esta_vacio(campo.desafio3,"Digite la nota 3"))){
                    if(!(esta_vacio(campo.desafio4,"Digite la nota 4"))){
                        if(!(esta_vacio(campo.examen,"Digite la nota del examen"))){
                            Mostrar();
                        }
                    }
                }
            }
        }
    }
}

function validarNombre(nombre,label){
    var error = document.getElementById(label);
    for(let i=0;i<=nombre.value.length;i++){
        if(isNaN(parseInt(nombre.value.charAt(i)))){
            nombre.style.background = "white";
            error.style.background = "white";
            error.innerHTML = "";
        }
        else{
            alert("Ingrese solo caracteres.");
            nombre.style.background = "#FF8B8B";
            error.style.background = "red";
            error.innerHTML = "Dato invalido";
            break;
        }
    }
}
function validarNotas(desafio,label){
    let error = document.getElementById(label);
    if(isNaN(desafio.value)){
        alert("Ingrese un valor numerico.");
        desafio.value = "";
        desafio.style.backgroundColor="#FF8B8B";
        error.style.background = "red";
        error.innerHTML = "Dato invalido";
    }
    else{
        if(desafio.value < 0 || desafio.value > 100){
            alert("Ingresar numeros en el rango de 0 a 100.");
            desafio.value = "";
            desafio.style.backgroundColor="#FF8B8B";
            error.style.background = "red";
            error.innerHTML = "Dato invalido";
        }
        else{
            desafio.style.backgroundColor="white";
            error.style.background = "white";
            error.innerHTML = "";
        }
    }
}

function Desafios(){
    let total;
    /*BORRAR*/
    let desafio1 = parseInt(document.alumnos.desafio1.value);
    let desafio2 = parseInt(document.alumnos.desafio2.value);
    let desafio3 = parseInt(document.alumnos.desafio3.value);
    let desafio4 = parseInt(document.alumnos.desafio4.value);

    total = (desafio1+desafio2+desafio3+desafio4)/4;

    return total;
}

function Aprobacion(){
    let aprobado;
    let examen = parseInt(document.alumnos.examen.value);
    let desafios = Desafios();
    
    if (examen < 0 || examen > 100 || desafios==-1){
        alert("A ingresado un dato invalido. Intentelo otra vez.");
        document.alumnos.reset();
    }
    else{
        if (desafios >= 80 && examen >= 80){
            return aprobado = "Aprobado";
        }else
            return aprobado = "Reprobado";
    }
}

function Mostrar(){
    let desafios = Desafios();
    let aprobacion = Aprobacion();

    if (desafios != -1){
        document.alumnos.promedio.value = desafios;
        document.alumnos.mensaje.value = aprobacion;
    }
}

function Agregar(){
    n++;
    acumExam = acumExam + parseInt(document.alumnos.examen.value);
    alumnos = alumnos + 1;
    if (Desafios() >= 80 && parseInt(document.alumnos.examen.value) >= 80){
        aprobados = aprobados + 1;
    }

    let lista=document.getElementById("Alumnos");
    lista.innerHTML += n+" - Estudiante: "+document.alumnos.nombre.value+"<br>"+
    "    Nota Desafio 1: "+document.alumnos.desafio1.value+"<br>"+
    "Nota Desafio 2: "+document.alumnos.desafio2.value+"<br>"+
    "Nota Desafio 3: "+document.alumnos.desafio3.value+"<br>"+
    "Nota Desafio 4: "+document.alumnos.desafio1.value+"<br>"+
    "Nota promedio : "+document.alumnos.promedio.value+"<br>"+
    "Nota del examen: "+document.alumnos.examen.value+"<br>"+
    "Estado del estudiante : "+document.alumnos.mensaje.value+"<br> <br>";
    document.alumnos.reset();

    let promedio = acumExam / alumnos;
    let porc = aprobados / alumnos * 100;
    let seccion = document.getElementById("seccion");
    seccion.innerHTML = "Promedio de examenes: "+promedio+" pts<br>"+
    "Cantidad de alumnos aprobados: "+aprobados+"<br>"+
    "Porcentaje de alumnos aprobados: "+porc+" %<br>";
}