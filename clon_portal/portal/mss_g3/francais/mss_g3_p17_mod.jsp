<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.* " %>
<%    
String ztipocarga = "M4T";

String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
String zAcc = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zAcc");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zAcc==null)||(zAcc.equals(""))){zAcc = "";}
if ((mss==null)||(mss.equals(""))){	mss = "0";}

String IDRH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
String RHRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole");
String PERIODO = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO");
String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval");
String DTEndEv = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTEndEv");
String zORDINAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL");
String znombreemp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombreemp");
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
String profData = "";

String valSCO_ID_ACTION = "";
String valSCO_ID_ACTION_TYPE = "";
String valSCO_DT_START = "";
String valSCO_DT_END = "";
String valSCO_NM_ACTION = "";
String valSCO_ACTION_WHEN = "";
String valSCO_PRIORITY = "";
String valSCO_ACTION_DESC = "";
String valSCO_ACTION_HOW = "";
String valSCO_OBJECTIVES = "";

String zDateFormat = "";
String ztitle = "";
String zDescripcion = "";
String LinkPref = "";
String LinkForm = "";
String Clear  = "";
String Submit  = "";
String Modify  = "";
String Delete  = "";
String Datos ="";
String Plan = "";
String Selec = "";
String lblEvalExcel = "";
String zmss="'"+mss+"'";
if (mss.equals("0")==true){
%>   

	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
	<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
	<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
	<% ztitle = TranEss.getProperty("ev_ess.DefPlan");%>
	<% zDateFormat = Tran.getProperty("Label.DateFormat");%>
	<% zDescripcion = TranEss.getProperty("ev_ess.DescrPlan2");%>
	<% LinkPref = TranEss.getProperty("ev_ess.LinkPref");%>
	<% LinkForm = TranEss.getProperty("ev_ess.LinkPref");%>
	<% Clear = Tran.getProperty("Button.Clear");%>
	<% Submit = Tran.getProperty("Button.Submit");%>
	<% Modify = Tran.getProperty("Button.Modify");%>
	<% Delete = Tran.getProperty("Button.Delete");%>
	<% Datos = TranEss.getProperty("ev_ess.LinkDatos"); %>
	<% Plan = TranEss.getProperty("ev_ess.Plan");%>		
	<% Selec = Tran.getProperty("Link.Selec"); %>
	<% lblEvalExcel = TranEss.getProperty("ev_ess.LblEvalExcel");%>			
	<% profData = Tran.getProperty("Labelmss.ProfsData");%>			
<%}else{%>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
	<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
	<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
	<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
	<% ztitle = TranMss.getProperty("ev_mss.DefPlan");%>
	<% Plan = TranMss.getProperty("ev_mss.Plan");%>
	<% zDateFormat = Tran.getProperty("Label.DateFormat");%>
	<% zDescripcion = TranMss.getProperty("ev_mss.DescrPlan2");%>
	<% LinkPref = TranMss.getProperty("ev_mss.LinkPref");%>
	<% LinkForm = TranMss.getProperty("ev_mss.LinkForm");%>
	<% Clear = Tran.getProperty("Button.Clear");%>
	<% Submit = Tran.getProperty("Button.Submit");%>
	<% Modify = Tran.getProperty("Button.Modify");%>
	<% Delete = Tran.getProperty("Button.Delete");%>
	<% Datos = TranMss.getProperty("ev_mss.LinkDatos"); %>
	<% Selec = Tran.getProperty("Link.Selec"); %>	
	<% lblEvalExcel = TranMss.getProperty("ev_mss.LblEvalExcel");%>		
	<% profData = Tran.getProperty("Labelmss.ProfsData");%>			
<%}%>

<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js">

</script>

<script type="text/javascript">
function abrirexcel(empleado,ordinal,fec)
{
	var dir="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp?zidhr="+empleado+"&zorrole="+ordinal+"&zdtstart="+fec+"&zidType=03";
	window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}
</script>
<title><%=ztitle%></title>
</head>

<body>


