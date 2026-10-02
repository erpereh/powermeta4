<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-menu_mss.jsp" %>
<%@ include file="/m4trans/mss_generico/0-mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Tabla114")%></title>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/mootools.js"></script>
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<%     
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
  String zfiltro2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro2");
  String zfiltro3 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro3");
  String zfiltro4 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro4");
  String zfiltro5 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro5");
  String profData = Tran.getProperty("Labelmss.ProfsData");

  String WUn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUt");
  String JOBn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"JOBt");
  String LOCn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"LOCt");

  if ((zfiltro2==null||zfiltro2.equals(""))  &&  (zfiltro3==null||zfiltro3.equals("")) &&  (zfiltro==null||zfiltro.equals("")) ) {zfiltro2 = "ALL";}
  if ((zfiltro==null)||(zfiltro.equals(""))){zfiltro = "ALL";}  
  if ((zfiltro3==null)||(zfiltro3.equals(""))){zfiltro3 = "ALL";}
  if ((zfiltro4==null)||(zfiltro4.equals(""))){zfiltro4 = "ALL";}
  if ((zfiltro5==null)||(zfiltro5.equals(""))){zfiltro5 = "ALL";}

  if ((WUn==null)||(WUn.equals(""))){WUn = "Todos";}
  if ((JOBn==null)||(JOBn.equals(""))){JOBn = "Todos";}
  if ((LOCn==null)||(LOCn.equals(""))){LOCn = "Todos";}
%>  
</head>
<body style="overflow-x:hidden;overflow-y:hidden;">
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
   String sSubSession = "SESSION";
   String sMeta4Object = "SSE_INVENTARIO";
   String zmetodocarga = sMeta4Object + "!SSE_INVENTARIO.CARGA";
   String znodo = "SSE_INVENTARIO";
   String znodo2 = "SSE_WORK_UNIT";
   String znodo3 = "SSE_JOB_CODES";
   String znodo4 = "SSE_WORK_LOCATION";
   String znodo5 = "SSE_LEG_ENT";   
   String ztipocarga = "VIS";

// Se parametriza el tamano que se desea para la ventana

   String zdireccion = "mss_g1/espanol/mss_g1_p1.jsp";
   String zestado = "01";

// No se modifica en general.

   String zoutputdef = sMeta4Object + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String ziterator = znodo + ":" + sMeta4Object + "!" + znodo;
   
   String zoutputdef2 = sMeta4Object + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String ziterator2 = znodo2 + ":" + sMeta4Object + "!" + znodo2;

   String zoutputdef3 = sMeta4Object + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String ziterator3 = znodo3 + ":" + sMeta4Object + "!" + znodo3;

   String zoutputdef4 = sMeta4Object + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
   String ziterator4 = znodo4 + ":" + sMeta4Object + "!" + znodo4;

   String zoutputdef5 = sMeta4Object + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
   String ziterator5 = znodo5 + ":" + sMeta4Object + "!" + znodo5;
   
   String sIDPerson = "";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

