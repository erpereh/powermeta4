<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>

<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%@ include file="../../sse_generico/english/menu_ess.jsp" %> 
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<% String zTitle = TranEss.getProperty("ev_ess.TitValObj"); 
  String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
  String zpathVerComentario = "/sse_g3/espanol/ssco_viewcomment.jsp?comment=";
  String ViewComment = Tran.getProperty("Button.ViewComment");%>
<title> <%=zTitle%> </title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />

<script type="text/javaScript">

function comprobar(){
var error = 0;
var sMessage = new String(eval("_gen_error_msg"));
var comentario = m4valor("nombreformulario","SCO_EMPLOYEE_COMM","","get");
if ((comentario == null)|| (comentario=="") ){  comentario="  ";}
var a=comentario.length;
if (a > 256)
{
  error = 1;
    sMessage = sMessage + "\n" + m4getmessage("_sl_co_ess_ev_1",dtStartRol);
  comentario=comentario.substr(0,255);
  m4valor("nombreformulario","SCO_EMPLOYEE_COMM",comentario,"set");

} 

if (error == 1)
 {   
  alert(sMessage);
 }
else
 {   
  m4submit("nombreformulario");
 }

}
</script>

</head>

<body>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zposicion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zposicion");  
String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
  
%>

<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
    String zAyuda="/iconos/info_12.gif";   
  String Ver = Tran.getProperty("Label.Ver");

  String zsubsesion = "SSM_EV_ROL_LV_OBJ";
  String zmeta4object = "SSM_EV_ROL_LV_OBJ";
  String znodo = "SSE_EV_ROL_LV_OBJ";
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zraiz = zsubsesion + "!" + znodo + ".";

  String ztipocarga = "EVA";   
  String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
  String zmetodo = "CARGA:" + zraiz + "SSE_MOSTRAR" ;   

  String lblSCO_NM_OBJECTIVE = zraiz + "SCO_NM_OBJECTIVE" ;
  String lblSCO_NM_LEVEL = zraiz + "SCO_NM_LEVEL";
    String lblSCO_NM_MAGNITUDE = zraiz + "SCO_NM_MAGNITUDE";
  String lblSCO_SCHED_VALUE = zraiz + "SCO_SCHED_VALUE";
    String lblSCO_WEIGHT = zraiz + "SCO_WEIGHT";
    String lblSCO_COMMENT = zraiz + "SCO_COMMENT";  


  String zSCO_ID_OBJECTIVE = "";
    String zSCO_NM_OBJECTIVE = "";
    String zSCO_N_OBJECTIVE = ""; 
  String zSCO_ID_LEVEL = "";
  String zSCO_NM_LEVEL = "";
  String zSCO_N_LEVEL = ""; 
  String zSCO_ID_MAGNITUD = "";
    String zSCO_NM_MAGNITUDE = "";
    String zSCO_N_MAGNITUDE = ""; 
  String zSCO_SCHED_VALUE = "";
    String zSCO_WEIGHT = "";
    String zSCO_N_WEIGHT = "";      
  String zSCO_N_SCHED_VALUE = "";   
    String zSCO_DT_START = "";  
    String lblSCO_DT_START = "";  
    String zSCO_DT_END = "";    
    String lblSCO_DT_END = "";    
    String zSCO_NAME = "";    
    String zSCO_N_NAME = "";  
  String zSCO_DESCRIPTION = "";   
  String zSCO_COMMENT = ""; 

%>


<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec m4method="<%=zmetodo%>"><m4:param name="CONT" value="<%=zordinal%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<%
int dPeso = 0;
int dValor = 0;
String dd = "";
String mm = "";
String yyyy = "";

try { 
  M4Operations m = new M4Operations(request);
  m.moveData(znodo,zmeta4object,znodo,zposicion);
  zSCO_ID_OBJECTIVE = m.getItem(znodo,zmeta4object,znodo,"","SCO_ID_OBJECTIVE"); 
  zSCO_NM_OBJECTIVE = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_OBJECTIVE"); 
  
    zSCO_NAME = m.getItem(znodo,zmeta4object,znodo,"","SCO_NAME"); 
    zSCO_N_NAME = m.getLabel(znodo,zmeta4object,znodo,"SCO_NAME"); 
    zSCO_DESCRIPTION = m.getItem(znodo,zmeta4object,znodo,"","SCO_DESCRIPTION"); 
  
  zSCO_N_OBJECTIVE = m.getLabel(znodo,zmeta4object,znodo,"SCO_NM_OBJECTIVE"); 
  zSCO_ID_LEVEL = m.getItem(znodo,zmeta4object,znodo,"","SCO_ID_LEVEL");  
  zSCO_NM_LEVEL = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_LEVEL"); 
  zSCO_N_LEVEL = m.getLabel(znodo,zmeta4object,znodo,"SCO_NM_LEVEL");   
    zSCO_ID_MAGNITUD = m.getItem(znodo,zmeta4object,znodo,"","SCO_ID_MAGNITUD");  
    zSCO_NM_MAGNITUDE = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_MAGNITUDE"); 
    zSCO_N_MAGNITUDE = m.getLabel(znodo,zmeta4object,znodo,"SCO_NM_MAGNITUDE");   
  zSCO_SCHED_VALUE = m.getItem(znodo,zmeta4object,znodo,"","SCO_SCHED_VALUE");  
  zSCO_N_SCHED_VALUE = m.getLabel(znodo,zmeta4object,znodo,"SCO_SCHED_VALUE");  
    zSCO_WEIGHT = m.getItem(znodo,zmeta4object,znodo,"","SCO_WEIGHT"); 
    zSCO_N_WEIGHT = m.getLabel(znodo,zmeta4object,znodo,"SCO_WEIGHT");  
    lblSCO_DT_START = m.getLabel(znodo,zmeta4object,znodo,"SCO_DT_START");    
    lblSCO_DT_END = m.getLabel(znodo,zmeta4object,znodo,"SCO_DT_END"); 

  zSCO_COMMENT = m.getItem(znodo,zmeta4object,znodo,"","SCO_COMMENT");   
  lblSCO_COMMENT = m.getLabel(znodo,zmeta4object,znodo,"SCO_COMMENT");
%>
  <m4:item item="SCO_DT_START" var="zSCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>
  <m4:item item="SCO_DT_END" var="zSCO_DT_END" htmlsafe="true" outputdef="<%=znodo%>"/>
    
  <%
  

} catch(Exception e) {}

