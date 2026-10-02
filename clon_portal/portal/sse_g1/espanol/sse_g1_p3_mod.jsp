<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<%
// cadenas para traducir

String titulo = "Titulaciones";
String tfuncional = "Titulaciones";
String dfuncional = "Indica cu&aacute;l es tu titulaci&oacute;n.";
String efuncional = "Mis datos profesionales";

String etiqueta = "Titulaci&oacute;n";
String etiqueta2 = "Inicio";
String etiqueta3 = "Escribe la fecha de inicio de los estudios";
String etiqueta4 = "Selecciona la fecha de inicio de los estudios";
String etiqueta5 = "Escribe la fecha de finalización de los estudios";
String etiqueta6 = "Selecciona la fecha de finalización de los estudios";
String etiqueta7 = "Fecha prevista/fin";
String etiqueta8 = "Tipo de diploma";
String etiqueta9 = "T&iacute;tulo de la carrera";
String etiqueta10 = "Especialidad";
String etiqueta11 = "Centro";
String etiqueta12 = "Enviar";
String etiqueta13 = "Eliminar la petici&oacute;n";
String etiqueta14 = "Petici&oacute;n pendiente";
String etiqueta15 = "Descripci&oacute;n del centro";
String etiqueta16 = "Comentario";



%>

<title><%=titulo%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
<script type="text/javascript">
function comprobar(){
var mensaje = "Se han encontrado los siguientes errores. Debe corregirlos para enviar su petición:\n";
var mensaje_edutype = "\n     El título de la carrera es obligatorio.";
var mensaje_diploma = "\n     El tipo de diploma es obligatorio.";
var mensaje_educenter = "\n     El centro es obligatorio.";
var mensaje_desceducenter = "\n     En el caso de seleccionar como centro 'Otro', la descripción del centro es obligatoria.";
var mensaje_dtstart = "\n     La fecha de inicio es obligatoria.";
var mensaje_dtstart2 = "\n     El formato de la fecha de inicio es incorrecto. Debe seguir el formato "+'<%=zsgcoParamDate%>'+"";
var mensaje_dtend = "\n     El formato de la fecha de fin es incorrecto. Debe seguir el formato "+'<%=zsgcoParamDate%>'+"";
var mensaje_fechas = "\n     La fecha de fin debe ser posterior a la fecha de inicio.";
var error = 0;
var edutype = "";
var diploma = "";
var educenter = "";
var desceducenter = "";
var dtstart = "";
var dtend = "";
var fechasok = false;
var dtstartok = "";
var dtendok = "";
var texto = mensaje;
edutype = m4select(m4objeto("STD_ID_EDU_TYPE","NombreFormulario"),"value");
diploma = m4select(m4objeto("STD_ID_DIPLOMA","NombreFormulario"),"value");
educenter = m4select(m4objeto("STD_ID_EDU_CENTER","NombreFormulario"),"value");
desceducenter = m4valor("NombreFormulario","STD_DESC_EDU_CENTER","","get");
dtstart = m4valor("NombreFormulario","STD_DT_START","","get");
dtstartok = m4fechacomprobacion(m4objeto('STD_DT_START','NombreFormulario'),"");
dtend = m4valor("NombreFormulario","STD_DT_EARNED_EXPE","","get");
dtendok = m4fechacomprobacion(m4objeto('STD_DT_EARNED_EXPE','NombreFormulario'),"");
fechasok = m4compfechas(m4objeto('STD_DT_START','NombreFormulario'),'<=',m4objeto('STD_DT_EARNED_EXPE','NombreFormulario'));
if (edutype == null || edutype == ""){
  texto = texto + mensaje_edutype;
  error = 1;
  }
if (diploma == null || diploma == ""){
  texto = texto + mensaje_diploma;
  error = 1;
  }
if (educenter == null || educenter == ""){
  texto = texto + mensaje_educenter;
  error = 1;
  }
if (educenter == "000"){
  if (desceducenter == null || desceducenter == ""){
    texto = texto + mensaje_desceducenter;
    error = 1;
    }
}
if (dtstart == null || dtstart == ""){
  texto = texto + mensaje_dtstart;
  error = 1;
  }
if ((dtstart != null && dtstart != "") && (dtstartok == "")){
  texto = texto + mensaje_dtstart2;
  error = 1;
  }
if ((dtend != null && dtend != "") && (dtendok == "")){
  texto = texto + "\n     El formato de la fecha de fin es incorrecto. Debe seguir el formato "+'<%=zsgcoParamDate%>'+"";
  error = 1;
  }
if ((dtstart != null && dtstart != "") && (dtstartok != "") && (dtend != null && dtend != "") && (dtendok != "") && (fechasok == false)){
  texto = texto + mensaje_fechas;
  error = 1;
  }
if (error == 1){
  alert(texto);
  return;
}else {
  m4submit("NombreFormulario");
  }
}
function borrar(reg){
m4valor("Formulario","REC",reg,"set");
m4submit("Formulario");
}
function habilitar_desc(){
var educenter = "";
educenter = m4select(m4objeto("STD_ID_EDU_CENTER","NombreFormulario"),"value");
if (educenter == "000"){
  document.NombreFormulario.STD_DESC_EDU_CENTER.disabled=false
  document.NombreFormulario.STD_DESC_EDU_CENTER.className="fuenteformulario"
  }
else {
  document.NombreFormulario.STD_DESC_EDU_CENTER.className="fuenteformulariodisabled"
  document.NombreFormulario.STD_DESC_EDU_CENTER.value = ""
  document.NombreFormulario.STD_DESC_EDU_CENTER.disabled=true
  }
}
function filtrar_datos_especialidad (){
    var valor =m4select(m4objeto("STD_ID_EDU_TYPE","NombreFormulario"),"value");
    m4valor("oculto","zidTIT",valor,"set");
    valor =m4select(m4objeto("STD_ID_DIPLOMA","NombreFormulario"),"value");
    m4valor("oculto","zidDIP",valor,"set");
    valor =m4select(m4objeto("STD_ID_EDU_CENTER","NombreFormulario"),"value");
    m4valor("oculto","zidCEN",valor,"set");

    valor =m4valor("NombreFormulario","STD_DESC_EDU_CENTER","","get");
    m4valor("oculto","zidDESCEN",valor,"set");
    valor =m4valor("NombreFormulario","STD_DT_START","","get");
    m4valor("oculto","zidINI",valor,"set");
    valor =m4valor("NombreFormulario","STD_DT_EARNED_EXPE","","get");
    m4valor("oculto","zidFIN",valor,"set");
    valor =m4valor("NombreFormulario","STD_COMMENT","","get");
    m4valor("oculto","zidCOMMENT",valor,"set");

    m4submit("oculto"); 
}
</script>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado =zobjtabla.m4paramvalor("estado");
String zinicios = zobjtabla.m4paramvalor("zinicios");

