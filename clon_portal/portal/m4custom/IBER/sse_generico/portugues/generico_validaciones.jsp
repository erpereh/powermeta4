<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<!-- Plantilla base del SSE -->
	<!-- Librerias Java. Obligatorio-->
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	

<%
	 Calendar ahora = Calendar.getInstance();
     int mes = ahora.get(ahora.MONTH);
     int ano = ahora.get(ahora.YEAR);
     
     //Parametrocanal p1 = new Parametrocanal("10100|acep='1','25'pend='3','12'canc='23'|10101|acep='3','12'pend='15'canc='27'|10102|acep='6','19'pend='22'canc=",mes,ano,100);
     //String codigo = p1.generarcodigo();
 %>   
 <%   
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	
 %>

	
<head>
<title>T&iacute;tulo</title>
	<!-- Hoja de Estilo general. Obligatorio-->
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<!-- Librerias JavaScript. Obligatorio-->
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
	<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
	<script type="text/javascript" src="/libreria/dom1.js"></script>	
	<script type="text/javascript" src="/libreria/clasecalendario.js"></script>
	<script type="text/javascript" src="/libreria/clasecalendariomss.js"></script>
	<!-- <script type="text/javascript" src="/libreria/clasecalendariomss.js"></script> -->
	<!--<script type="text/javascript" src="/libreria/clasecalendario.js"></script> -->
<script type="text/javascript" language="Javascript1.2">
function adios()
{
alert("adios");
}

function entrada(func,numparametros){
var cadenatotal = func + "()";
if (entrada.arguments.length > 1)
{
if (numparametros >= 1 )
{
var parametros = [];
var cadena="";
for (var i = 0; i < numparametros-1; i++)
{ 
parametros[i] = window.prompt("Parametro" + i,"");
cadena += "'" + parametros[i] + "',";
}
parametros[numparametros-1] = window.prompt("Parametro" + (numparametros -1),"");
cadena +=  "'" + parametros[numparametros-1] + "'";
cadenatotal = func + "(" + cadena + ")";
}
}
alert(cadenatotal);
eval(cadenatotal);
}
hola = new m4objvalidacion('_email','','','Entrada incorrecta',false);
	fecha_actual = new Date();
	var mes = fecha_actual.getMonth();
	omes0 = new clasecalendario("omes0",1,"2001","visible",true,250,400);
	omes0.aceptados = ['23','5','27'];
	omes1 = new clasecalendariomss("omes1",3,2001,"visible",true,350,400,'Octavio',true)
	omes1.aceptados = ['23','5','27'];
	omes1.pendientes = ['22','4','30'];
	
var coleccionempleados = new Array();idhrM10088 = new clasecalendariomss('idhrM10088',3,2001,'visible',true,0,325,'Torres Román, Octavio',true);coleccionempleados[0]= idhrM10088;idhrM10088.aceptados = [];idhrM10088.pendientes = ['20','21'];idhrM10088.cancelados = [];idhrM10088.festivos = ['13','27'];idhrM10088.pintacalendariomss();
function acceder(){
//m4objetodiv("sse_g1").style.zindex = "0";
//alert(m4objetodiv("sse_g1").style.zindex);
//alert(m4objetodiv("sse_g1").id);
   //m4elemento('prueba','hola');
//alert(otd.getAttribute("class"));
//alert(otd.getAttribute("identificador"));
	//var colectd = otd.childNodes.item(0).nodeValue;
//alert(colectd);
alert(m4elemento("listadias").rows[1].cells.length);
//var td6 = m4elementodentrodiv("prueba","hol6");
//alert(td6.style.visibility);
//td6.style.visibility = "hidden";
}
function visible(si){
if (si == true){
m4elemento("sse_g1").style.visibility = "hidden";
}
else{
m4elemento("sse_g1").style.visibility = "visible";
}
}
function evento(e){
alert("adios");
}
function pruebaid(){
var elemento = document.getElementById("hola");
alert(elemento.className);
var evt = document.createEventListener();
//evt = evento(Event);
elemento.addEventListener("click",evt,true);
}
</script>
<script type="text/javascript" language="JavaScript1.3">
 //document.forms["formu"].elements["hola"].onclick=fun1;
