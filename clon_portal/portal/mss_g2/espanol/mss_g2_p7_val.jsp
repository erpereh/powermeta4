<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %> 
<%@ include file="/mss_g2/mss_bft_trans.jsp"%>
<title><%=TranMss.getProperty("bft_mss.Benefits")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado =  zobjtabla.m4paramvalor("estado");
String zfiltro = zobjtabla.m4paramvalor("zfiltro");
String zinicios = zobjtabla.m4paramvalor("zinicios");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (zfiltro.equals(""))){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String znivel =zobjtabla.m4paramvalor("znivel");
if ((znivel==null)||(znivel.equals(""))) {
  znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
  if ((znivel==null)||(znivel.equals(""))) znivel = "1";
}
%>
<script type="text/javascript">
function filtrar()
{
  var valor =m4select("filtro","prueba","value");
  var nivel =m4select("nivel","prueba","value");
  m4valor("oculto","zfiltro",valor,"set");
  m4valor("oculto","znivel",nivel,"set");
  m4submit("oculto");
}

function verDetalles (vNameBenefit,vPosition)
{
  m4valor("oculto1","vNameBenefit",vNameBenefit,"set");
  m4valor("oculto1","vPosition",vPosition,"set");
  document.forms["oculto1"].action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_det.jsp?estado=21";
  m4submit("oculto1");
}

function m4enviar()
{
  var cadena="";
  var URL = "{TAG=SSE_BFT_EE_BNFT_ELEC";
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
    document.forms["envio"].elements["TAG"].value="SSE_BFT_EE_BNFT_ELEC";
    document.forms["envio"].submit();
  }
}
</script>
<!-- Fin del Requerido para validacion-->
</head>
<body>
<%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_BFT_EE_BNFT_ELEC";
   String zmeta4object = "SSE_BFT_EE_BNFT_ELEC";
   String znodo = "SSE_H_EE_IN_BNFT";
   String ztipocarga = "SSE";
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "/mss_g2/mss_g2_p7_val.jsp";
   String zestado="21";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zlectura = zsubsesion + "!" + znodo;
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
  String zNOMBREPERSON = zraiz + "NOMBRE_PERSON"; 
  
   String zORDINAL =  zcomun+"ORDINAL";
   String zNACCION =zcomun+  "N_ACCION";   
   String zNOMBREEMPLEADO = zcomun+"NOMBRE_EMPLEADO";
   String zSTDEMAIL =  zcomun+"STD_EMAIL";
   String zSTDNLOCATIONTYPE = zcomun+ "STD_N_LOCATION_TYPE";

   String zNOMBREEMPLEADOlista = zcomunlista+ "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista+"STD_ID_PERSON";  

  String zSUS_N_PLAN_PERIOD = zcomun + "SUS_N_PLAN_PERIOD";
  String zSSE_DT_START = zcomun + "SSE_DT_START";
  String zSSE_DT_END = zcomun + "SSE_DT_END";
  String zSUS_N_OPTION = zcomun + "SUS_N_OPTION";
  String zSSE_COVERAGE = zcomun + "SSE_COVERAGE";
  String zSUS_N_COV_CAT = zcomun + "SUS_N_COV_CAT";
  String zSSE_PCT_PRICE = zcomun + "SSE_PCT_PRICE";
  String zSSE_TAX = zcomun + "SSE_TAX";
  String zSSE_PRICE = zcomun + "SSE_PRICE";
  String zSSE_CREDIT = zcomun + "SSE_CREDIT";
  String zSSE_COMMENT = zcomun + "SSE_COMMENT";
  String zSCO_HTTP_PATH = zcomun + "SCO_HTTP_PATH";
  String zSTD_N_EXT_ORG = zcomun + "STD_N_EXT_ORG";
  String zSUS_N_PLAN = zcomun + "SUS_N_PLAN";
  String zSUS_ID_PLAN = zcomun + "SSE_ID_PLAN";
  String zSTD_N_COMP_BASIS = zcomun + "STD_N_COMP_BASIS";
  String zSTD_N_COMP_BASIS_EC = zcomun + "STD_N_COMP_BASIS_2";  
  String zSSE_ER_CONTR = zcomun + "SSE_ER_CONTR";
  String zSSE_CUR_DATE = zcomun + "SSE_CUR_DATE";
  String zSSE_EX_TYPE = zcomun + "SSE_EX_TYPE";
  String zSSE_ID_CURRENCY = zcomun + "SSE_ID_CURRENCY";
  
  String zSSE_OR_HR_PERIOD = zcomun + "SSE_OR_HR_PERIOD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%
 try {
      M4Operations m = new M4Operations(request); 
      
      m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
      m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltro);
        
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef >
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
  int  zcounti = 0;
  int  zcountilista = 0;
  int  zcount = 0;
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
<tr>
  <td class="titulofuncional" colspan="2"><%=TranMss.getProperty("bft_mss.Benefits")%></td>
