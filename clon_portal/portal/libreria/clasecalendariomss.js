//clase calendariomss
function clasecalendariomss(nombreobjeto,mes,ano,visible,activo,posicionx,posiciony,nombreempl,diascabecera) {
	this.nombreobjeto = nombreobjeto;
	this.nombreempl = nombreempl;
	this.diascabecera = diascabecera;
	this.mes = mes;
	this.emes = mes;
	this.ano = ano;
	this.visible = visible;
	this.activo = activo;
	this.posicionx = posicionx;
	this.posiciony = posiciony;
	this.pendientes = new Array();
	this.cancelados = new Array();
	this.aceptados = new Array();
	this.festivos = new Array();
	this.aceppend = new Array();
	this.cancpend = new Array();
	this.daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	this.getDaysmss = getDaysmss;
	this.getTodaymss = getTodaymss;
	this.cabeceramss = cabeceramss;
	this.cuerpomss = cuerpomss;
	this.pintacalendariomss = pintacalendariomss;
	this.damefechamssacep = damefechamssacep;
	this.damefechamsscanc = damefechamsscanc;
	this.seleccion = seleccion;
	this.mostrarmss = mostrarmss;
	this.movermss = movermss;
	this.mcomprobarmss = mcomprobarmss;
	this.quitarvalormss = quitarvalormss;
	this.mestadomss = mestadomss;
	this.m4met_splitDataInArray = splitDataInArray;

	if (slanguage == "es") {
		this.months = new Array("Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre", "Noviembre", "Diciembre");
		this.days = new Array("D&nbsp;", "L&nbsp;", "M&nbsp;","X&nbsp;", "J&nbsp;","V&nbsp;", "S&nbsp;");
		this.days2 = new Array("D&nbsp;", "L&nbsp;", "M&nbsp;","X&nbsp;", "J&nbsp;", "V&nbsp;","S&nbsp;","D&nbsp;", "L&nbsp;", "M&nbsp;","X&nbsp;", "J&nbsp;", "V&nbsp;", "S&nbsp;");
	} else if (slanguage == "in") {
		this.months = new Array("January", "February", "March","April", "May", "June", "July", "August","September","October", "November", "December"); 
		this.days = new Array("S&nbsp;", "M&nbsp;", "T&nbsp;","W&nbsp;", "T&nbsp;","F&nbsp;","S&nbsp;");
		this.days2 = new Array("S&nbsp;", "M&nbsp;", "T&nbsp;","W&nbsp;", "T&nbsp;", "F&nbsp;","S&nbsp;","S&nbsp;", "M&nbsp;", "T&nbsp;","W&nbsp;", "T&nbsp;", "F&nbsp;", "S&nbsp;");
	} else if (slanguage == "fr") {
		 this.months = new Array("Janvier", "Février", "Mars","Avril", "Mai", "Juin", "Juillet", "Août","Septembre","Octobre", "Novembre", "Décembre"); 
		 this.days = new Array("D&nbsp;", "L&nbsp;", "M&nbsp;","M&nbsp;", "J&nbsp;","V&nbsp;","S&nbsp;");
		 this.days2 = new Array("D&nbsp;", "L&nbsp;", "M&nbsp;","M&nbsp;", "J&nbsp;", "V&nbsp;","S&nbsp;","D&nbsp;", "L&nbsp;", "M&nbsp;","M&nbsp;", "J&nbsp;", "V&nbsp;", "S&nbsp;");
	} else if (slanguage == "pt") {
		this.months = new Array("Janeiro", "Fevereiro", "Março","Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro","Outubro", "Novembro", "Dezembro"); 
		this.days = new Array("D", "2ª", "3ª","4ª", "5ª", "6ª", "S");
		this.days2 = new Array("D&nbsp;", "2ª&nbsp;", "3ª&nbsp;","4ª&nbsp;", "5ª&nbsp;", "6ª&nbsp;","S&nbsp;","D&nbsp;", "2ª&nbsp;", "3ª&nbsp;","4ª&nbsp;", "5ª&nbsp;", "6ª&nbsp;", "S&nbsp;");
	}
}
 
