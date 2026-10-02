<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script> 
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>

<title><%=TranEss.getProperty("bft_ess.Benefits")%></title>

<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String vNameBenefit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vNameBenefit");
  String vPosition = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vPosition");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
%>
<script>
function navegar_dep (vPlan,vOrPlan,vOrPeriod,vDtStart,vDtEnd,vIdHr,vNameBenefit,vPosition)
{
  m4valor("DEP","SUS_ID_PLAN",vPlan,"set");
  m4valor("DEP","SUS_OR_H_EE_BNFT",vOrPlan,"set");
  m4valor("DEP","SUS_ID_HR",vIdHr,"set");
  m4valor("DEP","SUS_OR_HR_PERIOD",vOrPeriod,"set");
  m4valor("DEP","SUS_DT_START",vDtStart,"set");
  m4valor("DEP","SUS_DT_END",vDtEnd,"set");
  m4valor("DEP","vNameBenefit",vNameBenefit,"set");
  m4valor("DEP","vPosition",vPosition,"set");
  document.forms["DEP"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p8.jsp?estado=21";
  m4submit("DEP");
}

function enviar ()
{
  document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6_act.jsp?estado=21";
  m4submit("oculto");
}
</script>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
  String zsubsesion = "SSE_BFT_H_EE_IN_BNFT";
  String zmeta4object = "SSE_BFT_H_EE_IN_BNFT";

  String znodo = "M4T_H_EE_IN_BNFT";
  String zoutputdef = zsubsesion + "!" + znodo + "[" + vPosition + "]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[" + vPosition + "]" + ".";
  String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo + ".SSE_LOAD_FAMILY";
  String zmetodoProveedor = "PROV:" + zsubsesion + "!" + znodo + ".SSE_FILL_TPAS";
    
  String znodo1 = "M4T_DEP_BENE_COV";
  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
  String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
  String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]"; 
  
  String znodo2 = "M4T_BFT_DEP_PLAN";
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
  String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
  String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";  
  String scountM4T_BFT_DEP_PLAN="";
    
  String znodo3 = "SCO_H_BN_EMP_CST";
  String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
  String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
  String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";  
  
  String znodo4 = "SCO_H_BN_DEP_CST";
  String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
  String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
  String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";  
  
  String zSUS_ID_PLAN_PERIOD = zcomun + "SUS_ID_PLAN_PERIOD";
  String zSUS_N_PLAN_PERIOD = zcomun + "SUS_N_PLAN_PERIOD";
  String zSUS_DT_START = zcomun + "SUS_DT_START";
  String zSUS_DT_END = zcomun + "SUS_DT_END";
  String zSUS_DT_ELECT = zcomun + "SUS_DT_ELECT";
  String zSUS_ID_OPTION = zcomun + "SUS_ID_OPTION";
  String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
  String zSUS_COVERAGE = zcomun + "SUS_COVERAGE";
  String zSUS_ID_COV_CAT = zcomun + "SUS_ID_COV_CAT";
  String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
  String zSUS_PCT_PRICE = zcomun + "SUS_PCT_PRICE";
  String zSUS_TAX = zcomun + "SUS_TAX";
  String zSUS_TAX_1 = zcomun + "SUS_TAX_1";
  String zSUS_TAX_ELCT_D = zcomun + "SUS_TAX_ELCT_D";
  String zSUS_PRICE = zcomun + "SUS_PRICE";
  String zSUS_CREDIT = zcomun + "SUS_CREDIT";
  String zSTD_ID_COMP_BASIS = zcomun + "STD_ID_COMP_BASIS";
  String zSTD_ID_COMP_BASIS_C = zcomun + "STD_ID_COMP_BASIS_C";
  String zSTD_ID_COMP_BASIS_W = zcomun + "STD_ID_COMP_BASIS_W";
  String zSTD_N_COMP_BASIS = zcomun + "STD_N_COMP_BASIS";
  String zSTD_N_COMP_BASIS_EC = zcomun + "STD_N_COMP_BASIS_EC";
  String zSTD_N_COMP_BASIS_TP = zcomun + "STD_N_COMP_BASIS_TP";
  String zSTD_N_COMP_BASIS_CR = zcomun + "STD_N_COMP_BASIS_CR";
  String zSTD_N_COMP_BASIS_EMP = zcomun + "STD_N_COMP_BASIS_EMP";
  String zSTD_N_COMP_BASIS_LEG = zcomun + "STD_N_COMP_BASIS_LEG";   
  String zSUS_COMMENT = zcomun + "SUS_COMMENT";
  String zSCO_HTTP_PATH = zcomun + "SCO_HTTP_PATH";
  String zSTD_N_EXT_ORG = zcomun + "STD_N_EXT_ORG";
  String zSUS_ID_PLAN = zcomun + "SUS_ID_PLAN";
  String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
  String zSUS_DT_START_PLAN = zcomun + "SUS_DT_START_PLAN";
  String zSUS_DT_END_PLAN = zcomun + "SUS_DT_END_PLAN";
  String zSUS_ER_CONTR = zcomun + "SUS_ER_CONTR";
  String zSUS_OR_HR_PERIOD = zcomun + "SUS_OR_HR_PERIOD";
  String zSUS_OR_H_EE_BNFT = zcomun + "SUS_OR_H_EE_BNFT";
  String zSUS_ID_HR = zcomun + "SUS_ID_HR";
  String zSUS_ID_PLAN_TYPE = zcomun + "SUS_ID_PLAN_TYPE";
  String zSUS_CUR_DATE = zcomun + "SUS_CUR_DATE";
  String zSUS_EX_TYPE = zcomun + "SUS_EX_TYPE";
  String zSUS_ID_CURRENCY = zcomun + "SUS_ID_CURRENCY";
  String zSUS_WEB_ADD_DESC = zcomun + "SUS_WEB_ADD_DESC";
  
  String zSCO_ID_DOC = zcomun + "SCO_ID_DOC"; 
  String zSCO_ID_DOC_OPT = zcomun + "SCO_ID_DOC_1"; 
  
  String zSCO_DETAIL_DOC = zcomun + "SCO_DETAIL_DOC"; 
  String zSSE_P_IS_FLEX_PLAN = zcomun + "SUS_FLEX_PLAN";
  String zSCO_AMT_DEP_EMP = zcomun + "SCO_AMT_DEP_EMP"; 
  String zSCO_AMT_DEP_LEG = zcomun + "SCO_AMT_DEP_LEG";   
  String zSTD_ID_COMP_D_EMP = zcomun + "STD_ID_COMP_D_EMP"; 
  String zSTD_ID_COMP_D_LEG = zcomun + "STD_ID_COMP_D_LEG";   
  String zSUS_MAX_COV = zcomun + "SUS_MAX_COV"; 
  String zSUS_FLAT_AMT1 = zcomun + "SUS_FLAT_AMT1";
  String zSCO_ID_CURRENCY = zcomun + "SCO_ID_CURRENCY";
    
  String zSCO_GB_NAME1 = zcomun1 + "SCO_GB_NAME";
  String zSUS_N_OPTION1 = zcomun1 + "SUS_N_OPTION";
  String zSUS_DT_START_PLAN1 = zcomun1 + "SUS_DT_START_PLAN";
  String zSUS_DT_END_PLAN1 = zcomun1 + "SUS_DT_END_PLAN";
  String zSUS_N_COV_CAT1 = zcomun1 + "SUS_N_COV_CAT";
  String zSUS_P_DT_START = zcomun1 + "SUS_P_DT_START";
  String zSUS_P_DT_END = zcomun1 + "SUS_P_DT_END";
  String zSCO_CK_DISCOUNTED = zcomun1 + "SCO_CK_DISCOUNTED";
  String zSUS_FLAT_AMT1_1 = zcomun + "SUS_FLAT_AMT1";
  String zSCO_ID_CURRENCY1 = zcomun + "SCO_ID_CURRENCY";  
  
  String zSTD_N_DEP_TYPE = zcomun2 + "STD_N_ACT_DEP_TYPE";
  String zSUS_NUM_SUBVEN = zcomun2 + "SUS_NUM_SUBVEN";    
  String zSCO_AMT_DEP_EMP1 = zcomun2 + "SCO_AMT_DEP_EMP"; 
  String zSCO_AMT_DEP_LEG1 = zcomun2 + "SCO_AMT_DEP_LEG";   
  String zSCO_N_COMP_EMP = zcomun2 + "SCO_N_COMP_EMP";  
  String zSCO_N_COMP_LEG = zcomun2 + "SCO_N_COMP_LEG";
  String zSCO_P_DEP_COST = zcomun2 + "SCO_P_DEP_COST";    
  String zSCO_P_DEP_CANT = zcomun2 + "SCO_P_DEP_CANT";    

