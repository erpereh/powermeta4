<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>	
<%@ include file="/m4trans/sse_g2/0-sse_bft_trans.jsp"%>
<%
	String clase = "";
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String SSE_P_LIST_POSITION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SSE_P_LIST_POSITION");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
	String vista = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vista");
	if ((vista==null)||(vista.equals(""))){
		vista="1";
	}
	String vCarga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vCarga");
	if ((vCarga==null)||(vCarga.equals(""))){
		vCarga="1";
	}
%>

<%if (vista.equals("0")) {%>
<title><%=TranEss.getProperty("bft_ess.SimulBenef")%></title>
<%}else{%>
<title><%=TranEss.getProperty("bft_ess.SolicBenef")%></title>
<%}%>

<script type="text/javaScript">
function pendientes(ord)
{
	var parametros = new Array("TAG","REC","ACC","NOD");
	var valores = new Array("SSE_BFT_EE_BNFT_ELEC",ord,"BORRAR","SSE_H_EE_IN_BNFT");
	m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}

function verDetalles (vNameBenefit,vPosition,vista,det)
{
	m4valor("oculto","vNameBenefit",vNameBenefit,"set");
	m4valor("oculto","vPosition",vPosition,"set");
	document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7_det" + det + ".jsp?estado=21&vista=" + vista;
	m4submit("oculto");
}

