<%-- [=====================================================]   
            
	@(#)FileVersion: 600.011.010       
	@(#)FileDescription: report to pdf   
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)1998
	@(#)ProductName: Meta4Mind Set
	@(#)ProductVersion: 6.0
	@(#)InternalName: rptpdf.jsp 
	@(#)Date: 17/10/2001      

[=====================================================] --%>

<%@ taglib uri="M4Tags" prefix="m4" %>

<%
	String stSysSentence= "SSP_RP_CERT_HAB;SSP_RP_C_HABERES$SSP_RP_C_HABERES SSE_EJECUCION \"1\"$";
%>


<m4:startpage m4task="REPORTS"/>
       
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
		<title>Certificado de Haberes</title>
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
		<%@ include file="../../sse_generico/english/menu_ess.jsp" %>	
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
<!-- 
	<script language=javascript>
	  function OpenReport(URL) {
		  window.open(URL,"report","top=20,left=20,toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes,width=675,height=450");
	  };
	</script>
-->
	<script language = javascript>
	  function GetAnioPasado() {
	      var Fecha = new Date();
		  document.write(Fecha.getYear() - 1);
	  }
	</script>
	</head>

	<body>
		<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
		<%@ include file="../../sse_generico/english/generico_links.jsp" %>
		<table width="100%" cellspacing = "0">
			<tr><td class="titulofuncional" colspan="2">Mi Certificado de Haberes</td></tr>
			<tr>
				<td align="left">
					<img src="/iconos/noname_certificado_57_115.gif" width="49" height="100" alt="Certificado de Haberes">&nbsp;&nbsp;
				</td>
				<td  width="100%" align="left">
					<div class="descripcionfuncional">Se ha creado tu Certificado de Haberes del año <script>GetAnioPasado()</script>.</div>
					<ul class="listaenlace" >
					<li><a class="enlacefuncional" title="Certificado de Haberes"  href="javascript:OpenReport('<m4:executereport idreport="SSP_RP_CERT_HAB" syssentence="<%=stSysSentence%>" outputtype="HTML" otherparams="#/AUTOLOAD:DESIGN:OFF#"/>');">Ampliar para imprimir</a></li>
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
			
		<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
		</div>
	</body>
</html>