</tr>
<tr>
  <td><img alt="<%=TranMss.getProperty("bft_mss.Benefits")%>" src="/iconos/noname_valida_beneficiarios_86_100.gif" width="86" height="100" /></td>
  <td>
    <div class="descripcionfuncional"><%=TranMss.getProperty("bft_mss.DescBenefitsEmp")%></div>
  </td>
</tr>
</table>
<%@ include file="../../mss_generico/espanol/mssgenerico_filtro_val.jsp" %>
<br />
<!-- Requerido para el filtro de validacion-->
<!-- Formulario de envío post para el filtro-->
<form action="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>

<form action="  " method="post" name="oculto1" id="oculto1">
<input type="hidden" id="vNameBenefit" name="vNameBenefit" value="" />
<input type="hidden" id="vPosition" name="vPosition" value="" />
</form>

<!-- Fin Requerido para el filtro de validacion-->
<% if (zcounti > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
%>
<table width="100%" cellspacing="0">
  <tr>
    <td class="tablaestadosceldatitulo"colspan="2"><%=Tran.getProperty("Label.TableVal")%></td>
  </tr>
<%
int zposicion = 0;
String zposicions = "0";
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zposicion = zposicion - zregistroinicial;
%>
  <tr valign="top">
    <td class="fuentecampo">
      <table cellspacing="0" width="100%">
        <tr>
          <form name="a<%=zposicion%>" id="a<%=zposicion%>" action=" ">
          <input id="ocultos<%=zposicion%>" name="ocultos<%=zposicion%>" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_H_EE_IN_BNFT{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
          <input id="ocul<%=zposicion%>" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
          </form>
          <td class="fuentecamponombre">
            <m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Label.solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/>
          </td>
        </tr>
        <tr>
          <td class="fuentecamponombre"><br /></td>
        </tr>
        <tr>
          <td>
            <table width="100%" cellspacing="0">

              <tr>
                <td class="fuentevalor" style="font: bold;"><m4:label m4name="<%=zSSE_OR_HR_PERIOD%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSSE_OR_HR_PERIOD%>" htmlsafe="true"/></td>
              </tr>
              <tr>
                <td class="fuentevalor"><m4:label m4name="<%=zSUS_N_PLAN_PERIOD%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSUS_N_PLAN_PERIOD%>" htmlsafe="true"/></td>
                <td class="fuentevalor"><m4:label m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/>:&nbsp;<a title="<%=Tran.getProperty("Label.VerDet")%>" href="javascript:verDetalles('<m4:item m4name="<%=zSUS_ID_PLAN%>" htmlsafe = "true" jsafe="true"/>','<%=zposicion%>','0');"><m4:item m4name="<%=zSUS_N_PLAN%>" htmlsafe = "true"/></a></td>
              </tr>
              <tr>
                <td class="fuentevalor"><m4:label m4name="<%=zSUS_N_OPTION%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSUS_N_OPTION%>" htmlsafe="true"/></td>
              </tr>
              <tr>
                <td class="fuentevalor"><m4:label m4name="<%=zSSE_PRICE%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSSE_PRICE%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSSE_ID_CURRENCY%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS%>" htmlsafe="true"/></td>
                <td class="fuentevalor"><m4:label m4name="<%=zSSE_ER_CONTR%>" htmlsafe = "true"/>:&nbsp;<m4:item m4name="<%=zSSE_ER_CONTR%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSSE_ID_CURRENCY%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSTD_N_COMP_BASIS_EC%>" htmlsafe="true"/></td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </td>
    <form name="b<%=zposicion%>" id="b<%=zposicion%>" action=" ">
    <td class="fuentecampo">
      <table cellspacing="0" class="fuentecampo">
        <tr>
          <td class="fuentecampo">
            <input id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />
            <%=Tran.getProperty("Button.Ok")%>
          </td>
        </tr>
        <tr>
          <td class="fuentecampo">
            <input id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />
            <%=Tran.getProperty("Button.Cancel")%>
          </td>
        </tr>
      </table>
    </td>
    </form>
  </tr>
  <tr>
    <td colspan="2" class="fuentecamponombre"><br /></td>
  </tr>
  <tr>
    <form name="c<%=zposicion%>" id="c<%=zposicion%>" action=" ">
    <td class="fuentecampo" colspan="2"><%=Tran.getProperty("Button.CancelReason")%>
      <input size="90" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
    </td>
    </form>
  </tr>
  <tr>
    <td class="separadorlinea" colspan="2"><hr /></td>
  </tr>
</m4:loop>
  <tr>
    <td colspan="2">
      <form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
      <input type="hidden" id="param" name="param" value="" />
      <input type="hidden" id="TAG" name="TAG" value="" />
      </form>
    </td>
  </tr>
</table>
<%@include file="../../sse_generico/espanol/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound11")%></div>
<br />
<%}%>
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</div>
</html>
