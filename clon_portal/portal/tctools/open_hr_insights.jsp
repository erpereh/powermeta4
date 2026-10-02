<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: open_hr_insights.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import = "java.io.*"%>
<%@ page import = "com.meta4.common.utils.logsystem.M4Logger"%>

<%@ page import="com.meta4.utilities.*" %>
<%@ page import="com.meta4.configuration.*" %>
<%@ page import="com.meta4.session.*" %>
<%@ page import="com.meta4.redirect.M4PropertiesRedirect" %>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib" %>
<%@ page import="com.meta4.insights.InsightsConnector" %>

<%
    response.setHeader("Pragma", "no-cache"); 
    response.setHeader("Cache-Control", "no-store"); 
    response.setDateHeader("Expires", -1); 

    M4Logger log = M4Logger.getLogger("com.meta4.jsp");
    log.debug("Entry");

    boolean showError = false;
    String consoleError = "";
    String menuUnavailable = ""; 
    
    try {
        InsightsConnector insightsConnector = new InsightsConnector();
        String htmlOuput = insightsConnector.getTokenServiceOutput(request);
        out.println(htmlOuput);
    } catch (Exception e) {
        showError = true;

        //Unavailable menu option
        M4PropertiesRedirect propertiesReader = new M4PropertiesRedirect();
        propertiesReader.load(pageContext, String.format("/translations/tc_login_%s.properties", getLanguage(request)));
        menuUnavailable = propertiesReader.getProperty("portal.MenuUnavailable");

        StringWriter errors = new StringWriter();
        e.printStackTrace(new PrintWriter(errors));
        consoleError  = M4PresentationUtilTaglib.escape(errors.toString());

        log.error(errors.toString());
    }

    if (showError) {
        //Output error message in user-friendly format
%>
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
        <html>
            <head>
                <title><%= menuUnavailable%></title>
                <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
                <script>
                    if (localStorage.getItem("m4debug")){
                        console.log("Error exception: <%= consoleError%>");
                    }
                </script>
            </head>
            <body>
                <table border="0" width="100%">
                    <tr><td class="titulofuncional"><%= menuUnavailable%></td></tr>
                </table>
            </body>
        </html>
<%  }
    log.debug("Exit");
%>

<%! // Java functions
    private String getLanguage (HttpServletRequest request){
        M4SessionManager sessionManager = M4Context.getSession(request);
        int languageID = 2;
        if (sessionManager != null) {
            languageID = sessionManager.getLanguageID();                     
        } else {
            languageID = Integer.valueOf(M4LanguageConfigurator.getDefaultLanguage());
        }
        return CheckConfig.checkLocale(languageID);
    }
%>