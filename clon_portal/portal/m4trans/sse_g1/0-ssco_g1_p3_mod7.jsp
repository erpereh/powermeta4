
<script type="text/javascript">
function comprobar(){
var error = 0;
var texto = m4getmessage("_sl_co_payment_data_1");

var vobjetoc = document.forms["NombreFormulario"].elements["SCO_CK_MOV_INTERA"];
if (vobjetoc.checked == true){
	sValue="1";
}else{
	sValue="0";
}
m4valor("NombreFormulario","SCO_CK_MOV_INTER",sValue,"set");

var vobjetoc = document.forms["NombreFormulario"].elements["SCO_CK_MOV_NACA"];
if (vobjetoc.checked == true){
	sValue="1";
}else{
	sValue="0";
}
m4valor("NombreFormulario","SCO_CK_MOV_NAC",sValue,"set");

var vobjetoc = document.forms["NombreFormulario"].elements["SCO_CK_TRAVEL_DISPOA"];
if (vobjetoc.checked == true){
	sValue="1";
}else{
	sValue="0";
}
m4valor("NombreFormulario","SCO_CK_TRAVEL_DISPO",sValue,"set");

if (error == 1){
	alert(texto);
	return;
}else {
m4submit("NombreFormulario") ;
}
}

function borrar(reg){
	m4valor("Formulario","REC",reg,"set");
	m4submit("Formulario");
}

function searchoption(sform,sidinput,sidoption){
	oselect=document.forms[sform].elements[sidinput];
	for(var ni=0; ni< oselect.options.length; ni++){    
		if (oselect.options[ni].value == sidoption){
		oselect.selectedIndex = ni; 
		break;
		}
	}	
}
</script>
<%
   String zsubsesion = "SSE_HR_COMP_INFORMATION";
   String zmeta4object = "SSE_HR_COMP_INFORMATION";
   String znodo = "SSE_HR_COMP_INFORMATION";
   String znodoM4T = "M4T_HR_COMP_INFORMATION";   
   String znodo2 = "M4T_X_AREA_JOB";
   String znodo3 = "M4T_RCH_CURRENCY";
   
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/ssco_g1_p3_mod7.jsp";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   String zoutputdefM4T = zsubsesion + "!" + znodoM4T + "[*]";
   String zmoveM4T = znodoM4T + ":" + znodoM4T + "[FIRST]";
   String zcomunM4T = znodoM4T + ":" + zsubsesion + "!" + znodoM4T + ".";

  
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   

   // Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "ALL";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
   
   String zSCOCKMOVINTER = zcomun + "SCO_CK_MOV_INTER";
   String zSCOCKMOVNAC = zcomun + "SCO_CK_MOV_NAC";
   String zSCOCKTRAVELDISPO = zcomun + "SCO_CK_TRAVEL_DISPO";
   
   String zSCOCKMOVINTERVAR = zcomun + "SCO_CK_MOV_INTER_VAR";
   String zSCOCKMOVNACVAR = zcomun + "SCO_CK_MOV_NAC_VAR";
   String zSCOCKTRAVELDISPOVAR = zcomun + "SCO_CK_TRAVEL_DISPO_VAR";
   
   String zSCONAREA = zcomun + "SCO_N_AREA";
   String zSCOMINSALARY = zcomun + "SCO_MIN_SALARY";
   String zNMCURRENCY = zcomun + "NM_CURRENCY";      
   String zORDINAL = zcomun + "ORDINAL";
   String zSCOHOBBIES = zcomun + "SCO_HOBBIES";   
   String zSCOOTHERS = zcomun + "SCO_OTHERS";
   
   String zNACCION = zcomun + "N_ACCION";
      
   String zSCOCKMOVINTERM4T = zcomunM4T + "SCO_CK_MOV_INTER";
   String zSCOCKMOVNACM4T = zcomunM4T + "SCO_CK_MOV_NAC";
   String zSCOCKTRAVELDISPOM4T = zcomunM4T + "SCO_CK_TRAVEL_DISPO";
   
   String zSCONAREAM4T = zcomunM4T + "SCO_N_AREA";

   String zSCOMINSALARYM4T = zcomunM4T + "SCO_MIN_SALARY";
   String zIDCURRENCYM4T = zcomunM4T + "ID_CURRENCY";
   String zNMCURRENCYM4T = zcomunM4T + "NM_CURRENCY";      
   String zSCOHOBBIESM4T = zcomunM4T + "SCO_HOBBIES";   
   String zSCOOTHERSM4T = zcomunM4T + "SCO_OTHERS";
         
   String zSCOIDAREA = zcomun2 + "SCO_ID_AREA";
   String zSCONAREA2 = zcomun2 + "SCO_N_AREA";
   
   String zIDCURRENCY = zcomun3 + "ID_CURRENCY";
   String zNMCURRENCY2 = zcomun3 + "NM_CURRENCY";      
         
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
<m4:outputdef m4alias="<%=znodoM4T%>"><m4:param name="m4name0" value="<%=zoutputdefM4T%>"/></m4:outputdef>
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
	int  zcountM4Ti  = 0;					
	int  zcount3i  = 0;					
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
	    zcountM4Ti = m.getCountInClient(znodoM4T,zsubsesion,znodoM4T);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);				
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount2v = String.valueOf(zcount2i);
	String	zcountM4Tv = String.valueOf(zcountM4Ti);
	String	zcount3v = String.valueOf(zcount3i);	
	String zSCO_CK_MOV_INTER="";
	String zSCO_CK_MOV_NAC="";
	String zSCO_CK_TRAVEL_DISPO="";
	String zSCO_ID_AREA="";
	String zID_CURRENCY="";	
	String zxhi="";
	String zxhn="";
	String zxht="";	
	if (zcountM4Ti > 0) {%>
	   <m4:item var="zSCO_CK_MOV_INTER" item="SCO_CK_MOV_INTER" htmlsafe="true" outputdef="<%=znodoM4T%>"/>
	   <m4:item var="zSCO_CK_MOV_NAC" item="SCO_CK_MOV_NAC" htmlsafe="true" outputdef="<%=znodoM4T%>"/>	   	   
	   <m4:item var="zSCO_CK_TRAVEL_DISPO" item="SCO_CK_TRAVEL_DISPO" htmlsafe="true" outputdef="<%=znodoM4T%>"/>
	   <m4:item var="zID_CURRENCY" item="ID_CURRENCY" htmlsafe="true" outputdef="<%=znodoM4T%>"/>
	   <m4:item var="zSCO_ID_AREA" item="SCO_ID_AREA" htmlsafe="true" outputdef="<%=znodoM4T%>"/>	   	      
<%}%>
<%if (zSCO_CK_MOV_INTER.equals("1")){zxhi="checked=\"checked\"";}%>
<%if (zSCO_CK_MOV_NAC.equals("1")){zxhn="checked=\"checked\"";}%>
<%if (zSCO_CK_TRAVEL_DISPO.equals("1")){zxht="checked=\"checked\"";}%>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%></td></tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%>"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%>" src="/iconos/inf_complementaria_empleado_100x100.gif"  width="100" height="100"/></td>
	<td>
		<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p3_mod7Des")%></div>
		<ul class="listaenlace"><li><a class="enlacefuncional" title = "<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3")%></a></li></ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_HR_COMP_INFORMATION" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HR_COMP_INFORMATION" />
