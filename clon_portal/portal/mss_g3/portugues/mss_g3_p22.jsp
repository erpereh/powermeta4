<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.* " %>


<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 

<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
<%@ include file="/mss_g3/mss_ev_trans.jsp"%>

<%  
Generatablaparametros zobjtabla = new Generatablaparametros(request);
String estado = zobjtabla.m4paramvalor("estado");
String zinicios =zobjtabla.m4paramvalor("zinicios");
String IDRH = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH");
String RHRole = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole");
String PERIODO = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO");
String DTStartEval = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval");
String DTEndEv = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTEndEv");
String zORDINAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zORDINAL");
String znombreemp = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombreemp");
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
String profData = Tran.getProperty("Labelmss.ProfsData");

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}



%>
<script type="text/javascript">

function formacion (extd,lev){
m4valor("oculto2","zextd",extd,"set");
m4valor("oculto2","zlevel",lev,"set");
m4submit("oculto2");}

function plan_accion()
{

  m4submit("plan_accion");
}

function load(empleado)
{
  var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&person=" + empleado;
  window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');
}

</script>
</head>
<title><%=TranMss.getProperty("ev_mss.Plan")%></title>
<body>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%
   String zsubsesion = "SSM_EVAL_CAPAB";
   String zmeta4object = "SSM_EVAL_CAPAB";
   String znodo = "SSM_EVAL_CAPAB";
   
   String ztipocarga = " ";
   String zventanas = "30";
   int zvuelta = 5;
   String zdireccion = "/mss_g3/mss_g3_p9.jsp";
   String zestado="31";
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove =znodo + ":" +  znodo + "[" + zregistroinicial + "]";
   String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   


   String zSCO_ID_CAPABILITY = zraiz + "SCO_ID_CAPABILITY";
   String zSCO_NM_LEVEL = zraiz + "SCO_MEANING";
   String zSCO_NM_LEVEL_1 = zraiz + "SCO_MEANING_1";

   
   String znodoprincipal = "SSM_PRINCIPAL";
   String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request);
      m.setItem(zsubsesion,znodo,"","SCO_P_OR_HR_ROLE",RHRole);
      m.setItem(zsubsesion,znodo,"","SCO_P_DT_START_EVAL",DTStartEval);   
      m.setItem(zsubsesion,znodoprincipal,"","SSM_ID_PERSON",IDRH);
  } catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>


<%
  int  zcounti  = 0;  
  int  zcount  = 0;

  
  try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);

    
  } catch(Exception e) {}
  String  zcountv = String.valueOf(zcounti);

%>
<table width="100%" cellspacing="0">
<tr><td class="titulofuncional" colspan="2"><%=TranMss.getProperty("ev_mss.SolEv")%></td></tr>
<tr>
  <td><img alt="Compet&ecirc;ncias do posto" title="Compet&ecirc;ncias do posto"src="/iconos/noname_competencias_puesto_82_100.gif" width="82" height="100" /></td>
  <td>
    <div class="descripcionfuncional"><%=TranMss.getProperty("ev_mss.DescrSolEv")%></div>
    <ul class="listaenlace">
    <li><a class="enlacefuncional" tabindex="1" title="<%=TranMss.getProperty("ev_mss.LblPlan")%>" href="javascript:plan_accion();"><%=TranMss.getProperty("ev_mss.Plan")%></a></li>
    </ul>
  </td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17_mod.jsp?estado=31" method="post" name="plan_accion" id="plan_accion">
<input type="hidden" id="IDRH" name="IDRH" value="<%=IDRH%>" />
<input type="hidden" id="RHRole" name="RHRole" value="<%=RHRole%>" />
<input type="hidden" id="PERIODO" name="PERIODO" value="<%=PERIODO%>" />
<input type="hidden" id="DTStartEval" name="DTStartEval" value="<%=DTStartEval%>" />
<input type="hidden" id="DTEndEv" name="DTEndEv" value="<%=DTEndEv%>" />
<input type="hidden" id="zORDINAL" name="zORDINAL" value="<%=zORDINAL%>" />
<input type="hidden" id="znombreemp" name="znombreemp" value="<%=znombreemp%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>" />
<input type="hidden" id="mss" name="mss" value="1" />
</form>

