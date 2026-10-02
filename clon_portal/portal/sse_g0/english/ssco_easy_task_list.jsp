<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  

String zdireccion = "/sse_g0/ssco_easy_task_list.jsp";
String zIdTaskFilter =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdTaskFilter");
String zIdEventOk =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdEventOk");
String zIdEventCancel =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdEventCancel");
String zType = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"type");
String zTaskDescFilter =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTaskDescFilter");
String zParamAction =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zParamAction");
String zIdWkitem = (String)session.getAttribute("ID_WORKITEM");
session.removeAttribute("ID_WORKITEM");
if (zIdWkitem==null){
  zIdWkitem=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_WORKITEM");
}
String zIdBPC =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdBPC");
String zIdState=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdState");
String zRefreshC = request.getParameter ("zRefreshC"); 
String zTitleLbl = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zTitleLbl");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((znivel==null)||(znivel.equals(""))) znivel = "1";
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

if ((zIdTaskFilter==null)||(zIdTaskFilter.equals(""))) zIdTaskFilter = "";
if ((zIdEventOk==null)||(zIdEventOk.equals(""))) zIdEventOk = "";
if ((zIdEventCancel==null)||(zIdEventCancel.equals(""))) zIdEventCancel = "";
if ((zType==null)||(zType.equals(""))){zType="1";}
if (zTaskDescFilter==null){zTaskDescFilter = "";}
if ((zIdWkitem==null)||(zIdWkitem.equals(""))) zIdWkitem = "";
if ((zIdBPC==null)||(zIdBPC.equals(""))) zIdBPC = "";
if ((zIdState==null)||(zIdState.equals(""))) zIdState = "";
if ((zRefreshC==null)||(zRefreshC.equals(""))) zRefreshC = "";
if ((zTitleLbl==null)||(zTitleLbl.equals(""))) zTitleLbl = "";

if ((!zType.equals("1")) && (!zType.equals("2"))) zType="1";
if (zType.equals("1")){
   if (zIdTaskFilter.equals("")) {zIdTaskFilter = "BP_WF_CARRY_OUT_ACTIVITY_HTML";}
   if (zIdEventOk.equals("")) {zIdEventOk = "ID_EVENT_CARRIED_OUT";}
}else{if  (zType.equals("2")){
       if (zIdTaskFilter.equals("")) {zIdTaskFilter = "BP_WF_APPROVE_ACTIVITY_HTML";}
     if (zIdEventOk.equals("")) {zIdEventOk = "ID_EVENT_ACCEPTED";}
     if (zIdEventCancel.equals("")){zIdEventCancel="ID_EVENT_DENIED";}     
   }
}

%>
  
  
<%
M4SessionManager zsessionmanagermssess = M4Context.getSession(request);
String zMssEss=zsessionmanagermssess.getProductID();
if((zMssEss==null)||(zMssEss.equals(""))) zMssEss = "ess";
if (zMssEss.equals("ess")){
%>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <%@ include file="../../sse_generico/english/menu_ess.jsp" %>   
<%}else{%>
  <link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
  <%@ include file="../../mss_generico/english/menu_mss.jsp" %> 
<%}%>
<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse_val1.js"></script>
<script type="text/javascript" language="Javascript1.2" src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2" src="/library/m4gen.js"></script>


<%@ include file="/sse_g0/ssco_etask_trans.jsp"%>
<%
if (zTitleLbl.equals("")){
   zTitleLbl = TranEasytask.getProperty("Page.title" + zType);
 }
String zDescLbl = TranEasytask.getProperty("Page.desc" + zType);
String zDescLbl2 = TranEasytask.getProperty("Page.imagedesc" + zType);
String zDescLbl3 = TranEasytask.getProperty("Page.desc3");
 
