<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_p_wz_btt.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<% if (zRistError==0) { %>

<%
/* NO MODIFICABLE */
buttslnk[1] = links[zIndexWizard];
buttload[1] = loadtype[zIndexWizard ];
// Primer paso
if (zIndexWizard == 0 )	{
	if (zIndexWizard == (countStep -1)) {
		buttslnk[2] = links[0];
		buttload[2] = loadtype[0];		
	}else{
		buttslnk[2] = links[zIndexWizard + 1];
		buttload[2] = loadtype[zIndexWizard + 1];
	}
}
// Ultimo paso
else if (zIndexWizard == (countStep -1)) {
		buttslnk[0] = links[zIndexWizard - 1];
		buttload[0] = loadtype[zIndexWizard - 1];

		buttslnk[2] = links[0];
		buttload[2] = loadtype[0];
// Paso intermedio
} else { 
	buttslnk[0]= links[zIndexWizard - 1];
	buttload[0] = loadtype[zIndexWizard - 1];		

	buttslnk[2]= links[zIndexWizard + 1];
	buttload[2] = loadtype[zIndexWizard + 1];		
}
%>
<script type="text/javascript" language="Javascript1.5">
var ozIndexWizard = m4parseInt('<%=zIndexWizard%>'); 
var opath = '<%=path%>';
var obuttload=new Array;
var obuttslnk=new Array;
obuttload[0]='<%=buttload[0]%>'; 
obuttload[1]='<%=buttload[1]%>';
obuttload[2]='<%=buttload[2]%>';
obuttslnk[0]='<%=buttslnk[0]%>';
obuttslnk[1]='<%=buttslnk[1]%>'; 
obuttslnk[2]='<%=buttslnk[2]%>'; 
</script>
<table width="100%">
<tr><td align="center" colspan="<%=zCol%>">
<%if (zIndexWizard == 0 )	{%>
<a title="<m4:label m4name="<%=zSHCOLBBACKAPP%>" htmlsafe="true"/>" > <img alt="<m4:label m4name="<%=zSHCOLBBACKAPP%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKAPP%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ret_ins_dis_tmp.jsp" %> /></a>&nbsp;
<%}else{%>
<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" href="javascript:m4wzins(0);"><img alt="<m4:label m4name="<%=zSHCOLBPREV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ret_ins_tmp.jsp" %> /></a>&nbsp;			
<%}%>
<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBAPP%>" htmlsafe="true"/>" href="javascript:m4wzins(1);"><img <%@ include file="../files_gif/ic_ins_tmp.jsp" %> alt="<m4:label m4name="<%=zSHCOLBAPP%>" htmlsafe="true"/>" ></img></a>&nbsp;
<%if (zIndexWizard == (countStep -1)) { %>	
<a title="<m4:label m4name="<%=zSHCOLBNEXTAPP%>" htmlsafe="true"/>" >	<img alt="<m4:label m4name="<%=zSHCOLBNEXTAPP%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTAPP%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ava_ins_dis_tmp.jsp" %> /></a>&nbsp;
<%}else{%>
<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBNEXTAPP%>" htmlsafe="true"/>" href="javascript:m4wzins(2);"><img alt="<m4:label m4name="<%=zSHCOLBNEXTAPP%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTAPP%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava_ins_tmp.jsp" %> /></a>&nbsp;
<%}%>
</td></tr>
</table>
<%}%>