<%if (mss.equals("0")==true){%>
	<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
	<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%}else{%>
	<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
	<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%}%>

<%
String zsubsesion = "SSE_PLAN_ACTION";
String zmeta4object = "SSE_PLAN_ACTION";
String znodo = "M4T_PLAN_ACTION";
String znodo2 = "M4T_X_SUG_ACTION";

String zdireccion = "mss_g3/mss_g3_p17_mod.jsp";
String zventanas = "10";
int zvuelta = 3;
String zestado = "31";
zestado=zestado+"&mss="+mss;

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zlink = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17_mod.jsp?estado=31&mss=" + mss + "&IDRH=" +  IDRH + "&RHRole=" +  RHRole + "&DTStartEval=" +  DTStartEval + "&DTEndEv=" +  DTEndEv + "&NombreProceso=" +  NombreProceso + "&znombreemp=" + znombreemp;

String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zcomuna = znodo + ":" + zsubsesion + "!" + znodo + "." + "SCO_ID_HR" ;

String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]" ;
String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]"; 
String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";

String zSCO_ID_HR = zcomun + "SCO_ID_HR";
String zSCO_OR_HR_ROLE = zcomun + "SCO_OR_HR_ROLE";
String zSCO_DT_START_EVAL = zcomun + "SCO_DT_START_EVAL";
String zSCO_ID_ACTION = zcomun + "SCO_ID_ACTION";
String zSCO_ID_ACTION_TYPE = zcomun + "SCO_ID_ACTION_TYPE";
String zSCO_NM_ACTION_TYPE = zcomun + "SCO_NM_ACTION_TYPE";
String zSCO_DT_START = zcomun + "SCO_DT_START";
String zSCO_DT_END = zcomun + "SCO_DT_END";
String zSCO_NM_ACTION = zcomun + "SCO_NM_ACTION";
String zSCO_ACTION_WHEN = zcomun + "SCO_ACTION_WHEN";
String zSCO_PRIORITY = zcomun + "SCO_PRIORITY";
String zSCO_ACTION_DESC = zcomun + "SCO_ACTION_DESC";
String zSCO_ACTION_HOW = zcomun + "SCO_ACTION_HOW";
String zSCO_OBJECTIVES = zcomun + "SCO_OBJECTIVES";

String zSCOIDACTIONTYPE = zcomun2 + "SCO_ID_ACTION_TYPE";
String zSCONMACTIONTYPE = zcomun2 + "SCO_NM_ACTION_TYPE";

String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";

%>	

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<%		
	try {

	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
		m.setItem(zsubsesion,znodo,"","FILTRO_SCO_ID_HR",IDRH);  
		m.setItem(zsubsesion,znodo,"","FILTRO_SCO_OR_HR_ROLE",RHRole);  
		m.setItem(zsubsesion,znodo,"","FILTRO_SCO_DT_START_EVAL",DTStartEval);  

		} catch(Exception e) {}

%>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>

<script type="text/javascript">

