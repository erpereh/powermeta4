<%@ include file="/m4trans/m4custom/IBER/sse_generico/0-sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-menu_mss.jsp" %>   
<%@ include file="/m4trans/sse_generico/0-sse_generico_taglib_2.jsp" %>
<%@ include file="/m4trans/m4custom/IBER/mss_generico/0-mss_delegation_trans.jsp" %> 
<%
  String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
  String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
  if ((estado==null)||(estado.equals(""))){estado="0";}
  if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
<head><title><%=mssDelegation.getProperty("Label.delTitle")%></title></head><body>
<%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_menusup.jsp" %>
<%@ include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_links.jsp" %>
<%
String ztipocarga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga");
if ((ztipocarga==null)||(ztipocarga.equals(""))){ztipocarga = "NORMAL";}

String zParametroAct = "";
String zACC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ACC");
String zIni ="";
String zFin ="";
String zIdDelegate ="";

String zProcess ="";

if ((zACC==null)||(zACC.equals(""))){zParametroAct="";
}else{
zParametroAct="ACC=" + zACC + "{" ;
zIni=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START");
if ((zIni==null)||(zIni.equals(""))){zIni = "";}else{zParametroAct=zParametroAct + "DT_START=" + zIni + "{" ;}
zFin=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_END");
zParametroAct=zParametroAct +"DT_END=" + zFin + "{" ;
zIdDelegate=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_DELEGATE");
zParametroAct=zParametroAct +"SCO_ID_DELEGATE=" + zIdDelegate + "{" ;

zProcess=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_PROCESS");
zParametroAct=zParametroAct +"SCO_ID_PROCESS=" + zProcess + "{" ; 
}

String zsubsesion = "MSS_DELEGATION";                   //*MODIFICABLE
String zm4object = zsubsesion;
String znodoraiz = "MSS_DELEGATION_ROOT";
String znodo = zm4object;
String znodo2 ="MSS_PROCESS";
String znodo3 ="MSS_ERROR_COMUNICATION";
                              

String zcampoIDProcess = "SCO_ID_PROCESS";
String zcampoNivel = "NIVEL";                     
String zcampoIDDElegate = "SCO_ID_DELEGATE";
String zcampoNombre = "SCO_GB_NAME";                  
String zcampoDtStart = "DT_START";    
String zcampoDtEnd = "DT_END";


String zmetodocarga = zm4object + "!" + znodoraiz + ".MSS_ACTION_LOAD";   
String zventanas = "20";
int zvuelta = 5;
  
int zregistroinicial = Integer.valueOf(zinicios).intValue();          
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
  
String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";   
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz =  znodo + ":" + zm4object  + "!" + znodo + ".";

String zoutputdef2 = zm4object + "!" + znodo2 + "[*]";            
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";

String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";            
String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&VAR.m4lix]" + ".";

String zvalorIDProcess = zcomun + zcampoIDProcess;
String znombreIDProcess = zcomun + "N_T3";

String zvalorNivel = zcomun + zcampoNivel;
String zvalorIDDElegate = zcomun + zcampoIDDElegate;
String zvalorNombre = zcomun + zcampoNombre;
String zvalorDtStart = zcomun + zcampoDtStart;
String zvalorDtEnd = zcomun + zcampoDtEnd;

String zvalorIDM4Object = zcomun2 + "ID_M4OBJECT";
String zvalorNT3 = zcomun2 + "N_T3";
%>
</head><body>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/><m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
  <m4:param name="PARAM_ACTION" value="<%=zParametroAct%>"/>
  <m4:param name="LOAD_TYPE_ARG" value="<%=ztipocarga%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>" ><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove3%>"/></m4:move>
<%int  zcount  = 0;
int  zcounti  = 0;
int  zcount2  = 0;
String zerror = "0";
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zm4object,znodo);
    zcounti = m.getCountInClient(znodo,zm4object,znodo);
  zcount2 = m.getCount(znodo2,zm4object,znodo2);   
  zerror = m.getItem(znodo3,zsubsesion,znodo3,"","DEBUG");
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);
String  zcountv2 = String.valueOf(zcount2);

String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;

