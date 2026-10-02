<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Adresses &eacute;lectroniques</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
oemail = new m4objvalidacion('_email','','','Veuillez renseigner le champ Adresse &eacute;lectronique (champ obligatoire)',false);		

function comprobar()
{
	var error = 0;

	var form = document.forms["NombreFormulario"];
	var tp_location = form.elements["STD_ID_LOCATION_TYPE"].value;
	
	var texto = "Les erreurs suivantes ont été détectées. Veuillez les corriger afin de pouvoir envoyer votre demande :\n";
	var zloc =m4valor("NombreFormulario","STD_EMAIL","","get");
	if ((zloc == null)||(zloc=="")){
		texto = texto + "\n     L'adresse électronique est obligatoire.";
			error = 1;
			alert(texto);
			return false;
	}

	if (tp_location!="S")
	{
		var texto = "Les erreurs suivantes ont été détectées. Veuillez les corriger afin de pouvoir envoyer votre demande :\n";
		oemail.m4validar(m4objeto("STD_EMAIL","NombreFormulario"))
		if (oemail.resultado == false)
			{
				texto = texto + "\n     Le format de l’adresse électronique est incorrect.";
				error = 1;
			}
		if (error == 1)
			{
				alert(texto);
				return false;
			}
		else 
			{
				m4submit("NombreFormulario"); 
			}
	}
	else
	{
		m4submit("NombreFormulario"); 
	}
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_E_MAIL",ord,"BORRAR","SSE_E_MAIL");
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
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_E_MAIL";
   String zmeta4object = "SSE_E_MAIL";
   String znodo = "SSE_E_MAIL";
   String znodo2 = "M4T_LU_LOCATION_TYPE";

   String ztipocarga = "SSE";
   String zventanas = "6";
   int zvuelta = 2;
   String zdireccion = "sse_g1/sse_g1_p1_mod2.jsp";
   String zestado = "11";

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zSTDEMAIL = zcomun + "STD_EMAIL";
   String zSTDNLOCATIONTYPE = zcomun + "STD_N_LOCATION_TYPE";
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";
  
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":"+ znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   String zSTDNLOCATIONTYPE2 = zcomun2 + "STD_N_LOCATION_TYPE";
   String zSTDIDLOCATIONTYPE = zcomun2 + "STD_ID_LOCATION_TYPE";
    
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
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
int zcount = 0;
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
<tr><td class="titulofuncional" colspan="2">Adresses &eacute;lectroniques</td></tr>
<tr>
	<td><img alt="Adresses &eacute;lectroniques"title="Adresses &eacute;lectroniques" src="/iconos/noname_email_ess_89_100.gif"width="89"height="100"  /></td>
	<td>
	<div class="descripcionfuncional">Enregistrez ou modifiez vos adresses &eacute;lectroniques.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="Vos renseignements personnels" href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">Vos renseignements personnels</a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="return comprobar()" >	
<input type="hidden" id="TAG" name="TAG" value="SSE_E_MAIL" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_E_MAIL" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="3">Adresse &eacute;lectronique</td>
	<td class="tablamenuright" >
	<a title="Vos renseignements personnels"href="/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11">
	<img alt="Vos renseignements personnels" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<tr>
	<td class="fuentecampo">*&nbsp;Adresse &eacute;lectronique</td>
	<td class="fuentevalor" >
	<input class="fuenteformulario" type="text" id="STD_EMAIL" name="STD_EMAIL" size="50" maxlength="40" title="&Eacute;crivez votre adresse &eacute;lectronique"tabindex="1" />
	</td>
	<td class="fuentecampo">Type de lieu</td>
	<td class="fuentevalor" >
	<select id="STD_ID_LOCATION_TYPE" class="fuenteformulario150" name="STD_ID_LOCATION_TYPE"title="S&eacute;lectionnez un type de lieu" >
	<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	<option value="<m4:item m4name="<%=zSTDIDLOCATIONTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNLOCATIONTYPE2%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>
	</td>
</tr>
<tr>
	<td class="fuenteboton" colspan="4">
	<a title="Envoyer" href="javascript:void comprobar();" tabindex="2">
	<img alt="Envoyer"id="enviar"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
</table>
<script type="text/javascript">m4focus("NombreFormulario","STD_EMAIL");</script>
</form>
<% if (zcount>0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td>&nbsp;</td><td>&nbsp;Adresse &eacute;lectronique</td><td colspan="2">&nbsp;Type de lieu</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){%>
 <tr>
	<td class="fuentecampoaccion">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
 	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE%>" htmlsafe="true"/></td>
	<td class="fuentebotonright">
	<a title="Supprimer la demande"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
 <%}else{%>
 <tr>
	<td class="fuentecampoaccion2">&nbsp;<m4:item m4name="<%=zNACCION%>" htmlsafe="true"/></td>
 	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSTDNLOCATIONTYPE%>" htmlsafe="true"/></td>
	<td class="fuentebotonright2">
	<a title="Supprimer la demande"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
 <%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/francais/generico_ventanas.jsp"%>
<%}%>	
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>


