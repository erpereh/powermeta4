<%@ taglib uri="M4Tags" prefix="m4"%><%@ page import="java.io.*, java.util.*, java.net.*"%>
<!DOCTYPE html>
<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="ISO-8859-1"  import="com.meta4.session.*, com.meta4.m4operations.*"%>

<m4:startpage m4task="SCH_SESSION"/>
	<m4:beginjob/>
		<m4:datadef m4o="SCH_SESSION" m4name="SCH_SESSION"/>
		<m4:outputdef m4alias="ROOT_SESSION" m4object="SCH_SESSION" node="ROOT_SESSION" records="*"/>
	<m4:endjob/>     
	<m4:item m4name="ROOT_SESSION:SCH_SESSION!ROOT_SESSION[0].ID_ORGANIZATION" m4varname="organizacion"/>
<m4:endpage/>

<%
//no cache
  response.setHeader("Pragma","no-cache"); 
  response.setHeader("Cache-Control","no-store"); 
  response.setDateHeader("Expires", -1);   
  response.setContentType("text/html;charset=ISO-8859-1");
  request.setCharacterEncoding("UTF-8");

%>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<title>Informe Salarios Totales</title>	
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/library/jquery.js"></script>
	<%
	// Recibimos por cabecera la dirección o el puesto seleccionado y el informe a ejecutar

	String informe 			    = "SALTOTAL";
	String zsubsesion 			= "CSP_RP_ORO_MSS";
	String zmeta4object 		= "CSP_RP_ORO_MSS";
	String zmetodocarga 		= zsubsesion +"!CSP_RP_ORO_MSS.CSP_GENERAR_INFORME";
	String sociedad 			= com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sociedad");
	sociedad = (sociedad==null) ? organizacion : sociedad;

%>
</head>
<body width="100%">
	<% if(sociedad != null){ %>
	<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
		<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<%		
			// Cargamos los parámetros del informe
			M4Operations m 	= new M4Operations(request);				
			m.setItem(zsubsesion,zsubsesion,"","CSP_PR_INFORME",informe);		
			m.setItem(zsubsesion,zsubsesion,"","P_SOCIEDAD",sociedad);		
		%>
		<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>	
	<m4:endjob/>
	
	<h3 id="mens"> Su informe se esta generando, por favor espere.</h3>
	<script> 
		$(window).load(function(){
			setTimeout(function(){			
				var	w = window.open("/servlet/download_blob?task=<%=zsubsesion%>&item=<%=zsubsesion%>!<%=zsubsesion%>[0].CSP_INFORME_HTML",'XXXXX','resizable=1, menubar=1, toolbar=1, directories=1, location=1, scrollbars=1, status=0').focus();
				
				$(w).ready(function(){
					$('#mens').html('<a href="javascript:window.location.href=window.location.href;" style=" color: rgba(216, 0, 31, 1);">Recargar</a> para volver a generar el informe.');
				});
			}, 1000);
		});
	</script>
	<%}else{%>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<table class="tablaestados" width="100%" cellspacing="0">
						<tr class="tablaestadosceldatitulo">
						  <td  colspan="3" >
						  	<strong> Estructura / B&uacute;squeda </strong></td>
						</tr>
						<tr>
							<td class="fuentevalor pl-20" width="350">Sociedad</td>
							<td class="fuentevalor pl-20" width="650">	
								<select name="sociedades" id="sociedades" style="width: 450px" >
									<option value="00">Seleccione Sociedad</option>
									<option value="CYC">Cr&eacute;dito y Cauci&oacute;n</option>
									<option value="IBER">Iberinform</option>
								</select>

							</td>
							<td class="fuentevalor"></td>
						</tr>

						<tr >
						  <td class="fuentevalor" colspan="3" align="center">  
						  <center>
							<input 	name	="button" 
									type	="button" 
									class	="enterlogin" 
									id	 	="btnbusqueda" 
									style	="	background-color: #DC0028;
												background-repeat: no-repeat;
												border: 1px solid #DC0028;
												border-radius: 4px;
												color: #FFFFFF;
												margin: 10px;
												max-width: 150px;
												min-height: 30px;
												min-width: 110px;" 
								value		="B&uacute;squeda"
								onclick="cargarS()" />
						  </center>
						  </td>		  
						</tr>
					</table>
				</div>			
			</div>
		</div>	
		
		<script type="text/javascript">
			function cargarS() {
				var selecteds = $('#sociedades').val();
				if(selecteds!="00"){
					window.location.href = "./mss_g1_rp_saltot.jsp?sociedad="+selecteds;
				}else{
					alert("Seleccione una sociedad");
				}
			}
		</script>
		<%}%>
</body>

</html>