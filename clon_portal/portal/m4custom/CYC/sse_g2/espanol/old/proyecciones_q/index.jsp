<%@ taglib uri="M4Tags" prefix="m4"%><%@ page import="java.io.*, java.util.*, java.net.*"%>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"  import="com.meta4.session.*, com.meta4.m4operations.*"%>
<%@ page import="java.text.DecimalFormat" %>

<%
//no cache
  response.setHeader("Pragma","no-cache"); 
  response.setHeader("Cache-Control","no-store"); 
  response.setDateHeader("Expires", -1);   
  response.setContentType("text/html;charset=UTF-8");
  request.setCharacterEncoding("UTF8");
  
  String anio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio");
  if ((anio==null)||(anio.equals(""))){anio = "0";}

%>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
  	<meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" charset="UTF-8">

	<title>Proyeccones</title>

	<link rel="stylesheet" type="text/css" href="./css/bootstrap.css">	
	<link rel="stylesheet" type="text/css" href="./css/jquery.dataTables.min.css">	
	<link rel="stylesheet" type="text/css" href="./css/buttons/buttons.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="./css/micss.css">	

	<script type="text/javascript" src="./js/jquery-3.5.1.js"></script>
	<script type="text/javascript" src="./js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="./js/dataTables-tra-ES.js" charset="UTF-8"></script>

	<script type="text/javascript" src="./js/buttons/dataTables.buttons.min.js"></script>
	<script type="text/javascript" src="./js/buttons/jszip.min.js"></script>
	<script type="text/javascript" src="./js/buttons/pdfmake.min.js"></script>
	<script type="text/javascript" src="./js/buttons/vfs_fonts.js"></script>
	<script type="text/javascript" src="./js/buttons/buttons.html5.min.js"></script>
	<script type="text/javascript" src="./js/buttons/buttons.print.min.js"></script>

	<script type="text/javascript" src="./js/printTableData.js"></script>

	<script type="text/javascript" src="./js/chart.js"></script>
	<script type="text/javascript" src="./js/printGrafDoughnut.js"></script>
	<script type="text/javascript" src="./js/printGrafBar.js"></script>
