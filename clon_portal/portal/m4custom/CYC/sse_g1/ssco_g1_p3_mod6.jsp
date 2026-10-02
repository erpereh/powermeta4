<script type="text/javascript">
function comprobar(){
var error = 0;
var dtstart = "";
var dtend = "";
var asociacion = "";
var tpasociacion = "";
var fechasok = false;
var dtstartok = "";
var dtendok = "";
var texto = m4getmessage("_sl_co_payment_data_1");
var valorfec = m4fechahoy();
dtstart = m4valor("NombreFormulario","SCO_DT_START","","get");
dtend = m4valor("NombreFormulario","SCO_DT_END","","get");
tpasociacion = m4select(m4objeto("SCO_ID_ASSOC_TYPE","NombreFormulario"),"value");
asociacion =  m4select(m4objeto("SCO_ID_ASSOCIATION","NombreFormulario"),"value");
dtstartok = m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");
dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");
fechasok = m4compfechas(m4objeto("SCO_DT_START","NombreFormulario"),"<=",m4objeto("SCO_DT_END","NombreFormulario"));	
if (dtstart == null || dtstart == ""){
	texto = texto + "\n" +  m4getmessage("_sl_co_payment_data_2");
	error = 1;
	}
if (tpasociacion == null || tpasociacion == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_ess_af_1");
	error = 1;
	}	
if (asociacion == null || asociacion == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_ess_af_0");
	error = 1;
	}		
if ((dtstart != null && dtstart !="") && (dtstartok == "")){
	texto = texto + "\n" + m4getmessage("_sl_co_payment_data_3");
	error = 1;
	}
if ((dtend != null && dtend !="") && (dtendok == "")){
	texto = texto + "\n" + m4getmessage("_sl_co_payment_data_8");
	error = 1;
	}
if ((dtend != null && dtend !="") && (dtendok != "") && (dtstart != null && dtstart !="") && (dtstartok != "") && (fechasok == false)){
	texto = texto + "\n" + m4getmessage("_sl_co_payment_data_9");
	error = 1;
	}
if (error == 1){
	alert(texto);
	return;}
else {
	m4submit("NombreFormulario");
	}
}

function borrar(reg){
	m4valor("Formulario","REC",reg,"set");
	m4submit("Formulario");
}
</script>



<%
   String zsubsesion = "SSE_ASSOCIATION_ME";
   String zmeta4object = "SSE_ASSOCIATION_ME";
   String znodo = "SSE_ASSOCIATION_ME";
   String znodo2 = "M4T_X_ASSOCIATION";
   String znodo3 = "M4T_LU_ASSOCIATION_TYPE";
   
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/ssco_g1_p3_mod6.jsp";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";

   // Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "SSE";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCONASSOCIATION = zcomun + "SCO_N_ASSOCIATION";
   String zSCODTSTART = zcomun + "SCO_DT_START";
   String zSCODTEND = zcomun + "SCO_DT_END";   
   String zSTDNASSOCTYPE = zcomun + "STD_N_ASSOC_TYPE";
   String zSCONACTIVITY = zcomun + "SCO_N_ACTIVITY";
   String zSCONMPOSITION = zcomun + "SCO_NM_POSITION";
         
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   
   String zSCOIDASSOCIATION = zcomun2 + "SCO_ID_ASSOCIATION";
   String zSCONASSOCIATION2 = zcomun2 + "SCO_N_ASSOCIATION";
   
   String zSTDIDASSOCTYPE = zcomun3 + "STD_ID_ASSOC_TYPE";
   String zSTDNASSOCTYPE2 = zcomun3 + "STD_N_ASSOC_TYPE";       
   
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount2i  = 0;	
	int  zcount3i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount2v = String.valueOf(zcount2i);
	String	zcount3v = String.valueOf(zcount3i);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%></td></tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%>" src="/iconos/afiliacion_asociaciones_empleado_105x100.gif"  width="100" height="100"/></td>
	<td>
		<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p3_mod6Des2")%></div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title = "<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3")%></a></li></ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_ASSOCIATION_ME" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_ASSOCIATION_ME" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
	<td colspan="3">&nbsp;<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod6Des")%></td>	
	<td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%
