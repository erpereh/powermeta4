function printTableData(anio){
	$.ajax({
		url: '../proy_ret_json.jsp?ANIO='+anio, 
		dataType: 'json',
		success: function(result){
			console.log(result);

			//getAll(result);

			loadAll(result);
			printGrafDoughnut(result);
			printGrafBar(result,anio);
		},
		error: function (xhr, ajaxOptions, thrownError) {
	        console.log(xhr.status);
	        console.log(thrownError);
	    }
	});
}




function getColumns00(nm_pay){
	var columnas = [{ title: "Concepto", data: 'concept' }];
	$.each(nm_pay, function( key, value ) {
		columnas.push({ title: value, data: 'pays.'+key, render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	});
	columnas.push({ title: "Total", data: 'tot_pays', render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	return columnas;
}

function getColumns01(){
	var columnas = [{ title: "Concepto", data: 'concept' }];
	columnas.push({ title: "Valor", data: 'pay', className: 'sum', render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	return columnas;
}

function getColumns02(isreal){
	var columnas = [{ title: "Concepto", data: 'concept' }];
	columnas.push({ title: (isreal) ? 'REAL' : 'VALORACIÓN PROYECTADO/ACUM.' , data: 'pay', className: 'sum', render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	columnas.push({ title: 'TOTAL' , data: 'tot_pays', className: 'sum', render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	return columnas;
}

function getColumns03(){
	var columnas = [{ title: "Concepto", data: 'concept' }];
	columnas.push({ title: 'Ordinaria', data: 'ord', className: 'sum', render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	columnas.push({ title: 'Extraordinaria', data: 'ext', className: 'sum', render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	columnas.push({ title: 'TOTAL', data: 'tot', className: 'sum', render: $.fn.dataTable.render.number( '.', ',', 2, '', '€' ) });
	return columnas;
}

function getColorColumns00(nm_pay,ind){
	var columnas = [];
	var margini = 1;
	$.each(nm_pay, function( key, value ) {		
		var clasec = (key>=ind) ? 'pagapro' : 'paganormal';
		columnas.push({ targets: key+margini, className: clasec });		
	});
	return columnas;
}

function getDatosModo00(data){
	var datoset = [];		
	$.each( data, function( key2, value2 ) { datoset.push(value2); });		
	return datoset;
}



function loadAll(result){

	$('#id_hr').html(result.projection_data.id_hr);
	$('#nm_first_name').html(result.projection_data.id_hr+' - '+result.projection_data.nm_first_name+' '+result.projection_data.nm_family_name);
	//$('#nm_family_name').html(result.projection_data.nm_family_name);
	$('#nm_category').html(result.projection_data.nm_category);
	$('#nm_work_location').html(result.projection_data.nm_work_location);


	var valcolorCol = getColorColumns00(result.projection_data.nm_pay, result.projection_data.n_real_pays);

	cargaGen('tab_salario_convenio',result.direct_remuneration.fixed_remuneration.data.salario_convenio, getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);

	cargaGen('tab_complementos_compania',result.direct_remuneration.fixed_remuneration.data.comp_org, getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);

	cargaGen('tab_complemento_funcional',result.direct_remuneration.fixed_remuneration.data.comp_funcional, getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);

	cargaGen('tab_total_ret_directa',[result.direct_remuneration.fixed_remuneration.tot], getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);
	
	cargaGen('tab_aux_base_ret',result.direct_remuneration.base_ret_var, getColumns01, null, function( settings ) { $('#tab_aux_base_ret thead').remove(); }, null, null);

	cargaGen('tab_seguridad_social',result.direct_remuneration.seg_soc, getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);



	cargaGen('tab_ret_en_especie',result.indirect_retribution.val_especie, getColumns02, 'isreal', null, null, mifooterCallback);

	cargaGen('tab_valoracion_especie',result.indirect_retribution.contrato_seguros, getColumns02, 'isreal', null, null, mifooterCallback);

	cargaGen('tab_ayudas',result.indirect_retribution.ayudas, getColumns02, 'isreal', null, null, mifooterCallback);

	cargaGen('tab_manutencion',result.indirect_retribution.comidas, getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);

	cargaGen('tab_dietas_kilo',result.indirect_retribution.diet_km, getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);

	cargaGen('tab_ret_flexible',result.indirect_retribution.ret_flex, getColumns00, result.projection_data.nm_pay, null, valcolorCol, null);



	if(result.other_retribution.compro_jub){
		cargaGen('tab_compjub',[result.other_retribution.compro_jub.data], getColumns01, null, null, null, mifooterCallback);
	}else{
		$('#cont_tab_compjub').remove();
	}

	cargaGen('tab_plan_pre_social_emp',result.other_retribution.plan_prev_emp, getColumns03, null, null, null, mifooterCallback);

	cargaGen('tab_aporta_def',result.other_retribution.rp_aportacion_definida, getColumns01, null, null, null, mifooterCallback);

	cargaGen('tab_iner_form',result.other_retribution.inv_formacion, getColumns01, null, null, null, mifooterCallback);

}



function cargaGen(tab, datos, funcol, argfuncol, callfuncdraw, colorscolum, vamifooterCallback){
	if(datos){
		if(argfuncol!=null){
			if(typeof (argfuncol) == 'object'){
				var columnas = funcol(argfuncol);
			}else{
				var columnas = funcol(datos[argfuncol]);
			}
		}else{
			var columnas = funcol();
		}		 
		if(datos.data){
			var vaform = getDatosModo00(datos.data);
		}else{
			var vaform = getDatosModo00(datos);
		}
		
		load(tab,columnas, vaform, callfuncdraw, colorscolum, vamifooterCallback);
	}else{
		$('#cont_'+tab).remove();
	}
}




function mifooterCallback(row, data, start, end, display) {
  	var api = this.api();
 
  	api.columns('.sum', {
    	page: 'current'
  	}).every(function() {
    	var sum = this.data().reduce(function(a, b) {
    		var x = parseFloat(a) || 0;
    		var y = parseFloat(b) || 0;
    		return x + y;
  		}, 0);
  		var numFormat = $.fn.dataTable.render.number( '.', ',', 2, '', '€' ).display;
    	$(this.footer()).html(numFormat(sum));
  	});
}




function load(idtabla,columnas,datos,callfuncdraw,colorscolum,vamifooterCallback) {	;
	if(datos.length>0){
		if($('#'+idtabla+'[class*="dataTable"]').length>0) {
			// clave para hacer un reload
			$('#'+idtabla).DataTable().clear().destroy();
			$('#'+idtabla+' thead').remove();
		}

		$('#'+idtabla).DataTable( {
	    	//retrieve: true,
	    	searching: false,
	    	paging: false,
			//ordering: false,
			info: false,
			language: txtESDatatable,
	        data: datos,			        
	        columns: columnas,
	        drawCallback: callfuncdraw,
	        columnDefs: colorscolum,
	        footerCallback: vamifooterCallback
	    } );

    }else{
    	console.log('Se elimina #cont_'+idtabla);
    	$('#cont_'+idtabla).remove();
    }
   		    
}