/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4class_crosstab.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

//Constructor

function m4class_crosstab(snombreobjeto,nposicionx,nposiciony){
//Propiedades
 this.m4prop_objectname = snombreobjeto;
 this.m4prop_nposx = nposicionx;
 this.m4prop_nposy = nposiciony;
 this.m4prop_axmatrix = new Array();
 this.m4prop_aymatrix = new Array();
 this.m4prop_agroupx = new Array();
 this.m4prop_agroupy = new Array();
 this.m4prop_amatrix = new Array();
//Métodos
 this.m4met_setgroupX = setgroupX;
 this.m4met_setgroupY = setgroupY;
 this.m4met_celltype = celltype;
 this.m4met_tbodyconstructor = tbodyconstructor;
 this.m4met_theadconstructor = theadconstructor;
 this.m4met_drawcrosstab = drawcrosstab;
}

function setgroupX(sparam){
var ore1 = /%1%/;
var ore2 = /%2%/;
var asparam1 = sparam.split(ore1);
for (var ni = 1; ni < asparam1.length; ni++){
this.m4prop_axmatrix[ni-1] = asparam1[ni];
}
var asparam2 = asparam1[0].split(ore2);
if (asparam2[0] == ""){   
//En Netscape el primer elemento de la matriz es ""
var asparam2 = asparam2.slice(1);
}
for (var ni = 0; ni < asparam2.length; ni++){
this.m4prop_agroupx[ni] = asparam2[ni];
}
}
function setgroupY(sparam){
var ore1 = /%1%/;
var ore2 = /%2%/;
var asparam1 = sparam.split(ore1);
for (var ni = 1; ni < asparam1.length; ni++){
this.m4prop_aymatrix[ni-1] = asparam1[ni];
}
var asparam2 = asparam1[0].split(ore2);
if (asparam2[0] == ""){   
//En Netscape el primer elemento de la matriz es ""
var asparam2 = asparam2.slice(1);
}
var ore = /,/;
var nindex = 0;
for (var ni = 0; ni < asparam2.length; ni++){
		if (ni==0){
		var aprop = asparam2[ni].split(ore);
		this.m4prop_agroupy[ni] = asparam2[ni];
		}else{
		var aprop = asparam2[ni -1].split(ore);
		nindex += parseInt(aprop[2],10);
		this.m4prop_agroupy[nindex] = asparam2[ni];
		}
}
//alert(this.m4prop_agroupy);
for (var ny=0; ny < this.m4prop_aymatrix.length; ny++){
this.m4prop_amatrix[ny] = new Array();
}
}
function drawcrosstab(sparam){
var strinicapa = "<div id = '" + this.m4prop_objectname + "' style=\"position: relative; left:" + this.m4prop_nposx + "px; top:" + this.m4prop_nposy + "px; width: 100%; height:0; z-index:2;visibility: visible;\">";
var strfincapa = "</div>";
var strinitabla = "<table width='100%' id='crosstabtable" + this.m4prop_objectname + "' border='1' class ='timetable'>";
var strfintabla = "</table>";
var strcuerpo = "";
strcuerpo = strcuerpo + "<thead>" + this.m4met_theadconstructor() + "</thead>";
strcuerpo= strcuerpo + "<tbody id='tbodycrosstab"  + this.m4prop_objectname + "' >" + this.m4met_tbodyconstructor() + "</tbody>";
strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;
//alert(strcapa);
document.write(strcapa);
//Relleno de las celdas
var ore1 = /%1%/;
var ore2 = /%2%/;
var orecoma = /,/;
var asparam1 = sparam.split(ore1);
for (var ni = 0; ni < asparam1.length; ni++){
	var asparam2 = asparam1[ni].split(ore2);
	var sidfila = asparam2[0];
	for (var nj = 1; nj < asparam2.length; nj++){
		var asparamcoma = asparam2[nj].split(orecoma);
		var sidcol = asparamcoma[0];
		var otd = document.getElementById(sidfila + sidcol);
			if (otd != null){
				document.all ? otd.setAttribute("className",asparamcoma[1]) : otd.setAttribute("class",asparamcoma[1]);
				var otexto = document.createTextNode(asparamcoma[2]);
				otd.appendChild(otexto);
			}
	}  
}
}

function theadconstructor(){
var ore = /,/;
var stdgroupcontainer = "<td colspan='2'>&nbsp;</td>";
var stdcontainer = "<td colspan='2'>&nbsp;</td>";
for (var nx=0; nx < this.m4prop_agroupx.length; nx++){
var aprop = this.m4prop_agroupx[nx].split(ore);
stdgroupcontainer += "<td class='" + aprop[0] + "' colspan='" + aprop[2] + "'>" + aprop[1] + "</td>";
}
for (var nx=0; nx < this.m4prop_axmatrix.length; nx++){
var aprop = this.m4prop_axmatrix[nx].split(ore);
stdcontainer += "<td id='" + aprop[0] + "' class='" + aprop[1] + "'>" + aprop[2] + "</td>";
}
if (this.m4prop_axmatrix.length!=0){
return ("<tr>" + stdgroupcontainer + "</tr><tr>" + stdcontainer + "</tr>");
}else{
return "";
}
}

function tbodyconstructor(){
//alert(this.m4prop_agroupy.length);
var sreturn = "";
var ore = /,/;
for (var ny=0; ny < this.m4prop_aymatrix.length; ny++){
	sreturn += "<tr>";
	if (typeof(this.m4prop_agroupy[ny]) != "undefined"){
		var aprop = this.m4prop_agroupy[ny].split(ore);
		sreturn += "<td class='" + aprop[0] + "' rowspan='" + aprop[2] + "'>" + aprop[1] + "</td>";
	}
	var apropy = this.m4prop_aymatrix[ny].split(ore);
	sreturn += "<td id='" + apropy[0] + "' class='" + apropy[1] + "'>" + apropy[2] + "</td>";
	for (var nx=0; nx < this.m4prop_axmatrix.length; nx++){
		var apropx = this.m4prop_axmatrix[nx].split(ore);
		sreturn += this.m4met_celltype(ny,nx,apropy[0],apropx[0]);
	}
	sreturn += "</tr>"
}
return sreturn;
}
 
function celltype(nyindex,nxindex,sidy,sidx){
//alert(sidy + sidx);
return "<td id='" + sidy + sidx + "'>&nbsp;</td>";
}
