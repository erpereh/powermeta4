<script type="text/javascript">

function comprobar(){

var error = 0;
var dtstart = "";
var dtend = "";
var ncourse = "";
var numhours = "";
var fechasok = false;
var dtstartok = "";
var dtendok = "";
var texto = m4getmessage("_sl_co_payment_data_1");
var valorfec = m4fechahoy();

dtstart = m4valor("NombreFormulario","SCO_DT_START","","get");
dtend = m4valor("NombreFormulario","SCO_DT_END","","get");
ncourse = m4valor("NombreFormulario","SCO_N_COURSE","","get");
//numhours = m4valor("NombreFormulario","SCO_NUMBER_HOURS","","get");
dtstartok = m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),"");
dtendok = m4fechacomprobacion(m4objeto('SCO_DT_END','NombreFormulario'),"");
fechasok = m4compfechas(m4objeto("SCO_DT_START","NombreFormulario"),'<=',m4objeto("SCO_DT_END","NombreFormulario"));

var num = new m4objvalidacion('_num','1','99','',false);	
num.m4validar(m4objeto("SCO_NUMBER_HOURS","NombreFormulario"));

/*if (num.resultado == false || numhours == null || numhours == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_ess_oc_3");
	error = 1;
}*/	

if (dtstart == null || dtstart == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_payment_data_2");
	error = 1;
	}
if (ncourse == null || ncourse == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_ess_oc_0");
	error = 1;
	}

if ((dtstart != null && dtstart != "") && (dtstartok == "")){
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
	return;
}else {
	m4submit("NombreFormulario");
	}

}

function borrar(reg){
m4valor("Formulario","REC",reg,"set");
m4submit("Formulario");
}
</script>
<%
   String zsubsesion = "SSE_HR_COMP_BACKGROUND";
   String zmeta4object = "SSE_HR_COMP_BACKGROUND";
   String znodo = "SSE_HR_COMP_BACKGROUND";
   String znodo2 = "M4T_LU_COUNTRY";
 
      
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/sse_g1_p3_mod5.jsp";
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
   
  
   // Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";
   String ztipocarga = "SSE";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCODTSTART = zcomun + "SCO_DT_START";
   String zSCODTEND = zcomun + "SCO_DT_END";
   String zSCONCOURSE = zcomun + "SCO_N_COURSE";
   String zSCONUMBERHOURS = zcomun + "SCO_NUMBER_HOURS";
   String zSCONCENTER = zcomun + "SCO_N_CENTER";
   String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";
   String zSCOGRANTS = zcomun + "SCO_GRANTS";
   String zSCOCOMMENT = zcomun + "SCO_COMMENT";
   
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   
   String zSTDIDCOUNTRY= zcomun2 + "STD_ID_COUNTRY";
   String zSTDNCOUNTRY2 = zcomun2 + "STD_N_COUNTRY";

   

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
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount2i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
	    	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount2v = String.valueOf(zcount2i);
	%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%></td></tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>" src="/iconos/otros_cursos_70x100.gif"  width="100" height="100"/></td>
	<td>
	<div class="descripcionfuncional">Indica tu formaci&oacute;n externa</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3")%></a></li>
	</ul>
	</td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_HR_COMP_BACKGROUND" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HR_COMP_BACKGROUND" />
<table class="tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td  colspan="3">&nbsp;<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%></td>
	<td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod5Des")%>"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;<m4:label  item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentecampo">
	<input class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTSTART%>"/>" maxlength="10" size="10" tabindex="1" />
	<a title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTSTART%>"/>" href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))"> 
	<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCODTSTART%>"/>"></img>
	</a>
	</td>
	<td class="fuentecampo" >&nbsp;<m4:label  item="SCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentecampo">
		<input class="fuenteformulario" type="text" name="SCO_DT_END" id="SCO_DT_END" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTEND%>"/>" maxlength="10" size="10" />
		<a title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTEND%>"/>" href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))">
		<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCODTEND%>"/>"></img>
		</a>
		</td>
</tr>
<tr>
	<td class="fuentecampo" >*&nbsp;<m4:label m4name="<%=zSCONCOURSE%>"/></td>
	<td class="fuentevalor" ><input class="fuenteformulario" type="text" id="SCO_N_COURSE" name="SCO_N_COURSE" size="50" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCONCOURSE%>"/>"  maxlength=62 /></td>
	
	<td class="fuentecampo">&nbsp;<m4:label  item="SCO_NUMBER_HOURS" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor" ><input class="fuenteformulario" type="text" id="SCO_NUMBER_HOURS" name="SCO_NUMBER_HOURS" size="4" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCONUMBERHOURS%>"/>"  maxlength=4 /></td>
