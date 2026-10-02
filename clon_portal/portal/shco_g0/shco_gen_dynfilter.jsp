<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_dynfilter.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%@ include file="../shco_g0/shco_gen_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../shco_g0/shco_gen_css.jsp" %>
<%@ include file="../shco_g0/shco_gen_js.jsp" %> 
<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_mt.js"></script>
<%-- [unicode] --%><%@ include file="../shco_g0/shco_gen_m4val_js.jsp" %>

<%
//****************************************************************
// *MODIFICABLE
String zdireccion = "shco_gen_dynfilter.jsp";	   					
String zredireccion = "shco_g0/shco_gen_dynfilter.jsp";	
//******************************************************************************************/
//******************************************************************************/%>
<% 
   String zsubsesion = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zdf_sub");
   if ((zsubsesion == null)||(zsubsesion.equals(""))){
      zsubsesion = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zsubsesion");
   }   
%>
<%@ include file="../shco_g0/shco_gen_dynfilter_m4def.jsp" %>
<%	
    String zdf_m4o = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_M4O));
    String zdf_m4oalias = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_M4OALIAS));	
    String zdf_returnpage = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGE));
	String zdf_applymode = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_APPLYMODE));
	if (zdf_applymode.equals("")){zdf_applymode=zAPPLY_MODE_DEF;}
    String zdf_retmode = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETMODE));
    String zdf_returnpagewidth = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGEWIDTH));	
	if (zdf_returnpagewidth.equals("")){zdf_returnpagewidth=zPARAM_RETPAGEWIDTH_DEF;}
    String zdf_returnpageheight = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGEHEIGHT));
	if (zdf_returnpageheight.equals("")){zdf_returnpageheight=zPARAM_RETPAGEHEIGHT_DEF;}
	String zoperation = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zop"));
	String  zreloadsentence = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zreloadsentence");
    if (zreloadsentence == null) {zreloadsentence = "0";}
	String zSentencesTobeReloaded = com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zSentencesTobeReloaded");
	if (zSentencesTobeReloaded == null){zSentencesTobeReloaded="";}
	
	String zidnode = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdNodeItem));
	String znnode = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zNNodeItem));
	String zidreadobject = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdReadObjetItem));
	
	
	//SaveNodeFilter
	String zidsentence = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdSentenceItem));
	String zapisql = getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zApiSqlItem));
	String znatlanguage =getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zFilterLangItem));
	String zidscenario =getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdScenarioItem));
	
    String zvalue = zdf_m4o;
    String zhelp="SHCO_GEN_DYNFILTER.htm";
    zCol =5;
	
	//lista de sentencias utilizadas para evitar que se borren en la pantalla de filtro predefinido
	String g_zListOfSentenceInUse = "";
%>
	  
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
    <m4:datadef m4o="<%=zm4object%>" m4name="<%=zm4oalias%>"/>
	<%@ include file="../shco_g0/shco_gen_dynfilter_act.jsp" %>	
