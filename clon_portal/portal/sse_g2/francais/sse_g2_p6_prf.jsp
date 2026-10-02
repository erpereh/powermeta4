<%-- [=====================================================]   
            
	@(#)FileVersion: 600.011.010       
	@(#)FileDescription: report to pdf   
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)1998
	@(#)ProductName: Meta4Mind Set
	@(#)ProductVersion: 6.0
	@(#)InternalName: rptpdf.jsp 
	@(#)Date: 14/06/2007      

[=====================================================] --%>

<%@ taglib uri="M4Tags" prefix="m4" %>

<%
	String vPlan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_ID_PLAN");
	String vOrPlan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_OR_H_EE_BNFT");
	String vHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_ID_HR");
	String vOrPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_OR_HR_PERIOD");
	String vDtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_DT_START");
	
	String stSysSentence= "SSP_RP_ANEXO_BNFT;SSP_RP_ANEXO_BNFT$SSP_RP_ANEXO_BNFT SSE_EJECUCION \"1\" ;SSP_RP_ANEXO_BNFT SSP_PAR_ID_PLAN \"" + vPlan + "\" ;SSP_RP_ANEXO_BNFT SSP_PAR_OR_H_EE_BNFT " + vOrPlan + " ;SSP_RP_ANEXO_BNFT SSP_PAR_ID_HR \"" + vHR + "\" ;SSP_RP_ANEXO_BNFT SSP_PAR_OR_HR_PERIOD " + vOrPeriod + " ;SSP_RP_ANEXO_BNFT SSP_PAR_DT_START \"" + vDtStart + "\"$";

%>

<m4:startpage m4task="SSP_RP_ANEXO_BNFT"/>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
		<title>Mi Anexo contrato al Plan de retribución flexible</title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
		<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>	
		<%
			M4SessionManager  m4Session    = M4Context.getSession(request);
			String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
			if ((estado==null)||(estado.equals(""))){estado="0";}
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
	 </script>

	<script language = javascript>
	  function GetAnioPasado() {
	      var Fecha = new Date();
		  document.write(Fecha.getYear() - 1);
	  }
	</script>
	</head>

	<body>
		<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
		<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
		<table width="100%" cellspacing = "0">
			<tr><td class="titulofuncional" colspan="2">Mi Anexo contrato al Plan de retribución flexible</td></tr>
			<tr>
				<td align="left">
					<img src="/iconos/noname_certificado_57_115.gif" width="49" height="100" alt="Anexo contrato PRF">&nbsp;&nbsp;
				</td>
				<td  width="100%" align="left">
					<div class="descripcionfuncional">Se ha creado tu Anexo contrato al Plan de retribución flexible.</div>
					<ul class="listaenlace" >
					<li><a class="enlacefuncional" title="Anexo contrato PRF"  href="javascript:OpenReport('<m4:executereport idreport="SSP_RP_ANEXO_BNFT" syssentence="<%=stSysSentence%>" outputtype="HTML" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>');">Ampliar para imprimir</a></li>
					</ul>
				</td>
			</tr>
		</table>
		<table width = "99%" cellspacing = "0" border = "1">			
			<tr>
				<td align = "left">
				<script language="JavaScript">
              		document.write("<iframe id='Local' src='<m4:executereport idreport="SSP_RP_ANEXO_BNFT" syssentence="<%=stSysSentence%>" outputtype="HTML" otherparams="#/AUTOLOAD:DESIGN:OFF# #/NSEARCH#"/>' scrolling=yes frameborder=0  vspace=0 hspace=0 width='100%' height='300' ></iframe>"); 			
				</script>
				</td>
			</tr>			
		</table>
			
		<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
		</div>
	</body>
</html>
