<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
	<title>Detalle de la solicitud de formaci&oacute;n</title>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
	<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-menu_mss.jsp" %>		
	<%@ include file="/m4trans/mss_g3/0-mss_g3_trans.jsp"%>
	<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
	<%	
	String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
	String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
	String zidtrtb = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidtrtb");
	String zrequest = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zrequest");
	String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
	String zNomfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNomfiltro");

	if ((zfiltro==null)|| (""==zfiltro)){zfiltro = "ALL";} 
	if ((zNomfiltro==null)|| (""==zNomfiltro)){zNomfiltro = "Todos";}
	if ((zidtrtb==null)|| (""==zidtrtb)){zidtrtb = "";} 
	if ((zrequest==null)|| (""==zrequest)){zrequest = "";}
	if ((estado==null)||(estado.equals(""))){estado="0";}
	if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
	%>

<script type="text/javascript">

function calc_costs(zindbugetamts,zinddeductamts,zbugetamts,zdeductibleamts,zbugetamtrequest,zdeductamtrequest,zempeehour,zdeducthour,znethour,zdeductnethour,zcurrency){	
		var dir="/servlet/CheckSecurity/JSP/mss_g3/smco_estimated_req_detail_cost.jsp?estado=31&zindbugetamts="+zindbugetamts+"&zinddeductamts="+zinddeductamts+"&zbugetamts="+zbugetamts+"&zdeductibleamts="+zdeductibleamts+"&zbugetamtrequest="+zbugetamtrequest+"&zdeductamtrequest="+zdeductamtrequest+"&zempeehour="+zempeehour+"&zdeducthour="+zdeducthour+"&znethour="+znethour+"&zdeductnethour="+zdeductnethour+"&zcurrency="+zcurrency;	 
		window.open(dir,'Vis','width=400,height=240,left=0,top=50,resizable,scrollbars');	
}

function filtrar(){
var valorfiltro =  m4select("filtroformacion","formfiltro","value");
var nombrefiltro = m4select("filtroformacion","formfiltro","text");
m4valor("oculto","zidtrtb","<%=zidtrtb%>","set");
m4valor("oculto","zrequest","<%=zrequest%>","set");
m4valor("oculto","zfiltro",valorfiltro,"set");
m4valor("oculto","zNomfiltro",nombrefiltro,"set");
m4submit("oculto");}

