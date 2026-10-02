<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>
<script type="text/javascript">

function comprobar()
{
  var error = 0;
  var texto = m4getmessage("_sl_co_ess_iv_3") + "\n";

  var sivname = m4valor("NombreFormulario","SCO_INTERVIEW_NAME","","get");
  var sreason = m4valor("NombreFormulario","SCO_INTERVIEW_REASON","","get");
  var sidiv = m4valor("NombreFormulario","SCO_ID_INTERVIEWER","","get");

  if (sivname == null || sivname == "")
    {
      texto = texto + "\n     " + m4getmessage("_sl_co_ess_iv_0");
      error = 1;
    }

  if (sreason == null || sreason == "")
    {
      texto = texto + "\n     " + m4getmessage("_sl_co_ess_iv_1");
      error = 1;
    }

  if (sidiv == null || sidiv == "")
    {
      texto = texto + "\n     " + m4getmessage("_sl_co_ess_iv_2");
      error = 1;
    }

  if (error == 1)
    {
      alert(texto);
      return;
    }
  else 
    {
      m4submit("NombreFormulario") ;
    }
}

function view_interview(a,b)
{
  m4valor("detinterview","zPOSINTERVIEW",a,"set");
  m4valor("detinterview","zNODE",b,"set");
  m4submit("detinterview");
}

function pending(ord)
{
  var parametros = new Array("TAG","REC","ACC","NOD");
  var valores = new Array("SSE_GN_INTERVIEW",ord,"BORRAR","SSE_GN_INTERVIEW");
  m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}

</script>

<% String zTitle = tranivESS.getProperty("iv_ess.Title_Solicitud"); %>
<title> <%=zTitle%> </title>

<%    
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  if ((estado==null)||(estado.equals(""))){estado="31";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
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
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zpos="";

   String zsubsesion = "SSE_GN_INTERVIEW";
   String zmeta4object = "SSE_GN_INTERVIEW";
   String znodo = "SSE_PENDING_INTERVIEW";
   String znodopr = "M4T_X_INTERVIEW_PRIORITY";
   String znodotp = "M4T_X_INTERVIEW_TYPE";
   String znodoiv = "SSE_INTERVIEWER";

// Metodo de carga del Meta4Object generico
   String ztipocarga = "SSE";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOINTERVIEWNAME = zcomun + "SCO_INTERVIEW_NAME";
   String zSCODTREQUEST = zcomun + "SCO_DT_REQUEST";   
   String zSCOGBNAME = zcomun + "SCO_GB_NAME";   
   String zORDINAL = zcomun + "ORDINAL";

// No se modifica en general.

   String zoutputdefpr = zsubsesion + "!" + znodopr + "[*]";
   String zmovepr = znodopr + ":" + znodopr + "[FIRST]";
   String zcomunpr = znodopr + ":" + zsubsesion + "!" + znodopr + "[&VAR.m4lix]" + ".";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOIDINTERVIEWPRIO = zcomunpr + "SCO_ID_INTERVIEW_PRIORITY";
   String zSCONMINTERVIEWPRIO = zcomunpr + "SCO_NM_INTERVIEW_PRIORITY";   

// No se modifica en general.

   String zoutputdeftp = zsubsesion + "!" + znodotp + "[*]";
   String zmovetp = znodotp + ":" + znodotp + "[FIRST]";
   String zcomuntp = znodotp + ":" + zsubsesion + "!" + znodotp + "[&VAR.m4lix]" + ".";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOIDINTERVIEWTYPE = zcomuntp + "SCO_ID_INTERVIEW_TYPE";
   String zSCONMINTERVIEWTYPE = zcomuntp + "SCO_NM_INTERVIEW_TYPE";   

// No se modifica en general.

   String zoutputdefiv = zsubsesion + "!" + znodoiv + "[*]";
   String zmoveiv = znodoiv + ":" + znodoiv + "[FIRST]";
   String zcomuniv = znodoiv + ":" + zsubsesion + "!" + znodoiv + "[0]" + ".";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCONMINTERVIEW = zcomuniv + "PRP_IV_GB_NAME";
   String zSCOIDINTERVIEW = zcomuniv + "PRP_IV_ID_HR";
   String zSCOPRINTERVIEW = zcomuniv + "PRP_IV_OR_HR_PERIOD";
   String zSCOPRORHR = zcomuniv + "PRP_OR_HR_PERIOD";
   
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
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodopr%>"><m4:param name="m4name0" value="<%=zoutputdefpr%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodotp%>"><m4:param name="m4name0" value="<%=zoutputdeftp%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoiv%>"><m4:param name="m4name0" value="<%=zoutputdefiv%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovepr%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovetp%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveiv%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;
  int  zcountipr  = 0;
  int  zcountitp  = 0;
  int  zcountiiv  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
      zcountipr = m.getCountInClient(znodopr,zsubsesion,znodopr);
      zcountitp = m.getCountInClient(znodotp,zsubsesion,znodotp);
      zcountiiv = m.getCountInClient(znodoiv,zsubsesion,znodoiv);
  } catch(Exception e) {}
  String  zcountvtmpintpr = String.valueOf(zcountipr);
  String ztotmpintpr = new Integer(new Integer(zcountvtmpintpr).intValue()-1).toString();
  String  zcountvtmpinttp = String.valueOf(zcountitp);
  String ztotmpinttp = new Integer(new Integer(zcountvtmpinttp).intValue()-1).toString();
  String  zcountvtmpintiv = String.valueOf(zcountiiv);
  String ztotmpintiv = new Integer(new Integer(zcountvtmpintiv).intValue()-1).toString();
