<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<%@page import="java.io.*" %> 
<%@page import="java.util.*" %> 
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>

<head>


<title>Documentaci&oacute;n Publicada</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />


<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>

<%

String zsubsesion 	= "CSP_PUBLICACIONES_ESS";
String zmeta4object = "CSP_PUBLICACIONES_ESS";
String zmetodocarga = zsubsesion + "!CSP_PUBLICACIONES_ESS.CSP_CARGA";
String znodo 		= "CSP_PUBLICACIONES_ESS";


String zraiz 		= znodo 		+ ":" + zsubsesion 	+ "!" + znodo  + ".";  
String zoutputdef 	= zsubsesion 	+ "!" + znodo 		+ "[*]";
String zcomun 		= znodo 		+ ":" + zsubsesion 	+ "!" + znodo  + "[&VAR.m4lix]" + ".";


String zN_FILE		= "";           
String zDOC_CONTENT = zcomun + "DOC_CONTENT";


%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
        <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
		<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>		
    <m4:endjob/>

<%
int  zcount  	= 0;
int  zcounti  	= 0;  

try {
    M4Operations m = new M4Operations(request);
    zcount 		= m.getCount(znodo,zsubsesion,znodo);
    zcounti 	= m.getCountInClient(znodo,zsubsesion,znodo);
	

} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);%>	

<%
if ((zcounti > 0)) {
String zregistrofinals = String.valueOf(zcounti - 1);
%>	
	
</head>
<body>

<table  align="left"><br/>
<tr> 
	<td>
		<img src="/iconos/contract_write_128.png" height="44" width="52" onmouseover="m4sombra(this)" onmouseout="m4oscuridad(this)" />
	</td>
	<td class="descripcionfuncional">
		<b>Documentaci&oacute;n Publicada:</b>
	</td>
</tr>
<tr>
	<td>
		<ul>
			<m4:loop from="0" to="<%=zregistrofinals%>">
				<li> 
				 <a href="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_PUBLICACIONES_ESS!CSP_PUBLICACIONES_ESS[<%=m4lix%>].DOC_CONTENT" target="_blank"> 
				 <%try {  
				 
					M4Operations q = new M4Operations(request);
					q.moveData(znodo,zmeta4object,znodo,m4lix);
					zN_FILE 	= q.getItem(znodo,zmeta4object,znodo,"","N_FILE");
					
					} catch(Exception e) {}
				 %>
				 
				 <%=zN_FILE%> 
				 
				 </a>
				</li>			
			</m4:loop>
			
		</ul>
	</td>


</tr>
</table>
<% }else{%>
	<div class="fuentenodatos">Actualmente no hay documentos publicados.</div>
	<%}%><%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>	
<m4:endpage/>

</body>

</html>