</tr>
<tr>
	<td class="fuentecampo" >&nbsp;<m4:label  item="SCO_N_CENTER" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor" ><input class="fuenteformulario" type="text" id="SCO_N_CENTER" name="SCO_N_CENTER" size="50" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCONCENTER%>"/>"  maxlength=62 /></td>	
	<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDIDCOUNTRY%>"/></td>
	<td class="fuentevalor">
		
	<select id="STD_ID_COUNTRY" class="fuenteformulario" name="STD_ID_COUNTRY" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSTDIDCOUNTRY%>"/>">
	<option value=""></option>
			<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
			<option value="<m4:item m4name="<%=zSTDIDCOUNTRY%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNCOUNTRY2%>" htmlsafe="true"/></option>
		</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<!--<td class="fuentecampo" >&nbsp;<m4:label  item="SCO_GRANTS" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor" colspan="3"><input class="fuenteformulario" type="text" id="SCO_GRANTS" name="SCO_GRANTS" size="60" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCOGRANTS%>"/>"  maxlength=254 /></td>-->
	<td class="fuentecampo" ></td>
	<td class="fuentevalor" colspan="3"></td>
</tr>
<tr>
	<td class = "fuentecampo" >&nbsp;<m4:label m4name="<%=zSCOCOMMENT%>"/></td>
		<td class="fuentevalor" colspan="3">
			<textarea rows="3" input class="fuenteformulario" type="text" cols="30" id="SCO_COMMENT" name="SCO_COMMENT" title=""<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCOCOMMENT%>"/>"  maxlength=254  ></textarea>
	</td>
</tr>
<tr><td colspan="4" class="fuenteboton">
	<a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar()"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36"  onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
</td></tr>
</table>
</form>
<%if (zcounti > 0) {
		String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion =0;
%>

<form action="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p3_mod5.jsp?estado=11" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_HR_COMP_BACKGROUND" />
<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HR_COMP_BACKGROUND" />
<input type="hidden" id="REC" name="REC" />
</form>

<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td><%=Tran.getProperty("Label.TableValPen")%></td>
	<td>&nbsp;<m4:label m4name="<%=zSCODTSTART%>"/></td>
	<td>&nbsp;<m4:label m4name="<%=zSCODTEND%>"/></td>
	<td>&nbsp;<m4:label m4name="<%=zSCONCOURSE%>"/></td>
	<td>&nbsp;<m4:label m4name="<%=zSCONUMBERHOURS%>"/></td>
	<td>&nbsp;<m4:label m4name="<%=zSCONCENTER%>"/></td>
	<td>&nbsp;<m4:label m4name="<%=zSTDIDCOUNTRY%>"/></td>
	<!--<td>&nbsp;<m4:label m4name="<%=zSCOGRANTS%>"/></td>-->
	<td>&nbsp;<m4:label m4name="<%=zSCOCOMMENT%>"/></td>
	<td></td>	
</tr>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td class ="fuentecampoaccion"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCONCOURSE%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCONUMBERHOURS%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCONCENTER%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>		
  <!--<td class ="fuentevalor"><m4:item m4name="<%=zSCOGRANTS%>" htmlsafe="true"/></td>		-->
  <td class ="fuentevalor"><m4:item m4name="<%=zSCOCOMMENT%>" htmlsafe="true"/></td>		
	<td class ="fuentevalor"><a title="<%=Tran.getProperty("Button.Delete2")%>" href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
	<td class ="fuentecampoaccion2"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCONCOURSE%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCONUMBERHOURS%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCONCENTER%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>		
 <!-- <td class ="fuentevalor2"><m4:item m4name="<%=zSCOGRANTS%>" htmlsafe="true"/></td>		-->
  <td class ="fuentevalor2"><m4:item m4name="<%=zSCOCOMMENT%>" htmlsafe="true"/></td>		
	<td class ="fuentevalor2"><a title ="<%=Tran.getProperty("Button.Delete2")%>" href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}%>
</m4:loop>
</table>
<script type="text/javascript">	m4focus("NombreFormulario","SCO_DT_START");</script>
