<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script> 

<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%@ include file="/sse_g3/ssco_iv_trans.jsp"%>

<% String zTitle = tranivESS.getProperty("iv_ess.DetInterview"); %>
<title> <%=zTitle%> </title>

<%    

  String znode = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNODE");
  String zposinterview = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zPOSINTERVIEW");

  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

%> 

</head>

<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>

<%
   String zsubsesion = "SSE_GN_INTERVIEW";
   String zmeta4object = "SSE_GN_INTERVIEW";
   

// No se modifica en general.
   String zoutputdef = zsubsesion + "!" + znode + "[*]";
   String zmove = znode + ":" + znode + "["+ zposinterview + "]";
   String zcomun = znode + ":" + zsubsesion + "!" + znode + "[" + zposinterview + "]" + ".";

// Metodo de carga del Meta4Object generico: en este caso ya viene cargado el Meta4Object
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCODTFINISH = zcomun + "SCO_DT_FINISH";
   String zSCODTNEXTINTERVIEW = zcomun + "SCO_DT_NEXT_INTERVIEW";
   String zSCODTREQUEST = zcomun + "SCO_DT_REQUEST";
   String zSCOGBNAME = zcomun + "SCO_GB_NAME";
   String zSCOIDINTERVIEWDOC = zcomun + "SCO_ID_INTERVIEW_DOC";
   String zSCOINTERVIEWNAME = zcomun + "SCO_INTERVIEW_NAME";
   String zSCOINTERVIEWREASON = zcomun + "SCO_INTERVIEW_REASON";
   String zSCOINTERVIEWRESULT = zcomun + "SCO_INTERVIEW_RESULT";
   String zSCONMINTERVIEWPRIORITY = zcomun + "SCO_NM_INTERVIEW_PRIORITY";
   String zSCONMINTERVIEWRESULT = zcomun + "SCO_NM_INTERVIEW_RESULT";
   String zSCONMINTERVIEWTYPE = zcomun + "SCO_NM_INTERVIEW_TYPE";
   
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znode%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:item m4name="<%=zSCOIDINTERVIEWDOC%>" m4varname="zIdDoc" htmlsafe = "true"/>
<%if (!zIdDoc.equals("")) {zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDoc);}%>
<table width="100%" >
  <tr>
    <td class="titulofuncional" colspan="2">
      <m4:item m4name="<%=zSCOINTERVIEWNAME%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td>
      <img alt="<%=zTitle%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100"/>
    </td>
    <td>
      <div class="descripcionfuncional">
                            <%=tranivESS.getProperty("iv_ess.Det_View")%>
      </div>
      <ul class="enlacefuncional">
        <li>
           <% if (znode.equals("SSE_PENDING_INTERVIEW")) 
             {
           %>
           <a title="<%=tranivESS.getProperty("iv_ess.Goto")%> <%=tranivESS.getProperty("iv_ess.Title_Solicitud")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Title_Solicitud")%></a>
           <%
              } else {
           %>
           <a title="<%=tranivESS.getProperty("iv_ess.Goto")%> <%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31"><%=tranivESS.getProperty("iv_ess.Interview")%></a>
             <%
              }
           %>
        </li>
      </ul>
    </td>
  </tr>
  </table>

  <table class = "tablaestados" cellspacing="0" width="100%">
  <tr class = "tablaestadosceldatitulo">
    <td>
        <%=tranivESS.getProperty("iv_ess.DetInterview")%>
    </td>
                <td class="tablamenuright">
                    <% if (znode.equals("SSE_PENDING_INTERVIEW")) 
                         {
                    %>
                            <a title="<%=tranivESS.getProperty("iv_ess.Title_Solicitud")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31">
                                <img alt="<%=tranivESS.getProperty("iv_ess.Title_Solicitud")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
                            </a>
                    <%
                         } 
                       else 
                         {
                    %>
                            <a title="<%=tranivESS.getProperty("iv_ess.Goto")%> <%=tranivESS.getProperty("iv_ess.Interview")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31">
                                <img alt="<%=tranivESS.getProperty("iv_ess.Interview")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
                            </a>
                    <%
                         }
                    %>
          </td>
  </tr>
  <tr>
    <td class = "fuentevalor" width="20%">
      <m4:label m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCODTREQUEST%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
          <td class = "fuentevalor">
      <m4:label m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCOGBNAME%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
<form action="" name="frmivtype" id="frmivtype">
   <input type="hidden" name="SCO_ID_DOC" id="SCO_ID_DOC" value="<%=zIdDoc%>">
      <% if (!zIdDoc.equals("")) {%>
        <a title="<%=tranivESS.getProperty("iv_ess.View_Doc")%>" href="javascript:ssco_manage_document('view','frmivtype','SCO_ID_DOC');"><m4:item m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe = "true"/></a>
      <%} else {%>
        <m4:item m4name="<%=zSCONMINTERVIEWTYPE%>" htmlsafe = "true"/>
      <%}%>
    </td>
</form>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCONMINTERVIEWPRIORITY%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCONMINTERVIEWPRIORITY%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCOINTERVIEWREASON%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCOINTERVIEWREASON%>" htmlsafe = "true"/>
    </td>
  </tr>
<%
if (znode.equals("M4T_FINISHED_INTERVIEW")) {
%>

  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCODTFINISH%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCODTFINISH%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCODTNEXTINTERVIEW%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCODTNEXTINTERVIEW%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCONMINTERVIEWRESULT%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCONMINTERVIEWRESULT%>" htmlsafe = "true"/>
    </td>
  </tr>
  <tr>
    <td class = "fuentevalor">
      <m4:label m4name="<%=zSCOINTERVIEWRESULT%>" htmlsafe = "true"/>
    </td>
    <td class = "fuentevalor">
      <m4:item m4name="<%=zSCOINTERVIEWRESULT%>" htmlsafe = "true"/>
    </td>
  </tr>
<%
     }
%>
  </table>
<br><br/>

<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>

</body>
</html>
