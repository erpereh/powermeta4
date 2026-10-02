<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />

<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %> 
<%@ include file="/sse_g3/sse_ev_trans.jsp"%> 
<% 
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="31";}
String ztitle =TranEss.getProperty("ev_ess.Eval");
String zpathVerComentario = "/sse_g3/espanol/ssco_viewcomment.jsp?comment=";
%>
<title><%=ztitle%></title>
</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%@ include file="../ssco_evaluator_body.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/> 
</html>


