<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>

	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
	<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
	<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
	<title><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5")%></title>
	
	
	<script type="text/javascript">

		function comprobar()
			{
				var error = 0;
				var dtstart = "";
				var texto = m4getmessage("_sl_co_ess_ec_0") + "\n";
				var valorfec = m4fechahoy();
				dtstart = m4valor("NombreFormulario","STD_DT_START","","get");
				dtstartok = m4fechacomprobacion(m4objeto('STD_DT_START','NombreFormulario'),"");
				estadoCivil = m4select(m4objeto("STD_ID_MARITAL_STAT","NombreFormulario"),"value");
				if (dtstart == null || dtstart == "")
					{
					texto = texto + "\n     " + m4getmessage("_sl_co_ess_ec_1");
					error = 1;
					}
				if ((dtstart != null && dtstart !="") && (dtstartok == ""))
					{
					texto = texto + "\n     " + m4getmessage("_sl_co_ess_ec_2");
					error = 1;
					}
				if (estadoCivil == null || estadoCivil == "")
					{
					texto = texto + "\n     " + m4getmessage("_sl_co_ess_ec_3");
					error = 1;
					}
				if (error == 1)
					{
					alert(texto);
					return;
					}					
				else 
					{
					m4submit("NombreFormulario");
					}
			}

		function pendientes(ord)
			{
				var parametros = new Array("TAG","REC","ACC","NOD");
				var valores = new Array("SSE_HT_MAR_STAT",ord,"BORRAR","SSE_HT_MAR_STAT");
				m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
			}
	</script>
	<%
		String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
		String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
		if ((estado==null)||(estado.equals(""))){estado="0";}
		if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>
</head>
<body>
	<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
	<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
	<%
	   String zsubsesion = "SSE_HT_MAR_STAT";
	   String zmeta4object = "SSE_HT_MAR_STAT";
	   String znodo = "SSE_HT_MAR_STAT";
	   String znodo2 = "M4T_LU_MAR_STAT";
	   String ztipocarga = "SSE";
	   
	   String zventanas = "10";
	   int zvuelta = 5;
	   String zdireccion = "sse_g1/sse_g1_p1_mod5.jsp";
	   String zestado = "11";
	
	   int zregistroinicial = Integer.valueOf(zinicios).intValue();
	   zregistroinicial = zregistroinicial - 1;
	   int zventana  = Integer.valueOf(zventanas).intValue();
	   int zregistrofinal = zregistroinicial + zventana - 1;
	
	   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
	   String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
	   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	
	   String zSTDIDMARITALSTAT =  zcomun + "STD_ID_MARITAL_STAT";
	   String zSTDDTSTART = zcomun + "STD_DT_START";
	   String zSTDDTEND = zcomun + "STD_DT_END";
	   String zNACCION = zcomun + "N_ACCION";
	   
	   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	   String zmove2 = znodo2 + "[FIRST]";
	   String zlectura2 = zsubsesion + "!" + znodo2;
	   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
	
	   String zSTDIDMARITALSTAT2 =  zcomun2 + "STD_ID_MARITAL_STAT";
	   String zSTDNMARITALSTAT =  zcomun2 + "STD_N_MARITAL_STAT";
	
	   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
	
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
	<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
	<m4:endjob/>
	<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove%>"/></m4:move>
	<m4:move><m4:param name="<%=zsubsesion%>"  value="<%=zmove2%>"/></m4:move>
	<%
		int  zcount  = 0;
		int  zcounti  = 0;
		int  zcount2  = 0;
		try {
		    M4Operations m = new M4Operations(request);
		    zcount = m.getCount(znodo,zsubsesion,znodo);
		    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
			} catch(Exception e) {}
		String	zcountv = String.valueOf(zcounti);
		String	zcountv2 = String.valueOf(zcount2);
	%>
	
<table border="0" width="100%">
	<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5")%></td></tr>
	<tr>
		<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%>" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%>"src="/iconos/estado_civil_71x100.gif" width="100" height="100" /></td>
		<td>
			<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p1_mod5Des")%></div>
			<ul class="listaenlace">
				<li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p1")%></a></li>
			</ul>
		</td>
	</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSE_HT_MAR_STAT" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HT_MAR_STAT" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
	<tr class = "tablaestadosceldatitulo"><td><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%></td><td class="tablamenuright"><a title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1")%>"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p1")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td></tr>
	<tr>
			<td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSTDDTSTART%>" htmlsafe="true"/> &nbsp;<input class="fuenteformulario" type="text" name="STD_DT_START" id="STD_DT_START" title="<%=Tran.getProperty("Label.LblWriteDate")%>&nbsp;<m4:label m4name="<%=zSTDDTSTART%>" htmlsafe="true"/>" maxlength="10" size="10" tabindex="1" />&nbsp;<a href="javascript:m4calendario(m4objeto('STD_DT_START','NombreFormulario'))" title="<%=Tran.getProperty("Label.LblSelectDate")%>&nbsp;<m4:label m4name="<%=zSTDDTSTART%>" htmlsafe="true"/>"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelectDate")%>&nbsp;<m4:label m4name="<%=zSTDDTSTART%>" htmlsafe="true"/>" /></a></td>
			<td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSTDIDMARITALSTAT%>" htmlsafe="true"/> &nbsp;
				<select tabindex="2" id="STD_ID_MARITAL_STAT" class="fuenteformulario200" name="STD_ID_MARITAL_STAT"title=""<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod5Des")%>"">
				<option value=""></option>
				<m4:dataloop outputdef="<%=znodo2%>">
					<option id="<m4:item item="STD_ID_MARITAL_STAT" htmlsafe="true" outputdef="<%=znodo2%>"/>"value="<m4:item item="STD_ID_MARITAL_STAT" htmlsafe="true" outputdef="<%=znodo2%>"/>"><m4:item item="STD_N_MARITAL_STAT" htmlsafe="true" outputdef="<%=znodo2%>"/></option>
				</m4:dataloop>
				</select>
			</td>
		</tr>
		<tr><td class="fuenteboton" colspan="2">&nbsp;<a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();" tabindex="3"><img alt="<%=Tran.getProperty("Button.Send")%>"src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>
	
	<% 
	if (zcount > 0) {
		String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zcontrol = 0;
		int zposicion =0;
	%>
	<table class = "tablaestados" width="100%" cellspacing="0">
		<tr>
			<td class="tablaestadosceldatitulo">&nbsp;</td>
			<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="STD_N_MARITAL_STAT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
			<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
			<td class="tablaestadosceldatitulo" colspan="2">&nbsp;</td>
		</tr>
		<m4:dataloop outputdef="<%=znodo%>">
		<m4:current m4varname="current" outputdef="<%=znodo%>"/>
		<%	zposicion = Integer.valueOf(current).intValue();
		 	zcontrol = zposicion%2;
		if (zcontrol==0){zposicions="";}else{zposicions="2";}%>
		<tr>
			<td class="fuentecampoaccion<%=zposicions%>">&nbsp;<m4:item item="N_ACCION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
			<td class="fuentevalor<%=zposicions%>">&nbsp;<m4:item item="STD_N_MARITAL_STAT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
			<td class="fuentevalor<%=zposicions%>">&nbsp;<m4:item item="STD_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/></td>
			<td class="fuentebotonright<%=zposicions%>"><a title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:pendientes('<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  /></a></td>
		</tr>
		</m4:dataloop>
	</table>
	<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
	<%}%>	
	<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
	</div>
	<script type="text/javascript">	m4focus("NombreFormulario","STD_DT_START");</script>
	<m4:endpage/>
</body>
</html>
