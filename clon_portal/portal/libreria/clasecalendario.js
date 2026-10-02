 //clase calendario
 function clasecalendario(nombreobjeto,mes,ano,visible,activo,posicionx,posiciony,vtipo) {
	 this.nombreobjeto = nombreobjeto;
	 this.mes = mes;
	 this.emes = mes;
	 this.ano = ano;
	 this.visible = visible;
	 this.activo = activo;
	 this.posicionx = posicionx;
	 this.posiciony = posiciony;
	 this.borradospend = new Array();
	 this.borradosacep = new  Array();
	 this.pendientes = new Array();
	 this.pendientessalida = new Array();
	 this.cancelados = new Array();
	 this.aceptados = new Array();
	 this.festivos = new Array();
	 this.daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	 this.getDays = getDays;
	 this.getToday = getToday;
	 this.cabecera = cabecera;
	 this.cuerpo = cuerpo;
	 this.pintacalendario = pintacalendario;
	 this.damefecha = damefecha;
	 this.adios = adios;
	 this.mostrar = mostrar;
	 this.mover = mover;
	 this.mcomprobar = mcomprobar;
	 this.quitarvalor = quitarvalor;
	 this.mestado = mestado;
	 this.mtipo = vtipo;
	 if (slanguage == "es") {
		this.months = new Array("Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre"); 
		this.days = new Array("D", "L", "M","X", "J", "V", "S");
	 } else if (slanguage == "in") {
		this.months = new Array("January", "February", "March","April", "May", "June", "July", "August", "September","October", "November", "December"); 
		this.days = new Array("S", "M", "T","W", "T", "F", "S");
	 } else if (slanguage == "fr") {
		this.months = new Array("Janvier", "Février", "Mars","Avril", "Mai", "Juin", "Juillet", "Août", "Septembre","Octobre", "Novembre", "Décembre"); 
		this.days = new Array("D", "L", "M","M", "J", "V", "S");
	 } else if (slanguage == "pt") {
		this.months = new Array("Janeiro", "Fevereiro", "Março","Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro","Outubro", "Novembro", "Dezembro"); 
		this.days = new Array("D", "2ª", "3ª","4ª", "5ª", "6ª", "S");
	 }
 }
 
function mostrar(param) {
	if (param == true) {
		m4elemento(this.nombreobjeto).style.visibility = "visible";
	} else {
		m4elemento(this.nombreobjeto).style.visibility = "hidden";
	}
}

function mover(x,y) {
	var xporc = x + "%";
	var yporc = y + "%";
	m4elemento(this.nombreobjeto).style.left = xporc;
	m4elemento(this.nombreobjeto).style.top = yporc;
}

function getDays(month, year) {
	// Test for leap year when February is selected.
	if (1 == month)
	   return ((0 == year % 4) && (0 != (year % 100))) || (0 == year % 400) ? 29 : 28;
	else
	   return this.daysInMonth[month];
}

function getToday() {
	// Generate today's date.
	this.now = new Date();
	this.year = this.now.getYear(); 
	this.month = this.now.getMonth();
	this.day = this.now.getDate();
 }

       
function cabecera() {
	var totalline = "";
	var line = "";
	line = "<TR><TD class='fuentecalendariotittle' align='center' colspan='7' >" + this.months[this.mes] + "</TD></TR>";
	var line1 = "";
	for (var intLoop = 0; intLoop < this.days.length; intLoop++) {
		line1 = line1 + "<TD class='fuentecalendariotittle' >" + this.days[intLoop] + "</TD>";
	}
	totalline = line + "<tr>" + line1 + "</tr>";
	return totalline;
}     

function cuerpo() {
	var line = "";
	for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
		line = line + "<TR>";
		for (var intDays = 0; intDays < this.days.length; intDays++){
			line = line + "<TD class='fuentecalendario' STYLE='cursor: default;' ></TD>";
		}
		line =line + "</TR>";
	}
	return line;
}

