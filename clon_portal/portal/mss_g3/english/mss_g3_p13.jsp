<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>Training Requests</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/english/menu_mss.jsp" %>		
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
	<%

	
	
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	String zidform = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidform");
	String znombref = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombref");
	


	if ((zidform==null)|| (""==zidform)){zidform = "ALL";} 
	if ((znombref==null)|| (""==znombref)){znombref = "Todos";}
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>

<script type="text/javascript">
function filtrar(){
var valorfiltro =  m4select("filtroformacion","formfiltro","value");
var nombrefiltro = m4select("filtroformacion","formfiltro","text");
m4valor("oculto","zidform",valorfiltro,"set");
m4valor("oculto","znombref",nombrefiltro,"set");
m4submit("oculto");}

function filtrodetalle(idtrtb,request){
m4valor("detalle","zidtrtb",idtrtb,"set");
m4valor("detalle","zrequest",request,"set");
m4submit("detalle");
}

</script>
</head>
<body>
  <%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
    String zsubsesion = "SSM_SOLICITUDES_PENDIENTES";
	String zmeta4object = "SSM_SOLICITUDES_PENDIENTES";  
	String znodo = "SSM_REQ";
	String znodo1 = "SSM_LISTA_FORMACION";
	
	String ztipocarga = zidform;
    String zventanas = "20";
	int zvuelta = 5;
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
    String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
    String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
    String zlectura = zsubsesion + "!" + znodo;
    String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
    String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
    String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
    String zlectura1 = zsubsesion + "!" + znodo1;
	String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
	String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
      
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.SSM_CARGA";		
			
	// Items to be loaded. You must add all of the ones that you want to view.
	
   String zNOMBREFORM = zraiz1 + "NOMBRE_FORM";
   String zIDTRTB = zraiz1 + "IDTRTB";
   
   String zSCOIDREQUEST = zraiz + "SCO_ID_REQUEST";
   String zSCOIDTRTBREQ = zraiz + "SCO_ID_TRTBREQ";
   String zSCONUMPLACES = zraiz + "SCO_NUM_PLACES";
   String zNOMFORM = zraiz + "NOM_FORM";

	String zpos="";  		
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<%
	int  zcounti  = 0;	
	int  zcount  = 0;
	int  zcount1  = 0;
	int  zcount1i  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    zcount1i = m.getCountInClient(znodo1,zsubsesion,znodo1);
		} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount1v = String.valueOf(zcount1);
%>
<%
String sFiltroNameL=Tran.getProperty("Label.All");

%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Training Requests</td></tr>
<tr>
	<td><img src="/iconos/noname_puesto_181_125.gif" width="99" height="100" alt="Currently Scheduled Events" ></td>
	<td class="descripcionfuncional">View the training requests.</td>
</tr>
</table>
<form name="formfiltro" id="formfiltro" action="">
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="2">Filter</td></tr>
<tr>
	<td class="fuentecampofiltro" colspan="2">&nbsp;Training Type&nbsp;
	<select id="filtroformacion" name="filtroformacion" class="fuenteapartados" onchange="filtrar()">

	<option value="ALL"><%=sFiltroNameL%></option>
	<%
	String zposicions = "0";
	int zposicion =0;
	%>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount1i).intValue()-1).toString()%>">
	<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();%>
 	<option value="<m4:item m4name="<%=zIDTRTB%>" htmlsafe="true"/>"><m4:item m4name="<%=zNOMBREFORM%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
	<script type="text/javascript" language="Javascript1.5">
         if ('<%=zidform%>'!= "ALL"){
           m4searchoptioness('formfiltro','filtroformacion','<%=zidform%>');
         }
         </script>	
</tr>
<% if (zcounti > 0) { %>
<tr>
	<td class="tablaestadosceldatitulo">Training Name</td>
	<td class="tablaestadosceldatitulo">Number of Slots</td>
</tr>
<%
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;zpos="";if (zcontrol2==0){zpos="2";}
%>
 <tr>
	<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:filtrodetalle('<m4:item m4name="<%=zSCOIDTRTBREQ%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCOIDREQUEST%>" jsafe="true" htmlsafe="true"/>')"><m4:item m4name="<%=zNOMFORM%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zSCONUMPLACES%>" htmlsafe="true"/></td>
</tr>
 </m4:loop>
 <% } else { %>
</table>
<br></br>
<div class="fuentenodatos">There are currently no pending requests.</div>
<% } %>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zidform" name="zidform"  value="<%=zidform%>" />
<input type="hidden" id="znombref" name="znombref"  value="<%=znombref%>" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>	
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13_det.jsp?estado=31" method="post" name="detalle" id="detalle">
<input type="hidden" id="zidtrtb" name="zidtrtb"  value="" />
<input type="hidden" id="zrequest" name="zrequest"  value="" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>	


<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