//Costes Empleado 
  String zSCO_DT_START3 = zcomun3 + "SCO_DT_START";
  String zSCO_DT_END3 = zcomun3 + "SCO_DT_END";
  String zSUS_PRICE3 = zcomun3 + "SUS_PRICE";
  String zSUS_ER_CONTR3 = zcomun3 + "SUS_ER_CONTR";
  String zSTD_N_COMP_BASIS3 = zcomun3 + "STD_N_COMP_BASIS";
  String zSTD_N_COMP_BASIS_EC3 = zcomun3 + "STD_N_COMP_BASIS_EC";
  String zSUS_ID_CURRENCY3 = zcomun3 + "SUS_ID_CURRENCY";

//Costes beneficiarios  
  String zSCO_DT_START4 = zcomun4 + "SCO_DT_START";
  String zSCO_DT_END4 = zcomun4 + "SCO_DT_END";
  String zSCO_AMT_DEP_EMP4 = zcomun4 + "SCO_AMT_DEP_EMP"; 
  String zSCO_AMT_DEP_LEG4 = zcomun4 + "SCO_AMT_DEP_LEG";   
  String zSTD_N_COMP_BASIS_EMP4 = zcomun4 + "STD_N_COMP_BASIS_EMP";
  String zSTD_N_COMP_BASIS_LEG4 = zcomun4 + "STD_N_COMP_BASIS_LEG";   
  String zSUS_ID_CURRENCY4 = zcomun4 + "SUS_ID_CURRENCY";
  
