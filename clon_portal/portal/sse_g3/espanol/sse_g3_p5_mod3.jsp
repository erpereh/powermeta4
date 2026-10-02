<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Objetivo</title>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zidobj = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_obj");
String zidmag = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_mag");
if ((estado==null)||(estado.equals(""))){estado="0";}
%>   
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
String zsubsesion = "SSE_H_EVALUATOR_HIST";
String zmeta4object = "SSE_H_EVALUATOR_HIST";
String znodo = "SSE_OBJETIVE";
String ztipocarga = "VIO";			 
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_VIS";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodo,"","SSE_ID_OBJECTIVE",zidobj);
	    m.setItem(zsubsesion,znodo,"","SSE_ID_MAGNITUD",zidmag);      
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
try {
	M4Operations m = new M4Operations(request);
	String zSCOCOMMENTOBJ="";
	String zSCOCOMMENTMAG="";
	String zSCONMMAGNITUDE="";
	String zSCONMOBJECTIVE="";
	zSCONMOBJECTIVE = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_OBJECTIVE"); 
	zSCOCOMMENTOBJ = m.getItem(znodo,zmeta4object,znodo,"","SCO_COMMENT_OBJ"); 
	zSCOCOMMENTMAG = m.getItem(znodo,zmeta4object,znodo,"","SCO_COMMENT_MAG"); 
	zSCONMMAGNITUDE = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_MAGNITUDE");
	if  ((zSCOCOMMENTOBJ==null)||(zSCOCOMMENTOBJ.equals(""))){
		zSCOCOMMENTOBJ="No hay descripción del objetivo.";
	}
	if  ((zSCOCOMMENTMAG==null)||(zSCOCOMMENTMAG.equals(""))){
		zSCOCOMMENTMAG="No hay descripción de la escala";
	}
%>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Objetivo:&nbsp;<%=zSCONMOBJECTIVE%></td></tr>
<tr>
	<td><img alt="Resultados de evaluaciones" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif"  width="93" height="100"  /></td>
	<td>
	<div class="descripcionfuncional">Descripci&oacute;n del objetivo.</div>
	<ul class="listaenlace"><li>
	<a class="enlacefuncional"title ="Resultados de evaluaciones" href="javascript:history.back();">Resultados de evaluaciones</a>
	</li></ul>
	</td>
</tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td >Objetivo:&nbsp;<%=zSCONMOBJECTIVE%></td>
	<td class="tablamenuright">
	<a href="javascript:history.back();">
	<img alt="Resultados de evaluaciones" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<tr><td class="fuentevalor"colspan="2">&nbsp;<%=zSCOCOMMENTOBJ%></td ></tr>
<tr class = "tablaestadosceldatitulo">
<td>Unidad de medida:&nbsp;<%=zSCONMMAGNITUDE%></td >
	<td class="tablamenuright" >
	<a href="javascript:history.back();">
	<img alt="Resultados de evaluaciones" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<tr><td class="fuentevalor" colspan="2" >&nbsp;<%=zSCOCOMMENTMAG%></td></tr>
</table>
<%
} catch(Exception e) {}
%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>
