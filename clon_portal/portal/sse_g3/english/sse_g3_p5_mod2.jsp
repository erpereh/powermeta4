<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Knowledge</title>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cono");
String zidre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_re");
if ((zidre==null)||(zidre.equals(""))){	zidre = "0";}		
if ((estado==null)||(estado.equals(""))){estado="0";}
%>   
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
</head>
<body>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
String zsubsesion = "SSE_H_EVALUATOR_HIST";
String zmeta4object = "SSE_H_EVALUATOR_HIST";

String znodo = "SSE_KNOW_LEVEL";
String ztipocarga = "VIS";   		 
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";   
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz = znodo + ":" + zsubsesion  + "!"+ znodo+"." ;
String zSCONMLEVEL = zcomun + "SCO_NM_LEVEL";
String zSCOMEANING = zcomun + "SCO_MEANING";
String zSCONMEXTDKN = zraiz + "SCO_NM_EXTD_KN";

String zmetodocarga = "CARGA:" + zsubsesion + "!M4T_H_EVALUATE_NORMAL.CARGA_VIS";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,znodo,"","SSE_ID_EXTD_KN",znivel);   
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;	
try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);			
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Knowledge Values:&nbsp;<m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe="true"/></td></tr>
<tr>
	<td><img alt="Appraisal History" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
	<td>
	<div class="descripcionfuncional">Meanings of the knowledge.</div>
	<ul class="listaenlace"><li>
	<a class="enlacefuncional" title ="Appraisal Results" href="javascript:history.back();">Appraisal Results</a>
	</li></ul>
	</td>
</tr>
</table>

<% if (zcount > 0) {
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;%>	
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
	<td>Level</td>
	<td>Meaning</td>
	<td class="tablamenuright">
	<a href="javascript:history.back();">
	<img alt="Appraisal Results" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%  zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor"colspan="2">&nbsp;<m4:item m4name="<%=zSCOMEANING%>" htmlsafe="true"/></td>
</tr>
<% } else { %>
 <tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe="true"/></td>
	<td class="fuentevalor2"colspan="2">&nbsp;<m4:item m4name="<%=zSCOMEANING%>" htmlsafe="true"/></td>
</tr>
 <%}%>
</m4:loop>
</table>
<%}%>	
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


