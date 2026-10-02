/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Libreria para el arbol
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4tree.js
	@(#)Date: 23/03/2002 
*/
	var LEFT_ARROW = 37; 	// left-arrow
	var UP_ARROW = 38; 	// up-arrow
	var RIGHT_ARROW = 39;  // right-arrow
	var DOWN_ARROW = 40;   // down-arrow
	var isIE = (navigator.appName == "Microsoft Internet Explorer") ? 1 : 0;
	var isNS = (navigator.appName == "Netscape") ? 1 : 0;

function m4instanciararrays(snivelmatriz,sindices){
eval("if (typeof(m4class_arbol.prototype.m4prop_mln" + snivelmatriz + ") == 'undefined'){m4class_arbol.prototype.m4prop_mln" + snivelmatriz + "= new Array();}");
if ((sindices == "") && (snivelmatriz != 0)) {eval("if (typeof(m4class_arbol.prototype.m4prop_ml" + snivelmatriz + ") == 'undefined') {m4class_arbol.prototype.m4prop_ml" + snivelmatriz + "= new Array();}");return;}
if ((sindices == "") && (snivelmatriz == 0)) return;
//alert("m4class_arbol.prototype.m4prop_mln" + snivelmatriz + "[m4class_arbol.prototype.m4prop_mln"+ snivelmatriz + ".length] ='" + sindices +"';");
eval("m4class_arbol.prototype.m4prop_mln" + snivelmatriz + "[m4class_arbol.prototype.m4prop_mln"+ snivelmatriz + ".length] ='" + sindices +"';");
var ore = /&/; 
var atrozos = sindices.split(ore); 
var sindiceslocal = "";
eval("if (typeof(m4class_arbol.prototype.m4prop_ml" + snivelmatriz + ") == 'undefined') m4class_arbol.prototype.m4prop_ml" + snivelmatriz + "= new Array();");
for (var ni = 0; ni < atrozos.length -1; ni++){
sindiceslocal += "[" + atrozos[ni] + "]";
var seval = "if (typeof(m4class_arbol.prototype.m4prop_ml" + snivelmatriz + sindiceslocal + ") == 'undefined') m4class_arbol.prototype.m4prop_ml" + snivelmatriz + sindiceslocal + "= new Array();"; 
//alert(seval);
eval(seval);
}
}

function m4class_arbol(nniveles,nnivelesvisibles){
this.m4prop_nniveles = nniveles;
this.m4prop_nnivelesvisibles = nnivelesvisibles;
this.m4met_createitem = createitem;
this.m4met_genarbol = genarbol;
this.m4met_genfor = genfor;
this.m4excep_nodewithoutchilds = nodewithoutchilds;
} 

function createitem(sobjdiv,nnivel,amatrix){
if (typeof(amatrix) == "undefined") {throw (new this.m4excep_nodewithoutchilds("createitem",amatrix));}
var ocapamadre = document.getElementById(sobjdiv);
//alert("createitem\nidcapamadre=" + sobjdiv);
//alert("createitem\nnnivel=" + nnivel);
//alert("amatrix="+amatrix);
if (this.m4prop_nnivelesvisibles == 0) {
if (nnivel != 0) ocapamadre.childNodes[0].src = "/files_gif/ic_plus_9_9.gif";
}else{
	if (nnivel > this.m4prop_nnivelesvisibles){
		if (nnivel != 0) ocapamadre.childNodes[0].src = "/files_gif/ic_plus_9_9.gif";
	}else{
		if (nnivel != 0) ocapamadre.childNodes[0].src = "/files_gif/ic_minus_9_9.gif";
	}
}
var capahija = document.createElement("div");
capahija.setAttribute("id","id" + nnivel);

	if (nnivel <= this.m4prop_nnivelesvisibles){
		if (nnivel != 0) capahija.style.display='block';
	}else{
		if (nnivel != 0) capahija.style.display='none';
	}

for (var ni = 0; ni < amatrix.length; ni++){
	var odivnew = document.createElement("div");
	odivnew.setAttribute("id",sobjdiv + "|" + ni);
	odivnew.style.position = "relative";
	var oimgnew = document.createElement("img");
	oimgnew.setAttribute("src","/files_gif/ic_minus_9_9.gif");
	oimgnew.setAttribute("id","img" + sobjdiv + "|" + ni);
	if (isIE) oimgnew.onclick = visibilidadimg;
	if (isNS) oimgnew.addEventListener("click",visibilidadimg,true);
			
	var odivnewinterna = document.createElement("div");
	
	if (amatrix[ni].substr(0,1) != "*"){
	var scadenaatrocear = new String(amatrix[ni]);
	var ore1 = /%1%/; 
    var ore2 = /%2%/;
	var atrozos1 = scadenaatrocear.split(ore1); 
	for (var nj=0; nj < atrozos1.length; nj++){
		var atrozos2 = new String(atrozos1[nj]).split(ore2);
			if (atrozos2.length > 1){
			var oanewinterna = document.createElement("a");
			var odataina = document.createTextNode(atrozos2[0]);
			oanewinterna.setAttribute("href",atrozos2[1]);
			oanewinterna.setAttribute("title",atrozos2[2]);
			oanewinterna.setAttribute("className",atrozos2[3]);
			document.all ? oanewinterna.onclick = new Function(atrozos2[4]) : oanewinterna.addEventListener("click",new Function(atrozos2[4]),true);
			oanewinterna.appendChild(odataina);
			odivnewinterna.appendChild(oanewinterna);
			}
			else{
			var odata = document.createTextNode(" " + atrozos1[nj]);
			odivnewinterna.appendChild(odata);
			}
	}
	}else{
			var sparametro = amatrix[ni].substr(1);
			var oanewinterna = document.createElement("a");
			var odataina = document.createTextNode(" More data......");
			oanewinterna.setAttribute("href",location.pathname + "?sraizorg=" + sparametro);
			oanewinterna.setAttribute("title"," More data......");
			//oanewinterna.setAttribute("className","");
			oanewinterna.appendChild(odataina);
			odivnewinterna.appendChild(oanewinterna);
	}
	
	odivnewinterna.style.display = "inline";
	if (isIE) odivnewinterna.onkeyup = visibilidadancla;
	if (isNS) odivnewinterna.addEventListener("keyup",visibilidadancla,true);
	if (nnivel != 0) odivnew.style.left = 40 + "px";
	odivnew.appendChild(oimgnew);
	//odivnew.appendChild(oanew);
	odivnew.appendChild(odivnewinterna);
	capahija.appendChild(odivnew);
}
ocapamadre.appendChild(capahija);
if (nnivel == 0){ 
ponerfoco(capahija.childNodes[0].childNodes[1].childNodes);
}
}

function visibilidadimg(){
try{
var oimg = this;
if (oimg.parentNode.childNodes.length == 2) {m4oexcepcion_notratable = {m4prop_sidexcepcion: "notratable"};throw m4oexcepcion_notratable;}
var ocapa = oimg.parentNode.childNodes[2];
	if (ocapa.style.display=='none'){
		ocapa.style.display = 'block';
		oimg.src = "/files_gif/ic_minus_9_9.gif";
		ponerfoco(oimg.parentNode.childNodes[2].childNodes[0].childNodes[1].childNodes);
	}
	else{
		ocapa.style.display = 'none';
		oimg.src = "/files_gif/ic_plus_9_9.gif";
		ponerfoco(oimg.parentNode.childNodes[1].childNodes);
	}
}catch(excepcion){m4err_tree(excepcion);}
}

function visibilidadancla(){
try{
if (event.keyCode == DOWN_ARROW){
if (this.parentNode.nextSibling == null) {m4oexcepcion_notratable = {m4prop_sidexcepcion: "notratable"};throw m4oexcepcion_notratable;}
ponerfoco(this.parentNode.nextSibling.childNodes[1].childNodes);
}
if (event.keyCode == UP_ARROW){
if (this.parentNode.previousSibling == null) {m4oexcepcion_notratable = {m4prop_sidexcepcion: "notratable"};throw m4oexcepcion_notratable;}
ponerfoco(this.parentNode.previousSibling.childNodes[1].childNodes);
}  
var ocapa = this.parentNode;
if (event.keyCode == RIGHT_ARROW){
if (typeof(ocapa.childNodes[2]) != "object") {m4oexcepcion_notratable = {m4prop_sidexcepcion: "notratable"};throw m4oexcepcion_notratable;}
	if (ocapa.childNodes[2].style.display=='none'){
		ocapa.childNodes[2].style.display = 'block';
		ocapa.childNodes[0].src = "/files_gif/ic_minus_9_9.gif";
		ponerfoco(ocapa.childNodes[2].childNodes[0].childNodes[1].childNodes);
	
	}
}
if (event.keyCode == LEFT_ARROW){
if (typeof(ocapa.parentNode) != "object") {m4oexcepcion_notratable = {m4prop_sidexcepcion: "notratable"};throw m4oexcepcion_notratable;}
	if(ocapa.parentNode.style.display == 'block'){	
		ocapa.parentNode.style.display = 'none';
		ocapa.parentNode.parentNode.childNodes[0].src = "/files_gif/ic_plus_9_9.gif";
		ponerfoco(ocapa.parentNode.parentNode.childNodes[1].childNodes);
	}
}
}catch(excepcion){m4err_gen(excepcion);}
}

function genfor(nnumero,amatrizmln){
for (var ni = 0; ni < amatrizmln.length; ni++){
var ore = /&/; 
var atrozos = amatrizmln[ni].split(ore); 
	var scapa = "raiz";
	var scorchetes = "";
	for (var nj = 0; nj < atrozos.length; nj++){
		scapa = scapa + "|" + atrozos[nj];
		scorchetes = scorchetes + "[" + atrozos[nj] + "]";
	}
	//alert(scapa);
	//alert(scorchetes);
	//alert("this.m4met_createitem('" + scapa + "'," + nnumero + ",this.m4prop_ml" + nnumero + scorchetes + ");");
	eval("this.m4met_createitem('" + scapa + "'," + nnumero + ",this.m4prop_ml" + nnumero + scorchetes + ");");
}
}
function genarbol(){
try{
this.m4met_createitem("raiz",0,this.m4prop_ml0);
for (var n=1; n <= this.m4prop_nniveles; n++) {
//alert("this.m4met_genfor(" + n + ",this.m4prop_mln" + n + ");")
eval("this.m4met_genfor(" + n + ",this.m4prop_mln" + n + ");");
//alert("Paso: " + n);
}
}catch(excepcion){m4err_tree(excepcion);}
}

function ponerfoco(ccolec){
for (var ni = 0; ni < ccolec.length; ni++){
//alert(ccolec[ni].tagName);
if (ccolec[ni].tagName == "A") {
ccolec[ni].focus();
break;
}
}
}

function m4err_tree(excepcion){
if (!(excepcion instanceof Error)){
var s1 = "M4Exception\nFunction : ";
var s2 = "\nException type: ";
switch(excepcion.m4prop_sidexcepcion)
		{
		case "notratable" :
			break;
		case "nodewithoutchilds" :
			//alert(s1 + excepcion.m4prop_sfuncion + s2 + excepcion.m4prop_sidexcepcion + "\nParam amatrix = " + excepcion.m4prop_achilds);
			m4setlog("_nodewithoutchilds");
			break;
		default : null
		}
}
else{
if (document.all){
alert("System Exception\nDescription: " + excepcion.description);}
else{alert("System Exception\nDescription: " + excepcion.message);}
}
}
function nodewithoutchilds(sfuncion,achilds){
this.m4prop_sidexcepcion = "nodewithoutchilds";
this.m4prop_sfuncion = sfuncion;
this.m4prop_achilds = achilds;
}
