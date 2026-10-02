<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wz_def_wkitemparams.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%@ include file="../../shco_g0/shco_gen_taglib.jsp" %>
<html><head><title></title>
<%@ include file="../../shco_g0/shco_gen_arg.jsp" %>
<%@ include file="../../shco_g0/shco_gen_bag.jsp" %>
<%@ include file="../../shco_g0/shco_gen_css.jsp" %>
<%@ include file="../../shco_g0/shco_gen_tec_include.jspf" %>
<%@ include file="../../shco_td/shco_td_wz_def_personal_wkitem_m4def.jsp" %>
<%// Parámetros del M4Object:
zcarril="/servlet/CheckSecurity/JSP/shco_td/shco_td_list_remind_workitem.jsp?zpag=shco_td/shco_td_wz_def_personalwkitem.jsp&znw=0";
//****************************************************************
// *MODIFICABLE
zventanas = "10";													    
zvuelta = 5;															
String zdireccion = "shco_td_wz_def_wkitemparams.jsp";	   					
String zredireccion = "shco_td/shco_td_wz_def_wkitemparams.jsp";	

/******************************************************************************************/
// *NO MODIFICABLE
int zLoadTypeStep = 2;         // Tipo de carga 
int zIndexWizard  = 0;         // Indice de control
/******************************************************************************************/                                                     

//*****************************************************************************************/
// *MODIFICABLE
String znodoview  = "SHCO_TD_WZ_WKITEM_PARAMS";
/*************
******************************************************************************/%>  



<%@ include file="../../shco_g0/shco_gen_wz_def.jsp" %>
<%@ include file="../../shco_g0/shco_gen_wz_js.jsp" %>
<%@ include file="../../shco_g0/shco_gen_datadef.jsp" %>
<%//guardar el valor de los parametros si corresponde %>
<%@ include file="../../shco_td/shco_td_save_wkitemparams.jsp" %>
<%@ include file="../../shco_g0/shco_gen_wz_act.jsp" %>
<%@ include file="../../shco_td/shco_td_wz_outputdef_personal_workitems.jsp" %>
<%
//Identificadores items
String zParamIdWorkItem= "SHCO_ID_WORKITEM";
String zIdWorkItem= "ID_WORKITEM";
String zIdBPItem = "ID_BP";
String zParamNameItem ="PARAM_NAME";
String zParamValueItem ="PARAM_VALUE";
String zParamTypeItem ="PARAM_TYPE";
String zParamDescItem ="DESCRIPTION";
String zParamNameDesc="";
String zIdBPItemc = zcomun +zIdBPItem;
String zParamNameItemc =zcomun +zParamNameItem;
String zParamValueItemc =zcomun +zParamValueItem;
String zParamTypeItemc =zcomun +zParamTypeItem;
String zParamDescItemc =zcomun + zParamDescItem;
String zIdBPItemr = zraiz +zIdBPItem;
String zParamNameItemr =zraiz +zParamNameItem;
String zParamValueItemr =zraiz +zParamValueItem;
String zParamTypeItemr =zraiz +zParamTypeItem;
String zParamDescItemr= zraiz + zParamDescItem;
String zlLabelNoWkITemParams =zraizlabel + "SHCO_LB_NO_WKITEM_PARAMS";
 
//Gestión de los tipos de los parametros
String zTYPE_STRING = "1";
String zTYPE_NUM= "2";
String zTYPE_DATE = "4";
String zTYPE_BOOL = "8";
int iSize=0;
int iMaxLength=0;
%>

