<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_exec_process.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ page import = "com.meta4.Task.*" %>
<html><head><title></title>	

<body>
		   
<%@ include file="../shco_g0/shco_gen_arg.jsp" %><%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../shco_g0/shco_gen_css.jsp" %><%@ include file="../shco_g0/shco_gen_normal_js.jsp" %>
<%
	String zidwkitem = request.getParameter("ID_WORKITEM");
	String ai_taskid = request.getParameter("ID_TASK");
	String ai_tasktype = request.getParameter("ID_TYPE");
	String zsubsesion =  request.getParameter("zsubsesion");
	String znodowklist = request.getParameter("znodowklist");
	String zredireccion = "shco_td/shco_td_exec_process.jsp";
	String sTaskExePath = null;
%>
<%
    String zm4object =  zsubsesion;
	
	//Nodos a usar
	String znodo = znodowklist;
	String znodo2 = "SHCO_TD_WZ_WKITEM_PARAMS";
	String znodoraiz = znodo+":"+zsubsesion + "!" + znodo + ".";
    String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
	String znodocom = "SHCO_GN_COMUNICATION";

	// Items que usar
	String zParamNameItem = "PARAM_NAME";
	String zParamValueItem = "PARAM_VALUE";
	String zParamValuesItem ="SHCO_TD_PERSONAL_WKLIST_F";
	String zIdWorkItemItem = "ID_WORKITEM";
	
	//Campos a utilizar
	String zGetPageParamValuesMethod = "GetParamValues:"+zsubsesion + "!" + znodo + "." +"SHCO_GET_PARAM_VALUES";
	String zSetStatusToFinishMethod =  "SetStatusFinish:"+zsubsesion + "!" + znodo + "." + "SHCO_SET_FINISH_WKITEM";	
	String zParamValuesItemr = znodoraiz+zParamValuesItem;
	String zParamValuec = zcomun2 + zParamValueItem;
	String zParamNamec = zcomun2 + zParamNameItem;
		
	String zoutputdef = zsubsesion + "!" + znodo + "[*]";
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
    String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
	String zmove2 =znodo2 + ":" +znodo2 + "[FIRST]";
%>

<%@ include file="../shco_g0/shco_gen_act_body.jsp" %>
<%-- start application server transactions --%>
<m4:startpage m4task="<%=zsubsesion%>"/>
	<m4:beginjob/>
		<m4:datadef m4o="<%=zm4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=zGetPageParamValuesMethod%>">
				<m4:param name="AI_ID_WORKITEM" value="<%=zidwkitem%>"/>
		</m4:exec>
		<m4:exec m4method="<%=zSetStatusToFinishMethod%>">
				 <m4:param name="AI_ID_WKITEM" value="<%=zidwkitem%>"/>
		</m4:exec>
		<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodocom%>"><m4:param name="m4name0" value="<%=zoutputdefcom%>"/></m4:outputdef>
	<m4:endjob/>
    <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<%
String zerror="";
String zerror2="";
String zshco_TEXT="";
zerrornivel2 = "0";
int zcount2 = 0;
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
	zerror2 = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG2");
	zshco_TEXT = m.getItem(znodocom,zm4object,znodocom,"","SHCO_TEXT");
    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
} catch(Exception e) {}
%>


<form action="" method="post" name="NombreFormulario" id="NombreFormulario" >
<%
//Obtenemos el InitTaskPage
    String sInitTaskPage= new String("");
	if (ai_taskid != null)	{ai_taskid = ai_taskid.toLowerCase();}
	try	{
		Task theTask = ListTask.getTask(ai_taskid + "_4");		
		if (theTask==null)	{
		   sTaskExePath=null;
		}else{
			sInitTaskPage = theTask.getInitTaskPage();
		}
	}catch (Exception e){sTaskExePath = null;}
	
   if (sInitTaskPage != null){ 
     if (zcount2==0){
	 	sTaskExePath =  sInitTaskPage;
	 }else{    	  //Sustitucion de los parametros
         int iParamIndex= 0;
		 int iLastIndex = 0;
		 String sInitTaskPageAux = new String("");
		 String zsPARAM_SEP = new String("##");
		%>	 
    	<m4:loop from="0" to="<%=String.valueOf(zcount2-1)%>">
          <m4:item m4name="<%=zParamNamec%>" m4varname="zParamName"/>
  	  	  <m4:item m4name="<%=zParamValuec%>" m4varname="zParamValue"/>
  	  	  <%
		  	iParamIndex = sInitTaskPage.indexOf(zsPARAM_SEP+zParamName+zsPARAM_SEP);
			if (iParamIndex != -1){
			    sInitTaskPageAux += sInitTaskPage.substring(iLastIndex,iParamIndex);
				sInitTaskPageAux += zParamValue;
				iLastIndex=iParamIndex+zParamName.length()+(2*zsPARAM_SEP.length());
			}
		 %> 
      </m4:loop>
	 <% sTaskExePath = sInitTaskPageAux;
	  if (sTaskExePath.indexOf("/") == 0){sTaskExePath = sTaskExePath.substring(1,sTaskExePath.length());}
	}
	%>
     <script type="text/javascript">
		opener.RefreshPage();
		var sjTaskExePath = "<%=sTaskExePath %>";
		if (sjTaskExePath.indexOf("/") == 0) {sjTaskExePath = sjTaskExePath.substring(1);}
	    var sURL = "/servlet/CheckSecurity/JSP/" + sjTaskExePath;	
   	    if (document.images){ 
		   	location.replace(sURL);	
		}else{ 
        	location.href =sURL;
        }
   	   </script>
</form> 
  <%}%>
<m4:endpage/>
</body>
</html>


