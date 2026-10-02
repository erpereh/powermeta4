<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>	
<%@ include file="../../sse_g3/sse_ev_trans.jsp" %>
<title><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod_title")%></title>	
<%		
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zSCO_DT_START_EVAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_START_EVAL");
String zSCO_OR_HR_ROLE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_ROLE");

if ((estado==null)||(estado.equals(""))){estado="31";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zSCO_DT_START_EVAL==null)||(zSCO_DT_START_EVAL.equals(""))){zSCO_DT_START_EVAL="";}
if ((zSCO_OR_HR_ROLE==null)||(zSCO_OR_HR_ROLE.equals(""))){zSCO_OR_HR_ROLE="";}
M4SessionCl zsesionDA = M4Context.getM4SessionCl(request);
String zYO = zsesionDA.getBagEntries("zIdPerson");
String zYOEncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zYO);
%> 
</head>
<body>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EVAL360";
   String zmeta4object = "SSE_EVAL360";  
   String znodo = "M4T_EVAL_PROC";

   String znodo1 = "M4T_EVAL360";
   String ztipocarga = "CONTROL";
 
   String zventanas = "20";
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
     String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]"; 
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCO_NM_EVAL_PROC = zcomun + "SCO_NM_EVAL_PROC";
   String zSCO_DT_ST_EV_PER = zcomun + "SCO_DT_ST_EV_PER";
   String zSCO_DT_END_EV_PER = zcomun + "SCO_DT_END_EV_PER";
   String zSCO_N_ROLE = zcomun + "SCO_N_ROLE";
 
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"M4T_EVAL_PROC","","DT_START_EVAL",zSCO_DT_START_EVAL);
	    m.setItem(zsubsesion,"M4T_EVAL_PROC","","OR_HR_ROLE",zSCO_OR_HR_ROLE);
} catch(Exception e) {}
String OrRoleEncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zSCO_OR_HR_ROLE);
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:item  m4varname="zControl" item="SSE_CONTROL" htmlsafe="true" outputdef="M4T_EVAL_PROC"/>
<m4:item  m4varname="zPoseval" item="SSE_POS" htmlsafe="true" outputdef="M4T_EVAL_PROC"/>
<%
String zmoveaux ="M4T_EVAL_PROC:M4T_EVAL_PROC" + "["+zPoseval+"]";
%>
<m4:item m4varname="zNmEvalProc" item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="M4T_EVAL_PROC"/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
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
<script type="text/javascript">
function comprobar(){
var varIdEvaluator= m4valor("NombreFormulario","SCO_ID_EVALUATOR","","get");
if (varIdEvaluator == "") {
m4setlog("_oblig",'<m4:label  item="SCO_ID_EVALUATOR" jsafe="true" outputdef="<%=znodo1%>"/>');
return;
}
if (varIdEvaluator == '<%=zYOEncr%>') {
	m4setlog("_sl_co_ess_ev_6");
return;
}
m4submit("NombreFormulario"); 
}
function comprobar_del(id_evaluator,or_evaluator){
if (id_evaluator == '<%=zYOEncr%>') {
	m4setlog("_sl_co_ess_ev_7");
return;
}
m4valor('NombreFormulario','SCO_ID_EVALUATOR',id_evaluator,'set');
m4valor('NombreFormulario','SCO_OR_EVALUATOR',or_evaluator,'set');
m4valor('NombreFormulario','ACC','ANULAR','set');
m4submit('NombreFormulario');
}
function open_vis(var_person,var_dt,var_or_role){

	var dir="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1_vis.jsp?ID_HR="+var_person+"&OR_HR_ROLE="+var_or_role+"&DT_START="+var_dt;
	window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}
