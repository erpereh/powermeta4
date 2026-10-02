<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html>
<html>
<head>
<title>Valida experiencia profesional</title><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script> 
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-menu_mss.jsp" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = (String) zobjtabla.m4paramvalor("estado");
String zfiltro =(String) zobjtabla.m4paramvalor("zfiltro");
String zinicios =(String) zobjtabla.m4paramvalor("zinicios");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String znivel =zobjtabla.m4paramvalor("znivel");
if ((znivel==null)||(znivel.equals(""))){
znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
if ((znivel==null)||(znivel.equals(""))) znivel = "1";
}


%>
<script type="text/javascript">
function filtrar(){
  var valor =m4select("filtro","prueba","value");
  var nivel =m4select("nivel","prueba","value");
  m4valor("oculto","zfiltro",valor,"set");
  m4valor("oculto","znivel",nivel,"set");
  m4submit("oculto");
}
</script>
<script type="text/javascript">
function m4enviar(){
  if (typeof(document.forms['a0']) != "undefined"){
    document.getElementById("btn-envio").href='#';

    var cadena="";
    var URL = "{TAG=SSE_EMP_PREV_JOBS";// VARIABLE
    
    var numregistros = parseInt(document.forms['a0'].elements[1].name);

    cadena = cadena + URL;
    
    for (var i = 0; i < numregistros; i++){
      var formulario = "b" + i;
      if (document.forms[formulario].elements[0].checked == true){
        var formulario1 = "a" + i;
        cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";
        cadena = cadena + document.forms[formulario1].elements[0].value;
        } 
      if (document.forms[formulario].elements[1].checked == true){
        var formulario1 = "a" + i;
        cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";
        cadena = cadena + document.forms[formulario1].elements[0].value;
        var formulario2 = "c" + i;
        cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value;
        }
    }
  //alert(cadena);

  document.forms["envio"].elements["param"].value=cadena;
  document.forms["envio"].elements["TAG"].value="SSE_EMP_PREV_JOBS";
  m4submit("envio");
  }
}
function m4Cut() {
  var objTd = null;
  var i = 0;
  var sName = 'tdFun';
  objTd = document.getElementById(sName + i);
  while (objTd) {
    if (objTd.innerHTML.length > 75) {
      objTd.m4Functions = objTd.innerHTML;
      objTd.innerHTML = "&nbsp;<img onclick='m4ShowFunctions(this)' src='/iconos/lu_nor_info_24.png' style='width:12px;height:12px;cursor:pointer'/>" + objTd.innerHTML.substring(0,74) + ' ...';
    }
    i = i+1;
    objTd = document.getElementById(sName + i);
  }
}
function m4ShowFunctions(me) {
  if (me.parentNode.m4Functions) {
    var sFunctions = escape(me.parentNode.m4Functions);
    sPath = '/sse_g1/espanol/ssco_g1_p3_comment.jsp?comment=' + sFunctions;
    showModalDialog(sPath, '','dialogWidth=300pt;dialogHeight=92pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
  }
}
</script>
</head>
<body onload="m4Cut()">
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EMP_PREV_JOBS";
   String zmeta4object = "SSE_EMP_PREV_JOBS";
   String znodo = "SSE_EMP_PREV_JOBS";
   String ztipocarga = "SSE";
   String zventanas = "10";
   int zvuelta = 4;
   String zdireccion = "/mss_g1/mss_g1_p3_val3.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
// Metodo de carga del Meta4Object generico

   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zORDINAL = zcomun + "ORDINAL";
   String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";
   String zNACCION = zcomun + "N_ACCION";
   String zSTDDTSTART = zcomun +"STD_DT_START";
   String zSTDDTEND = zcomun + "STD_DT_END";
   String zSTDEMPLOYER = zcomun + "STD_EMPLOYER";
   String zSTDNSECTOR = zcomun + "STD_N_SECTOR";
   String zSTDDEVELOPEDACTIVITIES = zcomun + "STD_DEVELOPED_ACTIVITIES";
   String zSCONAREA = zcomun + "SCO_N_AREA";
   String zSTDCURRSALARY = zcomun + "STD_CURR_SALARY";
   String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";
   String zSTDINITIALJOB = zcomun + "STD_INITIAL_JOB";
   String zSTDFINALJOB = zcomun + "STD_FINAL_JOB";
         
   String zNOMBREEMPLEADOlista =  zcomunlista + "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      
      m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
      m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltro);
        
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef >
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
  int  zcounti  = 0;
  int  zcount  = 0;
  int  zcountilista  = 0;
  int  zcountlista  = 0;
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount = m.getCount(znodo,zsubsesion,znodo);
      zcountlista = m.getCountInClient(znodolista,zsubsesion,znodolista);
      zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountvlista = String.valueOf(zcountilista);