String zDescLblFilter= TranEasytask.getProperty("Page.descfilter");
String zNoDataFoundLbl = TranEasytask.getProperty("Label.NoDataFound");
String zViewCommentsLbl = TranEasytask.getProperty("Label.ViewComments");
String zAddCommnetLbl = TranEasytask.getProperty("Label.AddComment");
String zViewHistoricLbl = TranEasytask.getProperty("Label.ViewHistoric");
String zFilterLbl = TranEasytask.getProperty("Label.Filter");
String zRemoveFilterLbl= TranEasytask.getProperty("Label.RemoveFilter");
String zTodolistLbl = TranEasytask.getProperty("Label.Todolist");
String zFilterDescLbl = TranEasytask.getProperty("Label.FilterDesc");
String zHistoricLbl = TranEasytask.getProperty("Label.Historic");
String zCommentsLbl = TranEasytask.getProperty("Label.Comments");
String zCommentLbl = TranEasytask.getProperty("Label.Comment");
String zCancelLbl = TranEasytask.getProperty("Check.Cancel");
String zCancelDescLbl = TranEasytask.getProperty("Check.CancelDesc");
String zOkDoneLbl = "";
String zOkDoneDescLbl = "";
 if (zType.equals("1")){ 
   zOkDoneLbl = TranEasytask.getProperty("Check.Done");
   zOkDoneDescLbl = TranEasytask.getProperty("Check.DoneDesc");
 }else{
   zOkDoneLbl = TranEasytask.getProperty("Check.Ok");
   zOkDoneDescLbl   = TranEasytask.getProperty("Check.OkDesc"); 
 }
String zSendLbl = TranEasytask.getProperty("Button.Send");
String zStablishFilterLbl = TranEasytask.getProperty("Button.StablishFilter");
String zTaskLbl = TranEasytask.getProperty("Label.Task");
String zParentLink =TranEasytask.getProperty("Page.Parentlink");
 
%>

<script type="text/javascript">
function m4AddFilter(){
var valor =m4valor("frmfilter","taskdescfilter","","get");
m4valor("oculto","zTaskDescFilter",valor,"set");
m4submit("oculto");
}


function m4RemoveFilter(){
m4valor("oculto","zTaskDescFilter","","set");
m4submit("oculto");
}


function m4Send(sMssEss){
var ParamAction="";
var sepActions = "{{";
var bAllOk = true;

if (typeof(document.forms["a0"]) != "undefined"){
   var numreg = parseInt(document.forms["a0"].elements["num_reg"].value);
   for (var i = 0; i < numreg; i++){
    if (bAllOk == true){
       var form1 = "a" + i;
       var form2 = "b" + i;
     var form3 = "c" + i;    

     var comment = m4valor(form3,"comment","","get");
     if (comment != ""){
        ParamAction = ParamAction + m4valor(form1,"witem_ord","","get") + "*" + "COMMENT=" + comment +sepActions;
     }

       if (document.forms[form2].elements['chkAccept'].checked == true)
     {     
         ParamAction = ParamAction + m4valor(form1,"witem_ord","","get") + "*" + "ACC=ACCEPT" +sepActions;
     }
     else{     
          if (typeof(document.forms[form2].elements['chkCancel']) != "undefined"){
         if (document.forms[form2].elements['chkCancel'].checked == true)
               {
              if ( m4CheckCancelWithComment (i) == true){ 
                 ParamAction = ParamAction + m4valor(form1,"witem_ord","","get") + "*" + "ACC=CANCEL" +sepActions;
            }else{
             if (sMssEss == "ess") {
               m4setlog("_sl_co_ess_etask_0");
           }else{
           m4setlog("_sl_co_mss_etask_0");
           }
             bAllOk =false;
            }
             }
            }
     }
      

  }  

   }
   if (bAllOk == true){
      m4valor("oculto","zTaskDescFilter","","set");
      m4valor("oculto","zParamAction",ParamAction,"set");
    m4submit("oculto");
  }
}
}

