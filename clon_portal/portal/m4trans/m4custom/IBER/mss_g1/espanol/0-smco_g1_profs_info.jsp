<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
  M4SessionManager m4Session = M4Context.getSession(request);
  String sPathTempMap = m4Session.getPathTempMapping();

  String person = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"person");
  person = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", person);

  String person_ord = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"person_ord");

  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  } 
%>  

<%@ include file="/m4trans/m4custom/IBER/mss_g1/0-smco_prof_cv_trans.jsp" %>
<head>

<title><%=ProfCv.getProperty("prof_cv.Title")%></title>

<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>

<body>

<%
   String zsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String zmeta4object = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String znodo = "SMCO_PROFS_INFO_PERSONAL_DATA";
   String znodo2 = "SMCO_PROFS_INFO_JOBS";
   String znodo3 = "SMCO_PROFS_INFO_LEGAL_ENTITY";
   String znodo4 = "SMCO_PROFS_INFO_EMPLOYEE_TYPE";
   String znodo5 = "SMCO_PROFS_INFO_CONTRACT";
   String znodo6 = "SMCO_PROFS_INFO_ROLES";
   String znodo7 = "SMCO_PROFS_INFO_WORK_LOCATION";
   String znodo8 = "SMCO_PROFS_INFO_WORK_UNITS";
   String znodo9 = "SMCO_PROFS_INFO_ROLE_WORK_TIME";
   String znodo10 = "SMCO_PROFS_INFO_WORK_TEAMS";
   String znodo11 = "SMCO_PROFS_INFO_TRANSFER";
   String znodo12 = "SMCO_PROFS_INFO_PREFERENCES";
   String znodo13 = "SMCO_PROFS_INFO_INCIDENT_ACCNS";
   String znodo14 = "SMCO_PROFS_INFO_COM_PROPERTIES";
   String znodo15 = "SMCO_PROFS_INFO_FAMILY";
   String znodo16 = "SMCO_PROFS_INFO_POSITION";
   String znodocontrol = "SMCO_NODES_TO_SHOW";
   String znodoroot = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String znodovisibility = "SMCO_WHAT_IS_VISIBLE";

   String zcomuncontrol = zsubsesion + "!" + znodocontrol + ".";
   String zcomuncontrol2 = zsubsesion + "!" + znodocontrol + "[&VAR.m4lix]" + ".";
   String zcomunvisibility = zsubsesion + "!" + znodovisibility + "[&VAR.m4lix]" + ".";

   String zSMCONUMRECORDSNOTLINKS = zcomuncontrol + "SMCO_NUM_RECORDS_NOT_LINKS";
   String zSMCONUMRECORDSLINKS = zcomuncontrol + "SMCO_NUM_RECORDS_LINKS";
   String zSMCOHRTOPROCESS = zcomuncontrol + "SMCO_HR_TO_PROCESS";
   String zSMCOORHRTOPROCESS = zcomuncontrol + "SMCO_OR_HR_TO_PROCESS";
   String zSMCOORHRROLETOPROCESS = zcomuncontrol + "SMCO_OR_HR_ROLE_TO_PROCESS";
   String zSMCOGBNAMETOPROCESS = zcomuncontrol + "SMCO_GB_NAME_TO_PROCESS";

   String zSMCOTYPEDATA = zcomuncontrol2 + "SMCO_TYPE_DATA";
   String zSMCOLAYERNAME = zcomuncontrol2 + "SMCO_LAYER_NAME";

   String zSMCOIDLAYERTOVIEW = zcomunvisibility + "SMCO_ID_LAYER_TO_VIEW";
         
   // No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";
   String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";
   String zoutputdef9 = zsubsesion + "!" + znodo9 + "[*]";
   String zoutputdef10 = zsubsesion + "!" + znodo10 + "[*]";
   String zoutputdef11 = zsubsesion + "!" + znodo11 + "[*]";
   String zoutputdef12 = zsubsesion + "!" + znodo12 + "[*]";
   String zoutputdef13 = zsubsesion + "!" + znodo13 + "[*]";
   String zoutputdef14 = zsubsesion + "!" + znodo14 + "[*]";
   String zoutputdef15 = zsubsesion + "!" + znodo15 + "[*]";
   String zoutputdef16 = zsubsesion + "!" + znodo16 + "[*]";
   String zoutputdefcontrol = zsubsesion + "!" + znodocontrol + "[*]";
   String zoutputdefvisibility = zsubsesion + "!" + znodovisibility + "[*]";
   String zmoveroot = znodoroot + "[FIRST]";
   String zmovecontrol = znodocontrol + "[FIRST]";

   request.setAttribute("calling_page", "smco_g1_profs_info");

