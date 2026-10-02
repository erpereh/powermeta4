<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %><?xml version="1.0" encoding="iso-8859-1" ?><!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd"><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*, com.meta4.utilities.*" %><html><head><title>Payslip</title><link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" /><%

String zrecibo = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"recibo");
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
String zpaga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"z_paga");

String zsubsesion = "SCO_SS_REC";
String zmeta4object = zsubsesion;
String znodo = zsubsesion;
String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
 
String zventanas = "20";
int zvuelta = 5;
String zdireccion = "sse_g2/sse_g2_rec_imp.jsp";
String zestado = "21";

   	// Normally not modified.

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
  
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zmove = znodo + ":" + znodo + "[zregistroinicial]";   
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
  
 // Items to be loaded. You must add all of the ones that you want to view.
 
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

String zSCO_TOT_EARNINGS = zraiz + "SCO_TOT_EARNINGS";
String zSCO_TOT_DEDUCTIONS = zraiz + "SCO_TOT_DEDUCTIONS";
String zSCO_NET = zraiz + "SCO_NET";

String zSCO_ACCOUNT_NUMBER = zraiz + "SCO_ACCOUNT_NUMBER";
String zSCO_NM_BNK = zraiz + "SCO_NM_BNK";

String zSCO_COL_1 = zcomun + "SCO_COL_1";
String zSCO_COL_2 = zcomun + "SCO_COL_2";
String zSCO_COL_3 = zcomun + "SCO_COL_3";
String zSCO_COL_4 = zcomun + "SCO_COL_4";
String zSCO_COL_5 = zcomun + "SCO_COL_5";%><m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/><m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef><m4:endjob/><m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move><%
int  zcount  = 0;
int  zcounti  = 0;	
try {
    M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);%></head><body>
<%@ include file="sse_g2_table_rec.jsp" %>	
</div></body><m4:endpage/></html>



