<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script> 
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %> 
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>

<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String vista = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vista");
  String vNameBenefit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vNameBenefit");
  String vPosition = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vPosition");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
%>

<%if (vista.equals("0")) {%>
<title><%=TranEss.getProperty("bft_ess.SimulBenef")%></title>
<%}else{%>
<title><%=TranEss.getProperty("bft_ess.SolicBenef")%></title>
<%}%>
<script>
function enviar ()
{
  document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7_det_act.jsp?estado=21";
  m4submit("oculto");
}

</script>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
  String zsubsesion = "SSE_BFT_EE_BNFT_ELEC";
  String zmeta4object = "SSE_BFT_EE_BNFT_ELEC";
  
  String znodo = "M4T_EE_BNFT_ELEC";
  String zoutputdef = zsubsesion + "!" + znodo + "[" + vPosition + "]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[" + vPosition + "]" + ".";
  String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodo + ".SSE_M_LOAD_DEP_COST";
  String zmetodoProveedor = "PROV:" + zsubsesion + "!" + znodo + ".SSE_FILL_TPAS";
    
  String znodo1 = "M4T_BFT_DEP_PLAN";
  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
  String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
  String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";  
  String scountM4T_BFT_DEP_PLAN="";
  
  String znodo2 = "SCO_M4T_BN_ELCT_CST";
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
  String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
  String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";  
  
  String zSUS_ID_PLAN_PERIOD = zcomun + "SUS_ID_PLAN_PERIOD";
  String zSUS_N_PLAN_PERIOD = zcomun + "SUS_N_PLAN_PERIOD";
  String zSUS_DT_START = zcomun + "SUS_DT_START";
  String zSUS_DT_END = zcomun + "SUS_DT_END";
  String zSUS_ID_OPTION = zcomun + "SUS_ID_OPTION";
  String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
  String zSUS_COVERAGE = zcomun + "SUS_COVERAGE";
  String zSUS_ID_COV_CAT = zcomun + "SUS_ID_COV_CAT";
  String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
  String zSUS_PCT_PRICE = zcomun + "SUS_PCT_PRICE";
  String zSUS_TAX = zcomun + "SUS_TAX";
  String zSUS_PRICE = zcomun + "SUS_PRICE";
  String zSUS_CREDIT = zcomun + "SUS_CREDIT";
  String zSUS_TOTAL_PREM = zcomun + "SUS_TOTAL_PREM";
  String zSUS_COMMENT = zcomun + "SUS_COMMENT";
  String zSCO_HTTP_PATH = zcomun + "SCO_HTTP_PATH";
  String zSTD_N_EXT_ORG = zcomun + "STD_N_EXT_ORG";
  String zSUS_ID_PLAN = zcomun + "SUS_ID_PLAN";
  String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
  String zSTD_N_COMP_BASIS = zcomun + "STD_N_COMP_BASIS";
  String zSTD_N_COMP_BASIS_TP = zcomun + "STD_N_COMP_BASIS_TP";
  String zSTD_N_COMP_BASIS_EC = zcomun + "STD_N_COMP_BASIS_EC";
  String zSTD_N_COMP_BASIS_CR = zcomun + "STD_N_COMP_BASIS_CR";
  String zSUS_ER_CONTR = zcomun + "SUS_ER_CONTR";
  String zSUS_CUR_DATE = zcomun + "SUS_CUR_DATE";
  String zSUS_EX_TYPE = zcomun + "SUS_EX_TYPE";
  String zSUS_ID_CURRENCY = zcomun + "SUS_ID_CURRENCY";
  String zSUS_WEB_ADD_DESC = zcomun + "SUS_WEB_ADD_DESC";
  String zSSE_P_IS_FLEX_PLAN = zcomun + "SUS_FLEX_PLAN";
  
  String zSCO_ID_DOC = zcomun + "SCO_ID_DOC"; 
  String zSCO_ID_DOC_OPT = zcomun + "SCO_ID_DOC_1"; 
  
  String zSUS_TAX_1 = zcomun + "SUS_TAX_1";
  String zSUS_TAX_ELCT_D = zcomun + "SUS_TAX_ELCT_D";
  String zSUS_MAX_COV = zcomun + "SUS_MAX_COV";   
  
  String zSTD_N_DEP_TYPE = zcomun1 + "STD_N_ACT_DEP_TYPE";
  String zSUS_NUM_SUBVEN = zcomun1 + "SUS_NUM_SUBVEN";    
  String zSCO_AMT_DEP_EMP1 = zcomun1 + "SCO_AMT_DEP_EMP"; 
  String zSCO_AMT_DEP_LEG1 = zcomun1 + "SCO_AMT_DEP_LEG";   
  String zSCO_N_COMP_EMP = zcomun1 + "SCO_N_COMP_EMP";  
  String zSCO_N_COMP_LEG = zcomun1 + "SCO_N_COMP_LEG";
  String zSCO_P_DEP_COST = zcomun1 + "SCO_P_DEP_COST";    
  String zSCO_P_DEP_CANT = zcomun1 + "SCO_P_DEP_CANT";      
  String zSUS_FLAT_AMT1 = zcomun + "SUS_FLAT_AMT1";
  String zSCO_ID_CURRENCY = zcomun + "SCO_ID_CURRENCY";
  String zSUS_ID_PLAN_TYPE = zcomun + "SUS_ID_PLAN_TYPE";
  String zSUS_MAX_COV1 = zcomun + "SUS_MAX_COV1";
  String zSUS_MIN_COV1 = zcomun + "SUS_MIN_COV1";       
  
  //Costes Empleado 
  String zSCO_DT_START2 = zcomun2 + "SCO_DT_START";
  String zSCO_DT_END2 = zcomun2 + "SCO_DT_END";
  String zSUS_PRICE2 = zcomun2 + "SUS_PRICE";
  String zSUS_ER_CONTR2 = zcomun2 + "SUS_ER_CONTR";
  String zSTD_N_COMP_BASIS2 = zcomun2 + "STD_N_COMP_BASIS";
  String zSTD_N_COMP_BASIS_EC2 = zcomun2 + "STD_N_COMP_BASIS_EC";
  String zSUS_ID_CURRENCY2 = zcomun2 + "SUS_ID_CURRENCY";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_ID_POSITION" value="<%=vPosition%>"/></m4:exec>
