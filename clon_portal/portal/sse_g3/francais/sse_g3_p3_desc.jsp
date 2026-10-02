<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
 <!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
	String label_01 = "D&eacute;tail du produit de formation";
	String label_02 = "Description des stages, pr&eacute;sentiels et multim&eacute;dias, associ&eacute;s au produit s&eacute;lectionn&eacute;. Pour vous inscrire, cliquez sur le libell&eacute; du stage de votre int&eacute;r&ecirc;t.";
	String label_03 = "Stages";
	String label_04 = "Libell&eacute;";
	String label_05 = "Dur&eacute;e (jours)";
	String label_06 = "Organisme";
	String label_07 = "Type";
	String label_08 = "D&eacute;tail du stage";
	String label_09 = "Aucun stage ne correspond &agrave; ce produit";
	String label_10 = "Auteur";
	String label_11 = "Afficher le détail";
	String label_13 = "Catalogue de formation";
%>
<title><%=label_01%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript">
function solicitar_curso(idtrtb,id,infosprod){
  m4valor("oculto","zidtrtb",idtrtb,"set");
  m4valor("oculto","zid",id,"set");
  m4valor("oculto","zinfosubp",infosprod,"set");
  m4submit("oculto");}
  function view_message()
{
	var path = "/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc_info.jsp ";
	window.open(path,'Comment','width=100;height=50,resizable,scrollbars');
}

</script>
<%	

	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
	String zproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto");

	if ((estado==null)||(estado.equals(""))){estado = "0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}			
%>
</head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%String zsubsesion = "SSE_TRAINING_REQUEST";
	String zMeta4Object = "SSE_TRAINING_REQUEST";
	String znodo = "M4T_CURSOS";

	String ztipocarga = "CM";
	String zventanas = "50";
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
    String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
    String zmove = znodo + "[" + zregistroinicial + "]";
    String zlectura = zsubsesion + "!" + znodo;
    String zraiz = zsubsesion + "!" + znodo + ".";
    String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";		
	String znmcursos =  zcomun + "SCO_NM_DEV_SUBPRODUCT";
	String zidcurso =  zcomun + "SCO_ID_DEV_SUBPRODUCT";
	String zNnmtipo =  zcomun + "SCO_NM_DEV_PRO_TYPE";
	String zIDtipo =  zcomun + "SCO_ID_DEV_PRO_TYPE";
	String zidtrtb1 =  zcomun + "SCO_ID_TRTBREQ";
	String zdias = zcomun + "SCO_DAYS";	
	String zdiasestimated = zcomun + "SCO_DAYS";			
	String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";
	String zinfosubprod = zcomun + "INFO_SUBPROD";
	String zpos="";  			

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zMeta4Object%>" m4name="<%=zsubsesion%>"/>
<% try {
		M4Operations m = new M4Operations(request);
		m.setItem(zsubsesion,znodo,"","SSE_PRODUCTO",zproducto);
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>

<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%	int zcount = 0;
	int  zcounti  = 0;	
	int  zcount1  = 0;
	int  zcount1i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);

	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);

%>
<table width="100%" cellspacing="0">
	<tr><td class="titulofuncional" colspan="2"><%=label_01%>&nbsp;</td></tr>
	<tr>
		<td><img src="/iconos/noname_puesto_181_125.gif" width="99" height="100" alt="Produit de formation" ></td>
		<td><div class="descripcionfuncional"><%=label_02%></div><ul class="listaenlace"><li><a class="enlacefuncional" title="<%=label_13%>" tabindex="1" href="sse_g3_p3.jsp?estado=31"><%=label_13%></a></li></ul></td>
	</tr>
	</table>
<% 
if (zcounti == 0  ) { 
%>
<div class="fuentenodatos" align="center"><%=label_09%></div>
<% } if (zcounti != 0) { %>

	<table class="TablaEstados" cellspacing="0" width="100%">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;</td>
		<td class="tablaestadosceldatitulo" >&nbsp;<%=label_04%></td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_07%></td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_05%></td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_06%></td>
		
		<td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31"><img alt="<%=label_13%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>


<m4:item m4varname ="infosubprod" m4name="<%=zinfosubprod%>" htmlsafe="true"/>
 <tr>
 	<td class="fuentevalor<%=zpos%>">
	<% if(infosubprod.equals("1")) { %>
	   <a title="<%=label_11%>" href="javascript:view_message();"><img alt="<%=label_11%>" src="/iconos/advertencia_rojo.gif"/></a>
	<%}%>
	</td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:solicitar_curso('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidcurso%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zinfosubprod%>" jsafe="true" htmlsafe="true"/>');" title="D&eacute;tails du stage"><m4:item m4name="<%=znmcursos%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zNnmtipo%>" htmlsafe="true"/></td>
    <td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zdias%>" htmlsafe="true"/></td>
    <td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zproveedor%>" htmlsafe="true"/></td>
    <td class="fuentevalor<%=zpos%>">&nbsp;</td>
</tr>
</m4:loop>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="znombre" name="znombre"  />
<input type="hidden" id="zidtrtb" name="zidtrtb"  />
<input type="hidden" id="zntipo" name="zntipo" />
<input type="hidden" id="zncu" name="zncu"  />
<input type="hidden" id="zid" name="zid"   />
<input type="hidden" id="zinfosubp" name="zinfosubp"   />
</form>		
<% } %>
<table>					
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</table>
<m4:endpage/>
</body>


