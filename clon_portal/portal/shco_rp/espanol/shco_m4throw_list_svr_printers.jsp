<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_m4throw_list_svr_printers.jsp
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
if (!zpag.equals("0")){znew=zpag;}
znivelmenu = request.getParameter("znivelmenu");
// Escribe el nivel de menus por defecto

if ((znivelmenu==null)||(znivelmenu.equals(""))){znivelmenu = "2";}

String zm4object = "SHCO_M4THROW_MT_SVR_PRINTERS";
String znodo = "SHCO_TH_MT_SVR_PRINTERS";
String zsubsesion = zm4object;

zventanas = "30";
String zdireccion = "shco_rp/shco_m4throw_list_svr_printers.jsp";
String zredireccion = "shco_m4throw_list_svr_printers.jsp";
%>
<%@ include file="../../shco_g0/shco_gen_list_preload.jsp" %>
<%
// Items que vamos a utilizar (visualizar o requeridos en una acción):

String zCampo_Id_printer = "ID_PRINTER";
String z_Id_printer = zcomun + zCampo_Id_printer;
String zl_Id_printer = zraiz + zCampo_Id_printer;

String zCampo_N_printer = "N_PRINTER";
String z_N_printer = zcomun + zCampo_N_printer;
String zl_N_printer = zraiz + zCampo_N_printer;

String zCampo_Device = "DEVICE";
String z_Device = zcomun + zCampo_Device;
String zl_Device = zraiz + zCampo_Device;

String zCampo_Params = "PARAMS";
String z_Params = zcomun + zCampo_Params;
String zl_Params = zraiz + zCampo_Params;

String zCampo_Enabled_pcl = "ENABLED_PCL";
String z_Enabled_pcl = zcomun + zCampo_Enabled_pcl;
String zl_Enabled_pcl = zraiz + zCampo_Enabled_pcl;

String zCampo_Enabled_escp = "ENABLED_ESCP";
String z_Enabled_escp = zcomun + zCampo_Enabled_escp;
String zl_Enabled_escp = zraiz + zCampo_Enabled_escp;

String zCampo_Enabled_ps = "ENABLED_PS";
String z_Enabled_ps = zcomun + zCampo_Enabled_ps;
String zl_Enabled_ps = zraiz + zCampo_Enabled_ps;

String zCampo_Enabled_out1 = "ENABLED_OUT1";
String z_Enabled_out1 = zcomun + zCampo_Enabled_out1;
String zl_Enabled_out1 = zraiz + zCampo_Enabled_out1;

String zCampo_Enabled_out2 = "ENABLED_OUT2";
String z_Enabled_out2 = zcomun + zCampo_Enabled_out2;
String zl_Enabled_out2 = zraiz + zCampo_Enabled_out2;

String zCampo_Enabled_out3 = "ENABLED_OUT3";
String z_Enabled_out3 = zcomun + zCampo_Enabled_out3;
String zl_Enabled_out3 = zraiz + zCampo_Enabled_out3;

String zCampo_Default_dvc = "DEFAULT_DVC";
String z_Default_dvc = zcomun + zCampo_Default_dvc;
String zl_Default_dvc = zraiz + zCampo_Default_dvc;

String zCampo_Output_format_not_allowed = "OUTPUT_FORMAT_NOT_ALLOWED";
String z_Output_format_not_allowed = zcomun + zCampo_Output_format_not_allowed;
String zl_Output_format_not_allowed = zraiz + zCampo_Output_format_not_allowed;

// Indica el campo por el que ordenas en la TI y si es asc o desc

if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = zCampo_Id_printer;}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "1";}
%>
<script type="text/javascript" language="Javascript1.5">
var scampoant="<%=zOrdenCampo%>";
var sOrd="<%=zOrden%>";
</script>
<%@ include file="../../shco_g0/shco_gen_list_js.jsp" %>
</head><body>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
<%@ include file="../../shco_g0/shco_gen_exec.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_filter.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_outputdef.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_count.jsp" %>
<%@include file="../../shco_g0/shco_gen_title.jsp" %>
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_menusup.jsp" %><%}%>
<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>
<%@include file="../../shco_g0/shco_gen_list_filt.jsp" %>
<form action="/servlet/CheckSecurity/JSP/<%=zpag%>" method="post" name="oculto2" id="oculto2" >

