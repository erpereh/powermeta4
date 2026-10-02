<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>


<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");   
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){mss = "0";}
String zmss="'"+mss+"'";
String ztitle = "";
String Description = "";
String LinkJob = "";
String LblJob = "";
String NoDataFound2 = "";
String LblEvppal = "";
String VerDet = "";
String All="";
String zLblGraphGauss = "";
if (mss.equals("0")==true){%>

<%}else{%>

<%}%>


<%

Generatablaparametros zobjtabla = new Generatablaparametros(request);
String zfiltrowu =zobjtabla.m4paramvalor("zfiltrowu");
String zfiltrojob =zobjtabla.m4paramvalor("zfiltrojob");
String znombrewu = zobjtabla.m4paramvalor("znombrewu");
String znombrepuesto =zobjtabla.m4paramvalor("znombrepuesto");
if ((zfiltrowu==null)|| (""==zfiltrowu)){zfiltrowu = "XXX01";} 
if ((zfiltrojob==null)|| (""==zfiltrojob)){zfiltrojob = "XXX01";} 

%>

<%if (mss.equals("0")==true){%>
	
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
	<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
	<% ztitle = TranEss.getProperty("ev_ess.ProcEv");%>
	<% Description = TranEss.getProperty("ev_ess.DescrConsEv");%>
	<% LblJob = TranEss.getProperty("ev_ess.LblJob");%>
	<% LinkJob = TranEss.getProperty("ev_ess.LinkJob");%>	
	<% NoDataFound2 = Tran.getProperty("Label.NoDataFound2");%>
	<% LblEvppal= TranEss.getProperty("ev_ess.LblEvppal");%>
	<% VerDet= Tran.getProperty("Label.VerDet");%>	
	<% All = Tran.getProperty("Label.All");%>	
	<% zLblGraphGauss = TranEss.getProperty("ev_ess.LblGraphGauss");%>
<%}else{%>
	
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
	<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>	
	<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
	<% ztitle = TranMss.getProperty("ev_mss.ProcEv");%>
	<% Description = TranMss.getProperty("ev_mss.DescrConsEv");%>
	<% LblJob = TranMss.getProperty("ev_mss.LblJob");%>
	<% LinkJob = TranMss.getProperty("ev_mss.LinkJob");%>	
	<% NoDataFound2 = Tran.getProperty("Label.NoDataFound2");%>
	<% LblEvppal= TranMss.getProperty("ev_mss.LblEvppal");%>
	<% VerDet= Tran.getProperty("Label.VerDet");%>	
	<% All = Tran.getProperty("Label.All");%>	
	<% zLblGraphGauss = TranMss.getProperty("ev_mss.LblGraphGauss");%>
<%}

if ((znombrewu==null)|| (""==znombrewu)){znombrewu = All;}
if ((znombrepuesto==null)|| (""==znombrepuesto)){znombrepuesto = All;}
%>
<title><%=ztitle%></title>
<script type="text/javascript">

