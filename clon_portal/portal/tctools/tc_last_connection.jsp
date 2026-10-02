<%-- =========================================================
	@(#) FileVersion: 820.002.040
	@(#) FileDescription: tc_last_connection.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2023
	@(#) ProductName: Peoplenet
========================================================= --%>

<%@ page import="com.meta4.request.*, com.meta4.session.*, com.meta4.languages.*, com.meta4.m4operations.*"%>
<%@ page import="com.meta4.common.utils.logsystem.M4Logger"%>
<%@ page import="java.util.*, java.lang.*"%>
<%
  response.setHeader("Pragma", "no-cache"); 
  response.setHeader("Cache-Control", "no-store"); 
  response.setDateHeader("Expires", -1); 
%>
<!DOCTYPE html>
<html lang="en"><head><title></title>
 
  <script src="/translations/tc_login_<%=zlanguser%>.js"></script>
  <%
    HashMap<String,String> logonInfo = getLogonInfo(request); 
    String showLastConnection = logonInfo.get("SHOW_LAST_CONNECTION");
    String dateLastConnectionGMT = logonInfo.get("DATE_LAST_CON_GMT");
    String dateConnectionGMT = logonInfo.get("DATE_CON_GMT");
  %>
  <script>

    const showLastConnection = '<%= showLastConnection %>';
    const dateLastConnectionGMT = '<%= dateLastConnectionGMT %>';
    const dateConnectionGMT = '<%= dateConnectionGMT %>'; 

    const dateOptions = { dateStyle: "medium", timeStyle: "medium", hour12: "false" }
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; 
   
    const lastConnectionLiteral = login_lastConnection; // 'Most recent connection'
    const currentConnectionLiteral = login_currentConnection; // 'Current connection' 

    let lastConnectionTime = '';
    let currentConnectionTime = ''; 

    if (showLastConnection === '1') {
      if (dateLastConnectionGMT !== '') {    
        const date = dateLastConnectionGMT.trim().split(' ')[0].split('-'); 
        const time = dateLastConnectionGMT.trim().split(' ')[1].split(':'); 
        lastConnectionTime = new Date(Date.UTC(date[0], date[1]-1, date[2], time[0], time[1], time[2])); 
        lastConnectionTime = lastConnectionTime.toLocaleString('<%=zlanguser%>', dateOptions)
      }
      if (dateConnectionGMT !== '') {
        const date = dateConnectionGMT.trim().split(' ')[0].split('-'); 
        const time = dateConnectionGMT.trim().split(' ')[1].split(':'); 
        currentConnectionTime = new Date(Date.UTC(date[0], date[1]-1, date[2], time[0], time[1], time[2])); 
        currentConnectionTime = currentConnectionTime.toLocaleString('<%=zlanguser%>', dateOptions)
      }
    }
    const result = {
        showLastConnection,
        lastConnectionLiteral,
        lastConnectionTime,
        currentConnectionLiteral,
        currentConnectionTime,
        timeZone
    } 
    
    const domReady = function () {
      document.getElementById("lastConnectionTime").innerHTML = result.lastConnectionLiteral + ': ' + result.lastConnectionTime
      document.getElementById("currentConnectionTime").innerHTML = result.currentConnectionTime ? result.currentConnectionLiteral  + ': ' + result.currentConnectionTime : ''
    }
    document.addEventListener("DOMContentLoaded", domReady);
  </script>
  </head>
  <body></body>
</html>
<%! // Java functions
    private HashMap getLogonInfo (HttpServletRequest request) {

      M4Logger logger = M4Logger.getLogger("com.meta4.jsp");

      HashMap<String, String> htLogonInfo = new HashMap<String, String>();

      String sM4Obj = "SAU_LOGON_INFO";
      String sNode = "SAU_LOGON_INFO";
      String sMethod = "GET_LOGON_INFO";

      try {
        M4Operations m = new M4Operations(request); 

        m.initTask("SESSION");
        m.beginJob();
        Hashtable<String, String> argsCreateData = null; 
        m.createData(sM4Obj, sM4Obj, false, argsCreateData);
        Map<String, String> htArgs = new Hashtable<String, String>();
        m.method(sMethod, sM4Obj, sNode, sMethod, htArgs);
        m.outputDef(sNode, sM4Obj + "!" + sNode + "[*]");
        m.endJob(sM4Obj);

        String dateCon = m.getItem(sNode, sM4Obj, sNode, "-1", "DATE_CON");
        String dateLastCon = m.getItem(sNode, sM4Obj, sNode, "-1", "DATE_LAST_CON");
        String showLastConnection = m.getItem(sNode, sM4Obj, sNode, "-1", "SHOW_LOGON_INFO");
        int iShowLastConnection = (int) Double.parseDouble(showLastConnection);
        htLogonInfo.put("SHOW_LAST_CONNECTION", new Integer(iShowLastConnection).toString()); 
        htLogonInfo.put("DATE_LAST_CON_GMT", dateLastCon); 
        htLogonInfo.put("DATE_CON_GMT", ""); // dateCon
        return htLogonInfo; 

    } catch (Exception e) {
      logger.error("getLogonInfo: ", e);
    }
    return null;
}
%>