//Estos campos no se usan por ahora
  String zSUS_CK_MODIFY = zcomun + "SUS_CK_MODIFY";
  String zSUS_DT_MODIFY = zcomun + "SUS_DT_MODIFY";
  String zSUS_ID_ARREAR = zcomun + "SUS_ID_ARREAR";
  String zSUS_ID_COMP_BASE = zcomun + "SUS_ID_COMP_BASE";
  String zSUS_ID_DEDUCT = zcomun + "SUS_ID_DEDUCT";
  String zSUS_ID_DEDUCTION = zcomun + "SUS_ID_DEDUCTION";
  String zSUS_INCOME_W = zcomun + "SUS_INCOME_W";
  String zSUS_MAIN_RL_DEDUC = zcomun + "SUS_MAIN_RL_DEDUC";
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
  

  String zSUS_MAX_COV1 = zcomun + "SUS_MAX_COV1";
  String zSUS_MIN_COV1 = zcomun + "SUS_MIN_COV1"; 
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_ID_POSITION" value="<%=vPosition%>"/></m4:exec>
<m4:exec m4method="<%=zmetodoProveedor%>"><m4:param name="ARG_ID_POSITION" value="<%=vPosition%>"/></m4:exec>
<m4:exec node="<%=znodo2%>" alias="countM4T_BFT_DEP_PLAN" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>  
<m4:outputexec var="scountM4T_BFT_DEP_PLAN" alias="countM4T_BFT_DEP_PLAN"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<% 
int icountM4T_BFT_DEP_PLAN=0;
String zmoves=znodo2 + ":" + znodo2 ;
String zaliasEMP="";
String zaliasLEG="";
int h = 0;
  try {
    icountM4T_BFT_DEP_PLAN = Integer.parseInt(scountM4T_BFT_DEP_PLAN); 
    for (h = 0; h < icountM4T_BFT_DEP_PLAN; h++){
      zmoves=znodo2 + ":" + znodo2 +"["+String.valueOf(h)+"]";
      zaliasEMP="SSE_BNFT_DEP_EMP"+String.valueOf(h);
      zaliasLEG="SSE_BNFT_DEP_LEG"+String.valueOf(h);
    %>
      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
      <m4:outputdef m4alias="<%=zaliasEMP%>"><m4:param name="m4name0" value="SSE_BFT_H_EE_IN_BNFT!SSE_BNFT_DEP_EMP[*]"/></m4:outputdef>
      <m4:outputdef m4alias="<%=zaliasLEG%>"><m4:param name="m4name0" value="SSE_BFT_H_EE_IN_BNFT!SSE_BNFT_DEP_LEG[*]"/></m4:outputdef>
      <%
    }
  } catch(Exception e) {}
