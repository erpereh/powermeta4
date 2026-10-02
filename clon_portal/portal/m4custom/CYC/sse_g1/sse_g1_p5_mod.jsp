<script type="text/javascript">

function comprobar(){
var error = 0;
var texto =m4getmessage("_sl_co_gn_1");

var sType = m4valor("NombreFormulario","STD_OR_DEP_NB","","get");
if (sType.length==0){
	var nnombre = new m4objvalidacion('_alfanum','1','50','','',false);
	nnombre.m4validar(m4objeto("STD_N_FIRST_NAME","NombreFormulario"));
	if (nnombre.resultado == false){
		texto = texto +"\n"+ m4getmessage("_sl_co_g1_7");
		error = 1;
	}
	var napp = new m4objvalidacion('_alfanum','1','50','','',false);
	napp.m4validar(m4objeto("SSP_PRIMER_APELLIDO","NombreFormulario"));
	if (napp.resultado == false){
		texto = texto +"\n"+ m4getmessage("_sl_co_g1_8");
		error = 1;
	}
	var espPrimerapellido = m4valor("NombreFormulario","SSP_PRIMER_APELLIDO","","get");
	var espMaidenName  = m4valor("NombreFormulario","STD_N_MAIDEN_NAME","","get");
	var espSTDfam=espPrimerapellido
	if (espMaidenName.length>0){espSTDfam=espSTDfam+" "+ espMaidenName}
m4valor("NombreFormulario","STD_N_FAMILY_NAME_1",espSTDfam,"set");
	var dtstartb = m4valor("NombreFormulario","STD_DT_BIRTH","","get");
	if (dtstartb == null || dtstartb == ""){
		texto = texto +"\n"+ m4getmessage("_sl_co_g1_5");
		error = 1;
	}else{
		var dtstartok =  m4fechacomprobacion(m4objeto('STD_DT_BIRTH','NombreFormulario'),"");
		if (dtstartok == ""){
			texto=texto+"\n"+m4getmessage("_sl_co_g1_6");
			error=1;
		}
	}
}
var dtstart = m4valor("NombreFormulario","STD_DT_START","","get");
if (dtstart == null || dtstart == ""){
	texto = texto +"\n"+ m4getmessage("_sl_co_payment_data_2");
	error = 1;
}else{
	var dtstartok =  m4fechacomprobacion(m4objeto('STD_DT_START','NombreFormulario'),"");
	if (dtstartok == ""){
		texto=texto+"\n"+m4getmessage("_sl_co_payment_data_3");
		error=1;
	}
}
var dtend = m4valor("NombreFormulario","STD_DT_END","","get");
if (dtend == null || dtend == ""){

}else{
	var dtendok = m4fechacomprobacion(m4objeto('STD_DT_END','NombreFormulario'),"");
	if (dtendok == ""){
		texto=texto+"\n"+m4getmessage("_sl_co_payment_data_8");
			error=1;
	}else{
		var fechasok = m4compfechas(m4objeto("STD_DT_START","NombreFormulario"),"<=",m4objeto("STD_DT_END","NombreFormulario"));	
			if (fechasok == false){
				mensaje_fechas=m4getmessage("_sl_co_payment_data_9");
			texto=texto+"\n"+mensaje_fechas;
				error=1;
				}
	}
}
var val_id_type = m4select("STD_ID_DEP_TYPE","NombreFormulario","value");
if ((val_id_type == null) || (val_id_type == "")){
	texto=texto+"\n"+m4getmessage("_sl_co_g1_4");
		error=1;
}

var vobjetoc = document.forms["NombreFormulario"].elements["SCO_STUDENTA"];
if (vobjetoc.checked == true){
	sValue="1";
}else{
	sValue="0";
}

m4valor("NombreFormulario","SCO_STUDENT",sValue,"set");
if (error == 1){
	alert(texto);
	return;
}else {
m4submit("NombreFormulario") ;
}
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_FAMILY",ord,"BORRAR","SSE_FAMILY");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
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
   String zsubsesion = "SSE_FAMILY";
   String zmeta4object = "SSE_FAMILY";
   String znodo = "SSE_FAMILY";
   String znodo1 = "M4T_FAMILY";
   String znodo2 = "M4T_LU_DEP_TYPE";
   String ztipocarga = "SSE";
   
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g1/sse_g1_p5_mod.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
      String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
      String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";
   
   	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
    String zORDINAL = zcomun + "ORDINAL";
	String zNACCION = zcomun + "N_ACCION";
   	
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>" ><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>

<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);

	} catch(Exception e) {}
	String zSTD_OR_DEP_NB="";
	String zSCO_GB_NAME="";
	String zSTD_DT_BIRTH="";
	String zSTD_DT_START="";
	String zSTD_DT_END="";
	String zSTD_ID_DEP_TYPE="";
	String zSCO_STUDENT="";
	String zSSP_PRIMER_APELLIDO="";
	String zSTD_N_FIRST_NAME="";
	String zSTD_N_MAIDEN_NAME="";
	String zxh="";
	if ((zPos==null)||(zPos.equals(""))){zPos = "NA";}else{
	 String zmove1 = znodo1 + ":" +znodo1 + "[" + zPos + "]";
	%>
	<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove1%>"/></m4:move>
	<m4:item var="zSTD_OR_DEP_NB" item="STD_OR_DEP_NB" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSCO_GB_NAME" item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_DT_BIRTH" item="STD_DT_BIRTH" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_DT_START" item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_DT_END" item="STD_DT_END" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_ID_DEP_TYPE" item="STD_ID_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSCO_STUDENT" item="SCO_STUDENT" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSSP_PRIMER_APELLIDO" item="SSP_PRIMER_APELLIDO" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_N_FIRST_NAME" item="STD_N_FIRST_NAME" htmlsafe="true" outputdef="<%=znodo1%>"/>
	<m4:item var="zSTD_N_MAIDEN_NAME" item="STD_N_MAIDEN_NAME" htmlsafe="true" outputdef="<%=znodo1%>"/>
	
<%}%>
<%if (zSCO_STUDENT.equals("1")){zxh="checked=\"checked\"";}%>
<style type="text/css">#tablita td{padding: 5px;}</style>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p5_modDes")%></td></tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p5_modDes")%>" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p5_modDes")%>"src="/iconos/family_123_100.gif" width="123" height="100" /></td>
	<td>
	<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p5_modDes")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p5")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p5.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p5")%></a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_FAMILY" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_FAMILY" />

