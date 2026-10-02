<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_cab.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="2" width="56px"><img alt="<m4:label m4name="<%=zSHCOLBCAB%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_cabec.jsp" %> /></td><td colspan="3" class="title">&nbsp;<m4:label m4name="<%=zSHCOLBTITLEROOT%>" htmlsafe="true"/></td><td colspan="5" class="value">&nbsp;<%=zvalue%></td>
<%if (zNavrc.equals("1")){%>
<td  class="title">
   <%if ((zcarril==null)||(zcarril.equals(""))){%>			
      	 <img <%@ include file="../files_gif/ic_lis_des.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Filter")%>" />
   <%}else{%>
       	 <a href="<%=zcarril%>"><img <%@ include file="../files_gif/ic_lis.jsp" %> alt="<%=Tran_shco_g0.getProperty("Literal.Filter")%>" /></a>
   <%}%>  
 </td>
 <%}%>   
<td rowspan="2">
<%@ include file="shco_gen_help.jsp" %>
</td></tr><%if (zNavrc.equals("0")){%><tr><td colspan="8" class="border">&nbsp;</td></tr> <%}%>
</table>