%>
<m4:page subsessionid="<%=sSubSession%>">
<m4:job>
<m4:datadef m4o="<%=sMeta4Object%>" m4name="<%=sMeta4Object%>"/>
<%
try {
  M4Operations m = new M4Operations(request);
  m.setItem(sMeta4Object,znodo,"","STD_N_FIRST_NAME_PAR",zfiltro);
  m.setItem(sMeta4Object,znodo,"","STD_N_FAMILY_NAME_1_PAR",zfiltro2);
  m.setItem(sMeta4Object,znodo,"","STD_ID_WORK_UNIT_PAR",zfiltro3);

  m.setItem(sMeta4Object,znodo,"","STD_ID_JOB_PAR",zfiltro4);
  m.setItem(sMeta4Object,znodo,"","STD_ID_LOC_PAR",zfiltro5);

  m.setItem(sMeta4Object,znodo,"","INICIO_PAR",zinicios);
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>  
<m4:outputdef m4alias="EMPLEADOS"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
  
<m4:exec node="SSE_INVENTARIO" alias="emp_count" method="Count" m4object="<%=sMeta4Object%>"/>

</m4:job>
<m4:move><m4:param name="<%=sMeta4Object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=sMeta4Object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=sMeta4Object%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=sMeta4Object%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=sMeta4Object%>" value="<%=zmove5%>"/></m4:move>
  
<script type="text/javascript">

function filtrar_direct(id_campo,nombre_campo,campo){

id_campo=m4urlencode(id_campo);
var nombre = m4valor("Filtro","Nombre","","get");
var apellido = m4valor("Filtro","Apellido","","get");

if (campo=="WORK_UNIT")
  {
  var WUvalue = id_campo;
  var WUtext = nombre_campo;

  var LOCvalue = m4select(m4objeto("filtro_loc","Filtro"),"value");
  var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

  var JOBvalue = m4select(m4objeto("filtro_job","Filtro"),"value");
  var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");
  }

if (campo=="JOB")
  {
  var JOBvalue = id_campo;
  var JOBtext = nombre_campo;

  var LOCvalue = m4select(m4objeto("filtro_loc","Filtro"),"value");
  var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

  var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
  var WUtext = m4select(m4objeto("WU","Filtro"),"text");
  }


if (campo=="LOCATION")
  {
  var LOCvalue = id_campo;
  var LOCtext = nombre_campo;

  var JOBvalue = m4select(m4objeto("filtro_job","Filtro"),"value");
  var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");

  var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
  var WUtext = m4select(m4objeto("WU","Filtro"),"text");
  }


var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g1/mss_g1_p1.jsp?",parametros,valores);
}


function filtrar(){
var nombre = m4valor("Filtro","Nombre","","get");
var apellido = m4valor("Filtro","Apellido","","get");

var WUvalue = m4urlencode(m4select(m4objeto("WU","Filtro"),"value"));
var WUtext = m4select(m4objeto("WU","Filtro"),"text");

var JOBvalue = m4urlencode(m4select(m4objeto("filtro_job","Filtro"),"value"));
var JOBtext = m4select(m4objeto("filtro_job","Filtro"),"text");

var LOCvalue = m4urlencode(m4select(m4objeto("filtro_loc","Filtro"),"value"));
var LOCtext = m4select(m4objeto("filtro_loc","Filtro"),"text");

var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g1/mss_g1_p1.jsp?",parametros,valores);
}

function borrar_filtro(){
var nombre = "";
var apellido = "";

//nombre = nombre.toUpperCase();
//apellido = apellido.toUpperCase();

var WUvalue = "";
var WUtext = "";

var JOBvalue = "";
var JOBtext = "";

var LOCvalue = "";
var LOCtext = "";

var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt","zfiltro4","JOBt","zfiltro5","LOCt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext,JOBvalue,JOBtext,LOCvalue,LOCtext);
m4navegar("mss_g1/mss_g1_p1.jsp?",parametros,valores);
}

