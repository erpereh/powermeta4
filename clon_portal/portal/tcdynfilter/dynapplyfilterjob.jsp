<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynapplyfilterjob.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>



<m4:beginjob/>

	<m4:datadef m4o="API_DYN_FILTER_HTML_CL" m4name="DynFilter"/>
	
         <%--  Aplicar filtro según el modo establecido --%>
	 <m4:exec alias="DynFilterList" m4object="DynFilter" node="API_DYN_FILTER" method="API_APPLY_DYN_FILTERS">			
	 </m4:exec>
         <m4:outputdef m4alias="DynFilterAPiNode" m4object="DynFilter" node="API_DYN_FILTER" records="*"/>		

<m4:endjob/>