%>
<table width="100%" >
<tr><td class="titulofuncional" colspan="2"><%=tranivESS.getProperty("iv_ess.Title_Solicitud")%>  </td></tr>
<tr>
  <td><img alt="<%=zTitle%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100"/></td>
  <td>
    <div class="descripcionfuncional"><%=tranivESS.getProperty("iv_ess.DescrAddInter")%></div>
    <ul class="enlacefuncional">
        <li>
          <a title="<%=tranivESS.getProperty("iv_ess.Goto")%> <%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Interview")%></a>
        </li>
    </ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_GN_INTERVIEW" />
<input type="hidden"id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_GN_INTERVIEW" />
<input type="hidden" id="SCO_ID_INTERVIEWER" name="SCO_ID_INTERVIEWER" value="<m4:item m4name="<%=zSCOIDINTERVIEW%>" htmlsafe="true"/>" />
<input  type="hidden"id="SCO_OR_INTERVIEWER" name="SCO_OR_INTERVIEWER" value="<m4:item m4name="<%=zSCOPRINTERVIEW%>" htmlsafe="true"/>" />
<m4:item m4varname="sOrHrPeriod" m4name="<%=zSCOPRORHR%>" htmlsafe="true"/>
<%sOrHrPeriod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrPeriod);%>
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD" value="<%=sOrHrPeriod%>" />
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
  <td colspan="2"><%=tranivESS.getProperty("iv_ess.Add_Solicitud")%></td>
        <td class="tablamenuright">
            <a title="<%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31">
               <img alt="<%=tranivESS.getProperty("iv_ess.Interview")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
            </a>
       </td>
  
