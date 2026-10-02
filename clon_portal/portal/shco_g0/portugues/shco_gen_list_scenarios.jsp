<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_list_scenarios.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%@ include file="../../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../../shco_g0/shco_gen_css.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_arg.jsp" %>
<%
String zpag = request.getParameter("zpag");
if ((zpag==null)||(zpag.equals(""))){zpag = "0";}

String znw = "1";
String znew = "";
if (!zpag.equals("0")){znew=zpag + "?znw=1";}
znivelmenu = request.getParameter("znivelmenu");

if ((znivelmenu==null)||(znivelmenu.equals(""))){znivelmenu = "1";}

String zm4object = "SHCO_GN_MT_GROUP_OBJS";
String znodo = "SHCO_GN_MT_GROUP_OBJS";
String zsubsesion = zm4object;

zventanas = "30";
String zdireccion = "shco_g0/shco_gen_list_scenarios.jsp";
String zredireccion = "shco_gen_list_scenarios.jsp";
%>
<%@ include file="../../shco_g0/shco_gen_list_preload.jsp" %>
<%
// Items used (to see or use in any function):

String zField_Id_group_objects = "ID_GROUP_OBJECTS";
String z_Id_group_objects = zcomun + zField_Id_group_objects;
String zl_Id_group_objects = zraiz + zField_Id_group_objects;

String zField_N_group_objects = "N_GROUP_OBJECTS";
String z_N_group_objects = zcomun + zField_N_group_objects;
String zl_N_group_objects = zraiz + zField_N_group_objects;

String zField_Id_object_base = "ID_OBJECT_BASE";
String z_Id_object_base = zcomun + zField_Id_object_base;
String zl_Id_object_base = zraiz + zField_Id_object_base;
// Field to sort Node Structure and if it is asc or desc

if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = zField_Id_group_objects;}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "1";}
%>
<script type="text/javascript" language="Javascript1.5">
var scampoant="<%=zOrdenCampo%>";
var sOrd="<%=zOrden%>";
</script>
<%@ include file="../../shco_g0/shco_gen_list_js.jsp" %>
</head><body>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
<%
// Filter by the id_read_object
String zTABLE_BASE = request.getParameter("ztablebase");
try {	
	 M4Operations m = new M4Operations(request);
	 m.setItem(zsubsesion,znodo,"","READ_OBJECT_FILTER",zTABLE_BASE);	 
}catch(Exception e) {}
%>

<%@ include file="../../shco_g0/shco_gen_exec.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_filter.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_outputdef.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_count.jsp" %>
<%@include file="../../shco_g0/shco_gen_title.jsp" %>
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_menusup.jsp" %><%}%>
<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>
<%@include file="../../shco_g0/shco_gen_list_filt.jsp" %>
<form action="/servlet/CheckSecurity/JSP/<%=zpag%>" method="post" name="oculto2" id="oculto2" >

<input type="hidden" id="<%=zField_Id_group_objects%>" name="<%=zField_Id_group_objects%>" value=""  /></form>
<a name="filter"></a>
<table class="datos" width="100%" cellpadding="0" cellspacing="0"><thead>
<tr class="titulo">

<th>&nbsp;<a>
<%if ((zOrdenCampo==zField_Id_group_objects)||(zOrdenCampo.equals(zField_Id_group_objects))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Id_group_objects%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zField_Id_group_objects%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Id_group_objects%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zField_Id_group_objects%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Id_group_objects%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zField_Id_group_objects%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<m4:label m4name="<%=zl_Id_group_objects%>" htmlsafe="true"/></th>
<th>&nbsp;<m4:label m4name="<%=zl_N_group_objects%>" htmlsafe="true"/></th><%@ include file="../../shco_g0/shco_gen_pest.jsp" %>
</tr></thead><tbody>
<%if (zcount>0){%>
	<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%@ include file="../../shco_g0/shco_gen_loop.jsp" %>
<tr>
<td class="valor<%=zpos%>">&nbsp;
<%if ("0".equals(zpag)){ %>
	<a title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="var aval=new Array();aval[0]='<m4:item m4name="<%=z_Id_group_objects%>" jsafe="true" htmlsafe="true"/>';m4returnvalues(aval);return false;">
<%} else { %>
	<a title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="m4valor('oculto2','<%=zField_Id_group_objects%>','<m4:item m4name="<%=z_Id_group_objects%>" jsafe="true" htmlsafe="true"/>','set');m4submit('oculto2');return false;">
<%}%><m4:item m4name="<%=z_Id_group_objects%>" htmlsafe="true"/>	</a></td>
<td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=z_N_group_objects%>" htmlsafe="true"/></td><td class="valor<%=zpos%>"colspan="2">&nbsp;</td>
</tr>
</m4:loop></tbody></table>
<%@ include file="../../shco_g0/shco_gen_vent_post.jsp" %><%}else{%>
<tr><td class="fuentenodatos" colspan="100"><%@ include file="../../shco_g0/shco_gen_list_nodata.jsp" %></td></tr>
</tbody></table><%}%>	
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %><%}else{%><m4:endpage/></div><%}%>
</body>
</html>

