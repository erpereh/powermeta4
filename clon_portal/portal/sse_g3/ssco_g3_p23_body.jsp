<%
String zsubsesion = "SSE_CR_PREFERENC";
String zmeta4object = "SSE_CR_PREFERENC";
String znodo = "M4T_CR_PREFERENC";
String ztipocarga = "M4T";
	   
String zdireccion = "sse_g3/ssco_g3_p23.jsp";
String zestado = "31";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String zDT_START = zcomun + "DT_START"; 
String zSTD_OR_HR_PERIOD = zcomun + "STD_OR_HR_PERIOD"; 
String zSCO_OR_PREFER = zcomun + "SCO_OR_PREFER"; 
String zSCO_PREF_PRIORITY = zcomun + "SCO_PREF_PRIORITY"; 
String zSTD_ID_SUB_GEO_DIV = zcomun + "STD_ID_SUB_GEO_DIV"; 
String zSTD_N_SUB_GEO_DIV = zcomun + "STD_N_SUB_GEO_DIV"; 
String zSTD_ID_GEO_DIV = zcomun + "STD_ID_GEO_DIV"; 
String zSTD_N_GEO_DIV = zcomun + "STD_N_GEO_DIV"; 
String zSTD_ID_COUNTRY = zcomun + "STD_ID_COUNTRY"; 
String zSTD_N_COUNTRY = zcomun + "STD_N_COUNTRY"; 
String zSTD_ID_WORK_UNIT = zcomun + "STD_ID_WORK_UNIT"; 
String zSTD_N_WORK_UNIT = zcomun + "STD_N_WORK_UNIT"; 
String zSTD_ID_JOB_CODE = zcomun + "STD_ID_JOB_CODE"; 
String zSTD_N_JOB_CODE = zcomun + "STD_N_JOB_CODE"; 
String zSCO_PREFERENCES = zcomun + "SCO_PREFERENCES"; 
String zSCO_COMMENT = zcomun + "SCO_COMMENT"; 

String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

int zTab=1;
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
	<% try {
		    M4Operations m = new M4Operations(request); 
		    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
	
			} catch(Exception e) {}
	%>
	<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
	<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcount  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcount);
%>

<table border="0" width="100%">
	<tr><td class="titulofuncional" colspan="2">&nbsp;<%=sse_g3Ess.getProperty("Title.ssco_g3_p23Des")%>&nbsp;</td></tr>
	<tr>
		<td><img alt="<%=sse_g3Ess.getProperty("ev_ess.LinkHistEvOpen")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
		<td>
			<div class="descripcionfuncional"><%=sse_g3Ess.getProperty("Label.ssco_g3_p23Des")%></div>
			<ul class="listaenlace">
				<li><a class="enlacefuncional" tabindex="<%=zTab++%>" title="<%=sse_g3Ess.getProperty("Link.ssco_g3_p23_mod1")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=3"><%=sse_g3Ess.getProperty("Link.ssco_g3_p23_mod1")%></a></li>
			</ul>
		</td>
	</tr>
</table>


