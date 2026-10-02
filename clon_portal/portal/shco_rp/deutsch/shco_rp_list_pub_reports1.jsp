<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_rp_list_pub_reports1.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %><html><head><title></title>
<%@ include file="../../shco_g0/shco_gen_bag.jsp" %><%@ include file="../../shco_g0/shco_gen_css.jsp" %>
<%@ include file="../../shco_g0/shco_gen_list_arg.jsp" %>
<%@ include file="../../shco_g0/shco_gen_tec_include.jspf" %>

<%String zpag = request.getParameter("zpag");
if ((zpag==null)||(zpag.equals(""))){zpag = "0";}
String znw = request.getParameter("znw");
if ((znw==null)||(znw.equals(""))){if ((zpag=="0")||(zpag.equals("0"))){znw = "0";}else{znw = "1";}}
String znew = "tc_query/tc_list_group_obj.jsp";
if (!zpag.equals("0")){znew=zpag;}

//* Check if we have other operation to do
String zop = request.getParameter("zop");
if (zop == null){zop="";}

znivelmenu = request.getParameter("znivelmenu");
// Escribe el nivel de menus por defecto
if ((znivelmenu==null)||(znivelmenu.equals(""))){znivelmenu = "1";}

String zGMT = request.getParameter("zGMT");
if (zGMT == null){zGMT="";}

// Parámetros del M4Object:
String zsubsesion = "SHCO_RP_MT_PUB_REPORTS";
String zm4object = zsubsesion;
String znodo = zm4object;
zventanas = "20";													//*MODIFICABLE
zvuelta = 5;															//*MODIFICABLE
String zdireccion = "shco_rp/shco_rp_list_pub_reports1.jsp";								//*MODIFICABLE
String zhelp="SHCO_RP_LIST_PUB_REPORTS.htm";
zsLocalizeHelp = zhelp;

//escribe el nombre  de esta pag. 
String zredireccion = "shco_rp_list_pub_reports1.jsp";

  
// Items que vamos a utilizar (visualizar o requeridos en una acción):
String zcampoID = "ID_REPORT";
String zcampoNombre = "N_REPORT";
String zcampoSalida = "ID_OUTPUT";
String zcampoConsulta = "N_T3";
String zcampoIdConsulta = "ID_T3";
String zcampoIdCategoria = "ID_CATEGORY";
String zcampoCategoria = "N_CATEGORY";
String zcampoLastUpdate = "DT_LAST_UPDATE";
String zcampoFecha = "DT_LAST_UPDATE_DATE";
String zcampoHora = "DT_LAST_UPDATE_HOUR";
String zcampoIdReportType = "ID_REPORT_TYPE";
String zcampoIsModified = "IS_MODIFIED";
String zcampoComment = "COMENT";
String zcampoSimplified = "SIMPLIFIED";


