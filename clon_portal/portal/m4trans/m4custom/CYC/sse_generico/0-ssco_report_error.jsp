<%@include file="/m4trans/shco_g0/0-shco_gen_p_wz_error.jsp" %>

<%
// Numero de pasos
int countStep   = 1;
int zRistError = 0;
String numStep  = "";
String info_steps="";
String info_dyn="";

String path="/servlet/CheckSecurity/JSP/";
try {	
	M4Operations m = new M4Operations(request);
	info_steps = m.getItem(znodocom,zm4object,znodocom,"","SHCO_LONG");
	info_dyn= m.getItem(znodocom,zm4object,znodocom,"","SHCO_STRING");
}
catch(Exception e){}
if (info_steps == null || info_steps.equals("")){zRistError=1;}
if (info_dyn == null || info_dyn.equals("")){info_dyn="0";}
if (zRistError==0){
	StringTokenizer st1 = new StringTokenizer(info_steps,"#");
	countStep   = 0;
	numStep = st1.nextToken();
	StringTokenizer st2 = new StringTokenizer(numStep,"|");
	while(st2.hasMoreTokens()){
		st2.nextToken();
		countStep++;
	}
}
String steps[] = new String[countStep];
String links[] = new String[countStep];
String titles[] = new String[countStep];
String loadtype[] = new String[countStep];

String butts[] = new String[3];



/******************************* Botones de navegación del wizard ****************************/
String buttslnk[] = new String[3]; // Enlace  
String buttload[] = new String[3]; // Tipo de carga  
/*********************************************************************************************/

String obligatory_steps = "";
String temp_table = "";
String stt_buttons = "";
String nodesvis = "";
String jsppath = "";
String aux="";
String strloadtyp="";
String strregtype="";
String retpage = "";
String retpagemode = "";
String retpagecancel = "";

int aceptar = 0;
int cancelar = 0;
int save = 0;
int add_save_button = 0;
int enabled = 1;
int state_step = 0;
int numinf  = 0;
int tmp = 0;
int j = 0;
int b = 0;
String obligatory_step[] = new String[countStep];
if (zRistError==0){
StringTokenizer P = new StringTokenizer(info_steps,"#");
try {
	M4Operations m1 = new M4Operations(request);

	while(P.hasMoreTokens()){   
		 
		// Información estado botones
		if (numinf==6) {
			numinf++;
			stt_buttons = P.nextToken();
			StringTokenizer T = new StringTokenizer(stt_buttons,"|");
			b=0;
			while(T.hasMoreTokens()){
				butts[b] = T.nextToken();
				b++;
			}
		}
	
		// Modo de la página de retorno
		if (numinf==5) {
			numinf++;
			retpagemode = P.nextToken();
			StringTokenizer Sx = new StringTokenizer(retpagemode,"|");
			while(Sx.hasMoreTokens()){
				retpagemode = Sx.nextToken();
			}
		}
		// Página de retorno
		if (numinf==4) {
			numinf++;
			retpage = P.nextToken();
			StringTokenizer Sx = new StringTokenizer(retpage,"|");
			while(Sx.hasMoreTokens()){
				retpage = Sx.nextToken();
			}
		}
		
		// Páginas JSP
		if (numinf==3) {
			numinf++;
			jsppath = P.nextToken();
			StringTokenizer H2 = new StringTokenizer(jsppath,"|");
			b=0;
				while(H2.hasMoreTokens()){
					links[b] =  H2.nextToken();
					b++;
				}
			retpagecancel=links[0];	
		}
	
		// Nodos de visualización
		if (numinf==2) {
			numinf++;
			nodesvis = P.nextToken();
			StringTokenizer H = new StringTokenizer(nodesvis,"|");
			b=0;
				while(H.hasMoreTokens()){
					aux=H.nextToken();
					steps[b] =m1.getLabel(aux,zm4object,aux+"[0]","");
					titles[b] = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[b]);
					b++;
					
				}
		}
	

		
		// Tipos de carga por paso
		if (numinf == 1) {
			numinf++;
			strloadtyp = P.nextToken();
			StringTokenizer S2 = new StringTokenizer(strloadtyp,"|");
			j=0;
			while(S2.hasMoreTokens()){
				loadtype[j] = S2.nextToken();
				j++;
			}
		}
		
		// Información obligatoriedad pasos
		if (numinf == 0) {
			numinf++;
			obligatory_steps = P.nextToken();
			StringTokenizer S = new StringTokenizer(obligatory_steps,"|");
			j=0;
			while(S.hasMoreTokens()){
				obligatory_step[j] = S.nextToken();
				j++;
			}
		}
	}	
}catch(Exception e){}
%>

<%}%>
