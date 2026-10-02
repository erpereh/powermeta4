<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: htmlfilter.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ page import="java.util.Properties" %>
<%@ taglib uri="M4Tags" prefix="m4" %>

<%
	response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
	response.setHeader("Pragma","no-cache"); //HTTP 1.0
	response.setDateHeader ("Expires", 0); //prevents caching at the proxy server

        String zsubsesion = getStringValue(request.getParameter("zsubsesion"));
        if (zsubsesion == null){
           zsubsesion= "tchtmlfilter";
        } 
%>


<%
	Properties Tran = new Properties();
	Tran.setProperty("Html.Title", "HTML Filter");
	Tran.setProperty("Html.Header", "Advanced Criteria");
	
	Tran.setProperty("Detail.Id", "Condition");	
	Tran.setProperty("Detail.Description", "Description");	

	Tran.setProperty("Button.Ok", "OK");
	Tran.setProperty("Button.Cancel", "Cancel");
	Tran.setProperty("Button.SetDetail", "Send");
	Tran.setProperty("Button.Delete", "Delete");



	Tran.setProperty("lbl.Field", "Table/Field");
	Tran.setProperty("lbl.Value", "Value");
	Tran.setProperty("lbl.LogicOperator", "and/or");
	Tran.setProperty("lbl.OpenBrackets", "Open Brackets:");
	Tran.setProperty("lbl.CloseBrackets", "Close Brackets:");
	Tran.setProperty("lbl.ExistRecord", "At least one record that matches");
	Tran.setProperty("lbl.AllRecords", "All records that match");
	

    Tran.setProperty("Msg.WrongSyntax", "Syntax error. Check the statement.");
    Tran.setProperty("Msg.IdDetailMissing", "Invalid detail. Set the ID of the detail.");  
    Tran.setProperty("Msg.LogOpMissing", "Invalid detail. Select logic operator.");
    Tran.setProperty("Msg.TableMissing", "Invalid detail. Select table."); 
    Tran.setProperty("Msg.FieldMissing", "Invalid detail. Select field."); 
    Tran.setProperty("Msg.ValueMissing", "Invalid detail. Enter the value.");    




            
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<%@ include file="../htmlfilterpage.jsp" %>
<m4:endpage/>