function cambiar(){
//document.ids.pepe.color="blue";
alert(document.tags.length);
}
</script>
<script type="text/javascript" language="JavaScript1.2" >
//alert("hola");
//var myFish = ["angel", "clown"];
//var pushed = myFish.push("drum", "lion");
//document.tags.Main.all.color="green";
//document.classes.Main.all.fontSize="18pt";
//document.classes.Main.all.fontWeight="bold";
//document.ids.NewTopic.color="blue";
//alert(pushed);
</script>
<script type="text/javascript" language="JavaScript1.2" >

function m4y2k(number)    { return (number < 1000) ? number + 1900 : number; }

function m4dialogwin(objname,objeto){
this.objeto = objeto;
this.objname = objname;
this.returnedValue = "";
this.url = "";
this.width = 0;
this.height = 0;
this.left = 0;
this.top = 0;
this.m4y2k = m4y2k;
var now = new Date();
this.name = (now).getSeconds().toString();
this.month = now.getMonth();
this.year = this.m4y2k(now.getYear());
this.win = "";
this.m4opendialog = m4opendialog;
this.m4returnfunc = m4returnfunc;
}
function m4opendialog(url, width, height) {
	//Comprobacion de que no hay un dialogo abierto ya
		
			// Inicializacion de las propiedades del Objeto de dialogo
				this.url = url;
				this.width = width;
				this.height = height;
				
			// Centrado en la ventana principal (la que me crea)
				this.left = window.scrX + ((window.outerWidth - this.width) / 2);
				this.top = window.screenY + ((window.outerHeight - this.height) / 2);
				var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=" + this.width + ",height=" + this.height;
			// Genero el dialogo y me aseguro de que tiene el foco
				this.win= window.open(this.url, this.name, attr);
				this.win.focus()
		
}


function micalendario(objeto){
    //window.open("/servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp","miventana","screenX=150,screenY=125,resizable=yes,innerHeight=300,innerWidth=450,outerHeight=320,outerWidth=470,scrollbars=yes");
 
	if (typeof(ventana) != "object"){
    ventana = new m4dialogwin("ventana",objeto);
    }
    ventana.m4opendialog("/servlet/CheckSecurity/JSP/sse_generico/calendarioRO.jsp",450,260);
}     
  
function m4returnfunc(){
this.objeto.value = this.returnedValue;
}
</script>


