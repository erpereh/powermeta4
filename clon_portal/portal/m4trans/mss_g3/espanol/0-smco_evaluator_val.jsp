<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<% 
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="31";}
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((zinicios==null)||(zinicios.equals(""))){zinicios="1";}
%>   
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-menu_mss.jsp" %>	
<%@ include file="/m4trans/mss_g3/0-mss_ev_trans.jsp"%>	
<title><%=TranMss.getProperty("ev_mss.Valida")%></title></head>
<body>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%@ include file="/m4trans/mss_g3/0-smco_evaluator_val.jsp"%>	
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>	
</html>