</script>
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod_title_DescTitle")%></td></tr>
<tr>
<td><img src="/iconos/noname_procesos_evaluacion_ess_114_100.gif" width="114" height="100" alt="<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod_title_DescTitle")%>"/></td>
<td>
<div class="fuentedescripcion"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod_Desc")%> <%=zNmEvalProc%> </div>
<ul class="listaenlace">
<li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.LblJob")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkJob")%></a></li>
<li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_link")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1.jsp"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_link")%></a></li>
<%if (zControl!="0"){%>
<li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2_link")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1_mod2.jsp"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod2_link")%></a></li>
<li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_vis_link")%>"  href="javascript:open_vis('<%=zYOEncr%>','<%=zSCO_DT_START_EVAL%>','<%=OrRoleEncr%>');"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_vis_link")%></a></li>
<%}%>
</ul>
</td>
</tr>
</table>
<%if (zControl.equals("0")){%>
<div class="fuentenodatos">	<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_mod_ndata")%></div>
<%}else{%>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario"  >	
<input type="hidden" id="TAG" name="TAG" value="SSE_EVAL360" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EVAL360" />
<%String zSCO_DT_START_EVAL_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", zSCO_DT_START_EVAL);%>
<input type="hidden" id="SCO_DT_START_EVAL" name="SCO_DT_START_EVAL" value="<%=zSCO_DT_START_EVAL_Encr%>" />
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE" value="<%=OrRoleEncr%>" />
<input type="hidden" id="SCO_ID_EVALUATOR" name="SCO_ID_EVALUATOR" value="" />
<input type="hidden" id="SCO_OR_EVALUATOR" name="SCO_OR_EVALUATOR" value="" />
<table class = "tablaestados" width="100%" cellspacing="0"  >
<tr class = "tablaestadosceldatitulo">
	<td colspan="3" ></td>
	<td class="tablamenuright" ><a title="<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_link")%>"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1.jsp"><img alt="<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_link")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a>	</td>
</tr>
<tr>
<td class="fuentecampo">&nbsp;*&nbsp;<m4:label  item="SCO_ID_EVALUATOR" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class="fuentevalor" colspan="3">&nbsp;<input class="fuentecampo" type="text" id="SCO_GB_NAME" name="SCO_GB_NAME" size="40" maxlength="62" title="<m4:label  item="SCO_ID_EVALUATOR" htmlsafe="true" outputdef="<%=znodo1%>"/>" value="" readonly="readonly" />&nbsp;<a tabindex="1" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="SCO_ID_EVALUATOR" htmlsafe="true" outputdef="<%=znodo1%>"/> " href="javascript:sse_filtro('NombreFormulario','SCO_ID_EVALUATOR','SCO_OR_EVALUATOR','SCO_GB_NAME');"><img alt="<%=Tran.getProperty("Label.LblSelect")%>  <m4:label  item="SCO_ID_EVALUATOR" htmlsafe="true" outputdef="<%=znodo1%>"/>" src="/iconos/icono_lista_16_16.gif" width="16" height="16" align="top" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
</tr>
<tr><td class="fuenteboton" colspan="4"><a title="<%=Tran.getProperty("Button.Send")%>" href="javascript:void comprobar();" tabindex="2">	<img alt="<%=Tran.getProperty("Button.Send")%>"id="enviar"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
<table class = "tablaestados" width="100%" cellspacing="0" >
<tr class = "tablaestadosceldatitulo"><td colspan="2">&nbsp; <m4:label get="node" outputdef="<%=znodo1%>" htmlsafe="true"/></td></tr>
<m4:dataloop outputdef="<%=znodo1%>">
<tr>
<td class="fuentevalor">&nbsp<m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<m4:item m4varname="IdHrEncr" item="SCO_ID_EVALUATOR" htmlsafe="true" jsafe = "true" outputdef="<%=znodo1%>"/>
<%IdHrEncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", IdHrEncr);%>
<m4:item m4varname="IdOrEncr" item="SCO_OR_EVALUATOR" htmlsafe="true" jsafe = "true" outputdef="<%=znodo1%>"/>
<%IdOrEncr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", IdOrEncr);%>
<td class = "fuentebotonright"><a title="<%=Tran.getProperty("Button.Delete")%>" href="javascript:comprobar_del('<%=IdHrEncr%>','<%=IdOrEncr%>');"><img alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</m4:dataloop>
</table>
<%}%>				
</br>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>	
<m4:endpage/>
</body>