function load(empleado)
{
//	m4valor("cv","person",empleado,"set");
//	m4valor("cv", "RET", "DAT", "set");	
//	m4submit("cv");

var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

function ver_plan(){

	m4submit("plan");
}

function ver_competencias(){

	m4submit("competencias");
}

function borrar(Ordinal){

	m4valor("oculto2","ORDINAL",Ordinal,"set");
	m4submit("oculto2");

}


function modificar(Ordinal){
	m4valor("oculto","zAcc","MOD","set");
	m4valor("oculto","zORDINAL",Ordinal,"set");
	m4submit("oculto");
}

function limpiar(){
	m4valor("oculto","zAcc","","set");
	m4valor("oculto","zORDINAL","","set");
	m4submit("oculto");
}


function comprobar(){
	var error = 0;
	var sMessage = new String(eval("_gen_error_msg"));
	var objSCO_ID_ACTION;
	var varSCO_ID_ACTION = m4valor("NombreFormulario","SCO_ID_ACTION","","get");

	var varSCO_ID_ACTION_TYPE = m4valor("NombreFormulario","SCO_ID_ACTION_TYPE","","get");
	var varSCO_DT_START = m4valor("NombreFormulario","SCO_DT_START","","get");
	var varSCO_DT_END = m4valor("NombreFormulario","SCO_DT_END","","get");
	var varSCO_NM_ACTION = m4valor("NombreFormulario","SCO_NM_ACTION","","get");
	var varSCO_ACTION_WHEN = m4valor("NombreFormulario","SCO_ACTION_WHEN","","get");
	var varSCO_PRIORITY = m4valor("NombreFormulario","SCO_PRIORITY","","get");
	var varSCO_ACTION_DESC = m4valor("NombreFormulario","SCO_ACTION_DESC","","get");
	var varSCO_ACTION_HOW = m4valor("NombreFormulario","SCO_ACTION_HOW","","get");
	var varSCO_OBJECTIVES = m4valor("NombreFormulario","SCO_OBJECTIVES","","get");

	if (varSCO_ID_ACTION == "") {
		error = 1;
    	sMessage = sMessage + "\n" + m4getmessage("_alfanum_oblig","<m4:label m4name="<%=zSCO_ID_ACTION%>" jsafe="true"/>");		

	}

	if (varSCO_NM_ACTION == "") {
		error = 1;
    	sMessage = sMessage + "\n" + m4getmessage("_alfanum_oblig","<m4:label m4name="<%=zSCO_NM_ACTION%>" jsafe="true"/>");		
	}

	if (varSCO_DT_START == ""){
		error = 1;
    	sMessage = sMessage + "\n" + m4getmessage("_date_oblig","<m4:label m4name="<%=zSCO_DT_START%>" jsafe="true"/>","<%=zDateFormat%>");				
	} 

	if (m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),false)=="") {
		error = 1;
    	sMessage = sMessage + "\n" + m4getmessage("_date_oblig","<m4:label m4name="<%=zSCO_DT_START%>" jsafe="true"/>","<%=zDateFormat%>");						
	}

	if (varSCO_ID_ACTION_TYPE == "") {
		error = 1;
    	sMessage = sMessage + "\n" + m4getmessage("_alfanum_oblig","<m4:label m4name="<%=zSCONMACTIONTYPE%>" jsafe="true"/>");						
		
	}


	if (varSCO_ACTION_WHEN != ""){
		if (m4compfechas(m4objeto('SCO_ACTION_WHEN','NombreFormulario'),'<',m4objeto('SCO_DT_START','NombreFormulario'))==true) {
			sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_6");							
			error = 1;
		}
	}

	
	if ("<%=DTEndEv%>" != ""){
		if (m4compfechas(m4objeto('SCO_DT_START','NombreFormulario'),'<',m4objeto('DTEndEv','oculto'))==true) {
			sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_7","<%=DTEndEv%>");							
			error = 1;		
		}
	}

if (error == 1)
 {   
	alert(sMessage);
 }
else
 {   
	objSCO_ID_ACTION = m4elemento('SCO_ID_ACTION');
	objSCO_ID_ACTION.setAttribute('disabled','');
	m4submit("NombreFormulario");
 }	

}

</script>

<%

