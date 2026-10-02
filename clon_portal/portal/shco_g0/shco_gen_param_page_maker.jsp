<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_param_page_maker.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>

<%
// M4Object parameters:
  String zm4object = "TC_RP_PARAM_PAGE_MAKER";
  String zsubsesion = zm4object + "_SUB";
  String znodolabel ="SHCO_GN_LABEL";
  String znodocom = "SHCO_GN_COMUNICATION";
  String znodoPageData ="TC_RP_PARAM_PAGE_MAKER";
  String zraizlabel =  znodolabel + ":" + zm4object  + "!" + znodolabel + ".";

  String zSHCO_LB_ACCEPT = zraizlabel + "SHCO_LB_ACCEPT";
  String zSHCO_LB_CLOSE	 = zraizlabel + "SHCO_LB_CLOSE";
  String zSHCO_LB_PARAMS = zraizlabel + "SHCO_LB_PARAMS";


   //Page parameters: 
   String zIdPageXML = request.getParameter("zIdPageXML");
   if (zIdPageXML ==null) { zIdPageXML="";}
%>

<%@ include file="../shco_g0/shco_gen_arg.jsp" %><%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../shco_g0/shco_gen_css.jsp" %><%@ include file="../shco_g0/shco_gen_label.jsp" %>
</head><body>  
<%@ include file="../shco_g0/shco_gen_datadef.jsp" %>
<%@ include file="../shco_g0/shco_gen_param_page_maker_act.jsp" %>
<%@ include file="../shco_g0/shco_gen_mt_js.jsp" %>
<script type="text/javascript" src="/library/m4valdata.js"></script>
<script type="text/JavaScript">
    //Función de validación de datos
    <m4:item outputdef="<%=znodoPageData%>" item="JSP_VAL_FUNCTION"/> 
	
	//Función de Recogida de valores para proceder a la ejecución
	<m4:item outputdef="<%=znodoPageData%>" item="JSP_ALLPARAMETERS_FUNCTION"/>
	
	//Función de carga inicial
	function loadTranslatedValues(){
	   <m4:item outputdef="<%=znodoPageData%>" item="_ONLOAD_JS_GET_TRANSLATED_VAL"/>
	}
</script>

 <m4:item outputdef="<%=znodoPageData%>" item="JSP_HEADER" m4varname="zLbCabec" htmlsafe="true"/>
 <m4:item outputdef="<%=znodoPageData%>" item="JSP_TITLE" m4varname="zLbTitle" jsafe="true"/>
 <m4:item outputdef="<%=znodoPageData%>" item="JSP_DESCRIPTION" m4varname="zLbDescription" htmlsafe="true"/>
 <m4:item outputdef="<%=znodoPageData%>" item="JSP_HELP_FILE" m4varname="zHelpFile"/>

   
<%// *** shco_gen_title.jsp (begin) ***%>
<script type="text/javascript" language="Javascript1.5">
var vsoc=m4getmessage("_setlog_soc");
m4settitle(vsoc+' <%=zsco%> - <%=zLbTitle%>');
</script>
<%// *** shco_gen_title.jsp (end) ***%>

<%
// Help definition
String zvalue = "";
String zhelp=zHelpFile;
%>

<%// *** shco_gen_cab.jsp.jsp (begin) ***%>
<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="2" width="56px"><img alt="<m4:label m4name="<%=zSHCOLBCAB%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_cabec.jsp" %> /></td>
<td colspan="3" class="title">&nbsp;<%=zLbCabec%></td><td colspan="5" class="value">&nbsp;<%=zvalue%></td>
<td rowspan="2"><%@ include file="shco_gen_help.jsp" %></td></tr>
<tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>
<%if (zLbDescription != null && !zLbDescription.equals("")){%>
<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td colspan="8" class="description">&nbsp;<%=zLbDescription%></td></tr>
</table>
<%}%>
</table>

<%// *** shco_gen_cab.jsp.jsp (end) ***%>



<%//****************************************************************************************** 
// Formulario de ejecución
// ************************************************************************************ %>
<m4:item outputdef="<%=znodoPageData%>" item="JSP_ID_JSP_RETURN" m4varname="zProcessPageVar"/>
<m4:item outputdef="<%=znodoPageData%>" item="C_FORM_INPUT_ITEM_PARAMS" m4varname="zInputItemParamsVar"/>
<m4:item outputdef="<%=znodoPageData%>" item="C_FORM_INPUT_EXECUTE_PARAMS" m4varname="zInputExecuteParamsVar"/>

<form id="FrmExecute" name="FrmExecute" method="post" action="/servlet/CheckSecurity/JSP/shco_g0/shco_gen_param_process_execute.jsp">
  <input type="hidden" id="<%=zInputExecuteParamsVar%>" name="<%=zInputExecuteParamsVar%>" value=""/>
  <input type="hidden" id="<%=zInputItemParamsVar%>" name="<%=zInputItemParamsVar%>" value=""/>
  <input type="hidden" id="zsubsesion" name="zsubsesion"value="<%=zsubsesion%>"/>
  <input type="hidden" id="zprocesspage" name="zprocesspage" value="<%=zProcessPageVar%>"/>
</form>

<%//****************************************************************************************** 
//  Formulario de Parámetros
// ************************************************************************************ %>
<m4:item outputdef="<%=znodoPageData%>" item="C_FORM_DATOS" m4varname="zFormDatosVar"/>
 
