<%-- [=====================================================]   
             
	@(#)FileVersion: 814.002.013
	@(#)FileDescription: Advanced login form   
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2017
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP4
	@(#)InternalName: tc_login.jsp     
	@(#)Date: 07/11/2001      

[=====================================================] --%>
<%--  
		First we read from the request the parameter M4URL, that contains the URL /servlet/CheckSecurity
		the user is coming from. This parameter will be passed to the login servlet, so that the portal
		page can be conditionally evaluated. There are sections in the portal page which may have to be
		mandatory to load after logon, and that is not taken into account if M4URL is just passed as _URL.
--%>
<%
	// before filters a parameter. after filters an attribute. 
	String stUrl2  = (String) request.getParameter("M4URL"); 	
	String stUrl = (String) request.getAttribute("M4URL"); 
	
%>
<%--  
		Then we log out the user to avoid problems. This is very recommended.
		Do not forget the M4Tags definition.
--%>
<%@ include file="/m4trans/shco_g0/0-shco_gen_taglib.jsp" %>
<m4:logout/>
<%--  
		Define portal URL.
--%>
<%
   String zurl = "/servlet/CheckSecurity/JSP/tctools/tc_portal.jsp"; 
%>
<%--  
		And finally we display the login form.
--%>
<html>
<head>

<%
// we read first style sheet for advanced login
String sStyleSheet= CheckConfig.getStyleSheet();
%>
<%@ include file="/m4trans/shco_g0/0-shco_gen_lang.jsp" %>
<%@ include file="/m4trans/tctools/0-tc_login_trans.jsp" %>


	<title><%=Tran_tc_login.getProperty("login.1")%></title>
	
	<link href="/style/<%=sStyleSheet%>" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.5" src="/library/m4gen.js"></script>
	<script type="text/javascript" language="Javascript1.5" src="/library/m4help.js"></script>	

	<style>
		#sociedad{
			display:none;
		}
		#see{
		display:inline;
		}
		#hide{
		display:none;
		}
	</style>
	
</head>
<body>

	  <div id="menu" style="position:absolute; left:1%; top:10px; width:99%; z-index:3">	  
	  <table width="100%"  cellspacing="0"border="0" >
	  	  <tr height="38">
		  	  <td width="42%" ><img alt="Meta4 Spain S.A. &#169; 2002 " <%@ include file="/m4trans/files_gif/0-ic_meta4.jsp" %>/></td>
			  <td width="32%" class="mblue" valign="top">&nbsp;</td>
			  <td width="26%" >&nbsp;</td>
		  </tr>
		  <tr height="100">
		  	  <td width="42%" align="center" valign="bottom" class="texto1">
              <a class="lang" tabindex="4" title="<%=Tran_tc_login.getProperty("login.2")%>" href="/tctools/english/tc_login.jsp">English</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a class="lang" tabindex="5" title="<%=Tran_tc_login.getProperty("login.3")%>" href="/tctools/francais/tc_login.jsp">Fran&ccedil;ais</a>&nbsp;&nbsp;&nbsp
              <a class="lang" tabindex="6" title="<%=Tran_tc_login.getProperty("login.4")%>" href="/tctools/espanol/tc_login.jsp">Espa&ntilde;ol</a>&nbsp;&nbsp;&nbsp;
              <a class="lang" tabindex="7" title="<%=Tran_tc_login.getProperty("login.15")%>" href="/tctools/portugues/tc_login.jsp">Portugu&ecirc;s</a>&nbsp;&nbsp;&nbsp;
              <!-- this is only for testing 
              <a class="lang" tabindex="8" title="<%=Tran_tc_login.getProperty("login.19")%>" href="/tctools/deutsch/tc_login.jsp">Deutsch</a>&nbsp;&nbsp;&nbsp;
              <a class="lang" tabindex="9" title="<%=Tran_tc_login.getProperty("login.20")%>" href="/tctools/polski/tc_login.jsp">Polski</a>
              <a class="lang" tabindex="10" title="<%=Tran_tc_login.getProperty("login.21")%>" href="/tctools/italiano/tc_login.jsp">Italiano</a>
              -->              
              </td>
			  <td width="32%" valign="bottom" class="dis">
			  	   <a class="dis" id="AdvanceLink" name="AdvanceLink" title="<%=Tran_tc_login.getProperty("login.ToolTipGoAdvance")%>" href="javascript:showHideLayer('ADVANCED');"> <%=Tran_tc_login.getProperty("login.5")%></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <a class="dis" id="Help" name="Help" title="<%=Tran_tc_login.getProperty("login.Help")%>" href="javascript:m4help('<%=zLangFolder%>','help_tec');"> <%=Tran_tc_login.getProperty("login.Help")%></a>
			  </td>
			  <td width="26%">&nbsp;</td>
		  </tr>
		  <tr height="279">
		  	    <td width = "42%" >&nbsp;</td>
				<td width = "32%" class="mblue">				
					<table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
						   <tr><td colspan="3" class="mwhite"> </td></tr>
						   <tr>
						   	   <td class="mblue" width="15%" >&nbsp;</td>
							   <td class="mblue" width="70%" >
							   	   <% request.setAttribute("LANG", zlang);
								      request.setAttribute ("URL", zurl);
									  if (stUrl!=null && !stUrl.equals("")) {
									  	 request.setAttribute ("M4URL", stUrl);
									  } 
                                      request.setAttribute ("_PROD", "TEC");
								   %>	
								   <jsp:include page="/m4trans/shco_g0/0-shco_gen_login_box.jsp" flush="false" />
							   </td>
							   <td class="mblue" width="15%" ></td>
						   </tr>
						   <tr><td  colspan="3"  class="linear"></td></tr>
					</table>						  		
				</td>
				<td width="26%">&nbsp;</td>
		  </tr>
		  <tr height="161">
		  	  <td width = "42%">&nbsp;</td>
			  <td width = "32%" class="mblue">&nbsp;</td>
			  <td width = "26%">&nbsp;</td>
		  </tr>
	  </table>	
	  </div>
</body>
</html>
