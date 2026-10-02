<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: htmlfilterservicepage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
	
	response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
	response.setHeader("Pragma","no-cache"); //HTTP 1.0
	response.setDateHeader ("Expires", 0); //prevents caching at the proxy server
	        
        String zreturnpage = getStringValue(request.getParameter("zreturnpage"));
       
%>



<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>		
	<link href="/style/tcreports_0.css" type="text/css" rel="stylesheet"/>
</head>


<body background="/images/fondo.gif">
	

<!-------------------------------------------------------------------------------------->        
<!-------- Formulario de Parametros de vuelta, a la pagina de donde ha sido llamada
<!-------------------------------------------------------------------------------------->

<form method="post" name="frmBackValues" action ='<%=zreturnpage%>' >	
	<input type="hidden" name="txtIdSentence" id="txtIdSentence" value=""/>
	<input type="hidden" name="txtLanguage" id="txtLanguaje" value=""/>
	<input type="hidden" name="txtApiSql"  id="txtApiSql" value=""/>
	<input type="hidden" name="txtIdOperation"  id="txtIdOperation" value="REMOVE"/>
	<input type="hidden" name="zdynfilteralias"  id="zdynfilteralias" value='<%=zdynfilteralias%>'/>
	<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
</form>

<script type="text/javascript">         
         
   {		               	 
	document.forms.frmBackValues.submit();              
   }

</script>	

</body>

</html>