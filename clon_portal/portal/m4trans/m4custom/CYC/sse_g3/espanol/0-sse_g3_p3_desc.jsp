<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
 <!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
	String label_01 = "Detalle del producto";
	String label_02 = "Descripci&oacute;n de los cursos, tanto presenciales como multimedia, relacionados con el producto seleccionado. Para realizar una inscripci&oacute;n sit&uacute;ate sobre el nombre del curso.";
	String label_03 = "Cursos presenciales";
	String label_04 = "Nombre";
	String label_05 = "D&iacute;as";
	String label_06 = "Proveedor";
	String label_07 = "Tipo";
	String label_08 = "Detalle del curso";
	String label_09 = "Este producto no dispone de ning&uacute;n curso";
	String label_10 = "Autor";
	String label_11 = "Ver detalle";
	String label_13 = "Cat&aacute;logo de formaci&oacute;n";
	
%>
<title><%=label_01%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>
<script type="text/javascript" src="/library/jquery.js"></script>
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

function destinatarios(dest)
{
  //M4GONZALO 20-09-2016: Codificamos la cadena descriptiva del curso
  var dest_utf8 = encodeURIComponent(dest);
 
  var dir="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3_dest.jsp?destinatarios=" + dest_utf8; 
  //window.open(dir,'Vis','width="100";height="50",left=0,top=50,resizable,scrollbars');
  
  window.open(dir,'Destinatarios',"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=400,height=200");

  
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
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%  String zsubsesion = "CSP_SSE_TRAINING_REQUEST";
	String zMeta4Object = "CSP_SSE_TRAINING_REQUEST";  
	String znodo = "M4T_CURSOS";
	String znodo2 = "CSP_DESTINATARIOS";

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
   
   // Definición y campos del nodo CSP_DESTINATARIOS
	String zoutputdef2 			= zsubsesion + "!" + znodo2 	+ "[*]";
	String zmove2					= znodo2 	 + ":" + znodo2 	+ "[FIRST]"; 
   
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
	String zDest = "";
	String zpos="";			

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zMeta4Object%>" m4name="<%=zsubsesion%>"/>
<% try {
		M4Operations m = new M4Operations(request);
		m.setItem(zsubsesion,znodo,"","SSE_PRODUCTO",zproducto);
		}catch(Exception e){}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>

<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>

<%	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount1  = 0;
	int  zcount1i  = 0;	
	int  zdestinatarios = 0;
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zdestinatarios = m.getCount(znodo2,zsubsesion,znodo2);

	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountdest= String.valueOf(zdestinatarios);

%>
<table width="100%" cellspacing="0">
	<tr><td class="titulofuncional" colspan="2"><%=label_01%>&nbsp;</td></tr>
	<tr>
		<td><img src="/iconos/noname_puesto_181_125.gif" width="99" height="100" alt="Producto de formaci&oacute;n" ></td>
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
		<td class="tablaestadosceldatitulo">&nbsp;Modalidad</td>
		<td class="tablaestadosceldatitulo">&nbsp;<%=label_05%></td>
		<!-- <td class="tablaestadosceldatitulo">&nbsp;<%=label_06%></td>-->
		<td class="tablaestadosceldatitulo">&nbsp;Destinatarios</td>
		<td class="tablaestadosceldatitulo" align="right"><a href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31"><img alt="<%=label_13%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
	</tr>
<%
int i = 0;
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>


<m4:item m4varname ="infosubprod" m4name="<%=zinfosubprod%>" htmlsafe="true"/>
<tr>
 	<td class="fuentevalor<%=zpos%>">
	<%  
		if(infosubprod.equals("1")) { %>
	   <a title="<%=label_11%>" href="javascript:view_message();"><img alt="<%=label_11%>" src="/iconos/advertencia_rojo.gif"/></a>
	<%}%>
	</td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:solicitar_curso('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidcurso%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zinfosubprod%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=znmcursos%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zNnmtipo%>" htmlsafe="true"/></td>
    <td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zdias%>" htmlsafe="true"/></td>
<!--    <td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zproveedor%>" htmlsafe="true"/></td>-->
	<td class="fuentevalor<%=zpos%>">&nbsp;
		<%
			try {
				M4Operations q = new M4Operations(request);
				q.moveData(znodo,zMeta4Object,znodo,String.valueOf(i++));
				q.moveData(znodo2,zMeta4Object,znodo2,"0");
				//zDest = q.getItem(znodo2,zMeta4Object,znodo2,"","CSP_DESTINATARIOS_CURSO");
				zDest = q.getItem(znodo,zMeta4Object,znodo,"","CSP_PR_DESTINATARIOS");
				
				//zDest = String.valueOf(i);
			} catch(Exception e) {}

			
			
		%>
		<a href="javascript:destinatarios('<%=zDest%>');"> Ver destinatarios </a>
		
	</td>
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
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</table>
<script>

</script>

<m4:endpage/>
</body>


