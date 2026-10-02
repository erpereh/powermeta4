<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Detalle del préstamo</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>


<%	



String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String zloan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_loan");
String zordloan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord_loan");



if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zloan==null)||(zloan.equals(""))) {zloan="";}

if ((zordloan==null)||(zordloan.equals(""))) {zordloan="";}

%>

</head>

<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_LOANS";
   String zmeta4object = "SSE_LOANS";
   String znodo = "M4T_LN_HT_HR_LOANS";
   String znodo2 = "M4T_LN_HT_CONDITIONS";
   String ztipocarga = "DET";
          
   
// No se modifica en general.
   
   String zoutputdef = zsubsesion + "!" + znodo +"[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";
   String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]"; 
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   

   
 // Metodo de carga del Meta4Object generico

   
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
             
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<% try {
	M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,znodo,"","ID_LOAN",zloan);  
	m.setItem(zsubsesion,znodo,"","ORD_LOAN",zordloan);
} catch(Exception e) {}
%>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");

		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>   
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove2%>"/></m4:move>
      

<%

	  String zimpcuota ="";

%>
												
<table width="100%">
<tr><td class="titulofuncional" colspan="2">&nbsp;Pr&eacute;stamo <m4:item  item="NM_LOAN" htmlsafe="true" outputdef="<%=znodo%>"/> </td></tr>
<tr>
  
	<td><img alt="Detalles del Préstamo" title="Detalles del Préstamo"src="/iconos/Solicitud_prestamos_51x100.gif" width="100" height="100" /></td>
	
	<td><div class="fuentedescripcion">Consulta todos los detalles acerca de tu pr&eacute;stamo.</div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title= "Historial de préstamos"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21">Historial de préstamos</a></li></ul>
	</td>
</tr>
</table>
		
		
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
    <td colspan="5">Detalles del Pr&eacute;stamo</td>
    	<td class="tablamenuright" colspan="6" align="right">
		<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21">
		<img alt="Historial de préstamos" title="Historial de préstamos" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"   />
		</a>
	</td>           		
</tr>
<tr>
  <td class="fuentecampo" colspan="3">&nbsp;Fec.Solicitud&nbsp;&nbsp;</td>
  <td class="fuentevalor"><m4:item  item="DT_APPLICATION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentecampo" colspan="3">&nbsp;Tipo Préstamo&nbsp;&nbsp;</td>	
   <td class="fuentevalor"><m4:item  item="NM_LOAN" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>  

<tr>			
	<td class="fuentecampo" colspan="3">&nbsp;Interés&nbsp;&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="RATE" htmlsafe="true" outputdef="<%=znodo2%>"/>&nbsp;%</td>
	<td class="fuentecampo" colspan="3">&nbsp;Capital&nbsp;&nbsp;</td> 
    <td class="fuentevalor"><m4:item  item="AMT_LOAN" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;&nbsp;&nbsp;&nbsp;<m4:item  item="IDEN_CURRENCY" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>			 	  

<tr>     	
	<td class="fuentecampo" colspan="3">&nbsp;Motivo Préstamo&nbsp;&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="NM_REASON" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
	<td class="fuentecampo" colspan="3">&nbsp;Tipo Frecuencia&nbsp;&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="NM_PAY_OFF_FREQUENCY" htmlsafe="true" outputdef="<%=znodo2%>"/></td>	 
</tr>
<tr>
    <td class="fuentecampo" colspan="3">&nbsp;Fec.Solicitud 1ºPago&nbsp;&nbsp;</td> 
    <td class="fuentevalor"><m4:item  item="DT_REQ_PAYMENT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<m4:item var="zimpcuota" item="AMT_QUOTAS" htmlsafe="true" outputdef="<%=znodo2%>"/>	 
    <td class="fuentecampo" colspan = "3">&nbsp;Importe Cuota&nbsp;&nbsp;</td> 
	 
	   
	  
     <% 
       if ((zimpcuota!=null)&& !(zimpcuota.equals(""))){
     %>     
     <td class="fuentevalor"><%=zimpcuota%>&nbsp;&nbsp;&nbsp;&nbsp;<m4:item  item="IDEN_CURRENCY" htmlsafe="true" outputdef="<%=znodo%>"/></td>
     <%}
     else {%>
     <td class="fuentevalor"></td>	
     <%}%>                
</tr>
</table>
<m4:endpage/>
</body>
