<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<script type="text/javaScript">var sformatofechas;</script>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_ess_es.js"></script>

<%@ include file="/mss_generico/english/menu_mss.jsp" %>	
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="/mss_generico/mss_cr_trans.jsp" %>
<title><%=Tran.getProperty("GTA_78")%></title>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>

<%@ include file="../mss_g4_p1_val_body.jsp"%> 

<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>
<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
<input type="hidden" id="param" name="param" value="" />
<input type="hidden" id="TAG" name="TAG" value="" />
</form>
<%}else{%><div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound7")%></div><%}%>		
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</html>



