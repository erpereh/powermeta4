<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<html xmlns="http://www.w3.org/1999/xhtml">

 <head>
		<title>Qui&eacute;n es Qui&eacute;n - Datos Empleado</title>
		
		<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
		<link href="/css/style_persdata.css" type="text/css" rel="stylesheet"/>			
		<script type="text/javascript" src="/library/jquery.js"></script>		
		
		<%
			// Recibimos por cabecera la dirección seleccionada y en base a esta se cargan las áreas dependientes.
			String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");						
	
		%>
 </head>
 
 <%

String zsubsesion 		= "CSP_QUIEN_ES_QUIEN";
String zmeta4object 	= "CSP_QUIEN_ES_QUIEN";
String znodoORO 		= "CSP_ORO";  

String zoutputdefORO	= zsubsesion + "!" + znodoORO 	+ "[*]";
String zmoveORO			= znodoORO 	 + ":" + znodoORO 	+ "[FIRST]";  
String ziteratorORO 	= znodoORO 	 + ":" + zsubsesion + "!" + znodoORO;
String zlecturaORO 		= zsubsesion + "!" + znodoORO;
String zraizORO 		= zsubsesion + "!" + znodoORO 	+ ".";

String zmetodocarga 	= zsubsesion + "!CSP_QUIEN_ES_QUIEN.CSP_CARGA_EMPLEADO";

String zcomunORO 		= znodoORO + ":"  + zsubsesion + "!"  + znodoORO  + "[&VAR.m4lix]" + ".";

// Campos que se muestran como resultado
String zNommbreCompleto =  zcomunORO + "NOMBRE_COMPLETO";
String zNomCentTrabajo  =  zcomunORO + "N_CENTRO_TRABAJO";
String zDirCentTrabajo  =  zcomunORO + "DIR_CENTRO_TRABAJO";
String zNomDireccion 	=  zcomunORO + "N_DIRECCION";
String zNomPuesto 		=  zcomunORO + "N_PUESTO";
String zIdCentroTrab	=  zcomunORO + "ID_CENTRO_TRABAJO";
String zFotoEmpleado	=  zcomunORO + "SCO_BLOB_PHOTO";

%>

<m4:startpage m4task="<%=zsubsesion%>"/>

	<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	
	<%		
			M4Operations m 	= new M4Operations(request);
	
			if(empleado != null){
				m.setItem(zsubsesion,zsubsesion,"","P_EMPLEADO",empleado);
			}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>

	<m4:outputdef m4alias="<%=znodoORO%>" > <m4:param name="m4name0" value="<%=zoutputdefORO%>"/> </m4:outputdef>

<m4:endjob/>

<m4:move> <m4:param name="<%=zsubsesion%>" value="<%=zmoveORO%>"/>  </m4:move>

<body>

