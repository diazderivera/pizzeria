let derecha = 0;
//precios base pizzas
let pbasebarba=7;
let pbaseveget=8;
let pbasecarbo=9;
let pbasecques=10;
let pbaserefre= 1.5;
let pbasecerve= 2;

function atras() {
	//calculamos valor left de la anterior foto
	derecha = (derecha + 450);
	//mostramos boton siguiente
	if (derecha != -1350) {//1
		document.getElementById('fadela').style.visibility="visible";
	}//1
	//ocultamos boton anterior
	if (derecha == 0) {//2
		document.getElementById('fatras').style.visibility="hidden";
	} //2
	//mostrar foto anterior
	document.getElementById('galeria').style.left=derecha + "px";
}//atras

function adelante() {
//calculamos valor left de la siguiente foto
derecha = (derecha - 450);
//ocultar boton siguiente
if (derecha == -1350) {//1
	document.getElementById('fadela').style.visibility="hidden";
}
//mostrar boton anterior
if (derecha != 0) {//2
	document.getElementById('fatras').style.visibility="visible";
} //2 
// mostrar foto siguiente
document.getElementById('galeria').style.left=derecha + "px";

}//adelante

function calcularpedido() {

let barbatamped= Number(document.getElementById('barbatam').value);
let barbacanped= Number(document.getElementById('barbacan').value);

let vegettamped= Number(document.getElementById('vegettam').value);
let vegetcanped= Number(document.getElementById('vegetcan').value);

let carbotamped= Number(document.getElementById('carbotam').value);
let carbocanped= Number(document.getElementById('carbocan').value);

let cquestamped= Number(document.getElementById('cquestam').value);
let cquescanped= Number(document.getElementById('cquescan').value);

let refretamped= Number(document.getElementById('refretam').value);
let refrecanped= Number(document.getElementById('refrecan').value);
let cervetamped= Number(document.getElementById('cervetam').value);
let cervecanped= Number(document.getElementById('cervecan').value);

//calculos pizzas
cantotpiz = barbacanped + vegetcanped + carbocanped + cquescanped;

totpedpiz= 	(pbasebarba * barbatamped * barbacanped) + 
			(pbaseveget * vegettamped * vegetcanped) + 
			(pbasecarbo * carbotamped * carbocanped) + 
			(pbasecques * cquestamped * cquescanped);

//calculos bebidas
cantotbeb = refrecanped + cervecanped;

totpedbeb= 	(pbaserefre * refretamped * refrecanped) + 
			(pbasecerve * cervetamped * cervecanped);	

//presentamos resultados
document.getElementById('restxpiz').innerHTML = cantotpiz + " Pizzas"			
document.getElementById('resprpiz').innerHTML = totpedpiz.toFixed(2);

document.getElementById('restxbeb').innerHTML = cantotbeb + " Bebidas"			
document.getElementById('resprbeb').innerHTML = totpedbeb.toFixed(2);



}//calcularpedido

function mostrarmas(caja, bmas, bmen) {
	document.getElementById(caja).className="cajacategoria desplegado";
	document.getElementById(bmas).className="oculto";
	document.getElementById(bmen).className="visible";	
}//mostrarmas

function mostrarmenos(caja,bmas,bmen) {
	document.getElementById(caja).className="cajacategoria plegado";
	document.getElementById(bmas).className="visible";
	document.getElementById(bmen).className="oculto";
}//mostrarmenos