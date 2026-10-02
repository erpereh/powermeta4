// ****************************************************************************************
// LIBRERIA DE M4FUNCIONES DEL MENU DEL SSE
// ****************************************************************************************


//GRUPOS DE FUNCIONALIDAD (DEFINICION)
		
			//ARRAYS DEL GRUPO 1
			
			mnombres1 = new Array();
			mlinks1 = new Array();
			
			mnombres1[0]="Ofertas de empleo";
			mlinks1[0]="/servlet/CheckSecurity/JSP/sse_g1/js_proces.jsp?estado=1";	
			mnombres1[1]="&nbsp;&nbsp;Mi curriculo";
			mlinks1[1]="/servlet/CheckSecurity/JSP/sse_g1/js_datos_personales.jsp?estado=1";
			
			

//************************************************************************************************************


//OBJETO GRUPO (no modificar)
		
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
		this.mostrarcapa = mostrarcapa;
		this.ocultarcapa = ocultarcapa;
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
			var strinicapa = "<div id=" + this.nombrecapa + " style='position: absolute; left:" + this.posicionx + " ; top:" + this.posiciony + "; width:" + longitudcapa + "px; height:0px; z-index: 2;visibility=hidden' onmouseout='"+ this.nombrecapa + ".ocultarcapa();' onmouseover='"+ this.nombrecapa + ".mostrarcapa();'>";
			var strfincapa = "</div>";
		
			var strinitabla = "<table class='tablamenusuperior' border='0' cellpadding='0' cellspacing='0' style='border-left: #E0E0E0 solid 1; border-right: 1 solid #808080; border-top: 1 solid #E0E0E0; border-bottom: 1 solid #808080'>";
			var strfintabla = "</table>";
				
			var strcuerpo="";
		
			for (i=0; i< this.links.length; i++){
		
			if (this.links[i] !="" && this.nombres[i]!=""){
				strcuerpo= strcuerpo + "<tr><td class='fuentemenu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\" " + this.nombrecapa + ".ir('" + this.links[i] + "');\">&nbsp;" +this.nombres[i]+ "</td></tr>";
			}
			else{
				strcuerpo = strcuerpo + "<tr><td><hr noshade color='#087AA8' size=\"1\"></td></tr>";
			}
			}
			
			strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;
			
			//alert(strcapa);
			
			document.write(strcapa);
			
		
		}
		
		
function mostrarcapa(){
document.all[this.nombrecapa].style.visibility = "visible";
}



function ocultarcapa(){
document.all[this.nombrecapa].style.visibility = "hidden";
}		

function resaltado(obj){
obj.style.backgroundColor = "white";
obj.className = "fuentemenu1";
}
function normal(obj){
obj.style.backgroundColor = "#52A2C8";
obj.className = "fuentemenu";
}
function ir(direccion){
location.href=direccion;
}
 