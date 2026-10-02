<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script> 
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %> 
<%@ include file="/mss_g2/mss_bft_trans.jsp"%>

<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String vNameBenefit = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vNameBenefit");
  String vPosition = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"vPosition");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
%>

<title><%=TranMss.getProperty("bft_mss.Benefits")%></title>

</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
  String zsubsesion = "SSE_BFT_EE_BNFT_ELEC";
  String zmeta4object = "SSE_BFT_EE_BNFT_ELEC";
  String znodo = "SSE_H_EE_IN_BNFT";

  String zoutputdef = zsubsesion + "!" + znodo + "[" + vPosition + "]";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[" + vPosition + "]" + ".";
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
  String zmetodoProveedor = "PROV:" + zsubsesion + "!" + znodo + ".SSE_FILL_TPAS";    
  
  String znodo2 = "SCO_BN_ELCT_CST";
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
  String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
  String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";  
  
  String zSUS_ID_PLAN_PERIOD = zcomun + "SSE_ID_PLAN_PERIOD";
  String zSUS_N_PLAN_PERIOD = zcomun + "SUS_N_PLAN_PERIOD";
  String zSUS_DT_START = zcomun + "SSE_DT_START";
  String zSUS_DT_END = zcomun + "SSE_DT_END";
  String zSUS_ID_OPTION = zcomun + "SSE_ID_OPTION";
  String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
  String ztipocarga = "SSE";   
  String zSUS_COVERAGE = zcomun + "SSE_COVERAGE";
  String zSUS_ID_COV_CAT = zcomun + "SSE_ID_COV_CAT";
  String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
  String zSUS_PCT_PRICE = zcomun + "SSE_PCT_PRICE";
  String zSUS_TAX = zcomun + "SSE_TAX";
  String zSUS_PRICE = zcomun + "SSE_PRICE";
  String zSUS_CREDIT = zcomun + "SSE_CREDIT";
  String zSUS_TOTAL_PREM = zcomun + "SSE_TOTAL_PREM";
  String zSUS_COMMENT = zcomun + "SSE_COMMENT";
  String zSCO_HTTP_PATH = zcomun + "SCO_HTTP_PATH";
  String zSTD_N_EXT_ORG = zcomun + "STD_N_EXT_ORG";
  String zSUS_ID_PLAN = zcomun + "SSE_ID_PLAN";
  String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
  String zSTD_N_COMP_BASIS = zcomun + "STD_N_COMP_BASIS";
  String zSTD_N_COMP_BASIS_EC = zcomun + "STD_N_COMP_BASIS_2";
  String zSTD_N_COMP_BASIS_TP = zcomun + "STD_N_COMP_BASIS_3";
  String zSTD_N_COMP_BASIS_CR = zcomun + "STD_N_COMP_BASIS_1";  
  String zSUS_ER_CONTR = zcomun + "SSE_ER_CONTR";
  String zSUS_CUR_DATE = zcomun + "SSE_CUR_DATE";
  String zSUS_EX_TYPE = zcomun + "SSE_EX_TYPE";
  String zSUS_ID_CURRENCY = zcomun + "SSE_ID_CURRENCY";
  String zSUS_WEB_ADD_DESC = zcomun + "SUS_WEB_ADD_DESC";
  String zSSE_P_IS_FLEX_PLAN = zcomun + "SUS_FLEX_PLAN";

  String zSCO_ID_DOC = zcomun + "SCO_ID_DOC"; 
  String zSCO_ID_DOC_OPT = zcomun + "SCO_ID_DOC_1"; 

  String zSUS_TAX_1 = zcomun + "SUS_TAX_1";
  String zSUS_TAX_ELCT_D = zcomun + "SUS_TAX_ELCT_D";
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
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:exec m4method="<%=zmetodoProveedor%>"><m4:param name="ARG_ID_POSITION" value="<%=vPosition%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<table width="100%">
<m4:item m4name="<%=zSSE_P_IS_FLEX_PLAN%>" m4varname="zFlexPlan"/>
<m4:item m4name="<%=zSCO_ID_DOC%>" m4varname="zIdDoc" htmlsafe = "true"/>
<%if (!zIdDoc.equals("")) {zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDoc);}%>
<m4:item m4name="<%=zSCO_ID_DOC_OPT%>" m4varname="zIdDocOpt" htmlsafe = "true"/>
<%if (!zIdDocOpt.equals("")) {zIdDocOpt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDocOpt);}%>
<m4:item m4name="<%=zSUS_ID_PLAN_TYPE%>" m4varname="zPlanTypeDep"/>
<tr>
  <td class="titulofuncional" colspan="2"><%=TranMss.getProperty("bft_mss.InfoBenefit")%></td>
