<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
String zParamAction =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zParamAction");
String zIdWkBpo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo");
String zNWkBpo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNWkBpo");
String zDescBpo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescBpo");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((znivel==null)||(znivel.equals(""))) znivel = "1";
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zIdWkBpo==null)||(zIdWkBpo.equals(""))) zIdWkBpo = "";
if ((zNWkBpo==null)||(zNWkBpo.equals(""))) zNWkBpo = "";
if ((zDescBpo==null)||(zDescBpo.equals(""))) zDescBpo = "";

%>
	
<%
M4SessionManager zsessionmanagermssess = M4Context.getSession(request);
String zMssEss=zsessionmanagermssess.getProductID();
if((zMssEss==null)||(zMssEss.equals(""))) zMssEss = "ess";
if (zMssEss.equals("ess")){
%>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />	
<%}else{%>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>

<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/library/m4gen.js"></script>
<%@ include file="/sse_g0/ssco_etask_trans.jsp"%>

<% 
 String zNoDataFoundLbl = TranEasytask.getProperty("Label.NoHistoricFound");
 String zButtonCloseLbl = TranEasytask.getProperty("Button.Close");
 String zHistoricDesc = TranEasytask.getProperty("Page.HistoricDesc");
 String zImageAssignTaskLbl = TranEasytask.getProperty("Image.AssignedTask");
 String zImageFinishedTaskLbl = TranEasytask.getProperty("Image.FinishedTask");
 String zImageNotPendingTaskLbl = TranEasytask.getProperty("Image.NotPendingTask");
 String zPageTitle =  TranEasytask.getProperty("Page.HistoricTitle");
%>


<%
   String zsubsesion = "SSCO_WF_EASY_TASK";
   String zmeta4object = "SSCO_WF_EASY_TASK";
   String znodoprincipal = "SSCO_WF_EASY_TASK_ROOT";
   String zmetodocarga = "SSCO_LOAD_HISTORIC:" + zsubsesion + "!" + znodoprincipal + ".SSCO_LOAD_HISTORIC";
	 
   String znodoworkitemhistoric = "SSCO_WORKITEM_HISTORIC";
   String zventanas = "20";
   int zvuelta = 2;
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String znamenodo  = znodoworkitemhistoric + ":" + zsubsesion  + "!" + znodoworkitemhistoric;
   
   String zoutputdef = zsubsesion + "!" + znodoworkitemhistoric + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodoworkitemhistoric + ":" +  znodoworkitemhistoric + "[" + zregistroinicial + "]";
   String zraiz = znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric + ".";
   String zcomun = znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric + "[&VAR.m4lix]" + ".";

   String znodocom = "SSCO_ERROR_COMUNICATION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
      
   
   String zN_STATE = zcomun + "N_STATE";
   String zN_APP_USER = zcomun+ "N_APP_USER";
   String sItemDT_INSTANTIATION = "DT_INSTANTIATION";
   String zDT_INSTANTIATION= zcomun + sItemDT_INSTANTIATION;
   String zDT_CANCELATION= zcomun + "DT_CANCELATION";
   String zIS_EXECUTED_BY_USER = zcomun + "IS_EXECUTED_BY_USER";
   String zID_WKITEM_STATUS = zcomun + "ID_WKITEM_STATUS";
   String zIS_SUB_BPO = zcomun + "IS_SUB_BPO";   
   
        
 %>
 
 <m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
   <m4:param name="ARG_ID_BPO" value="<%=zIdWkBpo%>"/>
</m4:exec>

<%
try {
    M4Operations m2 = new M4Operations(request); 
	Vector vSortItem = new Vector();
	vSortItem.addElement(new SortElement(sItemDT_INSTANTIATION, SortElement.ASC));
	m2.addSort(zsubsesion, znodoworkitemhistoric, vSortItem, sItemDT_INSTANTIATION);
} catch(Exception e) {}
%>		

<m4:outputdef m4alias="<%=znodoworkitemhistoric%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcount  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodoworkitemhistoric,zsubsesion,znodoworkitemhistoric);
		zcount = m.getCount(znodoworkitemhistoric,zsubsesion,znodoworkitemhistoric);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>


<title><%=zPageTitle%></title>
</head>

<body>

	<form id="oculto" name="oculto" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_historic.jsp" method="post">
	<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
	<input type="hidden" id="znivel" name="znivel" value="<%=znivel%>" />
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
	<input type="hidden" id="zIdWkBpo" name="zIdWkBpo"  value="<%=zIdWkBpo%>" />	
	<input type="hidden" id="zNWkBpo" name="zNWkBpo"  value="<%=zNWkBpo%>" />
	<input type="hidden" id="zDescBpo" name="zDescBpo"  value="<%=zDescBpo%>" />
	</form>


<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"> <%=zPageTitle%></td></tr>
<tr>
    <td><img alt="" src="/iconos/noname_listado_63_80.gif" width="63" height="80" />
	</td>
	<td><div class="descripcionfuncional"><%=zHistoricDesc%></div></td>           	   	   
</tr>
</table>

<table width="100%" cellspacing="0">
<tr><td><div class="descripcionfuncional"><%=zNWkBpo%></div></td></tr>
<%if ((zDescBpo!=null)&&(!zDescBpo.equals(""))){%>
<tr><td><div class="descripcionfuncional">&nbsp;(<%=zDescBpo%>)</div></td></tr>
<%}%>
<tr><td>&nbsp;</td></tr>	
</table>
	   
<% if (zcounti > 0) {
    String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); 
	String  zPaint1="";
	int zposicion1 = 0;
	int zcontrol1 = 0;
	String zposicions1 = "0";
%>

<table class = "tablaestados" width="100%" cellspacing="0">
<tr class = "tablaestadosceldatitulo " >
<td>&nbsp;</td>
<td width="30%">&nbsp;<m4:label m4name="<%=zN_STATE%>" htmlsafe = "true"/></td>
<td>&nbsp;<m4:label m4name="<%=zN_APP_USER%>" htmlsafe = "true"/></td>
<td>&nbsp;<m4:label m4name="<%=zDT_CANCELATION%>" htmlsafe = "true"/></td>
</tr>
   
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions1 = m4lix;zposicion1 = Integer.valueOf(zposicions1).intValue();zcontrol1 = zposicion1%2;if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%>


<m4:item m4varname="isExecutedByUser" m4name="<%=zIS_EXECUTED_BY_USER%>" m4format="0"/>
<m4:item m4varname="IdWorkItemStatus" m4name="<%=zID_WKITEM_STATUS%>" m4format="0"/>
<m4:item m4varname="isSubBPo" m4name="<%=zIS_SUB_BPO%>"  m4format="0"/>

<tr>
<td class="fuentevalor<%=zPaint1%>" width="1%">

<% if (IdWorkItemStatus.equals("1")){%>
<img alt="<%=zImageAssignTaskLbl%>"  src="/iconos/icono_assigned_task_16_16.gif" height="16" width="16"   onmouseout="m4oscuridad(this)" >
<%}else {
   if ((IdWorkItemStatus.equals("2")) && (isExecutedByUser.equals("1"))){%>
<img alt="<%=zImageFinishedTaskLbl%>"  src="/iconos/icono_finished_task_16_16.gif" height="16" width="16"   onmouseout="m4oscuridad(this)" >
<%}else{%>
<img alt="<%=zImageNotPendingTaskLbl%>"  src="/iconos/icono_task16_16.gif" height="16" width="16"  onmouseout="m4oscuridad(this)" >
<%}}%>
</td>
<td class="fuentevalor<%=zPaint1%>" width="69%">
   <% if (isSubBPo.equals("1")){%>
   &nbsb;&nbsp;&nbsp;
   <%}%>
   <m4:item m4name="<%=zN_STATE%>" htmlsafe = "true"/>
</td>
<td class="fuentevalor<%=zPaint1%>" width="10%"><m4:item m4name="<%=zN_APP_USER%>" htmlsafe = "true"/></td>
<td class="fuentevalor<%=zPaint1%>" width="10%"><m4:item m4name="<%=zDT_CANCELATION%>" htmlsafe = "true" m4format="<%=zsgcoParamDate%>"/></td>
</tr>	
</m4:loop>
<tr> <td class="fuenteboton" colspan="4">&nbsp;</td></tr>
</table>
<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=zNoDataFoundLbl%></div>
<%}%>
</br>
<div class="fuentenodatos"><a href="javascript:window.close();">											
	<img alt="<%=zButtonCloseLbl%>"  src="/iconos/entrar_blanco.gif" height="36" width="36" >
	</a></div>


<m4:endpage/>
  </body>
</html>



