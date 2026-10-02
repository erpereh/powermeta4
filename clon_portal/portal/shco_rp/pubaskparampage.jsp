<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: pubaskparampage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<html>
	<head>

		<title></title> 
		<%
			String zm4object = "SHCO_RP_PUB_REPORTS";
			String zsubsesion = zm4object;
		%>

		<%@ include file="../shco_g0/shco_gen_set_sec_role_begin.jsp" %>
		
		<m4:startpage m4task='<%=zsubsesion%>'/>

		<%@ include file="../shco_rp/pubaskparamjob.jsp" %>

		<%@ include file="../shco_g0/shco_gen_arg.jsp" %>
		<%@ include file="../shco_g0/shco_gen_bag.jsp" %>
		<%request.setAttribute("menus_Loaded","1");%>
		<%@ include file="../shco_g0/shco_gen_normal_js.jsp" %>
		<%@ include file="../shco_g0/shco_gen_js.jsp" %>
		<%@ include file="/shco_rp/shco_rp_trans.jsp" %>
		<%@ include file="../shco_g0/shco_gen_label.jsp" %>
		<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>

		<% int zTab = 0; 
		   String sPos = "N" ;
		   String zdireccion = "shco_rp/pubaskparam.jsp";   
		   znivelmenu = "1";
		   String zSHCO_LB_ACCEPT = zraizlabel + "SHCO_LB_ACCEPT";
		   String zSHCOLBCLOSE = zraizlabel + "SHCO_LB_CLOSE";
		   String zSHCOLBPARAMS = zraizlabel + "SHCO_LB_PARAMS";
		   String zSHCOLBFILTERS = zraizlabel +"SHCO_LB_FILTERS";
		   String zSHCO_LB_CURRENCY = zraizlabel + "SHCO_LB_CURRENCY";
		   
		   String zsParamTypeFix = "TYPE_";
		   String zsParamIdFix = "ID_";
		   String zsParamIdFix2 = "ID2_";
		   String zsParamNameFix = "NAME_";
		   String zsParamScaleFix = "SCALE_";
		   String zsParamPrecFix = "PREC_";
		   String zsParamNotNullFix = "NOT_NULL_";
		 
		   String zsParamChangeType = "CH_TP_";
		   String zsParamIdCurrency = "ID_CUR_";
		   String zsParamChangeDate = "CH_DT_";
		   String zsParamCurNumDec = "CUR_NUM_DEC_";
		   String zsParamNCurrency = "N_CUR_";
		   
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
	
		<m4:item outputdef="ApiAskParam" item="PAR_ID_T3" m4varname="zsRepIdT3" />
		<m4:item outputdef="ApiAskParam" item="PAR_ID_REPORT" m4varname="zsRepIdReport" />
		<m4:item outputdef="ApiAskParam" item="PAR_ID_OUTPUT" m4varname="zsRepIdOutput" m4format="0"/>
		<m4:item outputdef="ApiAskParam" item="PAR_REPORT_PARAM" m4varname="zsRepParam" />
		<m4:item outputdef="ApiAskParam" item="PAR_N_REPORT" m4varname="zsRepNReport" />
		<m4:item outputdef="ApiAskParam" item="PAR_ID_REPORT_TYPE" m4varname="zsRepIdRepType" m4format="0"/>
		<m4:item outputdef="DataAskParam" item="NUM_PARAMS" m4varname="zsRepNumParams" m4format="0"/>
		<m4:item outputdef="ApiAskParam" item="PAR_LETTER_ONLY_VIEW" m4varname="zsLetterOnlyView" m4format="0"/>
		 
		
		<%-- [unicode] --%><%@ include file="../shco_g0/shco_gen_m4val_js.jsp" %>

		<script type="text/JavaScript"> 
			
			//-------- función para establecer los valores para la ejecución del report --------------------
			//---------(parametros generales y de datos)       
			function AllParameters(bSubmit) {   

				var sAllString = "";
				var iPos=0;
				var sParamValue = "";
				var sTypeParam = "";
				var iNumParams = <%= zsRepNumParams%>;

				for (iPos=0;  iNumParams>iPos; iPos++){
					// recojo el valor del parámetro
				   sTypeParam = m4valor("ListaValores","<%=zsParamTypeFix%>"+ iPos,"","get");
				   if (sTypeParam == "<%=zTYPE_DATE_HOUR%>"){
					   sParamValue = m4valor("ListaValores","<%=zsParamIdFix%>"+iPos,"","get");
					   sParamValue = sParamValue + " " + m4valor("ListaValores","<%=zsParamIdFix2%>"+iPos,"","get");
				   }else{
					   sParamValue = m4valor("ListaValores","<%=zsParamIdFix%>"+iPos,"","get");
				   }    
				   if (sParamValue == ""){
						sAllString = sAllString  + iPos + ";";
				   }else{
						sAllString =  sAllString  +  iPos + " " +  sParamValue + ";";
					}       
				   
				}//for
				
				//establecer el valor de los parámetros
				m4valor("frmrunreport","txtAllParam",sAllString,"set");

				if (bSubmit == true) {
					 // lanzo la peticion de ejecución
					m4submit("frmrunreport");
				}else {
					return sAllString;
				}   
				
			}//function AllParameters
		</script> 

		<form name="frmrunreport" id="frmrunreport" action="/servlet/CheckSecurity/JSP/shco_rp/pubbeforeexecutereport.jsp" method="post" >
		   <!-- ****************************************************************************** -->
		   <!--   Para la ejecucion de informes                                                -->
		   <!-- ****************************************************************************** -->
		   <input type="hidden" id="txtIdReport" name="txtIdReport" value="<%=zsRepIdReport%>"/>
		   <input type="hidden" id="txtIdT3" name="txtIdT3" value="<%=zsRepIdT3%>"/>
		   <input type="hidden" id="txtIdOutput" name="txtIdOutput" value="<%=zsRepIdOutput%>"/>
		   <input type="hidden" id="txtReportParam" name="txtReportParam" value="<%=zsRepParam%>"/>
		   <input type="hidden" id="txtAllParam" name="txtAllParam" value="Null"/>
		   <input type="hidden" id="txtIdReportType" name="txtIdReportType" value="<%=zsRepIdRepType%>"/>
		   <input type="hidden" id="txtNReport" name="txtNReport" value="<%=zsRepNReport%>"/>  
		   <input type="hidden" id="txtLetterOnlyView" name="txtLetterOnlyView" value="<%=zsLetterOnlyView%>"/>  
		   <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
		</form>

		<!-- ************************************************************************************ -->
		<!--Comprobar si hay que pedir los parámetros  o los filtros de fechas                                           -->
		<!-- ************************************************************************************ -->
		<m4:item outputdef="DataAskParam" item="NUM_PARAMS" m4varname="sNumParamsM4Object" m4format="0.#"/>
		<m4:item outputdef="ApiAskParam" item="ASK_HISTORICAL_DATE" m4varname="sAskHistoricalDate" m4format="0.#"/>
		<m4:item outputdef="ApiAskParam" item="ASK_CORRECTION_DATE" m4varname="sAskCorrectionDate" m4format="0.#"/>
		<m4:item outputdef="DynFilterNodeList" item="NUM_DYN_FILTERS" m4varname="sNumFilters" m4format="0.#"/>
		<m4:item outputdef="ApiAskParam" item="ASK_LETTER_VIEW_OR_SEND" m4varname="sAskLetterViewOrSend" m4format="0.#"/>

		<% sNumFilters = "0"; %>
		
		
		<% 
		if ((Integer.parseInt(sNumParamsM4Object) + Integer.parseInt(sNumFilters)) == 0 && (Integer.parseInt(sAskLetterViewOrSend) == 0 || zLetterOnlyViewFilled != null) &&(Integer.parseInt(sAskHistoricalDate) == 0 || zHistoricFiltersFilled != null ) && (Integer.parseInt(sAskCorrectionDate) == 0 || zCorrectionFilterFilled != null )) {
		%>

			<!-- ************************* Directamente ejecutar el informe   ************************* -->
			<script type="text/JavaScript"> AllParameters(1);</script> 

		<% 
		} else {
		%>
			<%
				String zvalue = zsRepNReport;
				String zhelp = "PUBASKPARAMPAGE.htm";
			%>
			
				<!-- <%@ include file = "../shco_g0/shco_gen_title.jsp" %> --> <!-- OJO  -->

				<div id="main" class="onlyCenterPanel">

					<!-- Header -->
					<div id="header">

						<div id="m4-titleBar" class="m4-titleBar">
							
							<div class="m4-titleBar-content">

								<h2><m4:label m4name="<%=zSHCOLBTITLEROOT%>" htmlsafe="true"/> - <%=zvalue%></h2>
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
									if (Integer.parseInt(sAskLetterViewOrSend) == 1 && zLetterOnlyViewFilled == null ) {
									%>
										<!-- formulario para indicar si la carta sólo se visualiza o se envía -->
											<form name="frmShowSendLetterOculto" id="frmShowSendLetterOculto" action="/servlet/CheckSecurity/JSP/shco_rp/pubaskparam.jsp" method="post" >
												<input type="hidden" id="LetterOnlyView" name="LetterOnlyView" value ="<%=zsLetterOnlyView%>" />
												<input type="hidden" id="LetterOnlyViewFilled" name="LetterOnlyViewFilled"  value="0"/> 
												<input type="hidden" id="zsubsesion1" name="zsubsesion" value = '<%=zsubsesion%>' />
												<input type="hidden" id="txtIdT3" name="txtIdT3" value="<%=sID_T3%>"/>
												<input type="hidden" id="txtIdReport" name="txtIdReport" value="<%=sID_REPORT%>"/>
												<input type="hidden" id="txtNReport" name="txtNReport" value="<%=sN_REPORT%>"/>
												<input type="hidden" id="txtIdOutput" name="txtIdOutput" value="<%=sID_OUTPUT%>"/>
												<input type="hidden" id="txtReportParam" name="txtReportParam" value="<%=sREPORTPARAM%>"/>
												<input type="hidden" id="txtIdReportType" name="txtIdReportType" value="<%=sID_REPORT_TYPE%>"/>
												<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
											</form>
											<script type="text/JavaScript">
												function setOnlyShowLetter(vValue) {
													m4valor('frmShowSendLetterOculto','LetterOnlyViewFilled','1','set');
													m4valor('frmShowSendLetterOculto','LetterOnlyView',vValue,'set');
												}
											</script> 	
											<h3><%=Tran_shco_rp.getProperty("Literal.LetterShowOrSendDesc")%></h3>
											<form method="post" id="frmShowSendLetter" class="m4-maxMarginTop m4-xxlMarginBottom" name="frmShowSendLetter" action="">
													<table class="m4-form-table">
														<tbody>
															<tr>
																<td class="m4-form-multipleItem tdInput">
																	<input type="radio" tabindex="1" name="ShowLetterType" value="1" checked onclick="setOnlyShowLetter(1)">
																</td>
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-text grey-text"><%=Tran_shco_rp.getProperty("Literal.LetterOnlyShow")%></label>
																</td>
															</tr>
														
															<tr>
																<td class="m4-form-multipleItem tdInput">
																	<input type="radio" tabindex="2" name="ShowLetterType" value="0" onclick="setOnlyShowLetter(0)">																	
																</td>
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-text grey-text"><%=Tran_shco_rp.getProperty("Literal.LetterSend")%></label>
																</td>
																
															</tr>
														</tbody>
													</table>
												</form>
											<div class="m4-flex center vCenter">
												<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>"tabindex="<%=(zTab+1)%>" href="javascript:m4submit('frmShowSendLetterOculto');">

													<img class="imgIcon" src="/shco_rp/iconos/send-mail.svg" alt="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>">
													<p><m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/></p>
												</a>

												<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<%=Tran_shco_rp.getProperty("Button.Cancel")%>" tabindex="<%=(zTab+1)%>" href="javascript:window.close();">

													<img class="imgIcon" src="/shco_rp/iconos/close3.svg" alt="<m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/>">
													<p><m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/></p>
												</a>
											</div>
											<script type="text/JavaScript">
												setOnlyShowLetter(1);
											</script>
									
										
										<%}else{
										if (Integer.parseInt(sAskHistoricalDate) == 1 && zHistoricFiltersFilled == null || Integer.parseInt(sAskCorrectionDate) == 1 && zCorrectionFilterFilled == null ) {
										%>
				
											<!-- formulario para establecer las fechas de histórico y corrección -->
											<form name="frmHistoriCorrectionOculto" id="frmHistoriCorrectionOculto" action="/servlet/CheckSecurity/JSP/shco_rp/pubaskparam.jsp" method="post" >
												<input type="hidden" id="HistoricFiltersFilled" name="HistoricFiltersFilled"  value="0"/> 
												<input type="hidden" id="CorrectionFilterFilled" name="CorrectionFilterFilled"  value="0"/>     
												<input type="hidden" id="zsubsesion1" name="zsubsesion" value = '<%=zsubsesion%>' />
												<input type="hidden" id="HistoricFilterStartDate" name="HistoricFilterStartDate" value ="" />
												<input type="hidden" id="HistoricFilterEndDate" name="HistoricFilterEndDate" value = "" />
												<input type="hidden" id="CorrectionFilterDate" name="CorrectionFilterDate" value = "" />
												<input type="hidden" id="txtIdT3" name="txtIdT3" value="<%=sID_T3%>"/>
												<input type="hidden" id="txtIdReport" name="txtIdReport" value="<%=sID_REPORT%>"/>
												<input type="hidden" id="txtNReport" name="txtNReport" value="<%=sN_REPORT%>"/>
												<input type="hidden" id="txtIdOutput" name="txtIdOutput" value="<%=sID_OUTPUT%>"/>
												<input type="hidden" id="txtReportParam" name="txtReportParam" value="<%=sREPORTPARAM%>"/>
												<input type="hidden" id="txtIdReportType" name="txtIdReportType" value="<%=sID_REPORT_TYPE%>"/>
												<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
												<input type="hidden" id="txtLetterOnlyView" name="txtLetterOnlyView" value="<%=zsLetterOnlyView%>"/>
											</form>

											<script type="text/JavaScript">
												function checkDatesFilter() {
													var sfunciones = "";
													var sHistStartDate ="";
													var sHistEndDate = "";
													<% if (Integer.parseInt(sAskHistoricalDate) == 1){ %>
														iHistoricFilterType = m4valor('frmHistoricFilter','HistoricFilterType','','get');
														if (iHistoricFilterType == 2)
														{
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_date','frmHistoricFilter','txtOneDate',1,'" + _shco_rp_FilterDates_Hist_Date + "',sformatofechas)";
															sHistStartEndDate = m4valor('frmHistoricFilter','txtOneDate','','get');
															sHistStartDate = sHistStartEndDate;
															sHistEndDate = sHistStartDate;
														}
														else if (iHistoricFilterType == 3)
														{               
															iCheckStartDate= document.forms["frmHistoricFilter"].elements["chkDataStartDateMinusInf"].checked;
															if (iCheckStartDate != true){
																if (sfunciones != ""){sfunciones = sfunciones + "*";}
																sfunciones = sfunciones + "m4valinput('_date','frmHistoricFilter','txtDataStartDate',1,'" + _shco_rp_FilterDates_Hist_StartDate + "',sformatofechas)";
																sHistStartDate = m4valor('frmHistoricFilter','txtDataStartDate','','get');
															}
															iCheckEndDate= document.forms["frmHistoricFilter"].elements["chkDataEndDatePlusInf"].checked;
															if (iCheckEndDate != true){
																if (sfunciones != ""){sfunciones = sfunciones + "*";}
																sfunciones = sfunciones + "m4valinput('_date','frmHistoricFilter','txtDataEndDate',1,'" + _shco_rp_FilterDates_Hist_EndDate + "',sformatofechas)";
																sHistEndDate = m4valor('frmHistoricFilter','txtDataEndDate','','get');
															}
														}
													<%}%>
													
													var sCorrectionDate = ""; 
													<% if (Integer.parseInt(sAskCorrectionDate) == 1){ %>
														iCorrectionFilterType = m4valor('frmCorrectionFilter','CorrectionFilterType','','get');
														if (iCorrectionFilterType == 1)
														{
															sCorrectionDate = m4today();
														}
														else {
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_date','frmCorrectionFilter','txtCorrectionDate',1,'" + _shco_rp_FilterDates_Corr_Date + "',sformatofechas)";
															sCorrectionDate = m4valor('frmCorrectionFilter','txtCorrectionDate','','get');
														}
													<%}%>
												
													var vOk=1;
													if (sfunciones.length > 0)  
													{ 
														vOk =m4valform(sfunciones);
													}
													if ( vOk ==1) 
													{
														
														
														<% if (Integer.parseInt(sAskHistoricalDate) == 1){ %>
															m4valor('frmHistoriCorrectionOculto','HistoricFiltersFilled','1','set');
															if (sHistStartDate.length > 0 ){
																m4valor('frmHistoriCorrectionOculto','HistoricFilterStartDate',m4formatdatetoISO(sHistStartDate),'set');
															}
															if (sHistEndDate.length > 0 ){
																m4valor('frmHistoriCorrectionOculto','HistoricFilterEndDate',m4formatdatetoISO(sHistEndDate),'set');
															}
														<%}%>
														<% if (Integer.parseInt(sAskCorrectionDate) == 1){ %>
															m4valor('frmHistoriCorrectionOculto','CorrectionFilterFilled','1','set');
															if (sCorrectionDate.length > 0 ){
															m4valor('frmHistoriCorrectionOculto','CorrectionFilterDate',m4formatdatetoISO(sCorrectionDate),'set');
															}
														<%}%>
														
														m4submit("frmHistoriCorrectionOculto");
													}				
												}
											</script> 
					
											<% 
											if (Integer.parseInt(sAskHistoricalDate) == 1) { 
											%>
												<h3><%=Tran_shco_rp.getProperty("FilterDates.HistoricFilterDesc")%></h3>
					
												<script type="text/JavaScript">
													function setHistoricalFilterType(iTypeFilter) {
														m4valor("frmHistoricFilter","txtOneDate","","set");
														m4valor("frmHistoricFilter","txtDataStartDate","","set");
														m4valor("frmHistoricFilter","txtDataEndDate","","set");
														m4lock("frmHistoricFilter","chkDataStartDateMinusInf","disabled","LOCK");
														m4lock("frmHistoricFilter","chkDataEndDatePlusInf","disabled","LOCK");
														m4checkradio ("frmHistoricFilter","chkDataStartDateMinusInf",0)
														m4checkradio ("frmHistoricFilter","chkDataEndDatePlusInf",0)
														m4lock("frmHistoricFilter","txtOneDate","readOnly","LOCK");
														m4lock("frmHistoricFilter","txtDataStartDate","readOnly","LOCK");
														m4lock("frmHistoricFilter","txtDataEndDate","readOnly","LOCK");
														
														
														if (iTypeFilter == 2)
														{   //Por defecto la fecha de hoy
															m4valor("frmHistoricFilter","txtOneDate",m4today(),"set");
															m4lock("frmHistoricFilter","txtOneDate","readOnly","UNLOCK");
															
														}else if (iTypeFilter == 3)
														{           
															m4checkradio ("frmHistoricFilter","chkDataStartDateMinusInf",1)
															m4checkradio ("frmHistoricFilter","chkDataEndDatePlusInf",1)
															m4lock("frmHistoricFilter","chkDataStartDateMinusInf","disabled","UNLOCK");
															m4lock("frmHistoricFilter","chkDataEndDatePlusInf","disabled","UNLOCK");
															clickStartDateM4MinusInf();
															clickEndDateM4PlusInf();        
														}   
													}

													function clickStartDateM4MinusInf() {
														iValueCheck= document.forms["frmHistoricFilter"].elements["chkDataStartDateMinusInf"].checked;
														if (iValueCheck == true)
														{
															m4valor("frmHistoricFilter","txtDataStartDate","","set");
															m4lock("frmHistoricFilter","txtDataStartDate","readOnly","LOCK");
														}
														else{
															m4lock("frmHistoricFilter","txtDataStartDate","readOnly","UNLOCK");
														}
													}
													
													function clickEndDateM4PlusInf() {
														iValueCheck= document.forms["frmHistoricFilter"].elements["chkDataEndDatePlusInf"].checked;
														if (iValueCheck == true)
														{
															m4valor("frmHistoricFilter","txtDataEndDate","","set");
															m4lock("frmHistoricFilter","txtDataEndDate","readOnly","LOCK");
														}
														else{
															m4lock("frmHistoricFilter","txtDataEndDate","readOnly","UNLOCK");
														}
													}
													
													function selectDate(formId,elementId) {
														//Comprobar si la caja de texto está bloqueada
														iReadOnly = document.forms[formId].elements[elementId].readOnly;
														if (iReadOnly == false)
														{
															m4calendar(m4objeto(formId,elementId));
														}
													}
												</script>

												<form method="post" id="frmHistoricFilter" class="m4-maxMarginTop m4-xxlMarginBottom" name="frmHistoricFilter" action="">
													<table class="m4-form-table">
														<tbody>
														
															<tr>
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-textRight grey-text"><%=Tran_shco_rp.getProperty("FilterDates.Hist_AllDates")%></label>
																</td>
																<td class="m4-form-multipleItem tdInput">
																	<input type="radio" tabindex="1" name="HistoricFilterType" value="1" checked onclick="setHistoricalFilterType(1)">
																</td>
															</tr>
														
															<tr>
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-textRight grey-text"><%=Tran_shco_rp.getProperty("FilterDates.HistCorr_SpecDate")%></label>
																</td>
																<td class="m4-form-multipleItem tdInput">
																	<input type="radio" tabindex="2" name="HistoricFilterType" value="2" onclick="setHistoricalFilterType(2)">
																	
																	<input tabindex="3" class="form"  type="text"   id="txtOneDate" name="txtOneDate" size="12" maxlength="10" value="" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/><%=Tran_shco_rp.getProperty("FilterDates.Hist_Date")%>"/>

																	<a href="javascript:selectDate('frmHistoricFilter','txtOneDate')" tabindex="5"><img align="middle" <%@ include file="../files_gif/ic_cal.jsp" %> alt="<%=Tran_shco_rp.getProperty("FilterDates.Hist_Date")%>"/></a>
																</td>
															</tr>

															<tr>
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-textRight grey-text"><%=Tran_shco_rp.getProperty("FilterDates.Hist_RangeDates")%></label>
																</td>
																<td class="m4-form-multipleItem tdInput">
																	<input type="radio" name="HistoricFilterType" value="3" onclick="setHistoricalFilterType(3)">
																</td>
															</tr>
															
															<tr>
																<td class=""></td>
																
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-textRight grey-text"><%=Tran_shco_rp.getProperty("FilterDates.Hist_StartDate")%></label>
																</td>
																
																<td class="m4-form-multipleItem tdInput">
																	
																	<input tabindex="4" class="form" type="text" name="txtDataStartDate" id="txtDataStartDate" size="12" maxlength="10" value="" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <%=Tran_shco_rp.getProperty("FilterDates.Hist_StartDate1")%>" >
																	
																	<a href="javascript:selectDate('frmHistoricFilter','txtDataStartDate')" tabindex="5">
																		<img align="middle" <%@ include file="../files_gif/ic_cal.jsp" %> alt="<%=Tran_shco_rp.getProperty("FilterDates.Hist_StartDate1")%>"/>
																	</a>
																	
																	<input type="checkbox" id="chkDataStartDateMinusInf" class="m4-minMarginLeft" name="chkDataStartDateMinusInf" value="0" onclick="clickStartDateM4MinusInf()">
																	<label><%=Tran_shco_rp.getProperty("FilterDates.Hist_StartDateInf")%></label>

																</td>
															</tr>


															<tr>
																<td class=""></td>

																<td class="tdLabel">
																	<label class="m4-form-table-label m4-textRight grey-text"><%=Tran_shco_rp.getProperty("FilterDates.Hist_EndDate")%></label>
																</td>

																<td class="m4-form-multipleItem tdInput">

																	<input tabindex="7" class="form" type="text" name="txtDataEndDate" id="txtDataEndDate" size="12" maxlength="10" value="" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <%=Tran_shco_rp.getProperty("FilterDates.Hist_EndDate1")%>" > 
																	
																	<a href="javascript:selectDate('frmHistoricFilter','txtDataEndDate')" tabindex="5">
																		<img align="middle" <%@ include file="../files_gif/ic_cal.jsp" %> alt="<%=Tran_shco_rp.getProperty("FilterDates.Hist_EndDate1")%>" />
																	</a>
																	
																	<input type="checkbox" id="chkDataEndDatePlusInf" class="m4-minMarginLeft" name="chkDataEndDatePlusInf" value="0" onclick="clickEndDateM4PlusInf()">

																	<label><%=Tran_shco_rp.getProperty("FilterDates.Hist_EndDateInf")%></label>
																</td>
															</tr>
														</tbody>
													</table>
												</form>


												<script type="text/JavaScript">
													setHistoricalFilterType(1);
												</script>
			   								<%
			   								}
			   								%>
											
											<%
											if (Integer.parseInt(sAskCorrectionDate) == 1){
											%>

												<h3><%=Tran_shco_rp.getProperty("FilterDates.CorrectionFilterDesc")%></h3>

												<script type="text/JavaScript">
													function setCorrectionFilterType(iTypeFilter) {
														m4valor("frmCorrectionFilter","txtCorrectionDate","","set");
														m4lock("frmCorrectionFilter","txtCorrectionDate","readOnly","LOCK");

														
														if (iTypeFilter == 2)
														{   //Por defecto la fecha de hoy
															m4valor("frmCorrectionFilter","txtCorrectionDate",m4today(),"set");
															m4lock("frmCorrectionFilter","txtCorrectionDate","readOnly","UNLOCK");
														}
													}
													
													function selectCorrectionDate(formId,elementId) {
														//Comprobar si la caja de texto está bloqueada
														iReadOnly = document.forms[formId].elements[elementId].readOnly;
														if (iReadOnly == false)
														{
															m4calendar(m4objeto(formId,elementId));
														}
													}
												</script>
												
												<form method="post" id="frmCorrectionFilter" class="m4-maxMarginTop m4-xxlMarginBottom" name="frmCorrectionFilter" action="" >
													<table class="m4-form-table">
														<tbody>

															<tr>
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-textRight grey-text"><%=Tran_shco_rp.getProperty("FilterDates.Corr_ActualDate")%></label>
																</td>
																<td class="m4-form-multipleItem tdInput">
																	<input type="radio" tabindex="1" name="CorrectionFilterType" value="1" onclick="setCorrectionFilterType(1)">
																</td>
															</tr>
														
															<tr>
																<td class="tdLabel">
																	<label class="m4-form-table-label m4-textRight grey-text"><%=Tran_shco_rp.getProperty("FilterDates.HistCorr_SpecDate")%></label>
																</td>
																<td class="m4-form-multipleItem tdInput">
																	<input type="radio" tabindex="2" name="CorrectionFilterType" value="2" checked onclick="setCorrectionFilterType(2)">

																	<input tabindex="3" class="form"  type="text"   id="txtCorrectionDate" name="txtOneDate" size="12" maxlength="10" value="" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <%=Tran_shco_rp.getProperty("FilterDates.Corr_Date")%>" />

																	<a href="javascript:selectCorrectionDate('frmCorrectionFilter','txtCorrectionDate')" tabindex="5">
																		<img align="middle" <%@ include file="../files_gif/ic_cal.jsp" %> alt="<%=Tran_shco_rp.getProperty("FilterDates.Corr_Date")%>" />
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</form>
													   
												<script type="text/JavaScript">
													setCorrectionFilterType(2);
												</script>
											<%
											}
											%>

											<div class="m4-flex center vCenter">
												<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>"tabindex="<%=(zTab+1)%>" href="javascript:checkDatesFilter();">

													<img class="imgIcon" src="/shco_rp/iconos/send-mail.svg" alt="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>">
													<p><m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/></p>
												</a>

												<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<%=Tran_shco_rp.getProperty("Button.Cancel")%>" tabindex="<%=(zTab+1)%>" href="javascript:window.close();">

													<img class="imgIcon" src="/shco_rp/iconos/close3.svg" alt="<m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/>">
													<p><m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/></p>
												</a>
											</div>
										<%
										} else {
										%>
				  
											<script type="text/JavaScript">
												//-------- función para comprobar los tipos de los valores de los parámetros   
												function comprobar() {

													var sfunciones = "";
													var sfunciones1 = "";
													var i =0;
													var iNumParams = <%= zsRepNumParams%>;
													var vResult=1;
													
													for (i = 0; iNumParams>i; i++){
														sIdParam = "<%=zsParamIdFix%>" + i;
														sIdParam2 = "<%=zsParamIdFix2%>" + i;
														sNParam = m4valor("ListaValores","<%=zsParamNameFix%>"+ i,"","get");
														sTypeParam = m4valor('ListaValores',"<%=zsParamTypeFix%>"+ i,'','get');
														sItemNotNull = m4valor('ListaValores',"<%=zsParamNotNullFix%>"+ i,'','get');
														if (sItemNotNull == 1)
														{
															sItemValueToCheck = m4valor('ListaValores',sIdParam ,'','get');
															if (sItemValueToCheck.length == 0){
																var smessage = m4getmessage('_shco_rp_MandatoryParam',sNParam);
																alert(smessage);
																vResult = 0;
															}
														}
														
														switch (sTypeParam){
														  case "<%=zTYPE_DATE%>":
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_date','ListaValores','" + sIdParam + "',1,'"+ sNParam + "',sformatofechas)";
															break;
														  case "<%=zTYPE_DATE_HOUR%>":
															 if (sfunciones != ""){sfunciones = sfunciones + "*";} 
															 sfunciones = sfunciones + "m4valinput('_date','ListaValores','" + sIdParam + "',1,'"+ sNParam + "',sformatofechas)";
															 sfunciones = sfunciones + "*m4valinput('_time_sec','ListaValores','" + sIdParam2 + "',1,'"+ sNParam + "')";
															 break; 
														  case "<%=zTYPE_NUM%>":
															sScale = m4valor("ListaValores","<%=zsParamScaleFix%>"+ i,"","get");
															sPrec = m4valor("ListaValores","<%=zsParamPrecFix%>"+ i,"","get");
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_decimal','ListaValores','" + sIdParam + "','" + sPrec + "','"+ sScale +"','"+ sNParam + "','" + sPrec + "','" +sScale+"')";
															break;
														  case "<%=zTYPE_VARIANT_NUM%>":
															sScale = m4valor("ListaValores","<%=zsParamScaleFix%>"+ i,"","get");
															sPrec = m4valor("ListaValores","<%=zsParamPrecFix%>"+ i,"","get");
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_decimal','ListaValores','" + sIdParam + "','" + sPrec + "','"+ sScale +"','"+ sNParam + "','" + sPrec + "','" +sScale+"')";
															break;
														  case "<%=zTYPE_HOUR%>":
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_time_sec','ListaValores','" + sIdParam + "',1,'"+ sNParam + "')";
															break;
														  case "<%=zTYPE_CURRENCY%>":  
															sdecNumber =  m4valor("ListaValores","<%=zsParamCurNumDec%>"+ i,"","get");
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_currency','ListaValores','" + sIdParam + "','"+sdecNumber+"','"+ sNParam + "')";
															break;
														  case "<%=zTYPE_BLOB%>":
															break;  // Sin validacion
														  case "<%=zTYPE_BINARY_STRING%>":
															break; //sin validación  
														  case "<%=zTYPE_LONG%>":
															break; //sin validación
														  default: //zTYPE_FIX_STRING,zTYPE_VAR_STRING,zTYPE_VARIANT 
															if (sfunciones != ""){sfunciones = sfunciones + "*";}
															sfunciones = sfunciones + "m4valinput('_alfanum','ListaValores','" + sIdParam + "',1,'"+ sNParam + "')";
															break;
														
														  
														}
													}

													if ( vResult ==1)
													{
														if (sfunciones.length > 0)  vResult=m4valform(sfunciones);
														if ( vResult ==1) AllParameters(true);
													}
												}
												//fin function Comprobar 
												
												//----------------------------------------------------------------------------------------------        
												//-------- función de mostrado de los valores de un parámetro -----------------------------------------
												//-----------------------------------------------------------------------------------------------       
												function ShowParamValues(sIdForm,sIdParam,sNparam,sParamReadObject,sParamReadField,sIDInternalType) {

													// No se necesita validación
													if ((sParamReadObject != "") && (sParamReadField != "")){      

													   var spageparamvalues = "/servlet/CheckSecurity/JSP/shco_rp/pubshowparamvaluespage.jsp";
													   spageparamvalues = spageparamvalues + "?zIdReadObject=" +sParamReadObject +"&zIdReadField=" + sParamReadField + "&zParamName="+sNparam + "&zIdInternalType="+sIDInternalType;
													   
													   //Rellenar el array con el objeto a devolver
													   var oparam = new Array;
													   oparam[0] = sIdParam;

													   m4windowcallback("pubshowparamvaluespage", spageparamvalues, oparam, sIdForm, 'afterSelectParamValue("' + sIdParam+ '")', 700, 500);
													}
												}

												function afterSelectParamValue(sIdParamSelected) {
													
													var oobjeto = document.forms["ListaValores"].elements[sIdParamSelected];    
													sValueSelected = oobjeto.value;

													if ((sValueSelected != "") && (sValueSelected != null)) {
														sStringToReplace= "\\'";
														while (sValueSelected.toString().indexOf(sStringToReplace) != -1){ 
															sValueSelected = sValueSelected.toString().replace(sStringToReplace,"'");
														}
														oobjeto.value = sValueSelected;
													}
												}
											</script>

											<!-- Cabecera de petición de parámetros -->
											<h3><%=Tran_shco_rp.getProperty("Literal.AskParamDesc")%></h3>

											<!-- Formulario de petición de parámetros y filtros -->
			   
											<form method="post" id="ListaValores" class="m4-maxMarginTop m4-xxlMarginBottom" name="ListaValores" action=""> 
												<!-- Parámetros -->

												<%
												if (Integer.parseInt(sNumParamsM4Object) > 0) {
												%>

													<p class="xs-fontSize m4-textRight">* <%=Tran_shco_rp.getProperty("Literal.AskParamMandatoryDesc")%></p>

													<table class="m4-form-table">
														<tbody>

												<%
												}
												%>
															<%
															int  iPosicion= 0;
															String sPosicion = "N" ; 
															int iSize = 0;
															int iMaxLength = 0;
															int iSize2 = 0;
															int iMaxLength2 = 0;
															int iScale = 0;
															String sParamValue="";
															String sParamValue2="";
															int iIndex = 0;
															%>

															<m4:dataloop outputdef="DataAskParam">

																<tr>
																	<!-- primera columna , para el nombre del Parametro. En negrita si es obligatorio  ************* -->
																	<m4:item outputdef="DataAskParam" item="ID_TRANSLATED_ITEM" htmlsafe="true" m4varname="sNItem" />
																	<m4:item outputdef="DataAskParam" item="NOT_NULL" m4varname="sNotNull" m4format="0.#"/>
																	
																	<%
																	int iNotNull = 0;
																	
																	if (sNotNull != null) {
																		iNotNull= Integer.parseInt(sNotNull);
																	}
																	%>

																	<td class="tdLabel">
																		<label class="m4-form-table-label m4-textRight grey-text"><%if (iNotNull == 1 ) { %>* <%}%><%=sNItem%></label>
																	</td>

																	<!-- segunda columna , para el valor del parametro  ************************************** -->
																	<m4:item outputdef="DataAskParam" item="ID_ITEM" m4varname="sIDItem" />
																	<m4:item outputdef="DataAskParam" item="PARAM_VALUE" m4varname="sParamValueAux" />
																	<m4:item outputdef="DataAskParam" item="PREC" m4varname="sPrecItem" m4format="0.#"/>
																	<m4:item outputdef="DataAskParam" item="SCALE" m4varname="sScaleItem" m4format="0.#"/>
																	<m4:item outputdef="DataAskParam" item="ID_M4_TYPE" m4varname="sIDM4Type" m4format="0.#" />
																	<m4:item outputdef="DataAskParam" item="ID_READ_FIELD" jsafe="true" m4varname="sIDReadField" />
																	<m4:item outputdef="DataAskParam" item="ID_READ_OBJECT" jsafe="true" m4varname="sIDReadObject" />
																	<m4:item outputdef="DataAskParam" item="ID_INTERNAL_TYPE" jsafe="true" m4varname="sIDInternalType" />
																		
																					
																	<% 
																	// Gestión de Size y MaxLength
																	sPosicion = "" + iPosicion ; 
																	iSize = Integer.parseInt(sPrecItem);
																	iScale = Integer.parseInt(sScaleItem);
																	sParamValue = sParamValueAux;

																	iMaxLength = iSize;
																	
																	if (iScale >0) {
																		
																		iMaxLength = iMaxLength+iScale+1;
																	}                           
																	
																	// Casos especiales
																	if (sIDM4Type.equals(zTYPE_DATE)){
																	
																		iSize = 10;
																	
																	} else if (sIDM4Type.equals(zTYPE_HOUR)){
																	
																		iSize = 8;
																	
																	} else if (sIDM4Type.equals(zTYPE_DATE_HOUR)){
																		
																		iSize = 10;
																		iSize2=8;
																		//Separar la fecha y la hora
																		iIndex = sParamValueAux.indexOf(" ");
																		
																		if (iIndex != -1){
																		
																			sParamValue=sParamValueAux.substring(0,iIndex);
																			sParamValue2=sParamValueAux.substring(iIndex+1);
																		}

																	} else if (sIDM4Type.equals(zTYPE_LONG)||sIDM4Type.equals(zTYPE_BLOB)||sIDM4Type.equals(zTYPE_BINARY_STRING)){
																		
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
																	
																	iPosicion++ ; 

																	//Gestión parámetros obligatorios

																	%>
																	
																	<td class="m4-form-multipleItem tdInput">
																		<input tabindex="<%=(zTab + 1)%>" class="form"  type="text"   id="<%=zsParamIdFix%><%=sPosicion%>" name="<%=zsParamIdFix%><%=sPosicion%>" size="<%=iSize%>" maxlength="<%=iMaxLength%>" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML( sParamValue)%>" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> <%=sNItem%>" />

																		<%
																		if (sIDM4Type.equals(zTYPE_DATE)  || sIDM4Type.equals(zTYPE_DATE_HOUR) || sIDM4Type.equals(zTYPE_HOUR)) {
																		%>
																		
																			<%
																			if (sIDM4Type.equals(zTYPE_DATE)  || sIDM4Type.equals(zTYPE_DATE_HOUR)) {
																			%>
																			
																				<a href="javascript:m4calendar(m4objeto('ListaValores','<%=zsParamIdFix%><%= sPosicion%>'))" tabindex="<%=(zTab + 1)%>"><img align="middle" <%@ include file="../files_gif/ic_cal.jsp" %> alt="<%=sNItem%>" /></a>

																				<%
																				if (sIDM4Type.equals(zTYPE_DATE_HOUR)) {
																				%>
																				
																					<input tabindex="<%=(zTab + 1)%>" class="form" type="text" id="<%=zsParamIdFix2%><%=sPosicion%>" name="<%=zsParamIdFix2%><%=sPosicion%>" size="<%=iSize2%>" maxlength="<%=iMaxLength2%>" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(sParamValue2)%>" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/><%=sNItem%>" />      
																				<%
																				}
																				%>
																			<%
																			}
																			%>
																		<%
																		} else if ( sIDReadObject != null && !sIDReadObject.equals("") && sIDReadField != null && !sIDReadField.equals("")) {
																		%>
																			<a tabindex="<%=(zTab + 1)%>" title="<m4:label m4name='<%=zSHCOLBLIST%>' htmlsafe="true"/> <%=sNItem%>" href="javascript:ShowParamValues('ListaValores','<%=zsParamIdFix%><%=sPosicion%>','<m4:item outputdef="DataAskParam" item="ID_TRANSLATED_ITEM" htmlsafe="true" jsafe="true" />','<%=sIDReadObject%>','<%=sIDReadField%>','<%=sIDInternalType%>');">
																				<img alt="<m4:label m4name='<%=zSHCOLBLIST%>' htmlsafe="true"/><%=sNItem%>" <%@ include file = "../files_gif/ic_list.jsp"%> />
																			</a>

																		<%
																		} else if (sIDM4Type.equals(zTYPE_CURRENCY)) {
																		%>
																				<input tabindex="<%=(zTab + 1)%>" class="disabled" type="text" id="<%=zsParamNCurrency%><%=sPosicion%>" name="<%=zsParamNCurrency%><%=sPosicion%>" size="40" maxlength="62" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znmcur)%>" title="<m4:label m4name="<%=zsParamNCurrency%>"  htmlsafe="true"/>"/>

																				<a tabindex="<%=(zTab + 1)%>" href="javascript:m4currency('ListaValores','<%=zsParamIdFix%><%=sPosicion%>','<%=zsParamIdCurrency%><%=sPosicion%>','<%=zsParamChangeType%><%=sPosicion%>','<%=zsParamChangeDate%><%=sPosicion%>','<%=zsParamCurNumDec%><%=sPosicion%>','<%=zsParamNCurrency%><%=sPosicion%>');">
																					<img align="middle" alt="<m4:label m4name='<%=zSHCOLBLIST%>' htmlsafe="true"/> <m4:label m4name='<%=zSHCO_LB_CURRENCY%>' htmlsafe="true"/>" <%@ include file="../files_gif/ic_pay.jsp"%> />
																				</a>
																				
																				<input type="hidden" id="<%=zsParamIdCurrency%><%=sPosicion%>" name="<%=zsParamIdCurrency%><%=sPosicion%>" value="<%=zidcur%>" />
																				<input type="hidden" id="<%=zsParamChangeDate%><%=sPosicion%>" name="<%=zsParamChangeDate%><%=sPosicion%>" value="" />
																				<input type="hidden" id="<%=zsParamChangeType%><%=sPosicion%>" name="<%=zsParamChangeType%><%=sPosicion%>" value="<%=zextype%>" />
																				<input type="hidden" id="<%=zsParamCurNumDec%><%=sPosicion%>" name="<%=zsParamCurNumDec%><%=sPosicion%>" value="<%=zdecnb%>" />

																		<%
																		}
																		%>

																		<input type="hidden" id="<%=zsParamTypeFix%><%=sPosicion%>" name="<%=zsParamTypeFix%><%=sPosicion%>" value="<%=sIDM4Type%>" />
																		<input type="hidden" id="<%=zsParamNameFix%><%=sPosicion%>" name="<%=zsParamNameFix%><%=sPosicion%>" value="<%=sNItem%>" />
																		<input type="hidden" id="<%=zsParamPrecFix%><%=sPosicion%>" name="<%=zsParamPrecFix%><%=sPosicion%>" value="<%=sPrecItem%>" />
																		<input type="hidden" id="<%=zsParamScaleFix%><%=sPosicion%>" name="<%=zsParamScaleFix%><%=sPosicion%>" value="<%=sScaleItem%>" /> 
																		<input type="hidden" id="<%=zsParamNotNullFix%><%=sPosicion%>" name="<%=zsParamNotNullFix%><%=sPosicion%>" value="<%=sNotNull%>" />             
																	</td>
																</tr>
															</m4:dataloop>






															
															
															<!-- *********************** DESHABILITAMOS LOS FILTROS DINAMICOS ***************************** -->
															<% sNumFilters = "0"; %>
															
															<!-- ************************************************************************************ -->
															<!-- Filtros en ejecución                                                                 -->  
															<!-- ************************************************************************************ -->

															<%
															if ( Integer.parseInt(sNumFilters) > 0) {
															%>
																<!-- formulario para edicion/borrado del filtro en ejecucion -->

																<form name="frmoculto" id="frmoculto" action="" method="post" >
																	<input type="hidden" id="zidoperation" name="zidoperation"  value=""/>
																	<input type="hidden" id="zidsentence" name="zidsentence"  value=""/>
																	<input type="hidden" id="zidescenario" name="zidescenario"  value=""/>
																	<input type="hidden" id="zidtable" name="zidtable" value = "" />
																	<input type="hidden" id="zforwardpage" name="zforwardpage" value = "" />
																	<input type="hidden" id="zreturnpage" name="zreturnpage" value = "" />
																	<input type="hidden" id="zidrelationtype" name="zidrelationtype" value = "1" />
																	<input type="hidden" id="zm4alias" name="zm4alias" value = "" />
																	<input type="hidden" id="zidnode" name="zidnode" value = "" />
																	<input type="hidden" id="zworkingwithparams" name="zworkingwithparams" value = "" />
																	<input type="hidden" id="zparamsvalues" name="zparamsvalues" value = "" />
																	<input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = '<%=sDYN_FILTER_ALIAS%>'/>   
																	<input type="hidden" id="zsubsesion1" name="zsubsesion" value = '<%=zsubsesion%>' />
																	<input type="hidden" id="txtLetterOnlyView" name="txtLetterOnlyView" value="<%=zsLetterOnlyView%>"/>
																</form>

																<script type="text/JavaScript"> 

																	//-------- función de edición de un filtro en ejecución -----------------------------------------

																	function EditFilter(sIdObject,sIdNode,sIdSentence) {
																		// No se necesita validación
																		m4valor("frmoculto","zidoperation","API_GET_FILTER","set");
																		m4valor("frmoculto","zidsentence",sIdSentence,"set");
																		m4valor("frmoculto","zidtable",sIdObject,"set");
																		m4valor("frmoculto","zforwardpage","/servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilter.jsp","set");
																		m4valor("frmoculto","zreturnpage","/servlet/CheckSecurity/JSP/shco_rep/dynsavefilter.jsp","set");
																		m4valor("frmoculto","zidnode",sIdNode,"set");
																		m4valor("frmoculto","zworkingwithparams","1","set");
																		m4valor("frmoculto","zparamsvalues",AllParameters(false),"set");
																		m4prop("frmoculto","action","/servlet/CheckSecurity/JSP/shco_rep/dynfilteredit.jsp","set");
																		m4submit("frmoculto");          
																	}

																	//-------- función de borrado de un filtro en ejecución -----------------------------------------  
																	function RemoveFilter(sIdSentence,sIdNode) {

																		// No se necesita validación
																		if (sIdSentence != ""){      

																			m4valor("frmoculto","zidoperation","API_REMOVE_FILTER","set");
																			m4valor("frmoculto","zidsentence",sIdSentence,"set");
																			m4valor("frmoculto","zforwardpage","/servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilterservice.jsp","set");
																			m4valor("frmoculto","zreturnpage","/servlet/CheckSecurity/JSP/shco_rep/dynsavefilter.jsp","set");
																			m4valor("frmoculto","zidnode",sIdNode,"set");    
																			m4valor("frmoculto","zworkingwithparams","1","set");
																			m4valor("frmoculto","zparamsvalues",AllParameters(false),"set");
																			m4prop("frmoculto","action","/servlet/CheckSecurity/JSP/shco_rep/dynfilteredit.jsp","set");
																			m4submit("frmoculto");
																		}        
																	}
																</script>
																 

																<tr class="titulo">
																	<th colspan="4"><m4:label m4name="<%=zSHCOLBFILTERS%>"  htmlsafe="true"/></th>
																</tr>

																<!-- loop para recorrer los nodos que tienen DynFilter -->
																
																<m4:dataloop outputdef="DynFilterNodeList">
																	<tr>
																		<!-- Columna: Link para editar el filtro ****************************************** -->             
																		<m4:item outputdef="DynFilterNodeList" item="ID_NODE" m4varname="sIdNode"/>
																		<m4:item outputdef="DynFilterNodeList" item="N_NODE" m4varname="sNNode"/>
																		<m4:item outputdef="DynFilterNodeList" item="ID_READ_OBJECT" m4varname="sIdObject"/>
																		<m4:item outputdef="DynFilterNodeList" item="ID_T3" m4varname="sIdT3"/>
																		<m4:item outputdef="DynFilterNodeList" item="ARG_ID_SENTENCE" m4varname="sIdSentence"/>

																		<td width = "30%">
																			<a tabindex="<%=(zTab + 1)%>" href="javascript:EditFilter('<%=sIdObject%>','<%=sIdNode%>','<%=sIdSentence%>')" title='<m4:label m4name="<%=zSHCOLBEDIT%>" htmlsafe="true"/> <%= sNNode%>'/><%= sNNode%></a>
																		</td>

																		<!-- Columna: Lenguaje natural del filtro ****************************************** -->                
																		<m4:item outputdef="DynFilterNodeList" item="ARG_LANGUAGE" m4varname="sLang_Natural"/>
																		
																		<td width = "70%"><%= sLang_Natural%>            
																		</td>

																		<!-- Columna para el boton de borrar ***************************************************** -->                 
																		<td >
																			<a tabindex="<%=(zTab + 1)%>" title="<m4:label m4name="<%=zSHCOLBDEL%>"  htmlsafe="true"/>" href="javascript:RemoveFilter('<%=sIdSentence%>','<%=sIdNode%>');">
																				<img alt='<m4:label m4name="<%=zSHCOLBDEL%>" htmlsafe="true"/>' <%@ include file="../files_gif/ic_bor.jsp" %>/>
																			</a>
																		</td>

																	</tr>              
																</m4:dataloop>

																<!-- fin loop para recorrer los filtros dinamicos *********************************************** -->
															<%
															}
															%> <%-- fin filtros dinámicos --%>
														</tbody>
													</table>
											</form>

											<!--Botones de Aceptar/Cancelar  ******************************************************** -->
														
											<div class="m4-flex center vCenter">
												<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>"tabindex="<%=(zTab+1)%>" href="javascript:comprobar();">

													<img class="imgIcon" src="/shco_rp/iconos/send-mail.svg" alt="<m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/>">
													<p><m4:label m4name="<%=zSHCO_LB_ACCEPT%>"  htmlsafe="true"/></p>
												</a>
														   
												<a class="m4-flex center m4-minMarginLeft m4-minMarginRight" title="<m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/>" tabindex="<%=(zTab+1)%>" href="javascript:window.close();">
													
													<img class="imgIcon" src="/shco_rp/iconos/close3.svg" alt="<m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/>">
													<p><m4:label m4name="<%=zSHCOLBCLOSE%>"  htmlsafe="true"/></p>
												</a>
											</div>
										<%
										}
										%>

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
		<%
		}}
		%>
			
		<m4:endpage/>
			
		<%@ include file="../shco_g0/shco_gen_set_sec_role_end.jsp" %>
		<script type="text/javascript">
			/**
			 *Function to detect if browser is IE :-(
			 * 	return version IE or -1 if not IE
			 */
			function getInternetExplorerVersion() {

				var rv = -1;
				if (navigator.appName == 'Microsoft Internet Explorer') {
					var ua = navigator.userAgent;
					var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
					if (re.exec(ua) != null)
						rv = parseFloat(RegExp.$1);
				} else if (navigator.appName == 'Netscape') {
					
					/// in Edge the navigator.appVersion does not say trident
					if (navigator.appVersion.indexOf('Edge') > -1)
					{
						rv = 12;
					}
					else 
					{
						var ua = navigator.userAgent;
						var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
						
						if (re.exec(ua) != null)
						{
							rv = parseFloat(RegExp.$1);
						}
						
					}
				}
				return rv;
			}

			// Check if IE11
			if (getInternetExplorerVersion() === 11) {
				
				var elementsForm= document.getElementsByClassName("m4-form-multipleItem tdInput");

				for (var i = 0; i < elementsForm.length; i++) {
					
					elementsForm[i].setAttribute( 'class', 'm4-ie11 m4-form-multipleItem tdInput' );
				}
			}
		</script>
	</body>
</html>
















