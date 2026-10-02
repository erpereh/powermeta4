<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<title>Demandez des formations</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/menuintercambio.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
function solicitar(i2){
var empleados = "";
var m = 0;
var a = true;
var n = 0;
var x =0;
var plazas = m4valor("Formulario","znplazas","","get");
var trtb = m4valor("Formulario","zidtrtb","","get");
var id = i2;

m = document.forms["Formulario"].elements["list2"].options.length;
n = m -1;
if (plazas == 0 && m== 0){alert ("Vous devez indiquer le nombre de personnes ou alors sélectionner un collaborateur");return;}
v1 = new m4objvalidacion('_num',1,2,'','',false);
v1.m4validar(m4objeto("znplazas","Formulario"));
if (v1.resultado == false && m == 0){
	alert ("La demande n'a pas été traitée. Vérifiez que le nombre de personnes est correct.");
	return;}
if (a == false){return;}
if (plazas < m) {m4valor("Formulario","znplazas",m,"set");plazas = m;}
for (i=x ; i < n+1 ; i++){
	if (i == n)	{empleados += document.forms["Formulario"].elements["list2"].options [i].value;}
	else		{empleados += document.forms["Formulario"].elements["list2"].options [i].value + ",";}
	}
if ((m4valor("Formulario","zfechafin","","get")== "") && (m4valor("Formulario","zfechaini","","get")== ""))
	{m4valor("Formulario","zempleados",empleados,"set");
	 m4submit("Formulario");
	 return;}
if ((m4valor("Formulario","zfechafin","","get")== "") && (m4fechacomprobacion(m4objeto('zfechaini','Formulario'),"")))
	{m4valor("Formulario","zempleados",empleados,"set");
	 m4submit("Formulario");
	 return;}
if (m4fechacomprobacion((m4objeto('zfechaini','Formulario')),"")&& 	(m4fechacomprobacion((m4objeto('zfechaini','Formulario')),""))&& (m4compfechas(m4objeto('zfechaini','Formulario'),'<=',m4objeto('zfechafin','Formulario'))))
	{m4valor("Formulario","zempleados",empleados,"set");
	m4submit("Formulario");
	return;}
alert ("La demande n'a pas pu être traitée. Vérifiez que la date de fin est ultérieure à la date de début et que les formats de dates sont corrects.");
}
</script>
<%
    Generatablaparametros zobjtabla = new Generatablaparametros(request);
	Hashtable zhash = zobjtabla.getTablaHash();
    String estado = zobjtabla.m4paramvalor("estado");
	String zid = zobjtabla.m4paramvalor("zid");
	String zinicios = zobjtabla.m4paramvalor("zinicios");
	String zidtrtb = zobjtabla.m4paramvalor("zidtrtb");
	if ((estado==null)||(estado.equals(""))){
		estado = "0";}
