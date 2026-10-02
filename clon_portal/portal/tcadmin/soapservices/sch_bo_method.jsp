<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: sch_bo_method.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%-- ******************** Cache  ******************** --%>
<%-- Forzamos que la pagina este expirada el 1-1-1970 --%>
<%response.setDateHeader("Expires",0);%>
<%-- ******************** Fin Cache  ******************** --%>

<%-- ******************** Includes  ******************** --%>
<%@ include file="./_includes.jspf" %>
<%-- ******************** Fin Includes  ******************** --%>

<%-- ******************** Traducciones  ******************** --%>
<%@ include file="./_translation_declaration.jspf" %>
<%-- ******************** Fin Traducciones  ******************** --%>

<HTML>
<HEAD>
<TITLE><%=gTranslateAdmin.getProperty("title_window.sch_bo_method")%></TITLE>

<%-- ******************** Funciones JavaScript  ******************** --%>
<script type="text/javascript" src="/library/m4gen.js"></script>
<script type="text/javascript" src="/library/m4ie_light.js"></script>
<script type="text/javascript">
	function ApplyFilter( ) {
		m4valor('formulario','argShowRecords','TRUE','set');
		m4valor('formulario','argPageCurrent','0','set');
		m4valor('formulario','argExecuteActivationAllList','','set');
		m4submit('formulario');
	}
	function CodeRegenerationBOID( iIndexBOID, sBOID ) {
		m4valor('formulario','argExecuteCodeRegeneration','TRUE','set');
		//La regeneracion supone tambien activacion. Pero se hace pasando true a la funcion startSoapService.
		//m4valor('formulario','argExecuteActivation','TRUE','set');
		_SetBOID(iIndexBOID, sBOID);
	}
	function StartBOID( iIndexBOID, sBOID ) {
		m4valor('formulario','argExecuteActivation','TRUE','set');
		_SetBOID(iIndexBOID, sBOID);
	}
	function StopBOID( iIndexBOID, sBOID ) {
		m4valor('formulario','argExecuteActivation','FALSE','set');
		_SetBOID(iIndexBOID, sBOID);
	}
	function _SetBOID( iIndexBOID, sBOID ) {
		//m4valor('formulario','argOperatorId',m4select('formulario','argOperatorId','value'),'set');
		m4valor('formulario','argT3sId',m4valor('formulario','argT3sId','argT3sId', 'get'),'set');
		m4valor('formulario','argIndexBOID',iIndexBOID,'set');
		m4valor('formulario','argBOID',sBOID,'set');
		m4valor('formulario','argShowRecords','TRUE','set');
		m4submit('formulario');
	}
	function OpenSystemServicesWindow( ) {
		location="sch_bo_method_system_services.jsp";
	}
	function OpenWSDLWindow( sBOID ) {
		//Ejemplo:
		//http://localhost:8101/services/DEMO_SOAP?wsdl
		//Le pasamos el id del servicio, sin convertir a minusculas!.
		var url = "/services/"
		url = url + sBOID + "?wsdl";
		var sDefaultWindowProps = "height=520, resizable=1, menubar=0, toolbar=0, directories=0, location=0, scrollbars=1, status=0";
		window.open(url, 'wsdl', sDefaultWindowProps);
	}
	function OpenMethodsWindow( iIndexBOID, sBOID ) {
		m4valor('formulario','argIndexBOID',iIndexBOID,'set');
		m4valor('formulario','argBOID',sBOID,'set');
		var url = "_sch_bo_method_detail.jsp" + "?argIndexBOID=" + document.forms['formulario'].elements['argIndexBOID'].value;
		url = url + "&argBOID=" + document.forms['formulario'].elements['argBOID'].value;
		url = url + "&argPageCurrent=0";		
		var sDefaultWindowProps = "height=430, width=700, resizable=1, menubar=0, toolbar=0, directories=0, location=0, scrollbars=1, status=0";
		window.open(url, 'methods', sDefaultWindowProps);
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
		m4valor('formulario','argOperatorId',m4select('formulario','argOperatorId','value'),'set');
		m4valor('formulario','argT3sId',m4valor('formulario','argT3sId','argT3sId', 'get'),'set');
		m4valor('formulario','argShowRecords','TRUE','set');
		m4valor('formulario','argExecuteCodeRegeneration','FALSE','set');
		m4submit('formulario');
	}
	function ChangePage( sPageCurrent ) {
		m4valor('formulario','argOperatorId',m4select('formulario','argOperatorId','value'),'set');
		m4valor('formulario','argT3sId',m4valor('formulario','argT3sId','argT3sId', 'get'),'set');
		m4valor('formulario','argShowRecords','TRUE','set');
		m4valor('formulario','argPageCurrent',sPageCurrent,'set');
		m4valor('formulario','argExecuteActivationAllList','','set');
		m4submit('formulario');
	}
