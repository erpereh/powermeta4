<script type="text/javascript">
function comprobar(){

var error = 0;
var dtissue = "";
var dtexpired = "";
var ncertif = "";
var certiftype = "";
var fechasok = false;
var dtissueok = "";
var dtexpiredok = "";
var texto = m4getmessage("_sl_co_payment_data_1");
var valorfec = m4fechahoy();




dtissue = m4valor("NombreFormulario","SCO_DT_ISSUE","","get");
dtexpired = m4valor("NombreFormulario","SCO_DT_EXPIRED","","get");
ncertif = m4valor("NombreFormulario","SCO_N_CERTIF","","get");
certiftype = m4select(m4objeto("SCO_ID_CERTIF_TYPE","NombreFormulario"),"value");
dtissueok = m4fechacomprobacion(m4objeto('SCO_DT_ISSUE','NombreFormulario'),"");
dtexpiredok = m4fechacomprobacion(m4objeto('SCO_DT_EXPIRED','NombreFormulario'),"");
fechasok = m4compfechas(m4objeto("SCO_DT_ISSUE","NombreFormulario"),'<=',m4objeto("SCO_DT_EXPIRED","NombreFormulario"));


if (dtissue == null || dtissue == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_ess_cl_2");
	error = 1;
	}
if (ncertif == null || ncertif == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_ess_cl_0");
	error = 1;
	}
if (certiftype == null || certiftype == ""){
	texto = texto + "\n" + m4getmessage("_sl_co_ess_cl_1");
	error = 1;
	}
if ((dtissue != null && dtissue != "") && (dtissueok == "")){
	texto = texto + "\n" + m4getmessage("_sl_co_payment_data_3");
	error = 1;
	}
if ((dtexpired != null && dtexpired !="") && (dtexpiredok == "")){
	texto = texto + "\n" + m4getmessage("_sl_co_payment_data_8");
	error = 1;
	}
if ((dtexpired != null && dtexpired !="") && (dtexpiredok != "") && (dtissue != null && dtissue !="") && (dtissueok != "") && (fechasok == false)){
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
   String zsubsesion = "SSE_CERTIFICATION_LICEN";
   String zmeta4object = "SSE_CERTIFICATION_LICEN";
   String znodo = "SSE_CERTIFICATION_LICEN";
   String znodo2 = "M4T_LU_CERTIFICATION_TYPE";
   String znodo3 = "M4T_LU_ISSU_ENT";
   String znodo4 = "M4T_LU_COUNTRY";
 
      
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/ssco_g1_p3_mod4.jsp";
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

   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";

   // Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "SSE";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zSCODTISSUE = zcomun + "SCO_DT_ISSUE";
   String zSCODTEXPIRED = zcomun + "SCO_DT_EXPIRED";
   String zSCONCERTIF = zcomun + "SCO_N_CERTIF";
   String zSCOCERTNUMBER = zcomun + "SCO_CERT_NUMBER";
   String zSTDNCERTIFICATIONTYPE = zcomun + "STD_N_CERTIFICATION_TYPE";
   String zSCONISSUEENTIT = zcomun + "SCO_N_ISSUE_ENTIT";
   String zSTDNCOUNTRY = zcomun + "STD_N_COUNTRY";
   
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
   String zSTDIDCERTIFICATIONTYPE = zcomun2 + "STD_ID_CERTIFICATION_TYPE";
   String zSTDNCERTIFICATIONTYPE2 = zcomun2 + "STD_N_CERTIFICATION_TYPE";
   
   String zSCOIDISSUEENTIT = zcomun3 + "SCO_ID_ISSUE_ENTIT";
   String zSCONISSUEENTIT2 = zcomun3 + "SCO_N_ISSUE_ENTIT";
	
   String zSTDIDCOUNTRY= zcomun4 + "STD_ID_COUNTRY";
   String zSTDNCOUNTRY2 = zcomun4 + "STD_N_COUNTRY";

   

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
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount2i  = 0;	
	int  zcount3i  = 0;	
	int  zcount4i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
	    zcount4i = m.getCountInClient(znodo4,zsubsesion,znodo4);
	    	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount2v = String.valueOf(zcount2i);
	String	zcount3v = String.valueOf(zcount3i);
	String	zcount4v = String.valueOf(zcount4i);
	%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%></td></tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%>" src="/iconos/certificaciones_80x100.gif"  width="80" height="100"/></td>
	<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p3_mod4Des")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?zestado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p3")%></a></li>
	</ul>
	</td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_CERTIFICATION_LICEN" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_CERTIFICATION_LICEN" />
<table class="tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td  colspan="3">&nbsp;<%=sse_g1Ess.getProperty("Title.sse_g1_p3_mod4Des")%></td>
	<td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>"title="<%=sse_g1Ess.getProperty("Title.sse_g1_p3")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;<m4:label  item="SCO_DT_ISSUE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentecampo">
	<input class="fuenteformulario" type="text" name="SCO_DT_ISSUE" id="SCO_DT_ISSUE" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTISSUE%>"/>" maxlength="10" size="10" tabindex="1" />
	<a href="javascript:m4calendario(m4objeto('SCO_DT_ISSUE','NombreFormulario'))">
	<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCODTISSUE%>"/>" />
	</a>
	</td>
	<td class="fuentecampo" >&nbsp;<m4:label  item="SCO_DT_EXPIRED" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentecampo">
		<input class="fuenteformulario" type="text" name="SCO_DT_EXPIRED" id="SCO_DT_EXPIRED" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTEXPIRED%>"/>" maxlength="10" size="10" />
		<a href="javascript:m4calendario(m4objeto('SCO_DT_EXPIRED','NombreFormulario'))">
		<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCODTEXPIRED%>"/>" />
		</a>
		</td>
</tr>
<tr>
	<td class="fuentecampo" >*&nbsp;<m4:label m4name="<%=zSCONCERTIF%>"/></td>
	<td class="fuentevalor" ><input class="fuenteformulario" type="text" id="SCO_N_CERTIF" name="SCO_N_CERTIF" size="50" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCONCERTIF%>"/>"  maxlength=62 /></td>
	
	<td class="fuentecampo">*&nbsp;<m4:label  item="SCO_ID_CERTIF_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor">
		<select id="SCO_ID_CERTIF_TYPE" class="fuenteformulario" name="SCO_ID_CERTIF_TYPE" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSTDIDCERTIFICATIONTYPE%>"/>">
	<option value=""></option>
			<m4:loop from="0" to="<%=new Integer(new Integer(zcount2v).intValue()-1).toString()%>">
			<option value="<m4:item m4name="<%=zSTDIDCERTIFICATIONTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNCERTIFICATIONTYPE2%>" htmlsafe="true"/></option>

		</m4:loop>
	</select>
	
	</td>
</tr>
<tr>
	<td class="fuentecampo" >&nbsp;<m4:label  item="SCO_CERT_NUMBER" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor" ><input class="fuenteformulario" type="text" id="SCO_CERT_NUMBER" name="SCO_CERT_NUMBER" size="15" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCOCERTNUMBER%>"/>"  maxlength=20 /></td>
	
	<td class="fuentecampo">&nbsp;<m4:label  item="SCO_ID_ISSUE_ENTIT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor">
	<select id="SCO_ID_ISSUE_ENTIT" class="fuenteformulario" name="SCO_ID_ISSUE_ENTIT" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCOIDISSUEENTIT%>"/>">
	<option value=""></option>
			<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
			<option value="<m4:item m4name="<%=zSCOIDISSUEENTIT%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONISSUEENTIT2%>" htmlsafe="true"/></option>

		</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTDIDCOUNTRY%>"/></td>
	<td class="fuentevalor" colspan="3">

	<select id="SCO_ID_COUNTRY" class="fuenteformulario" name="SCO_ID_COUNTRY" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSTDIDCOUNTRY%>"/>">
	<option value=""></option>
			<m4:loop from="0" to="<%=new Integer(new Integer(zcount4v).intValue()-1).toString()%>">
			<option value="<m4:item m4name="<%=zSTDIDCOUNTRY%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNCOUNTRY2%>" htmlsafe="true"/></option>

		</m4:loop>
	</select>
	</td>
</tr>
<tr><td colspan="4" class="fuenteboton"><a href="javascript:comprobar()"><img alt="<%=Tran.getProperty("Button.Send")%>"title="<%=Tran.getProperty("Button.Send")%>" border="0" src="/iconos/icono_enviar_ess_36_36.gif" width ="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
<%if (zcounti > 0) {
		String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion =0;
%>
<form action="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod4.jsp?estado=11" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="Formulario" id="Formulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_CERTIFICATION_LICEN" />
<input type="hidden" id="ACC" name="ACC" value="BORRAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_CERTIFICATION_LICEN" />
<input type="hidden" id="REC" name="REC" />
</form>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td>&nbsp;<%=Tran.getProperty("Label.TableValPen")%></td>
	<td>&nbsp;<m4:label  item="SCO_DT_ISSUE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td>&nbsp;<m4:label  item="SCO_DT_EXPIRED" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td>&nbsp;<m4:label  item="SCO_N_CERTIF" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td>&nbsp;<m4:label  item="STD_N_CERTIFICATION_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td>&nbsp;<m4:label  item="SCO_CERT_NUMBER" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td>&nbsp;<m4:label  item="SCO_ID_ISSUE_ENTIT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td colspan="3">&nbsp;<m4:label  item="SCO_ID_COUNTRY" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>


<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td class ="fuentecampoaccion"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCODTISSUE%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCODTEXPIRED%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCONCERTIF%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSTDNCERTIFICATIONTYPE%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCOCERTNUMBER%>" htmlsafe="true"/></td>
	<td class ="fuentevalor"><m4:item m4name="<%=zSCONISSUEENTIT%>" htmlsafe="true"/></td>		
  <td class ="fuentevalor"><m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>		
	<td class ="fuentevalor"><a title="<%=Tran.getProperty("Button.Delete2")%>" href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}else{%>
<tr>
	<td class ="fuentecampoaccion2"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCODTISSUE%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCODTEXPIRED%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCONCERTIF%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSTDNCERTIFICATIONTYPE%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCOCERTNUMBER%>" htmlsafe="true"/></td>
	<td class ="fuentevalor2"><m4:item m4name="<%=zSCONISSUEENTIT%>" htmlsafe="true"/></td>		
  <td class ="fuentevalor2"><m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>		
	<td class ="fuentevalor2"><a title ="<%=Tran.getProperty("Button.Delete2")%>" href="javascript:borrar('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');"><img align="right" alt="<%=Tran.getProperty("Button.Delete2")%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<%}%>
</m4:loop>
</table>
<script type="text/javascript">	m4focus("NombreFormulario","SCO_DT_ISSUE");</script>
