/*
  @(#)FileVersion: 600.015.000
  @(#)FileDescription: Error Messages in English
  @(#)CompanyName: Meta4 Spain, S.A.
  @(#)LegalCopyright: (c)2005
  @(#)ProductName: PeopleNet Ksystem
  @(#)ProductVersion: 7.0
  @(#)InternalName: m4err_ess_es.js
  @(#)Date: 13/12/2005 
*/


var _sl_co_password = "Your password will expire in &%0& days. You should change it. Do you want to do it now?";



//****************************Appraisal Setlogs****************************************//


var _sl_co_ess_ev_1 = "The comment field cannot exceed 256 characters"
var _sl_co_ess_ev_2 = "The &%0& objective is a required number field with two decimal places"
var _sl_co_ess_ev_3 = "There is still knowledge pending qualification"
var _sl_co_ess_ev_4 = "There are still objectives pending qualification"
var _sl_co_ess_ev_5 = "The value obtained is &%0&, which corresponds to level &%1&. Do you want to insert the value obtained?"
var _sl_co_ess_ev_6 = "You are already the appraiser in this process";
var _sl_co_ess_ev_7 = "You cannot delete yourself as the appraiser";
var _sl_co_mss_ev_11 = "The &%0& objective is a required number field with two decimal places"
var _sl_co_mss_ev_12 = "There is still knowledge pending qualification"
var _sl_co_mss_ev_13 = "There are still objectives pending qualification"
var _sl_co_mss_ev_16 = "The value obtained is &%0&, which corresponds to &%1&. Do you want to modify this value?"
var _sl_co_mss_ev_17 =  "The &%0& objective is a number field with two decimal places"
var _sl_co_mss_ev_18 =  "The global knowledge level is required."
var _sl_co_mss_ev_19 =  "The % of achieved quantitative objectives is required."
 var _sl_co_mss_ev_20 =  "The global level of achieved objectives is required."
 var _sl_co_mss_ev_21 =  "The % of achieved quantitative objectives is a number field with two decimal places."
 var _sl_co_mss_ev_23 =  "The % of achieved quantitative objectives is &%1&. Do you want to modify this value?"



//****************************Benefits Module Setlogs****************************************//
var _sl_co_bft_0 = "The following errors were detected:";
var _sl_co_bft_1 = "You must select at least one family member.";
var _sl_co_bft_2 = "Null Start Date";
var _sl_co_bft_3 = "The start date is later than the end date.";
var _sl_co_bft_4 = "To run the simulation, you must select at least one benefit.";
var _sl_co_bft_5 = "To request benefits, you must select at least one of them.";
var _sl_co_bft_6 = "The start and end dates are not included within the benefit validity period";
var _sl_co_bft_7 = "The format for the date(s) is incorrect.\n      Verify that the date is correct and has a " + sformatofechas +" format.";
var _sl_co_bft_8 = "Null Date";
var _sl_co_bft_9 = "The date entered is not included within the plan period";
var _sl_co_bft_10 = "There are beneficiaries who will not be subsidised because they exceed the maximum amount.";
var _sl_co_bft_11 = "The new end date must be later than or equal to ";
var _sl_co_bft_12 = " because it affects payroll processes already calculated. Contact the HR Department.";
var _sl_co_bft_13 = "The start date must be later than ";
var _sl_co_bft_14 = "There are payroll processes already calculated for the &%0& benefit validity period, so it cannot be cancelled. Contact the HR Department.";
var _sl_co_bft_15 = "There are payroll processes already calculated for the &%0& benefit validity period, so it cannot be cancelled. Contact the HR Department.";
var _sl_co_bft_16 = "There are payroll processes already calculated for the benefit validity period, so it cannot be deleted. Contact the HR Department.";
var _sl_co_bft_17 = "There are payroll processes calculated after the benefit validity period, so it cannot be modified. Contact the HR Department.";
var _sl_co_bft_18 = "There are payroll processes calculated after the start date, so it cannot be modified. Contact the HR Department.";
var _sl_co_bft_19 = "There are payroll processes calculated after the start date, so the deduction cannot be modified. Contact the HR Department.";
var _sl_co_bft_20 = "The new end date must be later than or equal to &%0& because it affects payroll processes already calculated. Contact the HR Department.";
var _sl_co_bft_21 = "The new start date must be later than &%0& because it affects payroll processes already calculated. Contact the HR Department.";
//****************************Bank Data Setlogs ****************************************//
var _sl_co_payment_data_1="The following errors were found. You must correct them before submitting your request:";
var _sl_co_payment_data_2="The cutoff date is required.";
var _sl_co_payment_data_3="The start date format is incorrect. Use the format " + sformatofechas +".";
var _sl_co_payment_data_4="The start date must be later than ";
var _sl_co_payment_data_5="The bank branch is required.";
var _sl_co_payment_data_6="The account number is required.";
var _sl_co_payment_data_7="The country code and IBAN code fields must be completed to calculate the IBAN.";
var _sl_co_payment_data_8="The end date format is incorrect. Use the format " + sformatofechas +".";
var _sl_co_payment_data_9="The start date must be earlier than or the same as the end date."
var _sl_co_payment_data_10="The beneficiary is required."
var _sl_co_payment_data_11="The payment method is required."
var _sl_co_payment_data_12="The amount is required.";
var _sl_co_payment_data_13="You already have a beneficiary with an associated fixed amount. You cannot request another one.";
var _sl_co_payment_data_14="You already have a beneficiary with an associated percentage. You cannot request another one.";
var _sl_co_payment_data_15="The end date is required.";
var _sl_co_payment_data_16="The end date must be later than ";
var _sl_co_payment_data_17="You cannot delete the record because it affects payroll processes already calculated. Contact the Human Resources.";
var _sl_co_payment_data_18="The IBAN code does not match the bank data indicated.";


