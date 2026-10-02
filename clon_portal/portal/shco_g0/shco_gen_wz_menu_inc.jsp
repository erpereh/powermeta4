<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_menu_inc.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>

<%
int zIndexWizard = Integer.parseInt((String)request.getAttribute("zIndexWizardREQ"));
String znodocom = (String)request.getAttribute("znodocomREQ");
String zm4object = (String)request.getAttribute("zm4objectREQ");
String zcssuser = (String)request.getAttribute("zcssuserREQ");
String zappprod = M4Context.getSession(request).getProductID().toLowerCase();


String znodolabel = "SHCO_GN_LABEL";
String zraizlabel =  znodolabel + ":" + zm4object  + "!" + znodolabel + ".";
String zSHCOLBSTEPS = zraizlabel + "SHCO_LB_STEPS";
String zSHCOLBINSERT = zraizlabel + "SHCO_LB_INSERT";
String zSHCOLBCANCEL = zraizlabel + "SHCO_LB_ANUL";


%>

<%
// Numero de pasos
int count_butt  = 2;
int countStep   = 1;
int zRistError = 0;
String numStep  = "";
String info_steps="";
String path="/servlet/CheckSecurity/JSP/";
try {	
	M4Operations m = new M4Operations(request);
	info_steps = m.getItem(znodocom,zm4object,znodocom,"","SHCO_LONG");
}
catch(Exception e){}

if (info_steps == null || info_steps.equals("")){zRistError=1;}

if (zRistError==0){
StringTokenizer st1 = new StringTokenizer(info_steps,"#");
countStep   = 0;
numStep = st1.nextToken();
StringTokenizer st2 = new StringTokenizer(numStep,"|");
		while(st2.hasMoreTokens()){
			st2.nextToken();
			countStep++;
		}}

String steps[] = new String[countStep];
String links[] = new String[countStep];
String titles[] = new String[countStep];
String loadtype[] = new String[countStep];
String typereg[] = new String[countStep];

String butts[] = new String[count_butt];
String butts_link[] = new String[count_butt];
String alttitle[] = new String[count_butt];


/******************************* Botones de navegación del wizard ****************************/

String buttsnav[] = new String[3]; // Estado ( habilitado - 1 / deshabilitado - 0 )  
String buttslnk[] = new String[3]; // Enlace  
String buttsalt[] = new String[3]; // Alt / title
String buttload[] = new String[3]; // Tipo de carga  

/*********************************************************************************************/

String obligatory_steps = "";String temp_table = "";String stt_buttons = "";String nodesvis = "";String jsppath = "";String aux="";String strloadtyp="";String strregtype="";
String retpage = "";

int aceptar = 0;
int cancelar = 0;
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
		if (numinf==7) {
			numinf++;
			stt_buttons = P.nextToken();
			StringTokenizer T = new StringTokenizer(stt_buttons,"|");
			b=0;
			while(T.hasMoreTokens()){
				butts[b] = T.nextToken();
				b++;
			}
		}
	
		// Página de retorno
		if (numinf==6) {
			numinf++;
			retpage = P.nextToken();
			StringTokenizer Sx = new StringTokenizer(retpage,"|");
			while(Sx.hasMoreTokens()){
				retpage = Sx.nextToken();
			}
		}
		
		// Información temporalidad
		if (numinf==5) {
			numinf++;
			temp_table = P.nextToken();
			StringTokenizer S = new StringTokenizer(temp_table,"|");
			while(S.hasMoreTokens()){
				temp_table = S.nextToken();
			}
		}
		
		// Páginas JSP
		if (numinf==4) {
			numinf++;
			jsppath = P.nextToken();
			StringTokenizer H2 = new StringTokenizer(jsppath,"|");
			b=0;
				while(H2.hasMoreTokens()){
					links[b] =  H2.nextToken();
					b++;
				}
		}
	
		// Nodos de visualización
		if (numinf==3) {
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
	
		// Numero de registros por página 1-N
		if (numinf == 2) {
			numinf++;
			strregtype = P.nextToken();
			StringTokenizer S2A = new StringTokenizer(strregtype,"|");
			j=0;
			while(S2A.hasMoreTokens()){
				typereg[j] = S2A.nextToken();
				j++;
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

try{
tmp = Integer.parseInt(temp_table);
}catch(Exception e){tmp = 0;}

%>
<script>function nullvalue(){}</script>
<table width="100%" class="wizard">
<tr><td>
<table class="subwizard" width="100%" cellspacing="0" cellpadding="2">
<tr><td class="titulo" colspan="2">&nbsp;<m4:label m4name="<%=zSHCOLBSTEPS%>" htmlsafe="true"/></td></tr>
<tr><td class="wzimage"><%@ include file="../files_gif/ic_wz_menu.jsp" %></td></tr>
<% for (int i=0; i < countStep; i++) { 

	// Obtención de obligatoriedad por paso
	state_step = Integer.parseInt(obligatory_step[i]);
	
	if (zIndexWizard == i){ %>
	
		<% if (state_step != enabled) { %>
			<tr><td class="wzactivado">&nbsp;<%= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[i])%></td></tr>
		<%}else{%>
			<tr><td class="wzactivado">&nbsp;<a href="javascript:nullvalue();" title="<%=titles[i]%>"><%= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[i])%></a></td></tr>
		<%}%>	
	
	<% }else{%>
	
		<%if (state_step != enabled) {%>
			<tr><td class="wzdesactivado">&nbsp;<a href="javascript:var vnavl= m4navl();if (vnavl=='1'){var parametros=['LOADTYPE','WZINDEX'];var valores=['<%=loadtype[i]%>','<%=i%>'];m4navegar('/servlet/CheckSecurity/JSP/<%=links[i]%>',parametros,valores);}" title="<%=titles[i]%>"><%= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[i])%></a></td></tr>
		<% }else {%>
			<tr><td class="wzdesactivado">&nbsp;<%= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[i])%></td></tr>
		<% } %>
	
	<%}%>

