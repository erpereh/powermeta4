<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title>Academic Background</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>  
<script type="text/javascript">
  var vOpcionActiva;
  function eliminar(v){
    var p = new Array('id_enl1');
    var v = new Array(v);
    m4navegar('mss_g3/mss_g3_eliminar_wiz4.jsp',p,v);
  }
  function navegar(_valor,_url){
  var parametros = new Array("estado","OpcAct","ztipopersist");
      var valores = new Array("31",_valor,"wizx");
      m4navegar(_url, parametros, valores);
  }

  function loadSpecial()
  {
      var sValue = m4select("STD_ID_EDU_TYPE","NombreFormulario","value");
      var sText = m4select("STD_ID_EDU_TYPE","NombreFormulario","text");
      if ((null==sValue) || (''==sValue)) return;   
      var URL="mss_g3/mss_g3_p1_wiz4.jsp";
      var parametros = new Array("NameEduType","ValueEduType","OpcAct","ztipopersist");
      var valores = new Array(sText,sValue,"4","wizx");
      m4navegar(URL, parametros, valores);    
  }

  function comprobar(_valor,_url){
    var ztipopersist="wiz4";
    var vRequerido="0";    
    var mensaje = "The following errors were found: " + "\n"
    var falta_valor=0;
    var scocheck = m4objeto("SCO_CHECK","NombreFormulario");
    var val_edutype = m4select(m4objeto("STD_ID_EDU_TYPE","NombreFormulario"),"value");
    if ((null==val_edutype) || (''==val_edutype)){
    
      mensaje+=" * Education Type, required field" + "\n";
      falta_valor=1;
    }
    if (scocheck.checked){
      vRequerido="1"  
    }
    if (falta_valor==1){
     alert (mensaje);
     falta_valor=0;
     return;
     }
    if (0==falta_valor){
      var vOpcionActiva;
      var URL;
      vOpcionActiva=_valor;
      URL=_url;
      var vTitulacion= m4select(m4objeto("STD_ID_DIPLOMA","NombreFormulario"),"value");
      var vEspecialidad= m4select(m4objeto("STD_ID_EDU_SP","NombreFormulario"),"value");
      var vTipoEstudios=m4select(m4objeto("STD_ID_EDU_TYPE","NombreFormulario"),"value");
      var parametros = new Array("estado","Titulacion","Especialidad","TipoEst","Req","OpcAct","ztipopersist");
      var valores = new Array("31",vTitulacion,vEspecialidad,vTipoEstudios,vRequerido,vOpcionActiva,ztipopersist);
      m4navegar(URL, parametros, valores);
    }
  }
</script>
<%
  
  // status:  Determine the location bar. --> 

  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
  if ((estado==null)||(estado.equals(""))){
    estado="0";
  }
  if ((zinicios==null)||(zinicios.equals(""))){
    zinicios = "1";
  }

  String sNameEduType=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NameEduType");
  if ((sNameEduType==null)||(sNameEduType.equals(""))) sNameEduType=" ";
  
  String sValueEduType=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ValueEduType");
  if ((sValueEduType==null)||(sValueEduType.equals(""))) sValueEduType=" ";
  
  // Determine the active source of the wizard

  int OpcionActiva=4;
%>
</head>
<body>
<div id="capa_link" style="position:absolute; left:1%; top:3%; width:20%; height:0%; z-index:1">
  <%@ include file="../../mss_g3/english/mss_g3_links_wizzard.jsp" %>
