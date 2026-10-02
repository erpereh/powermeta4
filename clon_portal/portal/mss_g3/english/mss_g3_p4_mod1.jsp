<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>

<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<%@ include file="../../mss_generico/english/menu_mss.jsp" %>	
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<title><%=TranMss.getProperty("ev_mss.PendVal")%></title>
<%

String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zcontador = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">
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
</script>
</head>
<body>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%
	String zsubsesion = "SSE_EVALUATOR_E";
	String zmeta4object = "SSE_EVALUATOR_E";
	String znodo = "SSE_EVALUATOR_E";
	String znodo1 = "SSE_EVAL_OBJECT";
	String znodo2 = "SSE_EVAL_CAPAB";
	String znodo3 = "SSE_EVAL_OBJ_CL";	

		
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]"; 
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]"; 
	String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
	
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_EVALUATOR_E.SSE_MOSTRAR";
	String zSCONMOBJECTIVE = zcomun1+ "SCO_NM_OBJECTIVE"; 
	String zSCOACCOMPDEGREE = zcomun1+ "SCO_ACCOMP_DEGREE";
	String zSCOIDMAGNITUD = zcomun1+ "SCO_ID_MAGNITUD";
	String zSCONMMAGNITUDE = zcomun1+ "SCO_NM_MAGNITUDE";
	String zSCOIDOBJECTIVE = zcomun1+ "SCO_ID_OBJECTIVE";
			
	String zSCONMEXTDKN =  zcomun2+"SCO_NM_EXTD_KN"; 
	String zSCOMEANING = zcomun2+ "SCO_MEANING";  
	String zSCOIDCAPABILITY = zcomun2+ "SCO_ID_CAPABILITY";
