function cambiartitulo(){
    var titulo=window.document.getElementById("titulo");
    if (titulo==undefined)
    console.log("no se ha encontrado el archivo")
    else
    titulo.innerHTML="Anderson Gil";

    var cajaincli=window.document.getElementById("caja-inclinada");
    cajaincli.style.backgroundColor="lightblue";
}

//para cambiar que cambie el contenido contenedor
//de la id titulo en este caso lo que decia Diseño web