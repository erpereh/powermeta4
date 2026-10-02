<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>

<title><%=TranEss.getProperty("bft_ess.BenefitsDep")%></title>

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
	String vPlanPeriod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SUS_ID_PLAN_PERIOD");
	String vNameBenefit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vNameBenefit");
	String vPosition = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vPosition");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
	   zinicios = "1";
	}
%>
<script type="text/javaScript">
function pendientes(ord)
{
	var parametros = new Array("TAG","REC","ACC","NOD");
	var valores = new Array("SSE_BFT_DEP_BENE_COV",ord,"BORRAR","M4T_DEP_BENE_COV");
	m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}

function borrar(vPosition,vsscoConrtolDel){
if (vsscoConrtolDel=="1"){

var vssco_messs=m4getmessage("_sl_co_bft_16");
alert(vssco_messs);
		return;
}
	
	m4valor("oculto","vPosition",vPosition,"set");
	document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p8_act3.jsp?estado=21";
	m4submit("oculto");	
}

function mod (vPosition,vDtStartPlan,vDtEndPlan,vNameDep,vcontrolMod){
if (vcontrolMod=="2"){
   var vssco_messs=m4getmessage("_sl_co_bft_17");
   alert(vssco_messs);
   return;
}
var vPayDTmod = m4valor("control_date1","SSCO_DT_PAY1","","get");	
var vDtStart1 = m4valor("sb"+vPosition,"SSE_DT_START","","get");
if (vcontrolMod=="1"){
   var vDtStartOld= m4valor("sb"+vPosition,"zSUS_DT_START_M","","get");
   var vchBeneoldOld= m4valor("sf"+vPosition,"chkBonold","","get");
   var fvis="sf" + vPosition;	
   var vbact="0";
   if (document.forms[fvis].chkBon.checked == true){vbact = "1";}	
   if (vDtStartOld!=	vDtStart1 ) {	   
   	  var vssco_messs=m4getmessage("_sl_co_bft_18");
	   alert(vssco_messs);
	   m4valor("sb"+vPosition,"SSE_DT_START",vDtStartOld,"set");
	   return;
	}
   if (vbact!=	vchBeneoldOld ) {	   
 	  var vssco_messs=m4getmessage("_sl_co_bft_19");
	   alert(vssco_messs);
	   if (vchBeneoldOld==0){
	   document.forms[fvis].chkBon.checked = false;
	   }else{
	   document.forms[fvis].chkBon.checked = true;
	   }
	   return;
	}
	
	
}
var vDtEnd1 = m4valor("sc"+vPosition,"SSE_DT_END","","get");
	var error = 0;
	var sMessage = new String(eval("_sl_co_bft_0")) + "\n";	
	var sMessageEmp = "";	
	var fechasok = true;
	var dtstartok = true;
	var dtstartok2 = true;
	var dtendok = true;
	var dtendok2 = true;	
	var formulario_DT_START = "sb" + vPosition;
	var formulario_DT_END = "sc" + vPosition;
	var formulario_DT_START_PP = "sd" + vPosition;
	var formulario_DT_END_PP = "se" + vPosition;	
	var formulario_CK_DISCOUNTED = "sf" + vPosition;	
	var formulario_CK_DISCOUNTED_2 = "0";			
	if (document.forms[formulario_DT_START].elements[0].value == ""){
		sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_2"));
	}else{
		dtstartok = m4fechacomprobacion(document.forms[formulario_DT_START].elements[0],"");
		if (dtstartok != null || dtstartok != ""){
			dtstartok2 = m4compfechas(document.forms[formulario_DT_START_PP].elements[0],'<=',document.forms[formulario_DT_START].elements[0]);
		}
	}
	if (document.forms[formulario_DT_END].elements[0].value != ""){
		dtendok = m4fechacomprobacion(document.forms[formulario_DT_END].elements[0]);
		if ((dtstartok != null || dtstartok != "") && (dtendok != null || dtendok != "")){
			fechasok = m4compfechas(document.forms[formulario_DT_START].elements[0],'<=',document.forms[formulario_DT_END].elements[0]);
			if (fechasok == true){
  				if (document.forms[formulario_DT_END_PP].elements[0].value != ""){
					dtendok2 = m4compfechas(document.forms[formulario_DT_END_PP].elements[0],'>=',document.forms[formulario_DT_END].elements[0]);
				}
			}
		}
	}	
	else {
		if (document.forms[formulario_DT_END_PP].elements[0].value != ""){
			dtendok2 = false;
		}
	}		

	if (document.forms[formulario_CK_DISCOUNTED].chkBon.checked == true){	
		formulario_CK_DISCOUNTED_2 = "1";	
		
		}	
		
	if ((dtstartok == false) || (dtendok == false)){
		sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_7"));
	}
	if (fechasok == false){
		sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_3"));
	}
	if ((dtstartok2 == false) || (dtendok2 == false)){
		sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_6"));
	}
	
	if (sMessageEmp != ""){
		error = 1;
		sMessage = sMessage + "\n" + vNameDep + sMessageEmp;
	}
	
	if (error == 1){
		alert(sMessage);
		return;
	} else{
	  var dtcontrolmodini=true;
	  if (vcontrolMod=="0"){
	  		  dtcontrolmodini = m4compfechas(m4objeto('SSE_DT_START',formulario_DT_START),'>',m4objeto('SSCO_DT_PAY1','control_date1'));	  
	  }
	  if (dtcontrolmodini==false){
	    var vssco_messs=m4getmessage("_sl_co_bft_21",vPayDTmod);
	  	sMessage = sMessage + "\n" + vNameDep +" "+ vssco_messs;
		alert(sMessage);
		return;
	  }
	  var dtcontrolmod=true;
	  dtcontrolmod = m4compfechas(m4objeto('SSE_DT_END',formulario_DT_END),'>=',m4objeto('SSCO_DT_PAY1','control_date1'));
	   if (dtcontrolmod==false){
   	   	  var vssco_messs=m4getmessage("_sl_co_bft_20",vPayDTmod);
	  	  sMessage = sMessage + "\n" + vNameDep +" "+ vssco_messs;
		  alert(sMessage);
		  return;
		}	
		m4valor("oculto","SUS_DT_START_M",vDtStart1,"set");
		m4valor("oculto","SUS_DT_END_M",vDtEnd1,"set");
		m4valor("oculto","SCO_CK_DISCOUNTED_M",formulario_CK_DISCOUNTED_2,"set");		
		m4valor("oculto","vPosition",vPosition,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p8_act2.jsp?";
		m4submit("oculto");	
	}	
}

function navegar()
{
	document.forms["NombreFormulario"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21";
	m4submit("NombreFormulario");
}

function m4enviar(){
	var vPayDT = m4valor("control_date","SSCO_DT_PAY","","get");	
	var cadenaPK="";
	var cadena="";
	var cantChk=0;
	var cantBon=0;	
	var error = 0;
	var sMessage = new String(eval("_sl_co_bft_0")) + "\n";
	var sMessageEmp = "";
	var vMaxBon = 0;	
	var formulario_ID_HR = "";
	var formulario_DT_START = "";
	var formulario_DT_END = "";
	var formulario_OPTION = "";
	var formulario_COV_CAT = "";
	var fechasok = true;
	var dtstartok = true;
	var dtstartok2 = true;
	var dtendok = true;
	var dtendok2 = true;
	var dtcontrol = true;
	cadenaPK = cadenaPK + "SSE_P_ID_PLAN=<%=vPlan%>";
	cadenaPK = cadenaPK + "{SSE_P_ID_HR=<%=vIdHr%>";
	cadenaPK = cadenaPK + "{SSE_P_OR_HR_PERIOD=<%=vOrPeriod%>";
	cadenaPK = cadenaPK + "{SSE_P_DT_START_PLAN=<%=vDtStart%>";
	cadenaPK = cadenaPK + "{SSE_P_DT_END_PLAN=<%=vDtEnd%>";
	cadenaPK = cadenaPK + "{SSE_P_ID_COV_CAT=<%=vCovCat%>";
	cadenaPK = cadenaPK + "{SSE_P_ID_OPTION=<%=vOption%>";
	cadenaPK = cadenaPK + "{SSE_P_ID_PLAN_PERIOD=<%=vPlanPeriod%>";
	if (typeof(document.forms['a0']) != "undefined"){
		var numregistros = parseInt(document.forms['a0'].elements[0].name);
		for (var i = 0; i < numregistros; i++){
			fechasok = true;
			dtstartok = true;
			dtstartok2 = true;
			dtendok = true;
			dtendok2 = true;
			dtcontrol = true;
			sMessageEmp = "";
			formulario_ID_HR = "a" + i;
			if (document.forms[formulario_ID_HR].elements[1].checked == true){
				cantChk = cantChk + 1;
				formulario_DT_START = "b" + i;
				formulario_DT_END = "c" + i;
				formulario_OPTION = "d" + i;
				formulario_COV_CAT = "e" + i;
				formulario_CK_DISCOUNTED = "f" + i;				
				formulario_CK_DISCOUNTED_2 = "0";						
				vMaxBon = m4valor("g" + i,"SUS_NUM_SUBVEN","","get");					
				if (document.forms[formulario_DT_START].elements[0].value == ""){
					sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_2"));
				}else{
					dtstartok = m4fechacomprobacion(document.forms[formulario_DT_START].elements[0],"");
					if (dtstartok != null || dtstartok != ""){
						dtstartok2 = m4compfechas(document.forms[formulario_DT_START].elements[1],'<=',document.forms[formulario_DT_START].elements[0]);
						dtcontrol = m4compfechas(m4objeto('SSE_DT_START',formulario_DT_START),'>',m4objeto('SSCO_DT_PAY','control_date'));
	
					}
				}
				if (document.forms[formulario_DT_END].elements[0].value != ""){
					dtendok = m4fechacomprobacion(document.forms[formulario_DT_END].elements[0]);
					if ((dtstartok != null || dtstartok != "") && (dtendok != null || dtendok != "")){
						fechasok = m4compfechas(document.forms[formulario_DT_START].elements[0],'<=',document.forms[formulario_DT_END].elements[0]);
						if (fechasok == true){
							if (document.forms[formulario_DT_END].elements[1].value != ""){
								dtendok2 = m4compfechas(document.forms[formulario_DT_END].elements[1],'>=',document.forms[formulario_DT_END].elements[0]);
							}
						}
					}
				}
				else {
					if (document.forms[formulario_DT_END].elements[1].value != ""){
						dtendok2 = false;
					}				
				}
				if ((dtstartok == false) || (dtendok == false)){
					sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_7"));
				}
				if (fechasok == false){
					sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_3"));
				}
				if ((dtstartok2 == false) || (dtendok2 == false)){
					sMessageEmp = sMessageEmp + "\n      " + new String(eval("_sl_co_bft_6"));
				}
			
				if (dtcontrol == false){
					sMessageEmp = sMessageEmp + "\n      " + m4getmessage("_sl_co_bft_13")+ vPayDT + m4getmessage("_sl_co_bft_12");
					
				}
				if (document.forms[formulario_CK_DISCOUNTED].elements[1].checked == true){		
					cantBon = cantBon + 1;		
					formulario_CK_DISCOUNTED_2 = "1";											
				}
				cadena = cadena + "SSE_P_ID_PERSON_COV=" + document.forms[formulario_ID_HR].elements[1].value;
				cadena = cadena + "*SSE_P_DT_START=" + document.forms[formulario_DT_START].elements[0].value;
				cadena = cadena + "*SSE_P_ID_COV_CAT=" + document.forms[formulario_COV_CAT].elements[0].value;
				cadena = cadena + "*SSE_P_ID_OPTION=" + document.forms[formulario_OPTION].elements[0].value;
				cadena = cadena + "*SSE_P_DT_END=" + document.forms[formulario_DT_END].elements[0].value;
				cadena = cadena + "*SSE_P_CK_DISCOUNTED=" + formulario_CK_DISCOUNTED_2 + "}";	
			}
			if (sMessageEmp != ""){
				error = 1;
				sMessage = sMessage + "\n\n" + document.forms[formulario_ID_HR].elements[1].name + sMessageEmp;
			}
		}	
		if (cantChk == 0){
			error = 1;
			sMessage = new String(eval("_sl_co_bft_1"));
		}	
		if (error == 1){
			alert(sMessage);
			return;
		}else{
			document.forms["NombreFormulario"].elements["PK"].value=cadenaPK;
			document.forms["NombreFormulario"].elements["PK_DEPENDENT"].value=cadena;
			document.forms["NombreFormulario"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p8_act.jsp?";
			m4submit("NombreFormulario");
		}
	}
}

function pendientes(ord)
{
	document.forms["NombreFormulario"].elements["ACC"].value="BORRAR";
	document.forms["NombreFormulario"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p8_act.jsp?estado=21";
	m4submit("NombreFormulario");
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
	String zsubsesion = "SSE_BFT_DEP_BENE_COV";
	String zmeta4object = "SSE_BFT_DEP_BENE_COV";
	String znodo = "SSE_LIST_FAMILY";
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_COMMON_VALUES.SSE_M_SET_VALUES";
	String zmetodocarga2 = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

	String ztipocarga = "ALL";

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[*]";
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

	String znodo1 = "M4T_DEP_BENE_COV";
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]"; 
	
	String znodo2 = "SSE_DEP_BENE_COV";
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
	String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]"; 

	String zSUS_DT_START = zcomun + "SUS_DT_START";
	String zSUS_DT_END = zcomun + "SUS_DT_END";
	String zSUS_ID_OPTION = zcomun + "SUS_ID_OPTION";
	String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
	String zSUS_ID_PLAN = zcomun + "SUS_ID_PLAN";
	String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
	String zSUS_OR_HR_PERIOD = zcomun + "SUS_OR_HR_PERIOD";
	String zSUS_ID_HR = zcomun + "SUS_ID_HR";
	String zSCO_GB_NAME = zcomun + "SCO_GB_NAME";
	String zSTD_N_DEP_TYPE = zcomun + "STD_N_ACT_DEP_TYPE";
	String zSTD_ID_FAMILY_PERSON = zcomun + "STD_ID_FAMILY_PERSON";
	String zSUS_ID_COV_CAT = zcomun + "SUS_ID_COV_CAT";
	String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
	String zSUS_NUM = zcomun + "SUS_NUM";
	String zSUS_NUM_SUBVEN = zcomun + "SUS_NUM_SUBVEN";	
	String zSUS_MAX_COV = zcomun + "SUS_MAX_COV";	

	String zSCO_GB_NAME1 = zcomun1 + "SCO_GB_NAME";
	String zSUS_ID_PLAN1 = zcomun1 + "SUS_ID_PLAN";	
	String zSUS_N_PLAN1 = zcomun1 + "SUS_N_PLAN";
	String zSUS_N_OPTION1 = zcomun1 + "SUS_N_OPTION";
	String zSUS_N_COV_CAT1 = zcomun1 + "SUS_N_COV_CAT";	
	String zSUS_DT_START_PLAN1 = zcomun1 + "SUS_DT_START_PLAN";
	String zSUS_DT_END_PLAN1 = zcomun1 + "SUS_DT_END_PLAN";
	String zSUS_DT_START1 = zcomun1 + "SUS_P_DT_START";
	String zSUS_DT_END1 = zcomun1 + "SUS_P_DT_END";
	String zSCO_CK_DISCOUNTED = zcomun1 + "SCO_CK_DISCOUNTED";

	String zSUS_OR_HR_PERIOD1 = zcomun1 + "SUS_OR_HR_PERIOD";
	String zSTD_DT_START1 = zcomun1 + "STD_DT_START";
	String zSTD_DT_END1 = zcomun1 + "STD_DT_END";

	String zSSE_N_PLAN = zcomun2 + "SUS_N_PLAN";
	String zSSE_N_OPTION = zcomun2 + "SUS_N_OPTION";
	String zSSE_N_COV_CAT = zcomun2 + "SUS_N_COV_CAT";	
	String zSSE_DT_START_PLAN = zcomun2 + "SSE_DT_START_PLAN";
	String zSSE_DT_START = zcomun2 + "SUS_P_DT_START";
	String zSSE_DT_END_PLAN = zcomun2 + "SSE_DT_END_PLAN";
	String zSSE_DT_END = zcomun2 + "SUS_P_DT_END";
	String zSSE_ACCION = zcomun2 + "N_ACCION";
	String zSSE_GB_NAME = zcomun2 + "SCO_GB_NAME";
	String zORDINAL = zcomun2 + "ORDINAL";
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
	<m4:param name="ARG_ID_PLAN_PERIOD" value="<%=vPlanPeriod%>"/>		
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;
try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.BenefitsDep")%></td>
</tr>
<tr>
	<td valign="top"><img alt="<%=TranEss.getProperty("bft_ess.BenefitsDep")%>" title="<%=TranEss.getProperty("bft_ess.BenefitsDep")%>" src="/iconos/noname_beneficiarios_72_100.gif" width="100" height="100" /></td>
	<td>
		<div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.BenefitsDepDesc")%></div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("bft_ess.SimulBenef")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=0"><%=TranEss.getProperty("bft_ess.SimulBenef")%></a></li>
			<li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=1"><%=TranEss.getProperty("bft_ess.SolicBenef")%></a></li>
			<li><a class="enlacefuncional" tabindex="3" title="<%=TranEss.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=TranEss.getProperty("bft_ess.Benefits")%></a></li>
		</ul>
	</td>
</tr>
</table>
<%if (zcounti > 0) {%>
<form name="control_date" id="control_date">
		<input type="hidden" id="SSCO_DT_PAY" name="SSCO_DT_PAY" value="<m4:item  item="SSCO_DT_PAY" htmlsafe="true" outputdef="<%=znodo%>"/>" />
</form>
<table class="tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">
	<tr>
		<td colspan="1" class="tablaestadosceldatitulo">
			<m4:label m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/>&nbsp;-&nbsp;<%=vNameBenefit%>
		</td>
		<td colspan="2" class="tablaestadosceldatitulo"><m4:label m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true"/>:&nbsp;&nbsp;<%=vDtStart%></td>
 		<td colspan="2" class="tablaestadosceldatitulo"><m4:label m4name="<%=zSUS_DT_END_PLAN1%>" htmlsafe = "true"/>:&nbsp;&nbsp;<%=vDtEnd%></td>
		<td colspan="4" align="right"><a href="javascript:navegar();"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>		
	</tr>
	<tr class="tablasubtitulo">
		<td><m4:label m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></td>
		<td><m4:label m4name="<%=zSTD_N_DEP_TYPE%>" htmlsafe = "true"/></td>
		<td><m4:label m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/></td>
		<td><m4:label m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/></td>
		<td><m4:label m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/></td>
		<td><m4:label m4name="<%=zSUS_DT_END%>" htmlsafe = "true"/></td>
		<td></td>		
		<td><m4:label m4name="<%=zSCO_CK_DISCOUNTED%>" htmlsafe = "true"/></td>
	<tr>

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
		<form name="a<%=zposicion%>" id="a<%=zposicion%>">
		<input type="hidden" id="cant<%=zposicion%>" name="<%=zcounti%>" value="" />
		<td class="<%=clase%>">
			<input type="Checkbox" id="SSE_P_ID_PERSON_COV" name="<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/>" tabindex="<%=zTab + 1%>" value="<m4:item m4name="<%=zSTD_ID_FAMILY_PERSON%>" htmlsafe = "true"/>" />
			<m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/>
		</td>
		</form>
		<td class="<%=clase%>" title="<%=TranEss.getProperty("bft_ess.MaxDiscount")%>: <m4:item m4name="<%=zSUS_NUM_SUBVEN%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSTD_N_DEP_TYPE%>" htmlsafe = "true"/></td>
		<form name="d<%=zposicion%>" id="d<%=zposicion%>">

		<td class="<%=clase%>">
			<m4:item m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/>
		</td>
		<input type="hidden" id="zSUS_ID_OPTION" name="zSUS_ID_OPTION" value="<m4:item m4name="<%=zSUS_ID_OPTION%>" htmlsafe = "true"/>" />
		</form>

		<form name="e<%=zposicion%>" id="e<%=zposicion%>">

		<td class="<%=clase%>">
				<m4:item m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/>
		</td>
		<input type="hidden" id="zSUS_ID_COV_CAT" name="zSUS_ID_COV_CAT" value="<m4:item m4name="<%=zSUS_ID_COV_CAT%>" htmlsafe = "true"/>" />
		</form>

		<form name="b<%=zposicion%>" id="b<%=zposicion%>">
		<td class="<%=clase%>">
			<input class="fuenteformulario" type="text" name="SSE_DT_START" id="SSE_DT_START" title="<%=TranEss.getProperty("bft_ess.DtStart")%>" maxlength="10" size="10" tabindex="<%=zTab + 2%>" />&nbsp;
			<a href="javascript:m4calendario(m4objeto('SSE_DT_START','b<%=zposicion%>'));" title="<%=TranEss.getProperty("bft_ess.BtnDtStart")%>">
				<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=TranEss.getProperty("bft_ess.BtnDtStart")%>" />
			</a>
		</td>
		<input type="hidden" id="zSUS_DT_START" name="zSUS_DT_START" value="<m4:item m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/>" />
		</form>
		<form name="c<%=zposicion%>" id="c<%=zposicion%>">
		<td class="<%=clase%>" colspan="2">
			<input class="fuenteformulario" type="text" name="SSE_DT_END" id="SSE_DT_END" title="<%=TranEss.getProperty("bft_ess.DtEnd")%>" maxlength="10" size="10" tabindex="<%=zTab + 3%>" />&nbsp;
			<a href="javascript:m4calendario(m4objeto('SSE_DT_END','c<%=zposicion%>'));" title="<%=TranEss.getProperty("bft_ess.BtnDtEnd")%>">
				<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=TranEss.getProperty("bft_ess.BtnDtEnd")%>" />
			</a>
		</td>
		<input type="hidden" id="zSUS_DT_END" name="zSUS_DT_END" value="<m4:item m4name="<%=zSUS_DT_END%>" htmlsafe = "true"/>" />
		</form>
		<form name="f<%=zposicion%>" id="f<%=zposicion%>">
		<input type="hidden" id="cant<%=zposicion%>" name="<%=zcounti%>" value="" />
		<td class="<%=clase%>" align="right">&nbsp;&nbsp;&nbsp;&nbsp;	
			<input type="Checkbox" id="SSE_P_CK_DISCOUNTED"	name="<m4:item m4name="<%=zSCO_CK_DISCOUNTED%>" htmlsafe = "true"/>" tabindex="<%=zTab + 1%>" value="<m4:item m4name="<%=zSCO_CK_DISCOUNTED%>" htmlsafe = "true"/>" />
		</td>
		</form>
		<form name="g<%=zposicion%>" id="g<%=zposicion%>">
			<input type="hidden" id="SUS_NUM_SUBVEN" name="SUS_NUM_SUBVEN" value="<m4:item m4name="<%=zSUS_NUM_SUBVEN%>" htmlsafe = "true"/>" />
		</form>				
	</tr>
	</form>
</m4:loop>
<%zTab=zTab + 3;%>
	<tr>
		<td class="fuenteboton" colspan="9">
			<a tabindex="<%=zTab%>" href="javascript:m4enviar()" title="<%=Tran.getProperty("Button.Send")%>">
				<img id="<%=Tran.getProperty("Button.Send")%>" alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
			</a>
		</td>
	</tr>
</table>
<%}else{%>
<div class="fuentenodatos"><%=TranEss.getProperty("bft_ess.DescNoDataFound4")%></div>
<%}%>
<form action=" " method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="SUS_ID_PLAN" name="SUS_ID_PLAN" value="<%=vPlan%>" />
<input type="hidden" id="SUS_OR_H_EE_BNFT" name="SUS_OR_H_EE_BNFT" value="<%=vOrPlan%>" />
<input type="hidden" id="SUS_ID_HR" name="SUS_ID_HR" value="<%=vIdHr%>" />
<input type="hidden" id="SUS_OR_HR_PERIOD" name="SUS_OR_HR_PERIOD" value="<%=vOrPeriod%>" />
<input type="hidden" id="SUS_DT_START" name="SUS_DT_START" value="<%=vDtStart%>" />
<input type="hidden" id="SUS_DT_END" name="SUS_DT_END" value="<%=vDtEnd%>" />
<input type="hidden" id="SUS_ID_OPTION" name="SUS_ID_OPTION" value="<%=vOption%>" />
<input type="hidden" id="SUS_ID_COV_CAT" name="SUS_ID_COV_CAT" value="<%=vCovCat%>" />
<input type="hidden" id="SUS_MAX_COV" name="SUS_MAX_COV" value="<m4:item m4name="<%=zSUS_MAX_COV%>" htmlsafe = "true"/>" />
<input type="hidden" id="SUS_NUM_SUBVEN" name="SUS_NUM_SUBVEN" value="<m4:item m4name="<%=zSUS_NUM_SUBVEN%>" htmlsafe = "true"/>" />
<input type="hidden" id="vNameBenefit" name="vNameBenefit" value="<%=vNameBenefit%>" />
<input type="hidden" id="vPosition" name="vPosition" value="<%=vPosition%>" />
<input type="hidden" id="TAG" name="TAG" value="<%=zmeta4object%>" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_DEP_BENE_COV" />
<input type="hidden" id="PK" name="PK" value="" />
<input type="hidden" id="PK_DEPENDENT" name="PK_DEPENDENT" value="" />
</form>
<%
int  zcount1  = 0;
int  zcounti1  = 0;	
String zsscodel="";
String zsscomod="";
try {
	M4Operations m = new M4Operations(request);
	zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
} catch(Exception e) {}
String	zcountv1 = String.valueOf(zcounti1);
if (zcounti1 > 0) {
String zregistroinicials1 = "0";
String zregistrofinals1 = String.valueOf(zcounti1 - 1);
%>

<form name="control_date1" id="control_date1">
		<input type="hidden" id="SSCO_DT_PAY1" name="SSCO_DT_PAY1" value="<m4:item  item="SSCO_DT_PAY" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
</form>
<table class="tablaestadosceldatitulo" width="100%" cellspacing="0">
	<tr class="tablaestadosceldatitulo">
		<td class="tablaestadosceldatitulo" colspan="2"><%=TranEss.getProperty("bft_ess.InfoFamily")%></td>
		<td class="tablaestadosceldatitulo" align="right" colspan="7"><a href="javascript:navegar();"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	</tr>
<%
int zposicion1 = 0;
int zTab = 1;
String zposicionsd1 = "0";
String zposiciond2= "0";
String zSUS_V_ID_PLAN_D_ANT="";
String zSUS_V_DT_START_PLAN_D_ANT="";
String zSUS_V_OR_PERIOD_ANT="";	
%>
<m4:loop from="<%=zregistroinicials1%>" to="<%=zregistrofinals1%>">
<m4:item m4name="<%=zSCO_CK_DISCOUNTED%>" m4varname="zFamBon"/>
<m4:item  item="SSCO_DEL_ENABLED"var="zsscodel" htmlsafe="true" outputdef="<%=znodo1%>"/>
<m4:item  item="SSCO_MOD_ENABLED"var="zsscomod" htmlsafe="true" outputdef="<%=znodo1%>"/>
<%
	int zcontrol1 = 0;
	
	zposicionsd1 = m4lix;
	zposicion1 = Integer.valueOf(zposicionsd1).intValue();
 	//zposicion = zposicion - zregistroinicial;
 	zposiciond2 = String.valueOf(zposicion1);
	zTab = zTab + 3;
	
 	zcontrol1 = zposicion1%2;
if (zcontrol1==0){
	//par
	clase = "fuentevalor2"; 
}else{
	//impar
	clase = "fuentevalor"; 
	 }
%>
<m4:item m4name="<%=zSUS_ID_PLAN1%>" htmlsafe = "true" m4varname="zSUS_V_ID_PLAN_D"/>	 
<m4:item m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true" m4varname="zSUS_V_DT_START_PLAN_D"/>	
<m4:item m4name="<%=zSUS_OR_HR_PERIOD1%>" htmlsafe = "true" m4varname="zSUS_V_OR_PERIOD_D"/>	 	
<%if ((zSUS_V_OR_PERIOD_D.equals(zSUS_V_OR_PERIOD_ANT)==false) || (zposiciond2.equals("0")==true)){
	clase = "fuentevalor2";%>		 
	<tr>
		<td class="tablaestadosceldatitulo" colspan="2" ><m4:label m4name="<%=zSUS_OR_HR_PERIOD1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_OR_HR_PERIOD1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="2" ><m4:label m4name="<%=zSTD_DT_START1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSTD_DT_START1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="4" ><m4:label m4name="<%=zSTD_DT_END1%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSTD_DT_END1%>" htmlsafe = "true" /></td>
	</tr> 
<%}
if (((zSUS_V_ID_PLAN_D.equals(zSUS_V_ID_PLAN_D_ANT)==false) || (zSUS_V_DT_START_PLAN_D.equals(zSUS_V_DT_START_PLAN_D_ANT)==false) ) || (zposiciond2.equals("0")==true)){
	clase = "fuentevalor2";%>	
  	<tr>
		<td class="tablaestadosceldatitulo" colspan="2" ><m4:label m4name="<%=zSUS_N_PLAN1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_N_PLAN1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="2" ><m4:label m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="4" ><m4:label m4name="<%=zSUS_DT_END_PLAN1%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSUS_DT_END_PLAN1%>" htmlsafe = "true" /></td>
 	</tr>
	<tr class="tablasubtitulo">
		<td class="tablasubtitulo" colspan="2"><m4:label m4name="<%=zSCO_GB_NAME1%>" htmlsafe = "true"/></td>	
		<td class="tablasubtitulo"><m4:label m4name="<%=zSUS_N_OPTION1%>" htmlsafe = "true"/></td>	
		<td class="tablasubtitulo" align="left"><m4:label m4name="<%=zSUS_N_COV_CAT1%>" htmlsafe = "true"/></td>	
		<td class="tablasubtitulo"><m4:label m4name="<%=zSUS_DT_START1%>" htmlsafe = "true"/></td>	
		<td class="tablasubtitulo"><m4:label m4name="<%=zSUS_DT_END1%>" htmlsafe = "true"/></td>	
		<td class="tablasubtitulo"><m4:label m4name="<%=zSCO_CK_DISCOUNTED%>" htmlsafe = "true"/></td>	
		<td class="tablasubtitulo" colspan="2" align="center"></td>					
	</tr>
<%}%>		
	<tr>
		<td class="<%=clase%>" colspan="2"><m4:item m4name="<%=zSCO_GB_NAME1%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSUS_N_OPTION1%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>" align="left"><m4:item m4name="<%=zSUS_N_COV_CAT1%>" htmlsafe = "true"/></td>
		<form name="sb<%=zposicion1%>" id="sb<%=zposicion1%>">
		<td class="<%=clase%>">
			<input class="fuenteformulario" type="text" name="SSE_DT_START" id="SSE_DT_START" title="<%=TranEss.getProperty("bft_ess.DtStart")%>" maxlength="10" size="10" tabindex="<%=zTab + 2%>" value="<m4:item m4name="<%=zSUS_DT_START1%>" htmlsafe = "true"/>"/>&nbsp;
			<a href="javascript:m4calendario(m4objeto('SSE_DT_START','sb<%=zposicion1%>'));" title="<%=TranEss.getProperty("bft_ess.BtnDtStart")%>">
				<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=TranEss.getProperty("bft_ess.BtnDtStart")%>" />
			</a>
		</td>
		<input type="hidden" id="zSUS_DT_START_M" name="zSUS_DT_START_M" value="<m4:item m4name="<%=zSUS_DT_START1%>" htmlsafe = "true"/>" />
		</form>			
		<form name="sc<%=zposicion1%>" id="sc<%=zposicion1%>">
		<td class="<%=clase%>">
			<input class="fuenteformulario" type="text" name="SSE_DT_END" id="SSE_DT_END" title="<%=TranEss.getProperty("bft_ess.DtEnd")%>" maxlength="10" size="10" tabindex="<%=zTab + 3%>" value="<m4:item m4name="<%=zSUS_DT_END1%>" htmlsafe = "true"/>"/>&nbsp;
			<a href="javascript:m4calendario(m4objeto('SSE_DT_END','sc<%=zposicion1%>'));" title="<%=TranEss.getProperty("bft_ess.BtnDtEnd")%>">
				<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=TranEss.getProperty("bft_ess.BtnDtEnd")%>" />
			</a>
		</td>
		<input type="hidden" id="zSUS_DT_END_M" name="zSUS_DT_END_M" value="<m4:item m4name="<%=zSUS_DT_END1%>" htmlsafe = "true"/>" />
		</form>
		<form name="sd<%=zposicion1%>" id="sd<%=zposicion1%>">
			<input type="hidden" id="zSUS_DT_START_PLAN1" name="zSUS_DT_START_PLAN1" value="<m4:item m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true"/>" />
		</form>				
		<form name="se<%=zposicion1%>" id="se<%=zposicion1%>">
			<input type="hidden" id="zSUS_DT_END_PLAN1" name="zSUS_DT_END_PLAN1" value="<m4:item m4name="<%=zSUS_DT_END_PLAN1%>" htmlsafe = "true"/>" />
		</form>			
	  	<form name="sf<%=zposicion1%>" id="sf<%=zposicion1%>">
			<input type="hidden" id="cant<%=zposicion1%>" name="<%=zposicion1%>" value="" />
			<input type="hidden" id="chkBonold" name="chkBonold" value="<%=zFamBon%>" />
			<td class="<%=clase%>">&nbsp;&nbsp;&nbsp;&nbsp;
			<%
				String checked = "";
				String disabled = "";
				if (zFamBon.equals("1")) {
					checked = "checked";
				}
			%>
			<input <%=disabled%> type="Checkbox" id="chkBon" name="chkBon" value="<%=zposicion1%>" <%=checked%>/>
			</td>
	  	</form>							
		<td class="<%=clase%>" width="3%">&nbsp;&nbsp;
			<a title="<%=Tran.getProperty("Button.Modify")%>"href="javascript:mod('<%=zposicion1%>','<m4:item m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true" jsafe="true"/>','<m4:item m4name="<%=zSUS_DT_END_PLAN1%>" htmlsafe = "true" jsafe="true"/>','<m4:item m4name="<%=zSCO_GB_NAME1%>" htmlsafe = "true" jsafe="true"/>','<%=zsscomod%>');">
				<img class="tablamenuright" alt="<%=Tran.getProperty("Button.Modify")%>"  src="/iconos/icono_ess_36_36.gif" height="20" width="20" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
			</a>
		</td>
		<td class="<%=clase%>">&nbsp;&nbsp;
			<a title="<%=Tran.getProperty("Button.Delete")%>"href="javascript:borrar('<%=zposicion1%>','<%=zsscodel%>');">
				<img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
			</a>
		</td>				
    </tr>
<%
zSUS_V_ID_PLAN_D_ANT = zSUS_V_ID_PLAN_D;
zSUS_V_DT_START_PLAN_D_ANT = zSUS_V_DT_START_PLAN_D;
zSUS_V_OR_PERIOD_ANT = zSUS_V_OR_PERIOD_D;
%>
</m4:loop>
</table>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="vPosition" name="vPosition" value="" />
<input type="hidden" id="vNameEmp" name="vNameEmp" value="" />
<input type="hidden" id="SUS_DT_START_M" name="SUS_DT_START_M" value="" />
<input type="hidden" id="SUS_DT_END_M" name="SUS_DT_END_M" value="" />
<input type="hidden" id="SCO_CK_DISCOUNTED_M" name="SCO_CK_DISCOUNTED_M" value="" />
<%}%>
<br>
<%
int  zcount2  = 0;
int  zcounti2  = 0;
try {
	M4Operations m = new M4Operations(request);
	zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
} catch(Exception e) {}
String	zcountv2 = String.valueOf(zcounti2);
if (zcounti2 > 0) {
%>
<table class="tablaestadosceldatitulo" width="100%" cellspacing="0">
	<tr class="tablaestadosceldatitulo">
		<td colspan="7">
			<%=TranEss.getProperty("bft_ess.PendBenefits")%> 
		</td>
		<td class="tablaestadosceldatitulo" align="right"><a href="javascript:navegar();"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	</tr>
	<tr class="tablasubtitulo">
		<td>&nbsp;</td>
		<td colspan="2"><m4:label m4name="<%=zSSE_GB_NAME%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_N_PLAN%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_N_OPTION%>" htmlsafe="true"/></td>
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
		<td class="<%=clase%>" colspan="2"><m4:item m4name="<%=zSSE_GB_NAME%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_N_PLAN%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_N_OPTION%>" htmlsafe = "true"/></td>
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

<%}%>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>
</html>
