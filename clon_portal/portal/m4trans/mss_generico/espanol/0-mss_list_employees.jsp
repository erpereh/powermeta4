<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ include file="/m4trans/mss_g1/0-smco_prof_cv_trans.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/mss_generico/0-mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Tabla118")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

</head>
<body>
<%
   String zsubsesion = "SSM_SET_WORK_UNIT_TO_SEE";
   String id_wu = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WU");
   id_wu = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", id_wu);
   String znodocabecera = "SMCO_GENERIC_PERSON_HEADER";
   String zoutputdefcabecera = zsubsesion + "!" + znodocabecera + "[*]";

   String zcomun = zsubsesion + "!" + znodocabecera + "[&VAR.m4lix]" + ".";

   String PERSDATAGBNAME = zcomun + "SMCO_GB_NAME";
   String PERSDATADTBIRTH = zcomun + "SMCO_DT_BIRTH";
   String PERSDATAGENDER = zcomun + "SMCO_N_GENDER";
   String PERSDATANATIONALITY = zcomun + "SMCO_NATIONALITY";
   String PERSDATAHOMEPAGE = zcomun + "SMCO_HOME_PAGE";
   String PERSDATASID = zcomun + "SMCO_ID_PERSON";
   String PERSDATAEMAIL = zcomun + "SMCO_EMAIL";
   String PERSDATAAGE= zcomun + "SMCO_AGE";
   String PERSDATAPHONE= zcomun + "SMCO_PHONE";
   String PERSDATAMOVIL= zcomun + "SMCO_PHONE_MOVIL";

   String PERSDATAMARITAL = zcomun + "SMCO_MARITAL_STATUS";

   String PERSDATAHIREDATA = zcomun + "SMCO_HIRE_DATA";
   String PERSDATAKEYEMPLOYEE = zcomun + "SMCO_KEY_EMPLOYEE";

   String PERSDATAPERSONTYPE = zcomun + "SMCO_PERSON_TYPE";

%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zsubsesion%>" m4name="<%=zsubsesion%>"/>
<m4:exec node="SSM_SET_WORK_UNIT_TO_SEE" method="SMCO_LOAD_WUNIT_EMPLOYEE_LIST" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_WORK_UNIT" value='<%= (id_wu)%>'/>
</m4:exec>


<m4:outputdef node="SSM_EMPLOYEES_4_WUNIT" m4alias="EMPL_WORK_U" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_EMPLOYEES_4_WUNIT" alias="emple_wu_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdefcabecera%>"/></m4:outputdef>
<m4:endjob/>
<m4:getapplparam section="PORTAL_PARAM" key="FIELDS_VISIBILITY" output="jsp"/>
<%
  String zfieldvis = (String)pageContext.getAttribute("FIELDS_VISIBILITY");
%>

<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="emple_wu_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%
  int  zcounti  = 0;  
  try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient("",zsubsesion,znodocabecera);
  } catch(Exception e) {}

  String zcountv = String.valueOf(zcounti);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
%>




<table border="0" width="100%">
  <tr>
    <td align="center" class="titulofuncional" colspan="2"><b><%=Mss_cr.getProperty("msscr.Tabla118")%></b></td>
  </tr>
  <tr><td colspan="2">&nbsp;</td></tr>

  <tr >
    <td rowspan="2"><img alt="<%=Mss_cr.getProperty("msscr.Info1-122")%>" src="/iconos/informacion_blanco.gif"/></td>
    <td align="center"><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Info1-122")%>&nbsp;
    <b><u><m4:item item="SSM_ID_WORK_UNIT" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="SSM_N_WORK_UNIT" htmlsafe="true" outputdef="EMPL_WORK_U"/></b></u><br/><br/>
    <%=Mss_cr.getProperty("msscr.Tabla119")%>:&nbsp;<b><m4:item item="SSM_NUM_EMPLOYEES_4_WORK_UNIT" htmlsafe="true" outputdef="EMPL_WORK_U"/></b>
    <br/><br/>
    </td>
  </tr>
</table>

  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
  <%
  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
  %>

  <m4:item m4varname="is_key_employee" m4name="<%=PERSDATAKEYEMPLOYEE%>"/>
  <m4:item m4varname="this_age" m4name="<%=PERSDATAAGE%>"/>

<script type="text/javaScript">
  function open_WEB(path)
  {
    window.open(path,'Vis','width=800;height=600,resizable,scrollbars');
  }

function load_prof(empleado){

var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
window.open(dir,'Vis','width=1024;height=650,resizable,scrollbars');
}

function load_cv(empleado){

var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&cabecera=1&zVis=0&person=" + empleado + "&RET=DAT";
window.open(dir,'Vis','width=1024;height=650,resizable,scrollbars');
}

</script>

<br/>

