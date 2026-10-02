 <!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
	<head>		
		<title>Certificate of tax withholdings</title>
		<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>		
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<%@ include file="../../sse_generico/english/menu_ess.jsp" %>		
	
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
		String  zcountv = String.valueOf(zcounti);
		%>			
	
		<%
			if (zcounti > 0) {
			String zregistrofinals = String.valueOf(zcounti - 1);			
		%>
	
	</head>

	<body>
		<h1> Certificate of tax withholdings</h1>
		
		<table border="0" width="100%">
		<tr class="tablaestadosceldatitulo">
			<td>My Certificates of tax withholdings</td>
		</tr>
		<tr class="fuentevalor">
			<td> 
				<ul>
					<li>
						To consult certificates of withholdings previous 2014 please select one option of this list	&nbsp;					
						<select id="certificados" onchange="window.open(this.value,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false" name="certificados">
							<option value="" selected> Select year </option>
							<m4:loop from="0" to="<%=zregistrofinals%>">
								<option value="/servlet/download_blob?task=<%=zsubsesion%>&item=CSP_CERT_DOC!CSP_CERT_DOC[<%=m4lix%>].SCO_CERT_DOC">Certificate of withholdings year <m4:item m4name="<%=zANIO%>" htmlsafe="true"/></option>
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
						
						Consult your certificates of withholdings later on 2014 bellow
						
					</li>
				</ul>
			</td>
		<tr>
	</table>
	<br>
	<br>

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
	var certificadopdf = '';
	  
	</script>
	
	<table width="100%" cellspacing = "0">	
		<tr>
			<td align="left">
				<img src="/iconos/noname_certificado_57_115.gif" width="49" height="100" alt="Certificado de Retenciones">&nbsp;&nbsp;
			</td>
			<td  width="100%" align="left">
				<div class="descripcionfuncional"> Consult the certificate of withholdings of <script>GetAnioPasado()</script>.</div>
				<ul class="listaenlace" >
				<li><a class="enlacefuncional" title="Certificado de Retenciones"  href="javascript:OpenReport(certificadopdf);">Print view</a></li>
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
				document.write("<iframe id='Local' src='<m4:executereport idreport="SSP_RP_CERT_HAB" syssentence="<%=stSysSentence%>" outputtype="HTML" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>' scrolling=yes frameborder=0  vspace=0 hspace=0 width='100%' height='300' ></iframe>"); 			
			</script>
			</td>
		</tr>			
	</table>
	
		
	<%}else{%><div class="fuentenodatos">Actually you don't have any certificate of withholdings</div><%}%><%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %></div>
	
<m4:endpage/>
	
	</body>
	
</html>
