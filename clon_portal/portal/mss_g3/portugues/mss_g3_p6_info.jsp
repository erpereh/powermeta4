<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_train_trans.jsp"%>		
	<head>
		<title><%=TrainMss.getProperty("Label.prodTitle")%></title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
		<script type="text/javascript"  language="Javascript1.2" src="/libreria/dom1.js"></script>
		<script type="text/javascript" language="Javascript1.2">

		function AddComment() {
			window.close();
		}
			  
		</script>
   <body>
		<table border="0" width="100%">
		<tr>	
			<td class="fuentecampo"><%=TrainMss.getProperty("Label.prodMens")%></td>
		</tr>
		<tr>	
			<td class="fuentevalor3"><%=TrainMss.getProperty("Label.prodDesc")%></td>
		</tr>
		</table>
		<table width="100%">
		  <tr>
			<td align="center">
				<a onclick="javascript:AddComment();"><img alt="<%=Tran.getProperty("Button.Ok")%>" src="/iconos/icono_aceptar_mss_36_36.gif" height="36" width="36"></img></a>
			</td>  
		  </tr>
	</table>
  </body>
</html>