/*
String zidTIT = zobjtabla.m4paramvalor("zidTIT");
String zidDIP = zobjtabla.m4paramvalor("zidDIP");
String zidCEN = zobjtabla.m4paramvalor("zidCEN");
String zidDESCEN = zobjtabla.m4paramvalor("zidDESCEN");
String zidINI = zobjtabla.m4paramvalor("zidINI");
String zidFIN = zobjtabla.m4paramvalor("zidFIN");
String zidCOMMENT = zobjtabla.m4paramvalor("zidCOMMENT");
*/

String zidTIT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidTIT");
String zidDIP = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidDIP");
String zidCEN = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCEN");
String zidDESCEN = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidDESCEN");
String zidINI = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidINI");
String zidFIN = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidFIN");
String zidCOMMENT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidCOMMENT");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){  zinicios = "1";}

if ((zidTIT==null)||(zidTIT.equals(""))){zidTIT = "";}   
if ((zidDIP==null)||(zidDIP.equals(""))){zidDIP = "";}   
if ((zidCEN==null)||(zidCEN.equals(""))){zidCEN = "";}   
if ((zidDESCEN==null)||(zidDESCEN.equals(""))){zidDESCEN = "";}  
if ((zidINI==null)||(zidINI.equals(""))){zidINI = "";}   
if ((zidFIN==null)||(zidFIN.equals(""))){zidFIN = "";}   
if ((zidCOMMENT==null)||(zidCOMMENT.equals(""))){zidCOMMENT = "";}   


