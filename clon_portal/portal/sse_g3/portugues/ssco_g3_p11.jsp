<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>

<script type="text/javascript" language="Javascript1.2">

function view_interview(a,b)
{
   m4valor("detinterview","zPOSINTERVIEW",a,"set");
   m4valor("detinterview","zNODE",b,"set");
   m4submit("detinterview");
}
</script>

<% String zTitle = tranivESS.getProperty("iv_ess.Interview"); %>
<title> <%=zTitle%> </title>

<%    
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  String zinicios2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios2");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  if ((zinicios2==null)||(zinicios2.equals(""))){zinicios2 = "1";}
%> 
</head>

<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>

<%

   String zventanas = "10";
   int zvuelta = 5;
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;

   int zregistroinicial2 = Integer.valueOf(zinicios2).intValue();
   zregistroinicial2 = zregistroinicial2 - 1;

   int zventana  = Integer.valueOf(zventanas).intValue();

   int zregistrofinal = zregistroinicial + zventana - 1;
   int zregistrofinal2 = zregistroinicial2 + zventana - 1;

   String ziniciointervalo = "";
   String ziniciointervalo2  = "";

   String zpos="";

   String zsubsesion = "SSE_GN_INTERVIEW";
   String zmeta4object = "SSE_GN_INTERVIEW";
   String znodo = "SSE_GN_INTERVIEW";
   String znodounfin = "M4T_UNFINISHED_INTERVIEW";
   String znodofin = "M4T_FINISHED_INTERVIEW";

// No se modifica en general.

   String zoutputdefunfin = zsubsesion + "!" + znodounfin + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmoveunfin = znodounfin + ":" + znodounfin + "[FIRST]";
   String zcomununfin = znodounfin + ":" + zsubsesion + "!" + znodounfin + "[&VAR.m4lix]" + ".";

   String zoutputdeffin = zsubsesion + "!" + znodofin + "[" + zregistroinicial2 + "-" + zregistrofinal2 + "]";
   String zmovefin = znodofin + ":" + znodofin + "[FIRST]";
   String zcomunfin = znodofin + ":" + zsubsesion + "!" + znodofin + "[&VAR.m4lix]" + ".";


// Metodo de carga del Meta4Object generico
   String ztipocarga = "M4T";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOINTERVIEWNAMEUNFIN = zcomununfin + "SCO_INTERVIEW_NAME";
   String zSCODTREQUESTUNFIN = zcomununfin + "SCO_DT_REQUEST";   
   String zSCOGBNAMEUNFIN = zcomununfin + "SCO_GB_NAME";   

   String zSCOINTERVIEWNAMEFIN = zcomunfin + "SCO_INTERVIEW_NAME";
   String zSCODTREQUESTFIN = zcomunfin + "SCO_DT_REQUEST";   
   String zSCODTFINISHFIN = zcomunfin + "SCO_DT_FINISH";   
   String zSCOGBNAMEFIN = zcomunfin + "SCO_GB_NAME";   
   
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodounfin%>"><m4:param name="m4name0" value="<%=zoutputdefunfin%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodofin%>"><m4:param name="m4name0" value="<%=zoutputdeffin%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveunfin%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovefin%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcount2  = 0;
  int  zcounti  = 0;
  int  zcounti2  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodounfin,zsubsesion,znodounfin);
      zcount2 = m.getCount(znodofin,zsubsesion,znodofin);
      zcounti = m.getCountInClient(znodounfin,zsubsesion,znodounfin);
      zcounti2 = m.getCountInClient(znodofin,zsubsesion,znodofin);
  } catch(Exception e) {}
  String  zcountvunfin = String.valueOf(zcounti);
  String ztounfin = new Integer(new Integer(zcountvunfin).intValue()-1).toString();
  String  zcountvfin = String.valueOf(zcounti2);
  String ztofin = new Integer(new Integer(zcountvfin).intValue()-1).toString();
%>

        <table width="100%" >
  <tr>
    <td class="titulofuncional" colspan="2">
      <%=tranivESS.getProperty("iv_ess.Interview")%>
    </td>
  </tr>
  <tr>
    <td>
      <img alt="<%=zTitle%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100"/>
    </td>
    <td>
      <div class="descripcionfuncional">
        <%=tranivESS.getProperty("iv_ess.DescrMyInter")%>
      </div>
      <ul class="enlacefuncional">
        <li>
          <a title="<%=tranivESS.getProperty("iv_ess.Goto")%> <%=tranivESS.getProperty("iv_ess.Title_Solicitud")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Title_Solicitud")%></a>
        </li>
      </ul>
    </td>
  </tr>
  </table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31" method="post" name="detinterview" id="detinterview">