function procesarchks (vista,vCarga)
{
	m4valor("BnftSel","vista",vista,"set");
	m4valor("BnftSel","vCarga",vCarga,"set");
	document.forms["BnftSel"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21";
	m4submit("BnftSel");
}

function enviar(vTipo)
{
	var error = 0;
	var sMessage1 = "";
	var cantChk = 0;
	var cadena = "";
	if (typeof(document.forms['a0']) != "undefined"){
		var numregistros = parseInt(document.forms['a0'].elements[0].name);
		for (var i = 0; i < numregistros; i++){
			var formularioChk = "a" + i;
			var formularioPK = "PK" + i;
			if (document.forms[formularioChk].elements[1].checked == true){
				cantChk = cantChk + 1;
				if (vTipo == 1){
					cadena = cadena + "SSE_P_ID_PLAN=" + document.forms[formularioPK].elements[0].value;
					cadena = cadena + "*SSE_P_OR_H_EE_BNFT=" + document.forms[formularioPK].elements[1].value;
					cadena = cadena + "*SSE_P_ID_HR=" + document.forms[formularioPK].elements[2].value;
					cadena = cadena + "*SSE_P_OR_HR_PERIOD=" + document.forms[formularioPK].elements[3].value + "}";
				}else{
					cadena = cadena + document.forms[formularioChk].elements[1].value + ";";
				}
			} 
		}
	}

	if (vTipo == 2 || vTipo == 3){
		if (vTipo == 2){
			m4valor("BnftSel","vista","1","set");
			m4valor("BnftSel","vCarga","0","set");
			m4valor("BnftSel","SSE_P_LIST_POSITION",cadena,"set");
			document.forms["BnftSel"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21";
			m4submit("BnftSel");
		}else{
			m4valor("BnftSel","vista","0","set");
			m4valor("BnftSel","vCarga","0","set");
			m4valor("BnftSel","SSE_P_LIST_POSITION",cadena,"set");
			document.forms["BnftSel"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21";
			m4submit("BnftSel");
		}
	}else{
		if (cantChk == 0){
			error = 1;
			if (vTipo == 0){
				sMessage = new String(eval("_sl_co_bft_4"));
			}else{
				sMessage = new String(eval("_sl_co_bft_5"));
			}
		}
		if (error == 1){
			alert(sMessage);
			return;
		}else{
			if (vTipo == 0){
				m4valor("BnftSel","vista","0","set");
				m4valor("BnftSel","vCarga","0","set");
				m4valor("BnftSel","SSE_P_LIST_POSITION",cadena,"set");
				document.forms["BnftSel"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7_sim.jsp?estado=21";
				m4submit("BnftSel");
			}else{
				document.forms["NombreFormulario"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7_act.jsp?estado=21";
				m4valor("NombreFormulario","PK_PLAN",cadena,"set");
				m4submit("NombreFormulario");
			}
		}
	}
}
</script>
</head>
<body style="overflow-x:hidden;overflow-y:hidden;">
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
	String zsubsesion = "SSE_BFT_EE_BNFT_ELEC";
	String zmeta4object = "SSE_BFT_EE_BNFT_ELEC";
	String znodo = "M4T_EE_BNFT_ELEC";
	String znodo1 = "SSE_H_EE_IN_BNFT";
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

	String ztipocarga = "";
	if (vCarga.equals("1")){
		ztipocarga = "ALL";
	}else{
		ztipocarga = "SSE";
	}
	
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[*]";
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zmove1 = znodo1 + ":" + znodo1 + "[*]";
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	
	//String zSUS_ID_PLAN_PERIOD = zcomun + "SUS_ID_PLAN_PERIOD";
	String zSUS_N_PLAN_PERIOD = zcomun + "SUS_N_PLAN_PERIOD";
	String zDT_START = zcomun + "SUS_DT_START_PP";
	String zSUS_DT_END = zcomun + "SUS_DT_END_PP";
	String zSUS_ID_OPTION = zcomun + "SUS_ID_OPTION";
	String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
	String zSUS_COVERAGE = zcomun + "SUS_COVERAGE";
	String zSUS_ID_COV_CAT = zcomun + "SUS_ID_COV_CAT";
	String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
	String zSUS_PCT_PRICE = zcomun + "SUS_PCT_PRICE";
	String zSUS_TAX = zcomun + "SUS_TAX";
	String zSUS_PRICE = zcomun + "SUS_PRICE";
	String zSUS_CREDIT = zcomun + "SUS_CREDIT";
	String zSUS_COMMENT = zcomun + "SUS_COMMENT";
	String zSCO_HTTP_PATH = zcomun + "SCO_HTTP_PATH";
	String zSTD_N_EXT_ORG = zcomun + "STD_N_EXT_ORG";
	String zSUS_ID_PLAN = zcomun + "SUS_ID_PLAN";
	String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
	String zSUS_OR_BNFT_ELECT = zcomun + "SUS_OR_BNFT_ELECT";
	String zSUS_OR_HR_PERIOD = zcomun + "SUS_OR_HR_PERIOD";
	String zSUS_ID_HR = zcomun + "SUS_ID_HR";
	String zSUS_ER_CONTR = zcomun + "SUS_ER_CONTR";
	String zSUS_CUR_DATE = zcomun + "SUS_CUR_DATE";
	String zSUS_EX_TYPE = zcomun + "SUS_EX_TYPE";
	String zSUS_ID_CURRENCY = zcomun + "SUS_ID_CURRENCY";
	String zSTD_N_COMP_BASIS = zcomun + "STD_N_COMP_BASIS";
	String zSTD_N_COMP_BASIS_TP = zcomun + "STD_N_COMP_BASIS_TP";
	String zSTD_N_COMP_BASIS_EC = zcomun + "STD_N_COMP_BASIS_EC";
	String zSTD_N_COMP_BASIS_CR = zcomun + "STD_N_COMP_BASIS_CR";
	String zSSE_P_IS_CORE_PLAN = zcomun + "SSE_P_IS_CORE_PLAN";
	String zSSE_P_IS_FLEX_PLAN = zcomun + "SUS_FLEX_PLAN";
	String zSTD_DT_START = zcomun + "STD_DT_START";
	String zSTD_DT_END = zcomun + "STD_DT_END";	
	String zSUS_FLAT_AMT1 = zcomun + "SUS_FLAT_AMT1";
	String zSCO_ID_CURRENCY = zcomun + "SCO_ID_CURRENCY";
	String zSUS_ID_PLAN_TYPE = zcomun + "SUS_ID_PLAN_TYPE";
	String zSUS_N_PLAN_TYPE = zcomun + "SUS_N_PLAN_TYPE";
	
	String zSSE_N_PLAN = zcomun1 + "SUS_N_PLAN";
	String zSSE_N_PLAN_PERIOD = zcomun1 + "SUS_N_PLAN_PERIOD";
	String zSSE_DT_START = zcomun1 + "SSE_DT_START";
	String zSSE_DT_END = zcomun1 + "SSE_DT_END";
	String zSSE_PRICE = zcomun1 + "SSE_PRICE";
	String zSSE_HTTP_PATH = zcomun1 + "SCO_HTTP_PATH";
	String zSSE_N_EXT_ORG = zcomun1 + "STD_N_EXT_ORG";
	String zSSE_ER_CONTR = zcomun1 + "SSE_ER_CONTR";
	String zN_ACCION = zcomun1 + "N_ACCION";
	String zORDINAL = zcomun1 + "ORDINAL";
	String zSSE_CUR_DATE = zcomun1 + "SSE_CUR_DATE";
	String zSSE_EX_TYPE = zcomun1 + "SSE_EX_TYPE";
	String zSSE_ID_CURRENCY = zcomun1 + "SSE_ID_CURRENCY";
	String zSSE_N_COMP_BASIS = zcomun1 + "STD_N_COMP_BASIS";
	String zSSE_N_COMP_BASIS_TP = zcomun1 + "STD_N_COMP_BASIS_3";
	String zSSE_N_COMP_BASIS_EC = zcomun1 + "STD_N_COMP_BASIS_2";
	String zSSE_N_COMP_BASIS_CR = zcomun1 + "STD_N_COMP_BASIS_1";
	String zSSE_N_OPTION = zcomun1 + "SUS_N_OPTION";
	
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
int  zcount  = 0;
int  zcounti  = 0;
try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<%if (vista.equals("0")) {%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.SimulBenef")%></td>
</tr>
<tr>
	<td><img alt="<%=TranEss.getProperty("bft_ess.SimulBenef")%>" title="<%=TranEss.getProperty("bft_ess.SimulBenef")%>" src="/iconos/noname_pregunta_47_125.gif" width="100" height="100" /></td>
	<td>
		<div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.DescSimulBenef")%></div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("bft_ess.Benefits")%>" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=TranEss.getProperty("bft_ess.Benefits")%></a></li>
			<li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>" href="javascript:enviar('2');"><%=TranEss.getProperty("bft_ess.SolicBenef")%></a></li>
		</ul>
	</td>
</tr>
</table>
<%}else{%>
<table width="100%">
<tr>
	<td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.SolicBenef")%></td>
</tr>
<tr>
	<td><img alt="<%=TranEss.getProperty("bft_ess.SolicBenef")%>" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>" src="/iconos/noname_pregunta_47_125.gif" width="82" height="100" /></td>
	<td>
		<div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.DescSolicBenef")%></div>
		<ul class="listaenlace">
			<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=TranEss.getProperty("bft_ess.Benefits")%></a></li>
			<li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("bft_ess.SimulBenef")%>"  href="javascript:enviar('3');"><%=TranEss.getProperty("bft_ess.SimulBenef")%></a></li>
		</ul>
	</td>
</tr>
</table>
<%}%>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="vNameBenefit" name="vNameBenefit" value="" />
<input type="hidden" id="vPosition" name="vPosition" value="" />
</form>
<form action="  " method="post" name="BnftSel" id="BnftSel">
<input type="hidden" id="vista" name="vista" value="" />
<input type="hidden" id="vCarga" name="vCarga" value="" />
<input type="hidden" id="SSE_P_LIST_POSITION" name="SSE_P_LIST_POSITION" value="" />
</form>
<%if (zcounti > 0) {
String lista = ";" + SSE_P_LIST_POSITION;%>
<table class="tablaestados" width="100%" cellspacing="0" border="0">
<%
String zregistroinicials = "0";
String zregistrofinals = String.valueOf(zcounti - 1);
String zposicions = "0";
String zposicion2= "0";
String zposicion3= "0";
int zposicion = 0;
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<m4:item m4name="<%=zSSE_P_IS_CORE_PLAN%>" m4varname="zCorePlan"/>
<m4:item m4name="<%=zSSE_P_IS_FLEX_PLAN%>" m4varname="zFlexPlan"/>
<m4:item m4name="<%=zSUS_ID_PLAN_TYPE%>" m4varname="zPlanTypeDep"/>
<%
	int  i1 = 0;	
	int  ppdif = 0;	
	String chg_plan_per = "";
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
	
	String zSUS_P_ID_PLAN_TYPE="";
	String zSUS_P_ID_PLAN_TYPE_ANT="";
	
try {	
	M4Operations t = new M4Operations(request);

	t.moveData(znodo,zmeta4object,znodo,zposicion2);     
    zSUS_ID_PLAN_PERIOD = t.getItem(znodo,zmeta4object,znodo,"","SUS_ID_PLAN_PERIOD");  
    zSUS_DT_START = t.getItem(znodo,zmeta4object,znodo,"","SUS_DT_START_PP"); 
    zSUS_P_HR_PERIOD = t.getItem(znodo,zmeta4object,znodo,"","SUS_OR_HR_PERIOD");  
    zSUS_P_ID_PLAN_TYPE = t.getItem(znodo,zmeta4object,znodo,"","SUS_ID_PLAN_TYPE");  
	
	t.moveData(znodo,zmeta4object,znodo,zposicion3);  
    zSUS_ID_PLAN_PERIOD_ANT = t.getItem(znodo,zmeta4object,znodo,"","SUS_ID_PLAN_PERIOD");  
    zSUS_DT_START_ANT = t.getItem(znodo,zmeta4object,znodo,"","SUS_DT_START_PP"); 	
    zSUS_P_HR_PERIOD_ANT = t.getItem(znodo,zmeta4object,znodo,"","SUS_OR_HR_PERIOD");  
    zSUS_P_ID_PLAN_TYPE_ANT = t.getItem(znodo,zmeta4object,znodo,"","SUS_ID_PLAN_TYPE");  
		
 	 }  catch(Exception e) {}

if ((zSUS_P_HR_PERIOD.equals(zSUS_P_HR_PERIOD_ANT)==false) || (zposicion2.equals("0")==true)){
	clase = "fuentevalor2";%>		 
	<tr>
		<td class="tablaestadosceldatitulo" colspan="7" ><m4:label m4name="<%=zSUS_OR_HR_PERIOD%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_OR_HR_PERIOD%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSTD_DT_START%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSTD_DT_START%>" htmlsafe = "true"/></td>
		<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSTD_DT_END%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSTD_DT_END%>" htmlsafe = "true" /></td>
		<td class="tablaestadosceldatitulo"></td>		
	</tr> 
<%}
if (((zSUS_ID_PLAN_PERIOD.equals(zSUS_ID_PLAN_PERIOD_ANT)==false) || (zSUS_DT_START.equals(zSUS_DT_START_ANT)==false) ) || (zposicion2.equals("0")==true)){	
  clase = "fuentevalor2";  
	chg_plan_per = "Y";
  	if (zposicion > 0) {
			ppdif = 1;%>
      </table></div>
  	<%}%>	
  	<table class="tablaestados" width="100%" cellspacing="0" border="0"> 		
		  <tr>    
				<td class="tablaestadosceldatitulo" colspan="7" ><m4:label m4name="<%=zSUS_N_PLAN_PERIOD%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_N_PLAN_PERIOD%>" htmlsafe = "true"/></td>
				<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zDT_START%>" htmlsafe = "true"/>: <m4:item m4name="<%=zDT_START%>" htmlsafe = "true"/></td>
				<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSUS_DT_END%>" htmlsafe = "true"/> : <m4:item m4name="<%=zSUS_DT_END%>" htmlsafe = "true" /></td>
				<td class="tablaestadosceldatitulo"></td>
		  </tr>
		</table>	
<%}
else{
	chg_plan_per = "N";
	}
if ((zSUS_P_ID_PLAN_TYPE.equals(zSUS_P_ID_PLAN_TYPE_ANT)==false) || (zposicion2.equals("0")==true) || (chg_plan_per.equals("Y")==true)){
	clase = "fuentevalor2";		
	if (ppdif == 0) {%>
      </table></div>
    <%}else{
    	ppdif = 0;}%>
  		
	<table class="tablaestados" width="100%" cellspacing="0" border="0"> 
		<tr>
			<td class="tablaestadosceldatitulo" colspan="8" ><a href="javascript:collapse<%=zposicion%>.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=TranEss.getProperty("bft_ess.VisAll")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>			
				&nbsp;&nbsp;<m4:label m4name="<%=zSUS_N_PLAN_TYPE%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSUS_N_PLAN_TYPE%>" htmlsafe = "true"/></td>
			<td class="tablaestadosceldatitulo" colspan="6"></td>		
		</tr>	
	</table>	
	
			<div id="<%=zposicion%>" name="<%=zposicion%>" class="">
      <script type="text/javascript">
        document.getElementById('<%=zposicion%>').className="";
        var collapse<%=zposicion%>=new animatedcollapse('<%=zposicion%>', 800,1);
      </script> 
      
      <table class = "tablaestados" width="100%" cellspacing="0" border="0"> 		    	    
			  <tr>
					<td class="tablasubtitulo" width="8%" colspan="2" ><%=TranEss.getProperty("bft_ess.ColSelection")%></td>
					<td class="tablasubtitulo" width="20%" ><m4:label m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/></td>
					<td class="tablasubtitulo" width="20%" ><m4:label m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/></td>
					<td class="tablasubtitulo" width="20%" ><m4:label m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/></td>
					<td class="tablasubtitulo" width="16%" ><m4:label m4name="<%=zSUS_PRICE%>" htmlsafe = "true"/></td>
					<td class="tablasubtitulo" width="16%" ><m4:label m4name="<%=zSUS_ER_CONTR%>" htmlsafe = "true"/></td>
			  </tr>	 	  
<%}%>
  <tr>  
  	 <form name="a<%=zposicion%>" id="a<%=zposicion%>">
		<input type="hidden" id="cant<%=zposicion%>" name="<%=zcounti%>" value="" />
		<td class="<%=clase%>" width="4%">&nbsp;&nbsp;&nbsp;&nbsp;
			<%
				String checked = "";
				String disabled = "";
				String cadena = ";" + String.valueOf(zposicion) + ";";
				int chk = lista.indexOf(cadena,0);
				if (chk >= 0) {
					checked = "checked";
				}
				if (zCorePlan.equals("Y")) {
					disabled = "disabled";
					checked = "checked";
				}
			%>
			<input <%=disabled%> type="Checkbox" id="chkBnft" name="chkBnft" value="<%=zposicion%>" <%=checked%>/>
		</td>
	  </form>
	<td class="<%=clase%>" width="4%">
	   <%	 if (zCorePlan.equals("Y")) {%>
			<img alt="<%=TranEss.getProperty("bft_ess.HasCorePlan")%>" title="<%=TranEss.getProperty("bft_ess.HasCorePlan")%>" src="/iconos/flecha.gif" /> <%}
			 if (zFlexPlan.equals("Y")) {%>
			<img alt="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" src="/iconos/icono_editar_mss_11_9.gif" /> <%}
		%>	
	</td>
	<td class="<%=clase%>" width="20%" ><a title="<%=Tran.getProperty("Label.VerDet")%>" href="javascript:verDetalles('<m4:item m4name="<%=zSUS_N_PLAN%>" jsafe="true" htmlsafe = "true"/>','<%=zposicion%>','<%=vista%>','');"><m4:item m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/></a></td>
	<td class="<%=clase%>" width="20%" ><m4:item m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>" width="20%" ><m4:item m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/></td>
	<td class="<%=clase%>" width="16%" ><m4:item m4name="<%=zSUS_PRICE%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS%>" htmlsafe = "true"/></td>	
	<td class="<%=clase%>" width="16%" ><m4:item m4name="<%=zSUS_ER_CONTR%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_EC%>" htmlsafe = "true"/> </td>
  </tr>
<form name="PK<%=zposicion%>" id="PK<%=zposicion%>">
<input type="hidden" id="SSE_P_ID_PLAN" name="SSE_P_ID_PLAN" value="<m4:item m4name="<%=zSUS_ID_PLAN%>" htmlsafe = "true"/>" />
<input type="hidden" id="SSE_P_OR_H_EE_BNFT" name="SSE_P_OR_H_EE_BNFT" value="<m4:item m4name="<%=zSUS_OR_BNFT_ELECT%>" htmlsafe = "true"/>" />
<input type="hidden" id="SSE_P_ID_HR" name="SSE_P_ID_HR" value="<m4:item m4name="<%=zSUS_ID_HR%>" htmlsafe = "true"/>" />
<input type="hidden" id="SSE_P_OR_HR_PERIOD" name="SSE_P_OR_HR_PERIOD" value="<m4:item m4name="<%=zSUS_OR_HR_PERIOD%>" htmlsafe = "true"/>" />
</form>
</m4:loop>	
	</table></div>	
	<div class="fuenteboton">
	<tr>
		<td class="fuenteboton" colspan="14">
<%if (vista.equals("0")) {%>
			<a href="javascript:enviar('0');" title="<%=Tran.getProperty("Button.SimulBenefit")%>">
				<img alt="<%=Tran.getProperty("Button.SimulBenefit")%>"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" />
			</a>
<%}else{%>
			<a href="javascript:enviar('1')" title="<%=Tran.getProperty("Button.Send")%>">
				<img id="<%=Tran.getProperty("Button.Send")%>" alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
			</a>
<%}%>
		</td>
	</tr>
	</div>	
</table>
<%}else{%>
<div class="fuentenodatos"><%=TranEss.getProperty("bft_ess.DescNoDataFound2")%></div>
<%}%>
</form>
<form action=" " method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="<%=zmeta4object%>" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="<%=znodo1%>" />
<input type="hidden" id="PK_PLAN" name="PK_PLAN" value="" />
</form>
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
%>
<table class="tablaestados" width="100%" cellspacing="0">
	<tr class="tablaestadosceldatitulo">
			<%=TranEss.getProperty("bft_ess.PendBenefits")%> 
	</tr>
	<tr class="tablaestadosceldatitulo">
		<td>&nbsp;</td>
		<td><m4:label m4name="<%=zSSE_N_PLAN%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_N_OPTION%>" htmlsafe = "true"/></td>
		<td><m4:label m4name="<%=zSSE_N_PLAN_PERIOD%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_DT_START%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_DT_END%>" htmlsafe="true"/></td>
		<td><m4:label m4name="<%=zSSE_PRICE%>" htmlsafe="true"/></td>
		<td>&nbsp;</td>
	</tr>
<%
String zregistroinicials1 = "0";
String zregistrofinals1 = String.valueOf(zcounti1 - 1);
String zposicions1 = "0";
int zcontrol1 = 0;
int zposicion1 = 0;
%>
<m4:loop from="<%=zregistroinicials1%>" to="<%=zregistrofinals1%>">
<%
	zposicions1 = m4lix;
	zposicion1 = Integer.valueOf(zposicions1).intValue();
 	zcontrol1 = zposicion1%2;
if (zcontrol1==0){
	//par
	clase = "fuentevalor"; 
}else{
	//impar
	clase = "fuentevalor2"; 
	 }
%>
	<tr>
		<td class="<%=clase%>"><m4:item m4name="<%=zN_ACCION%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><a title="<%=Tran.getProperty("Label.VerDet")%>" href="javascript:verDetalles('<m4:item m4name="<%=zSSE_N_PLAN%>" jsafe="true" htmlsafe = "true"/>','<%=zposicion1%>','<%=vista%>','2');"><m4:item m4name="<%=zSSE_N_PLAN%>" htmlsafe = "true"/></a></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_N_OPTION%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_N_PLAN_PERIOD%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_DT_START%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_DT_END%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>"><m4:item m4name="<%=zSSE_PRICE%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSSE_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSSE_N_COMP_BASIS%>" htmlsafe = "true"/></td>
		<td class="<%=clase%>">
			<a title="<%=Tran.getProperty("Button.Delete")%>"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
				<img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  />
			</a>
		</td>
	</tr>
</m4:loop>
</table>
<%}else{%>
<div class="fuentenodatos"><%=TranEss.getProperty("bft_ess.DescNoDataFound3")%></div>
<%}%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
<m4:endpage/>
</body>
</html>