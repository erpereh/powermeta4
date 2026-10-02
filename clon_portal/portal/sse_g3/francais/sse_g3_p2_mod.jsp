<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Description de l'emploi</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
String zsubsesion = "SSE_INT_MOVILITY";
String zmeta4object = "SSE_INT_MOVILITY";
String znodo = "M4T_RECRUIT_PRO";
int zregistroinicial = Integer.valueOf(zord).intValue();
String zoutputdef = zsubsesion + "!" + znodo + "["+zregistroinicial+"-"+zregistroinicial+"]";
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String zSTD_JOB_PATH = zraiz + "STD_JOB_PATH";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/><m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:item m4varname="zDes" m4name="<%=zSTD_JOB_PATH%>" htmlsafe = "true"/>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Description de l'emploi</td></tr>
<tr>
	<td><img alt="Mobilit&eacute; interne" title="Mobilit&eacute; interne"src="/iconos/noname_puesto_144_100.gif" width="100" height="100" /></td>
	<td>
	<div class="descripcionfuncional">Consultez les d&eacute;tails de chaque emploi.</div>
	<ul class="listaenlace"><li><a class="enlacefuncional" title="Mobilit&eacute; interne" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31">Mobilit&eacute; interne</a></li>
<%if (zDes.equals("")){

}else{%>
		<li><a class="enlacefuncional" tabindex="2" title="<m4:label m4name="<%=zSTD_JOB_PATH%>" htmlsafe = "true"/>"  <a href='<%=zDes%>' target="" onClick="window.open(this.href, this.target,'width=700,height=700,resizable,scrollbars');return false;"><m4:label m4name="<%=zSTD_JOB_PATH%>" htmlsafe = "true"/></a></li>
<%}%>			   						   								 							 		  			   
</ul>	
	</td>
</tr>
</table>
<%  
String zSCOJSDESCRIP="";
String zSCONMRECRUITMENT="";
String zSCOORRECRUITPR="";
String zSTDNJOBCODE="";
try {
M4Operations t = new M4Operations(request);
t.moveData(znodo,zmeta4object,znodo,zord);
zSCOJSDESCRIP = t.getItem(znodo,zmeta4object,znodo,"","SCO_JS_DESCRIP"); 
zSCONMRECRUITMENT = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_RECRUITMENT");
zSCOORRECRUITPR = t.getItem(znodo,zmeta4object,znodo,"","SCO_OR_RECRUIT_PR");
zSTDNJOBCODE = t.getItem(znodo,zmeta4object,znodo,"","STD_N_JOB_CODE");
} catch(Exception e) {}
%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="nombreformulario" id="nombreformulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_INT_MOVILITY" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_INT_MOVILITY" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<%if (zSCOJSDESCRIP.equals("")){%>
<div class="fuentenodatos">Aucun d&eacute;tail n'existe pour cet emploi.</div>
<br/> <br/> <br/> <br/> 
<%}else{%>
<tr class="tablaestadosceldatitulo">
	<td>Description de l'emploi&nbsp;:&nbsp;<%=zSTDNJOBCODE%></td>
	<td class="tablamenuright"><a title="Mobilit&eacute; interne"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31"><img alt="Mobilit&eacute; interne" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<%=zSCOJSDESCRIP%></td></tr>
<tr>
	<td class="fuenteboton" colspan="2">
	<a title="Postuler"href="javascript:m4submit('nombreformulario');">
	<img id="Envoyer" alt="Postuler" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<%}%>
</table>
<input type="hidden" id="SCO_NM_RECRUITMENT" name="SCO_NM_RECRUITMENT" value="<%=zSCONMRECRUITMENT%>" />
<input type="hidden" id="SCO_OR_RECRUIT_PR" name="SCO_OR_RECRUIT_PR" value="<%=zSCOORRECRUITPR%>" />
</form>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>