</script>
<%-- ******************** Fin Funciones JavaScript  ******************** --%>

<%-- ******************** Inicializacion de argumentos  ******************** --%>
<%	String argGoToPage = (String)request.getParameter("argGoToPage");
	if ((argGoToPage == null) || (argGoToPage.equalsIgnoreCase(""))) argGoToPage = "sch_bo_method.jsp";

	String argOperatorId = (String)request.getParameter("argOperatorId");
	if (argOperatorId == null) argOperatorId = "";
	String argT3sId = (String)request.getParameter("argT3sId");
	if (argT3sId == null) argT3sId = "";
	String argClassification = (String)request.getParameter("argClassification");
	if (argClassification == null) argClassification = "CHK_ALL";

	String argShowRecords = (String)request.getParameter("argShowRecords");
	if (argShowRecords == null) argShowRecords = "";

	//Regeneracion, Activacion parcial y parcial.
	String argExecuteCodeRegeneration = (String)request.getParameter("argExecuteCodeRegeneration");
	if (argExecuteCodeRegeneration == null) argExecuteCodeRegeneration = "";

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
<%@ include file="./_pagination_declaration.jspf" %>
<%-- ******************** Fin Paginacion inicializacion  ******************** --%>

<%-- ******************** Log  ******************** --%>
<%@ include file="./_log_declaration.jspf" %>
<%-- ******************** Fin Log  ******************** --%>

<%-- ******************** Preparamos la Lista de BO activos ******************** --%>
<%-- * Tiene que estar antes de la activacion/desactivacion, pero aqui NO se obtine la lista. --%>
<%
	String m_protocol = "http";
	if (request.isSecure()){m_protocol = "https";}
	String m_host = request.getServerName();
	int m_port = request.getServerPort();
	String m_appName = request.getContextPath();
	String m_appDir = pageContext.getServletContext().getRealPath("/WEB-INF");
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
						if (m_soapclient.stopSoapService(vList[i]) == false) {
							argExecuteActivationWithError = "TRUE";
							argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						}
					}
					catch(Exception eStopAll) {
						argExecuteActivationWithError = "TRUE";
						argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						m_log.error("Error: Stopping all bussiness objects (i) (sch_bo_method.jsp).", eStopAll);
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
						if (m_soapclient.startSoapService(vList[i], false) == false) {
							argExecuteActivationWithError = "TRUE";
							argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						}
					}
					catch(Exception eStartAll) {
						argExecuteActivationWithError = "TRUE";
						argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + vList[i] + CONSTANT_ID_T3S_SEPARATOR;
						m_log.error("Error: Starting all bussiness objects (i) (sch_bo_method.jsp).", eStartAll);
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
				if (m_soapclient.startSoapService(argBOID, false) == false) {
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
				if (m_soapclient.stopSoapService(argBOID) == false) {
					argExecuteActivationWithError = "TRUE";
					argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
				}
			}
		}
	}
	catch(Exception eStopOne) {
		argExecuteActivationWithError = "TRUE";
		argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
		m_log.error("Error: Stopping ONE bussiness object (sch_bo_method.jsp).", eStopOne);
	}

	// ******************** Regenerando y activando UNO  ********************
	try {
		if (argExecuteCodeRegeneration.equalsIgnoreCase("TRUE")) {
			if ((argIndexBOID != null) && (argIndexBOID != "") && (!(argBOID.equalsIgnoreCase(""))) && (argBOID != null) ) {
				if (m_soapclient.startSoapService(argBOID, true) == false) {
					argExecuteActivationWithError = "TRUE";
					argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
				}
			}
		}
	}
	catch(Exception eCodeRegenerationOne) {
		argExecuteActivationWithError = "TRUE";
		argExecuteActivationWithErrorList = argExecuteActivationWithErrorList + argBOID + CONSTANT_ID_T3S_SEPARATOR;
		m_log.error("Error: CodeRegeneration ONE bussiness object (sch_bo_method.jsp).", eCodeRegenerationOne);
	}
