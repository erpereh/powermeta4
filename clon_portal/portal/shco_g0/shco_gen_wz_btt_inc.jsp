<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_btt_inc.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>

<%
String buttsnav[] = new String[3];   
buttsnav = (String[])request.getAttribute("buttsnavREQ");
String buttslnk[] = new String[3];   
buttslnk = (String[])request.getAttribute("buttslnkREQ");
String buttsalt[] = new String[3]; 
buttsalt = (String[])request.getAttribute("buttsaltREQ");
String buttload[] = new String[3];   
buttload = (String[])request.getAttribute("buttloadREQ");
int countStep = Integer.parseInt((String)request.getAttribute("countStepREQ"));
String obligatory_step[] = new String[countStep];
obligatory_step = (String[])request.getAttribute("obligatory_stepREQ");
String links[] = new String[countStep];
links = (String[])request.getAttribute("linksREQ");
String titles[] = new String[countStep];
titles = (String[])request.getAttribute("titlesREQ");
String loadtype[] = new String[countStep];
loadtype = (String[])request.getAttribute("loadtypeREQ");
String path = (String)request.getAttribute("pathREQ");
int tmp = Integer.parseInt((String)request.getAttribute("tmpREQ"));
int zCol = Integer.parseInt((String)request.getAttribute("zColREQ"));
int zRistError = Integer.parseInt((String)request.getAttribute("zRistErrorREQ"));
String zcssuser = (String)request.getAttribute("zcssuserREQ");
int zIndexWizard = Integer.parseInt((String)request.getAttribute("zIndexWizardREQ"));
int zTab = Integer.parseInt((String)request.getAttribute("zTabREQ"));

String zm4object = (String)request.getAttribute("zm4objectREQ");
String znodolabel = "SHCO_GN_LABEL";
String zraizlabel =  znodolabel + ":" + zm4object  + "!" + znodolabel + ".";
String zSHCOLBBACKINS = zraizlabel + "SHCO_LB_BACK_INS";
String zSHCOLBBACKINSTEM = zraizlabel + "SHCO_LB_BACK_INS_TEM";
String zSHCOLBBACKNAV = zraizlabel + "SHCO_LB_BACK_NAV";
String zSHCOLBBACKNAVTEM = zraizlabel + "SHCO_LB_BACK_NAV_TEM";
String zSHCOLBINSERT = zraizlabel + "SHCO_LB_INSERT";
String zSHCOLBINSTEM = zraizlabel + "SHCO_LB_INS_TEM";
String zSHCOLBNEXTINS = zraizlabel + "SHCO_LB_NEXT_INS";
String zSHCOLBNEXTINSTEM = zraizlabel + "SHCO_LB_NEXT_INS_TEM";
String zSHCOLBNEXTNAV = zraizlabel + "SHCO_LB_NEXT_NAV";
String zSHCOLBNEXTNAVTEM = zraizlabel + "SHCO_LB_NEXT_NAV_TEM";
String zSHCOLBPREV = zraizlabel + "SHCO_LB_PREV";


%>

