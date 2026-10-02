// ****************************************************************************************
// LIBRARY OF M4FUNCIONES FROM THE MSS MENU // ****************************************************************************************

//FUNCTIONALITY GROUPS (DEFINITION)

		//ARRAYS DEL GRUPO 1
		mnombres1 = new Array(); mlinks1 = new Array();
		mnombres1[0]="Personal Information on My Employees"; mlinks1[0]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11"; 
		mnombres1[1]="&nbsp;&nbsp;Validate Addresses"; mlinks1[1]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11"; 
		mnombres1[2]="&nbsp;&nbsp;Validate Phone Numbers"; mlinks1[2]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11"; 
		mnombres1[3]="&nbsp;&nbsp;Validate E-mail Address"; mlinks1[3]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11"; 
		mnombres1[4]="&nbsp;&nbsp;Validate Other Addresses"; mlinks1[4]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11"; 
		mnombres1[5]=""; mlinks1[5]=""; 
		mnombres1[6]="Validate Qualifications"; mlinks1[6]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11"; 
		mnombres1[7]="Validate Languages"; mlinks1[7]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11"; 
		mnombres1[8]="Validate Previous Employment"; mlinks1[8]="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11";

		//ARRAYS DEL GRUPO 2
		mnombres2 = new Array(); mlinks2 = new Array();
		mnombres2[0]="Validate Bank Information"; mlinks2[0]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21"; 
		mnombres2[1]=""; mlinks2[1]=""; 
		mnombres2[2]="Validate Other Accounts"; mlinks2[2]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21"; 
		mnombres2[3]=""; mlinks2[3]=""; 
		mnombres2[4]="Salary Information"; mlinks2[4]="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21";

		//ARRAYS DEL GRUPO 3
		mnombres3 = new Array(); mlinks3 = new Array();
		mnombres3[0]="Request a Vacancy"; mlinks3[0]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31"; 
		mnombres3[1]="Track Open Processes"; mlinks3[1]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31"; 
		mnombres3[2]=""; mlinks3[2]=""; 
		mnombres3[3]="Validate Internal Mobility Requests"; mlinks3[3]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31"; 
		mnombres3[4]=""; mlinks3[4]=""; 
		mnombres3[5]="Appraisal Processes"; mlinks3[5]="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31&mss=1"; 
		mnombres3[6]="Validate Appraisals"; mlinks3[6]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31"; 
		mnombres3[7]=""; mlinks3[7]=""; 
		mnombres3[8]="Request Training Needs"; mlinks3[8]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31"; 
		//mnombres3[9]="Track Training Requests"; mlinks3[9]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31"; 
		mnombres3[9]="Validate Training Requests"; mlinks3[9]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31"; 
		mnombres3[10]="Course Evaluation"; mlinks3[10]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31"; 
		mnombres3[11]="Currently Scheduled Events"; mlinks3[11]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p10.jsp?estado=31"; 
		mnombres3[12]=""; mlinks3[12]=""; 
		mnombres3[13]="Career Plans"; mlinks3[13]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31"; 
		mnombres3[14]="Job Extended Knowledge"; mlinks3[14]="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31";

		//ARRAYS DEL GRUPO 4
		mnombres4 = new Array(); mlinks4 = new Array();
		mnombres4[0]="Validate Holidays"; mlinks4[0]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41"; 
		mnombres4[1]="Absences"; mlinks4[1]="/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41";

//************************************************************************************************************

//OBJETO GRUPO (do not modify)
	
function grupo(nombrecapa,anchuraminima,posicionx,posiciony,links,nombres){

	//Propiedades 
	this.nombrecapa = nombrecapa; 
	this.anchuraminima =anchuraminima; 
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

		var strinitabla = "<table class='tablacapamenu' border='0' cellpadding='0' cellspacing='0' style='border-left: #E0E0E0 solid 1; border-right: 1 solid #808080; border-top: 1 solid #E0E0E0; border-bottom: 1 solid #808080'>"; 
		var strfintabla = "</table>";

		var strcuerpo="";
		for (i=0; i< this.links.length; i++){
			if (this.links[i] !="" && this.nombres[i]!=""){ 
				strcuerpo= strcuerpo + "<tr><td class='fuentemenu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\" " + this.nombrecapa + ".ir('" + this.links[i] + "');\">&nbsp;" +this.nombres[i]+ "</td></tr>"; } 
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
	obj.style.backgroundColor = "#3b5f91"; 
	obj.className = "fuentemenu1"; } 

function normal(obj){ 
	obj.style.backgroundColor = "#e2f2ff"; obj.className = "fuentemenu"; } 
	
function ir(direccion){ 
	location.href=direccion; }