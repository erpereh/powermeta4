<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %><?xml version="1.0" encoding="iso-8859-1" ?><!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd"><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %><html><head><title>Payslip</title><link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" /><script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script></script><script type="text/javascript" src="/libreria/clase_val_entradas.js"></script><%

//
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="21";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String zpaga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_DT_ACCRUED_P");
String zrevision = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_SEL_PAY_P");
String zpayfreq = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_PAY_FREQ_AC_P");
String znmpay = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_NM_PAY");
String zperiod = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_OR_HR_PERIOD");
String znumreg = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_REG");
String ztypeload = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"TYPELOAD");
if (zpaga==null){zpaga = "";}
if ((zrevision==null)||(zrevision.equals(""))){zrevision = "1";}
if ((zpayfreq==null)||(zpayfreq.equals(""))){zpayfreq = "004";}
if (znmpay==null){znmpay = "";}
if ((zperiod==null)||(zperiod.equals(""))){zperiod = "1";}
if ((ztypeload==null)||(ztypeload.equals(""))){ztypeload = "0";}
if ((znumreg==null)||(znumreg.equals(""))){znumreg = "0";}
int iNumReg= Integer.valueOf(znumreg).intValue();

//
String zsubsesion = "SCO_SS_REC";
String zmeta4object = zsubsesion;
String zmetodocarga = zsubsesion + "!SCO_SS_REC.SCO_TYPELOAD";
String znodo = zsubsesion;
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
 
String zventanas = "20";
int zvuelta = 5;
String zdireccion = "sse_g2/sse_g2_rec.jsp";

   	// Normally not modified.

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
  
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zmove = znodo + ":" + znodo + "[zregistroinicial]";   
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
 
String zSCO_COUNT_PERIOD = zraiz + "SCO_COUNT_PERIOD";
String zSTD_N_LEG_ENT = zraiz + "STD_N_LEG_ENT";
String zSCO_ID_LEG_ENT = zraiz + "SCO_ID_LEG_ENT";
 
String zSCO_DT_PAY_START = zraiz + "SCO_DT_PAY_START";
String zSCO_DT_PAY_END = zraiz + "SCO_DT_PAY_END"; 
	
String zSTD_ID_PERSON = zraiz + "STD_ID_PERSON";
String zSTD_N_FIRST_NAME = zraiz + "STD_N_FIRST_NAME";
String zSTD_N_FAMILY_NAME_1 = zraiz + "STD_N_FAMILY_NAME_1";

String zID_CURRENCY = zraiz + "ID_CURRENCY";

String zSCO_ID_JOB_CODE = zraiz + "SCO_ID_JOB_CODE";
String zSCO_N_JOB_CODE = zraiz + "SCO_N_JOB_CODE";

String zSCO_ACCOUNT_NUMBER = zraiz + "SCO_ACCOUNT_NUMBER";
String zSCO_NM_BNK = zraiz + "SCO_NM_BNK";


String zSCO_TOT_DEDUCTIONS = zraiz + "SCO_TOT_DEDUCTIONS";
String zSCO_TOT_EARNINGS = zraiz + "SCO_TOT_EARNINGS";
String zSCO_NET = zraiz + "SCO_NET";
String zSCO_COL_1 = zcomun + "SCO_COL_1";
String zSCO_COL_2 = zcomun + "SCO_COL_2";
String zSCO_COL_3 = zcomun + "SCO_COL_3";
String zSCO_COL_4 = zcomun + "SCO_COL_4";
String zSCO_COL_5 = zcomun + "SCO_COL_5";%><m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<%
//If the Meta4Object must be loaded
if (ztypeload.equals("0")) {
try {
    M4Operations m = new M4Operations(request);
	m.setItem(zsubsesion,znodo,"","SCO_DT_ACCRUED_P",zpaga);
    m.setItem(zsubsesion,znodo,"","SCO_SEL_PAY_P",zrevision);
	m.setItem(zsubsesion,znodo,"","SCO_ID_PAY_FREQ_AC_P",zpayfreq);
	m.setItem(zsubsesion,znodo,"","SCO_OR_HR_PERIOD",zperiod);

} catch(Exception e) {} }%>

