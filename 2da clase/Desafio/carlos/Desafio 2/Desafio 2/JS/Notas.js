var form
var name
var last_name
var ci
var test
var grade1
var grade2
var grade3
var grade4
var average
var status
var counter = 0
var acumulator = 0
var fail_counter = 0
var fail_prtg
var approve_counter = 0
var approve_prtg

function procesarDatos()
{
	form = document.getElementById("formulario")
	name = form.nombre.value
	last_name = form.apellido.value
	ci = form.cedula.value
	test = form.examen.value
	grade1 = form.nota1.value
	grade2 = form.nota2.value
	grade3 = form.nota3.value
	grade4 = form.nota4.value
	if (!esta_vacio(form.nombre, "Campo Obligatorio\n\nIngrese Un Nombre Valido") 
	&& !esta_vacio(form.apellido, "Campo Obligatorio\n\nIngrese Un Apellido Valido")
	&& !esta_vacio(form.cedula, "Campo Obligatorio\n\nIngrese Un Apellido Valido")
	&& !esta_vacio(form.examen, "Campo Obligatorio\n\nIngrese Una Nota Valida")
	&& !esta_vacio(form.nota1, "Campo Obligatorio\n\nIngrese Una Nota Valida")
	&& !esta_vacio(form.nota2, "Campo Obligatorio\n\nIngrese Una Nota Valida")
	&& !esta_vacio(form.nota3, "Campo Obligatorio\n\nIngrese Una Nota Valida")
	&& !esta_vacio(form.nota4, "Campo Obligatorio\n\nIngrese Una Nota Valida")
	&& isNaN(parseInt(name)) && isNaN(parseInt(last_name)) && !isNaN(parseInt(ci)) 
	&& !isNaN(parseInt(test)) && parseInt(test) >= 0 && parseInt(test) <= 100
	&& !isNaN(parseInt(grade1)) && parseInt(grade1) >= 0 && parseInt(grade1) <= 100 
	&& !isNaN(parseInt(grade2)) && parseInt(grade2) >= 0 && parseInt(grade2) <= 100 
	&& !isNaN(parseInt(grade3)) && parseInt(grade3) >= 0 && parseInt(grade3) <= 100 
	&& !isNaN(parseInt(grade4)) && parseInt(grade4) >= 0 && parseInt(grade4) <= 100)
	{
		name = name.substr(0,1).toUpperCase() + name.substr(1,name.length).toLowerCase()
		last_name = last_name.substr(0,1).toUpperCase() + last_name.substr(1,last_name.length).toLowerCase()
		document.getElementById("errormsg").style.display = "none"
		average = calcularPromedio(grade1, grade2, grade3, grade4)
		form.promedio.value = average
		status = calcularEstado(average, test)
		form.estado.value = status
		document.getElementById("enviar").disabled = false
	}else
	{
		document.getElementById("errormsg").style.display = "inline"
		document.getElementById("enviar").disabled = true
	}
}
function validarInfo(input, id)
{
	if (input.value == "" || !isNaN(parseInt(input.value)))
	{
		input.style.background = "red"
		document.getElementById(id).style.display = "block"
	}else
	{
		input.style.background = "white"
		document.getElementById(id).style.display = "none"
	}
}
function validarNota(input, id){
	if ((parseInt(input.value) > 100 || parseInt(input.value) < 0) && isNaN(input) || input.value == "")
	{
		input.style.background = "red"
		document.getElementById(id).style.display = "block"
	}else
	{
		input.style.background = "white"
		document.getElementById(id).style.display = "none"
	}
}
function validarNum(input, id)
{
	if (input.value == "" || isNaN(parseInt(input.value)))
	{
		input.style.background = "red"
		document.getElementById(id).style.display = "block"
	}else
	{
		input.style.background = "white"
		document.getElementById(id).style.display = "none"
	}
}
function calcularPromedio(grade1, grade2, grade3, grade4)
{
	promedio = (parseInt(grade1) + parseInt(grade2) + parseInt(grade3) + parseInt(grade4)) / 4
	return promedio
}
function calcularEstado(average, test)
{
	if (average >= 80 && test >= 80) 
	{
		estado = "Aprobado"
	}else
	{
		estado = "Reprobado"
	}
	return estado
}
function limpiarDatos()
{
	document.getElementById("enviar").disabled = true
	form = document.getElementById("formulario")
	form.reset()
	form.nombre.style.background = "white"
	form.apellido.style.background = "white"
	form.cedula.style.background = "white"
	form.examen.style.background = "white"
	form.nota1.style.background = "white"
	form.nota2.style.background = "white"
	form.nota3.style.background = "white"
	form.nota4.style.background = "white"
	document.getElementById("errormsg").style.display = "none"
	document.getElementById("errornombre").style.display = "none"
	document.getElementById("errorapellido").style.display = "none"
	document.getElementById("errorcedula").style.display = "none"
	document.getElementById("errorexamen").style.display = "none"
	document.getElementById("errornot1").style.display = "none"
	document.getElementById("errornot2").style.display = "none"
	document.getElementById("errornot3").style.display = "none"
	document.getElementById("errornot4").style.display = "none"
}
function enviarDatos()
{
	document.getElementById("nombre").innerHTML += name + "<br/>"
	document.getElementById("apellido").innerHTML += last_name + "<br/>"
	document.getElementById("cedula").innerHTML += ci + "<br/>"
	document.getElementById("examen").innerHTML += test + "pts<br/>"
	document.getElementById("nota1").innerHTML += grade1 + "pts<br/>"
	document.getElementById("nota2").innerHTML += grade2 + "pts<br/>"
	document.getElementById("nota3").innerHTML += grade3 + "pts<br/>"
	document.getElementById("nota4").innerHTML += grade4 + "pts<br/>"
	document.getElementById("promedio").innerHTML += average + "ptos<br/>"
	document.getElementById("estado").innerHTML += status + "<br/>"
	counter++
	acumulator = acumulator + average
	let group_average = acumulator / counter
	if (counter == 1)
	{
		document.getElementById("estadisticas").style.display = "inline"
	}
	if (average >= 80 && test >= 80) 
	{
		approve_counter++
	}else
	{
		fail_counter++
	}
	fail_prtg =  fail_counter / counter * 100
	approve_prtg = approve_counter / counter * 100
	document.getElementById("salidas").innerHTML = "El Promedio de la Seccion es: " + group_average + 
	"pts | La Cantidad de Alumnos Aprobados es: " + approve_counter + " (" + approve_prtg + "%)  | La Cantidad de Alumnos Reprobados es: " + 
	fail_counter + " (" + fail_prtg + "%)"
	limpiarDatos()
}