<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_rp_list_pub_reports.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>

<html>
	<head>
		<title></title>
		
		<%@ include file="../../shco_g0/shco_gen_bag.jsp" %>
		
		<!-- <%@ include file="../../shco_g0/shco_gen_css.jsp" %> -->
		
		<%@ include file="../../shco_g0/shco_gen_list_arg.jsp" %>
		<%@ include file="../../shco_g0/shco_gen_tec_include.jspf" %>
		
		<%
			String sID_T3 = getRequestValueBlack(request, "txtIdT3", ""); 

			String zpag = getRequestValueBlack(request, "zpag", "1"); // Pongo a uno para que salga el menu
			String znw = getRequestValueBlack(request, "znw", "");      
			
			if ((znw==null)||(znw.equals(""))) {
				if ((zpag=="0")||(zpag.equals("0"))) {
					znw = "0";
				}else{
					znw = "1";
				}
			}
			
			String znew = "shco_rp/shco_or_mt_pub_reports.jsp";
			znw = "1";
			
			if (!zpag.equals("0")) {
				znew = zpag;
			}


			// Escribe el nivel de menus por defecto
			znivelmenu = getRequestValueBlack(request, "znivelmenu", "1");


			// Parámetros del M4Object:
			String zsubsesion = "SHCO_RP_MT_PUB_REPORTS";
			String zm4object = zsubsesion;

			String znodo = zm4object;

			zventanas = "20";												//*MODIFICABLE
			zvuelta = 5;													//*MODIFICABLE
			String zdireccion = "shco_rp/shco_rp_list_pub_reports.jsp";		//*MODIFICABLE

			//escribe el nombre  de esta pag. 
			String zredireccion = "shco_rp_list_pub_reports.jsp";
		  
			
			// Items que vamos a utilizar (visualizar o requeridos en una acción):
			String zcampoID = "ID_REPORT";
			String zcampoNombre = "N_REPORT";
			String zcampoSalida = "ID_OUTPUT";
			String zcampoConsulta = "N_T3";
			String zcampoIdConsulta = "ID_T3";
			String zcampoCategoria = "N_CATEGORY";
			String zcampoFecha = "DT_LAST_UPDATE_DATE";
			String zcampoIdReportType = "ID_REPORT_TYPE";
			String zDummyCategory ="ZZZZZ";

			
			// Indica el campo por el que ordenas en la TI y si es asc o desc
			// Por defecto se carga ordenado por el campo ultima actualización descendentemente
			if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){
				zOrdenCampo = zcampoFecha;
			}
			
			if ((zOrden==null)||(zOrden.equals(""))){
				zOrden = "2";
			}
		%>
		
		<%@ include file = "../../shco_g0/shco_gen_list_preload.jsp" %>
		
		<script type="text/javascript" language="Javascript1.5">
		
			var sNPk="<%=zcampoNombre%>";
			var scampoant="<%=zOrdenCampo%>";
			var sOrd="<%=zOrden%>";
		</script>
		
		<%request.setAttribute("menus_Loaded","1");%>
		
		<%@ include file="../../shco_g0/shco_gen_list_js.jsp" %>
		
		<%
			String zIdReport = zcomun + zcampoID;
			String zlIdReport = zraiz + zcampoID; 

			String zNReport = zcomun + zcampoNombre;
			String zlNReport = zraiz + zcampoNombre;

			String zIDOutput = zcomun + zcampoSalida;
			String zlIDOutput = zraiz+ zcampoSalida; 

			String zIDT3 = zcomun + zcampoIdConsulta;
			String zNT3 = zcomun + zcampoConsulta;
			String zlNT3 = zraiz+ zcampoConsulta;

			String zNCategory  = zcomun + zcampoCategoria;
			String zlNCategory = zraiz+ zcampoCategoria;

			String zLastActDate = zcomun + zcampoFecha;
			String zlLastActDate = zraiz+ zcampoFecha;

			String zIdReportType= zcomun +zcampoIdReportType;

			String zSHCOLBEXECUTE = zraizlabel + "SHCO_LB_EXECUTE";

			String zNOutput = "";
		%>

		<script type="text/javascript" language="Javascript1.5">

			function ExecuteReport(sIdReport, sNReport, sIdT3, sIdOutput,sIdReportType) {

				// Crear la nueva ventana
				var hoy = new Date(); 
				var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();

				//Abro la ventana
				window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560"); 

				if (sIdReportType != 3) {   
					m4valor('ExecuteReportParameters','txtIdReport',sIdReport,'set');
					m4valor('ExecuteReportParameters','txtNReport',sNReport,'set');
					m4valor('ExecuteReportParameters','txtIdT3',sIdT3,'set');
					m4valor('ExecuteReportParameters','txtIdOutput',sIdOutput,'set');
					m4valor('ExecuteReportParameters','txtReportParam',"##/AUTOLOAD:DESIGN:OFF## ##/NZOOM## ##/PRESERVE_DIR## ##/NSEARCH## ##/NTOC##",'set');
					m4valor('ExecuteReportParameters','txtIdReportType',sIdReportType,'set');
					m4settarget('ExecuteReportParameters',sNewWindow);
					m4submit('ExecuteReportParameters');
				}
			}
		</script>


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

	<body onclick="meta4Cookie.Cookie.setEventCookie();" onkeypress="meta4Cookie.Cookie.setEventCookie();">

		<div id="main" class="onlyCenterPanel">

			<!-- Header -->
			<div id="header">
				
					<div id="m4-titleBar" class="m4-titleBar">
						
						<div class="m4-titleBar-content">
						
							<!-- Provocar la carga -->
							<%
								if (ztipocarga.equals("NORMAL")== true) {
									ztipocarga = "AN_REPORT*A1*{BN_REPORT*A1*{";
								}
							%>

							<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
							<%@ include file="../../shco_g0/shco_gen_exec.jsp" %>
							<%@ include file="../../shco_g0/shco_gen_list_filter.jsp" %>
							<%@ include file="../../shco_g0/shco_gen_list_outputdef.jsp" %>
							<%@ include file="../../shco_g0/shco_gen_list_count.jsp" %>
							<%@ include file="../../shco_g0/shco_gen_title.jsp" %>
							<%@ include file="/shco_rp/shco_rp_trans.jsp" %>

							

							<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>
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
								
								<div class="tableNoHead grey-block m4-padding-m jspTable">
									<%@ include file="../../shco_g0/shco_gen_list_filt.jsp" %>
								</div>
							
								<!-- Formulario de paso de parámetros al askParam -->
								<form method="post" name="ExecuteReportParameters" action ="/servlet/CheckSecurity/JSP/shco_rp/pubaskparam.jsp">
									<input type="hidden" name="txtIdReport" value=""/>
									<input type="hidden" name="txtNReport" value=""/>
									<input type="hidden" name="txtIdT3" value=""/>
									<input type="hidden" name="txtIdOutput" value=""/>
									<input type="hidden" name="txtReportParam" value=""/>
									<input type="hidden" name="txtIdReportType" value=""/>
									<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
								</form>

								<div class="m4-flex center m4-maxMarginTop m4-maxMarginBottom">
									<h3><%=Tran_shco_rp.getProperty("Literal.List")%></h3>
									<!-- Conteo paginación -->
									<p class="itemToRight"><%@ include file="../../shco_g0/shco_gen_pest.jsp" %></p>
								</div>

								<table class="m4-table datos">
									<thead>
										<tr class="titulo">
											
											<th>
												<div class="m4-flex center">
													<a class="noLine-height">
													
													<%
														String iconShort0 = "/shco_rp/iconos/sortable-mono-white.svg";
														String iconShort1 = "/shco_rp/iconos/sortable-down-mono-white.svg";
														String iconShort2 = "/shco_rp/iconos/sortable-up-mono-white.svg";

														String iconSrc = ""; 

														if ((zOrdenCampo==zcampoNombre)||(zOrdenCampo.equals(zcampoNombre))) {

															if ((zOrden=="1")||(zOrden.equals("1"))) {

																iconSrc = iconShort1;

															}else if ((zOrden=="2")||(zOrden.equals("2"))) {

																iconSrc = iconShort2;
															}

														}else{

															iconSrc = iconShort0;
														}
													%>

														<img src="<%=iconSrc%>" alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNReport%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoNombre%>');"/>

													</a>
													<label class="m4-minMarginLeft"><m4:label m4name="<%=zlNReport%>"  htmlsafe="true"/></label>
												</div>
											</th>

											<th class="th96px">
												<div class="m4-flex center">
													<a class="noLine-height">

													<%
														if ((zOrdenCampo==zcampoSalida)||(zOrdenCampo.equals(zcampoSalida))) {

															if ((zOrden=="1")||(zOrden.equals("1"))) {

																iconSrc = iconShort1;

															}else if ((zOrden=="2")||(zOrden.equals("2"))) {

																iconSrc = iconShort2;
															}
														}else{

															iconSrc = iconShort0;
														}
													%>

														<img src="<%=iconSrc%>" alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlIDOutput%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoSalida%>');"/>

													</a>
													<label class="m4-minMarginLeft"><m4:label m4name="<%=zlIDOutput%>"  htmlsafe="true"/></label>
												</div>
											</th>
											
											<th class="th192px">
												<div class="m4-flex center">
													<a class="noLine-height">

													<%
														if ((zOrdenCampo==zcampoCategoria)||(zOrdenCampo.equals(zcampoCategoria))) {

															if ((zOrden=="1")||(zOrden.equals("1"))) {

																iconSrc = iconShort1;

															}else if ((zOrden=="2")||(zOrden.equals("2"))) {

																iconSrc = iconShort2;
															}
														}else{

															iconSrc = iconShort0;
														}
													%>

														<img src="<%=iconSrc%>" alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNCategory%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoCategoria%>');"/>

													</a>
													<label class="m4-minMarginLeft"><m4:label m4name="<%=zlNCategory%>"  htmlsafe="true"/></label>
												</div>
											</th>

											<th class="th192px">
												<div class="m4-flex center">
													<a class="noLine-height">

													<%
														if ((zOrdenCampo==zcampoFecha)||(zOrdenCampo.equals(zcampoFecha))) {

															if ((zOrden=="1")||(zOrden.equals("1"))) {

																iconSrc = iconShort1;

															}else if ((zOrden=="2")||(zOrden.equals("2"))) {

																iconSrc = iconShort2;
															}
														}else{

															iconSrc = iconShort0;
														}
													%>

														<img src="<%=iconSrc%>" alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlLastActDate%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoFecha%>');"/>

													</a>
													<label class="m4-minMarginLeft"><m4:label m4name="<%=zlLastActDate%>"  htmlsafe="true"/></label>
												</div>
											</th>
										</tr>
									</thead>

									<tbody>
										<% 
											if (zcount>0) {
										%>
												<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
													<!-- <%@ include file="../../shco_g0/shco_gen_loop.jsp" %> --> <!-- OJO -->
													
													<tr>
														<td class="valor<%=zpos%>">
															<a tabindex="7+zpos"title="<m4:label m4name="<%=zSHCOLBEXECUTE%>" htmlsafe="true"/> <m4:label m4name="<%=zlNReport%>" htmlsafe="true"/>" href="" onclick="ExecuteReport('<m4:item m4name="<%=zIdReport%>" jsafe="true" htmlsafe="true"/>', '<m4:item m4name="<%=zNReport%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zIDT3%>"   jsafe="true" htmlsafe="true"/>', '<m4:item m4name="<%=zIDOutput%>" jsafe="true" htmlsafe="true" m4format="0.#" />','<m4:item m4name="<%=zIdReportType%>"   jsafe="true" htmlsafe="true" m4format="0.#"/>');return false;"><m4:item m4name="<%=zNReport %>"  htmlsafe="true"/>
															</a>
														</td>

														<td class="valor<%=zpos%>">                    

															<m4:item m4name="<%=zIDOutput%>" m4varname="zsNOutput" m4format="0.#"/>

															<%
																if (zsNOutput.substring(0, 1).equals("1")) {
																	zNOutput = "HTML";
																} else if (zsNOutput.substring(0, 1).equals("2")) {
																	zNOutput = "PDF";
																} else if (zsNOutput.substring(0, 1).equals("3")) {
																	zNOutput = "EXCEL";
																} else if (zsNOutput.substring(0, 1).equals("5")) {
																	zNOutput = "EXCEL";
																} else if (zsNOutput.substring(0, 1).equals("6")) {
																	zNOutput = "TXT";
																} else if (zsNOutput.substring(0, 1).equals("7")) {
																	zNOutput = Tran_shco_rp.getProperty("Literal.Letter");
																} else {
																	zNOutput = "";
																}               
															 %>

															<p><%=zNOutput%></p>
														</td>

														<td class="valor<%=zpos%>">
															<p><m4:item m4name="<%=zNCategory%>" htmlsafe="true"/></p>
														</td>
														
														<td class="valor<%=zpos%>">
															<p><m4:item m4name="<%=zLastActDate%>" htmlsafe="true"/></p>
														</td>
													</tr>
												</m4:loop>
										<%
											} else {
										%>
												<tr>
													<td class="fuentenodatos" colspan="4">
														<p class="m4-textCenter"><br><%@ include file="../../shco_g0/shco_gen_list_nodata.jsp" %></p>
													</td>
												</tr>
										<%
											}
										%>
									</tbody>
								</table>
									
								<% 
									if (zcount>0) {
								%>
										<div class="m4-flex end m4-padding-s grey-block tablePagination">
											<%@ include file="../../shco_g0/shco_gen_vent_post.jsp" %>
										</div>
								<%
									}
								%>

								<!-- <%
									if (zpag.equals("0")== false) {
								%>
										<%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %>
								<%
									} else {
								%>
											<m4:endpage/>
										</div>
								<%
									}
								%> --> <!-- OJO -->

								
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
