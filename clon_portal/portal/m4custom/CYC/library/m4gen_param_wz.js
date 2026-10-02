/*
	@(#)FileVersion: 811.000.008
	@(#)FileDescription: Funciones genericas de wizards
	@(#)CompanyName: Meta4 Spain, S.A.
	@(#)LegalCopyright: (c)2014
	@(#)ProductName: PeopleNet KSystem
	@(#)ProductVersion: 8.1SP1
	@(#)InternalName: m4gen_param_wz.js
	@(#)Date: 23/03/2002 
*/

function m4wzins(i){
m4valor('NombreFormulario','LOADTYPE',obuttload[i],'set');
m4valor('NombreFormulario','WZINDEX',ozIndexWizard+(i-1),'set');
document.forms.NombreFormulario.action = opath + obuttslnk[i] ;
var vval=val();
if (vval == 1){
m4submit('NombreFormulario');
}
}

function m4wzsave(i){
  m4valor('NombreFormulario','SAVE_PROCESS','1','set');
  m4wzins(i);
}

function m4wzins_term(i){
m4valor('NombreFormulario','LOADTYPE',obuttload[i],'set');
m4valor('NombreFormulario','WZINDEX',ozIndexWizard+(i-1),'set');
m4valor('NombreFormulario','EXECUTE_PROCESS','1','set');
document.forms.NombreFormulario.action = opath + obuttslnk[i] ;
var vval=val();
if (vval == 1){
document.forms.NombreFormulario.action = '/servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp' ;
m4submit('NombreFormulario');
}
}


function m4wzins_term_one_step(){
m4valor('NombreFormulario','LOADTYPE','1','set');
m4valor('NombreFormulario','WZINDEX','0','set');
var vval=val();
if (vval == 1){
document.forms.NombreFormulario.action = '/servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp' ;
m4submit('NombreFormulario');
}
}

function m4generate_merge_word(vData,vTemplate,vurlData,vurlTemplate){
try{
	var wdApp = new ActiveXObject("Word.Application");
	var fs, force, filename, strTemp,strTempData;	
	force = true;
	fs = new ActiveXObject("Scripting.FileSystemObject");
	strTemp = fs.GetSpecialFolder(2) ;
	filename=strTemp+ "/"+vData;
	vTemplate="v"+vTemplate;
	filename2= strTemp + "/"+ vTemplate;
	var openword = wdApp.Documents.Open(vurlData);
	var oSaveAs = wdApp.ActiveDocument.SaveAs(filename);
    var oWordQuit =wdApp.ActiveDocument.Close()  ;
    var openwordtemp = wdApp.Documents.Open(vurlTemplate);
    var oSaveAs = wdApp.ActiveDocument.SaveAs(filename2);
    var openMerge = wdApp.ActiveDocument.MailMerge.OpenDataSource(filename);
		wdApp.ActiveDocument.MailMerge.Destination = 0;
		wdApp.ActiveDocument.MailMerge.DataSource.FirstRecord = -1
		wdApp.ActiveDocument.MailMerge.DataSource.LastRecord = -1
	var oExecute = wdApp.ActiveDocument.MailMerge.Execute(false);
	wdApp.Documents(vTemplate).Close ();
	fs.DeleteFile(filename, force);	
	fs.DeleteFile(filename2, force);	
	wdApp.Visible = true;
	wdApp.Activate ();
	var msg = m4getmessage("_param_word_err1");
	document.write ("<tr><td class='textinfo'>"+msg+"</td></tr>");
 }catch(e){
 	if (wdApp == null) {
 			var msg = m4getmessage("_param_word_err2");
			var msg2 = m4getmessage("_param_word_err3");
			document.write ("<tr><td class='text'>"+msg+"</td></tr>");
 			document.write ("<tr><td class='text'>"+msg2+"</td></tr>");	
	}else if (openword == null) {
			var msg = m4getmessage("_param_word_err4");
			document.write ("<tr><td class='text'>"+msg+"</td></tr>");
 	}else if (openwordtemp == null){ 
			var msg = m4getmessage("_param_word_err5");
			var msg2 = m4getmessage("_param_word_err6");
			document.write ("<tr><td class='text'>"+msg+"</td></tr>");
			document.write ("<tr><td class='text'>"+msg2+"</td></tr>");	
			fs.DeleteFile(filename, force);					
	}else {
			var msg = m4getmessage("_param_word_err7");
			var msg2 = m4getmessage("_param_word_err6");
			document.write ("<tr><td class='text'>"+msg+"</td></tr>");
			document.write ("<tr><td class='text'>"+msg2+"</td></tr>");	
	}
}
}

function m4wzins_dyn(i){
m4valor('NombreFormulario','LOADTYPE',obuttload[i],'set');
m4valor('NombreFormulario','WZINDEX',ozIndexWizard+(i-1),'set');
document.forms.NombreFormulario.action = opath + obuttslnk[i] ;
var vval=val();
if (vval == 1){

m4valor('NombreFormulario','zDynFilter','1','set');
m4submit('NombreFormulario');
}
}
function m4after_filter(){
m4valor('NombreFormulario','zDynFilter','0','set');
m4valor('NombreFormulario','zdynfiltersinforeport',m4valor('frmcalldynfilter','zdynfiltersinfo','','get'),'set');
document.forms.NombreFormulario.action = '/servlet/CheckSecurity/JSP/shco_g0/shco_gen_p_wz_exec.jsp' ;
m4submit('NombreFormulario');
}
