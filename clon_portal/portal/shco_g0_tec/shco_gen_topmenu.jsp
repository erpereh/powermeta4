<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_topmenu.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%String zbarbot = (String) request.getAttribute("zBARBOT");
String zcarril = (String) request.getAttribute("zCARRIL");
String zcssuser = (String) request.getAttribute("zCSSUSER");

// java.util.Properties Tran_shco_g0_tec   = (java.util.Properties) request.getAttribute("TRAN_SHCO_G0");	
com.meta4.redirect.M4PropertiesRedirect Tran_shco_g0_tec   = (com.meta4.redirect.M4PropertiesRedirect) request.getAttribute("TRAN_SHCO_G0");
%>
<td align="right">
	<%if ((zcarril==null)||(zcarril.equals(""))){%>			
		 <img <%@ include file="../files_gif/ic_lis_des.jsp" %> alt="<%=Tran_shco_g0_tec.getProperty("Literal.Filter")%>" />
	<%}else{%>
		 <a href="<%=zcarril%>"><img <%@ include file="../files_gif/ic_lis.jsp" %> alt="<%=Tran_shco_g0_tec.getProperty("Literal.Filter")%>" /></a>
	<%}%>	
    <a href="/servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp"><img <%@ include file="../files_gif/ic_executed_items.jsp" %> alt="<%=Tran_shco_g0_tec.getProperty("Literal.Inform")%>" /></a>
</td>

		
