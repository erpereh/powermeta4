<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Validate Training Requests</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<%
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado =zobjtabla.m4paramvalor("estado");
String zfiltro =zobjtabla.m4paramvalor("zfiltro");
String zinicios = zobjtabla.m4paramvalor ("zinicios");	
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
<%@ include file="/mss_g3/mss_g3_trans.jsp"%>
 


function calc_costs(zID_DEV_SUB,zID_PERSON,zOR_PERSON,zHOURS,zHOURS_OTW){
		var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_cost_empl.jsp?estado=31&zID_DEV_SUB="+zID_DEV_SUB+"&zID_PERSON="+zID_PERSON+"&zOR_PERSON="+zOR_PERSON+"&zHOURS="+zHOURS+"&zHOURS_OTW="+zHOURS_OTW;	 
		window.open(dir,'Vis','width=400,height=240,left=0,top=50,resizable,scrollbars');
 
}
function filtrar(){
	var valor =m4select("filtro","prueba","value");
	var nivel =m4select("nivel","prueba","value");
	m4valor("oculto","zfiltro",valor,"set");
	m4valor("oculto","znivel",nivel,"set");
	oculto.submit();}
function m4enviar(){
	var cadena="";
	var URL = "{TAG=SSE_TRAINING_REQUEST";
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
		document.forms["envio"].elements["TAG"].value="SSE_TRAINING_REQUEST";
		document.forms["envio"].submit();
	}
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_TRAINING_REQUEST";
   String zmeta4object = "SSE_TRAINING_REQUEST";
   String znodo = "SSE_TRAINING_REQUEST";
   String ztipocarga = "SSE";
   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "/mss_g1/mss_g3_p3_val.jsp";
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
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
	
   String zORDINAL = zcomun+ "ORDINAL";
   String zNACCION =  zcomun +  "N_ACCION";   
   String zNOMBREEMPLEADO = zcomun + "NOMBRE_EMPLEADO";
   String zSCONMTRAINING = zcomun +  "SCO_NM_TRAINING";
   String zSCO_ID_TYPE = zcomun +  "SCO_ID_TYPE";
   
   String zSCO_NM_DEV_PRO_TYPE = zcomun + "SCO_NM_DEV_PRO_TYPE";
   String zSCO_NM_DEV_SUBPRODUCT = zcomun +  "SCO_NM_DEV_SUBPRODUCT";
   
   
   String zNOMBREEMPLEADOlista = zcomunlista+ "NOMBRE_EMPLEADO";
   String zSTDIDPERSON = zcomunlista + "STD_ID_PERSON";
	String zSCO_ID_DEV_SUBPRODUCT =  zcomun  + "SCO_ID_DEV_SUBPRODUCT";
	String zSCO_ID_HR = zcomun  + "STD_ID_PERSON";
	String zSCO_OR_PERSON = zcomun  + "SCO_OR_PERSON";
	String zSCO_HOURS = zcomun  + "SCO_HOURS";
	String zSCO_HOURS_OTW = zcomun  + "SCO_HOURS_OTW";  
	String zSCO_DESCRIPTION = zcomun  + "SCO_DESCRIPTION";
	String zSCO_ID_TRTBREQ = zcomun  + "SCO_ID_TRTBREQ";
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
		<td class="titulofuncional" colspan="2">Validate Training Requests</td>
	</tr>
	<tr>
		<td>
			<img alt="Validate Training Requests" src="/iconos/noname_valida_formacion_62_100.gif" width="100" height="100" />
		</td>
		<td>
			<div class="descripcionfuncional">Validate the training requests from your employees. Remember to send the request approval or rejection for each of the pages.</div>
	   </td>
	</tr>
	</table>
