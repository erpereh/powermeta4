
function CabeceraRetDir(NumColReales, NumColtotales,titulo) {

	// Esta funcion pinta la cabecera de la tabla de salario convenio, retribución variable y seguridad social
	// dentro de la sección de Retribución Directa del informe de proyecciones.
	// La cabecera varía en función del número de pagas reales y proyectadas.

	var cabecera = "";
	var NumColProyectadas = NumColtotales - NumColReales;

	cabecera += '<th  rowspan="2" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight:bold;">' + titulo + '</th>'
	if (NumColReales > 0) {
	cabecera += '<th  colspan="' + NumColReales 		+ '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;">REAL</th>'
	}
	if (NumColProyectadas > 0) {
	cabecera += '<th  colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;">PROYECTADO</th>'
	}
	cabecera += '<th  rowspan="2" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;">Total</th>'
	
	document.write(cabecera);

}


function CabeceraPagasRetDir (NumColReales, NumColtotales,pagas){

	// Esta funcion pinta la cabecera de las pagas de la tabla de salario convenio, retribución variable y seguridad social
	// dentro de la sección de Retribución Directa del informe de proyecciones.
	// La cabecera varía en función del número de pagas reales y proyectadas.

	
	var NumColProyectadas 	= NumColtotales - NumColReales;

	for (i = 0; i < NumColtotales; i++) {
		
		if (i < NumColReales) {
			if (i != 0) {	
				document.write('<td  style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;color:green;">' + pagas[i] + '</td>');
			}else{
				document.write('<td  style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;color:green;">' + pagas[i] + '</td>');
			}
		}else{
			document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;color:red;">' + pagas[i] + '</td>');
		}
	}

}

function conceptoFila (concepto,ultimaFila) {

	// Esta funcion pinta el concepto de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
	// dentro de la sección de Retribución Directa del informe de proyecciones.

	if (!(ultimaFila)) {
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1">' + concepto + '</td>');
	}else{
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1">' + concepto + '</td>');
	}
	
}

function valoresFila (NumColReales, NumColtotales,valores,ultimaFila) {

	// Esta funcion pinta los valores de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
	// dentro de la sección de Retribución Directa del informe de proyecciones.	

	for (i = 0; i < NumColtotales; i++) {
		
		if (i < NumColReales) {			
			if (!(ultimaFila)) {
				document.write('<td style="border: none;color:green;"   colspan="1">' + valores[i] + '</td>');
			}else{
				document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[i] + '</td>');
			}
		}else{
			if (!(ultimaFila)) {
				document.write('<td style="border: none;color:red;"   colspan="1">' + valores[i] + '</td>');
			}else{
				document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:red;" colspan="1">' + valores[i] + '</td>');
			}
		}
	}


}

function totalFila (total,ultimaFila) {

	// Esta funcion pinta los totales de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
	// dentro de la sección de Retribución Directa del informe de proyecciones.

	if (!(ultimaFila)) {
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;" colspan="2">' + total + '</td>');
	}else{
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" colspan="2">' + total + '</td>');
	}

}