String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String zpathVerComentario = "/sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=";
String ViewComment = sse_g1Ess.getProperty("Button.ViewComment");
%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EMP_BACKGROUND";
   String zmeta4object = "SSE_EMP_BACKGROUND";
   String znodo = "SSE_EMP_BACKGROUND";
   String znodo2 = "M4T_EDUC_CENTER";
   String znodo3 = "M4T_LU_EDU_DIPLOMA";
   String znodo4 = "M4T_LU_EDU_SPECIALITY";
   String znodo5 = "M4T_LU_EDU_TYPE";
      
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/sse_g1_p3_mod.jsp";
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
   String zfilter4 = zsubsesion + "!" + znodo4 + ".Filter4";

   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";

   // Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "SSE";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSTDNEXTORG2 = zcomun + "STD_N_EXT_ORG";
   String zSTDNDIPLOMA2 = zcomun + "STD_N_DIPLOMA";
   String zSTDIDEDUCENTER2 = zcomun + "STD_ID_EDU_CENTER";
   String zSTDDESCEDUCENTER = zcomun + "STD_DESC_EDU_CENTER";
   String zSTDNEDUSP2 = zcomun + "STD_N_EDU_SP";
   String zSTDNEDUTYPE2 = zcomun + "STD_N_EDU_TYPE";
   String zSTDNDIPLEVEL2 = zcomun + "STD_N_DIP_LEVEL";
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   String zSTDDTSTART = zcomun + "STD_DT_START";
   String zSTDDTEARNEDEXPE = zcomun + "STD_DT_EARNED_EXPE";
   String zSTDCOMMENT = zcomun + "STD_COMMENT";
   String sideducenter = "";
   
   String zSTDIDEDUCENTER = zcomun2 + "SCO_ID_EDUC_CENTER";
   String zSTDNEXTORG = zcomun2 + "STD_N_EXT_ORG";
   String zSTDIDDIPLOMA = zcomun3 + "STD_ID_DIPLOMA";
   String zSTDNDIPLOMA = zcomun3 + "STD_N_DIPLOMA";
   String zSTDIDEDUSP = zcomun4 + "STD_ID_EDU_SP";
   String zSTDNEDUSP = zcomun4 + "STD_N_EDU_SP";
   String zSTDIDEDUTYPE = zcomun5 + "STD_ID_EDU_TYPE";
   String zSTDNEDUTYPE = zcomun5 + "STD_N_EDU_TYPE";

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
<m4:removefilter m4name="<%=zfilter4%>" />
<%
String sfilter4 ="IF STD_ID_EDU_TYPE = \""+ zidTIT + "\"" +"THEN RETURN(1)";
%>
<m4:filter m4name="<%=zfilter4%>"  m4filter="<%=sfilter4%>" />
<m4:outputdef m4alias="<%=znodo4%>" ><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:removefilter m4name="<%=zfilter4%>" />
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;  
  int  zcount2i  = 0; 
  int  zcount3i  = 0; 
  int  zcount4i  = 0; 
  int  zcount5i  = 0; 
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
      zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
      zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
      zcount4i = m.getCountInClient(znodo4,zsubsesion,znodo4);
      zcount5i = m.getCountInClient(znodo5,zsubsesion,znodo5);
  } catch(Exception e) {}
  String  zcount2v = String.valueOf(zcount2i);
  String  zcount3v = String.valueOf(zcount3i);
  String  zcount4v = String.valueOf(zcount4i);
  String  zcount5v = String.valueOf(zcount5i);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=tfuncional%></td></tr>
