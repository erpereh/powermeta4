<%
   String sPrefix = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPrefix");
   if (sPrefix==null) {sPrefix="";}
   String sPageProc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idPageProc");
   if (sPageProc==null) {sPageProc="";}
   String sIdEMMS = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"idSetEMSS");
   if (sIdEMMS==null) {sIdEMMS="";}
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

  <script type="text/javascript">
    m4migrate.prefix = '<%=sPrefix%>';
    m4migrate.pageproc = '<%=sPageProc%>';
    m4migrate.emss = '<%=sIdEMMS%>';
  </script>
  
  <script type="text/javascript" src="/ssco_migrate/process/javascript/mootools.js"></script>
  <script type="text/javascript" src="/ssco_migrate/process/javascript/ssco_migrate_config.js"></script>
  <link href="/ssco_migrate/process/css/m4migration.css" rel="stylesheet" type="text/css" />

<body onkeypress='whatdo()'>
   <div id='divspinner'>
   </div>
   <div id='divbodymain'>
      <form class='frmprocess' id="frmprocess" name="frmprocess" action="/servlet/CheckSecurity/JSP/ssco_migrate/ssco_migrate_process.jsp" method="post">
        <fieldset>
          <legend id="lblheadfrm"></legend>
          <input id="idSetGrps" name="idSetGrps" type="hidden" value="">
          <input id="idSetEMSS" name="idSetEMSS" type="hidden" value="">
          <div id='divoptions'>
            <label id="lblOptions"></label>
            <select id="selOptions" onchange="changeOpt(this);" onactivate="activate(this);" ondeactivate="deactivate(this);">
              <option id="lblESS" value="sse">SSE</option>
              <option id="lblMSS" value="mss">SSM</option>
            </select>
          </div>
          <div id='divprefix'>
            <label id="lblidPrefix" for="idPrefix"></label>
            <input id="idPrefix" name="idPrefix" type="text" value="" size="4" maxlength="4" onkeypress='valPrefix()' onactivate="activate(this);" ondeactivate="deactivate(this);">
          </div>  
          <div class='divpage'>
            <label id="lblidPageProc" for="idPageProc"></label>
            <input id="idPageProc" name="idPageProc" type="text" size="80" maxlength="80" value="" onactivate="activate(this);" ondeactivate="deactivate(this);">
          </div>  
          <div class='divsep'></div>
          <div class='divgroup'>
            <input id="btnAddGroup" type="button" value="" onclick="addNewRow('','','','','?',false);">
          </div>
          <div id='divtable'>
            <table id="tblShowGroups">
              <thead id="trHeaderGrps">
                <td id="lblidGroupGrps"></td>
                <td id="lblnmGroupGrps"></td>
                <td id="lblnmSiteGrps"></td>
                <td id="lblnSubmenuGrps"></td>
                <td id="lblchkProcess"></td>
              </thead>
            </table>
          </div>
        </fieldset>
      </form>
      <div class='divbutton'>
        <input id="btnStart" type="button" value="" onclick="validate()">
        <input id="btnLogout" type="button" value="" onclick="disconnect();">
      </div>  
   </div>
</body>
</html>