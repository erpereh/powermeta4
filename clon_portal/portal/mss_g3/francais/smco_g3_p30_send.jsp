<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<%
  String sIdHR_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_HR");
  String zSCOIDHR = "";  
  if (sIdHR_Encr == null || sIdHR_Encr.equals("")) {zSCOIDHR="";}
  else {zSCOIDHR = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sIdHR_Encr);}
  String sOrHr_Encr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_PERIOD");
  String zSCOORHPERIOD = "";  
  if (sOrHr_Encr == null || sOrHr_Encr.equals("")) {zSCOORHPERIOD="";}
  else {zSCOORHPERIOD = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", sOrHr_Encr);}
  String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");
  if ((zVis==null)||(zVis.equals(""))){
    zVis = "1";}
    String zurl="";
  if (zVis.equals("1")){
      zurl="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31";
  }else{
      zurl="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp?estado=11&person=" + sIdHR_Encr + "&person_ord=" + zSCOORHPERIOD;
  }

%>
<head>
  <meta http-equiv='refresh' content="0; URL=<%=zurl%>" />
  <title>Entrevistas</title>
  <!-- Hoja de Estilo general. Obligatorio-->
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <!-- Librerias JavaScript. Obligatorio -->
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../mss_generico/francais/menu_mss.jsp" %>    
        <%@ include file="/mss_g3/smco_iv_trans.jsp"%>
  <script type="text/javascript" src="/libreria/menuintercambio.js"></script>   

  <%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<%      
    String zSCOIDINTERVIEWTYPE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INTERVIEW_TYPE");
    String zSCODTREQUEST = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_REQUEST");
    String zIDWORKITEM = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKITEM");
    if (zIDWORKITEM==null){zIDWORKITEM="";};
    
    String zSCOINTERVIEWNAME = "";
    String zSCOIDINTERVIEWPRIORITY = "";
    String zSCOINTERVIEWREASON = "";

    String zSCODTFINISH = "";
    String zSCOIDINTERVIEWRESULT = "";
    String zSCOINTERVIEWRESULT = "";
    String zSCOIDACTIONTYPE = "";
    String zSCODTNEXTACTION = "";
    String zSCODTNEXTINTERVIEW = "";
    String zSCOINTERVIEWCOMENT = "";
    
    String zSCOIDDOC = "";

    if (zSCODTREQUEST==null) 
        // solo para nuevo registro
       {
         zSCODTREQUEST = "";
         zSCOINTERVIEWNAME = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_INTERVIEW_NAME");
         zSCOIDINTERVIEWPRIORITY = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INTERVIEW_PRIORITY");
         zSCOINTERVIEWREASON = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_INTERVIEW_REASON");
       }
    else
        // en caso de ser actualización de registro
       {
         zSCODTFINISH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_FINISH");
         zSCOIDINTERVIEWRESULT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INTERVIEW_RESULT");
         zSCOINTERVIEWRESULT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_INTERVIEW_RESULT");

         zSCOIDACTIONTYPE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_ACTION_TYPE");
         if (zSCOIDACTIONTYPE==null){zSCOIDACTIONTYPE="";};

         zSCODTNEXTACTION = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_NEXT_ACTION");
         if (zSCODTNEXTACTION==null){zSCODTNEXTACTION="";};

         zSCODTNEXTINTERVIEW = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_NEXT_INTERVIEW");
         if (zSCODTNEXTINTERVIEW==null){zSCODTNEXTINTERVIEW="";};

         zSCOINTERVIEWCOMENT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_INTERVIEWER_COMENT");
         if (zSCOINTERVIEWCOMENT==null){zSCOINTERVIEWCOMENT="";};

         zSCOIDDOC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_DOC");
         zSCOIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSCOIDDOC);
       };
%>
</head>
<body>
<%
  String zsubsesion = "SSM_GN_INTERVIEW";
  String zMeta4Object = "SSM_GN_INTERVIEW";  
  String znodo = "SSM_GN_INTERVIEW";
  String znodoError = "SSE_COMUNICACION";
  String zoutputdef = zsubsesion + "!" + znodoError + "[*]";
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_GN_INTERVIEW.SCO_MTD_SAVE";
  String ztipocarga = "";
  if (zSCODTREQUEST.equals("")) 
    { ztipocarga = "NEW"; }
  else
    { ztipocarga = "MOD"; };
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% 
try {
  M4Operations m = new M4Operations(request);
  m.setItem(zsubsesion,znodo,"","PRP_ID_HR",zSCOIDHR);
  m.setItem(zsubsesion,znodo,"","PRP_OR_HR_PERIOD",zSCOORHPERIOD);
  m.setItem(zsubsesion,znodo,"","PRP_ID_INTERVIEW_TYPE",zSCOIDINTERVIEWTYPE);
  m.setItem(zsubsesion,znodo,"","PRP_DT_REQUEST",zSCODTREQUEST);
  m.setItem(zsubsesion,znodo,"","PRP_ID_WORKITEM",zIDWORKITEM);

  m.setItem(zsubsesion,znodo,"","PRP_DT_FINISH",zSCODTFINISH);
  m.setItem(zsubsesion,znodo,"","PRP_ID_INTERVIEW_RESULT",zSCOIDINTERVIEWRESULT);
  m.setItem(zsubsesion,znodo,"","PRP_INTERVIEW_RESULT",zSCOINTERVIEWRESULT);
  m.setItem(zsubsesion,znodo,"","PRP_ID_ACTION_TYPE",zSCOIDACTIONTYPE);
  m.setItem(zsubsesion,znodo,"","PRP_DT_NEXT_ACTION",zSCODTNEXTACTION);
  m.setItem(zsubsesion,znodo,"","PRP_DT_NEXT_INTERVIEW",zSCODTNEXTINTERVIEW);
  m.setItem(zsubsesion,znodo,"","PRP_INTERVIEWER_COMENT",zSCOINTERVIEWCOMENT);

  m.setItem(zsubsesion,znodo,"","PRP_INTERVIEW_NAME",zSCOINTERVIEWNAME);
  m.setItem(zsubsesion,znodo,"","PRP_ID_INTERVIEW_PRIORITY",zSCOIDINTERVIEWPRIORITY);
  m.setItem(zsubsesion,znodo,"","PRP_INTERVIEW_REASON",zSCOINTERVIEWREASON);

  m.setItem(zsubsesion,znodo,"","PRP_ID_DOC",zSCOIDDOC);

    }
  catch(Exception e){}
%>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_TYPE_SAVE" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>

<%
  String zerror = "P";
  try {
      M4Operations m = new M4Operations(request);
      zerror = m.getItem(znodo,zsubsesion,znodoError,"","TIPO_DEBUG");
  } catch(Exception e) {}
%>

<br / ><br / ><br / ><br / ><br / ><br / ><br / >
<table align="center" cellpadding="0" cellspacing="0">
<tr>
  <td class="fuenteactualizar"><%=tranivMSS.getProperty("iv_mss.LblProcess")%></td>
</tr>
<tr>
  <td class="fuenteactualizar2"><%=tranivMSS.getProperty("iv_mss.LblWait")%></td>
</tr>
</table>
<%
  String zcomparafuncional = "U"; 
  if(zerror.equals(zcomparafuncional) == true)
   {%>
    <script type="text/javascript">
      urlLista = "/servlet/CheckSecurity/JSP/sse_generico/generico_informacion_usuario.jsp?_M4TAGLET=<%=zsubsesion%>";
      msgWindow = window.open(urlLista,"Error","width=600;height=200,resizable,scrollbars");
    </script>
   <%}
%>
</body>
<m4:endpage/>
</html>