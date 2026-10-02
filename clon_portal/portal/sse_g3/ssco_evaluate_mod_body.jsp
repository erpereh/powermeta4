<%String zAyuda="/iconos/info_12.gif";  
String zLabelConocimiento=TranEss.getProperty("ev_ess.LblCono");
String zLabelObj=TranEss.getProperty("ev_ess.LblObj");
String zOrg="/iconos/wunits_visibility_36_36.gif";
String zPersonal="/iconos/add.gif"; 
String znodoaux="";
String zmoveaux="";
String zlabelOrg=TranEss.getProperty("ev_ess.zlabelOrg");
String zlabelPersonal=TranEss.getProperty("ev_ess.zlabelPersonal");
 %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javaScript">
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

	String zsubsesion = "SSCO_H_EVALUTE";
	String zmeta4object = "SSCO_H_EVALUTE";
	String znodo = "SSCO_EVALUATOR_TEMP";
	String znodo1 = "SSCO_EVAL_CAPAB_TEMP";
	String znodo2 = "SSCO_EVAL_OBJECT_TEMP";
	String znodo3 = "SSCO_EVAL_OBJECT_CUAL_TEMP";

	String zoutputdef = zsubsesion + "!" + znodo + "["+pos+"]";
	String zmove = znodo + ":" + znodo + "[FIRST]";
	String zraiz = zsubsesion + "!" + znodo + ".";
		
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";

	String Proceso = "" ;
	String Evaluador = "" ;

	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
	String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";


	String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
	String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";

	String zmetodo = "CARGA:" + zsubsesion + "!SSCO_EVALUATOR_TEMP.SSCO_LOAD_EVALUTE";
 
String scount="";
String scounto="";
String znodoaux3="";
String zmoveaux3="";



%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ARG_ORDINAL" value="<%=zordinal%>"/></m4:exec>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:exec node="<%=znodo1%>" alias="counteval" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:exec node="<%=znodo3%>" alias="countObjc" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>	
<m4:outputexec var="scount" alias="counteval"/>
<m4:outputexec var="scounto" alias="countObjc"/>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<% 
int iEvalCapab=0;
String zmoves=znodo1 + ":" + znodo1 ;
String zalias="";
int h = 0;
	try {
		iEvalCapab = Integer.parseInt(scount); 
		for (h = 0; h < iEvalCapab; h++){
			zmoves=znodo1 + ":" + znodo1 +"["+String.valueOf(h)+"]";
			zalias="SSCO_K_LEVEL_TEMP"+String.valueOf(h);
		%>
			<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
			<m4:outputdef m4alias="<%=zalias%>"><m4:param name="m4name0" value="SSCO_H_EVALUTE!SSCO_K_LEVEL_TEMP[*]"/></m4:outputdef>
			<%
		}
	} catch(Exception e) {}
%>



<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<%
int iEvalObj=0;
String zmoveso=znodo3 + ":" + znodo3 ;
String zalias3="";
int hb = 0;
	try {
		iEvalObj = Integer.parseInt(scounto); 
		for (hb = 0; hb < iEvalObj; hb++){
			zmoveso=znodo3 + ":" + znodo3 +"["+String.valueOf(hb)+"]";
			zalias3="SSCO_O_LEVEL_TEMP"+String.valueOf(hb);
		%>
			<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveso%>"/></m4:move>
			<m4:outputdef m4alias="<%=zalias3%>"><m4:param name="m4name0" value="SSCO_H_EVALUTE!SSCO_O_LEVEL_TEMP[*]"/></m4:outputdef>
			<%
		}
	} catch(Exception e) {}
%>

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
	<div class="descripcionfuncional"><%=TranEss.getProperty("ev_ess.DescrResEv")%> <m4:item  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/>, <%=TranEss.getProperty("ev_ess.DescrResEvSeg2")%>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title ="<%=TranEss.getProperty("ev_ess.Val")%>" href="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate.jsp?estado=31"><%=TranEss.getProperty("ev_ess.Val")%></a></li>
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluate_act.jsp" method="post" name="nombreformulario" id="nombreformulario">

