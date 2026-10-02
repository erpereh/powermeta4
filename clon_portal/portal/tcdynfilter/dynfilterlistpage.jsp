<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: dynfilterlistpage.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="dynfilterlistjob.jsp" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title><%=Tran.getProperty("Html.Title")%></title>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<meta http-equiv="Cache-Control" content="no-cache"/>
	<link href="/style/tcreports_0.css" type="text/css" rel="stylesheet"/>
</head>
	


<body background="/images/fondo.gif">
	
<script type="text/javascript">         

	function filterOperation(sIdObject,sIdNode,sIdSentence){

    	with(document.forms.frmcallfilter)   
          {		
                 zidoperation.value = "API_GET_FILTER";
                 zidsentence.value = sIdSentence;
                 zidescenario.value = "";
                 zidtable.value = sIdObject;
 		         zforwardpage.value = "/servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilter.jsp"
                 zreturnpage.value = "/servlet/CheckSecurity/JSP/tcdynfilter/dynsavefilter.jsp"
                 zidrelationtype.value = 1;
	             zidnode.value = sIdNode;	
                 submit();                  
          }
	}	

	function RemoveFilter(sIdSentence,sIdNode){
        
         if (sIdSentence != "") 
         {
               
                 with(document.forms.frmcallfilter)   
                  {		
                 zidoperation.value = "API_REMOVE_FILTER";
                 zidsentence.value = sIdSentence;
                 zidescenario.value = "";
                 zidtable.value = "";
			     zforwardpage.value = "/servlet/CheckSecurity/JSP/tchtmlfilter/htmlfilterservice.jsp"
                 zreturnpage.value = "/servlet/CheckSecurity/JSP/tcdynfilter/dynsavefilter.jsp"
                 zidrelationtype.value = "";
	             zidnode.value = sIdNode;	
                 submit();                  
                 }	
          }	
    }

	function ApplyFilter(){
		document.forms.frmdynfilterlist.submit();
	}		


	function callReturnPage(sIdPage,sDynFiltersInfo){
        	with (document.forms.frmcallreturnpage){
             		action = sIdPage;
	     		zdynfiltersinfo.value = sDynFiltersInfo;	
   	     		submit();  
         }    
   }

</script>	
             
<P>&nbsp;</P>

<form name="frmcallfilter" id="frmcallfilter" action="/servlet/CheckSecurity/JSP/tcdynfilter/dynfilteredit.jsp" method="post" >
   <input type="hidden" id="zidoperation" name="zidoperation"  value=""/>
   <input type="hidden" id="zidsentence" name="zidsentence"  value=""/>
   <input type="hidden" id="zidescenario" name="zidescenario"  value=""/>
   <input type="hidden" id="zidtable" name="zidtable" value = "" />
   <input type="hidden" id="zforwardpage" name="zforwardpage" value = "" />
   <input type="hidden" id="zreturnpage" name="zreturnpage" value = "" />
   <input type="hidden" id="zidrelationtype" name="zidrelationtype" value = "" />
   <input type="hidden" id="zidnode" name="zidnode" value = "" />
   <input type="hidden" id="zdynfilteralias" name="zdynfilteralias" value = '<%=sDYN_FILTER_ALIAS%>'/>   
   <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
</form>

<form method="post" name="frmcallreturnpage" id=="frmcallreturnpage" action="" >
   <input type="hidden" id="zdynfiltersinfo" name="zdynfiltersinfo"  value=""/>
   <input type="hidden" id="zsubsesion" name="zsubsesion" value = '<%=zsubsesion%>' />
</form>