%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec node="SMCO_EMPLOYEE_PROFESIONAL_DATA" method="SMCO_LOAD_PROFESIONAL_INFO" m4object="<%=zsubsesion%>">
  <m4:param name="ARG_HR_PERIOD" value="<%=person%>"/>
  <m4:param name="ARG_OR_HR_PERIOD" value="<%=person_ord%>"/>
  <m4:param name="ARG_PATH_TEMP" value="<%=sPathTempMap%>"/>
</m4:exec>

<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmoveroot%>"/></m4:move>

<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef7%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef8%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef9%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef10%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef11%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef12%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef13%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef14%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef15%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef16%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdefcontrol%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdefvisibility%>"/></m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmovecontrol%>"/></m4:move>
<%
  int  zcount2i  = 0; 
  int  zcount3i  = 0; 
  int  zcount4i  = 0; 
  int  zcount5i  = 0; 
  int  zcount6i  = 0; 
  int  zcount7i  = 0; 
  int  zcount8i  = 0; 
  int  zcount9i  = 0; 
  int  zcount10i  = 0;  
  int  zcount11i  = 0;  
  int  zcount12i  = 0;  
  int  zcount13i  = 0;  
  int  zcount14i  = 0;  
  int  zcount15i  = 0;  
  int  zcount16i  = 0;  
  int  zcount1controli  = 0;  
  int  zcountvisibilityi  = 0;  

  try {
      M4Operations m = new M4Operations(request);
      zcount2i = m.getCountInClient("",zsubsesion,znodo6);
      zcount3i = m.getCountInClient("",zsubsesion,znodo6);
      zcount4i = m.getCountInClient("",zsubsesion,znodo6);
      zcount5i = m.getCountInClient("",zsubsesion,znodo6);
      zcount6i = m.getCountInClient("",zsubsesion,znodo6);
      zcount7i = m.getCountInClient("",zsubsesion,znodo7);
      zcount8i = m.getCountInClient("",zsubsesion,znodo8);
      zcount9i = m.getCountInClient("",zsubsesion,znodo9);
      zcount10i = m.getCountInClient("",zsubsesion,znodo10);
      zcount11i = m.getCountInClient("",zsubsesion,znodo11);
      zcount12i = m.getCountInClient("",zsubsesion,znodo12);
      zcount13i = m.getCountInClient("",zsubsesion,znodo13);
      zcount14i = m.getCountInClient("",zsubsesion,znodo14);
      zcount15i = m.getCountInClient("",zsubsesion,znodo15);
      zcount16i = m.getCountInClient("",zsubsesion,znodo16);
      zcount1controli = m.getCountInClient("",zsubsesion,znodocontrol);
      zcountvisibilityi = m.getCountInClient("",zsubsesion,znodovisibility);

  } catch(Exception e) {}

  String  zcountcontrolv = String.valueOf(zcount1controli);
  String  zcountvisibilityv = String.valueOf(zcountvisibilityi);
%>

<m4:item m4varname="records_to_control" m4name="<%=zSMCONUMRECORDSNOTLINKS%>"/>
<m4:item m4varname="empleado" m4name="<%=zSMCOHRTOPROCESS%>"/>
<%empleado = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", empleado);%>
<m4:item m4varname="periodo" m4name="<%=zSMCOORHRTOPROCESS%>"/>
<m4:item m4varname="role" m4name="<%=zSMCOORHRROLETOPROCESS%>"/>
<m4:item m4varname="records_links" m4name="<%=zSMCONUMRECORDSLINKS%>"/>
<m4:item m4varname="nombre_empleado" m4name="<%=zSMCOGBNAMETOPROCESS%>"/>

<%
request.setAttribute("empleado", empleado);
request.setAttribute("periodo", periodo);
request.setAttribute("role", role);
request.setAttribute("zVis", "0");
request.setAttribute("nombre_empleado", nombre_empleado);
%>

