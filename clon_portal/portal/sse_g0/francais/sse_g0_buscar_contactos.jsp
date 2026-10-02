<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Qui est qui&nbsp;?</title>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<%     
    String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  String zfiltro = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro");
  String zfiltro2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro2");
  String zfiltro3 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro3");
  String WUn = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"WUt");
  if ((zfiltro2==null||zfiltro2.equals(""))  &&  (zfiltro3==null||zfiltro3.equals("")) &&  (zfiltro==null||zfiltro.equals("")) ) {zfiltro2 = "A";}
  if ((zfiltro==null)||(zfiltro.equals(""))){zfiltro = "ALL";}  
  if ((zfiltro3==null)||(zfiltro3.equals(""))){zfiltro3 = "ALL";}
  if ((WUn==null)||(WUn.equals(""))){WUn = "Toutes";}
%>  
</head>
<body>
<%@include file="../../sse_generico/francais/generico_menusup.jsp"%>
<%@include file="../../sse_generico/francais/generico_links.jsp"%>
<%

   String zsubsesion = "SSE_INVENTARIO";
   String zmeta4object = "SSE_INVENTARIO";
   String zmetodocarga = zsubsesion + "!SSE_INVENTARIO.CARGA";
   String znodo = "SSE_INVENTARIO";
   String znodo2 = "SSE_WORK_UNIT";
   String ztipocarga = "BUS";

// Se parametriza el tamano que se desea para la ventana

   String zventanas = "50";
   int zvuelta = 5;
   String zdireccion = "sse_g0/sse_g0_buscar_contactos.jsp";
   String zestado = "1";


// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   
   String zSTDNFAMILYNAME1 = zcomun + "STD_N_FAMILY_NAME_1";
   String zSTDNFIRSTNAME = zcomun + "STD_N_FIRST_NAME";
   String zSTDIDPERSON = zcomun + "STD_ID_PERSON";
   String zSTDEMAIL = zcomun + "STD_EMAIL";
   String zSTDNWORKUNIT = zcomun + "STD_N_WORK_UNIT";
   String zSTDPHONE = zcomun + "STD_PHONE";
   String zSTDGBPHONE = zcomun + "STD_GB_PHONE";
   
   String zSTDNWORKUNIT2 = zcomun2 + "STD_N_WORK_UNIT";
   String zSTDIDWORKUNIT2 = zcomun2 + "STD_ID_WORK_UNIT";
   String zSCOGBNAME = zcomun + "SCO_GB_NAME";
   
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%
try {
  M4Operations m = new M4Operations(request);
  m.setItem(zsubsesion,znodo,"","STD_N_FIRST_NAME_PAR",zfiltro);
  m.setItem(zsubsesion,znodo,"","STD_N_FAMILY_NAME_1_PAR",zfiltro2);
  m.setItem(zsubsesion,znodo,"","STD_ID_WORK_UNIT_PAR",zfiltro3);
  m.setItem(zsubsesion,znodo,"","VENTANA_PAR",zventanas);
  m.setItem(zsubsesion,znodo,"","INICIO_PAR",zinicios);
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/><m4:param name="ARG_PATH_TEMP" value=""/></m4:exec>  
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
    int zcount = 0;
    int  zcounti  = 0;
    
    int  zcount2  = 0;
    int  zcounti2  = 0;
        
    
    try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
      zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
      zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);            
    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);
    String  zcountv2 = String.valueOf(zcounti2);
    
%>
<script type="text/javascript">
function filtrar(){
var nombre = m4valor("Filtro","Nombre","","get");
var apellido = m4valor("Filtro","Apellido","","get");

//nombre = nombre.toUpperCase();
//apellido = apellido.toUpperCase();

var WUvalue = m4select(m4objeto("WU","Filtro"),"value");
var WUtext = m4select(m4objeto("WU","Filtro"),"text");
var parametros = new Array("estado","zfiltro","zfiltro2","zfiltro3","WUt");
var valores = new Array(<%=zestado%>,nombre,apellido,WUvalue,WUtext);
m4navegar("sse_g0/sse_g0_buscar_contactos.jsp",parametros,valores);
}
</script>
<table width="100%">
<tr><td class="titulofuncional" colspan="2">Qui est qui&nbsp;?</td></tr>
<tr><td class="descripcionfuncional">Recherchez des collaborateurs par leur pr&eacute;nom, nom et&nbsp;/ ou unit&eacute; de travail.</td></tr>
<tr><td>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" title="Vos contacts" tabindex="1" href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp">Vos contacts</a></li>
  </ul>
