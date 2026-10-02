<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

<%
//--------------------------------------------------------  
String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");
String periodo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");   
String nombre_empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre");   
String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");   

if ((zVis==null)||(zVis.equals(""))){
  zVis = "1";
}
//-------------------------------------------------------- 

%>

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>

<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>

<script type="text/javascript">

function comprobar()
{
  var error = 0;
  var texto = m4getmessage("_s1_co_mss_iv_2") + "\n";

  var sivname = m4valor("NombreFormulario","SCO_INTERVIEW_NAME","","get");
  var sreason = m4valor("NombreFormulario","SCO_INTERVIEW_REASON","","get");
  var sidhr = m4valor("NombreFormulario","SCO_ID_HR","","get");

  if (sivname == null || sivname == "")
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_10");
      error = 1;
    }

  if (sreason == null || sreason == "")
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_11");
      error = 1;
    }

  if (sidhr == null || sidhr == "")
    {
      texto = texto + "\n     " + m4getmessage("_s1_co_mss_iv_12"); 
      error = 1;
    }

  if (error == 1)
    {
      alert(texto);
      return;
    }
  else 
    {
      m4submit("NombreFormulario") ;
    }
}

function volver_prof(){
  document.getElementById("cargando").className = ""
  m4submit("volver") ;
  }

</script>

<% String zTitle = tranivMSS.getProperty("iv_mss.LinkAskIv"); %>
<title> <%=zTitle%> </title>

<%    
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  if ((estado==null)||(estado.equals(""))){estado="31";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%> 
</head>

<body>
<% if (zVis.equals("1")){%>
  <%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
  <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%}%>

<%
   String zsubsesion = "SSM_GN_INTERVIEW";
   String zmeta4object = "SSM_GN_INTERVIEW";
   String znodopr = "M4T_X_INTERVIEW_PRIORITY";
   String znodotp = "M4T_X_INTERVIEW_TYPE";

// Metodo de carga del Meta4Object generico
   String ztipocarga = "MSS";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";

// No se modifica en general.

   String zoutputdefpr = zsubsesion + "!" + znodopr + "[*]";
   String zmovepr = znodopr + ":" + znodopr + "[FIRST]";
   String zcomunpr = znodopr + ":" + zsubsesion + "!" + znodopr + "[&VAR.m4lix]" + ".";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOIDINTERVIEWPRIO = zcomunpr + "SCO_ID_INTERVIEW_PRIORITY";
   String zSCONMINTERVIEWPRIO = zcomunpr + "SCO_NM_INTERVIEW_PRIORITY";   

// No se modifica en general.

   String zoutputdeftp = zsubsesion + "!" + znodotp + "[*]";
   String zmovetp = znodotp + ":" + znodotp + "[FIRST]";
   String zcomuntp = znodotp + ":" + zsubsesion + "!" + znodotp + "[&VAR.m4lix]" + ".";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOIDINTERVIEWTYPE = zcomuntp + "SCO_ID_INTERVIEW_TYPE";
   String zSCONMINTERVIEWTYPE = zcomuntp + "SCO_NM_INTERVIEW_TYPE";   
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodopr%>"><m4:param name="m4name0" value="<%=zoutputdefpr%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodotp%>"><m4:param name="m4name0" value="<%=zoutputdeftp%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovepr%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovetp%>"/></m4:move>
<%
  int  zcountitmpintpr  = 0;
  int  zcountitmpinttp  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcountitmpintpr = m.getCountInClient(znodopr,zsubsesion,znodopr);
      zcountitmpinttp = m.getCountInClient(znodotp,zsubsesion,znodotp);
  } catch(Exception e) {}
  String  zcountvtmpintpr = String.valueOf(zcountitmpintpr);
  String ztotmpintpr = new Integer(new Integer(zcountvtmpintpr).intValue()-1).toString();
  String  zcountvtmpinttp = String.valueOf(zcountitmpinttp);
  String ztotmpinttp = new Integer(new Integer(zcountvtmpinttp).intValue()-1).toString();
%>
<table width="100%" >
<tr><td class="titulofuncional" colspan="2"><%=tranivMSS.getProperty("iv_mss.LinkAskIv")%>  </td></tr>
<tr>
  <td><img alt="<%=zTitle%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100"/></td>
  <td>
    <div class="descripcionfuncional"><%=tranivMSS.getProperty("iv_mss.DescAskiv")%></div>
    <% if (zVis.equals("1")){%>
      <ul class="enlacefuncional">
        <li>
          <a title="<%=tranivMSS.getProperty("iv_mss.LblGoto")%> <%=tranivMSS.getProperty("iv_mss.GestInterview")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31"><%=tranivMSS.getProperty("iv_mss.GestInterview")%></a>
        </li>
      </ul>
    <%}%>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_send.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<% if (zVis.equals("1")){%>
  <input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="" />
  <input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD" value="" />
  <input type="hidden" id="zVis" name="zVis" value="1" />
<%}else{%>
  <input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<%=empleado%>" />
  <input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD" value="<%=periodo%>" />
  <input type="hidden" id="zVis" name="zVis" value="0" />
<%}%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td colspan="2"><%=tranivMSS.getProperty("iv_mss.LblSolicitud")%></td>
    <td class="tablamenuright">
  <% if (zVis.equals("1")){%>
    <a title="<%=tranivMSS.getProperty("iv_mss.GestInterview")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31">
        <img alt="<%=tranivMSS.getProperty("iv_mss.GestInterview")%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
    </a>
  <%}%>
    </td>
