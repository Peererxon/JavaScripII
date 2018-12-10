//arreglos vacios para trabajar con los input
var nombres=[];
var notas=[];

    function agregarelemento(i,nombre,nota){
    //se crea un div nuevo
    var div_nuevo=document.createElement("div")
    div_nuevo.id=i;
    //se crea un texto nuevo
    var texto=document.createTextNode(i+""+nombre+""+nota);
    //se agrega el texto al div nuevo
    div_nuevo.appendChild(texto);

    
    //se busca el elemento donde se va a agregar el div nuevo
        var div_listado=document.getElementById("listado")
     //se agrega el div nuevo
     div_listado.appendChild(div_nuevo);
    
    }

    document.form1.boton.onclick=agregarelemento;