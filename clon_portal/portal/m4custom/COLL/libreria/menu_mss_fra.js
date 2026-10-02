// ****************************************************************************************
// BIBLIOTHÈQUE DE FONCTIONS M4 POUR LE MENU DU MSS
// ****************************************************************************************


//GROUPES FONCTIONNELS (DÉFINITION)

			//ARRAYS DU GROUPE 1
			mnombres1 = new Array();
			mlinks1 = new Array();
			mnombres1[0]="Renseignements personnels";
			mlinks1[0]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11";
			mnombres1[1]="&nbsp;&nbsp;Validez les adresses principales";
			mlinks1[1]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11";
			mnombres1[2]="&nbsp;&nbsp;Validez les t&eacute;l&eacute;phones";
			mlinks1[2]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11";
			mnombres1[3]="&nbsp;&nbsp;Validez les adresses &eacute;lectroniques";
			mlinks1[3]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11";
			mnombres1[4]="&nbsp;&nbsp;Validez les autres adresses";
			mlinks1[4]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11";
			mnombres1[5]="&nbsp;&nbsp;Validez les situations de famille";
			mlinks1[5]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val5.jsp?estado=11";
			mnombres1[6]="&nbsp;&nbsp;Validez les pages Web";
			mlinks1[6]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val6.jsp?estado=11";
			mnombres1[7]="";
			mlinks1[7]="";
			mnombres1[8]="Validez les dipl&ocirc;mes";
			mlinks1[8]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11";
			mnombres1[9]="Validez les langues";
			mlinks1[9]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11";
			mnombres1[10]="Validez les exp&eacute;riences professionnelles";
			mlinks1[10]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11";
			mnombres1[11]="Validez les permis et les attestations";
			mlinks1[11]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val4.jsp?estado=11";
			mnombres1[12]="Validez les formations ant&eacute;rieures";
			mlinks1[12]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11";
			mnombres1[13]="Validez les activit&eacute;s associatives";
			mlinks1[13]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val6.jsp?estado=11";
			mnombres1[14]="Validez les informations compl&eacute;mentaires";
			mlinks1[14]="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val7.jsp?estado=11";
			mnombres1[15]="";
			mlinks1[15]="";
			mnombres1[16]="Validez les contacts en cas d'urgence";
			mlinks1[16]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p4_val.jsp?estado=11";
			mnombres1[17]="Validez les ayants droit";
			mlinks1[17]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p5_val.jsp?estado=11";

			//ARRAYS DU GROUPE 2 
			mnombres2 = new Array();
			mlinks2 = new Array();
			mnombres2[0]="Validez les comptes bancaires principaux";
			mlinks2[0]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21";
			mnombres2[1]="";
			mlinks2[1]="";	
			mnombres2[2]="Validez les autres comptes";			
			mlinks2[2]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21";			
			mnombres2[3]="";
			mlinks2[3]="";
			mnombres2[4]="Donn&eacute;es de r&eacute;mun&eacute;ration";
			mlinks2[4]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21";
			mnombres2[5]="Analysez le budget de votre unit&eacute; de travail";
			mlinks2[5]="/servlet/CheckSecurity/JSP/mss_g2/smco_g2_p11.jsp?estado=21";			
			mnombres2[6]="";
			mlinks2[6]="";
			mnombres2[7]="Validez les demandes de pr&ecirc;t financier";
			mlinks2[7]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21";
			mnombres2[8]="";
			mlinks2[8]="";
			mnombres2[9]="Validez les demandes de prestations";
			mlinks2[9]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21";
			mnombres2[10]="Validez les annulations de prestations";
			mlinks2[10]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p9_val.jsp?estado=21";

			//ARRAYS DU GROUPE 3
			mnombres3 = new Array();
			mlinks3= new Array();
			mnombres3[0]="Crit&egrave;res d'&eacute;valuation";
			mlinks3[0]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&mss=1";					
			mnombres3[1]="Processus d'&eacute;valuation";
			mlinks3[1]="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp";
			mnombres3[2]="&Eacute;valuations de suivi";
			mlinks3[2]="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg_filter.jsp";	
			mnombres3[3]="Objectifs individuels";
			mlinks3[3]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&proc=1";
			mnombres3[4]="Validez les objectifs individuels d'&eacute;valuation";
			mlinks3[4]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31";
			mnombres3[5]="Suivi des &eacute;valuations";
			mlinks3[5]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=31";
			mnombres3[6]="";
			mlinks3[6]="";					
			mnombres3[7]="Validez les &eacute;valuations";
			mlinks3[7]="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp";
			mnombres3[8]="Validez les &eacute;valuateurs";
			mlinks3[8]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31";
			mnombres3[9]="";
			mlinks3[9]="";					
			mnombres3[10]="Plans d'action";
			mlinks3[10]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31&mss=1";				
			mnombres3[11]="Demandez des formations";
			mlinks3[11]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31";
			mnombres3[12]="Suivez les demandes de formation";
			mlinks3[12]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31";
			mnombres3[13]="Validez les demandes de formation";
			mlinks3[13]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31";
			mnombres3[14]="&Eacute;valuation des formations";
			mlinks3[14]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31";
			mnombres3[15]="Programme des sessions de formation";
			mlinks3[15]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31";
			mnombres3[16]="Formations suivies";
			mlinks3[16]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&zTLoad=FR";		

			mnombres3[17]="Analysez le budget de formation de votre unit&eacute; de travail";
			mlinks3[17]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32.jsp?estado=21";			
				
			mnombres3[18]="Administrez les entretiens";
			mlinks3[18]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31";
			mnombres3[19]="Entretiens de vos collaborateurs";
			mlinks3[19]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31";						
			mnombres3[20]="";
			mlinks3[20]="";	
			mnombres3[21]="Parcours professionnels";
			mlinks3[21]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31";
			mnombres3[22]="Comp&eacute;tences des emplois";
			mlinks3[22]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31";
			mnombres3[23]="";
			mlinks3[23]="";		
			mnombres3[24]="Validez les demandes de mobilit&eacute; interne";
			mlinks3[24]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31";
			mnombres3[25]="Validez les pr&eacute;f&eacute;rences professionnelles";
			mlinks3[25]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31";			
			mnombres3[26]="Validez les entretiens";
			mlinks3[26]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31";						
			mnombres3[27]="";
			mlinks3[27]="";		
			mnombres3[28]="Demandez des offres d'emploi";
			mlinks3[28]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31";
			mnombres3[29]="Suivez les campagnes de recrutement ouvertes";
			mlinks3[29]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31";
			mnombres3[30]="Entretiens d'embauche";
			mlinks3[30]="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31";


			
			
			//ARRAYS DU GROUPE 4
			mnombres4 = new Array();
			mlinks4 = new Array();
			mnombres4[0]="Validez les demandes de cong&eacute;s";
			mlinks4[0]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41";	
			mnombres4[1]="Consultez les cong&eacute;s approuv&eacute;s";
			mlinks4[1]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41";
			mnombres4[2]="Absences";
			mlinks4[2]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41";

			//ARRAYS DU GROUPE 5 
			mnombres5 = new Array();
			mlinks5 = new Array();
			mnombres5[0]="R&eacute;visez la r&eacute;mun&eacute;ration de vos collaborateurs";
			mlinks5[0]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp";
			mnombres5[1]="";
			mlinks5[1]="";
			mnombres5[2]="Suivez vos recommandations d'augmentation";
			mlinks5[2]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=51";
            mnombres5[3]="";
            mlinks5[3]="";
            mnombres5[4]="Analysez vos r&eacute;visions";
            mlinks5[4]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8.jsp";

			//ARRAYS DU GROUPE 6
			mnombres6 = new Array();
			mlinks6 = new Array();
			mnombres6[0]="Vos t&acirc;ches";
			mlinks6[0]="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_pendientes.jsp?estado=0";	
			mnombres6[1]="Vos d&eacute;l&eacute;gations";
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
	if (oparent.offsetTop - 1 > 0){ //Menus sur plusieurs lignes  	
		var nfactor = parseInt((oparent.offsetTop - 1)/filamenuheight,10) + 1; //ligne actuelle
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
 
