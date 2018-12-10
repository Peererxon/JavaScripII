//si llamamos una posicion queno existe el programa no explotara simplemente mostrara undefined
//arreglos
//en java script los arreglos permiten almacenar datos de distintos tipos en sus posiciones (¡no recomendado!)
//unshift añade una posicion al arreglo
//splice es para indicar que elementos en que posicion se quiere sacar segun su posicion
//si se le pasan 4 parametros el 1ero es la ubicacion inicial,el segundo es
//hasta donde los eliminara y los otros 2 (3,4) los insertara en el arreglo. muy raro
//push añade un elemento al final
//shif elimina el primer elemeto del arreglo
var notas=[15,20,18];
var nombres=["luis miguel","Anderson","Andrea"]
 //si la i fuera <=3 el ultimo elemento daria undefined porque no existe una cuarta posicion en este caso
for (let i= 0; i<=2; i++) {
    console.log("nombres:",nombres[i]);
    console.log("nota: ", notas[i])
}

var nuevonombre=prompt("ingrese el nuevo nombre para el arreglo");
nombres.push(nuevonombre);

console.log(nombres);


    