<table class="tablaestadosborde" width="100%" cellspacing="0"  border="0">
  <tr>
    <td width="100%"  valign="top">
      <table class="barraregistros" width="100%" cellspacing="0">
      <tr>
        <td class="tablaestadosceldatitulo" colspan="4">&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Title16")%></b></u></td>
      </tr>

      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAGBNAME%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAGBNAME%>"/></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAHOMEPAGE%>"/></b></td>
        <td class="fuentevalor">&nbsp;<a href="javascript:open_WEB('<m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/>');"
        title="<%=ProfCv.getProperty("prof_cv.Title6")%>"><u><m4:item m4name="<%=PERSDATAHOMEPAGE%>" htmlsafe="true"/></u></a></td>
      </tr>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAEMAIL%>"/></b></td>
        <td class="fuentevalor">&nbsp;<a href="mailto:<m4:item m4name="<%=PERSDATAEMAIL%>" htmlsafe="true"/>" title="<%=ProfCv.getProperty("prof_cv.Title5")%>"><u><m4:item m4name="<%=PERSDATAEMAIL%>" htmlsafe="true"/></u></a></td>

        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAPHONE%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAPHONE%>"/></td>
      </tr>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAMOVIL%>"/></b></td>
        <td class="fuentevalor">&nbsp;<m4:item m4name="<%=PERSDATAMOVIL%>"/></td>



          <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAKEYEMPLOYEE%>"/></b></td>
          <% if(is_key_employee.equals("1")) { %>
            <td class="fuentevalorojo">&nbsp;<b><%=ProfCv.getProperty("prof_cv.Label2")%></b></td>
          <%}else{%>
            <td class="fuentevalor">&nbsp;<%=ProfCv.getProperty("prof_cv.Label3")%></td>
          <%}%>
      </tr>
      <tr>
        <td class="fuentevalor">&nbsp;<b><m4:label m4name="<%=PERSDATAHIREDATA%>"/></b></td>
        <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=PERSDATAHIREDATA%>"/></td>
      </tr>

      </table>
    </td>
  </tr>
</table>
</m4:loop>


<%if (icount > 0) {%>

<table class="tablaestados" width="100%" cellspacing="0">

<tr class="tablaestadosceldatitulo">
  <td colspan="7"><b><u><%=Mss_cr.getProperty("msscr.Tabla118")%></b></u></td>
</tr>
<tr class="tablaestadosceldatitulo">


    <%if(zfieldvis.equals("0")){%>
    <td colspan="3"><%=Mss_cr.getProperty("msscr.ID6-3")%></td>
    <td colspan="2"><%=Mss_cr.getProperty("msscr.Tabla73")%></td>
    <td colspan="2"><%=Mss_cr.getProperty("msscr.Tabla74")%></td> 
    <%}else{%>
          <%if(zfieldvis.equals("2")){%>      
          <td colspan="1"><%=Mss_cr.getProperty("msscr.ID6-3")%></td>
          <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla722")%></td>
          <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla73")%></td>
          <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla74")%></td> 
          <%}else{%>    
            <td colspan="2"><%=Mss_cr.getProperty("msscr.ID6-3")%></td>
          <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla72")%></td>
          <td colspan="2"><%=Mss_cr.getProperty("msscr.Tabla73")%></td>
          <td colspan="2"><%=Mss_cr.getProperty("msscr.Tabla74")%></td>               
        <%}%>
    <%}%>
</tr>

<m4:dataloop outputdef="EMPL_WORK_U">


<tr>

  <% Integer current; %>
  <m4:current var="current" outputdef="EMPL_WORK_U"/>




    <%if(zfieldvis.equals("0")){%>
        <td colspan="3" class="fuentevalor">
        <m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>    
        <td colspan="2" class="fuentevalor">    
        <m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>
        <td colspan="2" class="fuentevalor">
        <m4:item item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="STD_N_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>   
    <%}else{%>
          <%if(zfieldvis.equals("2")){%>      
              <td colspan="1" class="fuentevalor">
            <m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>      
              <td colspan="1" class="fuentevalor">    
            <m4:item item="STD_DT_BIRTH" htmlsafe="true" outputdef="EMPL_WORK_U" m4format = "d MMMM " /></td>
            <td colspan="1" class="fuentevalor">
            <m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>
            <td colspan="1" class="fuentevalor">
            <m4:item item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="STD_N_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>
        <%}else{%>          
            <td colspan="2" class="fuentevalor">
            <m4:item item="SCO_ID_HR" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>    
            <td colspan="1" class="fuentevalor">    
            <m4:item item="STD_DT_BIRTH" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>
            <td colspan="2" class="fuentevalor">
            <m4:item item="SCO_OR_HR_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="SCO_N_ROLE" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>
            <td colspan="2" class="fuentevalor">
            <m4:item item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/> - <m4:item item="STD_N_JOB_CODE" htmlsafe="true" outputdef="EMPL_WORK_U"/></td>                         
        <%}%>
    <%}%>


</tr>
</m4:dataloop>    
</table>
<%
}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Negar")%><br><br>
</div>
<%}%> 

<table width="100%" cellspacing="0" border="0">
  <tr>
    <td align="center">&nbsp;
    </td>
  </tr>

  <tr>
    <td align="center">
    <a href="javascript:window.close()" title="<%=Mss_cr.getProperty("msscr.Pop1-12")%>"><img src="/iconos/entrar_blanco.gif" width="36" height="36" alt="<%=Mss_cr.getProperty("msscr.Pop1-12")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
    </td>
  </tr>
</table>

</body>
<m4:endpage/>
