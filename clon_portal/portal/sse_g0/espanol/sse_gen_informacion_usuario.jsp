<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<html>
<head>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<title>Errores</title>
</head> 
<body>
<%
  String zsubsesion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion");
  if ((zsubsesion==null)||(zsubsesion.equals(""))){zsubsesion="";}
   String zmeta4object = zsubsesion;
   String znodo2 = "SSE_GN_LOGS";
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
 %>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<div id="capa_cuerpo" style="position:relative; left:1%; top:1%; width:100%; height:0%; z-index:2">
<table class="table_error"width="100%" cellspacing="0">
<tr class="dat_tit">
<td  >Mensaje de error </td>
<td><a href="" onclick="window.close();"><img title="Cerrar" alt="Cerrar" src="/iconos/noname_volver_52_44.gif" height="44" width="52" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:dataloop outputdef="<%=znodo2%>">
<m4:item  m4varname="zTipErr" item="SSE_LOG_TYPE" htmlsafe="true" outputdef="<%=znodo2%>"/>
<m4:current m4varname="current" outputdef="<%=znodo2%>"/>
<%
int zcurrent = Integer.valueOf(current).intValue()+1; 
 current = String.valueOf(zcurrent);
%>
<%if (zTipErr.equals("-1")){%>
  <tr class="err">
  
<%}else if (zTipErr.equals("1")){%>
  <tr class="warning">

  <%}else{%>
  <tr class="info">

  
<%}%>
<td><%=current%></td>
        <td><m4:item  item="SSE_LOG_TEXT" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
      </m4:dataloop>
  
  
</tr>
</table>
</div>
<m4:endpage/>
</body>