%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Valida experiencia profesional</td></tr>
<tr>
  <td><img alt="Valida experiencia profesional" src="/iconos/noname_valida_experiencia_101_100.gif" width="101" height="100" /></td>
  <td><div class="descripcionfuncional">Valida los cambios de experiencia profesional de tus empleados. Recuerda enviar la aceptaci&oacute;n o cancelaci&oacute;n de solicitudes por cada una de las p&aacute;ginas.</div></td>
</tr>
</table>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_filtro_val.jsp" %>
<br />
<form action="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<% if (zcounti > 0) { %>
<table width="100%" cellspacing="0">
<tr><td class = "tablaestadosceldatitulo" colspan="2">Peticiones</td></tr>
<%
      String zregistroinicials = String.valueOf(zregistroinicial);
      String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
      String zposicions = "0";
      int zcontrol = 0;
      int zposicion =0;
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
    zposicions = m4lix;
    zposicion = Integer.valueOf(zposicions).intValue();
    zposicion = zposicion - zregistroinicial;
%>
<tr>
  <td class="fuentecampo">
    <table cellspacing="0" width="100%">
    <tr><td class="fuentecamponombre" colspan="6">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Labelmss.Solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
    <tr>
      <td class="fuentecampo">&nbsp;Inicio</td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDDTSTART%>" htmlsafe="true"/></td>
      <td class="fuentecampo">&nbsp;Fin&nbsp;</td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDDTEND%>" htmlsafe="true"/></td>
      <td class="fuentecampo">&nbsp;Empresa</td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDEMPLOYER%>" htmlsafe="true"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;Sector</td>
      <td class="fuentevalor" colspan="4">&nbsp;<m4:item m4name="<%=zSTDNSECTOR%>" htmlsafe="true"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;Funciones</td>
      <td class="fuentevalor" colspan="4" id="tdFun<%=zposicions%>"><m4:item m4name="<%=zSTDDEVELOPEDACTIVITIES%>" htmlsafe="true"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCONAREA%>"/></td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONAREA%>" htmlsafe="true"/></td>
      <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDCURRSALARY%>"/></td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDCURRSALARY%>" htmlsafe="true"/></td>
      <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDNCOUNTRY%>"/></td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>
    </tr>
    <tr>
      <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDINITIALJOB%>"/></td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDINITIALJOB%>" htmlsafe="true"/></td>
      <td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDFINALJOB%>"/></td>
      <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDFINALJOB%>" htmlsafe="true"/></td>
    </tr>
    <tr>
    <tr>
      <td class="fuentecampo" colspan="4">
        <form name="a<%=zposicion%>" id="a<%=zposicion%>">
        <input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_EMP_PREV_JOBS{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
        <input name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
        </form>
      </td> 
    </tr>
    </table>
  </td>
  <td class="fuentecampo">
    <form name="b<%=zposicion%>" id="b<%=zposicion%>">
    <table width="100%" cellspacing="0">
    <tr><td class="fuentecampo"><input title="Acepta la petic&oacute;n" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />Aceptar</td></tr>
    <tr><td class="FuenteCampo"><input title="Cancela la petic&oacute;n" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />Cancelar</td></tr>
    </table>
    </form>
  </td>
</tr>
<tr>
  <td class="fuentecampo" colspan="2">&nbsp;Motivo de cancelaci&oacute;n
    <form name="c<%=zposicion%>" id="c<%=zposicion%>">
    &nbsp;<input size="48" title="Escribe el motivo de cancelaci&oacute;n" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
    </form>
  </td>
</tr>
<tr><td class="separadorlinea" colspan="2"><hr /></td></tr>
</m4:loop>
<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
<input type="hidden" id="param" name="param" value="" />
<input type="hidden" id="TAG" name="TAG" value="" />
</form>
</table>
<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas_post.jsp"%>
<%}else{%>
  <div class="fuentenodatos" align="center">Actualmente no tienes ning&uacute;n dato que validar en este nivel.</div>
<%}%>
<m4:endpage/>
</body>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
</div>