%>

<%-- ******************** Fin Orden de activacion/desactivacion  ******************** --%>

<%-- ******************** Obtenemos la Lista de BO activos ******************** --%>
<%-- * Es importante tenerlo despues de activacion/desactivacion.  --%>
<%-- * Es importante tenerlo fuera del page.  --%>

<%
	Hashtable m_htlist = null;

	try {
		m_htlist = m_soapclient.getStartedServiceList();
		}
	catch(Exception eGetList) {
		m_log.error("Error: Getting List after operation (sch_bo_method.jsp).", eGetList);
	}
%>
<%-- ******************** Fin Obtenemos la Lista de BO activos ******************** --%>

</HEAD>

<BODY>

<%-- ******************** Menues  ******************** --%>
<%@ include file="../../shco_g0/shco_gen_menusup.jsp" %></div>
<%-- ******************** Fin Menues  ******************** --%>

<br><br><br><br>

<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="4" width="56px"><img src="/images/ic_cabec_56_51_100.gif" width="56" height="51" /></td><td colspan="3" class="title">&nbsp;<%=gTranslateAdmin.getProperty("title_window.sch_bo_method")%></td><td colspan="5" class="value">&nbsp;</td></tr>
<tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>

<ul class="subtitulolistalink">
<a title="<%=gTranslateAdmin.getProperty("label.sch_bo_method.TitleSystemServices")%>" href="javascript:OpenSystemServicesWindow();">
<li><%=gTranslateAdmin.getProperty("label.sch_bo_method.TitleSystemServices")%></li></a><BR>
</ul>

<%-- ******************** Servicio de negocio ******************** --%>
<h2><%=gTranslateAdmin.getProperty("label.sch_bo_method.TitleBussinessServices")%></h2>

<%-- ******************** Fin Servicio de negocio ******************** --%>

<%-- ******************** Iniciamos la pagina ******************** --%>
<m4:page subsessionid="m4subsession">

<%-- ******************** Transaccion para obtener los traducidos de los operadores  ******************** --%>
<m4:job>
<m4:datadef m4o="SCH_BO_METHOD_JSP" m4name="canalbo"/>
<m4:exec m4object="canalbo" node="SCH_BO_OPERATOR_JSP" method="JSP_LOAD" alias="load_opr"/>
<m4:outputdef m4alias="nodoopr" m4object="canalbo" node="SCH_BO_OPERATOR_JSP" records="*"/>
</m4:job>
<%-- ******************** Fin Transaccion para obtener los traducidos de los operadores  ******************** --%>

<form id="formulario" name="formulario" action="<%=argGoToPage%>" method="post">

<%-- ******************** DEPURACION ******************** --%>
<table class="depuracion">
	<tr><td>argShowRecords = </td><td><%=argShowRecords%></td></tr>
	<tr><td>argOperatorId = </td><td><%=argOperatorId%></td></tr>
	<tr><td>argT3sId = </td><td><%=argT3sId%></td></tr>
	<tr><td>argClassification = </td><td><%=argClassification%></td></tr>
	<tr><td>argExecuteCodeRegeneration = </td><td><%=argExecuteCodeRegeneration%></td></tr>
	<tr><td>argExecuteActivation = </td><td><%=argExecuteActivation%></td></tr>
	<tr><td>argIndexBOID = </td><td><%=argIndexBOID%></td></tr>
	<tr><td>argBOID = </td><td><%=argBOID%></td></tr>
	<tr><td>argExecuteActivationAll = </td><td><%=argExecuteActivationAll%></td></tr>
	<tr><td>argExecuteActivationAllList = </td><td><%=argExecuteActivationAllList%></td></tr>
	<tr><td>argExecuteActivationWithError = </td><td><%=argExecuteActivationWithError%></td></tr>
	<tr><td>argExecuteActivationWithErrorList = </td><td><%=argExecuteActivationWithErrorList%></td></tr>
	<tr><td>giPageSize = </td><td><%=giPageSize%></td></tr>
	<tr><td>argPageCurrent = </td><td><%=argPageCurrent%></td></tr>
</table>
<%-- ******************** FIN DEPURACION ******************** --%>

