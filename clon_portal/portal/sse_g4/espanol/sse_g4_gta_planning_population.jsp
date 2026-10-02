<%///////////////////////////////////////PLANNING GTA : Population Datas///////////////////////////////////////%>
<%
String rowCss = "";
String popRowCss = "";
String popIdPers = "";
String popOrdPeriod = "";
String idPop = "";
String popLastName = "";
String popFirstName = "";
Map<String, String> popMap = new HashMap<String, String>();
%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv16).intValue()-1).toString()%>">
<%
try{
	M4Operations t=new M4Operations(request);
	popIdPers = t.getItem(znodo16,zmeta4object,znodo16,m4lix,"STD_ID_HR");
	popOrdPeriod = String.valueOf((int)Float.parseFloat(t.getItem(znodo16,zmeta4object,znodo16,m4lix,"STD_OR_HR_PERIOD")));
	idPop = popIdPers+"|"+popOrdPeriod;
	popLastName = t.getItem(znodo16,zmeta4object,znodo16,m4lix,"STD_N_FAMILY_NAME_1");
	popFirstName = t.getItem(znodo16,zmeta4object,znodo16,m4lix,"STD_N_FIRST_NAME");
	//CurrentIdLineCSSManagement
	if(idSession.equals(popIdPers)){
		popRowCss = "noColorRowCurrent";
	}else{
		popRowCss = "noColorRow";
	}
	//Fill HashTable
	popMap.put(idPop+"_FirstName",popFirstName);
	popMap.put(idPop+"_LastName",popLastName);
	popMap.put(idPop+"_RowCss",popRowCss);
	
	
}catch(Exception e){}
%>
<!--SavePersonInformationDatas-->
<script type="text/javascript">
	peopleArray["<%=idPop%>"]=new peopleData("<%=popIdPers%>","<%=popOrdPeriod%>","<%=popFirstName%>","<%=popLastName%>","<%=popRowCss%>");
</script>
</m4:loop>