<% if (zcounti > 0) {   
  String zregistroinicials = String.valueOf(zregistroinicial);
  String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
  String zposicions = "0";
  int zcontrol = 0;
  String clase = "" ;
  
  int zposicion =0;%>
<table border="0" width="100%">
<tr><td class="fuenteleyenda_big"  width="25%" colspan= "3" >
<%String sIDPerson = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", IDRH);%>
<a class="fuenteleyenda_big" title="<%=profData%>" href="javascript:load('<%=sIDPerson%>')"><%=znombreemp%> - <%=NombreProceso%> </a></td>
</tr>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
  <td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label m4name="<%=zSCO_ID_CAPABILITY%>" htmlsafe="true"/></td>
  <td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL_1%>" htmlsafe="true"/></td>
  <td class="tablaestadosceldatitulo" colspan="2">&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL%>" htmlsafe="true"/></td>
</tr> 
<%  
  try {
    M4Operations t = new M4Operations(request);
    int i = 0;
    String zSCO_GB_NAME="";
    String zSCONMEXTDKN="";
    String zSCOIDCAPABILITY="";
    String zSCONMLEVEL_RAT="";
    String zSCONMLEVEL_REQ ="";
    String zSCOIDCAPREQLVL ="";
    String zSCOIDCAPRATLVL ="";
    String zSCOPERCENT ="";
    String zFormacion="NO";

    for (i =zregistroinicial; i < zregistrofinal+1; i++){
        String id = String.valueOf(i);
        t.moveData(znodo,zmeta4object,znodo,id);
        zSCO_GB_NAME = t.getItem(znodo,zmeta4object,znodo,"","SCO_GB_NAME"); 
        zSCOIDCAPABILITY = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_CAPABILITY"); 

        zSCONMEXTDKN = t.getItem(znodo,zmeta4object,znodo,"","SCO_NM_EXTD_KN"); 
        zSCOIDCAPREQLVL = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_CAP_REQ_LVL"); 
        zSCONMLEVEL_REQ= t.getItem(znodo,zmeta4object,znodo,"","SCO_MEANING");
        zSCOIDCAPRATLVL = t.getItem(znodo,zmeta4object,znodo,"","SCO_ID_CAP_RAT_LVL"); 
        zSCONMLEVEL_RAT= t.getItem(znodo,zmeta4object,znodo,"","SCO_MEANING_1"); 
        zSCOPERCENT = t.getItem(znodo,zmeta4object,znodo,"","SCO_P_PERCENT"); 


        
%>  
<%
    zcontrol = i%2;
  if (zcontrol==0){
     clase = "fuentevalor" ; 
  }else{
     clase = "fuentevalor2" ; 
     }
%>
<tr>
  <td class="<%=clase%>" colspan="2">&nbsp;<%=zSCONMEXTDKN%></td>
  <td class="<%=clase%>" colspan="2">&nbsp;<%=zSCONMLEVEL_RAT%></a></td>
  <%if(zSCOPERCENT.equals("NO")==true)
    {%> <td class="<%=clase%>">&nbsp;<%=zSCONMLEVEL_REQ%></td><%}
  else
    {%><td class="<%=clase%>">
    <a href="javascript:formacion('<%=zSCOIDCAPABILITY%>','<%=zSCOIDCAPREQLVL%>');" title="<%=TranMss.getProperty("ev_mss.LblForm")%>">&nbsp;<%=zSCONMLEVEL_REQ%></a>
    </td>
    <%}%>

</tr>
<%
    }
  } catch(Exception e) {}
%>

<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6_desc2.jsp?estado=31" method="post" name="oculto2" id="oculto2">
<input type="hidden" id="zextd" name="zextd" value="" />
<input type="hidden" id="zlevel" name="zlevel"value="" />
</form> 

</table>
<%@include file="../../sse_generico/portugues/generico_ventanas_post.jsp"%>
<%}else{%>
<div class="fuentenodatos"><%=Tran.getProperty("Label.NoDataFound8")%></div>
<br/><br/>
<%}%>   

<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>

</div>
<m4:endpage/>
</body>
</html>


