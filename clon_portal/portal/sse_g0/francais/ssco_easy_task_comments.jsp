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
String zIdWkitem =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkitem");
String zIdWkBpo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo");
String zNWkBpo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNWkBpo");
String zDescBpo =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescBpo");
String zLoadType =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zLoadType");
String zDeleteLastComment = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDeleteLastComment");
String zLoadTypeTask = "TASK";
String zLoadTypeBpo = "BPO";

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((znivel==null)||(znivel.equals(""))) znivel = "1";
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((zIdWkBpo==null)||(zIdWkBpo.equals(""))) zIdWkBpo = "";
if ((zNWkBpo==null)||(zNWkBpo.equals(""))) zNWkBpo = "";
if ((zDescBpo==null)||(zDescBpo.equals(""))) zDescBpo = "";
if ((zIdWkitem==null)||(zIdWkitem.equals(""))) zIdWkitem = "";
if ((zLoadType==null)||(zLoadType.equals(""))) zLoadType = zLoadTypeTask;
if ((zDeleteLastComment==null)||(zDeleteLastComment.equals(""))) zDeleteLastComment ="";
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
 String zNoDataFoundLbl = TranEasytask.getProperty("Label.NoCommentsFound");
 String zButtonCloseLbl = TranEasytask.getProperty("Button.Close");
 String zRadioTaskLbl = TranEasytask.getProperty("Radio.Task");
 String zRadioBpoLbl = TranEasytask.getProperty("Radio.Bpo");
 String zCommentsDesc = TranEasytask.getProperty("Page.CommentsDesc");
 String zCommentsDesc1 = TranEasytask.getProperty("Page.CommentsDesc1");
 String zBtnDeleteLastComment = TranEasytask.getProperty("Button.DeleteLastCommnet");
%>

<script type="text/javascript">
  function m4changeCommentsView (){
     var objCommentType = m4objeto("frmCommentType","CommentsLoadType");
	 var valor ="";
	 if (objCommentType.length >0){
	    for (i=0; i<objCommentType.length; i++) {
   			if (objCommentType[i].checked == true){
   				valor = objCommentType[i].value;
   			}
   		} 
	 }
	 m4valor("oculto","zLoadType",valor,"set");
	 m4submit ("oculto");
  }
  
  function m4checkCommentType(index){
    var objCommentType = m4objeto("frmCommentType","CommentsLoadType");
	objCommentType[index].checked="checked";
  }
  
  function m4deleteLastComment()
  {
    var objDeleteLastComment = m4objeto("oculto","zDeleteLastComment");
	objDeleteLastComment.value = "1";
    m4submit ("oculto");
  }
  //refrescar los comentarios de la ventana original pq se ha borrado alguno
  function m4refreshOpenerComments()
  { 
   if (!opener.closed && opener.location) {
      eval('opener.m4refreshcomments()');
	}
  }
</script>

<%
   String zsubsesion = "SSCO_WF_EASY_TASK";
   String zmeta4object = "SSCO_WF_EASY_TASK";
   String znodoprincipal = "SSCO_WF_EASY_TASK_ROOT";
   String zmetodocarga = "SSCO_LOAD_COMMENTS:" + zsubsesion + "!" + znodoprincipal + ".SSCO_LOAD_COMMENTS";
   String zmetododelete = "SSCO_DELETE_LAST_COMMENT:" + zsubsesion + "!" + znodoprincipal + ".SSCO_DELETE_LAST_COMMENT";
	 
   String znodoworkitemcomments = "SSCO_WORKITEM_COMMENTS";
   String zventanas = "20";
   int zvuelta = 2;
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   String znamenodo  = znodoworkitemcomments + ":" + zsubsesion  + "!" + znodoworkitemcomments;
   
   String zoutputdef = zsubsesion + "!" + znodoworkitemcomments + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodoworkitemcomments + ":" +  znodoworkitemcomments + "[" + zregistroinicial + "]";
   String zraiz = znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments + ".";
   String zcomun = znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments + "[&VAR.m4lix]" + ".";

   String znodocom = "SSCO_ERROR_COMUNICATION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
      
   
   String zID_COMMENT = zcomun + "ID_COMMENT";
   String zN_APP_USER = zcomun+ "N_APP_USER";
   String zN_STATE = zcomun + "N_STATE";
   String zDESC_COMMENT = zcomun+ "DESC_COMMENT";
   String zDT_COMMENT = zcomun+ "DT_COMMENT";
   String zSHOW_DELETE_COMMENT_BTT = zcomun + "SHOW_DELETE_COMMENT_BTT";
   
        
 %>
 
 <m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% if (zDeleteLastComment.equals("1")){%>
  <m4:exec m4method="<%=zmetododelete%>">
   <m4:param name="ARG_ID_WORKITEM" value="<%=zIdWkitem%>"/>
</m4:exec>
   
<%}%>
<m4:exec m4method="<%=zmetodocarga%>">
   <m4:param name="ARG_LOAD_TYPE" value="<%=zLoadType%>"/>
   <m4:param name="ARG_ID_WORKITEM" value="<%=zIdWkitem%>"/>
   <m4:param name="ARG_ID_BPO" value="<%=zIdWkBpo%>"/>
</m4:exec>

