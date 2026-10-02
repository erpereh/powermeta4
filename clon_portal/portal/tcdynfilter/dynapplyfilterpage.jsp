<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynapplyfilterpage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="dynapplyfilterjob.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>	
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<meta http-equiv="Cache-Control" content="no-cache"/>
	<link href="/style/tcreports_0.css" type="text/css" rel="stylesheet"/>
</head>


<body background="/images/fondo.gif">
	
<script type="text/javascript">  
function callReturnPage(sIdPage,sDynFiltersInfo){
         with (document.forms.frmcallreturnpage){
             action = sIdPage;
	     zdynfiltersinfo.value = sDynFiltersInfo;	
   	     submit();  
         }    
   }
</script>

<form method="post" name="frmcallreturnpage" id=="frmcallreturnpage" action="" >
   <input type="hidden" id="zdynfiltersinfo" name="zdynfiltersinfo"  value=""/>
   <input type="hidden" id="zsubsesion" name="zsubsesion"  value="<%=zsubsesion%>"/>
   
</form>
	
<form method="post" name="frmApplyfilter" id=="frmApplyfilter" action="" >
   	<!-- Recoger la página de vuelta -->
        <m4:item outputdef="DynFilterAPiNode" item="PAR_RETURN_PAGE" m4varname="sParReturnPage"/>
        <m4:item outputdef="DynFilterAPiNode" item="DYN_INFO_HTML" m4varname="sDynFiltersInfo"/>
        <script language="JavaScript">	
            callReturnPage("<%=sParReturnPage%>","<%=sDynFiltersInfo%>");                 
        </script>	
</form>

</body>

</html>