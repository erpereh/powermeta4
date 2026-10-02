<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_xml_table_filter_pred.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@   page import="com.meta4.validate.XMLValidate" 
%><%
    // Response Headers...
    //response.setDateHeader("Expires", -1);
    response.setHeader("Cache-Control", "max-age=3600,public");

    XMLValidate valobject = new XMLValidate();


    valobject.setM4Object("SHCO_GN_MT_TABLE_FILTER");
    valobject.setNodeData("SHCO_GN_MT_TABLE_FILTER");
    valobject.setNodeRoot("SHCO_GN_ROOT");

    valobject.setInputFields(new String[]{

"ID_SENTENCE"
    });
    valobject.setInputTypes(new String[]{

"4"
    }); // “4” cadenas, “10” fechas y “11” números
    valobject.setOutputFields(new String[]{

"ID_TABLE_BASE"
, 
"ID_GROUP_OBJECTS"
    });

    valobject.process(request, response);    
%>









