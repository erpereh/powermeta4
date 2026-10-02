<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>

<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />

<link href="/css/style_eval.css" type="text/css" rel="stylesheet" />

<script type="text/javascript" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>

<script type="text/javascript" src="/libreria/mootools.js"></script>
<script type="text/javascript" src="/libreria/functions_eval.js"></script>
<script type="text/javascript" src="/libreria/meta4ajax.js"></script>

<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-menu_ess.jsp" %>
<%@ include file="/m4trans/sse_g3/0-sse_ev_trans.jsp"%>
<% String zTitle = TranEss.getProperty("ev_ess.Obj"); 
  String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
  String zpathVerComentario = "/sse_g3/espanol/ssco_viewcomment.jsp?comment=";
  String ViewComment = Tran.getProperty("Button.ViewComment");
%>
<title> <%=zTitle%> </title>


<%    
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  String zjob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job");  
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%> 
</head>
<body>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_links.jsp" %>
<%
    String zAyuda="/iconos/info_12.gif";   
  String Ver = Tran.getProperty("Label.Ver");

  String zsubsesion = "SSE_OBJECTIVES";
  String zmeta4object = "SSE_OBJECTIVES";
  String znodo = "SSE_OBJETIVES";
  

  String znododep = "SSE_OBJETIVES_WU_PERSON";
  String znodoobj = "SSE_ROL_LV_OBJ";
  
  String znod1="SSE_ASSIGN_OBJ";
  String zoutputdef1 = zsubsesion + "!" + znod1 + "[*]";
// No se modifica en general.
  
  String zoutputdef = zsubsesion + "!" + znodo + "[*]";
  String zmove = znodo + ":" + znodo + "[FIRST]";
  String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";   
  
  
  String zoutputdefobj = zsubsesion + "!" + znodoobj + "[*]";
  String zmoveobj = znodoobj + ":" + znodoobj + "[FIRST]";
  String zraizobj = znodoobj + ":" + zsubsesion + "!" + znodoobj + ".";   
  String zcomunobj = znodoobj + ":" + zsubsesion + "!" + znodoobj + "[&VAR.m4lix]" + ".";   
  
  
// Metodo de carga del Meta4Object generico
  
  String zmetodocarga = zsubsesion + "!" + znodo + ".CARGA";
  
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar
  
  String zSSENROLE = zraiz + "SSE_N_ROLE";
  String zSSENWORKUNIT = zraiz + "SSE_N_WORK_UNIT";
  
  
  
  String zobjetivo = "SCO_NM_OBJECTIVE";
  String zpeso = "SCO_WEIGHT";
  String zvaloralcanzado = "SCO_ACCOMP_VALUE";
  String zvalorplanificado = "SCO_SCHED_VALUE";
  String zmagnitud = "SCO_NM_MAGNITUDE";
  
  String zrol = "SCO_N_ROLE";
  
  String zNACCION = zcomunobj + "N_ACCION";
  String zORDINAL = zcomunobj + "ORDINAL";
  String zSCO_ID_HR = zcomunobj + "SCO_ID_HR";
  String zSCO_OR_HR_ROLE = zcomunobj + "SCO_OR_HR_ROLE";
  String zSCO_ID_OBJECTIVE = zcomunobj + "SCO_ID_OBJECTIVE";
  String zSCO_N_OBJECTIVE = zcomunobj + "SCO_NM_OBJECTIVE";   
  String zSCO_N_LEVEL = zcomunobj + "SCO_NM_LEVEL";    
  String zSCO_N_MAGNITUDE = zcomunobj + "SCO_NM_MAGNITUDE";     
  String zSCO_DT_START = zcomunobj + "SCO_DT_START";
  String zSCO_DT_END = zcomunobj + "SCO_DT_END";
  String zSCO_WEIGHT = zcomunobj + "SCO_WEIGHT";
  String zSCO_SCHED_VALUE = zcomunobj + "SCO_SCHED_VALUE";
  String zSCO_ID_MAGNITUD = zcomunobj + "SCO_ID_MAGNITUD";
  String zSCO_ID_LEVEL = zcomunobj + "SCO_ID_LEVEL";
  String zSCO_ACCOMP_VALUE = zcomunobj + "SCO_ACCOMP_VALUE";   
  String zSCO_NAME = zcomunobj + "SCO_NAME";      
  String zSCO_DESCRIPTION = zcomunobj + "SCO_DESCRIPTION";   
  String zP_TIPO = zcomunobj + "P_TIPO";   
  String zSCO_N_ROLE = zcomunobj + "SCO_N_ROLE";    
  String zSCO_COMMENT = zcomunobj + "SCO_COMMENT";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<%
try {
  M4Operations m = new M4Operations(request);
  m.setItem(zsubsesion,znodo,"","SSE_ID_HR_PAR",zIdPerson);
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoobj%>"><m4:param name="m4name0" value="<%=zoutputdefobj%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znod1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveobj%>"/></m4:move>
<%

  int  zcountidep  = 0; 
  int  zcountiobj = 0;
  int  zcounti1  = 0;   
  try {
      M4Operations m = new M4Operations(request);

      zcountiobj = m.getCountInClient(znodoobj,zsubsesion,znodoobj);    
       zcounti1 = m.getCountInClient(znod1,zsubsesion,znod1); 
  } catch(Exception e) {}
    String zcountvobj = String.valueOf(zcountiobj); 
  String zto = new Integer(new Integer(zcountvobj).intValue()-1).toString();  
%>
<table width="100%" >
<tr><td class="titulofuncional" colspan="2" rowspan="1"><%=zTitle%></td></tr>
<tr>
  <td><img src="/iconos/noname_objetivos_ess_103_100.gif" width="103" height="100" alt="<%=zTitle%>" /></td>
  <td><div class="fuentedescripcion"><%=TranEss.getProperty("ev_ess.DescrObj")%></div>
  <ul class="listaenlace">
    <li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblJob")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkJob")%></a></li>
  </ul>
  </td>