<form id="<%=zFormDatosVar%>" name="<%=zFormDatosVar%>" method="post" action="">
<table class="form" width="100%" cellspacing="2" border="2">
<thead><tr class="titulo"><th colspan="4">&nbsp;<m4:label m4name="<%=zSHCO_LB_PARAMS%>"  htmlsafe="true"/></th></tr>
</thead><tbody>
<% String zLastRow ="";
   String zLastCol = "";
   String ztdClass = "";
   String ztdColspan = "";
%>
 <!-- Posibles tipos de controles -->
 <m4:item outputdef="<%=znodoPageData%>" item="C_TYPE_LABEL" m4varname="zCTypeLabel"/>
 <m4:item outputdef="<%=znodoPageData%>" item="C_TYPE_TRANSLABEL" m4varname="zCTypeTransLabel"/>
 <m4:item outputdef="<%=znodoPageData%>" item="C_TYPE_CURRENCY" m4varname="zCTypeCurrency"/>
 <m4:item outputdef="<%=znodoPageData%>" item="C_TYPE_LIST" m4varname="zCTypeList"/>
 <m4:item outputdef="<%=znodoPageData%>" item="C_TYPE_CALENDAR" m4varname="zCTypeCalendar"/>

 
 <m4:dataloop outputdef="<%=znodoPageData%>">	 	                       
	<m4:item outputdef="<%=znodoPageData%>" item="_COL" m4varname="zColVar" m4format="0"/>
	<m4:item outputdef="<%=znodoPageData%>" item="_ROW" m4varname="zRowVar" m4format="0"/>
	<m4:item outputdef="<%=znodoPageData%>" item="_HTML_CODE_BEGIN" m4varname="zHtmlCodeBeginVar" htmlsafe="false"/>
	<m4:item outputdef="<%=znodoPageData%>" item="_HTML_CODE_END" m4varname="zHtmlCodeEndVar" htmlsafe="false"/>
	<m4:item outputdef="<%=znodoPageData%>" item="_COLSPAN" m4varname="zColSpanVar" m4format="0"/>
	<m4:item outputdef="<%=znodoPageData%>" item="_TYPE" m4varname="zControlTypeVar"/>
			
   <%//****************************************************************************************** 
    //  Gestión de líneas : Si cambio de fila, abro <tr> y cierro el anterior excepto primera vez
    // ************************************************************************************ %>
	<%if (!zRowVar.equals(zLastRow)){
	    zLastRow = zRowVar;
		zLastCol = "-1";
	    if (!zRowVar.equals("1")){%>
		  <%if (!zColVar.equals("-1")){%>
		     </td>
		  <%}%>
		  </tr>
		<%}%>
	   <tr>	 
     <%}%>		  		 	

   <%//****************************************************************************************** 
    // Gestión de columnas : Si cambio de columna, abro <td> y cierro anterior excepto primera vez
	// Usar class="campo" si control = C_TYPE_LABEL o C_TYPE_TRANSLABEL  -->
   	// Establecer colspan si es distinto de 1 -->
	// Escribir el código html (begin)  -->
	// Para los controles de tipo C_TYPE_CURRENCY, C_TYPE_CALENDAR, C_TYPE_LIST hay que meter entre
	// entre begin y end la imagen corresponidente (src="")	
    // ************************************************************************************ %>
	<%if (!zColVar.equals(zLastCol)){
	    zLastCol = zColVar;
	    if (!zColVar.equals("1")){%>
		  </td>
		<%}%>
 	    <%//***  Usar class="campo" si control = C_TYPE_LABEL o C_TYPE_TRANSLABEL *** %>
		<% if (zControlTypeVar.equals(zCTypeLabel) || zControlTypeVar.equals(zCTypeTransLabel)){
 		     ztdClass = "class=\"campo\"";
		   }else{ztdClass ="";}%>

		 <%//*** Establecer colspan si es distinto de 1 *** %>		
		<%if (!zColSpanVar.equals("1")){
		  ztdColspan = "colspan=\"" +  zColSpanVar + "\"";
		}else{ ztdColspan="";} %>
		
	   	<td <%=ztdClass%> <%=ztdColspan%> >     
	 <%}%>		  		 	
    
	 <%//*** Código html asociado al control *** %>
     <%=zHtmlCodeBeginVar%>  
	 <%if (zControlTypeVar.equals(zCTypeCurrency)){%>
	     <%@ include file="../files_gif/ic_pay.jsp" %>
		 <%=zHtmlCodeBeginVar%> 
	 <%}else if (zControlTypeVar.equals(zCTypeList)){%>
	     <%@ include file="../files_gif/ic_list.jsp"%>
		 <%=zHtmlCodeEndVar%> 
	 <%}else if (zControlTypeVar.equals(zCTypeCalendar)){%>
	     <%@ include file="../files_gif/ic_cal.jsp" %>
         <%=zHtmlCodeEndVar%> 	 
	 <%}%>	 	 
</m4:dataloop>
</td></tr>
</tbody></table>

<%//******************************************************************************************
  //Botones de Aceptar/Cancelar
 //******************************************************************************************%>
<table  width="100%" cellspacing="2" ><tr><td align="center">
   <a title="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>" href="javascript:comprobar();"><img alt="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>" <%@ include file="../files_gif/ic_ace.jsp" %> ></img></a>
   <a title="<m4:label m4name="<%=zSHCO_LB_CLOSE%>"  htmlsafe="true"/>"  href="javascript:window.close();"><img alt="<m4:label m4name="<%=zSHCO_LB_CLOSE%>"  htmlsafe="true"/>" <%@include file="../files_gif/ic_cer.jsp" %> ></img></a>
</td></tr></table>		

<%//******  Cargar las traducciones***************************%>
<script type="text/javascript">
   loadTranslatedValues();
</script>

</form>
<m4:endpage/>
</body></html>
