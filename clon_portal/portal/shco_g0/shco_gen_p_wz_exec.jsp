<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_gen_p_wz_exec.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ page import="java.util.Vector"%>
<%@ include file="../shco_g0/shco_gen_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>

<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
<%@ page import="com.meta4.taglib.util.M4PresentationUtilTaglib" %>
<html>
<head>
<title>shco_gen_p_wz_exec.jsp</title>
</head>
<body onclick="meta4Cookie.Cookie.setEventCookie();" onkeypress="meta4Cookie.Cookie.setEventCookie();">
<%

M4Logger oM4Log = M4Logger.getLogger("com.meta4.jsp");

String nombre = "";
String valor = "";
String ristraErr = "";
String zParametroAct = "";

Hashtable zhash = new Hashtable();
Enumeration oEnum = request.getParameterNames();

//***********************************************************  
//* Inicialización con constante requerida
//***********************************************************
boolean bRequiredConstantMode = true; // false; // como antes
boolean bContinueWithOperation = true; 

if (bRequiredConstantMode == false)
{
	// Este es el código que había antes
	while(oEnum.hasMoreElements ()){
		nombre = (String) oEnum.nextElement();
		valor = com.meta4.taglib.util.M4SafeRequest.getParameter(request, nombre);
		zhash.put (nombre,valor);
	}
}
else
{
	// Este es el código con seguridad
	final String SHCO_P_EXEC_PROCESS = "SHCO_P_EXEC_PROCESS";
	final String SHCO_RP_CONST_CRYPT = "shco_rp";

	oM4Log.debug(" Entering: shco_gen_p_wz_exec.jsp parameter reading");

	String sRequiredConstant = request.getParameter(SHCO_P_EXEC_PROCESS);
	if (sRequiredConstant == null || sRequiredConstant.equalsIgnoreCase(""))
	{
		// error
		oM4Log.debug("Required constant is missing");
		bContinueWithOperation = false; 
	}
	else
	{
		try 
		{
			String vars =  M4PresentationUtilTaglib.secureDecrypt(request, SHCO_RP_CONST_CRYPT, sRequiredConstant);
			String[] aovars = vars.split(",");

			while(oEnum.hasMoreElements ())
			{
				nombre = (String) oEnum.nextElement();
				valor = com.meta4.taglib.util.M4SafeRequest.getParameter(request, nombre);

				for (int j=0; j<aovars.length; j++)
				{	
					oM4Log.debug("Comparing " + nombre + " to " + aovars[j] + "...");
					if (nombre.equalsIgnoreCase(aovars[j].trim())) // watch out for spaces.
					{
						oM4Log.debug("decrypting: " + valor);
						valor = M4PresentationUtilTaglib.secureDecrypt(request, SHCO_RP_CONST_CRYPT, valor);
						oM4Log.debug("decrypted to: " + valor);
					}
				}

				if (!nombre.equals(SHCO_P_EXEC_PROCESS))
				{
					zhash.put (nombre,valor);
				}
			}
		}
		catch (Exception e) 
		{ 
			oM4Log.error("    Mismatch in the decrypted parameters according to the required constant: ", e);
			bContinueWithOperation = false;
		}
		oM4Log.debug(" Exiting: shco_gen_p_wz_exec.jsp parameter reading");
	}
}