<tr>
  <td><img alt="Titulaciones"title="Titulaciones" src="/iconos/noname_titulaciones_ess_48_100.gif"  width="100" height="100"/></td>
  <td>
  <div class="descripcionfuncional"><%=dfuncional%></div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" title="<%=efuncional%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11"><%=efuncional%></a></li>
  </ul>
  </td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zinicios" name="zinicios"  value="" />
  <input type="hidden" id="zidTIT" name="zidTIT" value="<%=zidTIT%>" htmlsafe="true"/>
  <input type="hidden" id="zidDIP" name="zidDIP" value="<%=zidDIP%>" htmlsafe="true"/>
  <input type="hidden" id="zidCEN" name="zidCEN" value="<%=zidCEN%>" htmlsafe="true"/>
  <input type="hidden" id="zidDESCEN" name="zidDESCEN" value="<%=zidDESCEN%>" htmlsafe="true"/>     
  <input type="hidden" id="zidINI" name="zidINI" value="<%=zidINI%>" htmlsafe="true"/>      
  <input type="hidden" id="zidFIN" name="zidFIN" value="<%=zidFIN%>" htmlsafe="true"/>      
  <input type="hidden" id="zidCOMMENT" name="zidCOMMENT" value="<%=zidCOMMENT%>" htmlsafe="true"/>      
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_EMP_BACKGROUND" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EMP_BACKGROUND" />
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo" colspan="3">&nbsp;<%=etiqueta%></td>
  <td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><img alt="<%=efuncional%>"title="<%=efuncional%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<%=etiqueta2%></td>
  <td class="fuentecampo"><input class="fuenteformulario" type="text" name="STD_DT_START" id="STD_DT_START" title="<%=etiqueta3%>" maxlength="10" size="10" tabindex="1" />&nbsp;<a href="javascript:m4calendario(m4objeto('STD_DT_START','NombreFormulario'))" title="<%=etiqueta4%>"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=etiqueta4%>" /></a></td>
   <script type="text/javascript" language="Javascript1.5"><!--
      if ('<%=zidINI%>'!= ""){
          m4valor('NombreFormulario','STD_DT_START','<%=zidINI%>',"set");
       }
--></script>    
  <td class="fuentecampo" >&nbsp;<%=etiqueta7%></td>
  <td class="fuentecampo"><input class="fuenteformulario" type="text" name="STD_DT_EARNED_EXPE" id="STD_DT_EARNED_EXPE" title="<%=etiqueta5%>" maxlength="10" size="10" />&nbsp;<a href="javascript:m4calendario(m4objeto('STD_DT_EARNED_EXPE','NombreFormulario'))" title="<%=etiqueta6%>"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=etiqueta4%>" /></a></td>
    <script type="text/javascript" language="Javascript1.5"><!--
      if ('<%=zidFIN%>'!= ""){
          m4valor('NombreFormulario','STD_DT_EARNED_EXPE','<%=zidFIN%>',"set");
       }
--></script>    
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<%=etiqueta8%></td>
  <td class="fuentevalor" colspan="3">
  <select id="STD_ID_DIPLOMA" class="fuenteformulario150" name="STD_ID_DIPLOMA" title="Escoge el tipo de diploma">
  <option value=""></option>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
    <option value="<m4:item m4name="<%=zSTDIDDIPLOMA%>" htmlsafe="true"/>">
    <m4:item m4name="<%=zSTDNDIPLOMA%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  <script type="text/javascript" language="Javascript1.5"><!--
  if ('<%=zidDIP%>'!= ""){
    m4searchoptioness('NombreFormulario','STD_ID_DIPLOMA','<%=zidDIP%>');
  }
  --></script>
  </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<%=etiqueta9%></td>
  <td class="fuentevalor" colspan="3">
  <select id="STD_ID_EDU_TYPE" class="fuenteformulario" name="STD_ID_EDU_TYPE"title="Escoge el t&iacute;tulo de la carrera" 
    onchange="filtrar_datos_especialidad()">
  <option value=""></option>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcount5v).intValue()-1).toString()%>">
    <option value="<m4:item m4name="<%=zSTDIDEDUTYPE%>" htmlsafe="true"/>">
    <m4:item m4name="<%=zSTDNEDUTYPE%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  <script type="text/javascript" language="Javascript1.5"><!--
  if ('<%=zidTIT%>'!= ""){
      m4searchoptioness('NombreFormulario','STD_ID_EDU_TYPE','<%=zidTIT%>');
   }
