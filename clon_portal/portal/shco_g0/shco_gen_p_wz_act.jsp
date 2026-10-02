<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_p_wz_act.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%
String nombre = "";
String valor = "";
String ristraErr = "";
	
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
String zRedireccionAct=(String)zhash.get("zredireccion");
zhash.remove("zredireccion");
String zWzIndex=(String)zhash.get("WZINDEX");
zhash.remove("WZINDEX");
String zLoadType=(String)zhash.get("LOADTYPE");
zhash.remove("LOADTYPE");
String zretpage=(String)zhash.get("retpage");
zhash.remove("retpage");

String zSaveProcess=(String)zhash.get("SAVE_PROCESS");
zhash.remove("SAVE_PROCESS");
String zExecuteProcess=(String)zhash.get("EXECUTE_PROCESS");
zhash.remove("EXECUTE_PROCESS");
//************************************************************

//************************************************************


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
	String zMetodoSave = zm4object + "!" + znodoraiz + ".SHCO_P_SAVE_PROCESS";
	if(zLoadType!=null && (!zLoadType.equals(""))){zLoadTypeStep=Integer.parseInt(zLoadType);}
	if(zWzIndex!=null && (!zWzIndex.equals(""))){zIndexWizard=Integer.parseInt(zWzIndex);}
	ztipocarga = "" + (zLoadTypeStep);
	if (ristraErr==null || ristraErr.equals("00") || ristraErr=="") {zParametroAct="";}
	if (zCLEAN_PARAM == null || zCLEAN_PARAM.equals("")){
		zCLEAN_PARAM="0";
	}
	
	try {	
   	 M4Operations m = new M4Operations(request);
     m.setItem(zm4object,znodoraiz,"","SHCO_GN_CLEAN_PARAM",zCLEAN_PARAM);
    }catch(Exception e) {}
    zCLEAN_PARAM="1";
	%>
	

   <%if (zSaveProcess == null || zSaveProcess.equals("")){zSaveProcess="0";}
   if (zSaveProcess.equals("1")){%>   
      <m4:exec m4method="<%=zMetodoSave%>">
	  	  <m4:param name="PARAM_STRING" value="<%=zParametroAct%>"/>
	  </m4:exec> 
   <%}else{%>	
	<m4:exec m4method="<%=zMetodoAct%>">
		<m4:param name="PARAM_STRING" value="<%=zParametroAct%>"/>
		<m4:param name="PARAM_LOAD" value="<%=ztipocarga%>"/>
	</m4:exec>
  <%}%>

  <%@ include file="../shco_g0/shco_gen_delete_cache.jsp" %>
