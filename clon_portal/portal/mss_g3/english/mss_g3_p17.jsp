<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
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
if ((mss==null)||(mss.equals(""))){mss = "1";}

String ztitle = ""; 
String Image = ""; 
String DescrPlan  = ""; 
String LblJob = "";
String LinkJob = "";
String Cargar = "";
String All = "";
String NoDataFound = "";
String zmss="'"+mss+"'";
if (mss.equals("0")==true){
%>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
	<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
	<% ztitle = TranEss.getProperty("ev_ess.Plan");%>
	<% Image = Tran.getProperty("Label.Image");%>
	<% DescrPlan = TranEss.getProperty("ev_ess.DescrPlan");%>
	<% LinkJob = TranEss.getProperty("ev_ess.LinkJob");%>
	<% LblJob = TranEss.getProperty("ev_mss.LblJob");%>
	<% NoDataFound = Tran.getProperty("Label.NoDataFound");%>
	<% All = Tran.getProperty("Label.All");%>		
<%}else{%>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>	
	<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
	<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
	<% ztitle = TranMss.getProperty("ev_mss.Plan");%>
	<% Image = Tran.getProperty("Label.Image");%>
	<% DescrPlan = TranMss.getProperty("ev_mss.DescrPlan");%>
	<% LblJob = TranMss.getProperty("ev_mss.LblJob");%>
	<% LinkJob = TranMss.getProperty("ev_mss.LinkJob");%>
	<% NoDataFound = Tran.getProperty("Label.NoDataFound");%>
	<% All = Tran.getProperty("Label.All");%>		
	
<%}%>



<title><%=ztitle%></title>
<%

Generatablaparametros zobjtabla = new Generatablaparametros(request);
String zfiltrowu =zobjtabla.m4paramvalor("zfiltrowu");
String zfiltrojob =zobjtabla.m4paramvalor("zfiltrojob");
String znombrewu = zobjtabla.m4paramvalor("znombrewu");
String znombrepuesto =zobjtabla.m4paramvalor("znombrepuesto");
if ((zfiltrowu==null)|| (""==zfiltrowu)){zfiltrowu = "XXX01";} 
if ((zfiltrojob==null)|| (""==zfiltrojob)){zfiltrojob = "XXX01";} 

if ((znombrewu==null)|| (""==znombrewu)){znombrewu = All;}
if ((znombrepuesto==null)|| (""==znombrepuesto)){znombrepuesto = All;}
%>

<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
<script type="text/javascript">

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

function navegar(IDRH,RHRole,DTStartEval,DTEndEv,PERIODO,NombreEmpleado,NombreProceso){

m4valor("ocultolink","estado","31","set");
m4valor("ocultolink","mss",<%=zmss%>,"set");
m4valor("ocultolink","IDRH",IDRH,"set");
m4valor("ocultolink","RHRole",RHRole,"set");
m4valor("ocultolink","PERIODO",PERIODO,"set");
m4valor("ocultolink","DTStartEval",DTStartEval,"set");
m4valor("ocultolink","DTEndEv",DTEndEv,"set");
m4valor("ocultolink","znombreemp",NombreEmpleado,"set");
m4valor("ocultolink","NombreProceso",NombreProceso,"set");

m4submit("ocultolink");
	
}

</script>
</head>

<body>
<%if (mss.equals("0")==true){%>
	<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
	<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}else{%>
	<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
	<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}%>

<%
String zsubsesion = "SSE_PLAN_ACTION";
String zmeta4object = "SSE_PLAN_ACTION";
String znodo = "M4T_H_EVALUATE";
String znodowu = "M4T_WORK_UNIT";
String znodojob = "M4T_JOB";
String ztipocarga = "PREV";
String zdireccion = "mss_g3/mss_g3_p17.jsp";
String zventanas = "20";

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