function load_prof(empleado){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function load_cv(empleado,ord_period){
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&cabecera=1&person=" + empleado + "&person_ord=" + ord_period + "&RET=DAT";
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function InsertContact(sIdHR) {
  
  var aParams = new Array();
  var l_sLinkCont = '/servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp';
  var objResp = null;
  var sResult = '';
  
  aParams[0] = ['Action','Insert'];
  aParams[1] = ['IdHR',sIdHR];
  meta4Ajax.ajax.sendSyncJSON(l_sLinkCont,aParams);

  objResp = meta4Ajax.ajax.getResponseJSON();
  if (objResp.sResult == '0') {
    sResult = 'The contact has been added successfully.';
  } else {
    sResult = 'The contact already existed.';
  }
  
  alert(sResult);

}

</script>

<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=Mss_cr.getProperty("msscr.Tabla114")%></td></tr>
<tr>
  <td><img alt="<%=Mss_cr.getProperty("msscr.Tabla125")%>" title="<%=Mss_cr.getProperty("msscr.Tabla125")%>" src="/iconos/noname_mujer_53_100.gif" width="100" height="100" /></td>
<% if(zVisibility.equals("1")) { %>

  <td><div class="descripcionfuncional" align="justify">

  <%=Mss_cr.getProperty("msscr.Tabla90")%>
  <br/><%=Mss_cr.getProperty("msscr.Tabla108")%>
  <b><a title="<%=Mss_cr.getProperty("msscr.Tabla109")%>" href= <%="/servlet/CheckSecurity/JSP/mss_generico/mss_set_wunit_resp_p2.jsp?"%>   ><%=Mss_cr.getProperty("msscr.Tabla109")%></a></b>&nbsp;<%=Mss_cr.getProperty("msscr.Tabla92")%>,&nbsp;<%=Mss_cr.getProperty("msscr.Tabla92")%><br/>
  <%=Mss_cr.getProperty("msscr.Tabla93")%><br/>
  <%=Mss_cr.getProperty("msscr.Tabla94")%><br/>
  <%=Mss_cr.getProperty("msscr.Tabla115")%><br/>

  </div></td>

<%}else{%>

  <td><div class="descripcionfuncional">

  <%=Mss_cr.getProperty("msscr.Tabla117")%><br/>
  <%=Mss_cr.getProperty("msscr.Tabla93")%><br/>
  <%=Mss_cr.getProperty("msscr.Tabla94")%><br/>
  <%=Mss_cr.getProperty("msscr.Tabla115")%><br/>

<%}%>

</tr>

</table>
<form id="Filtro" name="Filtro">

<table width="100%" class="tablaestados" cellspacing="0">
<tr><td class="tablaestadosceldatitulo">&nbsp;<%=Mss_cr.getProperty("msscr.Tabla95")%></td></tr>


<tr><td class="fuentevalor">&nbsp;</td></tr>
<tr>
  <%
    if ((zfiltro=="ALL")){
     zfiltro = "";
    }
    if ((zfiltro2=="ALL")){
     zfiltro2 = "";
    } 
    if ((zfiltro3=="ALL")){
     zfiltro3 = "";
    } 
  %>
  <td class="fuentevalor" nowrap>&nbsp;<%=Mss_cr.getProperty("msscr.Titulo5-5")%>&nbsp;<input title="<%=Mss_cr.getProperty("msscr.Tabla96")%>" type="text" id="Nombre" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro)%>" />
  &nbsp;<%=Mss_cr.getProperty("msscr.Tabla97")%>&nbsp;<input title="<%=Mss_cr.getProperty("msscr.Tabla98")%>" type="text" id="Apellido" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro2)%>" />
  &nbsp;</td>
</tr>
<tr><td class="fuentevalor">&nbsp;</td></tr>
<tr>
<%
  if ((zfiltro4=="ALL")){
     zfiltro4 = "";
  } 
  if ((zfiltro5=="ALL")){
     zfiltro5 = "";
  } 