</script>
</head>
<body>
  <%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
  <%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
    String zsubsesion = "SSM_SOLICITUDES_PENDIENTES";
	String zmeta4object = "SSM_SOLICITUDES_PENDIENTES";  
	String znodo = "SSM_LISTA_DETALLE_CURSO";
	String znodo1 = "SSM_DET_PL";
	
	String ztipocarga = zfiltro;
    String zventanas = "20";
	int zvuelta = 5;
	int zregistroinicial = Integer.valueOf(zinicios).intValue();
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
	
    String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
    String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
    String zlectura = zsubsesion + "!" + znodo;
    String zraiz = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
    String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
    String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
    String zlectura1 = zsubsesion + "!" + znodo1;
	String zraiz1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
	String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
      
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.SSM_CARGA_DETALLE";		
			
	// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
	
   String zIDPLAZA = zraiz + "IDPLAZA";
   String zNPLAZA = zraiz + "NPLAZA";
   String zAPEPLAZA = zraiz + "APEPLAZA";
   
   String zIDPLAZAlist = zraiz1 + "IDPLAZA";
   String zNPLAZAlist = zraiz1 + "NPLAZA";
   String zAPEPLAZAlist = zraiz1 + "APEPLAZA";

	String ztotalcoste = zraiz  + "TOTAL_COSTE";
	String ztotaldeduc = zraiz  + "TOTAL_DEDUC"; 
	String zcurrency = zraiz  + "ID_CURRENCY";
	String zbugetamtrequest = zraiz  + "SCO_BUGET_AMT_REQUEST"; 
	String zbugetamts = zraiz  + "SCO_BUGET_AMT_S";
	String zdeductamtrequest = zraiz  + "SCO_DEDUCT_AMT_REQUEST";
	String zdeducthour = zraiz  + "SCO_DEDUCT_HOUR_RATE";
	String zdeductnethour = zraiz  + "SCO_DEDUCT_NET_HOUR_RATE"; 
	String zdeductibleamts = zraiz  + "SCO_DEDUCTIBLE_AMT_S"; 
	String zempeehour = zraiz  + "SCO_EMPEE_HOUR_RATE";
	String zindbugetamts = zraiz  + "SCO_IND_BUGET_AMT_S"; 
	String zinddeductamts = zraiz  + "SCO_IND_DEDUCTIBLE_AMT_S"; 
	String znethour = zraiz  + "SCO_NET_HOURLY_RATE";
	String zlsinasignar = zraiz  + "PLAZAS_SIN_ASIG";

	String zlstatus = zraiz  + "SCO_NM_REQ_STATUS";	 	
	String zdescription = zraiz  + "SCO_DESCRIPTION";			

   	
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec m4method="<%=zmetodocarga%>">
<m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/>
<m4:param name="TIPO_REQUEST" value="<%=zrequest%>"/>
<m4:param name="TIPO_IDTRTB" value="<%=zidtrtb%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<%
	int  zcounti  = 0;	
	int  zcount  = 0;
	int  zcount1  = 0;
	int  zcount1i  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
	    zcount1i = m.getCountInClient(znodo1,zsubsesion,znodo1);
		} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcount1v = String.valueOf(zcount1);
	String znombreform="";String ztotalplazas="";String zsinasignar="";
	String zpos="";
	String ztotalcostev="";
	String ztotaldeducv ="";
	String zcurrv="";
	String zdescriptionv =""; 
	String zSCO_ID_DEV_PRODUCT =""; 
	
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<% 
try {
		M4Operations Introduccion = new M4Operations(request);	
		znombreform  = Introduccion.getItem(znodo,zmeta4object,znodo,"","NOMBRE_PRODUCTO");
		ztotalplazas = Introduccion.getItem(znodo,zmeta4object,znodo,"","TOTAL_PLAZAS");
		zsinasignar  = Introduccion.getItem(znodo,zmeta4object,znodo,"","PLAZAS_SIN_ASIG");
		ztotalcostev  =	Introduccion.getItem(znodo,zmeta4object,znodo,"","TOTAL_COSTE");
		ztotaldeducv  =	Introduccion.getItem(znodo,zmeta4object,znodo,"","TOTAL_DEDUC");
		zcurrv  = Introduccion.getItem(znodo,zmeta4object,znodo,"","ID_CURRENCY");		
		zdescriptionv  = Introduccion.getItem(znodo,zmeta4object,znodo,"","SCO_DESCRIPTION");
		zSCO_ID_DEV_PRODUCT  = Introduccion.getItem(znodo,zmeta4object,znodo,"","SCO_ID_DEV_PRODUCT");

} catch (Exception e){}		
%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2">Detalle de la solicitud de formaci&oacute;n</td></tr>
<tr>
	<td><img src="/iconos/noname_puesto_181_125.gif" width="99" height="100" alt="" ></td>
	<td class="descripcionfuncional">Consulta las plazas solicitadas.
	<ul class="listaenlace"><li><a class="enlacefuncional" tabindex="1" title="Ir a solicitudes de formaci&oacute;n" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=3">Solicitudes de formaci&oacute;n</a></li></ul></td>
</tr>
</table>
<form name="formfiltro" id="formfiltro" action="">
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="11">Informaci&oacute;n solicitud</td></tr>
<tr>	
	<td class="fuentecampofiltro">&nbsp;Producto</td>
	<td class="fuentevalor"colspan="7">&nbsp;<%=znombreform%> </td>	
</tr>

<% 
	if (zSCO_ID_DEV_PRODUCT.equals("99")) { 
		 
%>
<tr>		  
	<td class="fuentecampofiltro"  >&nbsp;<m4:label m4name="<%=zdescription%>" htmlsafe = "true"/></td>
	<td class="fuentevalor"  colspan="7"  >&nbsp;<%=zdescriptionv%></td>
</tr> 
<% } %> 


<tr>	
	<td class="fuentecampofiltro" >&nbsp;Plazas solicitadas</td>
	<td class="fuentevalor" colspan="7" >&nbsp;<%=ztotalplazas%> </td>
</tr>
<tr>	
	<td class="fuentecampofiltro" >&nbsp;<m4:label m4name="<%=zlsinasignar%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="7">&nbsp;<%=zsinasignar%> </td>
</tr>
<tr>
	<td class="fuentecampofiltro" >&nbsp;<m4:label m4name="<%=ztotalcoste%>" htmlsafe = "true"/></td>	
	<td class="fuentevalor"  colspan="7">&nbsp;<%=ztotalcostev%>&nbsp;<%=zcurrv%> </td>	
