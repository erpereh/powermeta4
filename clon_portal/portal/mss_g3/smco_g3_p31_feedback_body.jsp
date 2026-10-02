<%
  String arg_method = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"arg_method");
  if ((arg_method==null)||(arg_method.equals(""))){arg_method="SMCO_MAIN_LOAD";}

  String arg_tp_sort = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"arg_tp_sort");
  if ((arg_tp_sort==null)||(arg_tp_sort.equals(""))){arg_tp_sort="2";}

  String activarpopus = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"activarpopus");
  if ((activarpopus==null)||(activarpopus.equals(""))){activarpopus="1";}

  String arg_string_to_save = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"arg_string_to_save");

  String applicant = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"applicant");
  String start_applicant = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"start_applicant");
  String interview = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"interview");

  String Description = tranivMSS.getProperty("iv_mss.Description") ;
  String lblNotAssess = tranivMSS.getProperty("iv_mss.NoValor") ;
  String Send = Tran.getProperty("Button.Send");  
  String SiValor = tranivMSS.getProperty("iv_mss.SiValorado") ;
  String LabelConocimiento = tranivMSS.getProperty("iv_mss.LabelConocimiento") ;
  String LabelNivel = tranivMSS.getProperty("iv_mss.LabelNivel") ;
  String LabelSignificado = tranivMSS.getProperty("iv_mss.LabelSignificado") ;
  String LabelComentario = tranivMSS.getProperty("iv_mss.LabelComentario") ;
  String LabelComentario2 = tranivMSS.getProperty("iv_mss.LabelComentario2") ;
  String LabelComentario3 = tranivMSS.getProperty("iv_mss.LabelComentario3") ;
  String LabelTodos = tranivMSS.getProperty("iv_mss.LabelTodos") ;
  String LabelOrder2 = tranivMSS.getProperty("iv_mss.LabelOrder2") ;
  String LabelOrder3 = tranivMSS.getProperty("iv_mss.LabelOrder3") ;
  String LabelOrder4 = tranivMSS.getProperty("iv_mss.LabelOrder4") ;
  String LabelOrder5 = tranivMSS.getProperty("iv_mss.LabelOrder5") ;
  String LabelOrder6 = tranivMSS.getProperty("iv_mss.LabelOrder6") ;
  String LabelOrder7 = tranivMSS.getProperty("iv_mss.LabelOrder7") ;
  String LabelPersonales = tranivMSS.getProperty("iv_mss.LabelPersonales") ;
  String LabelCV = tranivMSS.getProperty("iv_mss.LabelCV") ;
  String SiComentario = tranivMSS.getProperty("iv_mss.SiComentario") ;
  String DetalleGAP = tranivMSS.getProperty("iv_mss.DetalleGAP") ;

  String Conocimiento = tranivMSS.getProperty("iv_mss.Conocimiento") ;
  String Requerido = tranivMSS.getProperty("iv_mss.Requerido") ;
  String Alcanzado = tranivMSS.getProperty("iv_mss.Alcanzado") ;
  String Aviso2 = tranivMSS.getProperty("iv_mss.Aviso2") ;
  String Aviso3 = tranivMSS.getProperty("iv_mss.Aviso3") ;
  String Aviso4 = tranivMSS.getProperty("iv_mss.Aviso4") ;
  String Aviso5 = tranivMSS.getProperty("iv_mss.Aviso5") ;
  String VolverEntrevista = tranivMSS.getProperty("iv_mss.VolverEntrevista") ;
  
%>

