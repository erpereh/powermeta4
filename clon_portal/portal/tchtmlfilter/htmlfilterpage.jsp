<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: htmlfilterpage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%@ include file="htmlfilterjob.jsp" %>
	

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title><%=Tran.getProperty("Html.Title")%></title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<meta http-equiv="Cache-Control" content="no-cache"/>	
	<link href="/style/tcreports_0.css" type="text/css" rel="stylesheet"/>

</HEAD>

<%
    String sHTML_FILTER_PAGE = "htmlfilter.jsp";
    String sTXT_RIGHT_FIELD_VALUE = "txtRightFieldValue"; 
 
%>

<body background="/images/fondo.gif">
	
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

	function setRadioButton(iIndex){

		with (document.forms.frmHtmlDynFilter){
			if (typeof(iIndex) != "undefined"){
				elements["radRightFieldValue"][iIndex].checked = true;
			}else{
				//Establecer el radio button correspondiente en función de si hay valor o no en la
				// caja de texto
               if (elements["selRigthTableField"].value != "") {
                  elements["radRightFieldValue"][1].checked = false;
                  elements["radRightFieldValue"][0].checked = true;
               }else{
                  elements["radRightFieldValue"][1].checked = true;
                  elements["radRightFieldValue"][0].checked = false;
               }
           } 
        }
        changeFieldValue("radRightFieldValue");
     }
     
    function m4checkradio(sidform,sidobjeto,vvalor){
		var oobjeto = document.forms[sidform].elements[sidobjeto];
		if (oobjeto.length >0){
			for (i=0; i<oobjeto.length; i++) {
   			if (oobjeto[i].value == vvalor) oobjeto = oobjeto[i];
   			} 
		}
		 oobjeto.checked =true;
	}
	
	function getradiovalue(sidform,sidobjeto){
	// Devolver el valor del radio seleccionado
		var oobjeto = document.forms[sidform].elements[sidobjeto];
		if (oobjeto.length >0){
			for (i=0; i<oobjeto.length; i++) {
				if (oobjeto[i].checked ==true){
				   return (oobjeto[i].value);
				}
			}
		}
	
	}
               
     function changeFieldValue(sRadioButtonName){ 

       with (document.forms.frmHtmlDynFilter){
		 //Campo
        if (radRightFieldValue[0].checked){
            elements["txtRightFieldValue"].value = ""
            elements["txtRightFieldValue"].style.display ="none" 
            selRightTable2.style.display="block" 
            selRigthTableField.style.visibility="visible" 
            radRightFieldValue[1].checked = false;
            radRightFieldValue[0].checked = true;
                    
        }else{
            selRightTable2.style.display="none" 
            selectComboValue("selRightTable2","");
            selRigthTableField.style.visibility="hidden" 
            selectComboValue("selRigthTableField","");
            elements["txtRightFieldValue"].style.display="block" 
            radRightFieldValue[0].checked = false;
            radRightFieldValue[1].checked = true;
         } 
      } //with
      
      showhideOpRel("frmHtmlDynFilter","selAllRelOp","selRelOp","selLeftTableField");

    }


	function selectComboValue(sComboName,sSelectValue){
	
    // Variables
       i = 0;
       iSelectedIndex = -1;	
       bFound = false;
       
       if (sSelectValue != "") {
          with (document.forms.frmHtmlDynFilter.elements[sComboName]){
          	  while (!bFound && i <options.length){
	            if (options[i].text == sSelectValue){
					iSelectedIndex = i;	
                    bFound = true;		
                 }else{ i= i+1;}
               
                 // Seleccionar
                 if (iSelectedIndex >=0){ selectedIndex = iSelectedIndex;}
               }//while	
           }//with 
        }//if

	}


      
	function selectComboValueByValue(sComboName,sSelectValue){
	
	    // Variables
            i = 0;
            iSelectedIndex = -1;	
            bFound = false;

          if (sSelectValue != "") {
          
          	with (document.forms.frmHtmlDynFilter.elements[sComboName]){
            	  while (!bFound & i <options.length){
                        
	            if (options[i].value == sSelectValue){
	              iSelectedIndex = i;	
                      bFound = true;		
                    }
                    else{
	              i= i+1;
                    }
               
                    // Seleccionar
                    if (iSelectedIndex >=0){
                      selectedIndex = iSelectedIndex;
                    }
                 }	
                } 
             }

	}

	function selectComboValueByIndex(sComboName,iSelectedIndex){
		document.forms.frmHtmlDynFilter.elements[sComboName].selectedIndex = iSelectedIndex;
	}
	
	
	// ----   Posicionar en un elemento de una combo
	function selectComboValueById(sComboName,sidoption){
	
	var oselect = document.forms.frmHtmlDynFilter.elements[sComboName];
	for(var ni=0; ni< oselect.options.length; ni++){    
		if (oselect.options[ni].id == sidoption){
		oselect.selectedIndex = ni; 
		break;
		}
	}	

	}



	function ExecuteFilterOperation(sIdOperation,sCancel) 
	{
		document.forms.frmOpFilterParams.zidoperation.value = sIdOperation;	
		document.forms.frmOpFilterParams.zidsentence.value = '<%=sIdSentence%>';	
		document.forms.frmOpFilterParams.zidescenario.value = '<%=sIdEscenario%>';	
		document.forms.frmOpFilterParams.zidtable.value = '<%=sIdTable%>';	
		document.forms.frmOpFilterParams.zreturnpage.value = '<%=sDireccion%>';	
		document.forms.frmOpFilterParams.zcancel.value = sCancel;	
 		document.forms.frmOpFilterParams.submit(); 
	}

	function CloseForm(sSentence,sNatLang, sApiSql,sSyntaxOk,sCancel) 
	{
          //Cerrar el formulario y retornar valores.
          //Sólo se retorna si la sintaxis de la sentencia es correcta. 
          if (sSyntaxOk == "1" || sCancel == "1"){
           	document.forms.frmBackValues.txtIdSentence.value = sSentence;
		    document.forms.frmBackValues.txtLanguage.value = sNatLang;
		    document.forms.frmBackValues.txtApiSql.value = sApiSql;
		    document.forms.frmBackValues.txtIdOperation.value = "SAVE";
		    document.forms.frmBackValues.submit(); 
	      }else{
            alert('<%=Tran.getProperty("Msg.WrongSyntax")%>');
          }
	}

        function IsDetailCorrect(sIdDetail){

        var bDetailCorrect = true;
        var sMessage = ""; 

	    with (document.forms.frmHtmlDynFilter){
                //Comprobar que está lo obligatorio
                if (sIdDetail == sEMPTY){
                   sMessage = '<%=Tran.getProperty("Msg.IdDetailMissing")%>';
                   bDetailCorrect = false;
                }else{
                    if (selLeftTable2.value == sEMPTY){
                      sMessage = '<%=Tran.getProperty("Msg.TableMissing")%>';
                      bDetailCorrect = false;
                    }else{
                        if( selLeftTableField.value == sEMPTY) {
                           sMessage = '<%=Tran.getProperty("Msg.FieldMissing")%>';
                           bDetailCorrect = false;
                        }else{
                            if(selRelOp.value == sEMPTY){
			       sMessage = '<%=Tran.getProperty("Msg.LogOpMissing")%>';
                               bDetailCorrect = false;
                            }else{ 
                               if (radRightFieldValue[0].checked){                          
		                  if (selRightTable2.value == sEMPTY)  {
			             sMessage = '<%=Tran.getProperty("Msg.TableMissing")%>';
                   	             bDetailCorrect = false;
                                  }else{
                                      if( selRigthTableField.value == sEMPTY){
			                 sMessage = '<%=Tran.getProperty("Msg.FieldMissing")%>';
                   	                 bDetailCorrect = false;
                                      }
                                  }
                               }else{
		                  if(elements["txtRightFieldValue"].value == sEMPTY){
			             sMessage = '<%=Tran.getProperty("Msg.ValueMissing")%>';
                   	             bDetailCorrect = false;
                                  }
                              }
                           }
                        }
                     }
                 }

             }//with
       
         if(bDetailCorrect == false){ alert(sMessage);}
         return bDetailCorrect;

        }//function

	function ExecuteDetailOperation(sIdOperation,sIdDetail) 
	{
	  //alert ("ExecuteDetailOperation (" + sIdOperation + " , " + sIdDetail + " )");
	  var sDetailGenInfo = "";
      var sDetailRightInfo = "";
      var sDetailLeftInfo = "";
      var bDetailCorrect =true;
      var sMessage = "";

      with (document.forms.frmHtmlDynFilter){

	     if (sIdOperation == '<%=sAPI_SET_DETAIL%>'){
	        bDetailCorrect = IsDetailCorrect(sIdDetail);
			if (bDetailCorrect == true){

				//Recoger la información general del detalle en orden
                //---------------------------------------------------
               sDetailGenInfo = sDetailGenInfo + getradiovalue("frmHtmlDynFilter","radExistAllRecords")+ sPUNTO_COMA;
          	   sDetailGenInfo = sDetailGenInfo +selAgrupOpOpen.value + sPUNTO_COMA;
               sDetailGenInfo = sDetailGenInfo +m4select('frmHtmlDynFilter','selRelOp','id') + sPUNTO_COMA;
			   sDetailGenInfo = sDetailGenInfo +selAgrupOpClose.value + sPUNTO_COMA;
			   sDetailGenInfo = sDetailGenInfo +m4select('frmHtmlDynFilter','selOpLog','id') + sPUNTO_COMA;

				//Recoger la información tupla izquierda
                //---------------------------------------------------
                 //Tabla$$Campo$$
                 sDetailLeftInfo = selLeftTable2.value + sTABLE_SEP;
                sDetailLeftInfo = sDetailLeftInfo +m4select('frmHtmlDynFilter','selLeftTableField','id')+ sTABLE_SEP;


				//Recoger la información tupla derecha
                //---------------------------------------------------
                if (radRightFieldValue[0].checked) //Tabla$$Campo$$
                {                           
                   sDetailRightInfo = selRightTable2.value +sTABLE_SEP;
                   sDetailRightInfo = sDetailRightInfo +m4select('frmHtmlDynFilter','selRigthTableField','id') +sTABLE_SEP;
                }
                else{ sDetailRightInfo = sDetailRightInfo +elements["txtRightFieldValue"].value; }
             } //bDetailCorrect == true
          } //sAPI_SET_DETAIL
        }//with    
	
        if (bDetailCorrect == true){	

            with(document.forms.frmOpDetailFilterParams){		
              	zidoperation.value = sIdOperation;	
              	txtIdDetail.value = sIdDetail;	
   	            zidsentence.value = '<%=sIdSentence%>';
				txtDetailGenInfo.value = sDetailGenInfo;	
    	        txtDetailRightInfo.value = sDetailRightInfo;	
				txtDetailLeftInfo.value = sDetailLeftInfo;	
				zreturnpage.value = '<%=sDireccion%>';
				submit(); 
           }
                       
       }//bDetailCorrect == true
	}

        function getTableFields(sTableSelect)
        {
 
           sRIGHT_TABLE ="1";
           sLEFT_TABLE ="0";
           
         
           // Nos dan la combo donde se ha producido  el cambio
           sIdSelectTable =  document.forms.frmHtmlDynFilter.elements[sTableSelect].value

           with (document.forms.frmOpGetTableFields){

			zidoperation.value = '<%=sAPI_GET_TABLE_FIELDS%>';	
			zidsentence.value ='<%=sIdSentence%>';	
			        zidtable.value = sIdSelectTable;	
			zreturnpage.value = '<%=sDireccion%>';

			if (sTableSelect=="selLeftTable2"){
				RigthLeftTable.value = sLEFT_TABLE;
			}
			else{
				RigthLeftTable.value = sRIGHT_TABLE;
			}
			       
			lastIdDetailSelected.value = document.forms.frmHtmlDynFilter.txtIdDetail.value;
			lastUsingExist.value = getradiovalue("frmHtmlDynFilter","radExistAllRecords");
			lastAgrupOpOpenSelected.value =document.forms.frmHtmlDynFilter.selAgrupOpOpen.value;
			lastRelOpSelected.value =m4select('frmHtmlDynFilter','selRelOp','id');
			lastLogicOpSelected.value =m4select('frmHtmlDynFilter','selOpLog','id');
			lastAgrupOpCloseSelected.value =document.forms.frmHtmlDynFilter.selAgrupOpClose.value;
			        
			lastLeftTableSelected.value =document.forms.frmHtmlDynFilter.selLeftTable2.selectedIndex;
			lastLeftTableFieldSelected.value =m4select('frmHtmlDynFilter','selLeftTableField','id');
			lastRigthTableSelected.value =document.forms.frmHtmlDynFilter.selRightTable2.selectedIndex;
       		lastRigthTableFieldSelected.value =m4select('frmHtmlDynFilter','selRigthTableField','id');
			lastRigthValueSelected.value =document.forms.frmHtmlDynFilter.txtRightFieldValue.value;
			
			
			
		 
			if (document.forms.frmHtmlDynFilter.radRightFieldValue[0].checked){
				lastRadRightFieldValueIndex.value=0;
			}else{
				lastRadRightFieldValueIndex.value=1;
			}
	
 			submit(); 
		  }

        } 
        
        function m4select(vidform,vselect,smodo){
		var oselect = document.forms[vidform].elements[vselect];
		if (oselect.selectedIndex == -1) return null;
			switch(smodo)
			{
			case "text" :
				return oselect.options[oselect.selectedIndex].text;
			case "value" :
				return oselect.options[oselect.selectedIndex].value;
			case "id" :
				return oselect.options[oselect.selectedIndex].id;
			default : 
			}
		}
		
		
	function showhideOpRel(sidform,sselectFrom,sselectTo,sselectField){
	
	//En función del tipo del campo seleccionado en la select sfieldselect pasar los operadores
	// correspondientes de la select From a la select To.
	
	    var oselectFrom = document.forms[sidform].elements[sselectFrom];
	    var oselectTo = document.forms[sidform].elements[sselectTo];
	    var oselectField = document.forms[sidform].elements[sselectField];
	    var sOpRelTypeToShow= sOP_STR_TYPE;
	    var sOpRelTypeToShow2=sOP_STR_TYPE_ESP;
	    var oradRightFieldValue = document.forms[sidform].elements["radRightFieldValue"];
	    
	    if (typeof(oselectField) != "undefined"){ //Si ya lo he creado
			if (oselectField.selectedIndex != -1 ){ //Si hay alguno seleccionado
			   if (m4select(sidform,sselectField,'value') != ""){ //Si el seleccionado no es el vacio
					sOpRelTypeToShow = m4select(sidform,sselectField,'value');
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
	
	    
	    //Vacio la primera
	    
	    oselectTo.options.length = 0;
	    oselectTo.selectedIndex = -1;
	    for (var i =0; i< oselectFrom.options.length;i++){
			if (oselectFrom.options[i].value == sOpRelTypeToShow || oselectFrom.options[i].value == sOpRelTypeToShow2){
				var oNewOption = new Option();
				oNewOption.id = oselectFrom.options[i].id;
				oNewOption.text = oselectFrom.options[i].text;
				oNewOption.value = oselectFrom.options[i].value;
				oselectTo.options.length ++;
				oselectTo.options[oselectTo.options.length-1]= oNewOption;
			}
		}
	    
	}
	
	function SetCheckBox(sidcheck,svalue){
		//se chequea si el valor que llega coincide con el valor de la check
		if (document.forms.frmHtmlDynFilter.elements[sidcheck].value ==svalue){
			document.forms.frmHtmlDynFilter.elements[sidcheck].checked="checked";
		}else{
			document.forms.frmHtmlDynFilter.elements[sidcheck].checked="";
		}
	}

</script>	
  
<!-------------------------------------------------------------------------------------->        
<!-------- Formulario de paso de parámetros para operaciones globales del Filtro-------->
<!-------------------------------------------------------------------------------------->

<form method="post" name="frmOpFilterParams"  id="frmOpFilterParams" action = '<%=sHTML_FILTER_PAGE%>' >
	<input type="hidden" name="zidoperation" id="zidoperation" value=""/>
	<input type="hidden" name="zidsentence" id="zidsentence" value='<%=sIdSentence%>'/>
	<input type="hidden" name="zidescenario" id="zidescenario" value='<%=sIdEscenario%>'/>
	<input type="hidden" name="zidtable"  id="zidtable" value='<%=sIdTable%>'/>   
	<input type="hidden" name="zreturnpage"  id="zreturnpage" value='<%=sDireccion%>'/>   
	<input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = '<%=zdynfilteralias%>'/>
	<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
	<input type="hidden" id="zcancel" name="zcancel" value = "" />
</form>


<!-------------------------------------------------------------------------------------->        
<!-------- Formulario de paso de parámetros para operaciones sobre detalles de filtro--->
<!-------------------------------------------------------------------------------------->

<form method="post" name="frmOpDetailFilterParams" action = '<%=sHTML_FILTER_PAGE%>' >
	<input type="hidden" name="zidoperation" id="zidoperation" value=""/>
	<input type="hidden" name="zidsentence" id="zidsentence" value=""/>
	<input type="hidden" name="txtIdDetail" id="txtIdDetail" value=""/>
	<input type="hidden" name="txtDetailGenInfo" id="txtDetailGenInfo" value=""/>
	<input type="hidden" name="txtDetailRightInfo" id="txtDetailRightInfo" value=""/>
	<input type="hidden" name="txtDetailLeftInfo" id="txtDetailLeftInfo" value=""/>
	<input type="hidden" name="zreturnpage"  id="zreturnpage" value=""/>   	
	<input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = '<%=zdynfilteralias%>'/>
	<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
</form>

<!-------------------------------------------------------------------------------------->        
<!-------- Formulario de paso de parámetros para traer los campos de una tabla  -------->
<!-------------------------------------------------------------------------------------->

<form method="post" name="frmOpGetTableFields" action = '<%=sHTML_FILTER_PAGE%>' >

	<input type="hidden" name="zidoperation" id="zidoperation" value=""/>
	<input type="hidden" name="zidsentence" id="zidsentence" value=""/>
	<input type="hidden" name="zidtable" id="zidtable" value=""/>
	<input type="hidden" name="zreturnpage" id="zreturnpage" value=""/>
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
	<input type="hidden" name="lastRadRightFieldValueIndex" id="lastRadRightFieldValueIndex" value=""/>
	
	<input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = '<%=zdynfilteralias%>'/>
	<input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />

</form>

<!-------------------------------------------------------------------------------------->        
<!-------- Formulario de Parametros de vuelta, a la pagina de donde ha sido llamada
<!-------------------------------------------------------------------------------------->

<form method="post" name="frmBackValues" action =  '<%=sDireccion%>' >
	
	<input type="hidden" name="txtIdSentence" id="txtIdSentence" value=""/>
	<input type="hidden" name="txtLanguage" id="txtLanguage" value=""/>
	<input type="hidden" name="txtApiSql"  id="txtApiSql" value=""/>
	<input type="hidden" name="txtIdOperation"  id="txtIdOperation" value=""/>
    
    <input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = '<%=zdynfilteralias%>'/>
    <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />

</form>


<!------------------------------------------------------------------------------------------->        
<!-------- Recogemos parte de la información a mostrar. La que necesitamos  para comprobar--->
<!-------- si nos tenemos que ir, y la que necesitamos devolver en caso de irnos ------------>
<!------------------------------------------------------------------------------------------->        
  
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_APISQL%>" m4varname="sApiSql"/>
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_ID_SENTENCE%>" m4varname="sSentence"/>
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_IS_SYNTAX_OK%>" m4varname="sSyntaxOK"/>
<m4:item outputdef="<%=sOutputFilterNatLanguage%>" item="<%=sItemPROP_NATURAL_LANG%>" m4varname="sNatLang"/>

<% if (!sIdOperation.equals(sAPI_SET_FILTER) || !sSyntaxOK.equals("1") ){ %>
  
<!-------------------------------------------------------------------------------------->        
<!-------- Página HTML del filtro ------------------------------------------------------>
<!----Si hemos hecho un setFilter con sintaxis correcta ya no se dibuja, nos vamos ----->
<!-------------------------------------------------------------------------------------->

<FORM name="frmHtmlDynFilter" id="frmHtmlDynFilter" >
<h3><b><%=Tran.getProperty("Html.Header")%></b></h3>
<TABLE border=2 cellPadding=1 cellSpacing=1 width="75%">

  <!---------------------------------------------------------
  -------------- Información de detalle----------------------
  ----------------------------------------------------------->
  <tr>
	<td><TABLE border=2 cellPadding=1 cellSpacing=1 width="100%">
            <m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_ID_DETAIL_IN_EDITION%>" m4varname="sIdDetail1"/> 
	       <tr><td>
	              <LABEL class = "fuentecabeceratabla"><%=Tran.getProperty("Detail.Id")%>:&nbsp;&nbsp;</LABEL>
	               <% if (sLastIdDetailSelected == null) {%>  
			<INPUT name=txtIdDetail id=txtIdDetail size=2 value ='<%=sIdDetail1%>' >
		<%}else{%>
	                <INPUT name=txtIdDetail id=txtIdDetail size=2 value ='<%=sLastIdDetailSelected%>' >
	              <%}%>
		    </td>   
               </tr>			   
             </TABLE>
      	</td>
   </tr>
   
   <tr>
      <td><TABLE border=1 cellPadding=1 cellSpacing=1 width="100%">
          <tr><td colspan = "7">
		    <LABEL class = "fuentecabeceratabla"><%=Tran.getProperty("Detail.Description")%></LABEL> 
                    <HR width = "100%">
	       </td>
		   </tr>	  
	  </td>
   </tr>	     
   <tr>
   	     <!------------------------------------------------------------------------------------------>
		 <!------------ Todos/ Existe alguno ------------------------------------------------------>
		 <!------------------------------------------------------------------------------------------>

      <td colspan = "7" ><table border="0" cellPadding="1" cellSpacing="1" width="100%">
      
      		<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_ADV%>" m4varname="sUsingExist"/>  
			<m4:item outputdef="<%=sOutputAdvancedOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperatorExist"/>  
			
          <tr><td >
			   <INPUT type="radio" name="radExistAllRecords" id="radExistAllRecords" value="">
			   <LABEL class = "fuentecabeceratabla2"><%=Tran.getProperty("lbl.AllRecords")%></LABEL>
	       </td>
		   </tr>	 
		   <tr><td colspan = "7">
			   <INPUT type="radio" name="radExistAllRecords" id="radExistAllRecords" value='<%=sOperatorExist%>'>
			   <LABEL class = "fuentecabeceratabla2"><%=Tran.getProperty("lbl.ExistRecord")%></LABEL> 		     		    
	       </td>
		   </tr>
		  </table> 	 
		  
            <% if (sLastUsingExist == null) {%>  
   	           <script type="text/javascript"> m4checkradio("frmHtmlDynFilter","radExistAllRecords","<%=sUsingExist%>");</script>
            <%}else{%> <script type="text/javascript">m4checkradio("frmHtmlDynFilter","radExistAllRecords","<%=sLastUsingExist%>");</script>
            <%}%> 
                         
	  </td>
   </tr>		
         
  <tr>      
	     <!------------------------------------------------------------------------------------------>
		 <!------------ Parentesis de apertura ------------------------------------------------------>
		 <!------------------------------------------------------------------------------------------>
		
		  <td>
			<TABLE >
			  <tr>
				<td>            
					<LABEL class = "fuentecabeceratabla2"><%=Tran.getProperty("lbl.OpenBrackets")%></LABEL> 
				</td>
			  </tr>
			  <tr>
			    <td>&nbsp;	
					<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_AGR_OPEN%>" m4varname="sSelectedAgrupOpOpen"/>  
					<SELECT name=selAgrupOpOpen id=selAgrupOpOpen class="fuentevalor">
						<OPTION>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</OPTION> 	
						<m4:dataloop outputdef="<%=sOutputGroupOpenOperators%>">
							<m4:item outputdef="<%=sOutputGroupOpenOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperator4"/>  
							<m4:item outputdef="<%=sOutputGroupOpenOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator4Desc"/>    
							<OPTION VALUE ='<%=sOperator4%>'><%=sOperator4Desc%></OPTION>
						</m4:dataloop>
					</SELECT>
  	           
					<% if (sLastSelAgrupOpOpenSelected == null) {%>  
   						<script type="text/javascript">selectComboValueByValue("selAgrupOpOpen",'<%=sSelectedAgrupOpOpen%>');</script>
					<%}else{%>
   						<script type="text/javascript">selectComboValueByValue("selAgrupOpOpen",'<%=sLastSelAgrupOpOpenSelected%>');</script>
					<%}%> 
                
				</td>
			 </tr>
			  <tr>
				<td>&nbsp; </td>
			  </tr>
		    </table>
		 </td>
	     <!------------------------------------------------------------------------------------------>
		 <!------------ Tupla izquierda-------------------------------------------------------------->
		 <!------------------------------------------------------------------------------------------>
	
		 <td >
		    <TABLE>
				<tr><td><LABEL class = "fuentecabeceratabla2"><%=Tran.getProperty("lbl.Field")%>:&nbsp;&nbsp;</LABEL></td></tr>
				<tr><td>
					<m4:item outputdef="<%=sOutputFilterDetailLeftInfo%>" item="<%=sItemPROP_ID_TABLE_TRANSLATED%>" m4varname="sSelectedLeftTable"/>  
					<SELECT name="selLeftTable2" id="selLeftTable2" class="fuentevalor"  onchange="getTableFields('selLeftTable2');" > 
						<OPTION>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </OPTION> 		
                        <m4:dataloop outputdef="<%=sOutputFilterTables%>">              
							<m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemID_TRANSLATED_OBJ%>" m4varname="sIdTransObject1"/>  
                            <m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemTABLE_INFO%>" m4varname="sTableInfo1"/>  
         		           <OPTION  value='<%=sTableInfo1%>'><%=sIdTransObject1%></OPTION>
 			            </m4:dataloop>
                    </SELECT>
					<% if (sLastLeftTableSelected == null) {%>  
   						<script type="text/javascript">	selectComboValue("selLeftTable2",'<%=sSelectedLeftTable%>');</script>
                    <%}else{%>	
						<script type="text/javascript">selectComboValueByIndex("selLeftTable2",'<%=sLastLeftTableSelected%>');</script>                		
                    <%}%> 
			      </td>
		       </tr>
               <tr><td>
                   <m4:item outputdef="<%=sOutputFilterDetailLeftInfo%>" item="<%=sItemPROP_FIELD_TRANSLATED%>" m4varname="sSelectedLeftField"/>  
			       <SELECT name="selLeftTableField" id="selLeftTableField" class="fuentevalor" onchange=showhideOpRel("frmHtmlDynFilter","selAllRelOp","selRelOp","selLeftTableField");> 
  						<OPTION>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </OPTION> 		      
                        <m4:dataloop outputdef="<%=sOutputFilterLeftTableFields%>">
							<m4:item outputdef="<%=sOutputFilterLeftTableFields%>" item="<%=sItemID_TRANSLATED_FLD%>" m4varname="sIdTransField1"/>  
                            <m4:item outputdef="<%=sOutputFilterLeftTableFields%>" item="ID_FIELD" m4varname="sIdField1"/>
                            <m4:item outputdef="<%=sOutputFilterLeftTableFields%>" item="<%=sItemPROP_GEN_TYPE%>" m4varname="sField1Type"/>    
                            
		                    
		                    <OPTION  id ='<%=sIdField1 + "||" + sIdTransField1 %>' value='<%=sField1Type%>'><%=sIdTransField1%></OPTION>
		                    
                        </m4:dataloop>
                    </SELECT>
				
					<% if (sLastLeftTableFieldSelected == null) {%>  
						<script type="text/javascript">selectComboValue("selLeftTableField",'<%=sSelectedLeftField%>');</script>
                    <%}else{%>
				       <script type="text/javascript">selectComboValueById("selLeftTableField",'<%=sLastLeftTableFieldSelected%>');</script>                		
                    <%}%> 

			    </td>
		       </tr>
		    </TABLE>	
		 </td>
		 
		 
		 <!------------------------------------------------------------------------------------------>
		 <!------------ Operadores Relacionales ----------------------------------------------------->
		 <!------------------------------------------------------------------------------------------>
		 <td valign="center">
			<TABLE>
			  <tr><td>&nbsp</td></tr>
			  <tr>
				<td>&nbsp; 
				<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_REL%>" m4varname="sSelectedRelOp"/>  
            
				<!------ Select con todos los tipos de operadores relacionales -->
				<SELECT name="selAllRelOp" id="selAllRelOp" STYLE = "display:none"> 
				<m4:dataloop outputdef="<%=sOutputRelationalOperators%>">
                    <m4:item outputdef="<%=sOutputRelationalOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator1Desc"/>
                    <m4:item outputdef="<%=sOutputRelationalOperators%>" item="<%=sItemID_OPERATOR%>" m4varname="sIdOperator1"/>
                    <m4:item outputdef="<%=sOutputRelationalOperators%>" item="<%=sItemOP_REL_GEN_TYPE%>" m4varname="sOperator1Type"/>                    
                    <OPTION  ID = '<%=sIdOperator1%>' VALUE ='<%=sOperator1Type%>'><%=sOperator1Desc%></OPTION>
				</m4:dataloop>
				</SELECT>
		    
				<!------ la dejo vacia y luego la relleno en función del tipo del campo -->
				<SELECT name="selRelOp" id="selRelOp" class="fuentevalor"> 
					<OPTION>  &nbsp;&nbsp;</OPTION> 	
				</SELECT>
		    
		
				<script type="text/javascript"> showhideOpRel("frmHtmlDynFilter","selAllRelOp","selRelOp","selLeftTableField");</script>  
				<% if (sLastRelOpSelected == null) {%>  
   					<script type="text/javascript">  selectComboValueById("selRelOp",'<%=sSelectedRelOp%>');</script>
				<%}else{%>
   					<script type="text/javascript"> selectComboValueById("selRelOp",'<%=sLastRelOpSelected%>');</script>
				<%}%>     
                </td>
            </tr>
            <tr><td>&nbsp</td></tr>
            </table>
		 </td>
		 
		 <!------------------------------------------------------------------------------------------>
		 <!------------ Tupla derecha --------------------------------------------------------------->
		 <!------------------------------------------------------------------------------------------>
		 
		 <td >	
		    <TABLE >
		    
		    <tr><td>&nbsp;
			       <INPUT type=radio name=radRightFieldValue id=radRightFieldValue value="0" checked onclick=changeFieldValue("radRightFieldValue")>
                       <LABEL class = "fuentecabeceratabla2" ><%=Tran.getProperty("lbl.Field")%></LABEL>
			       <INPUT class = "fuentecabeceratabla" type=radio name=radRightFieldValue id=radRightFieldValue value="1" onclick=changeFieldValue("radRightFieldValue")>
                       <LABEL class = "fuentecabeceratabla2" ><%=Tran.getProperty("lbl.Value")%></LABEL>
			    </td>
			</tr>
			
		     <tr><td>
                <m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_ID_TABLE_TRANSLATED%>" m4varname="sSelectedRigthTable"/>  
				<SELECT name=selRightTable2 id=selRightTable2 class="fuentevalor" onchange="getTableFields('selRightTable2');" >  
                   <OPTION>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   </OPTION> 		                
                   <m4:dataloop outputdef="<%=sOutputFilterTables%>">
                     <m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemID_TRANSLATED_OBJ%>" m4varname="sIdTransObject2"/>  
                     <m4:item outputdef="<%=sOutputFilterTables%>" item="<%=sItemTABLE_INFO%>" m4varname="sTableInfo2"/>  
		             <OPTION value='<%=sTableInfo2%>'><%=sIdTransObject2%></OPTION>
                   </m4:dataloop>
                </SELECT>
				<% if (sLastRigthTableSelected == null) {%>  
					<script type="text/javascript">selectComboValue("selRightTable2",'<%=sSelectedRigthTable%>');</script>
                <%}else{%>
					<script type="text/javascript">	selectComboValueByIndex("selRightTable2",'<%=sLastRigthTableSelected%>');</script>
                <%}%> 
			    </td>
		     </tr>

			 <tr><td>
                 <m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_VALUE%>" m4varname="sRightValue"/>  
			     <INPUT name="txtRightFieldValue" size = "37" id="txtRightFieldValue" class="fuentevalor" STYLE="display:none" value = '<%=sRightValue%>'> 
             
		       
                 <m4:item outputdef="<%=sOutputFilterDetailRightInfo%>" item="<%=sItemPROP_FIELD_TRANSLATED%>" m4varname="sSelectedRightField"/>  
		         <SELECT  name=selRigthTableField id=selRigthTableField class="fuentevalor"> 
					<OPTION>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </OPTION> 		
                    <m4:dataloop outputdef="<%=sOutputFilterRigthTableFields%>">
                       <m4:item outputdef="<%=sOutputFilterRigthTableFields%>" item="<%=sItemID_TRANSLATED_FLD%>" m4varname="sIdTransField2"/>  
                       <m4:item outputdef="<%=sOutputFilterRigthTableFields%>" item="<%=sItemID_FIELD%>" m4varname="sIdField2"/>  
                       <m4:item outputdef="<%=sOutputFilterRigthTableFields%>" item="<%=sItemPROP_GEN_TYPE%>" m4varname="sField2Type"/>    
					   <OPTION id='<%=sIdField2 + "||" + sIdTransField2%>' value = '<%=sField2Type%>'> <%=sIdTransField2%></OPTION>
					 </m4:dataloop>
                 </SELECT>
                 <% if (sLastRigthTableFieldSelected == null) {%>  
   					<script type="text/javascript">selectComboValue("selRigthTableField",'<%=sSelectedRightField%>');</script>
                 <%}else{%>
   	             	<script type="text/javascript">selectComboValueById("selRigthTableField",'<%=sLastRigthTableFieldSelected%>');</script>
                 <%}%> 

			    </td>
		       </tr>
		    
		    
		       
			<!-- Establecer el radio button adecuado una vez que tengamos los datos de la parte derecha-->	
			    <% if (slastRadRightFieldValueIndex != null) {%>  
					<script type="text/javascript"> setRadioButton('<%=slastRadRightFieldValueIndex%>'); </script>
				<%}else{%>
					<script type="text/javascript"> setRadioButton(); </script>
				<%}%>	
			
		     </TABLE>	
		  </td>
		  
		 <!------------------------------------------------------------------------------------------>
		 <!------------ Parentesis de cierre ------------------------------------------------------>
		 <!------------------------------------------------------------------------------------------>
	     <td valign="center">
			<TABLE >
			  <tr>
				<td>        
					<LABEL class = "fuentecabeceratabla2"><%=Tran.getProperty("lbl.CloseBrackets")%></LABEL> 
				</td>
			  </tr>
			  <tr>
				<td>&nbsp;
					<m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_AGR_CLOSE%>" m4varname="sSelectedAgrupOpClose"/>  
                    <SELECT name=selAgrupOpClose id=selAgrupOpClose class="fuentevalor"> 
                    <OPTION>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</OPTION> 
						<m4:dataloop outputdef="<%=sOutputGroupCloseOperators%>">
                          <m4:item outputdef="<%=sOutputGroupCloseOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperator2"/>  
                          <m4:item outputdef="<%=sOutputGroupCloseOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator2Desc"/>    
						  <OPTION VALUE ='<%=sOperator2%>'><%=sOperator2Desc%></OPTION>
                       </m4:dataloop>
					</SELECT>
					<% if (sLastAgrupOpCloseSelected == null) {%>  
   						<script type="text/javascript">selectComboValueByValue("selAgrupOpClose",'<%=sSelectedAgrupOpClose%>');</script>
					<%}else{%>
						<script type="text/javascript">selectComboValueByValue("selAgrupOpClose",'<%=sLastAgrupOpCloseSelected%>');</script>
					<%}%> 
				</td>  
			   </tr>
			   <tr>
				<td>&nbsp; </td>
			  </tr>
			</table>
		   </td>	   	
	          
	     <!------------------------------------------------------------------------------------------>
		 <!------------ Operadores lógicos  --------------------------------------------------------->
		 <!------------------------------------------------------------------------------------------>
	     
	     <td valign="center">
			<table>
			 <tr>
				<td>        
					<LABEL class = "fuentecabeceratabla2">&nbsp;&nbsp;&nbsp;<%=Tran.getProperty("lbl.LogicOperator")%></LABEL> 
				</td>
			  </tr>
			  <tr>
			    <td>&nbsp;
                <m4:item outputdef="<%=sOutputFilterDetailInfo%>" item="<%=sItemPROP_OP_LOG%>" m4varname="sSelectedLogicOp"/>  
                <SELECT name="selOpLog" id="selOpLog" class="fuentevalor"> 
                  <OPTION>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</OPTION> 
		          <m4:dataloop outputdef="<%=sOutputLogicOperators%>">
                    <m4:item outputdef="<%=sOutputLogicOperators%>" item="<%=sItemOPERATOR%>" m4varname="sOperator3"/>  
                    <m4:item outputdef="<%=sOutputLogicOperators%>" item="<%=sItemOPERATORDESC%>" m4varname="sOperator3Desc"/>    
                    <m4:item outputdef="<%=sOutputLogicOperators%>" item="<%=sItemID_OPERATOR%>" m4varname="sIdOperator3"/>
					<OPTION ID = '<%=sIdOperator3%>' VALUE ='<%=sOperator3%>'><%=sOperator3Desc%></OPTION>
                  </m4:dataloop>
		        </SELECT>
                <% if (sLastLogicOpSelected == null) {%>  
   	               <script type="text/javascript"> selectComboValueById("selOpLog",'<%=sSelectedLogicOp%>');</script>
                <%}else{%>
   	               <script type="text/javascript">selectComboValueById("selOpLog",'<%=sLastLogicOpSelected%>');</script>
                <%}%> 
	          </td>                 
			  </tr>
			   <tr>
				<td> &nbsp;	</td>
			  </tr>
			 </table>
		  </td> 
        </tr>         
          <tr>
              <!------------------------------------------------------------------------------------------>
			  <!------------ SetDetail ------------------------------------------------------------------->
			  <!------------------------------------------------------------------------------------------>
	     
			<td colspan ="6" align="middle">
				 <INPUT name=btnSetDetail id=btnSetDetail  type=button value=<%=Tran.getProperty("Button.SetDetail")%> onclick=ExecuteDetailOperation('<%=sAPI_SET_DETAIL%>',frmHtmlDynFilter.txtIdDetail.value)>
			</td>
	       </tr> 
            </TABLE> 
         </td>
      </tr>

     <!-----------------------------------------------------------
     -------------- Lista de detalles ---------------------------
     ----------------------------------------------------------->
    <tr>  
       <td>
	    <TABLE cellPadding=1 cellSpacing=1 width = "100%">
             <tr>
                <td width = "10%" class = "fuentecabeceratabla"><%=Tran.getProperty("Detail.Id")%></td>
                <td width = "82%" class = "fuentecabeceratabla"><%=Tran.getProperty("Detail.Description")%></td>
                <td></td>
             </tr>
            </TABLE>
        </td>
     </tr>
     <tr> 
        <td>
        <DIV style="width: 100%; height: 100px; overflow: auto">
          <TABLE border=1 cellPadding=1 cellSpacing=1 width="100%" >
             <m4:dataloop outputdef="<%=sOutputFilterAllDetails%>">
                <m4:item outputdef="<%=sOutputFilterAllDetails%>" item="<%=sItemPROP_ID_DETAIL%>" m4varname="sIdDetail2"/>   
                <m4:item outputdef="<%=sOutputFilterAllDetails%>" item="<%=sItemPROP_NAT_LANG%>" m4varname="sFilter"/>   
                <tr> 
                  <td width = "10%" align= "middle" class="fuentecampoaccion"><a href = "javascript:ExecuteDetailOperation('<%=sAPI_GET_DETAIL%>','<%=sIdDetail2%>')"><%=sIdDetail2%></a></td>
                  <td width = "82%" class="fuentevalor"><%=sFilter%> </td>
                  <td width = "2%" align="middle"><a href="javascript:ExecuteDetailOperation('<%=sAPI_DELETE_DETAIL%>','<%=sIdDetail2%>')">
			<img src="/images/tcreports/delete_28x28_out.gif" border="0"                               
                               title="<%=Tran.getProperty("Button.Delete")%>"
      		               onmouseover="this.src='/images/tcreports/delete_28x28_over.gif'"
		               onmouseout="this.src='/images/tcreports/delete_28x28_out.gif'">

				
		  </a></td>
                </tr>
             </m4:dataloop>
         </TABLE>
        </DIV>
      </td>
    </tr>

    <!-----------------------------------------------------------
     -------------- Lenguaje natural ---------------------------
     ---------------------------------------------------------->

    <tr> 
      <td colspan ="3" >	
       <TEXTAREA name=txtNaturalLang id=txtNaturalLang cols=110 rows = 5 class="fuentevalor" Wrap="virtual"><%=sNatLang%></TEXTAREA> 
      </td>  
     </tr>
    

   <!-----------------------------------------------------------
   -------------- Botones -------------------------------------
   ---------------------------------------------------------->
   <tr>
      <td align="right" colspan = "3">
         <INPUT name=btnAceptar id=btnAceptar type=button  value=<%=Tran.getProperty("Button.Ok")%> onclick="javascript:ExecuteFilterOperation('<%=sAPI_SET_FILTER%>','0');">         
	<INPUT name=btnCancelar id=btnCancelar type=button  value=<%=Tran.getProperty("Button.Cancel")%> onclick="javascript:ExecuteFilterOperation('<%=sAPI_SET_FILTER%>','1');" >
      </td>
  </tr>
</TABLE>

<%}%>

<!------------------------------------------------------------------------------>
<!---- Si ya hemos establecido el filtro nos vamos si la sintaxis es correcta -->
<!------------------------------------------------------------------------------>
 <% if (sIdOperation.equals(sAPI_SET_FILTER) ){ %>      
	  	<script type="text/javascript">
		//alert ('<%=zcancel%>') ;
	     CloseForm('<%=sSentence%>','<%=sNatLang%>', '<%=sApiSql%>','<%=sSyntaxOK%>','<%=zcancel%>');	
        </script> 	
<%}%>
                
</FORM>
</BODY>
</HTML>