</tr>
</table>
<%
if (zcounti1 > 0) {
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo"><td colspan="6"><%=TranEss.getProperty("ev_ess.LblObjVig")%></td> </tr>
<tr>
<td class="tablaestadosceldatitulo"><m4:label  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znod1%>"/></td>
<td class="tablaestadosceldatitulo"><m4:label  item="SRCO_TP_ORIGEN" htmlsafe="true" outputdef="<%=znod1%>"/></td>
<td class="tablaestadosceldatitulo"><m4:label  item="SCO_N_ORIGEN" htmlsafe="true" outputdef="<%=znod1%>"/></td>
<td class="tablaestadosceldatitulo"><m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znod1%>"/> </td>
<td class="tablaestadosceldatitulo"><m4:label  item="SCO_PERCENT" htmlsafe="true" outputdef="<%=znod1%>"/></td>
<td class="tablaestadosceldatitulo"><m4:label  item="SCO_FIABILITY" htmlsafe="true" outputdef="<%=znod1%>"/></td>
</tr>
<m4:dataloop outputdef="<%=znod1%>">
<m4:current m4varname="current1" outputdef="<%=znod1%>"/>
<form name="b<%=current1%>" id="b<%=current1%>" action=" "onSubmit="return false">
<input id="SCO_COMMENT<%=current1%>" name="SCO_COMMENT<%=current1%>" type="hidden" value="<m4:item  item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znod1%>"/>" />
<tr>
<td class="fuentevalor">
<a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT<%=current1%>','b<%=current1%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>
<img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znod1%>"/>" IdMagnitud="<m4:item item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znod1%>"/>" IdLevel="<m4:item item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znod1%>"/>" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znod1%>"/></td>
<td class="fuentevalor"><m4:item  item="SRCO_TP_ORIGEN" htmlsafe="true" outputdef="<%=znod1%>"/></td>
<td class="fuentevalor"><m4:item  item="SRCO_N_ORIGEN" htmlsafe="true" outputdef="<%=znod1%>"/></td>
<td class="fuentevalor"><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znod1%>"/>  </td>
<td class="fuentevalor"><m4:item  item="SCO_PERCENT" htmlsafe="true" outputdef="<%=znod1%>"/>&nbsp;(<m4:item  item="SCO_NM_MAGNITUDE" htmlsafe="true" outputdef="<%=znod1%>"/>)</td>
<td class="fuentevalor"><m4:item  item="SCO_FIABILITY" htmlsafe="true" outputdef="<%=znod1%>"/> </td>
</tr>   
</form>
</m4:dataloop>
</table>
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound5")%></div>
<br> <br/> 
<%}%>

<br> <br/> 
<% 
if (zcountiobj > 0) {
  String zposicions = "0";
    int zposicion =0;
%>


<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo"><td colspan="8"><%=TranEss.getProperty("ev_ess.LblObjPend")%></td> </tr>
<tr>
  <td class="tablaestadosceldatitulo"></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_N_ROLE%>"  htmlsafe = "true"/></td>  
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_N_OBJECTIVE%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/></td>    
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_N_LEVEL%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_SCHED_VALUE%>"  htmlsafe = "true"/></td>
  <td class="tablaestadosceldatitulo" ><m4:label m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/></td>  
</tr>
<ul>
<m4:loop from="0" to="<%=zto%>">
<%zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
%>
<form name="c<%=zposicions%>" id="c<%=zposicions%>" action=" "onSubmit="return false">
<input id="zSCO_COMMENT<%=zposicions%>" name="zSCO_COMMENT<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSCO_COMMENT%>"  htmlsafe = "true"/>" />

<tr>  
  <td class="fuentevalor"><m4:item m4name="<%=zNACCION%>" htmlsafe = "true"/> </td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_N_ROLE%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor">
    <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('zSCO_COMMENT<%=zposicions%>','c<%=zposicions%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>  
  <img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodoobj%>"/>" IdMagnitud="<m4:item item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodoobj%>"/>" IdLevel="<m4:item item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodoobj%>"/>" onclick='javascript:m4Eval.evalDetail.show(this);' title="<%=Ver%>" src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /><m4:item m4name="<%=zSCO_N_OBJECTIVE%>"  htmlsafe = "true"/></td>    
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_DT_START%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_DT_END%>"  htmlsafe = "true"/></td>    
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_N_LEVEL%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_SCHED_VALUE%>"  htmlsafe = "true"/> - <m4:item m4name="<%=zSCO_N_MAGNITUDE%>"  htmlsafe = "true"/></td>
  <td class="fuentevalor"><m4:item m4name="<%=zSCO_WEIGHT%>"  htmlsafe = "true"/></td>
</tr>
</form>
</m4:loop>
</ul>
</table>
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound4")%></div>
<br> <br/> 
<%}%>
<%@ include file="/m4trans/m4custom/CYC/sse_generico/espanol/0-generico_disclaimer.jsp" %>
</div>

</body>
<m4:endpage/>
</html>