var _sl_co_gn_1="The following errors were found. You must correct them before submitting your request:";
var _sl_co_g1_1="The Contact Name is required.";
var _sl_co_g1_2="The phone number is required.";
var _sl_co_g1_3="The ICE priority is a required positive integer.";
var _sl_co_g1_4="The Dependence Type is required.";
var _sl_co_g1_5="The date of birth is required.";
var _sl_co_g1_6="The date of birth format is incorrect. Use the format " + sformatofechas +".";
var _sl_co_g1_7="The name is required.";
var _sl_co_g1_8="The last name is required.";

var _sl_es_g1_sitirpf_001="El máximo de ascendientes definido es ";
var _sl_es_g1_sitirpf_002="El máximo de descendientes definido es ";
var _sl_es_g1_sitirpf_003="Reservado";
var _sl_es_g1_sitirpf_004="Reservado";
var _sl_es_g1_sitirpf_005="Para una situación familiar '1' debe existir al menos un descendiente";
var _sl_es_g1_sitirpf_006="Para una situación familiar '2' es necesario escribir un valor en el campo NIF del cónyuge";
var _sl_es_g1_sitirpf_007="El NIF del cónyuge no puede ser el mismo que el del empleado";
var _sl_es_g1_sitirpf_008="El campo NIF del cónyuge sólo debe consignarse con una situación familiar '2'";
var _sl_es_g1_sitirpf_009="El descendiente con posición ";
var _sl_es_g1_sitirpf_010=" no tiene un año de nacimiento válido";
var _sl_es_g1_sitirpf_011=" no tiene un año de adopción/acogimiento válido";
var _sl_es_g1_sitirpf_012="El ascendiente con posición ";
var _sl_es_g1_sitirpf_013=" no tiene un valor válido (del 1 al 9) en el campo convivencia descendientes";
var _sl_es_g1_sitirpf_014="El número de hijos para el IRPF no tiene un valor válido (del 0 al 9)";
var _sl_es_g1_sitirpf_015="El año de adquisición de la vivienda habitual no es un año válido";
var _sl_es_g1_sitirpf_016="Ya hay un nuevo dependiente disponible sin un año de nacimiento válido, cumplimente al menos este dato antes de insertar otro dependiente";
var _sl_es_g1_sitirpf_017="Es necesario que realice al menos una modificación en alguno de sus datos para el IRPF";


var _sl_es_g1_valsitirpf_001="Error en la validación con orden ";
var _sl_es_g1_valsitirpf_002=". La fecha de acuse de recibo no tiene un formato de fecha válido";
var _sl_es_g1_valsitirpf_003=". La fecha de acuse de recibo no puede ser anterior a la fecha de modificación";
var _sl_es_g1_valsitirpf_004="No se ha establecido la fecha de acuse de recibo en ninguna validación";

