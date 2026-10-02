<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>

<script type="text/javascript">
function interview_det(IdHR,IdHRPer,DtRequest,IdTpIV){
m4valor("detinterview","zPRP_ID_HR_ENCR",IdHR,"set");
m4valor("detinterview","zPRP_OR_HR_PERIOD_ENCR",IdHRPer,"set");
m4valor("detinterview","zPRP_DT_REQUEST_ENCR",DtRequest,"set");
m4valor("detinterview","zPRP_ID_INTERVIEW_TYPE_ENCR",IdTpIV,"set");
  m4submit("detinterview");
}

function interview_del(IdHR,IdHRPer,DtRequest,IdTpIV){
  m4valor("delinterview","zPRP_ID_HR",IdHR,"set");
  m4valor("delinterview","zPRP_OR_HR_PERIOD",IdHRPer,"set");
  m4valor("delinterview","zPRP_DT_REQUEST",DtRequest,"set");
  m4valor("delinterview","zPRP_ID_INTERVIEW_TYPE",IdTpIV,"set");
  m4valor("delinterview","zDelete","Y","set");
  m4submit("delinterview");
}
</script>

<% String zTitle = tranivMSS.getProperty("iv_mss.GestInterview"); %>
<title> <%=zTitle%> </title>

<%
   String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
   String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
   if ((estado==null)||(estado.equals(""))){estado="0";}
   if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

   String zdel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDelete");
   if ((zdel==null)||(zdel.equals(""))){zdel="";}

   String zSCOIDHRCancel = "";
   String zSCOORHPERIODCancel = "";
   String zSCOIDINTERVIEWTYPECancel = "";
   String zSCODTREQUESTCancel = "";
   String zday = "";
   String zmonth = "";
   String zyear = "";
   String ztipocarga = "M4T";
   if (zdel.equals("Y")) 
     {
       ztipocarga = "DEL"; 
       zdel = "";
       zSCOIDHRCancel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_ID_HR");
       zSCOIDHRCancel = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSCOIDHRCancel);
       zSCOORHPERIODCancel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_OR_HR_PERIOD");
       zSCOORHPERIODCancel = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSCOORHPERIODCancel);
       zSCOIDINTERVIEWTYPECancel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_ID_INTERVIEW_TYPE");
       zSCOIDINTERVIEWTYPECancel = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSCOIDINTERVIEWTYPECancel);
       zSCODTREQUESTCancel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPRP_DT_REQUEST");
       zSCODTREQUESTCancel = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSCODTREQUESTCancel);
     }
%> 
</head>

<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>

<%

   String zventanas = "10";
   int zvuelta = 5;
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zpos="";

   String zsubsesion = "SSM_GN_INTERVIEW";
   String zmeta4object = "SSM_GN_INTERVIEW";
   String znodo = "M4T_GN_INTERVIEW";

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

// Metodo de carga del Meta4Object generico
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCOINTERVIEWNAME = zcomun + "SCO_INTERVIEW_NAME";
   String zSCODTREQUEST = zcomun + "SCO_DT_REQUEST";   
   String zSCOGBNAME = zcomun + "SCO_GB_NAME";   

   String zSCOIDHR = zcomun + "SCO_ID_HR";   
   String zSCOORHRPERIOD = zcomun + "SCO_OR_HR_PERIOD";   
   String zSCOIDINTERVIEWTYPE = zcomun + "SCO_ID_INTERVIEW_TYPE";   
   
   String bDateOk = "0";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSM_PRINCIPAL","","NIVEL","0");
      if (ztipocarga.equals("DEL"))
        {
          m.setItem(zsubsesion,"SSM_GN_INTERVIEW","","PRP_ID_HR",zSCOIDHRCancel);
          m.setItem(zsubsesion,"SSM_GN_INTERVIEW","","PRP_OR_HR_PERIOD",zSCOORHPERIODCancel);
          m.setItem(zsubsesion,"SSM_GN_INTERVIEW","","PRP_ID_INTERVIEW_TYPE",zSCOIDINTERVIEWTYPECancel);
          m.setItem(zsubsesion,"SSM_GN_INTERVIEW","","PRP_DT_REQUEST_AUX",zSCODTREQUESTCancel);
				m.setItem(zsubsesion,"SSM_GN_INTERVIEW","","PLCO_PRP_DATE_OK",bDateOk);
        }
         
      } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
  int  zcount  = 0;
  int  zcounti  = 0;
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  String zto = new Integer(new Integer(zcountv).intValue()-1).toString();
%>

        <table width="100%" >
  <tr>
    <td class="titulofuncional" colspan="2">
      <%=zTitle%>
    </td>
  </tr>
  <tr>
    <td>
      <img alt="<%=zTitle%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100"/>
    </td>
    <td>
      <div class="descripcionfuncional">
        <%=tranivMSS.getProperty("iv_mss.DescrMyInter")%>
      </div>
      <ul class="enlacefuncional">
        <li>
          <a title="<%=tranivMSS.getProperty("iv_mss.LblGoto")%> <%=tranivMSS.getProperty("iv_mss.LinkAskIv")%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_pet.jsp?estado=31"><%=tranivMSS.getProperty("iv_mss.LinkAskIv")%></a>
        </li>
      </ul>
    </td>
  </tr>
  </table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31" method="post" name="detinterview" id="detinterview">