function m4ViewComment (ipos)
{
    var iTaskCommentsNumber = parseInt( m4valor("a"+ipos,"comments_task_number","","get"));
  var iBPoCommnetsNumber = parseInt(m4valor("a"+ipos,"comments_number","","get"));
    if (iTaskCommentsNumber == 0 && iBPoCommnetsNumber >0) {
    sLoadType = "BPO";
  }else{
    sLoadType = "TASK";
  }
  //var dir="/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_comments.jsp?zIdWkitem="+sIdWkItem +"&zIdWkBpo="+sIdBpo+"&zLoadType=" + sLoadType;
  //window.open(dir,'Vis','width=750,height=400,resizable,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=yes');
  
    var dNow = new Date(); 
  var swindow = "WindowViewComment" + dNow.getDay() + dNow.getHours() + dNow.getMinutes() + dNow.getSeconds();
  window.open("", swindow,'width=750,height=550,resizable,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=yes');
  document.forms.frmViewComment.target= swindow;
  m4valor("frmViewComment","zLoadType",sLoadType,"set"); 
  m4valor("frmViewComment","zIdWkBpo",m4valor("a"+ipos,"id_bpo","","get"),"set");
  m4valor("frmViewComment","zIdWkitem",m4valor("a"+ipos,"id_wkitem","","get"),"set");         
  m4valor("frmViewComment","zNWkBpo",m4valor("a"+ipos,"n_bpo","","get"),"set");
  m4valor("frmViewComment","zDescBpo",m4valor("a"+ipos,"desc_bpo","","get"),"set");
    m4submit("frmViewComment");
}

function m4ViewHistoric(ipos)
{
 //var dir="/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_historic.jsp?zIdWkBpo="+sIdBpo;
 //window.open(dir,'Vis','width=700,height=400,resizable,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=yes');
    var dNow = new Date(); 
  var swindow = "WindowViewHistoric" + dNow.getDay() + dNow.getHours() + dNow.getMinutes() + dNow.getSeconds();
  window.open("", swindow,'width=750,height=550,resizable,toolbar=no,scrollbars=yes,copyhistory=no,directories=no,status=yes');
  document.forms.frmViewHistoric.target= swindow; 
  m4valor("frmViewHistoric","zIdWkBpo",m4valor("a"+ipos,"id_bpo","","get"),"set");
  m4valor("frmViewHistoric","zNWkBpo",m4valor("a"+ipos,"n_bpo","","get"),"set");
  m4valor("frmViewHistoric","zDescBpo",m4valor("a"+ipos,"desc_bpo","","get"),"set");
  
    m4submit("frmViewHistoric");
  
   
}

function m4EnableDisableComment(iPos)
{  //If the task has been checked as cancelled disabled comment othercase enable comment
   var objCheckCancel = m4objeto("b"  + iPos,"chkCancel");
   var objcomment = m4objeto("c"  + iPos,"comment");
   if (objCheckCancel.checked == true){
      objcomment.disabled= "true";
   }else{
       objcomment.disabled= "";  
   } 
}

//Se invoca desde la página de comentarios para refrescar el número de comentarios
function m4refreshcomments()
{ // It is call from ssco_easy_task_comments.jsp
  m4valor("oculto","zinicios","<%=zinicios%>","set");
  m4valor("oculto","zRefreshC","1","set");
  m4submit("oculto"); 
}

function m4CheckCancelWithComment(iPos)
{
  var form3 = "c" + iPos; 
  var comment = m4valor(form3,"comment","","get");
  if (comment == ""){
   return false;
  }else{
   return true;
  }
  
   
}

</script>

<title> <%=zTitleLbl%></title>

</head>
<body>
<%if (zMssEss.equals("ess")==true){%>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}else{%>

<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}%>

