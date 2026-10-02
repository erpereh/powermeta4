
<%

String pathImgAddComment = "/iconos/ic_next_edit_16_16_0.gif"; 
String zOrg="/iconos/wunits_visibility_36_36.gif";
String zPersonal="/iconos/add.gif";   
String zAyuda="/iconos/info_12.gif";   
String zlabelOrg=TranEss.getProperty("ev_ess.zlabelOrg");
   
String zlabelPersonal=TranEss.getProperty("ev_ess.zlabelPersonal");

String Ver = "";
 Ver = Tran.getProperty("Label.Ver");
String pathImgViewComment = "/iconos/lu_hot_info_24.gif";
String ViewComment = Tran.getProperty("Button.ViewComment");
%>
<script type="text/javascript">

function navegar (ord) {
var parametros = new Array("estado","ord");
var valores = new Array(31,ord);
m4navegar("sse_g3/sse_g3_p5_open_vis_know.jsp",parametros,valores);
}
function navegar2 (ord) {
var parametros = new Array("estado","ord");
var valores = new Array(31,ord);
m4navegar("sse_g3/sse_g3_p5_open_vis_obj.jsp",parametros,valores);
}

function navegar3 (ord) {
var parametros = new Array("estado","ord");
var valores = new Array(31,ord);
m4navegar("sse_g3/sse_g3_p5_open_vis_obj2.jsp",parametros,valores);
}
</script>
<%
	String zpos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ord");
	String zsubsesion = "SSE_H_EVALUATOR_OPEN";
	String zmeta4object = "SSE_H_EVALUATOR_OPEN";
	String znodo = "SSE_H_EVALUATOR_OPEN";
	String znodo0 = "SSE_EVALUATOR_OPEN";
	String znodo1 = "SSE_EVAL_CAPAB_OPEN";
	String znodo2 = "SSE_EVAL_OBJECT_OPEN";
	String znodo3 = "SSE_EVAL_OBJECT_OPEN_CUAN";
	
	
	String zoutputdef = zsubsesion + "!" + znodo + "["+zpos+"]";
	String zmove = znodo + ":" + znodo + "["+zpos+"]";
	String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
	String zmove0 = znodo0 + ":" + znodo0 + "[FIRST]";



	
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
	
	String zSCONMEVALPROC = zcomun + "SCO_NM_EVAL_PROC"; 
	String zSCODTSTEVPER = zcomun + "SCO_DT_ST_EV_PER"; 
	String zSCODTENDEVPER = zcomun + "SCO_DT_END_EV_PER"; 
	String zSTDNJOBCODE = zcomun + "STD_N_JOB_CODE"; 
	
	String zSCONMOBJECTIVE = zcomun2 + "SCO_NM_OBJECTIVE"; 
	String zSCONMLEVEL = zcomun2 + "SCO_NM_LEVEL"; 
	String zSCONMLEVEL21 = zcomun2+ "SCO_NM_LEVEL_1";
	String zSCONMLEVEL21SEG = zcomun2+ "SSCO_NM_LEVEL_AUTO_SEG";	
	String zSCO_NM_CRITERIA_TYPE2 = zcomun2+ "SCO_NM_CRITERIA_TYPE";
	String zSCONMLEVELA2 = zcomun2+ "SCO_NM_LEVEL_AUTO";
	String zSCOIDOBJECTIVE = zcomun2 + "SCO_ID_OBJECTIVE";
	String zSCOIDOBJREQLVL1 = zcomun2 + "SCO_ID_OBJ_REQ_LVL";
	String zSCOCOMMENT2 = zcomun2 + "SCO_COMMENT";	
	
	
	String zSCONMOBJECTIVE2 = zcomun3 + "SCO_NM_OBJECTIVE"; 
	String zSCONMMAGNITUDE = zcomun3 + "SCO_NM_MAGNITUDE"; 
	String zSCOSCHEDVALUE = zcomun3 + "SCO_SCHED_VALUE"; 
	String zSCO_NM_CRITERIA_TYPE3 = zcomun3+ "SCO_NM_CRITERIA_TYPE";
	String zSCO_VALUE = zcomun3+ "SCO_VALUE";
	String zSCO_SCHED_VALUE_AUTOE = zcomun3+ "SCO_SCHED_VALUE_AUTO";
	String zSCO_SCHED_VALUE_AUTOESEG = zcomun3+ "SSCO_SCHED_VALUE_AUTO_SEG";	
	String zSCOIDOBJECTIVE2 = zcomun3 + "SCO_ID_OBJECTIVE";
	String zSCOIDMAGNITUD = zcomun3 + "SCO_ID_MAGNITUD";
	String zSCOCOMMENT3 = zcomun3 + "SCO_COMMENT_2";		


	
	String zSCODTSTARTEVAL = zcomun + "SCO_DT_START_EVAL"; 
	String zSCOORHRROLE = zcomun + "SCO_OR_HR_ROLE";
	String zSCOIDHR = zcomun + "SCO_ID_HR";
	String zSCOIDMEASURETP =zcomun+ "SCO_ID_MEASURE_TP";
	String zSCODTSTARTPROC =zcomun+ "SCO_DT_START_PROC";
	
	String zSCONMEXTDKNTYP =zcomun1+ "SCO_NM_EXTD_KN_TYP";
	String zSCONMLEVEL1 =zcomun1+ "SCO_NM_LEVEL";
	String zSCONMEXTDKN = zcomun1+ "SCO_NM_EXTD_KN";
	String zSCOIDCAPABILITY = zcomun1+ "SCO_ID_CAPABILITY";
	String zSCODTSTARTREQ = zcomun1 + "SCO_DT_START_REQ";
	String zSCOIDOBJREQLVL = zcomun1 + "SCO_ID_CAP_REQ_LVL";

	String zSCO_NM_CRITERIA_TYPE1 = zcomun1+ "SCO_NM_CRITERIA_TYPE";
	String zSCONMLEVEL11 =zcomun1+ "SCO_NM_LEVEL_1";
	String zSCONMLEVELA=zcomun1+ "SCO_NM_LEVEL_AUTO";
	String zSCONMLEVELASEG=zcomun1+ "SSCO_NM_LEVEL_AUTO_SEG";	
	

	
	String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_H_EVALUATOR_OPEN.SSE_LOAD_DATA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
	<m4:param name="ARG_POS" value="<%=zpos%>"/>