%>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
String zsubsesion = "SSM_TRAINING_REQUEST";
String zMeta4Object = "SSM_TRAINING_REQUEST";
String znodo2 = "M4T_DESC_MULTIMEDIA";
String znodo3 = "M4T_LENGUAJES";
String znodo2 = "SSM_EMPLEADOS";
String znodo6 = "M4T_SESIONES";
String ztipocarga = "DM";
String zventanas = "20";
int zregistroinicial = 0;
//zregistroinicial = zregistroinicial - 1;
int zventana  = 0;
int zregistrofinal = zregistroinicial + zventana - 1;
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[" + zregistroinicial + "]";
   String zlectura2 = zsubsesion + "!" + znodo2;
   String zraiz2 = zsubsesion + "!" + znodo2 + ".";
   String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;			

   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo2 + "[" + zregistroinicial + "]";
   String zlectura4 = zsubsesion + "!" + znodo4;
   String zraiz4 = zsubsesion + "!" + znodo4 + ".";
   String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;
   
   String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";
   String zmove6 =znodo6 + ":" + znodo6 + "[" + zregistroinicial + "]";
   String zlectura6 = zsubsesion + "!" + znodo6;
   String zraiz6 = zsubsesion + "!" + znodo6 + ".";
   String ziterator6 = znodo6 + ":" + zsubsesion + "!" + znodo6;	

	String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";

	String zAUTHOR = zraiz2 + "SCO_AUTHOR";
	String zCDDATE = zraiz2 + "SCO_CD_DATE";
	String zESTIMATEDDAYS = zraiz2 + "SCO_ESTIMATED_DAYS";
	String zESTIMATEDHOURS = zraiz2 + "SCO_ESTIMATED_HOURS";
	String zNUMBER = zraiz2 + "STD_NUMBER_OF_UNITS";
	String zSTDNMLENGUAGE = zcomun3 + "STD_N_LANGUAGE";
	String zSTDIDLENGUAGE = zcomun3 + "STD_ID_LANGUAGE";
	String zNFAMILYNAME = zraiz2 + "STD_N_FAMILY_NAME_1";
	String zFIRSTNAME = zraiz2 + "STD_N_FIRST_NAME";
	String zGLOBALNAME = zraiz4 + "SCO_GB_NAME";
	String zIDPERSON = zraiz2 + "STD_ID_PERSON";
	String zNMSESION = zraiz6 + "SCO_NM_SESSION";
	String zIDTRTBEVENTO = zraiz6 + "SCO_ID_TRTBREQ";
	String zDATE = zraiz6 + "SCO_DATE";
	String zDATE1 = zraiz6 + "SCO_DATE_1";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%= zMeta4Object %>" m4name="<%=zsubsesion%>"/>
<% 
try {
	M4Operations m = new M4Operations(request);
	m.setItem(zsubsesion,znodo2,"","SSE_ID",zid);
	}
	catch(Exception e) {}
%>
<m4:exec m4method="<%=zMETODOCARGA%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo6%>"><m4:param name="m4name0" value="<%=zoutputdef6%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove6%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<%
	int  zcount3  = 0;
	int  zcount3i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	    zcount3i = m.getCountInClient(znodo3,zsubsesion,znodo3);
	} catch(Exception e) {}
	String	zcount3v = String.valueOf(zcount3i);
	
	int  zcountsesiones_aux1  = 0;
	int  zcountsesiones_aux  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcountsesiones_aux1 = m.getCount(znodo6,zsubsesion,znodo6);
	} catch(Exception e) {}
	try {
	    M4Operations m = new M4Operations(request);
	    zcountsesiones_aux = m.getCountInClient(znodo6,zsubsesion,znodo6);
	} catch(Exception e) {}
	String	zcountsesiones = String.valueOf(zcountsesiones_aux);
%>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Demandez des formations</td></tr>
<tr>
	<td><img src="/iconos/noname_incripciones_formacion_99_100.gif" width="99" height="100" alt="Demandez des formations" /></td>
	<td><div class="descripcionfuncional">Demandez des produits de formation en indiquant le nombre de places&nbsp;/ personnes souhait&eacute.</div></td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_insert.jsp" method="post" name="Formulario" id="Formulario">
<input id="zempleados" name="zempleados" type="hidden" />
<table class="TablaEstados" cellspacing="0" width="100%" >
<tr class="tablaestadosceldatitulo"><td colspan="4">Produit multim&eacute;dia&nbsp;:&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_MULTIMEDIA" htmlsafe="true"/></td></tr>
<tr>
	<td class="fuentecampo">Cat&eacute;gorie de produit</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_PRODUCT_TYPE" htmlsafe="true"/></td>
	<td class="fuentecampo">Produit</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_DEV_PRODUCT" htmlsafe="true"/></td>
</tr>
<tr>
	<td class = "fuentecampo">Auteur</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_AUTHOR" htmlsafe="true"/></td>
	<td class = "fuentecampo">Derni&egrave;re mise &agrave; jour</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NM_PRODUCT_TYPE" htmlsafe="true"/></td>
</tr>
<tr>
	<td class="fuentecampo">Dur&eacute;e (jours)</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_DAYS" htmlsafe="true"/></td>
	<td class="fuentecampo">Nb. d'heures TT</td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_ESTIMATED_HOURS" htmlsafe="true"/></td>
</tr>
<tr>
	<td class="fuentecampo">Nb. d'unit&eacute;s</td>
	<td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_NUMBER_OF_UNITS" htmlsafe="true"/></td>
