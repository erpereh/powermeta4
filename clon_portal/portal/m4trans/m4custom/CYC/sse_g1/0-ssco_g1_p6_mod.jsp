<%
  String zvis = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zvis");
  String ztype = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztype");
  String zfiltrogroup = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltrogroup");
  String zT = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zT"); 
  
  
  if ((zvis==null)||(zvis.equals(""))){zvis="0";}
  if ((ztype==null)||(ztype.equals(""))){ztype = "";}
  if ((zfiltrogroup==null)||(zfiltrogroup.equals(""))){zfiltrogroup = "";}
  if ((zT==null)||(zT.equals(""))){zT = "";}
%>

<script type="text/javascript">
function comprobar(){
var error = 0;
var dtemission = "";
var doctype = "";
var fechasok = false;
var dtvalidok = "";
var dtemissionok = "";
var texto = m4getmessage("_sl_ssco_gn_1");
var valorfec = m4fechahoy();
dtemission = m4valor("NombreFormulario","SCO_DT_EMISSION","","get");
var viddoc = m4valor("NombreFormulario","SCO_ID_DOC_TITLE","","get");
var Dtval="";
var posSel = document.NombreFormulario.SCO_ID_DOC_TYPE.selectedIndex ;
var adateinfo=  new Array();
m4splitdate(dtemission,adateinfo);
var Day =  parseInt(adateinfo[0]);
var Month = parseInt(adateinfo[1]);
var Year =  parseInt(adateinfo[2]);

if (u[posSel] == "01"){
       Year = Year + parseInt(d[posSel],10);  
       if (Month < 10) {Month= "0" + Month;}
       if (Day < 10) {Day= "0" + Day;}
     
 }else if (u[posSel] == "02"){
       Month = Month + parseInt(d[posSel],10);
       if (Month < 10) {Month= "0" + Month;}
       if (Day < 10) {Day= "0" + Day;}
     
 }     
 else if (u[posSel] == "04"){
       Day= Day + parseInt(d[posSel],10);
       if (Month < 10) {Month= "0" + Month;}
       if (Day < 10) {Day= "0" + Day;}
    
 }
    Dtval =m4builtdate(Day,Month,Year);

 m4valor("NombreFormulario","SCO_DT_VALID",Dtval,"set");

doctype = m4select(m4objeto("SCO_ID_DOC_TYPE","NombreFormulario"),"value");
dtemissionok = m4fechacomprobacion(m4objeto('SCO_DT_EMISSION','NombreFormulario'),"");



if (doctype == null || doctype == ""){
  texto = texto + "\n" + m4getmessage("_sl_co_ess_md_3");
  error = 1;
  }
  if (dtemission == null || dtemission == ""){
  texto = texto + "\n" + m4getmessage("_sl_co_ess_cl_2");
  error = 1;
  }

if ((dtemission != null && dtemission != "") && (dtemissionok == "")){
  texto = texto + "\n" + m4getmessage("_sl_co_ess_md_0");
  error = 1;
  }
    if  (document.NombreFormulario.chkdoc.checked == false)
  {
    
    if (viddoc == null || viddoc == ""){
      texto = texto + "\n" + m4getmessage("_sl_co_ess_md_5");
      error = 1;
    }
  }
if (error == 1){
  alert(texto);
  return;
}else {

 document.getElementById("SCO_ID_DOC_TYPE").removeAttribute("disabled",true);
  m4submit("NombreFormulario");
  }

}

function showlink(){  
  var templ = m4select(m4objeto("SCO_ID_DOC_TYPE","NombreFormulario"),"id"); 
  var velle= document.getElementById('showTempl');
  if (templ !=null && templ !="") {
     velle.style.display = ''; 
    }else{
   velle.style.display =  "none";
   } 
}

function navegardoc()
{
var prueba =m4select(m4objeto("SCO_ID_DOC_TYPE","NombreFormulario"),"id");
m4opendocument_tech(prueba);
}
function borrar(reg){
m4valor("Formulario","REC",reg,"set");
m4submit("Formulario");
}
function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSCO_HR_DOCUMENTS",ord,"BORRAR","SSE_HR_DOC");
m4navegar('sse_g1/ssco_g1_p6_mod_send.jsp',parametros,valores);
}

</script>
<%
   String zsubsesion = "SSCO_HR_DOCUMENTS";
   String zmeta4object = "SSCO_HR_DOCUMENTS";
   String znodo = "SSE_HR_DOC";
   String znodo1 = "M4T_HR_DOC";
   String znodo2 = "M4T_LU_DOC_TYPE";

  
   String zventanas = "10";
   int zvuelta = 5;
   String zdireccion = "sse_g1/ssco_g1_p6_mod.jsp";
   String zestado = "11";
   
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   

   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
   String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
   String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
 

   // Metodo de carga del Meta4Object generico

   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
   String ztipocarga = "SSE";

// Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar

   
   String zSCODTVALID = zcomun + "SCO_DT_VALID";
   String zSCODTEMISSION = zcomun + "SCO_DT_EMISSION";
   String zSCONMDOCTYPE = zcomun + "SCO_NM_DOC_TYPE";
   String zSCONMDOCSTATE = zcomun + "SCO_NM_DOC_STATE";
   String zSCOTITLEDOC = zcomun + "SCO_TITLE_DOC";
   String zSCOIDDOC = zcomun + "SCO_ID_DOC";


      
   String zORDINAL = zcomun + "ORDINAL";
   String zNACCION = zcomun + "N_ACCION";   
   

   
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");

    } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>

<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%  int  zcount  = 0; int  zcounti  = 0;  int  zcount2i  = 0;   
  try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
      zcount2i = m.getCountInClient(znodo2,zsubsesion,znodo2);
} catch(Exception e) {}
String  zcount2v = String.valueOf(zcount2i);%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=sse_g1Ess.getProperty("Title.ssco_g1_p6Des")%></td></tr>
<tr>
  <td><img alt="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6_modDes")%>" title="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6_modDes")%>"src="/iconos/family_123_100.gif" width="100" height="100" /></td>
  <td>
  <div class="descripcionfuncional"><%=sse_g1Ess.getProperty("Label.ssco_g1_p6_modDes")%></div>

  

  <ul class="listaenlace"><li><a class="enlacefuncional" title="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%>" href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6.jsp?estado=11"><%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%></a></li></ul>
  </td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6_mod_send.jsp" method="post" name="NombreFormulario" id="NombreFormulario" onsubmit="javascript:comprobar();">
<input type="hidden" id="TAG" name="TAG" value="SSCO_HR_DOCUMENTS" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_HR_DOC" />
<input type="hidden" id="SCO_DT_VALID" name="SCO_DT_VALID" value="" />
<input type="hidden" id="SCO_ID_DOC_STATE" name="SCO_ID_DOC_STATE" value="01" />
<input type="hidden"  id="SCO_ID_DOC" name="SCO_ID_DOC" value="" /> 
<input type="hidden"  id="zvis" name="zvis" value="<%=zvis%>" />
<input type="hidden"  id="zfiltrogroup" name="zfiltrogroup" value="<%=zfiltrogroup%>" />  
<input type="hidden"  id="zT" name="zT" value="<%=zT%>" />  
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
  <td><%=sse_g1Ess.getProperty("Label.ssco_g1_p6_modData")%></td>
  <td class="tablamenuright"><a title="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%>"href="/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6.jsp?estado=11"><img alt="<%=sse_g1Ess.getProperty("Title.ssco_g1_p6")%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>      
