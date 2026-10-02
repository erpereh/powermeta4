<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>	
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>

<title><%=TranEss.getProperty("bft_ess.Benefits")%></title>

<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	if ((zinicios==null)||(zinicios.equals(""))){
	   zinicios = "1";
	}
%>
<script type="text/javaScript">
function navegar_dep (vPlan,vOrPlan,vOrPeriod,vDtStart,vDtEnd,vIdHr,vNameBenefit,vPosition,vOption, vCovCat,vPlanPeriod,vsscoControlPagas)
{

if (vsscoControlPagas=="1"){

var vssco_messs=m4getmessage("_sl_co_bft_15",vNameBenefit);
alert(vssco_messs);
		return;
}
	m4valor("oculto","SUS_ID_PLAN",vPlan,"set");
	m4valor("oculto","SUS_OR_H_EE_BNFT",vOrPlan,"set");
	m4valor("oculto","SUS_ID_HR",vIdHr,"set");
	m4valor("oculto","SUS_OR_HR_PERIOD",vOrPeriod,"set");
	m4valor("oculto","SUS_DT_START",vDtStart,"set");
	m4valor("oculto","SUS_DT_END",vDtEnd,"set");
	m4valor("oculto","SUS_ID_OPTION",vOption,"set");	
	m4valor("oculto","SUS_ID_COV_CAT",vCovCat,"set");
	m4valor("oculto","SUS_ID_PLAN_PERIOD",vPlanPeriod,"set");	
	m4valor("oculto","vNameBenefit",vNameBenefit,"set");
	m4valor("oculto","vPosition",vPosition,"set");
	document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p8.jsp?estado=21";
	m4submit("oculto");
}

function cancelar_bft (vPlan,vOrPlan,vOrPeriod,vDtStart,vDtEnd,vIdHr,vNameBenefit,vPosition,vOption, vCovCat,vsscoControlPagas)
{

if (vsscoControlPagas=="1"){

var vssco_messs=m4getmessage("_sl_co_bft_14",vNameBenefit);
alert(vssco_messs);
		return;
}
	m4valor("oculto","SUS_ID_PLAN",vPlan,"set");
	m4valor("oculto","SUS_OR_H_EE_BNFT",vOrPlan,"set");
	m4valor("oculto","SUS_ID_HR",vIdHr,"set");
	m4valor("oculto","SUS_OR_HR_PERIOD",vOrPeriod,"set");
	m4valor("oculto","SUS_DT_START",vDtStart,"set");
	m4valor("oculto","SUS_DT_END",vDtEnd,"set");
	m4valor("oculto","SUS_ID_OPTION",vOption,"set");	
	m4valor("oculto","SUS_ID_COV_CAT",vCovCat,"set");	
	m4valor("oculto","vNameBenefit",vNameBenefit,"set");
	m4valor("oculto","vPosition",vPosition,"set");
	document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p9.jsp?estado=21";
	m4submit("oculto");
}

function enviar ()
{
	document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6_act.jsp?estado=21";
	m4submit("oculto");
}

function navegar (vNameBenefit,vPosition)
{
	m4valor("oculto","vNameBenefit",vNameBenefit,"set");
	m4valor("oculto","vPosition",vPosition,"set");
	document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6_det.jsp?estado=21";
	m4submit("oculto");
}
</script>

