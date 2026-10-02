<%@ include file="../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
M4SessionManager zsessionmanagermssess = M4Context.getSession(request);
String zpess=zsessionmanagermssess.getProductID();
if (zpess.equals("ess")){
%>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<%}else{%>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<%}%>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<%@ include file="../sse_generico/sse_generico_taglib_2.jsp" %>
<%@ include file="../mss_generico/mss_filter_trans.jsp" %>  
<head><title><%=mssfilter.getProperty("Label.filterTitle")%></title></head><body>
<%
String zinicio = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicio");
if ((zinicio==null)||(zinicio.equals(""))){zinicio = "1";}
String ztipocarga = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ztipocarga");
if ((ztipocarga==null)||(ztipocarga.equals(""))){ztipocarga = "NORMAL";}
//Para los filtros
String zf1id = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1id");
String zf1val = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1val");
String zf1txt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf1txt");
if ((zf1id==null)||(zf1id.equals(""))){zf1id = "";}
if ((zf1val==null)||(zf1val.equals(""))){zf1val = "";}
if ((zf1txt==null)||(zf1txt.equals(""))){zf1txt = "";}
String zf2id = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2id");
String zf2val = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2val");
String zf2txt = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf2txt");
if ((zf2id==null)||(zf2id.equals(""))){zf2id = "";}
if ((zf2val==null)||(zf2val.equals(""))){zf2val = "";}
if ((zf2txt==null)||(zf2txt.equals(""))){zf2txt = "";}

String zf3id = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf3id");
if ((zf3id==null)||(zf3id.equals(""))){zf3id = "";}
String zf4id = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zf4id");
if ((zf4id==null)||(zf4id.equals(""))){zf4id = "";}
String zv1 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv1");
if ((zv1==null)||(zv1.equals(""))){zv1 = "";}
String zv2 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zv2");
if ((zv2==null)||(zv2.equals(""))){zv2 = "";}

String zm4object = "SSE_HR_PERIOD";
String znodo = "SSE_HR_PERIOD";
String zsubsesion = zm4object;

String zdireccion = "sse_g0/sse_hr_period.jsp";
String zredireccion = "sse_hr_period.jsp";

String zventanas = "20";
int zvuelta = 5;


String znodo2 ="SHCO_GN_MT_FILTER_KEY";
String znodo3 ="SHCO_GN_MT_FILT";
String znodoroot = "SHCO_GN_ROOT";
String zmetodocarga = zm4object + "!SHCO_GN_ROOT.SHCO_LOAD_FILTER";


int zregistroinicial = Integer.valueOf(zinicio).intValue();         //COMUN VENTANAS
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;

String zoutputdef = zm4object + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";   //COMUN VENTANAS
String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zm4object + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz =  znodo + ":" + zm4object  + "!" + znodo + ".";
   
String zoutputdefroot = zm4object + "!" + znodoroot + "[*]";

String zoutputdef2 = zm4object + "!" + znodo2 + "[*]";            //COMUN MT
String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";
String zcomun2 = znodo2 + ":" + zm4object + "!" + znodo2 + "[&VAR.m4lix]" + ".";
      
String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";
String zmove3 =znodo3 + ":" +znodo3 + "[FIRST]"; 
String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   


String znodolabel = "SHCO_GN_LABEL";
String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";
String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";
String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";

String zurl = zdireccion + "#filter"; 
String zaccion = "/servlet/CheckSecurity/JSP/" + zurl;
String zIDVALUE = zcomun2 + "SCO_ID_KEY";
String zIDTYPE2 = zcomun2 +  "SCO_ID_TYPE";
String zNVALUE = zcomun2 +  "SCO_NM_KEY";
   
String zIDFIELD = zcomun3 + "SCO_ID_FIELD";
String zIDTYPE = zcomun3 +  "SCO_ID_TYPE";
String zNFIELD = zcomun3 +  "SCO_NM_FIELD";
//Items de labels 

String zSHCOLBNEW = zraizlabel + "SHCO_LB_NEW";
String zSHCOLBFILTER = zraizlabel + "SHCO_LB_FILTER";
String zSHCOLBFILT = zraizlabel + "SHCO_LB_FILT";
String zSHCOLBCLOSE= zraizlabel + "SHCO_LB_CLOSE";
String zSCHOLBCKALL= zraizlabel + "SCHO_LB_CK_ALL";
String zSCHOLBDCKALL= zraizlabel + "SCHO_LB_DCK_ALL";
String zSHCOLBACEPT= zraizlabel + "SHCO_LB_ACEPT";

String zSHCOLBADVANCEFIL= zraizlabel + "SHCO_LB_ADVANCED_FILTER";
String zSHCOLBEASYFILT= zraizlabel + "SHCO_LB_EASY_FILTER";