</tr>
<tr>
  <td class="fuentecampo">*&nbsp;<m4:label  item="SCO_ID_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>
  
  <script type="text/javascript" language="Javascript1.5"><!--  
      var d=new Array();  var u=new Array();
      var i=1;      
  --></script>
    
    <select id="SCO_ID_DOC_TYPE" class="fuenteformulario" name="SCO_ID_DOC_TYPE"  onchange="showlink()" title="<%=Tran.getProperty("Label.LblSelect")%> <m4:label  item="SCO_ID_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/>">
      <option value=""></option>
      <m4:dataloop outputdef="<%=znodo2%>">
      <m4:item  item="SCO_ID_TEMPLATE" htmlsafe="true" outputdef="<%=znodo2%>" m4varname="sIdDocTemp"/>
      <%if (!sIdDocTemp.equals("")) {sIdDocTemp = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", sIdDocTemp);}%>
      <option id = "<%=sIdDocTemp%>"
        value="<m4:item  item="SCO_ID_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo2%>"/>">
        <m4:item  item="SCO_NM_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo2%>"/>
      </option>
      
      <script type="text/javascript" language="Javascript1.5"><!--
        
       d[i]='<m4:item  item="SCO_DURATION" htmlsafe="true" outputdef="<%=znodo2%>"/>';  
       
       u[i]='<m4:item  item="SCO_ID_TIME_UNIT" htmlsafe="true" outputdef="<%=znodo2%>"/>';  
                
       i = i + 1; 
      --></script>
      </m4:dataloop>
    </select>
  <a id="showTempl" name="showTempl" style="display:none;"  class="fuentebotondoctable" href="javascript:navegardoc()"><img <%@include file="/m4trans/files_gif/0-ic_doc_view.jsp"%> alt="<%=sse_g1Ess.getProperty("Link.ssco_g1_p6templ")%>"/></a>
  
    <script type="text/javascript" language="Javascript1.5"><!--
    if ('<%=ztype%>'!= ""){
      m4searchoptioness('NombreFormulario','SCO_ID_DOC_TYPE','<%=ztype%>');
    



 document.NombreFormulario.SCO_ID_DOC_TYPE.disabled = true;
    }
  --></script>
  
  <td class="fuentecampo">*&nbsp;<m4:label  item="SCO_DT_EMISSION" htmlsafe="true" outputdef="<%=znodo%>"/>
  <input class="fuenteformulario" type="text" name="SCO_DT_EMISSION" id="SCO_DT_EMISSION" title="<%=Tran.getProperty("Label.LblWrite")%> <m4:label m4name="<%=zSCODTEMISSION%>"/>" maxlength="10" size="10" tabindex="1" />
  <a href="javascript:m4calendario(m4objeto('SCO_DT_EMISSION','NombreFormulario'))">
  <img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="<%=Tran.getProperty("Label.LblSelect")%> <m4:label m4name="<%=zSCODTEMISSION%>"/>" />
  </a>
     <script type="text/javascript">
            var valorfec = m4fechahoy();
            m4valor("NombreFormulario","SCO_DT_EMISSION",valorfec,"set");   
        </script>
  </td> 
</tr>
<%@ include file="/m4trans/tc_docs/0-tc_doc_initialize_include.jsp" %>
<% sgtc_zsubsesionsave = "SSCO_HR_DOCUMENTS";%>
<tr>
    <td class="fuentecampo"><input type="Checkbox" id="chkdoc" name="chkdoc" title="<%=sse_g1Ess.getProperty("Label.ssco_g1_p6chkdocp")%>"/>&nbsp;<%=sse_g1Ess.getProperty("Label.ssco_g1_p6chkdocp")%></td>
    
    <td class="fuentecampo"><%@ include file="/m4trans/tc_docs/0-tc_doc_include.jsp" %> </td>
</tr> 
<tr><td class="fuenteboton" colspan="2"><a href="javascript:comprobar()"><img alt="<%=Tran.getProperty("Button.Send")%>"title="<%=Tran.getProperty("Button.Send")%>" border="0" src="/iconos/icono_enviar_ess_36_36.gif" width ="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a></td></tr>
</table>
</form>

<% if (zcounti > 0){ 
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;
String zPaint="";%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>


<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo">&nbsp;<%=Tran.getProperty("Label.TableValPen")%></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_NM_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_ID_DOC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_NM_DOC_STATE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo">&nbsp;<m4:label item="SCO_DT_EMISSION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label item="SCO_DT_VALID" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr>

<%
//0:modo formulario 1:modo tabla
sgtc_zShowMode = "1";
//0:modo readonly 1:modo readwrite
sgtc_zReadWrite = "0";
%>   
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%  zposicions = m4lix;
  zposicion = Integer.valueOf(zposicions).intValue();
  zcontrol = zposicion%2;
%><%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<tr>
  <td class="fuentecampoaccion<%=zPaint%>"><m4:item m4name="<%=zNACCION%>" htmlsafe="true"/>&nbsp;</td> 
  <td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item item="SCO_NM_DOC_TYPE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <m4:item item="<%=sgtc_zIDInputIDDOC%>" var="sgtc_zIDDOC" htmlsafe="true" outputdef="<%=znodo%>"/>
  <%if (!sgtc_zIDDOC.equals("")) {sgtc_zIDDOC = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "tc_docs", sgtc_zIDDOC);}%>
  <m4:item item="<%=sgtc_zIDInputTITLEDOC%>" var="sgtc_zTITLEDOC" htmlsafe="true" outputdef="<%=znodo%>"/>
  <%sgtc_zNMInputIDDOC = sgtc_zIDInputIDDOC + "_" + zposicion;%>
  <%sgtc_zIDCSSRow = "fuentevalor" + zPaint;%>
  <input type="hidden" id="<%=sgtc_zNMInputIDDOC%>" name="<%=sgtc_zNMInputIDDOC%>" value="<%=sgtc_zIDDOC%>"/>
  <td class="fuentevalor<%=zPaint%>"><%@ include file="/m4trans/tc_docs/0-tc_doc_include.jsp" %></td>
  <td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item item="SCO_NM_DOC_STATE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentevalor<%=zPaint%>" >&nbsp;<m4:item item="SCO_DT_EMISSION" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentevalor<%=zPaint%>">&nbsp;<m4:item item="SCO_DT_VALID" htmlsafe="true" outputdef="<%=znodo%>"/></td>
  <td class="fuentebotonright<%=zPaint%>"><a "title="<%=Tran.getProperty("Button.Delete2")%>"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" htmlsafe="true" jsafe="true"/>');"><img class="tablamenuright" alt="<%=Tran.getProperty("Button.Delete2")%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)" onmouseout="m4oscuridad(this)"  /></a></td>
</tr>
</m4:loop>
</table>
<script type="text/javascript"> m4focus("NombreFormulario","SCO_DT_EMISSION");</script>
