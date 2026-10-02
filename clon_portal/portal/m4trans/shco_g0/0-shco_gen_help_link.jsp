<%-- =========================================================
	@(#) FileVersion: 816.000.001
	@(#) FileDescription: shco_gen_help_link.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2018
	@(#) ProductName: PeopleNet
========================================================= --%>


   <%boolean z_bExistLocaliceHelp = false;
   z_bExistLocaliceHelp = existURI("/" + z_gHelpFolder + "/" + zLangFolder + "/output/" + zsLocalizeHelp,pageContext);

   // New version(structure) of webworks
   if (existURI ("/" + z_gHelpFolder + "/" + zLangFolder + "/output/wwhelp/wwhimpl/js/html/frames.htm",pageContext) == true){
      if (z_bExistLocaliceHelp== true){%>        
       	 <a title="<%=zSHCOLBHELP_val%>" href="javascript:m4help('<%=zLangFolder%>','<%=z_gHelpFolder%>','<%=zhelp%>');">
   	   <%}else{%>
   	     <a title="<%=zSHCOLBHELP_val%>" href="javascript:m4help('<%=zLangFolder%>','<%=z_gHelpFolder%>');">
   	  <%}%>	     
   <%}else{ //Try with the old version
      if (z_bExistLocaliceHelp == true){%>        
       	 <a title="<%=zSHCOLBHELP_val%>" href="javascript:m4help_oldversion('<%=zLangFolder%>','<%=z_gHelpFolder%>','<%=zhelp%>');">
   	   <%}else{%>
   	     <a title="<%=zSHCOLBHELP_val%>" href="javascript:m4help_oldversion('<%=zLangFolder%>','<%=z_gHelpFolder%>');">
   	  <%}%>	     
   <%}%>   