String zSHCOLBCLEAN = zraizlabel + "SHCO_LB_CLEAN";
String zSHCOLBDEL = zraizlabel + "SHCO_LB_DEL";
String zSHCOLBEDIT = zraizlabel + "SHCO_LB_EDIT";
String zSHCOLBINSERT = zraizlabel + "SHCO_LB_INSERT";
String zSHCOLBLIST = zraizlabel + "SHCO_LB_LIST";
String zSHCOLBNEXT = zraizlabel + "SHCO_LB_NEXT";
String zSHCOLBORD = zraizlabel + "SHCO_LB_ORD";
String zSHCOLBPREV = zraizlabel + "SHCO_LB_PREV";
String zSHCOLBREFRESH = zraizlabel + "SHCO_LB_REFRESH";
String zSHCOLBSEND = zraizlabel + "SHCO_LB_SEND";
String zSHCOLBWRITE = zraizlabel + "SHCO_LB_WRITE";
String zSHCOLBNOHELP = zraizlabel + "SHCO_LB_NOHELP";
String zSHCOLBHELP = zraizlabel + "SHCO_LB_HELP";
String zSHCOLBCAB = zraizlabel + "SHCO_LB_CAB";
String zSHCOLBTITLEROOT = zraizlabel + "SHCO_LB_TITLE_ROOT";
String zSHCOLBTITLE = zraizlabel + "SHCO_LB_TITLE";
String zSHCOLBTITERROR = zraizlabel + "SHCO_LB_TIT_ERROR";
String zSHCOLBBACK = zraizlabel + "SHCO_LB_BACK";
String zSHCOLBERR = zraizlabel + "SHCO_LB_ERR";
String zSHCOLBWARNING = zraizlabel + "SHCO_LB_WARNING";
String zSHCOLBINFO= zraizlabel + "SHCO_LB_INFO";
String zSHCOLBCABECINFO= zraizlabel + "SHCO_LB_CABEC_INFO";
// Items used (to see or use in any function):

String zField_Std_id_person = "STD_ID_HR";
String z_Std_id_person = zcomun + zField_Std_id_person;

String zField_Sco_gb_name = "SCO_GB_NAME";
String z_Sco_gb_name = zcomun + zField_Sco_gb_name;
String z_Std_or_hr_period = zcomun + "STD_OR_HR_PERIOD";

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/><m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="LOAD_TYPE_ARG" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>" ><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>" ><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodoroot%>" ><m4:param name="m4name0" value="<%=zoutputdefroot%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolabel%>" ><m4:param name="m4name0" value="<%=zoutputdeflabel%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove3%>"/></m4:move>
</head><body>
<%int  zcount  = 0;
int  zcounti  = 0;
int  zcounti2  = 0;
int  zcounti3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zm4object,znodo);
    zcounti = m.getCountInClient(znodo,zm4object,znodo);
    zcounti2 = m.getCountInClient(znodo2,zm4object,znodo2);
    zcounti3 = m.getCountInClient(znodo3,zm4object,znodo3);
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);
String  zcountv2 = String.valueOf(zcounti2);
String  zcountv3 = String.valueOf(zcounti3);
String zregistroinicials = String.valueOf(zregistroinicial);
String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
String zposicions = "0";
int zcontrol = 0;
int zposicion =0;%>

<script type="text/javascript" language="Javascript1.5">
function valores(){
    m4valor("oculto","zf1id",m4select(document.forms["FormularioFiltro"].elements["list1"],"id"),"set");
    m4valor("oculto","zf3id",m4select(document.forms["FormularioFiltro"].elements["list3"],"id"),"set");
    m4valor("oculto","zv1",m4valor("FormularioFiltro","VALOR1","","get"),"set");

    m4submit("oculto"); 
}
function buscarcadena(cadena){
  var re = /,/;         
  var r = cadena.search(re);          
  return(r);                 
}
function searchoption(oselect,sidoption){
  for(var ni=0; ni< oselect.options.length; ni++){    
    if (oselect.options[ni].id == sidoption){
    oselect.selectedIndex = ni; 
    break;
    }
  }
}