<m4:endjob/>
<script type="text/javascript">
    sIdScenarioBeforeChange = "";
	sLastNodeSelected= "td0";
	g_sListOfSentenceUseInNodes="";
				
	function selectScenario(){
	  sReadObject = m4valor("NombreFormulario",'<%=zIdReadObjetItem%>','','get');	  
	  sURLFilter="shco_g0/shco_gen_list_scenarios.jsp?ztablebase=" + sReadObject; 
	  m4filtro (sURLFilter,'<%=zIdScenarioItem%>');
	}	
	function removeFilter(){
	   var msg = m4getmessage("_setlog_temp_borrar");
	   if ( confirm(msg) == true){
	      m4valor("NombreFormulario","zreloadsentence","0","set")
	   	  m4valor("NombreFormulario","zop",'<%=zDELETE_FILTER_OP%>',"set");
	   	  m4submit("NombreFormulario");
	   }	  	
	}
	function editFilter(){
   	  var swindow = "htmlfilterwindow";     
	  var arg_array = new Array;
	  arg_array[0] = "<%=zIdSentenceItem%>";
	  arg_array[1] = "<%=zFilterLangItem%>";
	  arg_array[2] = "<%=zApiSqlItem%>";  
  	  arg_array[3] = "zreloadsentence";
	  m4window(swindow,"",arg_array,"NombreFormulario","800","600","no","no",true,"yes"); 
      document.forms.frmcallfilter.target= swindow;  
	  m4valor("frmcallfilter","zidescenario",m4select("NombreFormulario","<%=zIdScenarioItem%>","id"),"set");
	  m4valor("frmcallfilter","zidtable",m4valor("NombreFormulario","<%=zIdReadObjetItem%>","","get"),"set");
	  m4valor("frmcallfilter","zidsentence",m4valor("NombreFormulario","<%=zIdSentenceItem%>","","get"),"set");
	  m4valor("frmcallfilter","znnode",m4valor("NombreFormulario","<%=zNNodeItem%>","","get"),"set");
  	  m4valor("frmcallfilter","zsubsesion",m4valor("NombreFormulario","zNodeSubsessionItem","","get"),"set");	  
   	  m4valor("frmcallfilter","zreloadsentence",m4valor("NombreFormulario","zreloadsentence","","get"),"set");

	  m4submit("frmcallfilter"); 
	  
	}
	function saveFilterNode(){
	  //Test if the filter is stablished
	  var sfunciones = "m4valinput('_alfanum_oblig','NombreFormulario','<%=zFilterLangItem%>',1,'<m4:label m4name="<%=zSHCOLBFILTER%>" jsafe="true"/>')";
	  var verr=m4valform(sfunciones);
      if (verr == 1){
	  
	   //Guardar la informaciÛn de la forma de editar la sentencia
	   RefreshSentenceToBeReloaded(m4valor("NombreFormulario","<%=zIdSentenceItem%>","","get"),m4valor("NombreFormulario","zreloadsentence","","get"));
	   
	   m4valor("NombreFormulario","zop",'<%=zSAVE_FILTER_OP%>',"set");
	   m4submit("NombreFormulario");	
	  } 	 
	}
	function applyfilter(){
	   m4valor("NombreFormulario","zop",'<%=zAPPLY_DYN_FILTER_OP%>',"set");
	   m4submit("NombreFormulario");	
	}
	function cancelFilter(){
	   <%if (zdf_retmode.equals(zRET_MODE_RETURNVALUES)|| zdf_retmode.equals(zRET_MODE_RETURNVALUES_CALLBACK)){%>		   
	        window.close();			
   		<%}else if (zdf_retmode.equals(zRET_MODE_SUBMIT_WITHOUT_OPENWINDOW)){%>
		   window.history.back();			
		<%}else{%>
		   window.close();
		<%}%>
	}
	function returnFilter(sDynFilter,sM4o,sM4oAlias,sReturnPage,sReturnPageWidth,sReturnPageHeight){
	
	  <%if (zdf_retmode.equals(zRET_MODE_RETURNVALUES)|| zdf_retmode.equals(zRET_MODE_RETURNVALUES_CALLBACK)){%>		   
	        var aval=new Array();
			aval[0]=sDynFilter;
			m4returnvalues(aval);
	  <%}else{%>	  	 
		document.forms.frmreturn.action = sReturnPage;
	    m4valor("frmreturn","<%=zPARAM_SUB%>","<%=zsubsesion%>","set");
	    m4valor("frmreturn","<%=zPARAM_M4O%>",sM4o,"set");
	    m4valor("frmreturn","<%=zPARAM_M4OALIAS%>",sM4oAlias,"set");
	    m4valor("frmreturn","<%=zPARAM_DYNFILTER%>",sDynFilter,"set");
		<%if(!zdf_retmode.equals(zRET_MODE_SUBMIT_WITHOUT_OPENWINDOW)){%>
		    window.resizeTo( sReturnPageWidth,sReturnPageHeight);
		<%}%>
		m4submit("frmreturn");
	  <%}%>
	}
	function saveScenario(){
   	    sIdScenarioBeforeChange =m4select("NombreFormulario","<%=zIdScenarioItem%>","id");
	}
	function changeScenario(){
		//Check if there are a sentence
		if ( m4valor("NombreFormulario","<%=zIdSentenceItem%>","","get")!= ""){
		   var msg = m4getmessage('_dynFilter_1');
		   if (confirm(msg)==true){
		   	   m4valor("NombreFormulario","zop",'<%=zDELETE_SENTENCE_OP%>',"set");
			   m4valor("NombreFormulario","zreloadsentence","0","set")
	           m4submit("NombreFormulario");	
		   }else{
			   m4searchoption( m4objeto("NombreFormulario","<%=zIdScenarioItem%>"),sIdScenarioBeforeChange); 
		   }
		}
	}
	
 
 
 function fillSelectWithScenarios(zslistinfo){
  var sAlfanumChar = "a-zA-Z0-9.,‡ËÏÚ˘¿»Ã“Ÿ‚ÍÓÙ˚¬ Œ‘€·ÈÌÛ˙¡…Õ”⁄‹¸Ò—Á«™∫@%,_,\\-,:,\\,,\(,\),\',&,^,`,¥,\",/,Ä,£";
  var sAlfanumRegExpString= "[ " + sAlfanumChar + "]";
  var sAlfNumRegExpPlusBarraSemicolon = "[ " + sAlfanumChar + ",|,;" + "]" ; //Contiene la barra vertical y el punto y com
  var sAlfNumRegExpPlusSemicolon = "[ " + sAlfanumChar + ",;" + "]"; 
  //Expresion regular de las tuplas: Cadena con tuplas separadas por ||
  var zolistregexp = new  RegExp("(" +sAlfNumRegExpPlusSemicolon + "*)[|][|](" +sAlfNumRegExpPlusBarraSemicolon+"*)");
  //expression regular de cada tuplas : Id;;Nombre
  var zotuplaregexp = new  RegExp("(" + sAlfanumRegExpString + "*)[;][;](" + sAlfanumRegExpString +"*)"); 
  
  zarrlist = zolistregexp.exec(zslistinfo);
  var oselect=   m4objeto("NombreFormulario","<%=zIdScenarioItem%>");
   oselect.options.length = 0;
   oselect.selectedIndex = -1;
   m4genoption(oselect,"","","");
     while  (zarrlist != null){
   		zstupla = zarrlist[1];
   		zssResto = zarrlist[2];
   		
   		//Tratamiento de la tupla
        zarrtuplainfo =zotuplaregexp.exec(zstupla); 
                
        if (zarrtuplainfo != null){
   			zsid = zarrtuplainfo[1];
   			zsname = zarrtuplainfo[2];
   			if (zarrtuplainfo.length > 3){
   				zsvalue = zarrtuplainfo[3];
   			}
   			else{zsvalue = zsid;}
			m4genoption(oselect,zsid,zsid,zsname);
        }
   		zarrlist = zolistregexp.exec(zssResto);
  }
  m4searchoption(oselect,'<%=zidscenario%>');  
}

  function setNodeInfo(sIdNode,sNNode,sIdReadObject,sIdScenario,sFilterLang,sIdSentence,sApiSQL,sListOfScenario,sSubsession){
	 m4valor('NombreFormulario','<%=zIdNodeItem%>',sIdNode,'set');
     m4valor('NombreFormulario','<%=zNNodeItem%>',sNNode,'set');
	 m4valor('NombreFormulario','<%=zIdReadObjetItem%>',sIdReadObject,'set');
	 m4valor('NombreFormulario','<%=zIdScenarioItem%>',sIdScenario,'set');
 	 m4valor('NombreFormulario','<%=zFilterLangItem%>',sFilterLang,'set');
	 m4valor('NombreFormulario','<%=zIdSentenceItem%>',sIdSentence,'set');
	 m4valor('NombreFormulario','<%=zApiSqlItem%>',sApiSQL,'set');
	 m4valor('NombreFormulario','<%=zApiSqlItem%>',sApiSQL,'set');
     m4valor('NombreFormulario','zNodeSubsessionItem',sSubsession,'set');	 
     m4rewritecell('m4tit',sNNode);
	 //Rellenar combo
	 fillSelectWithScenarios(sListOfScenario);
  }
  
  function RefreshSentenceToBeReloaded(sIdSentence,sEditMode){
    var sSentencesTobeReloaded = m4valor('NombreFormulario','zSentencesTobeReloaded','','get');
	if (sIdSentence != "") {
       iPos = sSentencesTobeReloaded.indexOf(sIdSentence,0);
   	   //sÛlo guardar las que necesitan recarga
   	   if (sEditMode=="1"){	    
   		  if (iPos == -1) {
   		  //aÒadirlo pq no est· 
   		  sSentencesTobeReloaded = sSentencesTobeReloaded + "$$" + sIdSentence + "$$";		  
   		  }
		}else{
      	   if (iPos != -1) { //quitarlo
   		     s1 = sSentencesTobeReloaded.substr(0,iPos);
   		     s2 = sSentencesTobeReloaded.substr(iPos+sIdSentence.length + 4);
   		     sSentencesTobeReloaded = s1 + s2;
   		   }
		}   
   	}
    m4valor('NombreFormulario','zSentencesTobeReloaded',sSentencesTobeReloaded,'set');
  }
  function changenodeselection(nodepos,sIdNode,sNNode,sIdReadObject,sIdScenario,sFilterLang,sIdSentence,sApiSQL,sListOfScenario,sSubsession){  
     var msg = m4getmessage('_sl_co_gn_18');
	 if (confirm(msg)==true){	 
	     var otd = m4elemento(sLastNodeSelected);
		 otd.className ='wzdesactivado';
		 sLastNodeSelected ='td'+nodepos;
	     otd = m4elemento(sLastNodeSelected);otd.className ='wzactivado';	 	 
	     setNodeInfo(sIdNode,sNNode,sIdReadObject,sIdScenario,sFilterLang,sIdSentence,sApiSQL,sListOfScenario,sSubsession);
		 //Actualizar la informaciÛn de ediciÛn
		 var sSentencesTobeReloaded = m4valor('NombreFormulario','zSentencesTobeReloaded','','get');
		 var sEditMode = "0";
	 	 if (sIdSentence != ""){
	 	    if (sSentencesTobeReloaded.indexOf("$$" + sIdSentence + "$$") != -1){sEditMode = "1";}
	     } 
  	     m4valor("NombreFormulario","zreloadsentence",sEditMode,"set");    
	 }
  }
  
  function setSentenceUseInNodes(ai_sListOfSentenceInOtherNodes){
     g_sListOfSentenceUseInNodes = ai_sListOfSentenceInOtherNodes;
  }
	
  function afterPredFilterSelection(){ 
     m4valor("NombreFormulario","zreloadsentence","1","set")
  }
  function listPredFilters(){
     //Establecer las sentencias usadas para no permitir que se borren
	 sActualSentence = m4valor("NombreFormulario","<%=zIdSentenceItem%>","","get")
	 if (sActualSentence !="") {
	 	g_sListOfSentenceUseInNodes = g_sListOfSentenceUseInNodes + "$$"+ sActualSentence +  "$$";
	 }
	 m4valor ("NombreFormulario","SENTENCES_IN_USED",g_sListOfSentenceUseInNodes,"set");
	 
     var sFilter = "";	 
	 var sIdTable = m4valor("NombreFormulario","<%=zIdReadObjetItem%>","","get");
	 var sIdScenario = m4select("NombreFormulario","<%=zIdScenarioItem%>","id");
	 
	 //Primero comprobar el scenario que tabla hay siempre	 
	 if (sIdScenario != ""){
	 	sFilter = "?GROUP=" + sIdScenario;   
	 }else	 if (sIdTable != ""){
	 	sFilter = "?TABLE="+ sIdTable;
     }
	 
	 //usar para el escenario y la tabla inputs distintos para no perder p.e la tabla base del nodo cuando se elige
	 //un filtro de escenario la tabla base viene vacia
	// m4filtrocallback('shco_g0/shco_gen_list_table_filter_pred.jsp'+sFilter ,'afterPredFilterSelection()',);
	var args = new Array();
	args[0] ='<%=zIdSentenceItem%>';
	args[1] ='ARG_LIST_PRED_ID_TABLE_BASE';
	args[2] ='ARG_LIST_PRED_ID_SCENARIO';
	args[3] ='<%=zApiSqlItem%>';
	args[4] ='<%=zFilterLangItem%>';
    m4window_extension ('SENTENCES_IN_USED');
    m4windowcallback('shco_g0/shco_gen_list_table_filter_pred.jsp','/servlet/CheckSecurity/JSP/shco_g0/shco_gen_list_table_filter_pred.jsp'+sFilter,args,"NombreFormulario",'afterPredFilterSelection()',700,500,'','','','yes');
  }