dPeso = Double.valueOf(zSCO_WEIGHT).intValue();
if (zSCO_ID_MAGNITUD.equals("")==false){
  dValor = Double.valueOf(zSCO_SCHED_VALUE).intValue();
}
%>

<table width="100%" border="0">
<tr><td class="titulofuncional" colspan="2"><%=zTitle%></td></tr>
<tr>
  <td><a title="<%=zTitle%>"><img alt="<%=zTitle%>" src="/iconos/noname_resultados_evaluacion_ess_100_100.gif" width="100" height="100" /></a></td>
  <td>
  <div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrValObj")%></div>
  <ul class="listaenlace">
  <li><a class="enlacefuncional" title ="<%=zTitle%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31"><%=zTitle%></a></li>
  </ul>
  </td>
</tr>
</table>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="id_cono" name="id_cono"  value="" />
<input type="hidden" id="num_obj" name="num_obj"  value="" />
<input type="hidden" id="id_obj" name="id_obj"  value="" />
<input type="hidden" id="id_mag" name="id_mag"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17_act.jsp" method="post" name="nombreformulario" id="nombreformulario">
<input type="hidden" id="ordinal" name="ordinal"  value="<%=zordinal%>" />
<input type="hidden" id="SCO_COMMENT" name="SCO_COMMENT"  value="<%=zSCO_COMMENT%>" />
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
  <td colspan="2"><%=zTitle%></td>
  <td class="tablamenuright" ><a title="<%=zTitle%>"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p17.jsp?estado=31"><img alt="<%=zTitle%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"  /></a></td>
</tr>
<tr>
  <td class="fuentecampo" colspan="1"><%=zSCO_N_OBJECTIVE%></td>
  <td class="fuentecampo" colspan="2">
  <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT','nombreformulario'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
  <img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo%>"/>" DtStart="<m4:item item="SCO_DT_START" htmlsafe="true" outputdef="<%=znodo%>"/>" IdMagnitud="<m4:item item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodo%>"/>" IdLevel="<m4:item item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodo%>"/>" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><%=zSCO_NM_OBJECTIVE%>
  </td>
</tr>



<tr>
  <td class="fuentecampo" colspan="1"><%=zSCO_N_WEIGHT%>
  <td class="fuentecampo" colspan="2">&nbsp;<%=dPeso%></td>
</tr>


<%
if (zSCO_ID_MAGNITUD.equals("")==false){%>
<tr>
  <td class="fuentecampo" colspan="1"><%=zSCO_N_MAGNITUDE%></td>
  <td class="fuentecampo" colspan="2">&nbsp;<%=zSCO_NM_MAGNITUDE%></td>
</tr>
<tr>
  <td class="fuentecampo" colspan="1"><%=zSCO_N_SCHED_VALUE%></td>
  <td class="fuentecampo" colspan="2">&nbsp;<%=dValor%></td>
</tr>

<%}else{%>
<tr>
  <td class="fuentecampo" colspan="1"><%=zSCO_N_LEVEL%>
  <td class="fuentecampo" colspan="2">&nbsp;<%=zSCO_NM_LEVEL%></td>
</tr>
<%}%>
<tr>
  <td class="fuentecampo" colspan="1"><%=lblSCO_DT_START%>
  <td class="fuentecampo" colspan="2">&nbsp;<%=zSCO_DT_START%></td>
</tr>
<tr>
  <td class="fuentecampo" colspan="1"><%=lblSCO_DT_END%>
  <td class="fuentecampo" colspan="2">&nbsp;<%=zSCO_DT_END%></td>
</tr>
<tr>
  <td class="fuentecampo" ><%=Tran.getProperty("Label.Comment")%></td>  
  <td class="fuentevalor" colspan="2">
  <textarea rows="3" cols="40" class="fuenteformulario" id="SCO_EMPLOYEE_COMM" name="SCO_EMPLOYEE_COMM" title="<%=Tran.getProperty("Label.Comment2")%>"  tabindex="1" ></textarea>
  </td>
</tr>
<tr>
  <td class="fuentecampo"><%=Tran.getProperty("Label.Agree")%></td>
  <td class = "fuentecampo" colspan="2"><input type="radio" id="SCO_EMPLOYEE_AGREE" name="SCO_EMPLOYEE_AGREE"  value="1" checked="checked" />
  </td>
</tr>
<tr>
  <td class="fuentecampo"><%=Tran.getProperty("Label.NotAgree")%></td>
  <td class = "fuentecampo"colspan="2"><input type="radio" id="SCO_EMPLOYEE_AGREE" name="SCO_EMPLOYEE_AGREE"value="0" /></td>
</tr>
<tr>
  <td class="fuenteboton" colspan="4">
  <a href="javascript:comprobar();" title="<%=Tran.getProperty("Button.Send")%>">
  <img alt="<%=Tran.getProperty("Button.Send")%>"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" />
  </a>
  </td>
</tr>
</table>
</form>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>



