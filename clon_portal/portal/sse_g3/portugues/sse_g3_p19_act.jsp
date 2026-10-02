<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
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
	String mss = (String) zhash.get("mss");;
	String id = (String) zhash.get("id");;
	String ordinal1 = (String) zhash.get("ordinal1");	
	String inicioev = (String) zhash.get("inicioev");
	String tecnica = (String) zhash.get("tecnica");
	String nombreper= (String) zhash.get("nombreper");;
	String NombreProceso= (String) zhash.get("NombreProceso");
	String temporal = (String) zhash.get("SSE_TEMPORAL");

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
	String zerror = "0";
	String zredireccion = "";
	try {
	    M4Operations m = new M4Operations(request);
	    zerror = m.getItem(znodo2,zsubsesion,znodo2,"","TIPO_DEBUG");
	    zredireccion = m.getItem(znodo2,zsubsesion,znodo2,"","JSP_REDIRECCION");	    
	} catch(Exception e) {}
	%>

<%
	if (zredireccion==null)
	{
	   zredireccion = "ERROR";
	   zerror = "N" ;
	}
	else
	{
		if (temporal.equals("1")) 
		{
			zredireccion = "/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19_mod.jsp?estado=31" ;
		}
	}
	zredireccion = zredireccion  + "&mss=" + mss + "&id=" + id + "&ordinal1="+ordinal1+"&inicioev="+inicioev+"&tecnica="+tecnica+"&nombreper="+nombreper+"&NombreProceso="+NombreProceso;
	
%>

<head>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
<title>Actualizacion</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
</head>	
<body>

<%@ include file="../../sse_generico/portugues/generico_actualizar_cuerpo.jsp" %>
<m4:endpage/>
</body>