<input type="hidden" id="<%=zCampo_Id_printer%>" name="<%=zCampo_Id_printer%>" value=""  />
<input type="hidden" id="<%=zCampo_N_printer%>" name="<%=zCampo_N_printer%>" value=""  />
<input type="hidden" id="<%=zCampo_Output_format_not_allowed%>" name="<%=zCampo_Output_format_not_allowed%>" value=""  />
<input type="hidden" id="<%=zCampo_Default_dvc%>" name="<%=zCampo_Default_dvc%>" value=""  />
</form>
<a name="filter"></a>
<table class="datos" width="100%" cellpadding="0" cellspacing="0"><thead>
<tr class="titulo">

<th>&nbsp;<a>
<%if ((zOrdenCampo==zCampo_Id_printer)||(zOrdenCampo.equals(zCampo_Id_printer))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Id_printer%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_Id_printer%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Id_printer%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_Id_printer%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Id_printer%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_Id_printer%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<m4:label m4name="<%=zl_Id_printer%>" htmlsafe="true"/></th>
<th>&nbsp;<a>
<%if ((zOrdenCampo==zCampo_N_printer)||(zOrdenCampo.equals(zCampo_N_printer))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_N_printer%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_N_printer%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_N_printer%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_N_printer%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_N_printer%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_N_printer%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<m4:label m4name="<%=zl_N_printer%>" htmlsafe="true"/></th>
<th>&nbsp;<a>
<%if ((zOrdenCampo==zCampo_Device)||(zOrdenCampo.equals(zCampo_Device))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Device%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_Device%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Device%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_Device%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<m4:label m4name="<%=zSHCOLBORD%>" htmlsafe="true"/><m4:label m4name="<%=zl_Device%>" htmlsafe="true"/>" onclick="m4ordenar('<%=zCampo_Device%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<m4:label m4name="<%=zl_Device%>" htmlsafe="true"/></th>

<%@ include file="../../shco_g0/shco_gen_pest.jsp" %>
</tr></thead><tbody>

<%if (zcount>0){%>
	<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%@ include file="../../shco_g0/shco_gen_loop.jsp" %>
<tr>
<td class="valor<%=zpos%>">&nbsp;
<%if ("0".equals(zpag)){ %>
	<a title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="var aval=new Array();aval[0]='<m4:item m4name="<%=z_Id_printer%>" jsafe="true" htmlsafe="true"/>';aval[1]='<m4:item m4name="<%=z_N_printer%>" jsafe="true" htmlsafe="true"/>';aval[2]='<m4:item m4name="<%=z_Output_format_not_allowed%>" jsafe="true" htmlsafe="true"/>';aval[3]='<m4:item m4name="<%=z_Default_dvc%>" jsafe="true" htmlsafe="true"/>';m4returnvalues(aval);return false;">
<%} else { %>
	<a title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/>" href="" onclick="m4valor('oculto2','<%=zCampo_Id_printer%>','<m4:item m4name="<%=z_Id_printer%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zCampo_N_printer%>','<m4:item m4name="<%=z_N_printer%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zCampo_Output_format_not_allowed%>','<m4:item m4name="<%=z_Output_format_not_allowed%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zCampo_Default_dvc%>','<m4:item m4name="<%=z_Default_dvc%>" jsafe="true" htmlsafe="true"/>','set');m4submit('oculto2');return false;">
<%}%>


	<m4:item m4name="<%=z_Id_printer%>" htmlsafe="true"/>	</a></td>

<td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=z_N_printer%>" htmlsafe="true"/></td>
<td class="valor<%=zpos%>">&nbsp;<m4:item m4name="<%=z_Device%>" htmlsafe="true"/></td>
<td class="valor<%=zpos%>"colspan="2">&nbsp;</td>
</tr>
	 </m4:loop></tbody></table>
<%@ include file="../../shco_g0/shco_gen_vent_post.jsp" %><%}else{%>
<tr><td class="fuentenodatos" colspan="100"><%@ include file="../../shco_g0/shco_gen_list_nodata.jsp" %></td></tr>
</tbody></table><%}%>	
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %><%}else{%><m4:endpage/></div><%}%>
</body>
</html>

