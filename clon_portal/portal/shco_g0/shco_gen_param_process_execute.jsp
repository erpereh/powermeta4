<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_param_process_execute.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%
   // M4Object parameters:
  String zm4object = "TC_RP_PARAM_PAGE_MAKER";
  String znodocom = "SHCO_GN_COMUNICATION";

   //Page parameters: 
   String zparamvalstring = request.getParameter("zparamvalstring");
   String zitemvalstring = request.getParameter("zitemvalstring");
   String zsubsesion = request.getParameter ("zsubsesion");
   String zprocesspage = request.getParameter ("zprocesspage"); 
%>

<%@ include file="../shco_g0/shco_gen_arg.jsp" %><%@ include file="../shco_g0/shco_gen_bag.jsp" %>
</head><body>  
<%@ include file="../shco_g0/shco_gen_datadef.jsp" %>
<m4:beginjob/>
     <m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4object%>"/>   
   	 <m4:exec alias="EXECUTE_PROCESS" m4object='<%=zm4object%>' node="TC_RP_PARAM_API" method="EXECUTE_PROCESS">
		<m4:param name="ARG_PARAM_VAL_STRING" value='<%=zparamvalstring%>'/>
		<m4:param name="ARG_ITEM_VAL_STRING" value='<%=zitemvalstring%>'/>
	 </m4:exec>		
	 <m4:outputdef m4alias="<%=znodocom%>" m4object='<%=zm4object%>' node="<%=znodocom%>" records="*"></m4:outputdef>		
<m4:endjob/>
<m4:outputexec m4alias="EXECUTE_PROCESS" m4varname="zExecuteProcessReturn"/>

<% if (zExecuteProcessReturn==null){zExecuteProcessReturn ="-1";}%> 
<%if (zExecuteProcessReturn.equals("-1")){
  String zerror="";
  String zshco_TEXT="";
  try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG");
   }catch(Exception e) {}	
  %>
  <%@ include file="../shco_g0/shco_gen_error.jsp" %>
 <script type="text/JavaScript">window.history.go(-1);</script>
<%}else{%>
   <%@ include file="../shco_g0/shco_gen_normal_js.jsp" %>
  <form id="frmExecuteProcess" name="frmExecuteProcess" method="post" action="/servlet/CheckSecurity/JSP/<%=zprocesspage%>">
    <input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>"/>
    <input type="hidden" id="zm4o" name="zm4o" value="<%=zm4object%>"/>
    <input type="hidden" id="znode" name="znode" value="SHCO_GN_PARAM_VALUES"/>
    <input type="hidden" id="zopenmode" name="zopenmode" value="0"/>
  </form>
  <script type="text/JavaScript">
	var sUrl = "/servlet/CheckSecurity/JSP/<%=zprocesspage%>?zsubsesion=<%=zsubsesion%>&zm4o=<%=zm4object%>&znode=SHCO_GN_PARAM_VALUES&zopenmode=0"
	location.replace(sUrl);	
  </script>
<%}%>

<m4:endpage/>
</body></html>
