<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>

<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>



<title><%=TranEss.getProperty("bft_ess.CancelBenef")%></title>

<%
	String clase = "";
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	String vPlan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_ID_PLAN");  
	String vOrPlan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_OR_H_EE_BNFT");  
	String vIdHr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_ID_HR");  
	String vOrPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_OR_HR_PERIOD");  
	String vDtStart = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_DT_START");  
	String vDtEnd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_DT_END");  
	String vOption = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_ID_OPTION");  
	String vCovCat = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_ID_COV_CAT");  
	String vNameBenefit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vNameBenefit");
	String vPosition = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vPosition");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
	   zinicios = "1";
	}
%>
<script type="text/javascript">

function m4enviar(vNamePlan){
	var vDtEnd1 = m4valor("c0","SSE_DT_END","","get");	
	var vPayDT = m4valor("control_date","SSCO_DT_PAY","","get");	
	var error = 0;
	var sMessage = new String(eval("_sl_co_bft_0")) + "\n";	
	var sMessageEmp = "";	
	var fechasok = true;
	var fechasok2 = true;	
	var dtendok = true;
	var formulario_DT_END = "c0";
	var formulario_DT_START_PP = "d0";
	var formulario_DT_END_PP = "e0";	
	if (document.forms[formulario_DT_END].elements[0].value == ""){
		sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_8"));
	}else{
		dtendok = m4fechacomprobacion(document.forms[formulario_DT_END].elements[0]);
		if (dtendok != null || dtendok != ""){
			fechasok = m4compfechas(document.forms[formulario_DT_START_PP].elements[0],'<=',document.forms[formulario_DT_END].elements[0]);
			if (fechasok == true){
				fechasok2 = m4compfechas(document.forms[formulario_DT_END_PP].elements[0],'>=',document.forms[formulario_DT_END].elements[0]);
			}
		}
	}	
	if (dtendok == false){
		sMessageEmp = sMessageEmp + "\n      " +m4getmessage("_sl_co_bft_7"); 
		
		
	}
	if ((fechasok == false) || (fechasok2 == false)){
		sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_9"));
	}else{
		  var control_date=true;
		  	control_date = m4compfechas(m4objeto('SSE_DT_END','c0'),'>=',m4objeto('SSCO_DT_PAY','control_date'));
			if (control_date == false){
					sMessageEmp = sMessageEmp + "\n " + m4getmessage("_sl_co_bft_11")+ vPayDT + m4getmessage("_sl_co_bft_12");
					
			}
	}
	
	if (sMessageEmp != ""){
		error = 1;
	sMessage = sMessage + "\n" + vNamePlan + sMessageEmp;
	}
	

	if (error == 1){
		alert(sMessage);
		return;
	}else{
		m4valor("NombreFormulario","SSE_DT_END",vDtEnd1,"set");	
		m4submit("NombreFormulario");
	}	
}

function pendientes(ord){
	var parametros = new Array("TAG","REC","ACC","NOD");
	var valores = new Array("SSE_BFT_H_EE_IN_BNFT_MOD",ord,"BORRAR","SSE_H_EE_IN_BNFT_MOD");
	m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}

function navegar()
{
	document.forms["NombreFormulario"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21";
	m4submit("NombreFormulario");
}

</script>

</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
    String zsubsesion = "SSE_BFT_H_EE_IN_BNFT_MOD";
    String zmeta4object = "SSE_BFT_H_EE_IN_BNFT_MOD";
    String znodo = "M4T_H_EE_IN_BNFT_MOD";
    String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_COMMON_VALUES.SSE_M_SET_VALUES_MOD";
    String zmetodocarga2 = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";   
   
	String ztipocarga = "ALL";
   
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[*]";
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	
	String znodo1 = "SSE_H_EE_IN_BNFT_MOD";
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]"; 	

	String zSUS_ID_PLAN = zcomun + "SUS_ID_PLAN";
	String zSUS_OR_H_EE_BNFT = zcomun + "SUS_OR_H_EE_BNFT";
	String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
	String zSUS_DT_START = zcomun + "SUS_DT_START";
	String zSUS_DT_END = zcomun + "SUS_DT_END";
	String zSUS_ID_OPTION = zcomun + "SUS_ID_OPTION";
	String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
	String zSUS_ID_COV_CAT = zcomun + "SUS_ID_COV_CAT";
	String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
	String zSUS_ID_HR = zcomun + "SUS_ID_HR";
	String zSUS_OR_HR_PERIOD = zcomun + "SUS_OR_HR_PERIOD";
	String zSUS_DT_START_PP = zcomun + "SUS_DT_START_PP";
	String zSUS_DT_END_PP = zcomun + "SUS_DT_END_PP";
	
	String zSSE_N_PLAN = zcomun1 + "SUS_N_PLAN";
	String zSSE_N_OPTION = zcomun1 + "SUS_N_OPTION";
	String zSSE_N_COV_CAT = zcomun1 + "SUS_N_COV_CAT";	
	String zSSE_DT_START = zcomun1 + "SSE_DT_START";
	String zSSE_DT_END = zcomun1 + "SSE_DT_END";
	String zSSE_ACCION = zcomun1 + "N_ACCION";
	String zSSE_GB_NAME = zcomun1 + "SCO_GB_NAME";
	String zORDINAL = zcomun1 + "ORDINAL";	
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");

		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>">
	<m4:param name="ARG_ID_PLAN" value="<%=vPlan%>"/>
	<m4:param name="ARG_OR_PLAN" value="<%=vOrPlan%>"/>
	<m4:param name="ARG_OR_PERIOD" value="<%=vOrPeriod%>"/>
	<m4:param name="ARG_DT_START" value="<%=vDtStart%>"/>
	<m4:param name="ARG_ID_OPTION" value="<%=vOption%>"/>
	<m4:param name="ARG_ID_COV_CAT" value="<%=vCovCat%>"/>	
	<m4:param name="ARG_DT_END" value="<%=vDtEnd%>"/>		
