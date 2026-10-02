<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Internal Mobility</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado =zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor ("zinicios");
//String zfiltro =zobjtabla.m4paramvalor("zfiltro");
String zfiltro  = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
String znombre = zobjtabla.m4paramvalor("znombre");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((znombre==null)|| (""==znombre)){znombre = "All";}
%>
<script type="text/javascript">
function filtrar(){
var valor =	m4select("filtro","selectform","value");
m4valor("oculto","zfiltro",valor,"set");
var nombre =m4select("filtro","selectform","text");
m4valor("oculto","znombre",nombre,"set");
m4submit("oculto");
}
function actualizar(ord,nombre){
  var ord1 = m4sust_general(ord,"*","'");
  var nombre1 = m4sust_general(nombre,"*","'");  
  m4valor("nombreformulario","SCO_OR_RECRUIT_PR",ord1,"set");
  m4valor("nombreformulario","SCO_NM_RECRUITMENT",nombre1,"set");
  m4submit("nombreformulario");
}
function navegar(ord){
var parametros = new Array("estado","ord");
var valores = new Array(31,ord);
m4navegar("sse_g3/sse_g3_p2_mod.jsp",parametros,valores);
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_INT_MOVILITY";
   String zmeta4object = "SSE_INT_MOVILITY";
   String znodo2 = "M4T_JOB";
   String znodo = "M4T_RECRUIT_PRO";
   
   String ztipocarga = "VIS";   
   String zventanas = "30";
   int zvuelta = 5;
   String zdireccion = "sse_g3/sse_g3_p2.jsp";
   String zestado = "31";
 
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zraiz2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + ".";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";   
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSTDNJOBCODE2 = zcomun2 + "STD_N_JOB_CODE";
   String zSTDIDJOBCODE2 = zcomun2 + "STD_ID_JOB_CODE";
   
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zSTDNJOBCODE = zcomun + "STD_N_JOB_CODE";
   String zPOSICION = zcomun + "POSICION"; 
   String zSTDNWORKUNIT = zcomun + "STD_N_WORK_UNIT";
   String zSSEDTLIMIT = zcomun + "SSE_DT_LIMIT"; 
   String zSCOORRECRUITPR =zcomun + "SCO_OR_RECRUIT_PR";
   String zSCONMRECRUITMENT = zcomun+"SCO_NM_RECRUITMENT";
   
   String zmetodocarga = zsubsesion + "!SSE_PRINCIPAL.CARGA";			
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,znodo,"","ID_FILTRO_JOB",zfiltro);
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;	
int  zcount2  = 0;
int  zcounti2  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
String	zcountv2 = String.valueOf(zcounti2);
%>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro" value="" />
<input type="hidden" id="znombre" name="znombre"  value="" />
</form>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Internal Mobility</td></tr>
<tr>
	<td><img alt="Internal Mobility"title="Internal Mobility" src="/iconos/noname_movilidad_interna_derecha_100_100.gif" width="100" height="100" /></td>
	<td>
	<div class="descripcionfuncional">View the job vacancies that are currently available.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="Mobility Requests"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2_vis.jsp?estado=31">Mobility Requests</a></li>
	</ul>
	</td>
</tr>
</table>
<table width="100%" cellspacing="0">
<tr><td class = "tablaestadosceldatitulo" colspan="2">Filter</td></tr>
<tr>
	<td class="fuentecampofiltro" colspan="2">
	<form action="" method="post" name="selectform" id="selectform">
	&nbsp;Job:&nbsp;
	<select id="filtro" name ="filtro" class="fuenteformulario"  title="Select the Job" onchange="filtrar()">

	<option value="Todos">All</option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDJOBCODE2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNJOBCODE2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	<script type="text/javascript" language="Javascript1.5"><!--
	 m4searchoptioness("selectform","filtro","<%=zfiltro%>");
--></script>

	</form>
	</td>
</tr>
</table>
<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="nombreformulario" id="nombreformulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_INT_MOVILITY" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_INT_MOVILITY" />
<input type="hidden" id="SCO_OR_RECRUIT_PR" name="SCO_OR_RECRUIT_PR" value="" />
<input type="hidden" id="SCO_NM_RECRUITMENT" name="SCO_NM_RECRUITMENT" value="" />
</form>
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
		<td>&nbsp;<m4:label m4name="<%=zSTDNJOBCODE%>" htmlsafe="true"/></td><td>&nbsp;<m4:label m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td><td colspan="2">&nbsp;<m4:label m4name="<%=zSSEDTLIMIT%>" htmlsafe="true"/></td>		
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2; %>
<script type="text/javascript">
  var mivar1<%=zposicion%> = m4sust_general("<m4:item m4name="<%=zSCOORRECRUITPR%>" jsafe="true"/>","'","*");
  var mivar2<%=zposicion%> = m4sust_general("<m4:item m4name="<%=zSCONMRECRUITMENT%>" jsafe="true"/>","'","*");
</script>
<%if (zcontrol==0){%>
<tr class="fuentevalor">
	<td><a title="Job Details" href="Javascript:navegar('<m4:item m4name="<%=zPOSICION%>" jsafe="true" htmlsafe="true"/>');">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe="true"/></a></td>
	<td >&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
	<td >&nbsp;<m4:item m4name="<%=zSSEDTLIMIT%>" htmlsafe="true"/></td>
	<td class="fuentebotonright"><a title="Request Mobility"href="javascript:actualizar(mivar1<%=zposicion%>,mivar2<%=zposicion%>);"><img  alt="Request Mobility" src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /></a></td>
</tr>	
 <% } else { %>
<tr class="fuentevalor2">
	<td><a title = "Job Details" href="Javascript:navegar('<m4:item m4name="<%=zPOSICION%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSTDNJOBCODE%>" jsafe="true" htmlsafe="true"/>');">&nbsp;<m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe="true"/></a></td >
	<td >&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
	<td >&nbsp;<m4:item m4name="<%=zSSEDTLIMIT%>" htmlsafe="true"/></td>
	<td class="fuentebotonright2"><a title="Request Mobility"href="javascript:actualizar(mivar1<%=zposicion%>,mivar2<%=zposicion%>);"><img  alt="Request Mobility" src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /></a></td>
</tr>
 <%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/english/generico_ventanas.jsp"%>
<% } else { %>
<div class="fuentenodatos">There is no vacancy for this job.</div>
<br/> <br/>
<%}%>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