</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
	String zsubsesion = "SSE_BFT_H_EE_IN_BNFT";
	String zmeta4object = "SSE_BFT_H_EE_IN_BNFT";
	String znodo = "M4T_H_EE_IN_BNFT";
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

	String zventanas = "20";
	int zvuelta = 5;
	String zdireccion = "sse_g2/sse_g2_p6.jsp";
	String zestado = "21";
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;

	String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
	String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
	String ztipocarga = "M4T";
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

	String znodo1 = "M4T_DEP_BENE_COV_2";
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]"; 

	//String zSUS_ID_PLAN_PERIOD = zcomun + "SUS_ID_PLAN_PERIOD";
	String zSUS_N_PLAN_PERIOD = zcomun + "SUS_N_PLAN_PERIOD";
	String zSUS_DT_START_PP = zcomun + "SUS_DT_START_PP";
	String zSUS_DT_END_PP = zcomun + "SUS_DT_END_PP";	
	String zDT_START = zcomun + "SUS_DT_START";
	String zSUS_DT_END = zcomun + "SUS_DT_END";
	String zSUS_DT_ELECT = zcomun + "SUS_DT_ELECT";
	String zSUS_ID_OPTION = zcomun + "SUS_ID_OPTION";
	String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
	String zSUS_COVERAGE = zcomun + "SUS_COVERAGE";
	String zSUS_ID_COV_CAT = zcomun + "SUS_ID_COV_CAT";
	String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
	String zSUS_PCT_PRICE = zcomun + "SUS_PCT_PRICE";
	String zSUS_TAX = zcomun + "SUS_TAX";
	String zSUS_PRICE = zcomun + "SUS_PRICE";
	String zSUS_CREDIT = zcomun + "SUS_CREDIT";
	String zSTD_ID_COMP_BASIS = zcomun + "STD_ID_COMP_BASIS";
	String zSTD_ID_COMP_BASIS_C = zcomun + "STD_ID_COMP_BASIS_C";
	String zSTD_ID_COMP_BASIS_W = zcomun + "STD_ID_COMP_BASIS_W";
	String zSTD_ID_COMP_EC = zcomun + "STD_ID_COMP_EC";
	String zSTD_N_COMP_BASIS = zcomun + "STD_N_COMP_BASIS";
	String zSTD_N_COMP_BASIS_EC = zcomun + "STD_N_COMP_BASIS_EC";
	String zSTD_N_COMP_BASIS_TP = zcomun + "STD_N_COMP_BASIS_TP";
	String zSTD_N_COMP_BASIS_CR = zcomun + "STD_N_COMP_BASIS_CR";
	String zSUS_COMMENT = zcomun + "SUS_COMMENT";
	String zSCO_HTTP_PATH = zcomun + "SCO_HTTP_PATH";
	String zSUS_ID_PLAN_TYPE = zcomun + "SUS_ID_PLAN_TYPE";	
	String zSTD_N_EXT_ORG = zcomun + "STD_N_EXT_ORG";
	String zSUS_ID_HR = zcomun + "SUS_ID_HR";	
	String zSUS_OR_HR_PERIOD = zcomun + "SUS_OR_HR_PERIOD";
	String zSTD_DT_START = zcomun + "STD_DT_START";
	String zSTD_DT_END = zcomun + "STD_DT_END";
	String zSUS_OR_H_EE_BNFT = zcomun + "SUS_OR_H_EE_BNFT";	
	String zSUS_ID_PLAN = zcomun + "SUS_ID_PLAN";
	String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
	String zSUS_ER_CONTR = zcomun + "SUS_ER_CONTR";
	String zSUS_CUR_DATE = zcomun + "SUS_CUR_DATE";
	String zSUS_EX_TYPE = zcomun + "SUS_EX_TYPE";
	String zSUS_ID_CURRENCY = zcomun + "SUS_ID_CURRENCY";
	String zSSE_P_IS_CORE_PLAN = zcomun + "SSE_P_IS_CORE_PLAN";
	String zSSE_P_IS_FLEX_PLAN = zcomun + "SUS_FLEX_PLAN";
	String zSUS_FLAT_AMT1 = zcomun + "SUS_FLAT_AMT1";
	String zSCO_ID_CURRENCY = zcomun + "SCO_ID_CURRENCY";
	
	String zSUS_ID_PLAN_D = zcomun1 + "SUS_ID_PLAN";
	String zSUS_DT_START_PLAN_D = zcomun1 + "SUS_DT_START_PLAN";
	String zSUS_OR_HR_PERIOD_D = zcomun1 + "SUS_OR_HR_PERIOD";
	String zSCO_CK_DISCOUNTED = zcomun1 + "SCO_CK_DISCOUNTED";			

	String zSCO_GB_NAME1 = zcomun1 + "SCO_GB_NAME";
	String zSUS_N_OPTION1 = zcomun1 + "SUS_N_OPTION";
	String zSUS_DT_START_PLAN1 = zcomun1 + "SUS_DT_START_PLAN";
	String zSUS_DT_END_PLAN1 = zcomun1 + "SUS_DT_END_PLAN";
	String zSUS_N_PLAN1 = zcomun1 + "SUS_N_PLAN";
	String zSUS_N_COV_CAT1 = zcomun1 + "SUS_N_COV_CAT";
	String zSUS_P_DT_START = zcomun1 + "SUS_P_DT_START";
	String zSUS_P_DT_END = zcomun1 + "SUS_P_DT_END";
	String zSCO_AMT_DEP_EMP = zcomun1 + "SCO_AMT_DEP_EMP";	
	String zSCO_AMT_DEP_LEG = zcomun1 + "SCO_AMT_DEP_LEG";		
	String zSTD_N_COMP_BASIS_EMP = zcomun1 + "STD_N_COMP_BASIS_2";
	String zSTD_N_COMP_BASIS_LEG = zcomun1 + "STD_N_COMP_BASIS_3";		
	String zSUS_ID_CURRENCY1 = zcomun + "SUS_ID_CURRENCY";
	String zSUS_FLAT_AMT1_1 = zcomun1 + "SUS_FLAT_AMT1";
	String zSCO_ID_CURRENCY1 = zcomun1 + "SCO_ID_CURRENCY";	
	
	String zSUS_OR_HR_PERIOD1 = zcomun1 + "SUS_OR_HR_PERIOD";
	String zSTD_DT_START1 = zcomun1 + "STD_DT_START";
	String zSTD_DT_END1 = zcomun1 + "STD_DT_END";