<% if (zRistError==0) { %>


<table width="100%">
<tr><td align="center" colspan="<%=zCol%>">
<%

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
		buttsnav[1] = obligatory_step[zIndexWizard];	
		buttslnk[1] = links[zIndexWizard];
		buttsalt[1] = titles[zIndexWizard];
		buttload[1] = loadtype[zIndexWizard];
		
	buttsnav[2] = stdisabled;
	buttslnk[2] = links[0];
	buttsalt[2] = titles[0];
	buttload[2] = loadtype[0];
		
	}else{
		
		buttsnav[1] = obligatory_step[zIndexWizard ];	
		buttslnk[1] = links[zIndexWizard];
		buttsalt[1] = titles[zIndexWizard ];
		buttload[1] = loadtype[zIndexWizard ];
		
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
	
	
	buttsnav[1] = obligatory_step[zIndexWizard ];	
	buttslnk[1] = links[zIndexWizard];
	buttsalt[1] = titles[zIndexWizard ];
	buttload[1] = loadtype[zIndexWizard ];
	
	// Proceso temporal
	if (tmp == 1) {
		// Boton de finalización del proceso habilitado
		buttsnav[1] = stenabled;
		buttslnk[1]= links[zIndexWizard];;
		buttsalt[1]= titles[zIndexWizard ];
		buttload[1]= loadtype[zIndexWizard ];			
	}

// Paso intermedio
} else { 
	
		buttsnav[0]= obligatory_step[zIndexWizard - 1];
		buttslnk[0]= links[zIndexWizard - 1];
		buttsalt[0]= titles[zIndexWizard - 1];
		buttload[0] = loadtype[zIndexWizard - 1];
		
		
		buttsnav[1] = obligatory_step[zIndexWizard ];	
		buttslnk[1] = links[zIndexWizard];
		buttsalt[1] = titles[zIndexWizard ];
		buttload[1] = loadtype[zIndexWizard ];
				
		buttsnav[2]= obligatory_step[zIndexWizard + 1];
		buttslnk[2]= links[zIndexWizard + 1];
		buttsalt[2]= titles[zIndexWizard + 1];
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
<%
/* Botones de navegación */
if (tmp == 0) {  // Temporalidad
// Anterior
   if (zIndexWizard == 0 )	{%>
   	<a title="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" >	<img alt="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ret_dis.jsp" %> /></a>&nbsp;
	<a title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" > <img alt="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ret_ins_dis.jsp" %> /></a>&nbsp;
	<%}else{
	if (buttsnav[0]!=stenabled && !(buttsnav[0].equals(stenabled)) && zIndexWizard!=0) { %>
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" href="javascript:m4navwz(0);"><img alt="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ret.jsp" %> /></a>&nbsp;
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" href="javascript:m4wzins(0);"><img alt="<m4:label m4name="<%=zSHCOLBPREV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ret_ins.jsp" %> /></a>&nbsp;			
	<%} else {%>
		<a title="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" >	<img alt="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKNAV%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ret_dis.jsp" %> /></a>&nbsp;
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" href="javascript:m4wzins(0);"><img alt="<m4:label m4name="<%=zSHCOLBPREV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBBACKINS%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ret_ins.jsp" %> /></a>&nbsp;
	<%}
}// Accion%>
<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" href="javascript:m4wzins(1);"><img <%@ include file="../files_gif/ic_save.jsp" %> alt="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" ></img></a>&nbsp;
<% //Siguiente
if (buttsnav[2] != stenabled && !(buttsnav[2].equals(stenabled))){   // Obligatoriedad
	if (zIndexWizard == (countStep -1)) { // Último paso%>	
	    <a title="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" >	<img alt="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ava_ins_dis.jsp" %> /></a>&nbsp;
		<a title="<m4:label m4name="<%=zSHCOLBNEXTNAV%>" htmlsafe="true"/>" > <img alt="<m4:label m4name="<%=zSHCOLBNEXTNAV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTNAV%>" htmlsafe="true"/>" 	<%@ include file="../files_gif/ic_ava_dis.jsp" %> /></a>&nbsp;
	<%}else{%>
		<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" href="javascript:m4wzins(2);"><img alt="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava_ins.jsp" %> /></a>&nbsp;
	    <a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBNEXTNAV%>" htmlsafe="true"/>" href="javascript:m4navwz(2);"><img alt="<m4:label m4name="<%=zSHCOLBNEXTNAV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTNAV%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava.jsp" %> /></a>&nbsp;
	<%}	
}else{ %>
	<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" href="javascript:m4wzins(2);"><img alt="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTINS%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava_ins.jsp" %> /></a>&nbsp;
	<a tabindex="<%=(zTab+1)%>"  ><img alt="<m4:label m4name="<%=zSHCOLBNEXTNAV%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBNEXTNAV %>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_ava_dis.jsp" %> /></a>&nbsp;
<% }

}else{
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

<a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBINSTEM%>" htmlsafe="true"/>" href="javascript:m4wzins(1);"><img <%@ include file="../files_gif/ic_ins_tmp.jsp" %> alt="<m4:label m4name="<%=zSHCOLBINSTEM%>" htmlsafe="true"/>" ></img></a>&nbsp;

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
 <% } %>		
</td></tr>
</table>

<%}%>