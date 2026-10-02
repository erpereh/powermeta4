
<%String zlanguser = (String) request.getAttribute("zlanguser");
if ((zlanguser==null)||(zlanguser.equals(""))){zlanguser = "es";}
%>
<script type="text/javascript" src="/translations/m4err_co_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_uk_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_fr_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_sp_<%=zlanguser%>.js"></script>
<script type="text/javascript" src="/translations/m4err_cl_<%=zlanguser%>.js"></script>

