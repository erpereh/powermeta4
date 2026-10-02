<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<title>Otras cuentas bancarias</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%		
 String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
 String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
 if ((estado==null)||(estado.equals(""))){
	estado="0";
	}
 if ((zinicios==null)||(zinicios.equals(""))){
			zinicios = "1";
	}
%> 
<script type="text/javascript">  
function borrado(id_hr,id_person,paym_data,paym_type,or_account,bank_branch,dc,account,start,formula,value,currency,name,apellidos){
m4valor("oculto","SCO_ID_HR",id_hr,"set");
m4valor("oculto","SCO_ID_PERSON",id_person,"set");
m4valor("oculto","SCO_OR_PAYMENTDATA",paym_data,"set");
m4valor("oculto","SCO_ID_PAYM_TYPE",paym_type,"set");
m4valor("oculto","SCO_OR_ACCOUNT",or_account,"set");
m4valor("oculto","SCO_ID_BANK_BRANCH",bank_branch,"set");
m4valor("oculto","SSP_DC",dc,"set");
m4valor("oculto","SCO_ACCOUNT_NUMBER",account,"set");
m4valor("oculto","SCO_DT_START",start,"set");
m4valor("oculto","SCO_ID_PAY_FORMULA",formula,"set");
m4valor("oculto","SCO_VALUE",value,"set");
m4valor("oculto","SCO_ID_CURRENCY",currency,"set");
var entitled = name +" "+ apellidos;
m4valor("oculto","SCO_ENTITLED",entitled,"set");
m4submit("oculto");
}
//------------------------------------------------------------------------------------------
function ModificarCuenta(parOrden,idStandard){
	var estandar = idStandard;	//m4valor("frmControlPais","ESTANDAR","","get");
	if (estandar=="00"){
	   var URL = 'sse_g2/sse_g2_p2_mod_iban.jsp';
	}
	if (estandar=="ES"){
	   var URL = 'sse_g2/sse_g2_p2_mod.jsp';
	}
	var parametros = new Array('id_orden','estado');
	var valores = new Array(parOrden,'21');
	m4navegar(URL,parametros,valores);
}
//------------------------------------------------------------------------------------------
</script>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_OTHER_PDATA";
   String zmeta4object = "SSE_OTHER_PDATA";  
   String znodo = "M4T_OTHER_PDATA";
   String ztipocarga = "M4T";
  // Se parametriza el tamano que se desea para la ventana
   String zventanas = "20";
    // No se modifica en general.
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]"; 
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

// Metodo de carga del Meta4Object generico
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
   String zbanco = zcomun + "SCO_ID_BANK_BRANCH";     
   String zcuenta = zcomun + "SCO_ACCOUNT_NUMBER";
   String zdatestart = zcomun + "SCO_DT_START";
   String zorden = zcomun + "SCO_ORDINAL";
   String zidpaym =zcomun + "SCO_ID_PAYM_TYPE";
   String znpaym = zcomun + "SCO_NM_PAYM_TYPE";
   String zncurr = zcomun + "NM_CURRENCY";
   String zdc = zcomun + "SSP_DC";
   String ztitular = zcomun + "SCO_ENTITLED";
   String zvalue = zcomun + "SCO_VALUE";
   String zname =  zcomun + "STD_N_FIRST_NAME";
   String zapellidos = zcomun + "STD_N_FAMILY_NAME_1";
   String znmformula = zcomun + "SCO_NM_PAYMFORMULA";
   String zpayformtp = zcomun + "SSP_PAY_FORM_TP";
   String zidperson = zcomun + "SCO_ID_PERSON"; 
   String zidhr = zcomun + "SCO_ID_HR"; 
   String zpdata = zcomun + "SCO_OR_PAYMENTDATA"; 
   String zoraccount = zcomun + "SCO_OR_ACCOUNT"; 
   String zid_curr = zcomun + "ID_CURRENCY_DATA"; 
   String zidpaymformula = zcomun + "SCO_ID_PAY_FORMULA"; 

   String zidstandard = zcomun + "SCO_ID_STANDARD";
   String zidibancode = zcomun + "SCO_IBAN_CODE";
   String zgbiban = zcomun + "SCO_GB_IBAN";
   String zbanco1 = zcomun + "SCO_ID_BANK1";     
   String zbanco2 = zcomun + "SCO_ID_BANK2";     
   String zidorgexterna = zcomun + "SCO_ID_EXTERNALORG";
   String znorgexterna11 = zcomun + "STD_N_EXT_ORG_1";
