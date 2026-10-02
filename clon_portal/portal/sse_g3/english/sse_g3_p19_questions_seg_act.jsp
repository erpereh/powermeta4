<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd"> 
<html>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
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
String zsubsesion = (String)zhash.get("TAG");
zhash.remove("TAG");
zparametro	+="TAG"+ "=" + (zsubsesion) + "{"; 
	zparametro	+="REC"+ "=" + ((String)zhash.get("REC")) + "{"; 
	zhash.remove("REC");
zparametro	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
zhash.remove("ACC"); 
zparametro	+="SSE_TEMPORAL"+ "=" + ((String)zhash.get("SSE_TEMPORAL")) + "{";
zparametro	+="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
zhash.remove("NOD");

String spos=(String)zhash.get("spos");
zhash.remove("spos");
String sResult=(String)zhash.get("SSE_CAL_QUESTION");

if ((sResult==null)||(sResult.equals(""))){sResult = "0";}
String mss=(String)zhash.get("mss");
zhash.remove("mss");
String id_cap=(String)zhash.get("SSE_CONOCIMIENTO_TEMP");
String key =""; 
Enumeration enumhash = zhash.keys ();
while(enumhash.hasMoreElements ()){
	key = (String) enumhash.nextElement();
	valor = (String) zhash.get(key);
	zhash.remove(key); 
	zparametro	+= key + "=" + valor + "{" ;
}	
	
   
   String zmeta4object = zsubsesion;
   String znodo = "SSE_PRINCIPAL";
   String znodo2 = "SSE_COMUNICACION";
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";   
   String zmetodo = zsubsesion + "!" + znodo + ".GESTION";
   String zraiz = zsubsesion + "!" + znodo + ".";
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="GESTION_ARG" value="<%=zparametro%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:endjob/>


<%
	String zerror = "";
	String zredireccion = "";
	try {
	    M4Operations m = new M4Operations(request);
	    zerror = m.getItem(znodo2,zsubsesion,znodo2,"","TIPO_DEBUG");
	    zredireccion = m.getItem(znodo2,zsubsesion,znodo2,"","JSP_REDIRECCION");	    
	} catch(Exception e) {}

zredireccion="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19_questions_seg.jsp?id_cap="+id_cap+"&spos="+spos+"&sResult="+sResult+"&mss="+mss;
%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">	
<head>
<title>Actualizacion</title>

	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script> 
</head>	
<body>
	<%@ include file="../../sse_generico/english/generico_actualizar_cuerpo.jsp" %>

</body>
	<m4:endpage/>
</html>