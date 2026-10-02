<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA"; 
    String zestado = "11";
    String znodo = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
    String zcomun = zsubsesion + "!" + znodo + ".";
    String zoutputdef = zsubsesion + "!" + znodo + "[*]";
    String zmovecontrol = znodo + "[FIRST]";
    String zSMCOSENDEMAILLOG = zcomun + "SMCO_SEND_EMAIL_LOG";

	String codigo_HTML = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"codigo_HTML");
	String person = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");
	String person_ord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");

 %>

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>

<m4:page subsessionid="<%=zsubsesion%>">
<m4:datadef m4o="SMCO_EMPLOYEE_PROFESIONAL_DATA" m4name="<%=zsubsesion%>"/>

<m4:job>
	<m4:exec node="SMCO_EMPLOYEE_PROFESIONAL_DATA" alias="delegate" method="SMCO_PRINT_FILE" m4object="<%=zsubsesion%>">
		<m4:param name="ARG_STRING_TO_PRINT" value='<%= (codigo_HTML)%>'/>
	</m4:exec>
	<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
</m4:job>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovecontrol%>"/></m4:move>


<div id="resultado" name="resultado"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando" width="950px" height="580px">
	<tr>
		<td align="center"><m4:item m4name="<%=zSMCOSENDEMAILLOG%>"/>
			<br/>
			<a title="<%=tranivMSS.getProperty("iv_mss.LblProfData")%>" href="javascript:m4submit('volver');" tabindex="6"><img alt="<%=tranivMSS.getProperty("iv_mss.LblProfData")%>" src="/iconos/icono_entrar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
		</td>
	</tr>
</table> 

<form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
	<input type="hidden" id="person" name="person" value="<%=person%>" />
	<input type="hidden" id="person_ord" name="person_ord" value="<%=person_ord%>" />
</form>

</div>
</m4:page>
</html>