<input type="hidden" id="STD_OR_DEP_NB" name="STD_OR_DEP_NB" value="<%=zSTD_OR_DEP_NB%>" />
<input type="hidden" id="SCO_STUDENT" name="SCO_STUDENT" value="" />

<table class = "tablaestados" width="100%" cellspacing="0" border="0" id="tablita" >
<tr class = "tablaestadosceldatitulo">
	<td colspan="3"><%=sse_g1Ess.getProperty("Label.sse_g1_p5_modData")%></td>
	<td class="tablamenuright"><a title="<%=sse_g1Ess.getProperty("Title.sse_g1_p5")%>"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p5.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p5")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>			
</tr>
<%
int zTabess=0;

%>
<input type="hidden" id="STD_N_FAMILY_NAME_1" name="STD_N_FAMILY_NAME_1" value="" />
<tr>
<td class="fuentecampo" >*&nbsp;<m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></td>    		
	<td class="fuentecampo" colspan="3">
	<input class="fuenteformulario" type="text" id="STD_N_FIRST_NAME" name="STD_N_FIRST_NAME" size="30" maxlength="50" title='<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_N_FIRST_NAME" htmlsafe="true" outputdef="<%=znodo%>"/>' tabindex="<%=(zTabess + 1)%>" value="<%=zSTD_N_FIRST_NAME%>" />
	&nbsp;
	<input class="fuenteformulario" type="text" id="SSP_PRIMER_APELLIDO" name="SSP_PRIMER_APELLIDO" size="30" maxlength="50" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="SSP_PRIMER_APELLIDO" htmlsafe="true" outputdef="<%=znodo%>"/>" tabindex="<%=(zTabess + 1)%>" value="<%=zSSP_PRIMER_APELLIDO%>"  />
	&nbsp;
	<input class="fuenteformulario" type="text" id="STD_N_MAIDEN_NAME" name="STD_N_MAIDEN_NAME" size="30" maxlength="50" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_N_MAIDEN_NAME" htmlsafe="true" outputdef="<%=znodo%>"/>" tabindex="<%=(zTabess + 1)%>" value="<%=zSTD_N_MAIDEN_NAME%>"  />
	
	</td>