</m4:exec>
<m4:exec m4method="<%=zmetodocarga2%>">
	<m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;
	clase = "fuentevalor"; 
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.CancelBenef")%></td>
</tr>
<tr>
	<td valign="top"><img alt="<%=TranEss.getProperty("bft_ess.CancelBenef")%>" title="<%=TranEss.getProperty("bft_ess.CancelBenef")%>" src="/iconos/noname_beneficiarios_72_100.gif" width="100" height="100" /></td>
	<td>
		<div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.BenefitsCancDesc")%></div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("bft_ess.SimulBenef")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=0"><%=TranEss.getProperty("bft_ess.SimulBenef")%></a></li>
			<li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=1"><%=TranEss.getProperty("bft_ess.SolicBenef")%></a></li>
			<li><a class="enlacefuncional" tabindex="3" title="<%=TranEss.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=TranEss.getProperty("bft_ess.Benefits")%></a></li>
		</ul>
	</td>
</tr>
</table>
<br>

<%if (zcounti > 0) {%>
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSUS_DT_END%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" align="right"><a href="javascript:navegar();"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>	</a>	
</tr>
<form name="control_date" id="control_date">
		<input type="hidden" id="SSCO_DT_PAY" name="SSCO_DT_PAY" value="<m4:item  item="SSCO_DT_PAY" htmlsafe="true" outputdef="<%=znodo%>"/>" />
</form>
<%
String zregistroinicials = "0";
String zregistrofinals = String.valueOf(zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion = 0;
int zTab = 1;
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
	zTab = zTab + 3;

if (zcontrol==0){
	//par
	clase = "fuentevalor"; 
}else{
	//impar
	clase = "fuentevalor2"; 
	 }
%>
<tr>
	<td class="<%=clase%>"> <m4:item m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>" ><m4:item m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>" ><m4:item m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>" ><m4:item m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>" ><m4:item m4name="<%=zSUS_DT_END%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>"> </td>	
</tr>	
<tr>
		<td class="<%=clase%>" colspan="1">*&nbsp;<%=TranEss.getProperty("bft_ess.NewDateBenef")%>&nbsp;:</td>
		<input type="hidden" id="SUS_DT_START" name="SUS_DT_START" value="<m4:item m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/>" />
		</form>
		<form name="c<%=zposicion%>" id="c<%=zposicion%>">
		<td class="<%=clase%>" colspan="5">
			<input class="fuenteformulario" type="text" name="SSE_DT_END" id="SSE_DT_END" title="<%=TranEss.getProperty("bft_ess.DtEnd")%>" maxlength="10" size="10" tabindex="<%=zTab + 3%>" />&nbsp;
			<a href="javascript:m4calendario(m4objeto('SSE_DT_END','c<%=zposicion%>'));" title="<%=TranEss.getProperty("bft_ess.BtnDtEnd")%>">
				<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=TranEss.getProperty("bft_ess.BtnDtEnd")%>" />
			</a>
		</td>
		<input type="hidden" id="SUS_DT_END" name="SUS_DT_END" value="<m4:item m4name="<%=zSUS_DT_END%>" htmlsafe = "true"/>" />
		</form>
		<form name="d<%=zposicion%>" id="d<%=zposicion%>">
			<input type="hidden" id="zSUS_DT_START_PP" name="zSUS_DT_START_PP" value="<m4:item m4name="<%=zSUS_DT_START_PP%>" htmlsafe = "true"/>" />
		</form>				
		<form name="e<%=zposicion%>" id="e<%=zposicion%>">
			<input type="hidden" id="zSUS_DT_END_PP" name="zSUS_DT_END_PP" value="<m4:item m4name="<%=zSUS_DT_END_PP%>" htmlsafe = "true"/>" />
		</form>			
    </tr>
</tr>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="SSE_ID_PLAN" name="SSE_ID_PLAN" value="<m4:item m4name="<%=zSUS_ID_PLAN%>" htmlsafe = "true"/>" />
<input type="hidden" id="SSE_OR_H_EE_BNFT" name="SSE_OR_H_EE_BNFT" value="<m4:item m4name="<%=zSUS_OR_H_EE_BNFT%>" htmlsafe = "true"/>" />
<m4:item m4varname="zSUS_ID_HR_Encr" m4name="<%=zSUS_ID_HR%>" htmlsafe = "true"/>
<%zSUS_ID_HR_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zSUS_ID_HR_Encr);%>
<input type="hidden" id="SSE_ID_HR" name="SSE_ID_HR" value="<%=zSUS_ID_HR_Encr%>" />
<m4:item m4varname="zSUS_OR_HR_PERIOD_Encr" m4name="<%=zSUS_OR_HR_PERIOD%>" htmlsafe = "true"/>
<%zSUS_OR_HR_PERIOD_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zSUS_OR_HR_PERIOD_Encr);%>
<input type="hidden" id="SSE_OR_HR_PERIOD" name="SSE_OR_HR_PERIOD" value="<%=zSUS_OR_HR_PERIOD_Encr%>" />
<input type="hidden" id="SSE_DT_START" name="SSE_DT_START" value="<m4:item m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/>>" />
<input type="hidden" id="SSE_DT_END" name="SSE_DT_END" value="<m4:item m4name="<%=zSUS_DT_END%>" htmlsafe = "true"/>" />
<input type="hidden" id="SSE_ID_OPTION" name="SSE_ID_OPTION" value="<m4:item m4name="<%=zSUS_ID_OPTION%>" htmlsafe = "true"/>" />
<input type="hidden" id="SSE_ID_COV_CAT" name="SSE_ID_COV_CAT" value="<m4:item m4name="<%=zSUS_ID_COV_CAT%>" htmlsafe = "true"/>" />
<input type="hidden" id="TAG" name="TAG" value="<%=zmeta4object%>" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_H_EE_IN_BNFT_MOD" />
</form>
</m4:loop>
<tr>
	<td class="fuenteboton" colspan="6">	&nbsp;
			<a tabindex="<%=zTab%>" href="javascript:m4enviar('<m4:item m4name="<%=zSUS_N_PLAN%>" jsafe="true"htmlsafe = "true"/>')" title="<%=Tran.getProperty("Button.Send")%>">
				<img id="<%=Tran.getProperty("Button.Send")%>" alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
			</a>
	</td>
