<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_dynfilter_simplified.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="../shco_g0/shco_gen_taglib.jsp" %>
<%@ include file="../shco_g0/shco_gen_bag.jsp" %>

<% 
    //Constantes de definiciÛn del canal de dynfilter
    String zm4objectdynfilter  = "SHCO_GN_DYNFILTER";
    String zm4oaliasdynfilter = zm4objectdynfilter;

    //Nodos usados de SHCO_GN_DYNFILTER
    String znodolabeldynfilter = "SHCO_GN_LABEL";
    String znodoapidynfilter = "SHCO_DYNFILTER_API";
    String znododynfilterlist = "SHCO_DYNFILTER_LIST";
    String znodocomdynfilter = "SHCO_GN_COMUNICATION";
	
    //Par·metros del filtro din·mico
    String zIdSentenceItem = "ARG_ID_SENTENCE";
    String zApiSqlItem= "ARG_API_SQL";
    String zFilterLangItem = "ARG_LANGUAGE";
    String zIdScenarioItem = "ARG_ID_SCENARIO";

    //parametros que debe pasa la p·gina de lista
    String zdinfilterstyle=(String) request.getAttribute("zdinfilterstyle");
    String zsubsesion=(String) request.getAttribute("zsubsesion");
    String zpag =(String) request.getAttribute("zpag");
    String znw=(String) request.getAttribute("znw");
    String znew=(String) request.getAttribute("znew");
    String zidsentence=(String) request.getAttribute("zidsentence");
    String zapisql=(String) request.getAttribute("zapisql");
    String znatlanguage=(String) request.getAttribute("znatlanguage");
    String zidscenario=(String) request.getAttribute("zidscenario");

    //Literales	
    String zSHCOLBDEL=(String) request.getAttribute("zSHCOLBDEL");
    String zSHCOLBNEW=(String) request.getAttribute("zSHCOLBNEW");
    String zSHCOLBFILT=(String) request.getAttribute("zSHCOLBFILT");
    String zSHCOLBCLOSE=(String) request.getAttribute("zSHCOLBCLOSE");
    String zSHCOLBCLEAN_val=(String) request.getAttribute("zSHCOLBCLEAN_val");
    String zSHCOLBTITLE=(String) request.getAttribute("zSHCOLBTITLE");
    String zSHCOLBEASYFILT= (String) request.getAttribute("zSHCOLBEASYFILT");
	String zSHCOLBLIST = (String) request.getAttribute("zSHCOLBLIST");
	String zSHCOLBEDIT = (String) request.getAttribute("zSHCOLBEDIT");
	

    String zNNodeItem = "ARG_N_NODE";
    String zIdReadObjetItem ="ARG_ID_READ_OBJECT";
    String zListOfScenario ="ARG_SCENARIO_LIST";

    String zraizlabeldynfilter =  znodolabeldynfilter + ":" + zm4objectdynfilter  + "!" + znodolabeldynfilter + ".";
    String zcomunnodolist = znododynfilterlist + ":" + zm4objectdynfilter + "!" + znododynfilterlist + "[0]" + ".";

    String zSHCO_LB_SCENARIO  = zraizlabeldynfilter + "SHCO_LB_SCENARIO";
    String zSHCOLBEDITFILTER  = zraizlabeldynfilter + "SHCO_LB_FILTER";
	String zSHCOLBPREDFILTER  = zraizlabeldynfilter + "SHCO_LB_PRED_FILTER";
    String zlListOfScenario = zcomunnodolist + zListOfScenario;
    String zlIdReadObjetItem = zcomunnodolist + zIdReadObjetItem;	

    int zTab=0 ;
    int zCol =4;
%>


