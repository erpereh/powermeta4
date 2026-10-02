<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Consultation des pr&ecirc;ts financiers</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%	/*	
String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	*/
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	
	%>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_LOANS_EMP";
   String zmeta4object = "SSE_LOANS_EMP";
   String znodo = "M4T_SSE_LOANS";
  
// No se modifica en general.
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!M4T_SSE_LOANS.CARGA_LOANS";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
 
   String zsconombreprestamo = zcomun + "SCO_NM_LOAN_1";
   String zscofechaaprobacion = zcomun + "SCO_DT_APPROVAL_1";
   String zscocapital = zcomun + "SCO_AMT_LOAN_1";
   String zsconumcuotas = zcomun + "SCO_NUM_QUOTAS_1";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String zto = new Integer(new Integer(zcountv).intValue()-1).toString();
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Consultation des pr&ecirc;ts financiers</td></tr>
<tr>
	<td><img src="/iconos/noname_organizacion_ess_115_100.gif" width="115" height="100" alt="Emplois successifs"title="Consultation des pr&ecirc;ts financiers" /></td>
	<td>
	<div class="fuentedescripcion">Consultez vos pr&ecirc;ts financiers.</div>
	</td>
</tr>
</table>
<%if (zcounti > 0) {
	String zposicions = "0";	
      int zposicion =0;
      %>	
<table class="tablaestados" cellspacing="0" width="100%">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;Pr&ecirc;t</td>
	<td class="tablaestadosceldatitulo">&nbsp;Date de l'accord</td>
	<td class="tablaestadosceldatitulo">&nbsp;Capital</td>
	<td class="tablaestadosceldatitulo">&nbsp;Nb. d'&eacute;ch&eacute;ances</td>
</tr>
<m4:loop from="0" to="<%=zto%>">
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zsconombreprestamo%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zscofechaaprobacion%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zscocapital%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zsconumcuotas%>" htmlsafe="true"/></td>
</tr>
</m4:loop>
</table>	
<%} else {%>	
<div class="fuentenodatos">Vous n'avez actuellement aucun pr&ecirc;t financier.</div>
<%}%>
<div>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
</div>
<m4:endpage/>
</body>
</html>