// Indica el campo por el que ordenas en la TI y si es asc o desc
if ((zOrdenCampo==null)||(zOrdenCampo.equals(""))){zOrdenCampo = zcampoNombre ;}
if ((zOrden==null)||(zOrden.equals(""))){zOrden = "1";}
%>
<%@ include file="../../shco_g0/shco_gen_list_preload.jsp" %>
<script type="text/javascript" language="Javascript1.5">
var sNPk="<%=zcampoNombre%>";
var scampoant="<%=zOrdenCampo%>";
var sOrd="<%=zOrden%>";
</script>
<%@ include file="../../shco_g0/shco_gen_list_js.jsp" %>
<%   
   String zIdReport = zcomun + zcampoID;
   String zlIdReport = zraiz + zcampoID; 
   String zNReport = zcomun + zcampoNombre;
   String zlNReport = zraiz + zcampoNombre;  
   String zIDOutput = zcomun + zcampoSalida;
   String zlIDOutput = zraiz+ zcampoSalida;    
   String zIDT3 = zcomun + zcampoIdConsulta;
   String zNT3 = zcomun + zcampoConsulta;
   String zlNT3 = zraiz+ zcampoConsulta;   
   String zNCategory  = zcomun + zcampoCategoria;
   String zlNCategory = zraiz+ zcampoCategoria;  
   String zIDCategory = zcomun+zcampoIdCategoria;    
   String zLastActDate = zcomun + zcampoLastUpdate;
   String zlLastActDate = zraiz+ zcampoLastUpdate;
   String zLastActDate_Date = zcomun + zcampoFecha;
   String zlLastActDate_Date = zraiz+ zcampoFecha;
   String zLastActDate_Hour = zcomun + zcampoHora;
   String zlLastActDate_Hour = zraiz+ zcampoHora;
   
   
   String zIdReportType= zcomun +zcampoIdReportType;
   String zIsModified = zcomun + zcampoIsModified;  
   String zSHCOLBEXECUTE = zraizlabel + "SHCO_LB_EXECUTE";
   String zSHCO_LB_OTHER_CATEGORIES = zraizlabel + "SHCO_LB_OTHER_CATEGORIES";
   String zSHCO_LB_DUPLICATE = zraizlabel + "SHCO_LB_DUPLICATE";
   String zSHCO_LB_OUTPUT_ON_EXECUTION = zraizlabel + "SHCO_LB_OUTPUT_ON_EXECUTION";
   String zSHCO_LB_NEW = zraizlabel + "SHCO_LB_NEW";   
   String zNOutput = "";  
   String zComment = zcomun + zcampoComment;
   String zSimplified = zcomun + zcampoSimplified; 
   
   String zDummyCategory ="ZZZZZ";
%>

<script type="text/javascript" language="Javascript1.5">

    function NewQuery (sIdCategory){
	  sUrl = "<%=znew%>";
	  if  (NewQuery.arguments.length == 1){
	     if ( sUrl.indexOf("?") != -1){
		 	sUrl = sUrl + "&";
		}else{
			sUrl = sUrl + "?";
		}
		 sUrl = sUrl + "zIdCategory=" + sIdCategory;
	  }
	  m4navegar(sUrl);
	}
    function DeleteQuery(sIdReport,sIdT3,sIdOutput){
	  m4valor("DeleteQueryParameters","zIdReport",sIdReport,"set");
  	  m4valor("DeleteQueryParameters","zIdT3",sIdT3,"set");
	  m4valor("DeleteQueryParameters","zIdOutput",sIdOutput,"set");
	  
  	  m4submit("DeleteQueryParameters");  
	}
	
	function EditQuery (sIdReport,sNReport, sIdT3,sIdCategory, sSaveAs,sIdPublishOutput){
	  m4valor("EditQueryParameters","zIdReport",sIdReport,"set");
  	  m4valor("EditQueryParameters","zNReport",sNReport,"set");
  	  m4valor("EditQueryParameters","zIdT3",sIdT3,"set");
	  m4valor("EditQueryParameters","zIdCategory",sIdCategory,"set");
	  m4valor("EditQueryParameters","zSaveAs",sSaveAs,"set");
  	  m4valor("EditQueryParameters","zIdPublishOutput",sIdPublishOutput,"set");	  
	  m4submit("EditQueryParameters");	
	}
	
