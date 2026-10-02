/* =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: m4class_calendar.js
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= */

 //clase m4class_calendar
 function m4class_calendar(nombreobjeto,mes,ano,visible,posicionx,posiciony){


 this.m4prop_nombreobjeto = nombreobjeto;
 this.m4prop_mes = mes;

 this.m4prop_ano = ano;
 this.m4prop_visible = visible;
 this.m4prop_posicionx = posicionx;
 this.m4prop_posiciony = posiciony;
 
 this.m4prop_months = new Array("Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre", "Noviembre", "Diciembre");
 this.m4prop_daysInMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
 //this.m4prop_days = new Array("Domingo", "Lunes", "Martes","Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado");
 this.m4prop_days = new Array("D", "L", "M","X", "J", "V", "S");
 this.m4met_getDays = getDays;
 this.m4met_getToday = getToday;
 this.m4met_cabecera = cabecera;
 this.m4met_cuerpo = cuerpo;
 this.m4met_pintacalendario = pintacalendario;

 this.m4met_innertd = innertd;
 this.m4met_mostrar = mostrar;
 this.m4met_mover = mover;


 }
 
function mostrar(param){
if (param == true){
m4elemento(this.m4prop_nombreobjeto).style.visibility = "visible";
}
else{
m4elemento(this.m4prop_nombreobjeto).style.visibility = "hidden";
}
}

function mover(x,y){
var xporc = x + "%";
var yporc = y + "%";
m4elemento(this.m4prop_nombreobjeto).style.left = xporc;
m4elemento(this.m4prop_nombreobjeto).style.top = yporc;
}

function getDays(month, year) {
            // Test for leap year when February is selected.
            if (1 == month)
               return ((0 == year % 4) && (0 != (year % 100))) ||
                  (0 == year % 400) ? 29 : 28;
            else
               return this.m4prop_daysInMonth[month];
}


function getToday() {
            // Generate today's date.
            this.now = new Date();
            this.year = this.now.getYear(); 
            this.month = this.now.getMonth();
            this.day = this.now.getDate();
	    // alert(this.now.getYear());
 }

       
function cabecera(){
var totalhola ="";
var hola ="";
hola = "<TR><TD class='fuentecalendario' align='center' colspan='7' onclick=''>" + this.m4prop_months[this.m4prop_mes] + "</TD></TR>";
var hola1 ="";
for (var intLoop = 0; intLoop < this.m4prop_days.length;intLoop++){
hola1 = hola1 + "<TD class='fuentecalendario' >" + this.m4prop_days[intLoop] + "</TD>";}
totalhola = hola + "<tr>" + hola1 + "</tr>";
return totalhola;
}     
function cuerpo(){
var hola = "";
for (var intWeeks = 0; intWeeks < 6; intWeeks++) {
                    hola = hola +"<TR>";
                  for (var intDays = 0; intDays < this.m4prop_days.length; intDays++){
                    hola = hola +"<TD class='fuentecalendario' STYLE='cursor: default;' ONCLICK=''></TD>";
				  }
				    hola =hola + "</TR>";
				  }
return hola;
}

function pintacalendario(){
            
            if (this.m4prop_mes == 12){
            this.m4prop_mes = 0;
            }
            
			
			//alert(this.nombre);
            var strinicapa = "<div ID='"+ this.m4prop_nombreobjeto + "' style=\"position: absolute; left:" + this.m4prop_posicionx + "px; top:" + this.m4prop_posiciony + "px; width:0; height:0; z-index:2;visibility: " + this.m4prop_visible + ";\">";
			var strfincapa = "</div>";
		
			var strinitabla = "<table ID='hola" + this.m4prop_nombreobjeto + "'  bgcolor=\"#808CBF\" border =\"1\" >";
			var strfintabla = "</table>";
            
            var strcuerpo = "";
            
			strcuerpo= strcuerpo + "<THEAD>" + this.m4met_cabecera() + "</THEAD>";
            
			strcuerpo= strcuerpo + "<TBODY id='dayList" + this.m4prop_nombreobjeto + "' align='center'>" + this.m4met_cuerpo() + "</TBODY>";
			strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;
			
			//alert(strcapa);
			
			document.write(strcapa);
			
			today = new this.m4met_getToday();
            //alert(today.day);
			var parseYear = parseInt(this.m4prop_ano,10);
			var newCal = new Date(parseYear,this.m4prop_mes,1);
   			var startDay = newCal.getDay();
   			var day = -1;
            var daily = 0;
            
            		
			
			if ((today.year == newCal.getYear()) && (today.month == newCal.getMonth())) day = today.day;
            // Cache the table's tBody element named dayList.
            
			var ntabla = "hola" + this.m4prop_nombreobjeto;
			var ntbody = "dayList" + this.m4prop_nombreobjeto;
			
			var tableCal = m4elemento(ntbody);
           
            var intDaysInMonth = this.m4met_getDays(this.m4prop_mes, this.m4prop_ano);
			//alert(tableCal.rows.length);
			   for (var intWeek = 0; intWeek < tableCal.rows.length;intWeek++){
					for (var intDay = 0;intDay < tableCal.rows[intWeek].cells.length;intDay++) {
							var cell = tableCal.rows[intWeek].cells[intDay];
							// Start counting days.
							if ((intDay == startDay) && (0 == daily)){ daily = 1};
							// Output the day number into the cell.
							 cell.style.backgroundColor = 'ghostwhite';
							if ((daily > 0) && (daily <= intDaysInMonth)){
								cell.style.backgroundColor='lightblue';
								this.m4met_innertd(cell,daily++);
							}
		    		}
				}
			
			//Sábados y domingos
			for (intWeek = 0; intWeek < tableCal.rows.length; intWeek++){
				 if (m4textodentrotd(tableCal.rows[intWeek].cells[0],false,"") != ""){
				 tableCal.rows[intWeek].cells[0].style.backgroundColor='navajowhite';
			     }
			      if (m4textodentrotd(tableCal.rows[intWeek].cells[0],false,"") != ""){
			     tableCal.rows[intWeek].cells[6].style.backgroundColor='navajowhite';
			     }
			}
}

function innertd(otd,stexto){
var ocapa = document.createElement("div");
var olink = document.createElement("a");
ocapa.setAttribute("id",this.m4prop_nombreobjeto + stexto);
var odataindiv= document.createTextNode(stexto);
var odataina= document.createTextNode("Más");
olink.appendChild(odataina);
ocapa.appendChild(odataindiv);
if (!document.all){ocapa.setAttribute("class","minuscula"); 
}else{ocapa.setAttribute("className","minuscula");};
ocapa.style.position = "relative";
ocapa.style.top = "0";
ocapa.style.left = "7";
otd.appendChild(ocapa);
otd.appendChild(olink);
}













