<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
// cadenas para traducir

String titulo = "Trayectoria profesional externa";
String tfuncional = "Trayectoria profesional externa";
String dfuncional = "Indica los datos de tu trayectoria profesional externa.";
String efuncional = "Mis datos profesionales";
String etiqueta = "Trayectoria profesional externa";
String etiqueta2 = "Fecha inicio";
String etiqueta3 = "Escribe la fecha de inicio";
String etiqueta4 = "Selecciona la fecha de inicio";
String etiqueta5 = "Fecha fin";
String etiqueta6 = "Escribe la fecha de fin";
String etiqueta7 = "Selecciona la fecha de fin";
String etiqueta8 = "Sector";
String etiqueta9 = "Empresa";
String etiqueta10 = "Escribe el nombre de la empresa";
String etiqueta11 = "Funciones";
String etiqueta12 = "Describe brevemente las actividades que desempeñaste";
String etiqueta13 = "Enviar";
String etiqueta14 = "Petici&oacute;n pendiente";
String etiqueta15 = "Eliminar la petici&oacute;n";
%>
<title><%=titulo%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-menu_ess.jsp" %>
<%@ include file="/m4trans/m4custom/IBER/sse_g1/0-sse_g1_trans.jsp" %>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
<script type="text/javascript">
function comprobar(){
var mensaje = "Se han encontrado los siguientes errores. Debe corregirlos para enviar su petición:\n";
var mensaje_dtstart = "\n     La fecha de inicio es obligatoria.";
var mensaje_dtstart2 = "\n     La fecha de inicio ha de ser anterior a hoy.";
var mensaje_sector = "\n     El sector es obligatorio.";
var mensaje_dtstartok = "\n     La fecha de inicio tiene un formato incorrecto. Debe seguir el formato "+'<%=zsgcoParamDate%>'+"";
var mensaje_dtendok = "\n     La fecha de fin tiene un formato incorrecto. Debe seguir el formato "+'<%=zsgcoParamDate%>'+"";
var mensaje_fechas = "\n     La fecha de inicio debe ser menor que la fecha de fin.";
var error = 0;
var dtstart = "";
var dtend = "";
var sector = "";
var fechasok = false;
var dtstartok = "";
var dtendok = "";
var texto = mensaje;
var valorfec = m4fechahoy();
dtstart = m4valor("NombreFormulario","STD_DT_START","","get");
dtend = m4valor("NombreFormulario","STD_DT_END","","get");
sector = m4select(m4objeto("STD_ID_SECTOR","NombreFormulario"),"value");
dtstartok = m4fechacomprobacion(m4objeto('STD_DT_START','NombreFormulario'),"");
dtendok = m4fechacomprobacion(m4objeto('STD_DT_END','NombreFormulario'),"");
fechasok = m4compfechas(m4objeto("STD_DT_START","NombreFormulario"),"<",m4objeto("STD_DT_END","NombreFormulario")); 
if (dtstart == null || dtstart == ""){
  texto = texto + mensaje_dtstart;
  error = 1;
  }
if (sector == null || sector == ""){
  texto = texto + mensaje_sector;
  error = 1;
  }
if ((dtstart != null && dtstart !="") && (dtstartok == "")){
  texto = texto + mensaje_dtstartok;
  error = 1;
  }
if ((dtend != null && dtend !="") && (dtendok == "")){
  texto = texto + mensaje_dtendok;
  error = 1;
  }
if ((dtend != null && dtend !="") && (dtendok != "") && (dtstart != null && dtstart !="") && (dtstartok != "") && (fechasok == false)){
  texto = texto + mensaje_fechas;
  error = 1;
  }
if (error == 1){
  alert(texto);
  return;}
else {
  m4submit("NombreFormulario");
  }
}
function borrar(reg){
m4valor("Formulario","REC",reg,"set");
m4submit("Formulario");
}
</script>
<%     
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String zpathVerComentario = "/sse_g1/espanol/ssco_g1_p3_duties.jsp?comment=";
String ViewComment = sse_g1Ess.getProperty("Button.ViewDevAct");
%>
</head>
<body>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EMP_PREV_JOBS";
   String zmeta4object = "SSE_EMP_PREV_JOBS";
   String znodo = "SSE_EMP_PREV_JOBS";
   String znodo2 = "M4T_LU_JOB_SECTOR";
   String znodo3 = "M4T_LU_AREA_JOB";
   String znodo4 = "M4T_LU_COUNTRY";
   
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/sse_g1_p3_mod3.jsp";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";



   // Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";
   String ztipocarga = "SSE";   

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSTDDEVELOPEDACTIVITIES = zcomun + "STD_DEVELOPED_ACTIVITIES";
   String zSTDEMPLOYER = zcomun + "STD_EMPLOYER";
   String zSTDNSECTOR = zcomun + "STD_N_SECTOR";
   String zSTDDTSTART = zcomun + "STD_DT_START";
   String zSTDDTEND = zcomun + "STD_DT_END";
   String zSTDDTENDAUX = zcomun + "STD_DT_END_AUX";
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   
   String zSCONAREA = zcomun + "SCO_N_AREA";
   String zSTDCURRSALARY = zcomun + "STD_CURR_SALARY";
   String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";
   String zSTDINITIALJOB = zcomun + "STD_INITIAL_JOB";
   String zSTDFINALJOB = zcomun + "STD_FINAL_JOB";
   
   String zSTDIDSECTOR = zcomun2 + "STD_ID_SECTOR";
   String zSTDNSECTOR2 = zcomun2 + "STD_N_SECTOR";
   
   String zSCOIDAREA = zcomun3 + "SCO_ID_AREA";
   String zSCONAREA2 = zcomun3 + "SCO_N_AREA";

   String zSTDIDCOUNTRY = zcomun4 + "STD_ID_COUNTRY";
   String zSTDNCOUNTRY2 = zcomun4 + "STD_N_COUNTRY";  

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");

    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;  
  int  zcount2i  = 0; 
  int  zcount3i  = 0;
  int  zcount4i  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
      zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
      zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
      zcount4i = m.getCountInClient(znodo4,zsubsesion,znodo4);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcount2v = String.valueOf(zcount2i);
  String  zcount3v = String.valueOf(zcount3i);
  String  zcount4v = String.valueOf(zcount4i);