function ExecuteReport(sIdReport, sNReport, sIdT3, sIdOutput,sIdReportType,sIsSimplified){

	 if(sIsSimplified != "1"){
	 
        // Crear la nueva ventana
        var hoy = new Date(); 
        var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
           
        //Abro la ventana
        window.open("",sNewWindow,"top=20,left=20,toolbar=no,scrollbars=yes,directories=no,status=yes,menubar=no,resizable=yes,width=850,height=560"); 

	   if (sIdReportType != 3) {	
	    m4valor('ExecuteReportParameters','txtIdReport',sIdReport,'set');
	    m4valor('ExecuteReportParameters','txtNReport',sNReport,'set');
	    m4valor('ExecuteReportParameters','txtIdT3',sIdT3,'set');
	    m4valor('ExecuteReportParameters','txtIdOutput',sIdOutput,'set');
	    m4valor('ExecuteReportParameters','txtReportParam',"##/AUTOLOAD:DESIGN:OFF## ##/NZOOM## ##/PRESERVE_DIR## ##/NSEARCH## ##/NTOC##",'set');
	    m4valor('ExecuteReportParameters','txtIdReportType',sIdReportType,'set');
	    m4settarget('ExecuteReportParameters',sNewWindow);
 		m4submit('ExecuteReportParameters');
		
 	    } 
		                     
   }else{
   	   
	   switch(sIdOutput){
	     case "1":
		  	   m4valor ('ExecuteReportM4throw','ASKCONFIGPARAM','FALSE','set');	
		   	   m4valor ('ExecuteReportM4throw','OUTPUT_FORMAT','HTML','set');	
		 	  break;		  
	     case"2":		 
		  	   m4valor ('ExecuteReportM4throw','ASKCONFIGPARAM','FALSE','set');	
		   	   m4valor ('ExecuteReportM4throw','OUTPUT_FORMAT','PDF','set');	
		      break;
		 case"3":
			   m4valor ('ExecuteReportM4throw','ASKCONFIGPARAM','FALSE','set');	
		   	   m4valor ('ExecuteReportM4throw','OUTPUT_FORMAT','TXT','set');	
		      break;
		 default: 	 
			   m4valor ('ExecuteReportM4throw','ASKCONFIGPARAM','TRUE','set');
		      
	   }
	  m4valor ('ExecuteReportM4throw','ID_REPORT',sIdReport,'set');	   
	
	  var hoy = new Date(); 
	  var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();
	  msgWindow =window.open("",sNewWindow,"toolbar=yes,scrollbars=yes,directories=no,status=yes,menubar=yes,resizable=yes,width=800,height=500");
	  document.forms["ExecuteReportM4throw"].target= sNewWindow;
	  m4submit('ExecuteReportM4throw');  
	}
}
</script>

</head>
<body onclick="meta4Cookie.Cookie.setEventCookie();" onkeypress="meta4Cookie.Cookie.setEventCookie();">

<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
<!-- Stablish GMTDiff -->
<%
try{
  M4Operations m1 = new M4Operations(request);
  if (!zGMT.equals("")){ 
   m1.setItem(zm4object,znodoroot,"","BROWSER_GMT",zGMT);
  } 
} catch(Exception e) {}
%>

<!-- Check if we have to delete -->
<% 
  if (zop.equals("DELETE")){
 String zIdReportToDelete = request.getParameter("zIdReport");
 if (zIdReportToDelete == null) {zIdReportToDelete = "";}
 String zIdT3ToDelete = request.getParameter("zIdT3");
 if (zIdT3ToDelete == null) {zIdT3ToDelete = "";}
 String zIdOutputToDelete = request.getParameter("zIdOutput");
 if (zIdOutputToDelete == null) {zIdOutputToDelete = "";} 

%>
<m4:exec m4method='<%=zm4object + "!" + znodoroot +".DELETE_REPORT_QUERY"%>'>
    <m4:param name="ARG_ID_REPORT" value="<%=zIdReportToDelete%>"/>
    <m4:param name="ARG_ID_T3" value="<%=zIdT3ToDelete%>"/>
    <m4:param name="ARG_ID_OUTPUT" value="<%=zIdOutputToDelete%>"/>
</m4:exec>
<%}%>