<%
   String zsubsesion = "SSCO_WF_EASY_TASK";
   String zmeta4object = "SSCO_WF_EASY_TASK";
   String znodoprincipal = "SSCO_WF_EASY_TASK_ROOT";
   String zmetodocarga = "SSCO_LOAD:" + zsubsesion + "!" + znodoprincipal + ".SSCO_ACTION_LOAD";
   String zmetodorefreshc = "SSCO_REFRESH_COMMENTS:"+ zsubsesion + "!" + znodoprincipal + ".SSCO_REFRESH_COMMENTS";
   
   String znodoworkitems = "SSCO_WORKITEM_LIST";
   String zventanas = "20";
   int zvuelta = 2;
   String zestado="11";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodoworkitems + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodoworkitems + ":" +  znodoworkitems + "[" + zregistroinicial + "]";
   String zraiz = znodoworkitems + ":" + zsubsesion + "!" + znodoworkitems + ".";
   String zcomun = znodoworkitems + ":" + zsubsesion + "!" + znodoworkitems + "[&VAR.m4lix]" + ".";

   String znodocom = "SSCO_ERROR_COMUNICATION";
   String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
      
   
   String zID_WORKITEM_ORD = zcomun + "ID_WORKITEM_ORD";
   String zID_WORKITEM  = zcomun + "ID_WORKITEM";
   String zN_BPO = zcomun + "N_BPO";
   String zBPO_DESC = zcomun+ "BPO_DESC";
   String zN_STATE = zcomun + "N_STATE";
   String zSTATE_DESC = zcomun+ "STATE_DESC";
   String zCOMMENTS_NUMBER = zcomun + "COMMENTS_NUMBER";
   String zItemDT_DEADLINE = "DT_DEADLINE";
   String zDT_DEADLINE = zcomun + zItemDT_DEADLINE;
   String zItemHAS_LAST_COMMENT = "HAS_LAST_COMMENT";
   String zHAS_LAST_COMMENT = zcomun + zItemHAS_LAST_COMMENT;
   String zCOMMENTS_TASK_NUMBER = zcomun + "COMMENTS_TASK_NUMBER";
   String zID_BPO= zcomun + "ID_BPO";

   
    
 %>
 




<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% if (zRefreshC.equals("1")){%>
   <m4:exec m4method="<%=zmetodorefreshc%>"/>
<%}else{%>
 <%try {
      M4Operations m = new M4Operations(request); 
    m.setItem(zsubsesion,znodoprincipal,"","PROP_ID_TASK_FILTER",zIdTaskFilter);
      m.setItem(zsubsesion,znodoprincipal,"","PROP_STATE_DESC_FILTER",zTaskDescFilter);
      m.setItem(zsubsesion,znodoprincipal,"","PROP_ID_BPC_FILTER",zIdBPC);
      m.setItem(zsubsesion,znodoprincipal,"","PROP_ID_STATE_FILTER",zIdState);
    m.setItem(zsubsesion,znodoprincipal,"","PROP_ID_WKITEM",zIdWkitem);
    m.setItem(zsubsesion,znodoprincipal,"","PROP_ID_EVENT_OK",zIdEventOk);
      m.setItem(zsubsesion,znodoprincipal,"","PROP_ID_EVENT_CANCEL",zIdEventCancel);          
    } catch(Exception e) {}
   %>
   <m4:exec m4method="<%=zmetodocarga%>"><m4:param name="PARAM_ACTION" value="<%=zParamAction%>"/></m4:exec>
   <%
   try {
        M4Operations m2 = new M4Operations(request); 
    Vector vSortItem = new Vector();
    vSortItem.addElement(new SortElement(zItemDT_DEADLINE, SortElement.ASC));
    m2.addSort(zsubsesion, znodoworkitems, vSortItem, zItemDT_DEADLINE);
  } catch(Exception e) {}
  %>  
<%}%>

