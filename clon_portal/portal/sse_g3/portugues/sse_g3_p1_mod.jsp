<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
<title><%=TranEss.getProperty("ev_ess.Res")%></title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javaScript">
function visualizar(t,c,f){
	if (c==1)
	{
	m4valor("oculto","id_cono",t,"set");
	document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod2.jsp?estado=31";
	}
	
	if (c==2)
	{
		m4valor("oculto","id_obj",t,"set");
		m4valor("oculto","id_mag",f,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod3.jsp?estado=31";
	}
		
	if (c==3)
	{
		m4valor("oculto","id_obj",t,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod4.jsp?estado=31";
	}
	
	m4valor("oculto","id_re","1","set");
	m4submit("oculto");
}
function comprobar(){
var comentario = m4valor("nombreformulario","SCO_EMPLOYEE_COMM","","get");
if ((comentario == null)|| (comentario=="") ){	comentario="  ";}
var a=comentario.length;
if (a > 256){
	m4setlog("_sl_co_ess_ev_1");
	comentario=comentario.substr(0,255);
	m4valor("nombreformulario","SCO_EMPLOYEE_COMM",comentario,"set");
	return;
} 
m4submit("nombreformulario");
}
</script>
</head>
<body>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal");  
String Nombreproceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Nombreproceso");  
%>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
	String zsubsesion = "SSE_EVALUATOR_E";
	String zmeta4object = "SSE_EVALUATOR_E";
	String znodo = "SSE_EVALUATOR_E";
	String znodo1 = "SSE_EVAL_OBJECT";
	String znodo2 = "SSE_EVAL_CAPAB";
	String znodo3 = "SSE_EVAL_OBJ_CL";

	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String zraiz = zsubsesion + "!" + znodo + ".";
		
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	String zSCONMOBJECTIVE = zcomun1 + "SCO_NM_OBJECTIVE";
	String zSCOACCOMPDEGREE = zcomun1 + "SCO_ACCOMP_DEGREE";
	String zSCONMMAGNITUDE = zcomun1 + "SCO_NM_MAGNITUDE";
	String zSCOIDOBJECTIVE = zcomun1 + "SCO_ID_OBJECTIVE";
	String zSCOIDMAGNITUD = zcomun1 + "SCO_ID_MAGNITUD";
	String zSCO_EXPLICATION = zcomun1+ "SCO_EXPLANATION"; 

	String Proceso = "" ;
	String Evaluador = "" ;

	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
	String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
	String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
	String zSCONMEXTDKN =zcomun2+ "SCO_NM_EXTD_KN"; 
	String zSCOMEANING =zcomun2+ "SCO_MEANING"; 
	String zSCOIDCAPABILITY =zcomun2+ "SCO_ID_CAPABILITY"; 
	String zSCO_EXPLICATION_KNO = zcomun2+ "SCO_EXPLANATION"; 
	String zSCO_VALUE_RAT = zcomun2+ "SCO_VALUE_RAT"; 
		

	String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
	String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
	String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
	String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
	String zSCONMOBJECTIVEC =zcomun3+ "SCO_NM_OBJECTIVE"; 
	String zSCOMEANINGC =zcomun3+ "SCO_MEANING"; 
	String zSCOIDOBJECTIVEC =zcomun3+ "SCO_ID_OBJECTIVE"; 
	String zSCO_EXPLICATIONC = zcomun3+ "SCO_EXPLANATION"; 
	
	String zmetodo = "CARGA:" + zsubsesion + "!SSE_EVALUATOR_E.SSE_MOSTRAR";
	
	String zSCONMEVALPROC = zraiz + "SCO_NM_EVAL_PROC";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="CONT" value="<%=zordinal%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
	int zcount = 0;
	int  zcount1  = 0;
	int  zcounti1  = 0;	
	int  zcount2 = 0;
	int  zcounti2  = 0;
	int  zcount3 = 0;
	int  zcounti3  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
		zcounti1 = m.getCountInClient(znodo1,zsubsesion,znodo1);
		zcount2 = m.getCount(znodo2,zsubsesion,znodo2);	
		zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);	
		zcount3 = m.getCount(znodo3,zsubsesion,znodo3);	
		zcounti3 = m.getCountInClient(znodo3,zsubsesion,znodo3);					
	} catch(Exception e) {}
	String	zcountv1 = String.valueOf(zcounti1);
	String	zcountv2 = String.valueOf(zcounti2);
	String	zcountv3 = String.valueOf(zcounti3);