%>
  <td class="fuentevalor"  nowrap>
  &nbsp;<%=Mss_cr.getProperty("msscr.Tabla6")%>&nbsp;
    <select id="WU" class="fuenteformulario150" name="WU" title="<%=Mss_cr.getProperty("msscr.Tabla99")%>" >
    <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
    <m4:dataloop outputdef="SSE_WORK_UNIT">
    <option value="<m4:item item='STD_ID_WORK_UNIT' htmlsafe='true' outputdef='SSE_WORK_UNIT'/>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="SSE_WORK_UNIT"/></option>
    </m4:dataloop>    
    </select>
    <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltro3%>'!= "ALL"){
        m4searchoptioness('Filtro','WU','<%=zfiltro3%>');
      }
   </script>

  &nbsp;<%=Mss_cr.getProperty("msscr.ID9-3")%>&nbsp;
    <select id="filtro_job" class="fuenteformulario150" name="filtro_job" title="<%=Mss_cr.getProperty("msscr.Tabla121")%>" >
    <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
    <m4:dataloop outputdef="SSE_JOB_CODES">
    <option value="<m4:item item='SCO_ID_JOB' htmlsafe='true' outputdef='SSE_JOB_CODES'/>"><m4:item item="SCO_N_JOB" htmlsafe="true" outputdef="SSE_JOB_CODES"/></option>
    </m4:dataloop>    
    </select>
    <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltro4%>'!= "ALL"){
        m4searchoptioness('Filtro','filtro_job','<%=zfiltro4%>');
      }
   </script>
  &nbsp;<%=Mss_cr.getProperty("msscr.Tabla110")%>&nbsp;
    <select id="filtro_loc" class="fuenteformulario150" name="filtro_loc" title="<%=Mss_cr.getProperty("msscr.Tabla122")%>" >
    <option value="ALL"><%=Mss_cr.getProperty("msscr.Tabla100")%></option> 
    <m4:dataloop outputdef="SSE_WORK_LOCATION">
    <option value="<m4:item item='SCO_ID_WORK_LOCATION' htmlsafe='true' outputdef='SSE_WORK_LOCATION'/>"><m4:item item="SCO_N_WORK_LOCATION" htmlsafe="true" outputdef="SSE_WORK_LOCATION"/></option>
    </m4:dataloop>    
    </select>
  </td>
  <script type="text/javascript" language="Javascript1.5">
      if ('<%=zfiltro5%>'!= "ALL"){
        m4searchoptioness('Filtro','filtro_loc','<%=zfiltro5%>');
      }
   </script>
</tr>
<tr align="center">
  <td class="fuenteboton" colspan="2"><a href="javascript:filtrar();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>" src="/iconos/js_filtrar.gif" height="36" width="36" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  &nbsp;<a href="javascript:borrar_filtro();" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>"><img alt="<%=Mss_cr.getProperty("msscr.Confirm_ad10-3")%>" src="/iconos/js_deshacer_filtro.gif" height="36" width="36" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </td>
</tr>
</table>
</form>


<% String count; %>
<% int icount = 0; %>
  <m4:outputexec var="count" alias="emp_count"/>
  <% try { icount = Integer.parseInt(count); } catch(Exception e) { icount = 0; }%>

