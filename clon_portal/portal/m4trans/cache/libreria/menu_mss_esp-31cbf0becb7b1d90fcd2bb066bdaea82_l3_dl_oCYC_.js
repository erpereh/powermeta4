// ****************************************************************************************
// LIBRERIA DE M4FUNCIONES DEL MENU DEL MSS
// ****************************************************************************************


//GRUPOS DE FUNCIONALIDAD (DEFINICION)

			//ARRAYS DEL GRUPO 1
			mnombres1 = new Array();
			mlinks1 = new Array();
			mnombres1[0]="Datos personales de mis empleados";
			mlinks1[0]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11";
			mnombres1[1]="&nbsp;&nbsp;Valida direcciones";
			mlinks1[1]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11";
			mnombres1[2]="&nbsp;&nbsp;Valida tel&eacute;fonos";
			mlinks1[2]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11";
			mnombres1[3]="&nbsp;&nbsp;Valida e-mail";
			mlinks1[3]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11";
			mnombres1[4]="&nbsp;&nbsp;Valida otras direcciones";
			mlinks1[4]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11";
			mnombres1[5]="&nbsp;&nbsp;Valida estados civiles";
			mlinks1[5]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val5.jsp?estado=11";
			mnombres1[6]="&nbsp;&nbsp;Valida p&aacute;ginas web";
			mlinks1[6]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val6.jsp?estado=11";
			mnombres1[7]="";
			mlinks1[7]="";
			mnombres1[8]="Valida titulaciones";
			mlinks1[8]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11";
			mnombres1[9]="Valida idiomas";
			mlinks1[9]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11";
			mnombres1[10]="Valida experiencia profesional";
			mlinks1[10]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11";
			mnombres1[11]="Valida certificados y licencias";
			mlinks1[11]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val4.jsp?estado=11";
			mnombres1[12]="Valida otros cursos";
			mlinks1[12]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11";
			mnombres1[13]="Valida afiliaci&oacute;n a asociaciones";
			mlinks1[13]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val6.jsp?estado=11";
			mnombres1[14]="Valida informaci&oacute;n complementaria";
			mlinks1[14]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val7.jsp?estado=11";
			mnombres1[15]="";
			mlinks1[15]="";
			mnombres1[16]="Valida contactos de emergencia (ICE)";
			mlinks1[16]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p4_val.jsp?estado=11";
			mnombres1[17]="Valida dependientes";
			mlinks1[17]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p5_val.jsp?estado=11";

			//ARRAYS DEL GRUPO 2 
			mnombres2 = new Array();
			mlinks2 = new Array();
			mnombres2[0]="Valida datos bancarios";
			mlinks2[0]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21";
			mnombres2[1]="";
			mlinks2[1]="";	
			mnombres2[2]="Valida otras cuentas";			
			mlinks2[2]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21";			
			mnombres2[3]="";
			mlinks2[3]="";
			mnombres2[4]="Datos salariales";
			mlinks2[4]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21";
			mnombres2[5]="Analiza el presupuesto de tu unidad organizativa";
			mlinks2[5]="/servlet/CheckSecurity/JSP/mss_g2/smco_g2_p11.jsp?estado=21";			
			mnombres2[6]="";
			mlinks2[6]="";
			mnombres2[7]="Valida pr&eacute;stamos";
			mlinks2[7]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21";
			mnombres2[8]="";
			mlinks2[8]="";
			mnombres2[9]="Valida beneficios";
			mlinks2[9]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21";
			mnombres2[10]="Valida cancelaci&oacute;n de beneficios";
			mlinks2[10]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p9_val.jsp?estado=21";

			//ARRAYS DEL GRUPO 3
			mnombres3 = new Array();
			mlinks3 = new Array();
			mnombres3[0]="Criterios de evaluaci&oacute;n";
			mlinks3[0]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&mss=1";					
			mnombres3[1]="Procesos de evaluaci&oacute;n";
			mlinks3[1]="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp";
			mnombres3[2]="Evaluaci&oacute;n de seguimiento";
			mlinks3[2]="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg_filter.jsp";	
			mnombres3[3]="Definici&oacute;n de objetivos del empleado";
			mlinks3[3]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&proc=1";
			mnombres3[4]="Validaci&oacute;n de objetivos del empleado";
			mlinks3[4]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31";
			mnombres3[5]="Historial de evaluaci&oacute;n";
			mlinks3[5]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=31";
			mnombres3[6]="";
			mlinks3[6]="";					
			mnombres3[7]="Valida las evaluaciones";
			mlinks3[7]="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp";
			mnombres3[8]="Valida los evaluadores";
			mlinks3[8]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31";
			mnombres3[9]="";
			mlinks3[9]="";					
			mnombres3[10]="Plan de acci&oacute;n";
			mlinks3[10]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31&mss=1";				
			mnombres3[11]="Solicita necesidades de formaci&oacute;n";
			mlinks3[11]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31";
			mnombres3[12]="Sigue las solicitudes de formaci&oacute;n";
			mlinks3[12]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31";
			mnombres3[13]="Valida solicitudes de formaci&oacute;n";
			mlinks3[13]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31";
			mnombres3[14]="Valoraci&oacute;n de cursos";
			mlinks3[14]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31";
			mnombres3[15]="Eventos actuales convocados";
			mlinks3[15]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31";
			mnombres3[16]="Formaciones realizadas";
			mlinks3[16]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&zTLoad=FR";		

			mnombres3[17]="Analiza el presupuesto para formación de tu unidad organizativa";
			mlinks3[17]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32.jsp?estado=21";			
				
			mnombres3[18]="Gestiona entrevistas";
			mlinks3[18]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31";
			mnombres3[19]="Entrevistas de mis empleados";
			mlinks3[19]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31";						
			mnombres3[20]="";
			mlinks3[20]="";	
			mnombres3[21]="Planes de carrera";
			mlinks3[21]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31";
			mnombres3[22]="Competencias del puesto";
			mlinks3[22]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31";
			mnombres3[23]="";
			mlinks3[23]="";		
			mnombres3[24]="Valida las solicitudes de movilidad interna";
			mlinks3[24]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31";
			mnombres3[25]="Valida preferencias profesionales";
			mlinks3[25]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31";			
			mnombres3[26]="Valida entrevistas";
			mlinks3[26]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31";						
			mnombres3[27]="";
			mlinks3[27]="";		
			mnombres3[28]="Solicita una vacante";
			mlinks3[28]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31";
			mnombres3[29]="Sigue los procesos abiertos";
			mlinks3[29]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31";
			mnombres3[30]="Entrevistas a candidatos";
			mlinks3[30]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31";


			
			
			//ARRAYS DEL GRUPO 4
			mnombres4 = new Array();
			mlinks4 = new Array();
			mnombres4[0]="Valida vacaciones";
			mlinks4[0]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41";	
			mnombres4[1]="Consulta vacaciones aceptadas";
			mlinks4[1]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41";
			mnombres4[2]="Ausencias";
			mlinks4[2]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41";

			//ARRAYS DEL GRUPO 5 
			mnombres5 = new Array();
			mlinks5 = new Array();
			mnombres5[0]="Revisi&oacute;n salarial de los empleados";
			mlinks5[0]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp";
			mnombres5[1]="";
			mlinks5[1]="";
			mnombres5[2]="Estado de tus recomendaciones de incremento salarial";
			mlinks5[2]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=51";
            mnombres5[3]="";
            mlinks5[3]="";
            mnombres5[4]="Analiza tus revisiones salariales";
            mlinks5[4]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8.jsp";

			//ARRAYS DEL GRUPO 6
			mnombres6 = new Array();
			mlinks6 = new Array();
			mnombres6[0]="Mis tareas";
			mlinks6[0]="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_pendientes.jsp?estado=0";	
			mnombres6[1]="Mis delegaciones";
			mlinks6[1]="/servlet/CheckSecurity/JSP/mss_generico/mss_delegation.jsp?estado=0";


