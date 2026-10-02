<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
	<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
	<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
	<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
	
	<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
	<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
	
	<%
		String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
		String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
		if ((estado==null)||(estado.equals(""))){estado="0";}
		if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>

	<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
	<%@ include file="../../sse_generico/francais/generico_links.jsp" %>

	<title>
		<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6")%>
	</title>
	
</head>
<body>
	<%@ include file="../ssco_g1_p1_mod6.jsp" %>
	<%@include file="../../sse_generico/francais/generico_ventanas.jsp"%>
	<%}%>	
	<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
	</div>
	<m4:endpage/>
</body>
</html>
