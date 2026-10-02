<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_ss_act.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="shco_gen_taglib.jsp" %>
<html>
<%
   String nombre = "";
   String valor = "";
	
	Hashtable zhash = new Hashtable(20);
	Enumeration oEnum = request.getParameterNames();
	   while(oEnum.hasMoreElements ()){
			 nombre = (String) oEnum.nextElement();
			 valor =  request.getParameter(nombre);
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





   
   String zmeta4object = zsubsesion;
   String znodo = "SHCO_GN_ROOT";
   String znodo2 = "SHCO_GN_COMUNICATION";
   String zoutputdef = zsubsesion + "!" + znodo2 + "[*]";   
   String zmetodo = zsubsesion + "!" + znodo + ".SHCO_MAKER_WF";
   String zraiz = zsubsesion + "!" + znodo2 + ".";
%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="LONG_ARG" value="<%=zparametro%>"/></m4:exec>	
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<%

	String zerror = "0";
	String zredireccion = "";
	try {
	    M4Operations m = new M4Operations(request);
	    zerror = m.getItem(znodo,zsubsesion,znodo2,"","SHCO_ACTIVE_DEBUG");
	    zredireccion = m.getItem(znodo,zsubsesion,znodo2,"","SHCO_STRING");	    
	} catch(Exception e) {}

	if ((zredireccion==null)){
	   zredireccion = "ERROR";
	}else{
	
%>
<meta http-equiv='refresh' content="2; URL=<%=zredireccion%>">
<%
}
%>
<head>
<title>Actualizacion</title>
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
</head>	
<body>
<%@include file="../shco_g0/shco_gen_act_body.jsp"%>
<m4:endpage/>
</body>
</html>