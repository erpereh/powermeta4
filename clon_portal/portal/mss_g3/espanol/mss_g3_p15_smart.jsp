
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>		
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<% String ztitle = TranMss.getProperty("ev_mss.LinkSmart"); %>
<title><%=ztitle%></title>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<head>

	<%
	Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String estado = zobjtabla.m4paramvalor("estado");
	String zinicios = zobjtabla.m4paramvalor("zinicios");
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>
</head>
<body>
  <%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranMss.getProperty("ev_mss.Lblsmart3")%></td></tr>
<tr>
  <td >
    <ul class="listaenlace" ><li><a  class="enlacefuncional" title ="<%=TranMss.getProperty("ev_mss.DefObjEmp")%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&proc=1"><%=TranMss.getProperty("ev_mss.DefObjEmp")%></a></li></ul>
  </td>
</tr>
<tr><td class="descripcionfuncional" colspan="2"><%=TranMss.getProperty("ev_mss.Lblsmart1")%><br/></td></tr>
</table>

<table width="100%">  
<tr><br></br>
   <td>
	<div class="fuentedescripcion" colspan="2"><B><%=TranMss.getProperty("ev_mss.Lblsmart4")%>:</B> <%=TranMss.getProperty("ev_mss.Lblsmart4_1")%></div>
   </td>

</tr> 
 
<tr>
  <td>
 	<div class="fuentedescripcion"><B><%=TranMss.getProperty("ev_mss.Lblsmart5")%>:</B> <%=TranMss.getProperty("ev_mss.Lblsmart5_1")%></div>
   </td>
</tr>
<tr>
  <td>
 	<div class="fuentedescripcion"><B><%=TranMss.getProperty("ev_mss.Lblsmart6")%>:</B> <%=TranMss.getProperty("ev_mss.Lblsmart6_1")%></div>
   </td>
</tr>
<tr>
   <td>
	<div class="fuentedescripcion"><B><%=TranMss.getProperty("ev_mss.Lblsmart7")%>:</B> <%=TranMss.getProperty("ev_mss.Lblsmart7_1")%></div>
   </td>

</tr>

<tr>
  <td>
	<div class="fuentedescripcion"><B><%=TranMss.getProperty("ev_mss.Lblsmart8")%>:</B> <%=TranMss.getProperty("ev_mss.Lblsmart8_1")%></div>
  </td>
</tr>

</table>

<table width="100%">
<tr><br></br><td class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.Lblsmart9")%>	</td></tr>

</table>

</div>
</body>
<m4:endpage/>