<m4:exec m4method="<%=zmetodoProveedor%>"><m4:param name="ARG_ID_POSITION" value="<%=vPosition%>"/></m4:exec>
<m4:exec node="<%=znodo1%>" alias="countM4T_BFT_DEP_PLAN" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>  
<m4:outputexec var="scountM4T_BFT_DEP_PLAN" alias="countM4T_BFT_DEP_PLAN"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<% 
int icountM4T_BFT_DEP_PLAN=0;
String zmoves=znodo1 + ":" + znodo1;
String zaliasEMP="";
String zaliasLEG="";
int h = 0;
  try {
    icountM4T_BFT_DEP_PLAN = Integer.parseInt(scountM4T_BFT_DEP_PLAN); 
    for (h = 0; h < icountM4T_BFT_DEP_PLAN; h++){
      zmoves=znodo1 + ":" + znodo1 +"["+String.valueOf(h)+"]";
      zaliasEMP="SSE_BNFT_DEP_EMP"+String.valueOf(h);
      zaliasLEG="SSE_BNFT_DEP_LEG"+String.valueOf(h);
    %>
      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
      <m4:outputdef m4alias="<%=zaliasEMP%>"><m4:param name="m4name0" value="SSE_BFT_EE_BNFT_ELEC!SSE_BNFT_DEP_EMP[*]"/></m4:outputdef>
      <m4:outputdef m4alias="<%=zaliasLEG%>"><m4:param name="m4name0" value="SSE_BFT_EE_BNFT_ELEC!SSE_BNFT_DEP_LEG[*]"/></m4:outputdef>
      <%
    }
  } catch(Exception e) {}
%>
<m4:endjob/>
<table width="100%">
<m4:item m4name="<%=zSSE_P_IS_FLEX_PLAN%>" m4varname="zFlexPlan"/>
<m4:item m4name="<%=zSCO_ID_DOC%>" m4varname="zIdDoc" htmlsafe = "true"/>
<%if (!zIdDoc.equals("")) {zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDoc);}%>
<m4:item m4name="<%=zSCO_ID_DOC_OPT%>" m4varname="zIdDocOpt" htmlsafe = "true"/>
<%if (!zIdDocOpt.equals("")) {zIdDocOpt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDocOpt);}%>
<m4:item m4name="<%=zSUS_ID_PLAN_TYPE%>" m4varname="zPlanTypeDep"/>
<tr>
  <td class="titulofuncional" colspan="2"><%=TranEss.getProperty("bft_ess.InfoBenefit")%></td>