</div>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<div id="capa_cuerpo" style="position:relative; left:21%; top:1%; width:78%; z-index:2">
<%
  String zsubsesion = "SSM_VACANT";
  String zmeta4object = "SSM_VACANT";
  String znodo1 = "SSM_LU_EDU_DIPLOMA";
  String znodo2 = "SSM_LU_EDU_DIP_LEVEL";
  String znodo3 = "SSM_LU_EDU_SPECIALITY";
  String znodo4 = "SSM_LU_EDU_TYPE";                
  String znodo5 = "SSM_JOB_POST_ACAD_BACKGROUND";
  String ztipocarga = "wiz4";   

  // Parametrise the desired window size.

  String zventanas = "10";
  int zvuelta = 5;

  // Normally not modified.

  String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
  String zlectura1 = zsubsesion + "!" + znodo1;
  String zraiz1 = zsubsesion + "!" + znodo1 + ".";
  String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
  String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;
  
  String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
  String zlectura2 = zsubsesion + "!" + znodo2;
  String zraiz2 = zsubsesion + "!" + znodo2 + ".";
  String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";   
  String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
  
  String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
  String zlectura3 = zsubsesion + "!" + znodo3;
  String zraiz3 = zsubsesion + "!" + znodo3 + ".";
  String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
  String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
  
  String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
  String zlectura4 = zsubsesion + "!" + znodo4;
  String zraiz4 = zsubsesion + "!" + znodo4 + ".";
  String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
  String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;
  
  String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
  String zlectura5 = zsubsesion + "!" + znodo5;
  String zraiz5a = zsubsesion + "!" + znodo5 + ".";
  String zraiz5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
  String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
  String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;

  // Generic Meta4Object load method

  String zmetodocarga = "CARGA:" + zsubsesion + "!SSM_VACANT.CARGA";
  String zmetodopersist = "GRABAR:" + zsubsesion + "!SSM_VACANT.GRABAR";
   
   // Items to be loaded. You must add all of the ones that you want to view.

  String zSTDIDDIPLOMA = zraiz1 + "STD_ID_DIPLOMA";
  String zSTDNDIPLOMA = zraiz1 + "STD_N_DIPLOMA";
    
  String zSTDIDDIPLEVEL = zraiz2 + "STD_ID_DIP_LEVEL";
  String zSTDNDIPLEVEL = zraiz2 + "STD_N_DIP_LEVEL";
    
  String zSTDIDEDUSP = zraiz3 + "STD_ID_EDU_SP";
  String zSTDNEDUSP = zraiz3 + "STD_N_EDU_SP";
    
  String zSTDIDEDUTYPE = zraiz4 + "STD_ID_EDU_TYPE";
  String zSTDNEDUTYPE = zraiz4 + "STD_N_EDU_TYPE";
  
  String zREQUERIDO = zraiz5 + "REQUERIDO";
  String zTITULACION = zraiz5 + "TITULACION";
  String zESPECIALIDAD = zraiz5 + "ESPECIALIDAD";
  String zTIPOFORMACION = zraiz5 + "TIPO_FORMACION";
  String zSTDORACADBACK = zraiz5 + "STD_OR_ACAD_BACK";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%@ include file="../../mss_g3/english/persist.jsp" %>
<%
  String sFilterSpecial = "If 0 = 0 Then Return(1)";
%>
<m4:filter m4name="SSM_VACANT!SSM_LU_EDU_SPECIALITY.FilterSpecial" m4filter="<%=sFilterSpecial%>"/>
<m4:exec m4method="<%=zmetodopersist%>"><m4:param name="TIPO_GRABAR" value="<%=ztipopersist%>"/></m4:exec>  
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>

<%
  sFilterSpecial = "If STD_ID_EDU_TYPE=\"" + sValueEduType + "\" Then Return(1)";
%>
<m4:filter m4name="SSM_VACANT!SSM_LU_EDU_SPECIALITY.FilterSpecial" m4filter="<%=sFilterSpecial%>"/>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>

<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>
<%
  int  zcount5 = 0;
  int  zcounti5 = 0;  
  try {
    M4Operations m = new M4Operations(request);
    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
  } catch(Exception e) {}
  try {
    M4Operations m = new M4Operations(request);
    zcounti5 = m.getCountInClient(znodo5,zsubsesion,znodo5);
  } catch(Exception e) {}
  String  zcountv5 = String.valueOf(zcounti5);
%>
<table width="100%">
<tr>
  <td class="titulofuncional" colspan="4">Academic Background</td>
  <td>&nbsp;</td>
</tr>
<tr>
    <td><img alt="Request a Vacancy" src="/iconos/noname_solicitar_vacantes_210_100.gif" width="100" height="100" /></td>
  <td>&nbsp;</td>
  <td><div class="descripcionfuncional">Add the academic background required for this vacancy. Make sure that you add the information upon completing the form.</div></td>
