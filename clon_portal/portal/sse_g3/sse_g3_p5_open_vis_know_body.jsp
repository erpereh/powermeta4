
<%
String zpos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
	String zsubsesion = "SSE_H_EVALUATOR_OPEN";
	String zmeta4object = "SSE_H_EVALUATOR_OPEN";
	String znodo = "SSE_KNOW_LEVEL_VIS";
	
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String zraiz =  znodo + ":" + zsubsesion  + "!"+ znodo+"." ;
	String zSCONMLEVEL = zcomun + "SCO_NM_LEVEL"; 
	String zSCOMEANING = zcomun + "SCO_MEANING"; 
	String zSSENMEXTDKN = zraiz + "SSE_NM_EXTD_KN"; 

	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_EVAL_CAPAB_OPEN.SSE_LOAD_DESC";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_POS" value="<%=zpos%>"/></m4:exec>
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
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.DescrValorCono")%> : <m4:item m4name="<%=zSSENMEXTDKN%>" htmlsafe = "true"/></td></tr>
<tr>
	<td><img alt="<%=TranEss.getProperty("ev_ess.Cono")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
	<td>
	<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrSigCono")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblHistEvOpen")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5_open.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkHistEvOpen")%></a></li>
	</ul>
	</td>
</tr>
</table>
<%
	int zcontrol = 0;
	String zposicions = "0";
	int zposicion =0;
	String  zPaint="";
	if (zcount > 0) {
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " >
<td ><m4:label m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/> </td>
<td><m4:label m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" ><a title="<%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%>"href="javascript:history.back();" >
		<img alt="<%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		</a>	
</td>
</tr>	
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
<tr>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"></td>
</tr>	
</m4:loop>
</table> <br/> <br/>
<%}else{%>
 <div class="fuentenodatos"><%=TranEss.getProperty("ev_ess.LblHistOpenNodata")%></div>
 <br/> <br/><br/> <br/>
<%}%>