%>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
int  zcount1  = 0;
int  zcounti1  = 0; 
try {
  M4Operations m = new M4Operations(request);
  zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
  zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
} catch(Exception e) {}
String  zcountv1 = String.valueOf(zcounti1);
%>
<form action="  " method="post" name="DEP" id="DEP">
<input type="hidden" id="SUS_ID_PLAN" name="SUS_ID_PLAN" value="" />
<input type="hidden" id="SUS_OR_H_EE_BNFT" name="SUS_OR_H_EE_BNFT" value="" />
<input type="hidden" id="SUS_ID_HR" name="SUS_ID_HR" value="" />
<input type="hidden" id="SUS_OR_HR_PERIOD" name="SUS_OR_HR_PERIOD" value="" />
<input type="hidden" id="SUS_DT_START" name="SUS_DT_START" value="" />
<input type="hidden" id="SUS_DT_END" name="SUS_DT_END" value="" />
<input type="hidden" id="vNameBenefit" name="vNameBenefit" value="" />
<input type="hidden" id="vPosition" name="vPosition" value="" />
</form>
<table width="100%">
<m4:item m4name="<%=zSSE_P_IS_FLEX_PLAN%>" m4varname="zFlexPlan"/>
<m4:item m4name="<%=zSCO_ID_DOC%>" m4varname="zIdDoc" htmlsafe = "true"/>
<%if (!zIdDoc.equals("")) {zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDoc);}%>
<m4:item m4name="<%=zSCO_ID_DOC_OPT%>" m4varname="zIdDocOpt" htmlsafe = "true"/>
<%if (!zIdDocOpt.equals("")) {zIdDocOpt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDocOpt);}%>
<m4:item m4name="<%=zSUS_ID_COV_CAT%>" m4varname="zCovCat"/>
<m4:item m4name="<%=zSUS_ID_PLAN_TYPE%>" m4varname="zPlanTypeDep"/>
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
      <li><a class="enlacefuncional" tabindex="3" title="<%=TranEss.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=TranEss.getProperty("bft_ess.Benefits")%></a></li>
      <m4:item m4name="<%=zSUS_ID_PLAN_TYPE%>" m4varname="zPlanType"/>

    </ul>
  </td>