//************************************************************************************************************


//OBJETO GRUPO (no modificar)
		
function grupo(nombrecapa,anchuraminima,posicionx,posiciony,links,nombres){
		
		//Propiedades
		
		this.idparent = nombrecapa.substring(4,6)
  		var butElm = document.getElementById(this.idparent);
  		this.nombrecapa = nombrecapa;
		this.anchuraminima = anchuraminima;
		this.posicionx = posicionx; 
		this.posiciony = posiciony; 
		this.links = links;
		this.nombres = nombres;
		
		//Metodos
		this.generarcapa = generarcapa;
		this.mostrardiv = mostrardiv;
		this.ocultardiv = ocultardiv;
		this.normal = normal;
		this.resaltado = resaltado;
		this.ir = ir;
		
		}
		
//DEFINICION DE LOS METODOS DEL OBJETO GRUPO
		
function  generarcapa(){
		
	
			var longmax = this.nombres[0].length;
			
			if (this.nombres.length > 1){
				for (j=0; j < this.nombres.length; j++){
					 //alert(this.nombres[j].length);
					 if (this.nombres[j].length >= longmax){
						longmax = this.nombres[j].length;
					 }
				}		    
			}
	

			
			var longitudcapa = (longmax+1)*6;
			
			if (longitudcapa < this.anchuraminima){
				longitudcapa = this.anchuraminima;
			}
			
			//alert(this.anchuraminima);
			//alert(longitudcapa);
			
			if ((this.posicionx + longitudcapa) > (screen.availWidth*0.96)){
				longitudcapa = screen.availWidth*0.96 - this.posicionx;
			}
			

	
			var strcapa = "";
			var strinicapa = "<div id='" + this.nombrecapa + "' name='" + this.nombrecapa + "' style='position:absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:" + longitudcapa + "px; visibility: hidden; z-index: 4;' onmouseout=\"" + this.nombrecapa + ".ocultardiv('" + this.nombrecapa + "');\" onmouseover=\"" + this.nombrecapa + ".mostrardiv('" + this.nombrecapa + "');\">";
			var strfincapa = "</div>";
		
//			var strinitabla = "<table class='tablacapamenu' border='0' cellpadding='0' cellspacing='0' style='border-left: #E0E0E0 solid 1; border-right: 1 solid #808080; border-top: 1 solid #E0E0E0; border-bottom: 1 solid #808080'>";
			var strinitabla = "<table class='tablacapamenu' border='0' cellpadding='0' cellspacing='0'>";
			var strfintabla = "</table>";
				
			var strcuerpo="";
		
			for (i=0; i< this.links.length; i++){
		
			if (this.links[i] !="" && this.nombres[i]!=""){
				strcuerpo= strcuerpo + "<tr><td class='fuentemenu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\" " + this.nombrecapa + ".ir('" + this.links[i] + "');\">&nbsp;" +this.nombres[i]+ "</td></tr>";
			}
			else{
				strcuerpo = strcuerpo + "<tr><td><hr noshade color='#E2E6EA' size=\"1\"></td></tr>";
			}
			}
			
			strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;
			
			//alert(strcapa);
			
			document.write(strcapa);
			
		
		}
		
		
