<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />

<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<%@ include file="/mss_g3/smco_iv_trans.jsp"%>

<script type="text/javascript">

  function savedoc()
  {
    var error = 0;
    var texto = "";
    var sresult = m4valor("frmsavedoc","DOCREQUEST","","get");

    if (sresult == null || sresult == "")
    {
      texto = texto + "\n     " + m4getmessage("_sl_co_ess_doc_3");
      error = 1;
    }
    
    if (error == 1)
      {
        alert(texto);
        return;
      }
    else 
      {
        m4submit("frmsavedoc") ;
      }
  }
  
</script>

<%    
   String zIdSaveDoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDOCSave");
   String zIdDoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDDoc");
   
   if (zIdDoc==null || zIdDoc.equals("0") || zIdDoc.equals("")) {
    zIdDoc="-1";
   } else {
     zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zIdDoc);
   }

%>

<% if (zIdSaveDoc==null)
  {
%>

  <title><%=tranivMSS.getProperty("iv_mss.LblChooseDoc")%></title>

</head>
<body>

  <table class = "tablaestados" width="100%" cellspacing="0" border="0">
  <tr class = "fuentecalendario">
    <td colspan="2"><%=tranivMSS.getProperty("iv_mss.LblSelDoc")%></td>
  </tr>
  <tr>
  </tr>
      <td>&nbsp;
      </td>
  <tr>
  </tr>
      <td class="fuentecampo" colspan="2">&nbsp;
      </td>
  <tr>
      <form enctype="multipart/form-data" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp?zDOCSave=Y" id="frmsavedoc" name="frmsavedoc" method="post">
        <%zIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zIdDoc);%>
        <input type="hidden" id="zDOCID" name="zDOCID" value="<%=zIdDoc%>">
    <td class="fuentecampo"><%=tranivMSS.getProperty("iv_mss.LblDoc")%></td>
    <td class="fuentecampo">
            <input type="file" id="DOCREQUEST" name="DOCREQUEST" size="50">
    </td>
      </form>
  </tr>
  <tr>
  <td class="fuenteboton" colspan="2">&nbsp;
    <a title="<%=tranivMSS.getProperty("iv_mss.LblSend")%>" href="javascript:savedoc();"><img alt="<%=tranivMSS.getProperty("iv_mss.LblSend")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </td>
  </tr>
  </table>

<%
   }
  else
   {
%>

  <title><%=tranivMSS.getProperty("iv_mss.LblSending")%></title>

</head>
<body>

<%
  
  String zsubsesion = "SSCO_VIEW_DOCUMENT";
  String zMeta4Object = "SSCO_VIEW_DOCUMENT";  
  String znode = "SSCO_VIEW_DOCUMENT";
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_VIEW_DOCUMENT.SSCO_MTD_SAVE_DOC";
  
  String zoutputdef = zsubsesion + "!" + znode + "[*]";
  String zcomun = znode + ":" + zsubsesion + "!" + znode + ".";

  String zSCOIDDOC = zcomun + "SCO_ID_DOC";
  
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<%      
  String zSaveFILEDOC = (String) pageContext.getAttribute("DOCREQUEST");
  String zSaveDOCID = (String) pageContext.getAttribute("zDOCID");
  zSaveDOCID = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zSaveDOCID);
  if (zSaveDOCID.equals("-1")) {zSaveDOCID="";}
%>

<m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<m4:setfile 
    m4blob = "SSCO_VIEW_DOCUMENT!SSCO_VIEW_DOCUMENT.PRP_DOC"
    m4path = "&REQUEST.DOCREQUEST" 
 />
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_ID_DOC" value="<%=zSaveDOCID%>"/></m4:exec>
<m4:outputdef m4alias="<%=znode%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>

<br><br><br>
<table align="center" cellpadding="0" cellspacing="0">
<tr>
  <td class="fuenteactualizar"><%=tranivMSS.getProperty("iv_mss.LblProcess")%></td>
</tr>
<tr>
  <td class="fuenteactualizar2"><%=tranivMSS.getProperty("iv_mss.LblWait")%></td>
</tr>
</table>

<script language="javascript" type="text/javascript">
   var argsdoc = new Array;
   var zExtDoc = m4getmessage("_sl_co_ess_doc_4");
   <m4:item m4name="<%=zSCOIDDOC%>" htmlsafe = "true" m4varname="sIdDoc"/>
   bValid = (<%=sIdDoc%> > 0);
   if (<%=sIdDoc%> < 0)
     {
       alert(zExtDoc);
     }
   <%sIdDoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdDoc);%>
   argsdoc[0]=["<%=sIdDoc%>",bValid];
   returnvaluesdoc(argsdoc);
</script>

<m4:endpage/>

<%
   }
%>

</body>
</html>