function pintacalendario() {
	if (this.mes == 12){
		this.mes = 0;
	}
if (this.mtipo == 1){

var strinicapa = "<div ID='"+ this.nombreobjeto + "' style=\"position: absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:0; height:0; z-index:2;visibility: " + this.visible + ";\">";
}else{

	var strinicapa = "<div ID='"+ this.nombreobjeto + "' style=\"margin-top: 10px; margin-right: 10px; position: relative; float: left; z-index: 2; visibility: " + this.visible + ";\">";
}
	var strfincapa = "</div>";
	var strinitabla = "<table ID='hola" + this.nombreobjeto + "'  bgcolor=\"#5a789e\" border =\"0\" >";
	var strfintabla = "</table>";
	var strcuerpo = "";

	strcuerpo= strcuerpo + "<THEAD>" + this.cabecera() + "</THEAD>";
	strcuerpo= strcuerpo + "<TBODY id='dayList" + this.nombreobjeto + "' align='center'>" + this.cuerpo() + "</TBODY>";
	strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;

	document.write(strcapa);

	today = new this.getToday();
	var parseYear = parseInt(this.ano);
	var newCal = new Date(parseYear,this.mes,1);
	var startDay = newCal.getDay();
	var day = -1;
	var daily = 0;

	if ((today.year == newCal.getYear()) && (today.month == newCal.getMonth())) day = today.day;
	// Cache the table's tBody element named dayList.
	var ntabla = "hola" + this.nombreobjeto;
	var ntbody = "dayList" + this.nombreobjeto;
	var tableCal = m4elemento(ntbody);
	var intDaysInMonth = this.getDays(this.mes, this.ano);
	for (var intWeek = 0; intWeek < tableCal.rows.length;intWeek++) {
		for (var intDay = 0; intDay < tableCal.rows[intWeek].cells.length; intDay++) {
				var cell = tableCal.rows[intWeek].cells[intDay];
				// Start counting days.
				if ((intDay == startDay) && (0 == daily)){ daily = 1};
				// Output the day number into the cell.
				cell.style.backgroundColor = 'white';
				if ((daily > 0) && (daily <= intDaysInMonth)){
					cell.style.backgroundColor='#e7e8ec';
					m4textodentrotd(cell,true,daily++);}
				else{
					m4textodentrotd(cell,true,'__')
				}
		}
	}
	for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
		 if (m4textodentrotd(tableCal.rows[intWeek].cells[0],false,"") != ""){
		 tableCal.rows[intWeek].cells[0].style.backgroundColor='#CCC';
		 }
		  if (m4textodentrotd(tableCal.rows[intWeek].cells[0],false,"") != ""){
		 tableCal.rows[intWeek].cells[6].style.backgroundColor='#CCC';
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
						if  (cell.style.backgroundColor != '#CCC'){
							cell.style.backgroundColor='gold';
						}
						salto = true;
						break;
					}
				}
			}
			else{
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
						//if  (cell.style.backgroundColor != 'navajowhite'){
							cell.style.backgroundColor='crimson';
						//}
						salto = true;
						break;
					}
				}
			}
			else{
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
						//if  (cell.style.backgroundColor != 'navajowhite'){
							cell.style.backgroundColor='royalblue';
						//}
						salto = true;
						break;
					}
				}
			}
			else{
			break;
			}
		}
	}
	for (var icancelados = 0; icancelados < this.cancelados.length; icancelados++){
	salto=false;
		for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
			if (salto !=true){
				for (intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++){
					cell = tableCal.rows[intWeek].cells[intDay];
					if (m4textodentrotd(cell,false,"") == this.cancelados[icancelados]) {
						if  (cell.style.backgroundColor != '#CCC'){
							cell.style.backgroundColor='darksalmon';
						}
						salto = true;
						break;
					}
			}
			}
			else{
			break;
			}
		}
	}
}

