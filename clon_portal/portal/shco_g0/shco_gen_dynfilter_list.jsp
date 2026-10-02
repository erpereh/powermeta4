<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_dynfilter_list.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<table width="100%" class="wizard">
<tr><td>
<table class="subwizard" width="100%" cellspacing="0" cellpadding="2">
<tr><td class="titulo" colspan="2">&nbsp;<m4:label m4name="<%=zSHCOLBALLFILTERS%>" htmlsafe="true"/></td></tr>
<tr><td class="subwizard"></td></tr>

<%int  zcountdynfilterlist  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcountdynfilterlist = m.getCount(znododynfilterlist,zm4oalias,znododynfilterlist);    
} catch(Exception e) {}
String	zcountdynfilterlistv = String.valueOf(zcountdynfilterlist);
String zregistroinicials = String.valueOf(0);
String zregistrofinals = String.valueOf( zcountdynfilterlist - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;
boolean bActiveNode = false;
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
 <%@include file="../shco_g0/shco_gen_loop.jsp"%> 
 <tr>
 	<m4:item m4name="<%=zlIdNodeItem%>" jsafe="true" htmlsafe="true" m4varname="zNodei"/>
	<m4:item m4name="<%=zlIdSentenceItem%>" jsafe="true" m4varname="zSentencei"/>
	<%if ((zSentencei != null) && !zSentencei.equals("") ){
	   g_zListOfSentenceInUse = g_zListOfSentenceInUse + "$$" + zSentencei + "$$";
	}%>
	<%bActiveNode = false;
	if (zidnode.equals("")){ 
       if (zposicion == 0) {bActiveNode = true;}
	 }else if (zidnode.equals(zNodei)){bActiveNode = true;}	   
	if (bActiveNode == true){%>   
	<script type="text/javascript">sLastNodeSelected ="td<%=zposicions%>";
	 setNodeInfo('<%=zNodei%>','<m4:item m4name="<%=zlNNodeItem%>" jsafe="true"/>',
	 '<m4:item m4name="<%=zlIdReadObjetItem%>" jsafe="true"/>',
	 '<m4:item m4name="<%=zlIdScenarioItem%>" jsafe="true"/>',
	 '<m4:item m4name="<%=zlFilterLangItem%>" jsafe="true"/>',
	 '<m4:item m4name="<%=zlIdSentenceItem%>" jsafe="true"/>',
	 '<m4:item m4name="<%= zlApiSqlItem%>" jsafe="true" />',
	 '<m4:item m4name="<%= zlListOfScenario%>" jsafe="true" />',
	 '<m4:item m4name="<%= zlNodeSubsessionItem%>" jsafe="true" />');
	</script>
    <td class="wzactivado" id ="td<%=zposicions%>">	
	<%}else{%>
	<td class="wzdesactivado" id ="td<%=zposicions%>">
	<%}%> 	
	&nbsp;<a title="" href="" onclick="javascript: if (sLastNodeSelected != 'td<%=zposicions%>') {
	 changenodeselection('<%=zposicions%>','<%=zNodei%>','<m4:item m4name="<%=zlNNodeItem%>" jsafe="true" htmlsafe="true"/>',
	 '<m4:item m4name="<%=zlIdReadObjetItem%>" jsafe="true" htmlsafe="true"/>',
	 '<m4:item m4name="<%=zlIdScenarioItem%>" jsafe="true" htmlsafe="true"/>',
	 '<m4:item m4name="<%=zlFilterLangItem%>" jsafe="true" htmlsafe="true"/>',
	 '<m4:item m4name="<%=zlIdSentenceItem%>" jsafe="true" htmlsafe="true"/>',
	 '<m4:item m4name="<%=zlApiSqlItem%>" jsafe="true" htmlsafe="true"/>',
	 '<m4:item m4name="<%=zlListOfScenario%>" jsafe="true" htmlsafe="true"/>',
     '<m4:item m4name="<%=zlNodeSubsessionItem%>" jsafe="true" />');}return false;"</a >
    <m4:item m4name="<%=zlNNodeItem%>" htmlsafe="true"/>	
  </td></tr>				  
</m4:loop>
</table>
</td></tr></table>



