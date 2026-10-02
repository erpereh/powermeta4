<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Employee Portfolio</title>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../sse_generico/english/menu_ess.jsp" %> 
<%  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
  String zregistro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC");
  if ((zregistro==null)||(zregistro.equals(""))){
    zregistro="0";
  }
%>
</head>
<body>
<%@include file="../../sse_generico/english/generico_menusup.jsp"%>
<%@include file="../../sse_generico/english/generico_links.jsp"%>
<%

   M4SessionManager m4Session = M4Context.getSession(request);
   String sPathTempMap = m4Session.getPathTempMapping();
   String sPathTempURI = m4Session.getUserTempURI() + '/';

   String zsubsesion = "SSE_INVENTARIO";
   String zmeta4object = "SSE_INVENTARIO";
   String zmetodocarga = zsubsesion + "!SSE_INVENTARIO.CARGA";
   String znodo = "SSE_INVENTARIO_DETALLE";
   String znodo2 = "SSE_INVENTARIO";
   String ztipocarga = "DET";

// Normally not modified.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]";   
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

// Items to be loaded. You must add all of the ones that you want to view.

   String zSTDNFAMILYNAME1 = zraiz + "STD_N_FAMILY_NAME_1";
   String zSTDNFIRSTNAME = zraiz + "STD_N_FIRST_NAME";
   String zSCOGBNAME = zraiz + "SCO_GB_NAME";
   String zSTDIDPERSON = zraiz + "STD_ID_PERSON";
   String zSTDEMAIL = zraiz + "STD_EMAIL";
   String zSTDNWORKUNIT = zraiz + "STD_N_WORK_UNIT";
   String zSTDPHONE = zraiz + "STD_PHONE";   
   String zSTDGBPHONE = zraiz + "STD_GB_PHONE"; 
   String zJOB = zraiz + "SCO_N_ROLE";   
   String sSCO_PRP_NAME_PHOTO = zraiz + "SCO_PRP_NAME_PHOTO";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodo2,"","STD_ID_PERSON_PAR",zregistro);
    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/><m4:param name="ARG_PATH_TEMP" value="<%=sPathTempMap%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<table width="100%" cellspacing="0">
<tr>
  <td class="titulofuncional">Employee Portfolio</td>
</tr>
<tr>
     <td><img alt="Photo" src='<%=sPathTempURI%><m4:item m4name="<%=sSCO_PRP_NAME_PHOTO%>" htmlsafe = "true"/>' width="120" height="120"/></td>
     <td><ul class="listaenlace"><li><a class="enlacefuncional" title="Who&#39;s Who" href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_buscar_contactos.jsp?estado=0">Who&#39;s Who</a></li></ul></td>
</tr>

</table>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo" colspan="4">&nbsp;Employee:&nbsp;<m4:item m4name="<%=zSCOGBNAME%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;Department</td>
  <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;Job</td>
  <td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="<%=zJOB%>" htmlsafe="true"/></td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;Phone No.</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDGBPHONE%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;E-mail Address</td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></td>
</tr>
</table>
<m4:endpage/>
<%@include file="../../sse_generico/english/generico_disclaimer.jsp"%>
</div>
</body>
</html>