function navegar (ord,nombreper,id_hr,ordinal1,inicioev,tecnica,NombreProceso,idplan,inicioproc,Principal) {

	m4valor("oculto3","estado","31","set");
	m4valor("oculto3","contador",ord,"set");
	m4valor("oculto3","nombreper",nombreper,"set");
	m4valor("oculto3","id",id_hr,"set");
	m4valor("oculto3","ordinal1",ordinal1,"set");
	m4valor("oculto3","inicioev",inicioev,"set");
	m4valor("oculto3","tecnica",tecnica,"set");
	m4valor("oculto3","NombreProceso",NombreProceso,"set");
	m4valor("oculto3","idplan",idplan,"set");
	m4valor("oculto3","inicioproc",inicioproc,"set");
	m4valor("oculto3","Principal",Principal,"set");
	document.forms["oculto3"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod.jsp?estado=31";
	m4submit("oculto3");	
}

function filtrar(){

var valorwu =m4select("filtro_wu","formFiltro","value");
var valorjob =m4select("filtro_job","formFiltro","value");
var nombrewu =m4select("filtro_wu","formFiltro","text");
var nombrepuesto =m4select("filtro_job","formFiltro","text");

m4valor("oculto","zfiltrowu",valorwu,"set");
m4valor("oculto","zfiltrojob",valorjob,"set");
m4valor("oculto","znombrewu",nombrewu,"set");
m4valor("oculto","znombrepuesto",nombrepuesto,"set");

m4submit("oculto");
}
function verGrafico(id,ordinal,inicioev,idplan,inicioproc) {
	var dir="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod6.jsp?IDEvaluator="+ id+"&OREvaluator="+ordinal+"&DTStartEval="+inicioev+"&IDPlan="+idplan+"&DTStartProc="+inicioproc;
	window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}
</script>

</head>

<body>
<%if (mss.equals("0")==true){%>
	
	<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
	<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%}else{%>
	<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
	<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>

<%}%>

<%
String zsubsesion = "SSE_EVALUATOR_E";
String zmeta4object = "SSE_EVALUATOR_E";
String znodo = "M4T_EVALUATOR_E";
String ztipocarga = "M4T";
String znodowu = "M4T_WORK_UNIT";
String znodojob = "M4T_JOB";
String zdireccion = "sse_g3/sse_g3_p4.jsp";
String zventanas = "10";
int zvuelta = 5;
String zestado = "31";
if (mss!= "0"){zestado = zestado+"&mss=1";}	
int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

String zSCONMEVALPROC = zcomun+ "SCO_NM_EVAL_PROC"; 
String zINICIO = zcomun+ "SCO_DT_START_EVAL"; 
String zFIN = zcomun+ "SCO_DT_END"; 
String zSCONROLE = zcomun+ "SCO_N_ROLE";
String zSTDNFIRSTNAME = zcomun+ "STD_N_FIRST_NAME";
String zSTDNFAMILYNAME_1 = zcomun + "STD_N_FAMILY_NAME_1";
String zSCO_GB_NAME = zcomun + "SCO_GB_NAME";
String zSCOIDHR = zcomun + "SCO_ID_HR";
String zSCORHRROLE = zcomun + "SCO_OR_HR_ROLE";
String zSCODTSTARTEVAL = zcomun + "SCO_DT_START_EVAL";
String zSCODTSTARTPROC = zcomun + "SCO_DT_START_PROC";
String zSCOIDEVALPLAN = zcomun + "SCO_ID_EVAL_PLAN";	
String zSTD_N_WORK_UNIT =  zcomun + "STD_N_WORK_UNIT";
String zSTD_N_JOB_CODE1 =  zcomun + "STD_N_JOB_CODE";
String zSCO_EVALUATION_DEF =  zcomun + "SCO_EVALUATION_DEF";
String zSSECONTADOR = zcomun + "SSE_CONTADOR";		
String zIDASSTEC =   zcomun + "SCO_ID_ASSESSM_TEC";		
String zID_EVALUATOR = zcomun + "SCO_ID_EVALUATOR";
String zOR_EVALUATOR = zcomun + "SCO_OR_EVALUATOR";	

String znodolista = znodo + "_VAL";
String zoutputdeflista = zsubsesion + "!" + znodolista + "[*]";
String zmovelista = znodolista + ":" + znodolista + "[FIRST]";
String zraizlista = znodolista + ":" + zsubsesion + "!" + znodolista + ".";
String ziteratorlista = znodolista + ":" + zsubsesion + "!" + znodolista;
String zcomunlista = znodolista + ":" + zsubsesion + "!" + znodolista + "[&VAR.m4lix]" + ".";

String zcomunwu = znodowu + ":" + zsubsesion + "!" + znodowu + "[&VAR.m4lix]" + ".";
String zoutputdefwu = zsubsesion + "!" + znodowu + "[*]";
String zmovewu = znodowu + ":" + znodowu + "[FIRST]";

String zcomunjob = znodojob + ":" + zsubsesion + "!" + znodojob + "[&VAR.m4lix]" + ".";
String zoutputdefjob = zsubsesion + "!" + znodojob + "[*]";
String zmovejob = znodojob + ":" + znodojob + "[FIRST]";

String zSSEWORK_UNIT = zcomunwu + "STD_ID_WORK_UNIT";		
String zSSENM_WORK_UNIT = zcomunwu + "STD_N_WORK_UNIT";		

String zSTD_ID_JOB_CODE = zcomunjob + "STD_ID_JOB_CODE";		
String zSTD_N_JOB_CODE = zcomunjob + "STD_N_JOB_CODE";		

String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
			    m.setItem(zsubsesion,znodo,"","FILTRO_WU",zfiltrowu);  
			    m.setItem(zsubsesion,znodo,"","FILTRO_JOB",zfiltrojob);  		
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolista%>"><m4:param name="m4name0" value="<%=zoutputdeflista%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodowu%>" ><m4:param name="m4name0" value="<%=zoutputdefwu%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodojob%>" ><m4:param name="m4name0" value="<%=zoutputdefjob%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovelista%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovewu%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovejob%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	int  zcountilista  = 0;	
	int  zcountiwu  = 0;	
	int  zcountijob  = 0;		
	try {
		M4Operations m = new M4Operations(request);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
		zcountilista = m.getCountInClient(znodolista,zsubsesion,znodolista);		
		zcountiwu = m.getCountInClient(znodowu,zsubsesion,znodowu);
		zcountijob = m.getCount(znodojob,zsubsesion,znodojob);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountvlista = String.valueOf(zcountilista);	
	String	zcountvwu = String.valueOf(zcountiwu-1);	
	String	zcountvjob = String.valueOf(zcountijob-1);		
%>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=ztitle%></td></tr>
<tr>


	<td><img alt="<%=ztitle%>" title="<%=ztitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif" width="114" height="100"/></td>
	<td>
	<div class="descripcionfuncional"><%=Description%><br/><br/></div>
	<%if (mss.equals("0")==true){%>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="<%=LinkJob%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3"><%=LinkJob%></a></li>
	</ul>
	<%}else{%>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="<%=LinkJob%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3"><%=LinkJob%></a></li>
	</ul>

<%}%>
	</td>
</tr>

<%if (mss.equals("0")==true){%>
<%@ include file="../../sse_generico/portugues/ssegenerico_filtro_emp.jsp" %>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31&mss=0" method="post" name="oculto" id="oculto">
<%}else{%>
<%@ include file="../../mss_generico/portugues/mssgenerico_filtro_emp.jsp" %>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31&mss=1" method="post" name="oculto" id="oculto">
<%}%>

<input type="hidden" id="zfiltrowu" name="zfiltrowu"  value="<%=zfiltrowu%>" />
<input type="hidden" id="zfiltrojob" name="zfiltrojob"  value="<%=zfiltrojob%>" />
<input type="hidden" id="znombrewu" name="znombrewu"  value="<%=znombrewu%>" />
<input type="hidden" id="znombrepuesto" name="znombrepuesto"  value="<%=znombrepuesto%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>


<form action="" method="post" name="oculto3" id="oculto3">
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="estado" name="estado"  value="" />
<input type="hidden" id="contador" name="contador"  value="" />
<input type="hidden" id="id" name="id"  value="" />
<input type="hidden" id="ordinal1" name="ordinal1"  value="" />
<input type="hidden" id="inicioev" name="inicioev"  value="" />
<input type="hidden" id="tecnica" name="tecnica"  value="" />
<input type="hidden" id="nombreper" name="nombreper"  value="<%=zSCO_GB_NAME%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=zSCONMEVALPROC%>" />
<input type="hidden" id="idplan" name="idplan"  value="" />
<input type="hidden" id="inicioproc" name="inicioproc"  value="" />
<input type="hidden" id="Principal" name="Principal"  value="" />

</form>


</table>
<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);


%>
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">

<%
int zposicion = 0;
String zposicions = "0";
String zposicion2= "0";
String zposicion3= "0";
%>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%
	String k = "" ;
	int  i1 = 0;	
	String zselected1  ="";
	
	try {
		k = String.valueOf(m4lix);
		M4Operations m = new M4Operations(request);
		m.moveData(znodo,zmeta4object,znodo,k);
		if (m.getItem(znodo,zmeta4object,znodo,"","SCO_EVALUATION_DEF").equals("1")) { 
			zselected1 = "Sim"; 
			} else { zselected1 = "Não" ;} 
        	
	} catch(Exception e) {}
	
	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	//zposicion = zposicion - zregistroinicial;
 	zposicion2 = String.valueOf(zposicion);
 	zposicion3 = String.valueOf(zposicion-1);	
	String zSCO_ID_EVAL_PLAN="";
	String zSCO_DT_START_PROC="";	
	String zSCO_ID_EVAL_PLAN_ANT="";
	String zSCO_DT_START_PROC_ANT="";	
try {	
	M4Operations t = new M4Operations(request);

	t.moveData(znodo,zmeta4object,znodo,zposicion2);     
    zSCO_ID_EVAL_PLAN = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_EVAL_PLAN");  
    zSCO_DT_START_PROC = t.getItem(znodo,zmeta4object,znodo,"","SCO_DT_START_PROC"); 
	t.moveData(znodo,zmeta4object,znodo,zposicion3);  
    zSCO_ID_EVAL_PLAN_ANT = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_EVAL_PLAN");  
    zSCO_DT_START_PROC_ANT = t.getItem(znodo,zmeta4object,znodo,"","SCO_DT_START_PROC"); 	
	
 	 }  catch(Exception e) {}

if (((zSCO_ID_EVAL_PLAN.equals(zSCO_ID_EVAL_PLAN_ANT)==false) || (zSCO_DT_START_PROC.equals(zSCO_DT_START_PROC_ANT)==false) ) || (zposicion2.equals("0")==true)){%>	
  <tr>
	<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/>: <m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zINICIO%>" htmlsafe = "true"/>: <m4:item m4name="<%=zINICIO%>" htmlsafe = "true"/></td>
	<td class="tablaestadosceldatitulo" colspan="3" ><m4:label m4name="<%=zFIN%>" htmlsafe = "true"/> : <m4:item m4name="<%=zFIN%>" htmlsafe = "true" /></td>
	<td class="tablaestadosceldatitulo" align="right" colspan="3"><a title="<%=zLblGraphGauss%>" href="javascript:verGrafico('<m4:item m4name="<%=zID_EVALUATOR%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zOR_EVALUATOR%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCODTSTARTEVAL%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCOIDEVALPLAN%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSCODTSTARTPROC%>" jsafe="true" htmlsafe="true"/>');"><img alt="<%=zLblGraphGauss%>" title="<%=zLblGraphGauss%>" src="/iconos/ic_compvar_16_16_0.gif" width="16" height="16" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" /></a></td>
  </tr>
  <tr>
	<td class="tablasubtitulo" colspan="3" ><m4:label m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></td>
	<td class="tablasubtitulo" colspan="3" ><%=LblEvppal%></td>
	<td class="tablasubtitulo" colspan="3" ><m4:label m4name="<%=zSTD_N_JOB_CODE1%>" htmlsafe = "true"/></td>
	<td class="tablasubtitulo" colspan="3" ><m4:label m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe = "true"/></td>
  </tr>	
 <tr>	
	<td class="fuentevalor" colspan="3"><a title="<%=VerDet%>" href="javascript:navegar('<m4:item m4name="<%=zSSECONTADOR%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_GB_NAME%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCOIDHR%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCORHRROLE%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCODTSTARTEVAL%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zIDASSTEC%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCONMEVALPROC%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCOIDEVALPLAN%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCODTSTARTPROC%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_EVALUATION_DEF%>" jsafe = "true" htmlsafe = "true"/>');"><m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></a></td>
	<td class="fuentevalor" colspan="3" ><%=zselected1%></td> 
	<td class="fuentevalor" colspan="3"><m4:item m4name="<%=zSTD_N_JOB_CODE1%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="3"><m4:item m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe = "true"/></td>

  </tr>  
<%}else{%>
  <tr>
	<td class="fuentevalor" colspan="3"><a title="<%=VerDet%>" href="javascript:navegar('<m4:item m4name="<%=zSSECONTADOR%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_GB_NAME%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCOIDHR%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCORHRROLE%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCODTSTARTEVAL%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zIDASSTEC%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCONMEVALPROC%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCOIDEVALPLAN%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCODTSTARTPROC%>" jsafe = "true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_EVALUATION_DEF%>" jsafe = "true" htmlsafe = "true"/>');"><m4:item m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></a></td>
	<td class="fuentevalor" colspan="3" ><%=zselected1%></td>
	<td class="fuentevalor" colspan="3"><m4:item m4name="<%=zSTD_N_JOB_CODE1%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="3"><m4:item m4name="<%=zSTD_N_WORK_UNIT%>" htmlsafe = "true"/></td>
  </tr>
<%}%>	


</m4:loop>
</table>
<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=NoDataFound2%></div>
<br/><br/>
<%}%>		
<%if (mss=="0"){%>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
<m4:endpage/>
</body>
</html>