String sORDINAL = String.valueOf(zORDINAL);
String dd = "";
String mm = "";
String yyyy = "";
String disable = "" ; 
try {
	M4Operations t = new M4Operations(request);

	if (zAcc.equals("MOD")) {
		t.moveData(znodo,zmeta4object,znodo,sORDINAL);

		valSCO_ID_ACTION = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_ACTION");

		valSCO_ID_ACTION_TYPE = t.getItem(znodo,zsubsesion,znodo,"","SCO_ID_ACTION_TYPE");
		valSCO_DT_START = t.getItem(znodo,zsubsesion,znodo,"","SCO_DT_START");

 		yyyy = valSCO_DT_START.substring(0,4);
		mm = valSCO_DT_START.substring(5,7);
		dd = valSCO_DT_START.substring(8,10);
	    valSCO_DT_START	= dd + "-" + mm + "-" + yyyy;
		valSCO_DT_END = t.getItem(znodo,zsubsesion,znodo,"","SCO_DT_END");
 		yyyy = valSCO_DT_END.substring(0,4);
		mm = valSCO_DT_END.substring(5,7);
		dd = valSCO_DT_END.substring(8,10);
	    valSCO_DT_END	= dd + "-" + mm + "-" + yyyy;
		valSCO_NM_ACTION = t.getItem(znodo,zsubsesion,znodo,"","SCO_NM_ACTION");
		valSCO_ACTION_WHEN = t.getItem(znodo,zsubsesion,znodo,"","SCO_ACTION_WHEN");

		if (valSCO_ACTION_WHEN.length() >=8){
			yyyy = valSCO_ACTION_WHEN.substring(0,4);
			mm = valSCO_ACTION_WHEN.substring(5,7);
			dd = valSCO_ACTION_WHEN.substring(8,10);
		    valSCO_ACTION_WHEN	= dd + "-" + mm + "-" + yyyy;
		}
		valSCO_PRIORITY = t.getItem(znodo,zsubsesion,znodo,"","SCO_PRIORITY");
		valSCO_ACTION_DESC = t.getItem(znodo,zsubsesion,znodo,"","SCO_ACTION_DESC");
		valSCO_ACTION_HOW = t.getItem(znodo,zsubsesion,znodo,"","SCO_ACTION_HOW");
		valSCO_OBJECTIVES = t.getItem(znodo,zsubsesion,znodo,"","SCO_OBJECTIVES");

		disable = "disabled"  ;
		}

	} catch(Exception e) {}


	if (valSCO_ID_ACTION==null){valSCO_ID_ACTION = "";} 
	if (valSCO_ID_ACTION_TYPE==null){valSCO_ID_ACTION_TYPE = "";} 
	if (valSCO_DT_START==null){valSCO_DT_START = "";} 
	if (valSCO_DT_END==null){valSCO_DT_END = "";} 
	if (valSCO_NM_ACTION==null){valSCO_NM_ACTION = "";} 
	if (valSCO_ACTION_WHEN==null){valSCO_ACTION_WHEN = "";} 
	if (valSCO_PRIORITY==null){valSCO_PRIORITY = "";} 
	if (valSCO_ACTION_DESC==null){valSCO_ACTION_DESC = "";} 
	if (valSCO_ACTION_HOW==null){valSCO_ACTION_HOW = "";} 
	if (valSCO_OBJECTIVES==null){valSCO_OBJECTIVES = "";} 

%>

<%
	int zcounti  = 0;
	int zcount = 0;
	int zcounti2  = 0;
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcounti2 = m.getCountInClient(znodo2,zsubsesion,znodo2);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti-1);
	String	zcountv2 = String.valueOf(zcounti2-1);
%>


<table border="0" width="100%">
<tr><td class="titulofuncional"  width="25%" colspan= "3" ><%=ztitle%> </td>
</tr>
<tr>
	<td><img alt="<%=ztitle%>"title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
	<td colspan= "2">
	<div class="descripcionfuncional"><%=zDescripcion%></div>
	<ul class="listaenlace">
	<li><a  class="enlacefuncional" title ="<%=Selec%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31"><%=Selec%></a></li>
	<li><a class="enlacefuncional" title="<%=LinkPref%>" href="javascript:ver_plan();" ><%=LinkPref%></a></li>
	 <li><a class="enlacefuncional" title="<%=LinkForm%>" href="javascript:ver_competencias();" ><%=LinkForm%></a></li>
	  <li><a class="enlacefuncional" title="<%=lblEvalExcel%>" href="javascript:abrirexcel('<%=IDRH%>','<%=RHRole%>','<%=DTStartEval%>');" ><%=lblEvalExcel%></a></li>
	 </ul>
	</td>
