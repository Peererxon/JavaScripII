function cambiartitulo(){
    var titulo= window.document.getElementById("titulo")
    if (titulo!=undefined)
    titulo.innerHTML="PORTAFOLIO";
    else 
    console.log("no se encontro")
}
function cambiarcolor(){
    var cambiarcolor= window.document.getElementById("caja-inclinada")
    if (cambiarcolor!=undefined)
    cambiarcolor.style.backgroundColor="red";
    else 
    console.log("no se encontro")
}
function cambiarcolorblue(){
    var cambiarcolor= window.document.getElementById("caja-escala")
    if (cambiarcolor!=undefined)
    cambiarcolor.style.backgroundColor="blue";
    else 
    console.log("no se encontro")
}