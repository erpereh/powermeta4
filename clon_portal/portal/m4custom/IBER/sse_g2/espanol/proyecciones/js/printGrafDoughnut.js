/*const tooltipPlugin = Chart.registry.getPlugin('tooltip');
tooltipPlugin.positioners.myCustomPositioner = function(elements, eventPosition) {
  
    var tooltip = this;

    

    return {
        x: 0,
        y: 0
    };
};*/

const deflabelsgra00 = [
	'RBFA',
	'R. Variable',
	'Coste Empresa SS'
];

const defbackcolor00 = [
	'rgb(222, 0, 30)',
	'rgb(54, 162, 235)',
	'rgb(255, 205, 86)'
];

// const deflabelsgra01 = [
// 	'Retribución en Especie',
// 	'Valoración R. Especie',
// 	'Ayudas',
// 	'Manutención por J.P.',
// 	'Dietas y kilometrajes',
// 	'Retribución Flexible'
// ];

const deflabelsgra01 = [
	'RBFA',
	'Target R. Variable',	
	'Manutención por J.P.',	
	'Kilometrajes',
	'Prima Seguro Vida',
	'Prima Seguro Accidentes',
	'Apt. PPSE año Anterior',
	'Prima Seguro de Salud',
	'Cesta de Navidad',
	'Ayuda Estudios Hijos',
	'A. Seg. Aport. Definida',
	'Becas de empleados',
	'Ayuda Consumo',
	'Formación Año Anterior'
];

// const defbackcolor01 = [
// 	'rgb(222, 0, 30)',
// 	'rgb(54, 162, 235)',
// 	'rgb(255, 205, 86)',
// 	'rgb(255 159 64)',
// 	'rgb(75 192 192)',
// 	'rgb(153 102 255)'
// ];

const defbackcolor01 = [
	'rgb(222, 0, 30)',
	'rgb(54, 162, 235)',
	'rgb(255, 205, 86)',
	'rgb(255, 159, 64)',
	'rgb(75, 192, 192)',
	'rgb(153, 102, 255)',
	'rgb(255, 99, 132)',
	'rgb(82, 192, 75)',
	'rgb(175, 94, 18)',
	'rgb(18, 55, 175)',
	'rgb(84, 32, 90)',
	'rgb(156, 156, 156)',
	'rgb(72, 72, 72)',
	'rgb(155, 118, 0)'
];

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

function printGrafDoughnut(restp){
	var varsetup00 = getSetup00(restp);
	var varcondif00 = getConfig(varsetup00);
	loadGrafDoughnut('graf00',varcondif00);

	var varsetup01 = getSetup01(restp);
	var varcondif01 = getConfig(varsetup01);
	loadGrafDoughnut('graf01',varcondif01);

	//if(restp.indirect_retribution.ret_flex){
	if(restp.direct_remuneration.rflex_anual){
		var varsetup02 = getSetup02(restp);
		var varcondif02 = getConfig(varsetup02);
		loadGrafDoughnut('graf02',varcondif02);
	}
}


function getSetup00(restp){

	var datlabels = [];
	var datos = [];
	var datcolor = [];
	if(restp.direct_remuneration.fixed_remuneration){
		datlabels.push(deflabelsgra00[0]);
		datos.push(restp.direct_remuneration.fixed_remuneration.tot.tot_pays);
		datcolor.push(defbackcolor00[0]);
	}
	if(restp.direct_remuneration.variable_remuneration){
		datlabels.push(deflabelsgra00[1]);
		if(restp.direct_remuneration.variable_remuneration.tot.tot_pays!=0){
			datos.push(restp.direct_remuneration.variable_remuneration.tot.tot_pays);
		}else{
			var dat1 = restp.direct_remuneration.base_ret_var.data[0].pay;
			var dat2 = restp.direct_remuneration.base_ret_var.data[1].pay;
			datos.push(dat1 + dat2);
		}
		datcolor.push(defbackcolor00[1]);
	}
	if(restp.direct_remuneration.seg_soc && getindexfom(restp.direct_remuneration.seg_soc.data,'Coste S.S. empresa') != -1){
		datlabels.push(deflabelsgra00[2]);
		//datos.push(restp.direct_remuneration.seg_soc.data[0].tot_pays);
		datos.push(restp.direct_remuneration.seg_soc.data[getindexfom(restp.direct_remuneration.seg_soc.data,'Coste S.S. empresa')].tot_pays);
		datcolor.push(defbackcolor00[2]);
	}
    
	const total = datos.reduce((a, b) => a + b, 0);	

	$.each(datos, function( key, value ) {	
		var porcen = Math.round(value * 100 / total);
		if(porcen<1) porcen = '<1';
		// var numFormat = $.fn.dataTable.render.number( '.', ',', 2, '', '€' ).display;
		// datlabels[key] = [porcen + '%' + ' ' + datlabels[key], numFormat(value)];
		datlabels[key] = [porcen + '%' + ' ' + datlabels[key], formatter.format(value)];
	});

	return {
		labels: datlabels,
		datasets: [{
			label: '',
			data: datos,
			backgroundColor: datcolor,
			hoverOffset: 4
		}]
	};

}