if(zerror.equals("1") == true){%>
<script type="text/javascript">
  urlLista = "/servlet/CheckSecurity/JSP/mss_generico/mss_delegation_informacion_usuario.jsp";
  msgWindow = window.open(urlLista,"Error","width=600;height=200,resizable,scrollbars");
</script>
<%}%>
<script type="text/javascript" language="Javascript1.5">
function enviar(){
var error = 0;
var dtstart = m4valor("NombreFormulario","DT_START","","get");
dtstartok = m4fechacomprobacion(m4objeto('DT_START','NombreFormulario'),"");
if (( dtstart =="") || (dtstartok == "")){
  error = 1
  m4setlog("_date_oblig",'<m4:label m4name="<%=zvalorDtStart%>" jsafe="true"/>','<%=zsgcoParamDate%>');
  return;
}
var dtend = m4valor("NombreFormulario","DT_END","","get");
if (dtend !=""){
dtendok = m4fechacomprobacion(m4objeto('DT_END','NombreFormulario'),"");
if ( (dtendok == "")){
  error = 1
  m4setlog("_date",'<m4:label m4name="<%=zvalorDtEnd%>" jsafe="true"/>','<%=zsgcoParamDate%>');
  return;
}
fechasok = m4compfechas(m4objeto("DT_START","NombreFormulario"),"<=",m4objeto("DT_END","NombreFormulario"));  
if (( fechasok =="") ){
  error = 1
  m4setlog("_sl_co_gn_0 ",'<m4:label m4name="<%=zvalorDtStart%>" jsafe="true"/>','<m4:label m4name="<%=zvalorDtEnd%>" jsafe="true"/>');
  return;
}
}
var varSCO_ID_DELEGATE = m4valor("NombreFormulario","SCO_ID_DELEGATE","","get");
if (varSCO_ID_DELEGATE == "") {
  error = 1
  m4setlog("_oblig",'<m4:label m4name="<%=zvalorIDDElegate%>" jsafe="true"/>');
  return;
}
var varacc = m4valor("NombreFormulario","ACC","","get");
if (varacc =="UPD") {
var obj = document.forms["NombreFormulario"].elements["SCO_ID_PROCESS"];
obj.removeAttribute('disabled');
}
m4submit("NombreFormulario");
}
function searchoption(oselect,sidoption){
  for(var ni=0; ni< oselect.options.length; ni++){ 
    if (oselect.options[ni].value == sidoption){
    oselect.selectedIndex = ni; 
    break;
    }
  }
}
function valor (val,vstart,vend,vdelegate,vname){
var oselect = document.forms["NombreFormulario"].elements["SCO_ID_PROCESS"];
searchoption(oselect,val);
oobjeto = document.forms["NombreFormulario"].elements["DT_START"];
oobjeto.value = vstart;
oobjeto = document.forms["NombreFormulario"].elements["DT_END"];
oobjeto.value = vend;
oobjeto = document.forms["NombreFormulario"].elements["SCO_ID_DELEGATE"];
oobjeto.value = vdelegate;
oobjeto = document.forms["NombreFormulario"].elements["SCO_GB_NAME"];
oobjeto.value = vname;
}

function act(){
var oobjeto = document.forms["NombreFormulario"].elements["ACC"];
oobjeto.value = "UPD";
var obj = m4elemento("DT_START");
obj.setAttribute('readOnly', 'readOnly');
var obj = document.forms["NombreFormulario"].elements["SCO_ID_PROCESS"];
obj.setAttribute('disabled', 'disabled');
tit();
}

