<%-- [=====================================================]

	@(#)FileVersion: 811.000.000
	@(#)FileDescription: Administration bussiness methods (interna).
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: _sch_bo_method_error.jsp
	@(#)Date: 20/10/2003

[=====================================================] --%>

<%-- ******************** Includes  ******************** --%>
<%@ include file="/tcadmin/soapservices/_includes.jspf" %>
<%-- ******************** Fin Includes  ******************** --%>

<%-- ******************** Traducciones  ******************** --%>
<%@ include file="/tcadmin/soapservices/_translation_declaration.jspf" %>
<%-- ******************** Fin Traducciones  ******************** --%>

<HTML>
<HEAD>
<TITLE><%=gTranslateAdmin.getProperty("title_window._sch_bo_method_error")%></TITLE>

<%	String argExecuteActivationWithErrorList = (String)request.getParameter("argExecuteActivationWithErrorList");
	if (argExecuteActivationWithErrorList == null) argExecuteActivationWithErrorList = "";

	String CONSTANT_ID_T3S_SEPARATOR = ":";
%>

<%-- ******************** Paginacion inicializacion  ******************** --%>
<%@ include file="/tcadmin/soapservices/_pagination_declaration.jspf" %>
<%-- ******************** Fin Paginacion inicializacion  ******************** --%>

</HEAD>

<BODY>

<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="4" width="56px"><img src="/images/ic_cabec_56_51_100.gif" width="56" height="51" /></td><td colspan="3" class="title">&nbsp;<%=gTranslateAdmin.getProperty("title_window._sch_bo_method_error")%></td><td colspan="5" class="value">&nbsp;</td></tr>
<tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>

<m4:page subsessionid="m4subsession">
<m4:job>
<m4:datadef m4o="SCH_BO_METHOD_JSP" m4name="canalbo"/>
<%-- Output para las etiquetas de las columnas --%>
<m4:exec m4object="canalbo" node="SCH_BO_COLUMNS_JSP" method="JSP_ADD_COLUMNS" alias="add_cols"/>
<m4:outputdef m4alias="nodocols" m4object="canalbo" node="SCH_BO_COLUMNS_JSP" records="*"/>
</m4:job>


<%-- ******************** DEPURACION ******************** --%>
<table class="depuracion">
	<tr><td>argExecuteActivationWithErrorList = </td><td><%=argExecuteActivationWithErrorList%></td></tr>
	<tr><td>giPageSize = </td><td><%=giPageSize%></td></tr>
	<tr><td>argPageCurrent = </td><td><%=argPageCurrent%></td></tr>
</table>
<%-- ******************** FIN DEPURACION ******************** --%>

<table class="datos" width="100%" cellspacing="0">
<thead>
        <tr class="titulo">
		<td colspan="2">&nbsp;<%=gTranslateAdmin.getProperty("label._sch_bo_method_error.TableHeaderError")%></td>
        </tr>
		<%-- Solo nos interesa la columna del ID, es la cuarta!!. --%>
		<% int iCol = 0; %>
        <m4:dataloop outputdef="nodocols" count="*">
        <% if (iCol == 3) {%>
			<tr class="titulo2">
				<td>&nbsp;</td>
				<td>&nbsp;<m4:item outputdef="nodocols" item="NM_COLUMN" htmlsafe="true"/></td>
		    </tr>
        <%}%>
        <%++iCol;%>
        </m4:dataloop>
</thead>
<tbody>        
	<%
	String vList[] = splitString(argExecuteActivationWithErrorList, CONSTANT_ID_T3S_SEPARATOR);
	String sIndexStyle = "";
	giTotalRecordCount = vList.length; 		
	for (int i = 0; i < vList.length; i++) {
		sIndexStyle = "";
		if ((i%2) == 0) {sIndexStyle = "2";}
		if ( (!(vList[i].equalsIgnoreCase("")))
			&& (vList[i] != null) ) { %>

				<%if ((giCurrent >= giPageFirst) && (giCurrent < (giPageSize * (giPageCurrent + 1)))) {%>
					<tr>
					<td class="valor<%=sIndexStyle%>">&nbsp;<%=giCurrent + 1%></td>
					<td class="valor<%=sIndexStyle%>">&nbsp;<%=vList[i]%></td>
					</tr>
				<%}%>
				<%++giCurrent;%>
		<%}
	}%>

<%-- *** En la paginacion NUNCA sobrepasaremos el tamaño de pagina pq se muestran los id que han dado error. *** --%>
<%-- *** En caso contrario daria un error la paginacion pq no tenemos javascript para ir a pagina!. *** --%>
	
<%-- ******************** Paginacion  ******************** --%>
<%@ include file="/tcadmin/soapservices/_pagination_foot.jspf" %>
<%-- ******************** Fin Paginacion  ******************** --%>
</tbody>
</table>

<%-- ******************** Inputs ocultos para paso de parametros ******************** --%>
<input type="hidden" id="argPageCurrent" name="argPageCurrent" value="<%=argPageCurrent%>">
<%-- ******************** Fin Inputs ocultos para paso de parametros ******************** --%>

</m4:page>
</BODY>
</HTML>
