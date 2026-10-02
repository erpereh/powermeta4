<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Informes de proyecciones </title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>

<%
String zsubsesion 	= "CSP_RP_PROYECCIONES";
String zmeta4object = "CSP_RP_PROYECCIONES";
String zmetodocarga = zsubsesion + "!CSP_RP_PROYECCIONES.CSP_CARGA_ANIOS";
String znodo 		= "CSP_PROYECCIONES_EMIND";
String znodo2 		= "CSP_ANIOS_PROYECCIONES";

String zraiz 		= znodo 		+ ":" + zsubsesion 	+ "!" + znodo  + ".";  
String zoutputdef 	= zsubsesion 	+ "!" + znodo 		+ "[*]";
String zcomun 		= znodo 		+ ":" + zsubsesion 	+ "!" + znodo  + "[&VAR.m4lix]" + ".";

String zraiz2 		= znodo2 		+ ":" + zsubsesion 	+ "!" + znodo2 + ".";  
String zoutputdef2 	= zsubsesion 	+ "!" + znodo2 		+ "[*]";
String zcomun2 		= znodo2 		+ ":" + zsubsesion 	+ "!" + znodo2 + "[&VAR.m4lix]" + ".";

String zANIO                = zcomun + "ANIO";            
String zCSP_PROYEC_DOC      = zcomun + "CSP_PROYEC_DOC";

String zANIO2               = zcomun2 + "ANIO";

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
        <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
		<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
    <m4:endjob/>

<%
int  zcount  	= 0;
int  zcounti  	= 0;  
int  zcounti2  	= 0;
try {
    M4Operations m = new M4Operations(request);
    zcount 		= m.getCount(znodo,zsubsesion,znodo);
    zcounti 	= m.getCountInClient(znodo,zsubsesion,znodo);
	zcounti2	= m.getCountInClient(znodo2,zsubsesion,znodo2);
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);%>	



	
<script type="text/javascript">
	function OpenReport(URL) {
	    var sOptions;
	    var wOpen;
	    var nametab = "Proyecciones_"+Math.floor(Math.random() * 99999);

	    sOptions = "toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes";
	    sOptions = sOptions + ",width=" + (screen.availWidth - 10).toString();
	    sOptions = sOptions + ",height=" + (screen.availHeight - 122).toString();
	    sOptions = sOptions + ",screenX=0,screenY=0,left=0,top=0";

	    wOpen = window.open(URL,nametab,sOptions);
	    wOpen.focus();
	    wOpen.moveTo(0,0);
	    wOpen.resizeTo(screen.availWidth,screen.availHeight);
	}
</script>

<%
if ((zcounti > 0) || (zcounti2 > 0)) {
String zregistrofinals = String.valueOf(zcounti - 1);
%>

</head>
<body>
	<table border="0" width="100%">
		<tr class="tablaestadosceldatitulo">
			<td>Mis Informes de Proyecciones</td>
		</tr>
		<tr class="fuentevalor">
			<td> 
				<ul>
					<li>
						Para visualizar Informe de Proyecciones por favor seleccione el a&ntilde;o en el siguiente listado&nbsp;
						<!-- <select id="certificados" onchange="window.open(this.value,'Proyecciones','');return false" name="Informe de Proyecciones"> -->
						<select id="certificados" onchange="OpenReport(this.value);return false" name="Informe de Proyecciones">
							<option value="" selected> Seleccione A&ntilde;o </option>
							<m4:loop from="0" to="<%=zregistrofinals%>">
								<option value="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_RP_PROYECCIONES!CSP_PROYECCIONES_EMIND%5B<%=m4lix%>%5D.CSP_PROYEC_DOC">Informe Proyecciones &nbsp; <m4:item m4name="<%=zANIO%>" htmlsafe="true"/></option>
							</m4:loop>
							<%
								if (zcounti2 > 0) {
									String varanno = "";
									zregistrofinals = String.valueOf(zcounti2 - 1); // Informe de Compensaci&oacute;n Total
							%>
							<m4:loop from="0" to="<%=zregistrofinals%>">
								<m4:item m4name="<%=zANIO2%>" var="varanno" htmlsafe="true"/>

								<% if (Integer.parseInt(varanno) <= 2021) { %>

								<!-- <option value="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_inf_proyec.jsp?anio=<m4:item m4name="<%=zANIO2%>" htmlsafe="true"/>">Informe Proyecciones &nbsp; <m4:item m4name="<%=zANIO2%>" htmlsafe="true"/></option> -->

								<option value="/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=<m4:item m4name="<%=zANIO2%>" htmlsafe="true"/>">Informe Proyecciones &nbsp; <m4:item m4name="<%=zANIO2%>" htmlsafe="true"/></option>

								<% } else { %>

								<!-- <option value="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_inf_proyec.jsp?anio=<m4:item m4name="<%=zANIO2%>" htmlsafe="true"/>">Informe de Compensaci&oacute;n Total &nbsp; <m4:item m4name="<%=zANIO2%>" htmlsafe="true"/></option> -->

								<option value="/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio=<m4:item m4name="<%=zANIO2%>" htmlsafe="true"/>">Informe de Compensaci&oacute;n Total &nbsp; <m4:item m4name="<%=zANIO2%>" htmlsafe="true"/></option>

								<% }%>

							</m4:loop>
							<script>
								var d = new Date();
								var n = d.getFullYear();	

								/*document.write('<option value="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_inf_proyec.jsp?anio='+ n +'">Informe de Compensaci&oacute;n Total &nbsp;&nbsp;' + n + '</option>');*/
								
								document.write('<option value="/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'">Informe de Compensaci&oacute;n Total &nbsp;&nbsp;' + n + '</option>');
							</script>
							
							<%}%>
						</select>
					</li>
				</ul>
			</td>
		<tr>		
	</table>
<br>
<br>
		
<% }else{%>

	<table border="0" width="100%">
		<tr class="tablaestadosceldatitulo">
			<td>Mis Informes de Proyecciones</td>
		</tr>
		<tr class="fuentevalor">
			<td> 
				<ul>
					<li>
						Para visualizar Informe de Proyecciones por favor seleccione el a&ntilde;o en el siguiente listado&nbsp;
						<!-- <select id="certificados" onchange="window.open(this.value,'Proyecciones','');return false" name="Informe de Proyecciones"> -->
						<select id="certificados" onchange="OpenReport(this.value);return false" name="Informe de Proyecciones">
							<option value="" selected> Seleccione A&ntilde;o </option>
							<script>
								var d = new Date();
								var n = d.getFullYear();	

								/*document.write('<option value="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_inf_proyec.jsp?anio='+ n +'">Informe Proyecciones &nbsp;&nbsp;' + n + '</option>');*/
												
								document.write('<option value="/servlet/CheckSecurity/JSP/sse_g2/proyecciones/index.jsp?anio='+ n +'">Informe Proyecciones &nbsp;&nbsp;' + n + '</option>');
							</script>
							
							<%}%>
						</select>
					</li>
				</ul>
			</td>
		<tr>		
	</table>
<br>
<br>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %></div>
<m4:endpage/>
</body>
</html>