</tr>
<tr>
  <td class="fuentecampo" width="20%">*&nbsp;<m4:label m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe="true"/>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <input class="fuenteformulario" type="text" name="SCO_INTERVIEW_NAME" id="SCO_INTERVIEW_NAME" title="<%=tranivESS.getProperty("iv_ess.Name_Interview")%>" maxlength="255" size="80" tabindex="1" />&nbsp;
  </td>
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<m4:label m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe="true"/>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <select id="SCO_ID_INTERVIEW_TYPE" class="fuenteformulario" name="SCO_ID_INTERVIEW_TYPE" title="<%=tranivESS.getProperty("iv_ess.Type_Interview")%>" tabindex="2">
  <m4:loop from="0" to="<%=ztotmpinttp%>">
     <option value="<m4:item m4name="<%=zSCOIDINTERVIEWTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<m4:label m4name="<%=zSCONMINTERVIEWPRIO%>" htmlsafe="true"/>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <select id="SCO_ID_INTERVIEW_PRIORITY" class="fuenteformulario" name="SCO_ID_INTERVIEW_PRIORITY" title="<%=tranivESS.getProperty("iv_ess.Priority_Interview")%>" tabindex="3">
  <m4:loop from="0" to="<%=ztotmpintpr%>">
           <option value="<m4:item m4name="<%=zSCOIDINTERVIEWPRIO%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMINTERVIEWPRIO%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<%=tranivESS.getProperty("iv_ess.Reason")%>&nbsp;
  </td>
  <td class="fuentecampo" colspan="2">
  <textarea class="fuentetextarea" name="SCO_INTERVIEW_REASON" id="SCO_INTERVIEW_REASON" title="<%=tranivESS.getProperty("iv_ess.Reason_Interview")%>" cols="85" rows="5" tabindex="4"></textarea>
  </td>
  
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<m4:label m4name="<%=zSCOGBNAME%>" htmlsafe="true"/>
  </td>
  <td class="fuentecampo" colspan="2">
  <input class="fuenteformulario" type="text" name="SCO_GB_NAME" id="SCO_GB_NAME" readonly="readonly" title="<m4:label m4name="<%=zSCOGBNAME%>" htmlsafe="true"/>" maxlength="50" size="50" value="<m4:item m4name="<%=zSCONMINTERVIEW%>" htmlsafe="true"/>" />&nbsp;
  <a tabindex="5" href="javascript:ssco_filter_responsibles('NombreFormulario','SCO_ID_INTERVIEWER','SCO_OR_INTERVIEWER','SCO_GB_NAME')" title="<%=tranivESS.getProperty("iv_ess.Interviewer")%>"><img alt="<%=tranivESS.getProperty("iv_ess.Interviewer")%>" src="/iconos/icono_lista_16_16.gif"  width="16" height="16" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </td>
</tr>
<tr>
  <td class="fuenteboton" colspan="3">
    <a title="<%=tranivESS.getProperty("iv_ess.Send")%>" href="javascript:comprobar();" tabindex="6"><img alt="<%=tranivESS.getProperty("iv_ess.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </td>
</tr>
</table>
</form>

<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_det.jsp?estado=31" method="post" name="detinterview" id="detinterview">
<input type="hidden" id="zPOSINTERVIEW" name="zPOSINTERVIEW"  value="" />
<input type="hidden" id="zNODE" name="zNODE"  value="" />
</form>

<%
if (zcounti > 0) {
%>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31" method="post" name="oculto" id="oculto">
   <input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
  <table class = "tablaestados" cellspacing="0" width="100%">
  <tr class = "tablaestadosceldatitulo">
    <td colspan="4">
      <%=tranivESS.getProperty("iv_ess.PendInterview")%>
    </td>
  </tr>
  <tr class = "tablaestadosceldatitulo">
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentecampo">
      <m4:label m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentecampo" colspan="2">
      <m4:label m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/>
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
      <a class="enlacefuncional" title="<%=tranivESS.getProperty("iv_ess.Goto")%> <m4:item m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/>" href="javascript:view_interview('<%=m4lix%>','<%=znodo%>');"><m4:item m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/></a>
    </td>
    <td class = "fuentevalor<%=zpos%>">
      <m4:item m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor<%=zpos%>">
      <m4:item m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/>
    </td>
    <td class="fuentebotonright<%=zpos%>">
      <a title="<%=tranivESS.getProperty("iv_ess.Del_Solicitud")%>" href="javascript:pending('<m4:item m4name="<%=zORDINAL%>" htmlsafe = "true"/>');"><img alt="<%=tranivESS.getProperty("iv_ess.Del_Solicitud")%>"  src="/iconos/denegado.gif" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
    </td>
  </tr>
</m4:loop>
   </ul>
</table>
<%@ include file="../../sse_generico/portugues/generico_ventanas_post.jsp" %>
<%}else{%>
<div class="fuentenodatos"><%=tranivESS.getProperty("iv_ess.NoDataFound1")%></div>
<%}%>
<br> <br/>


<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>

</body>
</html>