</head>
<body>
<!-- Encabezado -->
<%@ include file="generico_menusup.jsp" %>
<%@ include file="generico_links.jsp" %>


	<!-- Tabla de Descripcion. Obligatoria. Siempre una 3*2: un titulo de la pagina + un icono + una descripcion + opciones -->
	<table width="100%" id="tabla">
	<tr>
		<!-- Titulo funcional de la pagina -->
		<td class="titulofuncional" colspan="2">
			Titulo
		</td>
		<td>
			<!-- Boton de vuelta atras. Obligatorio-->
			<a href="" onclick="history.back();">
				<img alt="Voltar" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover="m4sombra(this)" onmouseout="m4oscuridad(this)" />
			</a>
		</td>
	</tr>
	<tr>
		<td>
			<!-- Al insertar el icono no olvides anadir su tamano exacto -->			
			<img alt="Nome" src="/iconos/noname_listado_puestos_110_125.gif" width="110" height="125" onmouseover="m4luznoname(this)" onmouseout="m4oscuridad(this)" />
		</td>
		<td>
			<!-- Descripcion -->			
			<div class="descripcionfuncional">
				Descripcion funcional de la pagina.
			</div>
			<ul class="enlacefuncional">
				<li>
					<a style="CURSOR: hand" href="">Op&ccedil;&atilde;o1</a>
				</li>
			</ul>
		</td>
		<td>
			<form id="miform" name="miform" action="">
			<input type="text" id="entrada1" size="20" value=""/>
			<input type="text" id="entrada2" value="<%=ano%>" size="20" />
			<input type="text" id="entrada3" value="<%=mes%>" size="20" />
			<input type="button" id="probar1" value="validar" size="20" onclick="hola.m4validar(m4objeto('entrada1','miform'));alert(hola.resultado);" />
			<input type="button" id="probar2" value="acceder" size="20" onclick="javascript:acceder();" />
			<input type="button" id="probar3" value="calen" size="20" onclick="micalendario(m4objeto('entrada1','miform'));" />
			<input type="button" id="probar4" value="m4valorset" size="20" onclick="javascript:m4valor('miform','entrada1','hola','hg');" />
			<input type="button" id="probar5" value="m4focus" size="20" onclick="javascript:m4focus('miform','entrada2');" />
			</form>
		</td>
	</tr>
	<tr>				
		<td>
			<select id="miselect" class="fuentevalor" name="miselect">
				<option value=""></option>
				<option value="1" selected="selected">um</option>
				<option value="2">dois</option>
				<option value="3">tr&ecirc;s</option>
				<option value="4">quatro</option>
				<option value="5">cinco</option>
			</select>										
		</td>			
	</tr>
	<tr>
		<td id="td4" name="td4" onclick="m4elemento('capa_cuerpo','td4')" class="td4">
			4
		</td>
		<td id="td32" name="td32" onclick="m4elemento('capa_cuerpo','td32')" class="td32">
			32
		</td>
		<td id="td1" name="td1" onclick="m4elemento('capa_cuerpo','td1')" class="td32">
			1
		</td>
		<td>
		<a onmouseover="visible(false)" onmouseout="visible(true)" > hola caracola! </a>
		</td>
	</tr>
	</table>
	<!-- Fin de Tabla de descripcion. -->
</div>

<script type="text/javascript">
	m4focus('miform','entrada2');
	omes0.pintacalendario();
	omes1.pintacalendariomss();
	//omesant.pintacalendario();
	//document.createAttribute("identificador");
	//var coleccion = document.getElementsByTagName("td");
	//for (var i=0; i < coleccion.length; i++){
	//coleccion.item(i).setAttribute("identificador","id"+ i);
	//}
	//fragmento();
	</script>
<div id="prueba" name="prueba" style="position:absolute; left:150px; top:500px; width:700px; height:100px; visibility: visible">
<table id="tablap" name="tablap" border="1">
<tbody id="listadias" name="listadias">
<tr>
	<td id="hola" name="hola"  class="hola">
		hola
	</td>
	<td id="hol1" name="hol1" onclick="alert(m4elemento('hol1').id)" class="hola">
		hola1
	</td>
	<td id="hol2" name="hol2" onclick="m4elemento('hol2')" class="hola">
		hola2
	</td>
</tr>
<tr>
	<td id="hol3" name="hol3" onclick="m4elemento('hol3')" class="hol5">
		hola3
	</td>
	<td id="hol4" name="hol4" onclick="m4elemento('hol4')" class="hol5">
		hola4
	</td>
	<td id="calen" name="calen" onclick="" class="hol5">
		hola5
	</td>
	<td id="hol6" name="hol6" onclick="m4elemento('hol6')" style="background-color: lightblue;" class="hol5">
		hola6
	</td>
</tr>
</tbody>
</table>
</div>
<div id="capa_disclaimer" style="position:relative; left:150px; top:300px; width:700px; height:100px; z-index:1">
	<!-- Pie de pagina -->	
	<%@ include file="generico_disclaimer.jsp" %>
</div>
</body>
</html>