</tr>
</table>
<form action="javascript:comprobar()" method="get" name="NombreFormulario" id="NombreFormulario">
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo" colspan="3">&nbsp;Academic Background</td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;Qualification</td>
  <td class="fuentecampo" colspan="4">
    <select id="STD_ID_EDU_TYPE" name="STD_ID_EDU_TYPE" title="Select Qualification" class="fuenteformulario200" onchange="javascript:loadSpecial()">
      <option value="<%=sValueEduType%>"><%=sNameEduType%></option>
      <m4:iterator m4rows="*" m4node="<%=ziterator4%>">
      <m4:param name="m4item0" value="<%=zSTDIDEDUTYPE%>"/>
      <m4:param name="m4item1" value="<%=zSTDNEDUTYPE%>"/>
      <option value="$M4ITEM0$">$M4ITEM1$</option>
      </m4:iterator>
      </select>
  </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;Subject</td>
  <td class="fuentevalor" colspan="3" >
    <select id="STD_ID_EDU_SP" name="STD_ID_EDU_SP" title="Select Subject" class="fuenteformulario200" >
      <option value=""></option>
      <m4:iterator m4rows="*" m4node="<%=ziterator3%>">
      <m4:param name="m4item0" value="<%=zSTDIDEDUSP%>"/>
      <m4:param name="m4item1" value="<%=zSTDNEDUSP%>"/>
      <option value="$M4ITEM0$">$M4ITEM1$</option>
      </m4:iterator>
      </select>
  </td>
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;Eductation Type</td>
  <td class="fuentecampo">
    <select id="STD_ID_DIPLOMA" class="fuenteformulario200" name="STD_ID_DIPLOMA" title="Select Education Type">
      <option value=""></option>
      <m4:iterator m4rows="*" m4node="<%=ziterator1%>">
      <m4:param name="m4item0" value="<%=zSTDIDDIPLOMA%>"/>
      <m4:param name="m4item1" value="<%=zSTDNDIPLOMA%>"/>
      <option value="$M4ITEM0$">$M4ITEM1$</option>
      </m4:iterator>  
      </select>
  </td>
  <td class="fuentecampo">
  <input id="SCO_CHECK" type="checkbox" name="SCO_CHECK"  />&nbsp;Required
  </td>
</tr>
<tr>
  <td class="fuenteboton" align="center" colspan="4">
    <a href="javascript:navegar(3,'mss_g3/mss_g3_p1_wiz3.jsp');" ><img alt="Previous" title="Previous" src="/iconos/icono_anterior_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
    <a href="javascript:comprobar(4,'mss_g3/mss_g3_p1_wiz4.jsp');" ><img alt="Add Academic Background to Vacancy" title="Add Academic Background to Vacancy" src="/iconos/icono_aceptar_mss_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>
    <a href="javascript:navegar(5,'mss_g3/mss_g3_p1_wiz5.jsp');" ><img alt="Next" title="Next" src="/iconos/icono_siguiente_36_36.gif" width="36" height="36" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a>     
  </td>
</tr>
</table>
<%   
if (zcount5 > 0) {
%>
<table class="tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;Qualification</td>
  <td class="tablaestadosceldatitulo">&nbsp;Subject</td>
  <td class="tablaestadosceldatitulo">&nbsp;Education Type</td>
  <td class="tablaestadosceldatitulo" colspan="2">&nbsp;Required</td>
</tr> 

<%
  String zposicions = "0";
  int zcontrol = 0;
  int zposicion =0;
%>

<m4:loop from="0" to="<%=new Integer(new Integer(zcounti5).intValue()-1).toString()%>">
<%  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;

if (zcontrol==0){%>
<tr>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zTIPOFORMACION%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zESPECIALIDAD%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zTITULACION%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
  <td class="fuentevalor"><a href="javascript:eliminar('<m4:item m4name="<%=zSTDORACADBACK%>" jsafe="true" htmlsafe="true"/>')"><img align="right" title="Delete Record" alt="Delete Academic Background from Vacancy" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<% } else { %>
<tr>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zTIPOFORMACION%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zESPECIALIDAD%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zTITULACION%>" htmlsafe="true"/></td>
  <td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zREQUERIDO%>" htmlsafe="true"/></td>
  <td class="fuentevalor2"><a href="javascript:eliminar('<m4:item m4name="<%=zSTDORACADBACK%>" jsafe="true" htmlsafe="true"/>')"><img align="right" title="Delete Record" alt="Delete Academic Background from Vacancy" border="0" src="/iconos/icono_borrar_16_16.gif" height="16" width="16" onmouseover="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
 <%}%>
</m4:loop>
</table>
<%
}
%>
</form>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>