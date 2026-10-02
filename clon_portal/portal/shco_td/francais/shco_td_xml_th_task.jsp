<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_xml_th_task.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="com.meta4.validate.XMLValidate"
%><%
// Response Headers
response.setHeader("Cache-Control", "max-age=3600,public");

XMLValidate valobject = new XMLValidate();

valobject.setM4Object("SHCO_TD_MT_TH_TASK");
valobject.setNodeData("SHCO_TD_MT_TH_TASK");
valobject.setNodeRoot("SHCO_GN_ROOT");

valobject.setInputFields(new String[]{"ID_BP"});
valobject.setInputTypes(new String[]{"4"});
valobject.setOutputFields(new String[]{"N_BP"});

valobject.process(request, response);
%>
