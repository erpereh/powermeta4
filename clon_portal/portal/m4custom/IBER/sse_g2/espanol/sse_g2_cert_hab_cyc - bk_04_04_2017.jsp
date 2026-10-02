<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Certificados de Retenciones </title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>

<%
String zsubsesion = "CSP_CERT_DOC";
String zmeta4object = "CSP_CERT_DOC";
String zmetodocarga = zsubsesion + "!CSP_CERT_DOC.CARGA";
String znodo = "CSP_CERT_DOC";

String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";  
String zoutputdef = zsubsesion + "!" + znodo + "[*]";

String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

String zANIO                = zcomun + "ANIO";            
String zSCO_CERT_DOC        = zcomun + "SCO_CERT_DOC";

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
        <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
		<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
    <m4:endjob/>

<%
int  zcount  = 0;
int  zcounti  = 0;  
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);%>	

<%
if (zcounti > 0) {
String zregistrofinals = String.valueOf(zcounti - 1);
%>
	
</head>
<body>
	<table border="0" width="100%">
		<tr class="tablaestadosceldatitulo">
			<td>Mis Certificados de Retenciones</td>
		</tr>
		<tr class="fuentevalor">
			<td> 
				<ul>
					<li>
						Para visualizar un certificado previo a 2014 por favor seleccione el a&ntilde;o en el siguiente listado&nbsp;
						<select id="certificados" onchange="window.open(this.value,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false" name="certificados">
							<option value="" selected> Seleccione A&ntilde;o </option>
							<m4:loop from="0" to="<%=zregistrofinals%>">
								<option value="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_CERT_DOC!CSP_CERT_DOC[<%=m4lix%>].SCO_CERT_DOC">Certificado de Retenciones del a&ntilde;o <m4:item m4name="<%=zANIO%>" htmlsafe="true"/></option>
							</m4:loop>	
						</select>
					</li>
				</ul>
			</td>
		<tr>
		<tr class="fuentevalor">
			<td> 
				<ul>
					<li>
						Los certificados posteriores a 2014 se cargar&aacute;n a continuaci&oacute;n.
					</li>
				</ul>
			</td>
		<tr>
	</table>
<br>
<br>


<!--		
		<table class="tablaestados" cellspacing="0" width="40%" align="center">
			<tr class="tablaestadosceldatitulo">
				<td width="50%" align="center">&nbsp;A&ntilde;o</td>
				<td width="50%" align="center">&nbsp;Documento</td>
			</tr>
			<m4:loop from="0" to="<%=zregistrofinals%>">
			<tr class="fuentevalor">
				<td>&nbsp;<m4:item m4name="<%=zANIO%>" htmlsafe="true"/></td>
				<td><a href="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_CERT_DOC!CSP_CERT_DOC[<%=m4lix%>].SCO_CERT_DOC" onclick="window.open(this.href,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false">Certificado de retenciones &nbsp;<img src="/iconos/lu_zoom_16.png"/></a></td>
			</tr>
			</m4:loop>
		</table>
-->			
		
		
<% }%>

<!--<div class="fuentenodatos">Actualmente no tienes ning&uacute;n certificado de retenciones</div>-->

<%
	String stSysSentence= "SSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION \"1\"$";
%>

<script language=javascript>
  function OpenReport(URL) {
	  var sOptions;
	  var wOpen;
	  
	  sOptions = "toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes";
	  sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();
	  sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();
	  sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";
	  
	  wOpen = window.open(URL,"report",sOptions);
	  wOpen.focus();
	  wOpen.moveTo(0,0);
	  wOpen.resizeTo(screen.availWidth,screen.availHeight);
  }

  function GetAnioPasado() {
	  var Fecha = new Date();
	  document.write(Fecha.getYear() - 1);
  }
  
  //Realizar ejecución del certificado. Una unica llamada a executereportsec
 var certificadopdf= '<m4:executereport idreport="IBER_RP_CERT_HAB" syssentence="<%=stSysSentence%>" outputtype="PDF" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>';
  
</script>

<table width="100%" cellspacing = "0">	
	<tr>
		<td align="left">
			<img src="/iconos/noname_certificado_57_115.gif" width="49" height="100" alt="Certificado de Retenciones">&nbsp;&nbsp;
		</td>
		<td  width="100%" align="left">
			<!--
			'ATOS-JOSEAM. 30/01/2017
			'está mostrando el certificado del 2016 y aún no lo quieren mostrar.
			-->
			<!--<div class="descripcionfuncional">Se ha creado tu Certificado de Retenciones del a&ntilde;o <script>GetAnioPasado()</script>.</div>-->
			<div class="descripcionfuncional">Se ha creado tu Certificado de Retenciones del a&ntilde;o 2015.</div>
			<!-- 'ATOS-JOSEAM. 30/01/2017 -->		
			<ul class="listaenlace" >
			<li><a class="enlacefuncional" title="Certificado de Retenciones"  href="javascript:OpenReport(certificadopdf);">Ampliar para imprimir</a></li>
			</ul>
		</td>
	</tr>
</table>
<table width = "99%" cellspacing = "0" border = "1">			
	<tr>
		<td align = "center">
			<img src="/iconos/aeat_85_76.gif" width="85" height="76" alt="A.E.A.T.">
		</td>
	</tr>
	<tr>
		<td align = "left">
		<script language="JavaScript">
			document.write("<iframe id='Local' src= "+ certificadopdf + " scrolling=yes frameborder=0  vspace=0 hspace=0 width='100%' height='300' ></iframe>"); 			
		</script>
		</td>
	</tr>			
</table>


<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %></div>
<m4:endpage/>
</body>
</html>