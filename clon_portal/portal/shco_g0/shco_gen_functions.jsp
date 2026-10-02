<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_functions.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%! boolean existURI(String ai_sURI, PageContext ai_oPageContext){
	 return M4FileURIChecker.existURI(ai_sURI,ai_oPageContext);
     }
%>