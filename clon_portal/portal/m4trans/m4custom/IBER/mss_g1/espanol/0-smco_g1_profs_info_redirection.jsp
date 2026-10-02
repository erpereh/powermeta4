<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

<%
  String person = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"person");
  String person_ord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"person_ord");
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  if ((estado==null)||(estado.equals(""))){estado="0";} 
%>  

<%@ include file="/m4trans/m4custom/IBER/mss_g1/0-smco_prof_cv_trans.jsp" %>

<div id="cargando" name="cargando"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando" width="950px" height="580px">
  <td align="center"><img src="/iconos/cargando.gif" alt='<%=ProfCv.getProperty("prof_cv.Title1")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=ProfCv.getProperty("prof_cv.Title13")%>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> 
</div>
<form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11" method="post" name="redireccion" id="redireccion">
  <input type="hidden" id="person" name="person" value="<%=person%>" />
  <input type="hidden" id="person_ord" name="periodo" value="<%=person_ord%>" />
</form>
<script type="text/javaScript">
   m4submit("redireccion");
</script>
</body>
</html>