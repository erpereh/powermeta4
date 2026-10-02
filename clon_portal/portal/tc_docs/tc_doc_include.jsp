<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: tc_doc_include.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
sgtc_zText_Title = sgtc_zNMInputIDDOC + "_TITLE";
sgtc_zButt_Attach = sgtc_zNMInputIDDOC + "_ATTACH";
sgtc_zButt_View = sgtc_zNMInputIDDOC + "_VIEW";
sgtc_zButt_Delete = sgtc_zNMInputIDDOC + "_DELETE";
sgtc_zButt_Info = sgtc_zNMInputIDDOC + "_INFO";
sgtc_zText_DoEncr = sgtc_zNMInputIDDOC + "_DO_ENCRYPT";
%>

<%if (sgtc_zTITLEDOC==null){sgtc_zTITLEDOC="";}%>

<%if (sgtc_zShowMode.equals("0")){%>
   
   <%=transdoc.getProperty("doc.LblTitle")%>&nbsp;&nbsp;<input onmouseover="this.title=this.value;" class="<%=sgtc_zIDCSSRow%>" readonly name="<%=sgtc_zText_Title%>" id="<%=sgtc_zText_Title%>" value="<%=sgtc_zTITLEDOC%>" size="50"/>
	
   <input id="<%=sgtc_zText_DoEncr%>" name="<%=sgtc_zText_DoEncr%>" value="<%=sgtc_zDOENCRYPT%>" type="hidden"/>
   
   <%if (sgtc_zReadWrite.equals("1")){%>
     &nbsp<button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_Attach%>" name="<%=sgtc_zButt_Attach%>" class="fuentebotondoctable" onclick="javascript:manage_document('asig','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblModDoc")%>" title="<%=transdoc.getProperty("doc.LblModDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_attach.jsp"%>/></button>
   <%}else{%>
     <input id="<%=sgtc_zButt_Attach%>" name="<%=sgtc_zButt_Attach%>" type="hidden"/>
   <%}%>
   &nbsp<button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_View%>" name="<%=sgtc_zButt_View%>" class="fuentebotondoctable" onclick="javascript:manage_document('view','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblViewDoc")%>" title="<%=transdoc.getProperty("doc.LblViewDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_view.jsp"%>/></button>
   <%if (sgtc_zReadWrite.equals("1")){%>
     &nbsp<button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_Delete%>" name="<%=sgtc_zButt_Delete%>" class="fuentebotondoctable" onclick="javascript:manage_document('del','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblDelDoc")%>" title="<%=transdoc.getProperty("doc.LblDelDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_delete.jsp"%>/></button>
   <%}else{%>
     <input id="<%=sgtc_zButt_Delete%>" name="<%=sgtc_zButt_Delete%>" type="hidden"/>
   <%}%>
   &nbsp<button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_Info%>" name="<%=sgtc_zButt_Info%>" class="fuentebotondoctable" onclick="javascript:manage_document('signature','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblSignatureDoc")%>" title="<%=transdoc.getProperty("doc.LblSignatureDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_info.jsp"%>/></button> 
   
<%}else{%>

   <input onmouseover="this.title=this.value;" class="<%=sgtc_zIDCSSRow%>" readonly name="<%=sgtc_zText_Title%>" id="<%=sgtc_zText_Title%>" value="<%=sgtc_zTITLEDOC%>" />
     
   <input id="<%=sgtc_zText_DoEncr%>" name="<%=sgtc_zText_DoEncr%>" value="<%=sgtc_zDOENCRYPT%>" type="hidden"/>
   
   <%if (sgtc_zReadWrite.equals("1")){%>
     <button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_Attach%>" name="<%=sgtc_zButt_Attach%>" class="fuentebotondoctable" onclick="javascript:manage_document('asig','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblModDoc")%>" title="<%=transdoc.getProperty("doc.LblModDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_attach.jsp"%> /></button>
   <%}else{%>
     <input id="<%=sgtc_zButt_Attach%>" name="<%=sgtc_zButt_Attach%>" type="hidden"/>
   <%}%>
   <button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_View%>" name="<%=sgtc_zButt_View%>" class="fuentebotondoctable" onclick="javascript:manage_document('view','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblViewDoc")%>" title="<%=transdoc.getProperty("doc.LblViewDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_view.jsp"%> /></button>
   <%if (sgtc_zReadWrite.equals("1")){%>
     <button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_Delete%>" name="<%=sgtc_zButt_Delete%>" class="fuentebotondoctable" onclick="javascript:manage_document('del','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblDelDoc")%>" title="<%=transdoc.getProperty("doc.LblDelDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_delete.jsp"%> /></button>
   <%}else{%>
     <input id="<%=sgtc_zButt_Delete%>" name="<%=sgtc_zButt_Delete%>" type="hidden"/>
   <%}%>
   <button type="button" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='default';" id="<%=sgtc_zButt_Info%>" name="<%=sgtc_zButt_Info%>" class="fuentebotondoctable" onclick="javascript:manage_document('signature','<%=sgtc_zsubsesionsave%>','<%=sgtc_zstylesheet%>','<%=sgtc_zNMInputIDDOC%>');" alt="<%=transdoc.getProperty("doc.LblSignatureDoc")%>" title="<%=transdoc.getProperty("doc.LblSignatureDoc")%>"><img align="middle" <%@include file="../files_gif/ic_doc_info.jsp"%> /></button>

<%}%>

<script type="text/javascript" language="Javascript1.2">	
	set_inputs('<%=sgtc_zNMInputIDDOC%>');
</script>

<%--
	En modo formulario el identificador del documento asociado quedara en la propiedad value del input <%=sgtc_zNMInputIDDOC%>,
	y en modo tabla los identificadores de los documentos asociados quedaran en la propiedad 
	value de los inputs <%=sgtc_zNMInputIDDOC%>+"_1", <%=sgtc_zNMInputIDDOC%>+"_2",... uno por cada fila de la tabla
--%> 
