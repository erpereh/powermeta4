<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_list_table_filter_pred.jsp
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
String zm4object = "SHCO_GN_MT_TABLE_FILTER";
String znodo = "SHCO_GN_MT_TABLE_FILTER";
String zsubsesion = zm4object;

String zdireccion = "shco_g0/shco_gen_list_table_filter_pred.jsp";
String zredireccion = "shco_gen_list_table_filter_pred.jsp";

zventanas = "20";
zvuelta = 5;%>
<%@ include file="../../shco_g0/shco_gen_list_preload.jsp" %>
<%
// Items used (to see or use in any function):

String zField_Id_user_filter = "ID_USER_FILTER";
String z_Id_user_filter = zcomun + zField_Id_user_filter;

String zField_Apisql = "APISQL";
String z_Apisql = zcomun + zField_Apisql;

String zField_N_sentence = "N_SENTENCE";
String z_N_sentence = zcomun + zField_N_sentence;

String zField_Id_sentence = "ID_SENTENCE";
String z_Id_sentence = zcomun + zField_Id_sentence;

String zField_Id_table_base = "ID_TABLE_BASE";
String z_Id_table_base = zcomun + zField_Id_table_base;

String zField_Id_group_objects = "ID_GROUP_OBJECTS";
String z_Id_group_objects = zcomun + zField_Id_group_objects;

String zField_Pred_filter_type = "PRED_FILTER_TYPE";
String z_Pred_filter_type = zcomun + zField_Pred_filter_type;

String zField_Nat_lang = "NATURAL_LANG";
String z_Nat_lang = zcomun + zField_Nat_lang;

// Field to sort Node Structure and if it is asc or desc

if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = zField_N_sentence;}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "1";}

//* Check if we have other operation to do
String zop = request.getParameter("zop");
if (zop == null){zop="";}
%>



<script type="text/javascript" language="Javascript1.5">
var scampoant="<%=zOrdenCampo%>";
var sOrd="<%=zOrden%>";

function DeletePredFilter(sIdSentence){
  var msg = m4getmessage('_htmlFilter_11');
  var bDelete = true;
  if (confirm(msg)==true){
     //Comprobar que no está siendo usado
	 var oobjectSentencesInUse =  m4window_extension_return(0);
	 if (typeof(oobjectSentencesInUse) != "undefined"){
	    sListOfSentencesInUse = oobjectSentencesInUse.value;
		iPos=sListOfSentencesInUse.indexOf("$$"+sIdSentence+"$$",0)
		if (iPos != -1){
		   alert(m4getmessage('_htmlFilter_12'));
		   bDelete = false;
		}
	 }
	 if(bDelete == true){
  	 	m4valor("DeletePredFilterParameters","zIdSentence",sIdSentence,"set");
  	 	m4submit("DeletePredFilterParameters");
	}
  }  
}
</script>

<%@ include file="../../shco_g0/shco_gen_list_js.jsp" %>
</head><body>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>

<%//* Filter by group_object or table base: 
// Si son distinto de vacio pasarlo a las variables del formulario oculto
// para que no se pierdan en el filtrado.
//zfilter_1: Tabla zfilter_2: Escenario

String zTableFilter = request.getParameter("TABLE");
String zGroupObjectFilter = request.getParameter("GROUP");
if (zTableFilter==null){zTableFilter="";}
if (!zTableFilter.equals("")){zfilter_1 = zTableFilter;}
if (zGroupObjectFilter==null){zGroupObjectFilter="";}
if (!zGroupObjectFilter.equals("")){zfilter_2 = zGroupObjectFilter;}
try {	
	 M4Operations m = new M4Operations(request);
	 m.setItem(zm4object,znodoroot,"","FILTER_ID_SCENARIO",zfilter_2);
 	 m.setItem(zm4object,znodoroot,"","FILTER_ID_TABLE_BASE",zfilter_1); 	 		 
   }catch(Exception e) {}
//* End Filter by group_object or table base
%>

<!-- Check if we have to delete -->
<% 
if (zop.equals("DELETE")){
   String zIdSentenceToDelete = request.getParameter("zIdSentence");
   if (zIdSentenceToDelete == null) {zIdSentenceToDelete = "";}
%>
 <m4:exec m4method='<%=zm4object + "!" + znodoroot +".DELETE_PRED_FILTER_Y_SENTENCE"%>'>
    <m4:param name="ARG_ID_SENTENCE" value="<%=zIdSentenceToDelete%>"/>
 </m4:exec>
<%}%>

<%@ include file="../../shco_g0/shco_gen_exec.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_filter.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_outputdef.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_count.jsp" %>
<%@include file="../../shco_g0/shco_gen_title.jsp" %>
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_menusup.jsp" %><%}%>
<h2><m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/></h2>
<%@include file="../../shco_g0/shco_gen_list_filt.jsp" %>

