<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: include_mobile.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ page import="com.meta4.request.*"%>
<%  String prod = M4ProductByThreadUpdater.getProductIDFromRequest(request);
    if (prod != null && prod.equals("mobile"))
    {%>	
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1" />	
			<meta content="yes" name="apple-mobile-web-app-capable" />
			<link rel="apple-touch-icon" href="/mobile/icons/iconHome.png"/>						
			<link rel="stylesheet" href="/mobile/css/mobile.generic.css" />
			<script src="/library/jquery.js"></script>			
			<script src="/library/jquery.mobile.js"></script>							
			<script type="text/javascript">
				jQuery.mobile.autoInitializePage = false;
				jQuery.noConflict();	  
			</script>			
			<script type="text/javascript" src="/mobile/js/meta4.mobile.js"></script>			
			<script type="text/javascript" src="/mobile/js/meta4.mobile.login.js"></script>			
<%}%>