</head>
<body>

	<main>
 		<div class="container py-4">

 			<div class="row">

				<div id="cont_a" class="col-md-12">
					<div class="p-5 mb-4 shadow rounded-3">
	      				<div class="pt-0 pb-4 container-fluid py-5">
	      					<div class="col-md-12 pb-4">
	      						<img class="fr" class="pb-4" border="0" src="/iconos/logo_cyc_renhash_CYC_v1.jpg">
	      					<!-- </div>
	      					<div class="col-md-12 pb-4"> -->
	      						<h2 class="pt-3">PROYECCIÓN TEÓRICA HABERES AÑO <%=anio%></h2>
	      					</div>
	      					<div class="col-md-12">
	      						<!-- <h5 id="id_hr"></h5> -->
	      						<h5 id="nm_first_name"></h5>
	      						<!-- <h5 id="nm_family_name"></h5> -->
	      						<h5 id="nm_category"></h5>
	      						<h5 id="nm_work_location"></h5>
	      					</div>
	      				</div>
  					</div>
				</div>

			</div>

			<div class="row">

				<div id="cont_a" class="col-md-6 mb-4">
					<div class="shadow rounded-3">
						
	      				<div class="container-fluid">
	      					
							<h4 class="grafico00">Remuneración Directa</h4>							

	      					<div class="canvasgra00">	      						
	      						<canvas id="graf00" width="1000" height="1000"></canvas>
	      					</div>
	      				</div>
  					</div>
				</div>

				<div id="cont_tab_b" class="col-md-6 mb-4">
					<div class="shadow rounded-3">
	      				<div class="container-fluid">

	      					<h4 class="grafico00">Retribución Indirecta</h4>	

	      					<div class="canvasgra00">
	      						<canvas id="graf01" width="1000" height="1000"></canvas>
	      					</div>
	      				</div>
	      			</div>
				</div>

			</div>

 			<!-- <div class="p-5 mb-4 bg-light rounded-3"> -->
 			<div class="p-5 mb-4 shadow rounded-3">
      			<div class="pt-0 pb-4 container-fluid py-5">
      				<h2 class="pb-4">RETRIBUCIÓN DIRECTA</h2>

					<div id="cont_tab_salario_convenio" class="overflow-auto">
						<h5>SALARIO CONVENIO</h5>
						<table id="tab_salario_convenio" class="display" width="100%"></table>
					</div>


					<div id="cont_tab_complementos_compania" class="pt-4 overflow-auto">
						<h5>COMPLEMENTOS COMPAÑíA</h5>
						<table id="tab_complementos_compania" class="display" width="100%"></table>
					</div>
					<div id="cont_tab_complemento_funcional" class="pt-4 overflow-auto">
						<h5>COMPLEMENTO FUNCIONAL</h5>
						<table id="tab_complemento_funcional" class="display" width="100%"></table>
					</div>

					<div id="cont_tab_total_ret_directa" class="pt-4 overflow-auto">
						<h5>TOTAL</h5>
						<table id="tab_total_ret_directa" class="display" width="100%"></table>
					</div>

					<div id="cont_tab_aux_base_ret" class="row">
     					 <div class="col-md-4">
							<div class="pt-4 overflow-auto">
								<table id="tab_aux_base_ret" class="display" width="100%"></table>
							</div>
						</div>
					</div>

					<div id="cont_tab_seguridad_social" class="pt-4 overflow-auto">
						<h5>SEGURIDAD SOCIAL</h5>
						<table id="tab_seguridad_social" class="display" width="100%"></table>
					</div>

				</div>
			</div>


			<div class="p-5 mb-4 shadow rounded-3">
      			<div class="pt-0 pb-4 container-fluid py-5">
      				<h2 class="pb-4">RETRIBUCIÓN INDIRECTA. Beneficios Sociales.</h2>

      				<div class="row">
     					<div id="cont_tab_ret_en_especie" class="col-md-6 p-5 pt-0">
		      				<div class="pt-4 overflow-auto">
								<h5>RETRIBUCIÓN EN ESPECIE</h5>
								<table id="tab_ret_en_especie" class="display" width="100%">
									<tfoot><tr><th>Total</th><th></th><th></th></tr></tfoot>
								</table>
							</div>
						</div>
					
     					<div id="cont_tab_valoracion_especie" class="col-md-6 p-5 pt-0">
		      				<div class="pt-4 overflow-auto">
								<h5>VALORACIÓN R. ESPECIE</h5>
								<table id="tab_valoracion_especie" class="display" width="100%">
									<tfoot><tr><th>Total</th><th></th><th></th></tr></tfoot>
								</table>
							</div>
						</div>

						<div id="cont_tab_ayudas" class="col-md-6 p-5 pt-0">
		      				<div class="pt-4 overflow-auto">
								<h5>AYUDAS</h5>
								<table id="tab_ayudas" class="display" width="100%">
									<tfoot><tr><th>Total</th><th></th><th></th></tr></tfoot>
								</table>
							</div>
						</div>
					</div>

					<div id="cont_tab_manutencion" class="pt-4 overflow-auto">
						<h5>MANUTENCIÓN POR JORNADA PARTIDA</h5>
						<table id="tab_manutencion" class="display" width="100%"></table>
					</div>

					<div id="cont_tab_dietas_kilo" class="pt-4 overflow-auto">
						<h5>DIETAS Y KILOMETRAJES</h5>
						<table id="tab_dietas_kilo" class="display" width="100%"></table>
					</div>

					<div id="cont_tab_ret_flexible" class="pt-4 overflow-auto">
						<h5>RETRIBUCIÓN FLEXIBLE</h5>
						<table id="tab_ret_flexible" class="display" width="100%"></table>
					</div>

				</div>
			</div>


			<div class="p-5 mb-4 shadow rounded-3">
      			<div class="pt-0 pb-2 container-fluid py-5">
      				<h2 class="pb-4">OTRAS RETRIBUCIONES</h2>

      				<div class="row">

      					<div id="cont_tab_compjub" class="col-md-6 p-5 pt-0">
		      				<div class="pt-4 overflow-auto">
								<h5>COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior)</h5>
								<table id="tab_compjub" class="display" width="100%">
									<tfoot><tr><th>Total</th><th></th></tr></tfoot>
								</table>
							</div>
						</div>

     					<div id="cont_tab_plan_pre_social_emp" class="col-md-6 p-5 pt-0">
		      				<div class="pt-4 overflow-auto">
								<h5>PLAN PREVISIÓN SOCIAL EMPRESARIAL</h5>
								<table id="tab_plan_pre_social_emp" class="display" width="100%">
									<tfoot><tr><th>Total</th><th></th><th></th><th></th></tr></tfoot>
								</table>
							</div>
						</div>

						<div id="cont_tab_aporta_def" class="col-md-6 p-5 pt-0">
		      				<div class="pt-4 overflow-auto">
								<h5>SEGURO APORTACIÓN DEFINIDA CONVENIO COLECTIVO</h5>
								<table id="tab_aporta_def" class="display" width="100%">
									<tfoot><tr><th>Total</th><th></th></tr></tfoot>
								</table>
							</div>
						</div>

						<div id="cont_tab_iner_form" class="col-md-6 p-5 pt-0">
		      				<div class="pt-4 overflow-auto">
								<h5>INVERSIÓN EN FORMACIÓN</h5>
								<table id="tab_iner_form" class="display" width="100%">
									<tfoot><tr><th>Total</th><th></th></tr></tfoot>
								</table>
							</div>
						</div>

					</div>

				</div>
			</div>

			<div class="row">

				<div id="cont_c" class="col-md-12 mb-4">
					<div class="shadow rounded-3">
						
	      				<div class="p-5 container-fluid">
	      					
							<h4 class="grafico01">Últimos años</h4>							

	      					<div class="canvasgra02">	      						
	      						<canvas id="graf02" width="1000" height="300"></canvas>
	      					</div>

	      				</div>
  					</div>
				</div>

			</div>

		</div>
	</main>
	
	<script type="text/javascript">

		$(document).ready(function() {	

		   printTableData('<%=anio%>');

		} );

	</script>

</body>
</html>