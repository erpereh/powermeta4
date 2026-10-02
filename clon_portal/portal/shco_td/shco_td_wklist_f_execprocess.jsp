<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wklist_f_execprocess.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="/shco_g0/shco_tec_js_include.jspf" %>

<script type="text/javascript" language="Javascript1.5">
  var sNewWindow = "shco_td_exec_process";
  function execProcess(sIdWorkItem,sIdTask,sProcessType,znodowklist){  
	m4valor ('formexec','<%=zIdWorkItemItem%>',sIdWorkItem,'set');
	m4valor ('formexec','<%=zIdTaskItem%>',sIdTask,'set');
	m4valor ('formexec','<%=zProcessTypeItem%>',sProcessType,'set');
	m4valor ('formexec','znodowklist',znodowklist,'set');
	m4settarget('formexec',sNewWindow);
	window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560");
	m4submit ('formexec');
  }
  
  function RefreshPage(){
	history.go(0);
  } 
</script>
<form action="/servlet/CheckSecurity/JSP/shco_td/shco_td_exec_process.jsp" method="post" name="formexec" id="formexec" >
	  <input type="hidden" id="<%=zIdWorkItemItem%>" name="<%=zIdWorkItemItem%>" value=""  />
	  <input type="hidden" id="<%=zIdTaskItem%>" name="<%=zIdTaskItem%>" value=""  />
	  <input type="hidden" id="<%=zProcessTypeItem%>" name="<%=zProcessTypeItem%>" value=""  />
 	  <input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>"  />
  	  <input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>"  />
	  <input type="hidden" id="znodowklist" name="znodowklist" value=""  />
</form>
		