<%@ include file="../../shco_g0/shco_gen_wz_nav.jsp" %>
<script type="text/javascript" language="Javascript1.5">
function val(){
	var sfunciones = "";
	var i =0;
	var iNumParams = <%=zcountr%>;
	
	for (i = 0; iNumParams>i; i++){
	    sIdParam =  "<%=zParamValueItem%>" + i;
	    sNParam = m4valor("frmParamsValue","<%=zParamNameItem%>"+ i,"","get");
	    sTypeParam = m4valor('frmParamsValue',"<%=zParamTypeItem%>"+ i,'','get');
	    
	    switch (sTypeParam){
	      case "<%=zTYPE_DATE%>":
	        if (sfunciones != ""){sfunciones = sfunciones + "*";}
			sfunciones = sfunciones + "m4valinput('_date','frmParamsValue','" + sIdParam + "',1,'"+ sNParam + "',sformatofechas)";
			break;
		  case "<%=zTYPE_NUM%>":
		    if (sfunciones != ""){sfunciones = sfunciones + "*";}
			sfunciones = sfunciones + "m4valinput('_num','frmParamsValue','" + sIdParam + "',1,'"+ sNParam + "')";
			break;
          case "<%=zTYPE_STRING%>":		
		  	if (sfunciones != ""){sfunciones = sfunciones + "*";}
	    	sfunciones = sfunciones + "m4valinput('_alfanum','frmParamsValue','" + sIdParam + "',1,'"+ sNParam + "')";
		    break; 	
	      default: 
			break;
	    }	
	}

	if (sfunciones !=""){ var verr=m4valform(sfunciones);}else{verr=1;}
	if ( verr ==1) SaveParams();
} 
	
    //-----------------------------------------------------------------------    
    //función para guardar los valores de los parametros --------------------
    //-----------------------------------------------------------------------   
    function SaveParams() {	
	var sAllString = "";
    var iPos=0;
    var sParamValue = "";
    var sTypeParam = "";
    var iNumParams = <%= zcountr%>;
    
    for (iPos=0;  iNumParams>iPos; iPos++){
	    // recojo el valor del parámetro
	   sParamValue = m4valor("frmParamsValue","<%=zParamValueItem%>"+iPos,"","get");
	   if (sParamValue == ""){
		    sAllString = sAllString  + iPos + ";";
	   }else{
			sAllString =  sAllString  +  iPos + " " +  sParamValue + ";";
		}
	}
    //establecer el valor de los parámetros. Si no hay parametros indicar que hay que grabar
	// una cadena vacia.
	if(sAllString == "") {sAllString='<%=zEMPTY_PARAMS%>'}
	m4valor("NombreFormulario","zWkitemParamValues",sAllString,"set");
    // Solicitar la grabación
	m4submit("NombreFormulario");
}

function m4nothing(){}
</script>

</head><body>
<%@include file="../../shco_g0/shco_gen_title.jsp" %>
<%@ include file="../../shco_g0/shco_gen_menusup.jsp" %><%@include file="../../shco_g0/shco_gen_wz_error.jsp" %>
<div id="capa_link" style="position:absolute; left:0%; top:0%; width:20%; height:0%; z-index:1">
<%@ include file="../../shco_g0/shco_gen_wz_menu.jsp" %>
</td></tr></table>
</div>
<div id="capa_cuerpo" style="position:relative; left:21%; top:0%; width:78%; z-index:2">
<%
  String zvalue = "";
  String zhelp="SHCO_TD_WZ_DEF_WKITEMPARAMS.htm";
  zCol =5;
%>
<%@ include file="../../shco_g0/shco_gen_cab.jsp" %>

<%//Formulario genérico de un wizard. BOrramos el input ACC pq no grabamos de forma standard%>
<form action="<%=path%><%=links[zIndexWizard]%>" method="post" name="NombreFormulario" id="NombreFormulario" >
<input type="hidden" id="TAG" name="TAG" value="<%=zsubsesion%>" />
<input type="hidden" id="NOD" name="NOD" value="<%=znodoview%>" />
<input type="hidden" id="WZINDEX" name="WZINDEX" value="<%=zIndexWizard%>" />
<input type="hidden" id="LOADTYPE" name="LOADTYPE" value="<%=loadtype[zIndexWizard]%>" />
<input type="hidden" id="zredireccion" name="zredireccion" value="<%=zredireccion%>" />
<input type="hidden" id="SHCO_ORDINAL" name="SHCO_ORDINAL" value="-1" />
<input type="hidden" id="SHCO_STATE" name="SHCO_STATE" value="N" />
<%//Input para la grabación de los valores de los parametros%>
<input type="hidden" id="zWkitemParamValues" name="zWkitemParamValues" value="" />
</form>