<%
   String zsubsesion = "SMCO_KNOWLEDGE_FEEDBACK";
   String zmeta4object = "SMCO_KNOWLEDGE_FEEDBACK";
   String znodo = "SMCO_LOAD_KNOWLEDGE";
   String znodoroot = "SMCO_KNOWLEDGE_FEEDBACK";
   String znodocabecera = "SMCO_GENERIC_PERSON_HEADER";
   String znodopuestos = "SMCO_ADD_JOBS_TO_CLC_GAP";

   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zcomunpuestos = znodopuestos + ":" + zsubsesion + "!" + znodopuestos + "[&VAR.m4lix]" + ".";

   String zSCONMEXTDKN = zcomun + "SCO_NM_EXTD_KN";
   String zSCONMTYPE = zcomun + "SCO_NM_TYPE";
   String zSCONMLEVEL = zcomun + "SCO_NM_LEVEL";
   String zSMCONMAPPLCOMPETENCYLVL = zcomun + "SMCO_NM_APPL_COMPETENCY_LVL";
   String zSMCOIDAPPLCOMPETENCYLVL = zcomun + "SMCO_ID_APPL_COMPETENCY_LVL";
   String zSMCOCOMPETENCYCOMMENT = zcomun + "SMCO_COMPETENCY_COMMENT";
   String zSCOWEIGHT = zcomun + "SCO_WEIGHT";

   String zSMCONMJOB = zcomunpuestos + "SMCO_NM_JOB";
   String zSMCOJOBGAP = zcomunpuestos + "SMCO_JOB_GAP";

   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zoutputdefcabecera = zsubsesion + "!" + znodocabecera + "[*]";
   String zoutputdefpuestos = zsubsesion + "!" + znodopuestos + "[*]";

   String zmoveroot = znodoroot + "[FIRST]";
   String zmove = znodo + ":" + znodo + "[FIRST]";
   String zmovepuestos = znodopuestos + ":" + znodopuestos + "[FIRST]";
   
   String scount="";
   String scountpuestos="";

%>

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodoroot,"","SMCO_APPL_START_DATE_FROM_PAGE",start_applicant);
    m.setItem(zsubsesion,znodoroot,"","SMCO_APPLICANT_FROM_PAGE",applicant);
    m.setItem(zsubsesion,znodoroot,"","SMCO_INTERVIEW_ORD_FROM_PAGE",interview);

  } catch(Exception e) {}
%>


<% if (arg_method.equals("SMCO_MAIN_LOAD")){%>
  <m4:exec node="SMCO_KNOWLEDGE_FEEDBACK" method="SMCO_MAIN_LOAD" m4object="<%=zsubsesion%>"/>

  <m4:exec node="SMCO_GENERIC_PERSON_HEADER" method="SMCO_CLC_GENERIC_PERSON_HEADER" m4object="<%=zsubsesion%>">
    <m4:param name="ARG_ID_PERSON" value="<%=applicant%>"/>
  </m4:exec>

<%}%>

<% if ((arg_method.equals("SMCO_EXECUTE_SORT"))||(arg_method.equals("SMCO_EXECUTE_PERSIST"))){%>

  <m4:exec node="SMCO_LOAD_KNOWLEDGE" method="SMCO_SET_NEW_VALUES" m4object="<%=zsubsesion%>">
    <m4:param name="ARG_STRING_TO_SAVE" value="<%=arg_string_to_save%>"/>
  </m4:exec>

  <m4:exec node="SMCO_LOAD_KNOWLEDGE" method="SMCO_EXECUTE_SORT" m4object="<%=zsubsesion%>">
    <m4:param name="ARG_TP_SORT" value="<%=arg_tp_sort%>"/>
  </m4:exec>
<%}%>

<% if (arg_method.equals("SMCO_EXECUTE_PERSIST")){%>
  <m4:exec node="SMCO_LOAD_KNOWLEDGE" method="SMCO_EXECUTE_PERSIST" m4object="<%=zsubsesion%>"/>
<%}%>

<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmoveroot%>"/></m4:move>
<m4:exec node="<%=znodo%>" alias="countKnowledge" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:exec node="<%=znodopuestos%>" alias="countJobs" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>

<m4:beginjob/>  
<m4:outputexec var="scount" alias="countKnowledge"/>
<m4:outputexec var="scountpuestos" alias="countJobs"/>