--></script>
  </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;<%=etiqueta10%></td>
  <td class="fuentevalor" colspan="3">
  <select id="STD_ID_EDU_SP" class="fuenteformulario" name="STD_ID_EDU_SP"title="Escoge la especialidad">
  <option value=""></option>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcount4v).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zSTDIDEDUSP%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNEDUSP%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<%=etiqueta11%></td>
  <td class="fuentevalor" colspan="3">
  <select id="STD_ID_EDU_CENTER" class="fuenteformulario" name="STD_ID_EDU_CENTER" title="Escoge el centro" 
  onchange="javascript:habilitar_desc()">
    <option value=""></option>
    <m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
      <option value="<m4:item m4name="<%=zSTDIDEDUCENTER%>" htmlsafe="true"/>">
      <m4:item m4name="<%=zSTDNEXTORG%>" htmlsafe="true"/></option>
    </m4:loop>
  </select>
  <script type="text/javascript" language="Javascript1.5"><!--
  if ('<%=zidCEN%>'!= ""){
      m4searchoptioness('NombreFormulario','STD_ID_EDU_CENTER','<%=zidCEN%>');
   }
--></script>
  </td>
</tr>
<tr>
  <td class = "fuentecampo" colspan="0">&nbsp;<%=etiqueta15%></td>
    <td class="fuentecampo" colspan="3">
      <textarea rows="3" input class="fuenteformulariodisabled" type="text" cols="30" id="STD_DESC_EDU_CENTER" name="STD_DESC_EDU_CENTER" onKeyUp="javascript:if (this.value.length>254) {this.value = this.value.substring(0,254)}" onKeyPress="return(this.value.length<254);" disabled = true title="<%=etiqueta15%>" htmlsafe = "true" ></textarea>
  </td>
  <script type="text/javascript" language="Javascript1.5"><!--
      if ('<%=zidCEN%>'== "000"){
          habilitar_desc();
       }
--></script>    

</tr>
  <script type="text/javascript" language="Javascript1.5"><!--
      if ('<%=zidDESCEN%>'!= ""){
          m4valor('NombreFormulario','STD_DESC_EDU_CENTER','<%=zidDESCEN%>',"set");
       }         
--></script>    
<tr>
  <td class = "fuentecampo" colspan="0">&nbsp;<%=etiqueta16%></td>
    <td class="fuentecampo" colspan="3">
      <textarea rows="3" input class="fuenteformulario" type="text" cols="30" id="STD_COMMENT" name="STD_COMMENT" onKeyUp="javascript:if (this.value.length>1000) {this.value = this.value.substring(0,1000)}" onKeyPress="javascript:return(this.value.length<1000);" title="<%=etiqueta16%>" htmlsafe = "true" ></textarea>
  </td>
  <script type="text/javascript" language="Javascript1.5"><!--
      if ('<%=zidCOMMENT%>'!= ""){
          m4valor('NombreFormulario','STD_COMMENT','<%=zidCOMMENT%>',"set");
       }         
--></script>    