var _sl_co_ex_1="There were problems generating the report.";
var _sl_co_ex_2="The Excel object could not be created. Review the security configuration in your browser and ensure that it allows you to run ActiveX controls.";
var _sl_co_ex_3 = "Cannot read the templates to generate the report."; 
var _sl_co_ex_4 = "Contact the administrator."; 
var _sl_co_ex_5 = "Excel spreadsheet generation is not currently supported by this browser"; 

//****************************Interviews Setlogs****************************************//
var _sl_co_ess_iv_0 = "The interview name is required.";
var _sl_co_ess_iv_1 = "The interview reason is required.";
var _sl_co_ess_iv_2 = "The interviewer is required."
var _sl_co_ess_iv_3 = "The following errors were detected. You must correct them before submitting your request:"

//****************************Documents Setlogs****************************************//
var _sl_co_ess_doc_0 = "View Associated Document";
var _sl_co_ess_doc_1 = "Warning";
var _sl_co_ess_doc_2 = "there is currently no associated document";
var _sl_co_ess_doc_3 = "You must select a document.";
var _sl_co_ess_doc_4 = "Invalid document type.";




var _sl_ssco_gn_1="The following errors were found. You must correct them before submitting your request:";
var _sl_smco_1="The work unit is required";
var _sl_smco_2="The date format is incorrect. Use the format " + sformatofechas +".";

//****************************Association Membership Setlogs****************************************//
var _sl_co_ess_af_0 = "The association is required.";
var _sl_co_ess_af_1 = "The association type is required.";

//****************************Complementary Information Setlogs****************************************//
var _sl_co_ess_ic_0 = "The currency type is required.";
var _sl_co_ess_ic_01 = "Indicate the minimum salary amount or remove the currency type selection.";
var _sl_co_ess_ic_02 = "The minimum salary is a numeric field.";

//****************************Certificates and Licenses Setlogs ****************************************//
var _sl_co_ess_cl_0 = "The certificate is mandatory.";
var _sl_co_ess_cl_1 = "The certificate type is mandatory.";
var _sl_co_ess_cl_2 = "The issue date is required.";


//****************************Other Courses Setlogs ****************************************//
var _sl_co_ess_oc_0 = "The course is mandatory.";
var _sl_co_ess_oc_1 = "The number of hours is required.";
var _sl_co_ess_oc_3 = "The number of hours is a required positive integer.";
var _sl_co_ess_oc_4 = "The required Description field is empty. You must complete this field because the training is outside the catalogue.";

//****************************Simple Tasks Setlogs ****************************************//
var _sl_co_ess_etask_0 = "There are rejected tasks without comments. Review the cancellations carried out.";

//****************************Marital Statuses Setlogs ****************************************//
var _sl_co_ess_ec_0 = "The following errors were detected. You must correct them before submitting your request:";
var _sl_co_ess_ec_1 = "The start date is required.";
var _sl_co_ess_ec_2 = "The start date format is incorrect. Use the format " + sformatofechas +".";
var _sl_co_ess_ec_3 = "The marital status is required.";

//****************************Web Page Setlogs ****************************************//
var _sl_co_ess_pw_0 = "The following errors were detected. You must correct them before submitting your request:";
var _sl_co_ess_pw_1 = "The Internet address is required.";

//****************************Other Contact Methods Setlogs ****************************************//
var _sl_co_ess_othf_0 = "The following errors were detected. You must correct them before submitting your request:";
var _sl_co_ess_othf_1 = "The contact is required.";
var _sl_co_ess_othf_2 = "The contact type is required.";

//****************************Professional Preferences Setlogs ****************************************//
var _sl_co_ess_pp_0 = "The following errors were detected. You must correct them before submitting your request:";
var _sl_co_ess_pp_1 = "The start date is required.";
var _sl_co_ess_pp_2 = "The start date format is incorrect. Use the format " + sformatofechas +".";

//****************************My Documents Setlogs ****************************************//

