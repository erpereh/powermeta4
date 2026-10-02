<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_wz_act.jsp
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

String zNewGnWz = (String)zhash.get("znw");


if (zNewGnWz==null || zNewGnWz.equals("") || zNewGnWz=="") {
   String zNewGnWz2 = (String)zhash.get("zN");
   if (zNewGnWz2==null || zNewGnWz2.equals("") || zNewGnWz2=="") {
   zNewGnWz="0";
   }else{
   zNewGnWz=zNewGnWz2;
   }
}

try {	
   	 M4Operations m = new M4Operations(request);
     m.setItem(zm4object,znodoraiz,"","SHCO_GN_WZ_NEW",zNewGnWz);
    }catch(Exception e) {}

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
//************************************************************

//************************************************************

zParametroAct	+="ACC"+ "=" + ((String)zhash.get("ACC")) + "{";
ristraErr = ((String)zhash.get("ACC"));
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


	String zMetodoAct = zm4object + "!" + znodoraiz + ".SHCO_WZ_ACTION_LOAD";
	if(zLoadType!=null && (!zLoadType.equals(""))){zLoadTypeStep=Integer.parseInt(zLoadType);}
	if(zWzIndex!=null && (!zWzIndex.equals(""))){zIndexWizard=Integer.parseInt(zWzIndex);}
	ztipocarga = "" + (zLoadTypeStep);
	if (ristraErr==null || ristraErr.equals("00") || ristraErr=="") {zParametroAct="";}

	%>
	
	<m4:exec m4method="<%=zMetodoAct%>">
		<m4:param name="PARAM_STRING" value="<%=zParametroAct%>"/>
		<m4:param name="PARAM_LOAD" value="<%=ztipocarga%>"/>
	</m4:exec>

