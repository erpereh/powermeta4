<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_cab_link.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<script  type="text/javascript" language="Javascript1.5">
function show(div){document.getElementById(div).style.visibility='visible';}
function hide(div){document.getElementById(div).style.visibility='hidden';}
function m4linktoPersonInfo(){
	var aarrayaux = new Array();
	var sPath = "/servlet/CheckSecurity/JSP/shco_g2_sse/shco_pa_person_f.jsp?STD_ID_PERSON=<%=zarrayparameters[0][1]%>";
	m4window('person_information', sPath, aarrayaux, 'NombreFormulario', 600, 400);
}
</script>
<%
String zheadtobeshown = "";
String zheadtobeshownonhire = "0";
if (zarrayparameters[0][1].equals("")){
	//We are hiring a new employee without being in the data base yet
	zheadtobeshownonhire = "1";	
	for (int i=2; i<zcabmumparameters; i++){
		if ((!zarrayparameters[i][1].equals(""))&&(zarrayparameters[i][2]=="1")){
			if (i==2){zheadtobeshown += zarrayparameters[i][1];
			}else{zheadtobeshown += "&nbsp-&nbsp;" + zarrayparameters[i][1];}
		}
	}
}else{
	for (int i=0; i<zcabmumparameters; i++){
		if ((!zarrayparameters[i][1].equals(""))&&(zarrayparameters[i][2]=="1")){
			if (i==0){zheadtobeshown += zarrayparameters[i][1];
			}else{zheadtobeshown += "&nbsp-&nbsp;" + zarrayparameters[i][1];}
		}
	}
}
%>
<table cellpadding="0" cellspacing="0" width="100%" class="cabec"><tr>
<td rowspan="2" width="56px"><img alt="<m4:label m4name="<%=zSHCOLBCAB%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_cabec.jsp" %> /></td>
<td colspan="3" class="title">&nbsp;<m4:label m4name="<%=zSHCOLBTITLEROOT%>" htmlsafe="true"/></td>
<td colspan="5" class="value">&nbsp;
<%if (zheadtobeshownonhire=="0"){%>
<a href="javascript:m4linktoPersonInfo();" onmouseout="hide('addicional_info');" onmouseover="show('addicional_info');"><b><%=zheadtobeshown%></b></a></td>		
<%}else{%>
<a href="javascript:m4nothing();"onmouseout="hide('addicional_info');" onmouseover="show('addicional_info');"><b><%=zheadtobeshown%></b></a></td>		
<%}%>

<td rowspan="2"><%@ include file="shco_gen_help.jsp" %></td>
</tr><tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>
<div id="addicional_info" name="addicional_info" style="position:absolute;visibility:hidden;left:35%;top:8%; z-index: 1;">
<table class ="cabectt" width="50%">
<tr><th colspan="2" class="titlett"><m4:label m4name="<%=zSHCOLBCABECINFO%>" htmlsafe="true"/></th></tr>
<%for (int i=0; i<zcabmumparameters; i++){
if (!zarrayparameters[i][1].equals("")){%>
<tr><td class="tdtt"><%=zarrayparameters[i][0]%></td><td class="tdtt2"><%=zarrayparameters[i][1]%></td></tr>
<%}}%>
</table>
</div>
