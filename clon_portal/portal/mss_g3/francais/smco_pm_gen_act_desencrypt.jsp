<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@ include file="/sse_generico/sse_generico_trans.jsp"%>
<%
   String nombre = "";
   String valor = "";
   String valorDesencrypt = "";
  
  Hashtable zhash = new Hashtable(20);
  Enumeration oenum = request.getParameterNames();
     while(oenum.hasMoreElements ()){
       nombre = (String) oenum.nextElement();
       valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre);
       if (nombre.equals("SRCO_ID_HR")){
          valorDesencrypt = valor.substring(0,valor.indexOf("{SRCO_OR_HR_PERIOD"));
          valorDesencrypt = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "EncCorp76", valorDesencrypt);
          valor = valorDesencrypt + valor.substring(valor.indexOf("{SRCO_OR_HR_PERIOD"));
          valorDesencrypt = valor;
       }
      zhash.put (nombre,valor);
  }
   String zparametro = "";
   String zsubsesion = (String)zhash.get("TAG");
  zhash.remove("TAG");
  zparametro  +="TAG"+ "=" + (zsubsesion) + "{"; 
  zparametro  +="REC"+ "=" + ((String)zhash.get("REC")) + "{"; 
  zhash.remove("REC");
  zparametro  +="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
  zhash.remove("ACC"); 
  zparametro  +="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
  zhash.remove("NOD");
  
  String key =""; 
  Enumeration enumhash = zhash.keys ();
  while(enumhash.hasMoreElements ()){
       key = (String) enumhash.nextElement();
          valor = (String) zhash.get(key);
          zhash.remove(key); 
        zparametro  += key + "=" + valor + "{" ;
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
<title><%=Tran.getProperty("Label.LblUpdate")%></title>
  <link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head> 
<body>
<m4:endpage/>
<%@include file="/sse_generico/francais/generico_actualizar_cuerpo.jsp"%>  
</body>
</html>