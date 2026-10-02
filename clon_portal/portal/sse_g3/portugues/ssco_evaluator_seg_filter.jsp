<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script>

<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="31";}
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
//String zfiltrojob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltrojob");
String zfiltrojob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltrojob");
if ((zfiltrojob==null)|| (""==zfiltrojob)){zfiltrojob = "";} 



%>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	

<%@ include file="/sse_g3/sse_ev_trans.jsp"%>

	<% String ztitle = TranEss.getProperty("ev_ess.EvSeg");%>

<title><%=ztitle%></title>
</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%@ include file="../ssco_evaluator_seg_filter_body.jsp"%>	
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>