function totalTabla (filas,valores){
	
	var colinicial  = '<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1">';
	var colroja 	= '<td style="border: solid black;border-top-width: 0px ;  border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:red;" colspan="1">';
	var colverde 	= '<td style="border: solid black;border-top-width: 0px ;  border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:green;" colspan="1">';
	var coltotal	= '<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" colspan="2">';								
	var colfinal  = '<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1">';
	var cierrecol 	= '</td>';


	
	/*document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
		for (i = 1; i <= NumColtotales; i++) {
			if (i==0) {				
				document.write(colinicial + valores[i] + cierrecol);
			}else{			
				if(i<=NumColReales) {
				
					document.write(colroja + valores[i] + cierrecol);
				}else{			
					if(i<=NumColtotales){
				
						document.write(colverde + valores[i] + cierrecol);
					}	
				
				}
			
			}				
		}		
		
		document.write(coltotal + valores[valores.length - 1] + cierrecol);*/
		
	
			total1=total+parseFloat(valores[1]);	
			total2=total2+parseFloat(valores[2]);	
			total3=total3+parseFloat(valores[3]);	
			total4=total4+parseFloat(valores[4]);	
			total5=total5+parseFloat(valores[5]);	
			total6=total6+parseFloat(valores[6]);	
			total7=total7+parseFloat(valores[7]);	
			total8=total8+parseFloat(valores[8]);	
			total9=total9+parseFloat(valores[9]);	
			total10=total10+parseFloat(valores[10]);	
			total11=total11+parseFloat(valores[11]);	
			total12=total12+parseFloat(valores[12]);	
			total13=total13+parseFloat(valores[13]);	
	
			if (filas==1){			
					document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
					document.write(colroja + total1 + cierrecol); 
					document.write(colroja + total2 + cierrecol); 
					document.write(colroja + total3 + cierrecol);
					document.write(colroja + total4 + cierrecol); 
					document.write(colroja + total5 + cierrecol); 
					document.write(colverde + total6 + cierrecol);
					document.write(colverde + total7 + cierrecol); 
					document.write(colverde + total8 + cierrecol); 
					document.write(colverde + total9 + cierrecol);
					document.write(colverde + total10 + cierrecol);
					document.write(colverde + total11 + cierrecol);
					document.write(colverde + total12 + cierrecol);
					document.write(colverde + total13 + cierrecol);
					document.write(colfinal + totalrv + cierrecol);
					
					}
		
		
		
}

function cabeceraComplementos (NumColtotales,titulo) {
	// Esta funcion pinta la cabecera de cada una de la tablas de complementos
	// dentro de la sección de Retribución Directa del informe de proyecciones.
	
	NumColtotales += 2; //Se le suma la columa del nombre del concepto y la del total.
	document.write('<th  colspan="' + NumColtotales + '" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight: bold;">' + titulo + '</th>');
}

function complementos (NumColReales, NumColtotales,valores,numRegistros, numRegistro) {
	
	// Esta funcion pinta los valores de cada una de las filas de cada una de las pagas de la tablas de complementos
	// dentro de la sección de Retribución Directa del informe de proyecciones.
		
	var colinicial  = '<td width="20%" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1">';
	var colroja 	= '<td width="10%" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px;color:red;"   colspan="1">';
	var colverde 	= '<td width="10%" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1">';
	var coltotal	= '<td width="10%" style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;" colspan="2">';								
	var cierrecol 	= '</td>';
	
	//alert(valores);
	//alert(NumColtotales);
	// Si solo es un complemento en total
	//if (numRegistros = 1) {		
		document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
		for (i = 1; i <= NumColtotales; i++) {
			if (i==0) {				
				document.write(colinicial + valores[i] + cierrecol);
			}else{			
				if(i<=NumColReales) {
				
					document.write(colverde + valores[i] + cierrecol);
					
				}else{			
					if(i<=NumColtotales){
						
						document.write(colroja + valores[i] + cierrecol);
						
					}	
				
				}
			
			}				
		}		
		
		document.write(coltotal + valores[valores.length - 1] + cierrecol); // Total
	//}
	// Si son dos complementos
	/*if ( numRegistros == 2) {
		
		for (i = 0; i < NumColtotales; i++) {
		
		}
		
	}
	// Si son tres o mas complemtos
	if ( numRegistros > 2) {
	
		for (i = 0; i < NumColtotales; i++) {
		
		}
	
	}*/
}


function number_format(number, decimals, dec_point, thousands_sep) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Drew Noakes
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    var n = !isFinite(+number) ? 0 : +number, 
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        toFixedFix = function (n, prec) {
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            var k = Math.pow(10, prec);
            return Math.round(n * k) / k;
        },
        s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function quitarNulos (valore) {	
	
	// Esta funcion elimina los valores nulos de los arrays de valores sustituyendo el valor por 0		
		
	for (i=0; i < valore.length ; i++) {		
		if (!(valore[i])) {
			valore[i] = 0;
		}
		 if(!(isNaN(valore[i]))){
			/* valore[i] = valore[i].toString();
			valore[i] = valore[i].replace('00000','');
			valore[i] = valore[i].replace('.','');
			valore[i] = valore[i].replace('000',''); */
			valore[i] = number_format(valore[i], 2, ',', '.');	
		} 
		//if (valore[i]>0) {valore[i] =parseFloat(valore[i]).toFixed(2);}
		//if (valore[i]<0) {valore[i] =parseFloat(valore[i]).toFixed(2);}
		
		
	}
	
	return valore;

}