</tr>
<tr>	
	<td class="fuentecampo">Objectif p&eacute;dagogique</td>
	<td class="fuentevalor" colspan="3">&nbsp;<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_EDUCAT_OBJ" htmlsafe="true"/></td>
</tr>
<tr>	
	<td class="fuentecampo">Adresse Internet</td>
	<td class="fuentevalor" colspan="3">&nbsp;<a href="<m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_HTTP_PATH" htmlsafe="true"/>"><m4:item m4name="SSM_TRAINING_REQUEST!M4T_DESC_MULTIMEDIA.SCO_HTTP_PATH" htmlsafe="true"/></td>
</tr>
</table>
<table class="tablaestados" width="100%" cellspacing="0" border="0">	
<tr class="tablaestadosceldatitulo"><td colspan="4">Informations compl&eacute;mentaires</td></tr>
<tr>
	<td class="fuentecampo">&nbsp;Date de d&eacute;but souhait&eacute;e</td>
	<td class="fuentecampo">
		<input class="fuenteformulario" type="text" name="zfechaini" id="zfechaini" title="Indiquez la date de d&eacute;but" maxlength="10" size="10" />
		<a href="javascript:m4calendario(m4objeto('zfechaini','Formulario'))">
		<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="S&eacute;lectionnez une date de d&eacute;but" />
		</a>
		<script type="text/javascript">					
			document.all["zfechaini"].value = m4fechahoy();
		</script>
	</td>
	<td class="fuentecampo">Date de fin souhait&eacute;e</td>
	<td class="fuentecampo">
		<input class="fuenteformulario" type="text" name="zfechafin" id="zfechafin" title="Indiquez la date de fin" maxlength="10" size="10" />
		<a href="javascript:m4calendario(m4objeto('zfechafin','Formulario'))">
		<img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="S&eacute;lectionnez une date de fin" />
		</a>		
	</td>
</tr>
<tr>
	<td class="fuentecampo">Langue</td>
	<td class="fuentevalor" colspan="3">
		<select id="zidioma" class="Fuenteformulario" name="zidioma">
		<option value="01">Espagnol</option>
		<m4:loop from="0" to="<%=new Integer(new Integer(zcount3v).intValue()-1).toString()%>">
		<option value="<m4:item m4name="<%=zSTDIDLENGUAGE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNMLENGUAGE%>" htmlsafe="true"/></option>
		</m4:loop>
		</select>
	</td>
</tr>
</table>

<table class="tablaestados" width="100%" cellspacing="0">
	<tr class = "tablaestadosceldatitulo">
	</table>
		<%if (zcountsesiones_aux != 0 ) {
		%>
	<div class="descripcionfuncional">
		Si vous souhaitez demander un produit multim&eacute;dia d&eacute;j&agrave; programm&eacute;, s&eacute;lectionnez-le.<br>
	</div>

		<table class="TablaEstados" cellspacing="0" width="100%" >
		<tr>
		<td class = "tablaestadosceldatitulo" colspan="10" align="center">Produits multim&eacute;dias programm&eacutes</td>
		</tr>
		<tr>
		<td  nowrap height=5></td>
		</tr>
		</table>
			<m4:iterator m4rows="<%=zcountsesiones%>" m4node="<%=ziterator6%>">
			<table class = "tablaestados" cellspacing="0" width="100%">
			<tr>
				<m4:param name="m4item0" value="<%=zNMSESION%>"/>
				<m4:param name="m4item1" value="<%=zIDTRTBSESION%>"/>
				<m4:param name="m4item2" value="<%=zDATE%>"/>
				<m4:param name="m4item3" value="<%=zDATE1%>"/>
				
				<tr>
				<td class = "fuentecampo" width=10%>Libell&eacute;&nbsp;:</td>
				<td class="fuentevalor" nowrap align=left width=26%>$M4ITEM0$</td>
				<td class = "fuentecampo" width=17%>Date de d&eacute;but&nbsp;:</td>
				<td class="fuentevalor" width=13%>$M4ITEM2$</td>
				<td class = "fuentecampo" width=17%>Date de fin&nbsp;:</td>
				<td class="fuentevalor" width=13%>$M4ITEM3$ </td>
	<td class = "fuentecampo">
		<input id="zidtrtb" name="zidtrtb" type="radio" value="$M4ITEM1$" />
	</td>
				</tr>
			</m4:iterator>
			</table>
		<table class="TablaEstados" cellspacing="0" width="100%" >
	<tr>
	<td class = "fuentecampo" width ="51%"></td>
	<td class = "fuentecampo" width ="45%"align ="left">Vous ne souhaitez demander aucun produit multim&eacute;dia programm&eacute;.</td>
	<td class = "fuentecampo" width ="4%" ><input id="zidtrtb" name="zidtrtb" type="radio" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zidtrtb)%>" checked /></td>
	</tr>
	</table>
			<% 
		}
		else
		{
		%>
			<input id="zidtrtb" name="zidtrtb" type="hidden" value="<%=zidtrtb%>" />	
		<% 
		}
		%>
