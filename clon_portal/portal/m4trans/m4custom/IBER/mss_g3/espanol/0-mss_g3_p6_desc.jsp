<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>
<%
  String label_01 = "Detalle del producto";
  String label_02 = "Descripci&oacute;n de los cursos, tanto presenciales como multimedias, relacionados con el producto seleccionado. Para realizar una inscripci&oacute;n sit&uacute;ate sobre el nombre del curso.";

  String label_04 = "Curso";
  String label_05 = "D&iacute;as";
  String label_06 = "Proveedor";
  String label_07 = "Tipo";
  String label_08 = "Detalle del curso";
  String label_09 = "Este producto no dispone de ning&uacute;n curso";
  String label_10 = "Ver detalle";
  String label_11 = "Volver a Datos Profesionales del Empleado";  
  String label_13 = "Solicita necesidades de formaci&oacute;n";

  //--------------------------------------------------------  
  String empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado");   
  String periodo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");   
  String nombre_empleado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre_empleado");   
  String zVis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zVis");   

  if ((zVis==null)||(zVis.equals(""))){
    zVis = "1";
  }
  //-------------------------------------------------------- 

%>
  <title><%=label_13%></title>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-menu_mss.jsp" %>   
    <script type="text/javascript">
function solicitar_curso(idtrtb,id,infosprod){
m4valor("oculto","zidtrtb",idtrtb,"set");
m4valor("oculto","zid",id,"set");
m4valor("oculto","zinfosubp",infosprod,"set");
m4submit("oculto");}

function volver_prof(){
  document.getElementById("cargando").className = ""
  m4submit("volver") ;
  }


</script>
  <!-- Librerias Java. Obligatorio -->
  <%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%

  
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  String zproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidproducto");
  String znombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znproducto");
  String zntipo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmpt");

  if ((estado==null)||(estado.equals(""))){
    estado = "0";
  }
  if ((zinicios==null)||(zinicios.equals(""))){
    zinicios = "1";
  }     
  %>
  <script type="text/javascript">
    function navegar (ord,fecha,idhr,oreval) {
      var parametros = new Array("estado","ord","fecha","idhr","oreval");
      var valores = new Array(35,ord,fecha,idhr,oreval);
      m4navegar("mss_g3/mss_g3_p6.jsp",parametros,valores);
  }
  function view_message() {
  var path = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc_info.jsp ";
  window.open(path,'Comment','width=100;height=50,resizable,scrollbars');
  }
</script>

</head>
<body>
<!-- Encabezado -->
<% if (zVis.equals("1")){%>
   <%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
   <%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<%}%>