</tr>
<tr>
<%if (vista.equals("0")) {%>
  <td><img alt="<%=TranEss.getProperty("bft_ess.SimulBenef")%>" title="<%=TranEss.getProperty("bft_ess.SimulBenef")%>" src="/iconos/noname_pregunta_47_125.gif" width="100" height="100" /></td>
  <td>
    <div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.DescSimulBenef")%></div>
    <ul class="listaenlace">
      <li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("bft_ess.SimulBenef")%>"  href="javascript:history.back(-1);"><%=TranEss.getProperty("bft_ess.SimulBenef")%></a></li>
<%}else{%>
  <td><img alt="<%=TranEss.getProperty("bft_ess.SolicBenef")%>" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>" src="/iconos/noname_pregunta_47_125.gif" width="82" height="100" /></td>
  <td>
    <div class="descripcionfuncional"><%=TranEss.getProperty("bft_ess.DescSolicBenef")%></div>
    <ul class="listaenlace">
      <li><a class="enlacefuncional" tabindex="2" title="<%=TranEss.getProperty("bft_ess.SolicBenef")%>"  href="javascript:history.back(-1);"><%=TranEss.getProperty("bft_ess.SolicBenef")%></a></li>
<%}%>
      <li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("bft_ess.Benefits")%>"  href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><%=TranEss.getProperty("bft_ess.Benefits")%></a></li>
    </ul>
  </td>
</tr>
</table>
<form action="" method="post" name="oculto" id="oculto">
  <input type="hidden" id="vPosition" name="vPosition" value="<%=vPosition%>" />
  <input type="hidden" id="SCO_ID_DOC" name="SCO_ID_DOC" value="<%=zIdDoc%>" />
  <input type="hidden" id="SCO_ID_DOC_OPT" name="SCO_ID_DOC_OPT" value="<%=zIdDocOpt%>" />
<table class="tablaestados" width="100%" cellspacing="0" border="0" >
  <tr>
    <td class="fuenteleyenda_big" colspan = "2"><%=vNameBenefit%></td>
    <td class="fuenteleyenda_big" align="right">
    <%if (!zIdDoc.equals("")) {%>
      <a href="javascript:ssco_manage_document('view','oculto','SCO_ID_DOC');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/images/ic_executed_items_36_36_100.gif" width="20" height="20" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
    <%}%>   
    </td>   
  </tr> 
  <tr>
    <td class="tablaestadosceldatitulo"><%=TranEss.getProperty("bft_ess.InfoBenefit")%></td>
    <td class="tablaestadosceldatitulo"><%=TranEss.getProperty("bft_ess.VigPlan")%>:&nbsp;&nbsp;<m4:item m4name="<%=zSUS_DT_START%>" htmlsafe = "true"/> - <m4:item m4name="<%=zSUS_DT_END%>" htmlsafe = "true" /></td>       
