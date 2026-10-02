<%-- =========================================================
	@(#) FileVersion: 820.002.037
	@(#) FileDescription: shco_gen_topmenu.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2023
	@(#) ProductName: Peoplenet
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
            	 <img <%@ include file="../files_gif/ic_lis_des.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Filter")%>" />
            <%}else{%>
            	 <a href="<%=zcarril%>"><img <%@ include file="../files_gif/ic_lis.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Filter")%>" /></a>
            <%}%>    
		<%if (zNavrc.equals("0")){%>
            <%if (zbarbot1.equals("1")){%>
            	 <a href="/servlet/CheckSecurity/JSP/shco_se/shco_se_gen_cri_basic.jsp"><img <%@ include file="../files_gif/ic_bus_all.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Search")%>" /></a>
            <%}else{%>
            	 <img <%@ include file="../files_gif/ic_bus_all_des.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Search")%>" />
            <%}%>
            	<a href="/servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp"><img <%@ include file="../files_gif/ic_executed_items.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Inform")%>" /></a>
            <%}%>
	
           </td>			 
		<%}else{
			  request.setAttribute("zBARBOT",zbarbot);
			  request.setAttribute("zCARRIL",zcarril);
        	  	  request.setAttribute("TRAN_SHCO_G0",Tran_shco_g0);
			  request.setAttribute("zCSSUSER",zcssuser);
			  request.setAttribute("NAV_RC",zNavrc);
		%>
		 <jsp:include page='<%="/shco_g0_" + zappprod + "/shco_gen_topmenu.jsp" %>' flush="false" />
		<%}%>
		<%@ include file="../tctools/tc_last_connection.jsp" %> 
		<% if (showLastConnection.equals("1")){ %> 
		<td>	
			<p id="lastConnectionTime" class="disab"></p>
			<p id="currentConnectionTime" class="disab"></p>
		</td>
		<%}%>

		<%if (zNavrc.equals("0")){%>
		<td valign="top" align="right">
			<a href="javascript:logout()"><img <%@ include file="../files_gif/ic_des2.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Disconnect")%>" /></a>
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
  <%@ include file="shco_menu.jsp"%>
<%}%>
<%}%>
</div>