function del(){
var oobjeto = document.forms["NombreFormulario"].elements["ACC"];
oobjeto.value = "DEL";
m4submit("NombreFormulario");
}
function limp(){
var oobjeto = document.forms["NombreFormulario"].elements["SCO_ID_PROCESS"];
oobjeto.value = "";
oobjeto = document.forms["NombreFormulario"].elements["DT_START"];
oobjeto.value = "";
oobjeto = document.forms["NombreFormulario"].elements["DT_END"];
oobjeto.value = "";

oobjeto = document.forms["NombreFormulario"].elements["SCO_ID_DELEGATE"];
oobjeto.value = "";
oobjeto = document.forms["NombreFormulario"].elements["SCO_GB_NAME"];
oobjeto.value = "";
 oobjeto = document.forms["NombreFormulario"].elements["ACC"];
oobjeto.value = "INS";
var obj = m4elemento("DT_START");
obj.removeAttribute('readOnly');
var obj = document.forms["NombreFormulario"].elements["SCO_ID_PROCESS"];
obj.removeAttribute('disabled');
obj.setAttribute("selectedIndex",0);
tit();
}
function fecIni(){
var varacc = m4valor("NombreFormulario","ACC","","get");
if (varacc !="UPD") {
m4calendario(m4objeto('DT_START','NombreFormulario'))
}
}
function choose_filter() {
var varacc = m4valor("NombreFormulario","ACC","","get");
if (varacc !="UPD") {
filtro('mss','SCO_ID_DELEGATE','SCO_GB_NAME');
}
}
function tit(){
var acc = m4valor("NombreFormulario","ACC","","get");
if (acc=="UPD"){
  
  var msg = m4getmessage("_setlog_act");

}else{
  var msg = m4getmessage("_setlog_new");
}
var ocell = m4elemento("m4tit");
if ( ocell.hasChildNodes() == true) { ocell.removeChild(ocell.firstChild);}     
var textocelda = document.createTextNode(msg);
ocell.appendChild(textocelda);
}
</script>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"><%=mssDelegation.getProperty("Label.delTitle")%></td></tr>
<tr>
  <td><img src="/iconos/noname_catalogo_99_100.gif" width="99" height="100" alt="" ></td>
  <td class="descripcionfuncional"><%=mssDelegation.getProperty("Label.delTexto")%></td>