</tr>
<tr>
  <td class="fuentecampo" width="20%">*&nbsp;<%=tranivMSS.getProperty("iv_mss.LblNameIv")%>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <input class="fuenteformulario" type="text" name="SCO_INTERVIEW_NAME" id="SCO_INTERVIEW_NAME" title="<%=tranivMSS.getProperty("iv_mss.LblChooseNameIv")%>" maxlength="255" size="80" tabindex="1" />&nbsp;
  </td>
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<m4:label m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe="true"/>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <select id="SCO_ID_INTERVIEW_TYPE" class="fuenteformulario" name="SCO_ID_INTERVIEW_TYPE" title="<%=tranivMSS.getProperty("iv_mss.LblChooseTypeIv")%>" tabindex="2">
  <m4:loop from="0" to="<%=ztotmpinttp%>">
     <option value="<m4:item m4name="<%=zSCOIDINTERVIEWTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<m4:label m4name="<%=zSCONMINTERVIEWPRIO%>" htmlsafe="true"/>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <select id="SCO_ID_INTERVIEW_PRIORITY" class="fuenteformulario" name="SCO_ID_INTERVIEW_PRIORITY" title="<%=tranivMSS.getProperty("iv_mss.LblChoosePrioIv")%>" tabindex="3">
  <m4:loop from="0" to="<%=ztotmpintpr%>">
           <option value="<m4:item m4name="<%=zSCOIDINTERVIEWPRIO%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMINTERVIEWPRIO%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<%=tranivMSS.getProperty("iv_mss.Reason")%>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <textarea class="fuentetextarea" name="SCO_INTERVIEW_REASON" id="SCO_INTERVIEW_REASON" title="<%=tranivMSS.getProperty("iv_mss.LblChooseReasonIv")%>" cols="85" rows="5" tabindex="4"></textarea>
  </td>
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<%=tranivMSS.getProperty("iv_mss.LblIdIv")%>
  </td>
  <td class="fuentecampo" colspan="2">
  <% if (zVis.equals("1")){%>
    <input class="fuenteformulario" type="text" name="SCO_GB_NAME" id="SCO_GB_NAME" readonly="readonly" title="<%=tranivMSS.getProperty("iv_mss.LblIdIv")%>" maxlength="50" size="50" value=""/>&nbsp;
    <a tabindex="5" href="javascript:sse_filtro('NombreFormulario','SCO_ID_HR','SCO_OR_HR_PERIOD','SCO_GB_NAME')" title="<%=tranivMSS.getProperty("iv_mss.LblChooseEmp")%>"><img alt="<%=tranivMSS.getProperty("iv_mss.LblChooseEmp")%>" src="/iconos/icono_lista_16_16.gif"  width="16" height="16" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
<%}else{%>
    <input class="fuenteformulario" type="text" name="SCO_GB_NAME" id="SCO_GB_NAME" readonly="readonly" title="<%=tranivMSS.getProperty("iv_mss.LblIdIv")%>" maxlength="50" size="50" value="<%=nombre_empleado%>"/>&nbsp;
<%}%>
  </td>
</tr>
<tr>
  <td class="fuenteboton" colspan="3">
    <a title="<%=tranivMSS.getProperty("iv_mss.Send")%>" href="javascript:comprobar();" tabindex="6"><img alt="<%=tranivMSS.getProperty("iv_mss.LblSend")%>" src="/iconos/icono_enviar_mss_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  <% if (zVis.equals("0")){%>
      <a title="<%=tranivMSS.getProperty("iv_mss.LblProfData")%>" href="javascript:volver_prof();" tabindex="6"><img alt="<%=tranivMSS.getProperty("iv_mss.LblProfData")%>" src="/iconos/icono_entrar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  <%}%> 
  </td>
</tr>
</table>
</form>
<% if (zVis.equals("0")){%>
  <form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
    <input type="hidden" id="person" name="person" value="<%=empleado%>" />
    <input type="hidden" id="person_ord" name="person_ord" value="<%=periodo%>" />
  </form>
  <div id="cargando" name="cargando" class="invisible2"  style="position: relative; top: 0; left: 0">&nbsp;
  <table  class ="cargando">
    <tr><td>&nbsp;<img src="/iconos/cargando.gif" alt='<%=Tran.getProperty("Button.Volver")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
    <td>&nbsp;&nbsp;&nbsp;<%=Tran.getProperty("Button.Volver")%>&nbsp;&nbsp;</td></tr></table> 
  </div>
<%}%>
<br> <br/>
<% if (zVis.equals("1")){%>
  <%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
<%}%>
</body>
</html>