</m4:exec>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove0%>"/></m4:move>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
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
int  zcountittotal  = zcounti1+zcounti2+zcounti3;	
%>

<m4:item   m4varname="zNmEvalProc" item="SCO_NM_EVAL_PROC"  htmlsafe="true"  outputdef="<%=znodo%>" />

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.LinkHistEvOpenVis")%> : <%=zNmEvalProc%></td></tr>
<tr>
	<td><img alt="<%=TranEss.getProperty("ev_ess.LinkHistEvOpen")%>" src="/iconos/noname_historial_evaluaciones_ess_93_100.gif" width="93" height="100"  /></td>
	<td>
	<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrHistEvOpenVis")%></div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="<%=TranEss.getProperty("ev_ess.LblHistEvOpen")%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5_open.jsp?estado=3"><%=TranEss.getProperty("ev_ess.LinkHistEvOpen")%></a></li>
	</ul>
	</td>
</tr>
</table>
<%if (zcountittotal > 0) {%>
<m4:item   m4varname="zCkSeg" item="SCO_CK_FASE_SEG" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item   m4varname="zAuto" item="SSCO_AUTO" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item   m4varname="zAutoSeg" item="SSCO_AUTO_SEG" htmlsafe="true" outputdef="<%=znodo%>"/>
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
<td><m4:label m4name="<%=zSCONMEXTDKNTYP%>" htmlsafe = "true"/></td>
<td><m4:label m4name="<%=zSCONMLEVEL1%>" htmlsafe = "true"/></td>
<%if (zCkSeg.equals("1")){%><td><m4:label m4name="<%=zSCONMLEVEL11%>" htmlsafe = "true"/></td><%}%>
<%if (zAutoSeg.equals("1")){%><td><m4:label m4name="<%=zSCONMLEVELASEG%>" htmlsafe = "true"/></td><%}%>
<%if (zAuto.equals("1")){%><td><m4:label m4name="<%=zSCONMLEVELA%>" htmlsafe = "true"/></td><%}%>

</tr>	
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv1).intValue()-1).toString()%>">
<m4:item   m4varname="zCri1" item="SCO_ID_CRITERIA_TYPE"  htmlsafe="true"  outputdef="<%=znodo1%>" />