<form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_imprimir.jsp?estado=11" method="post" name="imprimir" id="imprimir">
  <input type="hidden" id="codigo_HTML" name="codigo_HTML"  value="" />
  <input type="hidden" id="empleado" name="empleado"  value="<%=empleado%>" />
  <input type="hidden" id="periodo" name="periodo"  value="<%=periodo%>" />

</form>

<form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_salvar.jsp?estado=11" method="get" name="salvar_configuracion" id="salvar_configuracion">
  <input type="hidden" id="layers_visibles" name="layers_visibles"  value="" />
  <input type="hidden" id="empleado" name="empleado"  value="<%=empleado%>" />
  <input type="hidden" id="periodo" name="periodo"  value="<%=periodo%>" />
</form>

<form id="contador" name="contador">
  <input type="hidden" id="CSMCO_PROFS_INFO_JOBS" name="CSMCO_PROFS_INFO_JOBS"  value="<%=zcount2i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_LEGAL_ENTITY" name="CSMCO_PROFS_INFO_LEGAL_ENTITY"  value="<%=zcount3i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_EMPLOYEE_TYPE" name="CSMCO_PROFS_INFO_EMPLOYEE_TYPE"  value="<%=zcount4i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_CONTRACT" name="CSMCO_PROFS_INFO_CONTRACT"  value="<%=zcount5i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_ROLES" name="CSMCO_PROFS_INFO_ROLES"  value="<%=zcount6i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_WORK_LOCATION" name="CSMCO_PROFS_INFO_WORK_LOCATION"  value="<%=zcount7i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_WORK_UNITS" name="CSMCO_PROFS_INFO_WORK_UNITS"  value="<%=zcount8i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_ROLE_WORK_TIME" name="CSMCO_PROFS_INFO_ROLE_WORK_TIME"  value="<%=zcount9i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_WORK_TEAMS" name="CSMCO_PROFS_INFO_WORK_TEAMS"  value="<%=zcount10i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_TRANSFER" name="CSMCO_PROFS_INFO_TRANSFER"  value="<%=zcount11i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_PREFERENCES" name="CSMCO_PROFS_INFO_PREFERENCES"  value="<%=zcount12i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_INCIDENT_ACCNS" name="CSMCO_PROFS_INFO_INCIDENT_ACCNS"  value="<%=zcount13i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_COM_PROPERTIES" name="CSMCO_PROFS_INFO_COM_PROPERTIES"  value="<%=zcount14i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_FAMILY" name="CSMCO_PROFS_INFO_FAMILY"  value="<%=zcount15i%>" />
  <input type="hidden" id="CSMCO_PROFS_INFO_POSITION" name="CSMCO_PROFS_INFO_POSITION"  value="<%=zcount16i%>" />
</form>

<form id="visibility" name="visibility">

<%
  String zposicionvisibilitys = "0";
  int zcontrolvisibility = 0;
  int zposicionvisibility =0;

%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountvisibilityv).intValue()-1).toString()%>">
  <%
    zposicionvisibilitys = m4lix;
    zposicionvisibility = Integer.valueOf(zposicionvisibilitys).intValue();
  %>
  <m4:item m4varname="one_layer_visible" m4name="<%=zSMCOIDLAYERTOVIEW%>"/>
  <input type="hidden" id='<%= "LAYER_" + (one_layer_visible)%>' name='<%= "LAYER_" + (one_layer_visible)%>'  value="<%=one_layer_visible%>" />
</m4:loop>
</form>


<form id="links" name="links">

<%
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
  int contador = 0;
%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountcontrolv).intValue()-1).toString()%>">
  <%
    zposicions = m4lix;
    zposicion = Integer.valueOf(zposicions).intValue();
    zcontrol = zposicion%2;
  %>
  <m4:item m4varname="data_type" m4name="<%=zSMCOTYPEDATA%>"/>

  <% if (data_type.equals("LINK")){ contador++;%>

    <m4:item m4varname="layer_name" m4name="<%=zSMCOLAYERNAME%>"/>

    <input type="hidden" id='<%= "LINK_" + (contador)%>' name='<%= "LINK_" + (contador)%>'  value="<%=layer_name%>" />

  <%}%>

</m4:loop>
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_select_employee.jsp?estado=11" method="post" name="list" id="list">
  <input type="hidden" id="RET" name="RET" value="" />
</form>

<form name="isDrag" id="isDrag">
  <input type="hidden" id="drag" name="drag" value="0" />
</form>