<%@ include file="../../shco_g0/shco_gen_exec.jsp" %>
<!-- ordenamos en el m4object para poder ordenar por más de un campo categoria * otro
%@ include file="../../shco_g0/shco_gen_list_filter.jsp" %> -->
<%
Vector vMultiItemSort = new Vector();
vMultiItemSort.addElement(new SortElement(zcampoCategoria, SortElement.ASC));
if ((zOrdenCampo !="NO")||(!zOrdenCampo.equals("NO"))){
 if ((zOrden=="1")||(zOrden.equals("1"))){	
     vMultiItemSort.addElement(new SortElement(zOrdenCampo, SortElement.ASC)); 
 }else if ((zOrden=="2")||(zOrden.equals("2"))){
     vMultiItemSort.addElement(new SortElement(zOrdenCampo, SortElement.DESC));
 }
}
try{
  M4Operations m1 = new M4Operations(request);
  m1.addSort(zm4object, znodo, vMultiItemSort, "SortName");
} catch(Exception e) {} 

%>
<%@ include file="../../shco_g0/shco_gen_list_outputdef.jsp" %><%@ include file="../../shco_g0/shco_gen_list_count.jsp" %>
<%@include file="../../shco_g0/shco_gen_title.jsp" %>
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_menusup.jsp" %><%}%>
<h2><m4:label m4name="<%=zSHCOLBTITLE%>"  htmlsafe="true"/></h2>
<%@include file="../../shco_g0/shco_gen_list_filt.jsp" %>
<!-- Formulario de paso de parémtros para borrar consulta igualar los parametros al formulario oculto 
excepto la parte de filtro dinámico pq a priori no permitimos -->
<form method="post" id="DeleteQueryParameters" name="DeleteQueryParameters" action ="<%=zaccion%>" >
	<input type="hidden" id="zOrdenCampo" name="zOrdenCampo" value="<%=zOrdenCampo%>" />
    <input type="hidden" id="zOrden" name="zOrden" value="<%=zOrden%>" />
	<input type="hidden" id="zIdReport" name="zIdReport" value="" />
	<input type="hidden" id="zIdT3" name="zIdT3" value="" />
    <input type="hidden" id="zIdOutput" name="zIdOutput" value="" />
	<input type="hidden" id="znivelmenu" name="znivelmenu" value="<%=znivelmenu%>" />
    <input type="hidden" id="znew" name="znew" value="<%=znew%>" />
    <input type="hidden" id="znw" name="znw" value="<%=znw%>" />
    <input type="hidden" id="zpag" name="zpag" value="<%=zpag%>" />
	<input type="hidden" id="zop" name="zop" value="DELETE"/>
	<input type="hidden" id="zinicio" name="zinicio" value="<%=zinicio%>" />
	<input type="hidden" id="ztipocarga" name="ztipocarga" value="<%=ztipocarga%>" />
	<input type="hidden" id="zisdynfilter" name="zisdynfilter" value="<%=zisdynfilter%>" />
	<input type="hidden" id="zf1id" name="zf1id" value="<%=zf1id%>" />
    <input type="hidden" id="zf3id" name="zf3id" value="<%=zf3id%>" />
    <input type="hidden" id="zv1" name="zv1" value="<%=zv1%>" />
    <input type="hidden" id="zf2id" name="zf2id" value="<%=zf2id%>" />
    <input type="hidden" id="zf4id" name="zf4id" value="<%=zf4id%>" />
    <input type="hidden" id="zv2" name="zv2" value="<%=zv2%>" />
</form>    

	
<!-- Formulario de paso de parámetros a la edición/duplicación de consulta -->
<form method="post" id="EditQueryParameters" name="EditQueryParameters" action = "/servlet/CheckSecurity/JSP/tc_query/tc_query_sel_fields.jsp" >
	<input type="hidden" id="zIdReport" name="zIdReport" value=""/>
	<input type="hidden" id="zNReport" name="zNReport" value=""/>
	<input type="hidden" id="zIdT3" name="zIdT3" value=""/>
	<input type="hidden" id="zIdCategory" name="zIdCategory" value=""/>
	<input type="hidden" id="zSaveAs" name="zSaveAs" value="0"/>
	<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
	<input type="hidden" id="zIdPublishOutput" name="zIdPublishOutput" value=""/>	
