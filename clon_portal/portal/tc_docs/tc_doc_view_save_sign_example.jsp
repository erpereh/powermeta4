<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_view_save_sign_example.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="/shco_g0/shco_gen_taglib.jsp" %><html><head><title></title>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %>
<%@ include file="/shco_g0/shco_gen_arg.jsp" %>
<%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_tec_include.jspf" %>
<%@ include file="/shco_g0/shco_gen_js.jsp" %>


<% String zIdDoc = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ID_DOC");
   if (zIdDoc==null){zIdDoc = "";}  
%>
   
<script type="text/javascript">  
  function showDoc(){
   m4submit('frmViewSaveFile');
  }
</script> 

<body>
 <%String ztcUrlDoc="/temp/REPORT_CHANNEL_PT_2.pdf";%>
 <% if (!zIdDoc.equals("")){%>
    <script type="text/javascript">
	   alert ("El documento: <%=zIdDoc%>  ha sido firmado correctamente");  
    </script> 
 <%}else{%>
 <table width="100%" cellspacing = "0">
  <form id="frmViewSaveFile" name="frmViewSaveFile" action="/servlet/CheckSecurity/JSP/tc_docs/tc_doc_view_save_sign.jsp" method="post">
  <tr><td class="fuentevalor">URL_Doc:</td><td class="fuentecampo"><input type="text" size="100" id="URL_Doc" name="URL_Doc" value="<%=ztcUrlDoc%>" /></td></tr>
  <tr><td class="fuentecampo">Title:</td><td class="fuentecampo"><input type="text" size="100" id="Title" name="Title"  value="ultimo titulo" /></td></tr>
  <tr><td class="fuentecampo">Author:</td><td class="fuentecampo"><input type="text" size="100" id="Author" name="Author"  value="" /></td></tr>
  <tr><td class="fuentecampo">Abstract:</td><td class="fuentecampo"><input type="text" size="100" id="Abstract" name="Abstract"  value="" /></td></tr>
  <tr><td class="fuentecampo">Class:</td><td class="fuentecampo"><input type="text" size="100" id="Class" name="Class"  value="" /></td></tr>
  <tr><td class="fuentecampo">DMS:</td><td class="fuentecampo"><input type="text" size="100" id="DMS" name="DMS"  value="" /></td></tr>
  <tr><td class="fuentecampo">SignNotAllowed:</td><td class="fuentecampo"><input type="text" size="100" id="SignNotAllowed" name="SignNotAllowed"  value="" /></td></tr>
  <tr><td class="fuentecampo">URL_Error:</td><td class="fuentecampo"><input type="text" size="100" id="URL_ERROR" name="URL_ERROR"  value="" /></td></tr>
  <tr><td class="fuentecampo">URL_Cancel:</td><td class="fuentecampo"><input type="text" size="100" id="URL_CANCEL" name="URL_CANCEL"  value="/servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp" /></td></tr>
  <tr><td class="fuentecampo">URL_Success:</td><td class="fuentecampo"><input type="text" size="100" id="URL_SUCCESS" name="URL_SUCCESS"  value="/servlet/CheckSecurity/JSP/tc_docs/tc_doc_view_save_sign_example.jsp" /></td></tr>
  <tr><td class="fuentecampo" colspan="2"><button  id="go" name="go"  title="show Doc" class="tablaestadosceldatitulo"  type="button" 
	     onclick="javascript:showDoc()">
	     &nbsp;show Doc&nbsp;
		</button>
	</td></tr>	  
  </form>
  </table>
  <%}%>
</body>

 
</body>
</html>