<table border="0" cellpadding="0" cellspacing="5" width="100%">
        <tr valign="top">
            <td width="85%">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td align="left" valign="top" class="FormBigTitle" style="border-style:none;border-width:0;padding:0px;vertical-align:top;"><img alt="" src="/Personae/portals/std/images/portal/ctlc.gif"></td>
                        <td width="100%" class="FormBigTitle" style="border-style:none;border-width:0;">1105apellido_1 1105apellido_2, 1105nombre</td>
                        <td align="right" valign="top" class="FormBigTitle" style="border-style:none;border-width:0;padding:0px;vertical-align:top;"><img alt="" src="/Personae/portals/std/images/portal/ctrc.gif"></td>
                    </tr>
                </table>
                <style type="text/css">
                    div#data {
                        width: 100%;
                        voice-family: "\"}\"";
                        voice-family: inherit;
                        width: 100%;
                    }
                </style>
                <div id="data" class="FormBigContainer" style="padding:3px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr valign="top">
                            <td width="100%"><img width="0" height="3" alt="" border="0" src="/Personae/t.gif"></td>
                        </tr>
                        <tr valign="top">
                            <td width="100%" align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormContainer">
                                    <tr valign="top">
                                        <td width="10%" align="center" valign="middle">
                                            <table border="0" cellpadding="0" cellspacing="1" width="100%" class="FormContainer">
                                                <tr valign="top">
                                                    <td nowrap="nowrap" width="100%" class="FormReadable" style="vertical-align:middle;"><span class="FormReadable" style="vertical-align:middle;"><img src="/Personae/servlet/binaryProcessing?action=download&amp;contextID=683813058&amp;application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_EMPLEADOS&amp;realAttribute=foto_bbdd&amp;contentType=image%2Fjpeg&amp;multiValuedPos=0&amp;dn=id_empleado%3D1105%2Cid_unidad_raiz%3D5_APLICINT&amp;default=%2FPersonae%2Fimages%2Fphotos%2Fdefault.jpg" height="141" width="94" alt="foto_bbdd"></span></td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td width="90%" align="center" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="1" width="100%" class="FormContainer">
                                                <tr valign="top">
                                                    <td width="35%" class="FormLabel"><span class="FormLabel">Puesto:</span></td>
                                                    <td nowrap="nowrap" width="65%" class="FormReadable" style="padding:2px;"><span class="FormReadable" style="padding:2px;"><a href="/Personae/shared/jsp/requestRedirector.jsp?application=Personae&amp;view=bQuienEsQuien&amp;resource=M4ORO_PUESTOS&amp;contextID=683813058&amp;action=read&amp;request=%28n_puesto%3DResponsable+de+Aplicaciones+Internas%29">Responsable de Aplicaciones Internas</a></span></td>
                                                </tr>
                                                <tr valign="top">
                                                    <td width="35%" class="FormLabel"><span class="FormLabel">Fecha de Antigüedad:</span></td>
                                                    <td nowrap="nowrap" width="65%" class="FormReadable" style="padding:2px;"><span class="FormReadable" style="padding:2px;">14/02/2008</span></td>
                                                </tr>
                                                <tr valign="top">
                                                    <td width="35%" class="FormLabel"><span class="FormLabel">Centro de Trabajo:</span></td>
                                                    <td nowrap="nowrap" width="65%" class="FormReadable" style="padding:2px;"><span class="FormReadable" style="padding:2px;">Madrid</span></td>
                                                </tr>
                                                <tr valign="top">
                                                    <td width="35%" class="FormLabel"><span class="FormLabel">Dirección del Centro de Trabajo:</span></td>
                                                    <td nowrap="nowrap" width="65%" class="FormReadable" style="padding:2px;"><span class="FormReadable" style="padding:2px;">Paseo de la Castellana,  4</span></td>
                                                </tr>
                                                <tr valign="top">
                                                    <td width="35%" class="FormLabel"><span class="FormLabel">eMail:</span></td>
                                                    <td nowrap="nowrap" width="65%" class="FormReadable" style="padding:2px;"><span class="FormReadable" style="padding:2px;"><a href="mailto:runid-05@creditoycaucion.es">runid-05@creditoycaucion.es</a></span></td>
                                                </tr>
                                                <tr valign="top">
                                                    <td width="100%" colspan="2" align="center" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormLabel">
                                                            <tr valign="top">
                                                                <td width="35%" class="FormLabel"><span class="FormLabel">Teléfono / Móvil de Empresa:</span></td>
                                                                <td nowrap="nowrap" width="35%" class="FormReadable" style="padding:2px;"><span class="FormReadable" style="padding:2px;">999999999</span></td>
                                                                <td nowrap="nowrap" width="30%" class="FormReadable" style="padding:2px;">&nbsp;</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr valign="top">
                                                    <td width="100%" colspan="2" align="center" valign="middle">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="120%" class="FormLabel">
                                                            <tr valign="top">
                                                                <td width="35%" style="padding:3px;background-color:#CCCCCC;text-align:right;text-decoration:none;font-family:Arial,Helvetica;font-size:11px;color:#000000;font-weight:normal;font-style:normal;"><span style="padding:3px;background-color:#CCCCCC;text-align:right;text-decoration:none;font-family:Arial,Helvetica;font-size:11px;color:#000000;font-weight:normal;font-style:normal;">Acceso datos CV:</span></td>
                                                                <td nowrap="nowrap" width="65%" id="aLink0" class="FormReadable"><span class="FormReadable"><a href="" onclick="aLink0OpenWindow();return false;">Informe</a><script type="text/javascript">function aLink0OpenWindow(){var win=window.open("https://morfeo.creditoycaucion.es/CurriculumVitaeWeb/PresentarWordExterno?matricula=1105&application=Personae&view=bQuienEsQuien&resource=M4ORO_EMPLEADOS&dn=id_empleado%3D1105%2Cid_unidad_raiz%3D5_APLICINT", "", "resizable,scrollbars,height=700,width=650,top=0,left=0");}</script></span></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr valign="top">
                            <td width="100%" align="center" valign="middle">
                                <table border="0" cellpadding="0" cellspacing="1" width="100%" class="FormContainer">
                                    <tr valign="top">
                                        <td nowrap="nowrap" width="100%" colspan="2" class="FormTitle"><span class="FormTitle" style="border-width:0;border-style:none;padding:0;">Localización</span></td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="35%" class="FormLabel"><span class="FormLabel">Dirección:</span></td>
                                        <td nowrap="nowrap" width="65%" class="FormReadable"><span class="FormReadable">Dirección de Tecnología</span></td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="35%" class="FormLabel"><span class="FormLabel">Área / Sucursal:</span></td>
                                        <td nowrap="nowrap" width="65%" class="FormReadable"><span class="FormReadable">Desarrollo</span></td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="35%" class="FormLabel"><span class="FormLabel">Nombre de la Unidad:</span></td>
                                        <td nowrap="nowrap" width="65%" class="FormReadable"><span class="FormReadable">Aplicaciones Internas</span></td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="100%" colspan="2" align="center" valign="middle">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormContainer">
                                                <tr valign="top">
                                                    <td width="35%" class="FormLabel"><span class="FormLabel">Responsable directo:</span></td>
                                                    <td width="65%" align="center" valign="top">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormContainer">
                                                            <tr valign="top">
                                                                <td width="100%" valign="top" class="FormContainer" style="background-color:#E6E6E6;">
                                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                        <tr>
                                                                            <td align="left">
                                                                                <table cellpadding="0" cellspacing="0" border="0">
                                                                                    <tr>
                                                                                        <td>
                                                                                            <table cellpadding="0" cellspacing="0" border="0">
                                                                                                <tr>
                                                                                                    <td width="100%" class="FormLabel" style="text-decoration:none;font-family:Arial,Helvetica;font-size:11px;color:#000000;font-weight:bold;font-style:normal;background-color:#E6E6E6;"><span class="FormLabel" style="text-decoration:none;font-family:Arial,Helvetica;font-size:11px;color:#000000;font-weight:bold;font-style:normal;background-color:#E6E6E6;"><a href="/Personae/forms/M4ORO_EMPLEADOS/entry/read.jsp?resource=M4ORO_EMPLEADOS&amp;view=bQuienEsQuien&amp;application=Personae&amp;dn=id_empleado%3D0981%2Cid_unidad_raiz%3D4_DTECNO">0981apellido_1 0981apellido_2, 0981nombre</a></span></td>
                                                                                                </tr>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="35%" class="FormLabel"><span class="FormLabel">eMail Responsable:</span></td>
                                        <td nowrap="nowrap" width="65%" class="FormReadable"><span class="FormReadable"><a href="mailto:rarea-04@creditoycaucion.es">rarea-04@creditoycaucion.es</a></span></td>
                                    </tr>
                                    <tr valign="top">
                                        <td width="100%" colspan="2" align="center" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="FormContainer">
                                                <tr valign="top">
                                                    <td width="35%" class="FormLabel"><span class="FormLabel">Tfno. / Móvil de Empresa responsable:</span></td>
                                                    <td nowrap="nowrap" width="35%" class="FormReadable"><span class="FormReadable">999999999</span></td>
                                                    <td nowrap="nowrap" width="30%" class="FormReadable">&nbsp;</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
            <td width="15%" rowspan="4" align="center" valign="top">                
            </td>
        </tr>
    </table>

</body>

</html>