%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=tfuncional%></td></tr>
<tr>
  <td><img alt="<%=tfuncional%>"title="<%=tfuncional%>" src="/iconos/noname_experiencia_profesional_81_100.gif"  width="81" height="100"/></td>
  <td>
    <div class="descripcionfuncional"><%=dfuncional%></div>
    <ul class="listaenlace">
      <li><a class="enlacefuncional" title = "<%=efuncional%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><%=efuncional%></a></li>
       </ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_EMP_PREV_JOBS" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EMP_PREV_JOBS" />
<input type="hidden" id="CSP_EXP_INT" name="CSP_EXP_INT" value = "0" />
<input type="hidden" id="STD_FINAL_JOB" name="STD_FINAL_JOB" value = "" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
  <td colspan="3">&nbsp;<%=etiqueta%></td>
  <td class="tablaestadosceldatitulo" align="right"><a title="<%=efuncional%>"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><img alt="<%=efuncional%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td class="fuentecampo" >*&nbsp;<%=etiqueta2%></td>    
  <td class="fuentecampo">
  <input class="fuenteformulario" type="text" name="STD_DT_START" id="STD_DT_START" title="<%=etiqueta3%>" maxlength="10" size="10" tabindex="1" />
  <a title="<%=etiqueta4%>"href="javascript:m4calendario(m4objeto('STD_DT_START','NombreFormulario'))">
  <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=etiqueta4%>"></img>
  </a>
  </td>
  <td class="fuentecampo" >&nbsp;<%=etiqueta5%></td>    
  <td class="fuentecampo" >
  <input class="fuenteformulario" type="text" name="STD_DT_END" id="STD_DT_END" title="<%=etiqueta6%>" maxlength="10" size="10" tabindex="2"/>
  <a title="<%=etiqueta7%>"href="javascript:m4calendario(m4objeto('STD_DT_END','NombreFormulario'))">
  <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=etiqueta7%>"></img>
  </a>
  </td>
</tr>
<tr>
  <td class="fuentecampo" >*&nbsp;<%=etiqueta8%></td>
  <td class="fuentevalor" >
  <select id="STD_ID_SECTOR" class="fuenteformulario" name="STD_ID_SECTOR"title="Escoge el sector" tabindex="3">
  <option value=""></option>          
  <m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zSTDIDSECTOR%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNSECTOR2%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>     
  <td class="fuentecampo" >&nbsp;Empresa</td>
  <td class="fuentevalor" ><input class="fuenteformulario" type="text" id="STD_EMPLOYER" name="STD_EMPLOYER" size="50" tabindex="4" title="<%=etiqueta10%>"  maxlength=62 /></td>
</tr>   
<tr>
  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCOIDAREA%>"/></td>
  <td class="fuentevalor">

  <select id="SCO_ID_AREA" class="fuenteformulario" name="SCO_ID_AREA" tabindex="6" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCOIDAREA%>"/>" maxlength=62 />
  <option value=""></option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
      <option value="<m4:item m4name="<%=zSCOIDAREA%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONAREA2%>" htmlsafe="true"/></option>
    </m4:loop>
  </select>
  </td>
<!--      
  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDCURRSALARY%>"/></td>
  <td class="fuentevalor"><input class="fuenteformulario" type="text" id="STD_CURR_SALARY" name="STD_CURR_SALARY" size="18" tabindex="7" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSTDCURRSALARY%>"/>"  maxlength=18 /></td>
