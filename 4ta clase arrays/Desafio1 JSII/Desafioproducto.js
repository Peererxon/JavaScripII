
//VARIABLES LOCALES:
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
let CodigosProductos=[1234,5678,4321,8765,243567];
let NombresProductos=["jamon","queso","perrarina","acetaminofen","agua"];
let PreciosProductos=[1200,1000,800,500,200];
let SubtotalesPro= [0,0,0,0,0];
let DisponiblesProductos=[20,15,90,7,33];
let encontrado=false;
let valido=false;
let posicion=null;
let p=0;
let subtotales=0;
//let acumulador=0;
//||cantidad>DisponiblesProductos[0]||cantidad>DisponiblesProductos[1]||cantidad>DisponiblesProductos[2]||cantidad>DisponiblesProductos[3]||cantidad>DisponiblesProductos[4]
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//

//EJECUCIONES
//()()()()()(()()(()(()()()()()()()()()()()()()()()()()()()()()()()()())))//

document.form1.codigo.onkeypress=enter;
document.form1.cantidad.onkeypress=validar_numero;
document.form1.cantidad.onkeyup=CalcSubTotal;
document.form1.cantidad.onblur=activarBoton;
document.form1.boton.onclick=agregar;
document.form1.factura.onclick=facturar;

//()()()()()(()()(()(()()()()()()()()()()()()()()()()()()()()()()()()())))//


//FUCION PARA BUSCAR EN EL ARREGLO Y ASIGNAR SEGUN LA POSICION VALORES EN LOS INPUTS
//#################################################################################//

function buscar(){
    let ValorBuscado=document.form1.codigo.value;
    ValorBuscado=parseInt(ValorBuscado);
    if (CodigosProductos.indexOf(ValorBuscado)>-1) {
        //si lo encuentra
        posicion=CodigosProductos.indexOf(ValorBuscado);
        document.form1.precio.value=PreciosProductos[posicion];
        document.form1.nombre.value=NombresProductos[posicion];
        document.form1.cantidadDisponible.value=DisponiblesProductos[posicion];
        encontrado=true;
    } else
        alert("producto no encontrado en el almacen")

}
//#################################################################################//

function enter(e){
    // para que funcione en cualquier navegador
    tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
    // para bloquear backspace
    if (tecla==13)
        buscar();
}


function CalcSubTotal(){
    if (encontrado){
//si se encuentra el producto
        let cantidad=document.form1.cantidad.value;
        cantidad=parseInt(cantidad);
        let precio=document.form1.precio.value;
        precio=parseInt(precio);
        let subtotal=precio*cantidad;

        if (cantidad>1) {
            document.form1.subtotal.value=subtotal;
            valido=true;
        }else{
            //para que coloque el mismo valor de base cuando la cantidad sea 1
            document.form1.subtotal.value=precio;
            valido=true;
            }
            
        if (cantidad<=0||cantidad==NaN||cantidad==""||subtotal==NaN){
            document.form1.subtotal.value=0;
            valido=false;
        }
    }
}

function activarBoton(){
    if (valido) {
        document.form1.boton.disabled=false;
    }else
        document.form1.boton.disabled=true;
}

function agregar(){
    let cantidad=document.form1.cantidad.value;
    let productosDisponibles=DisponiblesProductos[posicion];
    let acumulador=0;
    //subtotales=subtotales+parseInt(document.form1.subtotal.value);
    SubtotalesPro[posicion] = SubtotalesPro[posicion] + parseInt(document.form1.subtotal.value);
        if (cantidad>productosDisponibles) {
            alert("La cantidad a comprar no debe sobrepasar la cantidad total disponible")
            SubtotalesPro[posicion]=0;
        }else{
            DisponiblesProductos[posicion]=DisponiblesProductos[posicion]-document.form1.cantidad.value;
            document.form1.cantidadDisponible.value=DisponiblesProductos[posicion];
            p++;
            let resultados=document.getElementById("listado");
            resultados.innerHTML+="<br>"
            resultados.innerHTML+="codigo del producto °"+p+" : "+CodigosProductos[posicion]+"<br>"
            resultados.innerHTML+="Nombre del producto "+" : "+NombresProductos[posicion]+"<br>"
            resultados.innerHTML+="precio del producto : "+PreciosProductos[posicion]+"<br>"
            resultados.innerHTML+="cantidad de productos : "+document.form1.cantidad.value+"<br>"
            resultados.innerHTML+="subtotal del producto : "+document.form1.subtotal.value+"<br>"
            resultados.innerHTML+="<br>"

            resultados.innerHTML+="subtotales de la factura por la compra de: "
            +NombresProductos[posicion]+" "+SubtotalesPro[posicion];
            resultados.innerHTML+="<br>"
            resultados.innerHTML+="iva del subtotal : "+SubtotalesPro[posicion]*0.12+"<br>"
            //resultados.innerHTML+="subtotales de la factura: "  //sumatoria de todos los subtotales de cada producto agregado
            for (var i =0; i <4; i++) {
                acumulador=SubtotalesPro[i]+acumulador;
            }
            let ababajosubtotal=document.getElementById("subtotales");
            ababajosubtotal.innerHTML="subtotales de la factura: "+acumulador;
            let ababajototal=document.getElementById("total");
            ababajototal.innerHTML="total a pagar : "+parseInt((acumulador*0.12)+acumulador)+"<br>"
            //resultados.innerHTML+=acumulador+"<br>"
            //resultados.innerHTML+="total a pagar : "+parseInt((acumulador*0.12)+acumulador)+"<br>"
            document.form1.reset();
            encontrado=false;
            valido=false;
            document.form1.boton.disabled=true;

            if (p>0) {
                document.form1.factura.disabled=false; 
            }
        
        }

}

function facturar()
{
    let facturar=confirm("Seguro?");
    if (facturar) {
       let factura=document.getElementById("listado");
       factura.innerHTML="";
       SubtotalesPro=[0,0,0,0,0]; //para resetear los valores de las facturas
       document.form1.factura.disabled=true;
       p=0;//para que el contador de productos vuelva a ser 0
    }
}
/*let listaSecc = document.getElementById("lista-secc");
    let h1Nuevo = document.createElement("h1")
    let texto = document.createTextNode("Seccion N°"+seccion.numero+" - "+seccion.curso);
    h1Nuevo.appendChild(texto);
    listaSecc.appendChild(h1Nuevo);*/