<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TYPELOAD" value="<%=ztypeload%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/>
</m4:outputdef><m4:endjob/><m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move> 

<%
int  zcount  = 0;
int  zcounti  = 0;	
String zcountperiod = "" ;
try {
    M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	zcountperiod = m.getItem(znodo,zmeta4object,znodo,"","SCO_COUNT_PERIOD");
	
    } catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);

//Next/Previous buttons
boolean bNext = false;
boolean bPrevious = false;

if (znumreg.equals("1")) {
 bPrevious = false;
 if (zcountperiod.equals("1")){
 bNext = false ;
 }else{
 bNext = true ;}
}else if (znumreg.equals(zcountperiod)){
bNext = false ;
bPrevious = true ;
}else{
bNext = true ;
bPrevious = true ;}
%>

<script type="text/javaScript">

function next(){
var Num= 0;
Num = <%=iNumReg%> + 1 ;
m4valor("oculto","SCO_DT_ACCRUED_P",'<%=zpaga%>',"set");
m4valor("oculto","SCO_SEL_PAY_P",'<%=zrevision%>',"set");
m4valor("oculto","SCO_ID_PAY_FREQ_AC_P",'<%=zpayfreq%>',"set");
m4valor("oculto","SCO_NM_PAY",'<%=znmpay%>',"set");
m4valor("oculto","SCO_OR_HR_PERIOD",'<%=zperiod%>',"set");
m4valor("oculto","NUM_REG",Num + "","set");
m4valor("oculto","TYPELOAD","1","set");

m4submit("oculto");}

function previous(){
var Num= 0;
Num = <%=iNumReg%> -1 ;
m4valor("oculto","SCO_DT_ACCRUED_P",'<%=zpaga%>',"set");
m4valor("oculto","SCO_SEL_PAY_P",'<%=zrevision%>',"set");
m4valor("oculto","SCO_ID_PAY_FREQ_AC_P",'<%=zpayfreq%>',"set");
m4valor("oculto","SCO_NM_PAY",'<%=znmpay%>',"set");
m4valor("oculto","SCO_OR_HR_PERIOD",'<%=zperiod%>',"set");
m4valor("oculto","NUM_REG",Num + "","set");
m4valor("oculto","TYPELOAD","2","set");

m4submit("oculto");}
</script>

</head><body><h1 class="titulofuncional">Payslip&nbsp;<%=znmpay%></h1><div class="descripcionfuncional">Individual Pay Receipt</div><table class="tablaestados" width="100%" cellspacing="0"><tr>
<%if (bPrevious) {%><td><a href="javascript:previous();"><img alt="Previous" src="/iconos/icono_anterior_ess_58_50.gif" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)"></img></a></td> <%}%>
<%if (bNext) {%><td><a href="javascript:next();"><img alt="Next"src="/iconos/icono_siguiente_ess_58_50.gif" onmouseover=" m4luztotal(this)" onmouseout="m4oscuridad(this)" ></img></a></td><%}%>
<td ><ul class="listaenlace"><li><a class="enlacefuncional" title="Print the Payslip" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec_imp.jsp?estado=21">Print</a></li></ul></td>

<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="SCO_DT_ACCRUED_P" name="SCO_DT_ACCRUED_P"/>
<input type="hidden" id="SCO_SEL_PAY_P" name="SCO_SEL_PAY_P" />
<input type="hidden" id="SCO_ID_PAY_FREQ_AC_P" name="SCO_ID_PAY_FREQ_AC_P"/>
<input type="hidden" id="SCO_NM_PAY" name="SCO_NM_PAY"/>
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"/>
<input type="hidden" id="NUM_REG" name="NUM_REG"/>
<input type="hidden" id="TYPELOAD" name="TYPELOAD"/>
</form>
<%@ include file="sse_g2_table_rec.jsp" %>	
</div></body><m4:endpage/></html>



