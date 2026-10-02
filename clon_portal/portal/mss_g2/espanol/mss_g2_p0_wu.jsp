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
   String id_wu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU");
   id_wu = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", id_wu);
   String resp_tp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RESP_TYPE");
%>

<script language="JavaScript" xml:space="preserve">

  function set_rev(this_record,total_records)
  {

    var form = document.forms["sel_rev"];

// si esta función se ejecuta al menos una vez, es porque el usuario ha pulsado sobre alguna de las casillas que permiten hacer una
// delegación de la responsabilidad de revisar salarios. Queremos tener constancia de que esto ha sucedido, con el objetivo de, al
// pulsar el botón de cerrar, ejecutar o no ejecutar el submit del formulario.

    form.elements["ANY_CHANGE"].value= 1;

    if (form.elements["REV_" + this_record].checked==false)
    {
      form.elements["EMPLOYEE"].value = "";
      form.elements["EMPLOYEE_OR"].value = "";
    }
    else
    {
      form.elements["EMPLOYEE"].value = form.elements["ENC_SCO_ID_HR_" + this_record].value;
      form.elements["EMPLOYEE_OR"].value = form.elements["ENC_SCO_OR_HR_PERIOD_" + this_record].value;

      for (var i = 0; i < total_records; i++)
      {
      if (i!= this_record)
        form.elements["REV_" + i].checked=false
        }

      }

  }

  function comprobar()
  {
    var form_1 = document.forms["check_manager"];

    var able_to_submit = parseInt(form_1.elements["THERE_ARE_MANAGERS"].value);
    if (able_to_submit != 0)
    {
      var form = document.forms["sel_rev"];
      if (form.elements["ANY_CHANGE"].value!=1)
      {
        alert("<%=Mss_cr.getProperty("msscr.NOHTML_Pop_ad")%>");
        return;
      }
      form.elements["ANY_CHANGE"].disabled="disabled";
      form.submit();
    }
    else
      window.close();
  }
</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec node="SSM_SHOW_DATA_WORK_UNIT" method="CR_SHOW_WORK_UNIT_DATA" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_WORK_UNIT" value='<%= (id_wu)%>'/>
</m4:exec>
<m4:outputdef node="SSM_SHOW_DATA_WORK_UNIT" m4alias="WORK_U" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_SHOW_DATA_WORK_UNIT" alias="wu_count" method="Count" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_SHOW_WU_RESPONSABLES" m4alias="RESP" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_SHOW_WU_RESPONSABLES" alias="resp_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<% M4SessionCl zsesion = M4Context.getM4SessionCl(request); 
  String zIdPerson = zsesion.getBagEntries("zIdPerson"); 
%>


<table border="0" width="100%">
  <tr>
    <td class="titulofuncional" colspan="2"><%=Mss_cr.getProperty("msscr.Titulo1-5")%></td>
  </tr>
  <tr>
    <td rowspan="2"><img alt="<%=Mss_cr.getProperty("msscr.Pop9-20")%>" src="/iconos/informacion_blanco.gif"/></td>
    <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Titulo2-5")%></td>
  </tr>
  <tr>
  <td align="center"><u><b><m4:item item="STD_N_WORK_UNIT" outputdef="WORK_U" htmlsafe="true"/></u></b> </div></td>
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

  <form name="check_manager" action="" method="post" enctype="application/x-www-form-urlencoded">
    <input name="THERE_ARE_MANAGERS" id="THERE_ARE_MANAGERS" type="hidden" value='<%=icount_3%>'/>
  </form>