<m4:outputdef m4alias="<%=znodoworkitems%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
  int  zcounti  = 0;
  int  zcount  = 0; 
  try {
    M4Operations m = new M4Operations(request);
    zcounti = m.getCountInClient(znodoworkitems,zsubsesion,znodoworkitems);
    zcount = m.getCount(znodoworkitems,zsubsesion,znodoworkitems);
    if (zcounti >0) {
       zTitleLbl = m.getItem (znodoworkitems,zsubsesion,znodoworkitems,"","N_STATE");      
    }
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);
  if (zTitleLbl == null || zTitleLbl.equals("")){zTitleLbl=TranEasytask.getProperty("Page.title" + zType);}
%>

<form id="oculto" name="oculto" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_list.jsp" method="post">
<input type="hidden" id="zParamAction" name="zParamAction" value="" />
<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
<input type="hidden" id="znivel" name="znivel" value="<%=znivel%>" />
<input type="hidden" id="zinicios" name="zinicios"  value="" />
<input type="hidden" id="ID_WORKITEM" name="ID_WORKITEM"  value="<%=zIdWkitem%>" />
<input type="hidden" id="type" name="type"  value="<%=zType%>" />
<input type="hidden" id="zTaskDescFilter" name="zTaskDescFilter"  value="<%=zTaskDescFilter%>" />
<input type="hidden" id="zIdTaskFilter" name="zIdTaskFilter"  value="<%=zIdTaskFilter%>" />
<input type="hidden" id="zIdEventOk" name="zIdEventOk"  value="<%=zIdEventOk%>" />
<input type="hidden" id="zIdEventCancel" name="zIdEventCancel"  value="<%=zIdEventCancel%>" />
<input type="hidden" id="zIdBPC" name="zIdBPC"  value="<%=zIdBPC%>" />
<input type="hidden" id="zIdState" name="zIdState"  value="<%=zIdState%>" />
<input type="hidden" id="zRefreshC" name ="zRefreshC" value = "" />
<input type="hidden" id="zTitleLbl" name ="zTitleLbl" value = "<%=zTitleLbl%>" />
</form>
<script type="text/javascript">
  m4settitle('<%=zTitleLbl%>');
</script>



<table width="100%" cellspacing="0">
<tr>
  <td class="titulofuncional" colspan="2"> <%=zTitleLbl%></td>
</tr>
<tr>
    <td>
  <% if (zType.equals("1")){%>
  <img alt=<%=zDescLbl2%> src="/iconos/noname_evaluaciones_140_125.gif" width="100" height="125" />
  <%}else{%>
  <img alt=<%=zDescLbl2%> src="/iconos/noname_competencias_puesto_82_100.gif" width="82" height="100" />
  <%}%>
  </td>
  <td>
     <table><tr><td>&nbsp;</td></tr>
          <tr><td><div class="descripcionfuncional"><%=zDescLbl%></div></td></tr>
              <tr><td><div class="descripcionfuncional"><%=zDescLbl3%></div></td></tr>     
              <tr><td><div class="descripcionfuncional"><%=zDescLblFilter%></div></td></tr>
        <tr><td>&nbsp;</td></tr>
        <tr><td>
        
            <ul class="listaenlace">
          <%if (zMssEss.equals("ess")){%>
               <li><a class="enlacefuncional" title= "<%=zParentLink%>"  href="/servlet/CheckSecurity/JSP/sse_generico/ssegenerico_pendientes.jsp?estado=0"><%=zParentLink%></a></li>
          <%}else{%>
               <li><a class="enlacefuncional" title= "<%=zParentLink%>"  href="/servlet/CheckSecurity/JSP/mss_generico/mssgenerico_pendientes.jsp?estado=0"><%=zParentLink%></a></li>
          <%}%> 
        </ul>
        </td></tr>  
     </table>
  </td>
