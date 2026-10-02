<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_schedule_include.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%!
  String zfrmscheduleparams = "frmscheduleparams";
  String zsh_TaskGroupName = "zsh_TaskGroupName";
  String zsh_TaskGroupDesc = "zsh_TaskGroupDesc";
  String zsh_IdTask = "zsh_IdTask";
  String zsh_OrgAware = "zsh_OrgAware";
  String zsh_OrgEditable = "zsh_OrgEditable";
  String zsh_OrgMultiselection = "zsh_OrgMultiselection";
  String zsh_RoleExecutor = "zsh_RoleExecutor";
  String zsh_OrgList = "zsh_OrgList";
  String zsh_ParamNameList = "zsh_ParamNameList";
  String zsh_ParamValueList = "zsh_ParamValueList";
  String zsh_ret_page = "zsh_ret_page";
%>
<script type="text/javascript">
function m4JobScheduler(){

  var zSepTuplas="{";
  var sParamStringStepPrincipal = "";
  var sParamStringStepParams = "";
  var sParamStringAdvProps = "";
  
   //***  Principal Step *************************************************************************//
  
   sParamStringStepPrincipal = "NOD=SHCO_AP_WZ_STEP_PRINCIPAL" + zSepTuplas;
   sParamStringStepPrincipal += "SCHED_TASK_NAME="  + m4valor('<%=zfrmscheduleparams%>','<%=zsh_TaskGroupName%>','','get')+ zSepTuplas;
   sParamStringStepPrincipal += "SCHED_TASK_DESC="  + m4valor('<%=zfrmscheduleparams%>','<%=zsh_TaskGroupDesc%>','','get') + zSepTuplas;   
   sParamStringStepPrincipal += "ID_TASK="  + m4valor('<%=zfrmscheduleparams%>','<%=zsh_IdTask%>','','get') + zSepTuplas;
   
   //Los de sociedad no se mandan si vienen vacios para no cablear los defectos
   // zsh_OrgList : 3*0001/0002/0005   
   sListSoc = m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgList%>','','get');
   if (sListSoc != ""){ sParamStringStepPrincipal += "PO_SOCIEDADES="  + sListSoc + zSepTuplas;}
   
   sSocAware = m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgAware%>','','get');
   if (sSocAware != ""){ sParamStringStepPrincipal += "SOC_AWARE="  + sSocAware + zSepTuplas;}
   	
   sSocMultiselection = m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgMultiselection%>','','get');
   if (sSocMultiselection != ""){ sParamStringStepPrincipal += "SOC_MULTISELECTION="  + sSocMultiselection + zSepTuplas;}
   
   sSocEditable = m4valor('<%=zfrmscheduleparams%>','<%=zsh_OrgEditable%>','','get');
   if (sSocEditable != ""){ sParamStringStepPrincipal += "SOC_EDITABLE="  + sSocEditable + zSepTuplas;}
   
	  
   //*** AdvPropertiesStep *************************************************************************//      
   sParamStringAdvProps = "NOD=SHCO_AP_WZ_STEP_ADV_PROPS" + zSepTuplas ;
   sRole = m4valor('<%=zfrmscheduleparams%>','<%=zsh_RoleExecutor%>','','get');
   if (sRole != ""){ sParamStringAdvProps += "ROLE_EXECUTOR="  + sRole + zSepTuplas;}

   
   //*** ParamsStep *************************************************************************//    
   // zsh_ParamNameList = PARAM1+.+PARAM2
   // zsh_ParamValueList= PARAM_VALUE1+.+PARAM_VALUE2
   // Por el momento solo se soporta dar valor a un parametro
    var sParamNameList = m4valor('<%=zfrmscheduleparams%>','<%=zsh_ParamNameList%>','','get');
	var sParamValueList =m4valor('<%=zfrmscheduleparams%>','<%=zsh_ParamValueList%>','','get');
	var sSepParam = "+.+";
	var sTupla = "";

	if (sParamNameList.length > 0 && sParamValueList.length >0 ) {
	   var aParamName = sParamNameList.split(sSepParam);
   	   var aParamValue = sParamValueList.split(sSepParam);	   
	   if (aParamName.length > 0) {
	    for (var iIndex = 0; iIndex < aParamName.length; iIndex++){      	
			sParamName = aParamName[iIndex];
			sParamValue = "";
			if (aParamValue.length >iIndex){sParamValue= aParamValue[iIndex];}
   		    sTupla = "NOD=SHCO_AP_WZ_STEP_PARAMS"+ zSepTuplas ;
			sTupla += "XPARAM_NAME=" + sParamName + zSepTuplas;
			sTupla += "PARAM_VALUE=" + sParamValue + zSepTuplas;
	        sParamStringStepParams += sTupla + sSepParam;
	    }//for
	   }//if
	 }//if		

    m4valor('frmcallschedule','zParamStringStepPrincipal',sParamStringStepPrincipal,'set');
    m4valor('frmcallschedule','zParamStringStepParams',sParamStringStepParams,'set');
    m4valor('frmcallschedule','zParamStringAdvProps',sParamStringAdvProps,'set');  
    m4valor('frmcallschedule','zRetPage',m4valor('<%=zfrmscheduleparams%>','<%=zsh_ret_page%>','','get'),'set');
    m4valor('frmcallschedule','zGMT',m4GMTInMinutes(),'set');  
    m4submit('frmcallschedule');
}
</script>

<form name='<%=zfrmscheduleparams%>' id='<%=zfrmscheduleparams%>' action="" method="post" >
   <input type="hidden" id="<%=zsh_TaskGroupName%>" name="<%=zsh_TaskGroupName%>" value=""/>
   <input type="hidden" id="<%=zsh_TaskGroupDesc%>" name="<%=zsh_TaskGroupDesc%>" value=""/>
   <input type="hidden" id="<%=zsh_IdTask%>" name="<%=zsh_IdTask%>" value=""/>
   <input type="hidden" id="<%=zsh_OrgAware%>" name="<%=zsh_OrgAware%>" value=""/>
   <input type="hidden" id="<%=zsh_OrgEditable%>" name="<%=zsh_OrgEditable%>" value=""/>
   <input type="hidden" id="<%=zsh_OrgMultiselection%>" name="<%=zsh_OrgMultiselection%>" value=""/>
   <input type="hidden" id="<%=zsh_RoleExecutor%>" name="<%=zsh_RoleExecutor%>"value=""/>
   <input type="hidden" id="<%=zsh_OrgList%>" name="<%=zsh_OrgList%>" value=""/>
   <input type="hidden" id="<%=zsh_ParamNameList%>" name="<%=zsh_ParamNameList%>" value=""/>
   <input type="hidden" id="<%=zsh_ParamValueList%>" name="<%=zsh_ParamValueList%>" value=""/>
   <input type="hidden" id="<%=zsh_ret_page%>" name="<%=zsh_ret_page%>" value=""/>
   
</form>

<form name="frmcallschedule" id="frmcallschedule" action="/servlet/CheckSecurity/JSP/shco_js/shco_ap_wz_step_principal.jsp" method="post"  >
  <input type="hidden" id="zextact" name="zextact" value="1" />
  <input type="hidden" id="zParamStringStepPrincipal" name="zParamStringStepPrincipal" value=""/>
  <input type="hidden" id="zParamStringStepParams" name="zParamStringStepParams" value=""/>
  <input type="hidden" id="zParamStringAdvProps" name="zParamStringAdvProps" value=""/>
  <input type="hidden" id="zRetPage" name="zRetPage" value=""/>
  <input type="hidden" id="zGMT" name="zGMT" value=""/>
</form>


