<%
String zCLEAN_PARAM = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"CLEAN_PARAM");
String zsubsesion = zm4object+"_SUB";
int zLoadTypeStep = 1;         // Tipo de carga 
int zIndexWizard  = 0;         // Indice de control
String znodoraiz  = "SHCO_GN_ROOT";  
String znodolabel = "SHCO_GN_LABEL";
String znodocom = "SHCO_GN_COMUNICATION";

String zraiz =  znodoview + ":" + zm4object  + "!" + znodoview + ".";
String zraizlabel =  znodolabel + ":" + zm4object  + "!" + znodolabel + ".";
String zmovelab = znodolabel + ":" + znodolabel + "[0]";
%>
<%@ include file="../shco_g0/shco_gen_label.jsp" %>
<%
String zSHCOLBEXEC = zraizlabel + "SHCO_LB_EXEC";
%>

<%@ include file="../shco_g0/shco_gen_set_sec_role_begin.jsp" %>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/><m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<%
String nombre2 = "";
String valor = "";
String ristraErr = "";

Hashtable zhash = new Hashtable(30);
Enumeration oEnum = request.getParameterNames();

while(oEnum.hasMoreElements ()){
	nombre2 = (String) oEnum.nextElement();
	valor =  com.meta4.taglib.util.M4SafeRequest.getParameter(request,nombre2);
	zhash.put (nombre2,valor);
}
String zParametroAct = "";


String zSubsesionAct = (String)zhash.get("TAG");
zhash.remove("TAG");
String zRedireccionAct=(String)zhash.get("zredireccion");
zhash.remove("zredireccion");
String zWzIndex=(String)zhash.get("WZINDEX");
zhash.remove("WZINDEX");
String zLoadType=(String)zhash.get("LOADTYPE");
zhash.remove("LOADTYPE");
String zretpage=(String)zhash.get("retpage");
zhash.remove("retpage");
ristraErr = ((String)zhash.get("NOD"));
zParametroAct	="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";
zhash.remove("NOD");
String key =""; 

	Enumeration enumhash = zhash.keys ();
	while(enumhash.hasMoreElements ()){
		key = (String) enumhash.nextElement();
		valor = (String) zhash.get(key);
		zhash.remove(key);
		zParametroAct	+= key + "=" + valor + "{" ;
	}


	String zMetodoAct = zm4object + "!" + znodoraiz + ".SHCO_P_WZ_ACTION_LOAD";
	
	if(zLoadType!=null && (!zLoadType.equals(""))){zLoadTypeStep=Integer.parseInt(zLoadType);}
	if(zWzIndex!=null && (!zWzIndex.equals(""))){zIndexWizard=Integer.parseInt(zWzIndex);}
	ztipocarga = "" + (zLoadTypeStep);
	if (ristraErr==null || ristraErr.equals("00") || ristraErr=="") {zParametroAct="";}

	%>
	

	
<m4:exec m4method="<%=zMetodoAct%>">
	<m4:param name="PARAM_STRING" value="<%=zParametroAct%>"/>
	<m4:param name="PARAM_LOAD" value="<%=ztipocarga%>"/>
</m4:exec>
<m4:outputdef m4alias="<%=znodoview%>" m4object="<%=zm4object%>" node="<%=znodoview%>" records="*"/>
