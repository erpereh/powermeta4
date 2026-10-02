<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%
   String nombre = "";
   String valor = "";
	
	Hashtable zhash = new Hashtable(20);
	Enumeration oenum = request.getParameterNames();
	   while(oenum.hasMoreElements ()){
			 nombre = (String) oenum.nextElement();
			 valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
			zhash.put (nombre,valor);
	}
   String zparametro = "";
   String zsubsesion = "SMCO_DEV_PLAN_ACCION";

   zparametro	="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
zhash.remove("ACC"); 
	
	String key =""; 
	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
			 key = (String) enumhash.nextElement();
			    valor = (String) zhash.get(key);
			    zhash.remove(key); 
				zparametro	+= key + "=" + valor + "{" ;
			}	
	
   
   
  
   
   
   String zmeta4object = zsubsesion;
   String znodo = "SMCO_CR_ACT";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
   String zmetodo = zsubsesion + "!" + znodo + ".SMCO_CHECK_SELECTED";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="PARAM_STRING" value="<%=zparametro%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>




<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head>	
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar"><%=Tran.getProperty("Label.ssco_pro")%></td></tr>
<tr><td class="fuenteactualizar2"><%=Tran.getProperty("Label.ssco_wait")%></td></tr>
</table>
	<m4:endpage/>
	<script type="text/javascript" language="Javascript1.5"><!--
	if (window.opener && !window.opener.closed){

	window.opener.location = "/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp";
	}
	window.close();
--></script>
</body>
</html>
