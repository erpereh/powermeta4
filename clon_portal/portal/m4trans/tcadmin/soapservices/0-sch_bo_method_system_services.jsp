<%-- [=====================================================]
	@(#)FileVersion: 811.000.000
	@(#)FileDescription: Administration bussiness methods (página principal servicios del sistema).
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: sch_bo_method_system_services.jsp
	@(#)Date: 20/10/2003

[=====================================================] --%>

<%-- ******************** Cache  ******************** --%>
<%-- Forzamos que la pagina este expirada el 1-1-1970 --%>
<%response.setDateHeader("Expires",0);%>
<%-- ******************** Fin Cache  ******************** --%>

<%-- ******************** Includes  ******************** --%>
<%@ include file="/tcadmin/soapservices/_includes.jspf" %>
<%-- ******************** Fin Includes  ******************** --%>

<%-- ******************** Traducciones  ******************** --%>
<%@ include file="/tcadmin/soapservices/_translation_declaration.jspf" %>
<%-- ******************** Fin Traducciones  ******************** --%>

<HTML>
<HEAD>
<TITLE><%=gTranslateAdmin.getProperty("title_window.sch_bo_method_system_services")%></TITLE>

<%-- ******************** Funciones JavaScript  ******************** --%>
<script type="text/javascript" src="/library/m4gen.js"></script>
<script type="text/javascript" src="/library/m4ie_light.js"></script>
<script type="text/javascript">
	function StartBOID( iIndexBOID, sBOID ) {
		m4valor('formulario','argExecuteActivation','TRUE','set');
		_SetBOID(iIndexBOID, sBOID);
	}
	function StopBOID( iIndexBOID, sBOID ) {
		m4valor('formulario','argExecuteActivation','FALSE','set');
		_SetBOID(iIndexBOID, sBOID);
	}
	function _SetBOID( iIndexBOID, sBOID ) {
		m4valor('formulario','argIndexBOID',iIndexBOID,'set');
		m4valor('formulario','argBOID',sBOID,'set');
		m4submit('formulario');
	}
	function OpenBussinessServicesWindow( ) {
		location="sch_bo_method.jsp";
	}
	function OpenWSDLWindow( sBOID ) {
		//Le pasamos el id del servicio, sin convertir a minusculas!.
		var url = "/services/"
		url = url + sBOID + "?wsdl";
		var sDefaultWindowProps = "height=520, resizable=1, menubar=0, toolbar=0, directories=0, location=0, scrollbars=1, status=0";
		window.open(url, 'wsdl', sDefaultWindowProps);
	}
	function OpenErrorWindow ( sExecuteActivationWithErrorList ) {
		var url = "_sch_bo_method_error.jsp" + "?argExecuteActivationWithErrorList=" + sExecuteActivationWithErrorList;		
		url = url + "&argPageCurrent=0";
		var sDefaultWindowProps = "height=300, width=600, resizable=1, menubar=0, toolbar=0, directories=0, location=0, scrollbars=1, status=0";
		window.open(url, 'errors', sDefaultWindowProps);
	}
	function StartAll( ) {
		m4valor('formulario','argExecuteActivationAll','TRUE','set');
		_SetAll();
	}
	function StopAll( ) {
		m4valor('formulario','argExecuteActivationAll','FALSE','set');
		_SetAll();
	}
	function _SetAll( ) {
		m4submit('formulario');
	}
	function ChangePage( sPageCurrent ) {
		m4valor('formulario','argPageCurrent',sPageCurrent,'set');
		m4valor('formulario','argExecuteActivationAllList','','set');
		m4submit('formulario');
	}
</script>
<%-- ******************** Fin Funciones JavaScript  ******************** --%>

<%-- ******************** Inicializacion de argumentos  ******************** --%>
<%	String argGoToPage = (String)request.getParameter("argGoToPage");
	if ((argGoToPage == null) || (argGoToPage.equalsIgnoreCase(""))) argGoToPage = "sch_bo_method_system_services.jsp";

	String argExecuteActivation = (String)request.getParameter("argExecuteActivation");
	if (argExecuteActivation == null) argExecuteActivation = "";
	String argIndexBOID = (String)request.getParameter("argIndexBOID");
	if (argIndexBOID == null) argIndexBOID = "";
	String argBOID = (String)request.getParameter("argBOID");
	if (argBOID == null) argBOID = "";

	String argExecuteActivationAll = (String)request.getParameter("argExecuteActivationAll");
	if (argExecuteActivationAll == null) argExecuteActivationAll = "";
	String argExecuteActivationAllList = (String)request.getParameter("argExecuteActivationAllList");
	if (argExecuteActivationAllList == null) argExecuteActivationAllList = "";

	//Error en activacion.
	String argExecuteActivationWithError = (String)request.getParameter("argExecuteActivationWithError");
	if (argExecuteActivationWithError == null) argExecuteActivationWithError = "";
	String argExecuteActivationWithErrorList = (String)request.getParameter("argExecuteActivationWithErrorList");
	if (argExecuteActivationWithErrorList == null) argExecuteActivationWithErrorList = "";

	//Ojo, pq el caracter # como separador no lo hace bien!.
	String CONSTANT_ID_T3S_SEPARATOR = ":";
%>
<%-- ******************** Fin Inicializacion de argumentos  ******************** --%>

<%-- ******************** Paginacion inicializacion  ******************** --%>
<%@ include file="/tcadmin/soapservices/_pagination_declaration.jspf" %>
<%-- ******************** Fin Paginacion inicializacion  ******************** --%>

<%-- ******************** Log  ******************** --%>
<%@ include file="/tcadmin/soapservices/_log_declaration.jspf" %>
<%-- ******************** Fin Log  ******************** --%>

<%-- ******************** Preparamos la Lista de BO activos ******************** --%>
<%-- * Tiene que estar antes de la activacion/desactivacion, pero aqui NO se obtine la lista. --%>
<%
	String m_protocol = "http";
	if (request.isSecure()){m_protocol = "https";}
	String m_host = request.getServerName();
	int m_port = request.getServerPort();
	String m_appName = request.getContextPath();
	String m_appDir = pageContext.getServletContext().getRealPath("WEB-INF");
	String m_service = m_protocol + "://" + m_host + ":" + m_port + m_appName + "/services";
	String[] arg = new String[]{
		"-l" + m_service + "/" + "AdminService",
		"-b" + m_appDir + "/classes"
	};
	com.meta4.soapservices.client.M4SoapAdminClient m_soapclient = new com.meta4.soapservices.client.M4SoapAdminClient(request, arg);
%>
<%-- ******************** Fin Preparamos la Lista de BO activos ******************** --%>

<%-- ******************** Orden de activacion/desactivacion  ******************** --%>
<%-- * Es importante tenerlo antes de la obtencion de la lista y despues de obtener argumentos de página. --%>
<%-- * Son mutuamente excluyentes!!. --%>
<%
	// ******************** Desactivando TODOS  ********************
	if (argExecuteActivationAll.equalsIgnoreCase("FALSE")) {
		//Tenemos que PARAR todos los que me indica el filtro.
		//Hacemos el split para obtener en un vector los ID.
		String vList[] = splitString(argExecuteActivationAllList, CONSTANT_ID_T3S_SEPARATOR);
		for (int i = 0; i < vList.length; i++) {
			//Buscamos cada cadena en la lista de activos.
			if ( (!(vList[i].equalsIgnoreCase("")))	&& (vList[i] != null) ) {
				//Si esta activo lo puedo intentar desactivar.
				if (m_soapclient.isStartedServiceList(vList[i]) == true) {
					//out.println("Parando: ");out.println(" - ");out.println(vList[i]);
					try {
						if (m_soapclient.stopSoapServiceSystem(vList[i]) == false) {
							argExecuteActivationWithError = "TRUE";
							argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						}
					}
					catch(Exception eStopAll) {
						argExecuteActivationWithError = "TRUE";
						argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						m_log.error("Error: Stopping all bussiness objects (i) (sch_bo_method_system_services.jsp).", eStopAll);
					}
				}
			}
		}
	}

	// ******************** Activando TODOS  ********************
	if (argExecuteActivationAll.equalsIgnoreCase("TRUE")) {
		//Tenemos que ARRANCAR todos los que me indica el filtro y no estén ya arrancados!.
		//Hacemos el split para obtener en un vector los ID.
		String vList[] = splitString(argExecuteActivationAllList, CONSTANT_ID_T3S_SEPARATOR);
		for (int i = 0; i < vList.length; i++) {
			//Buscamos cada cadena en la lista de activos.
			if ( (!(vList[i].equalsIgnoreCase("")))	&& (vList[i] != null) ) {
				//Si NO esta activo lo puedo intentar activar.
				if (m_soapclient.isStartedServiceList(vList[i]) == false) {
					//out.println("Activando: ");out.println(" - ");out.println(vList[i]);
					try {
						if (m_soapclient.startSoapServiceSystem(vList[i]) == false) {
							argExecuteActivationWithError = "TRUE";
							argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						}
					}
					catch(Exception eStartAll) {
						argExecuteActivationWithError = "TRUE";
						argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						m_log.error("Error: Starting all bussiness objects (i) (sch_bo_method_system_services.jsp).", eStartAll);
					}
				}
			}
		}
	}

	// ******************** Activando UNO  ********************
	try {
		if (argExecuteActivation.equalsIgnoreCase("TRUE")) {
			if ((argIndexBOID != null) && (argIndexBOID != "") && (!(argBOID.equalsIgnoreCase(""))) && (argBOID != null) ) {
			//out.println("Arrancando: ");out.println(argBOID);
				if (m_soapclient.startSoapServiceSystem(argBOID) == false) {
					argExecuteActivationWithError = "TRUE";
					argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
				}
			}
		}
	}
	catch(Exception eStartOne) {
		argExecuteActivationWithError = "TRUE";
		argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
		m_log.error("Error: Starting ONE bussiness object (sch_bo_method.jsp).", eStartOne);
	}

	// ******************** Desactivando UNO  ********************
	try {
		if (argExecuteActivation.equalsIgnoreCase("FALSE")) {
			if ((argIndexBOID != null) && (argIndexBOID != "") && (!(argBOID.equalsIgnoreCase(""))) && (argBOID != null) ) {
				if (m_soapclient.stopSoapServiceSystem(argBOID) == false) {
					argExecuteActivationWithError = "TRUE";
					argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
				}
			}
		}
	}
	catch(Exception eStopOne) {
		argExecuteActivationWithError = "TRUE";
		argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
		m_log.error("Error: Stopping ONE bussiness object (sch_bo_method_system_services.jsp).", eStopOne);
	}
%>

<%-- ******************** Fin Orden de activacion/desactivacion  ******************** --%>

<%-- ******************** Obtenemos la Lista de BO activos ******************** --%>
<%-- * Es importante tenerlo despues de activacion/desactivacion.  --%>
<%-- * Es importante tenerlo fuera del page.  --%>

<%
	Hashtable m_htlist = null;
	Hashtable m_htextrainfo = null; 

	try {
		//No releemos el fichero!.
		m_htlist = m_soapclient.getSystemServiceList(false);
		m_htextrainfo = m_soapclient.getSystemServiceListExtraInfo(false);
		}
	catch(Exception eGetList) {
		m_log.error("Error: Getting List after operation (sch_bo_method.jsp).", eGetList);
	}
%>
<%-- ******************** Fin Obtenemos la Lista de BO activos ******************** --%>

</HEAD>

<BODY>

<%-- ******************** Menues  ******************** --%>
<%@ include file="/m4trans/shco_g0/0-shco_gen_menusup.jsp" %></div>
<%-- ******************** Fin Menues  ******************** --%>

<br><br><br><br>

<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="4" width="56px"><img src="/images/ic_cabec_56_51_100.gif" width="56" height="51" /></td><td colspan="3" class="title">&nbsp;<%=gTranslateAdmin.getProperty("title_window.sch_bo_method")%></td><td colspan="5" class="value">&nbsp;</td></tr>
<tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>

<ul class="subtitulolistalink">
<a title="<%=gTranslateAdmin.getProperty("label.sch_bo_method.TitleBussinessServices")%>" href="javascript:OpenBussinessServicesWindow();">
<li><%=gTranslateAdmin.getProperty("label.sch_bo_method.TitleBussinessServices")%></li></a><BR>
</ul>

<%-- ******************** Servicio de sistema ******************** --%>

<h2><%=gTranslateAdmin.getProperty("label.sch_bo_method.TitleSystemServices")%></h2>

<%-- ******************** Fin Servicio de sistema ******************** --%>

<%-- ******************** Iniciamos la pagina ******************** --%>
<m4:page subsessionid="m4subsession">

<%-- ** Transaccion para posicionamiento en padre y obtener registros del detalle y columnas traducidas  ** --%>
<m4:job>
<m4:datadef m4o="SCH_BO_METHOD_JSP" m4name="canalbo"/>

<%-- Output para las etiquetas de las columnas --%>
<m4:exec m4object="canalbo" node="SCH_BO_COLUMNS_JSP" method="JSP_ADD_COLUMNS" alias="add_cols"/>
<m4:outputdef m4alias="nodocols" m4object="canalbo" node="SCH_BO_COLUMNS_JSP" records="*"/>

</m4:job>
<%-- ** Fin Transaccion para posicionamiento en padre y obtener registros del detalle y columnas traducidas  ** --%>

<%-- ******************** Iniciamos la pagina ******************** --%>
<form id="formulario" name="formulario" action="<%=argGoToPage%>" method="post">

<%-- ******************** DEPURACION ******************** --%>
<table class="depuracion">
	<tr><td>argExecuteActivation = </td><td><%=argExecuteActivation%></td></tr>
	<tr><td>argIndexBOID = </td><td><%=argIndexBOID%></td></tr>
	<tr><td>argBOID = </td><td><%=argBOID%></td></tr>
	<tr><td>argExecuteActivationAll = </td><td><%=argExecuteActivationAll%></td></tr>
	<tr><td>argExecuteActivationAllList = </td><td><%=argExecuteActivationAllList%></td></tr>
	<tr><td>argExecuteActivationWithError = </td><td><%=argExecuteActivationWithError%></td></tr>
	<tr><td>argExecuteActivationWithErrorList = </td><td><%=argExecuteActivationWithErrorList%></td></tr>
	<tr><td>argPageCurrent = </td><td><%=argPageCurrent%></td></tr>
</table>
<%-- ******************** FIN DEPURACION ******************** --%>

<%-- Este apartado se encargará de pintar los registros si es reentrada.
Es decir la acción invocará de nuevo a esta página --%>
<br>

<% giTotalRecordCount = 0; %>
<table class="datos" width="100%" cellpadding="0" cellspacing="0">
<thead>
        <tr class="titulo">
			<% int iCol = 0; %>			
			<th>&nbsp;</th>		
			<% iCol++; %>	
	        <m4:dataloop outputdef="nodocols" count="*">
				<%-- No me interesa la primera columna: Regenerar codigo. --%>
				<%if (iCol > 1) {%>
					<td>&nbsp;<m4:item outputdef="nodocols" item="NM_COLUMN" htmlsafe="true"/>
		    		<%if (iCol == 2) {%>
				    	<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStartAll")%>" href="javascript:StartAll();"><img src="/images/tcadmin/mstart.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
					<%}%>
					<%if (iCol == 3) {%>
						<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStopAll")%>" href="javascript:StopAll();"><img src="/images/tcadmin/mstop.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
			    	<%}%>
		    		</td>
	    		<%}%>
		    	<% iCol ++; %>
			</m4:dataloop>
		</tr>
</thead>
<tbody>		
  		<% String sIndexStyle = "";%>
		<% argExecuteActivationAllList = "";
		boolean bIsActive = false;
		String sCurrentT3S = "";
		boolean bIsError = false;
		String vErrorList[] = null;
		if (argExecuteActivationWithError.equalsIgnoreCase("TRUE")) {
			vErrorList = splitString(argExecuteActivationWithErrorList, CONSTANT_ID_T3S_SEPARATOR);
		}%>
		<% bIsActive = false;
		if (m_htlist.size() != 0)	{
			giTotalRecordCount = m_htlist.size();
			for (Enumeration e = m_htlist.keys(); e.hasMoreElements();)	{
				String key = (String) e.nextElement();
				sCurrentT3S = key;
				String name = (String) m_htlist.get(key);%>
				<% bIsActive = m_soapclient.isStartedServiceList(sCurrentT3S);
				bIsError = false;
				if (vErrorList != null) {
					for (int i = 0; i < vErrorList.length; i++) {
						if ( !(vErrorList[i].equalsIgnoreCase("")) && (vErrorList[i] != null) && (vErrorList[i].equalsIgnoreCase(sCurrentT3S)) ) {
							bIsError = true;
							break;
						}
					}
				}%>
				<%if ((giCurrent >= giPageFirst) && (giCurrent < (giPageSize * (giPageCurrent + 1)))) {%>
					<% giTotalRecordCountVisibles ++;%>
					<% argExecuteActivationAllList = argExecuteActivationAllList + sCurrentT3S + CONSTANT_ID_T3S_SEPARATOR; %>
					<%sIndexStyle = "";
					if ((giCurrent%2) == 0) {sIndexStyle = "2";}%>				
					<tr>
					<td class="valor<%=sIndexStyle%>">&nbsp;<%=giCurrent + 1%></td>
					<%-- Si no esta activo, podremos activarlo y el boton será el de arranque. --%>
					<%-- Sólo se puede regenerar si está parado --%>
					<% 	if (bIsActive == false) { %>
						<td class="valor<%=sIndexStyle%>">&nbsp;
						<% if (bIsError == false) {%>
							<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStart")%>" href="javascript:StartBOID('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mstart.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
						<%} else { %>
							<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStart")%>" href="javascript:StartBOID('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mstart_blink_slide.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
						<%}%>
						</td>
						<td class="valor<%=sIndexStyle%>">&nbsp;</td>

					<%-- Si esta activo, podremos desactivarlo y el boton será el de stop. --%>
					<%} else { %>
						<td class="valor<%=sIndexStyle%>">&nbsp;</td>
						<td class="valor<%=sIndexStyle%>">&nbsp;
						<% if (bIsError == false) {%>
							<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStop")%>" href="javascript:StopBOID('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mstop.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
						<%} else { %>
							<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStop")%>" href="javascript:StopBOID('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mstop_blink_slide.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
						<%}%>
						<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonShowWSDL")%>" href="javascript:OpenWSDLWindow('<%=sCurrentT3S%>');">(wsdl)</a>
						</td>
					<%}%>
					<td class="valor<%=sIndexStyle%>">&nbsp;<%=key%></td>
					<td class="valor<%=sIndexStyle%>">&nbsp;<%=name%></td>
					<td class="valor<%=sIndexStyle%>">&nbsp;<%=m_htextrainfo.get(key)%></td>
					</tr>
				<%}%>
				<%++giCurrent;%>
			<%}%>
		<%}%>
		<%if (giTotalRecordCountVisibles == 0) {%>
			<tr><td class="fuentenodatos" colspan="100" cellpadding="0" cellspacing="0" border="1"><center>&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.NoRecordsInFilter")%></center></td></tr>
		<%}%>
</tbody>
</table>

<%-- ******************** Paginacion  ******************** --%>
<%@ include file="/tcadmin/soapservices/_pagination_foot.jspf" %>
<%-- ******************** Fin Paginacion  ******************** --%>

<%-- ******************** Inputs ocultos para paso de parametros ******************** --%>
<input type="hidden" id="argGoToPage" name="argGoToPage" value="<%=argGoToPage%>">
<input type="hidden" id="argExecuteActivationAll" name="argExecuteActivationAll" value="">
<input type="hidden" id="argExecuteActivationAllList" name="argExecuteActivationAllList" value="<%=argExecuteActivationAllList%>">
<input type="hidden" id="argExecuteActivationWithError" name="argExecuteActivationWithError" value="">
<input type="hidden" id="argExecuteActivationWithErrorList" name="argExecuteActivationWithErrorList" value="">
<input type="hidden" id="argExecuteCodeRegeneration" name="argExecuteCodeRegeneration" value="">
<input type="hidden" id="argExecuteActivation" name="argExecuteActivation" value="">
<input type="hidden" id="argIndexBOID" name="argIndexBOID" value="">
<input type="hidden" id="argBOID" name="argBOID" value="">
<input type="hidden" id="argPageCurrent" name="argPageCurrent" value="<%=argPageCurrent%>">
<%-- ******************** Fin Inputs ocultos para paso de parametros ******************** --%>

<%-- ******************** Comprobamos si hay errores en la activacion ******************** --%>
<%-- Este JavaScript lo metemos aquí, cuando la página ha sido ejecutada completamente --%>
<%if (argExecuteActivationWithError.equalsIgnoreCase("TRUE")) {%>
	<script type="text/javascript">
		OpenErrorWindow('<%=argExecuteActivationWithErrorList%>');
	</script>
<%}%>
<%-- ******************** Fin Comprobamos si hay errores en la activacion ******************** --%>

</form>

<%-- ******************** Disclaimer (Incluye: </m4:page> ******************** --%>
<%@include file="/m4trans/shco_g0/0-shco_gen_disclaimer.jsp" %>
<%-- ******************** Fin Disclaimer ************************************* --%>

</m4:page>
<%-- ******************** Fin Iniciamos la pagina ******************** --%>

</BODY>
</HTML>
