<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_act.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_gen_taglib.jsp" %><html><head><title></title>
<%@ include file="../shco_gen_arg.jsp" %><%@ include file="../shco_gen_bag.jsp" %>
<%@ include file="../shco_gen_css.jsp" %><%@ include file="../shco_gen_normal_js.jsp" %>
<%

String zdireccion = ""; 
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
String znodolabel = "SHCO_GN_LABEL";
String zoutputdeflabel = zm4object + "!" + znodolabel + "[*]";
String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";
String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";

String znodo3="SHCO_GN_LOGS";
String zoutputdef3 = zm4object + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
String zraiz3 =  znodo3 + ":" + zm4object  + "!" + znodo3 + ".";
String zcomun3 = znodo3 + ":" + zm4object + "!" + znodo3 + "[&VAR.m4lix]" + ".";

String zcampoID = "SHCO_LOG_TYPE";	
String zcampoNombre = "SHCO_LOG_TEXT";
String zIdPk = zcomun3 + zcampoID;
String zNPk = zcomun3 + zcampoNombre;
%><%@ include file="../shco_gen_label.jsp" %>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zmetodo%>"><m4:param name="ACTION_ARG" value="<%=zparametro%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodocom%>" ><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolabel%>" ><m4:param name="m4name0" value="<%=zoutputdeflabel%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove3%>"/></m4:move>
<%
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
<%int  zcount3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount3 = m.getCount(znodo3,zm4object,znodo3);
} catch(Exception e) {}
String	zcountv3 = String.valueOf(zcount3);
%>
</head>
<body>
<%if (zerror2.equals("1") == true){%>
<%@include file="../../shco_g0/shco_gen_title.jsp" %><%@ include file="../../shco_g0/shco_gen_menusup.jsp" %>
<form action=" " method="post" name="NombreFormulario" id="NombreFormulario" >	
<table class="error" width="100%" cellpadding="0" cellspacing="2" >

<tr><td class="tit" colspan="2"><m4:label m4name="<%=zSHCOLBTITERROR%>" htmlsafe="true"/></td></tr>

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<m4:item  m4varname="zTipErr" m4name="<%=zIdPk%>" htmlsafe="true"/>
<tr>
<%if (zTipErr.equals("-1")){%>
 	<td class="text">
	<img alt="<m4:label m4name="<%=zSHCOLBERR%>" htmlsafe="true"/>" <%@ include file="../../files_gif/ic_err.jsp" %> />
<%}else if (zTipErr.equals("0")){%>
	<td class="textw">
	<img alt="<m4:label m4name="<%=zSHCOLBWARNING%>" htmlsafe="true"/>" <%@ include file="../../files_gif/ic_warnig.jsp" %> />
<%}else{%>
	<td class="textinfo">
	<img alt="<m4:label m4name="<%=zSHCOLBINFO%>" htmlsafe="true"/>" <%@ include file="../../files_gif/ic_info.jsp" %> />
<%}%>
	&nbsp;<m4:item m4name="<%=zNPk%>" htmlsafe="true"/></td>
</tr>		
</m4:loop>
<tr>
<td class="boton">
<input id ="Back" name="back" tabindex="1"type="button" class="boton" onclick="history.back();" value="<m4:label m4name="<%=zSHCOLBBACK%>" htmlsafe="true"/> " />
</tr>
</table>
</form>
<%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %>
<%}else{%>
<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>
<%@ include file="../shco_gen_error.jsp" %>
<script type="text/javascript">
m4navegar('/servlet/CheckSecurity/JSP/<%=zredireccion%>');
</script>
<%}%>
<m4:endpage/>
</body>
</html>