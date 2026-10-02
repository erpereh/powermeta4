<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
	String label_01 = "Catalogue de formation";
	String label_02 = "Inscriptions en formation";
	String label_03 = "Filtre";
	String label_04 = "Cat&eacute;gorie de produit";
	String label_05 = "Produit de formation";
	String label_06 = "Page Web";
	String label_07 = "Consultez les formations actuellement disponibles dans votre organisation, puis s&eacute;lectionnez les stages de votre int&eacute;r&ecirc;t.";
	String label_08 = "Afficher le d&eacute;tail";
	String label_09 = "Tous";
	String label_10 = "Fermer";
	String label_11 = "Votre plan de d&eacute;veloppement professionnel";
%>
<title><%=label_01%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<%@ include file="/sse_g3/sse_train_trans.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<script type="text/javascript">
function Filtrar(){
  var valor =m4select("filtro","formselect","value");
  var nombre =m4select("filtro","formselect","text");
  m4valor("oculto","zproducto",valor,"set");
  m4valor("oculto","znmproducto",nombre,"set");
  m4submit("oculto");}
function CursosMultimedias(idproducto){
  m4valor("oculto2","zidproducto",idproducto,"set");
  m4submit("oculto2");}
function view_message()
{
	var path = "/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp ";
	window.open(path,'Comment','width=100;height=50,resizable,scrollbars');
}

</script>
<%	
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado"); 
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios"); 
	//String znmproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto"); 
	//String zproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto");  
	String znmproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto"); 
	String zproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto");	

	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	if (zproducto==null || zproducto == ""){zproducto = "All";znmproducto = "Tous";}
%></head>
<body>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%String zsubsesion = "SSE_TRAINING_REQUEST";
  String zmeta4object = "SSE_TRAINING_REQUEST";  
  String znodo = "M4T_PRODUCTOS";
  String znodo1 = "M4T_PRODUCTOS_TIPO";
  String zventanas = "20";
  int zvuelta = 5;
  String zdireccion = "sse_g3/sse_g3_p3.jsp";
  String zestado = "31";   
  int zregistroinicial = Integer.valueOf(zinicios).intValue();
  zregistroinicial = zregistroinicial - 1;
  int zventana  = Integer.valueOf(zventanas).intValue();
  int zregistrofinal = zregistroinicial + zventana - 1;
  String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
  String zmove = znodo + "[" + zregistroinicial + "]";
  String zlectura = zsubsesion + "!" + znodo;  
  String zraiz = zsubsesion + "!" + znodo + ".";
  String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
  String zmove1 = znodo1 + "[FIRST]";
  String zlectura1 = zsubsesion + "!" + znodo1;  
  String zraiz1 = zsubsesion + "!" + znodo1 + ".";
  String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
  String ztipocarga = "PR"; 
  String zidproducto = zcomun + "SCO_ID_DEV_PRODUCT"; 
  String znproducto = zcomun + "SCO_NM_DEV_PRODUCT";        
  String zhttp = zcomun + "SCO_HTTP_PATH";     
  String zidtrtb2 = zcomun + "SCO_ID_TRTBREQ";
  String znmpt = zcomun + "SCO_NM_PRODUCT_TYPE";
  String zspecprod = zcomun + "SSE_SPEC_PROD";   
  String zidproductotipo = zcomun1 + "SCO_ID_PRODUCT_TYPE";     
  String znmproductotipo = zcomun1 + "SCO_NM_PRODUCT_TYPE";
  String zpos="";    
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {M4Operations m = new M4Operations(request);
		m.setItem(zsubsesion,znodo,"","SSE_PRODUCT_TYPE",zproducto);
		} catch(Exception e) {} %>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<%	int zcount = 0;
	int  zcounti  = 0;	
	int  zcount1  = 0;
	int  zcount1i  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    zcount1i = m.getCountInClient(znodo1,zsubsesion,znodo1);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount1v = String.valueOf(zcount1i);
%>
	<table width="100%" cellspacing="0">
	<tr><td class="titulofuncional" colspan="2">&nbsp;<%=label_01%></td></tr>
	<tr>
		<td><img src="/iconos/noname_puesto_181_125.gif" width="99" height="100" alt="<%=label_01%>"></td>
		<td><div class="descripcionfuncional"><%=label_07%></div>
			<ul class="listaenlace">
			<li><a class="enlacefuncional" title="<%=label_02%>" href="sse_g3_p7.jsp?estado=31"><%=label_02%></a></li>
			<li><a class="enlacefuncional" title="<%=label_11%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_pdev.jsp"><%=label_11%></a></li>
			</ul>
		</td>
	</tr>
	</table>
	<table class="tablaestados" cellspacing="0" width="100%">
	<tr class="tablaestadosceldatitulo"><td colspan="2">&nbsp;<%=label_03%></td></tr>
	<tr>
		<td class="fuentevalor">&nbsp;<%=label_04%></td>
		<form id="formselect" name="formselect" action="">
		<td class="fuentevalor" >
			<select name="filtro" id="filtro" class="fuenteapartados" onchange="javascript:Filtrar()" align ="center">
			
				<option value="All"><%=label_09%></option>
				<m4:loop from="0" to="<%=new Integer(new Integer(zcount1v).intValue()-1).toString()%>">
				<option value="<m4:item m4name="<%=zidproductotipo%>" htmlsafe="true"/>"><m4:item m4name="<%=znmproductotipo%>" htmlsafe="true"/></option>
				</m4:loop>
			</select>
		</td>
		<script type="text/javascript" language="Javascript1.5"><!--
	 m4searchoptioness("formselect","filtro","<%=zproducto%>");
--></script>
	</form>
	</tr>
	</table>		
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zproducto" name="zproducto"  value="<%=zproducto%>" />
<input type="hidden" id="znmproducto" name="znmproducto"  value="<%=znmproducto%>" />
<input type="hidden" id="zinicios" name="zinicios" value="" />
</form>	
<% if (zcounti > 0) { %>
	<table class="tablaestados" cellspacing="0" width="100%">
	<tr class="tablaestadosceldatitulo">
	<td class="tablaestadosceldatitulo">&nbsp;</td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_05%></td>
		<td class="tablaestadosceldatitulo" >&nbsp;<%=label_06%></td>
	</tr>
<%
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>

<m4:item m4varname ="zinfoprod" m4name="<%=zspecprod%>" htmlsafe="true"/>
 <tr>
 	<td class="fuentevalor<%=zpos%>">
	<% if(zinfoprod.equals("1")) { %>
	   <a title="<%=label_08%>" href="javascript:view_message();"><img alt="<%=label_08%>" src="/iconos/advertencia_rojo.gif"/></a>
	<%}%>
	</td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<a title="<%=label_08%>" href="javascript:CursosMultimedias('<m4:item m4name="<%=zidproducto%>"  jsafe="true" htmlsafe="true"/>');" ><m4:item m4name="<%=znproducto%>" htmlsafe="true"/></a></td>
    <td class="fuentevalor<%=zpos%>">&nbsp;<a title="<%=label_08%>" href="<m4:item m4name="<%=zhttp%>" htmlsafe="true"/>"><m4:item m4name="<%=zhttp%>" htmlsafe="true"/></a></td>
</tr>

</m4:loop>	
</table>
<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_desc.jsp?estado=31" method="post" name="oculto2" id="oculto2">
<input type="hidden" id="zidproducto" name="zidproducto"/>
<input type="hidden" id="znproducto" name="znproducto"/>
<input type="hidden" id="znmpt" name="znmpt"/>
</form>

<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_info.jsp?estado=31" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="zproduct" name="zproduct"/>
</form>

<%}%>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>



