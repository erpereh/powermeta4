<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_path.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%// Declaración del organigrama: (Traducciones)

String zpath = "";
String zic = "&nbsp;&#126;&nbsp;";
String znivel0 = "<a title='" +Tran_shco_g0.getProperty("Menu.Start") + "'" + "href='/servlet/CheckSecurity/JSP/shco_g0/shco_gen_portal.jsp'>" + Tran_shco_g0.getProperty("Menu.Start")+ "</a>" + zic;
String znivel1 = Tran_shco_g0.getProperty("Literal.PersonalInfo") + zic;
%>

<%// Declaración del organigrama:
if (zdireccion.equals("shco_g0/shco_gen_portal.jsp")){zpath= znivel0;}
if (zpath.equals("")){zpath= znivel0;}
%>
<%=zpath%>
<script type="text/javascript" language="Javascript1.5">
var ztitle = document.title;
document.write(ztitle);
</script>


