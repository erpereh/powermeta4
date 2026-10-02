<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_portal_load.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_menus_load.jsp"%>
<%
// tienen que haberse definido zsubsesion, zm4object, znodoraiz, znodo, ztipocarga (portal_arg)
// no tiene que haberse ejecutado antes shco_gen_bag.jsp
// tien

// Metodo de carga del Meta4Object generico
String zmetodocarga = zm4object + "!" + znodoraiz + ".SHCO_LOAD";
String zmetodocargamenus = zm4object + "!" + znodoraiz + ".SHCO_LOAD_MENUS";
String zoutputdef = "";
String zmove = "";
String znodocom = "SHCO_GN_COMUNICATION";
String zoutputdefcom = zm4object + "!" + znodocom + "[*]";	

// Recoger la información del directorio temporal del webserver para pasar los ficheros
// de los menus
M4SessionManager zsessionmng = M4Context.getSession(request);
String zmapwebservertemppath  = (String) zsessionmng.getPathTempMapping();
String separator="/";
zmapwebservertemppath = zmapwebservertemppath.replace('/',separator.charAt(0));
zmapwebservertemppath = zmapwebservertemppath.replace('\\',separator.charAt(0));
String zrootmenuid = request.getParameter("_app_mn");
if (zrootmenuid==null ||zrootmenuid.equals("")){
   //Tomamos el menu raiz del parámetro de aplicacion.
   zrootmenuid="";
  %><m4:getapplparam section="PORTAL_PARAM" key="_APP_MN" output="jsp"/><% 
   zrootmenuid = (String)pageContext.getAttribute("_APP_MN"); 
}

zoutputdef = zm4object + "!" + znodo + "[*]";
	zmove = znodo + ":" +znodo + "[BEGIN]";	

%>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="LOAD_TYPE_ARG" value="<%=ztipocarga%>"/></m4:exec>

<m4:getapplparam section="PORTAL_PARAM" key="NAV_RC" output="jsp"/>

<% //Comprobar si en Navegación Rich Client, para el producto tecnológico se sobreescribe
 String zNavRichClient = (String)pageContext.getAttribute("NAV_RC");
 if(zsessionmng.getProductID().toLowerCase().equals("tec")){zNavRichClient="0";}  
%>
<% // Parametrización de la carga por producto
if ("1".equals(g_zLoadStdMenus) && "0".equals(zNavRichClient) ){%>
<m4:exec m4method="<%=zmetodocargamenus%>"><m4:param name="ROOT_MENU_ID_ARG" value="<%=zrootmenuid%>"/><m4:param name="WSERVER_TEMP_PATH_ARG" value="<%=zmapwebservertemppath%>"/></m4:exec>
<%}%>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zm4object%>" value="<%=zmove%>"/></m4:move>

<%
String zerror="";
String zerror2="";
String zshco_TEXT="";
//zerrornivel2 = "0";
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
	zerror2 = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG2");
	zshco_TEXT = m.getItem(znodocom,zm4object,znodocom,"","SHCO_TEXT");
	
}catch(Exception e) {}	
%>