<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodopuestos%>"><m4:param name="m4name0" value="<%=zoutputdefpuestos%>"/></m4:outputdef>
<m4:outputdef><m4:param name="m4name0" value="<%=zoutputdefcabecera%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>

<% 
int iEvalKnowledge=0;
String zmoves=znodo + ":" + znodo ;
String zalias="";
int h = 0;
  try {
    iEvalKnowledge = Integer.parseInt(scount); 
    for (h = 0; h < iEvalKnowledge; h++){
      zmoves=znodo + ":" + znodo +"["+String.valueOf(h)+"]";
      zalias="SMCO_LOAD_LEVELS_4_COMPETENCY"+String.valueOf(h);
    %>
      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
      <m4:outputdef m4alias="<%=zalias%>"><m4:param name="m4name0" value="SMCO_KNOWLEDGE_FEEDBACK!SMCO_LOAD_LEVELS_4_COMPETENCY[*]"/></m4:outputdef>
      <%
    }
  } catch(Exception e) {}
%>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovepuestos%>"/></m4:move>

<% 
int iEvalJob=0;
String zmovespuestos=znodopuestos + ":" + znodopuestos ;
String zaliaspuestos="";
int hpuestos = 0;
  try {
    iEvalJob = Integer.parseInt(scountpuestos); 
    for (hpuestos = 0; hpuestos < iEvalJob; hpuestos++){
      zmovespuestos=znodopuestos + ":" + znodopuestos +"["+String.valueOf(hpuestos)+"]";
      zaliaspuestos="SMCO_KNOWLEDGE_GAP_DETAIL"+String.valueOf(hpuestos);
    %>
      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovespuestos%>"/></m4:move>
      <m4:outputdef m4alias="<%=zaliaspuestos%>"><m4:param name="m4name0" value="SMCO_KNOWLEDGE_FEEDBACK!SMCO_KNOWLEDGE_GAP_DETAIL[*]"/></m4:outputdef>
      <%
    }
  } catch(Exception e) {}
%>

<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmovepuestos%>"/></m4:move>

<m4:item m4varname="order_idx" item="SMCO_ORDER_APPLY" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="applicant_name" item="SMCO_APPLICANT_NAME" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="applicant_id" item="SMCO_APPLICANT_ID" htmlsafe="true" outputdef="<%=znodo%>" />
<m4:item m4varname="applicant_jobs" item="SMCO_ALL_JOBS_4_APPLICANT" htmlsafe="true" outputdef="<%=znodo%>" />

<m4:item m4varname="mail_sent" item="SMCO_MAIL_HAS_BEEN_SENT" htmlsafe="true" outputdef="<%=znodo%>" />

<%
  int  zcount  = 0; 
  int  zcountpuestos  = 0;  

  try {
      M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcountpuestos = m.getCount(znodopuestos,zsubsesion,znodopuestos);

  } catch(Exception e) {}

%>

<script type="text/javascript" language="Javascript1.5">

function load(empleado)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection_cv.jsp?estado=11&cabecera=1&zVis=0&person=" + empleado + "&RET=DAT";
  window.open(dir,'Vis','width=1024;height=600,resizable,scrollbars');
}

function executesort(tp_sort)
{
  m4valor("oculto","arg_method","SMCO_EXECUTE_SORT","set");
  m4valor("oculto","arg_tp_sort",tp_sort,"set");

  var num_knowledge = <%=zcount%>;
  var form_to_send = document.forms["SendKnowledge"]
  var string_to_send = "";
  var this_competence = "";
  var this_level = "";

  if (num_knowledge == 0)
    return;


  for (var loop_on_knowledge=0; loop_on_knowledge < num_knowledge; loop_on_knowledge++)
  {
    this_competence = form_to_send.elements["knowledge" + loop_on_knowledge].value;
    this_level = form_to_send.elements["select" + loop_on_knowledge].value;
    this_comment = form_to_send.elements["comment" + loop_on_knowledge].value;

    string_to_send = string_to_send + "SCO_ID_COMPETENCY=" + this_competence + "||" + "SMCO_ID_APPL_COMPETENCY_LVL=" + this_level + "||" + "SMCO_COMPETENCY_COMMENT=" + this_comment +  "|&|";

  }


  m4valor("oculto","arg_string_to_save",string_to_send,"set");

  m4submit("oculto"); 
}