<%@ include file="../../mss_generico/english/mssgenerico_filtro_val.jsp" %>
<br />
	<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31" method="post" name="oculto" id="oculto">
		<input type="hidden" id="zfiltro" name="zfiltro" value="<%=zfiltro%>" />
		<input type="hidden" id="zfiltroemp" name="znivel" value="<%=znivel%>" />
		<input type="hidden" id="zinicios" name="zinicios" value="" />
	</form>
	<% if (zcounti > 0) { %>
	<table width="100%" cellspacing="0">
		<tr>
			<td class = "tablaestadosceldatitulo" colspan="2">Requests</td>
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
		<!-- Data table. Part that makes up a record.-->
		<tr>
			<td class="fuentecampo">
				<table cellspacing="0" width="100%">
					<tr><td class="fuentecamponombre" colspan="4">&nbsp;<m4:item m4name="<%=zNOMBREEMPLEADO%>" htmlsafe="true"/>&nbsp;requests&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td></tr>
					<tr>
						<td class="fuentecampo" >&nbsp;Type:&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSCO_NM_DEV_PRO_TYPE%>" htmlsafe="true"/></td>
						
						<td class="fuentecampo" >&nbsp;Name:&nbsp;</td>
						<td class = "fuentevalor" ><m4:item m4name="<%=zSCO_NM_DEV_SUBPRODUCT%>" htmlsafe="true"/></td>
						
					</tr>
					<tr>
						<td class="fuentecampo" >&nbsp;Scheduled:&nbsp;</td>
					<m4:item m4varname="zType" m4name="<%=zSCO_ID_TYPE%>"/>
					<%if (zType.equals("11")){%>
						<td class="fuentevalor">No</td>
					<% } else { %>
						<td colspan="3"class="fuentevalor">Yes&nbsp;(&nbsp;<m4:item m4name="<%=zSCONMTRAINING%>" htmlsafe="true"/>&nbsp;)&nbsp;</td>
					<%}%>
					<%	String zid = "";						 
						try {
							M4Operations m1 = new M4Operations(request);
							zid = m1.getItem(znodo,zsubsesion,znodo,"","SCO_ID_DEV_PRODUCT");		 		     
							}catch(Exception e){}
							
						if (zid.equals("99")){
					%>
							<td class="fuentecampo" >&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p6_mod1_Desc")%>:</td>
							<td class = "fuentevalor" ><m4:item m4name="<%=zSCO_DESCRIPTION%>" htmlsafe="true"/></td>
					<%	}%>						
					</tr>							
					<tr>
						<td class="fuentecampo">
						<form name="a<%=zposicion%>" id="a<%=zposicion%>">
						<input id="ocultos" name="ocultos" type="hidden" value="{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*REC=<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NOD=SSE_TRAINING_REQUEST{<m4:item m4name="<%=zORDINAL%>" htmlsafe="true"/>*NIVEL_ACEPTADO=<%=znivel%>" />
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
						<td class = "fuentecampo"><input title="Approve the Request" id="ac<%=zposicion%>" name="ac<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ca<%=zposicion%>)" />Approve</td>
					</tr>
					<tr>
						<td class = "FuenteCampo"><input title="Reject the Request" id="ca<%=zposicion%>" name="ca<%=zposicion%>" type="checkbox" value="T" onclick="validar(this,document.b<%=zposicion%>.ac<%=zposicion%>)" />Reject</td>
					</tr>
				</table>
			</form>
			</td>
		</tr>
		<tr>
			<td class="fuentecampo" colspan="1">
				Rejection Reason	
				<form name="c<%=zposicion%>" id="c<%=zposicion%>">
				<input size="48" title="Enter the Rejection Reason" id="mo<%=zposicion%>" name="mo<%=zposicion%>" type="text" maxlength="60" />
				</form>
			</td>
<%  String DescrCost = ""; %>
<% DescrCost = mss_g3.getProperty("Label.mss_g3_p3_val_Cost");%>

	<td class="fuentecampo"  >&nbsp;<a href="javascript:calc_costs('<m4:item m4name='<%=zSCO_ID_DEV_SUBPRODUCT%>' htmlsafe='true'/>'
	,'<m4:item m4name='<%=zSCO_ID_HR%>' htmlsafe='true'/>'
	,'<m4:item m4name='<%=zSCO_OR_PERSON%>' htmlsafe='true'/>'
	,'<m4:item m4name='<%=zSCO_HOURS%>' htmlsafe='true'/>'
	,'<m4:item m4name='<%=zSCO_HOURS_OTW%>' htmlsafe='true'/>'	
	)" title="<%=DescrCost%>"><img alt="<%=DescrCost%>" title="<%=DescrCost%>" src="/iconos/icono_revision_colectiva_32_16.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /><%=DescrCost%></a></td>
 
		</tr>
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
	<div class="fuentenodatos" align="center">You currently have no information to validate at this level.</div>
	<%
	}
	%>
<m4:endpage/>
</body>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>