</tr>
</table>
	 
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p21.jsp?estado=31" method="post" name="plan" id="plan">
<input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>" />
<input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>" />
<input type="hidden" id="PERIODO" name="PERIODO" value="<%=PERIODO%>" />
<input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>" />
<input type="hidden" id="DTEndEv" name="DTEndEv" value="<%=DTEndEv%>" />
<input type="hidden" id="zORDINAL" name="zORDINAL" value="<%=zORDINAL%>" />
<input type="hidden" id="znombreemp" name="znombreemp" value="<%=znombreemp%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>" />

</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p22.jsp?estado=31" method="post" name="competencias" id="competencias">
<input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>" />
<input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>" />
<input type="hidden" id="PERIODO" name="PERIODO" value="<%=PERIODO%>" />
<input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>" />
<input type="hidden" id="DTEndEv" name="DTEndEv" value="<%=DTEndEv%>" />
<input type="hidden" id="zORDINAL" name="zORDINAL" value="<%=zORDINAL%>" />
<input type="hidden" id="znombreemp" name="znombreemp" value="<%=znombreemp%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>" />
</form>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_PLAN_ACTION" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_PLAN_ACTION" />
<input type="hidden" id="SCO_ID_HR" name="SCO_ID_HR" value="<%=IDRH%>" />
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE" value="<%=RHRole%>" />
<input type="hidden" id="SCO_DT_START_EVAL" name="SCO_DT_START_EVAL" value="<%=DTStartEval%>" />
<input type="hidden" id="znombreemp" name="znombreemp" value="<%=znombreemp%>"/>
<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />

<table border="0" width="100%">
<tr><td class="fuenteleyenda_big"  width="25%" colspan= "3" >
<a class="fuenteleyenda_big" title="<%=profData%>" href="javascript:load('<%=IDRH%>')"><%=znombreemp%></a> - <%=NombreProceso%> </td>
</tr>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class="tablaestadosceldatitulo">
	<td colspan="3"><%=ztitle%></td>
	<td class="tablamenuright">
	<a title="<%=ztitle%>"href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31" >
	<%if (mss.equals("0")==true){%>
		<img alt="<%=ztitle%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}else{%>
		<img alt="<%=ztitle%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}%>
	</a>
	</td>
</tr>

<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_ID_ACTION%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="3"><input <%=disable%> class="fuenteformulario" type="text" name="SCO_ID_ACTION" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_ID_ACTION)%>" id="SCO_ID_ACTION" maxlength="9" size="9" tabindex="1" title="<m4:label m4name="<%=zSCO_ID_ACTION%>" htmlsafe = "true"/>"/></td>
</tr>

<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSCO_NM_ACTION%>" htmlsafe="true"/></td>
	<td class="fuentevalor" colspan="3"><input class="fuenteformulario" type="text" name="SCO_NM_ACTION" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_NM_ACTION)%>" id="SCO_NM_ACTION" maxlength="62" size="40" tabindex="2" title="<m4:label m4name="<%=zSCO_NM_ACTION%>" htmlsafe = "true"/>"/></td>
</tr>

<tr>
	<td class="fuentecampo" colspan="1" width="20%"> &nbsp;*&nbsp;<m4:label m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/></td>
	<td class="fuentecampo" colspan="1" width="35%"><input class="fuenteformulario" type="text" name="SCO_DT_START" id="SCO_DT_START" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_DT_START)%>" title="<m4:label m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/>" maxlength="10" size="10" tabindex="3" />&nbsp;
	<a href="javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))" title="<m4:label m4name="<%=zSCO_DT_START%>" htmlsafe="true"/>"tabindex="3"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<m4:label m4name="<%=zSCO_DT_START%>" htmlsafe="true"/>"htmlsafe = "true" /></a></td>
	<td class="fuentecampo" colspan="1" width="15%">&nbsp;<m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/></td>
	<td class="fuentecampo" colspan="1" width="30%"><input class="fuenteformulario" type="text" name="SCO_DT_END" id="SCO_DT_END" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_DT_END)%>" title="<m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/>" maxlength="10" size="10" tabindex="3" />&nbsp;
	<a href="javascript:m4calendario(m4objeto('SCO_DT_END','NombreFormulario'))" title="<m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/>"tabindex="4"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<m4:label m4name="<%=zSCO_DT_END%>" htmlsafe = "true"/>" /></a></td>
