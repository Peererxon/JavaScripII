function getChar(event) 
{
	if (event.keyCode != 0) 
		return String.fromCharCode(event.keyCode) ;
	else
		if (event.charCode!=0) 
			return String.fromCharCode(event.charCode);   
		else 
			return null;
}

function validar_select(select,mensaje)
{
	if (select.selectedIndex ==0)
	{
		alert(mensaje);
		select.focus();
		return false;
	}else
		return true;
}
		
function validarletra(e) 
{
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; ; 
	// para permitir backspace
    if (tecla==8) return true; 
    // de define el conjunto de caracteres validas
	patron =/[A-Za-z\s]/;
	// se convierte a caracter
    te = String.fromCharCode(tecla); 
	// se evalua si la tecla presionada este en el conjunto
    return patron.test(te);
} 

function validar_numero(e) 
{
	// para que funcione en cualquier navegador
	tecla = (e.keyCode!=0) ? e.keyCode : e.charCode; 
    // para permitir backspace
	if (tecla==8) return true; 
    // de define el conjunto de caracteres validas
	patron = /[0-9-]/;
    // se convierte a caracter
	te = String.fromCharCode(tecla);
	// se evalua si la tecla presionada este en el conjunto
    return patron.test(te);
}

function esta_vacio(campo,mensaje)
{
	if ( campo.value == "" )
	{
		alert(mensaje);
		campo.focus();
		return true;
	}else
		return false;
		
}

function validarcorreo()
{
	let alertacorreo=document.getElementById("alertacorreo");
	regx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
	if (regx.test(this.value)){
		this.style.backgroundColor="white";
		alertacorreo.style.visibility="hidden";
		return true;
	}
	else
	{
		this.style.backgroundColor="red";
		alertacorreo.style.visibility="visible";
		this.focus();
		return false;
	}
}

function validarnumero(e) 
{
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /\d/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
} 

function numeroReal(e) 
{
	tecla = (document.all) ? e.keyCode : e.which; 
    if (tecla==8) return true; 
    patron = /[^0-9.-]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}