</tr>
</table>
<!-- Comprobamos si hay registros. Si no hay ninguno aparece un mensaje -->
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="vPosition" name="vPosition" value="<%=vPosition%>" />
<input type="hidden" id="SCO_ID_DOC" name="SCO_ID_DOC" value="<m4:item m4name="<%=zSCO_ID_DOC%>" htmlsafe = "true"/>" />
<input type="hidden" id="SCO_ID_DOC_OPT" name="SCO_ID_DOC_OPT" value="<m4:item m4name="<%=zSCO_ID_DOC_OPT%>" htmlsafe = "true"/>" />
<table class="tablaestados" width="100%" cellspacing="0" border="0" >
  <tr>
    <td class="fuenteleyenda_big" colspan="2"><%=vNameBenefit%></td>
    <td class="fuenteleyenda_big" align="right">
    <%if (!zIdDoc.equals("")) {%>
      <a href="javascript:ssco_manage_document('view','oculto','SCO_ID_DOC');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/images/ic_executed_items_36_36_100.gif" width="20" height="20" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
    <%}%>   
    </td>                   
  </tr>
  <tr>
    <td class="tablaestadosceldatitulo"><%=TranEss.getProperty("bft_ess.InfoBenefit")%></td>
    <td class="tablaestadosceldatitulo"><%=TranEss.getProperty("bft_ess.VigPlan")%>:&nbsp;&nbsp;<m4:item m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/> - <m4:item m4name="<%=zSUS_DT_END%>" htmlsafe = "true" /></td>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr>
    <td colspan="3" class="fuentevalor">
      <table class="tablaestados" width="100%">
        <tr>
          <td class="fuentevalor" colspan="2">
          <%if (!zIdDocOpt.equals("")) { %>
            <a href="javascript:ssco_manage_document('view','oculto','SCO_ID_DOC_OPT');"><img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/images/ic_executed_items_36_36_100.gif" width="20" height="20" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a>
          <%}%> 
          <%=TranEss.getProperty("bft_ess.ColOpt")%>:&nbsp;<m4:item m4name="<%=zSUS_N_OPTION%>" htmlsafe="true"/></td>
          <%if (zPlanTypeDep.equals("002")) {%><td class="fuentevalor" colspan="1" width="55%"><%=TranEss.getProperty("bft_ess.ColAmountFix")%>:&nbsp;
          <m4:item m4name="<%=zSUS_FLAT_AMT1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSCO_ID_CURRENCY%>" htmlsafe = "true"/><br>
          <%=TranEss.getProperty("bft_ess.ColCobMax")%>:&nbsp;
          <m4:item m4name="<%=zSUS_MAX_COV1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSCO_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;&nbsp;&nbsp;
          <%=TranEss.getProperty("bft_ess.ColCobMin")%>:&nbsp;
          <m4:item m4name="<%=zSUS_MIN_COV1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSCO_ID_CURRENCY%>" htmlsafe = "true"/>
          <%}else{%>
          <td class="fuentevalor" colspan="1" width="55%"><%=TranEss.getProperty("bft_ess.ColCob")%>:&nbsp;<m4:item m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/>
          <%}%> 
          </td>
        </tr>
        <tr>
          <td class="fuentevalor" colspan="3"><%=TranEss.getProperty("bft_ess.ColProv")%>:&nbsp;<m4:item m4name="<%=zSTD_N_EXT_ORG%>" htmlsafe="true"/></td>
        </tr>
        <tr>
          <td class="fuentevalor" colspan="3"><%=TranEss.getProperty("bft_ess.Web")%>:&nbsp;<a title="<%=Tran.getProperty("Link.WebSite")%>" href="<m4:item m4name="<%=zSUS_WEB_ADD_DESC%>" htmlsafe="true"/>" target="_BLANK"><m4:item m4name="<%=zSUS_WEB_ADD_DESC%>" htmlsafe="true"/></td>
        </tr>
        <tr></tr>               
        <tr>
          <td class="fuentevalor" colspan="3">
          <%   if (zFlexPlan.equals("Y")) {%>
            <input "disabled" type="Checkbox" checked="checked" disabled="disabled" title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" />&nbsp;<img alt="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" src="/iconos/icono_editar_mss_11_9.gif" />&nbsp;&nbsp;<%=TranEss.getProperty("bft_ess.IsFexPlan")%>
          <%}else{%>
            <input "disabled" type="Checkbox" disabled="disabled" title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" />&nbsp; <title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" />&nbsp;<%=TranEss.getProperty("bft_ess.IsFexPlan")%> 
          <%}%>
          </td>
        </tr>             
        <tr></tr>   
        <m4:item m4name="<%=zSUS_CREDIT%>" m4varname="zCredit"/>
        <%if (!zCredit.equals("0")&&zCredit!=null) {%>
        <tr>    
          <td class="fuentevalor" colspan="3"><m4:label m4name="<%=zSUS_CREDIT%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSUS_CREDIT%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_CR%>" htmlsafe="true"/></td>
        </tr>
        <%}%>
        <m4:item m4name="<%=zSUS_TOTAL_PREM%>" m4varname="zTotalPrem"/>
        <%if (!zTotalPrem.equals("0")&&zTotalPrem!=null) {%>
        <tr>
          <td class="fuentevalor"colspan="3"><m4:label m4name="<%=zSUS_TOTAL_PREM%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSUS_TOTAL_PREM%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_TP%>" htmlsafe="true"/></td>
        </tr>
        <%}%>
        <tr>
          <td class="fuentevalor" colspan="2"><%=TranEss.getProperty("bft_ess.TaxType")%> * :&nbsp;</td>
          <td colspan="1" class="fuentevalor">
          <m4:item m4name="<%=zSUS_TAX%>" m4varname="zTax"/>
          <m4:item m4name="<%=zSUS_TAX_1%>" m4varname="zTaxType"/>
          <m4:item m4name="<%=zSUS_TAX_ELCT_D%>" m4varname="zEETaxChoice"/>
          <%
          String chkP = "";
          String chkA = "";
          String disabled = "disabled";

          if (zEETaxChoice.equals("Y")) {
            chkP = "checked";
            chkA = "";
          }else{
            chkA = "checked";
            chkP = "";
          }
          if (zTax.equals("P")== true) {
            //Is Pre Tax
            chkP = "checked";
            chkA = "";
          }
          if (zTax.equals("A")== true) {
            //Is Post Tax
            chkA = "checked";
            chkP = "";
          }
          %>
            <input tabindex="5" <%=disabled%> type="Radio" id="zSUS_TAX" name="zSUS_TAX" <%=chkP%> value="P"/><%=TranEss.getProperty("bft_ess.PreTax")%>&nbsp;&nbsp;&nbsp;
            <input tabindex="6" <%=disabled%> type="Radio" id="zSUS_TAX" name="zSUS_TAX" <%=chkA%> value="A"/><%=TranEss.getProperty("bft_ess.AfterTax")%>
          </td>
        </tr>
        <tr></tr>     
        <tr>
          <td colspan="3" class="fuentevalor">(*)&nbsp;<%=TranEss.getProperty("bft_ess.InfoTax")%></td>
        </tr>
        <tr>
          <td class="fuentecampo" colspan="1" width="10%"><%=Tran.getProperty("Label.Comment")%>:&nbsp;
          <td class="fuentevalor" colspan="2" width="90%"><textarea rows="3" cols="90" class="fuenteformulario" id="SUS_COMMENT" name="SUS_COMMENT" title="<%=Tran.getProperty("Label.Comment2")%>"  tabindex="7"  disabled="disabled"><m4:item m4name="<%=zSUS_COMMENT%>" htmlsafe="true"/></textarea></td>
          </td>
        </tr>         
      </table>
    </td>
  </tr>