if (bContinueWithOperation == true)
{

	//**********************************************************  
	//* Datos que no van al canal 
	//**********************************************************
	String zm4object = (String)zhash.get("TAG");
	zhash.remove("TAG");
	String zsubsesion  = zm4object+"_SUB";
	String zRedireccionAct=(String)zhash.get("zredireccion");
	zhash.remove("zredireccion");
	String zWzIndex=(String)zhash.get("WZINDEX");
	zhash.remove("WZINDEX");
	String zLoadType=(String)zhash.get("LOADTYPE");
	zhash.remove("LOADTYPE");
	znivelmenu=(String)zhash.get("znivelmenu");
	zhash.remove("znivelmenu");
	String retpage_mode=(String)zhash.get("retpage_mode");
	zhash.remove("retpage_mode");
	String retpage=(String)zhash.get("retpage");
	zhash.remove("retpage");
	String zdynfiltersinforeport=(String)zhash.get("zdynfiltersinforeport");
	zhash.remove("zdynfiltersinforeport");
	String zCLEAN_PARAM=(String)zhash.get("CLEAN_PARAM");
	zhash.remove("CLEAN_PARAM");
	
	if (zRedireccionAct == null || zRedireccionAct.equals("")){zRedireccionAct="";}
	if (zLoadType == null || zLoadType.equals("")){zLoadType="";}
	if (zWzIndex == null || zWzIndex.equals("")){zWzIndex="";}
	if (zdynfiltersinforeport == null || zdynfiltersinforeport.equals("")){zdynfiltersinforeport="";}
	
	//************************************************************
	ristraErr = ((String)zhash.get("NOD"));
	zParametroAct	="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
	zhash.remove("NOD");
	String key =""; 
	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
			key = (String) enumhash.nextElement();
			valor = (String) zhash.get(key);
			zhash.remove(key);
			zParametroAct	+= key + "=" + valor + "{" ;
	}
	String znodoraiz  = "SHCO_GN_ROOT";  
	String znodolabel = "SHCO_GN_LABEL";
	String znodocom = "SHCO_GN_COMUNICATION";
	String zoutputdefcom = zm4object + "!" + znodocom + "[*]";
	String zoutputdeflab = zm4object + "!" + znodolabel + "[0]";
	String zraizlabel =  znodolabel + ":" + zm4object  + "!" + znodolabel + ".";
	String zMetodoAct = zm4object + "!" + znodoraiz + ".SHCO_P_EXEC_PROCESS";
	String zMetodoFiltro = zm4object + "!" + znodoraiz + ".SHCO_P_EXEC_FILTRO";
	if (ristraErr==null || ristraErr.equals("00") || ristraErr=="") {zParametroAct="";}
	%>
	<%@ include file="../shco_g0/shco_gen_label.jsp" %>
	<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
	<%
	M4SessionManager zsessionmanager2 = M4Context.getSession(request);
	String zusertempurit1 = (String) zsessionmanager2.getPathTempMapping();
	String zusertempurit2 = zsessionmanager2.getUserTempURI(); 
	String separator="/";
	zusertempurit1 = zusertempurit1.replace('/',separator.charAt(0));
	zusertempurit1 = zusertempurit1.replace('\\',separator.charAt(0));
	try {	
		M4Operations m = new M4Operations(request);
		
		m.setItem(zm4object,znodocom,"","SHCO_LONG3",zusertempurit1);
	}catch(Exception e) {}
	%>
	<m4:exec m4method="<%=zMetodoFiltro%>"><m4:param name="ARG_FILTRO" value="<%=zdynfiltersinforeport%>"/></m4:exec>
	<m4:exec m4method="<%=zMetodoAct%>"><m4:param name="PARAM_STRING" value="<%=zParametroAct%>"/></m4:exec>
	<m4:outputdef m4alias="<%=znodocom%>" m4object="<%=zm4object%>" node="<%=znodocom%>" records="*"/>
	<m4:outputdef m4alias="<%=znodolabel%>" m4object="<%=zm4object%>" node="<%=znodolabel%>" records="*"/>
	<%@ include file="../shco_g0/shco_gen_delete_cache.jsp" %>
	<m4:endjob/>
	
	<%@ include file="../shco_g0/shco_gen_p_wz_js.jsp" %>
	<script type="text/javascript" language="Javascript1.5">
	var vsoc=m4getmessage("_setlog_soc");
	m4settitle(vsoc+' <%=zsco%> - '+ "<m4:label m4name="<%=zSHCOLBTITERROR%>" jsafe="true"/>");
	</script>
	<%
	String zerror="";
	String zLog2="";
	try {	
		M4Operations m = new M4Operations(request);
		zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
		zLog2 = m.getItem(znodocom,zm4object,znodocom,"","SHCO_LONG2");
	}catch(Exception e) {}
	%>
	<%
	String zerror2="";
	String zshco_TEXT="";
	String sLabelBack = "";
	try {	
		M4Operations m = new M4Operations(request);
		zerror2 = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG2");
		zshco_TEXT = m.getItem(znodocom,zm4object,znodocom,"","SHCO_TEXT");
		sLabelBack = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(m.getLabel("SHCO_GN_LABEL", zm4object, "SHCO_GN_LABEL", "SHCO_LB_BACK")); 
	}catch(Exception e) {}	
	if (zerror2.equals("1")||zerror.equals("1")) {
	    try {
	        M4Operations m = new M4Operations(request);
	        m.initTask(zsubsesion);
	        m.beginJob();
	        m.createData(zm4object, znodocom, null);
	        
	        m.setItem(zm4object, znodocom, "0", "SHCO_ACTIVE_DEBUG", "0");
			 m.setItem(zm4object, znodocom, "0", "SHCO_ACTIVE_DEBUG2", "0");
	        m.endJob();
	    } catch(Exception e) {
		    
	    }
	%>
	<%@ include file="../shco_g0/shco_gen_menusup.jsp" %>
	<form action=" " method="post" name="NombreFormulario2" id="NombreFormulario2" >	
	<table class="error" width="100%" cellpadding="0" cellspacing="2" >
	<tr><td class="tit"><%=zSHCOLBTITERROR_val%></td></tr>
	<%
	String zLitErr="";
	String zTipErr="";
	StringTokenizer stE = new StringTokenizer(zshco_TEXT,"|++|");
		while(stE.hasMoreTokens()){
			if (stE.hasMoreTokens()==true){zTipErr=stE.nextToken();}
			if (stE.hasMoreTokens()==true){zLitErr=stE.nextToken();}
	%>
	<tr>
	 	<%if (zTipErr.equals("-1")){%>
	 	<td class="text">
		<img alt="<m4:label m4name="<%=zSHCOLBERR%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_err.jsp" %> />	
		<%}else if (zTipErr.equals("1")){%>
		<td class="textw">
		<img alt="<m4:label m4name="<%=zSHCOLBWARNING%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_warnig.jsp" %> />
		<%}else{%>
			<td class="textinfo">
		<img alt="<m4:label m4name="<%=zSHCOLBINFO%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_info.jsp" %> />
		<%}%>
			&nbsp;<%=zLitErr%>
		</td>
	</tr>
	<%}%>		
	<tr><td></td></tr>
	<tr><td class="boton"><input id ="Back" name="back" tabindex="1"type="button" class="boton" onclick="history.back();" value="<%=sLabelBack%>"/></td></tr>
	</table></form>
	<%}else{%>
	<%if (retpage_mode.equals("0")){%>
	<script type="text/javascript">
	var hoy = new Date(); 
	var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
	var sRetPage = '<%=retpage%>';
	  
	var sRetPage = '/servlet/CheckSecurity/JSP/'+'<%=retpage%>';
	if (sRetPage.indexOf("?")==-1){
	   urlLista = sRetPage + '?zsubsesion='+'<%=zsubsesion%>'+'&zm4o='+'<%=zm4object%>'+'&zopenmode=0';
	}else{
	   urlLista = sRetPage + '&zsubsesion='+'<%=zsubsesion%>'+'&zm4o='+'<%=zm4object%>'+'&zopenmode=0';
	}   
	msgWindow =window.open(urlLista,sNewWindow,"toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes,width=800,height=500");  
	if (window.focus){msgWindow.focus();}
	var parametros=['LOADTYPE','WZINDEX','CLEAN_PARAM'];
	var valores=['<%=zLoadType%>','<%=zWzIndex%>','<%=zCLEAN_PARAM%>'];
	m4navegar('/servlet/CheckSecurity/JSP/<%=zRedireccionAct%>',parametros,valores);
	
	
	</script>
	<%}else if (retpage_mode.equals("1")){%>
	<script type="text/javascript">
	m4navegar('/servlet/CheckSecurity/JSP/<%=retpage%>');
	</script>
	<%}else if (retpage_mode.equals("2")){%>
	<%
	int zControlErr=0;
	if (zLog2 == null || zLog2.equals("")){zControlErr=1;}
	String zData="";
	String zTemplate="";
	if (zControlErr==0){
		StringTokenizer st1 = new StringTokenizer(zLog2,"#");
		
		zData = st1.nextToken();
		zTemplate=st1.nextToken();
	}
	String sWebServerName = "";
	String sWebServerPort = "";
	String sProtocol      = "http";
	String sURLxlsTplt    = "";
	String sURLxlsTpltData    = "";
	String sURLxlsTpltTemplate    = "";
	String zusertempurit3    = "";
	try{
		sWebServerName = request.getServerName( );
		sWebServerPort = new Integer( request.getServerPort() ).toString( );
		if ( request.isSecure() ) 
			sProtocol = "https" ;
	} catch(Exception e) {};
	sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort  ;	
	String zLangFolder2= CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL);	
	sURLxlsTpltData=sURLxlsTplt+zusertempurit2+ "/" +zData;
	%>
	<m4:getapplparam section="PORTAL_PARAM" key="TEMPLATES_DIR" output="jsp"/>
	<% zusertempurit3 = (String)pageContext.getAttribute("TEMPLATES_DIR"); 
	  sURLxlsTpltTemplate=sURLxlsTplt+"/"+zusertempurit3+"/"+zLangFolder+"/"+zTemplate;
	%>	
	<%@ include file="../shco_g0/shco_gen_menusup.jsp" %>
	<form action=" " method="post" name="NombreFormulario2" id="NombreFormulario2" >	
	<table class="error" width="100%" cellpadding="0" cellspacing="2" >
	<tr><td class="tit"><%=zSHCOLBTITERROR_val%></td></tr>
	<script type="text/javascript">
	var vsol=m4generate_merge_word('<%=zData%>','<%=zTemplate%>','<%=sURLxlsTpltData%>','<%=sURLxlsTpltTemplate%>');
	</script>
	<tr><td></td></tr>
	<tr><td class="boton"><input id ="Back" name="back" tabindex="1"type="button" class="boton" onclick="var parametros=['LOADTYPE','WZINDEX','CLEAN_PARAM'];var valores=['<%=zLoadType%>','<%=zWzIndex%>','<%=zCLEAN_PARAM%>'];m4navegar('/servlet/CheckSecurity/JSP/<%=zRedireccionAct%>',parametros,valores);" value="<%=sLabelBack%>"/></td></tr>
	</table></form>
	<%}%>
	<%}%>
	</div>
	<m4:endpage/>
<% } else { %>
<table class="error" width="100%" cellpadding="0" cellspacing="2" >
	<tr><td class="tit"><%=Tran_shco_g0.getProperty("Msg.FilterWithoutData")%></td></tr>	
	</table>
<% } %>
</body>
</html>