<div id="capa_cuerpo" style="position:absolute; left:5%; top:15px; width:90%; z-index:1">
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_cabecera.jsp" flush="true"/></br>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_control.jsp" flush="true" />


<table width = "100%">
  <tr>
    <td width = "50%" class="" align="left">

      <a href="javascript:pon_todos_visibles();" title='<%=ProfCv.getProperty("prof_cv.Title1")%>'>
        <img src="/iconos/select_all.gif" alt='<%=ProfCv.getProperty("prof_cv.Title1")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;
      <a href="javascript:pon_todos_invisibles();" title='<%=ProfCv.getProperty("prof_cv.Title2")%>'>
        <img src="/iconos/unselect_all.gif" alt='<%=ProfCv.getProperty("prof_cv.Title2")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;
      <a href="javascript:imprimir_ficha();" title='<%=ProfCv.getProperty("prof_cv.Title3")%>'>
        <img src="/iconos/send_email.gif" alt='<%=ProfCv.getProperty("prof_cv.Title3")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;
      <a href="javascript:selectOtherEmployee();" title='<%=ProfCv.getProperty("prof_cv.Title10")%>'>
        <img src="/iconos/icono_mss_36_36.gif" width="36" height="36" alt='<%=ProfCv.getProperty("prof_cv.Title10")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;
      <a href="javascript:viewCV();" title='<%=ProfCv.getProperty("prof_cv.Title11")%>'>
        <img src="/iconos/emp_cv.gif" width="36" height="36" alt='<%=ProfCv.getProperty("prof_cv.Title11")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;

      <a href='#' onclick="javascript:ahoraVisibles(event);" title='<%=ProfCv.getProperty("prof_cv.Title12")%>'>
        <img src="/iconos/save_config.gif" alt='<%=ProfCv.getProperty("prof_cv.Title12")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;

      <a href='#' onclick="javascript:controlCollapsed.slideit()" title='<%=ProfCv.getProperty("prof_cv.Colapsar")%>'>
        <img src="/iconos/add.gif" alt='<%=ProfCv.getProperty("prof_cv.Colapsar")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;

      <a href='#' onclick="javascript:returnSituation()" title='<%=ProfCv.getProperty("prof_cv.Volver")%>'>
        <img src="/iconos/accept.gif" alt='<%=ProfCv.getProperty("prof_cv.Volver")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>&nbsp;&nbsp;


      <div id="flotante" name="flotante" class="flotanterojo" width="250px" height="150px">
        <table class = "tablaestados" width="250px" height="40px" cellspacing="0" border="0">
          <tr class = "tablaestadosceldatitulorojo"><td width="100%" colspan="2">&nbsp;</td>
          <tr><td align="center" class="titulofuncional" width="90%"><br/><u><b><%=ProfCv.getProperty("prof_cv.ErrorTitulo")%></b></u><br/><br/></td>
          <td width="10%"><a href='#' onclick="javascript:document.getElementById('flotante').style.display='none';" title='<%=ProfCv.getProperty("prof_cv.Cerrar")%>'>
        <img src="/iconos/icono_borrar_16_16.gif" width="16" height="16" alt='<%=ProfCv.getProperty("prof_cv.Cerrar")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
      </a>  
          </tr></table>
        <table class = "tablaestados" width="250px" height="100px" cellspacing="0">
           <tr><td width="2%">&nbsp;</td><td class="fuentevalornaranja" width="96%"><div  align="JUSTIFY"><b><%=ProfCv.getProperty("prof_cv.Descripcion")%></b><br/><br/></div></td><td width="2%">&nbsp;</td></tr>
          <tr class = "tablaestadosceldatitulorojo"><td colspan="3" width="100%">&nbsp;</td><tr>
        </table>
      </div>

    </td>
    <td width = "35%" class="" align="left">
      <table width="100%" id="DragYes" name="DragYes"><tr><td>
        <a href="javascript:activarDrag();">&nbsp;&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Title14")%></b></u></a>&nbsp;&nbsp;
      </td></tr></table>

      <table width="100%" class="invisible2" id="DragNo" name="DragNo"><tr><td>
        <a href="javascript:desactivarDrag();">&nbsp;&nbsp;<b><u><%=ProfCv.getProperty("prof_cv.Title15")%></b></u></a>&nbsp;&nbsp;
      </td></tr></table>
    </td>

    <td width = "15%" class="" align="right">
      <table width="100%" id="allowDrag" name="allowDrag" class="invisible2"><tr><td>
        <a href="javascript:resetLeftPosition();" title='<%=ProfCv.getProperty("prof_cv.Title7")%>'>
          <img src="/iconos/ic_lis_36_36_2.gif" width="36" height="36"  alt='<%=ProfCv.getProperty("prof_cv.Title7")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
        </a>&nbsp;&nbsp;
        <a href="javascript:resetAllPosition();" title='<%=ProfCv.getProperty("prof_cv.Title9")%>'>
          <img src="/iconos/icono_actualizar_mss_36_36.gif" width="36" height="36" alt='<%=ProfCv.getProperty("prof_cv.Title9")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
        </a>&nbsp;&nbsp;
      </td></tr></table>
    </td>
  </tr>
