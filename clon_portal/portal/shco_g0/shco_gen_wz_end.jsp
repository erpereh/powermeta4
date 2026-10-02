<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_end.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="shco_gen_taglib.jsp" %><%@ include file="shco_gen_portal_arg.jsp" %><%@ include file="shco_gen_bag.jsp" %>
<html><head>
<%@ include file="shco_gen_normal_js.jsp" %>
<%

String nombre = "";
String valor = "";
String zActionEnd = "";
	
Hashtable zhash = new Hashtable(30);
Enumeration oEnum = request.getParameterNames();
while(oEnum.hasMoreElements ()){
	nombre = (String) oEnum.nextElement();
	valor =  request.getParameter(nombre);
	zhash.put (nombre,valor);
}
String zParametroAct = "";

//**********************************************************  
//* Datos que no van al canal 
//**********************************************************
String zSubsesionAct = (String)zhash.get("TAG");
zhash.remove("TAG");

String zm4objectAct = (String)zhash.get("M4OBJ_ID");
if ((zm4objectAct==null)||(zm4objectAct.equals(""))){zm4objectAct=zSubsesionAct;}else{zhash.remove("M4OBJ_ID");}

String zRedireccionAct=(String)zhash.get("zredireccion");
zhash.remove("zredireccion");
String zWzIndex=(String)zhash.get("WZINDEX");
zhash.remove("WZINDEX");
String zLoadType=(String)zhash.get("LOADTYPE");
zhash.remove("LOADTYPE");
//************************************************************

//************************************************************

zParametroAct	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
zActionEnd = ((String)zhash.get("ACC"));
zhash.remove("ACC");

	zParametroAct	+="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
	zhash.remove("NOD");

	String key =""; 

	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
		key = (String) enumhash.nextElement();
		valor = (String) zhash.get(key);
		zhash.remove(key);
		zParametroAct	+= key + "=" + valor + "{" ;
	}
	String znodoraiz = "SHCO_GN_ROOT";
	String zMetodoEnd = zm4objectAct + "!" + znodoraiz + ".SHCO_WZ_END_TMP_PROCESS";
	if (zActionEnd==null) {zParametroAct="";}
	%>

	<m4:startpage m4task="<%=zSubsesionAct%>"/><m4:beginjob/>
	<m4:datadef m4o="<%=zm4objectAct%>" m4name="<%=zm4objectAct%>"/>
	<m4:exec m4method="<%=zMetodoEnd%>">
		<m4:param name="ARG_MODE" value="<%=zActionEnd%>"/>
		<m4:param name="ARG_STRING" value="<%=zParametroAct%>"/>
	</m4:exec>
	<m4:endjob/>
	</head>	
	<body><%@ include file="/shco_g0/shco_gen_act_body.jsp" %>
	<script type="text/javascript">
		m4navegar('/servlet/CheckSecurity/JSP/<%=zRedireccionAct%>');
	</script>

	<m4:endpage/>
	</body>
	</html>