<%if (vista.equals("0")) {%>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.SimulBenef")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
<%}else{%>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.SolicBenef")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
<%}%>
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
          <td class="fuentevalor" colspan="3"><%=TranEss.getProperty("bft_ess.ColProv")%>:&nbsp;<a title="<%=Tran.getProperty("Link.WebSite")%>" href="<m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/>" target="_BLANK"><m4:item m4name="<%=zSTD_N_EXT_ORG%>" htmlsafe = "true"/></td>
        </tr>
        <tr>
          <td class="fuentevalor" colspan="3"><%=TranEss.getProperty("bft_ess.Web")%>:&nbsp;<a title="<%=Tran.getProperty("Link.WebSite")%>" href="<m4:item m4name="<%=zSUS_WEB_ADD_DESC%>" htmlsafe="true"/>" target="_BLANK"><m4:item m4name="<%=zSUS_WEB_ADD_DESC%>" htmlsafe="true"/></td>
        </tr>
        <tr></tr>               
        <tr>
          <td class="fuentevalor" colspan="3">  
          <%   if (zFlexPlan.equals("Y")) {%>
            <input "disabled" type="Checkbox" checked="checked" disabled="disabled" title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" />&nbsp; <img alt="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" title="<%=TranEss.getProperty("bft_ess.IsFexPlan")%>" src="/iconos/icono_editar_mss_11_9.gif" />&nbsp;&nbsp;<%=TranEss.getProperty("bft_ess.IsFexPlan")%>   
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
          if ((zTaxType.equals("I")== true) && (vista.equals("1"))) {
            //Employee Tax Choice
            disabled = "";
          }
          if (zEETaxChoice.equals("P")) {
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

        <tr></tr>     
        <tr>
          <td colspan="3" class="fuentevalor">(*)&nbsp;<%=TranEss.getProperty("bft_ess.InfoTax")%></td>
        </tr>
        <tr>
          <td class="fuentecampo" colspan="1" width="10%"><%=Tran.getProperty("Label.Comment")%>:&nbsp;
          <td class="fuentevalor" colspan="2" width="90%"><textarea rows="3" <%=disabled%>  cols="90" class="fuenteformulario" id="zSUS_COMMENT" name="zSUS_COMMENT" title="<%=Tran.getProperty("Label.Comment2")%>" tabindex="7" ><m4:item m4name="<%=zSUS_COMMENT%>" htmlsafe="true"/></textarea></td>
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
    </td>
  </tr>
</table> 
</form>

<%
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
      <%=TranEss.getProperty("bft_ess.Rates")%> 
    </td>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr class="tablaestadosceldatitulo">
    <td><m4:label m4name="<%=zSCO_DT_START2%>" htmlsafe="true"/></td>
    <td><m4:label m4name="<%=zSCO_DT_END2%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_PRICE2%>" htmlsafe = "true"/></td>
    <td><m4:label m4name="<%=zSUS_ER_CONTR2%>" htmlsafe = "true"/></td>   
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
String clase = "fuentevalor";
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
    <td class="<%=clase%>"><m4:item m4name="<%=zSCO_DT_START2%>" htmlsafe = "true"/></td>
    <td class="<%=clase%>"><m4:item m4name="<%=zSCO_DT_END2%>" htmlsafe = "true"/></td>
    <m4:item m4name="<%=zSUS_PRICE2%>" m4varname="zSUS_PRICE2_val"/>
    <td class="<%=clase%>">
      <%if (!zSUS_PRICE2_val.equals("0")&&!zSUS_PRICE2_val.equals("")) {%>
         <%=zSUS_PRICE2_val%>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY2%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS2%>" htmlsafe="true"/>
      <%}%>
    </td>
    <m4:item m4name="<%=zSUS_ER_CONTR2%>" m4varname="zSUS_ER_CONTR2_val"/>
    <td class="<%=clase%>">
      <%if (!zSUS_ER_CONTR2_val.equals("0")&&!zSUS_ER_CONTR2_val.equals("")) {%>
        <%=zSUS_ER_CONTR2_val%>&nbsp;<m4:item m4name="<%=zSUS_ID_CURRENCY2%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_EC2%>" htmlsafe="true"/>
      <%}%>
    </td>
  </tr>
</m4:loop>
</table>
<%}%>

<br>
<%
String clase = "fuentevalor";
int  zcount1  = 0;
int  zcounti1  = 0;
try {
  M4Operations m = new M4Operations(request);
  zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
  zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
} catch(Exception e) {}
String  zcountv1 = String.valueOf(zcounti1);
if (zcounti1 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="3">
      <%=TranEss.getProperty("bft_ess.InfoDepBenef")%> 
    </td>
    <td class="tablaestadosceldatitulo" colspan="1"><m4:label m4name="<%=zSUS_MAX_COV%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSUS_MAX_COV%>" htmlsafe = "true" /></td>    
    <td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21"><img alt="<%=TranEss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>

<%
String zregistroinicials1 = "0";
String zregistrofinals1 = String.valueOf(zcounti1 - 1);
String zposicions1 = "0";
int zcontrol2 = 0;
int zposicion2 = 1;
String znodoauxSSE_BNFT_DEP_EMP="";
String zmoveauxSSE_BNFT_DEP_EMP="";
String znodoauxSSE_BNFT_DEP_LEG="";
String zmoveauxSSE_BNFT_DEP_LEG="";
%>
<m4:dataloop outputdef="<%=znodo1%>">
<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
  <tr class="tablaestadosceldatitulo">
    <td colspan="3"><m4:label m4name="<%=zSTD_N_DEP_TYPE%>" htmlsafe="true"/>:&nbsp;<m4:item item="STD_N_ACT_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
    <td colspan="3"><m4:label m4name="<%=zSUS_NUM_SUBVEN%>" htmlsafe="true"/>:&nbsp;<m4:item item="SUS_NUM_SUBVEN" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
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

  <tr class="tablasubtitulo">
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
