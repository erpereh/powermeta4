<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_wz_btt.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<% if (zRistError==0) { %>


<table width="100%">
<tr><td align="center" colspan="<%=zCol%>">
<%

String zSHCOLBEXECUTE = zraizlabel + "SHCO_LB_EXECUTE";

/* NO MODIFICABLE */

// Gestión de los botones de navegación
String stdisabled  = "0";
String stenabled   = "1";

// Función definida en el menu WZ
String nullValue = "javascript:nullvalue();";
// Primer paso

if (zIndexWizard == 0 )	{
	
	buttsnav[0] = stdisabled; 

	if (zIndexWizard == (countStep -1)) {
		
		buttsnav[2] = stdisabled;
		buttslnk[2] = links[0];
		buttsalt[2] = titles[0];
		buttload[2] = loadtype[0];
			
	}else{
			
		buttsnav[2] = obligatory_step[zIndexWizard + 1];	
		buttslnk[2] = links[zIndexWizard + 1];
		buttsalt[2] = titles[zIndexWizard + 1];
		buttload[2] = loadtype[zIndexWizard + 1];		
	}
}
// Ultimo paso
else if (zIndexWizard == (countStep -1)) {
	
	if (zIndexWizard == 0) {
		buttsnav[0] = obligatory_step[zIndexWizard];	
		buttslnk[0] = links[zIndexWizard];
		buttsalt[0] = titles[zIndexWizard];
		buttload[0] = loadtype[zIndexWizard];
	}else{
		buttsnav[0] = obligatory_step[zIndexWizard - 1];	
		buttslnk[0] = links[zIndexWizard - 1];
		buttsalt[0] = titles[zIndexWizard - 1];
		buttload[0] = loadtype[zIndexWizard - 1];
	}
	
	buttsnav[2] = stdisabled;
	buttslnk[2] = links[0];
	buttsalt[2] = titles[0];
	buttload[2] = loadtype[0];
		
// Paso intermedio
} else { 
	
		buttsnav[0]= obligatory_step[zIndexWizard - 1];
		buttslnk[0]= links[zIndexWizard - 1];
		buttsalt[0]= titles[zIndexWizard - 1];
		buttload[0] = loadtype[zIndexWizard - 1];
						
		buttsnav[2]= obligatory_step[zIndexWizard + 1];
		buttslnk[2]= links[zIndexWizard + 1];
		buttsalt[2]= titles[zIndexWizard + 1];
		buttload[2] = loadtype[zIndexWizard + 1];
		
		
}
	buttsnav[1] = obligatory_step[zIndexWizard ];	
	buttslnk[1] = links[zIndexWizard];
	buttsalt[1] = titles[zIndexWizard ];
	buttload[1] = loadtype[zIndexWizard ];

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
<%

/* Botones de navegación */
//Primer paso
if (zIndexWizard == 0 )	{%>	
   <a title="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" >	<img alt="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ret_dis.jsp" %> /></a>&nbsp;
   <a title="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" > <img alt="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ret_ins_dis_tmp.jsp" %> /></a>&nbsp;

<%}else{
	if (buttsnav[0]!=stenabled && !(buttsnav[0].equals(stenabled)) && zIndexWizard!=0) { %>		
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" href="javascript:m4navwz(0);"><img alt="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ret.jsp" %> /></a>&nbsp;
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" href="javascript:m4wzins(0);"><img alt="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ret_ins_tmp.jsp" %> /></a>&nbsp;				
	<%} else {%>		
		<a title="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" >	<img alt="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKNAVTEM%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ret_dis.jsp" %> /></a>&nbsp;
   	    <a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" href="javascript:m4wzins(0);"><img alt="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKINSTEM%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ret_ins_tmp.jsp" %> /></a>&nbsp;

	<%}
}// Accion%>

<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBEXECUTE%>" htmlsafe="true"/>" href="javascript:m4valor('NombreFormulario','<%=zM4ThrowExecute%>','1','set');m4wzins(1);"><img <%@ include file="../files_gif/ic_report.jsp" %> alt="<m4:label m4name="<%=zSHCOLBEXECUTE%>" htmlsafe="true"/>" ></img></a>&nbsp;

<% if (zIndexWizard == (countStep -1)) { %>
    <a title="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" ><img alt="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava_ins_dis_tmp.jsp" %> /></a>&nbsp;	
	<a title="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM%>" htmlsafe="true"/>" > <img alt="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ava_dis.jsp" %> /></a>&nbsp;
<% } else { %>
	<% if (buttsnav[2]!=stenabled && !(buttsnav[2].equals(stenabled)) && zIndexWizard != (countStep -1)) { %> 
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" href="javascript:m4wzins(2);"><img alt="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava_ins_tmp.jsp" %> /></a>&nbsp;
	   	<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM%>" htmlsafe="true"/>" href="javascript:m4navwz(2);"><img alt="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava.jsp" %> /></a>&nbsp;
	<% } else { %>
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" href="javascript:m4wzins(2);"><img alt="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTINSTEM%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava.jsp" %> /></a>&nbsp;
		<a tabindex="<%=(zTab+1)%>"  ><img alt="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTNAVTEM %>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava_dis.jsp" %> /></a>&nbsp;
	<% } %> 
<%} %> 	
		
</td></tr>
</table>

<%}%>