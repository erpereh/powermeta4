<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %> 
<%@ include file="/sse_g3/sse_ev_trans.jsp"%> 
<title><%=TranEss.getProperty("ev_ess.Res")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

</head>
<body>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="31";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal"); 
String pos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pos"); 
String Ver =  Tran.getProperty("Label.Ver");

%>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%@ include file="../ssco_evaluate_mod_body.jsp" %>

<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>