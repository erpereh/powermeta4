<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
<title><%=mss_g3.getProperty("Label.smco_g3_p32_valTitle")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zfiltro = zobjtabla.m4paramvalor("zfiltro");
String zinicios =zobjtabla.m4paramvalor("zinicios");	
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "Todos";} 
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

String znivel =zobjtabla.m4paramvalor("znivel");
if ((znivel==null)||(znivel.equals(""))){
znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
if ((znivel==null)||(znivel.equals(""))) znivel = "1";
}

%>
<script type="text/javascript">
function filtrar(){
	var valor =m4select("filtro","prueba","value");
	var nivel =m4select("nivel","prueba","value");
	m4valor("oculto","zfiltro",valor,"set");
	m4valor("oculto","znivel",nivel,"set");
	oculto.submit();}
function m4enviar(){
	var cadena="";
	var URL = "{TAG=SSE_CR_PREFERENC";
	if (typeof(document.forms['a0']) != "undefined"){
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
		document.forms["envio"].elements["TAG"].value="SSE_CR_PREFERENC";
		document.forms["envio"].submit();
	}
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_CR_PREFERENC";
   String zmeta4object = "SSE_CR_PREFERENC";
   String znodo = "SSE_CR_PREFERENC";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g3/smco_g3_p32_val.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String zlectura = zsubsesion + "!" + znodo;
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String znodolista = znodo + "_VAL";
   String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
   String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";
   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
   
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";	
	
   String zORDINAL =  zcomun + "ORDINAL";
   String zNACCION =  zcomun + "ACCION_ACEPTADO";
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zN_ACCION = zcomun + "N_ACCION";
   
   String zDT_START = zcomun + "DT_START"; 
   String zSCO_PREF_PRIORITY = zcomun + "SCO_PREF_PRIORITY"; 
   String zSTD_ID_SUB_GEO_DIV = zcomun + "STD_ID_SUB_GEO_DIV"; 
   String zSTD_N_SUB_GEO_DIV = zcomun + "STD_N_SUB_GEO_DIV"; 
   String zSTD_ID_GEO_DIV = zcomun + "STD_ID_GEO_DIV"; 
   String zSTD_N_GEO_DIV = zcomun + "STD_N_GEO_DIV"; 
   String zSTD_ID_COUNTRY = zcomun + "STD_ID_COUNTRY"; 
   String zSTD_N_COUNTRY = zcomun + "STD_N_COUNTRY"; 
   String zSTD_ID_WORK_UNIT = zcomun + "STD_ID_WORK_UNIT"; 
   String zSTD_N_WORK_UNIT = zcomun + "STD_N_WORK_UNIT"; 
   String zSTD_ID_JOB_CODE = zcomun + "STD_ID_JOB_CODE"; 
   String zSTD_N_JOB_CODE = zcomun + "STD_N_JOB_CODE"; 
   String zSCO_PREFERENCES = zcomun + "SCO_PREFERENCES"; 
   String zSCO_COMMENT = zcomun + "SCO_COMMENT"; 
   
   String zNOMBREEMPLEADOlista =  zcomunlista + "NOMBRE_EMPLEADO";
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
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcount  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);

	int  zcountlista  = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcountlista = m.getCountInClient(znodolista,zsubsesion,znodolista);
	} catch(Exception e) {}
	String	zcountvlista = String.valueOf(zcountlista);
%>
	<table width="100%" cellspacing="0">
	<tr>
		<td class="titulofuncional" colspan="2"><%=mss_g3.getProperty("Label.smco_g3_p32_valTitle")%></td>
	</tr>
	<tr>
		<td>
			<img alt="<%=mss_g3.getProperty("Label.smco_g3_p32_valTitle")%>" src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100" />
		</td>
		<td>
			<div class="descripcionfuncional"><%=mss_g3.getProperty("Label.smco_g3_p32_valDesc")%></div>
	   </td>
	</tr>
	</table>
