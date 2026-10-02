<%-- =========================================================
	@(#) FileVersion: 818.000.051
	@(#) FileDescription: shco_gen_topmenu.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2020
	@(#) ProductName: PeopleNet
========================================================= --%>

<div id="menu" style="position:absolute; left:1%; top:10px; width:99%; z-index:3">
<table border="0" cellspacing="0" class="head01" width="100%"><tr>
		<%String zappprod = M4Context.getSession(request).getProductID().toLowerCase();
		String zsLoginURL = (String)request.getAttribute("LOGIN_URL");
		if (zappprod.equals("")){
			 String zbarbot1 = zbarbot.substring(0,1);
			 String zbarbot2 = zbarbot.substring(1,2);
			 String zbarbot3 = zbarbot.substring(2,3);
			 String zbarbot4 = zbarbot.substring(3,4);	
			 %>
           <td align="right">
            <%if ((zcarril==null)||(zcarril.equals(""))){%>			
            	 <img <%@ include file="/m4trans/files_gif/0-ic_lis_des.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Filter")%>" />
            <%}else{%>
            	 <a href="<%=zcarril%>"><img <%@ include file="/m4trans/files_gif/0-ic_lis.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Filter")%>" /></a>
            <%}%>    
		<%if (zNavrc.equals("0")){%>
            <%if (zbarbot1.equals("1")){%>
            	 <a href="/servlet/CheckSecurity/JSP/shco_se/shco_se_gen_cri_basic.jsp"><img <%@ include file="/m4trans/files_gif/0-ic_bus_all.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Search")%>" /></a>
            <%}else{%>
            	 <img <%@ include file="/m4trans/files_gif/0-ic_bus_all_des.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Search")%>" />
            <%}%>
            	<a href="/servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp"><img <%@ include file="/m4trans/files_gif/0-ic_executed_items.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Inform")%>" /></a>
            <%}%>
	
           </td>			 
		<%}else{
			  request.setAttribute("zBARBOT",zbarbot);
			  request.setAttribute("zCARRIL",zcarril);
        	  	  request.setAttribute("TRAN_SHCO_G0",Tran_shco_g0);
			  request.setAttribute("zCSSUSER",zcssuser);
			  request.setAttribute("NAV_RC",zNavrc);
		%>
		 <jsp:include page='<%=com.meta4.redirect.M4Customizer.checkTranslation(("/shco_g0_" + zappprod + "/shco_gen_topmenu.jsp" ), request, pageContext.getServletContext())%>' flush="false" />
		<%}%>
		<%if (zNavrc.equals("0")){%>
		<td valign="top" align="right">

			<a href="javascript:logout()"><img <%@ include file="/m4trans/files_gif/0-ic_des2.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Disconnect")%>" /></a>

		</td>
		<%}%>
	</tr>	
</table>
<table border="0" cellspacing="0" class="head02" width="100%"><tr><td id="pop">&nbsp;</td></tr></table>
<script type="text/javascript">
  function logout(){     location.href = "/shco_g0/shco_gen_logout.jsp?loginURL=" + escape("<%=zsLoginURL%>");
  }
</script>
<%if (zNavrc.equals("0")){%>
<%if (M4FileURIChecker.exists("/shco_g0_" + zappprod + "/shco_gen_menusup.jsp",pageContext)== false){%>
  <%@ include file="/m4trans/shco_g0/0-shco_menu.jsp"%>
<%}%>
<%}%>
</div>
