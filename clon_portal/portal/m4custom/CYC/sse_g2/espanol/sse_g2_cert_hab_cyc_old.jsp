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


</head>
<body>
	<table border="0" width="100%">
		<tr class="tablaestadosceldatitulo">
			<td>Mis Certificados de Retenciones</td>
		</tr>
		<%
		if (zcounti > 0) {
		String zregistrofinals = String.valueOf(zcounti - 1);
		%>
		<tr class="fuentevalor">
			<td> 
				<ul>
					<li>
						Para visualizar un certificado previo a 2014 por favor seleccione el a&ntilde;o en el siguiente listado&nbsp;
						<select id="certificados_emind" onchange="window.open(this.value,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false" name="certificados_emind">
							<option value="" selected> Seleccione A&ntilde;o </option>
							<m4:loop from="0" to="<%=zregistrofinals%>">
								<option value="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_CERT_DOC!CSP_CERT_DOC[<%=m4lix%>].SCO_CERT_DOC">A&ntilde;o <m4:item m4name="<%=zANIO%>" htmlsafe="true"/></option>
							</m4:loop>							
						</select>
					</li>
				</ul>
			</td>
		<tr>
		<% }%>
		<script language=javascript>
		  function GetAnioPasado() {
			  var Fecha = new Date();
			  document.write(Fecha.getYear() - 2);
		  }   
		</script>		
		<tr class="fuentevalor">
			<td> 
				<ul>
					<li>
						<!--Los certificados posteriores a 2014 se cargar&aacute;n a continuaci&oacute;n.-->
						Para visualizar los certificados posteriores a 2014 seleccione el a&ntilde;o que desee, del siguiente listado:
						<!-- JOSEAM - 04/04/2017 - incluimos un combo -->
						<!--<select id="certificados_pnet" onchange="window.open(this.value,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false" name="certificados_pnet"> -->
							<script> 
								var contador = 0; 
								var annio = 2015;	

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

								<%
									String stSysSentence_2015= "CSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION_CYC \"2015\"$";
									String stSysSentence_2016= "CSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION_CYC \"2016\"$";											
								%>

								var certificadopdf_2015= '<m4:executereport idreport="CYC_RP_CERT_HAB" syssentence="<%=stSysSentence_2015%>" outputtype="PDF" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>';								
								var certificadopdf_2016= '<m4:executereport idreport="CYC_RP_CERT_HAB_2016" syssentence="<%=stSysSentence_2016%>" outputtype="PDF" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>';																
							</script>
							
							
							<select id="certificados_pnet">
								<option value="">Seleccione A&ntilde;o </option>
								<option value=javascript:OpenReport(certificadopdf_2015)> A&ntilde;o 2015</option>
								<option value=javascript:OpenReport(certificadopdf_2016)> A&ntilde;o 2016</option>
							</select>

							<script>
								document.getElementById("certificados_pnet").onchange = function() {
									if (this.selectedIndex!==0) {
										window.location.href = this.value;
									}        
								};
							</script>							
						
					</li>
				</ul>
			</td>
		<tr>
	</table>
	

		
		



<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %></div>
<m4:endpage/>
</body>
</html>
