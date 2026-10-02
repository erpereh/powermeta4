<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_wz_outputdef_config.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
//*******************************************************************************************************
// *MODIFICABLE 

String znodo1 = "SHCO_M4THROW_WZ_OUTPUT_OPTIONS";
String znodo2 = "SHCO_M4THROW_WZ_DEVICE_OPTIONS";
String znodo3 = "SHCO_M4THROW_WZ_ADV_OPTIONS";


String zoutputdef1 = zm4object + "!" + znodo1 + "[*]";   
String zoutputdef2 = zm4object + "!" + znodo2 + "[0]";
String zoutputdef3 = zm4object + "!" + znodo3 + "[0]";

String zmove1 = znodo1 + ":" + znodo1 + "[0]";
String zmove2 = znodo2 + ":" + znodo2 + "[0]";
String zmove3 = znodo3 + ":" + znodo3 + "[0]";


switch(zLoadTypeStep)
{
case 1: zoutputdef1 = zm4object + "!" + znodo1 + "[*]";
		zmove1 = znodo1 + ":" + znodo1 + "[0]";break;

case 2: zoutputdef2 = zm4object + "!" + znodo2 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
		zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";break;

case 3: zoutputdef3 = zm4object + "!" + znodo3 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
		zmove3 = znodo3 + ":" + znodo3 + "[" + zregistroinicial + "]";break;

}
//*******************************************************************************************************

	

%>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolabel%>"><m4:param name="m4name0" value="<%=zoutputdeflab%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmovelab%>"/></m4:move>

<%
int zcountr  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcountr = m.getCount(znodo1,zm4object,znodo1);
    
} catch(Exception e) {}
String zIdCrP="";
String zNmCrP="";
%>