</tr>
</table>
<%if (zcount2>0) {%>
<form action="/servlet/CheckSecurity/JSP/mss_generico/mss_delegation.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="ACC" name="ACC" value="INS" />
<input type="hidden" id="SCO_ID_DELEGATE" name="SCO_ID_DELEGATE"   value="" />
<table class = "tablaestados" width="100%" cellspacing="0">
<thead><tr class="tablaestadosceldatitulo"><th  id="m4tit" ></th><th colspan="3"></th></tr></thead> 
<tbody>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zvalorIDProcess%>" htmlsafe="true"/></td>
  <td class="fuentecampo" colspan="3">&nbsp;
  <select tabindex="1" id="SCO_ID_PROCESS" class="fuenteformulario200" name="SCO_ID_PROCESS" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zvalorIDProcess%>" htmlsafe="true"/>" >
  <option value="ALL"><%=Tran.getProperty("Label.LblALL")%> </option>
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
  <option value="<m4:item m4name="<%=zvalorIDM4Object%>" htmlsafe="true"/>"><m4:item m4name="<%=zvalorNT3%>" htmlsafe="true"/></option>
  </m4:loop>
  </select>
  </td>
</tr> 
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zvalorDtStart%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<input  type="text" name="DT_START" id="DT_START" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zvalorDtStart%>" htmlsafe="true"/>" maxlength="10" size="10" tabindex="2" />&nbsp;<a tabindex="3" href="javascript:fecIni();" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zvalorDtStart%>" htmlsafe="true"/>"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zvalorDtStart%>" htmlsafe="true"/>" /></a></td>
  <td class="fuentecampo" >&nbsp;<m4:label m4name="<%=zvalorDtEnd%>" htmlsafe="true"/></td>
  <td class="fuentecampo">&nbsp;<input tabindex="4" type="text" name="DT_END" id="DT_END" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zvalorDtEnd%>" htmlsafe="true"/>" maxlength="10" size="10"  />&nbsp;<a tabindex="5"href="javascript:m4calendario(m4objeto('DT_END','NombreFormulario'))" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zvalorDtEnd%>" htmlsafe="true"/>"><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zvalorDtEnd%>" htmlsafe="true"/>" /></a></td> 
</tr>
<tr>
  <td class="fuentecampo">&nbsp;*&nbsp;<m4:label m4name="<%=zvalorIDDElegate%>" htmlsafe="true"/></a></td>
  <td class="fuentevalor" colspan="3">&nbsp;<input class="fuentecampo" type="text" id="SCO_GB_NAME" name="SCO_GB_NAME" size="40" maxlength="62" title="<m4:label m4name="<%=zvalorNombre%>" htmlsafe="true"/>" value="" readonly="readonly" /><a tabindex="6" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zvalorIDDElegate%>" htmlsafe="true"/> " href="javascript:choose_filter();"><img alt="<%=Tran.getProperty("Label.LblSelect")%>  <m4:label m4name="<%=zvalorIDDElegate%>" htmlsafe="true"/>" src="/iconos/icono_lista_16_16.gif" width="16" height="16" align="center" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a></td>
</tr>
<tr><td colspan="4" class = "fuenteboton">&nbsp;<a tabindex="7"title="<%=Tran.getProperty("Button.Clear")%>" href="javascript:limp();"><img  alt="<%=Tran.getProperty("Button.Clear")%>" src="/iconos/icono_actualizar_mss_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>&nbsp;<a tabindex="8"title="<%=Tran.getProperty("Button.Send")%>"href="javascript:enviar();"><img alt="<%=Tran.getProperty("Button.Send")%>" src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a></td></tr>
<tr><td>

</td></tr>
</tbody></table>
</form>
<script type="text/javascript" language="Javascript1.5">tit();</script>
<form action="/servlet/CheckSecurity/JSP/mss_generico/mss_delegation.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="zinicios" name="zinicios"  value="" />
</form>
<%if (zcount > 0) {%>
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<thead>
<tr class="tablaestadosceldatitulo">
  <th>&nbsp;</th>
  <th>&nbsp;<m4:label m4name="<%=zvalorIDProcess%>" htmlsafe="true"/></th>
  <th>&nbsp;<m4:label m4name="<%=zvalorIDDElegate%>" htmlsafe="true"/></th>
  <th>&nbsp;<m4:label m4name="<%=zvalorDtStart%>" htmlsafe="true"/>&nbsp;/&nbsp;<m4:label m4name="<%=zvalorDtEnd%>" htmlsafe="true"/></th>
  <th>&nbsp;</th> 
</tr></thead>
<tbody>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<tr>
  <td class = "fuentevalor" ><a title="<%=Tran.getProperty("Button.Edit")%>"href="javascript:valor('<m4:item m4name="<%=zvalorIDProcess%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorDtStart%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorDtEnd%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorIDDElegate%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorNombre%>" htmlsafe = "true" jsafe = "true"/>');act();"><img  alt="<%=Tran.getProperty("Button.Edit")%>"  src="/iconos/icono_editar_mss_11_9.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=znombreIDProcess%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zvalorNombre%>" htmlsafe="true"/></td>
  <td class="fuentevalor">&nbsp;<m4:item m4name="<%=zvalorDtStart%>" htmlsafe="true"/>&nbsp;/&nbsp;<m4:item m4name="<%=zvalorDtEnd%>" htmlsafe="true"/></td>
  <td class = "fuentevalor"><a title="<%=Tran.getProperty("Button.Delete")%>" href="javascript:valor('<m4:item m4name="<%=zvalorIDProcess%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorDtStart%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorDtEnd%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorNivel%>" htmlsafe = "true" jsafe = "true"/>','<m4:item m4name="<%=zvalorIDDElegate%>" htmlsafe = "true" jsafe = "true"/>' ,'<m4:item m4name="<%=zvalorNombre%>" htmlsafe = "true" jsafe = "true"/>' );del() ;"><img align="right" alt="<%=Tran.getProperty("Button.Delete")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="12" width="11"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>  
</tr>
</m4:loop>
</tbody></table><%@include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_ventanas_post.jsp"%>
<%}%>
<%}else{%>
  <div class="fuentenodatos"><%=mssDelegation.getProperty("Label.delNoVal")%></div>
  <br/> <br/>
<%}%>
<%@ include file="/m4trans/m4custom/IBER/mss_generico/espanol/0-mssgenerico_disclaimer.jsp" %>
</div>
</body>
<m4:endpage/>
</html>


