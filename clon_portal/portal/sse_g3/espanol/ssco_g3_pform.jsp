<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_g3_trans.jsp"%>
<title><%=sse_g3Ess.getProperty("Title.ssco_g3_pform")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />


<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
estado="31";
%>

</head>
<body>
<table  align="left"><br/><tr> 
<td><img src="/iconos/contract_write_128.png" height="44" width="52" onmouseover="m4sombra(this)" onmouseout="m4oscuridad(this)" /></td>
<td class="descripcionfuncional">
<b>DOCUMENTOS DEL PLAN DE FORMACION:</b>
</td></tr>

<tr><td>
<ul>
<a href="GESS_Planificacion.pdf"><li class="enlacefuncional">Documento 1</li></A>
<li class="enlacefuncional">Documento 2</li>
<li class="enlacefuncional">Documento 3</li>
</ul></td>

</tr>
</table>





	<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
	<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>



	<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>

<m4:endpage/>
</body>

</html>