</tr>
<!--
<tr>	
	<td class="fuentecampofiltro" >&nbsp;<m4:label m4name="<%=ztotaldeduc%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="7" >&nbsp;<%=ztotaldeducv%>&nbsp;<%=zcurrv%> </td>
</tr>
-->
<% if (zcounti > 0) { %>
<tr>
	<td class="tablaestadosceldatitulo" >Empleado</td>
	 

	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zlstatus%>" htmlsafe = "true"/></td>
	   
	<!--<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zindbugetamts%>" htmlsafe = "true"/></td>
	<!--<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zinddeductamts%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zbugetamts%>" htmlsafe = "true"/></td>
	<!--<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zdeductibleamts%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zbugetamtrequest%>" htmlsafe = "true"/></td>
	<!--<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zdeductamtrequest%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zempeehour%>" htmlsafe = "true"/></td>
	<!--<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zdeducthour%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=znethour%>" htmlsafe = "true"/></td>
	<!--<td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zdeductnethour%>" htmlsafe = "true"/></td>-->

	<td class="tablaestadosceldatitulo"></td>

</tr>
<%
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;
zpos="";if (zcontrol2==0){zpos="2";}
%>
 <tr>

	<!-- Si el nombre está vacio debemos insertar No identificado. en otro caso mostramos el nombre  -->
  
	<m4:item m4varname="znoasig" m4name="<%=zNPLAZA%>"htmlsafe="true"  />
 

<% if ( znoasig  == null || znoasig  == "" ) { %>
	<td class="fuentevalor<%=zpos%>" >&nbsp;<%=mss_g3.getProperty("Label.mss_g3_p13_det2")%></td>	
 <%} else {%>
	<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zNPLAZA%>" htmlsafe="true"/></td>
<% } 
%>

<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zlstatus%>" htmlsafe="true"/></td>


	<!--<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zindbugetamts%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td>
	<!--<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zinddeductamts%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td> 
	<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zbugetamts%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td>
	<!--<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zdeductibleamts%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td> 
	<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zbugetamtrequest%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td>	
	<!--<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zdeductamtrequest%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td> 
	<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zempeehour%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td>
	<!--<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zdeducthour%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td> 
	<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=znethour%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td>
	<!--<td class="fuentevalor<%=zpos%>" >&nbsp;<m4:item m4name="<%=zdeductnethour%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zcurrency%>" htmlsafe="true"/> </td> -->	
	<%  String DescrBoton = ""; %>
		<% DescrBoton = mss_g3.getProperty("Label.mss_g3_p13_det_detail");%>
	<!--
	<td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:calc_costs('<m4:item m4name='<%=zindbugetamts%>' htmlsafe='true'/>','<m4:item m4name='<%=zinddeductamts%>' htmlsafe='true'/>','<m4:item m4name='<%=zbugetamts%>' htmlsafe='true'/>','<m4:item m4name='<%=zdeductibleamts%>' htmlsafe='true'/>','<m4:item m4name='<%=zbugetamtrequest%>' htmlsafe='true'/>','<m4:item m4name='<%=zdeductamtrequest%>' htmlsafe='true'/>','<m4:item m4name='<%=zempeehour%>' htmlsafe='true'/>','<m4:item m4name='<%=zdeducthour%>' htmlsafe='true'/>','<m4:item m4name='<%=znethour%>' htmlsafe='true'/>','<m4:item m4name='<%=zdeductnethour%>' htmlsafe='true'/>','<m4:item m4name='<%=zcurrency%>' htmlsafe='true'/>' )" title="<%=DescrBoton%>"><img alt="<%=DescrBoton%>" title="<%=DescrBoton%>" src="/iconos/icono_revision_colectiva_32_16.gif" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /><%=DescrBoton%></a></td>
	-->
</tr>
 </m4:loop>
 <%} else {%>
</table>
<br></br>
<%  String Descr = ""; %>
<%Descr=mss_g3.getProperty("Label.mss_g3_p13_det");%>
<div class="fuentenodatos"><%=Descr%></div>
<% } %>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13_det.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zidtrtb" name="zidtrtb"  value="<%=zidtrtb%>" />
<input type="hidden" id="zrequest" name="zrequest"  value="<%=zrequest%>" />
<input type="hidden" id="zfiltro" name="zfiltro"  value="<%=zfiltro%>" />
<input type="hidden" id="zNomfiltro" name="zNomfiltro"  value="<%=zNomfiltro%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>	

<%@include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_ventanas_post.jsp"%>
<%@ include file="/m4trans/m4custom/CYC/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