String zSCO_VALUE_RAT = zcomun2+ "SCO_VALUE_RAT";

	String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
	String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
	String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
	String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
	String zSCONMOBJECTIVEC =zcomun3+ "SCO_NM_OBJECTIVE"; 
	String zSCOMEANINGC =zcomun3+ "SCO_MEANING"; 
	String zSCOIDOBJECTIVEC =zcomun3+ "SCO_ID_OBJECTIVE"; 	
	
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="CONT" value="<%=zcontador%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
	int  zcount1  = 0;
	int  zcounti1  = 0;	
	int  zcount2 = 0;
	int  zcounti2  = 0;
	int  zcount3 = 0;
	int  zcounti3  = 0;	
	try {
		M4Operations m = new M4Operations(request);
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
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranMss.getProperty("ev_mss.PendVal")%></td></tr>
<tr><td><img alt="<%=TranMss.getProperty("ev_mss.PendVal")%>" title="<%=TranMss.getProperty("ev_mss.PendVal")%>"src="/iconos/noname_planes_evaluacion_114_100.gif" width="114" height="100" /></td>
	<td>
	<div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrRespen")%> </div>
	<ul class="listaenlace"><li>
	<a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" class="enlacefuncional"href="javascript:history.back();"> <%=TranMss.getProperty("ev_mss.LinkValEv")%> </a>
	</li></ul>
	</td>
</tr>
</table>


<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="mss" name="mss"  value="1" />
<input type="hidden" id="id_cono" name="id_cono"  value="" />
<input type="hidden" id="num_obj" name="num_obj"  value="" />
<input type="hidden" id="id_obj" name="id_obj"  value="" />
<input type="hidden" id="id_mag" name="id_mag"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
</form>

<% String sClass = ""; %>

<%if (zcount1 > 0) {
	String zposicions1 = "0";
	int zcontrol1 = 0;
	int zposicion1 =0;
%>	

<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="35%"><%=TranMss.getProperty("ev_mss.LblObjCuan")%></td>
	<td colspan="1"><m4:label m4name="<%=zSCOACCOMPDEGREE%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" ><a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>"href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31&mss=1"><img alt="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"  /></a></td>
</tr>

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>" >
<%zposicions1 = m4lix;
	zposicion1 = Integer.valueOf(zposicions1).intValue();
 	zcontrol1 = zposicion1%2;
%>
<%if (zcontrol1==0){
	sClass = "fuentevalor";
}else{
	sClass = "fuentevalor2";
}
%>

<tr>
	<td class="<%=sClass%>"><a title="<%=Tran.getProperty("Label.Ver")%>"href="javascript:visualizar('<m4:item m4name="<%=zSCOIDOBJECTIVE%>" jsafe = "true" htmlsafe = "true"/>',2,'<m4:item m4name="<%=zSCOIDMAGNITUD%>" jsafe = "true" htmlsafe = "true"/>')"><m4:item m4name="<%=zSCONMOBJECTIVE%>"  htmlsafe = "true"/></a></td>
	<td class="<%=sClass%>"><m4:item m4name="<%=zSCOACCOMPDEGREE%>"  htmlsafe = "true"/> - <m4:item m4name="<%=zSCONMMAGNITUDE%>"  htmlsafe = "true"/></td>
	<td class="<%=sClass%>">&nbsp;</td>
</tr>
</m4:loop>
</table>


<%}if (zcount3 > 0) {
	String zposicions3 = "0";
	int zcontrol3 = 0;
	int zposicion3 =0;
%>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="35%"><%=TranMss.getProperty("ev_mss.LblObjCual")%></td>
	<td colspan="1"><m4:label m4name="<%=zSCOMEANINGC%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" ><a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>"href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31&mss=1"><img alt="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"  /></a></td>
</tr>

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>" >
<%zposicions3 = m4lix;
	zposicion3 = Integer.valueOf(zposicions3).intValue();
 	zcontrol3 = zposicion3%3;
%>
<%if (zcontrol3==0){
	sClass = "fuentevalor";
}else{
	sClass = "fuentevalor2";
}
%>
<tr>
	<td class="<%=sClass%>" colspan="1"><a title = "<%=Tran.getProperty("Label.Ver")%>" href="javascript:visualizar('<m4:item m4name="<%=zSCOIDOBJECTIVEC%>" jsafe = "true" htmlsafe = "true"/>',3)"><m4:item m4name="<%=zSCONMOBJECTIVEC%>"  htmlsafe = "true"/></a></td >
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCOMEANINGC%>"  htmlsafe = "true"/></td>
	<td class="<%=sClass%>"></td>
</tr>
</m4:loop>
</table>

<%}%>

<%if (zcount2 > 0) {
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;%>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="35%"><m4:label m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></td>
	<td colspan="1"><m4:label m4name="<%=zSCOMEANINGC%>" htmlsafe = "true"/></td>
	<td ><m4:label m4name="<%=zSCO_VALUE_RAT%>" htmlsafe = "true"/></td>
	
	<td class="tablamenuright"><a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31&mss=1"><img alt="<%=TranMss.getProperty("ev_mss.Val")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9"  /></a></td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;

if (zcontrol2==0){%>
<tr>
	<td class="fuentevalor"><a title = "<%=Tran.getProperty("Label.Ver")%>"  href="javascript:visualizar('<m4:item m4name="<%=zSCOIDCAPABILITY%>" jsafe = "true" htmlsafe = "true"/>',1)"><m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></a></td >
	<td  class="fuentevalor" colspan="1"><m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td  class="fuentevalor" ><m4:item m4name="<%=zSCO_VALUE_RAT%>" htmlsafe = "true"/></td>
	
	<td class="fuentevalor">&nbsp;</td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2"><a title = "<%=Tran.getProperty("Label.Ver")%>"  href="javascript:visualizar('<m4:item m4name="<%=zSCOIDCAPABILITY%>" jsafe = "true" htmlsafe = "true"/>',1)"><m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></a></td >
	<td  class="fuentevalor2" colspan="1"><m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td  class="fuentevalor2" ><m4:item m4name="<%=zSCO_VALUE_RAT%>" htmlsafe = "true"/></td>
	<td class="fuentevalor2">&nbsp;</td>
</tr>
<%}%>
</m4:loop>
</table>
<%}%>		

<% 

	String zSCOIDASSESSMTEC="";
	String zSCOEMPLOYEEAGREE="";
	String zSCOEMPLOYEE="";
	String zSCOEMPLOYEECOMM="";
	String zSSEPOS="";
try {
	M4Operations t = new M4Operations(request);
	zSSEPOS = t.getItem(znodo,zmeta4object,znodo,"","SSE_POS"); 
	t.moveData(znodo,zmeta4object,znodo,zSSEPOS);
	zSCOIDASSESSMTEC = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_ASSESSM_TEC"); 
	zSCOEMPLOYEEAGREE = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_AGREE"); 
	zSCOEMPLOYEECOMM = t.getItem(znodo,zmeta4object,znodo,"","SCO_EMPLOYEE_COMM"); 
	} catch(Exception e) {}

	if (zSCOEMPLOYEEAGREE.equals("1"))
	{
		zSCOEMPLOYEE=TranMss.getProperty("ev_mss.LblAgree");
	 }
	else
	{
		zSCOEMPLOYEE=TranMss.getProperty("ev_mss.LblNotAgree");
	}
%>
<br>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td  width="28%"><m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" /></td>

	<td class="tablamenuright" ><a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>"href="javascript:history.back();">
	<img alt="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="2"><m4:item  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" /></td>

</tr>

</table>
<br>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td  width="28%"><m4:label  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>" /></td>

	<td class="tablamenuright" ><a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>"href="javascript:history.back();">
	<img alt="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="2"><m4:item  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>" /></td>

</tr>

</table>
<br>
<table class="tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td  width="28%"><m4:label  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>" /></td>

	<td class="tablamenuright" ><a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>"href="javascript:history.back();">
	<img alt="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="2"><m4:item  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>" /></td>

</tr>

</table>
<br>
<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo">
	<td colspan="1" width="35%"><%=TranMss.getProperty("ev_mss.LblEval1")%></td>
	<td class="tablamenuright" >
	<a title="<%=TranMss.getProperty("ev_mss.LinkValEv")%>"href="javascript:history.back();">
	<img alt="<%=TranMss.getProperty("ev_mss.LinkValEv")%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>

<tr><td class="fuentecampo"><%=TranMss.getProperty("ev_mss.LblOp")%></td><td class="fuentevalor" colspan="2">&nbsp;<%=zSCOEMPLOYEE%></td ></tr>
<tr><td class="fuentevalor2"><%=TranMss.getProperty("ev_mss.LblComentario")%></td><td class="fuentevalor2" colspan="2">&nbsp;<%=zSCOEMPLOYEECOMM%></td ></tr>
</table>

<m4:endpage/>
</body>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
</div>
</html>