function mostrarmss(param) {
	if (param == true) {
		m4elemento(this.nombreobjeto).style.visibility = "visible";
	} else {
		m4elemento(this.nombreobjeto).style.visibility = "hidden";
	}
}

function movermss(x,y) {
	var xporc = x + "%";
	var yporc = y + "%";
	m4elemento(this.nombreobjeto).style.left = xporc;
	m4elemento(this.nombreobjeto).style.top = yporc;
}

function getDaysmss(month, year) {
	// Test for leap year when February is selected.
	if (1 == month)
	   return ((0 == year % 4) && (0 != (year % 100))) || (0 == year % 400) ? 29 : 28;
	else
	   return this.daysInMonth[month];
}

function getTodaymss() {
	// Generate today's date.
	this.now = new Date();
	this.year = this.now.getYear(); 
	this.month = this.now.getMonth();
	this.day = this.now.getDate();
}
       
function cabeceramss() {
	var totalline ="";
	var line = "<TR><TD class='fuentecalendariotittle' align='center' colspan='35' >" + this.nombreempl +  "</TD></TR>";
	var parseYear = parseInt(this.ano);
	var newCal = new Date(parseYear,this.mes,1);
	var startDay = newCal.getDay();
	var semana = new Array(this.days2[startDay],this.days2[startDay+1],this.days2[startDay+2],this.days2[startDay+3],this.days2[startDay+4],this.days2[startDay+5],this.days2[startDay+6]);
	var totaldays =semana.concat(semana,semana,semana,semana,semana);
	var line1 ="";
	var intDaysInMonth = this.getDaysmss(this.mes, this.ano);

	for (var intLoop = 0; intLoop < intDaysInMonth; intLoop++) {
		line1 = line1 + "<TD class='fuentecalendariotittle' >" + totaldays[intLoop] + "</TD>";
	}
	if (this.diascabecera==true) {
		totalline = line + "<tr>" + line1 + "</tr>";
	} else {
		totalline = line;
	}
	return totalline;
}     

function cuerpomss() {
	var line = "";
	var intDaysInMonth = this.getDaysmss(this.mes, this.ano);
	for (var vi = 0; vi < intDaysInMonth; vi++){
		line +="<TD class='fuentecalendario' STYLE='cursor: default;' ></TD>";
	}
	var totalcuerpo = "<tr>" + line + "</tr>";
	return totalcuerpo;
}