%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

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

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="TAG" name="TAG" value="SSE_OTHER_PDATA" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="ANULAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_OTHER_PDATA" />
<input type="hidden" id="SCO_ID_PERSON" name="SCO_ID_PERSON"/>
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" />
<input type="hidden" id="SCO_OR_ACCOUNT" name="SCO_OR_ACCOUNT"/>
<input type="hidden" id="SCO_OR_PAYMENTDATA" name="SCO_OR_PAYMENTDATA"/>
<input type="hidden" id="SCO_ID_PAYM_TYPE" name="SCO_ID_PAYM_TYPE"/>
<input type="hidden" id="SCO_ID_BANK_BRANCH" name="SCO_ID_BANK_BRANCH"/>
<input type="hidden" id="SCO_DT_START" name="SCO_DT_START"/>
<input type="hidden" id="SSP_DC" name="SSP_DC"/>
<input type="hidden" id="SCO_ENTITLED" name="SCO_ENTITLED"/>
<input type="hidden" id="SCO_ID_CURRENCY" name="SCO_ID_CURRENCY"/>
<input type="hidden" id="SCO_ID_PAY_FORMULA" name="SCO_ID_PAY_FORMULA"/>
<input type="hidden" id="SCO_VALUE" name="SCO_VALUE"/>
<input type="hidden" id="SCO_ACCOUNT_NUMBER" name="SCO_ACCOUNT_NUMBER"/>
</form>

<table width="100%">
	<tr>
	<td class="titulofuncional" colspan="2">Otras cuentas bancarias
	</td>
	</tr>
	<tr>
	<td valign="top">
		<img src="/iconos/noname_beneficiarios_72_100.gif" width="100" height="100" alt="Otras cuentas bancarias">
	</td>
	<td>
	 <div class="fuentedescripcion">
	  <a class="fuentedescripcion">Consulta o modifica los datos de tus otras cuentas bancarias y tus beneficiarios.</a>
	 </div>
	 <ul class="listaenlace" >
	 	 <li><a  class="enlacefuncional"title= "Dar de alta otras cuentas bancarias" style="cursor:hand" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add.jsp?estado=21">Dar de alta otras cuentas bancarias</a></li>
	 	 <li><a  class="enlacefuncional"title= "Dar de alta otras cuentas bancarias no nacionales" style="cursor:hand" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2_add_iban.jsp?estado=21">Dar de alta otras cuentas bancarias no nacionales</a></li>
	 </ul>
	</td>
	</tr>
