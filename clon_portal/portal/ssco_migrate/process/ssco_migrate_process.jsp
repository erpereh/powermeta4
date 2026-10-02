<%
   String sIdPrefix = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPrefix");
   String sPageProc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPageProc");
   String aGroups = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idSetGrps");
   String sIdEMMS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idSetEMSS");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

  <script type="text/javascript">
    var sIsKnownet = 1;
    var sTotal_Server_Knownet = "1";
    m4migrate.IDPrefix = '<%=sIdPrefix%>';
    m4migrate.setGrps = '<%=aGroups%>';
    m4migrate.OptEMSS = <%=sIdEMMS%>;
    m4migrate.pageProc = '<%=sPageProc%>';
  </script>

  <script type="text/javascript" src="<%=sPageProc%>"></script>
  <script type="text/javascript" src="/ssco_migrate/process/javascript/mootools.js"></script>
  <script type="text/javascript" src="/ssco_migrate/process/javascript/ssco_migrate_process.js"></script>
  <link href="/ssco_migrate/process/css/m4migration.css" rel="stylesheet" type="text/css" />

<body onkeypress='whatdo()'>
  <div id='divspinner'>
  </div>
  <div id='divbodymain'>
    <div class='divtable' id='divtable'>
    </div>
    <div class='divbutton'>  
      <input id='btnStart' type='button' value='' onclick="processRows()">
      <input id='btnBack' type='button' value='' onclick="back()">
    </div>
  </div>
  <form id="frmBack" name="frmBack" action="/servlet/CheckSecurity/JSP/ssco_migrate/ssco_migrate_config.jsp" method="post">
    <input type='hidden' id='idPrefix' name='idPrefix'>
    <input type='hidden' id='idSetEMSS' name='idSetEMSS'>
    <input type='hidden' id='idPageProc' name='idPageProc'>
  </form>
</body>
</html>