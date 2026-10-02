<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN""DTD/xhtml1-strict.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>

<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %> 
<%@ include file="/sse_g2/sse_bft_trans.jsp"%>
<%
  String nombre = "";
  String valor = "";
  Hashtable zhash = new Hashtable(50);
  Enumeration oEnum = request.getParameterNames();
  while(oEnum.hasMoreElements ()){
    nombre = (String) oEnum.nextElement();
    valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
    zhash.put (nombre,valor);
  }
  String zparametro = "";
  String vPlan = (String)zhash.get("SUS_ID_PLAN");
  zhash.remove("SUS_ID_PLAN");
  String vOrPlan = (String)zhash.get("SUS_OR_H_EE_BNFT");
  zhash.remove("SUS_OR_H_EE_BNFT");
  String vIdHr = (String)zhash.get("SUS_ID_HR");
  zhash.remove("SUS_ID_HR");
  String vOrPeriod = (String)zhash.get("SUS_OR_HR_PERIOD");
  zhash.remove("SUS_OR_HR_PERIOD");
  String vDtStart = (String)zhash.get("SUS_DT_START");
  zhash.remove("SUS_DT_START");
  String vDtEnd = (String)zhash.get("SUS_DT_END");
  zhash.remove("SUS_DT_END");
  String vOption = (String)zhash.get("SUS_ID_OPTION");
  zhash.remove("SUS_ID_OPTION");
  String vCovCat = (String)zhash.get("SUS_ID_COV_CAT");
  zhash.remove("SUS_ID_COV_CAT");
  String vMaxCov = (String)zhash.get("SUS_MAX_COV");
  zhash.remove("SUS_MAX_COV");  
  String vNameBenefit = (String)zhash.get("vNameBenefit");
  zhash.remove("vNameBenefit");
  String vPosition = (String)zhash.get("vPosition");
  zhash.remove("vPosition");
  String vPlanPeriod = (String)zhash.get("SUS_ID_PLAN_PERIOD");
  zhash.remove("SUS_ID_PLAN_PERIOD");
  
  String zsubsesion = (String)zhash.get("TAG");
  zhash.remove("TAG");
  zparametro  +="TAG"+ "=" + (zsubsesion) + "{"; 
  zparametro  +="REC"+ "=" + ((String)zhash.get("REC")) + "{"; 
  zhash.remove("REC");
  zparametro  +="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
  String zAccion = ((String)zhash.get("ACC"));
  zhash.remove("ACC");
  zparametro  +="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
  zhash.remove("NOD");
  zparametro  += ((String)zhash.get("PK")) + "{";
  zhash.remove("PK");
  
  String key =""; 
  Enumeration enumhash = zhash.keys ();
  while(enumhash.hasMoreElements ()){
    key = (String) enumhash.nextElement();
      valor = (String) zhash.get(key);
      zhash.remove(key); 
    zparametro  += key + "=" + valor + "{" ;
  }
  
  String zmeta4object = zsubsesion;
  String znodo = "SSE_DEP_BENE_COV";
  String znodo2 = "SSE_COMUNICACION";
  String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
  String zmetodo = zsubsesion + "!" + znodo + ".SSE_GESTION";
  String zraiz = zsubsesion + "!" + znodo2 + ".";
  if (zAccion.equals("BORRAR")) {
    znodo = "SSE_PRINCIPAL";
    zmetodo = zsubsesion + "!" + znodo + ".GESTION";
  }
%>
<script>
function navegar()
{
  m4submit("BENEFIT");
}
</script>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="GESTION_ARG" value="<%=zparametro%>"/></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%
  String zerror = "0";
  String zredireccion = "";
  try {
      M4Operations m = new M4Operations(request);
      zerror = m.getItem(znodo,zsubsesion,znodo2,"","TIPO_DEBUG");
      zredireccion = m.getItem(znodo,zsubsesion,znodo2,"","JSP_REDIRECCION");
  } catch(Exception e) {}

  if ((zredireccion==null)){
     zredireccion = "ERROR";
  }else{
}

%>

<head>
<form action="<%=zredireccion%>" method="post" name="BENEFIT" id="BENEFIT">
<input type="hidden" id="SUS_ID_PLAN" name="SUS_ID_PLAN" value="<%=vPlan%>" />
<input type="hidden" id="SUS_OR_H_EE_BNFT" name="SUS_OR_H_EE_BNFT" value="<%=vOrPlan%>" />
<input type="hidden" id="SUS_ID_HR" name="SUS_ID_HR" value="<%=vIdHr%>" />
<input type="hidden" id="SUS_OR_HR_PERIOD" name="SUS_OR_HR_PERIOD" value="<%=vOrPeriod%>" />
<input type="hidden" id="SUS_DT_START" name="SUS_DT_START" value="<%=vDtStart%>" />
<input type="hidden" id="SUS_DT_END" name="SUS_DT_END" value="<%=vDtEnd%>" />
<input type="hidden" id="SUS_ID_OPTION" name="SUS_ID_OPTION" value="<%=vOption%>" />
<input type="hidden" id="SUS_ID_COV_CAT" name="SUS_ID_COV_CAT" value="<%=vCovCat%>" />
<input type="hidden" id="SUS_MAX_COV" name="SUS_MAX_COV" value="<%=vMaxCov%>" />
<input type="hidden" id="vNameBenefit" name="vNameBenefit" value="<%=vNameBenefit%>" />
<input type="hidden" id="vPosition" name="vPosition" value="<%=vPosition%>" />
<input type="hidden" id="SUS_ID_PLAN_PERIOD" name="SUS_ID_PLAN_PERIOD" value="<%=vPlanPeriod%>" />
</form>
<title><%=TranEss.getProperty("bft_ess.BenefitsDep")%></title>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head> 
<body>

<%@include file="../../sse_generico/portugues/generico_actualizar_cuerpo.jsp"%>
 <script type="text/javascript" language="Javascript1.5"><!--
navegar();
--></script>
<m4:endpage/>
</body>
