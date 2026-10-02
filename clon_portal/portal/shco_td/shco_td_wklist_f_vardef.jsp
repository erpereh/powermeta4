<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_td_wklist_f_vardef.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>


<%
	zventanas = "20";													    
    zvuelta = 5;	
    String zWklistPag="shco_td/shco_td_wklist_f.jsp";
	
    znodoraiz = "SHCO_GN_ROOT";
	znodocom = "SHCO_GN_COMUNICATION";
	zmetodocarga = zsubsesion + "!" + znodoraiz + ".SHCO_LOAD";
	zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";
	String znodolabel = "SHCO_GN_LABEL";
	String zoutputdeflabel = zsubsesion + "!" + znodolabel + "[*]";
	String zmovelabel = znodolabel + ":" + znodolabel + "[FIRST]";
	String zraizlabel = znodolabel + ":" + zsubsesion + "!" + znodolabel + ".";
	
	int zregistroinicial = Integer.valueOf(zinicio).intValue();					//COMUN VENTANAS
	zregistroinicial = zregistroinicial - 1;
	int zventana  = Integer.valueOf(zventanas).intValue();
	int zregistrofinal = zregistroinicial + zventana - 1;
			
	String znodo1 = "SHCO_TD_ASG_WKLIST_F";
	String znodo2 = "SHCO_TD_PERSONAL_WKLIST_F";
	
	String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";   
	String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
	String zraiz1 =  znodo1 + ":" + zsubsesion  + "!" + znodo1 + ".";
	String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
	
	String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";   
	String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
	String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
	String zraiz2 =  znodo2 + ":" + zsubsesion  + "!" + znodo2 + ".";

	
	// Items con los que trabajamos en ambas listas
	String zIdWorkItemItem = "ID_WORKITEM";											//*MODIFICABLE
	String zProcessNameItem = "N_BPO";
	String zInitDateItem = "DT_INSTANTIATION";
	String zEndDateItem = "DT_DEADLINE";
	String zRemindDateItem = "DT_REMINDER";	
	String zDeadLineDateItem = "DT_DEADLINE";
	String zIdTaskItem = "ID_TASK";
	String zNTaskItem="N_BP";
	String zProcessTypeItem="ID_TYPE";
	String zReminderTextItem="AUX_VAL_2";
	String zlLabelExecute = zraizlabel + "SHCO_LB_EXECUTE";
	String zlLabelSeeMore = zraizlabel + "SHCO_LB_SEE_MORE";
	String zlLabelNoAsignTask = zraizlabel + "SHCO_LB_NO_ASIGN_TASK";
    String zlLabelNoPersTask = zraizlabel + "SHCO_LB_NO_PERSONAL_TASK";
	String zStateDescItem ="STATE_DESC";

	
	String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
	String zIdWorkItem1 = zcomun1 + zIdWorkItemItem;
	String zProcessName1 = zcomun1 + zProcessNameItem;
	String zDeadLineDate1 = zcomun1 +  zDeadLineDateItem;
	String zInitDate1 = zcomun1 + zInitDateItem;
	String zEndDate1 = zcomun1 +zEndDateItem;
	String zIdTask1 = zcomun1 + zIdTaskItem;
	String zNTask1= zcomun1 + zNTaskItem;
	String zRemindDate1 = zcomun1 + zRemindDateItem;
	String zIdType1 = zcomun1 + zProcessTypeItem;
	String zReminderText1= zcomun1 + zReminderTextItem;
	String zlProcessName1 = zraiz1 + zProcessNameItem;
	String zlDeadLineDate1 = zraiz1 +  zDeadLineDateItem;
	String zlInitDate1 = zraiz1 + zInitDateItem;
	String zlEndDate1 = zraiz1 +zEndDateItem;
	String zlNTask1= zraiz1 + zNTaskItem;
	String zlRemindDate1 = zraiz1 + zRemindDateItem;
	String zlIdType1 = zraiz1 + zProcessTypeItem;
	String zlReminderText1= zraiz1 + zReminderTextItem;
	String zStateDesc = zcomun1 + zStateDescItem;
	String zlStateDesc = zraiz1 + zStateDescItem;
	
	String znamenodo2  = znodo2 + ":" + zsubsesion  + "!" + znodo2;
	String zIdWorkItem2 = zcomun2 + zIdWorkItemItem;
	String zProcessName2 = zcomun2 + zProcessNameItem;
	String zDeadLineDate2 = zcomun2 +  zDeadLineDateItem;
	String zInitDate2 = zcomun2 + zInitDateItem;
	String zEndDate2 = zcomun2 +zEndDateItem;
	String zIdTask2 = zcomun2 + zIdTaskItem;
	String zNTask2= zcomun2 + zNTaskItem;
	String zRemindDate2 = zcomun2 + zRemindDateItem;
	String zIdType2 = zcomun2 + zProcessTypeItem;
	String zReminderText2= zcomun2 + zReminderTextItem;
	String zlProcessName2 = zraiz2 + zProcessNameItem;
	String zlDeadLineDate2 = zraiz2 +  zDeadLineDateItem;
	String zlInitDate2 = zraiz2 + zInitDateItem;
	String zlEndDate2 = zraiz2 +zEndDateItem;
	String zlNTask2= zraiz2 + zNTaskItem;
	String zlRemindDate2 = zraiz2 + zRemindDateItem;
	String zlIdType2 = zraiz2 + zProcessTypeItem;
	String zlReminderText2= zraiz2 + zReminderTextItem;
	%>