</tr>
</table>
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6">&nbsp;<%=zFilterLbl%> </td></tr>
<tr><td class="fuentecampo" colspan="6"> &nbsp;</td></tr>
<tr>
  <td class="fuentecampo" colspan="4">
  <form id="frmfilter" name="frmfilter" action="">  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%=zTaskLbl%>&nbsp;
  <input title="<%=zFilterDescLbl%>" size="35" id="taskdescfilter" name="taskdescfilter" type="text" maxlength="40" value="<%=zTaskDescFilter%>" />
  <a href="javascript:m4AddFilter();" title="<%=zSendLbl%>"><img src="/iconos/icono_filtrar_36_36.gif" width="36" height="36" alt="<%=zStablishFilterLbl%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  <a href="javascript:m4RemoveFilter();" title="<%=zSendLbl%>"><img src="/iconos/js_deshacer_filtro.gif" width="36" height="36" alt="<%=zRemoveFilterLbl%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
  
  
  </form>
  </td> 
</tr>
<tr>
  <td class="fuenteboton" colspan="6"><a href="javascript:m4Send('<%=zMssEss%>');" title="<%=zSendLbl%>"><img src="/iconos/icono_enviar_mss_36_36.gif" width="36" height="36" alt="<%=zSendLbl%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</table>
<br/>

<script type="text/javascript" language="Javascript1.2">
    m4valor("frmfilter","taskdescfilter","<%=zTaskDescFilter%>","set");
</script>
<% if (zcounti > 0) {
String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1); %> 
<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="3"><%=zTodolistLbl%></td></tr>
<%
int zposicion = 0;
String zposicions = "0";
%>

<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zposicion = zposicion - zregistroinicial;
%>


<m4:item m4varname="dtDeadLine" m4name="<%=zDT_DEADLINE%>" m4format="<%=zsgcoParamDate%>"/>
<m4:item m4varname="HasLastComment" m4name="<%=zHAS_LAST_COMMENT%>" />

