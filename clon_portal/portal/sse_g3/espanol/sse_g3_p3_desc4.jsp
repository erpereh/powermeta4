<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%
	String label_01 = "Formaci&oacute;n disponible";
	String label_02 = "Descripci&oacute;n de los cursos, tanto presenciales como multimedias, con los que obtendr&aacute; el conocimiento y nivel seleccionado.";
	String label_03 = "Tipo";
	String label_04 = "Nombre";
	String label_05 = "D&iacute;as";
	String label_06 = "Proveedor";
	String label_07 = "Cursos multimedias";
	String label_08 = "Detalle del curso";
	String label_09 = "Esta competencia no dispone de ning&uacute;n curso";
	String label_10 = "Autor";
	String label_13 = "Cat&aacute;logo de formaci&oacute;n";
%>
	<title><%=label_13%></title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>		
<script type="text/javascript">
function solicitar_curso(idtrtb,id){
m4valor("oculto","zidtrtb",idtrtb,"set");
m4valor("oculto","zid",id,"set");
m4submit("oculto");}

</script>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
	String zextd = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zextd");
	String zlevel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zlevel");

	if ((estado==null)||(estado.equals(""))){
		estado = "0";}
	if ((zinicios==null)||(zinicios.equals(""))){
		zinicios = "1";	}			
	%>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>

<%
    String zsubsesion = "SSM_EXT_KN_TRAINING";
	String zMeta4Object = "SSM_EXT_KN_TRAINING";  
	String znodo = "M4T_CURSOS";

		
	String ztipocarga = "CME";

	// Se parametriza el tamano que se desea para la ventana

	String zventanas = "50";

	// No se modifica en general.
	
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;  
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   

		
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";		
			
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
	
	String znmcursos =  zcomun + "SCO_NM_DEV_SUBPRODUCT";
	String znmtipo =  zcomun + "SCO_NM_DEV_PRO_TYPE";
	String zidcurso =  zcomun + "SCO_ID_DEV_SUBPRODUCT";
	String zidtrtb1 =  zcomun + "SCO_ID_TRTBREQ";
	String zdias = zcomun + "SCO_DAYS";			
	String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";	
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zMeta4Object%>" m4name="<%=zsubsesion%>"/>
<% try {
		M4Operations m = new M4Operations(request);
		m.setItem(zsubsesion,znodo,"","EXTD_KN",zextd);
		m.setItem(zsubsesion,znodo,"","ID_LEVEL",zlevel);
		}
	catch(Exception e){}
%>
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

	<table width="100%" cellspacing="0">
	<tr>
		<td class="titulofuncional" width ="80%"> <%=label_01%>&nbsp;</td>
		<td class="titulofuncional" width ="20%">&nbsp;</td>
	</tr>
			</table>
	<table width="100%" cellspacing="0" >
	<tr>
		<td><img src="/iconos/noname_puesto_181_125.gif" width="99" height="100" alt="Cursos por competencias" ></td>
		<td><div class="descripcionfuncional"><%=label_02%></div><ul class="listaenlace"><li><a class="enlacefuncional" title="<%=label_13%>" tabindex="1" href="sse_g3_p3.jsp?estado=31"><%=label_13%></a></li></ul></td>
	</tr>
	</table>
<% if (zcounti == 0  ) { %>
<div class="fuentenodatos" align="center"><%=label_09%></div>
<%}if (zcounti != 0) { %>
<table class="TablaEstados" cellspacing="0" width="100%">
	<tr>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_04%></td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_03%></td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_05%></td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_06%></td>
	</tr>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;%>
<%if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor"><a href="javascript:solicitar_curso('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidcurso%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=znmcursos%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=znmtipo%>" htmlsafe="true"/></td>
    <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zdias%>" htmlsafe="true"/></td>
    <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zproveedor%>" htmlsafe="true"/></td>
</tr>
<%}else{%>
 <tr>
	<td class="fuentevalor2"><a href="javascript:solicitar_curso('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidcurso%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=znmcursos%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=znmtipo%>" htmlsafe="true"/></td>
    <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zdias%>" htmlsafe="true"/></td>
    <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zproveedor%>" htmlsafe="true"/></td>
   </tr>
<%}%>
</m4:loop>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_mod1.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zidtrtb" name="zidtrtb"  />
<input type="hidden" id="zid" name="zid"   />
</form>				
<%}%>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


