<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%    
String id_cap = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap");  
if ((id_cap==null)||(id_cap.equals(""))){id_cap = "";}
String spos = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos");  
if ((spos==null)||(spos.equals(""))){spos = "";}
String sResult = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult");  
if ((sResult==null)||(sResult.equals(""))){sResult = "0";}
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");  
if ((mss==null)||(mss.equals(""))){mss = "0";}
String  zTit="";
String zNodata ="";
String Save = "";
String zSaveTempCalc="";
%>
<%
if (mss.equals("0")==true){
%>   
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%@ include file="/sse_generico/sse_generico_trans.jsp" %>
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<%
zNodata =Tran.getProperty("Label.NoDataFound");
Save = Tran.getProperty("Button.SaveTemp");
zTit=TranEss.getProperty("ev_ess.TitQuestion");
zSaveTempCalc= Tran.getProperty("Button.SaveTempCalc");
}else{%>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%@ include file="/mss_generico/mss_generico_trans.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
<%
zNodata =Tran.getProperty("Label.NoDataFound");
zTit=TranMss.getProperty("ev_ess.TitQuestion");
 Save = Tran.getProperty("Button.SaveTemp");
 zSaveTempCalc= Tran.getProperty("Button.SaveTempCalc");
}%>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<title><%=zTit%></title>
</head>
<body>
<script type="text/javascript">
var vpos='<%=spos%>';
function guard(j){
var idselect="";var fo="";var comen= "";var id_ques="";var cono="";
for (var p=0;p<j;p++){
	idselect="select" + p;
	fo = "a"+p;
	id_ques="id_ques"+p;
	comen = "comment"+p;
	cono=cono+m4valor(fo,id_ques,"","get")+"|$|"+m4select(m4objeto(idselect,fo),"value")+"|$|"+m4valor(fo,comen,"","get") + "|$|";
}	
m4valor("nombreformulario","SSE_CONO_QUESTION",cono,"set");
m4submit("nombreformulario");
}
function comprobar(j){
m4valor("nombreformulario","SSE_CAL_QUESTION","1","set");
guard(j);
}