<%if (icount > 0) {
  int zposicion =0;
  int zcontrol = 0;
%>

<table width="100%" class = "tablaestados" cellspacing="0"><tr><td colspan="9"></td></tr>

<m4:dataloop outputdef="EMPLEADOS">

<m4:item m4varname="is_manager" item="SMCO_THIS_EMPLOYEE_IS_MANAGER" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="is_new_layer" item="SMCO_NEW_LAYER_4_WUNIT" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="data_break_layer" item="SMCO_LAYERS_BREAK" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="break_layer" item="SMCO_LAYERS_BREAK_HEADER" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="zero_no_direct_report_employees_selected" item="PLCO_ZERO_NO_DRT_RPRT_SELECTED" htmlsafe="true" outputdef="EMPLEADOS"/>

  <% Integer current; %>
  <m4:current var="current" outputdef="EMPLEADOS"/>

<% if(zero_no_direct_report_employees_selected.equals("N")) { %>
<% if(data_break_layer.equals("N")) { %>

  <% if(is_new_layer.equals("Y")) { %>

    <%  zposicion = current.intValue();
      if (zposicion > 0) {%>
      </table></div>
    <%}%>
  <br>
    <table width="100%" class = "tablaestados" cellspacing="0">
      <% zcontrol = zposicion%2;
      if (zcontrol==0){%>
        <tr class="fuentevalor">
      <%}else{%>
        <tr class="fuentevalor22">
      <%}%>
          <td colspan="9">&nbsp;
        <a href="javascript:collapse<%=current%>.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Mss_cr.getProperty("msscr.Tabla1267")%>" title="<%=Mss_cr.getProperty("msscr.Tabla1267")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;  <b><u><m4:item item="SMCO_WHOLE_MANAGER_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></b></u></td>
      </tr>
    </table>

    <div id="<%=current%>" name="<%=current%>" class="">

      <script type="text/javascript">

        document.getElementById('<%=current%>').className="";
        var collapse<%=current%>=new animatedcollapse('<%=current%>', 800,1);
      </script>
    <br>
      <table width="100%" class = "tablaestados" cellspacing="0">
    <tr class="tablaestadosceldatitulo">
      <td width="12%"><%=Mss_cr.getProperty("msscr.Titulo5-5")%></td>
      <td width="15%"><%=Mss_cr.getProperty("msscr.Tabla6")%></td>
      <td width="12%"><%=Mss_cr.getProperty("msscr.ID9-3")%></td>
      <td width="15%"><%=Mss_cr.getProperty("msscr.Tabla110")%></td>
      <td width="12%"><%=Mss_cr.getProperty("msscr.Tabla111")%></td>
      <td width="8%"><%=Mss_cr.getProperty("msscr.Tabla101")%></td>
      <td width="20%"><%=Mss_cr.getProperty("msscr.Tabla102")%></td>
      <td width="3%">&nbsp;</td><td width="3%">&nbsp;</td>
    </tr>
  <%}else{%>

    <%zposicion = current.intValue();
      zcontrol = zposicion%2;
    if (zcontrol==0){%>
      <tr class="fuentevalor">
    <%}else{%>
      <tr class="fuentevalor2">
    <%}%>

      <td>&nbsp;
      <% if(is_manager.equals("Y")) { %>
      <img alt="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" title="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" src="/iconos/icono_flecha_ocre_mss_11_9.gif"/><b>
      <%}%>
      <m4:item item="STD_ID_PERSON" htmlsafe="true" outputdef="EMPLEADOS" var="sIDPerson" />
      <%sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIDPerson);%>
      <a class="enlacefuncional" title="<%=profData%>" href="javascript:load_prof('<%=sIDPerson%>','<m4:item item="STD_OR_HR_PERIOD" htmlsafe="true" outputdef="EMPLEADOS"/>')"><m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></a></td><% if(is_manager.equals("Y")) { %></b><%}%>
      <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','WORK_UNIT');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','JOB');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','LOCATION');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
    <td>&nbsp;<m4:item item="STD_N_LEG_ENT" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<m4:item item="STD_PHONE" htmlsafe="true" outputdef="EMPLEADOS"/></td>
      <td><a href="mailto:<m4:item item="STD_EMAIL" htmlsafe="true" outputdef="EMPLEADOS"/>" title="<%=Mss_cr.getProperty("msscr.Tabla104")%>">&nbsp;<m4:item item="STD_EMAIL" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td><img style='cursor:pointer' align="right" title="<%=Mss_cr.getProperty("msscr.Tabla105")%>" alt="<%=Mss_cr.getProperty("msscr.Tabla106")%>" src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" onclick="InsertContact('<m4:item item="STD_ID_PERSON" htmlsafe="true" outputdef="EMPLEADOS"/>')"/></td>
      <td align= "right">
      <m4:item item="STD_ID_PERSON" htmlsafe="true" outputdef="EMPLEADOS" var="sIDPerson" />
      <%sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIDPerson);%>
      <a href="javascript:load_cv('<%=sIDPerson%>','<m4:item item="STD_OR_HR_PERIOD" htmlsafe="true" outputdef="EMPLEADOS"/>')" title='<%=Mss_cr.getProperty("msscr.Tabla103")%>'><img src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" 
      alt='<%=Mss_cr.getProperty("msscr.Tabla103")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
      </td>
  </tr>
  <%}%>
<%}%>
<%}%>
</m4:dataloop>    
</table></div>