</script>

</head>
<%
String zerror="";
String zshco_TEXT="";
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(znodocom,zm4oalias,znodocom,"","SHCO_ACTIVE_DEBUG");
}catch(Exception e) {}	
%>
<%@ include file="../shco_g0/shco_gen_error.jsp" %>
<body>
<form action="" name="frmreturn" id="frmreturn"  method="post" >
   <input type="hidden" id="<%=zPARAM_SUB%>" name="<%=zPARAM_SUB%>" value=""/>
   <input type="hidden" id="<%=zPARAM_M4O%>" name="<%=zPARAM_M4O%>"  value=""/>
   <input type="hidden" id="<%=zPARAM_M4OALIAS%>" name="<%=zPARAM_M4OALIAS%>"  value=""/>
   <input type="hidden" id="<%=zPARAM_DYNFILTER%>" name="<%=zPARAM_DYNFILTER%>" value = "" />
</form>

<% boolean bContinue = true;
  if (zerror.equals(compara) != true){
  //---------------- If there are not filters return
    //----------------------------------------------------------
   int  zcountdynfilter  = 0;
   try {
       M4Operations m = new M4Operations(request);
       zcountdynfilter = m.getCount(znododynfilterlist,zm4oalias,znododynfilterlist);    
   } catch(Exception e) {}
  if (zcountdynfilter ==0){
    bContinue = false; %>
	<%@ include file="/shco_g0/shco_gen_act_body.jsp" %>
     <script type="text/javascript">
        returnFilter("","<%=zdf_m4o%>","<%=zdf_m4oalias%>","<%=zdf_returnpage%>","<%=zdf_returnpagewidth%>","<%=zdf_returnpageheight%>");
    </script>
   <% //------------ If we have already apply the filter return
   //----------------------------------------------------------
  }else if (zoperation.equals(zAPPLY_DYN_FILTER_OP)){ 
     bContinue = false; %> 
     <m4:item m4name="<%=zlDynInfoItem%>" m4varname="zDynInfoItemVar" jsafe="true"/>
     <m4:item m4name="<%=zlIdT3Item%>" m4varname="zIdT3ItemVar" jsafe="true"/>
     <m4:item m4name="<%=zlIdT3Alias%>" m4varname="zIdT3AliasVar" jsafe="true"/>
     <m4:item m4name="<%=zlReturnPageItem%>" m4varname="zReturnPageItemVar" jsafe="true"/>
     <m4:item m4name="<%=zlReturnPageWidthItem%>" m4varname="zReturnPageWidthItemVar" jsafe="true"/>
     <m4:item m4name="<%=zlReturnPageHeightItem%>" m4varname="zReturnPageHeightItemVar" jsafe="true"/>
	 
     <script type="text/javascript">
     	   returnFilter('<%=zDynInfoItemVar%>','<%=zIdT3ItemVar%>','<%=zIdT3AliasVar%>','<%=zReturnPageItemVar%>','<%=zReturnPageWidthItemVar%>','<%=zReturnPageHeightItemVar%>');
     </script>
<%}}%>
<% if (bContinue == true){%>
   <m4:item m4name="<%=zlNT3Item%>" m4varname="zNT3ItemVar" jsafe="true"/>
   <% zvalue = zNT3ItemVar;%>
  <%@include file="../shco_g0/shco_gen_title.jsp" %>
  <%@ include file="../shco_g0/shco_gen_cab.jsp" %>
  </br>
  <div id="capa_cuerpo" style="position:relative; left:0%; top:0%; width:100%; z-index:2">
  <form action="/servlet/CheckSecurity/JSP/shco_g0/shco_gen_htmlfilter.jsp" name="frmcallfilter" id="frmcallfilter"  method="post" >
     <input type="hidden" id="zidoperation" name="zidoperation"  value="API_GET_FILTER_EX"/>
     <input type="hidden" id="zidsentence" name="zidsentence"  value=""/>
     <input type="hidden" id="zidescenario" name="zidescenario"  value=""/>
     <input type="hidden" id="zidtable" name="zidtable" value = "" />
     <input type="hidden" id="zsubsesion" name="zsubsesion" value = "<%=zsubsesion%>" />
     <input type="hidden" id="zsubsesiondynfilter" name="zsubsesiondynfilter" value = "<%=zsubsesion%>" />	 
     <input type="hidden" id="zreturnpage" name="zreturnpage" value = "isa.jsp" />
     <input type="hidden" id="zidrelationtype" name="zidrelationtype" value = "" />
     <input type="hidden" id="zhtmlfilterinstance" name="zhtmlfilterinstance" value = "" />
     <input type="hidden" id="znnode" name="znnode" value = "" />
     <input type="hidden" id="zretmode" name="zretmode" value = "1" />
	 <input type="hidden" id="zshowsavebutton" name="zshowsavebutton" value = "1" />
 	 <input type="hidden" id="zreloadsentence" name="zreloadsentence" value = "0" />
  </form>
  
  <div id="capa_cuerpo_2" style="position:absolute; left:0%; top:0%; width:80%; height:0%; z-index:1">	
  <form action="/servlet/CheckSecurity/JSP/shco_g0/shco_gen_dynfilter.jsp" method="post" name="NombreFormulario" id="NombreFormulario" >
  <input type="hidden" id="zop" name="zop" value="<%=zoperation%>" /> 
  <input type="hidden" id="zsubsesion" name="zsubsesion" value="<%=zsubsesion%>" />
  <input type="hidden" id="zNodeSubsessionItem" name="zNodeSubsessionItem" value="<%=zsubsesion%>" />
  <input type="hidden" id="<%=zIdNodeItem%>" name="<%=zIdNodeItem%>" value="<%=zidnode%>" />
  <input type="hidden" id="<%=zNNodeItem%>" name="<%=zNNodeItem%>" value="<%=znnode%>" />
  <input type="hidden" id="<%=zIdReadObjetItem%>" name="<%=zIdReadObjetItem%>" value="<%=zidreadobject%>" />
  <input type="hidden" id="<%=zIdSentenceItem%>" name="<%=zIdSentenceItem%>" value="<%=zidsentence%>"/>		
  <input type="hidden" id="<%=zApiSqlItem%>" name="<%=zApiSqlItem%>" value="<%=zapisql%>"/>
  <input type="hidden" id="<%=zPARAM_RETMODE%>" name="<%=zPARAM_RETMODE%>" value="<%=zdf_retmode%>"/>
  <input type="hidden" id="<%=zPARAM_APPLYMODE%>" name="<%=zPARAM_APPLYMODE%>" value="<%=zdf_applymode%>"/>
  <input type="hidden" id="ARG_LIST_PRED_ID_SCENARIO" name="ARG_LIST_PRED_ID_SCENARIO" value=""/>
  <input type="hidden" id="ARG_LIST_PRED_ID_TABLE_BASE" name="ARG_LIST_PRED_ID_TABLE_BASE" value=""/>
  <input type="hidden" id="SENTENCES_IN_USED" name="SENTENCES_IN_USED" value=""/>
  <input type="hidden" id="zreloadsentence" name="zreloadsentence" value = "<%=zreloadsentence%>" />
  <input type="hidden" id="zSentencesTobeReloaded" name="zSentencesTobeReloaded" value = "<%=zSentencesTobeReloaded%>" />
  
  <table class="form" width="100%" cellspacing="2" border="2">
  <thead>
   <tr class="titulo">  
    <th colspan="3" id="m4tit" >&nbsp;</th>
    <th colspan="1">&nbsp;<a title="<m4:label m4name="<%=zSHCOLBDEL%>" htmlsafe="true"/>" href="javascript:removeFilter();"> <img alt="<m4:label m4name="<%=zSHCOLBDEL%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_bor.jsp" %> /> </a></th>
    </tr>
  </thead>
  <tbody>
  <tr>
  	<td colspan="1" class="td22">&nbsp;<m4:label m4name="<%=zSHCO_LB_SCENARIO%>" htmlsafe="true"/></td>
  	<td class="valor" colspan="3">&nbsp;	
	<select class="selectform50" name="<%=zIdScenarioItem%>" id="<%=zIdScenarioItem%>" tabindex="<%=(zTab + 1)%>" 
	  title="<m4:label m4name="<%=zSHCO_LB_SCENARIO%>" htmlsafe="true"/>
    		" 
	  onFocus="saveScenario()"  onchange="changeScenario()" >	</select>
  	</td>
  </tr>
  <tr> <td colspan="4">
     <table class="filter" width="100%" cellspacing="0" border="0">
       <tr><td>&nbsp;&nbsp;
	    <a tabindex="<%=(zTab + 1)%>" title="<%=zSHCOLBEDIT_val%> <m4:label m4name="<%=zSHCOLBFILTER%>" htmlsafe="true"/>"
  		href="javascript:editFilter();"><img <%@ include file="../files_gif/ic_mod.jsp"%> alt="<%=zSHCOLBEDIT_val%> <m4:label m4name="<%=zSHCOLBFILTER%>" htmlsafe="true"/>" ></img>
		</a><m4:label m4name="<%=zSHCOLBFILTER%>" htmlsafe="true"/>&nbsp;&nbsp; 
		<a title="<%=zSHCOLBLIST_val%> <m4:label m4name="<%=zSHCOLBPREDFILTER%>" htmlsafe="true"/>" href="javascript:listPredFilters('<%=g_zListOfSentenceInUse%>');"><img <%@ include file="../files_gif/ic_list.jsp"%>alt="<%=zSHCOLBLIST_val%> <m4:label m4name="<%=zSHCOLBPREDFILTER%>" htmlsafe="true"/>" ></img>
		</a><m4:label m4name="<%=zSHCOLBPREDFILTER%>" htmlsafe="true"/></td>		
      </tr>
  	  <tr><td class="valor" colspan="4">&nbsp;
  	   <textarea  rows="3" class="disabled" id="<%=zFilterLangItem%>" name="<%=zFilterLangItem%>" title="" value="<%=znatlanguage%>" readonly="readonly" cols="20"></textarea></td>			
      </tr>
     </table></td>
  </tr>
  <tr><td align="center" colspan="4">
  <a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCOLBAPPLY%>" htmlsafe="true"/>" href="javascript:saveFilterNode();"><img <%@ include file="../files_gif/ic_ins_tmp.jsp" %> alt="<m4:label m4name="<%=zSHCOLBINSTEM%>" htmlsafe="true"/>" ></img></a>&nbsp;
  </td></tr>
  </tbody></table>
  <table width="100%">
  <tr><td align="center">
  		<a href="javascript:applyfilter();" ><img alt="<m4:label m4name="<%=zSHCO_LB_APPLY_FILTER%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCO_LB_APPLY_FILTER%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_apply_filter.jsp" %>  /></a>&nbsp;
  		<a href="javascript:cancelFilter();" ><img alt="<m4:label m4name="<%=zSHCOLBCANCEL%>" htmlsafe="true"/>" title="<m4:label m4name="<%=zSHCOLBCANCEL%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_can.jsp" %> /></a>&nbsp;
  </td></tr>
  </table>
  </form>
  <script type="text/javascript" language="Javascript1.5">
  m4tabfocus('NombreFormulario',1);
  </script>
  </div>
  <div id="capa_link" style="position:relative; left:81%; top:0%; width:15%; height:0%;z-index:2">
  <%@include file="../shco_g0/shco_gen_dynfilter_list.jsp" %>
  <script type="text/javascript">
     setSentenceUseInNodes ('<%=g_zListOfSentenceInUse%>');
  </script>
  </div>
  </div>
<%}%>
<m4:endpage/>
</body></html>
