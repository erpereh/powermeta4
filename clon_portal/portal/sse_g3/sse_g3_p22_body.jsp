<%
String zsubsesion = "SSE_H_HR_KNC_LVL";
String zmeta4object = "SSE_H_HR_KNC_LVL";
String znodo = "SSE_H_HR_KNC_LVL";
String znodo1 = "SSE_H_HR_KNC_EXP";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String zSCO_NM_LEVEL = zcomun + "SCO_NM_LEVEL"; 
String zSCO_NM_EXTD_KN = zcomun + "SCO_NM_EXTD_KN"; 
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
String zSCO_NM_LEVEL1 = zcomun1 + "SCO_NM_LEVEL"; 
String zSCO_NM_EXTD_KN1 = zcomun1 + "SCO_NM_EXTD_KN";	
String zSCO_N_ORIGEN = zcomun1 + "SSE_N_ORIGEN";
String zSSE_TP_ORIGEN = zcomun1 + "SSE_TP_ORIGEN";
String zSCO_RWEIGHT = zcomun1 + "SCO_RWEIGHT";
String zSSE_ID_TP_ORIGEN = zcomun1 + "SSE_ID_TP_ORIGEN";
String zSSE_ID_TP_ORIGEN_AUX = zcomun1 + "SSE_ID_TP_ORIGEN_AUX";

String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_H_HR_KNC_LVL.SMCO_MAIN_LOAD_PROCESS";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="SMCO_ARG_HR_TO_LOAD" value="<%=zSMCO_ID_HR%>"/>	</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<%
int  zcount  = 0;int  zcount1  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
	zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcount);String	zcountv1 = String.valueOf(zcount1);
%>
<%if (zVis.equals("1")){%>
	<table border="0" width="100%">
	<tr><td class="titulofuncional" colspan="2"><%=sse_g3Ess.getProperty("Title.sse_g3_p22Des")%></td></tr>
	<tr>
		<td><img alt="<%=sse_g3Ess.getProperty("ev_ess.LinkHistEvOpen")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
		<td>
		<div class="descripcionfuncional"><%=sse_g3Ess.getProperty("Label.sse_g3_p22Des")%></div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="1" title="<%=sse_g3Ess.getProperty("Label.sse_g3_ppal")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=sse_g3Ess.getProperty("Link.sse_g3_ppal")%></a></li>
		</ul>
		</td>
	</tr>
	</table>
<%}%>

<%if (zVis.equals("1")){%>
	<%if (zcount > 0) {%>
	 <table width="100%" cellspacing="0"><tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr></table>
	 <%}%>
 <%}%>


<%if (zVis.equals("1")){%>
	<table class = "tablaestados" width="100%" cellspacing="0">
<%}else{%>
	<table class = "barraregistros" width="100%" cellspacing="0">
<%}%>

<%if (zcount > 0) {	String zposicions = "0";int zcontrol = 0;int zposicion =0;String  zPaint="";%>
	<tr class = "tablaestadosceldatitulo " >
	<td><m4:label m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe = "true"/> </td>
	<td><m4:label m4name="<%=zSCO_NM_LEVEL%>" htmlsafe = "true"/></td>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<%zposicions = m4lix;zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
	<tr>
		<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe = "true"/></td>
		<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_LEVEL%>" htmlsafe = "true"/></td>
	</tr>	
	</m4:loop>

<%}else{%>
	<tr><td colspan="10" class="tablaestadosceldatitulo"><%=sse_g3Ess.getProperty("Label.sse_g3_p22NoData")%></td></tr>
<%}%>

</table>

<%if (zVis.equals("1")){%>
 <br/> <br/>
	<%if (zcount1 > 0) {
	String zid_typeAnt="";String zid_typeAuxAnt="";
	String zposicions1 = "0";int zcontrol1 = 0;int zposicion1 =0;String  zPaint1="";%>
	<table width="100%" cellspacing="0"><tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo1%>" htmlsafe="true"/></td></tr></table>
	<table class = "tablaestados" width="100%" cellspacing="0">
	<tr class = "tablaestadosceldatitulo " >
	<td ><m4:label m4name="<%=zSSE_TP_ORIGEN%>" htmlsafe = "true"/> </td>
	<td >&nbsp;</td>
	<td ><m4:label m4name="<%=zSCO_NM_EXTD_KN1%>" htmlsafe = "true"/> </td>
	<td><m4:label m4name="<%=zSCO_NM_LEVEL1%>" htmlsafe = "true"/></td>
	<td><m4:label m4name="<%=zSCO_RWEIGHT%>" htmlsafe = "true"/></td>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>">
	<%zposicions1 = m4lix;zposicion1 = Integer.valueOf(zposicions1).intValue();zcontrol1 = zposicion1%2;if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%>
		<m4:item  m4varname="zid_type" m4name="<%=zSSE_ID_TP_ORIGEN%>" htmlsafe = "true"/>
		<m4:item  m4varname="zid_typeaux" m4name="<%=zSSE_ID_TP_ORIGEN_AUX%>" htmlsafe = "true"/>
	<tr>
	<%if (zid_typeAnt.equals(zid_type)){%>
	<td class="fuentevalor<%=zPaint1%>">&nbsp;</td>
		<%if (zid_typeAuxAnt.equals(zid_typeaux)){%>
		<td class="fuentevalor<%=zPaint1%>">&nbsp;</td>
		<%}else{%>
		<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSCO_N_ORIGEN%>" htmlsafe = "true"/></td>
		<%}%>
	<%}else{%>
	<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSSE_TP_ORIGEN%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSCO_N_ORIGEN%>" htmlsafe = "true"/></td>
	<%}
	zid_typeAnt=zid_type;
	zid_typeAuxAnt=zid_typeaux;
	%>
		<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSCO_NM_EXTD_KN1%>" htmlsafe = "true"/></td>
		<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSCO_NM_LEVEL1%>" htmlsafe = "true"/></td>
		<td class="fuentevalor<%=zPaint1%>"><m4:item m4name="<%=zSCO_RWEIGHT%>" htmlsafe = "true"/></td>
	</tr>	
	</m4:loop>
	</table>
	<%}else{%>
	<div class="fuentenodatos"><%=sse_g3Ess.getProperty("Label.sse_g3_p22NoData2")%></div>
	<br/> <br/><br/> <br/>
	<%}%>
<%}%>



