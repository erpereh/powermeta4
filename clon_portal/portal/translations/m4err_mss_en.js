/*
  @(#)FileVersion: 600.015.000
  @(#)FileDescription: Error Messages in English
  @(#)CompanyName: Meta4 Spain, S.A.
  @(#)LegalCopyright: (c)2005
  @(#)ProductName: PeopleNet Ksystem 
  @(#)ProductVersion: 7.0
  @(#)InternalName: m4err_mss_es.js
  @(#)Date: 19/12/2005
*/

//****************************Appraisal Setlogs****************************************//


var _sl_co_mss_ev_0 = "The objective start date is earlier than the start date of the HR role: &%0&"
var _sl_co_mss_ev_1 = "The end date cannot be later than the end date of the HR role: &%0&"
var _sl_co_mss_ev_2 = "You can only modify the main appraiser"
var _sl_co_mss_ev_3 = "You cannot change the appraiser for this appraisal technique "
var _sl_co_mss_ev_4 = "You must be the main appraiser to delegate the appraisal."
var _sl_co_mss_ev_5 = "You cannot delete other appraisers"
var _sl_co_mss_ev_6 = "The action date must be later than the action plan start date."
var _sl_co_mss_ev_7 = "The action plan start date must be later than the individual appraisal close date: &%0&"
var _sl_co_mss_ev_8 = "You cannot delete the main appraiser; you can only delegate the appraisal."
var _sl_co_mss_ev_9 = "The description field cannot exceed 1000 characters."
var _sl_co_mss_ev_10 = "The end date cannot be earlier than the start date"
var _sl_co_mss_ev_11 = "The &%0& objective is a required number field with two decimal places"
var _sl_co_mss_ev_12 = "There is still knowledge pending qualification"
var _sl_co_mss_ev_13 = "There are still objectives pending qualification"
var _sl_co_mss_ev_14 = "The data entered in the Weight column are not within the possible values: 0,100."
var _sl_co_ess_ev_5 = "The value obtained is &%0&, which corresponds to &%1&. Do you want to update the appraisal with this score?"
var _sl_co_mss_ev_15 = "To enable calculation of the overall score you must enter the results."
var _sl_co_gn_0 = "The &%0& field must be less than or equal to the &%1& field."
var _sl_co_mss_ev_16 = "The value obtained is &%0&, which corresponds to &%1&. Do you want to update the appraisal with this score?"
var _sl_co_mss_ev_17 =  "The &%0& objective is a number field with two decimal places"
var _sl_co_mss_ev_18 =  "The global knowledge level is required."
var _sl_co_mss_ev_19 =  "The % of achieved quantitative objectives is required."
 var _sl_co_mss_ev_20 =  "The global level of achieved objectives is required."
 var _sl_co_mss_ev_21 =  "The percentage of achieved quantitative objectives is a number field with two decimal places."
 var _sl_co_mss_ev_23 =  "The percentage of achieved quantitative objectives is &%0&. Do you want to update the appraisal with this score?"
 var _sl_co_mss_ev_24 =  "Select some action to be able to send"
//****************************Interviews Setlogs****************************************//

var _s1_co_mss_iv_0 = "The interview has an associated document"
var _s1_co_mss_iv_1 = "The interview does not currently have an associated document"
var _s1_co_mss_iv_2 = "The following errors were found. You must correct them before saving the interview:"
var _s1_co_mss_iv_3 = "The performance date is required."
var _s1_co_mss_iv_4 = "The format of the performance date is incorrect. Use the format " + sformatofechas +""
var _s1_co_mss_iv_5 = "The performance date must be later than or equal to the request date."
var _s1_co_mss_iv_6 = "The performance date must be earlier than or equal to today’s date."
var _s1_co_mss_iv_7 = "The result is required."
var _s1_co_mss_iv_8 = "The next action date format is incorrect. Use the format " + sformatofechas +""
var _s1_co_mss_iv_9 = "The next interview date format is incorrect. Use the format " + sformatofechas +""
var _s1_co_mss_iv_10 = "The interview name is required."
var _s1_co_mss_iv_11 = "The interview reason is required."
var _s1_co_mss_iv_12 = "The name of the interviewee is required."
var _s1_co_mss_iv_13 = "The date of the next action must be later than or equal to the performance date."
var _s1_co_mss_iv_14 = "The date of the next interview must be later than or equal to the performance date."