function damefecha(td) {
	var control = false;
	var festivos = "gold";
	var normal = "#e7e8ec";
	var pendiente = "crimson";
	var cancelado = "darksalmon";
	var aceptado = "royalblue";

	if ((m4textodentrotd(td,false,"") != "") && (this.activo == true)) {
		if ((td.style.backgroundColor != '#CCC') && (td.style.backgroundColor != festivos)){
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
			if ((td.style.backgroundColor == pendiente) && (control == false)){
				td.style.backgroundColor = normal;
				if (this.mcomprobar(m4textodentrotd(td,false,""),this.pendientes)){
					this.borradospend[this.borradospend.length] = m4textodentrotd(td,false,"");
				}
				else{
					this.pendientessalida = this.quitarvalor(m4textodentrotd(td,false,""),this.pendientessalida);
				}
				control =true;
				//¡Atención! función de control de días (ha de haber una capa en la página con id="cuenta"
				escribedias(cuentadiaspend()+cuentadiasacep(),"cuenta");
			}
			if  ((td.style.backgroundColor == normal) && (control == false)){
				td.style.backgroundColor = pendiente;
				if (this.mcomprobar(m4textodentrotd(td,false,""),this.pendientes)){
					if (this.mcomprobar(m4textodentrotd(td,false,""),this.borradospend)){
						this.borradospend = this.quitarvalor(m4textodentrotd(td,false,""),this.borradospend);
					}
				}
				else {
					this.pendientessalida[this.pendientessalida.length] = m4textodentrotd(td,false,"");
				}
				control = true;
				//¡Atención! función de control de días (ha de haber una capa en la página con id="cuenta"
				escribedias(cuentadiaspend()+cuentadiasacep(),"cuenta");
			}
			//Tratamiento de los días aceptados y pendientes de cancelación
					
			if ((td.style.backgroundColor == aceptado) && (control == false)){
				td.style.backgroundColor = cancelado;
				if (this.mcomprobar(m4textodentrotd(td,false,""),this.cancelados)){
				this.borradospend = this.quitarvalor(m4textodentrotd(td,false,""),this.borradospend);
				}
				else{
				this.borradosacep[this.borradosacep.length] = m4textodentrotd(td,false,"");
				}
				control =true; 
				//¡Atención! función de control de días (ha de haber una capa en la página con id="cuenta"
				escribedias(cuentadiaspend()+cuentadiasacep(),"cuenta");
			}
			if ((td.style.backgroundColor == cancelado) && (control == false)){
				td.style.backgroundColor = aceptado;
				if (this.mcomprobar(m4textodentrotd(td,false,""),this.cancelados)){
					this.borradospend[this.borradospend.length] = m4textodentrotd(td,false,"");
				}
				else{
					this.borradosacep = this.quitarvalor(m4textodentrotd(td,false,""),this.borradosacep);
				}
				control = true;
				//¡Atención! función de control de días (ha de haber una capa en la página con id="cuenta"
				escribedias(cuentadiaspend()+cuentadiasacep(),"cuenta");
			}
		}
	}
}

function adios(){
}

function mcomprobar(valor,matriz){
	var result = false;
	for (i=0; i < matriz.length; i++) {
		if (matriz[i] == valor){
			result = true;
			break;
		} 
	}
	return result;
}
 
function quitarvalor(valor,matriz){
	var ielimina = "";
	total = new Array();
	for (var elimina=0; elimina < matriz.length;elimina++) {
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

function mestado(){
}

//Funciones de cuenta de días ¡No son métodos de la clase! y requieren dom1.js
function escribedias(num,idcapa) {
	if (m4elemento(idcapa) != null){
		var colec = m4elemento(idcapa).childNodes;
		var elem = document.createTextNode(num);
		if (colec.length != 0){
			m4elemento(idcapa).replaceChild(elem,colec.item(0));
		} else {
			m4elemento(idcapa).appendChild(elem);
		}
	}
}

function cuentadiaspend() {
	if (typeof(coleccionmeses) != "undefined") {
		var total = 0;
		for (var j = 0; j < coleccionmeses.length;j++){
			total = total + coleccionmeses[j].pendientes.length + coleccionmeses[j].pendientessalida.length - coleccionmeses[j].borradospend.length;
		}
		return total;
	}
}

function cuentadiasacep() {
	if (typeof(coleccionmeses) != "undefined") {
		var total = 0;
		for (var j = 0; j < coleccionmeses.length;j++){
			total = total + coleccionmeses[j].aceptados.length  - coleccionmeses[j].borradosacep.length - coleccionmeses[j].cancelados.length;
		}
		return total;
	}
}