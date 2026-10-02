<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/fun_gen_act.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />

<%@ include file="/mss_g3/smco_iv_trans.jsp"%>
<%
  String FeedBackTitle = tranivMSS.getProperty("iv_mss.FeedBackTitle") ;
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

%>


<head>

<title><%=FeedBackTitle%></title>

</head>
<body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>


<%@ include file="../smco_g3_p31_feedback_body.jsp" %>

<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>

</div>

</body>
<m4:endpage/>
</html>