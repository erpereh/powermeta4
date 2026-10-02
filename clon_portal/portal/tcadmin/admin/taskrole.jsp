<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: taskrole.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%-- ******************** Includes  ******************** --%>
<%@ include file="./_includes.jspf"%>
<%-- ******************** Fin Traducciones  ******************** --%>

<%-- ******************** Traducciones  ******************** --%>
<%@ include file="./_translation_declaration.jspf"%>
<%-- ******************** Fin Traducciones  ******************** --%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html"/>
<title><%=gTranslateAdmin.getProperty("title_window.taskrole")%></title>
<%-- ******************** Funciones JavaScript  ******************** --%>
<script type="text/javascript" src="/library/m4gen.js"></script>
<script type="text/javascript" src="/library/m4ie_light.js"></script>
<script type="text/javascript">
function RefreshTaskRoles( ) {
		m4submit('refreshform');
	}
</script>
</head>
<body>
<m4:startpage m4task="SESSION"/>

<br><br><br><br><br>
<table cellpadding="0" cellspacing="0" width="100%" class="cabec">
<tr><td rowspan="4" width="56px"><img src="/images/ic_cabec_56_51_100.gif" width="56" height="51" /></td><td colspan="3" class="title">
&nbsp;<%=gTranslateAdmin.getProperty("label.taskrole.TitleAdmin")%></td><td colspan="5" class="value">&nbsp;</td></tr>
<tr><td colspan="8" class="border">&nbsp;</td></tr>
</table>

<%-- ******************** Servicio de negocio ******************** --%>
<h2><%=gTranslateAdmin.getProperty("label.taskrole.TitleTaskRole")%></h2>
<%-- ******************** Fin Servicio de negocio ******************** --%>


<form method="post" name="refreshform" action="/servlet/CheckSecurity/JSP/tcadmin/admin/taskrole.jsp">
<tr>
	<input type="hidden" name="refresh" value="refresh" /></td>
</tr>
</form>

<%

 
boolean bAllowedRefresh = false;
String sIDUser = M4Context.getSession(request).getIdUser(); 
if (sIDUser != null && ( sIDUser.equals("M4ADM") || sIDUser.equals("WEBADM"))) 
{
	bAllowedRefresh = true;
}

if (bAllowedRefresh)
{

	String isRefresh = request.getParameter("refresh"); 
	if (isRefresh != null && !isRefresh.equals("")) 
	{
		com.meta4.tcservlets.CheckSecurity.updateTaskList();
	}


%>
<br>
<div align="center">
<table class="form" width="80%" cellpadding="0">
	<tbody>
		<tr class="titulo">
			<td>&nbsp;<%=gTranslateAdmin.getProperty("label.taskrole.RefreshTaskSecurity")%>
			<br/>
			</td>
		</tr>
		<tr>
			<td class="boton"><a title="<%=gTranslateAdmin.getProperty("tooltip.taskrole.Refresh")%>" 
			href="javascript:RefreshTaskRoles();"> 
			<img src="/images/tcadmin/mstart.gif" border="0"
				onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)"
				onmouseout="m4oscuridad(this)" alt="" /></a></td><br/>
		</tr>
	</tbody>
</table>
</div>

<%
}
%>
<br/><br/>

<div align="center">
<table class="datos" width="80%" cellpadding="0" cellspacing="0"
	width="640">
	<thead>
		<tr class="titulo">
			<th width="86">&nbsp;</th>
			<th><%=gTranslateAdmin.getProperty("label.taskrole.taskidentifier")%></th>
			<!--<th><%=gTranslateAdmin.getProperty("label.taskrole.tasklink")%></th>-->
			<th><%=gTranslateAdmin.getProperty("label.taskrole.accessallowed")%></th>
		</tr>
	</thead>
	<tbody>

	<%


	M4SessionManager oM4session = M4Context.getSession(request);
    SecuritySession oTaskSecurity = new SecuritySession();
    Hashtable htTask = ListTask.getListTask();
    Enumeration eTask = htTask.elements();

    Task oTask;

    String stTask;

    String stStatus = "¿?"; 
    String stLink; 
    String stInitTaskPage; 
    String stExternPath; 

    String stCodeType; 

    String stResult;
    String stRoleList; 

    Hashtable htResult = new Hashtable();
    int iCurrent = 0; 
    String sIndexStyle = "1"; 

	while(eTask.hasMoreElements())
	{

	oTask=(Task)eTask.nextElement();	
	stTask=oTask.getIdBp();

	stCodeType = oTask.getExeCode(); // millenium dyslexics	
	stCodeType = new com.meta4.format.M4Format(2).format(stCodeType, com.meta4.format.M4Format.NUMBER, com.meta4.format.M4Format.OUTPUTMODE, "#");

	if (stCodeType != null && stCodeType.equals("4"))
	{

	    // Estilos
	    iCurrent++;
	    if ((iCurrent%2) == 0) 
	    {sIndexStyle = "2";}
	    else
	    {sIndexStyle = "1";}

	    stLink = "<a href=\"/servlet/CheckSecurity/JSP/" + stTask.toLowerCase() + "/\">" + stTask + "</a>" ; 
	    stInitTaskPage = oTask.getInitTaskPage(); 
	    stExternPath = oTask.getExternPath();
	    stRoleList = oTask.getListRoles().toString(); 

	    stResult = "" + oTaskSecurity.checkRoleTask (stTask + "_" + stCodeType, m4session, "");

	    if (stResult == null  || stResult.equals(""))
	    {
		htResult.put(stTask,oTask.getNBp());
		stStatus = "OK"; 
	    } 
	    else 
	    {
		stStatus = "STOP"; 
	    }
	    out.println("<td class=\"valor" + sIndexStyle + "\"><i>" +iCurrent+ "</i></td>");
	    out.println("<td class=\"valor" + sIndexStyle + "\">" +stTask+ "</td>");
	    // out.println("<td class=\"valor" + sIndexStyle + "\">" +stLink+ "</td>");
	    out.println("<td class=\"valor" + sIndexStyle + "\">" +stStatus+ "</td></tr>");
	}

	}
%>


</tbody>
</table>

<%-- ******************** Disclaimer (Incluye: </m4:page> ******************** --%>
<%@include file="../../shco_g0/shco_gen_disclaimer.jsp" %>
<%-- ******************** Fin Disclaimer ************************************* --%>
<m4:endpage/>
</body></html>
