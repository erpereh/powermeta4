<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html>
<%
  String nombre = "";
  String nombreAux = "";
  String valor = "";
  String valorEncr = "";
  int nPos = 0;
  
  String[] sElemEncr={"0_SCO_ID_HR_0","0_SCO_OR_HR_ROLE_0","0_SCO_DT_START_EVAL_0","0_SCO_OR_HR_PERIOD_0","0_SCO_ID_DOC_0",
  "0_SSE_ID_HR_0","0_SSE_OR_HR_PERIOD_0","0_SCO_ID_EVALUATOR_0","0_SCO_OR_EVALUATOR_0","0_IDRH_0","0_RHRole_0","0_DTStartEval_0","0_SCO_ID_PERSON_0"};
  Arrays.sort(sElemEncr);

  Hashtable zhash = new Hashtable(20);
  Enumeration oenum = request.getParameterNames();
  while(oenum.hasMoreElements ()){
    nombre = (String) oenum.nextElement();
	nombreAux = "0_" + nombre + "_0";
	valorEncr = com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
	nPos = Arrays.binarySearch(sElemEncr, nombreAux);
	if (nPos >= 0){
	  valor = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", valorEncr); 
	}else{
	  valor = valorEncr;
	}
    zhash.put (nombre,valor);
  }
  
  String zparametro = "";
  String zsubsesion = (String)zhash.get("TAG");
  zhash.remove("TAG");
  zparametro	+="TAG"+ "=" + (zsubsesion) + "{"; 
  zparametro	+="REC"+ "=" + ((String)zhash.get("REC")) + "{"; 
  zhash.remove("REC");
  zparametro	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
  zhash.remove("ACC"); 
  zparametro	+="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
  zhash.remove("NOD");
  
  String key =""; 
  Enumeration enumhash = zhash.keys ();
  while(enumhash.hasMoreElements ()){
    key = (String) enumhash.nextElement();
    valor = (String) zhash.get(key);
    zhash.remove(key); 
    zparametro	+= key + "=" + valor + "{" ;
  }	
  
  //String _SERVER="+"http://"+ request.getServerName()+":"+ request.getServerPort()";
  String zmeta4object = zsubsesion;
  String znodo = "SSE_PRINCIPAL";
  String znodo2 = "SSE_COMUNICACION";
  String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
  String zmetodo = zsubsesion + "!" + znodo + ".GESTION";
  String zraiz = zsubsesion + "!" + znodo2 + ".";
%>
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
	zredireccion = com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zredireccion);
%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
<%
}
%>
<head>
<title>Actualizacion</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
  <script type="text/javascript" src="/library/jquery-2.1.3.min.js"></script>
</head>	
<body>
<%@include file="/m4trans/m4custom/IBER/sse_generico/espanol/0-generico_actualizar_cuerpo.jsp"%>
<m4:endpage/>
</body>
</html>