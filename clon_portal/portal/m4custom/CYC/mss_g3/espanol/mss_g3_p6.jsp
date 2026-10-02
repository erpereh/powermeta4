<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>

<%
  String label_01 = "Solicita necesidades de formaci&oacute;n";
  String label_03 = "Filtro";
  String label_04 = "Tipos de formaci&oacute;n";
  String label_05 = "Producto";
  String label_06 = "P&aacute;gina del producto de formaci&oacute;n";
  String label_07 = "Consulta la formaci&oacute;n disponible en este momento en la empresa y selecciona los cursos en los que est&aacute;s interesado para tus empleados. Para m&aacute;s informaci&oacute;n sobre un curso sit&uacute;ate sobre el nombre del curso o del proveedor.";
  String label_08 = "Ver detalle";
  String label_09 = "Todos";
  String label_10 = "Solicita un curso que no aparezca en el cat&aacute;logo.";
  String label_11 = "Volver a Datos Profesionales del Empleado";
  String label_12 = "Plan de desarrollo";
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
<title><%=label_01%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/espanol/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_train_trans.jsp"%>    
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
  var path = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_info.jsp ";
  window.open(path,'Comment','width=100;height=50,resizable,scrollbars');
}
function volver_prof(){
  document.getElementById("cargando").className = ""
  m4submit("volver") ;
  }

</script>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>
<%
 
        String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
        String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
    String znmproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znmproducto");
    String zproducto = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zproducto");
  
      
    if ((estado==null)||(estado.equals(""))){estado="0";}
    if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
    if (zproducto==null || zproducto== ""){ zproducto = "All";znmproducto = "Todos";}
  %>
  <script type="text/javascript">
    function navegar (ord,fecha,idhr,oreval) {
      var parametros = new Array("estado","ord","fecha","idhr","oreval");
      var valores = new Array(35,ord,fecha,idhr,oreval);
      m4navegar("mss_g3/mss_g3_p5_mod.jsp",parametros,valores);
  }
</script>
</head>
<body>
<% if (zVis.equals("1")){%>
   <%@ include file="../../mss_generico/espanol/mssgenerico_menusup.jsp" %>
   <%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%}%>
<%
   String zsubsesion = "CSP_SSM_TRAINING_REQUEST";
   String zmeta4object = "CSP_SSM_TRAINING_REQUEST";  
   String znodo = "M4T_PRODUCTOS";
   String znodo1 = "M4T_PRODUCTOS_TIPO";
   String ztipocarga = "PR";
// Se parametriza el tamano que se desea para la ventana
   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "mss_g3/mss_g3_p6.jsp";
   String zestado = "33";   
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
   
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove1 = znodo1 + "[FIRST]";
   String zlectura1 = zsubsesion + "!" + znodo1;  
   String zraiz1 = zsubsesion + "!" + znodo1 + ".";
   String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
           
// Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String zmetodocarga2 = "CALCULA:" + zsubsesion + "!SSM_PRINCIPAL.OBTENER_CORREO";
 
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
 
   String zidproducto = zcomun + "SCO_ID_DEV_PRODUCT"; 
   String znproducto = zcomun + "SCO_NM_DEV_PRODUCT";        
   String zhttp = zcomun + "SCO_HTTP_PATH";     
   String zidtrtb2 = zcomun + "SCO_ID_TRTBREQ";
   String znmpt = zcomun + "SCO_NM_PRODUCT_TYPE";
   String zspecprod = zcomun + "SSE_SPEC_PROD";
      
   String zidproductotipo = zcomun1 + "SCO_ID_PRODUCT_TYPE";     
   String znmproductotipo = zcomun1 + "SCO_NM_PRODUCT_TYPE";  
   String zpos="";
   String correo;
 
%>

  <m4:startpage m4task="<%=zsubsesion%>"/>
  <m4:beginjob/>
  <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
  <% try {
    M4Operations m = new M4Operations(request);
    m.setItem(zsubsesion,znodo,"","SSE_PRODUCT_TYPE",zproducto);
    }
    catch(Exception e){}
  %>
  <m4:exec m4method="<%=zmetodocarga2%>"></m4:exec>
  <m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
  
  
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:outputexec m4alias="CALCULA" var="correo"/>


<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>


<%
  int  zcount  = 0;
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
  String  zcountv = String.valueOf(zcounti);
  String  zcount1v = String.valueOf(zcount1i);
%>
<%
  M4SessionCl zsesion22 = M4Context.getM4SessionCl(request);
  String zmailrrhh2 = zsesion22.getBagEntries("mailrrhh");