function pintacalendariomss(){
	var finsemana = "#CCC";
	var festivos = "gold";
	var normal = "#e7e8ec";
	var pendiente = "crimson";
	var cancelado = "darksalmon";
	var aceptado = "royalblue";

	if (this.mes == 12){
		this.mes = 0;
	}

	var strinicapa = "<div ID='"+ this.nombreobjeto + "' style=\"margin-top: 10px; margin-right: 10px; position: relative; z-index: 2; visibility: " + this.visible + ";\">";
	var strfincapa = "</div>";
	var strinitabla = "<table ID='hola" + this.nombreobjeto + "'  bgcolor=\"#5a789e\" border =\"0\" >";
	var strfintabla = "</table>";
	var strcuerpo = "<THEAD>" + this.cabeceramss() + "</THEAD>";
	strcuerpo= strcuerpo + "<TBODY ID='dayList"  + this.nombreobjeto + "' align=\"center\">" + this.cuerpomss() + "</TBODY>";
	strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;
	document.write(strcapa);

	today = new this.getTodaymss();
	var parseYear = parseInt(this.ano);
	var newCal = new Date(parseYear,this.mes,1);
	var day = -1;
	var daily = 1;
	if ((today.year == newCal.getYear()) && (today.month == newCal.getMonth()))day = today.day;
	// Cache the table's tBody element named dayList.
	var ntabla = "hola" + this.nombreobjeto;
	var ntbody = "dayList" + this.nombreobjeto;
	var tableCal = m4elemento(ntbody);
	var intDaysInMonth = this.getDaysmss(this.mes, this.ano);
	var parseYear = parseInt(this.ano);

	for (var intWeek = 0; intWeek < tableCal.rows.length;intWeek++) {
		for (var intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++) {
			var cell = tableCal.rows[intWeek].cells[intDay];
			// Start counting days.
			if (daily <= intDaysInMonth) {
				var diasemana = new Date(parseYear,this.mes,daily);
				if ((diasemana.getDay() == 0) || (diasemana.getDay() == 6)) {
					cell.style.backgroundColor=finsemana;
				} else { 
					cell.style.backgroundColor=normal;
				}
				m4textodentrotd(cell,true,daily++);
			} else {
				m4textodentrotd(cell,true,'__');
			}
		}
	}
	var salto=false;
	for (var ifestivos = 0; ifestivos < this.festivos.length; ifestivos++){
	salto=false;
		for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
			if (salto !=true){
				for (intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++){
					cell = tableCal.rows[intWeek].cells[intDay];
					if (m4textodentrotd(cell,false,"") == this.festivos[ifestivos]) {
						cell.style.backgroundColor=festivos;
						salto = true;
						break;
					}
				}
			} else {
				break;
			}
		}
	}
	for (var ifechas = 0; ifechas < this.pendientes.length; ifechas++){
	salto=false;
		for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
			if (salto !=true){
				for (intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++){
					cell = tableCal.rows[intWeek].cells[intDay];
					if (m4textodentrotd(cell,false,"") == this.pendientes[ifechas]) {
						cell.style.backgroundColor=pendiente;
						salto = true;
						break;
					}
				}
			} else {
				break;
			}
		}
	}
	for (var iaceptados = 0; iaceptados < this.aceptados.length; iaceptados++){
	salto=false;
		for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
			if (salto !=true){
				for (intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++){
					cell = tableCal.rows[intWeek].cells[intDay];
					if (m4textodentrotd(cell,false,"") == this.aceptados[iaceptados]) {
						cell.style.backgroundColor=aceptado;
						salto = true;
						break;
					}
				}
			} else {
				break;
			}
		}
	}			
	for (var icancelados = 0; icancelados < this.cancelados.length; icancelados++){
		salto=false;
		for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++) {
			if (salto !=true){
				for (intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++){
					cell = tableCal.rows[intWeek].cells[intDay];
					if (m4textodentrotd(cell,false,"") == this.cancelados[icancelados]) {
						//if  (cell.style.backgroundColor != finsemana){
							cell.style.backgroundColor=cancelado;
						//}
						salto = true;
						break;
					}
				}
			} else {
				break;
			}
		}
	}
}

function damefechamssacep(td) {
	var control = false;
	var finsemana = "#CCC";
	var festivos = "gold";
	var normal = "#e7e8ec";
	var pendiente = "crimson";
	var cancelado = "darksalmon";
	var aceptado = "royalblue";
	var coloracep = "green";
	var colorcanc = "black";

	if ((m4textodentrotd(td,false,"") != "") && (this.activo == true))  {
		if ((td.style.backgroundColor != finsemana) && (td.style.backgroundColor != festivos) && (td.style.backgroundColor != normal) && (td.style.backgroundColor != aceptado) && (td.style.backgroundColor != colorcanc)){
			var anio = this.ano;
			var mesnumero = this.mes+1;
			//Correccion para el dia y mes con una sola cifra, ejemplo: 1=01
			var dianumero = m4textodentrotd(td,false,"");
			if (dianumero.length != 2){
				dianumero = '0' + dianumero;
			}
			var strmesnumero = new String(mesnumero);
			if (strmesnumero.length != 2){
				strmesnumero = '0' + strmesnumero;
			}
			//Fin de la correccion para el dia y mes con una sola cifra
			var fechasec = dianumero + "-" + strmesnumero + "-" + anio;
			//Tratamiento de la aceptacion
			if  (((td.style.backgroundColor == pendiente) || (td.style.backgroundColor == cancelado)) && (control == false)) {
				 td.style.backgroundColor = coloracep;
				 this.aceppend[this.aceppend.length] = m4textodentrotd(td,false,"");
				 control =true; 
			}
			if  ((td.style.backgroundColor == coloracep) && (control == false)){
				 if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.cancelados)){
				 td.style.backgroundColor = cancelado;
				 } else {
					 td.style.backgroundColor = pendiente;
				 }
				 if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.aceppend)){
					 this.aceppend = this.quitarvalormss(m4textodentrotd(td,false,""),this.aceppend);
				 }
				control = true;
			}
		}
	}
}

