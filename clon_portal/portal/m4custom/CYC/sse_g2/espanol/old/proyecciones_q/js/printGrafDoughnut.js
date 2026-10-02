/*const tooltipPlugin = Chart.registry.getPlugin('tooltip');
tooltipPlugin.positioners.myCustomPositioner = function(elements, eventPosition) {
  
    var tooltip = this;

    

    return {
        x: 0,
        y: 0
    };
};*/

const deflabelsgra00 = [
	'Retribución fija',
	'Retribución variable',
	'Seguridad social'
];

const defbackcolor00 = [
	'rgb(255, 99, 132)',
	'rgb(54, 162, 235)',
	'rgb(255, 205, 86)'
];

const deflabelsgra01 = [
	'Retribución en Especie',
	'Valoración R. Especie',
	'Ayudas',
	'Manutención por J.P.',
	'Dietas y kilometrajes',
	'Retribución Flexible'
];

const defbackcolor01 = [
	'rgb(255, 99, 132)',
	'rgb(54, 162, 235)',
	'rgb(255, 205, 86)',
	'rgb(255 159 64)',
	'rgb(75 192 192)',
	'rgb(153 102 255)'
];


function printGrafDoughnut(restp){
	var varsetup00 = getSetup00(restp);
	var varcondif00 = getConfig(varsetup00);
	loadGrafDoughnut('graf00',varcondif00);

	var varsetup01 = getSetup01(restp);
	var varcondif01 = getConfig(varsetup01);
	loadGrafDoughnut('graf01',varcondif01);
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
		datos.push(restp.direct_remuneration.variable_remuneration.tot.tot_pays);
		datcolor.push(defbackcolor00[1]);
	}
	if(restp.direct_remuneration.seg_soc){
		datlabels.push(deflabelsgra00[2]);
		datos.push(restp.direct_remuneration.seg_soc.data[0].tot_pays);
		datcolor.push(defbackcolor00[2]);
	}
    
	const total = datos.reduce((a, b) => a + b, 0);	

	$.each(datos, function( key, value ) {	
		var porcen = Math.round(value * 100 / total);
		var numFormat = $.fn.dataTable.render.number( '.', ',', 2, '', '€' ).display;
		datlabels[key] = [porcen + '%' + ' ' + datlabels[key], numFormat(value)];
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

	if(restp.indirect_retribution.val_especie){
		datlabels.push(deflabelsgra01[0]);
		datos.push(restp.indirect_retribution.val_especie.tot.tot_pay);
		datcolor.push(defbackcolor01[0]);
	}
	if(restp.indirect_retribution.contrato_seguros){
		datlabels.push(deflabelsgra01[1]);
		datos.push(restp.indirect_retribution.contrato_seguros.tot.tot_pay);
		datcolor.push(defbackcolor01[1]);
	}
	if(restp.indirect_retribution.ayudas){
		datlabels.push(deflabelsgra01[2]);
		datos.push(restp.indirect_retribution.ayudas.tot.tot_pay);
		datcolor.push(defbackcolor01[2]);
	}
	if(restp.indirect_retribution.comidas){
		datlabels.push(deflabelsgra01[3]);
		datos.push(restp.indirect_retribution.comidas.data[0].tot_pays);
		datcolor.push(defbackcolor01[3]);
	}
	if(restp.indirect_retribution.diet_km){
		datlabels.push(deflabelsgra01[4]);
		datos.push(restp.indirect_retribution.diet_km.data[0].tot_pays);
		datcolor.push(defbackcolor01[4]);
	}
	if(restp.indirect_retribution.ret_flex){
		datlabels.push(deflabelsgra01[5]);
		datos.push(Math.abs(restp.indirect_retribution.ret_flex.data[0].tot_pays));
		datcolor.push(defbackcolor01[5]);
	}
    
	const total = datos.reduce((a, b) => a + b, 0);

	$.each(datos, function( key, value ) {
		var porcen = Math.round(value * 100 / total);
		var numFormat = $.fn.dataTable.render.number( '.', ',', 2, '', '€' ).display;
		datlabels[key] = [porcen + '%' + ' ' + datlabels[key], numFormat(value)];
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

function getConfig(varsetup){
	return {
	  	type: 'doughnut',
	  	data: varsetup,
	 	options: {
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
	                    	/*var numFormat = $.fn.dataTable.render.number( '.', ',', 2, '', '€' ).display;
							var pay = context.formattedValue+'€';
	                        var ret = context.label + ' : ' + pay;*/
	                        return context.label;
	                    }
	                }
	            }
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