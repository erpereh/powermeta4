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
<body>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; 
    String zestado = "21";
  String wu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WORK_UNIT");
  String resp_tp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE");
  
%>

<script language="JavaScript" xml:space="preserve">

  function set_selection(total_records,operation_code)
  {
      var form = document.forms["sel_rev"];
    if (operation_code==0)
    {
       form.elements["OPERATION"].value=0
     form.submit();
    }
    else
    {

       var text = ""

       for (var i = 0; i < total_records; i++)
       {
        var new_dir = form.elements["STD_OR_MAIL_" + i].value
      form.elements["STD_OR_MAIL_" + i].disabled="disabled";
      form.elements["SEL_" + i].disabled="disabled";

        if (form.elements["SEL_" + i].checked==true)
        text =  text + new_dir + ";"
         }

     if (text=="")
           form.elements["OPERATION"].value=0
     else
     {
       form.elements["SEL_DIR"].value = text;
         form.elements["OPERATION"].value=1
         }

     form.submit();
    }
  }

</script>


<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
  <m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>
  <m4:exec node="SSM_HR_EMAIL_ADDRESS" alias="email_count" method="Count" m4object="<%=zsubsesion%>"/>
  <m4:outputdef node="SSM_HR_EMAIL_ADDRESS" m4alias="EMAIL" m4object="<%=zsubsesion%>"/>
</m4:job>


<table border="0" width="60%">
  <tr>
    <td class="titulofuncional" colspan="2"><%=Mss_cr.getProperty("msscr.Notif")%></td>
  </tr>
  <tr>
    <td rowspan="2"><img alt="<%=Mss_cr.getProperty("msscr.Notif")%>" src="/iconos/informacion_blanco.gif"/></td>
    <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Pop9-20")%> </td>
  </tr>
</table>

  <% String count; %>
  <% int icount = 0; %>
    <m4:outputexec var="count" alias="email_count"/>
    <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

  <%if (icount > 0) {%>
    <table width="60%" cellspacing="0" border="0">
      <tr class="tablaestadosceldatitulo">
        <td colspan ="2"><%=Mss_cr.getProperty("msscr.Preg1")%></td>
      </tr>
      <tr>
        <td class="fuentecampo" colspan="2">&nbsp;</td>
      </tr>
      <tr>
        <td class="fuentecampo" colspan="1"> <%=Mss_cr.getProperty("msscr.Lugar")%></td>
        <td class="fuentecampo"> <%=Mss_cr.getProperty("msscr.Seleccionar")%></td>
      </tr>

      <form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_mail_p.jsp?" method="post" enctype="application/x-www-form-urlencoded">

      <input name="SEL_DIR" id="SEL_DIR" type="hidden"/>
      <input name="OPERATION" id="OPERATION" type="hidden"/>
      <input name="WORK_UNIT" id="WORK_UNIT" type="hidden" value='<%=wu%>'/>
      <input name="RESP_TYPE" id="RESP_TYPE" type="hidden" value='<%=resp_tp%>'/>

      <m4:dataloop outputdef="EMAIL">

      <% Integer current; %>
      <m4:current var="current" outputdef="EMAIL"/>

        <m4:input name='<%= "STD_OR_MAIL_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="STD_EMAIL" htmlsafe="true" outputdef="EMAIL"/></m4:input>

        <tr>
          <td class="fuentevalor" colspan="1"> <m4:item item="STD_N_LOCATION_TYPE" outputdef="EMAIL" htmlsafe="true"/></td>
          <td class="fuentevalor"><input title="<%=Mss_cr.getProperty("msscr.Lugar")%>" name='<%= "SEL_" + (current)%>' id="<%= "SEL_" + (current)%>" type="checkbox"/></td>

        </tr>
        <tr>
          <td class="fuentecampo" colspan="2">&nbsp;</td>
        </tr>

      </m4:dataloop>

        <tr>
          <td class="fuentecampo" colspan="2"> <%=Mss_cr.getProperty("msscr.Texto1")%></td>
        </tr>
        <tr>
          <td class="fuentecampo" colspan="2"><textarea cols="50" rows="4" name="MAIL_TEXT" id="MAIL_TEXT"></textarea></td>
        </tr>
        <tr>
          <td class="fuentecampo" colspan="2">&nbsp;</td>
        </tr>

        <tr>
          <td class="fuentecampo" colspan="1"><a href="javascript:set_selection('<%=icount%>',1)" title="<%=Mss_cr.getProperty("msscr.Texto3")%>"><img src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Texto3")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>

          <td class="fuentecampo" colspan="1"><a href="javascript:set_selection('<%=icount%>',0)" title="<%=Mss_cr.getProperty("msscr.Texto4")%>"><img src="/iconos/icono_cancelar_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Texto4")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>

        </tr>
    </table>

  <%}%>
  </form>


</m4:page>
</body>
</html>
