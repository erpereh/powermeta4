<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_htmlfilter.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="/shco_g0/shco_gen_taglib.jsp" %>
<%@ page  import="com.meta4.taglib.util.M4PresentationUtilTaglib.*"%>
<html><head><title></title>
<%@ include file="/shco_g0/shco_gen_bag.jsp" %><%@ include file="/shco_g0/shco_gen_css.jsp" %>
<%@ include file="/shco_g0/shco_gen_list_arg.jsp" %>
<%@ include file="../shco_g0/shco_gen_tec_include.jspf" %>
<%!	
	private static String getStringValue(String sValue) {
		return ((sValue == null) || sValue.equals("") || sValue.equals("null")) ? null : sValue;
	}
%>
<%
        String zsubsesion = getStringValue(request.getParameter("zsubsesion"));
        if (zsubsesion == null){ zsubsesion= "tchtmlfilter";} 
		String zsubsesiondynfilter = getStringValue(request.getParameter("zsubsesiondynfilter"));
	    //Recogida de valores
        String sIdOperation = getStringValue(request.getParameter("zidoperation"));
      	String sIdSentence = getStringValue(request.getParameter("zidsentence"));
      	String sNSentence = getStringValue(request.getParameter("znsentence"));    		     
       	String sIdEscenario = getStringValue(request.getParameter("zidescenario"));      
       	String sIdTable = getStringValue(request.getParameter("zidtable"));  
        String sDireccion = getStringValue(request.getParameter("zreturnpage"));  
        String sIdRelationType = getStringValue(request.getParameter("zidrelationtype"));
        String zhtmlfilterinstance = getStringValue(request.getParameter("zhtmlfilterinstance"));
		String zretmode = getStringValue(request.getParameter("zretmode"));
		String zshowsavebutton = getStringValue(request.getParameter("zshowsavebutton"));
		String sReloadSentence = getStringValue(request.getParameter("zreloadsentence"));

        String zcancel = getStringValue(request.getParameter("zcancel"));

      	String sIdDetail = getStringValue(request.getParameter("txtIdDetail"));  
  		String sFilterDetailGenInfo = getStringValue(request.getParameter("txtDetailGenInfo"));   
       	String sFilterDetailRightInfo = getStringValue(request.getParameter("txtDetailRightInfo"));   
       	String sFilterDetailLeftInfo = getStringValue(request.getParameter("txtDetailLeftInfo"));      
	
        String sRigthLeftTable= getStringValue(request.getParameter("RigthLeftTable"));      
        String sLastIdDetailSelected= getStringValue(request.getParameter("lastIdDetailSelected"));          
        String sLastUsingExist = getStringValue(request.getParameter("lastUsingExist"));          
        String sLastSelAgrupOpOpenSelected = getStringValue(request.getParameter("lastAgrupOpOpenSelected"));  
        String sLastRelOpSelected = getStringValue(request.getParameter("lastRelOpSelected"));  
        String sLastLogicOpSelected = getStringValue(request.getParameter("lastLogicOpSelected"));  
        String sLastAgrupOpCloseSelected = getStringValue(request.getParameter("lastAgrupOpCloseSelected"));  
        String sLastLeftTableSelected = getStringValue(request.getParameter("lastLeftTableSelected"));  
        String sLastLeftTableFieldSelected = getStringValue(request.getParameter("lastLeftTableFieldSelected"));  
        String sLastRigthTableSelected = getStringValue(request.getParameter("lastRigthTableSelected"));  
        String sLastRigthTableFieldSelected = getStringValue(request.getParameter("lastRigthTableFieldSelected"));  
        String sLastRigthValueSelected = getStringValue(request.getParameter("lastRigthValueSelected"));    
        String zdynfilteralias = getStringValue(request.getParameter("zdynfilteralias")); 
		String znnode = getStringValue(request.getParameter("znnode"));
        		
		if (sIdTable != null){
		   sIdTable = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sIdTable);
		}
		if (sLastLeftTableSelected != null){
		   sLastLeftTableSelected = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sLastLeftTableSelected);
		}
		if (sLastLeftTableFieldSelected != null){
		   sLastLeftTableFieldSelected = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sLastLeftTableFieldSelected);
		}
		if (sLastRigthTableSelected != null){
		   sLastRigthTableSelected = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sLastRigthTableSelected);
		}
	    if (sLastRigthTableFieldSelected != null){
		   sLastRigthTableFieldSelected = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sLastRigthTableFieldSelected);
		}
	    if (sLastRigthValueSelected != null){
		   sLastRigthValueSelected = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sLastRigthValueSelected);
		}		
	    if (sLastRelOpSelected != null){
		   sLastRelOpSelected = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sLastRelOpSelected);
		}		
	    if (sLastLogicOpSelected != null){
		   sLastLogicOpSelected = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sLastLogicOpSelected);
		}
		
  		int zRadioRightTableField =0;   
		int zRadioRightValue=1;

%>

<%!
 //Objetos del formulario 
 static final String zselLeftTable = "selLeftTable";
 static final String zselLeftTableFields = "selLeftTableFields";
 static final String zselRigthTable = "selRigthTable";                     
 static final String zselRigthTableFields = "selRigthTableFields";
 static final String zfrmHtmlFilter = "frmHtmlFilter";
 static final String zselAllTablesExceptTableBase = "selAllTablesExceptTableBase";
 static final String zselAllTables = "selAllTables";
%>

<%@ include file="/shco_g0/shco_gen_htmlfilter_m4def.jsp" %>
<%@ include file="/shco_g0/shco_gen_htmlfilter_act.jsp" %>

<% /*******************************************************************************************        
Recogemos parte de la información a mostrar. La que necesitamos  para comprobar
si nos tenemos que ir, y la que necesitamos devolver en caso de irnos 
********************************************************************************************/%>        
  
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_APISQL%>" m4varname="sApiSql"/>
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_ID_SENTENCE%>" m4varname="sSentence"/>
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_IS_SYNTAX_OK%>" m4varname="sSyntaxOK" m4format="0"/>
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_NATURAL_LANG%>" m4varname="sNatLang"/>
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_IS_SENTENCE_SAVED%>" m4varname="sIsSentenceSaved"/>

<% if (sIdSentence == null){
   sIdSentence = sSentence;  // Por si hay sentencia ya generada (p.e API_SET_FILTER con error de sintaxis)
}%>
<%
String zhelp ="SHCO_GEN_HTMLFILTER.htm";
if (znnode == null) { znnode ="";}
String zvalue = znnode;
String zraizlabel =  sNodeSHCO_GN_LABEL + ":" + sM4HtmlFilterCLAlias  + "!" + sNodeSHCO_GN_LABEL + ".";
String zSHCO_LB_SET_FILTER = zraizlabel + "SHCO_LB_SET_FILTER";
String zSHCO_LB_SET_DETAIL = zraizlabel + "SHCO_LB_SET_DETAIL";
String zSHCO_LB_DESCRIPTION = zraizlabel + "SHCO_LB_DESCRIPTION";
String zSHCO_LB_ID_DETAIL = zraizlabel + "SHCO_LB_ID_DETAIL";
String zSHCO_LB_VALUE = zraizlabel + "SHCO_LB_VALUE";
String zSHCO_LB_TABLE = zraizlabel + "SHCO_LB_TABLE";
String zSHCO_LB_TABLE_FIELD = zraizlabel + "SHCO_LB_TABLE_FIELD";
String zSHCO_LB_REL_OP = zraizlabel + "SHCO_LB_REL_OP";
String zSHCO_LB_LOGIC_OP = zraizlabel + "SHCO_LB_LOGIC_OP";
String zSHCO_LB_BRACKETS_OPEN = zraizlabel + "SHCO_LB_BRACKETS_OPEN";
String zSHCO_LB_BRACKETS_CLOSE = zraizlabel + "SHCO_LB_BRACKETS_CLOSE";
String zSHCO_LB_ALL_RECORDS = zraizlabel + "SHCO_LB_ALL_RECORDS";
String zSHCO_LB_EXIST_RECORD = zraizlabel + "SHCO_LB_EXIST_RECORD";
String zSHCO_LB_CANCEL = zraizlabel + "SHCO_LB_CANCEL";
String zSHCO_LB_DETAIL = zraizlabel + "SHCO_LB_DETAIL";
String zSHCO_LB_NAT_LANGUAGE =zraizlabel + "SHCO_LB_NAT_LANGUAGE";
%>

