<%-- =========================================================
	@(#) FileVersion: 819.005.019
	@(#) FileDescription: pubshowparamvaluespage.jsp
	@(#) CompanyName: Cegid Spain, S.A.U.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: Peoplenet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ page  import="com.meta4.taglib.util.M4PresentationUtilTaglib.*"%>
<html>
	<head>
		<title></title>	

		<%!
		private static String getStringValue(String sValue) {
			return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
		}
		%>

		<%

		String zIdReadObject = getStringValue(request.getParameter("zIdReadObject"));	
		String zIdReadField = getStringValue(request.getParameter("zIdReadField"));
		String zParamName  = getStringValue(request.getParameter("zParamName"));
		String zParamNameJsafe  = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(zParamName);
		String zIdInternalType = getStringValue(request.getParameter("zIdInternalType"));
		
		if (zIdInternalType == null) {
			zIdInternalType ="0";
		}
		
		String zShowQBF = getStringValue(request.getParameter("zShowQBF"));
		
		if (zShowQBF == null) {
			zShowQBF ="1";
		}
		
		String zQBFFilter = getStringValue(request.getParameter("zQBFFilter"));
		String zOrdenCampo = getStringValue(request.getParameter("zOrdenCampo"));
		String zOrden = getStringValue(request.getParameter("zOrden"));
		String zItemPropParamValue= "PROP_PARAM_VALUE";
		String zItemPropParamValueName= "PROP_PARAM_VALUE_NAME";
		String zItemPropParamValueExt= "PROP_PARAM_VALUE_EXT_";
		String zItemPropParamValueNameExt = "PROP_PARAM_VALUE_EXT_NAME_";
		String zActualFieldName =  "";
		String zActualFieldValItem = "";
		
		if (zOrdenCampo == null) {
			zOrdenCampo= zItemPropParamValue;
		}
		
		if (zOrden == null) {
			zOrden= "1";
		}
		
		String zSelectedValues = getStringValue(request.getParameter("zSelectedValues"));
		
		if (zSelectedValues == null) {
			zSelectedValues ="";
		}

		String zm4object = "SHCO_RP_PUB_REPORTS";
		String zsubsesion = zm4object; 
		String znodolistvalues ="SRP_PARAM_VALUES_LIST";
		String znodolistvaluesqbf ="SRP_PARAM_VALUES_LIST_QBF";
		String zdireccion = "shco_rp/pubshowparamvaluespage.jsp";
		String zredireccion = "pubshowparamvaluespage.jsp";
		String znodolabel = "SHCO_GN_LABEL";
		String zraizlabel =  znodolabel + ":" + zsubsesion  + "!" + znodolabel + ".";
		String zsortitems = zm4object + "!" + znodolistvalues + "."+ zOrdenCampo;
		String zSHCO_LB_ACCEPT = zraizlabel + "SHCO_LB_ACCEPT";
		String zSHCOLBCLOSE = zraizlabel + "SHCO_LB_CLOSE";

		int zTab = 0;
		String sPos = "N" ;

		String zTYPE_FIX_STRING = "1";
		String zTYPE_VAR_STRING = "2";
		String zTYPE_LONG = "3";
		String zTYPE_DATE = "4";
		String zTYPE_DATE_HOUR = "5";
		String zTYPE_NUM = "6";
		String zTYPE_VARIANT = "7";
		String zTYPE_CURRENCY = "8";
		String zTYPE_VARIANT_NUM = "9";
		String zTYPE_BLOB = "10";
		String zTYPE_BINARY_STRING = "11";
		String zTYPE_HOUR = "12";

		String zsFieldPrecFix = "PREC_";
		String zsFieldScaleFix = "SCALE_"; 
		String zsFieldM4TypeFix = "M4_TYPE_";
		String zsFieldIdFix = "FIELD_";
		String zsFieldNameFix = "NAME";
		String zsFieldValFix = "VAL_";
		String zsFieldVal2Fix = "VAL2_";
		String zsFieldOprFix = "OPR_";
		%>

		<%@ include file="../shco_g0/shco_gen_set_sec_role_begin.jsp" %>
		<%@ include file="../shco_g0/shco_gen_arg.jsp" %>
		<%@ include file="../shco_g0/shco_gen_bag.jsp" %>
		
		<!-- <%@ include file="../shco_g0/shco_gen_css.jsp" %> -->
		
		<%@ include file="../shco_g0/shco_gen_normal_js.jsp" %>
		<%@ include file="../shco_rp/shco_rp_trans.jsp" %>
		<%@ include file="../shco_g0/shco_gen_label.jsp" %>
		<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>


		<!-- Título de la página  y funciones javascript -->
 
		<script type="text/javascript" language="Javascript1.5">
			
			var sWindowTitle = ""; 
			
			if (<%=zsco%> != null){
				var vsoc=m4getmessage("_setlog_soc");
				sWindowTitle = vsoc + ' <%=zsco%> - ';
			}

			function getSelectedValues(iNumValues) {
				
				var iReturnValuesCount  = 0;
				var sReturnValue = "";
				
				for (i = 0; iNumValues>i; i++) {
					
					sIdCheckbox = "CHECK_"+ i;
					var oobjeto = document.forms["ListaValores"].elements[sIdCheckbox];		
					
					if (oobjeto && oobjeto.checked  == true) { 
						//sValue = "'" + oobjeto.value + "'";
						sValue = oobjeto.value;
						//Replace the comma by a special character to distinguish between the list separator and the comma of the value
						sValue = sValue.replaceAll(",", "\u{B8}");
						
						if (iReturnValuesCount == 0) {
							
							sReturnValue = sValue
						
						} else {
						
							sReturnValue = sReturnValue + "," + sValue;
						}
				
						iReturnValuesCount++;
					}	
				}

				sPrevSelectedValues = "<%=zSelectedValues%>";
				
				if (sPrevSelectedValues  != "") {
					
					if (sReturnValue!= "") {
					
						sReturnValue = sPrevSelectedValues +  "," + sReturnValue;
					
					} else {
						
						sReturnValue = sPrevSelectedValues ;
					}
				}

				return sReturnValue;
			}
		</script>

		<%
		if (Integer.parseInt(zShowQBF) == 1) {
		%>
			<script type="text/javascript" language="Javascript1.5">   
				
				m4settitle(sWindowTitle + '<%=Tran_shco_rp.getProperty("Qbf.Title")%> ' + '<%=zParamNameJsafe%>');

				function LoadValuesWithoutFilter() {
					m4valor("oculto", "zShowQBF", "0", "set");
					m4valor("oculto", "zQBFFilter", "", "set");
					m4submit("oculto");
				}

				function LoadValuesAfterFilter(iNumQBFFields) {

					var isDataOk = CheckQBFDataTypeValues(iNumQBFFields);

					if (isDataOk == 1) {

						//Recorrer los campos QBF y construir la cadena de filtro
						var sQBFFilter = "";
						for (i = 0; iNumQBFFields > i; i++) {
							var sIdQBFField = m4valor("ListaValoresQBF", "<%=zsFieldIdFix%>" + i, "", "get");
							var sFieldValue = m4valor("ListaValoresQBF", "<%=zsFieldValFix%>" + i, "", "get");
							var sFieldM4Type = m4valor("ListaValoresQBF", "<%=zsFieldM4TypeFix%>" + i, "", "get");
							var sOperator = "1";
							if (sFieldValue != "") {
								//Tomar el operador
								sOperator = m4select("ListaValoresQBF", "<%=zsFieldOprFix%>" + i, "value");

								//Comprobar si es fecha-hora para recoger la hora
								if (sFieldM4Type == "<%=zTYPE_DATE_HOUR%>") {
									var sFieldValue2 = m4valor("ListaValoresQBF", "VAL2_" + i, "", "get");
									if (sFieldValue2 == "") {
										sFieldValue2 = "00:00:00"
									}
									sFieldValue = sFieldValue + " " + sFieldValue2;
								}

								//Crear la cadena ID_FIELD OPERATOR VALUE;;
								sQBFFilter = sQBFFilter + sIdQBFField + " " + sOperator + " " + sFieldValue + ";;";
							}
						} //for
						//Recargamos la página quitando petición de QBF y añadiendo el filtro
						m4valor("oculto", "zShowQBF", "0", "set");
						m4valor("oculto", "zQBFFilter", sQBFFilter, "set");
						m4submit("oculto");
					} //verr
				}

				function CheckQBFDataTypeValues(iNumQBFFields) {

					var sfunciones = "";
					var sfunciones1 = "";
					var i = 0;

					for (i = 0; iNumQBFFields > i; i++) {

						var sValField = "<%=zsFieldValFix%>" + i;
						var sVal2Field = "<%=zsFieldVal2Fix%>" + i;
						var sNQBFField = m4valor("ListaValoresQBF", "<%=zsFieldNameFix%>" + i, "", "get");
						var sFieldM4Type = m4valor("ListaValoresQBF", "<%=zsFieldM4TypeFix%>" + i, "", "get");

						switch (sFieldM4Type) {
							case "<%=zTYPE_DATE%>":
								if (sfunciones != "") {
									sfunciones = sfunciones + "*";
								}
								sfunciones = sfunciones + "m4valinput('_date','ListaValoresQBF','" + sValField + "',1,'" + sNQBFField + "',sformatofechas)";
								break;
							case "<%=zTYPE_DATE_HOUR%>":
								if (sfunciones != "") {
									sfunciones = sfunciones + "*";
								}
								sfunciones = sfunciones + "m4valinput('_date','ListaValoresQBF','" + sValField + "',1,'" + sNQBFField + "',sformatofechas)";
								sfunciones = sfunciones + "*m4valinput('_time_sec','ListaValoresQBF','" + sVal2Field + "',1,'" + sNQBFField + "')";
								break;
							case "<%=zTYPE_NUM%>":
								sScale = m4valor("ListaValoresQBF", "<%=zsFieldScaleFix%>" + i, "", "get");
								sPrec = m4valor("ListaValoresQBF", "<%=zsFieldPrecFix%>" + i, "", "get");
								if (sfunciones != "") {
									sfunciones = sfunciones + "*";
								}
								sfunciones = sfunciones + "m4valinput('_decimal','ListaValoresQBF','" + sValField + "','" + sPrec + "','" + sScale + "','" + sNQBFField + "','" + sPrec + "','" + sScale + "')";
								break;
							case "<%=zTYPE_VARIANT_NUM%>":
								sScale = m4valor("ListaValoresQBF", "<%=zsFieldScaleFix%>" + i, "", "get");
								sPrec = m4valor("ListaValoresQBF", "<%=zsFieldPrecFix%>" + i, "", "get");
								if (sfunciones != "") {
									sfunciones = sfunciones + "*";
								}
								sfunciones = sfunciones + "m4valinput('_decimal','ListaValoresQBF','" + sValField + "','" + sPrec + "','" + sScale + "','" + sNQBFField + "','" + sPrec + "','" + sScale + "')";
								break;
							case "<%=zTYPE_HOUR%>":
								if (sfunciones != "") {
									sfunciones = sfunciones + "*";
								}
								sfunciones = sfunciones + "m4valinput('_time_sec','ListaValoresQBF','" + sValField + "',1,'" + sNQBFField + "')";
								break;
							case "<%=zTYPE_BLOB%>":
								break; // Sin validacion
							case "<%=zTYPE_BINARY_STRING%>":
								break; //sin validación  
							case "<%=zTYPE_LONG%>":
								break; //sin validación
							default: //zTYPE_FIX_STRING,zTYPE_VAR_STRING,zTYPE_VARIANT 
								if (sfunciones != "") {
									sfunciones = sfunciones + "*";
								}
								sfunciones = sfunciones + "m4valinput('_alfanum','ListaValoresQBF','" + sValField + "',1,'" + sNQBFField + "')";
								break;


						}
					}

					var verr = 1;
					if (sfunciones.length > 0) {
						verr = m4valform(sfunciones);
					}

					return (verr)
				}
			</script>
		<%
		} else {
		%>
			<script type="text/javascript" language="Javascript1.5">   
				m4settitle(sWindowTitle + '<%=Tran_shco_rp.getProperty("Literal.ListParamValuesTitle")%> ' + '<%=zParamNameJsafe%>');

				function LoadValuesAfterFilter(iNumQBFFields) {
					//Recorrer los campos QBF y construir la cadena de filtro
					var sQBFFilter = "";
					for (i = 0; iNumQBFFields > i; i++) {
						var sIdQBFField = m4valor("ListaValoresQBF", "<%=zsFieldIdFix%>" + i, "", "get");
						var sFieldValue = m4valor("ListaValoresQBF", "<%=zsFieldValFix%>" + i, "", "get");
						var sOperator = "1";
						if (sFieldValue != "") {
							//Tomar el operador
							sOperator = m4select("ListaValoresQBF", "<%=zsFieldOprFix%>" + i, "value");
							//Crear la cadena ID_FIELD OPERATOR VALUE;;
							sQBFFilter = sQBFFilter + sIdQBFField + " " + sOperator + " " + sFieldValue + ";;";
						}
						//Recargamos la página quitando petición de QBF y añadiendo el filtro
						m4valor("oculto", "zShowQBF", "0", "set");
						m4valor("oculto", "zQBFFilter", sQBFFilter, "set");
						m4submit("oculto");
					}
				}

				function order_list(sField) {
					sActualOrder = <%=zOrden%>;
					sActualOrderFileld = "<%=zOrdenCampo%>";
					if (sActualOrderFileld == sField) {
						if (sActualOrder == "0") {
							sActualOrder = "1";
						} else if (sActualOrder == "1") {
							sActualOrder = "2";
						} else {
							sActualOrder = "1";
						}
					} else {
						sActualOrder = "1";
					}
					m4valor("oculto", "zOrden", sActualOrder, "set");
					m4valor("oculto", "zOrdenCampo", sField, "set");
					m4submit("oculto");
				}

				function returnSelectedValues(iNumValues) {
					sReturnValue = getSelectedValues(iNumValues);
					var aval = new Array();
					aval[0] = sReturnValue;
					m4returnvalues(aval);

				}

				function returnSelectedValue(paramValue) {
					//Replace the comma by a special character to distinguish between the list separator and the comma of the value
					sReturnValue = paramValue.replaceAll(",", "\u{B8}");
					var aval = new Array();
					aval[0] = sReturnValue;
					m4returnvalues(aval);
				}

			</script>
		<%
		}
		%>

		<!-- Css -->
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/m4reset.css" />
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/portal_fastlane.css" />
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/meta4.widget.css" />
		
		<!--  Only if needed -->
		<style type="text/css">
			
			#main {
				visibility: visible;
			}

			.tableNoHead table thead th {
				display: none;
			}

			.jspTable tbody td {
				display: inline-flex;
				width: 100%;
				padding: 4px;
			}

			.jspTable tbody td >* {
				margin: 0 8px;
			}

			.jspTable tbody td.boton {
				justify-content: center;
			}

			.jspTable select,
			.jspTable input {
				width: 100%;
			}
			
			.tablePagination table {
				table-layout: auto;
				width: auto;
			}

			.tablePagination table td {
				padding: 0 8px;
			}
		</style>

		<!-- Always last one css -->
		<link rel="stylesheet" type="text/css" href="/shco_rp/css/client_customization.css">
	</head>

	<body>

		<%
		znivelmenu = "1";
		int iParamValueExtNum = 1;
		String sParamValueExtNum = "" ;
		zventanas = "20";													
		zvuelta = 5;	

		int zregistroinicial = Integer.valueOf(zinicio).intValue();
		zregistroinicial = zregistroinicial - 1;
		int zventana = Integer.valueOf(zventanas).intValue();
		int zregistrofinal = zregistroinicial + zventana - 1;   
		%>

		<!-- Carga de los valores -->

		<m4:startpage m4task='<%=zsubsesion%>'/>
 		
 		<m4:beginjob/>
  			
  			<m4:datadef m4o='<%=zm4object%>' m4name='<%=zsubsesion%>'/>
			<%
			if (Integer.parseInt(zShowQBF) == 1) {
			%>
				<m4:exec alias="LoadListInfo" m4object='<%=zsubsesion%>' node="SRP_PARAM_VALUES_LIST" method="LOAD_LIST_INFO">
					<m4:param name="ARG_ID_READ_OBJECT" value="<%=zIdReadObject%>"/>  		                
					<m4:param name="ARG_ID_READ_FIELD" value="<%=zIdReadField%>"/>                
				</m4:exec>
				
				<m4:outputdef m4alias="ParamValuesListQBF" m4object='<%=zsubsesion%>' node="SRP_PARAM_VALUES_LIST_QBF" records="*"></m4:outputdef>	  
				
			<%
			} else {
			%>  
				<m4:exec alias="LoadParamValues" m4object='<%=zsubsesion%>' node="SRP_PARAM_VALUES_LIST" method="LOAD_PARAM_VALUES_WITH_FILTER">
				<m4:param name="ARG_ID_READ_OBJECT" value="<%=zIdReadObject%>"/>  		                
				<m4:param name="ARG_ID_READ_FIELD" value="<%=zIdReadField%>"/>
				<m4:param name="ARG_FILTER" value="<%=zQBFFilter%>"/>                       
				</m4:exec>

				<%
				if ((zOrdenCampo !="")||(!zOrdenCampo.equals(""))) {
					
					if ((zOrden=="1")||(zOrden.equals("1"))) {
				%>
						<m4:sortitems m4name="<%=zsortitems%>"><m4:param name="<%=zOrdenCampo%>" value="ASC"/></m4:sortitems>
					<%
					} else if ((zOrden=="2")||(zOrden.equals("2"))) {
					%>
						<m4:sortitems m4name="<%=zsortitems%>"><m4:param name="<%=zOrdenCampo%>" value="DESC"/></m4:sortitems>
					<%
					}
				}
			}
			%>

			<m4:outputdef m4alias="ParamValuesList" m4object='<%=zsubsesion%>' node="SRP_PARAM_VALUES_LIST" records='<%="[" + zregistroinicial + "-" + zregistrofinal + "]"%>'></m4:outputdef> 	  				
		<m4:endjob/>

		<!-- gestión de contador de registros -->

		<%
		int zcount = 0;
		int zcounti = 0;
		try {
			M4Operations m = new M4Operations(request);
			
			if (Integer.parseInt(zShowQBF) == 1) {
			
				zcount = m.getCount("ParamValuesListQBF",zm4object,znodolistvalues);
				zcounti = m.getCountInClient("ParamValuesListQBF",zm4object,znodolistvalues);
			
			} else {
				zcount = m.getCount("ParamValuesList",zm4object,znodolistvalues);
				zcounti = m.getCountInClient("ParamValuesList",zm4object,znodolistvalues);	
			}
		} catch(Exception e) {}
		String zcountv = String.valueOf(zcounti);
		String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion = 0;
		String zpos = "";
		%>

		<%-- [unicode] --%><%@ include file="../shco_g0/shco_gen_m4val_js.jsp" %>

		<!-- formulario Paginación  -->

		<script type="text/JavaScript">   
			function valores() {   // Se usa para la paginación (shco_gen_vent_post.jsp)	   
			   m4submit("oculto");
			}

			function saveSelectedValues(iNumValues) {	
				sReturnValue = getSelectedValues (iNumValues);
				m4valor("oculto","zSelectedValues",sReturnValue,"set");
			}
		</script>

		<form method="post" name="oculto" id="oculto" action="/servlet/CheckSecurity/JSP/shco_rp/pubshowparamvaluespage.jsp" >
			<input type ="hidden" id="zinicio" name="zinicio" value="<%=zinicio%>" />
			<input type ="hidden" id="zIdReadObject" name="zIdReadObject" value ='<%=zIdReadObject%>'/>
			<input type ="hidden" id="zIdReadField" name="zIdReadField" value ='<%=zIdReadField%>'/>
			<input type ="hidden" id="zParamName" name="zParamName" value ='<%=zParamName%>'/>
			<input type ="hidden" id="zOrdenCampo" name="zOrdenCampo" value='<%=zOrdenCampo%>' />
			<input type ="hidden" id="zOrden" name="zOrden" value='<%=zOrden%>' />
			<input type ="hidden" id="zIdInternalType" name="zIdInternalType" value='<%=zIdInternalType%>' />
			<input type ="hidden" id="zShowQBF" name="zShowQBF" value='<%=zShowQBF%>' />
			<input type ="hidden" id="zQBFFilter" name="zQBFFilter" value='<%=zQBFFilter%>' /> 
			<input type ="hidden" id="zSelectedValues" name="zSelectedValues" value="<%=zSelectedValues%>" />
		</form>

		<!-- Cabecera de lista de valores -->
		<%
		String zTitleDescription="";

		if (Integer.parseInt(zShowQBF) == 1) {

			zTitleDescription= Tran_shco_rp.getProperty("Qbf.TitleDesc");

		} else { 

			zTitleDescription= Tran_shco_rp.getProperty("Literal.ListParamValuesDesc");
		}
		%>
		
		<div id="main" class="onlyCenterPanel">

			<!-- Header -->
			<div id="header">
				
					<div id="m4-titleBar" class="m4-titleBar">
						
						<div class="m4-titleBar-content">
							
							<h2><%=zTitleDescription%> <%=zParamName%></h2>

						</div>
					</div>

			</div>

			<div id="content">

				<!-- Panel Left -->
				<div id="panel-left" class="">
					<!--content panel left -->
					<div id="tables-panel-left"></div>
				</div>

				<!-- Panel Center -->
				<div id="panel-center" class="">

					<!-- Center -->
					<div id="inner-center">

						<!-- Container Tables -->
						<div id="containerTables" class="" options="noHead">

							<div id="rpList">

								<% 
								if (Integer.parseInt(zShowQBF) == 1) {
								%>
									<!--  Comprobar si hay que mostrar QBF en función de la tabla a listar -->
									<m4:item outputdef="ParamValuesList" item="SHOW_QBF" m4varname="sShowListWithQBF" m4format="0.#"/>    
									
									<% 
									if ((sShowListWithQBF == null) || sShowListWithQBF.equals("")) {
									   
									   sShowListWithQBF = "0";
									}
									if (Integer.parseInt(sShowListWithQBF) == 0) {
									%>
										<script type="text/javascript" language="Javascript1.5"> LoadValuesWithoutFilter();</script> 	
									<%
									}
									%>
							
						 			<!-- QBF -->
									<%

									int M4_OPR_STRING = 1;
									int M4_OPR_NUM  = 2;
									int M4_OPR_DATE = 3;

									int zcountQBFParams = 0;

									try {
										M4Operations m1 = new M4Operations(request);
										zcountQBFParams = m1.getCount("ParamValuesListQBF",zm4object,znodolistvaluesqbf);   
									} catch(Exception e) {}
									%>
							

									<form method="post" id="ListaValoresQBF" name="ListaValoresQBF" action="" class="m4-maxMarginTop m4-xxlMarginBottom"> 
										<table class="m4-form-table">
											<thead></thead>
											<tbody>
												<%
												int zItemQBFIndex = 0;
												int zItemQBFNumber = 0;
												int iSize = 0;
												int iSize2 = 0;
												int iScale = 0;
												int iMaxLength = 0;
												int iMaxLength2 = 0;
												%>
											   
												<m4:dataloop outputdef="ParamValuesListQBF">	
													<m4:item outputdef="ParamValuesListQBF" item="ID_FIELD" m4varname="sIdField" />   	      
													<m4:item outputdef="ParamValuesListQBF" item="TRANS" htmlsafe="true"  m4varname = "sNField" jsafe="true"/>
													<m4:item outputdef="ParamValuesListQBF" item="TRANS" htmlsafe="true"  m4varname = "sNFieldNotJsafe" jsafe="false"/>
													<m4:item outputdef="ParamValuesListQBF" item="HTML_FIELD_OPERATOR_TYPE" m4varname="sOperatorType" m4format="0.#"/>  		  
													<m4:item outputdef="ParamValuesListQBF" item="PREC" m4varname="sPrecItem" m4format="0.#"/>
													<m4:item outputdef="ParamValuesListQBF" item="SCALE" m4varname="sScaleItem" m4format="0.#"/>
													<m4:item outputdef="ParamValuesListQBF" item="ID_M4_TYPE" m4varname="sIDM4Type" m4format="0.#"/>
												  
													<% // Gestión de Size y MaxLength
													iSize = Integer.parseInt(sPrecItem);
													iScale = Integer.parseInt(sScaleItem);
													iMaxLength = iSize;
													   
													if (iScale >0){
														iMaxLength = iMaxLength+iScale+1;
													}			   			   
													
													// Casos especiales
													if (sIDM4Type.equals(zTYPE_DATE)) {
														iSize = 10;
													} else if (sIDM4Type.equals(zTYPE_HOUR)) {
														iSize = 8;
													} else if (sIDM4Type.equals(zTYPE_DATE_HOUR)) {
														iSize = 10;
														iSize2=8;					
													} else if (sIDM4Type.equals(zTYPE_LONG)||sIDM4Type.equals(zTYPE_BLOB)||sIDM4Type.equals(zTYPE_BINARY_STRING)) {
														iSize = 256;
													}	

													iMaxLength = iSize;
													iMaxLength2 = iSize2;
													
													if (iSize > 40) {
														iSize = 40;
													}
													
													if (iSize2 > 40) {
														iSize2 = 40;
													}
													%>
													
													<%
													if ((sOperatorType == null) || sOperatorType.equals("")) {
														sOperatorType = "0";
													}
													
													int iOperatorType = Integer.parseInt(sOperatorType);		 
													zItemQBFNumber++;  
													%>

													<input type="hidden" id="<%=zsFieldIdFix%><%=zItemQBFIndex%>" name="<%=zsFieldIdFix%><%=zItemQBFIndex%>" value='<%=sIdField%>' />
													<input type="hidden" id="<%=zsFieldNameFix%><%=zItemQBFIndex%>" name="<%=zsFieldNameFix%><%=zItemQBFIndex%>" value='<%=sNFieldNotJsafe%>' />
													<input type="hidden" id="<%=zsFieldM4TypeFix%><%=zItemQBFIndex%>" name="<%=zsFieldM4TypeFix%><%=zItemQBFIndex%>" value='<%=sIDM4Type%>' />
													<input type="hidden" id="<%=zsFieldPrecFix%><%=zItemQBFIndex%>" name="<%=zsFieldPrecFix%><%=zItemQBFIndex%>" value='<%=sPrecItem%>' />
													<input type="hidden" id="<%=zsFieldScaleFix%><%=zItemQBFIndex%>" name="<%=zsFieldScaleFix%><%=zItemQBFIndex%>" value='<%=sScaleItem%>' />
												 
													<tr class="filtro">
														<!-- columna , para el nombre del item -->

														<td class="tdLabel">
															<label class="m4-form-table-label m4-textRight grey-text">
																<m4:item outputdef="ParamValuesListQBF" item="TRANS" htmlsafe="true"/>
															</label>
														</td>
														<td class="m4-form-multipleItem tdInput m4-flex">
															<select tabindex="<%=(zTab + 1)%>" id='<%=zsFieldOprFix%><%=zItemQBFIndex%>' name='<%=zsFieldOprFix%><%=zItemQBFIndex%>' class="m4-minMarginRight"  title='<%=Tran_shco_rp.getProperty("Operator.Tooltip")%>'>
																<%
																if ( iOperatorType ==  M4_OPR_DATE) {
																%>
																	<option id ="A1" value="1"><%=Tran_shco_rp.getProperty("Operator.DateIsEqualTo")%></option>
																	<option id ="A2" value="2"><%=Tran_shco_rp.getProperty("Operator.DateIsNotEqualTo")%></option>
																	<option id ="A3" value="3"><%=Tran_shco_rp.getProperty("Operator.DateComesAfterOrIsEqualTo")%></option>
																	<option id ="A4" value="4"><%=Tran_shco_rp.getProperty("Operator.DateComesBeforeOrIsEqualTo")%></option>
																	<option id ="A5" value="5"><%=Tran_shco_rp.getProperty("Operator.DateComesAfter")%></option>
																	<option id ="A6" value="6"><%=Tran_shco_rp.getProperty("Operator.DateComesBefore")%></option>
																<%
																} else if (iOperatorType ==  M4_OPR_NUM) {
																%>
																	<option id ="A1" value="1"><%=Tran_shco_rp.getProperty("Operator.NumIsEqualTo")%></option>
																	<option id ="A2" value="2"><%=Tran_shco_rp.getProperty("Operator.NumIsNotEqualTo")%></option>
																	<option id ="A3" value="3"><%=Tran_shco_rp.getProperty("Operator.NumIsGreaterThanOrIsEqualTo")%></option>
																	<option id ="A4" value="4"><%=Tran_shco_rp.getProperty("Operator.NumIsSmallerOrIsEqualTo")%></option>
																	<option id ="A5" value="5"><%=Tran_shco_rp.getProperty("Operator.NumIsGreaterThan")%></option>
																	<option id ="A6" value="6"><%=Tran_shco_rp.getProperty("Operator.NumIsSmallerThan")%></option>
																<%
																} else {
																%>
																	<option id ="A1" value="1"><%=Tran_shco_rp.getProperty("Operator.StringStartsWith")%></option>
																	<option id ="A2" value="2"><%=Tran_shco_rp.getProperty("Operator.StringEndsWith")%></option>
																	<option id ="A3" value="3"><%=Tran_shco_rp.getProperty("Operator.StringContains")%></option>
																	<option id ="A4" value="4"><%=Tran_shco_rp.getProperty("Operator.StringIsEqualTo")%></option>
																	<option id ="A5" value="5"><%=Tran_shco_rp.getProperty("Operator.StringIsNotEqualTo")%></option>
																	<option id ="A6" value="6"><%=Tran_shco_rp.getProperty("Operator.StringDoesNotStartWith")%></option>
																	<option id ="A7" value="7"><%=Tran_shco_rp.getProperty("Operator.StringDoesNotEndWith")%></option>
																	<option id ="A8" value="8"><%=Tran_shco_rp.getProperty("Operator.StringDoesNotContain")%></option>
																	<option id ="A9" value="9"><%=Tran_shco_rp.getProperty("Operator.StringComesAfter")%></option>
																	<option id ="A10" value="10"><%=Tran_shco_rp.getProperty("Operator.StringComesBefore")%></option>
																<%
																}
																%>
															</select>
															<input tabindex="<%=(zTab + 1)%>" class="form" type="text" id="<%=zsFieldValFix%><%=zItemQBFIndex%>" name="<%=zsFieldValFix%><%=zItemQBFIndex%>" size = "<%=iSize%>" maxlength="<%=iMaxLength%>" title='<%=Tran_shco_rp.getProperty("Value.Tooltip")%>&nbsp;<%=sNField%>' value="" />
															
															<%
															if (sIDM4Type.equals(zTYPE_DATE) || sIDM4Type.equals(zTYPE_DATE_HOUR)) {
															%>
																<a href="javascript:m4calendar(m4objeto('ListaValoresQBF','<%=zsFieldValFix%><%=zItemQBFIndex%>'))" tabindex="<%=(zTab + 1)%>">
																	<img align="middle" <%@ include file="../files_gif/ic_cal.jsp" %> alt="<%=sNField%>" />
																</a>
																<%
																if (sIDM4Type.equals(zTYPE_DATE_HOUR)) {
																%>
																	<input tabindex="<%=(zTab + 1)%>" class="form" type="text" id="<%=zsFieldVal2Fix%><%=zItemQBFIndex%>" name="<%=zsFieldVal2Fix%><%=zItemQBFIndex%>" size = "<%=iSize2%>" maxlength="<%=iMaxLength2%>" title='<%=Tran_shco_rp.getProperty("Value.Tooltip")%>&nbsp;<%=sNField%>' value="" />
																<%
																}
															}
															%>
															</div>
														</td>		
													</tr>

													<%zItemQBFIndex++;%>
												</m4:dataloop>
												
											</tbody>
										</table>
									</form>

									<div class="m4-flex center vCenter">
										<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title='<%=Tran_shco_rp.getProperty("Button.OK")%>'  tabindex="<%=(zTab+1)%>" href="javascript:LoadValuesAfterFilter('<%=zItemQBFNumber%>');">
											
											<img class="imgIcon" src="/shco_rp/iconos/send-mail.svg" alt='<%=Tran_shco_rp.getProperty("Button.OK")%>'>
											<p><%=Tran_shco_rp.getProperty("Button.OK")%></p>
										</a>
										
										<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title='<%=Tran_shco_rp.getProperty("Literal.Close")%>' tabindex="<%=(zTab+1)%>" href="javascript:window.close();">
											
											<img class="imgIcon" src="/shco_rp/iconos/close3.svg" alt='<%=Tran_shco_rp.getProperty("Literal.Close")%>'>
											<p><%=Tran_shco_rp.getProperty("Literal.Close")%></p>
										</a>
									</div>
							
								<%
								} else {
								%>

									<!-- Lista de valores -->

									<m4:item outputdef="ParamValuesList" item="PROP_PARAM_VAL_EXT_NUM" m4varname="sNumOfExtraValToShow" m4format="0.#"/>
									<m4:item outputdef="ParamValuesList" item="EXIST_MORE_VALUES" m4varname="sExistMoreValues" m4format="0.#"/>
						  
							
									<%
									if ((sNumOfExtraValToShow == null) || sNumOfExtraValToShow.equals("")) {
										sNumOfExtraValToShow = "0";
									}
									if ((sExistMoreValues == null) || sExistMoreValues.equals("")) {
										sExistMoreValues = "0";
									}
									%>

									<div class="m4-flex center m4-maxMarginTop m4-maxMarginBottom">
										<h3><%=Tran_shco_rp.getProperty("Literal.List")%></h3>
										<!-- Conteo paginación -->
										<p class="itemToRight"><%@ include file="../shco_g0/shco_gen_pest.jsp" %></p>
									</div>
							
									<form method="post" id="ListaValores" name="ListaValores" action="" class="m4-maxMarginTop m4-xxlMarginBottom"> 
										<table class="m4-table datos">
											<thead>
												<tr>
													<m4:item outputdef="ParamValuesList" item="<%=zItemPropParamValueName%>" htmlsafe="true" m4varname="zPropParamValueName"/>
													
													<!-- Columna con la check si es un parámetro de multiselección -->
													<%
													if (Integer.parseInt(zIdInternalType) == 90 || Integer.parseInt(zIdInternalType) == 92) {
													%>
													   <th class="noResizable columnIco"></th>
													<%
													}
													%>

													<th>
														<div class="m4-flex center">
															<a>
																<%
																String iconShort0 = "/shco_rp/iconos/sortable-mono-white.svg";
																String iconShort1 = "/shco_rp/iconos/sortable-down-mono-white.svg";
																String iconShort2 = "/shco_rp/iconos/sortable-up-mono-white.svg";

																String iconSrc = "";

																if ((zOrdenCampo==zItemPropParamValue)||(zOrdenCampo.equals(zItemPropParamValue))) {
																	
																	if ((zOrden=="1")||(zOrden.equals("1"))) {
																		
																		iconSrc = iconShort1;

																	} else if ((zOrden=="2")||(zOrden.equals("2"))) {
																		
																		iconSrc = iconShort2;
																	}
																
																} else {
																	
																	iconSrc = iconShort0;
																}
																%>

																<img src="<%=iconSrc%>" alt="<%=Tran_shco_rp.getProperty("Literal.Order")%>&nbsp;<%=zPropParamValueName%>" onclick="order_list('<%=zItemPropParamValue%>');"/>
															</a>
															<label class="m4-minMarginLeft"><%=zPropParamValueName%></label>
														</div>
													</th>
											
													<%
													if( Integer.parseInt(sNumOfExtraValToShow) > 0) {
														iParamValueExtNum = 1;
													%>
														<m4:loop from="1" to="<%=sNumOfExtraValToShow%>">
															<%
															sParamValueExtNum = "" + iParamValueExtNum ;
															zActualFieldName = zItemPropParamValueNameExt + sParamValueExtNum;
															zActualFieldValItem = zItemPropParamValueExt + sParamValueExtNum;
															%>

															<m4:item outputdef="ParamValuesList" item='<%=zActualFieldName%>' htmlsafe="true" m4varname="zPropParamValueExtName"/>

															<th>
																<div class="m4-flex center">
																	<a>
																	<% 
																	if ((zOrdenCampo == zActualFieldValItem )||(zOrdenCampo.equals(zActualFieldValItem))) {
																		
																		if ((zOrden=="1")||(zOrden.equals("1"))) {
																			
																			iconSrc = iconShort1;

																		} else if ((zOrden=="2")||(zOrden.equals("2"))) {
																			
																			iconSrc = iconShort2;
																		}

																	} else{

																		iconSrc = iconShort0;
																	}
																	%>
																		<img src="<%=iconSrc%>" alt="<%=Tran_shco_rp.getProperty("Literal.Order")%>&nbsp;<%=zPropParamValueExtName%>" onclick="order_list('<%=zActualFieldValItem%>');"/>
																	</a>
																	<label class="m4-minMarginLeft"><%=zPropParamValueExtName%></label>
																</div>
															</th>		

															<% iParamValueExtNum++ ;%>
														</m4:loop>
													<%
													}
													%>
												</tr>
											</thead>
											
											<tbody>
									
												<%
												int zParamValueIndex = 0;
												%>
												<m4:dataloop outputdef="ParamValuesList">	
													<tr>
													
														<!-- Columna con la check si es un parámetro de multiselección -->
														<%
														if (Integer.parseInt(zIdInternalType) == 90 || Integer.parseInt(zIdInternalType) == 92) {
														%>
															<td class="valor<%=zpos%>">
																<input type="checkbox" id="CHECK_<%=zParamValueIndex%>" name ="CHECK_<%=zParamValueIndex%>"  value="<m4:item outputdef="ParamValuesList" item="PROP_PARAM_VALUE"  jsafe="true"/>" />		
															</td>
														<%
														}
														%>
														
														<!-- columna , para el valor del parámetro -->
														<td class="valor<%=zpos%>">
															<a title="" href="" onclick="returnSelectedValue('<m4:item outputdef="ParamValuesList" item="PROP_PARAM_VALUE" />');return false;">
																<m4:item outputdef="ParamValuesList" item="PROP_PARAM_VALUE"  htmlsafe="true"/>
															</a>
														</td>

															<!-- mostrar n-posibles columnas de información extra del parámetro -->
														<%
														if( Integer.parseInt(sNumOfExtraValToShow) > 0) { 
															iParamValueExtNum = 1;
														%>
															<m4:loop from="1" to="<%=sNumOfExtraValToShow%>">
																<% sParamValueExtNum = "" + iParamValueExtNum ; %>
																<td class="valor<%=zpos%>">
																	<m4:item outputdef="ParamValuesList" item='<%="PROP_PARAM_VALUE_EXT_" + sParamValueExtNum%>' htmlsafe="true"/>
																</td>
																<%
																iParamValueExtNum++ ;
																%>
															</m4:loop>	 	    
														<%
														}
														%>
													</tr>
													<!-- cambio de color por fila -->
													<%
													if (zpos.equals("2")) {
														zpos = "";
													} else {
														zpos="2";
													}
													%>
													<%
													zParamValueIndex++;
													%>
												</m4:dataloop>    

											</tbody>
										</table>

										<!-- shco_go/shco_gen_vent_post.jsp  (Gestión de paginación) -->
										<!-- No se usar el include porque la gestión del toomuch... es distinta -->
										<div class="m4-flex end m4-padding-s grey-block tablePagination">
											<table class="navegacion" width="100%" cellspacing="0">
												<tr>
												<%
												int zintervalo = zcount/zventana;
												int zresto = zcount%zventana;
												int zcontador = 0;
												int zsalto = 0;
												
												if (zresto > 0) {
													zintervalo = zintervalo + 1;
												}
												
												// Asi como la iteracion de construccion del contenido de la tabla de intervalos.
												// Dentro de la tabla, hay que hacer referencia a la propia pagina
												// anadiendo obligatoriamente el parametro zinicio!!!
												int zokvuelta = 0;
												
												for (zcontador = 0; zcontador < zintervalo; zcontador++) {
													
													String	ziniciointervalo = String.valueOf(1 + zcontador*zventana);
													int zfinintervalo2 = zcontador*zventana + zventana;
													String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
													
													if (zfinintervalo2 > zcount) {
														zfinintervalo = String.valueOf(zcontador*zventana + zresto);
													}

													// Cada n vueltas saltamos de fila:
													if (zsalto == zvuelta) {
														zokvuelta = 1;
													%>
														<tr>
													<%
														zsalto = 0;
													}

													if (zinicio.equals(ziniciointervalo) == true) {
													%>
														<td class="navegacion"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></td>
													<% 			
													} else {
													%>
														<td align="center" class="navegacion2">
															<a href="javascript:m4valor('oculto','zinicio',<%=ziniciointervalo%>,'set');saveSelectedValues('<%=zcounti%>');valores();"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></a>
														</td>

													<%
													}

													zsalto = zsalto + 1;
												}
												%>
												</tr>
											</table>
										</div>

															<%
											if( Integer.parseInt(sExistMoreValues) > 0) {
											%>
												<div class="m4-textCenter m4-minMarginTop m4-minMarginBottom">
													<p>* <%=Tran_shco_rp.getProperty("Literal.MoreValues")%></p>
												</div>
											<%
											}
											%>
									</form>

									<%
									if (Integer.parseInt(zIdInternalType) == 90 || Integer.parseInt(zIdInternalType) == 92) {
									%>

										<div class="m4-flex center vCenter">

											<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>"tabindex="<%=(zTab+1)%>" href="javascript:returnSelectedValues('<%=zcounti%>');">
												<img class="imgIcon" src="/shco_rp/iconos/send-mail.svg" alt="<%=Tran_shco_rp.getProperty("Button.OK")%>" />
												<p><%=Tran_shco_rp.getProperty("Button.OK")%></p>
											</a>
											
											<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/>" tabindex="<%=(zTab+1)%>" href="javascript:window.close();">
												<img class="imgIcon" src="/shco_rp/iconos/close3.svg" alt="<%=Tran_shco_rp.getProperty("Literal.Close")%>" />
												<p><%=Tran_shco_rp.getProperty("Literal.Close")%></p>
											</a>
										</div>
									<%
									}
									%>

								<%
								}
								%>
								
								<m4:endpage/>

								<%@ include file="../shco_g0/shco_gen_set_sec_role_end.jsp" %>

							</div>
						</div>
					</div>
				</div>

				<!-- Panel Right -->
				<div id="panel-right" class="">
					<!--content panel right -->
					<div id="table-panel-right"></div>
				</div>
			</div>
		</div> <!-- END main -->

	</body>
</html>