<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/func_eval.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>  

<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<% String ztitle = TranMss.getProperty("ev_mss.ValObj"); 
String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String zpathVerComentario = "/mss_g3/espanol/smco_viewcomment.jsp?comment=";
String ViewComment = Tran.getProperty("Button.ViewComment");
String zAyuda="/iconos/info_12.gif"; 
String Ver = Tran.getProperty("Label.Ver"); 
%>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title> <%=ztitle%> </title>


<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zfiltro =zobjtabla.m4paramvalor("zfiltro");

String zinicios =zobjtabla.m4paramvalor("zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 

// Nivel Post/Get

String znivel =zobjtabla.m4paramvalor("znivel");
if ((znivel==null)||(znivel.equals(""))){
znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
if ((znivel==null)||(znivel.equals(""))){znivel = "1";}
}

if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">


function navegar (ord,zposicion) {
var parametros = new Array("estado","ordinal","zposicion");
var valores = new Array(31,ord,zposicion);  
  m4navegar('mss_g3/mss_g3_p15_mod1.jsp',parametros,valores);
}
function filtrar(){

var valor =m4select("filtro","prueba","value");
var nivel =m4select("nivel","prueba","value");
m4valor("oculto","zfiltro",valor,"set");
m4valor("oculto","znivel",nivel,"set");
m4submit("oculto");
}
function m4enviar(){
  var cadena="";
  var URL = "{TAG=SSM_EV_ROL_LV_OBJ";
  if (typeof(document.forms['a0']) != "undefined"){
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
    document.forms["envio"].elements["param"].value=cadena;
    document.forms["envio"].elements["TAG"].value="SSM_EV_ROL_LV_OBJ";
    document.forms["envio"].submit();
  }
}


</script>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_EV_ROL_LV_OBJ";
   String zmeta4object = "SSM_EV_ROL_LV_OBJ";
   String znodo = "SSE_EV_ROL_LV_OBJ";

   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g3/mss_g3_p15_val1.jsp";
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";


   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
      
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   

   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
     
   
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";
   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zNACCION = zcomun  + "N_ACCION"; 
   String zORDINAL = zcomun+ "ORDINAL";

   String zSCO_GB_NAME = zcomun + "SCO_GB_NAME";


   String zNOMBREEMPLEADOlista = zcomunlista+ "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista+"STD_ID_PERSON";   

   String zSCO_NM_OBJECTIVE = zcomun+ "SCO_NM_OBJECTIVE";
   String zSCO_WEIGHT = zcomun + "SCO_WEIGHT";   
   String zSCO_N_MAGNITUD= zcomun + "SCO_NM_MAGNITUDE";   
   String zSCO_EMPLOYEE_AGREE = zcomun + "SCO_EMPLOYEE_AGREE";
   String zSCO_SCHED_VALUE = zcomun + "SCO_SCHED_VALUE";

 String zSCO_EMPLOYEE_COMM = zcomun + "SCO_EMPLOYEE_COMM";
   
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
  int  zcountilista  = 0;
  int  zcount  = 0; 
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
    zcount = m.getCount(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String  zcountvlista = String.valueOf(zcountilista);
%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"> <%=ztitle%> </td></tr>
<tr>
  <td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_puesto_144_100.gif" width="100" height="100" /></td>
  <td><div class="descripcionfuncional"> <%=TranMss.getProperty("ev_mss.DescrVal")%> </div></td>
</tr>
</table>
<%@ include file="../../mss_generico/francais/mssgenerico_filtro_val.jsp" %>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro" value="<%=zfiltro%>" />
<input type="hidden" id="zfiltroemp" name="znivel" value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>


<% if (zcount > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
 %>
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="2"><%=Tran.getProperty("Label.TableVal")%></td></tr>
<%
int zposicion = 0;
String zposicions = "0";
String zposicion2= "0";

%>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
    zposicion2 = String.valueOf(zposicion);
  zposicion = zposicion - zregistroinicial;

  String zSCO_ID_OBJECTIVE="";
  String zSCO_ID_MAGNITUD="";
  String zSCO_NM_MAGNITUDE="";  
  String zSCO_ID_LEVEL="";  
  String zSCO_NM_LEVEL="";
  String zSCO_N_LEVEL="";
  String zSCO_SCHED_VALUE2="";
  String zSCO_COMMENT = "";
  int dValor = 0;

try { 
  M4Operations t = new M4Operations(request);

  t.moveData(znodo,zmeta4object,znodo,zposicion2);     
    zSCO_ID_OBJECTIVE = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_OBJECTIVE");       
    zSCO_ID_MAGNITUD = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_MAGNITUD");  
    zSCO_NM_MAGNITUDE = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_MAGNITUDE"); 
    zSCO_ID_LEVEL = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_LEVEL");   
    zSCO_NM_LEVEL = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_LEVEL"); 
    zSCO_N_LEVEL = t.getLabel(znodo,zmeta4object,znodo,"SCO_NM_LEVEL"); 
  zSCO_SCHED_VALUE2 = t.getItem(znodo,zmeta4object,znodo,"","SCO_SCHED_VALUE"); 
  zSCO_COMMENT = t.getItem(znodo,zmeta4object,znodo,"","SCO_COMMENT");  
   }  catch(Exception e) {}

 if (zSCO_ID_MAGNITUD.equals("")==false){
  dValor = Double.valueOf(zSCO_SCHED_VALUE2).intValue();
}
%>


<form name="q<%=zposicion2%>" id="q<%=zposicion2%>" action="" onSubmit="return false">
<input id="SCO_COMMENT<%=zposicion2%>" name="SCO_COMMENT<%=zposicion2%>" type="hidden" value="<%=zSCO_COMMENT%>"/>
</form>
<tr>  
  <td class="fuentecampo">
  <table cellspacing="0">
  <tr>
    <td class="fuentecamponombre" colspan="6"><m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe = "true"/>&nbsp;<%=TranMss.getProperty("ev_mss.LblSolicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe = "true"/> <%=TranMss.getProperty("ev_mss.LblEmp")%> <m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></td>
  </tr> 
  <tr>
    <td class="fuentecampo"><m4:label m4name="<%=zSCO_NM_OBJECTIVE%>" htmlsafe = "true"/></td>
    <td class = "fuentevalor">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT<%=zposicion2%>','q<%=zposicion2%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
  <%if (zSCO_ID_MAGNITUD==null){%>
  <img style='cursor:pointer' IdObjective="<%=zSCO_ID_OBJECTIVE%>" IdLevel="<%=zSCO_ID_LEVEL%>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <%}else{%>
  <img style='cursor:pointer' IdObjective="<%=zSCO_ID_OBJECTIVE%>" IdMagnitud="<%=zSCO_ID_MAGNITUD%>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <%}%>       
  <m4:item m4name="<%=zSCO_NM_OBJECTIVE%>" htmlsafe = "true"/>
  </td>   
  
  <tr>
    <td class="fuentecampo" ><m4:label m4name="<%=zSCO_WEIGHT%>" htmlsafe = "true"/></td>
    <td class="fuentecampo" ><m4:item m4name="<%=zSCO_WEIGHT%>" htmlsafe = "true"/></td>
  

  <%
  if (zSCO_ID_MAGNITUD.equals("")==false){%>
  
    <td class="fuentecampo" colspan="1"><m4:label m4name="<%=zSCO_SCHED_VALUE%>" htmlsafe = "true"/></td>
    <td class="fuentecampo" colspan="2"><%=dValor%> - <%=zSCO_NM_MAGNITUDE%></td>
    
  <%}else{%>

    <td class="fuentecampo" colspan="1"><%=zSCO_N_LEVEL%></td>
    <td class="fuentecampo" colspan="2"><%=zSCO_NM_LEVEL%> </td>
  
  <%}%> 
  </tr>
  <tr>
    <td class="fuentecampo"><m4:label m4name="<%=zSCO_EMPLOYEE_AGREE%>" htmlsafe = "true"/></td>
<%
String zSCOEMPLOYEEAGREE="";
String zSCOEMPLOYEE="";
String zSSEPOS="";
String zSCOEMPLOYEECOMM="";
try {
  M4Operations t = new M4Operations(request);

  t.moveData(znodo,zmeta4object,znodo,zposicion2);
  zSCOEMPLOYEEAGREE = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_AGREE"); 
  zSCOEMPLOYEECOMM = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_COMM"); 
  } catch(Exception e) {}

  if (zSCOEMPLOYEEAGREE.equals("1"))
  {
    zSCOEMPLOYEE= Tran.getProperty("Label.Agree");
   }
  else
  {
    zSCOEMPLOYEE= Tran.getProperty("Label.NotAgree");

  }
%>
  <td class="fuentevalor"><%=zSCOEMPLOYEE%></td>
  </tr>

  <tr>
    <td class="fuentecampo"><m4:label m4name="<%=zSCO_EMPLOYEE_COMM%>" htmlsafe = "true"/></td>
    <td class="fuentecampo"><m4:item m4name="<%=zSCO_EMPLOYEE_COMM%>" htmlsafe = "true"/></td>
  </tr>
  <tr>
    <td class="fuentecampo">&nbsp;</td>
  </tr>

  <tr>
    <td class="fuentecampo">
    <form name="a<%=zposicion%>" id="a<%=zposicion%>" action=" ">
    <input id="ocultos<%=zposicion%>" name="ocultos<%=zposicion%>" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe = "true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe = "true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe = "true"/>*NOD=SSE_EV_ROL_LV_OBJ{<m4:item m4name="<%=zORDINAL%>" htmlsafe = "true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
    <input id="ocul<%=zposicion%>" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe = "true"/>" />
    </form>
    </td>
  </tr>
  </table>
  </td>
  <td class="fuentecampo">
  <form name="b<%=zposicion%>" id="b<%=zposicion%>" action=" ">
  <table cellspacing="0" class="fuentecampo"> 
  <tr>
    <td class="fuentecampo">
    <input title="<%=Tran.getProperty("Button.Accept")%>" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />
    <%=Tran.getProperty("Button.Accept")%>
    </td>
  </tr>
  <tr>
    <td class="fuentecampo">
    <input title="<%=Tran.getProperty("Button.Cancel2")%>" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />
    <%=Tran.getProperty("Button.Cancel2")%>
    </td>
  </tr>
  </table>
  </form>
  </td>   
</tr>
<tr>
  <td class="fuentecampo" colspan="2">
  <form name="c<%=zposicion%>" id="c<%=zposicion%>" action=" ">
  <%=Tran.getProperty("Button.CancelReason")%>      
  <input size="48" title="<%=Tran.getProperty("Button.CancelReasonLarge")%>" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
  </form>
  </td>
</tr>
<tr><td class="separadorlinea" colspan="2"> <hr /></td></tr>

</m4:loop>
<tr>
  <td>
  <form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
  <input type="hidden" id="param" name="param" value="" />
  <input type="hidden" id="TAG" name="TAG" value="" />
  <input type="hidden" id="REC" name="REC" value="" />
  </form>
  </td>
</tr>
</table>
<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}else{%>  
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound")%></div>
<br/> <br/>
 <%}    


%>
<m4:endpage/>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>
</html>