</form>
	
<!-- Formulario de paso de parámetros al askParam -->
<form method="post" id="ExecuteReportParameters" name="ExecuteReportParameters" action = "/servlet/CheckSecurity/JSP/shco_rp/pubaskparam.jsp" >
	<input type="hidden" id="txtIdReport" name="txtIdReport" value=""/>
	<input type="hidden" id="txtNReport" name="txtNReport" value=""/>
	<input type="hidden" id="txtIdT3" name="txtIdT3" value=""/>
	<input type="hidden" id="txtIdOutput" name="txtIdOutput" value=""/>
	<input type="hidden" id="txtReportParam" name="txtReportParam" value=""/>
	<input type="hidden" id="txtIdReportType" name="txtIdReportType" value=""/>
	<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
</form>
<!-- Formulario de paso de parámetros a la M4trow -->
<form method="post" id="ExecuteReportM4throw" name="ExecuteReportM4throw" action = "/servlet/CheckSecurity/JSP/shco_rp/shco_m4throw.jsp" >
    <input type="hidden" id="ID_REPORT" name="ID_REPORT" value=""/>
	<input type="hidden" id="zopenmode" name="zopenmode" value="0"/>
	<input type="hidden" id="ASKDYNFILTER" name="ASKDYNFILTER" value="TRUE"/>
	<input type="hidden" id="ASKCONFIGPARAM" name="ASKCONFIGPARAM" value="TRUE"/>
	<input type="hidden" id="OUTPUT_FORMAT" name="OUTPUT_FORMAT" value=""/>
</form>