<%@include file="/shco_g0/shco_gen_js.jsp" %>
<%-- [unicode] --%><%@ include file="../shco_g0/shco_gen_m4val_js.jsp" %>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_mt.js"></script>
<script type="text/javascript" language="Javascript1.5" src="/library/m4gen_adv_functions.js"></script>
<script type="text/javascript">

 //Constantes
 sPUNTO_COMA = ";";
 sTABLE_SEP= "$$";
 sFIELD_SEP= "||";
 sEMPTY = ""; 
 sOP_STR_TYPE = "STR";
 sOP_STR_TYPE_ESP = "STR_ESP";
 sOP_DATE_TYPE = "DATE";
 sOP_NUM_TYPE = "NUM";
 sCHECKED= "1";
 sNOT_CHECKED="0";
 sDETAIL_SEP = "$$";
 var bAfterCloseForm = false;
 var l_sStatus ="1"; //"1": Nuevo "0":Modificando
 var l_sAllSavedDetails = sDETAIL_SEP;  // Existing details to show a warning when we are about to overwrite one
 var l_iNextIdDetail = 1;
  
  function htmlfilter_cambio_estado(vEstado){
     var msg = m4getmessage("_htmlFilter_setlog_new");
	 var sIdClass= "form";	 
  	 l_sStatus = vEstado;		  
     if (l_sStatus == "0"){
	 	 sIdClass="insert";
		 msg = m4getmessage("_htmlFilter_setlog_act");		 
	 }
	 //Change class and title
	 m4prop('<%=zfrmHtmlFilter%>','txtIdDetail','className',sIdClass,'set',false);
	 m4rewritecell('m4tit',msg);
  }
  function limp(){  
    showDetail('','',m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTable%>','id'),'',m4select('<%=zfrmHtmlFilter%>','<%=zselRigthTable%>','id'),'','','','<%=zRadioRightValue%>','','','');
	htmlfilter_cambio_estado("1");
	m4valor('<%=zfrmHtmlFilter%>','txtIdDetail',l_iNextIdDetail,'set');
	fillSelTables('');
  }
  
  function m4formatdatefromISO (sdate){
    if (m4formatdatefromISO.arguments.length <1) throw (new m4class_numparametrosincorrecto("m4formatdatefromISO",m4formatdatefromISO.arguments.length,1));
    var ocadena = new String(sdate);
    var atrozos = ocadena.split("-");
    syear =atrozos[0].toString();
    smonth =atrozos[1].toString()
    sday = atrozos[2].toString();
    return m4builtdate(m4parseInt(sday),m4parseInt(smonth),m4parseInt(syear))
  }

  function showDetail(sIdDetail,sRadExistAll,sLeftTable,sLeftTableField,sRightTable,sRightTableField,sRightValue,sAgrupOpOpen,sRadioButton,sRelOp,sAgrupOpClose,sLogOp){
        
       m4valor ('<%=zfrmHtmlFilter%>','txtIdDetail',sIdDetail,'set');
	   m4checkradio('<%=zfrmHtmlFilter%>','radExistAllRecords',sRadExistAll);
	   m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','<%=zselLeftTable%>'),sLeftTable,'id');
	   m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>'),sLeftTableField,'id');
       m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','<%=zselRigthTable%>'),sRightTable,'id');
       m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','<%=zselRigthTableFields%>'),sRightTableField,'id');
	   m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','selAgrupOpOpen'),sAgrupOpOpen,'value');
	   
	   //Bug 0114099
 	   var sFieldM4Type= m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>','value');
	   var sValueType = getRelTypeFromM4Type(sFieldM4Type);
       if (sValueType == sOP_DATE_TYPE){
		  var ss = m4formatdatefromISO (sRightValue);
   	      sRightValue = m4formatdatefromISO (sRightValue);           			        			    
       }					
	   
	   m4valor("<%=zfrmHtmlFilter%>","txtRightFieldValue",sRightValue,"set");
	   m4checkradio('<%=zfrmHtmlFilter%>','radRightFieldValue',sRadioButton);     
       changeFieldValue("radRightFieldValue");
  	   m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','selRelOp'),sRelOp,'id');
       m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','selAgrupOpClose'),sAgrupOpClose,'value');
	   m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','selOpLog'),sLogOp,'id');
  }
             
     function changeFieldValue(sRadioButtonName){ 
	   var oRadio = m4objeto("<%=zfrmHtmlFilter%>","radRightFieldValue");
	   var oRightTable = m4objeto("<%=zfrmHtmlFilter%>","<%=zselRigthTable%>");
	   var oRightTableField = m4objeto("<%=zfrmHtmlFilter%>","<%=zselRigthTableFields%>");
	   var sObligTable ="   ";
   	   var sObligValue ="   ";
		 //Campo
        if (oRadio[0].checked){
			m4valor("<%=zfrmHtmlFilter%>","txtRightFieldValue","","set");
			m4prop("<%=zfrmHtmlFilter%>","txtRightFieldValue","display","none","set",true);
			oRightTable.style.display = "block";
			oRightTableField.style.visibility = "visible";
			sObligTable =" * ";		
        }else{
 		    m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','<%=zselRigthTable%>'),'','text');   
 		    m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','<%=zselRigthTableFields%>'),'','text');
			m4prop("<%=zfrmHtmlFilter%>","txtRightFieldValue","display","block","set",true);
			oRightTable.style.display = "none";
			oRightTableField.style.visibility = "hidden";
			sObligValue=" * ";
		}
		m4rewritecell("oblig_table_value", sObligTable );
    	m4rewritecell("oblig_value",sObligValue); 	    	          	          	
       showhideOpRel("<%=zfrmHtmlFilter%>","selAllRelOp","selRelOp","<%=zselLeftTableFields%>");
    }

	function ExecuteFilterOperation(sIdOperation,sCancel){
		m4valor('frmOpFilterParams','zidoperation',sIdOperation,'set');
		m4valor('frmOpFilterParams','zidsentence','<%=sIdSentence%>','set'); 	
		m4valor('frmOpFilterParams','zidescenario','<%=sIdEscenario%>','set');
		m4valor('frmOpFilterParams','zidtable','<%=sIdTable%>','set');
		m4valor('frmOpFilterParams','zreturnpage','<%=sDireccion%>','set');
		m4valor('frmOpFilterParams','zcancel',sCancel,'set');
		m4submit('frmOpFilterParams');			
	}

	function CloseForm(sSentence,sNatLang, sApiSql,sSyntaxOk,sCancel,sretmode){
	
	   //Close the form and return values if the syntax is ok o cancel
       if (sSyntaxOk == "1" || sCancel == true){
	      if (sretmode == "1"){
		  	var aval=new Array();
			aval[0]=sSentence;
			aval[1]=sNatLang;
			aval[2]=sApiSql;
		    aval[3]="0";  //Marca de modificado en memoria			  
			bAfterCloseForm = true;
			m4returnvalues(aval)			
		  }else{
	  	    m4valor ('frmBackValues','txtIdSentence',sSentence,'set');
		    m4valor ('frmBackValues','txtLanguage',sNatLang,'set');
		    m4valor ('frmBackValues','txtApiSql',sApiSql,'set');
		    m4valor ('frmBackValues','txtIdOperation','SAVE','set');
			m4submit('frmBackValues');
		  }  
	   }else{ m4setlog('_htmlFilter_1');}		 		
	}
	
	function IsDetailCorrect(){
	  var bDetailCorrect = false;
      var sErrorMessage="";
	  var oRightValue = m4objeto('<%=zfrmHtmlFilter%>','txtRightFieldValue');
      var oLeftTableField =m4objeto('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>');
  	  var oRightTable = m4objeto('<%=zfrmHtmlFilter%>','<%=zselRigthTable%>');
	  var oRightTableField =m4objeto('<%=zfrmHtmlFilter%>','<%=zselRigthTableFields%>');
	  
	  m4dismarkobject(oLeftTableField,oRightTable,oRightTableField,oRightValue);
      var sfunciones = "m4valinput('_num_oblig','<%=zfrmHtmlFilter%>','txtIdDetail',1,'<m4:label m4name="<%=zSHCO_LB_ID_DETAIL%>" jsafe="true"/>')";
	  var verr=m4valform(sfunciones);
      if (verr == 1){
     	  var sLeftTableField = m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>','id');
     	  if (sLeftTableField ==""){
		      sErrorMessage = sErrorMessage + m4getmessage('_htmlFilter_4')+"\n";
			  m4markobject(oLeftTableField);
		  }
       	  var radiovalue= m4valor('<%=zfrmHtmlFilter%>','radRightFieldValue','','get');	 
     	  if (radiovalue == "<%=zRadioRightTableField%>"){
     	   	 var sRightTable = m4select('<%=zfrmHtmlFilter%>','<%=zselRigthTable%>','id');
      	     var sRightTableField = m4select('<%=zfrmHtmlFilter%>','<%=zselRigthTableFields%>','id');
     		 if (sRightTable ==""){
			 	sErrorMessage = sErrorMessage + m4getmessage('_htmlFilter_6')+"\n";
				m4markobject(oRightTable);
			 }
     	     if (sRightTableField == ""){
			 	sErrorMessage = sErrorMessage + m4getmessage('_htmlFilter_7')+"\n";
				m4markobject(oRightTableField);
			}     	  	 	      
     	  }else{
     	     var sRightValue = m4valor('<%=zfrmHtmlFilter%>','txtRightFieldValue','','get');
     		 if (sRightValue ==""){
			 	sErrorMessage = sErrorMessage + m4getmessage('_htmlFilter_5')+"\n";
				m4markobject(oRightValue);
			 }
     	  }
     	  if (sErrorMessage !="") {
		     m4setlog('_htmlFilter_3',sErrorMessage);			 
		  }else{// No errors  
           
		   
     		  if (radiovalue == "<%=zRadioRightTableField%>"){
     		     //Compare the types of the fields
     			 var sM4TypeLeft= m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>','value');
				 var sValueTypeLeft=getRelTypeFromM4Type(sM4TypeLeft);
     			 var sM4TypeRight= m4select('<%=zfrmHtmlFilter%>','<%=zselRigthTableFields%>','value');
 				 var sValueTypeRight=getRelTypeFromM4Type(sM4TypeRight);
     			 if (sValueTypeLeft != sValueTypeRight){
     			 	m4setlog('_htmlFilter_2');
     			}else{
     			   bDetailCorrect = true;
     			}
     		  }else{
       	        // If there is a value at the right site, test the type
     	  	 	var sfunciones ="";
     			var sFieldM4Type= m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>','value');
				var sValueType = getRelTypeFromM4Type(sFieldM4Type);
     			if (sValueType == sOP_STR_TYPE){
        			    sfunciones = "m4valinput('_alfanum_oblig','<%=zfrmHtmlFilter%>','txtRightFieldValue',1,'<m4:label m4name="<%=zSHCO_LB_VALUE%>" jsafe="true"/>')";
     			}else if (sValueType == sOP_DATE_TYPE){
       			    sfunciones = "m4valinput('_date_oblig','<%=zfrmHtmlFilter%>','txtRightFieldValue',1,'<m4:label m4name="<%=zSHCO_LB_VALUE%>" jsafe="true"/>',sformatofechas)";
     			}else if (sValueType == sOP_NUM_TYPE){
     		        sfunciones = "m4valinput('_num_oblig','<%=zfrmHtmlFilter%>','txtRightFieldValue',1,'<m4:label m4name="<%=zSHCO_LB_VALUE%>" jsafe="true"/>')";
     			}
                 verr=m4valform(sfunciones);
     	 	    if (verr ==1) {
     			   bDetailCorrect = true;
     		  	}
     		  }
          }
	  }
	  return bDetailCorrect;
}

	function ExecuteDetailOperation(sIdOperation,sIdDetail) 
	{
	  var sDetailGenInfo = "";
      var sDetailRightInfo = "";
      var sDetailLeftInfo = "";
      var bDetailCorrect =true;
      var sMessage = "";
	  var sTxtIdDetail ="";
	  
      if (sIdOperation == '<%=sAPI_SET_DETAIL%>'){
	   	bDetailCorrect = IsDetailCorrect();
		sTxtIdDetail = m4valor('<%=zfrmHtmlFilter%>','txtIdDetail','','get');		
		if (bDetailCorrect == true){
		   // if the ID Detail is modified
		   if (sTxtIdDetail != '<%=sIdDetail%>'){
		   	  //Check if we are overwritten an existing detail
			  if ( l_sAllSavedDetails.indexOf (sDETAIL_SEP +sTxtIdDetail + sDETAIL_SEP)	!= -1){         	 	   
			  	 msg = m4getmessage("_setlog_pk_sobreescrita");  
		  	 	 if ( confirm(msg) == false){bDetailCorrect= false;}
			  }else if (l_sStatus =="0"){ // Check if we are making a copy of the record				      	 	
		  		   msg = m4getmessage("_setlog_pk_modificada");
		  	 	   if ( confirm(msg) == false){bDetailCorrect= false;}
		   	  }			 			     
		    } //Id Detail modified
		}
		
		 if ( bDetailCorrect == true){			
				//-----------Take detail general info in order ---------------------------------- 
			   sDetailGenInfo = sDetailGenInfo + m4valor('<%=zfrmHtmlFilter%>','radExistAllRecords','','get')+ sPUNTO_COMA;
          	   sDetailGenInfo = sDetailGenInfo + m4valor('<%=zfrmHtmlFilter%>','selAgrupOpOpen','','get') + sPUNTO_COMA;
               sDetailGenInfo = sDetailGenInfo +m4select('<%=zfrmHtmlFilter%>','selRelOp','id') + sPUNTO_COMA;
			   sDetailGenInfo = sDetailGenInfo +m4valor('<%=zfrmHtmlFilter%>','selAgrupOpClose','','get')  + sPUNTO_COMA;
			   sDetailGenInfo = sDetailGenInfo +m4select('<%=zfrmHtmlFilter%>','selOpLog','id') + sPUNTO_COMA;
			  //----------- Take left side Table/Field -------------------------------
               sDetailLeftInfo = m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTable%>','id') + sTABLE_SEP;
               sDetailLeftInfo = sDetailLeftInfo +m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>','id')+ sTABLE_SEP;
 			  //----------- Take right side Table/Field -------------------------------
				var radiovalue= m4valor('<%=zfrmHtmlFilter%>','radRightFieldValue','','get');
	  			if (radiovalue == "<%=zRadioRightTableField%>"){   //Tabla$$Campo$$
                   sDetailRightInfo = m4select('<%=zfrmHtmlFilter%>','<%=zselRigthTable%>','id') +sTABLE_SEP;
                   sDetailRightInfo = sDetailRightInfo +m4select('<%=zfrmHtmlFilter%>','<%=zselRigthTableFields%>','id') +sTABLE_SEP;
                }else{ 
					//Bug 0114099   
				    var sValue = m4valor('<%=zfrmHtmlFilter%>','txtRightFieldValue','','get'); 
 				    var sFieldM4Type= m4select('<%=zfrmHtmlFilter%>','<%=zselLeftTableFields%>','value');
				    var sValueType = getRelTypeFromM4Type(sFieldM4Type);
     			    if (sValueType == sOP_DATE_TYPE){
					   sValue = m4formatdatetoISO(sValue);          			        			    
       			    }					
				    sDetailRightInfo = sDetailRightInfo + sValue; 
				}
         } //bDetailCorrect == true
       } else if (sIdOperation == '<%=sAPI_DELETE_DETAIL%>'){ 
		   var msg = m4getmessage("_setlog_temp_borrar");
	   	   if ( confirm(msg) == false){bDetailCorrect = false;}
	   }   
	      
        if (bDetailCorrect == true){
		   m4valor('frmOpFilterParams','zidoperation',sIdOperation,'set'); 	
           m4valor('frmOpFilterParams','txtIdDetail',sIdDetail,'set');
		   m4valor('frmOpFilterParams','zidsentence','<%=sIdSentence%>','set');
   	       m4valor('frmOpFilterParams','txtDetailGenInfo',sDetailGenInfo,'set');
   	       m4valor('frmOpFilterParams','txtDetailRightInfo',sDetailRightInfo,'set');
 	       m4valor('frmOpFilterParams','txtDetailLeftInfo',sDetailLeftInfo,'set');
           m4valor('frmOpFilterParams','zreturnpage','<%=sDireccion%>','set');       
		   m4submit('frmOpFilterParams');                        
       }//bDetailCorrect == true
	}

	
 function getTableFields1(sSelectTable,sSelectTableFields){
    sFieldsList = m4select("<%=zfrmHtmlFilter%>",sSelectTable,"value");
    m4changeSelectContent("<%=zfrmHtmlFilter%>",sSelectTableFields,sFieldsList);
 }
	
function getRelTypeFromM4Type(sFielM4Type){

 var sRelType= "";
 if((sFielM4Type == "1")||(sFielM4Type == "2")||(sFielM4Type == "7")||(sFielM4Type == "3")){
        sRelType = sOP_STR_TYPE
 }else if ((sFielM4Type == "4")||( sFielM4Type == "5" )||( sFielM4Type == "12")) {
        sRelType = sOP_DATE_TYPE
 }else if ((sFielM4Type == "6" )||( sFielM4Type == "9")||( sFielM4Type == "8")) {
        sRelType = sOP_NUM_TYPE
 }else{ sRelType = sOP_STR_TYPE;}

 return sRelType;
}

function showhideOpRel(sidform,sselectFrom,sselectTo,sselectField){
	
	//En función del tipo del campo seleccionado en la select sfieldselect pasar los operadores
	// correspondientes de la select From a la select To.
	
	    var oselectFrom = m4objeto (sidform,sselectFrom);
	    var oselectTo = m4objeto (sidform,sselectTo);
	    var oselectField = m4objeto(sidform,sselectField);
	    var sOpRelTypeToShow= sOP_STR_TYPE;
	    var sOpRelTypeToShow2=sOP_STR_TYPE_ESP;
	    var oradRightFieldValue = m4objeto(sidform,"radRightFieldValue");
		var sFielM4Type ="";
	    
	    if (typeof(oselectField) != "undefined"){ //Si ya lo he creado
			if (oselectField.selectedIndex != -1 ){ //Si hay alguno seleccionado
			   if (m4select(sidform,sselectField,'value') != ""){ //Si el seleccionado no es el vacio
					 sFielM4Type = m4select(sidform,sselectField,'value');
			 		 sOpRelTypeToShow= getRelTypeFromM4Type(sFielM4Type);
				}
			}
		}

		//Si es tipo cadena comprobar si en la parte derecha estoy en formato
		//valor metemos tambien los especiales
		if (sOpRelTypeToShow == sOP_STR_TYPE){
		    if (typeof(oradRightFieldValue) != "undefined"){  //Si ya lo he creado
				if(oradRightFieldValue[0].checked){ //tabla_campo
					sOpRelTypeToShow2 ="";
				}
			}
		}else {sOpRelTypeToShow2 ="";}
		    
		var idLastOpRelSelect = m4select(sidform,sselectTo,'id');	
	    //Vacio la primera	    
	    oselectTo.options.length = 0;
	    oselectTo.selectedIndex = -1;
	    for (var i =0; i< oselectFrom.options.length;i++){
			if (oselectFrom.options[i].value == sOpRelTypeToShow || oselectFrom.options[i].value == sOpRelTypeToShow2){
			    m4genoption(oselectTo,oselectFrom.options[i].id,oselectFrom.options[i].value,oselectFrom.options[i].text)
			}
		}
		//Intentar posicionar en el mismo valor que antes
		if (idLastOpRelSelect != ""){m4searchoption2(m4objeto('<%=zfrmHtmlFilter%>','selRelOp'),idLastOpRelSelect,"id");}
	    
	}

	function setFilter(iNumDetails){
	    if (isThereDetails(iNumDetails) == true){
		   ExecuteFilterOperation('<%=sAPI_SET_FILTER%>','0');
		}	
	}
	
	function isThereDetails(iNumDetails){
	  var iReturn = true;
	  if (iNumDetails == 0){
		   m4showmessage('_htmlFilter_10');
		   iReturn= false;
	  }
	  return iReturn;			 
	}
	
    function afterSetPredFilterName(){
	    m4valor ('frmOpFilterParams','znsentence',m4valor('NombreFormulario','zPredFilterName','','get'),'set'); 
		ExecuteFilterOperation('<%=sAPI_SAVE_PRED_FILTER%>','0');	 
	}
	function savePredFilter (bFilterAlreadySaved,iNumDetails){
	    // Si es filtro grabado 
	    if (bFilterAlreadySaved == "1") {
		    if (iNumDetails == 0){// si no hay detalles preguntar si se quiere borrar
			  var msg = m4getmessage('_htmlFilter_9');
	          if (confirm(msg)==true){
	     		ExecuteFilterOperation('<%=sAPI_DELETE_PRED_FILTER%>','0'); 
			  }			   
			}else{
		     ExecuteFilterOperation('<%=sAPI_SAVE_PRED_FILTER%>','0');
			} 	
		}else{
		    if (isThereDetails(iNumDetails) == true){
			  m4windowcallback('shco_gen_htmlfilter_name.jsp','/servlet/CheckSecurity/JSP/shco_g0/shco_gen_htmlfilter_name.jsp',new Array('zPredFilterName'),'NombreFormulario','afterSetPredFilterName()','450','250','no','no');
			}
		}		
	}
	
	function fillSelTables(sOperatorExist){
	//Si el operador es <> '' es el Exist, en ese caso rellenar sin la tabla base
       var sSelectFrom = '<%=zselAllTables%>';
	   if (sOperatorExist!=''){sSelectFrom= '<%=zselAllTablesExceptTableBase%>';}	
       m4copySelectContent('<%=zfrmHtmlFilter%>',sSelectFrom,'<%=zselLeftTable%>');	   
       m4copySelectContent('<%=zfrmHtmlFilter%>',sSelectFrom,'<%=zselRigthTable%>');
	   getTableFields1('<%=zselLeftTable%>','<%=zselLeftTableFields%>');
   	   getTableFields1('<%=zselRigthTable%>','<%=zselRigthTableFields%>');
	}
</script>	
</head>
<body> 

<form method="post" name="NombreFormulario"  id="NombreFormulario" action ="" >
	<input type="hidden" name="zPredFilterName" id="zPredFilterName" value=""/>  
</form>

<form method="post" name="frmOpFilterParams"  id="frmOpFilterParams" action = '<%=sHTML_FILTER_PAGE%>' >
	<input type="hidden" name="zretmode" id="zretmode" value="<%=zretmode%>"/>
	<input type="hidden" name="zidoperation" id="zidoperation" value=""/>
	<input type="hidden" name="zidsentence" id="zidsentence" value='<%=sIdSentence%>'/>
	<input type="hidden" name="znsentence" id="znsentence" value='<%=sNSentence%>'/>
	<input type="hidden" name="zidescenario" id="zidescenario" value='<%=sIdEscenario%>'/>
	<input type="hidden" name="zidtable"  id="zidtable" value='<%=sIdTable%>'/>   
	<input type="hidden" name="zreturnpage"  id="zreturnpage" value='<%=sDireccion%>'/>   
	<input type="hidden" name="zdynfilteralias" id="zdynfilteralias"  value = '<%=zdynfilteralias%>'/>
	<input type="hidden" name="zsubsesion" id="zsubsesion"  value = '<%=zsubsesion%>' />
	<input type="hidden" name="zcancel" id="zcancel"  value = "" />
	<input type="hidden" name="txtIdDetail" id="txtIdDetail" value=""/>
	<input type="hidden" name="txtDetailGenInfo" id="txtDetailGenInfo" value=""/>
	<input type="hidden" name="txtDetailRightInfo" id="txtDetailRightInfo" value=""/>
	<input type="hidden" name="txtDetailLeftInfo" id="txtDetailLeftInfo" value=""/>
	<input type="hidden" name="RigthLeftTable" id="RigthLeftTable" value=""/>
	<input type="hidden" name="lastIdDetailSelected" id="lastIdDetailSelected" value=""/>
	<input type="hidden" name="lastUsingExist"  id="lastUsingExist" value=""/>
	<input type="hidden" name="lastAgrupOpOpenSelected" id="lastAgrupOpOpenSelected" value=""/>
    <input type="hidden" name="lastRelOpSelected" id="lastRelOpSelected" value=""/>
    <input type="hidden" name="lastLogicOpSelected" id="lastLogicOpSelected" value=""/>
	<input type="hidden" name="lastAgrupOpCloseSelected" id="lastAgrupOpCloseSelected" value=""/>
	<input type="hidden" name="lastLeftTableSelected" id="lastLeftTableSelected" value=""/>
	<input type="hidden" name="lastLeftTableFieldSelected" id="lastLeftTableFieldSelected" value=""/>
	<input type="hidden" name="lastLeftValueSelected" id="lastLeftValueSelected" value=""/>
	<input type="hidden" name="lastRigthTableSelected" id="lastRigthTableSelected" value=""/>
	<input type="hidden" name="lastRigthTableFieldSelected" id="lastRigthTableFieldSelected" value=""/>
	<input type="hidden" name="lastRigthValueSelected" id="lastRigthValueSelected" value=""/>
	<input type="hidden" name="znnode" id="znnode" value="<%=znnode%>"/>
	<input type="hidden" id="zsubsesiondynfilter" name="zsubsesiondynfilter" value ='<%=zsubsesiondynfilter%>'/>
	<input type="hidden" id="zshowsavebutton" name="zshowsavebutton" value ='<%=zshowsavebutton%>'/>
</form>

<form method="post" name="frmBackValues" action =  '<%=sDireccion%>' >
	<input type="hidden" name="txtIdSentence" id="txtIdSentence" value=""/>
	<input type="hidden" name="txtLanguage" id="txtLanguage" value=""/>
	<input type="hidden" name="txtApiSql"  id="txtApiSql" value=""/>
	<input type="hidden" name="txtIdOperation"  id="txtIdOperation" value=""/>   
    <input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = '<%=zdynfilteralias%>'/>
    <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesiondynfilter%>' />
</form>




<%@ include file="/shco_g0/shco_gen_label.jsp" %>
<%@ include file="/shco_g0/shco_gen_cab.jsp" %>
<%@include file="../shco_g0/shco_gen_title.jsp" %>
<% if (!sIdOperation.equals(sAPI_SET_FILTER) || !sSyntaxOK.equals("1") ){ %>  
<!-------------------------------------------------------------------------------------->        
<!-------- Página HTML del filtro ------------------------------------------------------>
<!----Si hemos hecho un setFilter con sintaxis correcta ya no se dibuja, nos vamos ----->
<!-------------------------------------------------------------------------------------->
<%int zTab=0;%>

<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_ID_DETAIL_IN_EDITION%>" m4varname="sIdDetail1" m4format="0"/>
<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_ADV%>" m4varname="sUsingExist" jsafe="true"/>  
<m4:item outputdef="<%=sOutputAdvancedOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperatorExist" jsafe="true"/>  	
<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_AGR_OPEN%>" m4varname="sSelectedAgrupOpOpen" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailLeftInfo%>" item="<%=sItemPROP_ID_TABLE_TRANSLATED%>" m4varname="sSelLeftTableTrans" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailLeftInfo%>" item="<%=sItemPROP_ID_TABLE%>" m4varname="sSelLeftTableId" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailLeftInfo%>" item="<%=sItemPROP_ID_TABLE_PATH%>" jsafe="true" m4varname="sSelLeftTablePath"/>
<m4:item outputdef="<%=sOutputFilterDetailLeftInfo%>" item="<%=sItemPROP_FIELD_TRANSLATED%>" m4varname="sSelLeftFieldTrans" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailLeftInfo%>" item="<%=sItemPROP_ID_FIELD%>" m4varname="sSelLeftFieldId" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_REL%>" m4varname="sSelectedRelOp" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_ID_TABLE_TRANSLATED%>" m4varname="sSelRightTableTrans" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_ID_TABLE%>" m4varname="sSelRightTableId" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_ID_TABLE_PATH%>" jsafe="true" m4varname="sSelRightTablePath"/>
<m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_VALUE%>" m4varname="sRightValue" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_FIELD_TRANSLATED%>" m4varname="sSelRightFieldTrans" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_ID_FIELD%>" m4varname="sSelRightFieldId" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_AGR_CLOSE%>" m4varname="sSelectedAgrupOpClose" jsafe="true"/>
<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_LOG%>" m4varname="sSelectedLogicOp" jsafe="true"/>

<% 
String sSelectedLeftTable ="";
String sSelectedLeftField = "";
String sSelectedRigthTable ="";
String sSelectedRightField = "";
String zValRadExistAll = "";
String zValLeftTable = "";
String zValLeftTableField = "";
String zValRigthTable = "";
String zValRightTableField = "";
String zValRightValue = "";
String zValAgrupOpClose = "";
String zValAgrupOpOpen = "";
String zValOpRel = "";
String zValOpLog = "";
String zRadioButton = "";


  if (!sSelLeftTableId.equals("")){
	   if (sSelLeftTablePath.equals("")){sSelLeftTablePath = sSelLeftTableId;}
	   sSelectedLeftTable = sSelLeftTableId + "||" + sSelLeftTableTrans + "||" + sSelLeftTablePath + "||";
  }
  if ( !sSelLeftFieldId.equals("")){sSelectedLeftField = sSelLeftFieldId;}
  if (!sSelRightTableId.equals("")){
    if (sSelRightTablePath.equals("")){sSelRightTablePath = sSelRightTableId;}
    sSelectedRigthTable = sSelRightTableId + "||" + sSelRightTableTrans + "||" + sSelRightTablePath + "||";
  }
  if (!sSelRightFieldId.equals("")){sSelectedRightField = sSelRightFieldId;}
  
  if (sLastUsingExist == null) {
    zValRadExistAll = sUsingExist;
  }else{ 
  	zValRadExistAll = sLastUsingExist ;	   
  }   
  if (sLastLeftTableSelected == null) {
    zValLeftTable = sSelectedLeftTable; 
  }else{	
  	zValLeftTable = sLastLeftTableSelected;		        		
  }	
  if (sLastLeftTableFieldSelected == null) {  
	 zValLeftTableField = sSelectedLeftField;
  }else{               		
     zValLeftTableField = sLastLeftTableFieldSelected;
  }
  if (sLastRigthValueSelected == null){
    zValRightValue = sRightValue;
  }else{
    zValRightValue = sLastRigthValueSelected;
  }
  if (sLastRigthTableSelected == null) { 
      zValRigthTable =  sSelectedRigthTable;
  }else{
      zValRigthTable =  sLastRigthTableSelected;
  }
  if (sLastRigthTableFieldSelected == null) {  
     zValRightTableField = sSelectedRightField;
  }else{
  	 zValRightTableField = sLastRigthTableFieldSelected;	
  }
  if (sLastSelAgrupOpOpenSelected == null) {  
     zValAgrupOpOpen = sSelectedAgrupOpOpen;
  }else{
     zValAgrupOpOpen =sLastSelAgrupOpOpenSelected;
  }          		
 
  //Si estamos editando un detalle hay que establecer lo que indique el detalle
  if((sSelRightTableId !=null) && (!sSelRightTableId.equals(""))){
       zRadioButton = zRadioRightTableField +"";  
  }else{ //Defecto (value)
     zRadioButton = zRadioRightValue +"";
  }
  
  if (sLastRelOpSelected == null) {  
     zValOpRel = sSelectedRelOp;  
  }else{
     zValOpRel = sLastRelOpSelected;
  } 
  if (sLastAgrupOpCloseSelected == null) {
    zValAgrupOpClose = sSelectedAgrupOpClose;
  }else{
   	zValAgrupOpClose = sLastAgrupOpCloseSelected;
  }		
  if (sLastLogicOpSelected == null) {  
     zValOpLog = sSelectedLogicOp;
  }else{
     zValOpLog = sLastLogicOpSelected;
  }  
  String zBaseTableInfo= "";
%>
  
<form name="<%=zfrmHtmlFilter%>" id="<%=zfrmHtmlFilter%>" >
<table class="form" width="100%" cellspacing="1" border="1">
<thead><tr class="titulo"><th colspan="5" id="m4tit">&nbsp;</th>
<th colspan="1">&nbsp;<a title="<m4:label m4name="<%=zSHCOLBCLEAN%>" htmlsafe="true"/>" href="javascript:limp();"><img alt="<m4:label m4name="<%=zSHCOLBCLEAN%>" htmlsafe="true"/>" <%@ include file="../files_gif/ic_des.jsp" %> /></a></th>
</tr></thead>
<tbody>
  <%//********* Detail information  ******************************************************************************%>
  <tr><td colspan="2" class="campo">*&nbsp;<m4:label m4name="<%=zSHCO_LB_ID_DETAIL%>" htmlsafe="true"/></td>
      <% if (sLastIdDetailSelected == null) {%>  
		<td colspan="4">&nbsp;<input tabindex="<%=(zTab + 1)%>" class="form" type="text" id="txtIdDetail" name="txtIdDetail" size="2" maxlength="2" title="<%=zSHCOLBWRITE_val%>&nbsp;<m4:label m4name="<%=zSHCO_LB_ID_DETAIL%>" htmlsafe="true"/>" value="<%=sIdDetail1%>" /></td>
      <%}else{%>
  		<td colspan="4">&nbsp;<input tabindex="<%=(zTab + 1)%>" class="form" type="text" id="txtIdDetail" name="txtIdDetail" size="2" maxlength="2" title="<%=zSHCOLBWRITE_val%>&nbsp;<m4:label m4name="<%=zSHCO_LB_ID_DETAIL%>" htmlsafe="true"/>" value="<%=sLastIdDetailSelected%>" /></td>	    
	  <%}%>
 </tr>
  <%//********* All/Exist  ******************************************************************************%>
  <tr><td colspan="6" class="campo"><input tabindex="<%=(zTab + 1)%>"  type="radio" id="radExistAllRecords" name="radExistAllRecords" value="" onclick="fillSelTables('');"
    title="<m4:label m4name="<%=zSHCO_LB_ALL_RECORDS%>" htmlsafe="true"/>"/>&nbsp;<m4:label m4name="<%=zSHCO_LB_ALL_RECORDS%>" htmlsafe="true"/>
  <input tabindex="<%=(zTab + 1)%>" type="radio" id="radExistAllRecords" name="radExistAllRecords" value="<%=sOperatorExist%>" onclick="fillSelTables('<%=sOperatorExist%>');"
     title="<m4:label m4name="<%=zSHCO_LB_EXIST_RECORD%>" htmlsafe="true"/>"/>&nbsp;<m4:label m4name="<%=zSHCO_LB_EXIST_RECORD%>" htmlsafe="true"/></td>
  </tr> 		  	
  <%//********* Open brackets  ******************************************************************************%>
  <tr><td width="6%"><table class="filter" width="100%" cellspacing="0" border="0">
    <tr><td class="td4">&nbsp;<m4:label m4name="<%=zSHCO_LB_BRACKETS_OPEN%>" htmlsafe="true"/></td></tr>
	<tr><td>
	    <select id="selAgrupOpOpen" name="selAgrupOpOpen"  class="selectfilter" tabindex="<%=(zTab + 1)%>">
			<option>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
   	        <script type="text/javascript">  g_oselAgrupOpOpen = m4objeto("<%=zfrmHtmlFilter%>","selAgrupOpOpen");</script> 	
			<m4:dataloop outputdef="<%=sOutputGroupOpenOperators%>">
			  <m4:item outputdef="<%=sOutputGroupOpenOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperator4" jsafe="true"/>  
			  <m4:item outputdef="<%=sOutputGroupOpenOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator4Desc" jsafe="true"/>    
			  <script type="text/javascript">
				m4genoption(g_oselAgrupOpOpen,'','<%=sOperator4%>','<%=sOperator4Desc%>');						   
			  </script> 
			</m4:dataloop>
		</select>  	           
   </td></tr>
   <tr><td>&nbsp;</td></tr>   
   </table>
  </td>
 <%//********* Left group ******************************************************************************%>
 <td width="27%"><table class="filter" width="100%" cellspacing="0" border="0">
    <tr><td>&nbsp;*&nbsp;<m4:label m4name="<%=zSHCO_LB_TABLE%>" htmlsafe="true"/>/<m4:label m4name="<%=zSHCO_LB_TABLE_FIELD%>" htmlsafe="true"/></td></tr>
	<tr><td><select id="<%=zselLeftTable%>" name="<%=zselLeftTable%>" class="selectfilter" tabindex="<%=(zTab + 1)%>" onchange="getTableFields1('<%=zselLeftTable%>','<%=zselLeftTableFields%>');" >   	      
    </select></td></tr>
    <tr><td> <select id="<%=zselLeftTableFields%>" name="<%=zselLeftTableFields%>"  class="selectfilter"  tabindex="<%=(zTab + 1)%>" onchange=showhideOpRel("<%=zfrmHtmlFilter%>","selAllRelOp","selRelOp","<%=zselLeftTableFields%>");>    	        				      
    </select></td></tr></table></td>
  <%//********* Relational operators  ******************************************************************************%>
  <td width="20%"><table class="filter" width="100%" cellspacing="0" border="0">
       <tr><td> &nbsp;&nbsp;*&nbsp;<m4:label m4name="<%=zSHCO_LB_REL_OP%>" htmlsafe="true"/></td></tr>   	  
       <tr><td> 
		<!------ Select with all the relational operators -->
		<select name="selAllRelOp" id="selAllRelOp" style = "display:none">
 	    <script type="text/javascript">g_oselAllRelOp = m4objeto("<%=zfrmHtmlFilter%>","selAllRelOp");</script> 
		<m4:dataloop outputdef="<%=sOutputRelationalOperators%>">
		   <m4:item outputdef="<%=sOutputRelationalOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator1Desc" jsafe="true"/>
           <m4:item outputdef="<%=sOutputRelationalOperators%>" item="<%=sItemID_OPERATOR%>" m4varname="sIdOperator1" jsafe="true"/>
           <m4:item outputdef="<%=sOutputRelationalOperators%>" item="<%=sItemOP_REL_GEN_TYPE%>" m4varname="sOperator1Type" jsafe="true"/>                    
		    <script type="text/javascript">
				m4genoption(g_oselAllRelOp,'<%=sIdOperator1%>','<%=sOperator1Type%>','<%=sOperator1Desc%>');						   
			</script>    
		</m4:dataloop>
		</select>
		<!------ Draw and empty select, we will fill it depending on the field type (string, int..) -->
		<select id="selRelOp"  name="selRelOp" class="selectfilter" tabindex="<%=(zTab + 1)%>"> 
		   <option>&nbsp;</option> 	
		</select>
		</td></tr>
        <tr><td>&nbsp;</td></tr>
   </table></td>
   <%//********* Rigth group  ******************************************************************************%>
   <td width="27%"><table class="filter" width="100%" cellspacing="0" border="0">   
       <tr><td><input type="radio" id="radRightFieldValue" name="radRightFieldValue" tabindex="<%=(zTab + 1)%>" value="<%=zRadioRightTableField%>" checked onclick=changeFieldValue("radRightFieldValue")></td>
   		<td id="oblig_table_value">&nbsp;</td>
		<td>&nbsp;<m4:label m4name="<%=zSHCO_LB_TABLE%>" htmlsafe="true"/>/<m4:label m4name="<%=zSHCO_LB_TABLE_FIELD%>" htmlsafe="true"/></td>	
		<td><input class = "campo" type=radio id="radRightFieldValue"  name="radRightFieldValue" tabindex="<%=(zTab + 1)%>" value="<%=zRadioRightValue%>" onclick=changeFieldValue("radRightFieldValue")>
   		<td id="oblig_value">&nbsp;</td>
        <td>&nbsp;<m4:label m4name="<%=zSHCO_LB_VALUE%>" htmlsafe="true"/></td>
	   </tr>	
	   <tr><td colspan="6"><select id="<%=zselRigthTable%>" name="<%=zselRigthTable%>"  class="selectfilter" tabindex="<%=(zTab + 1)%>" 
	       onchange="getTableFields1('<%=zselRigthTable%>','<%=zselRigthTableFields%>');" >
           </select>	 
	   </td></tr>
       <tr><td colspan="6"> <input type="text" id="txtRightFieldValue" name="txtRightFieldValue" tabindex="<%=(zTab + 1)%>" size="30" maxlength="30" class="form" style="display:none" value = '<%=sRightValue%>'
	     title="<%=zSHCOLBWRITE_val%>&nbsp;<m4:label m4name="<%=zSHCO_LB_VALUE%>" htmlsafe="true"/>"/>      
         <select  id="<%=zselRigthTableFields%>" name="<%=zselRigthTableFields%>"  class="selectfilter" tabindex="<%=(zTab + 1)%>"> 	     
        </select></td></tr>
	</table></td>
   <%//********* Close Brackets ******************************************************************************%>
	<td width="6%"><table class="filter" width="100%" cellspacing="0" border="0">
	   <tr><td>&nbsp;<m4:label m4name="<%=zSHCO_LB_BRACKETS_CLOSE%>" htmlsafe="true"/></td></tr>	
	   <tr><td><select id="selAgrupOpClose" name="selAgrupOpClose"  class="selectfilter" tabindex="<%=(zTab + 1)%>"> 
          <option>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
  	      <script type="text/javascript">  g_oselAgrupOpClose = m4objeto("<%=zfrmHtmlFilter%>","selAgrupOpClose");</script> 
  		  <m4:dataloop outputdef="<%=sOutputGroupCloseOperators%>">
             <m4:item outputdef="<%=sOutputGroupCloseOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperator2" jsafe="true"/>  
             <m4:item outputdef="<%=sOutputGroupCloseOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator2Desc" jsafe="true"/>
			 <script type="text/javascript">
				m4genoption(g_oselAgrupOpClose,'','<%=sOperator2%>','<%=sOperator2Desc%>');						   
			 </script>    
          </m4:dataloop>
		</select>
		</td></tr>
		<tr><td>&nbsp;</td></tr>
	</table></td>	   	
   <%//********* Logic operators******************************************************************************%>
	<td width="6%"><table class="filter" width="100%" cellspacing="0" border="0">
  	  <tr><td>&nbsp;<m4:label m4name="<%=zSHCO_LB_LOGIC_OP%>" htmlsafe="true"/></td></tr>	
	  <tr><td><select id="selOpLog" name="selOpLog"  class="selectfilter" tabindex="<%=(zTab + 1)%>"> 
         <option>&nbsp;</option> 
  	      <script type="text/javascript">  g_oselOpLog = m4objeto("<%=zfrmHtmlFilter%>","selOpLog");</script>
         <m4:dataloop outputdef="<%=sOutputLogicOperators%>">
            <m4:item outputdef="<%=sOutputLogicOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperator3" jsafe="true"/>  
            <m4:item outputdef="<%=sOutputLogicOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator3Desc" jsafe="true"/>    
            <m4:item outputdef="<%=sOutputLogicOperators%>" item="<%=sItemID_OPERATOR%>" m4varname="sIdOperator3" jsafe="true"/>
			<script type="text/javascript">
				m4genoption(g_oselOpLog,'<%=sIdOperator3%>','<%=sOperator3%>','<%=sOperator3Desc%>');						   
			 </script>  
          </m4:dataloop>
  		 </select>
	  </td></tr><tr><td>&nbsp;</td></tr>
	 </table></td> 		
  </tr>		    
</table>
<%//********* Generate table/fields select *****************************************************************************************%>
<%//** dos select auxiliares, un con todos las tablas y otro con todas menos la tabla base para usar en el exist %>
<select name="<%=zselAllTablesExceptTableBase%>" id="%=zselAllTablesExceptTableBase%>" style = "display:none"> </select>
<select name="<%=zselAllTables%>" id="<%=zselAllTables%>" style = "display:none"> </select>
	
<% int zNumberOfTables = 0;%>
<m4:dataloop outputdef="<%=sOutputFilterTables%>">
   <% zNumberOfTables = zNumberOfTables +1; %>             
   <m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemID_TRANSLATED_OBJ%>" m4varname="sIdTransObject" jsafe="true"/>  
   <m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemTABLE_INFO%>" m4varname="zTableInfoVar" jsafe="true"/>
   <m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemLIST_OF_FIELDS%>" m4varname="zListOfFieldsVar" jsafe="true"/>
   <m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemLIST_IS_TABLEBASE%>" m4varname="zIsTableBaseVar" m4format="0"/>
   <script type="text/javascript">
      m4genoption(m4objeto("<%=zfrmHtmlFilter%>","<%=zselAllTables%>"),'<%=zTableInfoVar%>','<%=zListOfFieldsVar%>','<%=sIdTransObject%>');	  						   
   </script>	
   <%if (!"1".equals(zIsTableBaseVar)){%>
      <script type="text/javascript">
	  m4genoption(m4objeto("<%=zfrmHtmlFilter%>","<%=zselAllTablesExceptTableBase%>"),'<%=zTableInfoVar%>','<%=zListOfFieldsVar%>','<%=sIdTransObject%>');	  						   
      </script>	
   <%}%>  	   
   </m4:dataloop>
<% //Deshabilitar el exist si no hay al menos dos tablas
   if(zNumberOfTables < 2){%>   
    <script type="text/javascript"> m4lock('<%=zfrmHtmlFilter%>','radExistAllRecords','disabled',"LOCK");</script>
<%}%>
<script type="text/javascript">
   fillSelTables('<%=zValRadExistAll%>');	
   showhideOpRel("<%=zfrmHtmlFilter%>","selAllRelOp","selRelOp","<%=zselLeftTableFields%>")
   //Restaurar valores del formulario
   showDetail('<%=sIdDetail1%>','<%=zValRadExistAll%>','<%=zValLeftTable%>','<%=zValLeftTableField%>','<%=zValRigthTable%>','<%=zValRightTableField%>','<%=zValRightValue%>','<%=zValAgrupOpOpen%>','<%=zRadioButton%>','<%=zValOpRel%>','<%=zValAgrupOpClose%>','<%=zValOpLog%>');   
</script> 	

<%//********* Set detail button *****************************************************************************************%>
<table width="100%"><tr><td align="center">
   <a tabindex="<%=(zTab+1)%>" title="<m4:label m4name="<%=zSHCO_LB_SET_DETAIL%>" htmlsafe="true"/>" href="javascript:ExecuteDetailOperation('<%=sAPI_SET_DETAIL%>',<%=zfrmHtmlFilter%>.txtIdDetail.value);"><img <%@ include file="/files_gif/ic_ace.jsp" %> alt="<m4:label m4name="<%=zSHCO_LB_SET_DETAIL%>" htmlsafe="true"/>" ></img></a>&nbsp;     
</td></tr></table>
<br>	
<%//********* Natural language ******************************************************************************************%>
<table class="datos" width="100%" cellpadding="2" cellspacing="2">
<tr class="titulo"><th>&nbsp;<m4:label m4name="<%=zSHCO_LB_NAT_LANGUAGE%>" htmlsafe="true"/></th></tr>
<tr><td class="valor"><%=sNatLang%></td></tr>
</table>

<%//********* List of details *******************************************************************************************%>
<% int zcounterOfDetails=0;
   String zpos="";
   int zcontrol=0;
 %>
<table class="datos" width="100%" cellpadding="0" cellspacing="0">
<thead>
<tr class="titulo"><th>&nbsp;</th><th>&nbsp;<m4:label m4name="<%=zSHCO_LB_ID_DETAIL%>" htmlsafe="true"/></th><th>&nbsp;<m4:label m4name="<%=zSHCO_LB_DESCRIPTION%>" htmlsafe="true"/></th><th>&nbsp;</th>
</tr></thead>
<tbody>
    <m4:dataloop outputdef="<%=sOutputFilterAllDetails%>">	
	   <%zcounterOfDetails++;%>	   
       <m4:item outputdef="<%=sOutputFilterAllDetails%>" item="<%=sItemPROP_ID_DETAIL%>" m4varname="sIdDetail2" m4format="0"/>	      
       <m4:item outputdef="<%=sOutputFilterAllDetails%>" item="<%=sItemPROP_NAT_LANG%>" m4varname="sFilter"/>   
       <tr><td class="boton<%=zpos%>"><a title="<%=zSHCOLBEDIT_val%>" 
 	      href="javascript:ExecuteDetailOperation('<%=sAPI_GET_DETAIL%>','<%=sIdDetail2%>')">
		  <img alt="<%=zSHCOLBEDIT_val%>" <%@ include file="/files_gif/ic_mod.jsp" %> /></a></td>
	   <td class="valor<%=zpos%>">&nbsp;<%=sIdDetail2%></td>
       <td class="valor<%=zpos%>">&nbsp;<%=sFilter%></td>
	   <td class="boton<%=zpos%>" colspan="2"><a title="<%=zSHCOLBDEL_val%>" href="javascript:ExecuteDetailOperation('<%=sAPI_DELETE_DETAIL%>','<%=sIdDetail2%>')">
	      <img alt="<%=zSHCOLBDEL_val%>" <%@ include file="/files_gif/ic_bor.jsp" %> /></a></td>  		   		
	   </tr>
		
		<%if (zpos.equals("2")){
		   zpos="";
		}else{
		   zpos="2";
		}
		%>
	
		<script type="text/javascript">
		  //Concat all details ID to detect when we are about to overwrite a record
		  l_sAllSavedDetails = l_sAllSavedDetails+ '<%=sIdDetail2%>' + "$$";
		  l_iNextIdDetail = m4parseInt('<%=sIdDetail2%>') +1;
		</script> 
	</m4:dataloop>
</table>
<table class="navegacion" width="100%" cellspacing="0"><tr><td class="navegacion">&nbsp;</td></tr></table>
<table width="100%">
<tr><td align="center">
   <%zTab=10;
   if ("1".equals(zshowsavebutton)){%>
   <a tabindex="<%=zTab++%>" title="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" href="javascript:savePredFilter('<%=sIsSentenceSaved%>','<%=zcounterOfDetails%>');"><img <%@ include file="/files_gif/ic_save.jsp" %> alt="<m4:label m4name="<%=zSHCOLBINSERT%>" htmlsafe="true"/>" ></img></a>&nbsp;
   <%}%>
   <a tabindex="<%=zTab++%>" title="<m4:label m4name="<%=zSHCO_LB_SET_FILTER%>" htmlsafe="true"/>" href="javascript:setFilter('<%=zcounterOfDetails%>');"><img <%@ include file="/files_gif/ic_apply_filter.jsp" %> alt="<m4:label m4name="<%=zSHCO_LB_SET_FILTER%>" htmlsafe="true"/>" ></img></a>&nbsp;
   <a tabindex="<%=zTab++%>" title="<m4:label m4name="<%=zSHCO_LB_CANCEL%>" htmlsafe="true"/>" href="javascript:ExecuteFilterOperation('<%=sAPI_SET_FILTER%>','1');"><img <%@ include file="/files_gif/ic_cer.jsp" %> alt="<m4:label m4name="<%=zSHCO_LB_CANCEL%>" htmlsafe="true"/>" ></img></a>&nbsp;   
</td>   
</tr>
</table>
<%}%>

<%
String zerror="";
String zshco_TEXT="";
String zm4object = sM4HtmlFilterCLAlias;
try {	
	M4Operations m = new M4Operations(request);
	zerror = m.getItem(sNodeSHCO_GN_COMUNICATION,zm4object,sNodeSHCO_GN_COMUNICATION,"","SHCO_ACTIVE_DEBUG");
}catch(Exception e) {}	
%>
<%@ include file="/shco_g0/shco_gen_error.jsp" %>

<%if (! zerror.equals("1")){%>
   <!---- Si ya hemos establecido el filtro nos vamos si la sintaxis es correcta -->
   <%if (sIdOperation.equals(sAPI_SET_FILTER)||sIdOperation.equals(sAPI_SAVE_PRED_FILTER)){ %>      
		<script type="text/javascript">
	     CloseForm('<%=sSentence%>','<%=com.meta4.taglib.util.M4PresentationUtilTaglib.escape(sNatLang)%>', '<%=sApiSql%>','<%=sSyntaxOK%>','<%=zcancel%>','<%=zretmode%>');	
        </script> 	      		
   <%}else if (sIdOperation.equals(sAPI_DELETE_PRED_FILTER)){%>
   	  	<script type="text/javascript">
	     CloseForm('','','','1','<%=zcancel%>','<%=zretmode%>');	
        </script> 	      		
<%}}%>
<script type="text/javascript">
	if (bAfterCloseForm == false) {
	   m4tabfocus("<%=zfrmHtmlFilter%>",1);
	   <%if (sIdOperation.equals(sAPI_GET_DETAIL)){%>
	       htmlfilter_cambio_estado ("0"); //Modificado 
	   <%}else{%>
	       htmlfilter_cambio_estado ("1"); //Nuevo
	   <%}%>
	}
	
</script>

</tbody></table>
<m4:endpage/>                
</form>
</body>
</html>