<%-- ******************** QBF  ******************** --%>
<table class="form" width="100%" cellpadding="0">
        <tr class="titulo">
            <td colspan="3">&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.TableHeaderFilter")%></td>
        </tr>
        <tr>
			<td class="campo">&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.CheckClassificationAll")%><input type="radio" name="argClassification" id="argClassification" text="jamon" value="CHK_ALL" <% if (argClassification.equalsIgnoreCase("CHK_ALL")) {%> checked <%}%> /></td>
            <td class="campo">&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.CheckClassificationStarted")%><input type="radio" name="argClassification" id="argClassification" value="CHK_ONLY_STARTED" <% if (argClassification.equalsIgnoreCase("CHK_ONLY_STARTED")) {%> checked <%}%> /></td>
			<td class="campo">&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.CheckClassificationStopped")%><input type="radio" name="argClassification" id="argClassification" value="CHK_ONLY_STOPPED" <% if (argClassification.equalsIgnoreCase("CHK_ONLY_STOPPED")) {%> checked <%}%> /></td>
        </tr>
        <tr class="titulo">
            <td colspan="3">&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.TableHeaderFind")%></td>
        </tr>
		<tr>
            <td>&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.FindIdT3s")%></td>
            <td>
            <select id="argOperatorId" name="argOperatorId" value="<%=argOperatorId%>">
            	<m4:dataloop outputdef="nodoopr" count="*">
            		<m4:item outputdef="nodoopr" item="ID_COMP" m4varname="sIdOperator" htmlsafe="true"/>
				    <m4:item outputdef="nodoopr" item="N_COMP" m4varname="sOperatorDesc" htmlsafe="true"/>
					<option <%if (argOperatorId.equalsIgnoreCase(sIdOperator)) {%> selected <%}%> id='<%=sIdOperator%>' value='<%=sIdOperator%>'><%=sOperatorDesc%></option>
				</m4:dataloop>
			</select>
            </td>
            <td>&nbsp;<input type="text" id="argT3sId" name="argT3sId" value="<%=argT3sId%>" size="20"></td>
		</tr>
        <tr>
            <td class="boton" colspan="3">			
			<input type ="image" id="lnSearch" name="lnSearch" title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonFind")%>" onclick="javascript:ApplyFilter();" src="/images/tcadmin/msearch.gif" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
            </td>
        </tr>
</table>
<%-- ******************** Fin QBF  ******************** --%>

