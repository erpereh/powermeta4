<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_htmlfilter_name.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>
<html>
<head >
<title></title>
<%@ include file="../../shco_g0/shco_gen_bag.jsp" %><%@ include file="../../shco_g0/shco_gen_css.jsp" %><%@ include file="../../shco_g0/shco_gen_css.jsp" %><%@ include file="../../shco_g0/shco_gen_normal_js.jsp" %>
<%@ include file="../../shco_g0/shco_gen_tec_include.jspf" %>
<%@ include file="../../shco_g0/shco_gen_label_val.jsp" %>

<% String zNSentence = "N_SENTENCE";
   String zhelp = "SHCO_GEN_HTMLFILTER_NAME.htm";
   String zvalue="";
%>

<%-- [unicode] --%><%@ include file="../../shco_g0/shco_gen_m4val_js.jsp" %>
<script type="text/javascript" language="Javascript1.5">

function val(){
	var sfunciones = "m4valinput('_alfanum_oblig','NombreFormulario','<%=zNSentence%>',1, _htmlFilter_8)";
	var verr=m4valform(sfunciones);
	if (verr==1){
	   m4returnvalues(new Array(m4valor('NombreFormulario','<%=zNSentence%>','','get')));
	}
	
}	

</script>
</head>
<body >

<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="2" width="56px"><img alt="<%=zSHCOLBCAB_val%>" <%@ include file="../../files_gif/ic_cabec.jsp" %> /></td><td colspan="3" class="title">&nbsp;<%=Tran_shco_g0.getProperty("HtmlFilter.lbSavePredFilter")%></td><td colspan="5" class="value">&nbsp;<%=zvalue%></td>
<td rowspan="2">
<%@ include file="../../shco_g0/shco_gen_help.jsp" %>
</td></tr><tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>
<form action="" method="post" name="NombreFormulario" id="NombreFormulario">
<table	class="form" width="100%" cellspacing="2" border="2">
	<thead><tr class="titulo"><th colspan="2">&nbsp; <%=Tran_shco_g0.getProperty("HtmlFilter.lbSetFilterName")%>&nbsp;</th></tr>
	</thead>
	<tbody>
	<tr><td class="campo">&nbsp;*&nbsp;<%=Tran_shco_g0.getProperty("HtmlFilter.lbName")%>:&nbsp;</td>
		<td class="valor"><input tabindex="1" class="form" type="text" id="<%=zNSentence%>" name="<%=zNSentence%>" size="50" maxlength="50" title="<%=zSHCOLBEDIT_val%> <%=Tran_shco_g0.getProperty("HtmlFilter.lbName")%>" value="" />&nbsp;
		<input type="text" id="hidden1" name="hidden1" style = "display:none" value="avoid_return_reload"></td>
	</tr>			
	</tbody>
</table>
<table width="100%" cellspacing="2" >
    <tr><td align="center">
			<a title="<%=Tran_shco_g0.getProperty("Button.Ok")%>" href="javascript:val()" tabindex="2"><img alt="<%=Tran_shco_g0.getProperty("Button.Ok")%>"  <%@ include file="../../files_gif/ic_ace.jsp" %> /></a>
			<a title= "<%=Tran_shco_g0.getProperty("Button.Close")%>" href="javascript:window.close();" tabindex="3"><img alt="<%=Tran_shco_g0.getProperty("Button.Cancel")%>" <%@include file="../../files_gif/ic_cer.jsp" %>  /></a>
	</td></tr>
</table>
</form>
<script type="text/javascript" language="Javascript1.5">
  m4settitle('<%=Tran_shco_g0.getProperty("HtmlFilter.lbSavePredFilter")%>');
  m4tabfocus('NombreFormulario',1);
</script>
</body>
</html>