<%}%>
<%if (tmp == enabled){%>
<% 
	aceptar = Integer.parseInt(butts[0]); 
	cancelar = Integer.parseInt(butts[1]);
%>
	<tr><td>&nbsp;</td></tr>
	<tr><td align="center">
	<%
		if (aceptar==enabled ) { %>
		<a href="javascript:document.NombreFormulario.action='/servlet/CheckSecurity/JSP/shco_g0/shco_gen_wz_end.jsp';m4valor('NombreFormulario','ACC','01','set');m4valor('NombreFormulario','zredireccion','<%=retpage%>','set');m4submit('NombreFormulario');" ><img alt="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_save.jsp" %>  /></a>&nbsp;
	<% } else { %>
		<a href="javascript:nullvalue();" ><img alt="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_save_dis.jsp" %>  /></a>&nbsp;
	<% } %>		
	<% 	if (cancelar==enabled) {%>
		<a href="javascript:document.NombreFormulario.action='/servlet/CheckSecurity/JSP/shco_g0/shco_gen_wz_end.jsp';m4valor('NombreFormulario','ACC','02','set');m4valor('NombreFormulario','zredireccion','<%=retpage%>','set');m4submit('NombreFormulario');" ><img alt="<m4:label m4name="<%=zSHCOLBCANCEL%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBCANCEL%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_can.jsp" %> /></a>&nbsp;
	<% } else { %>
		<a href="javascript:nullvalue();" ><img alt="<m4:label m4name="<%=zSHCOLBCANCEL%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBCANCEL%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_can.jsp" %> /></a>&nbsp;
	<% } %>	
	</td></tr>
<%}%>	
</table>
</td></tr></table>
<%}%>
<script type="text/javascript" language="Javascript1.5">stit='<%=com.meta4.taglib.util.M4PresentationUtilTaglib.escape(steps[zIndexWizard])%>';</script>

<%
request.setAttribute("countStepREQ",Integer.toString(countStep));
request.setAttribute("linksREQ",links);
request.setAttribute("loadtypeREQ",loadtype);
request.setAttribute("pathREQ",path);
request.setAttribute("stepsREQ",steps);
request.setAttribute("buttloadREQ",buttload);
request.setAttribute("buttsaltREQ",buttsalt);
request.setAttribute("buttslnkREQ",buttslnk);
request.setAttribute("buttsnavREQ",buttsnav);
request.setAttribute("obligatory_stepREQ",obligatory_step);
request.setAttribute("titlesREQ",titles);
request.setAttribute("tmpREQ",Integer.toString(tmp));
request.setAttribute("zRistErrorREQ",Integer.toString(zRistError));
%>

<%
request.setAttribute("numStepREQ",numStep);
request.setAttribute("info_stepsREQ",info_steps);
request.setAttribute("obligatory_stepsREQ",obligatory_steps);
request.setAttribute("temp_tableREQ",temp_table);
request.setAttribute("stt_buttonsREQ",stt_buttons);
request.setAttribute("nodesvisREQ",nodesvis);
request.setAttribute("jsppathREQ",jsppath);
request.setAttribute("auxREQ",aux);
request.setAttribute("strloadtypREQ",strloadtyp);
request.setAttribute("strregtypeREQ",strregtype);
request.setAttribute("retpageREQ",retpage);
request.setAttribute("aceptarREQ",Integer.toString(aceptar));
request.setAttribute("cancelarREQ",Integer.toString(cancelar));
request.setAttribute("enabledREQ",Integer.toString(enabled));
request.setAttribute("state_stepREQ",Integer.toString(state_step));
request.setAttribute("numinfREQ",Integer.toString(numinf));
request.setAttribute("typeregREQ",typereg);
request.setAttribute("buttsREQ",butts);
request.setAttribute("butts_linkREQ",butts_link);
request.setAttribute("alttitleREQ",alttitle);
%>



