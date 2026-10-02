<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_act.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="shco_gen_taglib.jsp" %><html><head><title></title><%@ include file="shco_gen_portal_arg.jsp" %><%@ include file="shco_gen_bag.jsp" %><%
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

String zredireccion=(String)zhash.get("zredireccion");
zhash.remove("zredireccion");


zparametro	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
zhash.remove("ACC");

String zm4object = (String)zhash.get("M4OBJ_ID");
if ((zm4object==null)||(zm4object.equals(""))){zm4object=zsubsesion;}else{zhash.remove("M4OBJ_ID");}

String key =""; 
Enumeration enumhash = zhash.keys ();
while(enumhash.hasMoreElements ()){
	key = (String) enumhash.nextElement();
	valor = (String) zhash.get(key);
	zhash.remove(key);
	zparametro	+= key + "=" + valor + "{" ;
}	
   


String znodo = "SHCO_GN_ROOT";
String zmetodo = zm4object + "!" + znodo + ".SHCO_ACTION_TABLE";
String znodocom = "SHCO_GN_COMUNICATION";
String zoutputdefcom = zm4object + "!" + znodocom + "[*]";						//COMUN TODOS 
%>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ACTION_ARG" value="<%=zparametro%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodocom%>" ><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:endjob/><%@ include file="shco_gen_css.jsp" %><%@ include file="shco_gen_normal_js.jsp" %><%
String zerror="";
String zerror2="";
String zshco_TEXT="";
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
	zerror2 = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG2");
	zshco_TEXT = m.getItem(znodocom,zm4object,znodocom,"","SHCO_TEXT");
	
}catch(Exception e) {}	
%>
</head>	
<body>
<%if (zerror2.equals("1")) {
    try {
        M4Operations m = new M4Operations(request);
        m.initTask(zm4object);
        m.beginJob();
        m.createData(zm4object, znodocom, null);
        m.setItem(zm4object, znodocom, "0", "SHCO_ACTIVE_DEBUG2", "0");
        m.endJob();
    } catch(Exception e) {}
%>
<table>
<tr>
	<td class="fuentetitulomenu">
		Informaci&oacute;n sobre el proceso:
	</td>
</tr>
<tr>
	<td class="fuentetitulo">
		<%=zshco_TEXT%>
	</td>
</tr>
</table>

<%}else{%>
<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>
<%@ include file="shco_gen_error.jsp" %>
<script type="text/javascript">
m4navegar('/servlet/CheckSecurity/JSP/<%=zredireccion%>');
</script>
<%}%>
<m4:endpage/>
</body>
</html>