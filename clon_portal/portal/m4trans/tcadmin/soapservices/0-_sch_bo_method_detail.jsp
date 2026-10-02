<%-- [=====================================================]   
            
	@(#)FileVersion: 811.000.000
	@(#)FileDescription: Administration bussiness methods (interna). 
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: _sch_bo_method_detail.jsp     
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
<TITLE><%=gTranslateAdmin.getProperty("title_window._sch_bo_method_detail")%></TITLE>

<%-- ******************** Funciones JavaScript  ******************** --%>
<script type="text/javascript" src="/library/m4gen.js"></script>
<script type="text/javascript" src="/library/m4ie_light.js"></script>
<script type="text/javascript">
	function ChangePage( sPageCurrent ) {	
		m4valor('formulario','argPageCurrent',sPageCurrent,'set');
		m4submit('formulario');
	}
</script>
<%-- ******************** Fin Funciones JavaScript  ******************** --%>

<%	String argIndexBOID = (String)request.getParameter("argIndexBOID");
	if (argIndexBOID == null) argIndexBOID = "";
	String argBOID = (String)request.getParameter("argBOID");
	if (argBOID == null) argBOID = "";
%>

<%-- ******************** Paginacion inicializacion  ******************** --%>
<%@ include file="/tcadmin/soapservices/_pagination_declaration.jspf" %>
<%-- ******************** Fin Paginacion inicializacion  ******************** --%>	

</HEAD>

<BODY>

<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="4" width="56px"><img src="/images/ic_cabec_56_51_100.gif" width="56" height="51" /></td><td colspan="3" class="title">&nbsp;<%=gTranslateAdmin.getProperty("title_window._sch_bo_method_detail")%></td><td colspan="5" class="value">&nbsp;</td></tr>
<tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>

<m4:page subsessionid="m4subsession">

<%-- ******************** DEPURACION ******************** --%>
<table class="depuracion">
	<tr><td>argIndexBOID = </td><td><%=argIndexBOID%></td></tr>
	<tr><td>argBOID = </td><td><%=argBOID%></td></tr>
	<tr><td>giPageSize = </td><td><%=giPageSize%></td></tr>
	<tr><td>argPageCurrent = </td><td><%=argPageCurrent%></td></tr>	
</table>
<%-- ******************** FIN DEPURACION ******************** --%>

<% if (!(argIndexBOID.equals(""))) {
%>

<%-- ** Transaccion para posicionamiento en padre y obtener registros del detalle y columnas traducidas  ** --%>
<m4:job>
<m4:datadef m4o="SCH_BO_METHOD_JSP" m4name="canalbo"/>

<m4:outputdef m4alias="nodoraiz" m4object="canalbo" node="SCH_BO_METHOD_JSP" records="*"/>

<%pageContext.setAttribute("argIndexBOID",argIndexBOID,pageContext.PAGE_SCOPE);%>
<m4:move>
<m4:param name="canalbo" value="nodoraiz:SCH_BO_METHOD_JSP[&VAR.argIndexBOID]"/>
</m4:move>

<m4:exec m4object="canalbo" node="SCH_BO_METHOD_DETAIL_JSP" method="JSP_LOAD" alias="load_detail"/>	
<m4:outputdef m4alias="nododetail" m4object="canalbo" node="SCH_BO_METHOD_DETAIL_JSP" records="*"/>

<%-- Output para las etiquetas de las columnas --%>
<m4:exec m4object="canalbo" node="SCH_BO_COLUMNS_DETAIL_JSP" method="JSP_ADD_COLUMNS" alias="add_cols"/>
<m4:outputdef m4alias="nodocols" m4object="canalbo" node="SCH_BO_COLUMNS_DETAIL_JSP" records="*"/>

</m4:job>
<%-- ** Fin Transaccion para posicionamiento en padre y obtener registros del detalle y columnas traducidas  ** --%>


<%-- Me he movido en el server, ahora me muevo en el outputdef del raiz --%>
<m4:move outputdef="nodoraiz" record="<%=argIndexBOID%>"/>
 
<%-- ******************** DEPURACION ******************** --%>
<table class="depuracion">
	<tr><td>Current = </td><td><m4:current m4name="nodoraiz:canalbo!SCH_BO_METHOD_JSP"/></td></tr>	
</table>
<%-- ******************** FIN DEPURACION ******************** --%>

<m4:count outputdef="nododetail" m4varname="iCountRecords"/> 
<% giTotalRecordCount = new Integer(iCountRecords).intValue(); %>  
<table class="datos" width="100%" cellspacing="0" border="1">
<thead>
        <tr class="titulo">
		<th colspan ="7">&nbsp<m4:item outputdef="nodoraiz" item="ID_T3" htmlsafe="true"/>&nbsp;--&nbsp;<m4:item outputdef="nodoraiz" item="N_T3" htmlsafe="true"/></td>
        </tr>        
        <tr class="titulo2">
			<th>&nbsp;</td>			
	        <m4:dataloop outputdef="nodocols" count="*">
		    	<th>&nbsp<m4:item outputdef="nodocols" item="NM_COLUMN" htmlsafe="true"/></td>
			</m4:dataloop>			
        </tr>
</thead>
<tbody>        
		<m4:dataloop outputdef="nododetail" count="*">	
			<%if ((giCurrent >= giPageFirst) && (giCurrent < (giPageSize * (giPageCurrent + 1)))) {%>
				<% giTotalRecordCountVisibles ++;%>
				<tr class="valor">
				<td>&nbsp;<%=giCurrent + 1%></td>
				<td>&nbsp;<m4:item outputdef="nododetail" item="ID_METHOD" htmlsafe="true"/></td>
			    <td>&nbsp;<m4:item outputdef="nododetail" item="NM_METHOD" htmlsafe="true"/></td>
				<td>&nbsp;<m4:item outputdef="nododetail" item="ID_NODE" htmlsafe="true"/></td>
				<td>&nbsp;<m4:item outputdef="nododetail" item="ID_TI" htmlsafe="true"/></td>
				<td>&nbsp;<m4:item outputdef="nododetail" item="ID_ITEM" htmlsafe="true"/></td>
				<td>&nbsp;<m4:item outputdef="nododetail" item="DESC_METHOD" htmlsafe="true"/></td>				
				</tr>				
			<%}%>
			<%++giCurrent;%>
		</m4:dataloop> 
</tbody>
</table>
		
<%-- ******************** Paginacion  ******************** --%>
<%@ include file="/tcadmin/soapservices/_pagination_foot.jspf" %>
<%-- ******************** Fin Paginacion  ******************** --%>

<% } %>   

<form id="formulario" name="formulario" action="_sch_bo_method_detail.jsp" method="post">

<%-- ******************** Inputs ocultos para paso de parametros ******************** --%>
<input type="hidden" id="argIndexBOID" name="argIndexBOID" value="<%=argIndexBOID%>">
<input type="hidden" id="argBOID" name="argBOID" value="<%=argBOID%>">
<input type="hidden" id="argPageCurrent" name="argPageCurrent" value="<%=argPageCurrent%>">
<%-- ******************** Fin Inputs ocultos para paso de parametros ******************** --%>

</form>

</m4:page>
</BODY>
</HTML>
