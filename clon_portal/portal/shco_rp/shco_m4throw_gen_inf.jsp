<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_gen_inf.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %><%@ include file="../shco_g0/shco_gen_css.jsp" %>
<script type="text/javascript">
    zNumber = -1;
	<!--La primera perdida de foco que no sea por minimize obligamos a que se ponga en el top -->
    function m4getFocusFirstTime(){	    
		if (zNumber == 0 && self.screenTop>0) { zNumber++;window.focus();}			 
	}
</script>
</head>
<body onLoad="window.focus();" onFocus= "zNumber++;" onBlur="m4getFocusFirstTime();">
<body>
<%
   String zsubsesion = request.getParameter("_M4TAGLET");
   String zmeta4object = request.getParameter("_M4OBJECT");
   String zmeta4alias = request.getParameter("_M4ALIAS");
   
   if (zmeta4alias == null){
		zmeta4alias = zsubsesion;
   }
   
   zerrornivel2 = request.getParameter("ERROR"); 

   String znodo2 = "SHCO_GN_COMUNICATION";
   String zoutputdef = zmeta4object + "!" + znodo2 + "[*]";
   String zraiz = zmeta4object + "!" + znodo2 + ".";
   String zshco_TEXT = znodo2 + ":" + zraiz + "SHCO_TEXT";
   String znodo3="SHCO_GN_LOGS";
   String zoutputdef3 = zmeta4object + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";
   String zraiz3 =  znodo3 + ":" + zmeta4object  + "!" + znodo3 + ".";
   String zcomun3 = znodo3 + ":" + zmeta4object + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
   String znodolabel = "SHCO_GN_LABEL";
   String zoutputdeflabel = zmeta4object + "!" + znodolabel + "[*]";
   String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";
   String zraizlabel = znodolabel + ":" + zmeta4object + "!" + znodolabel + ".";
   
   String zcampoID = "SHCO_LOG_TYPE";
   String zcampoNombre = "SHCO_LOG_TEXT";
   String zIdPk = zcomun3 + zcampoID;
   String zNPk = zcomun3 + zcampoNombre;
   
   String zSHCOLBCLOSEERROR = zraizlabel + "SHCO_LB_CLOSE_ERROR";
%><%@ include file="/shco_g0/shco_gen_label.jsp" %>
<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<%if (zerrornivel2.equals("1")){%>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zmeta4alias%>" m4find="true" />
<%}else{%>
	<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zmeta4alias%>" />
<%}%>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodolabel%>" ><m4:param name="m4name0" value="<%=zoutputdeflabel%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zmeta4object%>" value="<%=zmove3%>"/></m4:move>
<%int  zcount3  = 0;
try {
    M4Operations m = new M4Operations(request);
    zcount3 = m.getCount(znodo3,zmeta4object,znodo3);
} catch(Exception e) {}
String	zcountv3 = String.valueOf(zcount3);
%>
<script type="text/javascript" language="Javascript1.5">document.title = '<m4:label m4name="<%=zSHCOLBTITERROR%>" jsafe="true" />';</script>
<form action=" " method="post" name="NombreFormulario" id="NombreFormulario" >	
<table class="error" width="100%" cellpadding="0" cellspacing="2" >
<tr><td class="tit" ><%=zSHCOLBTITERROR_val%></td></tr></thead>

<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<m4:item  m4varname="zTipErr" m4name="<%=zIdPk%>" htmlsafe="true"/>
<tr>
<%if (zTipErr.equals("-1")){%>
 	<td class="text">
	<img alt="<m4:label m4name="<%=zSHCOLBERR%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_err.jsp" %> />
<%}else if (zTipErr.equals("1")){%>
	<td class="textw">
	<img alt="<m4:label m4name="<%=zSHCOLBWARNING%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_warnig.jsp" %> />
<%}else{%>
	<td class="textinfo">
	<img alt="<m4:label m4name="<%=zSHCOLBINFO%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_info.jsp" %> />
<%}%>
	&nbsp;<m4:item m4name="<%=zNPk%>" htmlsafe="true"/></td>
</tr>	
</m4:loop>
<tr><td class="boton"><input id ="Back" name="back" tabindex="1" type="button" class="boton" onclick="window.close();" value="<m4:label m4name="<%=zSHCOLBCLOSEERROR%>" htmlsafe="true"/>"/></td></tr>
</table>
</form>
<m4:endpage/></body></html>