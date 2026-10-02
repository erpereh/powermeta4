<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html><head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
if ((estado==null)||(estado.equals(""))){estado="31";}
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
//String zfiltrojob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltrojob");
String zfiltrojob = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltrojob");
if ((zfiltrojob==null)|| (""==zfiltrojob)){zfiltrojob = "";} 

String ztitle = "";
String Description = "";
String LinkJob = "";
String LblJob = "";
String NoDataFound2 = "";
String LblEvppal = "";
String VerDet = "";
String All="";
String zLblGraphGauss = "";
String zEvaluatoAuto = "";
String zEvaluatoPpal = "";
String zEvaluatoNoPpal = "";
%>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>	

<%@ include file="/sse_g3/sse_ev_trans.jsp"%>
<%ztitle = TranEss.getProperty("ev_ess.ProcEv");
Description = TranEss.getProperty("ev_ess.DescrConsEv");
LblJob = TranEss.getProperty("ev_ess.LblJob");
LinkJob = TranEss.getProperty("ev_ess.LinkJob");
NoDataFound2 = Tran.getProperty("Label.NoDataFound2");
LblEvppal= TranEss.getProperty("ev_ess.LblEvppal");
VerDet= Tran.getProperty("Label.VerDet");
All = Tran.getProperty("Label.All");
zLblGraphGauss = TranEss.getProperty("ev_ess.LblGraphGauss");
String znombrepuesto=Tran.getProperty("Label.All");
zEvaluatoAuto = TranEss.getProperty("ev_ess.LabelAuto");
zEvaluatoPpal = TranEss.getProperty("ev_ess.Labelppal");
zEvaluatoNoPpal = TranEss.getProperty("ev_ess.LabelNoppal");
%>
<title><%=ztitle%></title>
</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%@ include file="../ssco_evaluator_filter_body.jsp"%>	
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>
<m4:endpage/>
</body>
</html>