function buscar(lista,sublista,sel){
  var mtemp = new Array();
  var obj = document.forms["FormularioFiltro"].elements[lista];
  var patron = m4select(obj,"value");
  var k=0;
  var h=0;
  for (var i=0; i < mlist3.length; i++){
    var strlist3i = new String (mlist3[i]);
    var strlist3ivalue = strlist3i.substr(0,buscarcadena(strlist3i));
    strlist3i= strlist3i.substr(buscarcadena(strlist3i)+1,strlist3i.length); 
    var strlist3itext = strlist3i.substr(0,buscarcadena(strlist3i));
    var strlist3iid = strlist3i.substr(buscarcadena(strlist3i)+1,strlist3i.length);
    if (strlist3ivalue == patron){
      var msubtemp = [strlist3ivalue,strlist3itext,strlist3iid];
      mtemp[k++] = msubtemp;
    }
  }
  var subselectfinal = document.forms["FormularioFiltro"].elements[sublista];
  subselectfinal.options.length= mtemp.length;
  for (var j=0; j < subselectfinal.options.length; j++){
    var strtemp = new String (mtemp[j]);
    var a=j;
    subselectfinal.options[a].value = strtemp.substr(0,buscarcadena(strtemp));
    strtemp= strtemp.substr(buscarcadena(strtemp)+1,strtemp.length); 
    subselectfinal.options[a].text = strtemp.substr(0,buscarcadena(strtemp));
    subselectfinal.options[a].id = strtemp.substr(buscarcadena(strtemp)+1,strtemp.length);            
  }
  if (sel!= ""){searchoption(document.forms["FormularioFiltro"].elements[sublista],sel);}
}
function filtrar(){
  var param="";
  var funciones="";
  var err=1;
  i=1

    var campofo="VALOR"+i;
    var par="PARTE"+i;
    var lis="list"+i;
    var lisc="list"+(i+2);
    var val=m4valor("FormularioFiltro",campofo,"","get");
    if (val != ""){
      var lis1=  m4select(document.forms["FormularioFiltro"].elements[lis],"value");
      var listext1=  m4select(document.forms["FormularioFiltro"].elements[lis],"text");
    }
    param= param+ m4select(document.forms["FormularioFiltro"].elements[lis],"id");

    param= param+ "*"+m4select(document.forms["FormularioFiltro"].elements[lisc],"id")+ "*"+val+"{";



  if (err == 1){
    m4valor("oculto","ztipocarga",param,"set");
    valores();  
  }
}


</script>
<form action="<%=zaccion%>" method="post" name="oculto" id="oculto">
<input type="hidden" id="zinicio" name="zinicio" value="" />
<input type="hidden" id="ztipocarga" name="ztipocarga" value="<%=ztipocarga%>" />
<input type="hidden" id="zf1id" name="zf1id" value="" />
<input type="hidden" id="zf3id" name="zf3id" value="" />
<input type="hidden" id="zv1" name="zv1" value="" />
<input type="hidden" id="zf2id" name="zf2id" value="" />
<input type="hidden" id="zf4id" name="zf4id" value="" />
<input type="hidden" id="zv2" name="zv2" value="" />
</form>

<form action=" " method="post" name="FormularioFiltro" id="FormularioFiltro" onsubmit="return false">
<table class="tablaestados" width="100%" cellspacing="0" >
<thead><tr class="tablaestadosceldatitulo">
       <th >&nbsp;<m4:label m4name="<%=zSHCOLBTITLEROOT%>" htmlsafe="true"/></th>  
 
</tr></thead>
<tbody>
<tr class="fuentecampo">
  <td class="fuentecampo" colspan="2">
  <select tabindex="1" id="list1" class="select30" name="list1" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" onchange="buscar('list1','list3')">
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>"><option id="A<m4:item m4name="<%=zIDFIELD%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE%>" htmlsafe="true"/>"><m4:item m4name="<%=zNFIELD%>" htmlsafe="true"/></option></m4:loop>
  </select>
  <select tabindex="2" id="list3" class="select30" name="list3" title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>">
  <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>"><option id ="A<m4:item m4name="<%=zIDVALUE%>" htmlsafe="true"/>" value="<m4:item m4name="<%=zIDTYPE2%>" htmlsafe="true"/>"><m4:item m4name="<%=zNVALUE%>" htmlsafe="true"/></option></m4:loop>
  </select>
  <script type="text/javascript" language="Javascript1.5"><!--
        if ('<%=zf1id%>'!= ""){
            searchoption(document.forms["FormularioFiltro"].elements["list1"],'<%=zf1id%>');
        }
  var mlist3 = new Array(); 
  var selectfinal = document.getElementById("list3");
  var l=0;
  for (var i=0; i < selectfinal.options.length; i++){
    var mfila = [selectfinal.options[i].value,selectfinal.options[i].text,selectfinal.options[i].id];
    mlist3[l++] = mfila;
  }
      buscar('list1','list3','<%=zf3id%>');
        --></script>
        <input class="fuentecampo" type="text" id="VALOR1" name="VALOR1" maxlength="50" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/> " tabindex="3" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zv1)%>" /></td>
