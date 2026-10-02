<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_tree_buttons.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


		<!-- LA TOOLBAR -->
		<table border="0" width="100" cellspacing="0">
	<tr class="boton">
		<td class="fuentecampo">
			<a title="<m4:label m4name="<%=zSHCO_LB_FILTER%>" htmlsafe="true"/>" href="javascript:showFilter();" tabindex="7"><img alt="<m4:label m4name="<%=zSHCO_LB_FILTER%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_filter.jsp" %> /></a>
		</td>
		<td class="fuentecampo">
			<a title="<m4:label m4name="<%=zSHCO_LB_SEARCH%>" htmlsafe="true"/>" href="javascript:showSearch();" tabindex="8"><img alt="<m4:label m4name="<%=zSHCO_LB_SEARCH%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_search.jsp" %> /></a>
		</td>
		<td class="fuentecampo">
			<a title="<m4:label m4name="<%=zSHCO_LB_REFRESH%>" htmlsafe="true"/>" href="JavaScript:executeRefresh('<%=zAction%>');" tabindex="9"><img alt="<m4:label m4name="<%=zSHCO_LB_REFRESH%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_reload.jsp" %> /></a>
		</td>																		
		<td class="fuentecampo" id="divImgTreeDetails" style="display:""">
			<a title="<m4:label m4name="<%=zSHCO_LB_SHOWHIDEINFO%>" htmlsafe="true"/>" href="JavaScript:showHide('divTreeDetails');" tabindex="11"><img alt="<m4:label m4name="<%=zSHCO_LB_SHOWHIDEINFO%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_hide_details.jsp" %> /></a>
		</td>																		
	</tr>	
</table>
