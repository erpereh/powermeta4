<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http:/www.w3.org/TR/REC_html40/loose.DTD">
<HTML>
<HEAD>
<TITLE>Lista de selecci&oacute;n</TITLE>
        <!-- Hoja de Estilo general-->
        <LINK HREF="/estilo/estilo_sse.css" TYPE="text/css" REL="stylesheet">
        <!-- Funciones JavaScript -->
<SCRIPT LANGUAGE="javascript1.2" SRC="/libreria/funciones_sse.js"></SCRIPT>
<SCRIPT LANGUAGE="javascript1.2" SRC="/libreria/funciones_sselistas.js"></SCRIPT>

</HEAD>
<BODY OnLoad="javascript:setUp()">
<%@ page  import="com.meta4.session.*"%>
<%@ page  import="com.meta4.m4operations.M4Operations"%>

<%  String zidPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidPeriod");
        if ((zidPeriod == null))
		{
           zidPeriod = "1";
        }
%>

<%  String znodo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nodo");
    String zitemValor = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemValor");
    String zitemId = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"itemId");
    String zMeta4Object = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idm4o");
    String znfilas = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nfilas");
    String ztarea = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tarea");
    String ztitulo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"titulo");
    String zznodo = zMeta4Object + "!" + znodo;     
    String zraiz = zMeta4Object + "!" + znodo + ".";
    String zoutputdef = zMeta4Object + "!" + znodo + "[*]";
    String zitembisValor = zraiz + zitemValor;
    String zitembisId = zraiz + zitemId;
    String zitem = zitemValor;
    String zmove = znodo + "[FIRST]";
 %>
  
<m4:startpage m4task="<%= ztarea %>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%= ztarea %>"/>
<m4:exec m4method="CARGA:SSE_EVALUATOR!M4T_LIST_HR_PERIOD.CARGA_DATOS">
	<m4:param name="ARG_ID_PERIOD" value="<%= zidPeriod %>"/>
</m4:exec>
<m4:outputdef>
	<m4:param name="M4NAME0" value="<%= zoutputdef %>"/>
</m4:outputdef>
<m4:endjob/>
<m4:move>
<m4:param name="<%= zMeta4Object %>" value="<%= zmove %>"/>
</m4:move>
<!-- Fin del JSP  -->
<table>
<tr>
        <TD CLASS="FuenteTituloFuncional" align="CENTER">
        <IMG SRC="/iconos/noname_listado.gif" width="63" height="80">
        <%= ztitulo %>
        </td>
</tr>


<form name="menuform" onsubmit="seleccionHecha(document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].text,document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].value);">
<tr>
        <td colspan="3" align="CENTER">
                <input type="text" name="entry" size="25" onKeyUp="javascript:obj1.bldUpdate();">
        </td>
</tr>
<script language="JavaScript">
<!--
        document.menuform.entry.focus();
// -->
</script>
  <tr> 
      <td align="CENTER">
        <select name="itemlist" size="10" ondblclick="seleccionHecha(document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].text,document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].value);">
        <m4:iterator m4rows="<%= znfilas %>">
			<m4:param name="M4ITEM0" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML( zitembisValor )%>"/>
			<m4:param name="M4ITEM1" value="<%= zitembisId %>"/>
        	<option value=$M4ITEM1$>$M4ITEM1$</option>
        </m4:iterator>
        </select>               
      </td>
  </tr>
  <tr>
        <td align="CENTER">
           <input type="button" name="Aceptar" id="Aceptar" value="Aceptar" onclick="seleccionHecha(document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].text,document.menuform.itemlist.options[document.menuform.itemlist.selectedIndex].value);">
        </td>
  </tr>
</form>
</table>
<m4:endpage/>
</BODY>
</HTML>