</tr>


    <tr><td colspan="2" class="fuenteboton">
        <a title="<m4:label m4name="<%=zSHCOLBFILT%>" htmlsafe="true"/>" href="javascript:filtrar();" tabindex="8"><img alt="<m4:label m4name="<%=zSHCOLBFILT%>" htmlsafe="true"/>" src="/iconos/icono_filtrar_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
        <a title="<m4:label m4name="<%=zSHCOLBCLOSE%>" htmlsafe="true"/>" tabindex="9"href="javascript:window.close();"><img alt="<m4:label m4name="<%=zSHCOLBCLOSE%>" htmlsafe="true"/>" src="/iconos/entrar_blanco.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this) " /></a>
    </td></tr>
</tbody>
</table>
</form>

<table class="tablaestados" width="100%" cellpadding="0" cellspacing="0"><thead>
<tr >
<th class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=z_Std_id_person%>" htmlsafe="true"/></th>
<th class="tablaestadosceldatitulo">&nbsp;<m4:label m4name="<%=z_Sco_gb_name%>" htmlsafe="true"/></th>
<th class="tablaestadosceldatitulo" colspan="2">&nbsp;<%
if (zcount>0){
  int ziniciosum = Integer.parseInt(zinicio) + zventana -1;
  if(ziniciosum > zcount){ziniciosum = zcount;}
  %>&nbsp;<%=zinicio%>-<%=ziniciosum%>&nbsp;<%=mssfilter.getProperty("Label.filterde")%>&nbsp;<%=zcount%><%}%></th>
</tr></thead><tbody>
<%if (zcount>0){%>
  <m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
  <%
zposicions = m4lix;
zposicion = Integer.valueOf(zposicions).intValue();
zcontrol = zposicion%2;
String zpos="";
if (zcontrol==0){
zpos="2";
}%>
<tr>
<m4:item m4varname="sIdHr" m4name="<%=z_Std_id_person%>" jsafe="true" htmlsafe="true"/>
<%String sIdHr_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sIdHr);%>
<m4:item m4varname="sOrHr" m4name="<%=z_Std_or_hr_period%>" jsafe="true" htmlsafe="true"/>
<%String sOrHr_Encr = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", sOrHr);%>
<td class="fuentevalor">&nbsp;<a title="" href="" onclick="var aval=new Array();aval[0]='<%=sIdHr_Encr%>';aval[1]='<%=sOrHr_Encr%>';aval[2]='<m4:item m4name="<%=z_Sco_gb_name%>" jsafe="true" htmlsafe="true"/>';returnvalues(aval);return false;"><%=sIdHr%> </a></td>
<td class="fuentevalor"colspan="3">&nbsp;<m4:item m4name="<%=z_Sco_gb_name%>" htmlsafe="true"/></td>
</tr>
</m4:loop></tbody></table>
<table class = "tablanavegacion" border="1" width="100%" cellspacing="0">
<tr>
<%
  int zintervalo = zcount/zventana;
  int zresto = zcount%zventana;
  int zcontador = 0;
  int zsalto = 0;
  if (zresto > 0) {zintervalo = zintervalo + 1;}


  for (zcontador=0; zcontador < zintervalo; zcontador++) {
    String  ziniciointervalo = String.valueOf(1 + zcontador*zventana);
    int zfinintervalo2 = zcontador*zventana + zventana;
    String zfinintervalo = String.valueOf(zcontador*zventana + zventana);
      if (zfinintervalo2 > zcount) {
      zfinintervalo = String.valueOf(zcontador*zventana + zresto);
    }
          
    // Cada n vueltas saltamos de fila:
    if(zsalto == zvuelta){
%>
</tr><tr>
<%
      zsalto = 0;
    }
    if (zinicio.equals(ziniciointervalo) == true){
%>
<td align="center" class="fuentebarraregistrosanulado"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></td>
<%      
    }
    else{
%>
<td align="center" class="fuentebarraregistros"><a href="javascript:m4valor('oculto','zinicio',<%=ziniciointervalo%>,'set');valores();" title="<%=mssfilter.getProperty("Label.filterOdata")%>"><%=ziniciointervalo%>&nbsp;-&nbsp;<%=zfinintervalo%></a></td>
  
  
<%
    }
    zsalto = zsalto + 1;
  }
%>
</tr>
</table>

<%}else{%>
<tr><td class="fuentenodatos" colspan="100"> 
<%
String zFirstLoad = "";
try {
  M4Operations t = new M4Operations(request);
  zFirstLoad = t.getItem("SHCO_GN_ROOT",zm4object,"SHCO_GN_ROOT","","SHCO_FIRST_LOAD");
  } catch(Exception e) {}
if ((zFirstLoad.equals("0"))&&((ztipocarga=="NORMAL") || ("KEEPDATA".equals(ztipocarga)))){%>
    <%=mssfilter.getProperty("Msg.filteFirstLoadList")%>
<%}else{%>
    <%=mssfilter.getProperty("Msg.FilterWithoutData")%>
<%}%>
</td></tr>
<br /><br />

</tbody></table><%}%> 
<m4:endpage/></div>
</body>
</html>


