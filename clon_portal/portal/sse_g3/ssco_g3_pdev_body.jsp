
<script type="text/javascript">
function ver_det(vPos){

var parametros = new Array("sPos");
var valores = new Array(vPos);
var path = "sse_g3/ssco_g3_pdev_det.jsp";
m4navegar(path,parametros,valores);

}

function ver_form(vCurso){

var parametros = new Array("zid");
var valores = new Array(vCurso);
var path = "sse_g3/sse_g3_p3_mod1.jsp";
m4navegar(path,parametros,valores);

}



</script>

<%
String zsubsesion = "SSCO_DEV_PLAN";
String zmeta4object = "SSCO_DEV_PLAN";
String znodo = "SSCO_DEV_PLAN";
String znodo1 = "SSE_H_HR_KNC_EXP";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_DEV_PLAN.SSCO_DEV_PLAN_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
int  zcount  = 0;int  zcount1  = 0;	
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);

} catch(Exception e) {}
String	zcountv = String.valueOf(zcount);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g3Ess.getProperty("Title.ssco_g3_pdevDes")%></td></tr>
<tr>
	<td><img alt="<%=sse_g3Ess.getProperty("Title.ssco_g3_pdevDes")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
	<td>
		<div class="descripcionfuncional"><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevDes")%></div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="1" title="<%=sse_g3Ess.getProperty("Label.sse_g3_ppal")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=sse_g3Ess.getProperty("Link.sse_g3_ppal")%></a></li>
		<li><a class="enlacefuncional"  tabindex="2" title="<%=sse_g3Ess.getProperty("Label.ssco_g3_p11_pet")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p11_pet.jsp?estado=31"><%=sse_g3Ess.getProperty("Link.ssco_g3_p11_pet")%></a></li>
		<li><a class="enlacefuncional"  tabindex="3" title="<%=sse_g3Ess.getProperty("Link.sse_g3_p22")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p22.jsp"><%=sse_g3Ess.getProperty("Link.sse_g3_p22")%></a></li>
		<li><a class="enlacefuncional"  tabindex="4" title="<%=sse_g3Ess.getProperty("Link.sse_g3_p9")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp"><%=sse_g3Ess.getProperty("Link.sse_g3_p9")%></a></li>
		</ul>
	</td>
</tr>
</table>
<%if (zcount > 0) {
String zOrigenAnt="";
String zIdJobAnt="";
%>
<table class = "tablaestados" width="100%" cellspacing="0" >
<tr class = "tablaestadosceldatitulo " >
<td><m4:label  item="SCO_ID_ORIGIN" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td>&nbsp;</td>
<td><m4:label  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>" /> </td>
<td><m4:label  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td><m4:label  item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td><m4:label  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>" /></td>
<td colspan="2"><m4:label  item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>" /></td>

</tr>	
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
<m4:item m4varname="zIdOrigen" item="SCO_ID_ORIGIN" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zIdJob" item="SCO_ID_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zFin" item="SCO_IS_FINISHED" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zIdCurso" item="SCO_ID_DEV_SUBPRODUCT" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="zMandatory" item="SCO_IS_MANDATORY" htmlsafe="true" outputdef="<%=znodo%>" />

<tr>
	<%if (zIdOrigen.equals("1")){%>	
	<td class="fuentevalor"><%if (zIdOrigen.equals(zOrigenAnt)){%>	&nbsp;	<%}else{%>	<m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>" /><%zOrigenAnt = zIdOrigen;}%></td>
	<td class="fuentevalor"><%if (zIdJob.equals(zIdJobAnt)){%>	&nbsp;	<%}else{%>	<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>" /><%zIdJobAnt = zIdJob;}%></td>
	<%}else if (zIdOrigen.equals("2")){%>
	<td class="fuentevalor"><%if (zIdOrigen.equals(zOrigenAnt)){%>	&nbsp;	<%}else{%>	<m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>" /><%zOrigenAnt = zIdOrigen;}%></td>
	<td class="fuentevalor"><m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>" /></td>
	<%}else {%>
	<td class="fuentevalor"><%if (zIdOrigen.equals(zOrigenAnt)){%>	&nbsp;	<%}else{%>	<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNoDet")%><%zOrigenAnt = zIdOrigen;}%></td>
	<td class="fuentevalor">&nbsp;</td>
	<%}%>
	<td class="fuentevalor"><a  title="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevDet")%>" href="javascript:ver_det('<%=current%>');"><m4:item  item="SCO_NM_ACTION" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
	<td class="fuentevalor"><m4:item  item="SCO_NM_ACTION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor3" ><%if (zMandatory.equals("1")){%><img alt="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevYes")%>"  title="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevYes")%>"src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /><%}else {%><img alt="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNo")%>" title="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNo")%>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" /><%}%></td>
	
	
	
	<td class="fuentevalor"><m4:item  item="SCO_ACTION_WHEN" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor3" >
		<%if (zFin.equals("1")){%>
			 <img alt="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevYes")%>"  title="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevYes")%>"src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" />
			 </td>
			 			<td class="fuentevalor" &nbsp; </td>
		<%}else {%>
			<img alt="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNo")%>" title="<%=sse_g3Ess.getProperty("Label.ssco_g3_pdevNo")%>"  src="/iconos/icono_peq_eliminar_ess_11_12.gif" height="11" width="12" />
			</td>
			<td class="fuentevalor">&nbsp;
			<%if( !(zIdCurso.equals(""))){%>
			<a href="javascript:ver_form('<%=zIdCurso%>');" title="<%=sse_g3Ess.getProperty("Label.ssco_g3_ptraing")%>"><img alt="<%=sse_g3Ess.getProperty("Label.ssco_g3_ptraing")%>" title="<%=sse_g3Ess.getProperty("Label.ssco_g3_ptraing")%>"src="/iconos/ic_next_edit_16_16_0.gif" /></a>
			<%}%>
			</td>
		<%}%>
	
</tr>
</m4:dataloop>
</table>
<%}else{%>
<br/> <br/><br/> <br/>
<div class="fuentenodatos"><%=sse_g3Ess.getProperty("Label.ssco_g3_pdevDesNodata")%></div>
<%}%>




