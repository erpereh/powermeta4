<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_list_th_task.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %><html><head><%@ include file="../shco_g0/shco_gen_bag.jsp" %><%@ include file="../shco_g0/shco_gen_css.jsp" %><%@ include file="../shco_g0/shco_gen_list_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>
<%
String zpag = request.getParameter("zpag");
if ((zpag==null)||(zpag.equals(""))){zpag = "0";}
String znw = request.getParameter("znw");
if ((znw==null)||(znw.equals(""))){if ((zpag=="0")||(zpag.equals("0"))){znw = "0";}else{znw = "1";}}
znw = "1";   // No se permiten crear nuevos
String znew = "shco_td/shco_td_list_th_task.jsp?znw=1";
if (!zpag.equals("0")){znew=zpag;}

// Parámetros del M4Object:
String zsubsesion = "SHCO_TD_MT_TH_TASK";
String zm4object = zsubsesion;
String znodo = zm4object;
zventanas = "20";													//*MODIFICABLE
zvuelta = 5;															//*MODIFICABLE
String zdireccion = "shco_td/shco_td_list_th_task.jsp";								//*MODIFICABLE
//escribe el nombre  de esta pag. 
String zredireccion = "shco_td_list_th_task.jsp";
// Items que vamos a utilizar (visualizar o requeridos en una acción):
String zIdBPItem = "ID_BP";											//*MODIFICABLE
String zNBPItem = "N_BP";
// Indica el campo por el que ordenas en la TI y si es asc o desc
if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = zIdBPItem;}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "1";}
%><%@ include file="../shco_g0/shco_gen_list_preload.jsp" %>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_mt.js"></script>
<script type="text/javascript" language="Javascript1.5">
var sIdPk="<%=zIdBPItem%>";
var sNPk="<%=zNBPItem%>";
var scampoant="<%=zOrdenCampo%>";
var sOrd="<%=zOrden%>";
</script>
<%@ include file="../shco_g0/shco_gen_list_js.jsp" %>
<%
// campos usados
String zIdBP = zcomun + zIdBPItem;
String zlIdBP = zraiz + zIdBPItem;
String zNBP = zcomun + zNBPItem;
String zlNBP = zraiz + zNBPItem;

%></head><body>
<%@ include file="../shco_g0/shco_gen_datadef.jsp" %>
<%@ include file="../shco_g0/shco_gen_exec.jsp" %><%@ include file="../shco_g0/shco_gen_list_filter.jsp" %><%@ include file="../shco_g0/shco_gen_list_outputdef.jsp" %><%@ include file="../shco_g0/shco_gen_list_count.jsp" %>
<%@include file="../shco_g0/shco_gen_title.jsp" %>
<%if (zpag.equals("0")== false){%><%@ include file="../shco_g0/shco_gen_menusup.jsp" %><%}%>
<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>
<%@include file="../shco_g0/shco_gen_list_filt.jsp" %>
<form action="/servlet/CheckSecurity/JSP/<%=zpag%>" method="post" name="oculto2" id="oculto2" >
<input type="hidden" id="<%=zIdBPItem%>" name="<%=zIdBPItem%>" value=""  />
<input type="hidden" id="<%=zNBPItem%>" name="<%=zNBPItem%>" value=""  />
</form>

<form action="/servlet/CheckSecurity/JSP/shco_g0/shco_gen_act.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="<%=zsubsesion%>" />
<input type="hidden" id="ACC" name="ACC" value="" />
<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
<input type="hidden" id="X<%=zIdBPItem%>" name="X<%=zIdBPItem%>" value=""  />
<input type="hidden" id="<%=zNBPItem%>" name="<%=zNBPItem%>" value=""/>

<table class="datos" width="100%" cellpadding="0" cellspacing="0">
 <thead> <tr class="titulo">
    <th><a name="filter"><%if ((zOrdenCampo==zIdBPItem)||(zOrdenCampo.equals(zIdBPItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlIdBP%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zIdBPItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlIdBP%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zIdBPItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlIdBP%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zIdBPItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlIdBP%>" htmlsafe="true"/></th>
	<th><a name="filter"><%if ((zOrdenCampo==zNBPItem)||(zOrdenCampo.equals(zNBPItem))){if ((zOrden=="1")||(zOrden.equals("1"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNBP%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNBPItem%>');" <%@ include file="../files_gif/ic_ord_1.jsp" %>  /><%}else if ((zOrden=="2")||(zOrden.equals("2"))){%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNBP%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNBPItem%>');" <%@ include file="../files_gif/ic_ord_2.jsp" %>  /><%}%><%} else{%><img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/> <m4:label m4name="<%=zlNBP%>" htmlsafe="true"/>" onclick="javascript:m4ordenar('<%=zNBPItem%>');" <%@ include file="../files_gif/ic_ord.jsp" %>  /><%}%></a>&nbsp;<m4:label m4name="<%=zlNBP%>" htmlsafe="true"/></th>
	<%@ include file="../shco_g0/shco_gen_pest.jsp" %>   
  </tr></thead>
  <tbody> 
<% if (zcount>0){%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%@ include file="../shco_g0/shco_gen_loop.jsp" %>
<tr>
<%if ((zpag=="0")||(zpag.equals("0"))){%>
    <td class="valor<%=zpos%>">&nbsp;<a tabindex="8+zpos"title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="var aval=new Array();aval[0]='<m4:item m4name="<%=zIdBP%>" jsafe="true" htmlsafe="true"/>';aval[1]='<m4:item m4name="<%=zNBP%>" jsafe="true" htmlsafe="true"/>';m4returnvalues(aval);return false;"><m4:item m4name="<%=zIdBP%>" htmlsafe="true"/></a></td>
<%}else{%>
    <td class="valor<%=zpos%>">&nbsp;<a tabindex="7+zpos"title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="m4valor('oculto2','<%=zIdBPItem%>','<m4:item m4name="<%=zIdBP%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zNBPItem%>','<m4:item m4name="<%=zNBP%>" jsafe="true" htmlsafe="true"/>','set');m4submit('oculto2');return false;"><m4:item m4name="<%=zIdBP%>" htmlsafe="true"/></a></td>
<%}%>
	<td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=zNBP%>" htmlsafe="true"/></td>
	<td class="valor<%=zpos%>">&nbsp;</td>
</tr>
</tr>
</m4:loop>
</tbody></table>

<%@ include file="../shco_g0/shco_gen_vent_post.jsp" %><%}else{%>
<tr><td class="fuentenodatos" colspan="5"><%@ include file="../shco_g0/shco_gen_list_nodata.jsp" %></td></tr>
</tbody></table><%}%>
</form>	
</body><%if (zpag.equals("0")== false){%><%@ include file="../shco_g0/shco_gen_disclaimer.jsp" %><%}else{%><m4:endpage/></div><%}%>
</html>

