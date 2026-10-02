<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wz_outputdef_personal_workitems.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
//*******************************************************************************************************
// *MODIFICABLE 

String znodo1 = "SHCO_TD_WZ_REMIND_WORKITEM";
String znodo2 = "SHCO_TD_WZ_WKITEM_PARAMS";



String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";   
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[0]";


String zmove1 = znodo1 + ":" + znodo1 + "[0]";
String zmove2 = znodo2 + ":" + znodo2 + "[0]";



switch(zLoadTypeStep)
{
case 1: zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
		zmove1 = znodo1 + ":" + znodo1 + "[0]";break;

case 2: zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
		zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";break;

}
//*******************************************************************************************************

	

%>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>" ><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolabel%>" ><m4:param name="m4name0" value="<%=zoutputdeflab%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelab%>"/></m4:move>
<%
int zcountr  = 0;
try {
    M4Operations m = new M4Operations(request);
    switch(zLoadTypeStep){
    case 1:   zcountr = m.getCount(znodo1,zsubsesion,znodo1);
    case 2:   zcountr = m.getCount(znodo2,zsubsesion,znodo2);
    }
    
} catch(Exception e) {}
%>



