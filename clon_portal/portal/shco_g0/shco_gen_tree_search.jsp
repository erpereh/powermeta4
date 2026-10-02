<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_tree_search.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<div id="BUSQUEDA" style="display:none; position:absolute; left:130; top:90">
	<table class="form" width="500" cellspacing="0">
		<thead>
			<tr class="titulo">
				<th colspan="2"><m4:label m4name="<%=zSHCO_LB_SEARCH%>" htmlsafe="true"/></th>
			</tr>
			<tr class="titulo">
				<th colspan="2">&nbsp;</th>
			</tr>
		</thead>
	<tbody>
		<tr>
			<td align="center" colspan="2">&nbsp;<m4:label m4name="<%=zSHCO_LB%>" htmlsafe="true"/>&nbsp;
				<input tabindex="1" class="form" type="text" id="SearchKey" name="SearchKey" size="8" maxlength="12" title="<m4:label m4name="<%=zSHCO_LB_WRITE%>" htmlsafe="true"/>" value="" />&nbsp;
				<input class="disabled" type="text" id="zNM_FIELD_SEARCH" name="zNM_FIELD_SEARCH" size="40" maxlength="62" title="<m4:label m4name="<%=zSHCO_LB_NAME%>" htmlsafe="true"/>" value="" disabled="disabled" />
				<a tabindex="2" title="<m4:label m4name="<%=zSHCO_LB_LIST%>" htmlsafe="true"/>" href="javascript:m4filtro('<%=zList%>', 'SearchKey', 'zNM_FIELD_SEARCH');"><img alt="<m4:label m4name="<%=zSHCO_LB_LIST%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_list.jsp" %> /></a>
			</td>
		</tr>
		<tr>
			<td align="center" class="fuentecampo">&nbsp;</td>
		</tr>
		<tr>
			<td align="center" class="fuentecampo">
					<a title="<m4:label m4name="<%=zSHCO_LB_APPLY%>" htmlsafe="true"/>" href="javascript:executeSearch();"><img alt="<m4:label m4name="<%=zSHCO_LB_APPLY%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ace.jsp" %> /></a>
					<a title="<m4:label m4name="<%=zSHCO_LB_CANCEL%>" htmlsafe="true"/>" href="javascript:hideSearch();"><img alt="<m4:label m4name="<%=zSHCO_LB_CANCEL%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_cer.jsp" %> /></a>
			</td>
		</tr>
		<tr>
			<td align="center" class="fuentecampo">&nbsp;</td>
		</tr>
	</tbody>
	</table>
</div>