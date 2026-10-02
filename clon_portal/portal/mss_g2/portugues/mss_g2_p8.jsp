<html xmlns="http://www.w3.org/1999/xhtml" xml:space="none">
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Link4")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");

estado="112";

String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}


%>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<% String zestado = "21";
   String trans_list = ""; %>

<script language="JavaScript" xml:space="preserve">
function commit()
{
document.rpt_setup.submit();
}
function comprobar()
{
  var mensaje = "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad23")%>" + "\n";
  var falta_valor;
  var zfechaini = m4valor("rpt_setup","PD_START_DATE","","get");
  
  if (zfechaini != ''){
    if ("" == m4fechacomprobacion(m4objeto('PD_START_DATE','rpt_setup'),false)){
      mensaje += "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad24")%>" + "\n";
      falta_valor = 1;
    }else if (m4compfechas(m4objeto('PD_START_DATE','rpt_setup'),'>',m4objeto('PD_END_DATE','rpt_setup'))){
      mensaje+= "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_ad25")%>" + "\n";
      falta_valor=1;
    }
  }else{
    mensaje += "<%=Mss_cr.getProperty("msscr.NOHTML_Confirm_dt1")%>" + "\n";
    falta_valor = 1;
  }

  if (falta_valor == 1){
    alert (mensaje);
    return;
    }
  else{ 
    commit();
    }
}

function show_help(cod_help)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=500";
    this.win= window.open(this.url, this.name, attr);
  }

</script>

<table border="0" width="100%">
  <tr>
         <td class="titulofuncional" colspan="2" ><%=Mss_cr.getProperty("msscr.Titulo4")%></td>
       <td><a href="javascript:show_help(7)" title="<%=Mss_cr.getProperty("msscr.help1-1")%>"><img alt="<%=Mss_cr.getProperty("msscr.help1-1")%>" src="/iconos/ic_help_25_31_0.gif" alt="Aceptar cambios" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
    </tr>
  <tr>
    <td><img alt="<%=Mss_cr.getProperty("msscr.Titulo4")%>" src="/iconos/noname_salariales_mss_58_100.gif" width="100" height="100" /></td>
    <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Info3_bis")%></div></td>
    <td>&nbsp;</td>
  </tr>
</table>

<m4:page subsessionid="CR_RP_SALREV">
<m4:job>
  <m4:datadef m4o="HCO_RP_HTML" m4name="RPT_HTML"/>
  <m4:exec node="HTML_RPT" method="MN_LOAD_OBJECT_NONSTANDARD" m4object="RPT_HTML">
    <m4:param name="AVS_ID_OBJECT" value="SHCO_CR_RP_SAL_REV"/>
    <m4:param name="AVS_ROOT_NODE" value="SHCO_GN_RP_ROOT"/>
  </m4:exec>
</m4:job>

<m4:job>
  <m4:datadef m4o="HCO_RP_HTML.SHCO_CR_RP_SAL_REV" m4find="TRUE" m4name="CR_RP_SALREV"/>
  <m4:outputdef node="SHCO_GN_RP_ROOT" m4alias="CR_RP_SALREV" m4object="CR_RP_SALREV"/>
</m4:job>

<form name="rpt_setup" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8_p.jsp" method="post" enctype="application/x-www-form-urlencoded">

<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo"><th colspan="4" rowspan="1" align="left">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla10")%></th></tr>
<tr>
  <td class="fuentecampo" colspan="1" rowspan="1">&nbsp;*&nbsp;<%=Mss_cr.getProperty("msscr.Val3")%></td>
  <td class="fuentevalor" colspan="1" rowspan="1">&nbsp;&nbsp;<m4:input name="PD_START_DATE" styleclass="fuenteformulario" size="10" type="text" maxlength="10"><m4:item item="PD_START_DATE" htmlsafe="true" outputdef="CR_RP_SALREV"/></m4:input><a href="javascript:m4calendario(m4objeto('PD_START_DATE','rpt_setup'));">&nbsp;<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Mss_cr.getProperty("msscr.Pop2-20")%>" title="<%=Mss_cr.getProperty("msscr.Pop2-20")%>"/></a></td>
  <td class="fuentecampo" colspan="1" rowspan="1">&nbsp;<%=Mss_cr.getProperty("msscr.Info74-3")%></td>
  <td class="fuentevalor" colspan="1" rowspan="1">&nbsp;<m4:input name="PD_END_DATE" styleclass="fuenteformulario" size="10" type="text" maxlength="10"><m4:item item="PD_END_DATE" htmlsafe="true" outputdef="CR_RP_SALREV"/></m4:input><a href="javascript:m4calendario(m4objeto('PD_END_DATE','rpt_setup'));">&nbsp;<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Mss_cr.getProperty("msscr.Pop3-20")%>" title="<%=Mss_cr.getProperty("msscr.Pop3-20")%>"/></a></td>  
</tr>
<input name="paper_type" class="form" type="hidden" value="LTR"/>
<tr>
  <td class="fuentecampo" colspan="1" rowspan="1">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla11")%></td>
  <td class="fuentecampo" colspan="3" rowspan="1">&nbsp;
      <select class="fuenteformulario200" name="PN_DATE_FORMAT_ID">
        <option value="5051">DD / MM / YYYY</option>
        <option value="16">MM / DD / YYYY</option>
        <option value="51000002">DD - MM - YYYY</option>
        <option value="51000001">MM - DD - YYYY</option>
        <option value="51000004">DD . MM . YYYY</option>
        <option value="51000003">MM . DD . YYYY</option>
      </select>&nbsp;&nbsp;
  </td>
</tr>
<tr>
  <td class="fuentecampo" colspan="1" rowspan="1">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla12")%></td>
  <td class="fuentecampo" colspan="3" rowspan="1">&nbsp;<input name="report_type" type="radio" value="PDF" checked="checked"/>
    <a class="clickable" shape="rect" onclick="document.forms.rpt_setup.report_type[0].checked=true">PDF</a>
    &nbsp;<input name="report_type" type="radio" value="HTML"/>
    <a class="clickable" shape="rect" onclick="document.forms.rpt_setup.report_type[1].checked=true">HTML</a>
  </td>
</tr>
<tr>
<th class="fuentecampo" colspan="4" rowspan="1">
<a href= "javascript:comprobar()"> <img alt="<%=Mss_cr.getProperty("msscr.Pop11")%>"  src="/iconos/icono_crear_mss_36_36.gif"/></a>
</th>
</tr>
</table>
</form>

</m4:page>

<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</body>
</html>