<m4:dataloop outputdef="EMPLEADOS">
<m4:item m4varname="is_manager" item="SMCO_THIS_EMPLOYEE_IS_MANAGER" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="data_break_layer" item="SMCO_LAYERS_BREAK" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="break_layer" item="SMCO_LAYERS_BREAK_HEADER" htmlsafe="true" outputdef="EMPLEADOS"/>
<m4:item m4varname="zero_no_direct_report_employees_selected" item="PLCO_ZERO_NO_DRT_RPRT_SELECTED" htmlsafe="true" outputdef="EMPLEADOS"/>

  <% Integer current; %>
  <m4:current var="current" outputdef="EMPLEADOS"/>

<% if(data_break_layer.equals("Y")) { %>

  <% if(break_layer.equals("Y")) { %>
      <table width="100%" class = "tablaestados" cellspacing="0"><tr><td colspan="9">
<% if(zero_no_direct_report_employees_selected.equals("N")) { %>
<hr width="100%" class="fuentevalor"> 
<%}%>
</td></tr>
  <%}else{%>

    <%zposicion = current.intValue();
      zcontrol = zposicion%2;
    if (zcontrol==0){%>
      <tr class="fuentevalor">
    <%}else{%>
      <tr class="fuentevalor2">
    <%}%>

      <td>&nbsp;
      <% if(is_manager.equals("Y")) { %>
      <img alt="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" title="<%=Mss_cr.getProperty("msscr.Tabla1266")%>" src="/iconos/icono_flecha_ocre_mss_11_9.gif"/>
      <%}%>
      <m4:item item="STD_ID_PERSON" htmlsafe="true" outputdef="EMPLEADOS" var="sIDPerson" />
      <%sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIDPerson);%>
      <a class="enlacefuncional" title="<%=profData%>" href="javascript:load_prof('<%=sIDPerson%>','<m4:item item="STD_OR_HR_PERIOD" htmlsafe="true" outputdef="EMPLEADOS"/>')"><m4:item item="SCO_GB_NAME" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/>','WORK_UNIT');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_WORK_UNIT" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/>','JOB');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_JOB" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<a href="javascript:filtrar_direct('<m4:item item="STD_ID_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','<m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/>','LOCATION');" title="<%=Mss_cr.getProperty("msscr.Confirm_ad10-2")%>"><m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<m4:item item="STD_N_LOCATION" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td>&nbsp;<m4:item item="STD_PHONE" htmlsafe="true" outputdef="EMPLEADOS"/></td>
      <td><a href="mailto:<m4:item item="STD_EMAIL" htmlsafe="true" outputdef="EMPLEADOS"/>" title="<%=Mss_cr.getProperty("msscr.Tabla104")%>">&nbsp;<m4:item item="STD_EMAIL" htmlsafe="true" outputdef="EMPLEADOS"/></a></td>
      <td><img style='cursor:pointer' align="right" title="<%=Mss_cr.getProperty("msscr.Tabla105")%>" alt="<%=Mss_cr.getProperty("msscr.Tabla106")%>" src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" onclick="InsertContact('<m4:item item="STD_ID_PERSON" htmlsafe="true" outputdef="EMPLEADOS"/>')"/></td>
      <td align= "right">
      <m4:item item="STD_ID_PERSON" htmlsafe="true" outputdef="EMPLEADOS" var="sIDPerson" />
      <%sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIDPerson);%>
      <a href="javascript:load_cv('<%=sIDPerson%>','<m4:item item="STD_OR_HR_PERIOD" htmlsafe="true" outputdef="EMPLEADOS"/>')" title='<%=Mss_cr.getProperty("msscr.Tabla103")%>'><img src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" 
      alt='<%=Mss_cr.getProperty("msscr.Tabla103")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
      </td>
  </tr>
  <%}%>
<%}%>
</m4:dataloop>  
<%}else{%>
<div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Tabla107")%></div>
<%}%>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
</div>
</body>
</m4:page>

</html>