</tr>
<tr><td colspan="4" class="fuenteboton"><a href="javascript:comprobar()"><img alt="<%=etiqueta12%>"title="<%=etiqueta12%>" border="0" src="/iconos/icono_enviar_ess_36_36.gif" width ="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
<script type="text/javascript"> m4focus("NombreFormulario","STD_ID_DIPLOMA");</script>
<%if (zcounti > 0) {
    String zregistroinicials = String.valueOf(zregistroinicial);
    String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
    String zposicions = "0";
    int zcontrol = 0;
    int zposicion =0;
%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_EMP_BACKGROUND" />
<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EMP_BACKGROUND" />
<input type="hidden" id="REC" name="REC" />
</form>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;<%=etiqueta14%></td>
  <td class="tablaestadosceldatitulo">&nbsp;<%=etiqueta2%></td>
  <td class="tablaestadosceldatitulo">&nbsp;<%=etiqueta7%></td>
  <td class="tablaestadosceldatitulo">&nbsp;<%=etiqueta8%></td>
  <td class="tablaestadosceldatitulo" colspan="2">&nbsp;<%=etiqueta9%>&nbsp;-&nbsp;<%=etiqueta10%></td>
  <td class="tablaestadosceldatitulo">&nbsp;<%=etiqueta11%></td>
  <td class="tablaestadosceldatitulo"></td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
  
<form name="b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" id="b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" action=" "onSubmit="return false">
  <input id="STD_COMMENT<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" name="STD_COMMENT<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>" type="hidden" value="<m4:item m4name="<%=zSTDCOMMENT%>" htmlsafe="true"/>" />      
                                                                                                                                                                                  
  
<m4:item var="sideducenter" item="STD_ID_EDU_CENTER" htmlsafe="true" outputdef="<%=znodo%>"/>
<%
  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;

if (zcontrol==0){%>
<tr>  
  <td class="fuentecampoaccion">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('STD_COMMENT<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>','b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>   
      <m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSTDDTEARNEDEXPE%>" htmlsafe="true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSTDNDIPLOMA2%>" htmlsafe="true"/></td>
  <td class="fuentevalor" colspan="2"><m4:item m4name="<%=zSTDNEDUTYPE2%>" htmlsafe="true"/>&nbsp;-&nbsp;<m4:item m4name="<%=zSTDNEDUSP2%>" htmlsafe="true"/></td>
  <% if (sideducenter.equals("000")) {%>
    <td class="fuentevalor"><m4:item m4name="<%=zSTDDESCEDUCENTER%>" htmlsafe="true"/></td>
  <%}else{%>
    <td class="fuentevalor"><m4:item m4name="<%=zSTDNEXTORG2%>" htmlsafe="true"/></td>
  <%}%>
  <td class="fuentevalor"><a title ="<%=etiqueta13%>" href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=etiqueta13%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
  <td class="fuentecampoaccion2">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('STD_COMMENT<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>','b<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe = "true"/>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>   
    <m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
  <td class="fuentevalor2"><m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
  <td class="fuentevalor2"><m4:item m4name="<%=zSTDDTEARNEDEXPE%>" htmlsafe="true"/></td>
  <td class="fuentevalor2"><m4:item m4name="<%=zSTDNDIPLOMA2%>" htmlsafe="true"/></td>
  <td class="fuentevalor2" colspan="2"><m4:item m4name="<%=zSTDNEDUTYPE2%>" htmlsafe="true"/>&nbsp;-&nbsp;<m4:item m4name="<%=zSTDNEDUSP2%>" htmlsafe="true"/></td>
  <% if (sideducenter.equals("000")) {%>
    <td class="fuentevalor2"><m4:item m4name="<%=zSTDDESCEDUCENTER%>" htmlsafe="true"/></td>
  <%}else{%>
    <td class="fuentevalor2"><m4:item m4name="<%=zSTDNEXTORG2%>" htmlsafe="true"/></td>
  <%}%>
  <td class="fuentevalor2"><a title ="<%=etiqueta13%>" href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=etiqueta13%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}%>
</form> 
</m4:loop>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas_post.jsp"%>
<%}%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>