<%//Formulario de edición de parámetros%>
<form action="" method="post" name="frmParamsValue" id="frmParamsValue" >  
<table class="form" width="100%" cellspacing="2" border="2">
<thead>
 <tr class="titulo">
  <th colspan="8">&nbsp;<%=steps[zIndexWizard]%></th>
  </tr>

</thead>
<tbody>
<% if (zcountr==0) { %>
 <tr><td class="campo"><m4:label m4name="<%=zlLabelNoWkITemParams%>" htmlsafe="true"/></td></tr>
<%}else{%>
<m4:loop from="0" to="<%=String.valueOf(zcountr-1)%>">
<%@ include file="../../shco_g0/shco_gen_loop.jsp" %>
<m4:item m4name="<%=zParamTypeItemc%>" m4varname="zParamType" />
<m4:item m4name="<%=zParamNameItemc%>" m4varname="zParamName" htmlsafe="true"/>
<m4:item m4name="<%=zParamDescItemc%>" m4varname="zParamDesc" htmlsafe="true"/>
<m4:item m4name="<%=zIdBPItemc%>" m4varname="zIdBP" />
<% 
   // Mostrar la Descripción del parámetro para que sea traduccida. Si no viene la
   // descripción mostramos el nombre
   //-----------------------------------------------------------------------------
   if (zParamDesc.equals("")){
   	  zParamNameDesc =zParamName;
   }else{
  	zParamNameDesc = zParamDesc;
   }

   //Establecer los tamaños de los input en función del tipo del parámetro
   //---------------------------------------------------------------------
   if (zParamType.equals(zTYPE_DATE) ){
   	  iSize=10;
   	  iMaxLength=10;
  }else if(zParamType.equals(zTYPE_NUM)){
  		iSize=6;
  		iMaxLength=6;
  }else{
   		iSize=40;
  		iMaxLength=50;
  }
%>
<tr>
    <td colspan="1" class="campo">&nbsp;<%=zParamNameDesc%></td>
	<td class="valor" colspan="7">
    <input type="hidden" id="<%=zIdBPItem%><%=zposicions%>" name="<%=zIdBPItem%><%=zposicions%>" value="<%=zIdBP%>" />
    <input type="hidden" id="<%=zParamNameItem%><%=zposicions%>" name="<%=zParamNameItem%><%=zposicions%>" value="<%=zParamName%>"/>
	<input type="hidden" id="<%=zParamTypeItem%><%=zposicions%>" name="<%=zParamTypeItem%><%=zposicions%>" value="<%=zParamType%>" />
	<input tabindex="<%=(zTab + 1)%>" class="form" type="text" name="<%=zParamValueItem%><%=zposicions%>" id="<%=zParamValueItem%><%=zposicions%>" title="<m4:label m4name="<%=zSHCOLBWRITE%>" htmlsafe="true"/>&nbsp;<%=zParamNameDesc%>" maxlength="<%=iMaxLength%>" size="<%=iSize%>" value="<m4:item m4name="<%=zParamValueItemc%>" htmlsafe="true"/>" />&nbsp;
    <% if (zParamType.equals(zTYPE_DATE) ){%>
		&nbsp;<a href="javascript:m4calendar(m4objeto('frmParamsValue','<%=zParamValueItem%><%= zposicions%>'))" tabindex="<%=(zTab + 1)%>"><img  <%@ include file="../../files_gif/ic_cal.jsp" %> alt="<m4:item m4name="<%=zParamNameItemc%>" htmlsafe="true"/>" /></a>
    <%}%>  
	</td>
</tr>
</m4:loop>
<%}%>
<%@ include file="../../shco_g0/shco_gen_wz_btt.jsp" %>
</tbody></table></form>
<%@ include file="../../shco_g0/shco_gen_error.jsp" %>
<%}%>
<%@ include file="../../shco_g0/shco_gen_disclaimer.jsp" %>
</body></html>