%>

<%if (zcount > 0) { %>
<% //DATOS DEL EVALUADOR Y DEL PROCESO %>
	<%	
		try {	
			M4Operations m = new M4Operations(request);
			m.moveData(znodo,zmeta4object,znodo,"0");
			Proceso = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_EVAL_PROC");
			Evaluador = m.getItem(znodo,zmeta4object,znodo,"","SCO_GB_NAME");
		} catch(Exception e) {}
}
%>

<table width="100%" border="0">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.Res")%></td></tr>
<tr>
	<td><a title="<%=TranEss.getProperty("ev_ess.Res")%>"><img alt="<%=TranEss.getProperty("ev_ess.Res")%>" src="/iconos/noname_resultados_evaluacion_ess_100_100.gif" width="100" height="100" /></a></td>
	<td>
	<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrResEv")%> <%=Nombreproceso%>, <%=TranEss.getProperty("ev_ess.DescrResEvSeg2")%>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title ="<%=TranEss.getProperty("ev_ess.Val")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31"><%=TranEss.getProperty("ev_ess.Val")%></a></li>
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
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1_act1.jsp" method="post" name="nombreformulario" id="nombreformulario">
<input type="hidden" id="ordinal" name="ordinal"  value="<%=zordinal%>" />


<%
String sClass = "" ;

//OBJETIVO CUANTITATIVO
if (zcount1 > 0) {
	String zposicions1 = "0";
	int zcontrol1 = 0;
	int zposicion1 =0;
%>	

<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="28%"><m4:label m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td>
	<td colspan="1" width="25%"><m4:label m4name="<%=zSCOACCOMPDEGREE%>" htmlsafe = "true"/></td>
	<td colspan="1" ><m4:label m4name="<%=zSCO_EXPLICATION%>" htmlsafe = "true"/></td>	
	<td class="tablamenuright"><a title="<%=TranEss.getProperty("ev_ess.Val")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31"><img alt="<%=TranEss.getProperty("ev_ess.Val")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"  /></a></td>
</tr>

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>" >
<% zposicions1 = m4lix;
   zposicion1 = Integer.valueOf(zposicions1).intValue();
   zcontrol1 = zposicion1%2;

if (zcontrol1==0){
	sClass = "fuentevalor" ;
} else {
	sClass = "fuentevalor2" ;
}
%>
<tr>
	<td class="<%=sClass%>"><a title="<%=Tran.getProperty("Label.Ver")%>"href="javascript:visualizar('<m4:item m4name="<%=zSCOIDOBJECTIVE%>" htmlsafe = "true" jsafe="true"/>',2,'<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true" jsafe="true"/>')"><m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></a></td>
	<td class="<%=sClass%>"><m4:item m4name="<%=zSCOACCOMPDEGREE%>" htmlsafe = "true"/> - <m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td>
	<td class="<%=sClass%>" ><m4:item m4name="<%=zSCO_EXPLICATION%>" htmlsafe = "true"/></td>	
	<td class="<%=sClass%>"></td>
</tr>
</m4:loop>
</table>
<% } %>

