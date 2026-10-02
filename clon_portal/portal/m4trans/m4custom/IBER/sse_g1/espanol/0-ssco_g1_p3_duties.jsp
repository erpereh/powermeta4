<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-menu_mss.jsp" %>	
<%@ include file="/m4trans/m4custom/IBER/sse_g1/0-sse_g1_trans.jsp" %>
<% String sComment = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"comment"); %>
	<head>
		<title><%=sse_g1Ess.getProperty("Label.VerDevAct")%></title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
		<script type="text/javascript"  language="Javascript1.2" src="/libreria/dom1.js"></script>
		<script type="text/javascript" language="Javascript1.2">

		function ViewComment() {
			window.close();
		}
			  
		</script>
	</head>

   <body onunload="window.returnValue = document.forms['miform'].elements['SCO_DESCRIPTION'].value;">
	<form  id="miform" name="miform" action="">
		<table  border="0" width="100%">
		<tr>
			<td  class="fuentecampo" colspan="1" ><%=sse_g1Ess.getProperty("Label.VerDevAct")%></td>	
			<td class="fuentecampo" colspan="3"> <textarea rows="6" cols="40" id="SCO_DESCRIPTION" name="SCO_DESCRIPTION" style="background-color: #e7e8ec;" onkeypress="return false;" title="<%=sse_g1Ess.getProperty("Label.VerDevAct")%>" tabindex="1" ><%=sComment%></textarea></td>
		</tr>	
		</table>
	</form>

  </body>
</html>

