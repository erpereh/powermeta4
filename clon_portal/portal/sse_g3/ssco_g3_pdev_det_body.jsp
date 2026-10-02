<script type="text/javascript">
function ver_det(vPos){

var parametros = new Array("zPos");
var valores = new Array(vPos);
var path = "sse_g3/ssco_g3_pdev_det.jsp";
m4navegar(path,parametros,valores);
}

</script>
<%
String zPos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sPos");

if ((zPos==null)||(zPos.equals(""))){zPos="0";}


String zsubsesion = "SSCO_DEV_PLAN";
String zmeta4object = "SSCO_DEV_PLAN";
String znodo = "SSCO_DEV_PLAN";
String znodo1 = "SSE_H_HR_KNC_EXP";
String zoutputdef = zsubsesion + "!" + znodo + "[" + zPos + "]";

String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_DEV_PLAN.SSCO_DEV_PLAN_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:endjob/>


<%
int  zcount  = 0;int  zcount1  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);

} catch(Exception e) {}
String	zcountv = String.valueOf(zcount);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g3Ess.getProperty("Title.ssco_g3_pdevDet")%></td></tr>
<tr>
	<td><img alt="<%=sse_g3Ess.getProperty("Title.ssco_g3_pdevDet")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
	<td>
		<div class="descripcionfuncional"><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevDetDes")%>&nbsp; <m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/></div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="1" title="<%=sse_g3Ess.getProperty("Label.sse_g3_ppal")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=sse_g3Ess.getProperty("Link.sse_g3_ppal")%></a></li>
		<li><a class="enlacefuncional"  tabindex="2" title="<%=sse_g3Ess.getProperty("Title.ssco_g3_pdev")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_pdev.jsp"><%=sse_g3Ess.getProperty("Title.ssco_g3_pdev")%></a></li>
		<li><a class="enlacefuncional"  tabindex="3" title="<%=sse_g3Ess.getProperty("Label.ssco_g3_p11_pet")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31"><%=sse_g3Ess.getProperty("Link.ssco_g3_p11_pet")%></a></li>
		</ul>
	</td>
</tr>
</table>
<%if (zcount > 0) {

%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " ><td colspan="4">&nbsp;</td></tr>	
<m4:item m4varname="zIdOrigen" item="SCO_ID_ORIGIN" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zIdJob" item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zFin" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zMandatory" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zApproxDur" item="SCO_APROX_DURATION" htmlsafe="true" outputdef="<%=znodo%>" />
<tr>
<td class="fuentecampo"><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
<td class="fuentevalor"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentecampo"><m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
<td class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
<td class="fuentecampo"><m4:label  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
<td class="fuentevalor"><m4:item  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class="fuentecampo"><m4:label  item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
<td class="fuentevalor"><m4:item  item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
<td class="fuentecampo"><m4:label  item="SCO_ID_ORIGIN" htmlsafe="true" outputdef="<%=znodo%>" />&nbsp;:&nbsp;</td>
<%if (zIdOrigen.equals("1")){%>	
<td class="fuentevalor"><m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>" />&nbsp;(&nbsp;<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>" />&nbsp;)&nbsp;</td>
<%}else if (zIdOrigen.equals("2")){%>
<td class="fuentevalor"><m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>" />&nbsp;(&nbsp;
<m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>" />&nbsp;)&nbsp;</td></td>
<%}else {%>
<td class="fuentevalor"><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNoDet")%></td>	

<%}%>
<td class="fuentecampo"><m4:label  item="SCO_NM_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
<td class="fuentevalor"><m4:item  item="SCO_NM_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td class="fuentecampo"><m4:label  item="SCO_ACTION_DESC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor" colspan="3"><m4:item  item="SCO_ACTION_DESC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>	
<tr>
	<td class="fuentecampo"><m4:label  item="SCO_OBJECTIVES" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor"colspan="3"><m4:item  item="SCO_OBJECTIVES" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
<tr>
	<td class="fuentecampo"><m4:label  item="SCO_ACTION_HOW" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor"colspan="3"><m4:item  item="SCO_ACTION_HOW" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>	
<tr>
	<td class="fuentecampo"><m4:label  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo%>"/></td>
		<td class="fuentecampo"><m4:label  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>	
<tr>
	<td class="fuentecampo"><m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor" colspan="3"><%if (zMandatory.equals("1")){%><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevYes")%>		<%}else {%>	<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNo")%>	<%}%></td>
</tr>	
<tr>	
	<td class="fuentecampo"><m4:label  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentecampo"><m4:label  item="SCO_APROX_DURATION" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="SCO_APROX_DURATION" htmlsafe="true" outputdef="<%=znodo%>"/><%if (!zApproxDur.equals("")){%>&nbsp;-&nbsp;<m4:item  item="SCO_NM_TIME_UNIT" htmlsafe="true" outputdef="<%=znodo%>"/><%}%></td>
</tr>
	<tr>
	<td class="fuentecampo"><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<%if (zFin.equals("1")){%>
	<td class="fuentevalor"><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevYes")%>	</td>
	<td class="fuentecampo"><m4:label  item="SCO_FINISH_DESC" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor"><m4:item  item="SCO_DT_FINISH" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	</tr>
	<tr>
	<td class="fuentecampo"><m4:label  item="SCO_DT_FINISH" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;</td>
	<td class="fuentevalor" colspan="3"><m4:item  item="SCO_FINISH_DESC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	
	<%}else {%>	
	<td class="fuentevalor" colspan="3"><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNo")%></td></tr><%}%>
	
</table>
 
<%}else{%>
<br/> <br/><br/> <br/>
<div class="fuentenodatos"><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevDesNodata")%></div>
<%}%>




