/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4class_timetable.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

 
 function m4class_timetable(nombreobjeto,dia,mes,visible,posicionx,posiciony){
//Propiedades
 this.m4prop_objectname = nombreobjeto;
 this.m4prop_nmes = mes;
 this.m4prop_ndia = dia;
 this.m4prop_svisible = visible;
 this.m4prop_nposx = posicionx;
 this.m4prop_nposy = posiciony;
 this.m4prop_amonths = new Array("Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre");
 this.m4prop_lock = new Boolean(1);
 this.m4prop_am = new Array();
 this.m4prop_pm = new Array();
 this.m4prop_apm = "";
 for (var nx = 1; nx < 13; nx ++){
  this.m4prop_am[nx] = new Array(0,0);
  this.m4prop_pm[nx] = new Array(0,0);
 }
//Métodos
 this.m4met_Today = Today;
 this.m4met_Timetable_Head = Timetable_Head;
 this.m4met_Timetable_Body = Timetable_Body;
 this.m4met_Timetable_Paint = Timetable_Paint;
 this.m4met_Timetable_Innertd = Timetable_Innertd;
 this.m4met_Timetable_Show= Timetable_Show;
 this.m4met_Timetable_Move= Timetable_Move;
 this.m4met_Timetable_Key = Timetable_Key;
 this.m4met_sethalfhour = sethalfhour;	
 this.m4met_comprobar = comprobar;
 this.m4met_pruebaseleccion = pruebaseleccion;
 this.m4met_setapm = setapm;
}
 
function Timetable_Show(param){
if (param == true){
m4elemento(this.m4prop_objectname).style.visibility = "visible";
}
else{
m4elemento(this.m4prop_objectname).style.visibility = "hidden";
}
}

function Timetable_Move(event){
if (!this.m4prop_lock){
	if (document.all) {
		var x = event.clientX - 100;
		var y = event.clientY - 15;
	}else{
		var x = (event.pageX - 100) + "px";
		var y = (event.pageY - 15) + "px";
	}
	m4elemento(this.m4prop_objectname).style.left = x;
	m4elemento(this.m4prop_objectname).style.top = y;
}
}

function Today() {
            // Generate today's date.
            this.now = new Date();
            this.year = this.now.getYear(); 
            this.month = this.now.getMonth();
            this.day = this.now.getDate();
	   
 }
function Timetable_Head(){
var th ="";
th = "<TR><TD class='title' align='center' colspan='13' >Horario día " + this.m4prop_ndia + " de " +  this.m4prop_amonths[this.m4prop_nmes] + "</TD></TR>";
return th;
}     
function Timetable_Body(smitad,sclass){
var ho = "";
hola = "<TR>";
for (var ni = 0; ni < 13; ni++) {
if (ni !=0 ){
hola += "<TD class='" + sclass + "' onmouseup ='" + this.m4prop_objectname + ".m4met_pruebaseleccion(this)' onmousedown ='" + this.m4prop_objectname + ".m4met_setapm(\"" + sclass +"\")'><div style ='display: inline' class='mitad1' id='" + this.m4prop_objectname + sclass +"_1"+ ni + "' onclick='" + this.m4prop_objectname + ".m4met_sethalfhour(" + ni + ",1,\"" + sclass + "\",this)' >&nbsp</div>"  + ni + "<div style ='display: inline' class='mitad1' id='" + this.m4prop_objectname + sclass + "_2" + ni + "' onclick='" + this.m4prop_objectname + ".m4met_sethalfhour(" + ni + ",2,\"" + sclass + "\",this)' >&nbsp</div></TD>";
}
else{
hola += "<TD class='" + "titleleft" + "' STYLE='cursor: default;' onclick='" + this.m4prop_objectname + ".m4met_comprobar()' >"  + smitad + "</TD>";
}
}
hola += "</TR>";
return hola;
}
function Timetable_Paint(){
            
            if (this.m4prop_nmes == 12){
            this.m4prop_nmes = 0;
            }
            
			
			//alert(this.nombre);
            var strinicapa = "<div ID='"+ this.m4prop_objectname + "'  style=\"position: absolute; left:" + this.m4prop_nposx + "px; top:" + this.m4prop_nposy + "px; width:0; height:0; z-index:2;visibility: " + this.m4prop_svisible + ";\">";
			var strfincapa = "</div>";
		
			var strinitabla = "<table ID='hola" + this.m4prop_objectname + "'  class = 'timetable'  bgcolor=\"#808CBF\" border =\"1\" >";
			var strfintabla = "</table>";
            
            var strcuerpo = "";
            
			strcuerpo= strcuerpo + "<THEAD id='" + this.m4prop_objectname + "_thead' onmousemove='" + this.m4prop_objectname + ".m4met_Timetable_Move(event)' onclick='" + this.m4prop_objectname + ".m4met_Timetable_Key()'>" + this.m4met_Timetable_Head() + "</THEAD>";
            
			strcuerpo= strcuerpo + "<TBODY id='hourList" + this.m4prop_objectname + "' align='center'>" + this.m4met_Timetable_Body('A.M.','am') + this.m4met_Timetable_Body('P.M.','pm') + "</TBODY>";
			strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;
			
			//alert(strcapa);
			
			document.write(strcapa);
}
function Timetable_Key(){
if (this.m4prop_lock){
this.m4prop_lock = false;
}
else{
this.m4prop_lock = true;
}
}

