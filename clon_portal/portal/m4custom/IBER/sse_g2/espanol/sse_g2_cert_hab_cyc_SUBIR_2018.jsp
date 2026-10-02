<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Certificados de Retenciones </title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="/css/bootstrap/css/bootstrap.min.css">
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>

<%
//1 carga antes de 2014
String zsubsesion = "CSP_CERT_DOC";
String zmeta4object = "CSP_CERT_DOC";
String zmetodocarga = zsubsesion + "!CSP_CERT_DOC.CARGA";
String znodo = "CSP_CERT_DOC";

String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";  
String zoutputdef = zsubsesion + "!" + znodo + "[*]";

String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

String zANIO                = zcomun + "ANIO";            
String zSCO_CERT_DOC        = zcomun + "SCO_CERT_DOC";

// 2 carga despues de 2014
String zsubsesion2 = "CSP_CERTIFICADO_HAB_ANIOS";
String zmeta4object2 = "CSP_CERTIFICADO_HAB_ANIOS";
String zmetodocarga2 = zsubsesion2 + "!CSP_CERTIFICADO_HAB_ANIOS.CARGA";
String znodo2 = "CSP_CERTIFICADO_HAB_ANIOS";

String zraiz2 = znodo2 + ":" + zsubsesion2 + "!" + znodo2 + ".";  
String zoutputdef2 = zsubsesion2 + "!" + znodo2 + "[*]";

String zcomun2 = znodo2 + ":" + zsubsesion2 + "!" + znodo2 + "[0]" + ".";

String zANIO2 = zcomun2 + "P_LISTA_ANIOS";
%>
<m4:startpage m4task="<%=zsubsesion2%>"/>
<m4:beginjob/>
    <m4:datadef m4o="<%=zmeta4object2%>" m4name="<%=zsubsesion2%>"/>
	<m4:exec m4method="<%=zmetodocarga2%>"></m4:exec>
	<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<style type="text/css">
	.mt-05{
		margin-top: 5px;
	}
	.mt-20{
		margin-top: 20px;
	}
	.mr-20{
		margin-right: 20px;
	}
	.fuentevalor{
		padding: 20px 20px 40px 20px;
	}
</style>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="tablaestadosceldatitulo mt-20">Mis Certificados de retenciones</div>
				<div class="fuentevalor mt-05">
					<span class="col-md-8 mr-20">Para visualizar un certificado por favor seleccione el a&ntilde;o en el siguiente listado </span>			 
					<span class="col-md-3">
						<%
							int  zcount2  = 0;
							int  zcounti2  = 0;  
							try {
							    M4Operations m2 = new M4Operations(request);
							    zcount2 = m2.getCount(znodo2,zsubsesion2,znodo2);
							    zcounti2 = m2.getCountInClient(znodo2,zsubsesion2,znodo2);
							} catch(Exception e) {}
							String  zcountv2 = String.valueOf(zcounti2);

							%>
						
						<select id="certificados_pnet">
							<option value="">Seleccione A&ntilde;o </option>

							<%
							
							
							if (zcounti2 >0) {
							%>
							<script type="text/javascript">
								
								var cad = "<m4:item  item='P_LISTA_ANIOS' htmlsafe='true' outputdef='CSP_CERTIFICADO_HAB_ANIOS'/>";
								var arrayDeCadenas = cad.split(";");
								for (var i=0; i < arrayDeCadenas.length-1; i++) {
							       insertar(arrayDeCadenas[i],1);
							   	}								
									
								function insertar(text, indice){
									var x = document.getElementById("certificados_pnet");
								    var option = document.createElement("option");
									option.text = "Año " + text;
								    x.options.add(option, x[indice]);
								    option.value = "javascript:OpenReport(certificadopdf_"+text+")";
								}

								<%
									String stSysSentence_2015= "CSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION_CYC \"2015\"$";
									String stSysSentence_2016= "CSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION_CYC \"2016\"$";		
									String stSysSentence_2017= "CSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION_CYC \"2017\"$";
								%>

								var certificadopdf_2015= '<m4:executereport idreport="CYC_RP_CERT_HAB_2015" syssentence="<%=stSysSentence_2015%>" outputtype="PDF" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>';								
								var certificadopdf_2016= '<m4:executereport idreport="CYC_RP_CERT_HAB_2016" syssentence="<%=stSysSentence_2016%>" outputtype="PDF" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>';
								var certificadopdf_2017= '<m4:executereport idreport="CYC_RP_CERT_HAB_2017" syssentence="<%=stSysSentence_2017%>" outputtype="PDF" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>';								

							</script>

							<%}%>
						<m4:endpage/>

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

						String  zcountv = String.valueOf(zcounti);

							if (zcounti > 0) {
							String zregistrofinals = String.valueOf(zcounti - 1);

							%>
							<m4:loop from="0" to="<%=zregistrofinals%>">
								<option value="javascript:OpenReport2(<%=m4lix%>)">A&ntilde;o <m4:item m4name="<%=zANIO%>" htmlsafe="true"/></option>
							</m4:loop>
							<%}%>
						</select>
					</span>
				</div>
			</div>
		</div>	
	</div>
		
		<script type="text/javascript">
			document.getElementById("certificados_pnet").onchange = function() {
									if (this.selectedIndex!==0) {
										window.location.href = this.value;
									}        
								};
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
			function OpenReport2(año) {
				window.open("/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_CERT_DOC!CSP_CERT_DOC["+año+"].SCO_CERT_DOC");
			}
		</script>




<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %></div>

<m4:endpage/>
</body>
</html>
