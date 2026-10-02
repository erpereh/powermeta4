<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd"> 
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>
<%
String SSE_CONOCIMIENTO_TEMP = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONOCIMIENTO_TEMP");
String id_cap= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONOCIMIENTO_TEMP");
String spos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos");
String SSE_CONO_QUESTION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CONO_QUESTION");
String sResult = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_CAL_QUESTION");
if ((sResult==null)||(sResult.equals(""))){sResult = "0";}

String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
String zsubsesion ="SSCO_H_EVALUTE";
String zmeta4object = zsubsesion;
String znodo = "SSCO_EVALUATOR_TEMP";


   String zmetodo = zsubsesion + "!" + znodo + ".SSCO_ADD_QUESTIONS";

%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	M4Operations m = new M4Operations(request); 
	m.setItem(zsubsesion,znodo,"","SSCO_CONOCIMIENTO_TEMP",id_cap);  
	m.setItem(zsubsesion,znodo,"","SSCO_CONO_QUESTION",SSE_CONO_QUESTION);  
	m.setItem(zsubsesion,znodo,"","SSE_CAL_QUESTION",sResult); 
			
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodo%>"></m4:exec>	
<m4:endjob/>
<%
String zredireccion="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions.jsp?id_cap="+id_cap+"&spos="+spos+"&sResult="+sResult+"&mss="+mss;
%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">	
<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head>	
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar"><%=Tran.getProperty("Label.ssco_pro")%></td></tr>
<tr><td class="fuenteactualizar2"><%=Tran.getProperty("Label.ssco_wait")%></td></tr>
</table>
	<m4:endpage/>
</html>