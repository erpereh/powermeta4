<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.configuration.*" %>
<%
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	if ((estado==null)||(estado.equals(""))){
		estado="0";
	}
    String zpaga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga");
    String zmoneda = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmoneda");

	// Inicialización de Variables del Report:
	
	String pathReports = "";
	String thinclient_root = "";
	String WebPath = "";
	String zparametro = "";
	String separator = "";
	
	// Variables del informe. Hay que modificarlas para cada informe que se ejecute:

	String zsubsesion = "SCO_EMPLOYEE_DOSSIER";
	String zmeta4object = "SCO_EMPLOYEE_DOSSIER";
	String znodo = "SSE_RECIBO";
	String znodo2 = "SCO_ID_PERSONA";	
	
	String zreport = "SCO_EMPLOYEE_DOSSIER";
	String DataParam = zmeta4object + "!" + znodo + "$";
	String ReportParam = "#/AUTOLOAD:DESIGN:OFF# #/NZOOM# #/NTOC# #/NSEARCH# #/PRESERVE_DIR#";
	String zredireccion = "/servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=21";

	
try {

    M4SessionManager zsesion = M4Context.getSession(request);
    pathReports = (String)zsesion.getPathTempMapping();
    thinclient_root = M4ConfigClient.getElement(M4VarConfigClient.M4_CFG_THINCLIENT_ROOT_TC);
    separator = System.getProperty("file.separator");
    thinclient_root = thinclient_root.replace('/',separator.charAt(0));
    thinclient_root = thinclient_root.replace('\\',separator.charAt(0));

} catch(Exception e) {} 	
	
	int index = pathReports.indexOf(thinclient_root);
	
	if( index != -1){
  
		WebPath = pathReports.substring(0,index);

	}else{

		WebPath = separator;
	}

	pathReports = pathReports + "\\reports" + "\\" + zreport;
	zparametro = DataParam + "CalledFromESS #"+ zreport + "# #1# #HTML# #/PATH:" + pathReports + "\\" + zreport + "\\" + zreport + "# #/PRESERVE_DIR# #/WEB:" + WebPath + "# " + ReportParam + ";1;0;3;0";

// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zmove = znodo + ":" + znodo + "[FIRST]";   

// Metodo de carga del Meta4Object generico

   String zmetodocarga = zsubsesion + "!" + znodo2 + ".SSE_M4THROW";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zOUTPUT = zraiz + "OUTPUT";
   String zRESULT = zraiz + "RESULT";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
			M4Operations m = new M4Operations(request);
			m.setItem(zsubsesion,znodo2,"","SSP_PATH",pathReports);			
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<% 
    String  stResult = "";
    int iResult = -1;
    String stResult2 = "bem-vindo";
    try {
		M4Operations op = new M4Operations(request);
        stResult = op.getItem("",zsubsesion,znodo,"","RESULT");
		stResult2 = op.getItem("",zsubsesion,znodo,"","OUTPUT");        
        iResult = Float.valueOf(stResult).intValue();
    }
    catch(Exception e) {}%>
  
<%	if (iResult == -1){%>
<% } else { %>
<script type="text/javascript">
	urlLista = "<m4:item m4name="<%=zOUTPUT%>" jsafe="true"/>";
	msgWindow = window.open(urlLista,"","toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes,width=800,height=600");
</script>
<%}%>
</div>
<meta http-equiv='refresh' content="0; URL=<%=zredireccion%>">
<head>
<title>Ficha pessoal</title>
</head>
<body>
<m4:endpage/>
</body>

