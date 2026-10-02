<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>	
<%@ include file="../../sse_g1/sse_g1_trans.jsp" %>
<title><%=sse_g1Ess.getProperty("Label.mss_g1_p4_val")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");	
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((znivel==null)||(znivel.equals(""))){znivel = "1";}
%>
<script type="text/javascript">
function filtrar(){
	var valor =m4select("filtro","prueba","value");
	var nivel =m4select("nivel","prueba","value");
	m4valor("oculto","zfiltro",valor,"set");
	m4valor("oculto","znivel",nivel,"set");
	oculto.submit();
}
</script>
<script type="text/javascript">
function m4enviar(){
	if (typeof(document.forms['a0']) != "undefined"){
		var cadena="";
		var URL = "{TAG=SSE_HR_CONTACT";
		var numregistros = parseInt(document.forms['a0'].elements[1].name);
		cadena = cadena + URL;
		for (var i = 0; i < numregistros; i++){
			var formulario = "b" + i;
			if (document.forms[formulario].elements[0].checked == true){
				var formulario1 = "a" + i;
				cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=ACEPTAR";
				cadena = cadena + document.forms[formulario1].elements[0].value;
			} 
			if (document.forms[formulario].elements[1].checked == true){
				var formulario1 = "a" + i;
				cadena = cadena + "{" + document.forms[formulario1].elements[1].value + "*" + "ACC=CANCELAR";
				cadena = cadena + document.forms[formulario1].elements[0].value;
				var formulario2 = "c" + i;
				cadena = cadena + "{" +document.forms[formulario1].elements[1].value + "*" + "MOTIVO_ACCION=" + document.forms[formulario2].elements[0].value;
			}
		}
		document.forms["envio"].elements["param"].value=cadena;
		document.forms["envio"].elements["TAG"].value="SSE_HR_CONTACT";
		document.forms["envio"].submit();
	}
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
  String zsubsesion = "SSE_HR_CONTACT";
   String zmeta4object = "SSE_HR_CONTACT";
   String znodo = "SSE_HR_CONTACT";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g1/mss_g1_p4_val.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
  
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
// Metodo de carga del Meta4Object generico

   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";


   
   
   String zNOMBREEMPLEADOlista =  zcomunlista +  "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";       
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    
	    m.setItem(zsubsesion,znodoprincipal,"","NIVEL",znivel);
	    m.setItem(zsubsesion,znodo,"","ID_PERSON",zfiltro);
	      
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef >
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcount  = 0;
	int  zcountilista  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountvlista = String.valueOf(zcountilista);
%>
<table width="100%" cellspacing="0">
<tr>
	<td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Label.mss_g1_p4_valTitle")%></td>
	
</tr>
<tr>
	<td><img alt="<%=sse_g1Ess.getProperty("Label.mss_g1_p4_valTitle")%>" src="/iconos/noname_otras_direcciones_116_100.gif" width="100" height="100" /></td>
	<td><div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.mss_g1_p4_valdesc")%></div></td>
</tr>
</table>
<%@ include file="../../mss_generico/francais/mssgenerico_filtro_val.jsp" %>
<br />
	<form action="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_p4_val.jsp?estado=11" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
	<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
	</form>
	<% if (zcounti > 0) { 
		String zregistroinicials = String.valueOf(zregistroinicial);
		String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
		String zposicions = "0";
		int zposicion =0;%>	
		<table width="100%" cellspacing="0">
	<tr>
		<td class="tablaestadosceldatitulo"colspan="2"><%=Tran.getProperty("Label.TableVal")%></td>
	</tr>
		<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
		<%	zposicions = m4lix;
			zposicion = Integer.valueOf(zposicions).intValue();
		 	zposicion = zposicion - zregistroinicial;%>
		<tr>
			<td class="fuentecampo">
			<table cellspacing="0" width="100%">
				<tr><td class="fuentecamponombre" colspan="6">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Labelmss.Solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
				<tr>
					<td class = "fuentecampo" >&nbsp;<m4:label  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item  item="STD_N_CONTACT" htmlsafe="true" outputdef="<%=znodo%>"/></td>
				</tr>
				<tr>
					<td class = "fuentecampo" >&nbsp;<m4:label  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item  item="STD_INT_COUNTRY_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
					<td class = "fuentecampo" >&nbsp;<m4:label  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item  item="STD_INT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
					<td class = "fuentecampo" >&nbsp;<m4:label  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item  item="STD_NAT_REGION_CODE_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
				</tr>
				<tr>		
					<td class = "fuentecampo" >&nbsp;<m4:label  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item  item="STD_PHONE_NUMBER_1" htmlsafe="true" outputdef="<%=znodo%>"/></td>
					<td class = "fuentecampo" >&nbsp;<m4:label  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item  item="SCO_ICE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
				</tr>
	
				<tr>
					<td class="fuentecampo" colspan="6">
					<form name="a<%=zposicion%>" id="a<%=zposicion%>">
						&nbsp;<input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_HR_CONTACT{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
								 <input size="1" name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
					</form>
					</td>	
				</tr>
				</table>
			</td>
			<td class="fuentecampo">
				<form name="b<%=zposicion%>" id="b<%=zposicion%>">
				<table cellspacing="0">
				<tr>
					<td class="fuentecampo">
						<input title="<%=Tran.getProperty("Labelmss.Aceptarlabel")%>" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />
						<%=Tran.getProperty("Labelmss.Aceptar")%>
					</td>
				</tr>
				<tr>
					<td class="fuentecampo">
						<input title="<%=Tran.getProperty("Labelmss.Cancelarlabel")%>" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />
						<%=Tran.getProperty("Labelmss.Cancelar")%>
					</td>
				</tr>
				</table>
				</form>
			</td>
		</tr>
		<tr>
			<td class="fuentecampo" colspan="2">
				<%=Tran.getProperty("Labelmss.CancelarReason")%>		
				<form name="c<%=zposicion%>" id="c<%=zposicion%>">
				<input size="48" title="<%=Tran.getProperty("Labelmss.CancelarReasonlabel")%>" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
				</form>
			</td>
		</tr>
		<tr><td class="separadorlinea" colspan="2">	<hr /></td></tr>
		</m4:loop>
		<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
		<input type="hidden" id="param" name="param" value="" />
		<input type="hidden" id="TAG" name="TAG" value="" />
		</form>
	</table>
	</td>
</tr>
</table>
	<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}else 
 {%>	
	  <div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound7")%></div>
	  <br/> <br/> 
 <%	}%>		
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</div>
</body>