<%
    String zsubsesion = "CSP_SSM_TRAINING_REQUEST";
  String zMeta4Object = "CSP_SSM_TRAINING_REQUEST";  
  String znodo = "M4T_CURSOS";
  String znodo1 = "M4T_MULTIMEDIAS";
    
  String ztipocarga = "CM";

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
  String zidcurso =  zcomun + "SCO_ID_DEV_SUBPRODUCT";
  String zNnmtipo =  zcomun + "SCO_NM_DEV_PRO_TYPE";
  String zIDtipo =  zcomun + "SCO_ID_DEV_PRO_TYPE";
  String zidtrtb1 =  zcomun + "SCO_ID_TRTBREQ";
  String zdias = zcomun + "SCO_DAYS"; 
  String zdiasestimated = zcomun + "SCO_ESTIMATED_DAYS";      
  String zproveedor = zcomun + "SCO_NM_TRAINING_PROV";
  String zinfosubprod = zcomun + "INFO_SUBPROD";
  
  
  String zpos="";

  
  
  
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zMeta4Object%>" m4name="<%=zsubsesion%>"/>
<% try {
    M4Operations m = new M4Operations(request);
    m.setItem(zsubsesion,znodo,"","SSE_PRODUCTO",zproducto);

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
  String  zcountv = String.valueOf(zcounti);
%>
<table width="100%" cellspacing="0">
  <tr>
    <td class="titulofuncional" colspan="2"><%=label_01%>&nbsp;</td>
  </tr>
  <tr>
    <td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="Solicita necesidades de formaci&oacute;n" ></td>
    <td><div class="descripcionfuncional"><%=label_02%></div>
    <% if (zVis.equals("1")){%>
      <ul class="listaenlace"><li><a class="enlacefuncional" title="<%=label_13%>" tabindex="1" href="mss_g3_p6.jsp?estado=31"><%=label_13%></a></li></ul></td>
    <%}else{%>
      <ul class="listaenlace"><li><a class="enlacefuncional" title="<%=label_13%>" tabindex="1" href="mss_g3_p6.jsp?estado=31&empleado=<%=empleado%>&periodo=<%=periodo%>&nombre_empleado=<%=nombre_empleado%>&zVis=0"><%=label_13%></a></li></ul></td>
    <%}%>
  </tr>
</table>
<% 
if (zcounti == 0 ) { 
%>
<div class="fuentenodatos" align="center"><%=label_09%></div>
<%
}
if (zcounti != 0) { 
%>

  <table class="TablaEstados" cellspacing="0" width="100%">
  <tr>
    <td class="tablaestadosceldatitulo" >&nbsp;</td>
    <td class="tablaestadosceldatitulo" >&nbsp;<%=label_04%></td>
    <td class="tablaestadosceldatitulo" >&nbsp;<%=label_07%></td>
    <td class="tablaestadosceldatitulo">&nbsp;<%=label_05%></td>
    <!--<td class="tablaestadosceldatitulo">&nbsp;<%=label_06%></td>-->
    <td class="tablaestadosceldatitulo" align="right">
    <% if (zVis.equals("1")){%>
      <a href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31"><img alt="<%=label_13%>" src="/iconos/flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a>
    <%}%>
      </td>
  </tr>

<%String zDiasVIS="";

String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>
<m4:item m4varname="zIdTypeC" m4name="<%=zIDtipo%>"/>
<m4:item m4varname="zDiasP" m4name="<%=zdias%>"/>
<m4:item m4varname="zDiasM" m4name="<%=zdiasestimated%>"/>
<%if (zIdTypeC.equals("01")){zDiasVIS=zDiasP;}else{zDiasVIS=zDiasM;}%>
<m4:item m4varname ="infosubprod" m4name="<%=zinfosubprod%>" htmlsafe="true"/>
<tr>
  <td class="fuentevalor<%=zpos%>">
  <% if(infosubprod.equals("1")) { %>
      <a title="<%=label_10%>" href="javascript:view_message();"><img alt="<%=label_10%>" src="/iconos/advertencia_rojo.gif"/></a>
  <%}%>
  </td>
  <td class="fuentevalor<%=zpos%>">&nbsp;<a href="javascript:solicitar_curso('<m4:item m4name="<%=zidtrtb1%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zidcurso%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zinfosubprod%>" jsafe="true" htmlsafe="true"/>');" title="Detalle del curso"><m4:item m4name="<%=znmcursos%>" htmlsafe="true"/></a></td>
  <td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zNnmtipo%>" htmlsafe="true"/></td>
    <td class="fuentevalor<%=zpos%>">&nbsp;<%=zDiasVIS%></td>
    <!--<td class="fuentevalor<%=zpos%>">&nbsp;<m4:item m4name="<%=zproveedor%>" htmlsafe="true"/></td>-->
    <td class="fuentevalor<%=zpos%>">&nbsp;</td>
</tr>
 </m4:loop>
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_mod1.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="znombre" name="znombre"  />
<input type="hidden" id="zidtrtb" name="zidtrtb"  />
<input type="hidden" id="zntipo" name="zntipo" />
<input type="hidden" id="zncu" name="zncu"  />
<input type="hidden" id="zid" name="zid"   />
<input type="hidden" id="zinfosubp" name="zinfosubp"   />

<% if (zVis.equals("0")){%>
  <input type="hidden" id="empleado" name="empleado" value="<%=empleado%>"/>
  <input type="hidden" id="periodo" name="periodo" value="<%=periodo%>"/>
  <input type="hidden" id="nombre_empleado" name="nombre_empleado" value="<%=nombre_empleado%>"/>
  <input type="hidden" id="zVis" name="zVis" value="<%=zVis%>"/>
<%}%>

</form>       
<% }%>
<% if (zVis.equals("0")){%>
  <form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
    <input type="hidden" id="person" name="person" value="<%=empleado%>" />
    <input type="hidden" id="person_ord" name="person_ord" value="<%=periodo%>" />
    <%periodo = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", periodo);%>
    <input type="hidden" id="nombre_empleado" name="nombre_empleado" value="<%=nombre_empleado%>"/>
      <a title="<%=label_11%>" href="javascript:volver_prof();" tabindex="6"><img alt="<%=label_11%>" src="/iconos/icono_entrar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  </form>

<div id="cargando" name="cargando" class="invisible2"  style="position: relative; top: 0; left: 0">&nbsp;
<table  class ="cargando">
  <tr><td>&nbsp;<img src="/iconos/cargando.gif" alt='<%=Tran.getProperty("Button.Volver")%>' onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></td>
  <td>&nbsp;&nbsp;&nbsp;<%=Tran.getProperty("Button.Volver")%>&nbsp;&nbsp;</td></tr></table> 
</div>
<%}%>
<% if (zVis.equals("1")){%>
  <%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
</body>
<m4:endpage/>
</html>