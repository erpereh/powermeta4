<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<title>Prêts financiers</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javaScript">

function detalle(loan,ordloan,nmloan){
m4valor("oculto","id_loan",loan,"set");
m4valor("oculto","ord_loan",ordloan,"set");
m4valor("oculto","nm_loan",nmloan,"set");
m4submit("oculto"); 
}


</script>
<%		
Generatablaparametros zobjtabla = new Generatablaparametros(request);

String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>


</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_LOANS";
   String zmeta4object = "SSE_LOANS";
   String znodo = "M4T_LN_HT_HR_LOANS";
   String ztipocarga = "M4T";   
   String zloan = null;
   String zordloan = null;
   String znmloan = null;
   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g2/sse_g2_p5_P.jsp";
   String zestado = "21";
   
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   

// No se modifica en general.
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
             
// Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   

// Items que vamos a cargar. Se deben añadir todos aquellos que se deseen visualizar
 
   String zSCOIDLOAN = zcomun + "SCO_ID_LOAN";
   String zSCONMLOAN = zcomun + "SCO_NM_LOAN";  
   String zSCOORLOAN = zcomun + "SCO_OR_LOAN";
   String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";
   String zSCODTREQPAYMENT = zcomun + "SCO_DT_REQ_PAYMENT";
   String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";
   String zSCORATE = zcomun + "SCO_RATE"; 
   String zNMCURRENCY = zcomun + "ID_CURRENCY";
   

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
} catch(Exception e) {}
%>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%

    int  zcount  = 0;
    int  zcounti  = 0;
    try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);	  
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);

%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Pr&ecirc;ts financiers</td></tr>
<tr>
	<td><img src="/iconos/Solicitud_prestamos_51x100.gif" width="100" height="100" alt="Prêts successifs"title="Prêts successifs" /></td>
	<td>
	<div class="fuentedescripcion">Consultez vos pr&ecirc;ts successifs. Pour afficher la description d'un pr&ecirc;t, cliquez sur le libell&eacute; de celui-ci.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="Demander un prêt" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21">Demander un pr&ecirc;t</a></li>
	</ul>
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

<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td  class="tablaestadosceldatitulo">&nbsp;Type de pr&ecirc;t</td>
	<td  class="tablaestadosceldatitulo">&nbsp;Taux d'intérêt&nbsp;&nbsp;</td>
	<td  class="tablaestadosceldatitulo">&nbsp;Capital&nbsp;&nbsp;&nbsp;</td>
	<td class="tablaestadosceldatitulo">&nbsp;</td>	
	<td  class="tablaestadosceldatitulo" colspan="2">&nbsp;1er remboursement</td>
	<td  class="tablaestadosceldatitulo">&nbsp;Montant par échéance</td>
	<td class="tablaestadosceldatitulo">&nbsp;</td>	
	<td class = "tablaestadosceldatitulo" align="center" colspan="2">
      <a style="cursor:hand" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?&estado=21">
	  <img alt="Demander un nouveau prêt" title ="Demander un nouveau prêt" src="/iconos/icono_flecha_azul1_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
</a>
</td>
</tr>


<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td  class="fuentevalor"> <a class="enlacefuncional" title="Détail du prêt" href="javascript:detalle ('<m4:item m4name="<%=zSCOIDLOAN%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCOORLOAN%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCONMLOAN%>" jsafe="true" htmlsafe="true"/>');">&nbsp;<m4:item m4name="<%=zSCONMLOAN%>" htmlsafe="true"/></a></td>		
	<td  class="fuentevalor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCORATE%>" htmlsafe="true"/>&nbsp;%</td>
	<td  class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCOAMTLOAN%>" htmlsafe="true"/></td>
	<td  class="fuentevalor">&nbsp;<m4:item m4name="<%=zNMCURRENCY%>" htmlsafe="true"/></td>
	<td  class="fuentevalor"colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCODTREQPAYMENT%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCOAMTQUOTAS%>" htmlsafe="true"/></td>	
	<td  class="fuentevalor" colspan="3">&nbsp;</td>
	
	
</tr>
<%}else{%>
    <tr>
	<td  class="fuentevalor2"> <a class="enlacefuncional" title="Détail du prêt" href="javascript:detalle ('<m4:item m4name="<%=zSCOIDLOAN%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCOORLOAN%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCONMLOAN%>" jsafe="true" htmlsafe="true"/>');">&nbsp;<m4:item m4name="<%=zSCONMLOAN%>" htmlsafe="true"/></a></td>		
	<td  class="fuentevalor2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCORATE%>" htmlsafe="true"/>&nbsp;%</td>
	<td  class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCOAMTLOAN%>" htmlsafe="true"/></td>
	<td  class="fuentevalor2">&nbsp;<m4:item m4name="<%=zNMCURRENCY%>" htmlsafe="true"/></td>
	<td  class="fuentevalor2" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCODTREQPAYMENT%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCOAMTQUOTAS%>" htmlsafe="true"/></td>		
	<td  class="fuentevalor2" colspan="3">&nbsp;</td>		
</tr>
 <%}%>
</m4:loop>
</table>	

<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_desc.jsp?estado=21" method="post" name="oculto" id="oculto">
  <input type="hidden" id="id_loan"  name = "id_loan" value ="" />
  <input type="hidden" id="ord_loan"  name = "ord_loan" value ="" />
  <input type="hidden" id="nm_loan"  name = "nm_loan" value ="" />                     
</form>

<%@include file="../../sse_generico/francais/generico_ventanas.jsp"%>


<%} else {%>	
<div class="fuentenodatos">Aucune donn&eacute;e concernant de possibles prêts financiers ne figure pour l'instant.</div>
<%}%>
<div>

<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>

<m4:endpage/>
</body>
</html>



