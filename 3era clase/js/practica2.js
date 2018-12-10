//esta es la nueva forma y la que te tienes que acostumbrar porque sino pierdes el año en cadi

function cambiarColor(){
    let r=1,g=1,b=1;
    console.log(this.keyCode)
    if(this.keyCode==38){
        console.log("pulsaste arriba");
    r=Math.random()*255;
    g=Math.random()*255;
    b=Math.random()*255;
   }
    else
        if (this.keyCode==40)
            r=g=b=1;
   document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";
}

document.body.onkeydown=cambiarColor(this.body).style.backgroundColor=rgb(1, 1,1);

document.form1.edad.onkeypress=function(){
    validar_numero(event);
    console.log('keypress:',event.charCode);
}  

document.form1.acepto.onclick=function(){
    alert(this.checked);
}

document.form1.acepto.onblur=function(){
    console.log("blur en el checkbox");
}

function onclick(){
    validar(this.form1)
}
//hace referencia a la funcion que va a ejecutar
document.form1.Registrar.onclick=onclick;


