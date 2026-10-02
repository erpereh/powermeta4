<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%
  String person = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"person");
  String person_ord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"person_ord");
  String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");   
  if ((zVis==null)||(zVis.equals(""))){zVis = "1";}
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  if ((estado==null)||(estado.equals(""))){estado="0";} 
%>  
<%@ include file="../../mss_g1/smco_prof_cv_trans.jsp" %>

<div id="cargando" name="cargando"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando" width="760px" height="580px">
  <td align="center"><img src="/iconos/cargando.gif" alt='<%=ProfCv.getProperty("prof_cv.Title1")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=ProfCv.getProperty("prof_cv.Title13")%>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> 
</div>

<form action="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=11" method="post" name="redireccion" id="redireccion">
  <input type="hidden" id="person" name="person"  value="<%=person%>" />
  <input type="hidden" id="person_ord" name="periodo"  value="<%=person_ord%>" />
  <input type="hidden" id="cabecera" name="cabecera"  value="1" />
  <input type="hidden" id="zVis" name="zVis"  value="<%=zVis%>" />
</form>
<script type="text/javaScript">
  m4submit("redireccion");
</script>
</html>