var _sl_co_ess_md_0 = "The issue date format is incorrect. Use the format " + sformatofechas +".";
var _sl_co_ess_md_1 = "The effective date format is incorrect. Use the format " + sformatofechas +".";
var _sl_co_ess_md_2="The issue date must be earlier than or the same as the effective date."
var _sl_co_ess_md_3 = "The document type is required.";
var _sl_co_ess_md_4 = "The status is required.";
var _sl_co_ess_md_5 = "You must attach a document.";


var _sl_co_job_map_1="No paths were found for this job.";

//****************************Setlog 's GTA ****************************************//

var _gta_1 = "The expected value is a date. The value format you entered is incorrect. Please enter a valid value. Expected format example: DD-MM-YYYY. The following example is correct: 01-01-2012.";
var _gta_2 = "You must indicate the start and end time of the time slot.";
var _gta_3 = "If you are viewing a period of time, you cannot validate the changes. Click Previous/Next to set a valid period of time for the validation process.";
var _gta_4 = "Please, enter a valid time in the following format: hh:mm (or h:mm). For example 21:46.";
var _gta_5 = "You cannot make modifications. The timesheet has been already validated.";
var _gta_6 = "The start and end date are time fields. The value entered is incorrect. Please enter a valid time in the following format: hh :mm. For example 21 :46.";
var _gta_7 = "This property only admits numeric values. The value format you entered is incorrect. Please enter a valid value. Expected format example: 5 - 28 - 0,36. If you have to enter a decimal number, remember that the decimal separator is the full stop: '.'";
var _gta_8 = "This property only admits date values. The value format you entered is incorrect. Please enter a valid value. Expected format example: DD-MM-YYYY. The following example is correct: 01-01-2012.";
var _gta_9 = "This property only admits time values. The value format you entered is incorrect. Please enter a valid value. Expected format example: HH:MM. The following example is correct: 21:46. Remember that the number of hours must be between 0 and 23, and the number of minutes between 0 and 59.";
var _gta_10 = "Number (5 , 1.2 , and so on)";
var _gta_11 = "Character String";
var _gta_12 = "Date DD-MM-YYYY";
var _gta_13 = "Hours (hh:mm)";
var _gta_14 = "Interval (hh:mm)";
var _gta_15 = "There are blocking alerts. Cannot validate the changes.";
var _gta_16 = "The following errors were detected. You must correct them to submit your request:\n";
var _gta_17 = "\n     You must select a valid incident.";
var _gta_18 = "\n     The number of incident hours must be a number between 0 and 12.";
var _gta_19 = "\n     The number of incident minutes must be a number between 0 and 59.";
var _gta_20 = "\n     The incidents are measured as a number of hours, which cannot exceed 12 hours.";
var _gta_21 = "\n     The number of minutes cannot be greater than 59 or less than zero.";
var _gta_22 = "\n     The start date is required.";
var _gta_23 = "\n     The format of the start date is incorrect. Use the format ";
var _gta_24 = "\n     The end date is required.";
var _gta_25 = "\n     The format of the end date is incorrect. Use the format ";
var _gta_26 = "\n     The end date must be later than the start date.";
var _gta_27 = "\n     You must select at least one employee. Please go to section '1.- Select the employee or employees to which you want to assign the incident' and select at least one.";
var _gta_28 = "The correct format for the incident start/end date is hh:mm, for example 11:25";
var _gta_29 = "You must first select a start date";
var _gta_30 = "dd-mm-yyyy";
var _gta_31 = "You cannot request incidents whose start date is prior to the hire date: ";
var _gta_32 = "\n     The incident duration cannot be zero hours and zero minutes.";
var _gta_33 = "Clocking information has been indicated for some selected records. Do you really want to replace it with the scheduled value for all selected employees (XXXX)?";
var _gta_34 = "Do you really want to apply the scheduled value to the hours worked for all selected employees (XXXX)?";
var _gta_35 = "Clocking information has been indicated for some selected records. Do you really want to replace it with the scheduled value for all those employees that match the filter conditions (XXXX)?";
var _gta_36 = "Do you really want to apply the scheduled value to the hours worked for all those employees that match the filter conditions (XXXX)?";
var _gta_37 = "Clocking information has been entered. Do you really want to replace it with the scheduled value?";
var _gta_38 = "The start time cannot be the same as the end time";
var _gta_39 = "The end time must be strictly later than the start time";