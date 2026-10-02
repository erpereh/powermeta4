<!-- GTA virtual clock in ESS, redirection: sse_g4_gta_virtual_clock_redirect.jsp -->
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<body onload="sendRedirect()">
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />


<div id="cargando" name="cargando"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando" width="950px" height="580px">
	<td align="center"><img src="/iconos/cargando.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td></tr></table> 
</div>
<form action="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_gta_virtual_clock.jsp" method="post" name="redireccion" id="redireccion">
	<input type="hidden" id="minutesToGMT" name="minutesToGMT"  value="" />
</form>	
<script type="text/javaScript">
	function sendRedirect(){	
		var dDate = new Date();
		var minutesToGMT = dDate.getTimezoneOffset();	
		document.getElementById('minutesToGMT').value = minutesToGMT;
		m4submit("redireccion");
	}
</script>
</body>
</html>