<%-- ******************** Mostrar los BO que cumplen fitro  ******************** --%>
<% if (argShowRecords.equalsIgnoreCase("TRUE")) { %>

<%-- Este apartado se encargará de pintar los registros si es reentrada.
Es decir la acción invocará de nuevo a esta página --%>
<br>

<%-- ******************** Transaccion para obtener registros del raiz y columnas traducidas  ******************** --%>
<m4:job>
<m4:datadef m4o="SCH_BO_METHOD_JSP" m4name="canalbo"/>

<%-- Output para el nodo de carga de BO --%>
<m4:exec m4object="canalbo" node="SCH_BO_METHOD_JSP" method="JSP_LOAD" alias="load_metodo">
	<m4:param name="ARG_ID_T3" value="<%=argT3sId%>"/><m4:param name="ARG_OPERATOR_T3" value="<%=argOperatorId%>"/>
</m4:exec>
<m4:outputdef m4alias="nodoraiz" m4object="canalbo" node="SCH_BO_METHOD_JSP" records="*"/>

<%-- Output para las etiquetas de las columnas --%>
<m4:exec m4object="canalbo" node="SCH_BO_COLUMNS_JSP" method="JSP_ADD_COLUMNS" alias="add_cols"/>
<m4:outputdef m4alias="nodocols" m4object="canalbo" node="SCH_BO_COLUMNS_JSP" records="*"/>

</m4:job>
<%-- ******************** Fin Transaccion para obtener registros del raiz y columnas traducidas  ******************** --%>

<m4:count outputdef="nodoraiz" m4varname="iCountRecords"/> 
<% giTotalRecordCount = new Integer(iCountRecords).intValue(); %>
<%int iClassificationDiscountCounter = 0;%>

<table class="datos" width="100%" cellpadding="0" cellspacing="0">
<thead>
        <tr class="titulo">
			<% int iCol = 0; %>			
			<th>&nbsp;</th>		
			<% iCol++; %>	
	        <m4:dataloop outputdef="nodocols" count="*">
				<th>&nbsp;<m4:item outputdef="nodocols" item="NM_COLUMN" htmlsafe="true"/>
		    	<%if (iCol == 2) {%>
					<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStartAll")%>" href="javascript:StartAll();"><img src="/images/tcadmin/mstart.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
		    	<%}%>
		    	<%if (iCol == 3) {%>
		    		<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStopAll")%>" href="javascript:StopAll();"><img src="/images/tcadmin/mstop.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
		    	<%}%>		    	
		    	</th>
		    	<% iCol ++; %>
			</m4:dataloop>
			<!-- <th class="tituloleft">&nbsp;&nbsp;<%=giPageFirst + 1%>-<%=Math.min(giPageFirst+giPageSize,giTotalRecordCount)%>&nbsp;<%=Tran_shco_g0.getProperty("Literal.Of")%>&nbsp;<%=giTotalRecordCount%></th> -->
        </tr>
</thead>
<tbody>        
		<% String sIndexStyle = "";%>
		<% argExecuteActivationAllList = "";
		boolean bIsActive = false;
		boolean bIsError = false;
		String vErrorList[] = null;		
		if (argExecuteActivationWithError.equalsIgnoreCase("TRUE")) {
			vErrorList = splitString(argExecuteActivationWithErrorList, CONSTANT_ID_T3S_SEPARATOR);
		}%>
		<m4:dataloop outputdef="nodoraiz" count="*">
			<m4:item outputdef="nodoraiz" item="ID_T3" m4varname="sCurrentT3S"/>
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
			<%if ( (argClassification.equalsIgnoreCase("CHK_ALL"))
				|| (argClassification.equalsIgnoreCase("CHK_ONLY_STARTED") && (bIsActive == true))
				|| (argClassification.equalsIgnoreCase("CHK_ONLY_STOPPED") && (bIsActive == false))
				) {%>
					<% giTotalRecordCountVisibles ++;%>
					<% argExecuteActivationAllList = argExecuteActivationAllList + sCurrentT3S + CONSTANT_ID_T3S_SEPARATOR; %>
					<%sIndexStyle = "";
					if ((giCurrent%2) == 0) {sIndexStyle = "2";}%>					
					<tr>
					<td class="valor<%=sIndexStyle%>">&nbsp;<%=giCurrent + 1%></td>					
					<%-- Si no esta activo, podremos activarlo y el boton será el de arranque. --%>
					<%-- Sólo se puede regenerar si está parado --%>
					<% 	if (bIsActive == false) { %>
						<td class="valor<%=sIndexStyle%>">&nbsp;<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonCodeRegeneration")%>" href="javascript:CodeRegenerationBOID('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mcoderegeneration.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
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
					<td class="valor<%=sIndexStyle%>">&nbsp;<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonShowDetail")%>" href="javascript:OpenMethodsWindow('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mview.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;<m4:item outputdef="nodoraiz" item="ID_T3" htmlsafe="true"/></td>
					<td class="valor<%=sIndexStyle%>">&nbsp;<m4:item outputdef="nodoraiz" item="N_T3" htmlsafe="true"/></td>
					<%-- id 0153349 goes along with new SCH_BO_METHOD_JSP TIs --%>
					<td class="valor<%=sIndexStyle%>">&nbsp;<m4:item outputdef="nodoraiz" item="NM_STYLEUSE" htmlsafe="true"/></td>
					</tr>					
				<%}%>
			<%}%>
			<%++giCurrent;%>
			<%//Queremos filtrar los activos y el actual es inactivo o queremos filtrar inactivos y el actual es activo.
			//Ademas, tendremos que descontar el current!!.
			if ( (argClassification.equalsIgnoreCase("CHK_ONLY_STARTED") && (bIsActive == false)) 
				|| (argClassification.equalsIgnoreCase("CHK_ONLY_STOPPED") && (bIsActive == true)) ) {		
					iClassificationDiscountCounter ++;
					giCurrent--;
			}%>				
		</m4:dataloop>        
		<%if (giTotalRecordCountVisibles == 0) {%>
			<tr><td class="fuentenodatos" colspan="100" cellpadding="0" cellspacing="0" border="1"><center>&nbsp;<%=gTranslateAdmin.getProperty("label.sch_bo_method.NoRecordsInFilter")%></center></td></tr>
		<%}%>
</tbody>
</table>

<% //La paginacion es sobre los filtrados, no sobre todos.
giTotalRecordCount = giTotalRecordCount - iClassificationDiscountCounter; %>

<%-- ******************** Paginacion  ******************** --%>
<%@ include file="./_pagination_foot.jspf" %>
<%-- ******************** Fin Paginacion  ******************** --%>

<% } %>
<%-- ******************** Fin Mostrar los BO que cumplen fitro  ******************** --%>