<input type="hidden" id="zPRP_ID_HR_ENCR" name="zPRP_ID_HR_ENCR" value="" />
<input type="hidden" id="zPRP_OR_HR_PERIOD_ENCR" name="zPRP_OR_HR_PERIOD_ENCR" value="" />
<input type="hidden" id="zPRP_DT_REQUEST_ENCR" name="zPRP_DT_REQUEST_ENCR" value="" />
<input type="hidden" id="zPRP_ID_INTERVIEW_TYPE_ENCR" name="zPRP_ID_INTERVIEW_TYPE_ENCR" value=""/>
</form>
<%
if (zcounti > 0) { 
%>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31" method="post" name="oculto" id="oculto">
   <input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>

  <table class = "tablaestados" cellspacing="0" width="100%">
  <tr class = "tablaestadosceldatitulo">
    <td colspan="4">
      <%=tranivMSS.getProperty("iv_mss.LblPendingIv")%>
    </td>
  </tr>
  <tr class = "tablaestadosceldatitulo">
    <td >
      <m4:label m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/>
    </td>
    <td >
      <m4:label m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
    <td  colspan="2">
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

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31" method="post" name="delinterview" id="delinterview">
  <input type="hidden" id="zPRP_ID_HR" name="zPRP_ID_HR" value="" />
  <input type="hidden" id="zPRP_OR_HR_PERIOD" name="zPRP_OR_HR_PERIOD" value="" />
  <input type="hidden" id="zPRP_DT_REQUEST" name="zPRP_DT_REQUEST" value="" />
  <input type="hidden" id="zPRP_ID_INTERVIEW_TYPE" name="zPRP_ID_INTERVIEW_TYPE" value="" />
  <input type="hidden" id="zDelete" name="zDelete" value="" />
</form>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
   zposicions = m4lix; 
   zposicion = Integer.valueOf(zposicions).intValue();
   zcontrol = zposicion%2;zpos="";
   if (zcontrol==0){zpos="2";}
%>
  <tr>
    <td class = "fuentevalor<%=zpos%>">
      <m4:item m4name="<%=zSCOIDHR%>" htmlsafe="true" m4varname="sIdHR"/>
      <%sIdHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHR);%>
      <m4:item m4name="<%=zSCOORHRPERIOD%>" htmlsafe="true" m4varname="sOrHrPeriod"/>
      <%sOrHrPeriod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrPeriod);%>
      <m4:item m4name="<%=zSCODTREQUEST%>" htmlsafe="true" m4varname="sDtRequest"/>
      <%sDtRequest = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sDtRequest);%>
      <m4:item m4name="<%=zSCOIDINTERVIEWTYPE%>" htmlsafe="true" m4varname="sIdInterviewType"/>
      <%sIdInterviewType = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdInterviewType);%>
      <a class="enlacefuncional" title="<%=tranivMSS.getProperty("iv_mss.LblGoto")%> <m4:item m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/>" href="javascript:interview_det('<%=sIdHR%>','<%=sOrHrPeriod%>','<%=sDtRequest%>','<%=sIdInterviewType%>')"><m4:item m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/></a>
    </td>
    <td class = "fuentevalor<%=zpos%>"> 
      <m4:item m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor<%=zpos%>"> 
      <m4:item m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor<%=zpos%>"> 
      <a class="enlacefuncional" title="<%=tranivMSS.getProperty("iv_mss.LblCancel")%>" href="javascript:interview_del('<%=sIdHR%>','<%=sOrHrPeriod%>','<%=sDtRequest%>','<%=sIdInterviewType%>')"><img src="/iconos/icono_borrar_16_16.gif" align="right" height="13" width="13"/></a>
    </td>
  </tr>
</m4:loop>
</table>
<%@ include file="../../sse_generico/francais/generico_ventanas_post.jsp" %>
<%}else{%>
<div class="fuentenodatos"><%=tranivMSS.getProperty("iv_mss.LblNoPendingIv")%></div>
<%}%>
<br> <br/>

<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>

</body>
</html>