</table>


<!-- Lo ideal sería que los includes que siguen fueran generados dinámicamente con información que proviene del Meta4Object. Sin embargo, no es posible incluir
un jsp:include dentro de un loop por el orden en que se resuelve el código java, en relación al momento en que se traducen los m4tags a su código correspondiente.
Además de esto, con el Updater 7 de JRun 4, no funcionan los jsp:param, por lo que se deben pasar parámetro a través del request con setAttribute y getAttribute -->


<div id="cargando" name="cargando"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando">
  <tr><td>&nbsp;<img src="/iconos/cargando.gif" alt='<%=ProfCv.getProperty("prof_cv.Title1")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
  <td>&nbsp;<%=ProfCv.getProperty("prof_cv.Title13")%>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table> 
</div>

<!-- Históricos -->
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_includes_situacion_actual.jsp" flush="true" />
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_includes_otra_informacion.jsp" flush="true" />


<!-- Links -->
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_salario.jsp" flush="true"/>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_cursos.jsp" flush="true"/>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_competencias.jsp" flush="true"/>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_accion.jsp" flush="true"/>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_evaluaciones.jsp" flush="true"/>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_carrera.jsp" flush="true"/>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_conocimientos.jsp" flush="true"/>
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_entrevistas.jsp" flush="true"/>

<!-- CV del Empleado -->
<jsp:include page="/m4trans/m4custom/IBER/mss_g1/0-smco_g1_profs_info_cv_empleado.jsp" flush="true"/>
</br></br></br></br>