<%//OBJETIVOS CUALITATIVOS %>
<%if (zcount3 > 0) {
	String zposicions3 = "0";
	int zcontrol3 = 0;
	int zposicion3 =0;
%>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="28%"><m4:label m4name="<%=zSCONMOBJECTIVEC%>" htmlsafe = "true"/></td>
	<td colspan="1" width="25%"><m4:label m4name="<%=zSCOMEANINGC%>" htmlsafe = "true"/></td>
	<td colspan="1"><m4:label m4name="<%=zSCO_EXPLICATIONC%>" htmlsafe = "true"/></td>	
	<td class="tablamenuright" ><a title="<%=TranEss.getProperty("ev_ess.Val")%>"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31"><img alt=<%=TranEss.getProperty("ev_ess.Val")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"  /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>" >
<%zposicions3 = m4lix;
	zposicion3 = Integer.valueOf(zposicions3).intValue();
 	zcontrol3 = zposicion3%3;

if (zcontrol3==0){
	sClass = "fuentevalor" ;
} else {
	sClass = "fuentevalor2" ;
}
%>
<tr>
	<td class="<%=sClass%>" colspan="1"><a title = "<%=Tran.getProperty("Label.Ver")%>" href="javascript:visualizar('<m4:item m4name="<%=zSCOIDOBJECTIVEC%>" jsafe="true" htmlsafe="true"/>',3)"><m4:item m4name="<%=zSCONMOBJECTIVEC%>" htmlsafe="true"/></a></td >
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCOMEANINGC%>" htmlsafe = "true"/></td>
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCO_EXPLICATIONC%>" htmlsafe = "true"/></td>	
	<td class="<%=sClass%>"></td>
</tr>

</m4:loop>
</table>
<%}%>

<% //Conocimientos + %>
<% if (zcount2 > 0) {
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;%>
	<br>
	<table class = "tablaestados" width="100%" cellspacing="0" border="0">
	<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="28%"><m4:label m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></td>
	<td colspan="1" width="25%"><m4:label m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td ><m4:label m4name="<%=zSCO_VALUE_RAT%>" htmlsafe = "true"/></td>
	<td colspan="1"><m4:label m4name="<%=zSCO_EXPLICATION_KNO%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" ><a title="<%=TranEss.getProperty("ev_ess.Val")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31"><img alt="<%=TranEss.getProperty("ev_ess.Val")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"  /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;

	if (zcontrol2==0){
		sClass = "fuentevalor" ;
	} else {
		sClass = "fuentevalor2" ;
	}
%>
<tr>
	<td class="<%=sClass%>" colspan="1"><a title = "<%=Tran.getProperty("Label.Ver")%>"  href="javascript:visualizar('<m4:item m4name="<%=zSCOIDCAPABILITY%>" htmlsafe = "true" jsafe="true"/>',1)"><m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></a></td >
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td class="<%=sClass%>" ><m4:item m4name="<%=zSCO_VALUE_RAT%>" htmlsafe="true"/></td>
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCO_EXPLICATION_KNO%>" htmlsafe="true"/></td>

	
	<td class="<%=sClass%>"></td>	
</tr>
</m4:loop>
</table>
<%}%>	
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
<td  >&nbsp;<m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	</tr>
<tr >
<td class="fuentecampo" >&nbsp;<m4:item  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	</tr>
</table>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
<td  >&nbsp;<m4:label  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	</tr>
<tr >
<td class="fuentecampo" >&nbsp;<m4:item  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	</tr>
</table>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
<td  >&nbsp;<m4:label  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	</tr>
<tr >
<td class="fuentecampo" >&nbsp;<m4:item  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>"/></td>
	</tr>
</table>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="2"><%=TranEss.getProperty("ev_ess.Val")%></td>
	<td class="tablamenuright" ><a title="<%=TranEss.getProperty("ev_ess.Val")%>"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31"><img alt="<%=TranEss.getProperty("ev_ess.Val")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"/></a></td>
</tr>
<tr>
	<td class="fuentecampo"><%=TranEss.getProperty("ev_ess.LblComentario")%></td>	
	<td class="fuentevalor" colspan="2">
	<textarea rows="3" cols="40" class="fuenteformulario" id="SCO_EMPLOYEE_COMM" name="SCO_EMPLOYEE_COMM" title="<%=Tran.getProperty("Label.Comment2")%>"  tabindex="1" ></textarea>
	</td>
</tr>
<tr>
	<td class="fuentecampo"><%=TranEss.getProperty("ev_ess.LblAgree")%></td>
	<td class = "fuentecampo" colspan="2"><input type="radio" id="SCO_EMPLOYEE_AGREE" name="SCO_EMPLOYEE_AGREE"  value="1" checked="checked" /></td>
</tr>
<tr>
	<td class="fuentecampo"><%=TranEss.getProperty("ev_ess.LblNotAgree")%></td>
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
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>



