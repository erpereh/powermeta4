<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Titulo1-1")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

</head>
<body>
<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
%>

<script language="JavaScript" xml:space="preserve">

  function delrec(num)
  {
    var form = document.forms["sel_rev"];

    if(form.elements["del_" + num].value == "0") {
      form.elements["del_" + num].value = "1";

      form.elements["HCO_CR_COMMENT_" + num].disabled = true;
    }
    else {
      form.elements["del_" + num].value = "0";

      form.elements["HCO_CR_COMMENT_" + num].disabled = false;
    }
  }

function set_comment()
{
  var form = document.forms["sel_rev"];
  form.submit();
}

</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_SALARY_REVIEW_COMMENTS" m4alias="COMMENTS" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_SALARY_REVIEW_COMMENTS" alias="num_comments" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3_comment_p.jsp?" method="GET" enctype="application/x-www-form-urlencoded">

<table class="tablaestados" width="100%" cellspacing="0" border="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="2">
      <%=Mss_cr.getProperty("msscr.Nuevo-9")%>
    </td>
  </tr>
  <tr>
    <td  class="fuentevalor" colspan="2">
      &nbsp;
    </td>

  </tr>
  <tr>
    <td  class="fuentecampo" colspan="1" width="30%">
      <%=Mss_cr.getProperty("msscr.Texto-9")%>
    </td>
    <td  class="fuentevalor" colspan="1">
      <textarea cols="30" name="HCO_CR_COMMENT" rows="4"></textarea>
    </td>

  </tr>
  <tr>
    <td  class="fuentevalor" colspan="2">
      &nbsp;
    </td>
  </tr>
</table>
<br/>

<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="num_comments"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%if (icount > 0) {%>

<table class="tablaestados" width="100%" cellspacing="0" border="0">
  <tr class="tablaestadosceldatitulo">
    <td colspan="3">
            <%=Mss_cr.getProperty("msscr.Comen-9")%>

    </td>
  </tr>


<m4:dataloop outputdef="COMMENTS">

  <% Integer current; %>
  <m4:current var="current" outputdef="COMMENTS"/>

  <m4:input name='<%= "PN_REC_INDEX_" + (current)%>' type="hidden"><m4:item item="PN_REC_INDEX" htmlsafe="true" outputdef="COMMENTS"/></m4:input>
  <input name="<%= "del_" + (current)%>" type="hidden" value="0"/>

  <tr>

    <td  class="fuentecampo" colspan="1" width="30%">
          <%=Mss_cr.getProperty("msscr.Texto-9")%>

    </td>

  <td class="fuentevalor" colspan="1"><textarea cols="30" name='<%= "HCO_CR_COMMENT_" + (current)%>' rows="4"><m4:item item="HCO_CR_COMMENT" outputdef="COMMENTS" /></textarea>&nbsp;&nbsp;&nbsp;<a href="<%= "javascript:delrec(" + (current) + ")"%>" shape="rect"><img src="/iconos/icono_eliminar_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Comen-ad")%>" title="<%=Mss_cr.getProperty("msscr.Comen-ad")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>

</tr>

</m4:dataloop>

<%}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.NoComent-9")%><br><br>
<%}%>
</table>
</br>
</br>

<tr>
  <td class="fuentevalor" colspan="2">&nbsp;</td>
  <td class="fuentevalor" colspan="1">&nbsp;&nbsp;<a href="javascript:set_comment()" shape="rect"><img src="/iconos/icono_aceptar_ess_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Comen-ad2")%>" title="<%=Mss_cr.getProperty("msscr.Comen-ad2")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </td>
  <td class="fuentevalor" colspan="1">&nbsp;&nbsp;<a href="javascript:window.close()" shape="rect"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Comen-ad3")%>" title="<%=Mss_cr.getProperty("msscr.Comen-ad3")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </td>

</table>
</form>
</body>
<m4:endpage/>

