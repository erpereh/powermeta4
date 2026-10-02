
<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.sssp_g1_p6_001")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="11";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>

</head>

<script type="text/javascript">

function ModificarValores(){
	//Miramos si hay error
	iHayError = m4valor("NombreFormulario","SSE_HAY_ERROR","","get");
	nError = m4valor("NombreFormulario","SSE_N_ERROR","","get");
	if (iHayError == "1"){
		alert(nError);
		return;
	}else{
		m4submit("NombreFormulario");
	}
}
</script>


<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_MOD_SITIRPF";
   String zmeta4object = "SSE_MOD_SITIRPF";
   String znodo = "SSE_DATA_DATOS_PERCEPTOR";
   String znodo1 = "SSE_DATA_DATOS_DESCENDIENTES";
   String znodo2 = "SSE_DATA_DATOS_ASCENDIENTES";
   ;
   String ztipocarga = "DATOS_ACTUALES";     
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove = znodo + ":" + znodo + "[0]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_MOD_SITIRPF.SSE_CARGA_DATOS";      				
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
String zSSP_ID_TP_IRPF = "";
String zSSE_HAY_ERROR = "";
String zSSE_N_ERROR = "";
int  zcount  = 0;int  zcounti  = 0;	
int  zcount1  = 0;int  zcounti1  = 0;	
int  zcount2  = 0;int  zcounti2  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
    zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);

    zSSP_ID_TP_IRPF = m.getItem(znodo,zmeta4object,znodo,"","SSP_ID_TP_IRPF");
    zSSE_HAY_ERROR = m.getItem(znodo,zmeta4object,znodo,"","SSE_HAY_ERROR");
    zSSE_N_ERROR = m.getItem(znodo,zmeta4object,znodo,"","SSE_N_ERROR");
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
String	zcountv1 = String.valueOf(zcounti1);
String	zcountv2 = String.valueOf(zcounti2);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sssp_g1_p6_001")%></td></tr>

<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_001")%> "title="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_001")%>" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_001")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l002")%>"tabindex="1" href="javascript:ModificarValores();"><%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l002")%></a></li>
	<li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l003")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_hist.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l003")%></a></li>
<%if (zSSP_ID_TP_IRPF.equals("NAC")){%>
	<li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l004")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_mod145.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l004")%></a></li>
<%}else{%>
	<!-- Menús específicos de forales -->
<%}%>
	</ul>
	</td>
</tr>
</table>

<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0;	String zPaint="";int zposicion =0; %>


<form action="/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit_mod.jsp?estado=11" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" name="SSE_HAY_ERROR" id="SSE_HAY_ERROR" value="<%=zSSE_HAY_ERROR%>" /><BR>
<input type="hidden" name="SSE_N_ERROR" id="SSE_N_ERROR" value="<%=zSSE_N_ERROR%>" /><BR>
<form>


<table class = "tablaestados" cellspacing="0" width="100%">

<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_002")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_TP_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_N_TP_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>

<%if (zSSP_ID_TP_IRPF.equals("NAC")){%>
<!------------->
<!-- ESTATALES -->

<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_003")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_ID_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/>-<m4:item  item="SSP_N_EST_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_NIF_CONYUGE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_NIF_CONYUGE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_DT_START_MOVIL" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_DT_START_MOVIL" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_CHK_IRPF_REND_PERSUP_2A5PA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_CHK_IRPF_REND_PERSUP_2A5PA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<!--
<tr>
	<td width="25%" width="25%" class="fuentecampo"><m4:label item="SSP_CHK_IRPF_PROLONG" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_CHK_IRPF_PROLONG" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
->>

<!-- Bloque de descendientes -->
<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td colspan="4">&nbsp;</td></tr>
<tr><td colspan="4" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_004")%></td></tr>
<% if (zcounti1 > 0){%>
<% String zposicions1="0";int zcontrol1=0;String zPaint1="";int zposicion1=0;%>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_IRPF_FECHA_ADOPCION" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_COMPUTO_ENTERO" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
</tr> 
<m4:dataloop outputdef="<%=znodo1%>">
<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
<%zposicion1 = Integer.valueOf(current).intValue();zcontrol1 = zposicion1%2;%>
<%if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%>
	<tr>
		<td width="25%" class="fuentevalor"><m4:item item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
		<td width="25%" class="fuentevalor"><m4:item item="SSP_IRPF_FECHA_ADOPCION" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
		<td width="25%" class="fuentevalor"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
		<td width="25%" class="fuentevalor"><m4:item item="SSP_N_COMPUTO_ENTERO" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	</tr> 
</m4:dataloop>
<%}else{%>
	<tr>
		<td width="100%" class="fuentevalor"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_008")%></td>
	</tr> 
<%}%>
</table>
<!-- Bloque de descendientes -->

<!-- Bloque de ascendientes -->
<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td colspan="4">&nbsp;</td></tr>
<tr><td colspan="4" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_008")%></td></tr>
<% if (zcounti2 > 0){%>
<% String zposicions2="0";int zcontrol2=0;String zPaint2="";int zposicion2=0;%>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
	<td width="50%" class="fuentecampo"><m4:label item="SSP_CONV_DESCENDIENTES" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr> 
<m4:dataloop outputdef="<%=znodo2%>">
<m4:current m4varname="current" outputdef="<%=znodo2%>"/>
<%zposicion2 = Integer.valueOf(current).intValue();zcontrol2 = zposicion2%2;%>
<%if (zcontrol2==0){zPaint2="";}else{zPaint2="2";}%>
	<tr>
		<td width="25%" class="fuentevalor"><m4:item item="SSP_YEAR_BIRTH" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
		<td width="25%" class="fuentevalor"><m4:item item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
		<td width="50%" class="fuentevalor"><m4:item item="SSP_CONV_DESCENDIENTES" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
	</tr> 
</m4:dataloop>
<%}else{%>
	<tr>
		<td width="100%" class="fuentevalor"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_009")%></td>
	</tr> 
<%}%>
</table>
<!-- Bloque de ascendientes -->

<!-- Bloque de pensiones -->
<table class = "tablaestados" cellspacing="0" width="100%">
<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_006")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_PENSION_CONYUGE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_PENSION_CONYUGE" htmlsafe="true" outputdef="<%=znodo%>"/> euros</td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_PENSION_HIJO" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_PENSION_HIJO" htmlsafe="true" outputdef="<%=znodo%>"/> euros</td>
</tr>
<!-- Bloque de pensiones -->

<!-- Bloque de pagos vivienda -->
<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_007")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_N_CON_RED_VIVIENDA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_N_CON_RED_VIVIENDA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<!-- Bloque de pagos vivienda -->

<!-- ESTATALES -->
<!------------->

<%}else{%>

<!------------->
<!-- FORALES -->

<tr><td colspan="2">&nbsp;</td></tr>
<tr><td colspan="2" class ="tablaestadosceldatitulo"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_003")%></td></tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_ID_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_N_MINUSVALIA" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td width="25%" class="fuentecampo"><m4:label item="SSP_NUM_HIJOS_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td width="75%" class="fuentevalor"><m4:item  item="SSP_NUM_HIJOS_IRPF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>

<!-- FORALES -->
<!------------->

<%}%>

</table>

<br />
<%} else {%>	
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_001_nodata")%></div>
<%}	%>		
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>
