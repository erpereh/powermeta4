<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_xml_svr_printers.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ page import="com.meta4.validate.XMLValidate"
%><%
// Response Headers
response.setHeader("Cache-Control", "max-age=3600,public");

XMLValidate valobject = new XMLValidate();

valobject.setM4Object("SHCO_M4THROW_MT_SVR_PRINTERS");
valobject.setNodeData("SHCO_TH_MT_SVR_PRINTERS");
valobject.setNodeRoot("SHCO_GN_ROOT");

valobject.setInputFields(new String[]{"ID_PRINTER"});
valobject.setInputTypes(new String[]{"4"});
valobject.setOutputFields(new String[]{"N_PRINTER","OUTPUT_FORMAT_NOT_ALLOWED","DEFAULT_DVC"});

valobject.process(request, response);
%>
