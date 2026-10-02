<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.smsp_g1_p6_003")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="11";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>

</head>

<script type="text/javascript">
function comprobar(){
	var error = 0;
	var inumpetval = 0;
	var texto =m4getmessage("_sl_co_gn_1");
	var ireal = 0;

	var iNumVal = m4valor("NombreFormulario","SSP_NUM_VAL","","get");

	for (i=0;i<iNumVal;i++) {

		ireal = parseInt(parseInt(i) + 1);

		//Comprobación de fechas válidas e intervalos lógicos

		dFecAcuseRecibo = m4valor("NombreFormulario","SSP_FEC_ACU_MSS"+i,"","get");
		if (dFecAcuseRecibo != ""){
			var dFecAcuseRecibook =  m4fechacomprobacion(m4objeto('SSP_FEC_ACU_MSS'+i,'NombreFormulario'),'');
			if (dFecAcuseRecibook == ""){
				texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_valsitirpf_001") + ireal + m4getmessage("_sl_es_g1_valsitirpf_002");
				error=1;
			}else{

				var fechasok = m4compfechas(m4objeto("SSP_FEC_SOLIC_VAL"+i,"NombreFormulario"),"<=",m4objeto("SSP_FEC_ACU_MSS"+i,"NombreFormulario"));
				if (fechasok == false){
					texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_valsitirpf_001") + ireal + m4getmessage("_sl_es_g1_valsitirpf_003");
					error=1;
				}else{
					inumpetval = parseInt(parseInt(inumpetval) + 1);
				}
			}	
		}

	}

		
	//Control de alguna petición válida
	if (inumpetval == 0){
		texto = texto +"\n"+ " * " + m4getmessage("_sl_es_g1_valsitirpf_004");
		error=1;
	}

	if (error == 1){
		alert(texto);
		return;
	}else{
		m4submit("NombreFormulario");
	}

var _sl_es_g1_valsitirpf_001="Error en la validación con orden ";
var _sl_es_g1_valsitirpf_002=". La fecha de acuse de recibo no tiene un formato de fecha válido";
var _sl_es_g1_valsitirpf_003=". La fecha de acuse de recibo no puede ser anterior a la fecha de modificación";
var _sl_es_g1_valsitirpf_004="No se ha establecido la fecha de acuse de recibo en ninguna validación";

}
</script>


<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_MOD_SITIRPF";
   String zmeta4object = "SSE_MOD_SITIRPF";
   String znodo = "SSE_VAL_ACUSE_RECIBO";
   ;
   String ztipocarga = "VAL_ACUSE_RECIBO";     
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_MOD_SITIRPF.SSE_CARGA_DATOS";      				
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%
int  zcount  = 0;int  zcounti  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.smsp_g1_p6_003")%></td></tr>

<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.smsp_g1_p6_003")%> "title="<%=sse_g1Ess.getProperty("Title.smsp_g1_p6_003")%>" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.smsp_g1_p6_003_001")%></div>
</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g1/smsp_g1_p6_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" name="SSP_ORIGEN" id="SSP_ORIGEN" value="MSS" />
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0;	String zPaint="";int zposicion =0; %>
<table class = "tablaestados" cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"><m4:label  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"><m4:label  item="NOMBRE_EMP_ESS" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"><m4:label  item="SSP_FEC_SOLIC" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo"><m4:label  item="SSP_FEC_ACU_MSS" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td class = "tablaestadosceldatitulo" ></td>
</tr>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<%zposicion = Integer.valueOf(current).intValue();zcontrol = zposicion%2;%>
<input class="fuenteformulario" type="hidden" name="POSICION<%=current%>" id="POSICION<%=current%>" value="<%=current%>" />
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<input type="hidden" name="SSP_FEC_SOLIC_VAL<%=current%>" id="SSP_FEC_SOLIC_VAL<%=current%>" value="<m4:item  item="SSP_FEC_SOLIC" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<td  class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="NOMBRE_EMP_ESS" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="SSP_FEC_SOLIC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td  class="fuentevalor<%=zPaint%>">&nbsp;
	<input class="fuenteformulario" type="text" name="SSP_FEC_ACU_MSS<%=current%>" id="SSP_FEC_ACU_MSS<%=current%>" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SSP_FEC_ACU_MSS" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="1" />&nbsp;<a tabindex="2" href="javascript:m4calendario(m4objeto('SSP_FEC_ACU_MSS<%=current%>','NombreFormulario'))"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SSP_FEC_ACU_MSS" htmlsafe="true" outputdef="<%=znodo%>"/>" /></a>
</td>
</tr> 
</m4:dataloop>

</table>
<input class="fuenteformulario" type="hidden" name="SSP_NUM_VAL" id="SSP_NUM_VAL" value="<m4:item  item="SSP_NUM_VAL" htmlsafe="true" outputdef="<%=znodo%>"/>" />
</form>

<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td class="fuenteboton" colspan="4"><a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
<tr><td class="fuenteboton" colspan="4">
</td></tr>

</table>

<br />
<%} else {%>	
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.smsp_g1_p6_003_nodata")%></div>
<%}	%>		
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>