//****************************Simple Tasks Setlogs ****************************************//
var _sl_co_mss_etask_0 = "There are rejected tasks without comments. Review the cancellations carried out.";

//****************************Vacancy Setlogs ****************************************//
var _sl_co_mss_vac = "* Work Unit, mandatory field."
var _sl_co_mss_vac_1 = "* Request Reason, mandatory field."
var _sl_co_mss_vac_2 = "Select the Job to view its description."

var _sl_co_mss_cri="The following errors were found: "; 
var _sl_co_mss_crit_1 = "The organizational percentage is a required number field with two decimal places";
var _sl_co_mss_crit_2 = "The personal percentage is a required number field with two decimal places";
var _sl_co_mss_crit_3 = "The sum of percentages must equal 100";
var _sl_co_mss_crit_4 = "You need to have organizational and personal percentages to be able to change them";


var _sl_co_ex_1="There were problems generating the report.";
var _sl_co_ex_2="The Excel object could not be created. Review the security configuration in your browser and ensure that it allows you to run ActiveX controls.";
var _sl_co_ex_3 = "Cannot read the templates to generate the report."; 
var _sl_co_ex_4 = "Contact the administrator."; 
var _sl_co_ex_5 = "Excel spreadsheet generation is not currently supported by this browser"; 

var _sl_smco_gn_1="The following errors were found. You must correct them before submitting your request:";


var _sl_smco_dev_plan_1="The start date is required."; 
var _sl_smco_dev_plan_2="The start date format is incorrect. Use the format " + sformatofechas +".";
var _sl_smco_dev_plan_3="The action is required.";
var _sl_smco_dev_plan_4="The type is required.";



var _sl_smco_dev_plan_5="The end date format is incorrect. Use the format " + sformatofechas +".";
var _sl_smco_dev_plan_6="The start date must be earlier than or the same as the end date."
var _sl_smco_dev_plan_7="The estimated duration must be an integer.";
var _sl_smco_dev_plan_8="The type is required when you enter an estimated duration.";
var _sl_smco_dev_plan_9="The estimated duration is required when you enter a duration type.";

var _sl_smco_dev_plan_10="The deadline format is incorrect. Use the format " + sformatofechas +".";
var _sl_smco_dev_plan_11="The end date format is incorrect. Use the format " + sformatofechas +".";
var _sl_smco_dev_plan_12="The end date is required when the action is marked as completed.";
var _sl_smco_dev_plan_13="If you enter the end date the action must be marked as completed.";
var _sl_smco_dev_plan_14="To enter an end comment the action must be marked as completed.";
var _sl_smco_dev_plan_15="You must enter a job to filter by job.";
var _sl_smco_dev_plan_16="You must enter an action to be able to assign actions.";
var _sl_smco_dev_plan_17="You must enter a knowledge to filter by knowledge.";
var _sl_smco_dev_plan_18="You must enter a career plan to be able to filter by career plan.";
var _sl_smco_dev_plan_19="You must enter the dates to filter by date.";
var _sl_smco_dev_plan_20="Some date format is incorrect. Use the format " + sformatofechas +".";
var _sl_smco_dev_plan_21="The Date From must be earlier than or the same as the Date Until";
var _sl_smco_dev_plan_22="You must enter an appraisal to be able to filter by appraisal.";
var _sl_smco_dev_plan_23 = "The start date is prior to the employee start date: &%0&";
var _sl_smco_dev_plan_24 = "The end date is later than the employee end date: &%0&";
var _sl_smco_dev_plan_25 = "The end date must be prior or equal to the employee end date: &%0&";
var _sl_smco_dev_plan_26 = "The deadline date must be later than or equal to the employee start date: &%0&";
var _sl_smco_dev_plan_27 = "The deadline date must be prior or equal to the employee end date: &%0&";
var _sl_smco_dev_plan_28 = "The end date must be later than or equal to the employee start date: &%0&";
var _sl_smco_dev_plan_29 = "The end date must be prior or equal to the employee end date: &%0&";

//
//****************************Training Setlogs****************************************//
var _sl_co_mss_tr_0="The required Description field is empty. You must complete this field because the training is outside the catalogue.";