<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
<tr>
	
	<td class="fuentevalor<%=zPaint%>">
	<img style='cursor:pointer' DtStart="<m4:item m4name="<%=zSCODTSTARTREQ%>" htmlsafe = "true"/>" IdExtdKn="<m4:item m4name="<%=zSCOIDCAPABILITY%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCOIDOBJREQLVL%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true" />
	<%if(zCri1.equals("01")){%>
	<img  title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>"src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}else if(zCri1.equals("02")){%>
	<img title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>" src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}%>
	</td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMEXTDKNTYP%>" htmlsafe = "true"/></td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL1%>" htmlsafe = "true"/></td>
	<%if (zCkSeg.equals("1")){%><td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL11%>" htmlsafe = "true"/></td><%}%>
	<%if (zAutoSeg.equals("1")){%><td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVELASEG%>" htmlsafe = "true"/></td><%}%>
	<%if (zAuto.equals("1")){%><td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVELA%>" htmlsafe = "true"/></td><%}%>
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
<%if (zCkSeg.equals("1")){%><td><m4:label m4name="<%=zSCONMLEVEL21%>" htmlsafe = "true"/></td><%}%>
<%if (zAutoSeg.equals("1")){%><td><m4:label m4name="<%=zSCONMLEVEL21SEG%>" htmlsafe = "true"/></td><%}%>
<%if (zAuto.equals("1")){%><td><m4:label m4name="<%=zSCONMLEVELA2%>" htmlsafe = "true"/></td><%}%>

</tr>	
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">


<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	 if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>
<form name="b<%=zposicions%>" id="b<%=zposicions%>" action=" "onSubmit="return false">
<input id="zSCOCOMMENT2<%=zposicions%>" name="zSCOCOMMENT2<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSCOCOMMENT2%>" htmlsafe = "true"/>" />
<m4:item   m4varname="zCri2" item="SCO_ID_CRITERIA_TYPE"  htmlsafe="true"  outputdef="<%=znodo2%>" />
<tr>
	<td class="fuentevalor<%=zPaint%>">
	<a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('zSCOCOMMENT2<%=zposicions%>','b<%=zposicions%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>	
	<img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVE%>" htmlsafe = "true"/>" IdLevel="<m4:item m4name="<%=zSCOIDOBJREQLVL1%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<m4:item m4name="<%=zSCONMOBJECTIVE%>" htmlsafe = "true" />
		<%if(zCri2.equals("01")){%>
		<img  title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>"src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		<%}else if(zCri2.equals("02")){%>
		 <img title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>" src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}%>
	</td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td>
	<%if (zCkSeg.equals("1")){%>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL21%>" htmlsafe = "true"/></td><%}%>
	<%if (zAutoSeg.equals("1")){%>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVEL21SEG%>" htmlsafe = "true"/></td>
	<%}%>	
	
	<%if (zAuto.equals("1")){%><td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCONMLEVELA2%>" htmlsafe = "true"/></td><%}%>
</tr>	
</form>
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
<td><m4:label m4name="<%=zSCOSCHEDVALUE%>" htmlsafe = "true"/></td>
<%if (zCkSeg.equals("1")){%>
<td><m4:label m4name="<%=zSCO_VALUE%>" htmlsafe = "true"/></td><%}%>
<%if (zAutoSeg.equals("1")){%><td><m4:label m4name="<%=zSCO_SCHED_VALUE_AUTOESEG%>" htmlsafe = "true"/></td><%}%>
<%if (zAuto.equals("1")){%><td><m4:label m4name="<%=zSCO_SCHED_VALUE_AUTOE%>" htmlsafe = "true"/></td><%}%>

</tr>	
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">

<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
 	 if (zcontrol==0){zPaint="";}else{zPaint="2";}
%>

<form name="c<%=zposicions%>" id="c<%=zposicions%>" action=" "onSubmit="return false">
<input id="zSCOCOMMENT3<%=zposicions%>" name="zSCOCOMMENT3<%=zposicions%>" type="hidden" value="<m4:item m4name="<%=zSCOCOMMENT3%>" htmlsafe = "true"/>" />
<m4:item   m4varname="zCri3" item="SCO_ID_CRITERIA_TYPE"  htmlsafe="true"  outputdef="<%=znodo3%>" />
<tr>
	<td class="fuentevalor<%=zPaint%>">
	<a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('zSCOCOMMENT3<%=zposicions%>','c<%=zposicions%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>	
	<img style='cursor:pointer' IdObjective="<m4:item m4name="<%=zSCOIDOBJECTIVE2%>" htmlsafe = "true"/>" IdMagnitud="<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<m4:item m4name="<%=zSCONMOBJECTIVE2%>" htmlsafe = "true" /></a>
			<%if(zCri3.equals("01")){%>
			<img  title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>"src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}else if(zCri3.equals("02")){%>
		 <img title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>" src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}%>
</td>
	<td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCOSCHEDVALUE%>" htmlsafe = "true"/>&nbsp;-&nbsp;<m4:item m4name="<%=zSCONMMAGNITUDE%>" htmlsafe = "true"/></td>
<%if (zCkSeg.equals("1")){%><td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_VALUE%>" htmlsafe = "true"/></td><%}%>
<%if (zAutoSeg.equals("1")){%><td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_SCHED_VALUE_AUTOESEG%>" htmlsafe = "true"/></td><%}%>
<%if (zAuto.equals("1")){%><td class="fuentevalor<%=zPaint%>"><m4:item m4name="<%=zSCO_SCHED_VALUE_AUTOE%>" htmlsafe = "true"/></td><%}%>
</tr>	
</form>
</m4:loop>
</table>
 <br/> <br/>
<%}%>
<%}else{%>
 <div class="fuentenodatos"><%=TranEss.getProperty("ev_ess.LblHistOpenNodata2")%></div>
 <br/> <br/><br/> <br/>
<%}%>