<input type="hidden" id="zPOSINTERVIEW" name="zPOSINTERVIEW"  value="" />
<input type="hidden" id="zNODE" name="zNODE"  value="" />
</form>

<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31" method="post" name="oculto" id="oculto">
   <input type="hidden" id="zinicios" name="zinicios"  value="" />
   <input type="hidden" id="zinicios2" name="zinicios2"  value="" />
</form>

<%
if (zcounti > 0) { 
%>

  <table class = "tablaestados" cellspacing="0" width="100%">
  <tr class = "tablaestadosceldatitulo">
    <td colspan="4">
      <%=tranivESS.getProperty("iv_ess.NoreleaseInterview")%>
    </td>
  </tr>
  <tr class = "tablaestadosceldatitulo">
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCOINTERVIEWNAMEUNFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCODTREQUESTUNFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCOGBNAMEUNFIN%>" htmlsafe = "true"/>
    </td>
  </tr>

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
   zcontrol = zposicion%2;zpos="";
   if (zcontrol==0){zpos="2";}
%>
  <tr>
    <td class = "fuentevalor<%=zpos%>">
      <a class="enlacefuncional" title="<%=tranivESS.getProperty("iv_ess.Goto")%> <m4:item m4name="<%=zSCOINTERVIEWNAMEUNFIN%>" htmlsafe = "true"/>" href="javascript:view_interview('<%=m4lix%>','<%=znodounfin%>');"><m4:item m4name="<%=zSCOINTERVIEWNAMEUNFIN%>" htmlsafe = "true"/></a>
    </td>
    <td class = "fuentevalor<%=zpos%>"> 
      <m4:item m4name="<%=zSCODTREQUESTUNFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor<%=zpos%>"> 
      <m4:item m4name="<%=zSCOGBNAMEUNFIN%>" htmlsafe = "true"/>
    </td>
  </tr>
</m4:loop>
</table>
<%@ include file="../../sse_generico/portugues/generico_ventanas_post1.jsp" %>
<%}else{%>
<div class="fuentenodatos"><%=tranivESS.getProperty("iv_ess.NoDataFound2")%></div>
<%}%>
<br> <br/>

<%
if (zcounti2 > 0) {
%>


  <table class = "tablaestados" cellspacing="0" width="100%">
  <tr class = "tablaestadosceldatitulo">
    <td colspan="4">
      <%=tranivESS.getProperty("iv_ess.ReleaseInterview")%>
    </td>
  </tr>
  <tr class = "tablaestadosceldatitulo">
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCOINTERVIEWNAMEFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCODTREQUESTFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCODTFINISHFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCOGBNAMEFIN%>" htmlsafe = "true"/>
    </td>
  </tr>
<%
   String zregistroinicials2 = String.valueOf(zregistroinicial2);
   String zregistrofinals2 = String.valueOf(zregistroinicial2 + zcounti2 - 1);
   String zposicions2 = "0";
   int zcontrol2 = 0;
   int zposicion2 =0;
%>
<m4:loop from="<%=zregistroinicials2%>" to="<%=zregistrofinals2%>">
<%
   zposicions2 = m4lix; 
   zposicion2 = Integer.valueOf(zposicions2).intValue();
   zcontrol2 = zposicion2%2;zpos="";
   if (zcontrol2==0){zpos="2";}
%>
  <tr>
    <td class = "fuentevalor<%=zpos%>">
      <a class="enlacefuncional" title="<%=tranivESS.getProperty("iv_ess.Goto")%> <m4:item m4name="<%=zSCOINTERVIEWNAMEFIN%>" htmlsafe = "true"/>" href="javascript:view_interview('<%=m4lix%>','<%=znodofin%>');"><m4:item m4name="<%=zSCOINTERVIEWNAMEFIN%>" htmlsafe = "true"/></a>
    </td>
    <td class = "fuentevalor<%=zpos%>">
      <m4:item m4name="<%=zSCODTREQUESTFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor<%=zpos%>">
      <m4:item m4name="<%=zSCODTFINISHFIN%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor<%=zpos%>">
      <m4:item m4name="<%=zSCOGBNAMEFIN%>" htmlsafe = "true"/>
    </td>
  </tr>
</m4:loop>
</table>
<%@ include file="../../sse_generico/portugues/generico_ventanas_post2.jsp" %>
<%}else{%>
<div class="fuentenodatos"><%=tranivESS.getProperty("iv_ess.NoDataFound3")%></div>
<%}%>
<br> <br/> 

<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>

</body>
</html>