</tr>

<tr>
	<td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zSCONMACTIONTYPE%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="3"><select id="SCO_ID_ACTION_TYPE" class="fuenteformulario" name="SCO_ID_ACTION_TYPE" tabindex="5" title="<m4:label m4name="<%=zSCO_ID_ACTION_TYPE%>" htmlsafe = "true"/>">
	<option value=""></option>
	<%
	String selected = ""; 
	int iIndex = 0;
	String sIndex = "";
	%>
	<m4:loop from="0" to="<%=zcountv2%>">

		<% try {
				M4Operations m = new M4Operations(request); 
				sIndex = String.valueOf(iIndex);
				m.moveData(znodo2,zmeta4object,znodo2,sIndex);
				iIndex++;
				
				if (m.getItem(znodo2,zmeta4object,znodo2,"","SCO_ID_ACTION_TYPE").equals(valSCO_ID_ACTION_TYPE)) { 
					selected = "selected"; 
				} else { selected = "" ;} 
			} catch(Exception e) {} 
		%>

		<option <%=selected%> value="<m4:item m4name="<%=zSCOIDACTIONTYPE%>" htmlsafe = "true"/>"><m4:item m4name="<%=zSCONMACTIONTYPE%>" htmlsafe = "true"/></option>
	</m4:loop>
	</select>
	</td>
</tr>

<tr>
	<td class="fuentecampo" colspan="1">&nbsp;<m4:label m4name="<%=zSCO_ACTION_WHEN%>" htmlsafe = "true"/></td>
	<td class="fuentecampo" colspan="1"><input class="fuenteformulario" type="text" name="SCO_ACTION_WHEN" id="SCO_ACTION_WHEN" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_ACTION_WHEN)%>" title="<m4:label m4name="<%=zSCO_ACTION_WHEN%>" htmlsafe = "true"/>" maxlength="10" size="10" tabindex="6" />&nbsp;
	<a href="javascript:m4calendario(m4objeto('SCO_ACTION_WHEN','NombreFormulario'))" title="<m4:label m4name="<%=zSCO_ACTION_WHEN%>" htmlsafe = "true"/>"tabindex="4"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<m4:label m4name="<%=zSCO_ACTION_WHEN%>" htmlsafe = "true"/>" /></a></td>

	<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_PRIORITY%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="1"><input class="fuenteformulario" type="text" name="SCO_PRIORITY" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(valSCO_PRIORITY)%>" id="SCO_PRIORITY" maxlength="9" size="9" tabindex="7" title="<m4:label m4name="<%=zSCO_PRIORITY%>" htmlsafe = "true"/>"/></td>
</tr>

<tr>
	<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_ACTION_DESC%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="3"><textarea class="fuenteformulario" rows="5" cols="60" name="SCO_ACTION_DESC" value="<%=valSCO_ACTION_DESC%>" id="SCO_ACTION_DESC" maxlength="2000" tabindex="8" title="<m4:label m4name="<%=zSCO_ACTION_DESC%>" htmlsafe = "true"/>"><%=valSCO_ACTION_DESC%></textarea></td>
</tr>

<tr>
	<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_ACTION_HOW%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="3"><textarea class="fuenteformulario" rows="5" cols="60" name="SCO_ACTION_HOW" value="<%=valSCO_ACTION_HOW%>" id="SCO_ACTION_HOW" maxlength="254" tabindex="9" title="<m4:label m4name="<%=zSCO_ACTION_HOW%>" htmlsafe = "true"/>"><%=valSCO_ACTION_HOW%></textarea></td>
</tr>