</tr>
</table>
</form>
<%}else{%>
<div class="fuentenodatos"><%=TranEss.getProperty("bft_ess.DescNoDataFound6")%></div>
<br />
<%}
int  zcount2  = 0;
int  zcounti2  = 0;
try {
	M4Operations m = new M4Operations(request);
	zcount2 = m.getCount(znodo1,zsubsesion,znodo1);
	zcounti2 = m.getCountInClient(znodo1,zsubsesion,znodo1);
} catch(Exception e) {}
String	zcountv2 = String.valueOf(zcounti2);
if (zcounti2 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
	<tr class="tablaestadosceldatitulo">
		<td colspan="8">
			<%=TranEss.getProperty("bft_ess.PendCancBenef")%> 
		</td>
	</tr>
	<tr class="tablasubtitulo">
		<td>&nbsp;</td>
		<td colspan="2"><m4:label m4name="<%=zSSE_N_PLAN%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_N_OPTION%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_N_COV_CAT%>" htmlsafe="true"/></td>		
		<td><m4:label m4name="<%=zSSE_DT_START%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_DT_END%>" htmlsafe="true"/></td>
		<td>&nbsp;</td>
	</tr>
<%
String zregistroinicials2 = "0";
String zregistrofinals2 = String.valueOf(zcounti2 - 1);
String zposicions2 = "0";
int zcontrol2 = 0;
int zposicion2 = 0;
%>
<m4:loop from="<%=zregistroinicials2%>" to="<%=zregistrofinals2%>">
<%
	zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;
if (zcontrol2==0){
	//par
	clase = "fuentevalor"; 
}else{
	//impar
	clase = "fuentevalor2"; 
	 }
%>
	<tr>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_ACCION%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>" colspan="2"><m4:item m4name="<%=zSSE_N_PLAN%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_N_OPTION%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_N_COV_CAT%>" htmlsafe = "true"/></td>		
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_DT_START%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_DT_END%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>">
			<a title="<%=Tran.getProperty("Button.Delete")%>"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
				<img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
			</a>
		</td>
	</tr>
</m4:loop>
</table>
<%}else{%>
<br />
<div class="fuentenodatos"><%=TranEss.getProperty("bft_ess.DescNoDataFound7")%></div>
<%}%>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>
</html>