<%if (disabled.equals("")){%>
  <tr>
    <td class="fuenteboton" colspan="9">
      <a href="javascript:enviar()" title="<%=Tran.getProperty("Button.Send")%>">
        <img id="<%=Tran.getProperty("Button.Send")%>" alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>
    </td>
  </tr>
<%}%>
</table> 
</form>

<%
int  zcount3  = 0;
int  zcounti3  = 0;
try {
  M4Operations m = new M4Operations(request);
  zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
  zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);
} catch(Exception e) {}
String  zcountv3 = String.valueOf(zcounti3);
if (zcounti3 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="3">
      <%=TranEss.getProperty("bft_ess.Rates")%> 
    </td>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr class="tablaestadosceldatitulo">
    <td><m4:label m4name="<%=zSCO_DT_START3%>" htmlsafe="true"/></td>
    <td><m4:label m4name="<%=zSCO_DT_END3%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_PRICE3%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_ER_CONTR3%>" htmlsafe = "true"/></td>   
  </tr>
<%
String zregistroinicials3 = "0";
String zregistrofinals3 = String.valueOf(zcounti3 - 1);
String zposicions3 = "0";
int zcontrol3 = 0;
int zposicion3 = 0;
%>
<m4:loop from="<%=zregistroinicials3%>" to="<%=zregistrofinals3%>">
<%
String clase = "fuentevalor";
zposicions3 = m4lix;
zposicion3 = Integer.valueOf(zposicions3).intValue();
zcontrol3 = zposicion3%2;
if (zcontrol3==0){
   //par
   clase = "fuentevalor"; 
}else{
   //impar
   clase = "fuentevalor2"; 
}
%>
  <tr>
    <td class="<%=clase%>"><m4:item m4name="<%=zSCO_DT_START3%>" htmlsafe = "true"/></td>
    <td class="<%=clase%>"><m4:item m4name="<%=zSCO_DT_END3%>" htmlsafe = "true"/></td>
    <m4:item m4name="<%=zSUS_PRICE3%>" m4varname="zSUS_PRICE3_val"/>
    <td class="<%=clase%>">
      <%if (!zSUS_PRICE3_val.equals("0")&&!zSUS_PRICE3_val.equals("")) {%>
         <%=zSUS_PRICE3_val%>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY3%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS3%>" htmlsafe="true"/>
      <%}%>
    </td>
    <m4:item m4name="<%=zSUS_ER_CONTR3%>" m4varname="zSUS_ER_CONTR3_val"/>
    <td class="<%=clase%>">
      <%if (!zSUS_ER_CONTR3_val.equals("0")&&!zSUS_ER_CONTR3_val.equals("")) {%>
        <%=zSUS_ER_CONTR3_val%>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY3%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_EC3%>" htmlsafe="true"/>
      <%}%>
    </td>
  </tr>
</m4:loop>
</table>
<br>
<%}%>

