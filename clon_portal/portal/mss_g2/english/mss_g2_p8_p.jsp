<html xmlns="http://www.w3.org/1999/xhtml" xml:space="none">
<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@page import="java.io.*, java.util.*, java.net.*"%>
<%@page import="com.meta4.session.*"%>
<%@page import="java.io.*"%>
<%@page import="com.meta4.configuration.*"%>
<%@page import="com.meta4.session.*, com.meta4.m4operations.*, java.util.Vector"%>
<html>
<head>
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<title><%=Mss_cr.getProperty("msscr.Link4")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
estado="112";
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>

<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%String zestado = "21";%>

<table border="0" width="100%">
  <tr>
    <td class="titulofuncional" colspan="2"><%=Mss_cr.getProperty("msscr.Link4")%></td>
  </tr>
  <tr>
    <td><img alt="<%=Mss_cr.getProperty("msscr.Link4")%>" src="/iconos/noname_puestos_trabajo_mss_141_100.gif" width="100" height="100" /></td>

<m4:page subsessionid="CR_RP_SALREV">
<m4:job>
  <m4:datadef m4o="HCO_RP_HTML.SHCO_CR_RP_SAL_REV" m4find="TRUE" m4name="CR_RP_SALREV"/>
  <m4:exec node="SHCO_GN_TC_ROOT" method="MSS_UPDATE_MULT_ITEMS" m4object="CR_RP_SALREV">
    <% String field_info  = 
      "PD_START_DATE=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PD_START_DATE") + (char)255 +
      "PD_END_DATE=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PD_END_DATE") + (char)255 +
      "PVS_PLAN_ID=" + (char)255 +
      "PVS_WORK_UNIT_ID=" + (char)255 +
      "PVS_MANAGER_ID=" + (char)255 +
      "PVS_ID_CURRENCY=" + (char)255 +
      "PN_DATE_FORMAT_ID=" + com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PN_DATE_FORMAT_ID") + (char)255;     
    %>
    <m4:param name="AVS_NODE" value="SHCO_GN_RP_ROOT"/>
    <m4:param name="AN_RECORD_INDEX" value="-1"/>
    <m4:param name="AL_FIELD_INFORMATION" value='<%= (field_info)%>'/>
  </m4:exec>
</m4:job>

<%
  String rpt_m4o_alias = "RPT_HTML";
  String report_id     = "SHCO_CR_RP_SAL_REV";
  String root_node     = "SHCO_GN_RP_ROOT";
  String paper_type    = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"paper_type");
  String report_type   = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"report_type");
  String zusertempuri  = ""; 
%>

<%
  String pathReports    = "";
  String thinclient_root  = "";
  String webPath         = "";
  String methodParam    = "";
  String reportParam    = "#/AUTOLOAD:DESIGN:OFF# #/NZOOM# #/PRESERVE_DIR#";
  String separator        = "";
  M4SessionManager m4Session;

  try {
    m4Session       = M4Context.getSession(request);
    pathReports     = (String) m4Session.getPathTempMapping();
    zusertempuri    = m4Session.getUserTempURI();   
    thinclient_root = M4ConfigClient.getElement(M4VarConfigClient.M4_CFG_THINCLIENT_ROOT_TC);

    separator = System.getProperty("file.separator");
    thinclient_root = thinclient_root.replace('/',separator.charAt(0));
    thinclient_root = thinclient_root.replace('\\',separator.charAt(0));
  } catch(Exception e) {}

  pathReports = pathReports.replace('/',separator.charAt(0));
  pathReports = pathReports.replace('\\',separator.charAt(0));  

  int index = pathReports.indexOf(thinclient_root);

  if( index != -1){
    webPath = pathReports.substring(0,index);
  }else{
    webPath = separator;
  }
  pathReports = pathReports + separator + "reports" + separator + report_id + separator + report_id;

  methodParam = "CalledFromESS #"+ report_id + "# #1# #" + report_type + "# #/PATH:" + pathReports + "# #/PRESERVE_DIR# #/WEB:" + webPath + "# " + reportParam + ";1;0;3;0";  
%>

<m4:job>
  <m4:datadef m4o="HCO_RP_HTML" m4name='<%= (rpt_m4o_alias)%>'/>

  <% if(root_node == null) { %>
    <m4:exec node="HTML_RPT" alias="EXEC" method="MN_RUN_REPORT" m4object='<%= (rpt_m4o_alias)%>'>
      <m4:param name="AL_RPT_PARMS" value='<%= (methodParam)%>'/>
    </m4:exec>
  <% } else { %>
    <m4:exec node="HTML_RPT" alias="EXEC" method="MN_RUN_REPORT_NONSTANDARD" m4object='<%= (rpt_m4o_alias)%>'>
      <m4:param name="AL_RPT_PARMS" value='<%= (methodParam)%>'/>
      <m4:param name="AVS_ROOT_NODE" value='<%= (root_node)%>'/>
    </m4:exec>
  <% } %>

  <m4:outputdef node="HTML_RPT" m4alias="" records="0" m4object='<%= (rpt_m4o_alias)%>'/>
</m4:job>

<% 
  StringBuffer sbResult = new StringBuffer();
  Vector vType         = new Vector();
  String  stResult = "";  
  int iResult = -1;

  try {
    M4Operations op = new M4Operations(request);
    stResult = op.getItem("", "RPT_HTML", "HTML_RPT", "0", "RESULT");
    iResult = Float.valueOf(stResult).intValue();
  }
  catch(Exception e){}

//  System.out.println("ISAiResult = "+ iResult ); 
//  System.out.println("ISAstResult = "+ stResult ); 
  
  String sRuta = "";
%>

<% if (iResult == -1) { %>

  <%//<!--jsp:forward page="report_error.jsp"/-->%>
  <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.error1")%></div></td>
  </tr> 

<% } else if(iResult == 0) { %>

  <m4:putbagvalue m4key="salida" m4value="&RPT_HTML!HTML_RPT.OUTPUT"/>

  <%//Relative path to the Web server temp directory. Double \\ separator so that it can be interpreted by m4window --%>  
  <%  String sAux, sRutaDef=""; %>
    <m4:item var="sRuta" m4name="RPT_HTML!HTML_RPT.OUTPUT" htmlsafe="true"/>
  <%  sRuta = sRuta.replace('/',separator.charAt(0));   
    int i = sRuta.indexOf(zusertempuri.replace('/',separator.charAt(0)));
    if( i != -1) sRuta = sRuta.substring(i, sRuta.length());
    sAux = sRuta;
    int x = sAux.indexOf("\\");
    while (x != -1)
    { 
      sRutaDef = sRutaDef+ sAux.substring(0, x+1) +"\\";
      sAux = sAux.substring(x+1, sAux.length());
      x = sAux.indexOf("\\");
    }
    sRutaDef = sRutaDef + sAux;
  %>
  <%//----------------------------------------------------------------------------------------------------------%>

  <script language="JavaScript" xml:space="preserve">
    window.open("<%=sRutaDef%>","","toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes,width=675,height=450");
  </script>

  <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.ok1")%><br><%=Mss_cr.getProperty("msscr.ok2")%></div></td>
  </tr> 
<%}%>

</m4:page>

<tr>
<th colspan="2" rowspan="1">
<a href= "javascript:history.go(-1)" shape="rect"> <img src="/iconos/icono_anterior_mss_58_50.gif" alt="<%=Mss_cr.getProperty("msscr.Pop12")%>" align=middle></a>
</th>
</tr>
</table>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</body>
</html>
