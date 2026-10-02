<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd"> 
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%
String param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"param");
if ((param==null)||(param.equals(""))){param="";}
String zsubsesion = "SSCO_H_EVALUTE";
   
String zmeta4object = zsubsesion;
String znodo = "SSCO_EVALUATOR_TEMP";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
 
String zmetodo = zsubsesion + "!" + znodo + ".GESTION_VAL";
String zraiz = zsubsesion + "!" + znodo + ".";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ARG_VAL" value="<%=param%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:endjob/>


<%
	String zerror = "";
	String zredireccion =  "/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp" ;
		
%>

	<meta http-equiv='refresh' content="2; url=<%=zredireccion%>">

	

<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head>	
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar"><%=Tran.getProperty("Label.ssco_pro")%></td></tr>
<tr><td class="fuenteactualizar2"><%=Tran.getProperty("Label.ssco_wait")%></td></tr>
</table>
<body>

	<m4:endpage/>
</body>
</html>