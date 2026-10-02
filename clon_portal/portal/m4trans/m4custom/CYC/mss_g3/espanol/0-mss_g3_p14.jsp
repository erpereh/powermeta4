<%@page contentType="text/html"%> 
<%@page pageEncoding="UTF-8"%> 
<!DOCTYPE>
<html>
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 

  <%@ include file="/m4trans/m4custom/CYC/sse_generico/0-sse_generico_taglib.jsp" %>
  <%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %> 
  <%@ include file="/m4trans/sse_g3/0-sse_train_trans.jsp"%>

  <%
  	Generatablaparametros zobjtabla = new Generatablaparametros(request);
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
    String zfiltro = "";
    String zfiltroEncr = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltro");
	if (zfiltroEncr == null || zfiltroEncr.equals("")) {
		String sIdHREncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", "ALL");
		zfiltroEncr=sIdHREncr;
		zfiltro="";
	}
    else {zfiltro = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", zfiltroEncr);}
	String zNomfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro");
	String zTLoad = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTLoad");
	

	if ((zTLoad==null)|| (""==zTLoad)){zTLoad = "EC";} // FR (Fornacion realizada), EC (Eventos actuales convocados)
	if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "ALL";} 
	if ((zNomfiltro==null)|| (""==zNomfiltro)){zNomfiltro = "Todos";}
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

	String zsubsesion = "SSM_TRAINING_ENROLLMENT";
	String zmeta4object = "SSM_TRAINING_ENROLLMENT";  
	String znodo = "SSM_ENROLLMENT_SUBACTION";
	String znodo1 = "SSM_EMPLEADOS";
	String znodomain = "SSM_PRINCIPAL";
	
	
	String ztipocarga = zTLoad;
    String zventanas = "20";
	int zvuelta = 5;
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
	//String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
    //String zmove = znodo + ":" + znodo 
    String zoutputdef = zsubsesion + "!" + znodo + "[*]";
    String zmove = znodo + ":" + znodo;

    String zlectura = zsubsesion + "!" + znodo;
    String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
    String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
    String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
    String zlectura1 = zsubsesion + "!" + znodo1;
	String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
	String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
      
   	String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";		
			
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
	String zSCO_GB_NAMEEMP = zraiz + "SCO_GB_NAME";
	String zNOMBREEMP = zraiz + "NOMBRE_EMP";
	String zidSubProduct = zraiz + "SCO_ID_DEV_SUBPRODUCT";
	String zNOMBREFORM = zraiz + "SCO_NM_DEV_SUBPRODUCT";
	String zidSubAction = zraiz + "SCO_ID_DEV_SUBACTION";
	String zNOMBRESESION = zraiz + "SCO_NM_DEV_SUBACTION";
	String zDTSTART = zraiz + "DT_START";
	String zFECHAFIN = zraiz + "DT_END";

	String zSTDNFAMILYNAME1 = zraiz1 + "STD_N_FAMILY_NAME_1";
	String zSTDNFIRSTNAME = zraiz1 + "STD_N_FIRST_NAME";
	String zSTDIDPERSON = zraiz1 + "STD_ID_PERSON";
	String zSCO_GB_NAME = zraiz1 + "SCO_GB_NAME";

	String sSortNode = zmeta4object + "!" + znodo + ".Sort";

  %>

  <link type="text/css" rel="stylesheet" href="/css/estilo_sse.css"/>

  <link type="text/css" rel="stylesheet" href="/LibQ/DataTables_CSS_CYC/datatables_css_portal_CYC.css" />
  <!-- <link type="text/css" rel="stylesheet" href="/LibQ/DataTables_min/datatables.min.css" /> -->
  <script type="text/javascript" src="/LibQ/jQuery-3.3.1/jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="/LibQ/DataTables_min/datatables.min.js"></script>
  <script type="text/javascript" src="/LibQ/DataTable_trad/mi_datatable_es.js"></script>
  <script type="text/javascript" src="/LibQ/DataTable_trad/mi_datatable_pt_ordenado.js"></script>
  <script type="text/javascript" src="/LibQ/DataTable_trad/mi_datatable_es_ordenado_fechas_dd-mm-yyy.js"></script>
  <script type="text/javascript" src="/LibQ/DataTables_Q_js/datatable_general.js"></script>


  	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  
  	
  	<% if(zTLoad.equals("FR")){ %>
  		<title>Formaciones realizadas</title>
	<% }else{ %>
		<title>Eventos actuales convocados</title>
	<% } %>


  <style type="text/css">


  	.h26td{
	    min-height: 26px !important;
	}

    .cent-text{
      text-align:center;
    }

	.enlace {
	    border-bottom: #395a82;
	    border-left: #395a82;
	    background-color: transparent;
	    color: #15314c;
	    border-top: #395a82;
	    border-right: #395a82;
	    text-decoration: none;
	    font-size: 13px;
	    font-family: Arial, Helvetica, Sans-Serif;
	    cursor: pointer;
	}

	.enlace:hover {
	    background-color: transparent;
	    color: #0000ff;
	    text-decoration: none;
	}

  </style>


