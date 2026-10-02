<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_html_filter_name.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>
<html>
<head>
<title></title>
<%@ include file="../../shco_g0/shco_gen_bag.jsp" %><%@ include file="../../shco_g0/shco_gen_css.jsp" %><%@ include file="../../shco_g0/shco_gen_css.jsp" %><%@ include file="../../shco_g0/shco_gen_normal_js.jsp" %>

<% String zNSentence = "N_SENTENCE";%>
<%-- [unicode] --%><%@ include file="../../shco_g0/shco_gen_m4val_js.jsp" %>
<script type="text/javascript" language="Javascript1.5">

function val(){
	var sfunciones = "m4valinput('_alfanum_oblig',sForm,'<%=zIdServerPrinter%>',1,'<m4:label m4name="<%=zIdServerPrinterr%>" jsafe="true"/>')";
	var verr=m4valform(sfunciones);
	if (verr==1){
	   m4returnvalues(new Array(m4valor('NombreFormulario','<%=zNSentence%>','','get')));
	}	
}	

</script>
</head>
<body >
<h2><%=Tran_shco_g0.getProperty("HtmlFilter.lbSavePredFilter")%></h2>
<form action="" method="post" name="NombreFormulario" id="NombreFormulario">
<table class="form" width="100%" cellspacing="0" >
	<thead>
	   <tr><td>&nbsp; <%=Tran_shco_g0.getProperty("HtmlFilter.lbSetFilterName")%>&nbsp;</td></tr>
	</thead>
	<tbody>
	<tr><td>&nbsp;*&nbsp;<%=Tran_shco_g0.getProperty("HtmlFilter.lbName")%>:&nbsp;</td>
		<td><input tabindex="1" class="form" type="text" id="<%=zNSentence%>" name="<%=zNSentence%>" size="30" maxlength="50" title="<%=Tran_shco_g0.getProperty("HtmlFilter.lbName")%>" value="" />&nbsp;</td>
	</tr>
	<tr><td>&nbsp;</td></tr>
	<tr>
		<td colspan="3" align="center">
			<a title="<%=Tran_shco_g0.getProperty("Button.Ok")%>" href="javascript:val()" tabindex="2"><img alt="<%=Tran_shco_g0.getProperty("Button.Ok")%>"  <%@ include file="../../files_gif/ic_ace.jsp" %> /></a>
			<a title= "<%=Tran_shco_g0.getProperty("Button.Close")%>" href="javascript:window.close();" tabindex="3"><img alt="<%=Tran_shco_g0.getProperty("Button.Close")%>" <%@include file="../../files_gif/ic_cer.jsp" %>  /></a>
		</td>
	</tr>
	</tbody>
</table>
</form>
<script type="text/javascript" language="Javascript1.5">
  m4settitle('<%=Tran_shco_g0.getProperty("HtmlFilter.lbSavePredFilter")%>');
  m4tabfocus('1');
</script>
</body>
</html>
