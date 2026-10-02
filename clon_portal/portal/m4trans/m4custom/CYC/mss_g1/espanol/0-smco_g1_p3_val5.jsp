<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %>
	
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-menu_mss.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_g1/0-sse_g1_trans.jsp" %>

<title><%=sse_g1Ess.getProperty("Label.mss_g1_p3_val5")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>	
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
	m4submit("oculto");
}
</script>
<script type="text/javascript">
function m4enviar(){
	if (typeof(document.forms['a0']) != "undefined"){
		var cadena="";
		var URL = "{TAG=SSE_HR_COMP_BACKGROUND";//modificado
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
		document.forms["envio"].elements["TAG"].value="SSE_HR_COMP_BACKGROUND";
		m4submit("envio");
	}
}
</script>
</head>
<body>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
   String zsubsesion = "SSE_HR_COMP_BACKGROUND";
   String zmeta4object = "SSE_HR_COMP_BACKGROUND";
   String znodo = "SSE_HR_COMP_BACKGROUND";
   String znodolista = znodo + "_VAL";
   
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g1/smco_g1_p3_val5.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
// No se modifica en general.

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";

   String zoutputdeflista = znodolista + ":" + zsubsesion + "!" + znodolista + "[*]";
   String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
   String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";

   
   String znodocom = "SSE_COMUNICACION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
   
// Metodo de carga del Meta4Object generico

   String znodoprincipal = "SSE_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA_CV";
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
   String zACCIONACEPTADO = zcomun + "ACCION_ACEPTADO";   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zNOMBREPERSON = zraiz + "NOMBRE_PERSON";
	 String zNACCION = zcomun + "N_ACCION";
 
   
   String zNOMBREEMPLEADOlista = zcomunlista + "NOMBRE_EMPLEADO";
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
		<td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Label.mss_g1_p3_val5")%></td>
	</tr>
	<tr>
		<td><img alt=<%=sse_g1Ess.getProperty("Label.mss_g1_p3_val5")%> src="/iconos/otros_cursos_manager_70x100.gif" width="100" height="100" /></td>
		<td><div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.mss_g1_p3_val5desc")%></div></td>
	</tr>
</table>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_filtro_val.jsp" %>
	<br />
	<form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11" method="post" name="oculto" id="oculto">
		<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
		<input type="hidden" id="zfiltroemp" name="znivel"  value="<%=znivel%>" />
		<input type="hidden" id="zinicios" name="zinicios"  value="" />
	</form>
<% if (zcounti > 0) { %>
<table width="100%" cellspacing="0">
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
	<tr>
		<td class="fuentecampo">
			<table cellspacing="0" width="100%">
				<tr><td class="fuentecamponombre" colspan="3">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;<%=Tran.getProperty("Labelmss.Solicita")%>&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/>&nbsp;</td></tr>
				<tr>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCODTSTART%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSCODTSTART%>" htmlsafe="true"/></td>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCODTEND%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSCODTEND%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCONCOURSE%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSCONCOURSE%>" htmlsafe="true"/></td>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCONUMBERHOURS%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSCONUMBERHOURS%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCONCENTER%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSCONCENTER%>" htmlsafe="true"/></td>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSTDNCOUNTRY%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSTDNCOUNTRY%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCOGRANTS%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSCOGRANTS%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zSCOCOMMENT%>"/>:&nbsp;</td>
					<td class = "fuentevalor" ><m4:item m4name="<%=zSCOCOMMENT%>" htmlsafe="true"/></td>
				</tr>
				<tr>
					<td class="fuentecampo" >
						<form name="a<%=zposicion%>" id="a<%=zposicion%>">
						&nbsp;<input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_HR_COMP_BACKGROUND{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
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
					<td class="fuentecampo"><input title="<%=Tran.getProperty("Labelmss.Aceptarlabel")%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" /><%=Tran.getProperty("Label.Aceptar")%></td>
				</tr>
				<tr>
					<td class="fuentecampo"><input title="<%=Tran.getProperty("Labelmss.Cancelarlabel")%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" /><%=Tran.getProperty("Label.Cancelar")%></td>
				</tr>
			</table>
			</form>
		</td>
	</tr>
	<tr>
		<td class="fuentecampo" colspan="2">
			&nbsp;<%=Tran.getProperty("Label.MotivoCancelacion")%>				
			<form name="c<%=zposicion%>" title="<%=Tran.getProperty("Labelmss.CancelarReasonlabel")%>" id="c<%=zposicion%>"><input size="48" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" /></form>
		</td>
	</tr>
	<tr>
		<td class="separadorlinea" colspan="2">
			<hr />
		</td>
	</tr>
	</m4:loop>
	<form id="envio" name="envio" action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar_multipeticiones.jsp" method="post">
	<input type="hidden" id="param" name="param" value="" />
	<input type="hidden" id="TAG" name="TAG" value="" />
	</form>
</table>

	<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas_post.jsp"%>

	<%
	}else{%>	
      <div class="fuentenodatos" align="center"><%=Tran.getProperty("Label.NoDataFound7")%></div>
	 <%
	}
	%>		
<m4:endpage/>
</body>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
</div>