</tr>
<tr>
  <td><img alt="<%=TranMss.getProperty("bft_mss.Benefits")%>" title="<%=TranMss.getProperty("bft_mss.Benefits")%>" src="/iconos/noname_pregunta_47_125.gif" width="100" height="100" /></td>
  <td>
    <div class="descripcionfuncional"><%=TranMss.getProperty("bft_mss.DescPlan")%></div>
    <ul class="listaenlace">
      <li><a class="enlacefuncional" tabindex="2" title="<%=TranMss.getProperty("bft_mss.Benefits")%>"  href="javascript:history.back(-1);"><%=TranMss.getProperty("bft_mss.Benefits")%></a></li>
  </td>
</tr>
</table>
<form action="" method="post" name="oculto" id="oculto">
  <input type="hidden" id="SCO_ID_DOC" name="SCO_ID_DOC" value="<%=zIdDoc%>" />
  <input type="hidden" id="SCO_ID_DOC_OPT" name="SCO_ID_DOC_OPT" value="<%=zIdDocOpt%>" />
<table class="tablaestados" width="100%" cellspacing="0" border="0" >
  <tr>
    <td class="fuenteleyenda_big"><%=vNameBenefit%></td>
    <td class="fuenteleyenda_big" align="right">
    <%if (!zIdDoc.equals("")) {%>
      <a href="javascript:ssco_manage_document('view','oculto','SCO_ID_DOC');"> <img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/images/ic_executed_items_36_36_100.gif" width="20" height="20" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
    <%}%>   
    </td>   
  </tr>
  <tr>
    <td class="tablaestadosceldatitulo"><%=TranMss.getProperty("bft_mss.InfoBenefit")%></td>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranMss.getProperty("bft_ess.SimulBenef")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr>
    <td colspan="3" class="fuentevalor">
      <table class="tablaestados" width="100%">
        <tr>
          <td class="fuentevalor" colspan="2">
          <%if (!zIdDocOpt.equals("")) {%>
            <a href="javascript:ssco_manage_document('view','oculto','SCO_ID_DOC_OPT');"><img alt="<%=Tran.getProperty("Label.VerDoc")%>" src="/images/ic_executed_items_36_36_100.gif" width="20" height="20" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a>
          <%}%> 
            <%=TranMss.getProperty("bft_mss.ColOpt")%>:&nbsp;<m4:item m4name="<%=zSUS_N_OPTION%>" htmlsafe="true"/>
          </td>
          <%if (zPlanTypeDep.equals("002")) {%>
          <td class="fuentevalor" colspan="1" width="55%"><%=TranMss.getProperty("bft_mss.ColAmountFix")%>:&nbsp;
          <m4:item m4name="<%=zSUS_FLAT_AMT1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSCO_ID_CURRENCY%>" htmlsafe = "true"/><br>
            <%=TranMss.getProperty("bft_mss.ColCobMax")%>:&nbsp;
          <m4:item m4name="<%=zSUS_MAX_COV1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSCO_ID_CURRENCY%>" htmlsafe = "true"/>&nbsp;&nbsp;&nbsp;
            <%=TranMss.getProperty("bft_mss.ColCobMin")%>:&nbsp;
          <m4:item m4name="<%=zSUS_MIN_COV1%>" htmlsafe = "true"/>&nbsp;<m4:item m4name="<%=zSCO_ID_CURRENCY%>" htmlsafe = "true"/>
          <%}else{%>
          <td class="fuentevalor" colspan="1" width="55%">
            <%=TranMss.getProperty("bft_mss.ColCob")%>:&nbsp;<m4:item m4name="<%=zSUS_N_COV_CAT%>" htmlsafe = "true"/>
          <%}%>
          </td>
        </tr>
        <tr>
          <td class="fuentevalor" colspan="3"><%=TranMss.getProperty("bft_mss.ColProv")%>:&nbsp;<a title="<%=TranMss.getProperty("Link.WebSite")%>" href="<m4:item m4name="<%=zSCO_HTTP_PATH%>" htmlsafe="true"/>" target="_BLANK"><m4:item m4name="<%=zSTD_N_EXT_ORG%>" htmlsafe = "true"/></td>
        </tr>
        <tr>
          <td class="fuentevalor" colspan="3"><%=TranMss.getProperty("bft_mss.Web")%>:&nbsp;<a title="<%=TranMss.getProperty("Link.WebSite")%>" href="<m4:item m4name="<%=zSUS_WEB_ADD_DESC%>" htmlsafe="true"/>" target="_BLANK"><m4:item m4name="<%=zSUS_WEB_ADD_DESC%>" htmlsafe="true"/></td>
        </tr>
        <tr></tr>               
        <tr>
          <td class="fuentevalor" colspan="3">  
          <%   if (zFlexPlan.equals("Y")) {%>
            <input "disabled" type="Checkbox" checked="checked" disabled="disabled" title="<%=TranMss.getProperty("bft_mss.IsFexPlan")%>" />&nbsp; <img alt="<%=TranMss.getProperty("bft_mss.IsFexPlan")%>" title="<%=TranMss.getProperty("bft_mss.IsFexPlan")%>" src="/iconos/icono_editar_mss_11_9.gif" />&nbsp;&nbsp;<%=TranMss.getProperty("bft_mss.IsFexPlan")%>   
          <%}else{%>
            <input "disabled" type="Checkbox" disabled="disabled" title="<%=TranMss.getProperty("bft_mss.IsFexPlan")%>" />&nbsp; <title="<%=TranMss.getProperty("bft_mss.IsFexPlan")%>" />&nbsp;<%=TranMss.getProperty("bft_mss.IsFexPlan")%> 
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
          <td class="fuentevalor" colspan="2"><%=TranMss.getProperty("bft_mss.TaxType")%> * :&nbsp;</td>
          <td colspan="1" class="fuentevalor">
          <m4:item m4name="<%=zSUS_TAX%>" m4varname="zTax"/>
          <m4:item m4name="<%=zSUS_TAX_ELCT_D%>" m4varname="zEETaxChoice"/>

          <%

          String chkP = "";
          String chkA = "";
          String disabled = "disabled";
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
            <input tabindex="5" <%=disabled%> type="Radio" id="zSUS_TAX" name="zSUS_TAX" <%=chkP%> value="P"/><%=TranMss.getProperty("bft_mss.PreTax")%>&nbsp;&nbsp;&nbsp;
            <input tabindex="6" <%=disabled%> type="Radio" id="zSUS_TAX" name="zSUS_TAX" <%=chkA%> value="A"/><%=TranMss.getProperty("bft_mss.AfterTax")%>
          </td>

        <tr></tr>     
        <tr>
          <td colspan="3" class="fuentevalor">(*)&nbsp;<%=TranMss.getProperty("bft_mss.InfoTax")%></td>
        </tr>
        <tr>
          <td class="fuentecampo" colspan="1" width="10%"><%=TranMss.getProperty("bft_mss.Comment")%>:&nbsp;
          <td class="fuentevalor" colspan="2" width="90%"><textarea rows="3" cols="70" class="fuenteformulario" id="zSUS_COMMENT" name="zSUS_COMMENT" title="<%=TranMss.getProperty("Label.Comment2")%>" tabindex="7"  disabled="disabled"><m4:item m4name="<%=zSUS_COMMENT%>" htmlsafe="true"/></textarea></td>
          </td>
        </tr>         
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
      <%=TranMss.getProperty("bft_mss.Rates")%>
    </td>
    <td class="tablaestadosceldatitulo" align="right"><a href="javascript:history.back(-1);"><img alt="<%=TranMss.getProperty("bft_ess.Benefits")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
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
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
<m4:endpage/>
</body>
</html>
