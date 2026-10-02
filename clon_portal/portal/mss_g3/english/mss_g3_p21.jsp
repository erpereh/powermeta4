<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.* " %>


<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 

<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>

<title><%=TranMss.getProperty("ev_mss.Plan")%></title>

<%
String IDRH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", IDRH);
String PERIODO = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO");
PERIODO = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", PERIODO);

String znombreemp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombreemp");

String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String profData = Tran.getProperty("Labelmss.ProfsData");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script> 

</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%

   String zsubsesion = "SSM_CR_PREFERENC";
   String zmeta4object = "SSM_CR_PREFERENC";
   String zmetodocarga = zsubsesion + "!SSM_CR_PREFERENC_PRINCIPAL.CARGA";
   String znodo = "SSM_CR_PREFERENC";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zventanas = "20";
 
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String ztipocarga = "ALL";


// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
   String zfechainicio = zcomun + "DT_START";
   String zfechafin = zcomun + "DT_END";
   String zorden = zcomun + "SCO_PREF_PRIORITY";
   String znombrepuesto = zcomun + "STD_N_JOB_CODE";
   String znombreuo = zcomun + "STD_N_WORK_UNIT";
   String znombrepais = zcomun + "STD_N_COUNTRY";
   String znombrepcia = zcomun + "STD_N_GEO_DIV";

%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ID_ARG" value="<%=IDRH%>"/><m4:param name="OR_ARG" value="<%=PERIODO%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<script type="text/javascript">
function load(empleado)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function plan_accion()
{

  m4submit("plan_accion");
}
</script>
<%
  int  zcounti  = 0;  
  try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String zto = new Integer(new Integer(zcountv).intValue()-1).toString();
%>
<%
IDRH = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", IDRH);
PERIODO = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", PERIODO);
%>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp" method="post" name="plan_accion" id="plan_accion">
<input type="hidden" id="estado" name="estado"  value="31" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR"  value="<%=IDRH%>" />
<input type="hidden" id="zidhr_name" name="zidhr_name"  value="<%=znombreemp%>" />
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"  value="<%=PERIODO%>" />
</form>

<table width="100%">

<tr><td class="titulofuncional" colspan="2"><%=TranMss.getProperty("ev_mss.Pref")%></td></tr>
<tr>
  <td><img src="/iconos/noname_plan_carrera_133_100.gif" width="115" height="100" alt="<%=TranMss.getProperty("ev_mss.Pref")%>"title="<%=TranMss.getProperty("ev_mss.Pref")%>" /></td>
  <td>
  <div class="fuentedescripcion"><%=TranMss.getProperty("ev_mss.DescrPref")%></div> 
  <ul class="listaenlace">
  <li><a class="enlacefuncional" tabindex="1" title="<%=TranMss.getProperty("ev_mss.LblPlan")%>" href="javascript:plan_accion();"><%=TranMss.getProperty("ev_mss.Plan")%></a></li>
  </ul>
  </td>
</tr>
</table>
<%if (zcounti > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;

  
  int zposicion =0;%>
<table border="0" width="100%">
<tr><td class="fuenteleyenda_big"  width="25%" colspan= "3" >
<a class="fuenteleyenda_big" title="<%=profData%>" href="javascript:load('<%=IDRH%>')"><%=znombreemp%></a></td>
</tr>

<table class="tablaestados" cellspacing="0" width="100%">

<tr>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zfechainicio%>" htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zfechafin%>" htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=zorden%>" htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=znombrepuesto%>" htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=znombreuo%>" htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=znombrepais%>" htmlsafe = "true"/></td>
    <td class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=znombrepcia%>" htmlsafe = "true"/></td>
</tr>

<% String clase = "" ; %>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
    zposicion = Integer.valueOf(zposicions).intValue();
    zcontrol = zposicion%2;
  if (zcontrol==0){
     clase = "fuentevalor" ; 
  }else{
     clase = "fuentevalor2" ; 
     }
%>
<tr>
  <td class="<%=clase%>">&nbsp;<m4:item m4name="<%=zfechainicio%>" htmlsafe = "true"/></td>
  <td class="<%=clase%>">&nbsp;<m4:item m4name="<%=zfechafin%>" htmlsafe = "true"/></td>
  <td class="<%=clase%>">&nbsp;<m4:item m4name="<%=zorden%>" htmlsafe = "true"/></td>
  <td class="<%=clase%>">&nbsp;<m4:item m4name="<%=znombrepuesto%>" htmlsafe = "true"/></td>
  <td class="<%=clase%>">&nbsp;<m4:item m4name="<%=znombreuo%>" htmlsafe = "true"/></td>
  <td class="<%=clase%>">&nbsp;<m4:item m4name="<%=znombrepais%>" htmlsafe = "true"/></td>
  <td class="<%=clase%>">&nbsp;<m4:item m4name="<%=znombrepcia%>" htmlsafe = "true"/></td>
  


</tr>
</m4:loop>
</table>  
<%} else {%>  
<div class="fuentenodatos"><%=TranMss.getProperty("ev_mss.DataPref")%></div>
<%}%>
<div> 
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
</div>
</div>
<m4:endpage/>
</body>
</html>



