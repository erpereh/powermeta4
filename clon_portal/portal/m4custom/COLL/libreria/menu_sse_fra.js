// ****************************************************************************************
// BIBLIOTHÈQUE DE FONCTIONS M4 POUR LE MENU DE L'ESS
// ****************************************************************************************


//GROUPES FONCTIONNELS (DÉFINITION)
		
			//ARRAYS DU GROUPE 1
			mnombres1 = new Array();
			mlinks1 = new Array();
			mnombres1[0]="Vos renseignements personnels";
			mlinks1[0]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11";	
			mnombres1[1]="&nbsp;&nbsp;Adresse principale";
			mlinks1[1]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11";
			mnombres1[2]="&nbsp;&nbsp;T&eacute;l&eacute;phones";
			mlinks1[2]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11";
			mnombres1[3]="&nbsp;&nbsp;Adresses &eacute;lectroniques";
			mlinks1[3]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11";
			mnombres1[4]="&nbsp;&nbsp;Autres adresses";
			mlinks1[4]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11";
			mnombres1[5]="&nbsp;&nbsp;Situation de famille";
			mlinks1[5]="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod5.jsp?estado=11";
			mnombres1[6]="&nbsp;&nbsp;Page Web";
			mlinks1[6]="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p1_mod6.jsp?estado=11";
			mnombres1[7]="";
			mlinks1[7]="";
			mnombres1[8]="Vos donn&eacute;es professionnelles";
			mlinks1[8]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11";
			mnombres1[9]="&nbsp;&nbsp;Dipl&ocirc;mes";
			mlinks1[9]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11";
			mnombres1[10]="&nbsp;&nbsp;Langues";
			mlinks1[10]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11";
			mnombres1[11]="&nbsp;&nbsp;Exp&eacute;rience";
			mlinks1[11]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11";
			mnombres1[12]="&nbsp;&nbsp;Permis et attestations";
			mlinks1[12]="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod4.jsp?estado=11";
			mnombres1[13]="&nbsp;&nbsp;Formations ant&eacute;rieures";
			mlinks1[13]="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11";
			mnombres1[14]="&nbsp;&nbsp;Activit&eacute;s associatives";
			mlinks1[14]="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod6.jsp?estado=11";
			mnombres1[15]="&nbsp;&nbsp;Informations compl&eacute;mentaires";
			mlinks1[15]="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod7.jsp?estado=11";
			mnombres1[16]="";
			mlinks1[16]="";
			mnombres1[17]="Vos contacts en cas d'urgence";
			mlinks1[17]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p4.jsp?estado=11"
			mnombres1[18]="Vos ayants droit";
			mlinks1[18]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p5.jsp?estado=11"
	
			//ARRAYS DU GROUPE 2 
			mnombres2 = new Array();
			mlinks2 = new Array();
			mnombres2[0]="Compte bancaire principal";
			mlinks2[0]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21";	
			mnombres2[1]="";
			mlinks2[1]="";
			mnombres2[2]="Autres comptes";
			mlinks2[2]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21";
			mnombres2[3]="";
			mlinks2[3]="";
			mnombres2[4]="Derniers bulletins de paie";
			mlinks2[4]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21";
			mnombres2[5]="";
			mlinks2[5]="";
			mnombres2[6]="Pr&ecirc;ts financiers";
			mlinks2[6]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_P.jsp?estado=21";
			mnombres2[7]="";
			mlinks2[7]="";
			mnombres2[8]="Votre r&eacute;mun&eacute;ration flexible";
			mlinks2[8]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p6.jsp?estado=21";
			mnombres2[9]="&nbsp;&nbsp;Prestations et avantages sociaux&nbsp;: simulations";
			mlinks2[9]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=0";
			mnombres2[10]="&nbsp;&nbsp;Demander des prestations";
			mlinks2[10]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p7.jsp?estado=21&vista=1";
			mnombres2[11]="&nbsp;&nbsp;Historique de vos prestations";
			mlinks2[11]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p11.jsp?estado=21&vista=2";
			mnombres2[12]="";
			mlinks2[12]="";
			mnombres2[13]="Votre r&eacute;mun&eacute;ration totale";
			mlinks2[13]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p10.jsp?estado=21";

			//ARRAYS DU GROUPE 3
			mnombres3 = new Array();
			mlinks3= new Array();
			mnombres3[ 0]="Emplois successifs";
			mlinks3[0]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31";
     		mnombres3[1]="Parcours professionnel"; 
			mlinks3[1]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31";
			mnombres3[2]="Vos connaissances";
			mlinks3[2]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p22.jsp?estado=31";
			mnombres3[3]="Pr&eacute;f&eacute;rences professionnelles";
			mlinks3[3]="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23.jsp?estado=31";
			mnombres3[4]="";
			mlinks3[4]="";
			mnombres3[5]="R&eacute;sultats d'&eacute;valuation&nbsp;: votre appr&eacute;ciation";
			mlinks3[5]="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp";	
			mnombres3[6]="Vos &eacute;valuateurs";
			mlinks3[6]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1.jsp?estado=31";
			mnombres3[7]="Objectifs";
			mlinks3[7]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31";		
			mnombres3[8]="Vos objectifs&nbsp;: votre appr&eacute;ciation"; 
			mlinks3[8]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31";
			mnombres3[9]="Suivi des &eacute;valuations";
			mlinks3[9]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31";	
			mnombres3[10]="";
			mlinks3[10]="";
			mnombres3[11]="Processus d'&eacute;valuation";
			mlinks3[11]="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_filter.jsp";
			mnombres3[12]="&Eacute;valuations de suivi"; 
			mlinks3[12]="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_seg_filter.jsp";			
			mnombres3[13]="";
			mlinks3[13]="";
			mnombres3[14]="Catalogue de formation";
			mlinks3[14]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31";	
			mnombres3[15]="Inscriptions en formation";
			mlinks3[15]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31";	
			mnombres3[16]="&Eacute;valuation des formations";
			mlinks3[16]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31";
			mnombres3[17]="Formations suivies";
			mlinks3[17]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p21.jsp?estado=31";
			mnombres3[18]="Mobilit&eacute; interne";
			mlinks3[18]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31";				
			if(sIsKnownet=="0"){
				mnombres3[19]="Forum"; 
				mlinks3[19]="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=31&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=YES";
				mnombres3[20]="Documentation de formation"; 
				mlinks3[20]=sTotal_Server_Knownet+"&_URI=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=1";
				mnombres3[21]="Experts"; 
				mlinks3[21]=sTotal_Server_Knownet+"&_URI=/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp";
				mnombres3[22]="Vos entretiens professionnels";
				mlinks3[22]="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31";	
				mnombres3[23]="";
				mlinks3[23]="";
				mnombres3[24]="Communication interne"; 
				mlinks3[24]=sTotal_Server_Knownet+"&_URI=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=2";
			}else{		
				mnombres3[19]="Vos entretiens professionnels";
				mlinks3[19]="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11.jsp?estado=31";	
			}

			//ARRAYS DU GROUPE 4
			mnombres4 = new Array();
			mlinks4 = new Array();
			mnombres4[0]="Cong&eacute;s";
			mlinks4[0]="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41";		
			mnombres4[1]="Calendrier des jours f&eacute;ri&eacute;s";
			mlinks4[1]="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41";
			mnombres4[2]="Absences";
			mlinks4[2]="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41";
			
			//ARRAYS DU GROUPE 5
			if(sIsKnownet=="0"){
				mnombres5 = new Array();
				mlinks5 = new Array();
				mnombres5[0]="Forum";
				mlinks5[0]="/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO"; 
				mnombres5[1]="";
				mlinks5[1]=""; 
				mnombres5[2]="Recherche"; 
				mlinks5[2]=sTotal_Server_Knownet+"&_URI=/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp"; 
				mnombres5[3]="";
				mlinks5[3]=""; 
				mnombres5[4]="Cr&eacute;ation de r&egrave;gles de distribution"; 
				mlinks5[4]=sTotal_Server_Knownet+"&_URI=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp";
				mnombres5[5]="Distribution personnalis&eacute;e";
				mlinks5[5]=sTotal_Server_Knownet+"&_URI=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL";
				mnombres5[6]=""; 
				mlinks5[6]=""; 
				mnombres5[7]="Experts"; 
				mlinks5[7]=sTotal_Server_Knownet+"&_URI=/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp";
			}