function damefechamsscanc(td) {
	var control = false;
	var finsemana = "#CCC";
	var festivos = "gold";
	var normal = "#e7e8ec";
	var pendiente = "crimson";
	var cancelado = "darksalmon";
	var aceptado = "royalblue";
	var coloracep = "green";
	var colorcanc = "black";

	if ((m4textodentrotd(td,false,"") != "") && (this.activo == true))  {
		if ((td.style.backgroundColor != finsemana) && (td.style.backgroundColor != festivos) && (td.style.backgroundColor != normal) && (td.style.backgroundColor != aceptado) && (td.style.backgroundColor != coloracep)){
			var anio = this.ano;
			var mesnumero = this.mes+1;
			//Correccion para el dia y mes con una sola cifra, ejemplo: 1=01
			var dianumero = m4textodentrotd(td,false,"");
			if (dianumero.length != 2){
				dianumero = '0' + dianumero;
			}
			var strmesnumero = new String(mesnumero);
			if (strmesnumero.length != 2){
				strmesnumero = '0' + strmesnumero;
			}
			//Fin de la correccion para el dia y mes con una sola cifra
			var fechasec = dianumero + "-" + strmesnumero + "-" + anio;

			//Tratamiento de la cancelacion
			if  (((td.style.backgroundColor == pendiente) || (td.style.backgroundColor == cancelado)) && (control == false)){
				 td.style.backgroundColor = colorcanc;
				 this.cancpend[this.cancpend.length] = m4textodentrotd(td,false,"");
				 control =true; 
			}
			if  ((td.style.backgroundColor == colorcanc) && (control == false)){
				 if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.cancelados)){
					 td.style.backgroundColor = cancelado;
				 } else {
					 td.style.backgroundColor = pendiente;
				 }
				 if (this.mcomprobarmss(m4textodentrotd(td,false,""),this.cancpend)){
					 this.cancpend = this.quitarvalormss(m4textodentrotd(td,false,""),this.cancpend);
				 }
				control = true;
			}
		}
	}
}

function seleccion(td,evento){
	if (evento.altKey){
		this.damefechamsscanc(td);
	} else {
		this.damefechamssacep(td);
	}
}

function mcomprobarmss(valor,matriz){
	var result = false;
	for (i=0; i < matriz.length; i++){
		if (matriz[i] == valor){
			result = true;
			break;
		} 
	}
	return result;
}
 
function quitarvalormss(valor,matriz){
	var ielimina = "";
	total = new Array();
	for (var elimina=0; elimina < matriz.length;elimina++){
		if (matriz[elimina] == valor){
			ielimina = elimina;
			break;
		}
	}
	trozo1 = matriz.slice(0,ielimina);
	trozo2 = matriz.slice(ielimina+1,matriz.length);
	matriz = total.concat(trozo1,trozo2);
	delete total;
	return matriz;
}

function mestadomss(){
}

function dd(){
	this.m4met_splitDataInArray(new Array())
}

function splitDataInArray(sArgsValue){
      //funcion para crear el array de las propiedades sin problemas con la comilla simple
	  // sArgsValue = 'A','B','C''
	  var argArr = sArgsValue.split(/\,'/);  // ,' (Para permitir la comilla como contenido)
      var argArr2 = new Array (argArr.length);
	  
	  //Recorremos el array y vamos quitando las comillas simples
	  for (var i=0; i<argArr.length; i++) {
	      if (i == 0) {
		      // al primero hay que quitarle la comilla inicial y final
	  	  	  argArr2[i] = argArr[i].slice(1,argArr[i].length-1);
	   	  }else{
		      //Al resto quitarle la final
	   	  		argArr2[i] = argArr[i].slice(0,argArr[i].length-1);
		  }
      } 
	  return argArr2;
}