<%
int  zcount4  = 0;
int  zcounti4  = 0;
try {
  M4Operations m = new M4Operations(request);
  zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
  zcounti4 = m.getCountInClient(znodo4,zsubsesion,znodo4);
} catch(Exception e) {}
String  zcountv4 = String.valueOf(zcounti4);
if (zcounti4 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="3">
      <%=TranEss.getProperty("bft_ess.RatesCov")%> 
    </td>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr class="tablaestadosceldatitulo">
    <td><m4:label m4name="<%=zSCO_DT_START4%>" htmlsafe="true"/></td>
    <td><m4:label m4name="<%=zSCO_DT_END4%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSCO_AMT_DEP_EMP4%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSCO_AMT_DEP_LEG4%>" htmlsafe = "true"/></td>    
  </tr>
<%
String zregistroinicials4 = "0";
String zregistrofinals4 = String.valueOf(zcounti4 - 1);
String zposicions4 = "0";
int zcontrol4 = 0;
int zposicion4 = 0;
%>
<m4:loop from="<%=zregistroinicials4%>" to="<%=zregistrofinals4%>">
<%
String clase = "fuentevalor";
zposicions4 = m4lix;
zposicion4 = Integer.valueOf(zposicions4).intValue();
zcontrol4 = zposicion4%2;
if (zcontrol4==0){
   //par
   clase = "fuentevalor"; 
}else{
   //impar
   clase = "fuentevalor2"; 
}
%>
  <tr>
    <td class="<%=clase%>"><m4:item m4name="<%=zSCO_DT_START4%>" htmlsafe = "true"/></td>
    <td class="<%=clase%>"><m4:item m4name="<%=zSCO_DT_END4%>" htmlsafe = "true"/></td>
    <m4:item m4name="<%=zSCO_AMT_DEP_EMP4%>" m4varname="zSCO_AMT_DEP_EMP4_val"/>
    <td class="<%=clase%>">
      <%if (!zSCO_AMT_DEP_EMP4_val.equals("0")&&!zSCO_AMT_DEP_EMP4_val.equals("")) {%>
         <%=zSCO_AMT_DEP_EMP4_val%>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY4%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_EMP4%>" htmlsafe="true"/>
      <%}%>
    </td>
    <m4:item m4name="<%=zSCO_AMT_DEP_LEG4%>" m4varname="zSCO_AMT_DEP_LEG4_val"/>
    <td class="<%=clase%>">
      <%if (!zSCO_AMT_DEP_LEG4_val.equals("0")&&!zSCO_AMT_DEP_LEG4_val.equals("")) {%>
         <%=zSCO_AMT_DEP_LEG4_val%>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY4%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_LEG4%>" htmlsafe="true"/>
      <%}%>
    </td>
  </tr>
</m4:loop>
</table>
<br>
<%}%>
<%if (zcounti1 > 0) {%>
<table class="tablaestados" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="5"><%=TranEss.getProperty("bft_ess.InfoFamily")%></td> 
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr class="tablaestadosceldatitulo">
    <td><m4:label m4name="<%=zSCO_GB_NAME1%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_N_OPTION1%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_N_COV_CAT1%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_P_DT_START%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_P_DT_END%>" htmlsafe = "true"/></td>
    <td width="3%"></td>      
  </tr>
<% String clase = "";
String zregistroinicials1 = "0";
String zregistrofinals1 = String.valueOf(zcounti1 - 1);
String zposicions1 = "0";
int zcontrol1 = 0;
int zposicion1 = 0;
%>
<m4:loop from="<%=zregistroinicials1%>" to="<%=zregistrofinals1%>">
<m4:item m4name="<%=zSCO_CK_DISCOUNTED%>" m4varname="zFamBon"/>
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
    <td class="<%=clase%>"><m4:item m4name="<%=zSCO_GB_NAME1%>" htmlsafe = "true"/></td>
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
</m4:loop>
</table>
<br>
<%}%>
<%
String clase = "fuentevalor";
int  zcount2  = 0;
int  zcounti2  = 0;
try {
  M4Operations m = new M4Operations(request);
  zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
  zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
} catch(Exception e) {}
String  zcountv2 = String.valueOf(zcounti2);
if (zcounti2 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="3">
      <%=TranEss.getProperty("bft_ess.InfoDepBenef")%> 
    </td>
    <td colspan="1"><m4:label m4name="<%=zSUS_MAX_COV%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSUS_MAX_COV%>" htmlsafe = "true" /></td>    
    <td align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>

<%
String zregistroinicials2 = "0";
String zregistrofinals2 = String.valueOf(zcounti2 - 1);
String zposicions2 = "0";
int zcontrol2 = 0;
int zposicion2 = 1;
String znodoauxSSE_BNFT_DEP_EMP="";
String zmoveauxSSE_BNFT_DEP_EMP="";
String znodoauxSSE_BNFT_DEP_LEG="";
String zmoveauxSSE_BNFT_DEP_LEG="";
%>
<m4:dataloop outputdef="<%=znodo2%>">
<m4:current m4varname="current" outputdef="<%=znodo2%>"/>
  <tr class="tablasubtitulo">
    <td colspan="3"><m4:label m4name="<%=zSTD_N_DEP_TYPE%>" htmlsafe="true"/>:&nbsp;<m4:item item="STD_N_ACT_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
    <td colspan="3"><m4:label m4name="<%=zSUS_NUM_SUBVEN%>" htmlsafe="true"/>:&nbsp;<m4:item item="SUS_NUM_SUBVEN" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
  </tr>
<%
  znodoauxSSE_BNFT_DEP_EMP="SSE_BNFT_DEP_EMP"+current;
  zmoveauxSSE_BNFT_DEP_EMP =znodoauxSSE_BNFT_DEP_EMP+ ":" + "SSE_BNFT_DEP_EMP" + "[FIRST]";
  znodoauxSSE_BNFT_DEP_LEG="SSE_BNFT_DEP_LEG"+current;
  zmoveauxSSE_BNFT_DEP_LEG =znodoauxSSE_BNFT_DEP_LEG+ ":" + "SSE_BNFT_DEP_LEG" + "[FIRST]";
%>
  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveauxSSE_BNFT_DEP_EMP%>"/></m4:move>
  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveauxSSE_BNFT_DEP_LEG%>"/></m4:move>
  <m4:count m4varname="countEMP" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/>
  <m4:count m4varname="countLEG" outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>"/>

<%if (!(countEMP.equals("0")&&countLEG.equals("0"))) {%>
  
  <tr class="tablaestadosceldatitulo">
    <td>&nbsp;&nbsp;</td>
    <td><%=TranEss.getProperty("bft_ess.CostType")%></td>
    <td><m4:label item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/></td>
    <td><m4:label item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/></td>
    <td colspan="2"><m4:label item="SCO_AMOUNT" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/></td>
  </tr>

  <m4:dataloop outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>">
  <m4:current m4varname="currentemp" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/>
<%
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
    <td class="<%=clase%>">&nbsp;&nbsp;</td>
    <%if (currentemp.equals("0")) {%>
    <td class="<%=clase%>"><m4:label m4name="<%=zSCO_AMT_DEP_EMP1%>" htmlsafe="true"/></td>
    
    <%}else{%>
    <td class="<%=clase%>">&nbsp;</td>
    <%}%>
    <td class="<%=clase%>"><m4:item item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/></td>
    <td class="<%=clase%>"><m4:item item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/></td>
    <td class="<%=clase%>" colspan="2"><m4:item item="SCO_AMOUNT" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/>&nbsp;<m4:item item="SCO_ID_CURRENCY" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/>&nbsp;<m4:item item="STD_N_COMP_BASIS" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_EMP%>"/></td>
    
  </tr>
<%  zposicion2++;%>
  </m4:dataloop>

  <m4:dataloop outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>">
  <m4:current m4varname="currentemp2" outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>"/>
<%
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
    <td class="<%=clase%>">&nbsp;&nbsp;</td>
    <%if (currentemp2.equals("0")) {%>
    <td class="<%=clase%>"><m4:label m4name="<%=zSCO_AMT_DEP_LEG1%>" htmlsafe="true"/></td>
    
    <%}else{%>
    <td class="<%=clase%>">&nbsp;</td>
    <%}%>
  
    <td class="<%=clase%>"><m4:item item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>"/></td>
    <td class="<%=clase%>"><m4:item item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>"/></td>
    <td class="<%=clase%>" colspan="2"><m4:item item="SCO_AMOUNT" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>"/>&nbsp;<m4:item item="SCO_ID_CURRENCY" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>"/>&nbsp;<m4:item item="STD_N_COMP_BASIS" htmlsafe="true" outputdef="<%=znodoauxSSE_BNFT_DEP_LEG%>"/></td>
  </tr>
<%  zposicion2++;%>
  </m4:dataloop>
<%}%>
  
</m4:dataloop>

</table>
<%}%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>
</html>
