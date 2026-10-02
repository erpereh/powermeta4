<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.configuration.*" %>
	<head>
		<title>Recibo</title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
		<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
	</head>
<%
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
    String zpaga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga");
    String zmoneda = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda");
    String zrevision = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zrevision");
	String znmpay = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpay");

	
	// Variables del informe. Hay que modificarlas para cada informe que se ejecute:

	String zsubsesion = "SSP_RECIBO_NOMINA";
	String zmeta4object = "SSP_RECIBO_NOMINA";
	String znodo = "SSE_RECIBO";
	String znodo2 = "SSP_REC_PERIOD";	
	

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmove = znodo + ":" + znodo + "[FIRST]";   

// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!" + znodo2 + ".SSE_M4THROW";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   //String zOUTPUT = zraiz + "OUTPUT";
   String zRESULT = zraiz + "RESULT";
   String zHTML = zraiz + "HTTP_DATA_SOURCE";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
			M4Operations m = new M4Operations(request); 
			m.setItem(zsubsesion,znodo2,"","SSE_DT_ACCRUED_P",zpaga);
			m.setItem(zsubsesion,znodo2,"","SSE_RECIBO_HTML","1");
			m.setItem(zsubsesion,znodo2,"","ID_CURRENCY_PAR",zmoneda);			
			//m.setItem(zsubsesion,znodo2,"","SSP_PATH",pathReports);			
			m.setItem(zsubsesion,znodo2,"","SCO_SEL_PAY_P",zrevision);			
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/>
</m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<% 
    String  stResult = "";
    int iResult = -1;
    String stResult2 = "";
    try {
		M4Operations op = new M4Operations(request);
	        stResult = op.getItem("",zsubsesion,znodo,"","RESULT");
		//stResult2 = op.getItem("",zsubsesion,znodo,"","OUTPUT");        
		stResult2 = op.getItem("",zsubsesion,znodo,"","HTTP_DATA_SOURCE");        
		iResult = Float.valueOf(stResult).intValue();
    }
    catch(Exception e) {}%>

	
<%	if (iResult == -1){%>
<%}else{%>
	<m4:item m4name="<%=zHTML%>" />
<%}%>

<m4:endpage/>

</html>