</head>
<body>


  <m4:startpage m4task="<%=zsubsesion%>"/>


    <m4:beginjob/>

		<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		
		<% try {
			    M4Operations m = new M4Operations(request); 
			    m.setItem(zsubsesion,znodomain,"","SSM_ID_PERSON",zfiltro);
				} catch(Exception e) {}
		%>

		<m4:exec m4method="<%=zmetodocarga%>">
			<m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/>
		</m4:exec>

		<m4:sortitems m4name="<%=sSortNode%>">
			<m4:param name="DT_START" value="DESC"/>
		</m4:sortitems>

		<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
	<m4:endjob/>

	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>


    <% 
    	int zcounti = new Integer(new M4Operations(request).getCountInClient(znodo,zsubsesion,znodo)-1); 
		String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti); 
	%>


    
   <table width="100%" cellspacing="0" style="padding-bottom: 20px;">
		<tr><td class="titulofuncional" colspan="2">Formaciones realizadas</td></tr>
		<tr>
			<td>
				<img src="/iconos/noname_evalua_cursos_74_100.gif" width="100" height="100" alt="Eventos actuales convocados" >
			</td>
			<td>
				<div class="descripcionfuncional">
					<% if(zTLoad.equals("FR")){ %>
						Consulta la Formaci&oacute;n realizada de tus empleados
					<% }else{ %>
						Consulta la Eventos actuales convocados de tus empleados
					<% } %>
				</div>
				<ul class="listaenlace">
					<li>
						<% if(zTLoad.equals("FR")){  %>
							<a class="enlacefuncional" title="Eventos actuales convocados" href="mss_g3_p14.jsp?zTLoad=EC">Cursos actuales convocados</a>
						<% }else{ %>
							<a class="enlacefuncional" title="Formaci&oacute;n realizada" href="mss_g3_p14.jsp?zTLoad=FR">Formaci&oacute;n realizada</a>
						<% } %>
					</li>
				</ul>
			</td>	
		</tr>
	</table>
    


    <table id="tablaSalida" class="tablaestados" width="100%" cellspacing="0">

      <thead>

        <tr style="background-color: white;">
        	<th data-funbus="buscaqcontencade" data-tipo="text">Empleado</th>
        	<th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicos" data-origen="tablaSalida">Formaci&oacute;n</th>
        	<th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicos" data-origen="tablaSalida">Sesi&oacute;n</th>
        	<th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicosFechaOnlyYear" data-origen="tablaSalida" data-separa="-" data-posicion="2">Inicio</th>
        	<th data-funbus="buscaqcontencade" data-tipo="select" data-funci="valoresColmnUnicosFechaOnlyYear" data-origen="tablaSalida" data-separa="-" data-posicion="2">Fin</th>
        </tr>

        <tr>
          <td><center>Empleado</center></td>
          <td><center>Formaci&oacute;n</center></td>
          <td><center>Sesi&oacute;n</center></td>
          <td><center>Inicio</center></td>
          <td><center>Fin</center></td>
        </tr>
        
      </thead>

      <tbody>

        <m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">

        	<tr>
				<td class="h26td"><m4:item m4name="<%=zSCO_GB_NAMEEMP%>" htmlsafe="true"/></td>			                            
				<td class="enlace" onclick="verdescdevtraining('0','<m4:item m4name="<%=zidSubProduct%>" jsafe="true" htmlsafe="true"/>');" title="Detalle de la formaci&oacute;n"><m4:item m4name="<%=zNOMBREFORM%>" htmlsafe="true"/></td>		                       
				<td class="enlace" onclick="verdescdevtraining('1','<m4:item m4name="<%=zidSubAction%>" jsafe="true" htmlsafe="true"/>');" title="Detalle de la sesi&oacute;n"><m4:item m4name="<%=zNOMBRESESION%>" htmlsafe="true"/></td>     
				<td class="cent-text"><m4:item m4name="<%=zDTSTART%>" htmlsafe="true"/></td>
				<td class="cent-text"><m4:item m4name="<%=zFECHAFIN%>" htmlsafe="true"/></td>
			</tr> 

        </m4:loop>
      </tbody>


    </table>


  <m4:endpage/>



  <script type="text/javascript">

  	function verdescdevtraining(typeDev,id){
  		var dir = "/servlet/CheckSecurity/JSP/sse_generico";
		dir += (typeDev == 0) ? "/sgco_desc_dev_subproduct.jsp?estado=11&zidSubProduct=" : "/sgco_desc_dev_subaction.jsp?estado=11&zidSubAction=" ;
		dir += id + "&zidCost=" + "0";
		window.open(dir,'Vis','width=800,height=300,left=50,top=50,resizable,scrollbars,fullscreen=no').focus();
	}

    $(document).ready(function() {

		colocaFiltros_thead('#tablaSalida');
		$('#tablaSalida').DataTable({ 
			columnDefs: [
				{ type: 'ord-pt-cyc', targets: 0 },
				{ type: 'ord-pt-cyc', targets: 1 },
				{ type: 'ord-pt-cyc', targets: 2 },
				{ type: 'fecha-es-cyc', targets: 3 },
				{ type: 'fecha-es-cyc', targets: 4 },
			],
			order: [[ 4, "desc" ]],
			language: txtESDatatable,
			scrollY: "300px",
			scrollX: true,
			paging: false,
			ordering: true,
			info: true
		});
		cargaFunBusqueda_thead('#tablaSalida');


	} );

  </script>


</body>
</html>