<!-------------------------------------------------------------------------------------->        
<!-------- Página HTML de listado de Nodos que tienen filtro dinamico ------------------------------->
<!-------------------------------------------------------------------------------------->
<form name="frmdynfilterlist" id="frmdynfilterlist" action="/servlet/CheckSecurity/JSP/tcdynfilter/dynapplyfilter.jsp" method="post" >
 <input type="hidden" id="zsubsesion" name="zsubsesion" value = "<%=zsubsesion%>" />
 <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr> 
                <td rowspan="2" valign="top" width="56">&nbsp;</td>
                <td width="617">
                  <h3><b><%=Tran.getProperty("Html.Header")%></b></h3>
                </td>
                <td >&nbsp;</td>
                <td rowspan="2" width="84">&nbsp; </td>
              </tr>
              <tr> 
                <td width="538">
                  <p><b><%=Tran.getProperty("Filter.Header")%></b></p>
                  <p>&nbsp;</p>
                </td>
                <td >&nbsp;</td>
              </tr>
 </table>

 <table border="2" cellpadding="0" cellspacing="0" width="100%">
    <tr> 
       <td> 
           <table border="0" cellPadding=1 cellSpacing=1 width="100%" >
            <tr> 
		<td width = "18%" class = "fuentecabeceratabla"><%=Tran.getProperty("Table.Node")%></td>
    		<td width = "78%" class = "fuentecabeceratabla"><%=Tran.getProperty("Table.LNatural")%></td>
		<td width = "4%" class = "fuentecabeceratabla">&nbsp;</td>	
	    </tr>
            </table>
         </td>
     <tr>
	<td>
         <DIV style="width: 100%; height: 100px; overflow: auto">
           <table border="1" cellPadding=1 cellSpacing=1" width="100%" >
                           
		<!------------------------------------------------------------------->
		<!-- loop para recorrer los nodos que tienen DynFilter  --------------------->
		<!------------------------------------------------------------------->

                <m4:dataloop outputdef="DynFilterNodeList">
		<tr>
			
                   	<!-- Columna: Link para editar el filtro ------------------->
                   	<!-------------------------------------------------->

                	  <td width = "20%" class="fuentecampoaccion">
                         	<m4:item outputdef="DynFilterNodeList" item="ID_NODE" m4varname="sIdNode"/>
		<m4:item outputdef="DynFilterNodeList" item="N_NODE" m4varname="sNNode"/>
	        	<m4:item outputdef="DynFilterNodeList" item="ID_READ_OBJECT" m4varname="sIdObject"/>
		<m4:item outputdef="DynFilterNodeList" item="ID_T3" m4varname="sIdT3"/>
		<m4:item outputdef="DynFilterNodeList" item="ARG_ID_SENTENCE" m4varname="sIdSentence"/>
		
			
		<a href="javascript:filterOperation('<%=sIdObject%>','<%=sIdNode%>','<%=sIdSentence%>')"> <%= sNNode%>  </a>				
                           </td>
			 
                  
		   
                    <!-- Columna: Lenguaje natural del filtro ----------------->
                    <!-------------------------------------------------->				
     		<td width = "80%" class="fuentevalor">
                       	<m4:item outputdef="DynFilterNodeList" item="ARG_LANGUAGE" m4varname="sLang_Natural"/>
			<%= sLang_Natural%>
                    	
	            </td>
		 <!-- Columna para el boton de borrar ------------>
		<td  align ="middle" width="2%">
                            <a  href="javascript:RemoveFilter('<%=sIdSentence%>','<%=sIdNode%>')"> 
		 <img border="0" hspace="4" align="top" src="/images/tcreports/delete_28x28_out.gif">
		</a>
		</td>
		   
                   

         		</m4:dataloop>
		<!------------------------------------------------------------------->
		<!-- fin loop para recorrer los filtros dinamicos ----------------->
		<!------------------------------------------------------------------->


                        	
         </table>
       </DIV>	
       </TD>
     </TR>
     <TR>
	<TD>

 <!------------------------------------------------------------------->
 <!-- Botones de aceptar y cancelar----------------------------------->
 <!------------------------------------------------------------------->
  <table  width="100%" border="0" >
  <TR>
     <TD align="right">
		<m4:item outputdef="ApiDynFilterNode" item="PAR_RETURN_PAGE" m4varname="sParReturnPage"/>
        <m4:item outputdef="ApiDynFilterNode" item="DYN_INFO" m4varname="sDynFiltersInfo"/>
        <input id=btnAceptar name=btnAceptar type=button value=<%=Tran.getProperty("Button.Aceptar")%> onclick ="ApplyFilter();">
  	    <input id=btnCancelar name=btnCancelar type=button  value=<%=Tran.getProperty("Button.Cancelar")%> onclick = "callReturnPage('<%=sParReturnPage%>','<%=sDynFiltersInfo%>');" > 
      </TD>  
  </TR>
  </table>


  </TD>
 </TR>

</FORM>
</BODY>
</HTML>