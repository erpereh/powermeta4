<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head>


<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");  
String zordinal = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal");
String pag = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"pag");
String zNombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreper");
String zSCOIDHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String zSCOORHRPERIOD = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal1");
String zSCODTSTARTEVAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"inicioev");  
String zIDASSTEC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tecnica");  
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((pag==null)||(pag.equals(""))){pag="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){	mss = "0";}
String zmss="'"+mss+"'";

String ztitle = "";
String LblAgree = "";
String LblNotAgree = "";
String LblEval = "";
String LinkEval = "";
String LinkValEval = "";
String LblOp = "";
String LblComentario = "";
String LinkValEv = "";
String Ver = "";
String LblNotAgree2 = "";

%>

<%if (mss.equals("0")==true){%>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
	<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
	<%
	if ((pag=="0")||(pag.equals("0"))){%>	
		<% ztitle = TranEss.getProperty("ev_ess.PenEvSeg");%>	
	<%}
	if ((pag=="1")||(pag.equals("1"))){%>	
		<% ztitle = TranEss.getProperty("ev_ess.PendVal");%>	
	<%}	%>	
	<% LblAgree = TranEss.getProperty("ev_ess.LblAgree");%>		
	<% LblNotAgree = TranEss.getProperty("ev_ess.LblNotAgree");%>		
	<% LblEval = TranEss.getProperty("ev_ess.LblEval");%>		
	<% LinkEval = TranEss.getProperty("ev_ess.EvSeg");%>			
	<% LblOp = TranEss.getProperty("ev_ess.LblOp");%>		
	<% LblComentario = TranEss.getProperty("ev_ess.LblComentario");%>		
	<% LinkValEv = TranEss.getProperty("ev_ess.Cono");%>	
	<% Ver = Tran.getProperty("Label.Ver");%>		
	<% LblNotAgree2 = Tran.getProperty("Label.NotAgree2");%>		
	<% LinkValEval = TranEss.getProperty("ev_ess.LinkValEv");%>		
	
	
<%}else{%>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
	<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
	<%
	if ((pag=="0")||(pag.equals("0"))){%>	
		<% ztitle = TranMss.getProperty("ev_mss.PenEvSeg");%>	
	<%}
	if ((pag=="1")||(pag.equals("1"))){%>	
		<% ztitle = TranMss.getProperty("ev_mss.PendVal");%>	
	<%}	%>	
	<% LblAgree = TranMss.getProperty("ev_mss.LblAgree");%>		
	<% LblNotAgree = TranMss.getProperty("ev_mss.LblNotAgree");%>		
	<% LblEval = TranMss.getProperty("ev_mss.LblEval");%>		
	<% LinkEval = TranMss.getProperty("ev_mss.EvSeg");%>		
	<% LblOp = TranMss.getProperty("ev_mss.LblOp");%>		
	<% LblComentario = TranMss.getProperty("ev_mss.LblComentario");%>	
	<% LinkValEv = TranMss.getProperty("ev_ess.Cono");%>	
	<% Ver = Tran.getProperty("Label.Ver");%>	
	<% LblNotAgree2 = Tran.getProperty("Label.NotAgree2");%>		
	<% LinkValEval = TranMss.getProperty("ev_mss.LinkValEv");%>							
<%}%>

<title><%=ztitle%></title>
	
</head>
<body>
<%if (mss.equals("0")==true){%>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%}%>
<script type="text/javascript">
function visualizar(t,c,f)
{	
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
	
	m4submit("oculto");	
	m4valor("oculto","id_re","1","set");
	m4submit("oculto");
}

function evaluacion(){
	document.forms["evaluacion"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19_mod.jsp?estado=31";
	m4submit("evaluacion");
}

function validacion(){
	document.forms["evaluacion"].action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p19_val.jsp?estado=31";
	m4submit("evaluacion");
}

</script>
<%
String zsubsesion = "SSE_EVALUATOR_E_SEG";
String zmeta4object = "SSE_EVALUATOR_E_SEG";
String znodo = "SSE_EVALUATOR_E";
String znodo1 = "SSE_EVAL_OBJECT";
String znodo2 = "SSE_EVAL_CAPAB";
String znodo3 = "SSE_EVAL_OBJ_CL";

String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
		 
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String zSCONMOBJECTIVE =zcomun1+ "SCO_NM_OBJECTIVE";
String zSCOACCOMPDEGREE = zcomun1+"SCO_ACCOMP_DEGREE";
String zSCOIDMAGNITUD = zcomun1+"SCO_ID_MAGNITUD";
String zSCOIDOBJECTIVE = zcomun1+"SCO_ID_OBJECTIVE";
String zSCONMMAGNITUDE = zcomun1+"SCO_NM_MAGNITUDE";
String zSCO_EXPLICATION = zcomun1+ "SCO_EXPLANATION";
	
String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;
String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
String zSCONMEXTDKN = zcomun2+"SCO_NM_EXTD_KN";
String zSCOMEANING = zcomun2+ "SCO_MEANING";
String zSCOIDCAPABILITY = zcomun2+ "SCO_ID_CAPABILITY";
String zSCO_EXPLICATION_KNO = zcomun2+ "SCO_EXPLANATION"; 
String zSCO_VALUE_SEG = zcomun2+ "SCO_VALUE_SEG"; 


String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3+ "[&VAR.m4lix]" + ".";
String zSCONMOBJECTIVECUAL = zcomun3 +"SCO_NM_OBJECTIVE";
String zSCOMEANINGCUAL = zcomun3 + "SCO_MEANING";
String zSCOIDOBJECTIVECUAL = zcomun3 + "SCO_ID_OBJECTIVE";
String zSCO_EXPLICATIONC = zcomun3+ "SCO_EXPLANATION"; 

String zmetodocarga = zsubsesion + "!SSE_EVALUATOR_E.SSE_MOSTRAR";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="CONT" value="<%=zordinal%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcount1  = 0;
	int  zcounti1  = 0;	
	int  zcount2 = 0;
	int  zcounti2 = 0;
	int  zcount3 = 0;
	int  zcounti3 = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
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

<tr><td class="titulofuncional" colspan="2"><%=ztitle%></td></tr>
<tr>
	<td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_listado_63_80.gif" width="63" height="80" /></td>
	<td>
	<div class="descripcionfuncional"></div>
	<ul  class="listaenlace"><li>
	<%if ((pag=="0")||(pag.equals("0"))){%>	
		<a class="enlacefuncional" title ="<%=LinkEval%>" href="javascript:evaluacion()" ><%=LinkEval%></a>
	<%}	
		if ((pag=="1")||(pag.equals("1"))){%>	
		<a class="enlacefuncional" title ="<%=LinkValEval%>" href="javascript:validacion()" ><%=LinkValEval%></a>
	<%}%>
	</li></ul>
	</td>
</tr>
</table>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="id_cono" name="id_cono"  value="" />
<input type="hidden" id="num_obj" name="num_obj"  value="" />
<input type="hidden" id="id_obj" name="id_obj"  value="" />
<input type="hidden" id="id_mag" name="id_mag"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
</form>

<form action="" method="post" name="evaluacion" id="evaluacion">
<input type="hidden" id="id" name="id"  value="<%=zSCOIDHR%>" />
<input type="hidden" id="inicioev" name="inicioev"  value="<%=zSCODTSTARTEVAL%>" />
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="tecnica" name="tecnica"  value="<%=zIDASSTEC%>" />
<input type="hidden" id="nombreper" name="nombreper"  value="<%=zNombre%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=NombreProceso%>" />
<input type="hidden" id="ordinal1" name="ordinal1"  value="<%=zSCOORHRPERIOD%>" />

</form>

<% //OBJETIVOS CUANTITATIVOS %>
<% String sClass = "" ; %>
<%if (zcount1 > 0) {
	String zposicions1 = "0";
	int zcontrol1 = 0;
	int zposicion1 =0;
%>	

<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="28%"><m4:label m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/></td>
	<td colspan="1" width="25%"><m4:label m4name="<%=zSCOACCOMPDEGREE%>" htmlsafe = "true"/></td>
	<td colspan="1" ><m4:label m4name="<%=zSCO_EXPLICATION%>" htmlsafe = "true"/></td>	
	<td class="tablamenuright" >
	<a title="<%=LinkEval%>"href="javascript:history.back();" >
	<%if (mss.equals("0")==true){%>
		<img alt="<%=LinkEval%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}else{%>
		<img alt="<%=LinkEval%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}%>
	</a>
	</td>
</tr>

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>" >
<%zposicions1 = m4lix;
	zposicion1 = Integer.valueOf(zposicions1).intValue();
 	zcontrol1 = zposicion1%2;
%>
<% if (zcontrol1==0){
	sClass = "fuentevalor";
} else {
	sClass = "fuentevalor2";
}
%>

<tr>
	<td class="<%=sClass%>"><a title="<%=Ver%>"href="javascript:visualizar('<m4:item m4name="<%=zSCOIDOBJECTIVE%>" jsafe="true" htmlsafe="true"/>',2,'<m4:item m4name="<%=zSCOIDMAGNITUD%>" jsafe="true" htmlsafe="true"/>')"><m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe="true"/></a></td>
	<td class="<%=sClass%>"><m4:item m4name="<%=zSCOACCOMPDEGREE%>" htmlsafe="true"/> - <m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe="true"/></td>
	<td class="<%=sClass%>" ><m4:item m4name="<%=zSCO_EXPLICATION%>" htmlsafe = "true"/></td>	
	<td class="<%=sClass%>"></td>
</tr>

</m4:loop>
</table>

<% //OBJETIVOS CUALITATIVOS %> 
<%}if (zcount3 > 0) {
	String zposicions3 = "0";
	int zcontrol3 = 0;
	int zposicion3 =0;
%>

<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="1" width="28%"><m4:label m4name="<%=zSCONMOBJECTIVECUAL%>" htmlsafe = "true"/></td>
	<td colspan="1" width="25%"><m4:label m4name="<%=zSCOMEANINGCUAL%>" htmlsafe = "true"/></td>
	<td colspan="1"><m4:label m4name="<%=zSCO_EXPLICATIONC%>" htmlsafe = "true"/></td>	
	<td class="tablamenuright" >
	<a title="<%=LinkEval%>"href="javascript:history.back();" >
	<%if (mss.equals("0")==true){%>
	<img alt="<%=LinkEval%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}else{%>
	<img alt="<%=LinkEval%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}%>
	</a>
	</td>
</tr>


<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>" >
<%zposicions3 = m4lix;
	zposicion3 = Integer.valueOf(zposicions3).intValue();
 	zcontrol3 = zposicion3%3;
%>
<%if (zcontrol3==0){
	sClass = "fuentevalor";
} else {
	sClass = "fuentevalor2";
}
%>
<tr>
	<td class="<%=sClass%>" colspan="1"><a title = "<%=Ver%>" href="javascript:visualizar('<m4:item m4name="<%=zSCOIDOBJECTIVECUAL%>" jsafe= "true" htmlsafe = "true"/>',3)"><m4:item m4name="<%=zSCONMOBJECTIVECUAL%>" htmlsafe = "true"/></a></td >
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCOMEANINGCUAL%>" htmlsafe = "true"/></td>
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCO_EXPLICATIONC%>" htmlsafe = "true"/></td>	
	<td class="<%=sClass%>" colspan="1"></td>
</tr>
</m4:loop>
</table>

<% //CONOCIMIENTOS + %>
<%}if (zcount2>0) {
	String zposicions2 = "0";
	int zcontrol2 = 0;
	int zposicion2 =0;%>	
<br>
<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo">
	<td width="28%"><m4:label m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></td>
	<td width="25%"><m4:label m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td ><m4:label m4name="<%=zSCO_VALUE_SEG%>" htmlsafe = "true"/></td>
	<td colspan="1"><m4:label m4name="<%=zSCO_EXPLICATION_KNO%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" >
	<a title="<%=LinkEval%>"href="javascript:history.back();" >
	<%if (mss.equals("0")==true){%>
	<img alt="<%=LinkEval%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}else{%>
	<img alt="<%=LinkEval%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}%>
	</a>
	</td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>" >
<%zposicions2 = m4lix;
	zposicion2 = Integer.valueOf(zposicions2).intValue();
 	zcontrol2 = zposicion2%2;
%>
<%if (zcontrol2==0){
	sClass = "fuentevalor";
} else {
	sClass = "fuentevalor2";
}
%>
<tr>
	<td class="<%=sClass%>"><a title = "<%=Ver%>" href="javascript:visualizar('<m4:item m4name="<%=zSCOIDCAPABILITY%>" jsafe= "true" htmlsafe = "true"/>',1)"><m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></a></td >
	<td class="<%=sClass%>"><m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td class="<%=sClass%>"><m4:item m4name="<%=zSCO_VALUE_SEG%>" htmlsafe="true"/></td>
	<td class="<%=sClass%>" colspan="1"><m4:item m4name="<%=zSCO_EXPLICATION_KNO%>" htmlsafe="true"/></td>
	<td class="<%=sClass%>"></td>
</tr>
</m4:loop>
</table>
<%}%>

<% 
	String zSCOIDASSESSMTEC="";
	String zSCOEMPLOYEEAGREE="";
	String zSCOEMPLOYEE=LblNotAgree2;
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
		zSCOEMPLOYEE= LblAgree;
	 }
	else if (zSCOEMPLOYEEAGREE.equals("0"))
	{
		zSCOEMPLOYEE= LblNotAgree;
	}

%>
<br>
<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo">
	<td colspan="1" width="28%"><m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" /></td>

	<td class="tablamenuright" ><a title="<%=LinkEval%>"href="javascript:history.back();">
	<img alt="<%=LinkEval%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<tr>
	<td class="fuentevalor" colspan="2"><m4:item  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" /></td>

</tr>

</table>
<br>
<table class="tablaestados" width="100%" cellspacing="0" border="0">
<tr class="tablaestadosceldatitulo">
	<td colspan="1" width="28%"><%=LblEval%></td>
	<td colspan="1" width="25%">&nbsp</td>
	<td class="tablamenuright" >
	<a title="<%=LinkValEv%>"href="javascript:history.back();">
	<img alt="<%=LinkValEv%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<tr>
	<td class="fuentevalor" width="28%"><%=LblOp%></td>
	<td class="fuentevalor" width="25%"><%=zSCOEMPLOYEE%></td>
	<td class="fuentevalor">&nbsp;&nbsp;</td>
</tr>
<tr>
	<td class="fuentevalor2" width="28%"><%=LblComentario%></td>
	<td class="fuentevalor2" width="25%"><%=zSCOEMPLOYEECOMM%></td>
	<td class="fuentevalor2">&nbsp;&nbsp;</td>
</tr>
</table>


<%if (mss=="0"){%>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
<m4:endpage/>
</body>
</html>


