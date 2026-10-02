<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<title>Validez les dipl&ocirc;mes</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script> 
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>  
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = (String) zobjtabla.m4paramvalor("estado");
String zfiltro =(String) zobjtabla.m4paramvalor("zfiltro");
String zinicios =(String) zobjtabla.m4paramvalor("zinicios"); 
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String znivel = zobjtabla.m4paramvalor("znivel");
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
    var cadena="";
    var URL = "{TAG=SSE_EMP_BACKGROUND";
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
    document.forms["envio"].elements["TAG"].value="SSE_EMP_BACKGROUND";
    m4submit("envio");
  }
}
function m4Cut() {
  var objTd = null;
  var i = 0;
  var sName = 'tdCom';
  objTd = document.getElementById(sName + i);
  while (objTd) {
    if (objTd.innerHTML.length > 75) {
      objTd.m4Comment = objTd.innerHTML;
      objTd.innerHTML = "&nbsp;<img onclick='m4ShowComent(this)' src='/iconos/lu_nor_info_24.png' style='width:12px;height:12px;cursor:pointer'/>" + objTd.innerHTML.substring(0,74) + ' ...';
    }
    i = i+1;
    objTd = document.getElementById(sName + i);
  }
}
function m4ShowComent(me) {
  if (me.parentNode.m4Comment) {
    var sComment = escape(me.parentNode.m4Comment);
    sPath = '/sse_g1/francais/ssco_g1_p3_comment.jsp?comment=' + sComment;
    showModalDialog(sPath, '','dialogWidth=300pt;dialogHeight=92pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
  }
}
</script>
</head>
<body onload="m4Cut()">
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EMP_BACKGROUND";
   String zmeta4object = "SSE_EMP_BACKGROUND";
   String znodo = "SSE_EMP_BACKGROUND";
   String znodolista = znodo + "_VAL";
   
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g1/mss_g1_p3_val2.jsp";
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

   String zoutputdeflista = znodolista + ":" + zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";

   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
// Metodo de carga del Meta4Object generico

   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   String ztipocarga = "SSE";

   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zORDINAL = zcomun + "ORDINAL";
   String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";

  
   String zSTDNDIPLOMA = zcomun + "STD_N_DIPLOMA";
   String zSTDNEDUSP = zcomun + "STD_N_EDU_SP";
   String zSTDNEDUTYPE = zcomun + "STD_N_EDU_TYPE";
   String zSTDNEXTORG = zcomun + "STD_N_EXT_ORG";
   String zNACCION = zcomun + "N_ACCION";
   String zSTDDESCEDUCENTER = zcomun + "STD_DESC_EDU_CENTER";
   String zSTDCOMMENT = zcomun + "STD_COMMENT";
   String sideducenter = "";

   String zNOMBREEMPLEADOlista = zcomunlista+ "NOMBRE_EMPLEADO";
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
  int zcount = 0; 
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    zcount = m.getCount(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);

  int  zcountlista  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcountlista = m.getCountInClient(znodolista,zsubsesion,znodolista);
  } catch(Exception e) {}
  String  zcountvlista = String.valueOf(zcountlista);
%>
<table width="100%" cellspacing="0">
  <tr>
    <td class="titulofuncional" colspan="2">Validez les dipl&ocirc;mes</td>
  </tr>
  <tr>
    <td><img alt="Validez les dipl&ocirc;mes" src="/iconos/noname_valida_titulaciones_74_100.gif" width="100" height="100" /></td>
    <td><div class="descripcionfuncional">Validez les modifications concernant les dipl&ocirc;mes de vos collaborateurs. N'oubliez pas d'envoyer l'acceptation ou l'annulation des demandes avant de changer de page.</div></td>
  </tr>
