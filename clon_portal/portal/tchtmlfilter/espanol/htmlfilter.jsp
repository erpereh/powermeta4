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
	Tran.setProperty("Html.Title", "Filtro HTML");
	Tran.setProperty("Html.Header", "Criterio Avanzado");
	
	Tran.setProperty("Detail.Id", "Detalle");	
	Tran.setProperty("Detail.Description", "Descripci&oacute;n");	

	Tran.setProperty("Button.Ok", "Aceptar");
	Tran.setProperty("Button.Cancel", "Cancelar");
	Tran.setProperty("Button.SetDetail", "Enviar");
	Tran.setProperty("Button.Delete", "Borrar");



	Tran.setProperty("lbl.Field", "Tabla/Campo");
	Tran.setProperty("lbl.Value", "Valor");
	Tran.setProperty("lbl.LogicOperator", "y/o");
	Tran.setProperty("lbl.OpenBrackets", "Abrir Par&eacute;ntesis:");
	Tran.setProperty("lbl.CloseBrackets", "Cerrar par&eacute;ntesis:");
	Tran.setProperty("lbl.ExistRecord", "Existe alg&uacute;n registo que cumple");
	Tran.setProperty("lbl.AllRecords", "Todos los registro que cumplen");
	

    Tran.setProperty("Msg.WrongSyntax", "Sintaxis incorrecta. Revise la sentencia.");
    Tran.setProperty("Msg.IdDetailMissing", "Detalle incorrecto. Establezca identificador para el detalle.");  
    Tran.setProperty("Msg.LogOpMissing", "Detalle incorrecto. Seleccione operador l&oacute;gico.");
    Tran.setProperty("Msg.TableMissing", "Detalle incorrecto. Seleccione tabla."); 
    Tran.setProperty("Msg.FieldMissing", "Detalle incorrecto. Seleccione campo.");
    Tran.setProperty("Msg.ValueMissing", "Detalle incorrecto. Establezca el valor.");    




            
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<%@ include file="../htmlfilterpage.jsp" %>
<m4:endpage/>
