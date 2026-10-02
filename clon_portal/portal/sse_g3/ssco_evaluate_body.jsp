<%
	String zsubsesion = "SSCO_H_EVALUTE";
	String zmeta4object = "SSCO_H_EVALUTE";
	String znodo = "SSCO_EVALUATOR_TEMP";
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSCO_EVALUATOR_TEMP.SSCO_LOAD_EVALUTE";
	String zmove = znodo + ":" + znodo + "[FIRST]";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_ORDINAL" value=""/></m4:exec>
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

<script type="text/javascript">
function navegar (ord,pos) 
{
	m4valor("oculto","ordinal",ord,"set");
	m4valor("oculto","pos",pos,"set");

	m4submit("oculto");
}
</script>
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.Val")%></td></tr>
<tr>
	<td><a><img alt="<%=TranEss.getProperty("ev_ess.Val")%>"title="<%=TranEss.getProperty("ev_ess.Val")%>" src="/iconos/noname_resultados_evaluacion_ess_100_100.gif" width="100" height="100" /></a></td>
	<td>
		<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrValEv")%></div>
		<ul class="listaenlace">
		<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblJob")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkJob")%></a></li>
		</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate_mod.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="ordinal" name="ordinal"  value="" />
<input type="hidden" id="pos" name="pos"  value="" />

</form>
<%if (zcount> 0) {Integer ziCurPos;
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td><m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	<td><m4:label  item="NOMBRE_EMPLEADO" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	<td><m4:label  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	<td><m4:label  item="SCO_EVALUAT_DATE" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
</tr>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current var="ziCurPos" outputdef="<%=znodo%>"/>
<tr>
	<td  class="fuentevalor"><a title="<%=Tran.getProperty("Label.VerDet")%>" href="javascript:navegar('<m4:item  item="ORDINAL" htmlsafe="true"  jsafe = "true" outputdef="<%=znodo%>"/>','<%=ziCurPos%>');"><m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
	<td class="fuentevalor"><m4:item  item="NOMBRE_EMPLEADO" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td>

	<td class="fuentevalor"><m4:item  item="SCO_EVALUAT_DATE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>
</m4:dataloop>
</table>
<%}else{%>
	<div class="fuentenodatos"><%=TranEss.getProperty("ev_ess.DescNoDataFound1")%></div>
	<br/> <br/>
<%}%>