<%if (icount > 0) {%>

  <table width="100%" cellspacing="0" border="0" align="center">
    <tr class="tablaestadosceldatitulo">
      <td colspan ="4"><%=Mss_cr.getProperty("msscr.Titulo3-5")%></td>
    </tr>
    <tr>
      <td class="fuentecampo" colspan="4">&nbsp;</td>
    </tr>
    <tr>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo4-5")%></td>
      <td class="fuentevalor"> <m4:item item="STD_ID_WORK_UNIT" outputdef="WORK_U" htmlsafe="true"/></td>
      <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo5-5")%></td>
      <td class="fuentevalor"> <m4:item item="STD_N_WORK_UNIT" outputdef="WORK_U" htmlsafe="true"/></td>
    </tr>

    <tr>
      <td class="fuentecampo" colspan="4">&nbsp;</td>
    </tr>

    <tr>
      <td class="fuentecampo"> <%=Mss_cr.getProperty("msscr.Titulo6-5")%></td>
      <td class="fuentevalor" colspan="3"> <m4:item item="STD_N_WU_TYPE" outputdef="WORK_U" htmlsafe="true"/></td>
    </tr>

    <tr>
      <td class="fuentecampo"> <%=Mss_cr.getProperty("msscr.Titulo3-5")%></td>
      <td class="fuentecampo" colspan="3"><textarea cols="30" rows="2"><m4:item item="STD_DESCRIPTION" outputdef="WORK_U" htmlsafe="true"/></textarea></td>
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
        <td class="fuentecampo" colspan="2"> <%=Mss_cr.getProperty("msscr.Titulo12-5")%></td>
        <td class="fuentecampo"> <%=Mss_cr.getProperty("msscr.ID4-3")%></td>
        <td class="fuentecampo" colspan="2"> <%=Mss_cr.getProperty("msscr.Titulo13-5")%></td>
        <td class="fuentecampo"><%=Mss_cr.getProperty("msscr.Titulo14-5")%></td>
      </tr>

      <form name="sel_rev" action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu_p.jsp?" method="post" enctype="application/x-www-form-urlencoded">

      <input name="EMPLOYEE" id="EMPLOYEE" type="hidden"/>
      <input name="EMPLOYEE_OR" id="EMPLOYEE_OR" type="hidden"/>
      <input name="ANY_CHANGE" id="ANY_CHANGE" type="hidden"/>
      <%id_wu = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", id_wu);%>
      <input name="WORK_UNIT" id="WORK_UNIT" type="hidden" value='<%=id_wu%>'/>
      <input name="RESP_TYPE" id="RESP_TYPE" type="hidden" value='<%=resp_tp%>'/>

      <m4:dataloop outputdef="RESP">

      <% Integer current; %>
      <m4:current var="current" outputdef="RESP"/>

        <tr>

          <m4:item m4varname="id_employee" item="SCO_ID_HR" htmlsafe="true" outputdef="RESP"/>
          <%id_employee = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", id_employee);%>
          <input name='<%= "ENC_SCO_ID_HR_" + (current)%>' id='<%= "ENC_SCO_ID_HR_" + (current)%>' type="hidden" value='<%=id_employee%>'/>
          
          
          <m4:item m4varname="or_employee" item="SCO_OR_HR_PERIOD" htmlsafe="true" outputdef="RESP"/>
          <%or_employee = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", or_employee);%>
          <input name='<%= "ENC_SCO_OR_HR_PERIOD_" + (current)%>' id='<%= "ENC_SCO_OR_HR_PERIOD_" + (current)%>' type="hidden" value='<%=or_employee%>'/>
          
          <m4:input name='<%= "SCO_ID_HR_" + (current)%>' type="hidden" disabled="disabled"><m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="RESP"/></m4:input>
          <m4:input name='<%= "SCO_OR_HR_PERIOD_"  + (current)%>' type="hidden"  disabled="disabled" ><m4:item item="SCO_OR_HR_PERIOD"  htmlsafe="true"  outputdef="RESP" /></m4:input>

          <td class="fuentevalor" colspan="2"> <m4:item item="SCO_ID_HR" outputdef="RESP" htmlsafe="true"/> - <m4:item item="SCO_GB_NAME" outputdef="RESP" htmlsafe="true"/></td>
          <td class="fuentevalor"><m4:item item="SCO_N_TYPE_RES" outputdef="RESP" htmlsafe="true"/></td>
          <td class="fuentevalor" colspan="2"><m4:item item="SCO_NM_POSITION" outputdef="RESP" htmlsafe="true"/></td>
          <td class="fuentevalor"><input title="<%=Mss_cr.getProperty("msscr.Pop_ad2")%>" name='<%= "REV_" + (current)%>' id="<%= "REV_" + (current)%>"  type="checkbox" onclick="set_rev('<%=current%>','<%=icount_3%>')"/></td>

        </tr>
        <tr>
          <td class="fuentecampo" colspan="6">&nbsp;</td>
        </tr>

        <m4:input name='<%= "SCO_ID_TYPE_RESP_"  + (current)%>' type="hidden"  disabled="disabled" ><m4:item item="SCO_ID_TYPE_RESP"  htmlsafe="true"  outputdef="RESP" /></m4:input>

        <script language="JavaScript" xml:space="preserve">
               var form = document.forms["sel_rev"];
           var i = <%=current%>;
           if (form.elements["SCO_ID_TYPE_RESP_" + i].value=="112")
           {
              form.elements["REV_" + i].checked=true;
              form.elements["EMPLOYEE"].value = form.elements["SCO_ID_HR_" + i].value;
              form.elements["EMPLOYEE_OR"].value = form.elements["SCO_OR_HR_PERIOD_" + i].value;
           }

           if (form.elements["SCO_ID_HR_" + i].value=="<%=zIdPerson%>")
             form.elements["REV_" + i].disabled="disabled";

           if (form.elements["RESP_TYPE"].value=="112")
             form.elements["REV_" + i].disabled="disabled";

        </script>
    </m4:dataloop>

    </table>
</form>
  <%}else{%>
  <div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Aviso2-5")%><br><br></div>
  <%}%>

<%}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Aviso3-5")%><br><br>
<%}%>

</table>

<table width="100%" cellspacing="0" border="0">
  <tr>
    <td align="center">

    <a href="javascript:comprobar()" title="<%=Mss_cr.getProperty("msscr.Pop3-21")%>"><img src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop3-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>

    <a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>

    </td>
  </tr>
</table>

</body>
<m4:endpage/>