//Estos campos no se usan por ahora
/*
	String zSUS_CK_MODIFY = zcomun + "SUS_CK_MODIFY";
	String zSUS_DT_MODIFY = zcomun + "SUS_DT_MODIFY";
	String zSUS_ID_ARREAR = zcomun + "SUS_ID_ARREAR";
	String zSUS_ID_COMP_BASE = zcomun + "SUS_ID_COMP_BASE";
	String zSUS_ID_DEDUCT = zcomun + "SUS_ID_DEDUCT";
	String zSUS_ID_DEDUCTION = zcomun + "SUS_ID_DEDUCTION";
	String zSUS_ID_HR = zcomun + "SUS_ID_HR";
	String zSUS_INCOME_W = zcomun + "SUS_INCOME_W";
	String zSUS_MAIN_RL_DEDUC = zcomun + "SUS_MAIN_RL_DEDUC";
	String zSUS_OR_HR_PERIOD = zcomun + "SUS_OR_HR_PERIOD";
	String zSUS_OR_H_EE_BNFT = zcomun + "SUS_OR_H_EE_BNFT";
	String zSUS_PCT_ER_CONT = zcomun + "SUS_PCT_ER_CONT";
	String zSUS_PERIOD_1ST = zcomun + "SUS_PERIOD_1ST";
	String zSUS_PERIOD_2ND = zcomun + "SUS_PERIOD_2ND";
	String zSUS_PERIOD_3RD = zcomun + "SUS_PERIOD_3RD";
	String zSUS_PERIOD_4TH = zcomun + "SUS_PERIOD_4TH";
	String zSUS_PERIOD_5TH = zcomun + "SUS_PERIOD_5TH";
	String zSUS_PLAN_DIS_IND = zcomun + "SUS_PLAN_DIS_IND";
	String zSUS_PLAN_HC_IND = zcomun + "SUS_PLAN_HC_IND";
	String zSUS_POST_AN_LIMT = zcomun + "SUS_POST_AN_LIMT";
	String zSUS_PRE_AN_LIMT = zcomun + "SUS_PRE_AN_LIMT";
	String zSUS_PRIORITY = zcomun + "SUS_PRIORITY";
	String zSUS_SMOKER = zcomun + "SUS_SMOKER";
	String zSUS_TOTAL_PREM = zcomun + "SUS_TOTAL_PREM";
	String zSUS_TOT_AN_LIMT = zcomun + "SUS_TOT_AN_LIMT";
	*/
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
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<%
int zcount  = 0;
int zcounti  = 0;
String zPlanType = "0";
try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	zPlanType = m.getItem(zsubsesion,zsubsesion,znodo,"","SSE_P_HAVE_HC");
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.Benefits")%></td>
</tr>
<tr>
	<td valign="top"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" title="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/noname_beneficiarios_72_100.gif" width="100" height="100" /></td>
	<td>
		<div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.DescBenefits")%></div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("bft_ess.SimulBenef")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=0"><%=TranEss.getProperty("bft_ess.SimulBenef")%></a></li>
			<li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=1"><%=TranEss.getProperty("bft_ess.SolicBenef")%></a></li>
			<li><a class="enlacefuncional" tabindex="3" title="<%=TranEss.getProperty("bft_ess.HistBenef")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p11.jsp?estado=21&vista=1"><%=TranEss.getProperty("bft_ess.HistBenef")%></a></li>
		</ul>
	</td>