function getSetup01(restp){

	var datlabels = [];
	var datos = [];
	var datcolor = [];

	//if(restp.direct_remuneration.fixed_remuneration){
	if(restp.direct_remuneration.datos_quinquenal && getindexfom(restp.direct_remuneration.datos_quinquenal.data,'Retrib anual año actual') != -1){
		datlabels.push(deflabelsgra01[0]);
		//datos.push(restp.direct_remuneration.fixed_remuneration.tot.tot_pays);

		if(restp.projection_data.year<new Date().getFullYear()){
			datos.push(restp.direct_remuneration.datos_quinquenal.data[getindexfom(restp.direct_remuneration.datos_quinquenal.data,'Retrib anual año actual')].tot);
		}else{
			datos.push(restp.direct_remuneration.datos_quinquenal.data[getindexfom(restp.direct_remuneration.datos_quinquenal.data,'Retrib anual año actual')].pay);
		}

		datcolor.push(defbackcolor01[0]);
	}
	//if(restp.direct_remuneration.base_ret_var && getindexfom(restp.direct_remuneration.base_ret_var.data,'Base Referencia Retribucion Variable') != -1){
	if(restp.direct_remuneration.datos_quinquenal && getindexfom(restp.direct_remuneration.datos_quinquenal.data,'Retrib variable año actual') != -1){
		datlabels.push(deflabelsgra01[1]);
		//datos.push(restp.direct_remuneration.base_ret_var.data[0].pay);

		//var ele1 = restp.direct_remuneration.base_ret_var.data[0].pay;
		//var ele2 = (restp.direct_remuneration.base_ret_var.data.length == 2) ? restp.direct_remuneration.base_ret_var.data[1].pay : 0;

		//var ele1 = restp.direct_remuneration.base_ret_var.data[getindexfom(restp.direct_remuneration.base_ret_var.data,'Base Referencia Retribucion Variable')].pay;
		//var ele2 = (restp.direct_remuneration.base_ret_var.data.length == 2 && getindexfom(restp.direct_remuneration.base_ret_var.data,'Base Referencia Evaluacion anual') != -1) ? restp.direct_remuneration.base_ret_var.data[getindexfom(restp.direct_remuneration.base_ret_var.data,'Base Referencia Evaluacion anual')].pay : 0;

		if(restp.projection_data.year<new Date().getFullYear()){
			datos.push(restp.direct_remuneration.datos_quinquenal.data[getindexfom(restp.direct_remuneration.datos_quinquenal.data,'Retrib variable año actual')].tot);
		}else{
			datos.push(restp.direct_remuneration.datos_quinquenal.data[getindexfom(restp.direct_remuneration.datos_quinquenal.data,'Retrib variable año actual')].pay);
		}
		//datos.push(ele1 + ele2);
		datcolor.push(defbackcolor01[1]);
	}


	if(restp.projection_data.year<new Date().getFullYear()){
		if(restp.indirect_retribution.comidas && getindexfom(restp.indirect_retribution.comidas.data,'Compensacion Comida') != -1){
			datlabels.push(deflabelsgra01[2]);
			datos.push(restp.indirect_retribution.comidas.data[getindexfom(restp.indirect_retribution.comidas.data,'Compensacion Comida')].tot_pays);
			datcolor.push(defbackcolor01[2]);
		}
	}else{
		if(restp.indirect_retribution.ret_flex && getindexfom(restp.indirect_retribution.ret_flex.data,'Manutención') != -1){
			datlabels.push('Manutención');
			datos.push(restp.indirect_retribution.ret_flex.data[getindexfom(restp.indirect_retribution.ret_flex.data,'Manutención')].pays[restp.projection_data.n_real_pays]);
			datcolor.push(defbackcolor01[2]);
		}
	}


	if(restp.indirect_retribution.diet_km && getindexfom(restp.indirect_retribution.diet_km.data,'Kilometraje No Exento') != -1){
		datlabels.push(deflabelsgra01[3]);
		datos.push(restp.indirect_retribution.diet_km.data[getindexfom(restp.indirect_retribution.diet_km.data,'Kilometraje No Exento')].tot_pays);
		datcolor.push(defbackcolor01[3]);
	}
	if(restp.indirect_retribution.val_especie && getindexfom(restp.indirect_retribution.val_especie.data,'Prima Anual Seg. Vida') != -1){
		datlabels.push(deflabelsgra01[4]);
		datos.push(restp.indirect_retribution.val_especie.data[getindexfom(restp.indirect_retribution.val_especie.data,'Prima Anual Seg. Vida')].tot_pays);
		datcolor.push(defbackcolor01[4]);
	}
	if(restp.indirect_retribution.val_especie && getindexfom(restp.indirect_retribution.val_especie.data,'Prima Anual Seg. Accidente') != -1){
		datlabels.push(deflabelsgra01[5]);
		datos.push(restp.indirect_retribution.val_especie.data[getindexfom(restp.indirect_retribution.val_especie.data,'Prima Anual Seg. Accidente')].tot_pays);
		datcolor.push(defbackcolor01[5]);
	}

	//if(restp.indirect_retribution.contrato_seguros){
	if(restp.indirect_retribution.val_especie && getindexfom(restp.indirect_retribution.val_especie.data,'Seguro Salud Empresa') !=-1 ){
		datlabels.push(deflabelsgra01[7]);
		//datos.push(restp.indirect_retribution.contrato_seguros.tot.tot_pay);
		datos.push(restp.indirect_retribution.val_especie.data[getindexfom(restp.indirect_retribution.val_especie.data,'Seguro Salud Empresa')].pay*12);
		datcolor.push(defbackcolor01[7]);
	}
	if(restp.other_retribution.plan_prev_emp){
		datlabels.push(deflabelsgra01[6]);
		datos.push(restp.other_retribution.plan_prev_emp.data.last_year.tot);
		datcolor.push(defbackcolor01[6]);
	}
	if(restp.other_retribution.rp_aportacion_definida){
		datlabels.push(deflabelsgra01[10]);
		//datos.push(restp.other_retribution.rp_aportacion_definida.tot.pay);
		datos.push(restp.other_retribution.rp_aportacion_definida.data.last_year.pay);
		datcolor.push(defbackcolor01[10]);
	}

	
	if(restp.indirect_retribution.val_especie && getindexfom(restp.indirect_retribution.val_especie.data,'Lote Navidad') != -1){
		datlabels.push(deflabelsgra01[8]);
		datos.push(restp.indirect_retribution.val_especie.data[getindexfom(restp.indirect_retribution.val_especie.data,'Lote Navidad')].tot_pays);
		datcolor.push(defbackcolor01[8]);
	}
	/*if(restp.indirect_retribution.val_especie && restp.indirect_retribution.val_especie.dataex){
		datlabels.push(deflabelsgra01[8]);
		datos.push(restp.indirect_retribution.val_especie.dataex.tot_pays);
		datcolor.push(defbackcolor01[8]);
	}*/


	if(restp.indirect_retribution.ayudas && getindexfom(restp.indirect_retribution.ayudas.data,'Ayuda Escolar hijos') != -1){
		datlabels.push(deflabelsgra01[9]);
		datos.push(restp.indirect_retribution.ayudas.data[getindexfom(restp.indirect_retribution.ayudas.data,'Ayuda Escolar hijos')].tot_pays);
		datcolor.push(defbackcolor01[9]);
	}
	
	
	if(restp.indirect_retribution.comidas && restp.indirect_retribution.comidas.data && getindexfom(restp.indirect_retribution.comidas.data,'Comida Tarjeta Importe') != -1){
		datlabels.push(deflabelsgra01[12]);
		//datos.push(restp.indirect_retribution.comidas.data[getindexfom(restp.indirect_retribution.comidas.data,'Comida Tarjeta Importe')].tot_pays);
		datos.push(100);
		datcolor.push(defbackcolor01[12]);
	}

	if(restp.other_retribution.inv_formacion && getindexfom(restp.other_retribution.inv_formacion.data,'Formación Año Anterior') != -1){
		datlabels.push(deflabelsgra01[13]);
		datos.push(restp.other_retribution.inv_formacion.data[getindexfom(restp.other_retribution.inv_formacion.data,'Formación Año Anterior')].pay);
		datcolor.push(defbackcolor01[13]);
	}

	// 'Becas de empleados'
	/*if(restp.indirect_retribution.ayudas && restp.indirect_retribution.ayudas.data && restp.indirect_retribution.ayudas.data[1]){
		datlabels.push(deflabelsgra01[11]);
		datos.push(restp.indirect_retribution.ayudas.data[1].tot_pays);
		datcolor.push(defbackcolor01[11]);
	}*/
	if(restp.indirect_retribution.ayudas && restp.indirect_retribution.ayudas.data && getindexfom(restp.indirect_retribution.ayudas.data,'Becas de empleados') != -1){
		datlabels.push(deflabelsgra01[11]);
		datos.push(restp.indirect_retribution.ayudas.data[getindexfom(restp.indirect_retribution.ayudas.data,'Becas de empleados')].tot_pays);
		datcolor.push(defbackcolor01[11]);
	}


    
	const total = datos.reduce((a, b) => a + b, 0);

	$.each(datos, function( key, value ) {
		var porcen = Math.round(value * 100 / total);
		if(porcen<1) porcen = '<1';
		datlabels[key] = [porcen + '%' + ' ' + datlabels[key], formatter.format(value)];
	});

	return {
		labels: datlabels,
		datasets: [{
			label: '',
			data: datos,
			backgroundColor: datcolor,
			hoverOffset: 4
		}]
	};

}