%>



  <table width="100%" cellspacing="0">
  <tr>
  <td class="titulofuncional" colspan="2"><%=label_01%></td>
  </tr>
  <tr>

    <td><img src="/iconos/noname_puesto_144_100.gif" width="99" height="100" alt="<%=label_01%>"></td>
    <td><div class="descripcionfuncional"><%=label_07%></div>
    <% if (zVis.equals("1")){%>
      <ul class="listaenlace">
        <li><a class="enlacefuncional" title="<%=label_10%>" href="mailto:<%=correo%>?Subject=Solicitud%20de%20un%20curso.&Body=Introduzca%20la%20informaci%F3n%20del%20curso%3A"><%=label_10%></a></li>
        <!--<li><a  class="enlacefuncional" title ="<%=label_12%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_filter.jsp"><%=label_12%></a></li>-->
        </ul>
    <%}%>
    </td>
  </tr>
  </table>
  <table class="tablaestados" cellspacing="0" width="100%">
  <tr class="tablaestadosceldatitulo">
    <td colspan="2">&nbsp;<%=label_03%></td>
  </tr>
  <tr>
    <td class="fuentecampofiltro">&nbsp;<%=label_04%></td>
    <form id="formselect" name="formselect" action="">
    <td class="fuentecampofiltro">
      <select name="filtro" id="filtro" class="fuenteapartados" onchange="javascript:Filtrar()" align ="center">

        <option value="All"><%=label_09%></option>
        <m4:loop from="0" to="<%=new Integer(new Integer(zcount1v).intValue()-1).toString()%>">
        <option value="<m4:item m4name="<%=zidproductotipo%>" htmlsafe="true"/>"><m4:item m4name="<%=znmproductotipo%>" htmlsafe="true"/></option>
        </m4:loop>
      </select>
    </td>
            <script type="text/javascript" language="Javascript1.5">
         if ('<%=zproducto%>'!= "All"){
           m4searchoptioness('formselect','filtro','<%=zproducto%>');
         }
         </script>  
  </form>
  </tr>
  </table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zproducto" name="zproducto"  value="<%=zproducto%>" />
<input type="hidden" id="znmproducto" name="znmproducto"  value="<%=znmproducto%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
<% if (zVis.equals("0")){%>
  <input type="hidden" id="empleado" name="empleado" value="<%=empleado%>"/>
  <input type="hidden" id="periodo" name="periodo" value="<%=periodo%>"/>
  <input type="hidden" id="nombre_empleado" name="nombre_empleado" value="<%=nombre_empleado%>"/>
  <input type="hidden" id="zVis" name="zVis" value="<%=zVis%>"/>
<%}%>

</form> 
<% 
if (zcounti > 0) {
%>
  <table class="tablaestados" cellspacing="0" width="100%">
  <tr class="tablaestadosceldatitulo">
    <td class="tablaestadosceldatitulo">&nbsp;</td>
    <td class="tablaestadosceldatitulo">&nbsp;<%=label_05%></td>
    <td class="tablaestadosceldatitulo">&nbsp;<%=label_06%></td>
  </tr>
<%
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";  int zcontrol = 0; int zposicion =0;%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;zpos="";if (zcontrol==0){zpos="2";}%>

<m4:item m4varname ="zinfoprod" m4name="<%=zspecprod%>" htmlsafe="true"/>
 <tr>
  <td class="fuentevalor<%=zpos%>">
  <% if(zinfoprod.equals("1")) { %>
     <a title="<%=label_08%>" href="javascript:view_message();"><img alt="<%=label_08%>" src="/iconos/advertencia_rojo.gif"/></a>
  <%}%>
  </td>
  <td class="fuentevalor<%=zpos%>">&nbsp;<a title="<%=label_08%>" href="javascript:CursosMultimedias('<m4:item m4name="<%=zidproducto%>" jsafe="true" htmlsafe="true"/>');" ><m4:item m4name="<%=znproducto%>" htmlsafe="true"/></td>
    <td class="fuentevalor<%=zpos%>">&nbsp;<a title="<%=label_08%>" href="<m4:item m4name="<%=zhttp%>" htmlsafe="true"/>"><m4:item m4name="<%=zhttp%>" htmlsafe="true"/></td>
</tr>
</m4:loop>  
</table>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc.jsp?estado=31" method="post" name="oculto2" id="oculto2">
<input type="hidden" id="zidproducto" name="zidproducto"/>
<input type="hidden" id="znproducto" name="znproducto"/>
<input type="hidden" id="znmpt" name="znmpt"/>
<% if (zVis.equals("0")){%>
  <input type="hidden" id="empleado" name="empleado" value="<%=empleado%>"/>
  <input type="hidden" id="periodo" name="periodo" value="<%=periodo%>"/>
  <input type="hidden" id="nombre_empleado" name="nombre_empleado" value="<%=nombre_empleado%>"/>
  <input type="hidden" id="zVis" name="zVis" value="<%=zVis%>"/>
<%}%>
</form> 
<%@include file="../../sse_generico/espanol/generico_ventanas_post.jsp"%> 
<%
} else {%>    <br /><br /> <%}%>  

<% if (zVis.equals("0")){%>
  <form action="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info.jsp" method="post" name="volver" id="volver">
    <input type="hidden" id="person" name="person" value="<%=empleado%>" />
    <input type="hidden" id="person_ord" name="person_ord" value="<%=periodo%>" />
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
  <%@ include file="../../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
</body>
<m4:endpage/>
</html>


  