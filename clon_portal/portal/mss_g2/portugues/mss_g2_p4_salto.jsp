<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="M4Tags" prefix="m4"%>

<%  String zsubsesion = "SSM_SALARY_REVIEW_PROCESS"; 
	String rec_to_process = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NUM_SAL_PLANS");
	String control_redirec = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"control");
    String zestado = "21";
%>

<m4:page subsessionid="<%=zsubsesion%>">

<m4:job>
	<m4:datadef m4o="SSM_SALARY_REVIEW_PROCESS" m4name="<%=zsubsesion%>"/>

<% if (control_redirec.equals("0")){ %>

		<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_SET_EMPLOYEE_SALARY_PLANS" m4object="<%=zsubsesion%>"/>
		<m4:outputdef node="SSM_SALARY_REVIEW_PROCESS" m4alias="GENERICO" m4object="<%=zsubsesion%>"/>
<%}%>
		<m4:exec node="SSM_EMPLOYEES_INFORMATION" alias="count" method="Count" m4object="<%=zsubsesion%>"/>
		<m4:exec node="SSM_SAL_REVIEW_EMPL_RESUMEN" alias="count_rev" method="Count" m4object="<%=zsubsesion%>"/>

</m4:job>

<% String count; %>
<m4:outputexec var="count" alias="count"/>

<% String count_2; %>
<m4:outputexec var="count_2" alias="count_rev"/>


<% if (control_redirec.equals("0"))
	{ %>
	<m4:item m4varname="var_control" item="CR_LAST_EMPLOTYEE_CALCULATED" htmlsafe="true" outputdef="GENERICO"/>

	<% if (count.equals("1"))
		{
			response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado=" + zestado);
		}
	  else
		{
		 if (var_control.equals("0")) 
		  {
			response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p3.jsp?estado=" + zestado); 
		  }
	     else
		  {
		   if (count_2.equals("0")) 
		    {
			  response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado=" + zestado);
		    }
		   else
		    {
			  response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado=" + zestado); 
		    }
		  }
		}
	}
   else
    {
      if (count_2.equals("0")) 
	    {
	      response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado=" + zestado);
 	    }
	   else
	    {
		  response.sendRedirect("/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5.jsp?estado=" + zestado); 
	    }
	}%>

</m4:page>

</html>
