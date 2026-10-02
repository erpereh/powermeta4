// ****************************************************************************************
// LIBRARY OF M4FUNCIONES FROM THE ESS MENU // ****************************************************************************************
//FUNCTIONALITY GROUPS (DEFINITION)

		//ARRAYS DEL GRUPO 1
		mnombres1 = new Array(); mlinks1 = new Array();
		mnombres1[0]="My Personal Information"; mlinks1[0]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11"; 
		mnombres1[1]="&nbsp;&nbsp;Legal Address"; mlinks1[1]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11"; 
		mnombres1[2]="&nbsp;&nbsp;Phone Number"; mlinks1[2]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11"; 
		mnombres1[3]="&nbsp;&nbsp;E-mail Address"; mlinks1[3]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11"; 
		mnombres1[4]="&nbsp;&nbsp;Other Addresses"; mlinks1[4]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11"; 
		mnombres1[5]=""; mlinks1[5]=""; 
		mnombres1[6]="My Professional Information"; mlinks1[6]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"; 
		mnombres1[7]="&nbsp;&nbsp;Qualifications"; mlinks1[7]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11"; 
		mnombres1[8]="&nbsp;&nbsp;Languages"; mlinks1[8]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11"; 
		mnombres1[9]="&nbsp;&nbsp;Previous Employment"; mlinks1[9]="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11";

		//ARRAYS DEL GRUPO 2
		mnombres2 = new Array(); mlinks2 = new Array(); 
		mnombres2[0]="Main Bank Account"; mlinks2[0]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21"; 
		mnombres2[1]=""; mlinks2[1]=""; 
		mnombres2[2]="Other Accounts"; mlinks2[2]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21"; 
		mnombres2[3]=""; mlinks2[3]=""; 
		mnombres2[4]="Most-Recent Payslips"; mlinks2[4]="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21";

		//ARRAYS DEL GRUPO 3
		mnombres3 = new Array(); mlinks3 = new Array();
		mnombres3[0]="Job History"; mlinks3[0]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31"; 
		mnombres3[1]=""; mlinks3[1]=""; 
		mnombres3[2]="Internal Mobility"; mlinks3[2]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31"; 
		mnombres3[3]=""; mlinks3[3]=""; 
		mnombres3[4]="Appraisal Assessment"; mlinks3[4]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31"; 
		mnombres3[5]="Appraisal Processes"; mlinks3[5]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31"; 
		mnombres3[6]="Appraisal History"; mlinks3[6]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31"; 
		mnombres3[7]="Objectives"; mlinks3[7]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31"; 
		mnombres3[8]=""; mlinks3[8]=""; 
		mnombres3[9]="Training Catalogue"; mlinks3[9]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31"; 
		mnombres3[10]="Course Enrolment"; mlinks3[10]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31"; 
		mnombres3[11]="Course Evaluation"; mlinks3[11]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31"; 
		mnombres3[12]=""; mlinks3[12]=""; 
		mnombres3[13]="Career Plan"; mlinks3[13]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31";	

		//ARRAYS DEL GRUPO 4
		mnombres4 = new Array(); mlinks4 = new Array();
		mnombres4[0]="Holidays"; mlinks4[0]="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41"; 
		mnombres4[1]="Holiday Calendar"; mlinks4[1]="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41"; 
		mnombres4[2]="Absences"; mlinks4[2]="/servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41";

//********************************************************************************************************

//OBJETO GRUPO (do not modify)
		
function grupo(nombrecapa,anchuraminima,posicionx,posiciony,links,nombres){

	//Propiedades 
	this.nombrecapa = nombrecapa; 
	this.anchuraminima =anchuraminima; 
	this.posicionx = posicionx; 
	this.posiciony = posiciony; 
	this.links = links; this.nombres = nombres;

	//Metodos 
	this.generarcapa = generarcapa; 
	this.mostrardiv = mostrardiv; 
	this.ocultardiv = ocultardiv;

	this.normal = normal; 
	this.resaltado = resaltado; 
	this.ir = ir;
	}
		
//DEFINITION OF THE METHODS IN THE GROUP OBJECT
		
function  generarcapa(){

		var longmax = this.nombres[0].length;
		if (this.nombres.length > 1){ 
			for (j=0; j < this.nombres.length; j++){ 
				//alert(this.nombres[j].length); 
				if (this.nombres[j].length >= longmax){ 
					longmax = this.nombres[j].length; } } }

		var longitudcapa = (longmax+1)*6;

		if (longitudcapa < this.anchuraminima){ 
			longitudcapa = this.anchuraminima; }

		//alert(this.anchuraminima); //alert(longitudcapa);

		if ((this.posicionx + longitudcapa) > (screen.availWidth*0.96)){ 
			longitudcapa = screen.availWidth*0.96 - this.posicionx; }

		var strcapa = ""; 

		var strinicapa = "<div id='" + this.nombrecapa + "' name='" + this.nombrecapa + "' style='position:absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:" + longitudcapa + "px; visibility: hidden; z-index: 4;' onmouseout=\"" + this.nombrecapa + ".ocultardiv('" + this.nombrecapa + "');\" onmouseover=\"" + this.nombrecapa + ".mostrardiv('" + this.nombrecapa + "');\">"; 
		var strfincapa = "</div>";		

//		var strinitabla = "<table class='tablacapamenu' border='0' cellpadding='0' cellspacing='0' style='border-left: #E0E0E0 solid 1; border-right: 1 solid #808080; border-top: 1 solid #E0E0E0; border-bottom: 1 solid #808080'>"; 
		var strinitabla = "<table class='tablacapamenu' cellpadding='0' cellspacing='0' >"; 
		var strfintabla = "</table>";

		var strcuerpo="";
	
		for (i=0; i< this.links.length; i++){
			if (this.links[i] !="" && this.nombres[i]!=""){ 
				strcuerpo= strcuerpo + "<tr><td class='fuentemenu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\"" + this.nombrecapa + ".ir('" + this.links[i] + "');\"> &nbsp;" +this.nombres[i]+ "</td></tr>";} 
			else{ 
				strcuerpo = strcuerpo + "<tr><td><hr noshade color='#6AA4DF' size=\"1\"></td></tr>"; } }

		strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;

		//alert(strcapa);

		document.write(strcapa);
	}

function ocultardiv(capa){ 
	//alert("oculto " + capa.id); 
	m4elemento(capa).style.visibility = "hidden"; } 
	
function mostrardiv(capa){ 
	//alert("muestro " + capa.id); 
	m4elemento(capa).style.visibility = "visible"; }

function resaltado(obj){ 
	obj.className = "fuentemenu1"; } 
	
function normal(obj){ 
	obj.className = "fuentemenu"; } 

function ir(direccion){ 
	location.href=direccion; }