</tr>
</table>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="vNameBenefit" name="vNameBenefit" value="" />
<input type="hidden" id="vPosition" name="vPosition" value="" />
<input type="hidden" id="SUS_ID_PLAN" name="SUS_ID_PLAN" value="" />
<input type="hidden" id="SUS_OR_H_EE_BNFT" name="SUS_OR_H_EE_BNFT" value="" />
<input type="hidden" id="SUS_ID_HR" name="SUS_ID_HR" value="" />
<input type="hidden" id="SUS_OR_HR_PERIOD" name="SUS_OR_HR_PERIOD" value="" />
<input type="hidden" id="SUS_DT_START" name="SUS_DT_START" value="" />
<input type="hidden" id="SUS_DT_END" name="SUS_DT_END" value="" />
<input type="hidden" id="SUS_ID_OPTION" name="SUS_ID_OPTION" value="" />
<input type="hidden" id="SUS_ID_COV_CAT" name="SUS_ID_COV_CAT" value="" />
<input type="hidden" id="SUS_ID_PLAN_PERIOD" name="SUS_ID_PLAN_PERIOD" value="" />
</form>
<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
%>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">
<%
int zposicion = 0;
String zposicions = "0";
String zposicion2= "0";
String zposicion3= "0";
String clase = "";
String zsscoCanc="0";
String zsscoBenefs="0";
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<m4:item m4name="<%=zSSE_P_IS_CORE_PLAN%>" m4varname="zCorePlan"/>
<m4:item m4name="<%=zSSE_P_IS_FLEX_PLAN%>" m4varname="zFlexPlan"/>
<m4:item m4name="<%=zSUS_ID_PLAN_TYPE%>" m4varname="zPlanTypeDep"/>
<m4:item m4name="<%=zSUS_ID_COV_CAT%>" m4varname="zIdCovCat"/>
<m4:item  item="SSCO_IND_CANCEL_DISABLED"var="zsscoCanc" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item  item="SSCO_IND_BENEF_DISABLED"var="zsscoBenefs" htmlsafe="true" outputdef="<%=znodo%>"/>
<%

	int  i1 = 0;	
	String zselected1  ="";
	
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	//zposicion = zposicion - zregistroinicial;
 	zposicion2 = String.valueOf(zposicion);
 	zposicion3 = String.valueOf(zposicion-1);	

	if (clase.equals("fuentevalor")){
	//par
	clase = "fuentevalor2"; 
	}else{
	//impar
	clase = "fuentevalor"; 
	 }

	String zSUS_ID_PLAN_PERIOD="";
	String zSUS_DT_START="";	
	String zSUS_P_HR_PERIOD="";	
	String zSUS_ID_PLAN_PERIOD_ANT="";
	String zSUS_DT_START_ANT="";	
	String zSUS_P_HR_PERIOD_ANT="";
	
