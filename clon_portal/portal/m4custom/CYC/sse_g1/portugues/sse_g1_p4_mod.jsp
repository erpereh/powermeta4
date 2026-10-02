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
<title><%=sse_g1Ess.getProperty("Title.sse_g1_p4_mod")%></title>
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	String zPos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPos");
	
%>
<script type="text/javascript">
function comprobar(){
var ncontac = new m4objvalidacion('_alfanum','1','62','','',false);
var oalfanum = new m4objvalidacion('_alfanum','1','11','',false);	
var num = new m4objvalidacion('_num','1','99','',false);	
var error = 0;
var texto =m4getmessage("_sl_co_gn_1")+"\n";
ncontac.m4validar(m4objeto("STD_N_CONTACT","NombreFormulario"));
oalfanum.m4validar(m4objeto("STD_PHONE_NUMBER_1","NombreFormulario"));
num.m4validar(m4objeto("SCO_ICE","NombreFormulario"));
if (ncontac.resultado == false){
	texto = texto + m4getmessage("_sl_co_g1_1")+"\n";
	error = 1;
}
if (oalfanum.resultado == false){
	texto = texto + m4getmessage("_sl_co_g1_2")+"\n";
	error = 1;
}
if (num.resultado == false){
	texto = texto + m4getmessage("_sl_co_g1_3")+"\n";
	error = 1;
}	
if (error == 1){
	alert(texto);
	return;
}else {
	m4submit("NombreFormulario") ;
}
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_HR_CONTACT",ord,"BORRAR","SSE_HR_CONTACT");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_HR_CONTACT";
   String zmeta4object = "SSE_HR_CONTACT";
   String znodo = "SSE_HR_CONTACT";
   String znodo1 = "M4T_HR_CONTACT";
   String ztipocarga = "SSE";
   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g1/sse_g1_p4_mod.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
      String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);

	} catch(Exception e) {}
	String zSTD_OR_CONTACT="";
	String zSTD_N_CONTACT="";
	String zSTD_PHONE_NUMBER_1="";
	String zSTDINTCOUNTRYCODE1="";
	String zSTDINTREGIONCODE1="";
	String zSTDNATREGIONCODE1="";
	String zSCO_ICE="";
	if ((zPos==null)||(zPos.equals(""))){zPos = "NA";}else{
	 String zmove1 = znodo1 + ":" +znodo1 + "[" + zPos + "]";
	%>
	<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove1%>"/></m4:move>
	<m4:item var="zSTD_OR_CONTACT" item="STD_OR_CONTACT" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_N_CONTACT" item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTDINTCOUNTRYCODE1" item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTDINTREGIONCODE1" item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTDNATREGIONCODE1" item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo1%>"/>	
	<m4:item var="zSTD_PHONE_NUMBER_1" item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSCO_ICE" item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo1%>"/>
<%}%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p4_modDes")%></td></tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p4_modDes")%>" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p4_modDes")%>"src="/iconos/noname_telefono_ess_107_100.gif" width="107" height="100" /></td>
	<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p4_modDes")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p4")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p4")%></a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_HR_CONTACT" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HR_CONTACT" />
<input type="hidden" id="STD_OR_CONTACT" name="STD_OR_CONTACT" value="<%=zSTD_OR_CONTACT%>" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
	<td colspan="5"><%=sse_g1Ess.getProperty("Label.sse_g1_p4_modData")%></td>
	<td class="tablamenuright"><a title="<%=sse_g1Ess.getProperty("Title.sse_g1_p4")%>"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p4")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>			
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;<m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"colspan="5"><input class="fuenteformulario" type="text" id="STD_N_CONTACT" name="STD_N_CONTACT" size="15" maxlength="62" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="1"  value="<%=zSTD_N_CONTACT%>"/></td>
	</td>
</tr>
<tr>
	
	<td class="fuentecampo"><m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_INT_COUNTRY_CODE_1" name="STD_INT_COUNTRY_CODE_1" size="2" maxlength="5" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTDINTCOUNTRYCODE1%>" /></td>
	</td>
	<td class="fuentecampo"><m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_INT_REGION_CODE_1" name="STD_INT_REGION_CODE_1" size="2" maxlength="5" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTDINTREGIONCODE1%>" /></td>
	</td>
	<td class="fuentecampo">&nbsp;<m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_NAT_REGION_CODE_1" name="STD_NAT_REGION_CODE_1" size="2" maxlength="5" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTDNATREGIONCODE1%>" /></td>
	</td>	
</tr>
</tr>
	<td class="fuentecampo">*&nbsp;<m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_PHONE_NUMBER_1" name="STD_PHONE_NUMBER_1" size="15" maxlength="62" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="2"value="<%=zSTD_PHONE_NUMBER_1%>" /></td>
	</td>
	<td class="fuentecampo">*&nbsp;<m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/>
	<td class="fuentevalor" colspan="3"><input class="fuenteformulario" type="text" id="SCO_ICE" name="SCO_ICE" size="2" maxlength="2" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/>"tabindex="3"value="<%=zSCO_ICE%>" /></td>
	</td>
</tr>
<tr><td class="fuenteboton" colspan="6"><a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();" tabindex="4"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
<% 
 if (zcounti > 0){ 
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String zPaint="";
	%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;</td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<m4:dataloop outputdef="<%=znodo%>">
	<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<%	zposicions = current;

	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
	<td class="fuentecampoaccion<%=zPaint%>">&nbsp;<m4:item  item="N_ACCION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	<td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentebotonright<%=zPaint%>"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:pendientes('<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  /></a></td>
</tr>
	</m4:dataloop>
</table>
<%@include file="../../sse_generico/portugues/generico_ventanas.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
<script type="text/javascript">	m4focus("NombreFormulario","STD_N_CONTACT");</script>
<m4:endpage/>
</body>
</html>


