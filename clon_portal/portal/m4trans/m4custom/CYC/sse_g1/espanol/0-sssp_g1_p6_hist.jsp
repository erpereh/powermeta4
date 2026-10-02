<%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Title.sssp_g1_p6_003")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="11";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>

</head>
<body>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
   String zsubsesion = "SSE_MOD_SITIRPF";
   String zmeta4object = "SSE_MOD_SITIRPF";
   String znodo = "SSE_DATA_DATOS_HT_MOD";
   String znodo2 = "SSE_DATA_DATOS_PERCEPTOR";
   ;
   String ztipocarga = "HIST_MODIFICACIONES";     
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_MOD_SITIRPF.SSE_CARGA_DATOS";      				
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<%
int  zcount  = 0;int  zcounti  = 0;	
String zSSP_ID_TP_IRPF = "";
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zSSP_ID_TP_IRPF = m.getItem(znodo2,zmeta4object,znodo2,"","SSP_ID_TP_IRPF");
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sssp_g1_p6_003")%></td></tr>

<tr>
<td><img alt="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_003")%> "title="<%=sse_g1Ess.getProperty("Title.sssp_g1_p6_003")%>" src="/iconos/family_123_100.gif" width="100" height="100" /></td>
<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_003_001")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional"title="<%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l001")%>"tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g1/sssp_g1_p6_sit.jsp?estado=11"><%=sse_g1Ess.getProperty("Link.sssp_g1_p6_001_l001")%></a></li>
	</td>
</tr>
</table>
<% if (zcounti > 0){String zposicions = "0";int zcontrol = 0;	String zPaint="";int zposicion =0; %>
<table class = "tablaestados" cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td width="10%" class = "tablaestadosceldatitulo"><m4:label  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td width="25%" class = "tablaestadosceldatitulo"><m4:label  item="SSP_FEC_SOLIC" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<td width="25%" class = "tablaestadosceldatitulo"><m4:label  item="SSP_FEC_EFECTO" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<%if (zSSP_ID_TP_IRPF.equals("NAC")){%>
	<td class = "tablaestadosceldatitulo"><m4:label  item="SSP_NM_ESTADO" htmlsafe="true" outputdef="<%=znodo%>"/></td> 
<%}%>
<td class = "tablaestadosceldatitulo" ></td>
</tr>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<%zposicion = Integer.valueOf(current).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
<td width="10%" class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td width="25%" class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="SSP_FEC_SOLIC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td width="25%" class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="SSP_FEC_EFECTO" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<%if (zSSP_ID_TP_IRPF.equals("NAC")){%>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="SSP_NM_ESTADO" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<%}%>
</tr> 
</m4:dataloop>
</table>
<br />
<%} else {%>	
<div class="fuentenodatos"><%=sse_g1Ess.getProperty("Label.sssp_g1_p6_003_nodata")%></div>
<%}	%>		
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