<%if (zcount > 0){ 
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String  zPaint="";%>
	<table class = "tablaestados" width="100%" cellspacing="0" border="0">
		<tr class = "tablaestadosceldatitulo">
			<td colspan="7" >&nbsp;<m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td>
			<td class="tablamenuright"><a tabindex="<%=zTab++%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=31" title="<m4:label m4name="<%=znamenodo%>" htmlsafe="true"/>"><img alt="<m4:label m4name="<%=znamenodo%>" htmlsafe="true"/>" src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
		</tr>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
	<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
	zcontrol = zposicion%2;%>
		<tr>
			<td class="fuentecampo"><m4:label m4name="<%=zSCO_PREF_PRIORITY%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor"><m4:item m4name="<%=zSCO_PREF_PRIORITY%>" htmlsafe = "true"/></td>
			<td class="fuentecampo"><m4:label m4name="<%=zDT_START%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor" colspan="4"><m4:item m4name="<%=zDT_START%>" htmlsafe = "true"/></td>
			<td class="fuentebotonright" >
				<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="formprefprof<%=zposicion%>" id="formprefprof<%=zposicion%>">
					<input type="hidden" id="TAG" name="TAG" value="SSE_CR_PREFERENC" />
					<input type="hidden" id="ACC" name="ACC" value="ANULAR" />
					<input type="hidden" id="NOD" name="NOD" value="SSE_CR_PREFERENC" />
					
					<input type="hidden" id="STD_OR_HR_PERIOD" name="STD_OR_HR_PERIOD" value="<m4:item item="STD_OR_HR_PERIOD" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="SCO_OR_PREFER" name="SCO_OR_PREFER" value="<m4:item item="SCO_OR_PREFER" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="SCO_PREF_PRIORITY" name="SCO_PREF_PRIORITY" value="<m4:item item="SCO_PREF_PRIORITY" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="DT_START" name="DT_START" value="<m4:item item="DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="STD_ID_SUB_GEO_DIV" name="STD_ID_SUB_GEO_DIV" value="<m4:item item="STD_ID_SUB_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="STD_ID_GEO_DIV" name="STD_ID_GEO_DIV" value="<m4:item item="STD_ID_GEO_DIV" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="STD_ID_COUNTRY" name="STD_ID_COUNTRY" value="<m4:item item="STD_ID_COUNTRY" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="STD_ID_WORK_UNIT" name="STD_ID_WORK_UNIT" value="<m4:item item="STD_ID_WORK_UNIT" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="STD_ID_JOB_CODE" name="STD_ID_JOB_CODE" value="<m4:item item="STD_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="SCO_PREFERENCES" name="SCO_PREFERENCES" value="<m4:item item="SCO_PREFERENCES" htmlsafe="true" outputdef="<%=znodo%>"/>" />
					<input type="hidden" id="SCO_COMMENT" name="SCO_COMMENT" value="<m4:item item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znodo%>"/>" />
				</form>
				<a  title="<%=Tran.getProperty("Button.Delete")%>"href="javascript:m4submit('formprefprof<%=zposicion%>');">
				<img class="fuentebotonright<%=zposicion%>" alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)"/>
				</a>
			</td>
		</tr>
		<tr>
			<td class="fuentecampo"><m4:label m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor"><m4:item m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe = "true"/></td>
			<td class="fuentecampo"><m4:label m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor" colspan="4"><m4:item m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe = "true"/></td>
			<td class="fuentevalor" rowspan="4">&nbsp;</td>
		</tr>
		<tr>
			<td class="fuentecampo"><m4:label m4name="<%=zSTD_N_COUNTRY%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor"><m4:item m4name="<%=zSTD_N_COUNTRY%>" htmlsafe = "true"/></td>
			<td class="fuentecampo"><m4:label m4name="<%=zSTD_N_GEO_DIV%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor"><m4:item m4name="<%=zSTD_N_GEO_DIV%>" htmlsafe = "true"/></td>
			<td class="fuentecampo"><m4:label m4name="<%=zSTD_N_SUB_GEO_DIV%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor" colspan="2"><m4:item m4name="<%=zSTD_N_SUB_GEO_DIV%>" htmlsafe = "true"/></td>
		</tr>	
			<td class="fuentecampo"><m4:label m4name="<%=zSCO_PREFERENCES%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor" colspan="6"><m4:item m4name="<%=zSCO_PREFERENCES%>" htmlsafe = "true"/></td>
		</tr>
		</tr>	
			<td class="fuentecampo"><m4:label m4name="<%=zSCO_COMMENT%>" htmlsafe = "true"/> </td>
			<td class="fuentevalor" colspan="6"><m4:item m4name="<%=zSCO_COMMENT%>" htmlsafe = "true"/></td>
		</tr>
		<tr>
		<%if (zcount > 1){%><tr><td class="separadorlinea" colspan="8"><hr /></td></tr><%}%>	
	</m4:loop>
	</table>
	 <br/> <br/>
<%}else{%>	
	<div class="fuentenodatos"><%=sse_g3Ess.getProperty("Label.ssco_g3_p23NoData")%></div>
	<br/> <br/>
<%}%>



