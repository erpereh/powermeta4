<%//Begin: Disclaimer
String sEmailWebMaster = M4Context.getM4SessionCl(request).getBagEntries("mailwebmaster");
String sEmailHr = M4Context.getM4SessionCl(request).getBagEntries("mailrrhh");
%>
<div class="pageFooter">
<span><%=Tran.getProperty("footer.eMail")%></span>
&nbsp;<a title='<%=Tran.getProperty("footer.email.webMaster.toolTip")%>' href='mailto:<%=sEmailWebMaster%>'><%=Tran.getProperty("footer.email.webMaster.title")%></a>
&nbsp;<a title='<%=Tran.getProperty("footer.email.hr.toolTip")%>' href='mailto:<%=sEmailHr%>'><%=Tran.getProperty("footer.email.hr.title")%></a>
</div><%//End: Disclaimer%>