<script type="text/javascript" language="Javascript1.5">

    function ClearFilter(){
        m4valor("NombreFormulario","ARG_LANGUAGE", "", "set");
        m4valor("NombreFormulario","ARG_API_SQL", "", "set");
        m4valor("NombreFormulario","ARG_ID_SENTENCE", "", "set");
        m4valor("NombreFormulario","ARG_ID_SCENARIO", "" , "set");

        m4valor("oculto","zisdynfilter", "" , "set");
    }

    function saveScenario(){
        sIdScenarioBeforeChange =m4select("NombreFormulario","<%=zIdScenarioItem%>","id");
    }

    function changeScenario(){
        //Check if there are a sentence
        if ( m4valor("NombreFormulario","<%=zIdSentenceItem%>","","get")!= ""){
           var msg = m4getmessage('_dynFilter_1');
           if (confirm(msg)==true){
                m4valor("NombreFormulario","ARG_LANGUAGE", "", "set");
                m4valor("NombreFormulario","ARG_API_SQL", "", "set");
                m4valor("NombreFormulario","ARG_ID_SENTENCE", "", "set");		   	   	
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
		m4valor("frmcallfilter","zreloadsentence",m4valor("NombreFormulario","zreloadsentence","","get"),"set");
        m4submit("frmcallfilter"); 
    }
	
    function afterPredFilterSelection(){ 
     m4valor("NombreFormulario","zreloadsentence","1","set")
  }
  function listPredFilters(){
     //Establecer la sentencia usadas para no permitir que se borren
	 sActualSentence = "$$" + m4valor("NombreFormulario","<%=zIdSentenceItem%>","","get") +"$$";
	 m4valor ("NombreFormulario","SENTENCES_IN_USED",sActualSentence,"set");
	 
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
	
  <form action="/servlet/CheckSecurity/JSP/shco_g0/shco_gen_htmlfilter.jsp" name="frmcallfilter" id="frmcallfilter"  method="post" >
     <input type="hidden" id="zidoperation" name="zidoperation"  value="API_GET_FILTER_EX"/>
     <input type="hidden" id="zidsentence" name="zidsentence"  value=""/>
     <input type="hidden" id="zidescenario" name="zidescenario"  value=""/>
     <input type="hidden" id="zidtable" name="zidtable" value = "" />
     <input type="hidden" id="zsubsesion" name="zsubsesion" value = "<%=zsubsesion%>" />
     <input type="hidden" id="zreturnpage" name="zreturnpage" value = "isa.jsp" />
     <input type="hidden" id="zidrelationtype" name="zidrelationtype" value = "" />
     <input type="hidden" id="zhtmlfilterinstance" name="zhtmlfilterinstance" value = "" />
     <input type="hidden" id="znnode" name="znnode" value = "" />
     <input type="hidden" id="zretmode" name="zretmode" value = "1" />
	 <input type="hidden" id="zshowsavebutton" name="zshowsavebutton" value = "1" />
	 <input type="hidden" id="zreloadsentence" name="zreloadsentence" value = "0" />
  </form>

  <div id= "dinfilter" class="capaform" style ="<%=zdinfilterstyle%>" >
  
  <form action="" method="post" name="NombreFormulario" id="NombreFormulario" >

  
  <input type="hidden" id="<%=zNNodeItem%>" name="<%=zNNodeItem%>" value="" />
  <input type="hidden" id="<%=zIdReadObjetItem%>" name="<%=zIdReadObjetItem%>" value="" />
  <input type="hidden" id="<%=zIdSentenceItem%>" name="<%=zIdSentenceItem%>" value="<%=zidsentence%>">		
  <input type="hidden" id="<%=zApiSqlItem%>" name="<%=zApiSqlItem%>" value="<%=zapisql%>">
  <input type="hidden" id="ARG_LIST_PRED_ID_SCENARIO" name="ARG_LIST_PRED_ID_SCENARIO" value="">
  <input type="hidden" id="ARG_LIST_PRED_ID_TABLE_BASE" name="ARG_LIST_PRED_ID_TABLE_BASE" value="">
  <input type="hidden" id="SENTENCES_IN_USED" name="SENTENCES_IN_USED" value=""/>
  <input type="hidden" id="zreloadsentence" name="zreloadsentence" value = "0" />
  
 
  <table class="form" width="100%" cellspacing="2" border="0">
  <thead>
   <tr class="titulo">  
    <th colspan="1" id="m4tit" >&nbsp;</th>
    <th colspan="<%=zCol-2%>">
        &nbsp;&nbsp;<a title="<%=zSHCOLBCLEAN_val%>" href="javascript:ClearFilter();"><img alt="<%=zSHCOLBCLEAN_val%>"<%@ include file="../files_gif/ic_des.jsp" %> /></a>
    </th> 
    <th colspan ="1" align="right">&nbsp;<a href="" onclick="javascript:changetoeasyfilter();return false;"><m4:label m4name="<%=zSHCOLBEASYFILT%>" htmlsafe="true"/></a></th>	  
   </tr>
  </thead>
  <tbody> 
  <tr>
  	<td colspan="1" class="td22">&nbsp;<m4:label m4name="<%=zSHCO_LB_SCENARIO%>" htmlsafe="true"/></td>
  	<td class="valor" colspan="<%=zCol-1%>">&nbsp;	
	<select class="selectform50" name="<%=zIdScenarioItem%>" id="<%=zIdScenarioItem%>" tabindex="<%=(zTab + 1)%>" 
	  title="<m4:label m4name="<%=zSHCO_LB_SCENARIO%>" htmlsafe="true"/>" 
	  onFocus="saveScenario()"  onchange="changeScenario()" >	</select>
  	</td>
  </tr> 
   <tr> <td colspan="4">
   <table class="filter" width="100%" cellspacing="0" border="0">
       <tr><td>&nbsp;&nbsp;
	    <a tabindex="<%=(zTab + 1)%>" title="<m4:label m4name="<%=zSHCOLBEDIT%>" htmlsafe="true"/> <m4:label m4name="<%=zSHCOLBEDITFILTER%>" htmlsafe="true"/>"
  		href="javascript:editFilter();"><img <%@ include file="../files_gif/ic_mod.jsp"%> alt="<m4:label m4name="<%=zSHCOLBEDIT%>" htmlsafe="true"/> <m4:label m4name="<%=zSHCOLBEDITFILTER%>" htmlsafe="true"/>" ></img>
		</a><m4:label m4name="<%=zSHCOLBEDITFILTER%>" htmlsafe="true"/>&nbsp;&nbsp; 
        <a title="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/> <m4:label m4name="<%=zSHCOLBPREDFILTER%>" htmlsafe="true"/>" href="javascript:listPredFilters();"><img <%@ include file="../files_gif/ic_list.jsp"%>alt="<m4:label m4name="<%=zSHCOLBLIST%>" htmlsafe="true"/> <m4:label m4name="<%=zSHCOLBPREDFILTER%>" htmlsafe="true"/>" ></img>
		</a><m4:label m4name="<%=zSHCOLBPREDFILTER%>" htmlsafe="true"/></td>		
        </tr>
  	  <tr><td class="valor" colspan="4">&nbsp;
  	   <textarea  rows="3" class="disabled" id="<%=zFilterLangItem%>" name="<%=zFilterLangItem%>" title="" value="<%=znatlanguage%>" readonly="readonly"><%=znatlanguage%></textarea></td>			
      </tr>
     </table>
     </td>
  </tr>

  <%@ include file="shco_gen_list_filter_buttons.jspf" %>
  
  <script type="text/javascript">
        m4valor('NombreFormulario','<%=zNNodeItem%>','<m4:label m4name="<%=zSHCOLBTITLE%>" htmlsafe="true"/>','set');
        m4valor('NombreFormulario','<%=zIdReadObjetItem%>', '<m4:item m4name="<%=zlIdReadObjetItem%>" jsafe="true"/>','set');
        fillSelectWithScenarios('<m4:item m4name="<%= zlListOfScenario%>" jsafe="true" />');
  </script>

  </tbody>
  </table>
</form>
</div>