<tr valign="top">
    <td class="fuentecampo" colspan="2">
      <table cellspacing="0" width="100%">
        <tr>
          <form name="a<%=zposicion%>" id="a<%=zposicion%>" action=" ">
          <input id="num_reg" name="num_reg" type="hidden" value="<%=zcountv%>" />
          <input id="witem_ord" name="witem_ord" type="hidden" value="<m4:item m4name="<%=zID_WORKITEM_ORD%>" htmlsafe="true" />" />
          <input id="n_bpo" name="n_bpo" type="hidden" value="<m4:item m4name="<%=zN_BPO%>" htmlsafe="true" jsafe="true" />" />
          <input id="desc_bpo" name="desc_bpo" type="hidden" value="<m4:item m4name="<%=zBPO_DESC%>" htmlsafe="true" jsafe="true" />" />
          <input id="id_bpo" name="id_bpo" type="hidden" value="<m4:item m4name="<%=zID_BPO%>" htmlsafe="true" jsafe="true" />" />
          <input id="id_wkitem" name="id_wkitem" type="hidden" value="<m4:item m4name="<%=zID_WORKITEM%>" jsafe="true" htmlsafe="true" />" />
          <input id="comments_task_number" name="comments_task_number" type="hidden" value="<m4:item m4name="<%=zCOMMENTS_TASK_NUMBER%>" m4format="0" jsafe="true" />" />
          <input id="comments_number" name="comments_taks_number" type="hidden" value="<m4:item m4name="<%=zCOMMENTS_NUMBER%>" m4format="0" jsafe="true" />" />
                    
          </form>
          
        <tr>
          <td width="85%">
            <table width="100%" cellspacing="0">
            <tr><td class="fuentecamponombre"><m4:item m4name="<%=zN_BPO%>" htmlsafe="true" /></td></tr>
            <tr><td>&nbsp;</td></tr>  
            <tr><td class="fuentecampo"><m4:item m4name="<%=zBPO_DESC%>" htmlsafe="true"/></td></tr>
            <tr><td>&nbsp;</td></tr>                                    
            <tr><td class="fuentecampo"><m4:item m4name="<%=zSTATE_DESC%>" htmlsafe="true"/></td></tr>  
            <%if (!dtDeadLine.equals("")){ %>
                        <tr><td>&nbsp;</td></tr>  
            <tr><td class="fuentecampo">
              <img src="/iconos/advertencia_rojo.gif"/><m4:label m4name="<%=zDT_DEADLINE%>" htmlsafe = "true"/>&nbsp;:&nbsp;<%=dtDeadLine%>     
            </td> </tr>   
            <tr><td>&nbsp;</td></tr>          
            <%}%>   
            <tr>
                <form name="c<%=zposicion%>" id="c<%=zposicion%>" action=" ">
              <td class="fuentecampo" colspan="2"><%=zCommentLbl%>
              <input size="100" id="comment" name="comment" type="text" maxlength="4000" title="<%=zAddCommnetLbl%>"/>
              </td>
              </form>
            </tr> 
            </table>
          </td>
        </tr>
      </table>
    </td>
    <form name="b<%=zposicion%>" id="b<%=zposicion%>" action=" ">
    <td class="fuentecampo" width="15%">
      <table cellspacing="0" class="fuentecampo">
        <tr>
          <td class="fuentecampo">              
            <input id="chkAccept" name="chkAccept" type="checkbox" value="T"
            <% if (!zType.equals("1")){%> 
            onclick="validar(this,document.b<%=zposicion%>.chkCancel)"
            <%}%>                                                                                 
            title="<%=zOkDoneDescLbl%>" />          
            <%=zOkDoneLbl%>
          </td>
        </tr>
        <% if (!zType.equals("1")){%>
        <tr><td class="fuentecampo">                        
        <input id="chkCancel" name="chkCancel" type="checkbox" value="T"  onclick="validar(this,document.b<%=zposicion%>.chkAccept)" title="<%=zCancelDescLbl%>" /> <%=zCancelLbl%>
              </td></tr>
                <%}%>       
        <tr><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td></tr>
            <tr><td class="fuentevalor" ><a href= javascript:m4ViewHistoric('<%=zposicion%>'); title="<%=zHistoricLbl%>"><%=zViewHistoricLbl%></a></td></tr>
        <tr><td class="fuentevalor" ><a href= javascript:m4ViewComment('<%=zposicion%>'); title="<%=zCommentsLbl%>"><%=zViewCommentsLbl%> (<m4:item m4name="<%=zCOMMENTS_NUMBER%>" m4format="0" htmlsafe="true"/>)</a></td></tr>
                  
      </table>
    </td>
    </form>
  </tr>

<tr><td class="separadorlinea" colspan="3"> <hr /></td></tr>
</m4:loop>
</table>

<%@include file="../../sse_generico/english/generico_ventanas_post.jsp"%>

<form id="frmViewComment" name="frmViewComment" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_comments.jsp" method="post">
<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
<input type="hidden" id="zIdWkBpo" name="zIdWkBpo" value="" />
<input type="hidden" id="zIdWkitem" name="zIdWkitem" value="" />
<input type="hidden" id="zLoadType" name="zLoadType" value=""/>
<input type="hidden" id="zNWkBpo" name="zNWkBpo" value=""/>
<input type="hidden" id="zDescBpo" name="zDescBpo" value=""/>
</form>

<form id="frmViewHistoric" name="frmViewHistoric" action="/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_historic.jsp" method="post">
<input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
<input type="hidden" id="zIdWkBpo" name="zIdWkBpo" value="" />
<input type="hidden" id="zNWkBpo" name="zNWkBpo" value=""/>
<input type="hidden" id="zDescBpo" name="zDescBpo" value=""/>
</form>

<%}else{%>
<div class="fuentenodatos"><%=zNoDataFoundLbl%></div>
<br/><br/>
<%}%>
<%if (zMssEss.equals("ess")){%>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
<m4:endpage/>
</body>
</html>
    




