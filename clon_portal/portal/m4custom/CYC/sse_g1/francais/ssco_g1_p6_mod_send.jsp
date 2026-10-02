<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
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
	String zTypeAcc = ((String)zhash.get("ACC"));
	zhash.remove("ACC"); 
	zparametro	+="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
zhash.remove("NOD");
	zhash.remove("SCO_ID_DOC");
	
	String zvis= (String)zhash.get("zvis");
	String zT= (String)zhash.get("zT");
	String zfiltrogroup= (String)zhash.get("zfiltrogroup");
	if ((zvis==null)||(zvis.equals(""))){zvis="0";}
	if ((zT==null)||(zT.equals(""))){zT = "";}
	if ((zfiltrogroup==null)||(zfiltrogroup.equals(""))){zfiltrogroup = "";}
	zhash.remove("zvis");
	zhash.remove("zfiltrogroup");
		
	zhash.remove("zT");
	if ((zT==null)||(zT.equals(""))){zT = "";}
	if ((zvis==null)||(zvis.equals(""))){zvis="0";}
	if ((zfiltrogroup==null)||(zfiltrogroup.equals(""))){zfiltrogroup = "";}
	
		
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
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
   String zmetodo = zsubsesion + "!" + znodo + ".GESTION";
   String zraiz = zsubsesion + "!" + znodo2 + ".";
   String sgtc_zNMInputIDDOC = "SCO_ID_DOC";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>	
<%if (!(zTypeAcc.equals("BORRAR"))){%>
	<%@ include file="../../tc_docs/tc_doc_save_include.jsp" %>
	 <% String zsavedoc = ztcSaveDOCID; 
	 	zparametro	+= "SCO_ID_DOC" + "=" + zsavedoc + "{" ;
	 
	 %>
	 <%}%>
<m4:beginjob/>
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

<head>
<title>Actualizacion</title>
	

</head>	
<body>
<%@include file="../../sse_generico/francais/generico_actualizar_cuerpo.jsp"%>
<%if (zvis.equals("0")){%>

<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
<%}else{%>
<script type="text/javascript" language="Javascript1.5"><!--
	if (window.opener && !window.opener.closed){

	window.opener.location = "/servlet/CheckSecurity/JSP/sse_g1/ssco_g1_p6_mod2.jsp?zfiltrogroup="+'<%=zfiltrogroup%>'+"&zT="+'<%=zT%>';
	}
	window.close();
--></script>
<%}%>
<%}%>
<m4:endpage/>
</body>
