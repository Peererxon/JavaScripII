var nombres=[];
var notas=[];

document.form1.boton.onclick= function(){
    var nombre = document.form1.nombre;
    var nota = document.form1.nota;
    // indexOf busca un elemento en un arreglo
    // si no lo consigue, retorna -1, en caso contrario
    // retorna el indice donde esta ubicado el elemento
    if (nombres.indexOf(nombre.value.toLowerCase())==-1){
        nombres.push(nombre.value.toLowerCase());
        notas.push(nota.value);
        
        console.log(nombres);
        console.log(notas);

        nombre.value="";
        nota.value=""

        mostrarListado();
    }else
        alert("repetido")
}

function mostrarListado(){
    var div=document.getElementById("listado");
    div.innerHTML="";
    for (let i=0;i<nombres.length;i++){
        div.innerHTML+=(i+1)+"- ";
        div.innerHTML+="<span style='text-transform:capitalize'>"+nombres[i]+"</span>";
        div.innerHTML+="  "+notas[i]+"<br>";
    }
}