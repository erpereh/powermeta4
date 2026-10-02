<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Link12")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

</head>
<body>
<%
   String zsubsesion = "SSM_SET_WORK_UNIT_TO_SEE";
   String id_wu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU");
   id_wu = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", id_wu);
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec node="SSM_SET_WORK_UNIT_TO_SEE" method="SSM_RESP_FOR_WORK_UNIT" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_WORK_UNIT" value='<%= (id_wu)%>'/>
</m4:exec>

<m4:exec node="SSM_SET_WORK_UNIT_TO_SEE" method="BUILD_SUB_WORK_UNIT_TREE_UP" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_WORK_UNIT" value='<%= (id_wu)%>'/>
</m4:exec>

<m4:outputdef node="SSM_WORK_UNIT_DATA" m4alias="WORK_U" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_WORK_UNIT_DATA" alias="wu_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_WORK_UNIT_RESP" m4alias="RESP" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_WORK_UNIT_RESP" alias="resp_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:outputdef node="SSM_SET_WORK_UNIT_TO_SEE" m4alias="ROOT" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_SET_WORK_UNIT_TO_SEE" alias="root_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>


<table border="0" width="100%">
  <tr>
    <td align="center" class="titulofuncional" colspan="2"><b><%=Mss_cr.getProperty("msscr.Titulo1-5")%></b></td>
  </tr>
  <tr><td colspan="2">&nbsp;</td></tr>

  <tr >
    <td rowspan="2"><img alt="<%=Mss_cr.getProperty("msscr.Pop9-20")%>" src="/iconos/informacion_blanco.gif"/></td>
    <td align="center"><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Titulo2-5")%></td>
  </tr>
  <tr>
  <td align="center"><u><b><br><m4:item item="STD_ID_WORK_UNIT" outputdef="WORK_U"/> - <m4:item item="STD_N_WORK_UNIT" outputdef="WORK_U"/></u></b><br><br></div></td>
  </tr>
</table>

<table class="tablaestados" width="100%" cellspacing="0" border="1">

<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="wu_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>


<% String count_3; %>
<% int icount_3 = 0; %>
  <m4:outputexec var="count_3" alias="resp_count"/>
  <% try { icount_3 = Integer.parseInt(count_3); } catch(Exception e) { icount_3 = 0; }%>

<%if (icount > 0) {%>

  <table width="100%" cellspacing="0" border="0" align="center">
    <tr class="tablaestadosceldatitulo">
      <td colspan ="4"><%=Mss_cr.getProperty("msscr.Titulo3-5")%></td>
    </tr>
    <tr>
      <td class="fuentecampo" colspan="4">&nbsp;</td>
    </tr>
    <tr>
      <td class="fuentecampo"><b><%=Mss_cr.getProperty("msscr.Titulo122")%></b></td>
      <td class="fuentevalor"><m4:item item="STD_ID_WORK_UNIT" outputdef="WORK_U"/> -- <m4:item item="STD_N_WORK_UNIT" outputdef="WORK_U"/></td>
    </tr>

    <tr>
      <td class="fuentecampo" colspan="4">&nbsp;</td>
    </tr>

    <tr>
      <td class="fuentecampo"><b><%=Mss_cr.getProperty("msscr.Titulo6-5")%></b></td>
      <td class="fuentevalor" colspan="3"> <m4:item item="STD_N_WU_TYPE" outputdef="WORK_U"/></td>
    </tr>

    <tr>
      <td class="fuentecampo"><b><%=Mss_cr.getProperty("msscr.Titulo3-5")%></b></td>
      <td class="fuentecampo" colspan="3"><textarea cols="30" rows="3"><m4:item item="STD_DESCRIPTION" outputdef="WORK_U"/></textarea></td>
    </tr>

    <tr>
      <td class="fuentecampo"><b><%=Mss_cr.getProperty("msscr.Titulo123")%></b></td>
      <td class="fuentecampo" colspan="3"><textarea cols="30" rows="3"><m4:item item="STD_OBJECTIVES" outputdef="WORK_U"/></textarea></td>
    </tr>

  </table>

  <%if (icount_3 > 0) {%>
    <table width="100%" cellspacing="0" border="0">
      <tr class="tablaestadosceldatitulo">
        <td colspan ="6"><%=Mss_cr.getProperty("msscr.Titulo11-5")%></td>
      </tr>
      <tr>
        <td class="fuentecampo" colspan="6">&nbsp;</td>
      </tr>
      <tr>
        <td class="fuentecampo" colspan="2"><b><%=Mss_cr.getProperty("msscr.Titulo12-5")%></b></td>
        <td class="fuentecampo"><b><%=Mss_cr.getProperty("msscr.ID4-3")%></b></td>
      </tr>

      <tr>
        <td class="fuentecampo" colspan="2">&nbsp;</td>
        <td class="fuentecampo">&nbsp;</td>
      </tr>

      <m4:dataloop outputdef="RESP">

      <% Integer current; %>
      <m4:current var="current" outputdef="RESP"/>

        <tr>

          <td class="fuentevalor" colspan="2"> <m4:item item="SCO_ID_HR" outputdef="RESP"/> - <m4:item item="SCO_GB_NAME" outputdef="RESP"/></td>
          <td class="fuentevalor"><m4:item item="SCO_N_TYPE_RES" outputdef="RESP"/></td>
        </tr>
        <tr>
          <td class="fuentecampo" colspan="6">&nbsp;</td>
        </tr>


    </m4:dataloop>

    </table>

  <%}else{%>
  <div class="fuentenodatos"><br><br><%=Mss_cr.getProperty("msscr.Aviso2-5")%><br><br></div>
  <%}%>

<%}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Aviso3-5")%><br><br>
<%}%>

</table>

    <table width="100%" cellspacing="0" border="0">
      <tr class="tablaestadosceldatitulo">
        <td colspan ="7"><%=Mss_cr.getProperty("msscr.Titulo11-52")%></td>
      </tr>
      <tr>
        <td class="fuentecampo" colspan="7">&nbsp;</td>
      </tr>

  <tr>
    <td colspan="8"><div class="descripcionfuncionalfondo"><%=Mss_cr.getProperty("msscr.Titulo2-52")%></td>
  </tr>


</table>
    <table width="100%" cellspacing="0" border="0">
      <tr>
        <td class="fuentecampo" colspan="7">&nbsp;</td>
      </tr>

      <tr>
        <td class="fuentecampo" colspan="6"><m4:item item="HTML_CODE_SUB_TREE" outputdef="ROOT"/></TD>


      <TD class="fuentecampo">

          <b><u><%=Mss_cr.getProperty("msscr.Tabla120")%></b></u><br><br>
        <ul class="fuentecampo">
          <li class="workunitreeroot_d"><b><%=Mss_cr.getProperty("msscr.Tabla81")%></b></li><br><br>
          <li class="workunitpadre_d"><b><%=Mss_cr.getProperty("msscr.Tabla82")%></b></li><br><br>
          <li class="workunithija_d"><b><%=Mss_cr.getProperty("msscr.Tabla83")%></b></li><br><br>
        </ul>


        </td>
      </tr>
    </table>


<table width="100%" cellspacing="0" border="0">
  <tr>
    <td align="center">

    <a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
    </td>
  </tr>
</table>

</body>
<m4:endpage/>
