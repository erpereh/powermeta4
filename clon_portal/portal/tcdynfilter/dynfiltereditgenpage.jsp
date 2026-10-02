<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynfiltereditgenpage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="java.util.Properties" %>
<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ include file="dynfiltereditgenjob.jsp" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
</head>

<body background="/images/fondo.gif">
<form name="frmcallfilter" id="frmcallfilter" action="" method="post" >
   <input type="hidden" id="zidoperation" name="zidoperation"  value="<%=zidoperation%>"/>
   <input type="hidden" id="zidsentence" name="zidsentence"  value="<%=zidsentence%>"/>
   <input type="hidden" id="zidescenario" name="zidescenario"  value="<%=zidescenario%>"/>
   <input type="hidden" id="zidtable" name="zidtable" value = "<%=zidtable%>" />
   <input type="hidden" id="zreturnpage" name="zreturnpage" value = "<%=zreturnpage%>" />
   <input type="hidden" id="zidrelationtype" name="zidrelationtype" value = "<%=zidrelationtype%>"/>
   <input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = "<%=zdynfilteralias%>" />
   <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
</form>
	
<form name="frmeditdynfilter" id="frmeditdynfilter" action="" method="post" >

<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center">
<tr>
	<td class = "fuentecabeceratabla"><%=Tran.getProperty("msg.ProcesandoDatos")%></td>
</tr>
<tr>
	<td class = "fuentecabeceratabla" ><br /><%=Tran.getProperty("msg.Espere")%></td>
</tr>
</table>
</form>
<!------------------------------------------------------------------>
<!-- Invocación directa al filtro indicándole la página a dónde ir-->
<!------------------------------------------------------------------>

<script type="text/javascript">{         
	with (document.forms.frmcallfilter) {
			action = '<%=zforwardpage%>';
			submit();                  
        }
     }
</script>	

</body>

</html>




	



