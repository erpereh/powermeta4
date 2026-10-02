/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Libreria de funciones del menu
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4menu.jsp
	@(#)Date: 23/03/2002 
*/
function grupo(nombrecapa,anchuraminima,posicionx,posiciony,links,nombres){

//Propiedades
	this.idparent = nombrecapa.substring(5,7);
  	var oparent = document.getElementById(this.idparent);
  	this.nombrecapa = nombrecapa;
	this.anchuraminima = anchuraminima
	//this.posicionx = oparent.getAttribute("offsetLeft"); 
	this.posicionx = 0;
	this.posiciony = posiciony; 
	this.links = links;
	this.nombres = nombres;
	this.nalturadiv = document.getElementById("menu").getAttribute("offsetHeight");
//Metodos
	this.generarcapa = generarcapa;
	this.mostrardiv = mostrardiv;
	this.ocultardiv = ocultardiv;
	this.normal = normal;
	this.resaltado = resaltado;
	this.ir = ir;
}

//DEFINICION DE LOS METODOS DEL OBJETO GRUPO

function  generarcapa(){

	var longmax = this.nombres[0].length;
	if (this.nombres.length > 1){
		for (var j=0; j < this.nombres.length; j++){
			if (this.nombres[j].length >= longmax){
				longmax = this.nombres[j].length;
			}
		}
	}
	var longitudcapa = (longmax+1)*(7);
	if (longitudcapa < this.anchuraminima){longitudcapa = this.anchuraminima;}
	if ((this.posicionx + longitudcapa) > (screen.availWidth*0.96)){longitudcapa = screen.availWidth*0.96 - this.posicionx;}
	var strcapa = "";
	var strinicapa = "<div id='" + this.nombrecapa + "' name='" + this.nombrecapa + "' style='position:absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:" + longitudcapa + "px; visibility: hidden; z-index: 4;' onmouseout=\"" + this.nombrecapa + ".ocultardiv('" + this.nombrecapa + "');\" onmouseover=\"" + this.nombrecapa + ".mostrardiv('" + this.nombrecapa + "');\">";
	var strfincapa = "</div>";
	var strinitabla = "<table class='menu' border='0' cellpadding='0' cellspacing='0' style='border-left: #E0E0E0 solid 1; border-right: 1 solid #808080; border-top: 1 solid #E0E0E0; border-bottom: 1 solid #808080'>";
	var strfintabla = "</table>";
	var strcuerpo="";
	for (var i=0; i< this.links.length; i++){
		if ((this.nombres[i]!="") && (this.links[i]!="")){
			strcuerpo= strcuerpo + "<tr><td id='" + i + this.nombrecapa + "' class='menu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\"" + this.nombrecapa + ".ir(this.id);\" > &nbsp;&nbsp;" + this.nombres[i]+ "</td></tr>";
		}
		else{
			if (this.nombres[i]==""){
				strcuerpo = strcuerpo + "<tr><td class='menu'><hr noshade='noshade' size=\"1\"></td></tr>";
			}
			else{
				strcuerpo= strcuerpo + "<tr><td id='" + i + this.nombrecapa + "' class='menutitle' width='" + longitudcapa + "' align='left' > &nbsp;&nbsp;" + this.nombres[i]+ "</td></tr>";
			}
		}
	}
	strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;
	//alert(strcapa);
	document.write(strcapa);
	
}

function ocultardiv(capa){
m4elemento(capa).style.visibility = "hidden";
m4elemento(capa).style.top = this.posiciony + "px";
m4elemento(capa).style.left = 0 + "px";
if (document.all) mostrarElemento("SELECT");
}

function mostrardiv(capa){
var incLeft=0;
var odivmenu = document.getElementById("menu");
var idparent = capa.substring(5,7);
var nborde_tabla = 5;
var oparent = document.getElementById(idparent);
var nfactor = 0;
var nincremento = 0;
if (document.all){// IE
    var topmenu =document.getElementById("tablemenu").getAttribute("offsetTop")+ nborde_tabla;
	var nTableMenuWidth = document.getElementById("tablemenu").getAttribute("offsetWidth");
	var nParentMenuLeftWidth = oparent.offsetLeft + oparent.offsetWidth;
	//mirar las filas que ocupa el menu en funcion del ancho de la tabla de menus y el left + width del actual
	var nfilasused = parseInt((nParentMenuLeftWidth/nTableMenuWidth)+1,10);
	//Tamaño de fila real, pq si ocupa más de una fila oparent.offsetHeight viene multiplicado
    filamenuheight = oparent.offsetHeight/nfilasused; 
	//Establecer el factor de multiplicación en función de la fila en la que empieza el menu
	var nfactor = parseInt((oparent.offsetTop - 1)/filamenuheight,10) + 1; 
	m4elemento(capa).style.top = (topmenu  + nfactor* filamenuheight) + "px";		
}else{m4elemento(capa).style.top =(oparent.offsetTop + oparent.offsetHeight ) +"px";} //Netscape
//Left del menu
if (!document.all){ incLeft = odivmenu.offsetLeft;}
m4elemento(capa).style.left = (oparent.offsetLeft - incLeft) + "px";
if (document.all){ 	ocultarElemento("SELECT",capa);}

//******Cálculo para que no salga la barra de scroll inferior************
var ore = /px/;
var aoffset = m4elemento(capa).style.left.split(ore);
var aancho = m4elemento(capa).style.width.split(ore);
var nanchocuerpo = document.all ? odivmenu.clientWidth : odivmenu.offsetWidth; 
var nsuma = parseInt(aoffset[0],10) + parseInt(aancho[0],10);
if ( nsuma >= nanchocuerpo){
var nresto =  nsuma - nanchocuerpo;
m4elemento(capa).style.left = (parseInt(aoffset[0],10) - nresto) + "px";
}
//*******************************************************
m4elemento(capa).style.visibility = "visible";
}

function resaltado(obj){
	
	obj.className = "menu2";
}

function normal(obj){

	obj.className = "menu";
}

function ir(sidtd){
	var ore = new RegExp(this.nombrecapa);
	var atrozos = sidtd.split(ore);
	var nindice = atrozos[0];
	var sdireccion = this.links[nindice];
	if ((sdireccion != "") && (sdireccion != null)){
		var ore1 = new RegExp("/servlet/CheckSecurity/JSP/");
		var atrozos1 = sdireccion.split(ore1);
		var aresultado = true;
		if (atrozos1[0] == sdireccion) aresultado = false;
		aresultado ? location.href=sdireccion : eval(sdireccion);
	}
}

//Funciones para resolver el "bug" de explorer con las select y los div; obviamente son sólo para explorer

function ocultarElemento(tipoObjeto,capa)
{
	var currentMenu;
	currentMenu = document.all[capa];
	currentMenuLeft   = currentMenu.offsetLeft;
	currentMenuTop    = currentMenu.offsetTop;
	currentMenuParent = currentMenu.offsetParent;
	while (currentMenuParent.tagName.toUpperCase() != "BODY")
		{
			currentMenuLeft  += currentMenuParent.offsetLeft;
			currentMenuTop   += currentMenuParent.offsetTop;
			currentMenuParent = currentMenuParent.offsetParent;
		}
	for (i = 0; i < document.getElementsByTagName(tipoObjeto).length; i++)
	{
		obj = document.getElementsByTagName(tipoObjeto)[i];
		objLeft   = obj.offsetLeft;
		objTop    = obj.offsetTop;
		objParent = obj.offsetParent;

		while (objParent.tagName.toUpperCase() != "BODY")
		{
			objLeft  += objParent.offsetLeft;
			objTop   += objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		if (objLeft > (currentMenuLeft + currentMenu.offsetWidth) || currentMenuLeft > (objLeft + obj.offsetWidth))
			;
		else if(objTop > (currentMenuTop + currentMenu.offsetHeight))
			;
		else
			obj.style.visibility = "hidden";
		
	}
}
function mostrarElemento(tipoObjeto)
{
	for (i = 0; i < document.getElementsByTagName(tipoObjeto).length; i++)
	{
		obj = document.getElementsByTagName(tipoObjeto)[i];
		obj.style.visibility = "";
	}
}

// OTROS METODOS

function generarcapa_str(iIndex,ileft){
	  stgrupo = "shco_g" + iIndex;
	  strcreargrupo = "var " + stgrupo + " = new grupo(" + "'" + stgrupo + "'" +",230,"+ileft+",77,mlinks" + iIndex + ",mnames"+ iIndex +");";
	  strcreargrupo = strcreargrupo + stgrupo + ".generarcapa();";
	  return strcreargrupo;
}
				

function generarcapa_menus (arr_links,arr_nombres,arr_hassubmenu){

    //posicion left del menu	  
 	var lLeftLongitud = 40;
  	var menusnumber = arr_nombres.length;
    var strgenerartodaslascapas = "";
	if (menusnumber > 0){
		for (var j=0; j < menusnumber; j++){
 			if (arr_links[j] == ""){
                strhref= "";
            }else{
               strhref= " href='" + arr_links[j] + "'"; 
            }
			strmenulink= "<a " + strhref; 
			strgenerarcapa="";
			strid="";
			strshowhidesubmenu = "";
			
			//El left
			if (j>0) { //a partir del segundo menu
			    var snombremenu = arr_nombres[j];
				lLeftLongitud = lLeftLongitud + snombremenu.length;
			}
			if (arr_hassubmenu[j] == 1){
			  strgenerarcapa = generarcapa_str(j,lLeftLongitud);
			  strid = " id='g" +j +"' ";
			  strgrupo = "shco_g" +j;
			  strmostrardiv = "\"" + strgrupo+".mostrardiv('" +strgrupo + "');\"";
			  strocultardiv = "\"" + strgrupo+".ocultardiv('" +strgrupo + "');\"";
			  strshowhidesubmenu = " onkeydown=" + strmostrardiv + " onblur=" + strocultardiv + " onmouseover="+ strmostrardiv +" onmouseout=" + strocultardiv;
			}
			strmenulink = strmenulink + strid + strshowhidesubmenu + ">" + arr_nombres[j] + "</a>" + "&nbsp;|&nbsp;";
			document.write(strmenulink);
            strgenerartodaslascapas = strgenerartodaslascapas + strgenerarcapa;

		}
	}
    return strgenerartodaslascapas;	
}	
function generate_disclaimer(arr_names,arr_links){
    var strdisclamer= "";

    for (var i=0; i < arr_names.length; i++){
	    if (arr_links[i]!=""){
		   strdisclamer = strdisclamer + "<a title=" + "\"" + arr_names[i] + "\"" + " href=" + "\"" + arr_links[i] +"\"> [" + arr_names[i]+"]</a>" + "&nbsp;";
		}else{
		   strdisclamer = strdisclamer + "[" + arr_names[i]+"]" + "&nbsp;";
		}
	}
    document.write(strdisclamer);
}
function ir2(slink){
	var sdireccion = slink;
	if ((sdireccion != "") && (sdireccion != null)){
		var ore1 = new RegExp("/servlet/CheckSecurity/JSP/");
		var atrozos1 = sdireccion.split(ore1);
		var aresultado = true;
		if (atrozos1[0] == sdireccion) aresultado = false;
		aresultado ? location.href=sdireccion : eval(sdireccion);
	}
}
function m4gen_menus (arr_links,arr_nombres,arr_hassubmenu){
  	var menusnumber = arr_nombres.length;
	if (menusnumber >1){
		for (var j=1; j < menusnumber; j++){
			strmenulink="<table width='100%' cellspacing='0'>";
			strhref= "";
            strmenulink= strmenulink+"<tr><td  class='fuentetitulomenu' colspan='2' >" ; 
			strmenulink = strmenulink +  arr_nombres[j] + "</td></tr>" ;
			            
			var snombremenu = arr_nombres[j];
			if (arr_hassubmenu[j] == 1){			
			strmenulink=strmenulink + "<tr><td colspan='2'><hr class='barramenu' /></td></tr><tr><td></td><td class='fuentedescripcion'><ul class='listaenlace'>";
			
			  var  vnames = "mnames"+j;	
			  var  pru = "mnames"+j;
			  vnames=eval(vnames);
			  var link="mlinks"+j;
			  link=eval(link);	
			  var submenusnumber1 = vnames.length;
			  for (var s=0; s < submenusnumber1; s++){
				
					if (link[s] == ""){
						if (vnames[s] == ""){
						}else{
							if (s==0){
							strmenulink= strmenulink+"<b>" + vnames[s] +"</b> "; 		
							}else{				
							strmenulink= strmenulink+"<br /><br /><b>" + vnames[s] +"</b> "; 		
							}
						}
					}else{	
					vnames[s]=vnames[s].split(/\&nbsp;/);	
					strmenulink= strmenulink+"<li><a title=\""+vnames[s]+" \" href="+"\""+"javascript:ir2(&quot;"+  link[s]  + "&quot;)"+ "\"" + ">" + vnames[s] +"</a></li>"; 
					}
			   }
			   strmenulink=strmenulink+"</ul></td></tr></table> <br/>";
			}else{
				strmenulink=strmenulink+"</table> <br/>";
			}
			
			document.write(strmenulink);
		}
	}
}
