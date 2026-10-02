<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd"> 
<html>
<%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sgco_gen_inc.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_trans.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
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
   String zsubsesion = "SSCO_H_EVALUTE";
	
	
	zparametro	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
	zhash.remove("ACC"); 
	zparametro	+="SSE_TEMPORAL"+ "=" + ((String)zhash.get("SSE_TEMPORAL")) + "{";
	
	zparametro	+="REC"+ "=" + ((String)zhash.get("REC")) + "{"; 
	zhash.remove("REC");
	
	String key =""; 
	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
			 key = (String) enumhash.nextElement();
			    valor = (String) zhash.get(key);
			    zhash.remove(key); 
				zparametro	+= key + "=" + valor + "{" ;
			}	
	
   
   String zmeta4object = zsubsesion;
   String znodo = "SSCO_H_EVALUATE";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
 
   String zmetodo = zsubsesion + "!" + znodo + ".SSCO_ACT";
   String zraiz = zsubsesion + "!" + znodo + ".";
   
   
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ARG_SSCO_ACT" value="<%=zparametro%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:endjob/>


	<m4:item m4varname="zRED" item="SSCO_RED" htmlsafe="true" outputdef="<%=znodo%>" />
<%
	String zerror = "";
	String zredireccion = "";
	
	if (zRED.equals("0")){	
			zredireccion = "/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator.jsp" ;
	}else{
					zredireccion = "/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp" ;
	}					
		
%>

	<meta http-equiv='refresh' content="2 url=<%=zredireccion%>">

<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head>	
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar"><%=Tran.getProperty("Label.ssco_pro")%></td></tr>
<tr><td class="fuenteactualizar2"><%=Tran.getProperty("Label.ssco_wait")%></td></tr>
</table>
<m4:endpage/>
</body>
</html>