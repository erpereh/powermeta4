<%-- =========================================================
	@(#) FileVersion: 819.001.005
	@(#) FileDescription: shco_so_lu_roles.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2022
	@(#) ProductName: PeopleNet
========================================================= --%>


<%-- Desde funcional: Añadimos las traducciones y la hoja de estilos--%>
<%
	String zlanguser = request.getParameter("lang");
	if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "en";}
%>
<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="shco_so_trans.jsp" %>
<%@ include file="shco_gen_so_include.jspf" %>

<%
M4SessionManager l_zsm = M4Context.getSession(request);
SavParamsInterface l_oSP = l_zsm.getSavParamsInstance();
String l_zcss = (String) l_oSP.getParameterValue("PORTAL_PARAM", "CSS");
%>

<html>
<head>
<link href="/style/<%=sStyleSheet%>" type="text/css" rel="stylesheet" />
<title><%=Tran_shco_so.getProperty("so.ListRole")%></title>
</head>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_excep.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/translations/m4err_<%=zlanguser%>.js"></script>

<script language="JavaScript">
	function populate(theselect)
	{
		var option;
		// This is necessary for NS browsers.
		// Now it erases the silly option in the body of the select.
		// That silly option was needed to resize properly the select area.
		theselect.options[0] = null
	


		<%@ taglib uri="M4Tags" prefix="m4" %>
		<%@ page import="java.io.*, java.util.*, com.meta4.m4operations.*" %>
		<%@ page import="com.meta4.Rol.*" %>
		<%@ page import="com.meta4.session.M4Context" %>
		<%@ page import="com.meta4.session.M4SessionManager" %>
		<%@ page import="com.meta4.common.utils.logsystem.M4Logger" %>
		<%@ page import="org.apache.log4j.Category" %>

		<%   M4Logger m_log = M4Logger.getLogger("com.meta4.jsp");
		try{
			M4Operations mo_oper=new M4Operations(request);
			M4SessionManager m4Session=M4Context.getSession(request);		
	
			// Obtain the list of roles.
			ListRol lListRol = m4Session.getListRol();
			Vector  vList   = lListRol.getlistRoles();		
			int     iSize  = vList.size();
			int 	index  =0;
	
			// Start: while
			while ((index < vList.size()) ){
				Rol r = (Rol)vList.elementAt(index);
		     		String stIdRol = r.getIdRol();      
		     		String stNRol = r.getNRol(); 
				m_log.trace("lu_roles.jsp: For index "+index+" Reading role ID: "+stIdRol+" and Role Name "+stNRol);
				
				// If there is no organization for the role, the role should not be shown in this list.
				// Ask whether the role has at least one organization
		%>


		option = new Option("<%= stIdRol %> - <%= stNRol %>", "<%= stIdRol %>")   
		theselect.options[<%= index %>] = option


		<%	index++; 
			}  // End:while 
		     		
		} catch(Exception e) {
			m_log.trace("Exception in page lu_roles.jsp: " +e.toString());	
		}
		%>


		// Bubble sorting of the options array 
		// (in order that the method is not so long :-)
		
		var text_i;
		var value_i;
		for (var i = 1; i < theselect.length; i++) {
			for (var j = 0; j <= i ; j++) {
				if (theselect.options[j].text > theselect.options[i].text) {
					text_i = theselect.options[i].text;
					value_i= theselect.options[i].value;
					theselect.options[i].text = theselect.options[j].text;
					theselect.options[i].value= theselect.options[j].value;
					theselect.options[j].text = text_i;
					theselect.options[j].value= value_i;
				}
			}
		}


	} 
</script>




<script language="JavaScript">
    var bRefresh=true;	
    
    function selectiondone(theselect,form) {  
  
	theindex=theselect.selectedIndex;
	
	if(theindex>=0){			
		bRefresh=false;		
		form.roleid.value = theselect.options[theindex].value;	 
		form.submit();	
	}else{
	
		m4setlog('_sl_co_so_6');
	}
    }


    function update_roleid_selected(theselect, roleid) {
	theindex=theselect.selectedIndex;
	roleid.value = theselect.options[theindex].value;

    }	
    
    function close2(){
    	bRefresh=true;
    	this.close();
    }
    
    function setLocationParent(){    	
    	/* cancellation with the X */    	
    	if (bRefresh){    		
		this.opener.location = this.opener.location;
	}
    }
    
</script>

<body onunload="setLocationParent()">
<form method="POST" action="/servlet/CheckSecurity/JSP/shco_so/shco_so_change_role.jsp?css=<%=sStyleSheet%>" name="myform">
	<input type="hidden" id="lang" name="lang" value="<%=zlanguser%>" /> 
	<table  class="tablalink" cellspacing="2" border="0" align="center" height="100%" width="100%">	
	<tr><td colspan="2" class="texto2" align="center"></td></tr>
	<tr><td colspan="2" class="texto2" align="center"><%=Tran_shco_so.getProperty("so.RoleList")%></td></tr>
	<tr><td colspan="2" class="texto2" align="center"></td></tr>
	<tr><td><input type="hidden" name="roleid" value="" size="20"></td></tr>
	<tr>
		<td class="" align="center" colspan="2">
			<select class="selectform75" size="10" name="the_select" onClick="update_roleid_selected(this, roleid)">
			<option>This option is necessary for NS browsers
			</select>		
			<script language="JavaScript">
				populate(document.myform.the_select);
			</script>
		</td>
	</tr>
	<tr>
		<% String zcssuser=l_zcss;%>
		<td class="" align="center"><a tabindex="1" title="<%=Tran_shco_so.getProperty("so.Change")%>" href="javascript:selectiondone(document.myform.the_select,document.myform);"><img <%@ include file="../files_gif/ic_ace.jsp" %> title="<%=Tran_shco_so.getProperty("so.Change")%>"	></a>&nbsp;</td>
		<td class="" align="center"><a tabindex="2" title="<%=Tran_shco_so.getProperty("so.Cancel")%>" href="javascript:close2();"><img <%@ include file="../files_gif/ic_can.jsp" %> title="<%=Tran_shco_so.getProperty("so.Cancel")%>" 	></a>&nbsp;</td>
	</tr>
	</table>
</form>
</body>
</html>

<table  class="tablanavegacion" cellspacing="2" border="0" align="center">
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto2" align="center"><%=Tran_shco_so.getProperty("so.UpdatingOrg")%></td></tr>
		<tr><td class="texto2" align="center"></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
		<tr><td class="texto1" align="center"><%=Tran_shco_so.getProperty("so.Wait")%></td></tr>
		<tr><td class="texto1" align="center">&nbsp;</td></tr>
	</table>	