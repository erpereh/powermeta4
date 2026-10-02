<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g3/sse_ev_trans.jsp" %>
<title><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2_title")%></title>	
<%		
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="31";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%> 
<script type="text/javascript">
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_EVAL360",ord,"BORRAR","SSE_EVAL360");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
	String zsubsesion = "SSE_EVAL360";
	String zmeta4object = "SSE_EVAL360";  
	String znodo = "M4T_EVAL_PROC";

	String znodo1 = "SSE_EVAL360";
	String ztipocarga = "SSE";
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
    String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]"; 
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:item  m4varname="zControl" item="SSE_CONTROL" htmlsafe="true" outputdef="M4T_EVAL_PROC"/>
<m4:item  m4varname="zPoseval" item="SSE_POS" htmlsafe="true" outputdef="M4T_EVAL_PROC"/>
<%
String zmoveaux ="M4T_EVAL_PROC:M4T_EVAL_PROC" + "["+zPoseval+"]";
%>
<m4:item m4varname="zNmEvalProc" item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="M4T_EVAL_PROC"/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
<%
int  zcounti1  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
} catch(Exception e) {}
String	zcountv1 = String.valueOf(zcounti1);
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2_Desc_title")%>
</td></tr>
<tr>
<td><img src="/iconos/noname_banco_79_100.gif" width="79" height="100" alt="<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2_Desc_title")%>"/></td>
<td>
<div class="fuentedescripcion"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2_Desc")%> <%=zNmEvalProc%> </div>
<ul class="listaenlace">
<li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.LblJob")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkJob")%></a></li>
<li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_link")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1.jsp"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_link")%></a></li>
<% if (zcountv1.equals("0")){%>
<li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2b")%>"  href="javascript:history.back(-1);"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2b")%></a></li>
<%}%>
</ul>

</td>
</tr>
</table>
<% if (zcounti1>0) {int zcontrol = 0;String zposicions = "0";int zposicion =0;String  zPaint="";%>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td>&nbsp;</td> 
	<td >&nbsp;<m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
	<td class="tablamenuright"><a title="<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2b")%>"href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2b")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:dataloop outputdef="<%=znodo1%>">
<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
<%
zposicion = Integer.valueOf(current).intValue();
zcontrol = zposicion%2;
if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
<tr>
<td class="fuentecampoaccion<%=zPaint%>">&nbsp;<m4:item  item="N_ACCION" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class="fuentebotonright<%=zPaint%>"><a title="<%=Tran.getProperty("Button.Delete")%>"href="javascript:pendientes('<m4:item  item="ORDINAL"  htmlsafe="true"  jsafe="true" outputdef="<%=znodo1%>" />');"><img alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</m4:dataloop>
</table>
<%}else{%>
<div class="fuentenodatos"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2NoDataFound")%></div>
<%}%>				
</br>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>	
<m4:endpage/>
</body>