-->
<td class="fuentecampo"></td>
  <td class="fuentevalor"></td>
  </tr> 


<tr>
  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDIDCOUNTRY%>"/></td>
  <td class="fuentevalor" colspan="3">

  <select id="STD_ID_COUNTRY" class="fuenteformulario" name="STD_ID_COUNTRY" tabindex="8" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSTDIDCOUNTRY%>"/>">
  <option value=""></option>
      <m4:loop from="0" to="<%=new Integer(new Integer(zcount4v).intValue()-1).toString()%>">
      <option value="<m4:item m4name="<%=zSTDIDCOUNTRY%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNCOUNTRY2%>" htmlsafe="true"/></option>

    </m4:loop>
  </select>
  </td>
</tr>
<tr>      
  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDINITIALJOB%>"/></td>
  <td class="fuentevalor" colspan="3"><input class="fuenteformulario" type="text" id="STD_INITIAL_JOB" name="STD_INITIAL_JOB" size="50" tabindex="9" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSTDINITIALJOB%>"/>"  maxlength=62 /></td>
</tr> 
<!--<tr>      
  <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDFINALJOB%>"/></td>
  <td class="fuentevalor" colspan="3"><input class="fuenteformulario" type="text" id="STD_FINAL_JOB" name="STD_FINAL_JOB" size="50" tabindex="10" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSTDFINALJOB%>"/>"  maxlength=62 /></td>
</tr> -->
  <tr>
  <td class="fuentecampo">&nbsp;<%=etiqueta11%></td>
      <td class="fuentevalor" colspan="3"><textarea rows="3" input class="fuenteformulario" type="text" cols="30" id="STD_DEVELOPED_ACTIVITIES" name="STD_DEVELOPED_ACTIVITIES" onKeyUp="javascript:if (this.value.length>1000) {this.value = this.value.substring(0,1000)}" onKeyPress="javascript:return(this.value.length<1000);" htmlsafe = "true" ></textarea></td>
  </tr>

<tr>
  <td colspan="4" class = "fuenteboton">&nbsp;
  <a title="<%=etiqueta13%>"href="javascript:comprobar()"><img alt="<%=etiqueta13%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36"  onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
  </td>
</tr>
</table>
</form>
<%if (zcounti > 0) {
    String zregistroinicials = String.valueOf(zregistroinicial);
    String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
    String zposicions = "0";
    int zcontrol = 0;
    int zposicion =0;
%>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11" method="post" name="oculto" id="oculto">
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_EMP_PREV_JOBS" />
<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EMP_PREV_JOBS" />
<input type="hidden" id="REC" name="REC" />
<input type="hidden" id="CSP_EXP_INT" name="CSP_EXP_INT" value = "0" />
</form>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
  <td>&nbsp;&nbsp;&nbsp;<%=etiqueta14%></td><td><%=etiqueta2%></td><td><%=etiqueta5%></td>
  <td><%=etiqueta8%></td><td><%=etiqueta9%></td><td colspan="2"><m4:label  item="STD_INITIAL_JOB" htmlsafe="true" outputdef="<%=znodo%>"/></td><td></td></td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
  <form name="b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" id="b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" action=" "onSubmit="return false">
  <input id="STD_DEVELOPED_ACTIVITIES<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" name="STD_DEVELOPED_ACTIVITIES<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" type="hidden" value="<m4:item m4name="<%=zSTDDEVELOPEDACTIVITIES%>" htmlsafe="true"/>" />      

<%
  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
  if (zcontrol==0){%>
<tr>
  <td class = "fuentecampoaccion">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('STD_DEVELOPED_ACTIVITIES<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>','b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>    
    &nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
  <td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
  <td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX%>" htmlsafe="true"/></td>
  <td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNSECTOR%>" htmlsafe="true"/></td>
  <td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/></td>
  <td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSTDINITIALJOB%>" htmlsafe="true"/></td>     
  <td class = "fuentevalor" colspan="2"><a title="<%=etiqueta15%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=etiqueta15%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr> 
<%}else{%>
<tr>
  <td class = "fuentecampoaccion2">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('STD_DEVELOPED_ACTIVITIES<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>','b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>    
    &nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
  <td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
  <td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDDTENDAUX%>" htmlsafe="true"/></td>
  <td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNSECTOR%>" htmlsafe="true"/></td>
  <td class = "fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/></td>
  <td class = "fuentevalor2" >&nbsp;<m4:item m4name="<%=zSTDINITIALJOB%>" htmlsafe="true"/></td>      
  <td class = "fuentevalor2" colspan="2"><a title="<%=etiqueta15%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=etiqueta15%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr> 
<%}%>
</form>
</m4:loop>
</table>
<%@include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_ventanas_post.jsp"%> 
<%}%> 
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
<script type="text/javascript"> m4focus("NombreFormulario","STD_DT_START");</script>


