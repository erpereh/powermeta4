<%@ taglib uri="M4Tags" prefix="m4" %><%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<%@ include file="../../mss_generico/mss_cr_trans.jsp" %>
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<title><%=Mss_cr.getProperty("msscr.Link1")%></title>
<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");

estado="112";

String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>
</head>
<body>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>

<%
   String zsubsesion = "SSM_SALARY_REVIEW_PROCESS";
   String zmeta4object = "SSM_SALARY_REVIEW_PROCESS";
   String znodo = "SSM_EMPLOYEES_INFORMATION";
   String zestado = "21";

%>

<script language="JavaScript" xml:space="preserve">

  function view_details(work_u,resp_tp)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0_wu.jsp?WU=" + work_u + "&RESP_TYPE=" + resp_tp;
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=750,height=650";
    this.win= window.open(this.url, 'popup', attr);
  }

  function show_help(cod_help)
  {
    this.url = "/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_help.jsp?COD=" + cod_help;
    var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=1000,height=500";
    this.win= window.open(this.url, 'popup', attr);
  }

</script>

<m4:startpage m4task="<%=zsubsesion%>"/><m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

<m4:exec node="SSM_SALARY_REVIEW_PROCESS" method="CR_WORK_UNITS_FOR_MANAGER" m4object="<%=zsubsesion%>"/>
<m4:outputdef node="SSM_WORK_UNITS_FOR_PROCESS" m4alias="WORK_UNIT" m4object="<%=zsubsesion%>"/>
<m4:exec node="SSM_WORK_UNITS_FOR_PROCESS" alias="wu_count" method="Count" m4object="<%=zsubsesion%>"/>

<m4:endjob/>

<table border="0" width="100%">
<tr>
          <td class="titulofuncional" colspan="2" ><%=Mss_cr.getProperty("msscr.Link1")%>
          </td>
         <td><a href="javascript:show_help(1)" title="<%=Mss_cr.getProperty("msscr.help1-1")%>"><img alt="<%=Mss_cr.getProperty("msscr.help1-1")%>" src="/iconos/ic_help_25_31_0.gif" alt="<%=Mss_cr.getProperty("msscr.Pop3-21")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/></a>
      </td>
</tr>
<tr>
  <td><img alt="<%=Mss_cr.getProperty("msscr.Info1-1")%>" src="/iconos/noname_salariales_mss_58_100.gif" width="100" height="100"/></td>
    <td><div class="descripcionfuncional"><%=Mss_cr.getProperty("msscr.Info1-1")%>
    </div></td>
  <td>&nbsp;</td>
</tr>
</table>


<% String count_ti; %>
<% int icount_ti = 0; %>
  <m4:outputexec var="count_ti" alias="wu_count"/>
  <% try { icount_ti = Integer.parseInt(count_ti); } catch(Exception e) { icount_ti = 0; }%>

  <%if (icount_ti > 0) {%>
    <table align="center" class="tablaestados" width="100%" cellspacing="0">
      <tr class="tablaestadosceldatitulo">
        <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla6")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla8")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla7")%></td>
        <td colspan="1"><%=Mss_cr.getProperty("msscr.Tabla13")%></td>
      </tr>

      <m4:dataloop outputdef="WORK_UNIT">

      <m4:item m4varname="work_unit" item="WORK_UNIT_ID" htmlsafe="true" outputdef="WORK_UNIT"/>
      <m4:item m4varname="resp_type" item="RESPONSABLE_TP" htmlsafe="true" outputdef="WORK_UNIT"/>
      <tr>
        <%work_unit = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "EncCorp76", work_unit);%>
        <td class="fuentevalor" >
          <a href=<%="javascript:view_details('" + work_unit + "','" + resp_type + "');"%> title="<%=Mss_cr.getProperty("msscr.Pop2-1")%>"><m4:item item="WORK_UNIT_ID" htmlsafe="true" outputdef="WORK_UNIT"/>&nbsp;-&nbsp;<m4:item item="WORK_UNIT_NAME" htmlsafe="true" outputdef="WORK_UNIT"/></a></td>
        <td class="fuentevalor"><m4:item item="RESPONSABLE_TP_NAME" htmlsafe="true" outputdef="WORK_UNIT"/></td>
        </td>
        <td class="fuentevalor" >
          <a href=<%="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2.jsp?estado=" + zestado + "&wu=" + work_unit%> title="<%=Mss_cr.getProperty("msscr.Pop1-1")%>">
            <img alt="<%=Mss_cr.getProperty("msscr.Pop1-1")%>" src="/iconos/icono_revision_individual_32_16.gif"/></a></td>
        </td>
        <td class="fuentevalor" >
          <a href=<%="/servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_me.jsp?estado=" + zestado + "&wu=" + work_unit%> title="<%=Mss_cr.getProperty("msscr.Pop13-1")%>">
            <img alt="<%=Mss_cr.getProperty("msscr.Pop13-1")%>" src="/iconos/icono_revision_colectiva_32_16.gif"/></a></td>
        </td>
      </tr>
      </m4:dataloop>

      <tr>
        <td colspan="2">&nbsp;</td>
      </tr>

    </table>
  <%
  }else{%>
    <div class="fuentenodatos"><%=Mss_cr.getProperty("msscr.Aviso1-1")%></br></br></div>
  <%}%> 

<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
</body>
<m4:endpage/>