<input type="hidden" id="ordinal" name="ordinal"  value="<m4:item  item="ORDINAL" htmlsafe="true" outputdef="<%=znodo%>" />" />
<% if (zcount1 > 0) {%>
<m4:item m4varname="zSCO_CALCUL_CAP" item="SCO_CALCUL_CAP" htmlsafe="true" outputdef="<%=znodo%>" />
<%if ((zSCO_CALCUL_CAP==null)||(zSCO_CALCUL_CAP.equals(""))){%>
<%}else{%>
<table class="eval_form" width="100%" cellspacing="0">
<tr>
<td class="labeli">
	<m4:label  item="SCO_CALCUL_CAP" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	 
	 <td class="label">
	<m4:item  item="SSCO_NM_GB_CAP" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
<td class="label">
	<m4:item  item="SCO_CALCUL_CAP" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
	</tr>
	
</table>
<%}%>
<table class="eval_form" width="100%" cellspacing="0">
<tr class="title">
	<td><m4:label  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/></td>	
	<td><m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo1%>"/></td>	
	<td><m4:label  item="SCO_VALUE_RAT" htmlsafe="true" outputdef="<%=znodo1%>"/></td>	
	<td><m4:label  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo1%>"/></td>	
</tr>
<m4:dataloop outputdef="<%=znodo1%>">
	<m4:item m4varname="zSCO_ID_CRITERIA_TYPE" item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo1%>" />
		<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
			<%
	znodoaux="SSCO_K_LEVEL_TEMP"+current;
	zmoveaux =znodoaux+ ":" + "SSCO_K_LEVEL_TEMP" + "[FIRST]";
	%>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
<tr>
<td class="label_b">
<img style='cursor:pointer' IdExtdKn="<m4:item item="SCO_ID_CAPABILITY" htmlsafe="true" outputdef="<%=znodo1%>"/>" IdLevel="<m4:item item="SCO_ID_CAP_RAT_LVL" htmlsafe="true" outputdef="<%=znodo1%>"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/>

	<%if(zSCO_ID_CRITERIA_TYPE.equals("01")){%>
			<img  title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>" src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}else if(zSCO_ID_CRITERIA_TYPE.equals("02")){%>
		 <img  title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>"src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}%>
			<div id="cono<%=current%>"class="no_vis">
		<table width="80%" class = "eval_div" cellspacing="0">
		<tr class = "title"><td  colspan="2">&nbsp;</td></tr>
		<tr class = "tr_div"><td  colspan="2">&nbsp;</td></tr>
		<tr class="tr_div">
			<td><%=zLabelConocimiento%>&nbsp;:&nbsp;</td>
			<td  class = "label_div">&nbsp;<m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
		</tr>
		<tr class = "tr_div"><td  colspan="2">&nbsp;</td>
		</table>
		<table width="80%" class="eval_div">			
		<tr class="title"><td><m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/></td><td><m4:label  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodoaux%>"/></td></tr>
		<m4:dataloop outputdef="<%=znodoaux%>">
		<tr><td><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/></td><td><m4:item  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodoaux%>"/></td></tr>
		</m4:dataloop>
		<tr class = "title"><td  colspan="2">&nbsp;</td>
		</table>
		</div>	 
</td>

<td class="label"><m4:item  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class="label"><m4:item  item="SCO_VALUE_RAT" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
<td class="label"><m4:item  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
</tr>
</m4:dataloop>
</table>

</br>
<%}%>

<% if (zcount2 > 0) {%>
<m4:item m4varname="zSCO_VALUE_OBJ_QUANT" item="SCO_VALUE_OBJ_QUANT" htmlsafe="true" outputdef="<%=znodo%>" />
<%if ((zSCO_VALUE_OBJ_QUANT==null)||(zSCO_VALUE_OBJ_QUANT.equals(""))){%>
<%}else{%>
<table class="eval_form" width="100%" cellspacing="0">
<tr>
<td class="labeli"><m4:label  item="SCO_VALUE_OBJ_QUANT" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
<td class="label"><m4:item  item="SCO_VALUE_OBJ_QUANT" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr>
</table>
<%}%>
<table class="eval_form" width="100%" cellspacing="0">
<tr class="title">
<td><m4:label  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo2%>"/></td>	
<td><m4:label  item="SCO_ACCOMP_DEGREE" htmlsafe="true" outputdef="<%=znodo2%>"/></td>	
<td><m4:label  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo2%>"/></td>	
</tr>
<m4:dataloop outputdef="<%=znodo2%>">
<m4:item m4varname="zSCO_ID_CRITERIA_TYPE2" item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo2%>" />
<m4:current m4varname="zposicions2" outputdef="<%=znodo2%>"/>
<tr>
	<td class="label_b">
<img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo2%>"/>" IdMagnitud="<m4:item item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodo2%>"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo2%>"/>
		<%if(zSCO_ID_CRITERIA_TYPE2.equals("01")){%>
			<img  title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>" src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}else if(zSCO_ID_CRITERIA_TYPE2.equals("02")){%>
		 <img title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>"src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}%>
	<div id="obja<%=zposicions2%>"class="no_vis">
	<table width="80%" class = "eval_div" cellspacing="0">
	<tr class = "title"><td  colspan="2">&nbsp;</td></tr>
	<tr class = "tr_div"><td  colspan="2">&nbsp;</td></tr>
	<tr class="tr_div"><td><m4:label  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo2%>"/>&nbsp;:&nbsp;</td><td  class = "label_div">&nbsp;<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo2%>"/></td></tr>
	<tr ><td colspan="2"><m4:item  item="SCO_COMMENT_1" htmlsafe="true" outputdef="<%=znodo2%>"/></td></tr>
	<tr class = "tr_div"><td  colspan="2">&nbsp;</td>
	<tr class="tr_div"><td><m4:label  item="SCO_NM_MAGNITUDE" htmlsafe="true" outputdef="<%=znodo2%>"/>&nbsp;:&nbsp;</td><td  class = "label_div">&nbsp;<m4:item  item="SCO_NM_MAGNITUDE" htmlsafe="true" outputdef="<%=znodo2%>"/></td></tr>
	<tr ><td colspan="2"><m4:item  item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znodo2%>"/></td></tr>
	<tr class = "title"><td  colspan="2">&nbsp;</td></tr>
	</table>
	</div>
</td>

<td class="label"><m4:item  item="SCO_ACCOMP_DEGREE" htmlsafe="true" outputdef="<%=znodo2%>"/>&nbsp;
<m4:item  item="SCO_NM_MAGNITUDE" htmlsafe="true" outputdef="<%=znodo2%>"/>


</td>
<td class="label"><m4:item  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
</tr>
</m4:dataloop>
</table>
</br>
<%}%>
<% if (zcount3 > 0) {%>

<m4:item m4varname="zSCO_CALCUL_OBJ" item="SCO_CALCUL_OBJ" htmlsafe="true" outputdef="<%=znodo%>" />
<%if ((zSCO_CALCUL_OBJ==null)||(zSCO_CALCUL_OBJ.equals(""))){%>

<%}else{%>
<table class="eval_form" width="100%" cellspacing="0">
<tr>
<td class="labeli"><m4:label  item="SCO_CALCUL_OBJ" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
<td class="label"><m4:item  item="SSCO_NM_GB_OBJ" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
<td class="label"><m4:item  item="SCO_CALCUL_OBJ" htmlsafe="true" outputdef="<%=znodo%>"/></td>	
</tr>
</table>
<%}%>
<table class="eval_form" width="100%" cellspacing="0">
<tr class="title">
<td><m4:label  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>"/></td>	
<td><m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo3%>"/></td>	
<td><m4:label  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo3%>"/></td>	
</tr>
<m4:dataloop outputdef="<%=znodo3%>">
<m4:item m4varname="zSCO_ID_CRITERIA_TYPE3" item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo3%>" />
<m4:current m4varname="current3" outputdef="<%=znodo3%>"/>
<%
znodoaux3="SSCO_O_LEVEL_TEMP"+current3;
zmoveaux3 =znodoaux3+ ":" + "SSCO_O_LEVEL_TEMP" + "[FIRST]";
%>
<tr>
<td class="label_b">
<img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>"/>" IdLevel="<m4:item  item="SCO_ID_OBJ_RAT_LVL" htmlsafe="true" outputdef="<%=znodo3%>" />" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>"/>
	<%if(zSCO_ID_CRITERIA_TYPE3.equals("01")){%>
			<img   title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>"src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}else if(zSCO_ID_CRITERIA_TYPE3.equals("02")){%>
		 <img title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>" src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		 <%}%>
		 	
 <div id="obj<%=current3%>"class="no_vis">
	<table width="80%" class = "eval_div" cellspacing="0">
	<tr class = "title"><td  colspan="2">&nbsp;</td></tr>
	<tr class = "tr_div"><td  colspan="2">&nbsp;</td></tr>
	<tr class="tr_div"><td><%=zLabelObj%>&nbsp;:&nbsp;</td><td  class = "label_div">&nbsp;<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>"/></td></tr>
	<tr class = "tr_div"><td  colspan="2">&nbsp;</td>
	</table>
	<table width="80%" class="eval_div">			
	<tr class="title"><td><m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux3%>"/></td><td><m4:label  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodoaux3%>"/></td></tr>
	<m4:dataloop outputdef="<%=znodoaux3%>">
	<tr><td><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux3%>"/></td><td><m4:item  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodoaux3%>"/></td></tr>
	</m4:dataloop>
	<tr class = "title"><td  colspan="2">&nbsp;</td></tr>
	</table>
	</div>		 	
</td>
<td class="label"><m4:item  item="SCO_MEANING" htmlsafe="true" outputdef="<%=znodo3%>"/>&nbsp;<m4:item  item="SCO_NM_MAGNITUDE" htmlsafe="true" outputdef="<%=znodo3%>"/></td>
<td class="label"><m4:item  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo3%>"/></td>
</tr>
</m4:dataloop>
</table>
</br>
<%}%>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo"><td  >&nbsp;<m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr>
<tr ><td class="fuentecampo" >&nbsp;<m4:item  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr>
</table>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo"><td  >&nbsp;<m4:label  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr>
<tr ><td class="fuentecampo" >&nbsp;<m4:item  item="SCO_STRENGTHS" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr>
</table>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo"><td  >&nbsp;<m4:label  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr>
<tr><td class="fuentecampo" >&nbsp;<m4:item  item="SCO_AREAS_IMP" htmlsafe="true" outputdef="<%=znodo%>"/></td>	</tr>
</table>
<br>
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">	<td colspan="3"><%=TranEss.getProperty("ev_ess.Val")%></td></tr>
<tr>
	<td class="fuentecampo"><%=TranEss.getProperty("ev_ess.LblComentario")%></td>	
	<td class="fuentevalor" colspan="2"><textarea rows="3" cols="40" class="fuenteformulario" id="SCO_EMPLOYEE_COMM" name="SCO_EMPLOYEE_COMM" title="<%=Tran.getProperty("Label.Comment2")%>"  tabindex="1" ></textarea></td>
</tr>
<tr>
	<td class="fuentecampo"><%=TranEss.getProperty("ev_ess.LblAgree")%></td>
	<td class = "fuentecampo" colspan="2"><input type="radio" id="SCO_EMPLOYEE_AGREE" name="SCO_EMPLOYEE_AGREE"  value="1" checked="checked" /></td>
</tr>
<tr>
	<td class="fuentecampo"><%=TranEss.getProperty("ev_ess.LblNotAgree")%></td>
	<td class = "fuentecampo"colspan="2"><input type="radio" id="SCO_EMPLOYEE_AGREE" name="SCO_EMPLOYEE_AGREE"value="0" /></td>
</tr>
<tr><td class="fuenteboton" colspan="4"><a href="javascript:comprobar();" title="<%=Tran.getProperty("Button.Send")%>"><img alt="<%=Tran.getProperty("Button.Send")%>"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover=" m4sombra(this)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>