</table>
<%@ include file="../../mss_generico/francais/mssgenerico_filtro_val.jsp" %>
  <br/>
  <form action="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11" method="post" name="oculto" id="oculto">
    <input type="hidden" id="zfiltro" name="zfiltro" value="<%=zfiltro%>" />
    <input type="hidden" id="zfiltroemp" name="znivel" value="<%=znivel%>" />
    <input type="hidden" id="zinicios" name="zinicios" value="" />
  </form>
<% if (zcounti > 0) { %>
<table width="100%" cellspacing="0">
  <tr>
    <td class = "tablaestadosceldatitulo" colspan="2">&nbsp;Demandes</td>
  </tr>
<%
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<m4:item var="sideducenter" item="STD_ID_EDU_CENTER" htmlsafe="true" outputdef="<%=znodo%>"/>
<%
  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zposicion = zposicion - zregistroinicial; 
  %>
  <tr>
    <td class="fuentecampo">
      <table cellspacing="0" width="100%">
        <tr><td class="fuentecamponombre" colspan="3">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Labelmss.Solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
        <tr>
          <td class="fuentecampo" >&nbsp;Dipl&ocirc;me&nbsp;:&nbsp;</td>
          <td class = "fuentevalor" ><m4:item m4name="<%=zSTDNDIPLOMA%>" htmlsafe="true"/></td>
          <td class="fuentecampo" >&nbsp;Sp&eacute;cialisation&nbsp;:&nbsp;</td>
          <td class = "fuentevalor" ><m4:item m4name="<%=zSTDNEDUSP%>" htmlsafe="true"/></td>
        </tr>
        <tr>
          <td class="fuentecampo" >&nbsp;Domaine&nbsp;:&nbsp;</td>
          <td class = "fuentevalor" ><m4:item m4name="<%=zSTDNEDUTYPE%>" htmlsafe="true"/></td>
          <td class="fuentecampo" >&nbsp;&Eacute;tablissement&nbsp;:&nbsp;</td>
          <% if (sideducenter.equals("000")) {%>
            <td class = "fuentevalor" ><m4:item m4name="<%=zSTDDESCEDUCENTER%>" htmlsafe="true"/></td>
          <%}else{%>
            <td class = "fuentevalor" ><m4:item m4name="<%=zSTDNEXTORG%>" htmlsafe="true"/></td>
          <%}%>
        </tr>
        <tr>
          <td class="fuentecampo" >&nbsp;Commentaires:&nbsp;</td>
          <td class="fuentevalor" colspan="2" id="tdCom<%=zposicions%>"><m4:item m4name="<%=zSTDCOMMENT%>" htmlsafe="true"/></td>
        </tr>
        <tr>
          <td class="fuentecampo">
            <form name="a<%=zposicion%>" id="a<%=zposicion%>">
            <input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_EMP_BACKGROUND{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
            <input size="1" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
            </form>
          </td> 
        </tr>
      </table>
    </td>
    <td class="fuentecampo">
      <form name="b<%=zposicion%>" id="b<%=zposicion%>">
      <table cellspacing="0">
        <tr>
          <td class="fuentecampo"><input title="Accepter la demande" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />Accepter</td>
        </tr>
        <tr>
          <td class="fuentecampo"><input title="Annuler la demande" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />Annuler</td>
        </tr>
      </table>
      </form>
    </td>
  </tr>
  <tr>
    <td class="fuentecampo" colspan="2">
      Motif d'annulation      
      <form name="c<%=zposicion%>" title="Indiquez le motif d'annulation" id="c<%=zposicion%>"><input size="48" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" /></form>
    </td>
  </tr>
  <tr>
    <td class="separadorlinea" colspan="2">
      <hr />
    </td>
  </tr>
  </m4:loop>
  <form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
  <input type="hidden" id="param" name="param" value="" />
  <input type="hidden" id="TAG" name="TAG" value="" />
  </form>
</table>

  <%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>

  <%
  }else{%>  
      <div class="fuentenodatos" align="center">Vous n'avez actuellement aucune demande &agrave; valider &agrave; ce niveau.</div>
   <%
  }
  %>    
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>



