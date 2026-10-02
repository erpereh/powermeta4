<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>	
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="31";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal"); 
String pos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pos"); 

String ordinal= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal");
String zSCO_EMPLOYEE_COMM = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_COMM");
String zSCO_EMPLOYEE_AGREE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_EMPLOYEE_AGREE");

String zsubsesion ="SSCO_H_EVALUTE";
String zmeta4object = zsubsesion;
String znodo = "SSCO_EVALUATOR_TEMP";
String zmetodo = zsubsesion + "!" + znodo + ".SSCO_ACT_EVALUATE";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>">
<m4:param name="ARG_ORDINAL" value="<%=ordinal%>"/>
<m4:param name="ARG_EMP_AG" value="<%=zSCO_EMPLOYEE_AGREE%>"/>
<m4:param name="ARG_EMP_CO" value="<%=zSCO_EMPLOYEE_COMM%>"/>

</m4:exec>	
<m4:endjob/>
<%
String zredireccion="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp";
%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">	
<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head>	
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar"><%=Tran.getProperty("Label.ssco_pro")%></td></tr>
<tr><td class="fuenteactualizar2"><%=Tran.getProperty("Label.ssco_wait")%></td></tr>
</table>
</div>
<m4:endpage/>
</body>
</html>



