//arreglos vacios para trabajar con los input
var nombres=[];
var notas=[];
document.form1.boton.onclick=function(){
    var nombre=document.form1.nombre;
    var nota=document.form1.nota;
    //le quito el value a nombre y a nota. preguntar despues why?
    //IndexOf busca 1 elemento en el arreglo, si no lo consigue retorna -1,
    //en caso contrario retorna el indice donde esta ubicado el elemento
    if(nombres.indexOf(nombre.value.toLowerCase())==-1){
        nombres.push(nombre.value);
        notas.push(nota.value);
        console.log(nombres);
        console.log(notas);
    
        nombre.value="";
        nota.value="";
    }else
        alert("Nombre repetido")


}

    function mostrarlista(){
    listado=document.getElementById("lista");
    let tamañoarreglo=nombres.length;

        for (let i=0;i<=tamañoarreglo;i++) {
            listado.innerHTML+="<p>"+(i+1)+"-"+"</p>";
            //("<p>" +nombres[i]+"</p>");
        }
    
    }

    document.form1.agregar.onclick=mostrarlista;