try {	
	M4Operations t = new M4Operations(request);

	t.moveData(znodo,zmeta4object,znodo,zposicion2);     
    zSUS_ID_PLAN_PERIOD = t.getItem(znodo,zmeta4object,znodo,"","SUS_ID_PLAN_PERIOD");  
    zSUS_DT_START = t.getItem(znodo,zmeta4object,znodo,"","SUS_DT_START_PP"); 
    zSUS_P_HR_PERIOD = t.getItem(znodo,zmeta4object,znodo,"","SUS_OR_HR_PERIOD");  
	
	t.moveData(znodo,zmeta4object,znodo,zposicion3);  
    zSUS_ID_PLAN_PERIOD_ANT = t.getItem(znodo,zmeta4object,znodo,"","SUS_ID_PLAN_PERIOD");  
    zSUS_DT_START_ANT = t.getItem(znodo,zmeta4object,znodo,"","SUS_DT_START_PP"); 	
    zSUS_P_HR_PERIOD_ANT = t.getItem(znodo,zmeta4object,znodo,"","SUS_OR_HR_PERIOD");  
		
 	 }  catch(Exception e) {}

if ((zSUS_P_HR_PERIOD.equals(zSUS_P_HR_PERIOD_ANT)==false) || (zposicion2.equals("0")==true)){
	clase = "fuentevalor2";%>		 
	<tr>
		<td class="tablaestadosceldatitulo" colspan="5" ><m4:label m4name="<%=zSUS_OR_HR_PERIOD%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_OR_HR_PERIOD%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="5" ><m4:label m4name="<%=zSTD_DT_START%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSTD_DT_START%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="7" ><m4:label m4name="<%=zSTD_DT_END%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSTD_DT_END%>" htmlsafe = "true" /></td>
	</tr> 
<%}
if (((zSUS_ID_PLAN_PERIOD.equals(zSUS_ID_PLAN_PERIOD_ANT)==false) || (zSUS_DT_START.equals(zSUS_DT_START_ANT)==false) ) || (zposicion2.equals("0")==true)){	
	clase = "fuentevalor2";	
	if (zposicion > 0) {%>
      </table></div>
  	<%}%>
  		
	<table class="tablasubtitulo" width="100%" cellspacing="0" border="0"> 
		<tr>
			<td class="tablasubtitulo" colspan="5" ><a href="javascript:collapse<%=zposicion%>.slideit()">&nbsp;&nbsp;<img src="/iconos/ic_ord_15_15.gif" alt="<%=TranEss.getProperty("bft_ess.VisAll")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
				&nbsp;<m4:label m4name="<%=zSUS_N_PLAN_PERIOD%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_N_PLAN_PERIOD%>" htmlsafe = "true"/></td>
			<td class="tablasubtitulo" colspan="5" ><m4:label m4name="<%=zSUS_DT_START_PP%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_DT_START_PP%>" htmlsafe = "true"/></td>
			<td class="tablasubtitulo" colspan="7" ><m4:label m4name="<%=zSUS_DT_END_PP%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSUS_DT_END_PP%>" htmlsafe = "true" /></td>	
		</tr>	
	</table>	
	
	<div id="<%=zposicion%>" name="<%=zposicion%>" class="">
  	<script type="text/javascript">
    	document.getElementById('<%=zposicion%>').className="";
      var collapse<%=zposicion%>=new animatedcollapse('<%=zposicion%>', 800,1);
    </script> 
      
    <table class = "tablaestados" width="100%" cellspacing="0" border="0"> 		  
		  <tr>
			  <td class="tablaestadosceldatitulo"></td>
				<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/></td>
				<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/></td>
				<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/></td>
				<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSUS_PRICE%>" htmlsafe = "true"/></td>
				<td class="tablaestadosceldatitulo" colspan="4" ><m4:label m4name="<%=zSUS_ER_CONTR%>" htmlsafe = "true"/></td>
				<td class="tablaestadosceldatitulo" colspan="2" ></td>
		  </tr>	
    	
<%}%>	   
	<tr>	
		<td class="<%=clase%>" width="3%">
		   <%	 if (zCorePlan.equals("Y")) {%>
				<img alt="<%=TranEss.getProperty("bft_ess.HasCorePlan")%>" title="<%=TranEss.getProperty("bft_ess.HasCorePlan")%>" src="/iconos/flecha.gif" /> <%}
			     if (zFlexPlan.equals("Y")) {%>
				<img alt="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" src="/iconos/icono_editar_mss_11_9.gif" />&nbsp; <%}
		   %>
		</td>
		<td class="<%=clase%>"><a title="<%=Tran.getProperty("Label.VerDet")%>" href="javascript:navegar('<m4:item m4name="<%=zSUS_N_PLAN%>" jsafe="true"htmlsafe = "true"/>','<%=zposicion%>');"><m4:item m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/></a>
		<td class="<%=clase%>" colspan="3"><m4:item m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>" colspan="3" ><m4:item m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>" colspan="3"><m4:item m4name="<%=zSUS_PRICE%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>" colspan="4"><m4:item m4name="<%=zSUS_ER_CONTR%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_EC%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>">
			<%if (zPlanTypeDep.equals("001") && (!zIdCovCat.equals("") && !(zIdCovCat==null))) {%>
				<a title="<%=TranEss.getProperty("bft_ess.Depend")%>" href="javascript:navegar_dep('<m4:item m4name="<%=zSUS_ID_PLAN%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_OR_H_EE_BNFT%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_OR_HR_PERIOD%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zDT_START%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_DT_END%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_ID_HR%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_N_PLAN%>" jsafe="true"htmlsafe = "true"/>','<%=zposicion%>','<m4:item m4name="<%=zSUS_ID_OPTION%>" htmlsafe = "true" jsafe="true"/>','<m4:item m4name="<%=zSUS_ID_COV_CAT%>" htmlsafe = "true" jsafe="true"/>','<%=zSUS_ID_PLAN_PERIOD%>','<%=zsscoBenefs%>');"><img alt="<%=TranEss.getProperty("bft_ess.Depend")%>" src="/iconos/revision_colectiva2.gif"/></a>
			<%}%>
		</td>			
		<td class="<%=clase%>">
			<a title="<%=TranEss.getProperty("bft_ess.Cancel")%>" href="javascript:cancelar_bft('<m4:item m4name="<%=zSUS_ID_PLAN%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_OR_H_EE_BNFT%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_OR_HR_PERIOD%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zDT_START%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_DT_END%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_ID_HR%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSUS_N_PLAN%>" jsafe="true"htmlsafe = "true"/>','<%=zposicion%>','<m4:item m4name="<%=zSUS_ID_OPTION%>" htmlsafe = "true" jsafe="true"/>','<m4:item m4name="<%=zSUS_ID_COV_CAT%>" htmlsafe = "true" jsafe="true"/>','<%=zsscoCanc%>');"><img alt="<%=TranEss.getProperty("bft_ess.Cancel")%>" src="/iconos/icono_cancelar_mss_36_36.gif" height="27" width="27"/></a>
		</td>		
	</tr>	