<tr>
	<td class="fuentecampo">&nbsp;<m4:label m4name="<%=zSCO_OBJECTIVES%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="3"><textarea class="fuenteformulario" rows="5" cols="60" name="SCO_OBJECTIVES" value="<%=valSCO_OBJECTIVES%>" id="SCO_OBJECTIVES" maxlength="254" tabindex="10" title="<m4:label m4name="<%=zSCO_OBJECTIVES%>" htmlsafe = "true"/>"><%=valSCO_OBJECTIVES%></textarea></td>
</tr>

<tr>
	<td colspan="4" class = "fuenteboton">&nbsp;
	<a title="<%=Clear%>" href="javascript:limpiar();">
	<img alt="<%=Clear%>" src="/iconos/icono_actualizar_mss_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
	</a>
	<a title="<%=Submit%>" href="javascript:comprobar();">
	<img alt="<%=Submit%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  />
	</a>
	</td>
</tr>
</table>

<br>

<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_ID_ACTION%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_NM_ACTION%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_NM_ACTION_TYPE%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_ACTION_WHEN%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"><m4:label m4name="<%=zSCO_PRIORITY%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo"/>
</tr>

<% int iOrd = zregistroinicial; 
   String zregistroinicials = String.valueOf(zregistroinicial);
   String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
   %>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<tr>
	<td class = "fuentevalor"><a title="<%=Modify%>"  href="javascript:modificar('<%=iOrd%>');"><m4:item m4name="<%=zSCO_ID_ACTION%>" htmlsafe = "true"/></a></td>
	<td class="fuentevalor"><m4:item m4name="<%=zSCO_NM_ACTION%>" htmlsafe = "true"/></td>
	<td class="fuentevalor"><m4:item m4name="<%=zSCO_DT_START%>" htmlsafe = "true"/></td>
	<td class="fuentevalor"><m4:item m4name="<%=zSCO_NM_ACTION_TYPE%>" htmlsafe = "true"/></td>
	<td class="fuentevalor"><m4:item m4name="<%=zSCO_ACTION_WHEN%>" htmlsafe = "true"/></td>
	<td class="fuentevalor"><m4:item m4name="<%=zSCO_PRIORITY%>" htmlsafe = "true"/></td>
	<td class = "fuentevalor"><a title="<%=Delete%>" href="javascript:borrar('<%=iOrd%>');"><img align="right" alt="<%=Delete%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
	<% iOrd++ ;%>
</tr>
</m4:loop>
</table>

<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
</form> 


<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="oculto2" id="oculto2">
	<input type="hidden" id="TAG" name="TAG" value="SSE_PLAN_ACTION" />
	<input type="hidden" id="ACC" name="ACC" value="ANULAR" />
	<input type="hidden" id="NOD" name="NOD" value="SSE_PLAN_ACTION" />
	<input type="hidden" id="ORDINAL" name="ORDINAL" value="" />
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
	<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17_mod.jsp" method="post" name="oculto" id="oculto">
	<input type="hidden" id="zAcc" name="zAcc" value="<%=zAcc%>"/>
	<input type="hidden" id="mss" name="mss" value="<%=mss%>"/>
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
	<input type="hidden" id="zORDINAL" name="zORDINAL" value="<%=zORDINAL%>"/>
	<input type="hidden" id="zSCOIDHR" name="IDRH" value="<%=IDRH%>"/>
	<input type="hidden" id="zSCOORHRPERIOD" name="RHRole" value="<%=RHRole%>"/>
	<input type="hidden" id="zSCODTSTARTEVAL" name="DTStartEval" value="<%=DTStartEval%>"/>
	<input type="hidden" id="DTEndEv" name="DTEndEv" value="<%=DTEndEv%>"/>
	<input type="hidden" id="znombreemp" name="znombreemp" value="<%=znombreemp%>"/>
	<input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>"/>
	<input type="hidden" id="JSP_REDIRECCION" name="JSP_REDIRECCION" value="<%=zlink%>" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=11" method="post" name="cv" id="cv">
	<input type="hidden" id="person" name="person"  value="" />
	<input type="hidden" id="RET" name="RET" value="" />
</form>
<%if (mss=="0"){%>
	<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
<%}else{%>
	<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
</body>
<m4:endpage/>	
</html>