String zSCONMEVALPROC = zcomun+ "SCO_NM_EVAL_PROC"; 
String zSCONROLE = zcomun+ "SCO_N_ROLE";
String zSCOORHRPERIOD = zcomun+ "SCO_OR_HR_PERIOD";
String zSCOIDHR = zcomun+ "SCO_ID_HR";
String zSCO_OR_HR_ROLE = zcomun+ "SCO_OR_HR_ROLE";
String zSCO_DT_START_EVAL = zcomun+ "SCO_DT_START_EVAL";
String zSCO_DT_END = zcomun+ "SCO_DT_END";
String zSTDNFIRSTNAME = zcomun+ "STD_N_FIRST_NAME";
String zSTDNFAMILYNAME_1 = zcomun+"STD_N_FAMILY_NAME_1";
String zSCO_GB_NAME = zcomun+"SCO_GB_NAME";
String zSSECONTADOR = zcomun + "SSE_CONTADOR";		
String zSCOIDJOBCODE = zcomun + "SCO_ID_JOB_CODE";		
String zSCOIDWORKUNIT = zcomun + "SCO_ID_WORK_UNIT";	
String zSTDNJOBCODE = zcomun + "STD_N_JOB_CODE";		
String zSTDNWORKUNIT = zcomun + "STD_N_WORK_UNIT";	

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
	<td><img alt="<%=Image%>" title="<%=ztitle%>"src="/iconos/noname_procesos_evaluacion_ess_114_100.gif" width="114" height="100"/></td>
	<td>
	<div class="descripcionfuncional"><%=DescrPlan%><br/><br/></div>
	<%if (mss.equals("0")==true){%>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="<%=LblJob%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?estado=3"><%=LinkJob%></a></li>
	</ul>
	<%}else{%>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" tabindex="1" title="<%=LblJob%>" href="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_menu.jsp?.jsp?estado=3"><%=LinkJob%></a></li>
	</ul>

<%}%>
	</td>
</tr>

<%@ include file="../../mss_generico/english/mssgenerico_filtro_emp.jsp" %>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31" method="post" name="oculto" id="oculto">
<input type="hidden" id="zfiltrowu" name="zfiltrowu"  value="<%=zfiltrowu%>" />
<input type="hidden" id="zfiltrojob" name="zfiltrojob"  value="<%=zfiltrojob%>" />
<input type="hidden" id="znombrewu" name="znombrewu"  value="<%=znombrewu%>" />
<input type="hidden" id="znombrepuesto" name="znombrepuesto"  value="<%=znombrepuesto%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17_mod.jsp?estado=31" method="post" name="ocultolink" id="ocultolink">
<input type="hidden" id="estado" name="estado"  value="" />
<input type="hidden" id="mss" name="mss"  value="" />
<input type="hidden" id="IDRH" name="IDRH"  value="" />
<input type="hidden" id="RHRole" name="RHRole"  value="" />
<input type="hidden" id="PERIODO" name="PERIODO"  value="" />
<input type="hidden" id="DTStartEval" name="DTStartEval"  value="" />
<input type="hidden" id="DTEndEv" name="DTEndEv"  value="" />
<input type="hidden" id="znombreemp" name="znombreemp"  value="" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="" />

</form>
</table>
<% 
if (zcount > 0) 
{
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
%>	
<table class = "tablaestadosceldatitulo" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="5" ><%=ztitle%></td>
</tr>
<tr>
	<td class="fuentecampo"><m4:label m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/></td>
	<td class="fuentecampo"><m4:label m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/></td>
	<td class="fuentecampo"><m4:label m4name="<%=zSCONROLE%>" htmlsafe = "true"/></td>
	<td class="fuentecampo"><m4:label m4name="<%=zSTDNWORKUNIT%>" htmlsafe = "true"/></td>
	<td class="fuentecampo"><m4:label m4name="<%=zSTDNJOBCODE%>" htmlsafe = "true"/></td>
</tr>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<tr>
	<td class="fuentevalor" colspan="1"><m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="1"><a title="<m4:label m4name="<%=zSCO_GB_NAME%>" htmlsafe = "true"/>" href="javascript:navegar('<m4:item m4name="<%=zSCOIDHR%>" jsafe="true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_OR_HR_ROLE%>" jsafe="true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_DT_START_EVAL%>" jsafe="true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_DT_END%>" jsafe="true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCOORHRPERIOD%>" jsafe="true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCO_GB_NAME%>" jsafe="true" htmlsafe = "true"/>','<m4:item m4name="<%=zSCONMEVALPROC%>" jsafe="true" htmlsafe = "true"/>');"><m4:item m4name="<%=zSCO_GB_NAME%>"  htmlsafe = "true"/></a></td>
	<td class="fuentevalor" colspan="1"><m4:item m4name="<%=zSCONROLE%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="1"><m4:item m4name="<%=zSTDNWORKUNIT%>" htmlsafe = "true"/></td>
	<td class="fuentevalor" colspan="1"><m4:item m4name="<%=zSTDNJOBCODE%>" htmlsafe = "true"/></td>
</tr>

</m4:loop>
</table>
	<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>
<%}
else
{%>
<div class="fuentenodatos"><%=NoDataFound%></div>
<br/><br/>
<%}%>		

<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>

</div>
<m4:endpage/>
</body>
</html>