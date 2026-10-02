<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>

<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>

<%@include file="../../sse_generico/sgco_gen_inc.jsp"%>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_doc.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_ess_es.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>

<%    

   String ziddoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDDoc");
   ziddoc = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", ziddoc);
   
   String zsubsesion = "SSCO_VIEW_DOCUMENT";
   String zmeta4object = "SSCO_VIEW_DOCUMENT";
   String znodo = "SSCO_VIEW_DOCUMENT";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[0].";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   
   String zmetododoc = "DOC:" + zsubsesion + "!" + znodo + ".SSCO_MTD_LOAD_DOC";

   String zURL = zcomun + "SSCO_PRP_URL";

%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetododoc%>"><m4:param name="ARG_ID_DOC" value="<%=ziddoc%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<head>

<style>
table.table_warning
{
    background-color: #ffffff;
    text-align: center
}

table.table_warning tr.fuenteactualizar
{
    font-weight: bolder;
    font-size: 22px;
    color: #15314c
}
table.table_warning tr.fuenteactualizar2
{
    font-size: 18px;
    color: #195095
}
</style>

</head>

<body>
<script language="javascript" type="text/javascript">
  
  var zTitle = m4getmessage("_sl_co_ess_doc_0");
  var zAtt = m4getmessage("_sl_co_ess_doc_1");
  var zNoDoc = m4getmessage("_sl_co_ess_doc_2");
  
  document.write("<title>" + zTitle + "</title>");
  urlDoc = "<m4:item m4name="<%=zURL%>"/>";
  if (urlDoc=="") 
    {

      document.write("<table cellpadding='0' cellspacing='0' height='100%' width='100%'>");
      document.write("<tr>");
      document.write("<td align='center'>");
      document.write("<table cellpadding='0' cellspacing='0' class='table_warning'>");
      document.write("<tr class='fuenteactualizar'>");
      document.write("<td align='center'>");
      document.write(zAtt);
      document.write("</td>");
      document.write("</tr>");
      document.write("<tr class='fuenteactualizar2'>");
      document.write("<td align='center'>");
      document.write(zNoDoc);
      document.write("</td>");
      document.write("</tr>");
      document.write("</table>");
      document.write("</td>");
      document.write("</tr>");
      document.write("</table>");

      setTimeout("window.close()", 2000);
    }
  else
    { 
      window.location = urlDoc;
    }
</script>

</body>

<m4:endpage/>
</html>