</td></tr>
</table>
<form id="Filtro" name="Filtro">
<table class="tablaestados" cellspacing="0" width="100%">
<tr><td class="tablaestadosceldatitulo" colspan="5">&nbsp;Filtre</td></tr>
<tr class="fuentevalor">
  <td colspan="5"><a href="javascript:m4valor('Filtro','Apellido','A','set');filtrar();" title="Filtrer">A</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','B','set');filtrar();" title="Filtrer">B</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','C','set');filtrar();" title="Filtrer">C</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','D','set');filtrar();" title="Filtrer">D</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','E','set');filtrar();" title="Filtrer">E</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','F','set');filtrar();" title="Filtrer">F</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','G','set');filtrar();" title="Filtrer">G</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','H','set');filtrar();" title="Filtrer">H</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','I','set');filtrar();" title="Filtrer">I</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','J','set');filtrar();" title="Filtrer">J</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','K','set');filtrar();" title="Filtrer">K</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','L','set');filtrar();" title="Filtrer">L</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','LL','set');filtrar();" title="Filtrer">LL</a>    
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','M','set');filtrar();" title="Filtrer">M</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','N','set');filtrar();" title="Filtrer">N</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','Ñ','set');filtrar();" title="Filtrer">Ñ</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','O','set');filtrar();" title="Filtrer">O</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','P','set');filtrar();" title="Filtrer">P</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','Q','set');filtrar();" title="Filtrer">Q</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','R','set');filtrar();" title="Filtrer">R</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','S','set');filtrar();" title="Filtrer">S</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','T','set');filtrar();" title="Filtrer">T</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','U','set');filtrar();" title="Filtrer">U</a>  
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','V','set');filtrar();" title="Filtrer">V</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','W','set');filtrar();" title="Filtrer">W</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','X','set');filtrar();" title="Filtrer">X</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','Y','set');filtrar();" title="Filtrer">Y</a>
  &nbsp;<a href="javascript:m4valor('Filtro','Apellido','Z','set');filtrar();" title="Filtrer">Z</a>
</tr>
<tr>
<%
  if ((zfiltro=="ALL")){
     zfiltro = "";
  }
  if ((zfiltro2=="ALL")){
     zfiltro2 = "";
  } 
  if ((zfiltro3=="ALL")){
     zfiltro3 = "";
  } 
%>
  <td class="fuentevalor" colspan="2" nowrap>&nbsp;Pr&eacute;nom&nbsp;<input title="&Eacute;crivez le pr&eacute;nom de la personne recherch&eacute;e" type="text" id="Nombre" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro)%>" />
  &nbsp;&nbsp;Nom&nbsp;<input title="&Eacute;crivez le nom de la personne recherch&eacute;e" type="text" id="Apellido" class="fuenteformulario" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfiltro2)%>" />
  &nbsp;
  &nbsp;Unit&eacute; de travail&nbsp;
  <select id="WU" class="fuenteformulario150" name="WU" title="S&eacute;lectionnez une unit&eacute; de travail" >
  
  <option value="ALL">Toutes</option>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zSTDIDWORKUNIT2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTDNWORKUNIT2%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  &nbsp;&nbsp;</td>
  <script type="text/javascript" language="Javascript1.5"><!--
   m4searchoptioness("Filtro","WU","<%=zfiltro3%>");
--></script>


</tr>
<tr><td class="fuentevalor">
  <td class="fuentevalor">&nbsp;&nbsp;<a href="javascript:filtrar();" title="Filtrer"><img alt="Filtrer" src="/iconos/icono_filtrar_36_36.gif" height="36" width="36" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</td></tr>