<input type="hidden" id="SCO_CK_MOV_INTER" name="SCO_CK_MOV_INTER" value="" />
<input type="hidden" id="SCO_CK_MOV_NAC" name="SCO_CK_MOV_NAC" value="" />
<input type="hidden" id="SCO_CK_TRAVEL_DISPO" name="SCO_CK_TRAVEL_DISPO" value="" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
	<td colspan="4">&nbsp;<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod7Des")%></td>	
	<td colspan="1" class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>	
</tr>
<%
int zTabess=0;
%>
<tr>	
	<td class="fuentecampo" colspan="1">&nbsp;<m4:label  item="SCO_CK_MOV_INTER"  outputdef="<%=znodo%>"/></td>     
	<td class = "fuentecampo" colspan="5"><input  type="checkbox" id="SCO_CK_MOV_INTERA" tabindex="<%=(zTabess + 1)%>" name="SCO_CK_MOV_INTERA"  <%=zxhi%> /></td>	
<tr>		
	<td class="fuentecampo" colspan="1">&nbsp;<m4:label item="SCO_CK_MOV_NAC"  outputdef="<%=znodo%>"/></td>     
	<td class = "fuentecampo" colspan="1"><input  type="checkbox" tabindex="<%=(zTabess + 1)%>" id="SCO_CK_MOV_NACA" name="SCO_CK_MOV_NACA"  <%=zxhn%> /></td>		
	<td class="fuentecampo" colspan="1">&nbsp;<m4:label m4name="<%=zSCOOTHERS%>" htmlsafe="true" /></td>
	<td class="fuentevalor"  colspan="2" ><input class="fuenteformulario200" type="text"  tabindex="<%=(zTabess + 1)%>" id="SCO_OTHERS" name="SCO_OTHERS" size="50" value = "<m4:item m4name="<%=zSCOOTHERSM4T%>"  htmlsafe="true"  />"  title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCOOTHERS%>" htmlsafe="true" />"  maxlength=100 /></td>
