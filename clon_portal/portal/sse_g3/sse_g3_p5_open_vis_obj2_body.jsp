
<%
String zpos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
	String zsubsesion = "SSE_H_EVALUATOR_OPEN";
	String zmeta4object = "SSE_H_EVALUATOR_OPEN";
	String znodo = "SSE_EVAL_OBJECT_OPEN_CUAN";
	

	String zoutputdef = zsubsesion + "!" + znodo + "[" + zpos + "-" + zpos + "]";
	String zmove = znodo + ":" +znodo + "[" + zpos + "]";
	String zraiz =  znodo + ":" + zsubsesion  + "!"+ znodo+"." ;
	
	String zSCOCOMMENT1 = zraiz + "SCO_COMMENT_1"; 
	String zSCONMMAGNITUDE = zraiz + "SCO_NM_MAGNITUDE"; 
	String zSCONMOBJECTIVE = zraiz + "SCO_NM_OBJECTIVE"; 
	String zSCOCOMMENT = zraiz + "SCO_COMMENT"; 

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.Obj")%> : <m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td></tr>
<tr>
	<td><img alt="<%=TranEss.getProperty("ev_ess.Obj")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
	<td>
	<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrValorObj")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblHistEvOpen")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5_open.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkHistEvOpen")%></a></li>
	</ul>
	</td>
</tr>
</table>

<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " >
<td ><m4:label m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/> &nbsp;:&nbsp;<m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" ><a title="<%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%>"href="javascript:history.back();" >
		<img alt="<%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		</a>	
</td>
</tr>	
<tr>
	<td class="fuentevalor"colspan="2"><m4:item m4name="<%=zSCOCOMMENT1%>" htmlsafe = "true"/></td>
</tr>	

</table>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " >
<td ><m4:label m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/> &nbsp;:&nbsp;<m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" ><a title="<%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%>"href="javascript:history.back();" >
		<img alt="<%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		</a>	
</td>
</tr>	
<tr>
	<td class="fuentevalor"colspan="2"><m4:item m4name="<%=zSCOCOMMENT%>" htmlsafe = "true"/></td>
</tr>	

</table> <br/> <br/>