</tr>
<tr>
<td class="fuentecampo" >*&nbsp;<m4:label  item="STD_DT_BIRTH" htmlsafe="true" outputdef="<%=znodo%>"/></td>    		
<td class="fuentevalor"><input class="fuenteformulario" type="text" name="STD_DT_BIRTH" id="STD_DT_BIRTH" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_DT_BIRTH" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="<%=(zTabess + 1)%>" value="<%=zSTD_DT_BIRTH%>" />&nbsp;</td>
<td class="fuentecampo" >*&nbsp;<m4:label  item="STD_ID_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>
<span style="margin-left: 25px;"> 
	<select tabindex="<%=(zTabess + 1)%>"id="STD_ID_DEP_TYPE" class="fuenteformulario" name="STD_ID_DEP_TYPE" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="STD_ID_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/>">
			<option value=""></option>
			<m4:dataloop outputdef="<%=znodo2%>">
			<option value="<m4:item  item="STD_ID_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item  item="STD_N_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
			</m4:dataloop>
	</select>
</span>
</td>
<td class="fuentecampo"></td>
</tr>
<tr>
<td class="fuentecampo" >*&nbsp;<m4:label  item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>    		
<td class="fuentevalor"><input class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSTD_DT_START)%>"type="text" name="STD_DT_START" id="STD_DT_START" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="<%=(zTabess + 1)%>" />&nbsp;</td>   		
<td  class="fuentecampo" colspan="2"></td>
</tr>
<tr>
	<td class="fuentevalor"></td>
<td class="fuentevalor"><input class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSTD_DT_END)%>"type="hidden" name="STD_DT_END" id="STD_DT_END" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label  item="STD_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>" maxlength="10" size="10" tabindex="<%=(zTabess + 1)%>" />&nbsp;</td>
<td class="fuentecampo" ></td>     
<td class = "fuentecampo"><input tabindex="<%=(zTabess + 1)%>" type="hidden" id="SCO_STUDENTA" name="SCO_STUDENTA" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zSCO_STUDENT)%>" <%=zxh%> /></td>
</tr>
	<script type="text/javascript" language="Javascript1.5"><!--
 if ('<%=zSTD_ID_DEP_TYPE%>'!= ""){
     searchoption('NombreFormulario','STD_ID_DEP_TYPE','<%=zSTD_ID_DEP_TYPE%>');
  }
--></script>
<tr><td class="fuenteboton" colspan="4"><a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();" tabindex="<%=(zTabess + 1)%>"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
<% 
 if (zcounti > 0){ 
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String zPaint="";
	%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
	<td class="tablaestadosceldatitulo">&nbsp;</td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo">&nbsp;<m4:label  item="STD_DT_BIRTH" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label  item="STD_N_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>


<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
	zcontrol = zposicion%2;
%><%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>

<tr>

	<td class="fuentecampoaccion<%=zPaint%>"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/>&nbsp;</td>	

	<td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item  item="SCO_GB_NAME" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item  item="STD_DT_BIRTH" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item  item="STD_N_DEP_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	<td class="fuentebotonright<%=zPaint%>"><a tabindex="<%=(zTabess + 1)%>"title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" htmlsafe="true" jsafe="true"/>');"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  /></a></td>
</tr>
</m4:loop>
</table>