</tr>	
<tr>	
	<td class="fuentecampo" colspan="1">&nbsp;<m4:label  item="SCO_CK_TRAVEL_DISPO"  outputdef="<%=znodo%>"/></td>     
	<td class = "fuentecampo" colspan="1"><input tabindex="<%=(zTabess + 1)%>" tabindex="<%=(zTabess + 1)%>" type="checkbox" id="SCO_CK_TRAVEL_DISPOA" name="SCO_CK_TRAVEL_DISPOA"  <%=zxht%> /></td>		
	<td class="fuentecampo" colspan="1">&nbsp;<m4:label m4name="<%=zSCOHOBBIES%>" htmlsafe="true" /></td>
	<td class="fuentevalor" colspan="2"><input class="fuenteformulario200" type="text" tabindex="<%=(zTabess + 1)%>" id="SCO_HOBBIES" name="SCO_HOBBIES" size="50" value = "<m4:item m4name="<%=zSCOHOBBIESM4T%>" htmlsafe="true" />" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/>"  maxlength=62 /></td>	
</tr>
<tr>
	<td colspan="5" class = "fuenteboton">&nbsp;
	<a tabindex="<%=(zTabess + 1)%>" title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar()"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36"  onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
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

<form action="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod7.jsp?estado=11" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
	<input type="hidden" id="TAG" name="TAG" value="SSE_HR_COMP_INFORMATION" />
	<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
	<input type="hidden" id="NOD" name="NOD" value="SSE_HR_COMP_INFORMATION" />
	<input type="hidden" id="REC" name="REC" />
</form>

<table class="tablaestados" width="100%" cellspacing="0">

<tr class="tablaestadosceldatitulo">   
	<td colspan = "8">&nbsp;<%=Tran.getProperty("Label.TableValPen")%></td>									
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	if (zcontrol==0){%>
<tr>
	<td class = "fuentecampoaccion" colspan = "8">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
</tr>
<tr>
	<td class = "fuentevalor">&nbsp;<m4:label m4name="<%=zSCOCKMOVINTER%>" htmlsafe="true"/></td>	
	<td class = "fuentevalor" colspan = "8"><m4:item m4name="<%=zSCOCKMOVINTERVAR%>" htmlsafe="true"/></td>
</tr>	
<tr>
	<td class = "fuentevalor">&nbsp;<m4:label m4name="<%=zSCOCKMOVNAC%>" htmlsafe="true" /></td>
	<td class = "fuentevalor"><m4:item m4name="<%=zSCOCKMOVNACVAR%>" htmlsafe="true"/></td>

	<td class = "fuentevalor" ><m4:label m4name="<%=zSCOOTHERS%>" htmlsafe="true"/></td>
	<td class = "fuentevalor" ><m4:item m4name="<%=zSCOOTHERS%>" htmlsafe="true"/></td>						
</tr>		
<tr>	
	<td class = "fuentevalor">&nbsp;<m4:label m4name="<%=zSCOCKTRAVELDISPO%>" htmlsafe="true" /></td>
	<td class = "fuentevalor"><m4:item m4name="<%=zSCOCKTRAVELDISPOVAR%>" htmlsafe="true"/></td>	
	<td class = "fuentevalor"><m4:label m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/></td>
	<td class = "fuentevalor"><m4:item m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/></td>	
</tr>
<tr>
	<td class = "fuentevalor" colspan = "8"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
	<td class = "fuentecampoaccion2" colspan = "8">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
</tr>
<tr>
	<td class = "fuentevalor2">&nbsp;<m4:label m4name="<%=zSCOCKMOVINTER%>" htmlsafe="true"/></td>	
	<td class = "fuentevalor2" colspan = "8"><m4:item m4name="<%=zSCOCKMOVINTERVAR%>" htmlsafe="true"/></td>
</tr>	
<tr>
	<td class = "fuentevalor2">&nbsp;<m4:label m4name="<%=zSCOCKMOVNAC%>" htmlsafe="true" /></td>
	<td class = "fuentevalor2"><m4:item m4name="<%=zSCOCKMOVNACVAR%>" htmlsafe="true"/></td>

	<td class = "fuentevalor2" ><m4:label m4name="<%=zSCOOTHERS%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2" ><m4:item m4name="<%=zSCOOTHERS%>" htmlsafe="true"/></td>						
</tr>		
<tr>	
	<td class = "fuentevalor2">&nbsp;<m4:label m4name="<%=zSCOCKTRAVELDISPO%>" htmlsafe="true" /></td>
	<td class = "fuentevalor2"><m4:item m4name="<%=zSCOCKTRAVELDISPOVAR%>" htmlsafe="true"/></td>	
	<td class = "fuentevalor2"><m4:label m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/></td>
	<td class = "fuentevalor2"><m4:item m4name="<%=zSCOHOBBIES%>" htmlsafe="true"/></td>	
</tr>
<tr>
	<td class = "fuentevalor2" colspan = "8"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}%>
</m4:loop>

</table>
<script type="text/javascript">	m4focus("NombreFormulario","SCO_CK_MOV_INTERA");</script>