<form method="post" id="DeletePredFilterParameters" name="DeletePredFilterParameters" action ="<%=zaccion%>" >
	<input type="hidden" id="zOrdenCampo" name="zOrdenCampo" value="<%=zOrdenCampo%>" />
    <input type="hidden" id="zOrden" name="zOrden" value="<%=zOrden%>" />
	<input type="hidden" id="znivelmenu" name="znivelmenu" value="<%=znivelmenu%>" />
    <input type="hidden" id="znew" name="znew" value="<%=znew%>" />
    <input type="hidden" id="znw" name="znw" value="<%=znw%>" />
    <input type="hidden" id="zpag" name="zpag" value="<%=zpag%>" />
	<input type="hidden" id="zinicio" name="zinicio" value="<%=zinicio%>" />
	<input type="hidden" id="ztipocarga" name="ztipocarga" value="<%=ztipocarga%>" />
	<input type="hidden" id="zisdynfilter" name="zisdynfilter" value="<%=zisdynfilter%>" />
	<input type="hidden" id="zf1id" name="zf1id" value="<%=zf1id%>" />
    <input type="hidden" id="zf3id" name="zf3id" value="<%=zf3id%>" />
    <input type="hidden" id="zv1" name="zv1" value="<%=zv1%>" />
    <input type="hidden" id="zf2id" name="zf2id" value="<%=zf2id%>" />
    <input type="hidden" id="zf4id" name="zf4id" value="<%=zf4id%>" />
    <input type="hidden" id="zv2" name="zv2" value="<%=zv2%>" />
	<input type="hidden" id="zIdSentence" name="zIdSentence" value="" />
	<input type="hidden" id="zop" name="zop" value="DELETE"/>
	<input type="hidden" id="zfilter_1" name="zfilter_1" value="<%=zfilter_1%>" />
    <input type="hidden" id="zfilter_2" name="zfilter_2" value="<%=zfilter_2%>" />
</form>   

<form action="/servlet/CheckSecurity/JSP/<%=zpag%>" method="post" name="oculto2" id="oculto2" >
<input type="hidden" id="<%=zField_Id_sentence%>" name="<%=zField_Id_sentence%>" value=""  />
<input type="hidden" id="<%=zField_Id_table_base%>" name="<%=zField_Id_table_base%>" value=""  />
<input type="hidden" id="<%=zField_Id_group_objects%>" name="<%=zField_Id_group_objects%>" value=""  />
<input type="hidden" id="<%=zField_Nat_lang%>" name="<%=zField_Nat_lang%>" value=""  />
</form>
<a name="filter"></a>
<table class="datos" width="100%" cellpadding="0" cellspacing="0"><thead>
<tr class="titulo">

<th>&nbsp;<a>
<%if ((zOrdenCampo==zField_N_sentence)||(zOrdenCampo.equals(zField_N_sentence))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<%=zSHCOLBORD_val%><%= M4GetDisplay.ItemLabel(request, znodo, zField_N_sentence)%>" onclick="m4ordenar('<%=zField_N_sentence%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<%=zSHCOLBORD_val%><%= M4GetDisplay.ItemLabel(request, znodo, zField_N_sentence)%>" onclick="m4ordenar('<%=zField_N_sentence%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<%=zSHCOLBORD_val%><%= M4GetDisplay.ItemLabel(request, znodo, zField_N_sentence)%>" onclick="m4ordenar('<%=zField_N_sentence%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<%= M4GetDisplay.ItemLabel(request, znodo, zField_N_sentence)%></th><%@ include file="../../shco_g0/shco_gen_pest.jsp" %>
</tr></thead><tbody>
<%if (zcount>0){%>
	<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%@ include file="../../shco_g0/shco_gen_loop.jsp" %>
<tr>
<td class="valor<%=zpos%>">&nbsp;
<%if ("0".equals(zpag)){ %>
	<a title="<%=zSHCOLBLIST_val%>" href="" onclick="var aval=new Array();aval[0]='<m4:item m4name="<%=z_Id_sentence%>" jsafe="true" htmlsafe="true"/>';aval[1]='<m4:item m4name="<%=z_Id_table_base%>" jsafe="true" htmlsafe="true"/>';aval[2]='<m4:item m4name="<%=z_Id_group_objects%>" jsafe="true" htmlsafe="true"/>';aval[3]='<m4:item m4name="<%=z_Apisql%>" jsafe="true" htmlsafe="true"/>';aval[4]='<m4:item m4name="<%=z_Nat_lang%>" jsafe="true" htmlsafe="true"/>';m4returnvalues(aval);return false;">
<%} else { %>
	<a title="<%=zSHCOLBLIST_val%>" href="" onclick="m4valor('oculto2','<%=zField_Id_sentence%>','<m4:item m4name="<%=z_Id_sentence%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zField_Id_table_base%>','<m4:item m4name="<%=z_Id_table_base%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zField_Id_group_objects%>','<m4:item m4name="<%=z_Id_group_objects%>" jsafe="true" htmlsafe="true"/>','set');m4valor('oculto2','<%=zField_Apisql%>','<m4:item m4name="<%=z_Apisql%>" jsafe="true" htmlsafe="true"/>','set');m4submit('oculto2');m4valor('oculto2','<%=zField_Nat_lang%>','<m4:item m4name="<%=z_Nat_lang%>" jsafe="true" htmlsafe="true"/>','set');return false;">
<%}%>
<m4:item m4name="<%=z_N_sentence%>" htmlsafe="true"/>	</a></td>
<td class="valor<%=zpos%>"colspan="2">&nbsp;
   <a title="<%=zSHCOLBDEL_val%>" href="" onclick="DeletePredFilter('<m4:item m4name="<%=z_Id_sentence%>" jsafe="true" htmlsafe="true"/>');return false;">
   <img alt="<%=zSHCOLBDEL_val%>" <%@ include file="../../files_gif/ic_bor.jsp" %>/></a>
</td>
</tr>
</m4:loop></tbody></table>
<%@ include file="../../shco_g0/shco_gen_vent_post.jsp" %><%}else{%>
<tr><td class="fuentenodatos" colspan="100"><%@ include file="../../shco_g0/shco_gen_list_nodata.jsp" %></td></tr>
</tbody></table><%}%>	
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %><%}else{%><m4:endpage/></div><%}%>
</body>
</html>