//********************************************************************************************************

//OBJETO GRUPO (no modificar)
		
function grupo(nombrecapa,anchuraminima,posicionx,posiciony,links,nombres){
	//Propiedades
	this.idparent = nombrecapa.substring(4,6)
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

	//var longitudcapa = (longmax+1)*6;
	var longitudcapa = (longmax+1)*4;

	if (longitudcapa < this.anchuraminima){
		longitudcapa = this.anchuraminima;
	}
	
	if ((this.posicionx + longitudcapa) > (screen.availWidth*0.96)){
		longitudcapa = screen.availWidth*0.96 - this.posicionx;
	}
	
	var strcapa = "";
	var strinicapa = "<div id='" + this.nombrecapa + "' name='" + this.nombrecapa + "' style='position:absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:" + longitudcapa + "px; visibility: hidden; z-index: 4;' onmouseout=\"" + this.nombrecapa + ".ocultardiv('" + this.nombrecapa + "');\" onmouseover=\"" + this.nombrecapa + ".mostrardiv('" + this.nombrecapa + "');\">";
	var strfincapa = "</div>";
	var strinitabla = "<table class='tablacapamenu' cellpadding='0' cellspacing='0' >";  
	var strfintabla = "</table>";
	var strcuerpo="";

	for (i=0; i< this.links.length; i++){
		if (this.links[i] !="" && this.nombres[i]!=""){
			strcuerpo= strcuerpo + "<tr><td class='fuentemenu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\"" + this.nombrecapa + ".ir('" + this.links[i] + "');\"> &nbsp;" + this.nombres[i]+ "</td></tr>";
		}
		else{
			strcuerpo = strcuerpo + "<tr><td><hr noshade color='#D0E1ED' size=\"1\"></td></tr>";
		}
	}

	strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;

	document.write(strcapa);
}

function ocultardiv(capa){
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
	}else{
		m4elemento(capa).style.top =(oparent.offsetTop + oparent.offsetHeight ) +"px";
	}
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
	obj.className = "fuentemenu1";
}

function normal(obj){
	obj.className = "fuentemenu";
}

function ir(direccion){
	location.href=direccion;
}

