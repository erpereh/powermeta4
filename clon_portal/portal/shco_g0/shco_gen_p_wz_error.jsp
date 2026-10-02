<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_p_wz_error.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
String zerror2="";
String zshco_TEXT="";
String sLabelBack = "";
String zDynFilter = request.getParameter("zDynFilter");
if (zDynFilter == null || zDynFilter.equals("")){zDynFilter="0";}
try {	
	M4Operations m = new M4Operations(request);
	zerror2 = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG2");
	zshco_TEXT = m.getItem(znodocom,zm4object,znodocom,"","SHCO_TEXT");
	sLabelBack = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(m.getLabel("SHCO_GN_LABEL", zm4object, "SHCO_GN_LABEL", "SHCO_LB_BACK")); 
}catch(Exception e) {}	
if (zerror2.equals("1")) {
    try {
        M4Operations m = new M4Operations(request);
        m.initTask(zsubsesion);
        m.beginJob();
        m.createData(zm4object, znodocom, null);
     
        m.setItem(zm4object, znodocom, "0", "SHCO_ACTIVE_DEBUG2", "0");
        m.endJob();
    } catch(Exception e) {
	 
    }
%>
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