int zTabess=0;
%>
<tr>
	<td class="fuentecampo" >*&nbsp;<m4:label m4name="<%=zSCODTSTART%>"/></td>    
	<td class="fuentecampo">
	<input class="fuenteformulario" type="text" tabindex="<%=(zTabess + 1)%>" name="SCO_DT_START" id="SCO_DT_START" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTSTART%>"/>" maxlength="10" size="10"  />
	<a title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTSTART%>"/>"href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))" tabindex="<%=(zTabess + 1)%>">
	<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCODTSTART%>"/>"></img>
	</a>
	</td>
	<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCODTEND%>"/></td>    
	<td class="fuentecampo" >
	<input class="fuenteformulario" type="text" tabindex="<%=(zTabess + 1)%>" name="SCO_DT_END" id="SCO_DT_END" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTEND%>"/>" maxlength="10" size="10" />	
	<a title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTEND%>"/>"href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))" tabindex="<%=(zTabess + 1)%>">
	<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCODTEND%>"/>"></img>
	</a>
	</td>
</tr>
<tr>
	</td>
	<td class="fuentecampo" >*&nbsp;<m4:label m4name="<%=zSTDNASSOCTYPE%>"/></td>
	<td class="fuentevalor" >
	<select id="SCO_ID_ASSOC_TYPE" class="fuenteformulario" tabindex="<%=(zTabess + 1)%>" name="SCO_ID_ASSOC_TYPE" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSTDNASSOCTYPE%>"/>" >
	<option value=""></option>					
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDASSOCTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNASSOCTYPE2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>	
	<td class="fuentecampo">*&nbsp;<m4:label m4name="<%=zSCONASSOCIATION%>"/></td>
	<td class="fuentevalor">
	<select id="SCO_ID_ASSOCIATION" class="fuenteformulario" tabindex="<%=(zTabess + 1)%>" name="SCO_ID_ASSOCIATION" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCONASSOCIATION%>"/>">
	<option value=""></option>
	<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSCOIDASSOCIATION%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONASSOCIATION2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	
</tr>
<tr>	
	<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCONACTIVITY%>"/></td>
	<td class="fuentevalor" ><input class="fuenteformulario" type="text" tabindex="<%=(zTabess + 1)%>" id="SCO_N_ACTIVITY" name="SCO_N_ACTIVITY" size="50" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCONACTIVITY%>"/>"  maxlength=62 /></td>
	<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCONMPOSITION%>"/></td>
	<td class="fuentevalor" ><input class="fuenteformulario" type="text" tabindex="<%=(zTabess + 1)%>" id="SCO_NM_POSITION" name="SCO_NM_POSITION" size="50" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCONMPOSITION%>"/>"  maxlength=62 /></td>
</tr>
<tr>
	<td colspan="4" class = "fuenteboton"  >&nbsp;
	<a title="<%=Tran.getProperty("Button.Send")%>" tabindex="<%=(zTabess + 1)%>" href="javascript:comprobar()"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36"  onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
	</td>
</tr>
</table>
</form>
<% if (zcounti > 0) {
String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion =0;
%>
<form action="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod6.jsp?estado=11" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
	<input type="hidden" id="TAG" name="TAG" value="SSE_ASSOCIATION_ME" />
	<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
	<input type="hidden" id="NOD" name="NOD" value="SSE_ASSOCIATION_ME" />
	<input type="hidden" id="REC" name="REC" />
</form>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td >&nbsp;<%=Tran.getProperty("Label.TableValPen")%></td>
	<td >&nbsp;<m4:label m4name="<%=zSCONASSOCIATION%>" htmlsafe="true" /></td>	
	<td >&nbsp;<m4:label m4name="<%=zSCODTSTART%>" htmlsafe="true" /></td>
	<td >&nbsp;<m4:label m4name="<%=zSCODTEND%>" htmlsafe="true" /></td>
	<td >&nbsp;<m4:label m4name="<%=zSTDNASSOCTYPE%>" htmlsafe="true" /></td>
	<td >&nbsp;<m4:label m4name="<%=zSCONACTIVITY%>" htmlsafe="true" /></td>
	<td >&nbsp;<m4:label m4name="<%=zSCONMPOSITION%>" htmlsafe="true" /></td>
	<td></td>	
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td class = "fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCONASSOCIATION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>	
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNASSOCTYPE%>" htmlsafe="true"/></td>
	<td class = "fuentevalor">&nbsp;<m4:item m4name="<%=zSCONACTIVITY%>" htmlsafe="true"/></td>
	<td class = "fuentevalor" >&nbsp;<m4:item m4name="<%=zSCONMPOSITION%>" htmlsafe="true"/></td>		
	<td class = "fuentevalor"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
	<td class = "fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONASSOCIATION%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>	
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNASSOCTYPE%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONACTIVITY%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2" >&nbsp;<m4:item m4name="<%=zSCONMPOSITION%>" htmlsafe="true"/></td>		
	<td class = "fuentevalor2"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}%>
</m4:loop>
</table>
<script type="text/javascript">	m4focus("NombreFormulario","SCO_DT_START");</script>


