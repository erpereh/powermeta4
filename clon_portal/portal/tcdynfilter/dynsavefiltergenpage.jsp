<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynsavefiltergenpage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="dynsavefiltergenjob.jsp" %>
<%@ page import="java.util.Properties" %>
<%@ taglib uri="M4Tags" prefix="m4" %>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>

</head>

<body >
	

<%--<form method="post" name="frmSavefilter" id=="frmSavefilter" action="/servlet/CheckSecurity/JSP/tcdynfilter/dynfilterlist.jsp" >--%>
<form method="post" name="frmSavefilter" id=="frmSavefilter" action="" >
   <input type="hidden" id="zbackcall" name="zbackcall" value = "BACK" />
   <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
</form>

<script language="JavaScript">         
	{			
        
        document.forms.frmSavefilter.action = '<%=zreturnpage%>' ;
	document.forms.frmSavefilter.submit();                  
        }

</script>	

</body>
</html>




	



