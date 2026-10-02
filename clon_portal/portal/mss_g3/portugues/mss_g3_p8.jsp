<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<head><title>Planos de carreira</title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>	
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<script type="text/javascript">
function ver_plan(a,b,c){
	m4valor("plan","pk0",a,"set");
	m4valor("plan","pk1",b,"set");
	m4valor("plan","pk2",c,"set");
	m4submit("plan");
}
</script>
<script type="text/javascript">
function ver_puesto(a){
	m4valor("puesto","zSJOB",a,"set");
	m4submit("puesto");
}
</script>
</head>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_CAREER_PLAN";
   String zmeta4object = "SSM_CAREER_PLAN";
   String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";
   String znodo = "SSM_CAREER_PLAN";

   String zventanas = "20";
   int zvuelta = 5;
   String zdireccion = "/mss_g3/mss_g3_p8.jsp";
   String zestado="31";

      	// No se modifica en general.

   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + "[" + zregistroinicial + "]";
   String zlectura = zsubsesion + "!" + znodo;
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String ztipocarga = "M4T";
	
// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

	String zSNOMBREGLOBAL = zcomun + "SCO_GB_NAME";
	String zSNOMBRE = zcomun + "STD_N_FIRST_NAME";
	String zSAPELLIDOS = zcomun + "STD_N_FAMILY_NAME_1";
	String zSPLAN = zcomun + "SCO_NM_CAREER_PLAN";
	String zNJOB = zcomun + "STD_N_JOB_CODE";
	String zSJOB = zcomun + "SCO_ID_JOB_CODE";
	String zpk0 = zcomun + "STD_ID_HR";
	String zpk1 = zcomun + "STD_OR_HR_PERIOD";
	String zpk2 = zcomun + "DT_START";
	String zCAREER_PLAN_LBL = zcomun + "CAREER_PLAN_LBL";
	String zCAREER_PLAN_DESC_LBL = zcomun + "CAREER_PLAN_DESC_LBL";
	
	String zEMPLOYEE_LBL = zcomun + "EMPLOYEE_LBL";
	String zCAREER_PLAN_S_LBL = zcomun + "CAREER_PLAN_S_LBL";
	String zJOB_LBL = zcomun + "JOB_LBL";
	String zCAREER_PLAN_DETAIL_LBL = zcomun + "CAREER_PLAN_DETAIL_LBL";
	String zJOB_DETAIL_LBL_1 = zcomun + "JOB_DETAIL_LBL_1";
	String zNO_DATA_LBL = zcomun + "NO_DATA_LBL";
	
	
	String sIDPerson = "";
	String sOrHrPeriod = "";
	String sDtStart = "";

%><m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcount  = 0;
	int  zcounti  = 0;	
	try{
		M4Operations m = new M4Operations(request);
		zcount = m.getCount(znodo,zsubsesion,znodo);
		zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Planos de carreira</td></tr>
<tr>
	<td><img alt="Planos de carreira" src="/iconos/noname_plan_carrera_133_100.gif" width="100" height="100"  /></td>
	<td>
	<div class="descripcionfuncional">
	Consulte os planos de carreira dos trabalhadores e o posto que ocupam actualmente.</div>
	</td>
</tr>
</table>
<% if (zcounti > 0) { %>	
<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo">
	<td colspan="2">Trabalhadores</td><td>Plano de carreira</td><td>Posto actual</td>		
</tr>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_pc.jsp?estado=31" method="post" name="plan" id="plan">
<input type="hidden" id="pk0" name="pk0" value="" />
<input type="hidden" id="pk1" name="pk1" value="" />
<input type="hidden" id="pk2" name="pk2" value="" />
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?estado=31" method="post" name="puesto" id="puesto">
<input type="hidden" id="zSJOB" name="zSJOB"  value="" />
</form>
<%
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistrofinal);
String zposicions = "0";int zcontrol = 0;int zposicion =0;%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix; zposicion = Integer.valueOf(zposicions).intValue();%>
<tr>
	<m4:item item="STD_ID_HR" htmlsafe="true" outputdef="<%=znodo%>" var="sIDPerson" />
	<%sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIDPerson);%>
	<m4:item item="STD_OR_HR_PERIOD" htmlsafe="true" outputdef="<%=znodo%>" var="sOrHrPeriod" />
	<%sOrHrPeriod = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHrPeriod);%>
	<m4:item item="DT_START" htmlsafe="true" outputdef="<%=znodo%>" var="sDtStart" />
	<%sDtStart = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sDtStart);%>
	<td colspan="2" class="fuentevalor">&nbsp;<m4:item m4name="<%=zSNOMBREGLOBAL%>" htmlsafe="true"/></td>

	<td class="fuentevalor">&nbsp;<a class="enlacefuncional" title="Informa&ccedil;&otilde;es sobre o plano de carreira" href="javascript:ver_plan('<%=sIDPerson%>','<%=sOrHrPeriod%>','<%=sDtStart%>');" ><m4:item m4name="<%=zSPLAN%>" htmlsafe="true"/></a></td>
	<td class="fuentevalor">&nbsp;<a class="enlacefuncional" title="Informa&ccedil;&otilde;es sobre o posto" href="javascript:ver_puesto('<m4:item m4name="<%=zSJOB%>" jsafe="true" htmlsafe="true"/>');"><m4:item m4name="<%=zNJOB%>" htmlsafe="true"/></a></td>
</m4:loop>
</table>	
<%@include file="../../sse_generico/portugues/generico_ventanas.jsp"%>
<%}	else{%>
<div class="fuentenodatos">Actualmente n&atilde;o existe qualquer plano de carreira relativo aos trabalhadores.</div>
<%}%>	
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


