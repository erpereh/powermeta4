<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp"%>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<title><%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%></title>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zID_HR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR");  
String zOR_HR_ROLE = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_HR_ROLE");  
String zDT_START = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START");  
String zc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zc");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zc==null)||(zc.equals(""))){zc = "0";}

if (zc.equals("0")){%>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%}else{%>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>

</head>
<body>
<%

	String zsubsesion = "SSE_EVAL360_VIS";
	String zmeta4object = "SSE_EVAL360_VIS";
	
	String znodo = "SSE_EVAL360_VIS";

	String znodo1 = "SSE_EVAL_CAPAB_360";
	String znodo2 = "SSE_EVAL_OBJECT_360";
	String znodo3 = "SSE_EVAL_OBJECT_CUAN_360";
	
	
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	String zmove= znodo+ ":" + znodo1 + "[FIRST]";


	
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
	
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
	String zcomun2 = znodo2+ ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
String znamenodo2  = znodo2+ ":" + zsubsesion  + "!" + znodo2;


	String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
	String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
	String zcomun3 = znodo3+ ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
String znamenodo3  = znodo3+ ":" + zsubsesion  + "!" + znodo3;
	
 
	
	String zSCONMOBJECTIVE = zcomun2 + "SCO_NM_OBJECTIVE"; 
	String zSCONMLEVEL = zcomun2 + "SCO_NM_LEVEL"; 
	String zSCO_NM_CRITERIA_TYPE2 = zcomun2 + "SCO_NM_CRITERIA_TYPE"; 

	
	
		String zSCONMOBJECTIVE2 = zcomun3 + "SCO_NM_OBJECTIVE"; 
	String zSCONMMAGNITUDE = zcomun3 + "SCO_NM_MAGNITUDE"; 
	String zSCOSCHEDVALUE = zcomun3 + "SCO_SCHED_VALUE"; 
	String zSCO_NM_CRITERIA_TYPE3 = zcomun3 + "SCO_NM_CRITERIA_TYPE"; 
	

	
	String zSCONMEXTDKNTYP =zcomun1+ "SCO_NM_EXTD_KN_TYP";
	String zSCONMLEVEL1 =zcomun1+ "SCO_NM_LEVEL";
	String zSCONMEXTDKN = zcomun1+ "SCO_NM_EXTD_KN";
	String zSCOIDCAPABILITY = zcomun1+ "SCO_ID_CAPABILITY";
	String zSCO_NM_CRITERIA_TYPE1 = zcomun1 + "SCO_NM_CRITERIA_TYPE"; 


	
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_EVAL360_VIS.SSE_LOAD";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
	<m4:param name="ARG_ID_HR" value="<%=zID_HR%>"/>
	<m4:param name="ARG_DT_START_EVAL" value="<%=zDT_START%>"/>
	<m4:param name="ARG_OR_HR_ROLE" value="<%=zOR_HR_ROLE%>"/>
</m4:exec>

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
	int  zcount2  = 0;
	int  zcounti2  = 0;	
	int  zcount3  = 0;
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
	int zcounttotal= zcounti1+zcounti2+zcounti3;
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%></td></tr>
<tr>
	<td><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEvOpen")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
	<td>
	<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_vis_desc")%></div>
	</td>
</tr>
</table>
<%if (zcounttotal>0){%>
<%
int zcontrol = 0;
String zposicions = "0";
int zposicion =0;
String  zPaint="";
if (zcount1 > 0) {
%>
 <table width="100%" cellspacing="0">
<tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo1%>" htmlsafe="true"/></td></tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " >
<td ><m4:label m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/> </td>
<td><m4:label m4name="<%=zSCONMLEVEL1%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCONMEXTDKNTYP%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE1%>" htmlsafe = "true"/></td>
</tr>	
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
<tr>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true" /></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL1%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMEXTDKNTYP%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE1%>" htmlsafe = "true"/></td>
</tr>	
</m4:loop>
</table> <br/> <br/>
<%}if (zcount2 > 0) {
	 zposicions = "0";
	 zcontrol = 0;
 zposicion =0;
%>
<table width="100%" cellspacing="0">
<tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo2%>" htmlsafe="true"/></td></tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo" >
<td ><m4:label m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true"/> </td>
<td><m4:label m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE2%>" htmlsafe = "true"/></td>
</tr>	
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	 if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
<tr>
	<td class="fuentevalor<%=zPaint%>"> <m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true" /></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE2%>" htmlsafe = "true"/></td>
</tr>	
</m4:loop>
</table> <br/> <br/>
 <%}if (zcount3 > 0) {
	 zposicions = "0";
	 zcontrol = 0;
 zposicion =0;
%>
<table width="100%" cellspacing="0">
<tr><td class="descripcionfuncional" ><m4:label m4name="<%=znamenodo3%>" htmlsafe="true"/></td></tr>
</table>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo" >
<td ><m4:label m4name="<%=zSCONMOBJECTIVE2%>" htmlsafe = "true"/> </td>
<td><m4:label m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCOSCHEDVALUE%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCO_NM_CRITERIA_TYPE3%>" htmlsafe = "true"/></td>
</tr>	
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	 if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
<tr>

	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMOBJECTIVE2%>" htmlsafe = "true" /></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCOSCHEDVALUE%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_NM_CRITERIA_TYPE3%>" htmlsafe = "true"/></td>

</tr>	

</m4:loop>
</table>
 <br/> <br/>
 <%}%>
<%}else{%>
 <div class="fuentenodatos"><%=TranEss.getProperty("ev_ess.LblHistOpenNodata2")%></div>
 <br/> <br/><br/> <br/>
<%}%>


</div>
<m4:endpage/>
</body>
</html>