</table>
</form>
<% 
if (zcount > 0) {
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
  <td>&nbsp;Nom</td>
  <td>&nbsp;D&eacute;partement</td>
  <td>&nbsp;T&eacute;l&eacute;phone</td>
  <td colspan="2">&nbsp;Adresse &eacute;lectronique</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr class="fuentevalor">
  <td>&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_detalle_empleado.jsp?estado=02&REC=<m4:item m4name="<%=zSTDIDPERSON%>" htmlsafe="true"/>" title="C.V. du collaborateur"><m4:item m4name="<%=zSCOGBNAME%>" htmlsafe="true"/></a></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDGBPHONE%>" htmlsafe="true"/></td>
  <td><a href="mailto:<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/>" title="Envoyer un courriel">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></a></td>
  <td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_g0_p1_insertar.jsp?zIdPerson=<%=zIdPerson%>&REC=<m4:item m4name="<%=zSTDIDPERSON%>" htmlsafe="true"/>" title="Ajouter &agrave; vos contacts"><img align="right" alt="Ajouter à votre liste personnelle" src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /></a></td>
</tr>
<%}else{%>
<tr class="fuentevalor2">
  <td>&nbsp;<a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_detalle_empleado.jsp?estado=02&REC=<m4:item m4name="<%=zSTDIDPERSON%>" htmlsafe="true"/>" title="C.V. du collaborateur"><m4:item m4name="<%=zSCOGBNAME%>" htmlsafe="true"/></a></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe="true"/></td>
  <td>&nbsp;<m4:item m4name="<%=zSTDGBPHONE%>" htmlsafe="true"/></td>
  <td><a href="mailto:<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/>" title="Envoyer un courriel">&nbsp;<m4:item m4name="<%=zSTDEMAIL%>" htmlsafe="true"/></a></td>
  <td><a href="/servlet/CheckSecurity/JSP/sse_g0/sse_g0_actualizar_g0_p1_insertar.jsp?zIdPerson=<%=zIdPerson%>&REC=<m4:item m4name="<%=zSTDIDPERSON%>" htmlsafe="true"/>" title="Ajouter &agrave; vos contacts"><img align="right" alt="Ajouter à votre liste personnelle" src="/iconos/icono_seleccionar_11_12.gif" height="11" width="12" /></a></td>
</tr>
<%}%>
</m4:loop>
</table>
<table class = "tablanavegacion" border="1" width="100%" cellspacing="0">
<tr>
<%
  int zintervalo = zcount/zventana;
  int zresto = zcount%zventana;
  int zcontador = 0;
  int zsalto = 0;
  if (zresto > 0) {zintervalo = zintervalo + 1;}
    // Asi como la iteracion de construccion del contenido de la tabla de intervalos.
    // Dentro de la tabla, hay que hacer referencia a la propia pagina
    // anadiendo obligatoriamente el parametro zinicios!!!

  for (zcontador=0; zcontador < zintervalo; zcontador++) {
    String  ziniciointervalo = String.valueOf(1 + zcontador*zventana);
    int zfinintervalo2 = zcontador*zventana + zventana;
    String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
      if (zfinintervalo2 > zcount) {
      zfinintervalo = String.valueOf(zcontador*zventana + zresto);
    }
          
    // Cada n vueltas saltamos de fila:
    if(zsalto == zvuelta){
%>
</tr><tr>
<%
      zsalto = 0;
    }
    if (zinicios.equals(ziniciointervalo) == true){
%>
<td class="fuentebarraregistrosanulado"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></td>
<%      
    }
    else{
%>
<td class="fuentebarraregistros"><a href="javascript:javascript:var parametros = new Array('zinicios','estado','zfiltro','zfiltro2','zfiltro3','WUt');var valores = new Array('<%=ziniciointervalo%>','<%=zestado%>',m4valor('Filtro','Nombre','','get'),m4valor('Filtro','Apellido','','get'),m4select(m4objeto('WU','Filtro'),'value'),m4select(m4objeto('WU','Filtro'),'text'));m4navegar('<%=zdireccion%>',parametros,valores);"  title="Afficher les autres donn&eacute;es"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></a></td>
<%
    }
    zsalto = zsalto + 1;
  }
%>
</tr>
</table>
<%}else{%>
<div class="fuentenodatos">Le filtre indiqu&eacute; n'a donn&eacute; aucun r&eacute;sultat.</div>
<%}%>
<%@include file="../../sse_generico/francais/generico_disclaimer.jsp"%>
</div>
</body>
<m4:endpage/>