function totales (NumColReales, NumColtotales,valores) {	

	// Esta funcion pinta los valores de cada una de las filas de cada una de las pagas de las tablas de totales
	// dentro de la sección de Retribución Directa del informe de proyecciones.

	var colinicial  = '<td width="20%" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:left; font-weight: bold;" colspan="1">';
	var colroja 	= '<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;color:red;"   colspan="1">';
	var colverde 	= '<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;color:green;" colspan="1">';
	var coltotal	= '<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" colspan="2">';								
	var cierrecol 	= '</td>';
	
	document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
	for (i = 1; i <= NumColtotales; i++) {
		if (i==0) {				
			document.write(colinicial + valores[i] + cierrecol);
		}else{			
			if(i<=NumColReales) {			
				document.write(colverde + valores[i] + cierrecol);				
			}else{			
				if(i<=NumColtotales){
					document.write(colroja + valores[i] + cierrecol);					
				}	
			
			}
		
		}				
	}		
	
	document.write(coltotal + valores[valores.length - 1] + cierrecol); // Total
	

}



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

function CabeceraRetInDir(NumColReales, NumColtotales,titulo,pagaamostrar) {

			// Esta funcion pinta la cabecera de la tabla de salario convenio, retribución variable y seguridad social
			// dentro de la sección de Retribución Directa del informe de proyecciones.
			// La cabecera varía en función del número de pagas reales y proyectadas.
			var cabecera = "";
			var NumColProyectadas = NumColtotales - NumColReales;

			cabecera += '<th rowspan="2" style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight:bold;">' + titulo + '</th>'
			
			if(pagaamostrar>NumColReales){
				cabecera += '<th rowspan="2" colspan="' + (2) + '" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;">VALORACI&Oacute;N PROYECTADO/ACUM. </th>'
			}else{
				cabecera += '<th rowspan="2" colspan="' + (2) + '" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;">REAL</th>'
			}
			cabecera += '<th rowspan="2" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;">Total</th>'
			
			document.write(cabecera);

		}
		
		
		function CabeceraRetSegDir(NumColReales, NumColtotales,titulo) {

			// Esta funcion pinta la cabecera de la tabla de salario convenio, retribución variable y seguridad social
			// dentro de la sección de Retribución Directa del informe de proyecciones.
			// La cabecera varía en función del número de pagas reales y proyectadas.
			var cabecera = "";
			var NumColProyectadas = NumColtotales - NumColReales;

			cabecera += '<th rowspan="2" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight:bold;">' + titulo + '</th>'
			cabecera += '<th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;">PROYECTADO</th>'
			cabecera += '<tr class="modo1"><td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;">Capital</td><td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;">Prima</td>'
			
			document.write(cabecera);

		}
	
		function CabeceraRetJubDir(NumColReales, NumColtotales,titulo) {

			// Esta funcion pinta la cabecera de la tabla de salario convenio, retribución variable y seguridad social
			// dentro de la sección de Retribución Directa del informe de proyecciones.
			// La cabecera varía en función del número de pagas reales y proyectadas.
			var cabecera = "";
			var NumColProyectadas = NumColtotales - NumColReales;

			cabecera += '<th rowspan="2" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight:bold;">' + titulo + '</th>'
			cabecera += '<th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px;">REAL</th>'
			cabecera += '<tr class="modo1"><td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;">Importe</td>'
			
			document.write(cabecera);

		}	

		function CabeceraRetPlanDir(NumColReales, NumColtotales,titulo) {

			// Esta funcion pinta la cabecera de la tabla de salario convenio, retribución variable y seguridad social
			// dentro de la sección de Retribución Directa del informe de proyecciones.
			// La cabecera varía en función del número de pagas reales y proyectadas.
			var cabecera = "";
			var NumColProyectadas = NumColtotales - NumColReales;

			cabecera += '<th rowspan="2" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight:bold;">' + titulo + '</th>'
			cabecera += '<th colspan="2" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px;">APORTACION CYC</th>'
			cabecera += '<th rowspan="2" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;">Total</th>'
			cabecera += '<tr class="modo1"><td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;">Ordinaria</td><td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;">Extraordinaria</td>'
			
			document.write(cabecera);

		}			
		
		function CabeceraPagasRetInDir (NumColReales, NumColtotales,pagas){

		// Esta funcion pinta la cabecera de las pagas de la tabla de salario convenio, retribución variable y seguridad social
		// dentro de la sección de Retribución Directa del informe de proyecciones.
		// La cabecera varía en función del número de pagas reales y proyectadas.

	
		var NumColProyectadas 	= NumColtotales - NumColReales;

		for (i = 0; i < NumColtotales; i++) {
			
			if (i < NumColReales) {
				if (i != 0) {					
					document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;color:green;">' + pagas[i] + '</td>');
				}
			}else{
				document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;color:red;">' + pagas[i] + '</td>');
			}
		}
		}
		
		
		
		function conceptoFilaIn (concepto,ultimaFila) {

			// Esta funcion pinta el concepto de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
			// dentro de la sección de Retribución Directa del informe de proyecciones.

				document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1">' + concepto + '</td>');

		}
		
		
		
		function conceptoFilaForm (concepto,ultimaFila) {

			// Esta funcion pinta el concepto de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
			// dentro de la sección de Retribución Directa del informe de proyecciones.
				
				document.write('<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1">' + concepto + '</td>');
				
				if(ultimaFila == true){
				document.write('<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1">Total</td>');
				}
		}		
		
		function valoresFilaForm (NumColReales, NumColtotales,valores,ultimaFila) {

	// Esta funcion pinta los valores de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
	// dentro de la sección de Retribución Directa del informe de proyecciones.	
			
		
		for (i = 0; i < NumColtotales; i++) {
			
			if (i < NumColReales) {	
								
					document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:red;" colspan="1">' + valores[i] + '</td>');
				
			}else{
				
					document.write('<td style="border: solid black;border-top-width: 1px;border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align=center;color:green;" colspan="1">' + valores[i] + '</td>');
				
			}
		}
		
	}		
		
	function valoresFilaIn (NumColReales, NumColtotales,valores,ultimaFila) {

		// Esta funcion pinta los valores de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
		// dentro de la sección de Retribución Directa del informe de proyecciones.	
		if(NumColtotales==1){
			document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[0] + '</td>');
		}else{
			for (i = 0; i < NumColtotales; i++) {
				
				if (i < NumColReales) {	
									
						document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[i] + '</td>');
					
				}else{
					
						document.write('<td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1">' + valores[i] + '</td>');
					
				}
			}
		}
	}
		
	function totalFilaIn (total,ultimaFila) {

		// Esta funcion pinta los totales de cada una de las filas de cada una de las pagas de la tabla de salario convenio, retribución variable y seguridad social
		// dentro de la sección de Retribución Directa del informe de proyecciones.

		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:red;" colspan="1">' + total + '</td>');

	}
		
	function totalTablaPlan (NumColReales, NumColtotales,valores){

		var colinicial  = '<td style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align:right;" >';
		var coltotal	= '<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" >';								
		var cierrecol 	= '</td>';
		var total = 0;
		//document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
			for (i = 0; i < NumColtotales; i++) {			
					total=total+parseInt(valores[i]);
					document.write(colinicial + valores[i] + cierrecol);				
			}				
					
			
		document.write(coltotal + total + cierrecol);
	}
	
	function totalTablaCS (NumRegtotales,valores){

		//document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
		for (i = 0; i < NumRegtotales; i++) {			
				total=total+parseFloat(valores[0]);
								
		}				
				
		return total;
	}

	function totalTablaCS2 (NumRegtotales,valores){
	
		//document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
		for (i = 0; i < NumRegtotales; i++) {			
				total2=total2+parseFloat(valores[1]);				
		}				
				
		return total2;
	}

	function PintaTablaCS (total,total2){
		var colinicial  = '<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:right;" >';
		var coltotal	= '<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;" >';								
		var cierrecol 	= '</td>';
			
		document.write(coltotal + total + cierrecol + coltotal + total2 + cierrecol );
	
	}
	
	function totalTablaIn (NumColReales, NumColtotales,valores){

		//document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
		for (i = 0; i < NumColtotales; i++) {			
				total=total+parseFloat(valores[i]);
				
		}				
				
		
		return total;
	}	
	
	function totalTablaVE (NumRegtotales){
		
		//document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
		for (i = 0; i < NumRegtotales; i++) {			
				total2=total2+parseFloat(valores[0]);
		}				
				
		return total2;
	}	

	function totalTablaVE2 (NumRegtotales){
		
		//document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
		for (i = 0; i < NumRegtotales; i++) {			
				total3=total3+parseFloat(valores[1]);
		}				
		
			return total3;
	}	
	
		
	function PintaTablaVE (total2,total3){
	
		var colinicial  = '<td colspan="2" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align:right;" >';
		var coltotal	= '<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;" >';								
		var cierrecol 	= '</td>';
		var totales		= new Array( number_format(total2,2,',','.'),number_format(total3,2,',','.'));	
		
		 /* var totales		= new Array(total2,total3); */
		//totales = quitarNulos(totales);
			
		//document.write(coltotal + total2 + cierrecol + coltotal + total3 + cierrecol );
		document.write(colinicial + totales[0] + cierrecol + coltotal + totales[1] + cierrecol);
	}	


	function PintaTablaIn (total){

		var colinicial  = '<td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:right;" >';
		var coltotal	= '<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" >';								
		var cierrecol 	= '</td>';
		
		//total = total.toString().replace('.','');		
		
		 var totales		= new Array( number_format(total,2,',','.')); 
		/* var totales		= new Array(total); */
		document.write(coltotal + totales[0] + cierrecol);
	}

	function totalTablaJub (NumColReales, NumColtotales,valores){

		var colinicial  = '<td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px; text-align:right;" >';									
		var cierrecol 	= '</td>';		
		//document.write(colinicial + valores[0] + cierrecol); // Nombre del concepto
			for (i = 0; i < NumColtotales; i++) {					
					document.write(colinicial + valores[i] + cierrecol);				
			}				
					
	}
	
	function buscarPaga (valore) {
	
		for (i=0; i < valore.length ; i++) {		
			
			if (valore[i] > 0) {
				return i-1;
			} 
					
		}
		
		return -1;
	
	
	}

	//JOSEAM. 09/12/2016. Se necesita esta función para las tablas con valores totales a 0 que queremos mostrar.	
	function buscarPagaDetalle (valore) {
	
		for (i=0; i < valore.length ; i++) {		
			
			if (valore[i] > 0 && valore[i]!=null && valore[i]!='') {
				return i-1;
			} 
			//alert ('funcion valore[i] =' + valore[i] + ' i = ' + i + ' valore.length = ' + valore.length)
			if (valore[i] == 0 && valore[i]!=null && valore[i]!='') {		
				return i-1;
			} 
			
		}
		
		return -1;
	
	
	}

	function buscarUltimoValor (valore) {
		
		var ultimovalor = 0;
		for (i=0; i < valore.length ; i++) {		
			
			if (valore[i] != "0,00") {
				ultimovalor = i;
			} 
					
		}
		
		return ultimovalor;
	
	}
	
	function cuerpoRetInd (NumColReales, NumColtotales,valores,pagaamostrar,ultimaFila) {
	
		
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1">' + valores[0] + '</td>');
		
		
		if(pagaamostrar>NumColReales){
				document.write('<td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1">' + valores[pagaamostrar + 1] + '</td>');
		}else{
				document.write('<td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[pagaamostrar + 1] + '</td>');
		}
		
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px;" >' + valores[valores.length - 1] + '</td>');
	
	}
	
	//JOSEAM. 
	function cuerpoRetInd2 (NumColReales, NumColtotales,valores,pagaamostrar,ultimaFila) {
	
		
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1">' + valores[0] + '</td>');
	
		if(pagaamostrar>NumColReales){
				document.write('<td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1">' + valores[parseInt(NumPagasReales)] + '</td>');
		}else{
				document.write('<td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1">' + valores[parseInt(NumPagasReales)] + '</td>');
		}
				
		document.write('<td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px;" >' + valores[valores.length - 1] + '</td>');
	
	}