<%-- ******************** Inputs ocultos para paso de parametros ******************** --%>
<input type="hidden" id="argGoToPage" name="argGoToPage" value="<%=argGoToPage%>">
<%-- <input type="hidden" id="argT3sId" name="argT3sId" value=""> --%>
<%-- <input type="hidden" id="argOperatorId" name="argOperatorId" value=""> --%>
<input type="hidden" id="argShowRecords" name="argShowRecords" value="">
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
<%@include file="../../shco_g0/shco_gen_disclaimer.jsp" %>
<%-- ******************** Fin Disclaimer ************************************* --%>
</m4:page>

<%-- ******************** Fin Iniciamos la pagina ******************** --%>

<%-- **************** EJEMPLOS *********************** --%> <%--
	**** Ejemplos de move (Fuera del job) *********
	<m4:move outputdef="nodoraiz" record="0"/>
	<m4:move outputdef="nodoraiz" record="LAST"/>
	<m4:move outputdef="nodoraiz" record="FIRST"/>
	<% String i1 = "0"; %>
	<m4:move outputdef="nodoraiz" record="<%=i1%>"/>

	**** Ejemplos de move (Dentro del job, se mueve en server) *********
	<%pageContext.setAttribute("argIndexBOID",argIndexBOID,pageContext.PAGE_SCOPE);%>
	<m4:move>
	<m4:param name="canalbo" value="nodoraiz:SCH_BO_METHOD_JSP[&VAR.argIndexBOID]"/>
	</m4:move>

	**** Ejemplo conversion entero *********
    <m4:count outputdef="nodoraiz" m4varname="iCount"/>
    <% String  sCountRecords = new Integer(new Integer(iCount).intValue()-1).toString();

	**** Ejemplo Botones *********
	<td align="middle">
	<a title="Activar todos" href="javascript:StartAll();"><img src="/images/tcadmin/mstart.gif" border="0" heigth ="20" width="20" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
    </td>

    **** Dos formas diferentes de hacer lo "mismo" *********
	<td class="campo">&nbsp;<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonShowDetail")%>" href="javascript:OpenMethodsWindow('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mview.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>&nbsp;<m4:item outputdef="nodoraiz" item="ID_T3"/></td>
	<td class="campo">&nbsp;<input type ="image" id="lnShowDetail" name="lnShowDetail" title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonShowDetail")%>" onclick="javascript:OpenMethodsWindow('<%=giCurrent%>','<%=sCurrentT3S%>');" src="/images/tcadmin/mview.gif" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/>&nbsp;<m4:item outputdef="nodoraiz" item="ID_T3"/></td>

    **** Mas formas diferentes de hacer lo "mismo" *********
	<input type ="image" id="lnStatusActual" name="lnStatusActual" title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStart")%>" onclick="javascript:StartBOID('<%=giCurrent%>','<%=sCurrentT3S%>');" src="/images/tcadmin/mstart_blink_slide.gif" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
	<a title="<%=gTranslateAdmin.getProperty("tooltip.sch_bo_method.ButtonStart")%>" href="javascript:StartBOID('<%=giCurrent%>','<%=sCurrentT3S%>');"><img src="/images/tcadmin/mstart_blink_slide.gif" border="0" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />

	**** Contador *********
    <m4:count outputdef="nodoraiz" m4varname="iCountRecords"/>
    <% giTotalRecordCount = new Integer(iCountRecords).intValue();
    String  sCountRecords = new Integer (new Integer(iCountRecords).intValue()).toString();
	if ((sCountRecords.equalsIgnoreCase("0")) || (sCountRecords == null)) {%>
	<%}%>

--%><%-- **************** Fin EJEMPLOS *********************** --%>

</BODY>
</HTML>