function getindexfom(arr,seh){
	var ind = -1;
	arr.forEach( function(currentValue, index, arr){ 
	    if(currentValue.concept == seh) ind = index;
	} );
	return ind;
}

function getSetup02(restp){

	var datlabels = [];
	var datos = [];

	//if(restp.indirect_retribution.ret_flex){

		// if(restp.projection_data.year<=2020){

		// 	$.each(restp.indirect_retribution.ret_flex.data, function( key, value ) {
		// 		/*const ind = value.concept.indexOf(" ") + 1;
		// 		const tex = value.concept.substr(ind);*/
		// 		const tex = value.concept;
		// 		const item = datlabels.indexOf(tex);
		// 		if(tex == "Desc. Seguro Medico" || tex == "Especie Seguro Medico"){

		// 			if(item == -1){
		// 				datlabels.push(tex);
		// 				datos.push(Math.abs(value.tot_pays));
		// 			}else{
		// 				datos[item] = datos[item] + Math.abs(value.tot_pays);
		// 			}

		// 		}
		// 	});

		// }else{

			/*$.each(restp.indirect_retribution.ret_flex.data, function( key, value ) {			
				const tex = value.concept;
				const item = datlabels.indexOf(tex);
				if(tex != "Desc. Seguro Medico" && tex != "Especie Seguro Medico" && tex != "Manutención"){
					if(item == -1){
						datlabels.push(tex);
						if(tex == "Seguro médico"){
							datos.push( Math.abs(value.tot_pays) * 12 );					
						}else{
							datos.push( Math.abs(value.tot_pays) );
						}

					}else{
						datos[item] = datos[item] + Math.abs(value.tot_pays);
					}
				}
			});*/

			if(restp.direct_remuneration.rflex_anual){
				$.each(restp.direct_remuneration.rflex_anual.data, function( key, value ) {			
					datlabels.push(value.concept.replace("Coste ", ""));						
					datos.push( (value.concept =='Acciones GCO') ? Math.abs(value.tot)  : Math.abs(value.pay) );				
				});
			}
		//}

	//}
    
	const total = datos.reduce((a, b) => a + b, 0);

	$.each(datos, function( key, value ) {
		var porcen = Math.round(value * 100 / total);
		if(porcen<1) porcen = '<1';
		datlabels[key] = [porcen + '%' + ' ' + datlabels[key], formatter.format(value)];
	});

	const CHART_COLORS = {
	  red: 'rgb(222, 0, 30)',
	  orange: 'rgb(255, 159, 64)',
	  yellow: 'rgb(255, 205, 86)',
	  green: 'rgb(75, 192, 192)',
	  blue: 'rgb(54, 162, 235)',
	  purple: 'rgb(153, 102, 255)',
	  grey: 'rgb(201, 203, 207)'
	};

	return {
		labels: datlabels,
		datasets: [{
			label: '',
			data: datos,
			backgroundColor: Object.values(CHART_COLORS),
			hoverOffset: 4
		}]
	};

}

function getConfig(varsetup){
	return {
	  	type: 'doughnut',
	  	data: varsetup,
	  	plugins: [ChartDataLabels],
	 	options: {
	 		aspectRatio: 0.8,
	        plugins: {
	            legend: {
	                display: true,
	                position: 'right',
	                onClick: (e) => e.stopPropagation(),
	                labels: {
	                	padding: 25,
	                	boxWidth: 20
	                }
	            },
	            tooltip: {
	                callbacks: {
	                    label: function(context) {
	                        return context.label;
	                    }
	                }
	            },
	            datalabels: {
			        display: true,
			        formatter: (val, ctx) => {
			        	var aux = ctx.chart.data.labels[ctx.dataIndex].toString().split("%")[0];			        	
			          	return (aux!='<1' && aux!='1') ? aux + '%' : '';
			        },
			        color: '#fff',
			        font: {
			            size: 14,
			            weight: 'bold'
			        },
			        /*backgroundColor: '#404040'*/
			    },
	        }
	    }
	};
}


function loadGrafDoughnut(idtag,varcondif){	
	var graf = new Chart(
	    document.getElementById(idtag),
	    varcondif
	);
}