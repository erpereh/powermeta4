<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>

<%@ include file="../../sse_generico/sgco_gen_inc.jsp" %>
<%@ include file="../../sse_generico/sse_generico_trans.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />

<%
   String nombre = "";
   String valor = "";
  
  Hashtable zhash = new Hashtable(20);
  Enumeration oenum = request.getParameterNames();
  while(oenum.hasMoreElements ()){
    nombre = (String) oenum.nextElement();
    valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
    zhash.put (nombre,valor);
  }
  String zparametro = "";
  String zsubsesion = "";
  String zacc =(String)zhash.get("ACC");
  zparametro  ="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
  zhash.remove("ACC"); 
  if (zacc.equals("UPD")){
    zparametro  =zparametro+"SCO_ORD_ACTION"+ "=" + ((String)zhash.get("SCO_ORD_ACTION")) + "{";
    zhash.remove("SCO_ORD_ACTION"); 
    zparametro  =zparametro+"SCO_ID_ACTION_TYPE"+ "=" + ((String)zhash.get("SCO_ID_ACTION_TYPE")) + "{";
    zhash.remove("SCO_ID_ACTION_TYPE"); 
  }
  String zIdHr=(String)zhash.get("SCO_ID_HR");
  String zPeriod=(String)zhash.get("SCO_OR_HR_PERIOD");
  String zidhr_name=(String)zhash.get("zidhr_name");
  
  String key =""; 
  Enumeration enumhash = zhash.keys ();
  while(enumhash.hasMoreElements ()){
    key = (String) enumhash.nextElement();
    valor = (String) zhash.get(key);
    if (key.equals("SCO_ID_HR") || key.equals("SCO_OR_HR_PERIOD")) {valor=com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", valor);}
    zhash.remove(key); 
    zparametro  += key + "=" + valor + "{" ;
  } 
  zsubsesion ="SMCO_DEV_PLAN_ACCION";
  String zmeta4object = zsubsesion;
  String znodo = "SMCO_DEV_PLAN_ACCION";

  String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
  String zmetodo = zsubsesion + "!" + znodo + ".SMCO_ACTION";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="GESTION_ARG" value="<%=zparametro%>"/></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%

  String zredireccion = "/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp";
  zredireccion=zredireccion+"?SCO_ID_HR="+zIdHr+"&SCO_OR_HR_PERIOD="+zPeriod+"&zidhr_name="+zidhr_name;

%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">

<head><title><%=Tran.getProperty("Title.ssco_act")%></title></head> 
<body>
<br /><br /><br /><br /><br /><br /><br /><br />
<table align="center" cellpadding="0" cellspacing="0">
<tr><td class="fuenteactualizar"><%=Tran.getProperty("Label.ssco_pro")%></td></tr>
<tr><td class="fuenteactualizar2"><%=Tran.getProperty("Label.ssco_wait")%></td></tr>
</table>
<body>

  <m4:endpage/>
</body>
</html>