<script type="text/javaScript">

  function activarDrag()
  {
    m4valor("isDrag","drag",'1',"set");
    document.getElementById('DragYes').className="invisible2";
    document.getElementById('DragNo').className="";
    document.getElementById('allowDrag').className="";
  }

  function desactivarDrag()
  {
    m4valor("isDrag","drag",'0',"set");
    document.forms['isDrag'].elements['drag'].value=='0';
    document.getElementById('DragYes').className="";
    document.getElementById('DragNo').className="invisible2";
    document.getElementById('allowDrag').className="invisible2";
  }

  function resetPosition(d){
    var this_layer = document.getElementById(d)
    this_layer.style.top = 0;
    this_layer.style.left = 0;
  }

  function leftPosition(d){
    var this_layer = document.getElementById(d)
    this_layer.style.left = 0;
  }

  function resetLeftPosition()
  {
    var num_nodes_to_view = <%=records_to_control%>
    var form = document.forms["contador"];

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var node_id = document.getElementById("NODE_TO_VIEW_" + i).value
      leftPosition(node_id)
    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      leftPosition(one_link)
    }

  }

  function resetAllPosition()
  {
    var num_nodes_to_view = <%=records_to_control%>
    var form = document.forms["contador"];

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var node_id = document.getElementById("NODE_TO_VIEW_" + i).value
      resetPosition(node_id)
    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      resetPosition(one_link)
    }

  }


  function pon_visible(node_to_show,ordinal,control)
  {
    pon_todos_invisibles()
    document.getElementById("EMPLOYEE_CV").className = "invisible2"
    var num_nodes_to_view = <%=records_to_control%>
      var form = document.forms["contador"];

    // El caracter de control & será enviado solo por los LINKS
    if (control != "&")
    {
      var line_data = "LINE_DATA" + control + ordinal;
      var line_data_other = "LINE_DATA_OTHER" + control + ordinal;

      if (document.getElementById(line_data).className =="")
        document.getElementById("CHCK_LINE_DATA_" + ordinal).checked = true
      else
        document.getElementById("CHCK_LINE_DATA_OTHER_" + ordinal).checked = true
    }

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var one_node = document.getElementById("NODE_TO_VIEW_" + i).value;
      resetPosition(one_node)
      if (control != "&")
      {
        var one_item = form.elements["C" + one_node].value;
        if (one_item > 0)
        {
          if (one_node == node_to_show)
            document.getElementById(one_node).className = ""
          else
            document.getElementById(one_node).className = "invisible2"
        }
      }
    }

    if (control == "&")
    {
      document.getElementById("CHCK_" + node_to_show).checked = true

        var form = document.forms["links"];
      var number_links = <%=records_links%>
        for (var i = 1; i <= number_links; i++)
      {
        var one_link = form.elements["LINK_" + i].value;
        resetPosition(one_link)
        if (one_link == node_to_show)
          document.getElementById(one_link).className = ""
        else
          document.getElementById(one_link).className = "invisible2"
      }
    }
  }

  function pon_visible_only(node_to_show)
  {
    document.getElementById("EMPLOYEE_CV").className = "invisible2"
    resetPosition(node_to_show)
    var current_class = document.getElementById(node_to_show).className

    if (current_class == "invisible2")
      document.getElementById(node_to_show).className = ""
    else
      document.getElementById(node_to_show).className = "invisible2"
/*

    if (current_class == "")
      document.getElementById(node_to_show).className = "invisible2"
    else
      document.getElementById(node_to_show).className = ""
*/
  }

  function pon_todos_visibles()
  {
    pon_todos_invisibles()
    document.getElementById("EMPLOYEE_CV").className = "invisible2"
    var num_nodes_to_view = <%=records_to_control%>
      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var tp_node = document.getElementById("TYPE_DATA_" + i).value
      if (tp_node=="HIST")
      {
        document.getElementById("CHCK_LINE_DATA_" + i).checked = true
        pon_visible_only(document.getElementById("NODE_TO_VIEW_" + i).value)
      }
      else
      {
        document.getElementById("CHCK_LINE_DATA_OTHER_" + i).checked = true
        pon_visible_only(document.getElementById("NODE_TO_VIEW_OTHER" + i).value)
      }
    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      document.getElementById("CHCK_" + one_link).checked = true
      pon_visible_only(one_link)
    }

  }

  function pon_todos_invisibles()
  {
    document.getElementById("EMPLOYEE_CV").className = "invisible2"
    var num_nodes_to_view = <%=records_to_control%>
    var form = document.forms["contador"];

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var tp_node = document.getElementById("TYPE_DATA_" + i).value
      if (tp_node=="HIST")
        document.getElementById("CHCK_LINE_DATA_" + i).checked = false
      else
        document.getElementById("CHCK_LINE_DATA_OTHER_" + i).checked = false
      
      var node_id = document.getElementById("NODE_TO_VIEW_" + i).value
      resetPosition(node_id)
      var one_item = form.elements["C" + node_id].value;
      if (one_item > 0)
        document.getElementById(node_id).className = "invisible2"
    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      resetPosition(one_link)
      document.getElementById(one_link).className = "invisible2"
      document.getElementById("CHCK_" + one_link).checked = false
    }

  }


  function uncheck(node_to_unchecked)
  {
    var num_nodes_to_view = <%=records_to_control%>
    var form = document.forms["contador"];

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var tp_node = document.getElementById("TYPE_DATA_" + i).value
      var node_id = document.getElementById("NODE_TO_VIEW_" + i).value
      if (node_id == node_to_unchecked)
      {
        pon_visible_only(node_to_unchecked);
        if (tp_node=="HIST")
          document.getElementById("CHCK_LINE_DATA_" + i).checked = false
        else
          document.getElementById("CHCK_LINE_DATA_OTHER_" + i).checked = false
        resetPosition(node_id)
      }   
    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      if (one_link == node_to_unchecked)
      {
        pon_visible_only(node_to_unchecked);
        document.getElementById("CHCK_" + one_link).checked = false
        resetPosition(one_link)
      }
    }
  }

  function checknode(node_to_checked)
  {
    var num_nodes_to_view = <%=records_to_control%>
    var form = document.forms["contador"];

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var tp_node = document.getElementById("TYPE_DATA_" + i).value
      var node_id = document.getElementById("NODE_TO_VIEW_" + i).value
      if (node_id == node_to_checked)
      {
        pon_visible_only(node_to_checked);
        if (tp_node=="HIST")
          document.getElementById("CHCK_LINE_DATA_" + i).checked = true
        else
          document.getElementById("CHCK_LINE_DATA_OTHER_" + i).checked = true
        resetPosition(node_id)
      }   
    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      if (one_link == node_to_checked)
      {
        pon_visible_only(node_to_checked);
        document.getElementById("CHCK_" + one_link).checked = true
        resetPosition(one_link)
      }
    }
  }

  function imprimir_ficha()
  {

    var num_nodes_to_view = <%=records_to_control%>
    var form = document.forms["contador"];
    var final_text = document.getElementById("employee_header").innerHTML
    final_text = final_text.replace("<IMG","<IMAGE_HEADER=")

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var tp_node = document.getElementById("TYPE_DATA_" + i).value
      if (tp_node=="HIST")
        document.getElementById("CHCK_LINE_DATA_" + i).checked = false
      else
        document.getElementById("CHCK_LINE_DATA_OTHER_" + i).checked = false
      
      var node_id = document.getElementById("NODE_TO_VIEW_" + i).value

      if (document.getElementById(node_id).className != "invisible2")
        final_text = final_text + document.getElementById(node_id).innerHTML

    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      if (document.getElementById(one_link).className != "invisible2")
        final_text = final_text + document.getElementById(one_link).innerHTML
    }

    var form = document.forms["imprimir"];

    final_text = final_text.replace(/style=/g,"")
    final_text = final_text.replace(/onclick=/g,"")
    final_text = final_text.replace(/title=/g,"")
    final_text = final_text.replace(/href=/g,"")

    form.elements["codigo_HTML"].value = final_text
    m4submit("imprimir");
  }
  function selectOtherEmployee()
  {
    m4submit("list");
  }

  function viewCV()
  {
    pon_todos_invisibles();
    document.getElementById("EMPLOYEE_CV").className = ""
  }

  
  function ahoraVisibles(event)
  {

    var num_nodes_to_view = <%=records_to_control%>
    var string_with_layers = "";

      for (var i = 0; i < num_nodes_to_view; i++)
    {
      var node_id = document.getElementById("NODE_TO_VIEW_" + i).value
      var is_this_checked = document.getElementById(node_id).className
      if (is_this_checked != "invisible2")
        string_with_layers = string_with_layers + node_id + "||";
    }

      var form = document.forms["links"];
    var number_links = <%=records_links%>
      for (var i = 1; i <= number_links; i++)
    {
      var one_link = form.elements["LINK_" + i].value;
      var is_this_checked = document.getElementById(one_link).className
      if (is_this_checked != "invisible2")
        string_with_layers = string_with_layers + one_link + "||";
    }

    if (string_with_layers!="")
    {
      pon_todos_invisibles();
      document.getElementById("cargando").className = ""
      m4valor("salvar_configuracion","layers_visibles",string_with_layers,"set");
      m4submit("salvar_configuracion");
    }
    else
      showdiv(event);
  }

  // Código que ejecuta la visibilidad de los paneles que el usuario ha seleccionado como visibles

  document.getElementById("cargando").className = "invisible2"
    var formvisibility = document.forms["visibility"];
  var number_elements = formvisibility.elements.length;
  for (i=0; i<number_elements; i++)
  {
    var one_layer = formvisibility.elements[i].value;
    checknode(one_layer)

  }

function showdiv(event)
{

  margin=7;
  var tempX = 0;
  var tempY = 0;
  tempX = event.clientX - document.body.scrollLeft;
  tempY = event.clientY + document.body.scrollTop;

  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}
  document.getElementById('flotante').style.top = (tempY + margin -10);
  document.getElementById('flotante').style.left = (tempX + margin - 50);
  document.getElementById('flotante').style.display='block';
  return;
}

function returnSituation()
{
  pon_todos_invisibles();
  document.getElementById("cargando").className = "invisible2"
    var formvisibility = document.forms["visibility"];
  var number_elements = formvisibility.elements.length;
  for (i=0; i<number_elements; i++)
  {
    var one_layer = formvisibility.elements[i].value;
    checknode(one_layer)

  }

}

  var controlCollapsed=new animatedcollapse("div_control", 800,1)

</script>

</body>
<m4:endpage/>
</html>