function sendknowledgeinput()
{
  m4valor("oculto","arg_method","SMCO_EXECUTE_PERSIST","set");

  var num_knowledge = <%=zcount%>;
  var form_to_send = document.forms["SendKnowledge"]
  var string_to_send = "";
  var this_competence = "";
  var this_level = "";

  if (num_knowledge == 0)
    return;

  var error_control = 0
  for (var loop_on_knowledge=0; loop_on_knowledge < num_knowledge; loop_on_knowledge++)
  {
    this_competence = form_to_send.elements["knowledge" + loop_on_knowledge].value;
    this_level = form_to_send.elements["select" + loop_on_knowledge].value;
    this_comment = form_to_send.elements["comment" + loop_on_knowledge].value;

    if ((this_level=="") && (this_comment!="")) 
    {error_control = 1
    this_comment = ""}

    string_to_send = string_to_send + "SCO_ID_COMPETENCY=" + this_competence + "||" + "SMCO_ID_APPL_COMPETENCY_LVL=" + this_level + "||" + "SMCO_COMPETENCY_COMMENT=" + this_comment +  "|&|";

  }

  m4valor("oculto","arg_string_to_save",string_to_send,"set");

  if (error_control == 1) 
  {
    if (confirm("<%=Aviso5%>"))
      m4submit("oculto"); 
  }
  else
    m4submit("oculto"); 

}

function changeposition(posicion)
{
  var value_selected = document.forms["SendKnowledge"].elements["select" + posicion].value
  if (value_selected!="")
    document.getElementById('icon' + posicion).className="";
  else
    document.getElementById('icon' + posicion).className="invisible2";
}

function showdiv(event,ordinal)
{
  var isallow = document.getElementById('activarpopus').value ;
  if (isallow == "0") return;

  margin=7;
  var tempX = 0;
  var tempY = 0;
  tempX = event.clientX - document.body.scrollLeft;
  tempY = event.clientY + document.body.scrollTop;


  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}

  document.getElementById('flotante'+ordinal).style.top = (tempY + margin- 110);
  var percentage = 2* ((tempX+margin)*25)/100;
  document.getElementById('flotante'+ordinal).style.left = (tempX + margin - percentage);
  document.getElementById('flotante'+ordinal).style.display='block';
  return;
}

var contenido_textarea = "" ;

function checklength(num_caracteres_permitidos,ordinal){ 

   var num_caracteres = document.getElementById('comment' + ordinal).value.length;

   if (num_caracteres > num_caracteres_permitidos){ 
      document.getElementById('comment' + ordinal).value = contenido_textarea 
   }else{ 
      contenido_textarea = document.getElementById('comment' + ordinal).value 
   } 

   if (num_caracteres >= num_caracteres_permitidos){ 
    document.getElementById('count' + ordinal).style.color="#ff0000";
   }else{ 
    document.getElementById('count' + ordinal).style.color="#000000";
   } 

  var num_disponibles = num_caracteres_permitidos - num_caracteres
  if (num_disponibles <= 0) num_disponibles = 0;

  document.getElementById('count' + ordinal).innerHTML =  num_disponibles;

  if (num_caracteres!= 0)
    document.getElementById('icon2' + ordinal).className="";
  else
    document.getElementById('icon2' + ordinal).className="invisible2";
} 


</script>

<input id="activarpopus" name="activarpopus" type="hidden" value="<%=activarpopus%>"/>