</table>
<% if (zcounti > 0){
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0; %>
	<div>
	<table border="0" class = "tablaestados" cellspacing="0" width="100%">
        <tr>
		<td align="left" class="tablaestadosceldatitulo">Titular</td>
	    <td align="left" class = "tablaestadosceldatitulo" colspan="1">Inicio</td>
	    <td align="left"class = "tablaestadosceldatitulo" colspan="1">N&uacute;mero de cuenta</td>
		<td align="left" class = "tablaestadosceldatitulo" colspan="1">IBAN</td>
		<td align="left" class = "tablaestadosceldatitulo" colspan="1">Tipo de importe</td>
		<td align="left"class = "tablaestadosceldatitulo" colspan="1">Importe</td>
		<td align="left"class = "tablaestadosceldatitulo" colspan="1">&nbsp;</td>
		</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){%>
		<tr>
		 <td align="left" class="fuentevalor">
			<% 	String zorgexternatemp = "";
				try {
					M4Operations t = new M4Operations(request);
					zorgexternatemp = t.getItem(znodo,zsubsesion,znodo,zposicions,"STD_N_EXT_ORG_1");
					zidstandard = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
				} catch(Exception e) {}
				if (zorgexternatemp.equals("") != true){ %>
					<m4:item m4name="<%=znorgexterna11%>" htmlsafe="true"/>
				<% } else { %>
					<a  class="enlacefuncional" title = "Modificar otras cuentas bancarias" style="CURSOR: hand" href="javascript:ModificarCuenta(<m4:item m4name="<%=zorden%>"/>,'<%=zidstandard%>');">
						<m4:item m4name="<%=zname%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zapellidos%>" htmlsafe="true"/> 
					</a>
				<% } %>
	     </td>
		<td align="left" class="fuentevalor" colspan="1"><m4:item m4name="<%=zdatestart%>" htmlsafe="true"/>
		</td>
		<td align="left" class="fuentevalor"  colspan="1">&nbsp;
		<% String zidpaympend="";
		   String zbancotemp = "";
		   String zidstandardvar="";
		   String zDC_0 = "";
			try {
				M4Operations t = new M4Operations(request);
				zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
				zbancotemp = t.getItem(znodo,zsubsesion,znodo,zposicions,"SCO_ID_BANK_BRANCH");
				zidstandard = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
				zDC_0 = t.getItem(znodo,zsubsesion,znodo,"","SSP_DC");
				zDC_0 = zDC_0.split("\\.")[0];	//se divide en torno a la expresión regular \. (punto)
				if (zDC_0.length() == 1) {
					zDC_0 = "0" + zDC_0;
				}
			} catch(Exception e) {}
		if ((zidpaympend.equals("4")== true) && zbancotemp.equals("") == false){%>
			<a  class="enlacefuncional" title = "Modificar otras cuentas bancarias" style="CURSOR: hand" href="javascript:ModificarCuenta(<m4:item m4name="<%=zorden%>"/>,'<%=zidstandard%>');">
			<%if (zidstandard.equals("00")== true){%>
				<m4:item m4name="<%=zbanco%>" htmlsafe="true"/>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/>
			<%} else {%>
				<!-- <m4:item m4name="<%=zbanco%>" htmlsafe="true"/>/<m4:item m4name="<%=zdc%>" htmlsafe="true"/>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/> -->
				<m4:item m4name="<%=zbanco1%>" htmlsafe="true"/>/<m4:item m4name="<%=zbanco2%>" htmlsafe="true"/>/<%=zDC_0%>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/>
			<%}%>
			</a>
		<%}%>	
		</td>
		
		<td colspan="1" align="left" class="fuentevalor">
			<% 	String sTextoIBANnd = "N/A";
				String sGBIBAN = "";
				try {
					M4Operations t = new M4Operations(request);
					sGBIBAN = t.getItem(znodo,zsubsesion,znodo,"","SCO_GB_IBAN");
				} catch (Exception e) {}
			   if (!sGBIBAN.equals("") && sGBIBAN != null) {%>
				<m4:item m4name="<%=zgbiban%>"/>
			<% } else { %>
				<%=sTextoIBANnd%>
			<% } %>
		</td>
			
		
		
		<td align="left" class="fuentevalor" colspan="1">
			<% int ztipoimporte = -1;
			
			try {
				M4Operations t = new M4Operations(request);
				String ztipoimporteTEMP = t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP");
				int i = ztipoimporteTEMP.indexOf(".");
				ztipoimporteTEMP = ztipoimporteTEMP.substring(0,i);
				ztipoimporte = Integer.parseInt(ztipoimporteTEMP);
			} catch (Exception e) {}
			
			if (ztipoimporte == 1) { %>
				Fijo
			<% } else if (ztipoimporte == 2) { %>
				Porcentaje
			<% } else { %>
				Otro
			<% } %>
		</td>
		<td align="left" class="fuentevalor" colspan="1">
			<m4:item m4name="<%=zvalue%>" htmlsafe="true"/>&nbsp;
			<% if (ztipoimporte == 1) { %>
				<m4:item m4name="<%=zid_curr%>" htmlsafe="true"/>
			<% } else if (ztipoimporte == 2) { %>
				%
			<% } %>
		</td>
		
		<td align="right" class="fuentevalor">
			<% if (zorgexternatemp.equals("") == true){ %>
			<a title = "Eliminar el beneficiario" style="CURSOR: hand" 
			 href="javascript:borrado('<m4:item m4name="<%=zidhr%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidperson%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zpdata%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidpaym%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zoraccount%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zbanco%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zdc%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zcuenta%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zdatestart%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidpaymformula%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zvalue%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zid_curr%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zname%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zapellidos%>" jsafe="true" htmlsafe="true"/>');">
				<img alt="Eliminar el beneficiario"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" />
				</a>
			<% } %>
		</td>
		</tr>
<%}else{%>
		<tr>
		<td align="left" class="fuentevalor2">
			<% 	String zorgexternatemp = "";
				try {
					M4Operations t = new M4Operations(request);
					zorgexternatemp = t.getItem(znodo,zsubsesion,znodo,zposicions,"STD_N_EXT_ORG_1");
					zidstandard = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
				} catch(Exception e) {}
				if (zorgexternatemp.equals("") != true){ %>
					<m4:item m4name="<%=znorgexterna11%>" htmlsafe="true"/>
				<% } else { %>
					<a  class="enlacefuncional" title = "Modificar otras cuentas bancarias" style="CURSOR: hand" href="javascript:ModificarCuenta(<m4:item m4name="<%=zorden%>"/>,'<%=zidstandard%>');">
						<m4:item m4name="<%=zname%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zapellidos%>" htmlsafe="true"/> 
					</a>
				<% } %>
		</td>
		<td align="left" class="fuentevalor2" colspan="1"><m4:item m4name="<%=zdatestart%>" htmlsafe="true"/>
		</td>
		<td align="left" class="fuentevalor2"  colspan="1">&nbsp;
		<% String zidpaympend="";
			String zbancotemp = "";
			String zDC_0 = "";
			try {
				M4Operations t = new M4Operations(request);
				zidpaympend = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_PAYM_TYPE");
				zbancotemp = t.getItem(znodo,zsubsesion,znodo,zposicions,"SCO_ID_BANK_BRANCH");
				zidstandard = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_STANDARD");
				zDC_0 = t.getItem(znodo,zsubsesion,znodo,"","SSP_DC");
				zDC_0 = zDC_0.split("\\.")[0];	//se divide en torno a la expresión regular \. (punto)
				if (zDC_0.length() == 1) {
					zDC_0 = "0" + zDC_0;
				}
			} catch(Exception e) {}
		if ((zidpaympend.equals("4")== true) && zbancotemp.equals("") == false){%>
			<a  class="enlacefuncional" title = "Modificar otras cuentas bancarias" style="CURSOR: hand" href="javascript:ModificarCuenta(<m4:item m4name="<%=zorden%>"/>,'<%=zidstandard%>');">
			<%if (zidstandard.equals("00")== true){%>
				<m4:item m4name="<%=zbanco%>" htmlsafe="true"/>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/>
			<%} else {%>
				<!-- <m4:item m4name="<%=zbanco%>" htmlsafe="true"/>/<m4:item m4name="<%=zdc%>" htmlsafe="true"/>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/> -->
				<m4:item m4name="<%=zbanco1%>" htmlsafe="true"/>/<m4:item m4name="<%=zbanco2%>" htmlsafe="true"/>/<%=zDC_0%>/<m4:item m4name="<%=zcuenta%>" htmlsafe="true"/>
			<%}%>
			</a>
		<%}%>	
		
		</td>
		
		<td colspan="1" align="left" class="fuentevalor2">
			<% 	String sTextoIBANnd = "N/A";
				String sGBIBAN = "";
				try {
					M4Operations t = new M4Operations(request);
					sGBIBAN = t.getItem(znodo,zsubsesion,znodo,"","SCO_GB_IBAN");
				} catch (Exception e) {}
			   if (!sGBIBAN.equals("") && sGBIBAN != null) {%>
				<m4:item m4name="<%=zgbiban%>"/>
			<% } else { %>
				<%=sTextoIBANnd%>
			<% } %>
		</td>
	
		
		<td align="left" class="fuentevalor2" colspan="1">
			<% int ztipoimporte = -1;
			
			try {
				M4Operations t = new M4Operations(request);
				String ztipoimporteTEMP = t.getItem(znodo,zsubsesion,znodo,"","SSP_PAY_FORM_TP");
				int i = ztipoimporteTEMP.indexOf(".");
				ztipoimporteTEMP = ztipoimporteTEMP.substring(0,i);
				ztipoimporte = Integer.parseInt(ztipoimporteTEMP);
			} catch (Exception e) {}
			
			if (ztipoimporte == 1) { %>
				Fijo
			<% } else if (ztipoimporte == 2) { %>
				Porcentaje
			<% } else { %>
				Otro
			<% } %>
		</td>
		<td align="left" class="fuentevalor2" colspan="1">
			<m4:item m4name="<%=zvalue%>" htmlsafe="true"/>&nbsp;
			<% if (ztipoimporte == 1) { %>
				<m4:item m4name="<%=zid_curr%>" htmlsafe="true"/>
			<% } else if (ztipoimporte == 2) { %>
				%
			<% } %>
		</td>
		
		<td align="right" class="fuentevalor2">
			<% if (zorgexternatemp.equals("") == true){ %>
			<a title = "Eliminar el beneficiario" style="CURSOR: hand" href="javascript:borrado('<m4:item m4name="<%=zidhr%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidperson%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zpdata%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidpaym%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zoraccount%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zbanco%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zdc%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zcuenta%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zdatestart%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidpaymformula%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zvalue%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zid_curr%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zname%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zapellidos%>" jsafe="true" htmlsafe="true"/>');">
				<img alt="Eliminar el beneficiario"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" />
				</a>
			<% } %>
		</td>
		</tr>
		<!-- <form name="frmControlPais" id="frmControlPais">
	  		  <input type="hidden" id="ESTANDAR" name="ESTANDAR" value="<%=zidstandard%>"></input>
	  	</form> -->

<%}%>		
</m4:dataloop>
		</table>
		<%}	else{%>	
		<div class="fuentenodatos" align="center">
	    	 Actualmente no tienes ning&uacute;n dato de tus otras cuentas.
	
	  		 <br/> <br/> <br/> <br/> 
 		<%}%>		
  		<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
		</div>
<m4:endpage/>
</body>
</html>



