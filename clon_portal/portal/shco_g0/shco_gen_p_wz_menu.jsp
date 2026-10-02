<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_p_wz_menu.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

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
<script>function nullvalue(){}</script>
<div id="capa_link" style="position:absolute; left:0%; top:0%; width:20%; height:0%; z-index:1">
<table width="100%" class="wizard">
<tr><td>
<table class="subwizard" width="100%" cellspacing="0" cellpadding="2">
<tr><td class="titulo" colspan="2">&nbsp;<m4:label m4name="<%=zSHCOLBSTEPS%>" htmlsafe="true"/></td></tr>
<tr><td class="wzimage"><%@ include file="../files_gif/ic_p_wz_menu.jsp" %></td></tr>
<tr><td class="subwizard"></td></tr>
<% for (int i=0; i < countStep; i++) { 
// Obtención de obligatoriedad por paso
state_step = Integer.parseInt(obligatory_step[i]);	
if (zIndexWizard == i){ %>	
<tr><td class="wzactivado">&nbsp;<%= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[i])%></td></tr>
<%}else{%>
<%if (state_step != enabled) {%>
<tr><td class="wzdesactivado">&nbsp;<a href="javascript:var parametros=['LOADTYPE','WZINDEX','CLEAN_PARAM'];var valores=['<%=loadtype[i]%>','<%=i%>','<%=zCLEAN_PARAM%>'];m4navegar('/servlet/CheckSecurity/JSP/<%=links[i]%>',parametros,valores);" title="<%=titles[i]%>"><%= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[i])%></a></td></tr>

<%}else {%>
<tr><td class="wzdesactivado">&nbsp;<%= com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(steps[i])%></td></tr>
<%}}}
aceptar = Integer.parseInt(butts[0]); 
cancelar = Integer.parseInt(butts[1]);
if (butts[2]!= null){
save = Integer.parseInt(butts[2]);
add_save_button=1;
}
%>

<tr><td>&nbsp;</td></tr>
<tr><td align="center">
<% // Save Button 
if (add_save_button == 1){
  if (save == enabled){%>
<a href="javascript:m4wzsave(1);" ><img alt="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_save.jsp" %> /></a>&nbsp;  
<%}else{%>
<a href="javascript:nullvalue();" ><img alt="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_save_dis.jsp" %> /></a>&nbsp;
<%}}%>  


<%if (aceptar==enabled ) { %>
<%if (info_dyn.equals("0")) { %>
<a href="javascript:m4wzins_term(1);" ><img alt="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_exec.jsp" %> /></a>&nbsp;
<%}else{%>
<a href="javascript:m4wzins_dyn(1);" ><img alt="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_exec.jsp" %> /></a>&nbsp;
<%}%>
<%}else{%>
<a href="javascript:nullvalue();" ><img alt="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBEXEC%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_exec_off.jsp" %> /></a>&nbsp;
<%}%>		
<%if (cancelar==enabled){%>
<a href="javascript:document.NombreFormulario.action='/servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_end.jsp';m4valor('NombreFormulario','zredireccion','<%=retpagecancel%>','set');m4submit('NombreFormulario');" ><img alt="<m4:label m4name="<%=zSHCOLBCANCELACC%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBCANCELACC%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_can.jsp" %> /></a>&nbsp;
<%}else{%>
<a href="javascript:nullvalue();" ><img alt="<m4:label m4name="<%=zSHCOLBCANCELACC%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBCANCELACC%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_can.jsp" %> /></a>&nbsp;
<%}%>	
</td></tr>
<% } %>	
</table>
</td></tr></table>
<br/><br/><br/>
<script type="text/javascript" language="Javascript1.5">stit='<%=com.meta4.taglib.util.M4PresentationUtilTaglib.escape(steps[zIndexWizard])%>';</script>
<%if (zDynFilter.equals("1")){
String zMO="";
String zMOApply="";
try {	
	M4Operations m = new M4Operations(request);
	zMO= m.getItem(znodocom,zm4object,znodocom,"","SHCO_STRING2");
	zMOApply= m.getItem(znodocom,zm4object,znodocom,"","SHCO_STRING3");
}
catch(Exception e){}
if (zMO == null || zMO.equals("")){zMO="";}
if (zMOApply == null || zMOApply.equals("")){zMOApply="1";}
%>
<%@ include file="../shco_g0/shco_gen_dynfilter_include.jsp" %>
<script type="text/javascript" language="Javascript1.5">
m4dynfilter('<%=zsubsesion%>','<%=zMO%>','','<%=zMOApply%>','3','','','','frmcalldynfilter','m4after_filter()','zdynfiltersinfo');
</script>
<%}%>