<table class="datos" width="100%" cellpadding="0" cellspacing="0"><thead>
<tr class="titulo"><th colspan="4"><a name="filter"></a>&nbsp;<a>
<%if ((zOrdenCampo==zcampoNombre)||(zOrdenCampo.equals(zcampoNombre))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlNT3%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoNombre%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlNT3%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoNombre%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlNT3%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoNombre%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<m4:label m4name="<%=zlNT3%>"  htmlsafe="true"/></th>

<th colspan="2">&nbsp;<a>
<%if ((zOrdenCampo==zcampoSalida)||(zOrdenCampo.equals(zcampoSalida))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlIDOutput%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoSalida%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlIDOutput%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoSalida%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlIDOutput%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoSalida%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<m4:label m4name="<%=zlIDOutput%>"  htmlsafe="true"/></th>

<th colspan="2">&nbsp;<a>
<%if ((zOrdenCampo==zcampoLastUpdate)||(zOrdenCampo.equals(zcampoLastUpdate))){%>
	<%if ((zOrden=="1")||(zOrden.equals("1"))){%>
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlLastActDate%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoLastUpdate%>');" <%@ include file="../../files_gif/ic_ord_1.jsp" %>  />
	<%}else if ((zOrden=="2")||(zOrden.equals("2"))){%>	
		<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlLastActDate%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoLastUpdate%>');" <%@ include file="../../files_gif/ic_ord_2.jsp" %>  />
	<%}%>
<%} else{%>	
	<img alt="<m4:label m4name="<%=zSHCOLBORD%>"  htmlsafe="true"/> <m4:label m4name="<%=zlLastActDate%>"  htmlsafe="true"/>" onclick="m4ordenar('<%=zcampoLastUpdate%>');" <%@ include file="../../files_gif/ic_ord.jsp" %>  />
<%}%></a>&nbsp;<m4:label m4name="<%=zlLastActDate%>"  htmlsafe="true"/></th>
<th colspan="1">&nbsp;</th>
<%@ include file="../../shco_g0/shco_gen_pest.jsp" %>
</tr></thead><tbody>
<% if (zcount>0){
String zLastCategory = "zz_zz";
%>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%@ include file="../../shco_g0/shco_gen_loop.jsp" %>
<m4:item m4name="<%=zNCategory%>"  htmlsafe="true" m4varname="zCategoryVar"/>
<m4:item m4name="<%=zIDCategory%>"  jsafe="true" m4varname="zIdCategoryVar"/>
<m4:item m4name="<%=zIdReport%>"  jsafe="true" htmlsafe="true" m4varname="zIdReportVar"/>
<m4:item m4name="<%=zNReport%>"   jsafe="true" htmlsafe="true" m4varname="zNReportVar"/>
<m4:item m4name="<%=zIDT3%>"   jsafe="true" htmlsafe="true" m4varname="zIDT3Var"/>
<m4:item m4name="<%=zIDOutput%>"   m4format="0" m4varname="zIDOutputVar"/>
<m4:item m4name="<%=zIdReportType%>"   m4format="0" m4varname="zIdReportTypeVar"/>
<m4:item m4name="<%=zIsModified%>"  m4format="0" m4varname="zIsModifiedVar"/>
<m4:item m4name="<%=zComment%>"  htmlsafe="true" m4varname="zCommentVar"/>
<m4:item m4name="<%=zSimplified%>"  m4format="0" m4varname="zSimplifiedVar"/>


<!-- row with the Category if it changes -->
<%if (!zCategoryVar.equals(zLastCategory)){
  zLastCategory =zCategoryVar;%>
  <tr><td class = "valorx" colspan = "12">&nbsp;<a title="<m4:label m4name="<%=zSHCO_LB_NEW%>"  htmlsafe="true"/>" href=""  
  <%if (zCategoryVar.equals(zDummyCategory)){%> 
  onclick="NewQuery();return false;">
  <%}else{%>
  onclick="NewQuery('<%=zIdCategoryVar%>');return false;">
  <%}%>
  <img alt='<m4:label m4name="<%=zSHCO_LB_NEW%>" htmlsafe="true"/>' 
  <%@ include file="../../files_gif/ic_new16.jsp" %>/></a>
  <m4:label m4name="<%=zlNCategory%>"  htmlsafe="true"/>&nbsp;:&nbsp;
  <%if (zCategoryVar.equals(zDummyCategory)){%>
      <m4:label m4name="<%=zSHCO_LB_OTHER_CATEGORIES%>"  htmlsafe="true"/>
  <%}else{%>
     <%=zCategoryVar%>
  <%}%>
  </td></tr>
<%}%>

<tr>
<!-- column duplicate + edit + details + execute query -->
<m4:item m4name="<%=zIDOutput%>" m4varname="zsNOutput"/>
<td  colspan="4" class="valor<%=zpos%>">&nbsp;&nbsp;&nbsp;
   
<% if (zIsModifiedVar.equals("1")){%>
   <a title="<m4:label m4name="<%=zSHCO_LB_DUPLICATE%>"  htmlsafe="true"/>" href=""
   onclick="EditQuery('<%=zIdReportVar%>','<%=zNReportVar%>','<%=zIDT3Var%>','<%=zIdCategoryVar%>', '1','<%=zsNOutput%>');return false;">
   <img alt='<m4:label m4name="<%=zSHCO_LB_DUPLICATE%>" htmlsafe="true"/>' 
   <%@ include file="../../files_gif/ic_dup.jsp" %>/></a>
  <a title="<m4:label m4name="<%=zSHCOLBEDIT%>"  htmlsafe="true"/>" href=""
  onclick="EditQuery('<%=zIdReportVar%>','<%=zNReportVar%>','<%=zIDT3Var%>','<%=zIdCategoryVar%>', '0','<%=zsNOutput%>');return false;">
  <img alt='<m4:label m4name="<%=zSHCOLBEDIT%>" htmlsafe="true"/>' 
 <%@ include file="../../files_gif/ic_mod.jsp" %>/></a>
<%}else{%>
   <a title="<m4:label m4name="<%=zSHCO_LB_DUPLICATE%>"  htmlsafe="true"/>" href="" onclick="return false;">
   <img alt='<m4:label m4name="<%=zSHCO_LB_DUPLICATE%>" htmlsafe="true"/>' 
   <%@ include file="../../files_gif/ic_dup_dis.jsp" %>/></a>
  <a title="<m4:label m4name="<%=zSHCOLBEDIT%>"  htmlsafe="true"/>" href="" onclick="return false;">
  <img alt='<m4:label m4name="<%=zSHCOLBEDIT%>" htmlsafe="true"/>'
 <%@ include file="../../files_gif/ic_mod_dis.jsp" %>/></a>
<%}%>
<% if (!zCommentVar.equals("")){%>
<a title="<%=zCommentVar%>" href=""
  onclick="return false;"><img alt='<%=zCommentVar%>' <%@ include file="../../files_gif/ic_details.jsp" %>/></a>
<%}%>
<a title="<m4:label m4name="<%=zSHCOLBEXECUTE%>"  htmlsafe="true"/>&nbsp;<m4:label m4name="<%=zlNReport%>"  htmlsafe="true"/>" 
href="" onclick="ExecuteReport('<%=zIdReportVar%>','<%=zNReportVar%>','<%=zIDT3Var%>','<%=zIDOutputVar%>','<%=zIdReportTypeVar%>','<%=zSimplifiedVar%>');return false;">
<m4:item m4name="<%=zNReport %>"  htmlsafe="true"/></a></td>

<!-- column output-type -->		           
<td class="valor<%=zpos%>" colspan="2">&nbsp;			           
<% if (zsNOutput.substring(0, 1).equals("1")) { %>
 	HTML
<%  } else if (zsNOutput.substring(0, 1).equals("2")) {%>
   	PDF
<%  } else if (zsNOutput.substring(0, 1).equals("3")) {%>
   	EXCEL
<% } else {%>
   	<m4:label m4name="<%=zSHCO_LB_OUTPUT_ON_EXECUTION%>" htmlsafe="true" />
<%}%> 
</td>

<!-- column last-modified -->
<td class="valor<%=zpos%>" colspan="2">&nbsp;<m4:item m4name="<%=zLastActDate_Date%>"  htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zLastActDate_Hour%>"  htmlsafe="true"/></td><td class="valor<%=zpos%>" >&nbsp;</td>
<!-- column delete -->
<td class="boton" colspan="2">
<% if (zIsModifiedVar.equals("1")){%>
<a title="<m4:label m4name="<%=zSHCOLBDEL%>"  htmlsafe="true"/>"
 href="" onclick="DeleteQuery('<%=zIdReportVar%>','<%=zIDT3Var%>','<%=zsNOutput%>');return false;"><img alt='<m4:label m4name="<%=zSHCOLBDEL%>"   htmlsafe="true"/>' 
 <%@ include file="../../files_gif/ic_bor.jsp" %>/></a>
<%}else{%>
   <a title="<m4:label m4name="<%=zSHCOLBDEL%>"  htmlsafe="true"/>"
 href="" onclick="return false;"><img alt='<m4:label m4name="<%=zSHCOLBDEL%>"   htmlsafe="true"/>' 
 <%@ include file="../../files_gif/ic_bor_dis.jsp" %>/></a>
<%}%>
</td>
<td class="valor<%=zpos%>" colspan="1"> 
</tr>
</m4:loop>
</tbody></table>
<%@ include file="../../shco_g0/shco_gen_vent_post.jsp" %><%}else{%>
<tr><td class="fuentenodatos" colspan="5"><%@ include file="../../shco_g0/shco_gen_list_nodata.jsp" %></td></tr>
</tbody></table><%}%>	
<%if (zpag.equals("0")== false){%><%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %><%}else{%><m4:endpage/></div><%}%>
</body>
</html>