<m4:outputdef m4alias="<%=znodoworkitemcomments%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
	int  zcounti  = 0;
	int  zcount  = 0;	
	try {
		M4Operations m = new M4Operations(request);
		zcounti = m.getCountInClient(znodoworkitemcomments,zsubsesion,znodoworkitemcomments);
		zcount = m.getCount(znodoworkitemcomments,zsubsesion,znodoworkitemcomments);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
%>


<title><m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></title>
</head>

<body >


<form id="oculto" name="oculto" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_comments.jsp" method="post">
	<input type="hidden" id="zLoadType" name="zLoadType" value="<%=zLoadType%>" />
	<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
	<input type="hidden" id="znivel" name="znivel" value="<%=znivel%>" />
	<input type="hidden" id="zinicios" name="zinicios"  value="" />
	<input type="hidden" id="zIdWkBpo" name="zIdWkBpo"  value="<%=zIdWkBpo%>" />		
	<input type="hidden" id="zNWkBpo" name="zNWkBpo"  value="<%=zNWkBpo%>" />
	<input type="hidden" id="zDescBpo" name="zDescBpo"  value="<%=zDescBpo%>" />
	<input type="hidden" id="zIdWkitem" name="zIdWkitem"  value="<%=zIdWkitem%>" />	
	<input type="hidden" id="zDeleteLastComment" name="zDeleteLastComment" value="" />
</form>


<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"> <m4:label m4name="<%=znamenodo%>" htmlsafe="true"/></td></tr>
<tr>
    <td><img alt="" src="/iconos/noname_listado_63_80.gif" width="100" height="100" />
	</td>
	<td>
	   <table>
	   <tr><td><div class="descripcionfuncional"><%=zCommentsDesc%></div></td></tr>
	   <tr><td><div class="descripcionfuncional"><%=zCommentsDesc1%></div></td></tr>	        	   	   
	   </table>
	</td>
</tr>
</table>

<table width="100%" cellspacing="0">
<tr><td><div class="descripcionfuncional"><%=zNWkBpo%></div></td></tr>
<%if ((zDescBpo!=null)&&(!zDescBpo.equals(""))){%>
<tr><td><div class="descripcionfuncional">&nbsp;(<%=zDescBpo%>)</div></td></tr>
<%}%>
<tr><td>&nbsp;</td></tr>	
</table>

<table  width="100%" cellspacing="0">
<form id="frmCommentType" name="frmCommentType"> 
<tr class = "tablaestadosceldatitulo">
<td >&nbsp;<input id= "CommentsLoadType" name="CommentsLoadType" type="radio" onclick = "javascript:m4changeCommentsView();" value="<%=zLoadTypeTask%>" /><%=zRadioTaskLbl%> </td>
<td >&nbsp;<input id= "CommentsLoadType" name="CommentsLoadType" type="radio" onclick = "javascript:m4changeCommentsView();" value="<%=zLoadTypeBpo%>" /><%= zRadioBpoLbl%></td>
</tr>
<%if (zLoadType.equals(zLoadTypeTask)){%>
   <script type="text/javascript"> m4checkCommentType(0);</script>
<%}else{%>
   <script type="text/javascript"> m4checkCommentType(1);</script>
<%}%>
<tr><td colspan="2">&nbsp;</td></tr>
</form>
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
<td width="30%">&nbsp;<m4:label m4name="<%=zN_STATE%>" htmlsafe = "true"/></td>
<td >&nbsp;<m4:label m4name="<%=zN_APP_USER%>" htmlsafe = "true"/></td>
<td >&nbsp;<m4:label m4name="<%=zDT_COMMENT%>" htmlsafe = "true"/></td>
<td width="35%">&nbsp;<m4:label m4name="<%=zDESC_COMMENT%>" htmlsafe = "true"/></td>
<td >&nbsp;</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions1 = m4lix;zposicion1 = Integer.valueOf(zposicions1).intValue();zcontrol1 = zposicion1%2;if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%>
<m4:item m4varname="ShowDeleteCommentBtt" m4name="<%=zSHOW_DELETE_COMMENT_BTT%>" />
<tr>
<td class="fuentevalor<%=zPaint1%>" width="30%"><m4:item m4name="<%=zN_STATE%>" htmlsafe = "true"/></td>
<td class="fuentevalor<%=zPaint1%>" ><m4:item m4name="<%=zN_APP_USER%>" htmlsafe = "true"/></td>
<td class="fuentevalor<%=zPaint1%>" ><m4:item m4name="<%=zDT_COMMENT%>" htmlsafe = "true" m4format="<%=zsgcoParamDate%>"/></td>
<td class="fuentevalor<%=zPaint1%>" width="35%"><m4:item m4name="<%=zDESC_COMMENT%>" htmlsafe = "true"/></td>

<%if (ShowDeleteCommentBtt.equals("1")) {%>
<td class="fuentevalor<%=zPaint1%>">&nbsp;
	<a href="javascript:m4deleteLastComment();" title="<%=zBtnDeleteLastComment%>">
	<img class="tablamenuright" alt="<%=zBtnDeleteLastComment%>" src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
</td>
<%}else{%>
 <td class="fuentevalor<%=zPaint1%>" >&nbsp;</td>
<%}%>

</tr>	
</m4:loop>
<tr> <td class="fuenteboton" colspan="5">&nbsp;</br> </td></tr>
</table>
<%@include file="../../sse_generico/francais/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=zNoDataFoundLbl%></div>
<%}%>
 </br>	
<div class="fuentenodatos"><a href="javascript:window.close();">											
	<img alt="<%=zButtonCloseLbl%>"  src="/iconos/entrar_blanco.gif" height="36" width="36" >
	</a></div>

<m4:endpage/>

	
<% if (zDeleteLastComment.equals("1")){%>
<script type="text/javascript">
   m4refreshOpenerComments();
</script>
<%}%>
  </body>
</html>