</m4:loop>
	</table></div>	
</table>
<%@ include file="../../sse_generico/francais/generico_ventanas.jsp"%>	
<%
int  zcount1  = 0;
int  zcounti1  = 0;	
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
<br>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">
	<tr class="tablaestadosceldatitulo">
		<td colspan="9"><%=TranEss.getProperty("bft_ess.InfoFamilys")%></td>
	</tr>
<%
int zposicion1 = 0;
String zposicionsd1 = "0";
String zposiciond2= "0";
String zSUS_V_ID_PLAN_D_ANT="";
String zSUS_V_DT_START_PLAN_D_ANT="";	
String zSUS_V_OR_PERIOD_ANT="";
%>
<m4:loop from="<%=zregistroinicials1%>" to="<%=zregistrofinals1%>">
<%
	int zcontrol1 = 0;
	
	zposicionsd1 = m4lix;
	zposicion1 = Integer.valueOf(zposicionsd1).intValue();
 	//zposicion = zposicion - zregistroinicial;
 	zposiciond2 = String.valueOf(zposicion1);

 	zcontrol1 = zposicion1%2;
if (zcontrol1==0){
	//par
	clase = "fuentevalor2"; 
}else{
	//impar
	clase = "fuentevalor"; 
}
%>
<m4:item m4name="<%=zSUS_ID_PLAN_D%>" htmlsafe = "true" m4varname="zSUS_V_ID_PLAN_D"/>	 
<m4:item m4name="<%=zSUS_DT_START_PLAN_D%>" htmlsafe = "true" m4varname="zSUS_V_DT_START_PLAN_D"/>	 	
<m4:item m4name="<%=zSUS_OR_HR_PERIOD_D%>" htmlsafe = "true" m4varname="zSUS_V_OR_PERIOD_D"/>
<m4:item m4name="<%=zSCO_CK_DISCOUNTED%>" m4varname="zFamBon"/>
<m4:item m4name="<%=zSUS_ID_PLAN_TYPE%>" m4varname="zPlanTypeDep"/> 	
<%if ((zSUS_V_OR_PERIOD_D.equals(zSUS_V_OR_PERIOD_ANT)==false) || (zposiciond2.equals("0")==true)){
	clase = "fuentevalor2";%>		 
	<tr>
		<td class="tablaestadosceldatitulo" colspan="2" ><m4:label m4name="<%=zSUS_OR_HR_PERIOD1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_OR_HR_PERIOD1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="2" ><m4:label m4name="<%=zSTD_DT_START1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSTD_DT_START1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSTD_DT_END1%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSTD_DT_END1%>" htmlsafe = "true" /></td>
	</tr> 
<%}
if (((zSUS_V_ID_PLAN_D.equals(zSUS_V_ID_PLAN_D_ANT)==false) || (zSUS_V_DT_START_PLAN_D.equals(zSUS_V_DT_START_PLAN_D_ANT)==false) ) || (zposiciond2.equals("0")==true)){%>	
  	<tr>
		<td class="tablasubtitulo" colspan="2" ><m4:label m4name="<%=zSUS_N_PLAN1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_N_PLAN1%>" htmlsafe = "true"/></td>
		<td class="tablasubtitulo" colspan="2" ><m4:label m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_DT_START_PLAN1%>" htmlsafe = "true"/></td>
		<td class="tablasubtitulo" colspan="4" ><m4:label m4name="<%=zSUS_DT_END_PLAN1%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSUS_DT_END_PLAN1%>" htmlsafe = "true" /></td>
 	</tr>
  	<tr>
		<td class="tablasubtitulo" colspan="2" ><%=TranEss.getProperty("bft_ess.RatesCov")%></td>
		<td class="tablasubtitulo" colspan="2" ><m4:label m4name="<%=zSCO_AMT_DEP_EMP%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSCO_AMT_DEP_EMP%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_EMP%>" htmlsafe="true"/></td>
		<td class="tablasubtitulo" colspan="4" ><m4:label m4name="<%=zSCO_AMT_DEP_LEG%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSCO_AMT_DEP_LEG%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_LEG%>" htmlsafe="true"/></td>
 	</tr>	
	<tr class="tablaestadosceldatitulo">
		<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_GB_NAME1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSUS_N_PLAN1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSUS_N_OPTION1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSUS_N_COV_CAT1%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSUS_P_DT_START%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSUS_P_DT_END%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_CK_DISCOUNTED%>" htmlsafe = "true"/></td>			
	</tr>	
<%}%>			
	<tr>
		<td class="<%=clase%>"><m4:item m4name="<%=zSCO_GB_NAME1%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSUS_N_PLAN1%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSUS_N_OPTION1%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSUS_N_COV_CAT1%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSUS_P_DT_START%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSUS_P_DT_END%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>" width="3%">
	   		<% if (zFamBon.equals("1")) {%>
				<img alt="<%=Tran.getProperty("Label.FamBon")%>" title="<%=Tran.getProperty("Label.FamBon")%>" src="/iconos/icono_peq_seleccionar_ess_11_12.gif" height="11" width="12"  />&nbsp;
			<%}%>	
		</td>			
	</tr>
<%
zSUS_V_ID_PLAN_D_ANT = zSUS_V_ID_PLAN_D;
zSUS_V_DT_START_PLAN_D_ANT = zSUS_V_DT_START_PLAN_D;
zSUS_V_OR_PERIOD_ANT = zSUS_V_OR_PERIOD_D;
%>
</m4:loop>
</table>
<%}%>	
<%}else{%>
<div class="fuentenodatos"><%=TranEss.getProperty("bft_ess.DescNoDataFound1")%></div>
<%}%>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>
</html>
