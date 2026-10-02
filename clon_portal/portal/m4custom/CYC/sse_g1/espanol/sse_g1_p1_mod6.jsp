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
	<title><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6")%></title>
	
	<script type="text/javascript">

		function comprobar()
			{
				var error = 0;
				var texto = m4getmessage("_sl_co_ess_pw_0") + "\n";

				paginaWeb =  m4valor("NombreFormulario","SCO_HOME_PAGE","","get");
				
				
				if (paginaWeb == null || paginaWeb == "")
					{
					texto = texto + "\n     " + m4getmessage("_sl_co_ess_pw_1");
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
				var valores = new Array("SSE_HOME_PAGE",ord,"BORRAR","SSE_HOME_PAGE");
				m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
			}
	</script>
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
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
	   String zsubsesion = "SSE_HOME_PAGE";
	   String zmeta4object = "SSE_HOME_PAGE";
	   String znodo = "SSE_HOME_PAGE";
	   String ztipocarga = "SSE";
	   
	   String zventanas = "10";
	   int zvuelta = 5;
	   String zdireccion = "sse_g1/sse_g1_p1_mod6.jsp";
	   String zestado = "11";
	
	   int zregistroinicial = Integer.valueOf(zinicios).intValue();
	   zregistroinicial = zregistroinicial - 1;
	   int zventana  = Integer.valueOf(zventanas).intValue();
	   int zregistrofinal = zregistroinicial + zventana - 1;
	
	   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
	   String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
	   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	
	   String zSCOHOMEPAGE =  zcomun + "SCO_HOME_PAGE";
	
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
		String	zcountv = String.valueOf(zcounti);
	%>
 
	<table border="0" width="100%">
		<tr>
			<td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6")%></td>
		</tr>
		<tr>
			<td><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%>" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%>"src="/iconos/pagina_web_105x100.gif" width="105" height="100" /></td>
			<td>
				<div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.sse_g1_p1_mod6Des")%></div>
				<ul class="listaenlace">
				<li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1")%>" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.sse_g1_p1")%></a></li>
				</ul>
			</td>
		</tr>
	</table>
	<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
		<input type="hidden" id="TAG" name="TAG" value="SSE_HOME_PAGE" />
		<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
		<input type="hidden" id="NOD" name="NOD" value="SSE_HOME_PAGE" />
		<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
			<tr class = "tablaestadosceldatitulo">
				<td><%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%></td>
				<td class="tablamenuright"><a title="<%=sse_g1Ess.getProperty("Title.sse_g1_p1")%>"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.sse_g1_p1")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>			
			</tr>
			<tr>
				<td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSCOHOMEPAGE%>" htmlsafe="true"/></td>
				<td class="fuentecampo"><input class="fuenteformulario" type="text" name="SCO_HOME_PAGE" id="SCO_HOME_PAGE" title="<%=Tran.getProperty("Label.LblWrite")%> <%=sse_g1Ess.getProperty("Title.sse_g1_p1_mod6Des")%>" maxlength="254" size="100" tabindex="1" /></td>
			</tr>
			<tr>
				<td class="fuenteboton" colspan="2">&nbsp;<a title="<%=Tran.getProperty("Button.Send")%>"href="javascript:comprobar();" tabindex="2"><img alt="Enviar"src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
			</tr>
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
			<td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_HOME_PAGE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
			<td class="tablaestadosceldatitulo" colspan="2">&nbsp;</td>
		</tr>
		<m4:dataloop outputdef="<%=znodo%>">
		<m4:current m4varname="current" outputdef="<%=znodo%>"/>
		<%	zposicion = Integer.valueOf(current).intValue();
		 	zcontrol = zposicion%2;
		if (zcontrol==0){zposicions="";}else{zposicions="2";}%>
		<tr>
			<td class="fuentecampoaccion<%=zposicions%>">&nbsp;<m4:item item="N_ACCION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
			<td class="fuentevalor<%=zposicions%>">&nbsp;<a title="<%=Tran.getProperty("Link.WebSite")%>"  target = "_blank" href="<m4:item item="SCO_HOME_PAGE" htmlsafe="true" outputdef="<%=znodo%>"/>"><m4:item item="SCO_HOME_PAGE" htmlsafe="true" outputdef="<%=znodo%>"/></a></td>
			<td class="fuentebotonright<%=zposicions%>"><a title="<%=Tran.getProperty("Button.Delete2")%>" href="javascript:pendientes('<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>" jsafe="true"/>');"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  /></a></td>
		</tr>
		</m4:dataloop>
	</table>
	<%@include file="../../sse_generico/espanol/generico_ventanas.jsp"%>
	<%}%>	
	<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
	</div>
	<script type="text/javascript">	m4focus("NombreFormulario","SCO_HOME_PAGE");</script>
	<m4:endpage/>
</body>
</html>
