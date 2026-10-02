/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Clase formulario
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: claseformu.js
	@(#)Date: 23/03/2002 
*/
//*************clase formu*************************************************************
function formu(nombreobjeto,posx,posy){
this.nombreobjeto = nombreobjeto;
this.posx = posx;
this.posy = posy;
this.inputs = new Array();
this.generate = generate;
this.calculaformu = calculaformu;
this.cuerpo = cuerpo;
this.muestrate = muestrate;
this.ocultate = ocultate;
this.fija = fija;
this.actuar = true;
this.inputvisible = new Object();
this.seleccionado = false;
}
function calculaformu(obj){
if (this.actuar == true){
if (isNS) {
if (typeof(obj.id) ==  "undefined"){
var strid = new String(this.id);
}
else{
var strid = new String(obj.id);
}
}
if (isIE) {
if (typeof(obj) == "object"){
var strid = new String(obj.id);}
else{
var strid = new String(this.id);
}
}
//alert(strid);
var indiceformulario = strid.indexOf("input");
var indicecolumna = strid.indexOf("_");
var idformulario = strid.substring(0,indiceformulario);
var numcolumna = strid.substring(indicecolumna+1,strid.length);

for (i=0; i < 12; i++){
this.inputs[i] = document.forms["miform" + idformulario].elements[idformulario + "input" + i + "_" + numcolumna].value;
document.forms["formcuerpo"].elements[i].value = document.forms["miform" + idformulario].elements[idformulario + "input" + i + "_" + numcolumna].value;
document.forms["formcuerpo"].elements[i].id = idformulario + "input" + i + "_" + numcolumna;
document.forms["formcuerpo"].elements[i].name = idformulario + "input" + i + "_" + numcolumna;
}
}
}
function generate(){
var strinicapa = "<div ID='"+ this.nombreobjeto + "' style='position: relative; left:" + this.posx + "px; top:" + this.posy + "px; width:0; height:0; visibility: hidden;' >";
var strfincapa = "</div>";
var strinitabla = "<table ID='tabla" + this.nombreobjeto + "' border='1'>";
var strfintabla = "</table>";
strcapa = strinicapa + strinitabla + "<form id='formcuerpo' name='formcuerpo' >" + this.cuerpo() + "</form>" + strfintabla + strfincapa;
document.write(strcapa);
//alert(strcapa);
}

function cuerpo(){
var strcuerpo ="";
var trs = "";
for (j=0; j < 3; j++){
var tds = "";
for (i=0; i < 4; i++){tds += "<td><input type='text' class='fuentecampo' id='input"  + i + "_" + j + "' name='input"  + i + "_" + j + "'  /></td>";}
trs += "<tr>" + tds + "</tr>";
}
trs += "<tr><td colspan='4' align='center'><input type='button' id='formuact' name='formuact' onclick='actualiza()' value='Actualizar' /><input type='button' id='formunoact' name='formunoact' onclick='noactualiza()' value='Cancelar' /></td></tr>";
return trs;
}
function muestrate(input){
document.getElementById(this.nombreobjeto).style.visibility = "visible";
this.calculaformu(input);
}
function ocultate(){
//alert(document.getElementById(this.nombreobjeto).style.visibility);
document.getElementById(this.nombreobjeto).style.visibility = "hidden";
//alert(document.getElementById(this.nombreobjeto).style.visibility);
}

function fija(input){
if (this.seleccionado == false){
this.inputvisible = input;
if (isNS) input.setAttribute("class","fuenteinpselec");
if (isIE) input.setAttribute("className","fuenteinpselec");
this.actuar = false;
if (isIE) {
document.getElementById("formularios").onmouseover = eventofijar;
document.getElementById("formularios").onmouseout = eventofijar;
}
else{
document.getElementById("formularios").addEventListener("mouseover",eventofijar,true);
document.getElementById("formularios").addEventListener("mouseout",eventofijar,true);
}
this.seleccionado = true;
}
}
//*******************************************************************