function Timetable_Innertd(otd,stexto,sclass){
var ocapa1 = document.createElement("div");
var ocapa2 = document.createElement("div");
ocapa1.setAttribute("id",this.m4prop_nombreobjeto + sclass +"_1"+ stexto);
ocapa2.setAttribute("id",this.m4prop_nombreobjeto + sclass +"_2"+ stexto);
var odataintd= document.createTextNode(stexto);
otd.appendChild(ocapa1);
otd.appendChild(odataintd);
otd.appendChild(ocapa2);
}

function sethalfhour(nnumber,nindex,sclass,odiv){
odiv.className == "mitad1" ?  odiv.className = "mitad2" : odiv.className = "mitad1";
//alert("this.m4prop_" + sclass + "[" + nnumber+ "][" + nindex+ "]==1 ? this.m4prop_" + sclass + "["+ nnumber+ "][" + nindex + "]=0 : this.m4prop_" + sclass + "[" + nnumber+ "][" + nindex + "]=1;");
eval("this.m4prop_" + sclass + "[" + nnumber+ "][" + nindex+ "]==1 ? this.m4prop_" + sclass + "["+ nnumber+ "][" + nindex + "]=0 : this.m4prop_" + sclass + "[" + nnumber+ "][" + nindex + "]=1;");
}
function  comprobar(){
alert(this.m4prop_am);
alert(this.m4prop_pm);
}

function pruebaseleccion(otd){
//alert(otd.childNodes[1].nodeValue);
if (document.all){
var oselec = document.selection.createRange();
var sselec = oselec.text;
}else{
var oselec = window.getSelection();
var sselec = new String(oselec);
}
re = /\s+/;
aselec = sselec.split(re);
var amatrix = new Array();
var ultimo = 0;
for (var ni=0; ni < aselec.length; ni++){
	if (aselec[ni] != "" ){
		amatrix[amatrix.length] = aselec[ni];
	}
	if ((amatrix.length > 1) && (parseInt(amatrix[amatrix.length - 2],10) > parseInt(amatrix[amatrix.length-1],10))){var ultimo = amatrix.pop()} 
}
//alert(ultimo);
//alert(amatrix);
//sethalfhour(nnumber=nj,nindex=1 ó 2,sclass=pm ó am,odiv=con id=" + this.m4prop_objectname + sclass +"_1"+ ni + ")
//m4met_sethalfhour(nj,1,sclass,this)
for (var nj=0; nj < amatrix.length; nj++){
var siddiv1 = this.m4prop_objectname + this.m4prop_apm +"_1"+ amatrix[nj];
var odiv1= document.getElementById(siddiv1);
var siddiv2 = this.m4prop_objectname + this.m4prop_apm +"_2"+ amatrix[nj];
var odiv2= document.getElementById(siddiv2);
this.m4met_sethalfhour(amatrix[nj],1,this.m4prop_apm,odiv1);
this.m4met_sethalfhour(amatrix[nj],2,this.m4prop_apm,odiv2);
}
}

function setapm(sapm){
this.m4prop_apm = sapm;
}