function ocultardiv(capa){
//alert("oculto " + capa.id);
m4elemento(capa).style.visibility = "hidden";
if (document.all) mostrarElemento("SELECT");
}
function mostrardiv(capa){
var incLeft=0;
var capa_menu = document.getElementById("capa_menu");
var idparent = capa.substring(4,6)
var nborde_tabla = 3;
var oparent = document.getElementById(idparent);
var nfactor = 0;
var nincremento = 0;
if (document.all){ 
	var filamenuheight = oparent.offsetHeight;
    var topmenu = document.getElementById("tablamenu").getAttribute("offsetTop")+ nborde_tabla;
	if (oparent.offsetTop - 1 > 0){ //Menus en varias filas  	
		var nfactor = parseInt((oparent.offsetTop - 1)/filamenuheight,10) + 1; //fila en la que estoy
	}else{
		var nfactor = 1;
	}

	m4elemento(capa).style.top = (topmenu  + nfactor* filamenuheight) + "px";
}else{m4elemento(capa).style.top =(oparent.offsetTop + oparent.offsetHeight ) +"px";}

if (!document.all){ incLeft = capa_menu.offsetLeft;}
m4elemento(capa).style.left = (oparent.offsetLeft - incLeft) + "px";
var ore = /px/;
var aoffset = m4elemento(capa).style.left.split(ore);
var aancho = m4elemento(capa).style.width.split(ore);
var nanchocuerpo = document.all ? capa_menu.clientWidth : odivmenu.offsetWidth; 
var nsuma = parseInt(aoffset[0]) + parseInt(aancho[0]);
if ( nsuma >= nanchocuerpo){
var nresto =  nsuma - nanchocuerpo;
m4elemento(capa).style.left = (parseInt(aoffset[0]) - nresto) + "px";
}

m4elemento(capa).style.visibility = "visible";

}		

function resaltado(obj){
//obj.style.backgroundColor = "#3b5f91";
obj.className = "fuentemenu1";
}
function normal(obj){
//obj.style.backgroundColor = "#e2f2ff";
obj.className = "fuentemenu";
}
function ir(direccion){
location.href=direccion;
}
 