<table width="100%">
  <tr>
    <td class="titulofuncional" colspan= "2" ><%=FeedBackTitle%></td></tr>
  <tr>
    <td><img alt="<%=FeedBackTitle%>"title="<%=FeedBackTitle%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
    <td><div class="descripcionfuncional"><%=Description%></div>

    <ul class="listaenlace">
      <li><a class="enlacefuncional" tabindex="1" title="<%=VolverEntrevista%>" href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31"><%=VolverEntrevista%></a></li>
    </ul>
    </td>
  </tr>
</table>

<form action="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31_feedback.jsp?estado=31" method="post" name="oculto" id="oculto">
  <input type="hidden" id="arg_method" name="arg_method"  value="<%=arg_method%>" />
  <input type="hidden" id="arg_tp_sort" name="arg_tp_sort"  value="<%=arg_tp_sort%>" />
  <input type="hidden" id="arg_string_to_save" name="arg_string_to_save"  value="<%=arg_string_to_save%>" />
</form>

<%if (zcount > 0) { String znodoaux="";String zmoveaux="";%>

  <script type="text/javascript" language="Javascript1.5">

  function activeallcomments()
  {

    var activar = document.getElementById('activarpopus').value;
    if (activar=="0")
      document.getElementById('activarpopus').value = "1";
    else
      document.getElementById('activarpopus').value = "0";
  <%
    int i;
    for (i = 0; i < zcount; i++){
  %>
    collapse2<%=i%>.slideit()

  <%}%>
  }


  </script>

  <table width="100%" cellspacing="0">

  <%applicant_id = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", applicant_id);%>
  <tr><td class="fuenteleyenda_big"><a title="<%=LabelCV%>" href="javascript:load('<%=applicant_id%>')"><%=applicant_name%></a> - <a href="javascript:detailGAPcollapse.slideit()" title="<%=DetalleGAP%>"><%=applicant_jobs%></a></td>
  <td  class="fuenteleyenda_big"><a href="javascript:activeallcomments()"><img verticalAlign = "top" align = "right" alt="<%=LabelTodos%>"title="<%=LabelTodos%>" src="/iconos/all_comments.gif"/></a></td>
  <td  class="fuenteleyenda_big"><a href="javascript:employeeHeadercollapse.slideit()"><img verticalAlign = "top" align = "right" alt="<%=LabelPersonales%>"title="<%=LabelPersonales%>" src="/iconos/search.gif"/></a>
  </td>
  </tr></table>

  <div id="employeeHeader" name="EmployeeHeader" class="invisible2">
    <jsp:include page="../../mss_generico/smco_employee_cabecera.jsp" flush="true"/>
    <script type="text/javascript">
      var employeeHeadercollapse=new animatedcollapse("employeeHeader", 800,0)
    </script>
  </div>


  <table width="100%" cellspacing="0">
  <thead><tr class="tit"><th  id="m4tit" class="tablamenuright" colspan="4" ></th><th class="tablamenuright">&nbsp;</th><th class="tablamenuright" align="right"><a title="<%=tranivMSS.getProperty("iv_mss.SelecInt")%>"href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31" ><img alt="<%=tranivMSS.getProperty("iv_mss.SelecInt")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></th></tr></thead> 
  <tr class="tablaestadosceldatitulo">
    <td width="15%">&nbsp;<b><a class="fuenteleyenda_med" title ="<%=LabelOrder2%>" href="javascript:executesort('2');"><m4:label m4name="<%=zSCOWEIGHT%>" htmlsafe = "true"/></b></a>
    <%if (order_idx.equals("2")){%><a href="javascript:executesort('3');"><img verticalAlign = "top" alt="<%=LabelOrder3%>"title="<%=LabelOrder3%>" src="/iconos/ic_ord_down_15_15.gif"/></a><%}%>
    <%if (order_idx.equals("3")){%><a href="javascript:executesort('2');"><img verticalAlign = "top" alt="<%=LabelOrder2%>"title="<%=LabelOrder2%>" src="/iconos/ic_ord_up_15_15.gif"/></a><%}%>
    </td>      

    <td  width="20%">&nbsp;<b><a class="fuenteleyenda_med" title ="<%=LabelOrder4%>" href="javascript:executesort('5');"><m4:label m4name="<%=zSCONMEXTDKN%>" htmlsafe = "true"/></b></a>
    <%if (order_idx.equals("4")){%><a href="javascript:executesort('5');"><img verticalAlign = "top" alt="<%=LabelOrder4%>"title="<%=LabelOrder4%>" src="/iconos/ic_ord_up_15_15.gif"/></a><%}%>
    <%if (order_idx.equals("5")){%><a href="javascript:executesort('4');"><img verticalAlign = "top" alt="<%=LabelOrder5%>"title="<%=LabelOrder5%>" src="/iconos/ic_ord_down_15_15.gif"/></a><%}%>
    </td>      

      <td width="20%">&nbsp;<b><a class="fuenteleyenda_med" title ="<%=LabelOrder4%>" href="javascript:executesort('7');"><m4:label m4name="<%=zSCONMTYPE%>" htmlsafe = "true"/></b></a>
    <%if (order_idx.equals("6")){%><a href="javascript:executesort('7');"><img verticalAlign = "top" alt="<%=LabelOrder4%>"title="<%=LabelOrder4%>" src="/iconos/ic_ord_up_15_15.gif"/></a><%}%>
    <%if (order_idx.equals("7")){%><a href="javascript:executesort('6');"><img verticalAlign = "top" alt="<%=LabelOrder5%>"title="<%=LabelOrder5%>" src="/iconos/ic_ord_down_15_15.gif"/></a><%}%>
    </td>      
      <td width="15%">&nbsp;<b><a class="fuenteleyenda_med" title ="<%=LabelOrder6%>" href="javascript:executesort('11');"><m4:label m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></b></a>
    <%if (order_idx.equals("10")){%><a href="javascript:executesort('11');"><img verticalAlign = "top" alt="<%=LabelOrder6%>"title="<%=LabelOrder6%>" src="/iconos/ic_ord_up_15_15.gif"/></a><%}%>
    <%if (order_idx.equals("11")){%><a href="javascript:executesort('10');"><img verticalAlign = "top"alt="<%=LabelOrder7%>"title="<%=LabelOrder7%>" src="/iconos/ic_ord_down_15_15.gif"/></a><%}%>
    </td>      
     
     <td width="23%">&nbsp;<b><m4:label m4name="<%=zSMCONMAPPLCOMPETENCYLVL%>" htmlsafe = "true"/></b></td>      
     <td width="5%">&nbsp;</td>      

<thead><tr class="tit"><th  id="m4tit" colspan="5" ></th><th class="tablamenuright">&nbsp;</th><td align="right"><a title="<%=tranivMSS.getProperty("iv_mss.SelecInt")%>"href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31" ><img alt="<%=tranivMSS.getProperty("iv_mss.SelecInt")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td></tr></thead> 

  </tr>

  <form name="SendKnowledge" id="SendKnowledge" action=" ">
    <m4:dataloop outputdef="<%=znodo%>">
      <m4:item m4varname="NotAssess" item="SMCO_NM_APPL_COMPETENCY_LVL" htmlsafe="true" outputdef="<%=znodo%>" />
      <m4:item m4varname="NotComment" item="SMCO_COMPETENCY_COMMENT" htmlsafe="true" outputdef="<%=znodo%>" />
      <m4:current m4varname="current" outputdef="<%=znodo%>"/>

      <input id="knowledge<%=current%>" name="knowledge<%=current%>" type="hidden" value="<m4:item  item="SCO_ID_COMPETENCY" htmlsafe="true" outputdef="<%=znodo%>"/>" />
      <%
      znodoaux="SMCO_LOAD_LEVELS_4_COMPETENCY"+current;
      zmoveaux =znodoaux+ ":" + "SMCO_LOAD_LEVELS_4_COMPETENCY" + "[FIRST]";
      String NoValoreado = "Y";
      String Comentario = "Y";
      if (NotAssess.equals("")){NoValoreado="N";}
      if (NotComment.equals("")){Comentario="N";}
      %>

      <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
      <tr>
          <td class="fuentevalor">&nbsp;<m4:item  item="SCO_WEIGHT" htmlsafe="true" outputdef="<%=znodo%>"/>%</td>
        <td class="fuentevalor">&nbsp;
        <img style='cursor:pointer' IdExtdKn="<m4:item  item="SCO_ID_COMPETENCY" htmlsafe="true" outputdef="<%=znodo%>"/>" IdLevel="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodo%>" />" onclick='javascript:m4Eval.evalDetail.show(this);' src="/iconos/info_12.gif" title="<%=tranivMSS.getProperty("iv_mss.LblVer")%>" width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"/>
        <m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo%>"/>
        </td>
          <td class="fuentevalor">&nbsp;<m4:item  item="SCO_NM_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
          <td class="fuentevalor">&nbsp;<m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo%>"/></td>

        <td class="fuentevalor">
          <select id="select<%=current%>" name="select<%=current%>" class="fuenteformulario" onchange="javscript:changeposition('<%=current%>')">
            <%if (NoValoreado.equals("Y")){%>
              <option value='<m4:item  item="SMCO_ID_APPL_COMPETENCY_LVL" htmlsafe="true" outputdef="<%=znodo%>"/>'><m4:item  item="SMCO_NM_APPL_COMPETENCY_LVL" htmlsafe="true" outputdef="<%=znodo%>"/></option>
            <%}%>
            <option value=''><%=lblNotAssess%></option>

            <m4:dataloop outputdef="<%=znodoaux%>">
            <option id ="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/>" value="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true"    outputdef="<%=znodoaux%>"/>">
            <m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/>
            </option>
            </m4:dataloop>
          </select>
          <%if (NoValoreado.equals("N")){%>
            <img id="icon<%=current%>" name="icon<%=current%>" class="invisible2" alt="<%=SiValor%>"  src="/iconos/icono_seleccionar_11_12.gif"/>
          <%}else{%>
            <img id="icon<%=current%>" name="icon<%=current%>" alt="<%=SiValor%>"  src="/iconos/icono_seleccionar_11_12.gif"/>
          <%}%>
        </td>
          <td class="fuentevalor">&nbsp;<a href="javascript:collapse2<%=current%>.slideit();">
        <img align="center" alt="<%=LabelComentario%>"  src="/iconos/ic_next_edit_16_16_0.gif" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>

        <%if (Comentario.equals("N")){%>
          <img id="icon2<%=current%>" name="icon2<%=current%>" class="invisible2" alt="<%=SiComentario%>"  src="/iconos/icono_seleccionar_11_12.gif"/>
        <%}else{%>
          <img id="icon2<%=current%>" name="icon2<%=current%>" alt="<%=SiComentario%>"  src="/iconos/icono_seleccionar_11_12.gif"/>
        <%}%>
        </td>      
      </tr>

      <tr width="100%"><td class="fuentevalor" width="100%" colspan="6">
        <div id="cat<%=current%>" style="width: 100%; background-color: #fdf5ea;">
          <p><b><%=LabelComentario2%><span id="count<%=current%>"></span></b></p>
          <div style="padding: 0 5px">
            <textarea class="fuentevalorazul_pequ" cols="105" id="comment<%=current%>" name="comment<%=current%>" title="<%=LabelComentario3%>" style="overflow:auto" onKeyDown="checklength(254,<%=current%>)" onKeyUp="checklength(254,<%=current%>)"
            ><m4:item  item="SMCO_COMPETENCY_COMMENT" htmlsafe="true" outputdef="<%=znodo%>"/></textarea></td>
          </div>
        </div>
        <script type="text/javascript">
          var collapse2<%=current%>=new animatedcollapse("cat<%=current%>", 800,0);
          checklength(254,<%=current%>);
        </script>
      </tr>

    </m4:dataloop>
  </form>

  <tr>
    <td class="fuenteboton" colspan="6">
      <a title="<%=Send%>" href="javascript:sendknowledgeinput();"><img alt="<%=Send%>"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
    </td> 

  </tr>
</table>

<script type="text/javascript" language="Javascript1.5">document.getElementById('employeeHeader').className="";</script>

<%if (zcountpuestos>0) { String znodoauxpuestos="";String zmoveauxpuestos="";%>

<div id="detailGAP" name="detailGAP" class="invisible2">
  <table width="100%" cellspacing="0">
    <tr class="tablaestadosceldatitulo">
      <td width="100%" colspan="4">&nbsp;<b><%=DetalleGAP%></b></td>      
    </tr>
      <m4:dataloop outputdef="<%=znodopuestos%>">
        <m4:current m4varname="current" outputdef="<%=znodopuestos%>"/>
        <%
          znodoauxpuestos="SMCO_KNOWLEDGE_GAP_DETAIL"+current;
          zmoveauxpuestos =znodoauxpuestos+ ":" + "SMCO_KNOWLEDGE_GAP_DETAIL" + "[FIRST]";
        %>
        <tr>
          <td width="100%"class="fuentevalor">&nbsp;<b><m4:label m4name="<%=zSMCONMJOB%>" htmlsafe = "true"/>:&nbsp;<m4:item  item="SMCO_NM_JOB" htmlsafe="true"  outputdef="<%=znodopuestos%>"/>&nbsp;(<m4:label m4name="<%=zSMCOJOBGAP%>" htmlsafe = "true"/>&nbsp;<m4:item  item="SMCO_JOB_GAP" htmlsafe="true" outputdef="<%=znodopuestos%>"/>%)</b></td>      
        </tr>
        <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveauxpuestos%>"/></m4:move>
        <tr><td><table width="100%"><tr><td class="tablaestadosceldatitulo" width="2%">&nbsp;</td><td class="tablaestadosceldatitulo"  width="60%"><%=Conocimiento%></td><td class="tablaestadosceldatitulo" width="19%"><%=Requerido%></td><td class="tablaestadosceldatitulo" width="19%"><%=Alcanzado%></td></tr>
        <m4:dataloop outputdef="<%=znodoauxpuestos%>">
          <tr><td class="tablaestadosceldatitulo">&nbsp;</td>
            <td class="fuentevalor"><m4:item  item="SMCO_NM_KNOWLEDGE" htmlsafe="true" outputdef="<%=znodoauxpuestos%>"/></td>
            <td class="fuentevalor"><m4:item  item="SMCO_ID_REQUIRED_LEVEL" htmlsafe="true" outputdef="<%=znodoauxpuestos%>"/>%</td>
            <td class="fuentevalor"><m4:item  item="SMCO_ID_HR_LEVEL" htmlsafe="true" outputdef="<%=znodoauxpuestos%>"/>%</td>
          </tr>
        </m4:dataloop>
        </table></td></tr>
      </m4:dataloop>
  </table>
  <script type="text/javascript" language="Javascript1.5">document.getElementById('detailGAP').className="";</script>

  <%}%>

  <script type="text/javascript">
    var detailGAPcollapse=new animatedcollapse("detailGAP", 800,0)
  </script>

</div>
<%}else{
  if (mail_sent.equals("1")) {
  %>
  <table><tr><td class="textorojo"><%=Aviso2%>.&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31" ><%=Aviso3%></a></td></tr></table>
<%}else{%>
  <table><tr><td class="textorojo"><%=Aviso4%>.&nbsp;<a href="/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31" ><%=Aviso3%></a></td></tr></table>
<%}}%>

<br/><br/><br/><br/>
<%@ include file="../mss_generico/espanol/mssgenerico_disclaimer.jsp" %>
</div>