<%@ include file="../../mss_generico/english/mssgenerico_filtro_val.jsp" %>
<br />
	<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31" method="post" name="oculto" id="oculto">
		<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
		<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
		<input type="hidden" id="zinicios" name="zinicios"  value="" />
	</form>
	<% if (zcounti > 0) { %>
	<table width="100%" cellspacing="0" >
		<tr>
			<td class = "tablaestadosceldatitulo" colspan="2"><%=Tran.getProperty("Label.TableVal")%></td>
		</tr>
		<%
			String zregistroinicials = String.valueOf(zregistroinicial);
			String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
			String zposicions = "0";
			int zcontrol = 0;
			int zposicion =0;
		%>
		<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
		<%
		zposicions = m4lix;
		zposicion = Integer.valueOf(zposicions).intValue();
		zposicion = zposicion - zregistroinicial;
		%>
		<!-- Tabla de datos. Parte constituyente de un registro.-->
		<tr>
			<td class="fuentecampo">
				<table cellspacing="0" width="100%">
					<tr>
					        <td class="fuentecamponombre" colspan="6">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=mss_g3.getProperty("Label.LblSolcita")%>&nbsp;<m4:item m4name="<%=zN_ACCION%>" htmlsafe="true"/></td>
					</tr>
					<tr>			
						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zDT_START%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zDT_START%>" htmlsafe = "true"/></td>
						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_PREF_PRIORITY%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor"><m4:item m4name="<%=zSCO_PREF_PRIORITY%>" htmlsafe = "true"/></td>
						<td class="fuentevalor" colspan=2>&nbsp;</td>
					</tr>
					<tr>			
						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe = "true"/></td>
						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe = "true"/></td>
						<td class="fuentevalor" colspan=2>&nbsp;</td>						
					</tr>
					<tr>

						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTD_N_SUB_GEO_DIV%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTD_N_SUB_GEO_DIV%>" htmlsafe = "true"/></td>
						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTD_N_GEO_DIV%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTD_N_GEO_DIV%>" htmlsafe = "true"/></td>
						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSTD_N_COUNTRY%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTD_N_COUNTRY%>" htmlsafe = "true"/></td>

					</tr>
					<tr>

						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_PREFERENCES%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor" colspan=5>&nbsp;<m4:item m4name="<%=zSCO_PREFERENCES%>" htmlsafe = "true"/></td>

					</tr>
					<tr>

						<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_COMMENT%>" htmlsafe = "true"/>&nbsp;</td>
						<td class="fuentevalor" colspan=5>&nbsp;<m4:item m4name="<%=zSCO_COMMENT%>" htmlsafe = "true"/></td>

					</tr>
					<tr>
						<td class="fuentecampo" >
						   <form name="a<%=zposicion%>" id="a<%=zposicion%>">
					 	      <input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_CR_PREFERENC{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
						      <input name="<%=zcountv%>" type="hidden" value="<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>" />
						   </form>
						</td>	
					</tr>
				</table>
			</td>
			<td class="fuentecampo">
			<form name="b<%=zposicion%>" id="b<%=zposicion%>">
				<table cellspacing="0">
					<tr>
						<td class = "fuentecampo"><input title="<%=mss_g3.getProperty("Label.LblOKPet")%>" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" /><%=Tran.getProperty("Labelmss.Aceptar")%></td>
					</tr>
					<tr>
						<td class = "fuentecampo"><input title="<%=mss_g3.getProperty("Label.LblCancelPet")%>" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" /><%=Tran.getProperty("Labelmss.Cancelar")%></td>
					</tr>
				</table>
			</form>
			</td>
		</tr>
		<form name="c<%=zposicion%>" id="c<%=zposicion%>">
		<tr>
			<td class="fuentecampo" colspan="2"><%=mss_g3.getProperty("Label.LblReasonCancel")%>
				<input size="48" title="<%=mss_g3.getProperty("Label.LblReasonCancel")%>" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
				
			</td>
		</tr>
		</form>
		<tr>
			<td class="separadorlinea" colspan="2"><hr /></td>
		</tr>
		</m4:loop>
		<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
		<input type="hidden" id="param" name="param" value="" />
		<input type="hidden" id="TAG" name="TAG" value="" />
		</form>
	</table>
	<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>

	<%
	}else{%>	
	<div class="fuentenodatos" align="center"><%=mss_g3.getProperty("Label.LblNoData")%></div>
	</br>
	<%
	}
	%>
<m4:endpage/>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>

</body>
</html>