function AddComent(objeto){
	var path = "/mss_g3/espanol/comentario.jsp?comment=" + objeto.value
	comentario = showModalDialog(path, objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
   objeto.value = comentario;
}

function returnvalues(ar){
if (typeof(opener.oventana) == "object"){
for (var i=0; i < opener.oventana.m4prop_areturnedValue.length; i++){

  if (typeof(ar[i]) != "undefined"){
   opener.oventana.m4prop_areturnedValue[i].value =  ar[i];
  }
}}
if (typeof(opener.oventana) == "object"){   
   if (opener.oventana.m4prop_afterclosewindowmet != ""){ 
   		eval('opener.'+opener.oventana.m4prop_afterclosewindowmet);
   }
   opener.oventana = "";
}
window.opener.mod(vpos); 
window.close();
}
</script>
<%
String zsubsesion = "SSCO_H_EVALUTE";
String zmeta4object = "SSCO_H_EVALUTE";

String znodo1 = "SSCO_EVAL_CAPAB";
String znodo2 = "SSCO_EV_CAPAB_QUESTIONS";
String znodo3 = "SSCO_SV_ANSWER_TP_VALUE"; 

String zventanas = "6";
int zvuelta = 3;
String zestado = "31";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "["+spos+"]";
String zmove1 = znodo1 + ":" + znodo1 + "["+spos+"]";
String zraiz1 =  znodo1 + ":" + zsubsesion  + "!"+ znodo1+"." ; 

String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
String zcomun2 = znodo2 + ":" + zmeta4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";

String znamenodo  = znodo2 + ":" + zsubsesion  + "!" + znodo2;
String zSCO_NM_EXTD_KN = zraiz1 + "SCO_NM_EXTD_KN";
String zmetodocarga = zsubsesion + "!SSCO_EVAL_CAPAB.LOAD_QUESTIONS";

String scountquestion="";
%>	
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="ARG_SCO_ID_CAPABILITY" value="<%=id_cap%>"/></m4:exec>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:exec node="<%=znodo2%>" alias="countquestion" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>	
<m4:outputexec var="scountquestion" alias="countquestion"/>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<% 
int icountquestion=0;
String zmoves=znodo2 + ":" + znodo2 ;
String zalias="";
int h = 0;
	try {
		icountquestion = Integer.parseInt(scountquestion); 
		for (h = 0; h < icountquestion; h++){
			zmoves=znodo2 + ":" + znodo2 +"["+String.valueOf(h)+"]";
			zalias="SSCO_SV_ANSWER_TP_VALUE"+String.valueOf(h);
		%>
			<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
			<m4:outputdef m4alias="<%=zalias%>"><m4:param name="m4name0" value="SSCO_H_EVALUTE!SSCO_SV_ANSWER_TP_VALUE[*]"/></m4:outputdef>
			<%
		}
	} catch(Exception e) {}
%>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
int  zcount2  = 0;
String vsResultado="";
try {
	M4Operations m = new M4Operations(request);
	zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	} catch(Exception e) {}
	
%>
<form action="/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp" method="post" name="nombreformulario" id="nombreformulario">
<input type="hidden" id="SSE_CONOCIMIENTO_TEMP" name="SSE_CONOCIMIENTO_TEMP" value="<%=id_cap%>" />
<input type="hidden" id="spos" name="spos" value="<%=spos%>" />
<input type="hidden" id="mss" name="mss" value="<%=mss%>" />
<input type="hidden" id="SSE_CONO_QUESTION" name="SSE_CONO_QUESTION" value="" />
<input type="hidden" id="SSE_CAL_QUESTION" name="SSE_CAL_QUESTION" value="0" />
</form>
<table width="100%" cellspacing="0">
<tr>
<td class="titulofuncional"><m4:label m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe="true"/>&nbsp;:&nbsp;</td>
<td class="titulofuncional"><m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/>
</td>
</tr>
</table>
<% if (zcount2 > 0) { 
String znodoaux="";
String zmoveaux="";
String zidgroupant="";
String zidsubgroupant="";

%>
<table width="100%" cellspacing="0">
<m4:dataloop outputdef="<%=znodo2%>">
<m4:current m4varname="current" outputdef="<%=znodo2%>"/>
<form name="a<%=current%>" id="a<%=current%>" action=" ">
<%
	znodoaux="SSCO_SV_ANSWER_TP_VALUE"+current;
	zmoveaux =znodoaux+ ":" + "SSCO_SV_ANSWER_TP_VALUE" + "[FIRST]";
%>
<m4:item m4varname="id_groupshow" item="SCO_IND_SHOW_GROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
<m4:item m4varname="zidgroup" item="SCO_NM_QUESTION_GROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
<m4:item m4varname="zidsubgroup" item="SCO_NM_QUESTION_SUBGROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
<m4:item m4varname="id_subgroupgroupshow" item="SCO_IND_SHOW_SGROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
<%if (id_groupshow.equals("1")){%>
<%if ((zidgroupant=="")||(!zidgroupant.equals(zidgroup))){%>
<tr>
<td  colspan="4">&nbsp;
<m4:item  item="SCO_NM_QUESTION_GROUP" htmlsafe="true" outputdef="<%=znodo2%>"/>
</td>
</tr>
<%
zidgroupant=zidgroup;
}%>
<%}%>
<%if (id_subgroupgroupshow.equals("1")){%>

<%if ((zidsubgroupant=="")||(!zidsubgroupant.equals(zidsubgroup))){

%>
<tr><td class="tablaestadosceldatitulo" colspan="4">&nbsp;<m4:item  item="SCO_NM_QUESTION_SUBGROUP" htmlsafe="true" outputdef="<%=znodo2%>"/></td></tr>
<%zidsubgroupant=zidsubgroup;
}%>
<%}%>
<%if ((id_groupshow.equals("0")) || (id_subgroupgroupshow.equals("0"))){%>	
<tr><td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:item  item="SCO_NM_QUESTION" htmlsafe="true" outputdef="<%=znodo2%>"/></td></tr>
<%}%>
<tr>
<input id="id_ques<%=current%>" name="id_ques<%=current%>" type="hidden" value="<m4:item  item="SCO_ID_QUESTION" htmlsafe="true" outputdef="<%=znodo2%>"/>" />
<input id="comment<%=current%>" name="comment<%=current%>" type="hidden" value="<m4:item  item="SCO_EVALUATOR_COMM_TEMP" htmlsafe="true" outputdef="<%=znodo2%>"/>" />
<td class="fuentevalor" ><m4:item  item="SCO_QUESTION" htmlsafe="true" outputdef="<%=znodo2%>"/></td>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>

<td class="fuentevalor">
	<select id="select<%=current%>" name="select<%=current%>" class="fuenteformulario">
	<m4:dataloop outputdef="<%=znodoaux%>">
		<option id="<m4:item  item="SCO_ID_ANSWER_VAL" htmlsafe="true" outputdef="<%=znodoaux%>"/>"value="<m4:item  item="SCO_ID_ANSWER_VAL" htmlsafe="true" outputdef="<%=znodoaux%>"/>">
			<m4:item  item="SCO_NM_ANSWER_VAL" htmlsafe="true" outputdef="<%=znodoaux%>"/>
	</option>
	</m4:dataloop>
	</select>
</td>
<script type="text/javascript" language="Javascript1.5"><!--
 if ('<m4:item  item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="<%=znodo2%>" jsafe="true"/>'!= ""){
     m4searchoptioness('a<%=current%>','select<%=current%>','<m4:item  item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="<%=znodo2%>" jsafe="true"/>');
  }
--></script>
<td class="fuentevalor"  ><a title="" href="javascript:AddComent(m4objeto('comment<%=current%>','a<%=current%>'));"><img align="right" alt=""  src="/iconos/ic_next_edit_16_16_0.gif" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</form>	
</m4:dataloop>
<tr>
	<td class="fuenteboton" colspan="4"><a title="<%=Save%>" href="javascript:guard('<%=zcount2%>');">	
	<img alt="<%=Save%>"  src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
	</a>
	<a title="<%=zSaveTempCalc%>" href="javascript:comprobar('<%=zcount2%>');">	
	<img alt="<%=zSaveTempCalc%>"  src="/iconos/grabar.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
	</a></td>	
</tr>	
</table>
 <%} else {%>
<div class="fuentenodatos"><%=zNodata%></div>
 <%}%>
 <script type="text/javascript" language="Javascript1.5"><!--
 if ('<%=sResult%>'== "1"){
	var vmensaje=m4getmessage("_sl_co_ess_ev_5",'<m4:item  item="SCO_VALUE_RAT_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>','<m4:item  item="SCO_NM_LVL_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>');
    if ( confirm(vmensaje) == true){
		var aval=new Array();
		aval[0]='<m4:item  item="SCO_VALUE_RAT_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>';
		aval[1]='<m4:item  item="SCO_ID_LVL_QUE" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>';
		returnvalues(aval);
     }
  }
--></script>
</div>
</body>
<m4:endpage/>	
</html>