<table class="tablaestados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo" colspan="7">Nombre de personnes</td></tr>
<tr><td class="fuentecampo" colspan="7">&nbsp;Nombre de personnes&nbsp;:&nbsp;<input maxlength= "3" class="fuenteformulario" type="text" name="znplazas" id="znplazas" title="Indiquez le nombre de personnes" maxlength="10" size="10"></td></tr>
<tr class="tablaestados">
	<td class="fuentevalor" rowspan="4" colspan="3">
		<select class="fuenteformulario200" multiple="multiple" name="list1" id="list1" size="10" class="Fuenteformulario" ondblclick="mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)">
			<m4:iterator m4rows="*" m4node="<%=ziterator4%>">
			<m4:param name="m4item7" value="SSM_TRAINING_REQUEST!SSM_EMPLEADOS.STD_ID_PERSON"/>
			\\<m4:param name="m4item8" value="SSM_TRAINING_REQUEST!SSM_EMPLEADOS.STD_N_FAMILY_NAME_1"/>
			\\<m4:param name="m4item9" value="SSM_TRAINING_REQUEST!SSM_EMPLEADOS.STD_N_FIRST_NAME"/>
			<m4:param name="m4item10" value="SSM_TRAINING_REQUEST!SSM_EMPLEADOS.SCO_GB_NAME"/>
			<option value="$M4ITEM7$">$M4ITEM10$</option>
			</m4:iterator>
			<option></option>
		</select>
	</td>
	<td class="fuentevalor" rowspan="4" align="center">
	&nbsp;<a title="S&eacute;lectionnez un enregistrement" href="javascript:mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)"><img alt="Envoyer" title="" src="/iconos/icono_move_left_31_19.gif" name="b2" id="b2" /></a>&nbsp;<img alt="Envoyer" title="" src="/iconos/icono_move_right_31_19.gif" onclick="mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),false)" name="b1" id="b1" /><br />
	&nbsp;<img alt="Envoyer" title="" src="/iconos/icono_moveall_left_31_19.gif" onclick="mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),true)" name="b4" id="b4"/>&nbsp;<img alt="Envoyer" title="" src="/iconos/icono_moveall_right_31_19.gif" onclick="mover(m4objeto('list1','Formulario'),m4objeto('list2','Formulario'),true)" name="b3" id="b3"/>
	</td>
	<td class="fuentevalor" rowspan="4" colspan="3">
		<select class="fuenteformulario200" multiple="multiple" name="list2" id="list2" size = "10" class="Fuenteformulario" ondblclick="mover(m4objeto('list2','Formulario'),m4objeto('list1','Formulario'),false)"></select>
		<option></option>
		</select>
	</td>
</tr>
<tr class="fuentevalor"><td></td></tr>
<tr class="fuentevalor"><td></td></tr>
<tr class="fuentevalor"><td></td></tr>
<tr class="tablaestados">
	<td colspan="7" class="fuenteboton"><a href="javascript:solicitar('<%=zidtrtb%>')" title="Envoyer la nouvelle demande"><img alt="Envoyer" src="/iconos/icono_enviar_mss_36_36.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
</form>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>
</html>


