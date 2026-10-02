<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>
<%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_filter.js"></script>
<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%    
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String zcon = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"contador");
String zNombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombreper");
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
String zSCOIDHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String zSCOORHRPERIOD = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ordinal1");
String zSCODTSTARTEVAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"inicioev");  
String zIDASSTEC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tecnica");  
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){	mss = "0";}
String zNombrejs = com.meta4.taglib.util.M4PresentationUtilTaglib.escape(zNombre);

String ztitle = "";
String LinkFijCrit = "";
String LinkDelegar = "";
String Description = "";
String AddComment = "";
String Ver = "";
String VerPend = "";
String Enviar = "";
String Delete = "";
String NoDataFound3 = "";
String Send = "";
String Save = "";
String Procpend = "";
String Datos ="";
String Selec  ="";
String lblNotAssess = "" ;
String pathImgAddComment = ""; 
String zmss="'"+mss+"'";
String lblQuesti="";
if (mss.equals("0")==true){
%>   
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<%@ include file="../../sse_generico/english/menu_ess.jsp" %>
	<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
	<% ztitle = TranEss.getProperty("ev_ess.EvSeg");%>
	<% LinkFijCrit = TranEss.getProperty("ev_ess.EvSeg.LinkFijCrit");%>
	<% LinkDelegar = TranEss.getProperty("ev_ess.LinkDelegar");%>
	<% Description = TranEss.getProperty("ev_ess.DescrSeg");%>
	<% Ver = Tran.getProperty("Label.Ver");%>
	<% VerPend = Tran.getProperty("Label.VerPen");%>
	<% Delete = Tran.getProperty("Button.Delete");%>
	<% Save = Tran.getProperty("Button.SaveTemp");%>
	<% Send = Tran.getProperty("Button.Send");%>	
	<% Procpend = TranEss.getProperty("ev_ess.LinkProcSegPend");%>	
	<% Datos = TranEss.getProperty("ev_ess.LinkDatos"); %>
	<% Selec = Tran.getProperty("Link.Selec"); %>
	<% NoDataFound3 = Tran.getProperty("Label.NoDataFound3");%>	
	<% lblNotAssess = Tran.getProperty("Label.NotAssess"); %>	
	<% AddComment = Tran.getProperty("Button.AddComment"); %>
	<% pathImgAddComment = "/iconos/ic_next_edit_16_16_0.gif"; %>
	<% lblQuesti = TranEss.getProperty("ev_ess.BtbQuestion");%>
	
<%}else{%>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<%@ include file="../../mss_generico/english/menu_mss.jsp" %>
	<%@ include file="/mss_g3/mss_ev_trans.jsp"%>
	<% ztitle = TranMss.getProperty("ev_mss.EvSeg");%>
	<% LinkFijCrit = TranMss.getProperty("ev_mss.LinkFijCrit");%>
	<% LinkDelegar = TranMss.getProperty("ev_mss.LinkDelegar");%>
	<% Description = TranMss.getProperty("ev_mss.DescrSeg");%>
	<% Ver = Tran.getProperty("Label.Ver");%>
	<% VerPend = Tran.getProperty("Label.VerPen");%>
	<% Save = Tran.getProperty("Button.SaveTemp");%>
	<% Send = Tran.getProperty("Button.Send");%>		
	<% Procpend = TranMss.getProperty("ev_mss.LinkProcSegPend");%>
	<% Datos = TranMss.getProperty("ev_mss.LinkDatos"); %>		
	<% Selec = Tran.getProperty("Link.Selec"); %>
	<% NoDataFound3 = Tran.getProperty("Label.NoDataFound3");%>	
	<% lblNotAssess = Tran.getProperty("Label.NotAssess"); %>
	<% AddComment = Tran.getProperty("Button.AddComment"); %>
	<% pathImgAddComment = "/iconos/ic_next_edit_16_16_0.gif"; %>
	<% lblQuesti = TranMss.getProperty("ev_ess.BtbQuestion");%>
<%}%>
<title><%=ztitle%></title>
<script type="text/javascript">
function searchoption(sform,sidinput,sidoption){
	oselect=document.forms[sform].elements[sidinput];
	for(var ni=0; ni< oselect.options.length; ni++){    
		if (oselect.options[ni].value == sidoption){
		oselect.selectedIndex = ni; 
		break;
		}
	}	

}
function open_question(spos){

var spage="sse_g3_p19_questions_seg.jsp"
var sfil = "/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19_questions_seg.jsp";
var sform="a"+spos;
var id_cap="ocultos"+spos;
var vid_cap=m4valor(sform,id_cap,"","get");
sfil=sfil+"?id_cap="+vid_cap+"&spos="+spos+"&mss="+'<%=mss%>';

var v_cono="val_cono"+spos;
var v_rvalor="rvalor"+spos;
var ni = open_question.arguments.length; 
var oarfil=new Array;
oarfil[0]=v_cono;
oarfil[1]=v_rvalor;
miwindow(sfil,sfil,oarfil,sform,700,500);
}
function AddComent(objeto){
	var path = "/mss_g3/english/comentario.jsp?comment=" + objeto.value
	comentario = showModalDialog(path, objeto.value,'dialogWidth=330pt;dialogHeight=212pt;maximize=no;minimize=no;border=thin;center=yes;help=no;');
	  objeto.value = comentario;
}
function mod(spos){
var sform="a"+spos;
var v_rvalor="rvalor"+spos;
var vc=m4valor(sform,v_rvalor,"","get");
var	idselect="select" + spos;
searchoption(sform,idselect,vc);
}
function navegar (id,ordinal1,inicioev,mss,tecnica) 
{
	m4valor("oculto5","id",id,"set");
	m4valor("oculto5","estado","31","set");	
	m4valor("oculto5","id_re","2","set");		
	m4valor("oculto5","ordinal1",ordinal1,"set");		
	m4valor("oculto5","inicioev",inicioev,"set");	
	m4valor("oculto5","mss",mss,"set");			
	m4valor("oculto5","tecnica",tecnica,"set");		
	document.forms["oculto5"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p18.jsp?estado=31";
	m4submit("oculto5");	

}


function navegarCriterio(estado,mss,id,ordinal1,inicioev,tecnica) 
{
	m4valor("oculto4","estado",estado,"set");
	m4valor("oculto4","mss",mss,"set");		
	m4valor("oculto4","id_re","2","set");		
	m4valor("oculto4","IDRH",id,"set");	
	m4valor("oculto4","RHRole",ordinal1,"set");		
	m4valor("oculto4","DTStartEval",inicioev,"set");	
	m4valor("oculto4","tecnica",tecnica,"set");	 		
	document.forms["oculto4"].action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_mod.jsp?estado=31";
	m4submit("oculto4");	

}

function navegar_pend(estado,ordinal,mss,id,ordinal1,inicioev,tecnica) 
{
	m4valor("oculto3","id",id,"set");
	m4valor("oculto3","id_re","2","set");		
	m4valor("oculto3","estado","31","set");	
	m4valor("oculto3","ordinal",ordinal,"set");		
	m4valor("oculto3","ordinal1",ordinal1,"set");		
	m4valor("oculto3","inicioev",inicioev,"set");	
	m4valor("oculto3","mss",mss,"set");			
	m4valor("oculto3","tecnica",tecnica,"set");	 		
	document.forms["oculto3"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19_mod1.jsp?estado=31";
	m4submit("oculto3");	

}

function visualizar(t,c,f)
{	
	if (c==1)
	{
		m4valor("oculto","id_cono",t,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod2.jsp?estado=31";
	}
	if (c==2)
	{
		m4valor("oculto","id_obj",t,"set");
		m4valor("oculto","id_mag",f,"set");
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod3.jsp?estado=31";
	}
	if (c==3)
	{
		m4valor("oculto","id_obj",t,"set");		
		document.forms["oculto"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod4.jsp?estado=31";
	}	
	m4valor("oculto","id_re","3","set");
	m4submit("oculto");	
	
}

function comprobar(t,j,x,temporal)
{
	var error = 0;
	var sMessage = new String(eval("_gen_error_msg"));
	var prueba="";var obj="";var i=0;var idselect="";var fo="";var ocultos="";var ocu="";var comen= "";
	var valor="";
	comen = "comment"+p ;
	for (var p=0;p<t;p++)
	{
		fo = "b"+p;	
		ocu="bocu"+p;
		ocultos="bocultos"+p;
		valor="SCO_ACCOMP_DEGREE"+p;
		mag="bmag"+p;
		nmag="bnmag"+p;
		comen = "comment"+p ;
		if (m4checknumber(m4objeto(valor,fo).value,9,2) == false && temporal==0)
		{				

			<%if (mss.equals("1")==true){%>
				sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_11",m4valor(fo,ocu,"","get"));
			<%}else{%>
				sMessage = sMessage + "\n" + m4getmessage("_sl_co_ess_ev_2",m4valor(fo,ocu,"","get"));
			<%}%>				
			error=1;
		}
		else
		{	
			prueba=m4valor(fo,valor,"","get")			
			//obj=obj +m4valor(fo,ocu,"","get")+","+ m4valor(fo,ocultos,"","get")+","+ prueba+","+m4valor(fo,nmag,"","get")+","+m4valor(fo,mag,"","get")+","+m4valor(fo,comen,"","get") + ",";
			obj=obj +m4valor(fo,ocu,"","get")+"|$|"+ m4valor(fo,ocultos,"","get")+"|$|"+ prueba+"|$|"+m4valor(fo,nmag,"","get")+"|$|"+m4valor(fo,mag,"","get")+"|$|"+m4valor(fo,comen,"","get") + "|$|";
		}					
	}
	if (error == 1 && temporal==0) 
	{
		alert(sMessage);
		return;
	}
	else 
	{
		prueba="";
		var cono="";
		for (var p=0;p<j;p++)
		{
			idselect="select" + p;
			fo = "a"+p;
			ocu="ocu"+p;
			ocultos="ocultos"+p;
			comen = "comment"+p;
			prueba= m4select(m4objeto(idselect,fo),"value");
			valuerat="val_cono"+p;
			if (prueba == "" && temporal==0)
			{					
				<%if (mss.equals("1")==true){%>
						sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_12");
				<%}else{%>				
						sMessage = sMessage + "\n" + m4getmessage("_sl_co_ess_ev_3");
				<%}%>	
				alert(sMessage);				
				return;
			}
			//cono=cono+m4valor(fo,ocu,"","get")+","+ m4valor(fo,ocultos,"","get")+","+ prueba+","+m4select(m4objeto(idselect,fo),"text")+","+ m4valor(fo,comen,"","get") + ",";
			cono=cono+m4valor(fo,ocu,"","get")+"|$|"+ m4valor(fo,ocultos,"","get")+"|$|"+ prueba+"|$|"+m4select(m4objeto(idselect,fo),"text")+"|$|"+ m4valor(fo,comen,"","get") + "|$|"+ m4valor(fo,valuerat,"","get") + "|$|" ;
		
		}	
				
		prueba2="";
		var objcual="";
		for (var p=0;p<x;p++)
		{

			idselect="select" + p;
			fo = "z"+p;
			ocu1="ocu1"+p;
			ocultos1="ocultos1"+p;
			comen = "comment"+p;
			prueba2= m4select(m4objeto(idselect,fo),"value");
			if (prueba2 == "" && temporal==0)
			{					
				<%if (mss.equals("1")==true){%>
						sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_13");
				<%}else{%>				
						sMessage = sMessage + "\n" + m4getmessage("_sl_co_ess_ev_4");
				<%}%>					
				alert(sMessage);				
				return;			
			}
			//objcual=objcual+m4valor(fo,ocu1,"","get")+","+ m4valor(fo,ocultos1,"","get")+","+ prueba2+","+m4select(m4objeto(idselect,fo),"text")+","+ m4valor(fo,comen,"","get") + ",";
			objcual=objcual+m4valor(fo,ocu1,"","get")+"|$|"+ m4valor(fo,ocultos1,"","get")+"|$|"+ prueba2+"|$|"+m4select(m4objeto(idselect,fo),"text")+"|$|"+ m4valor(fo,comen,"","get") + "|$|";
		}			
		m4valor("nombreformulario","SSE_CONOCIMIENTOS",cono,"set");
		m4valor("nombreformulario","SSE_OBJETIVOS",obj,"set");
		m4valor("nombreformulario","SSE_OBJETIVOS_CUAL",objcual,"set");		
		m4valor("nombreformulario","SSE_TEMPORAL",temporal,"set");	
			m4valor("nombreformulario","SCO_EVALUATOR_COMM",m4valor("zcomevaluator","SCO_EVALUATOR_COMM2","","get"),"set");	
		m4submit("nombreformulario");				
		
	}		
}

function load(empleado)
{
	m4valor("cv","person",empleado,"set");
	m4valor("cv", "RET", "DAT", "set");	
	m4submit("cv");
}
function cambiar(pos){
	idselect="select" + pos;
	fo = "a"+pos;
	ocu="ocu"+pos;
	ocultos="ocultos"+pos;
	val_cono = "val_cono"+pos;
	var cono=m4select(m4objeto(idselect,fo),"id");
	m4valor(fo,val_cono,cono,"set");
}
</script>
</head>
<body>
<%if (mss.equals("0")==true){%>
<%@ include file="../../sse_generico/english/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/english/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/english/generico_links.jsp" %>
<%}%>
<%
String zsubsesion = "SSE_EVALUATOR_E_SEG";
String zmeta4object = "SSE_EVALUATOR_E_SEG";
String znodo = "SSE_EVALUATOR_E";
String znodo1 = "M4T_EVAL_CAPAB";
String znodo3 = "M4T_EVAL_OBJECT";  
String znodo4 = "M4T_EVAL_OBJECT_CUAL";  
String znodo5 = "SSE_EVALUATOR_E_T";  

 

String zdireccion = "sse_g3/sse_g3_p19_mod.jsp";
String zventanas = "6";
int zvuelta = 3;
String zestado = "31";
zestado=zestado+"&contador="+zcon+"&mss="+mss;
int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zSCODTACTUAL = zcomun + "SCO_DT_ACTUAL";
String zordinal =zcomun + "ORDINAL";
String zSCONMEVALPROC = zcomun + "SCO_NM_EVAL_PROC";

String zoutputdef5 = zsubsesion + "!" + znodo5 + "[" + zregistroinicial + "-" + zregistrofinal + "]";
String zmove5 = znodo5 + ":" +znodo5 + "[" + zregistroinicial + "]";
String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";

String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";
String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";

String zSCODTACTUALT = zcomun5 + "SCO_DT_ACTUAL";
String zordinalT =zcomun5 + "ORDINAL";
String zSCONMEVALPROCT = zcomun5 + "SCO_NM_EVAL_PROC";

String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
String zSCONMOBJECTIV = zcomun3 + "SCO_NM_OBJECTIVE";
String zSCOIDOBJECTIV = zcomun3 + "SCO_ID_OBJECTIVE";
String zSCOIDMAGNITUD = zcomun3 + "SCO_ID_MAGNITUD";
String zSCONMMAGNITUD = zcomun3 + "SCO_NM_MAGNITUDE";
String zSCONMTYPE = zcomun3 + "SCO_NM_TYPE";
String zSCO_SCHED_VALUE = zcomun3 + "SCO_SCHED_VALUE";
String zSCOVALUE = zcomun3 + "SCO_VALUE ";

String zraiz1 =  znodo1 + ":" + zsubsesion  + "!"+ znodo1+"." ; 
String zSCO_NM_EXTD_KN = zcomun1 + "SCO_NM_EXTD_KN";
String zSCO_MEANING_1 = zcomun1 + "SCO_MEANING_1";
String zSCO_NM_TYPE = zcomun1 + "SCO_NM_TYPE";
String zSCO_NM_LEVEL_REQ =  zcomun1 + "SCO_NM_LEVEL"; 
String zSCOCKQUESTION =  zraiz1 + "SCO_CK_QUESTION";
String zSCO_VALUE_SEG =  zraiz1 + "SCO_VALUE_SEG";
String zSSE_NM_LEVEL =  zraiz1 + "SSE_NM_LEVEL";


String zSCO_NM_OBJECTIVE= zcomun4 + "SCO_NM_OBJECTIVE";
String zSCO_NM_TYPE_OBJ = zcomun4 + "SCO_NM_TYPE";
String zSCO_NM_LEVEL_REQ_OBJ =  zcomun4 + "SCO_NM_LEVEL"; 

String zSCO_NM_LEVEL_SEG = zcomun4 + "SCO_NM_LEVEL_3";

String valSCOIDOBJRATLVL_6 = "" ;
String valSCO_NM_LEVEL_6 = "" ;
String valSCO_ID_CAPABILITY_6 = "" ;

String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";

String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";


String ztipocarga = "SSE";
String zmetodocarga = zsubsesion + "!SSE_EVALUATOR_E.SSE_CARGA";
String zmetodocarga1 = zsubsesion + "!SSE_EVALUATOR_E.SSE_MOSTRAR";
%>	

<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/><m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% 
String scount="";
String scounto="";
try {
	    M4Operations m = new M4Operations(request);
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","ID_HR",zSCOIDHR);
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","OR_ROLE",zSCOORHRPERIOD);
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
	
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="POS" value="<%=zcon%>"/></m4:exec>
<m4:exec m4method="<%=zmetodocarga1%>"><m4:param name="POS" value="<%=zcon%>"/></m4:exec>
<m4:exec node="<%=znodo1%>" alias="counteval" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:exec node="<%=znodo4%>" alias="countObjc" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>	
<m4:outputexec var="scount" alias="counteval"/>
<m4:outputexec var="scounto" alias="countObjc"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<%
int iEvalObj=0;
String zmoveso=znodo4 + ":" + znodo4 ;
String zalias4="";
int hb = 0;
	try {
		iEvalObj = Integer.parseInt(scounto); 
		for (hb = 0; hb < iEvalObj; hb++){
			zmoveso=znodo4 + ":" + znodo4 +"["+String.valueOf(hb)+"]";
			zalias4="M4T_O_LEVEL"+String.valueOf(hb);
		%>
			<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveso%>"/></m4:move>
			<m4:outputdef m4alias="<%=zalias4%>"><m4:param name="m4name0" value="SSE_EVALUATOR_E_SEG!M4T_O_LEVEL[*]"/></m4:outputdef>
			<%
		}
	} catch(Exception e) {}
%>

<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<% 
int iEvalCapab=0;
String zmoves=znodo1 + ":" + znodo1 ;
String zalias="";
int h = 0;
	try {
		iEvalCapab = Integer.parseInt(scount); 
		for (h = 0; h < iEvalCapab; h++){
			zmoves=znodo1 + ":" + znodo1 +"["+String.valueOf(h)+"]";
			zalias="M4T_K_LEVEL"+String.valueOf(h);
		%>
			<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoves%>"/></m4:move>
			<m4:outputdef m4alias="<%=zalias%>"><m4:param name="m4name0" value="SSE_EVALUATOR_E_SEG!M4T_K_LEVEL[*]"/></m4:outputdef>
			<%
		}
	} catch(Exception e) {}
%>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>

<%
	int  zcount  = 0;int  zcount1  = 0;int  zcount3  = 0;int  zcount4  = 0;	int  zcount5  = 0;

	try {
		M4Operations m = new M4Operations(request);
			zcount = m.getCount(znodo,zsubsesion,znodo);
			zcount1 = m.getCount(znodo1,zsubsesion,znodo1);
			zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
			zcount4 = m.getCount(znodo4,zsubsesion,znodo4);
			zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
			
				
	} catch(Exception e) {}
	String	zcountv3 = String.valueOf(zcount3);	String	zcountv4 = String.valueOf(zcount4);	String	zcountv5 = String.valueOf(zcount5);
%>
<form action="  " method="post" name="oculto" id="oculto">
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="id_cono" name="id_cono"  value="" />
<input type="hidden" id="id_obj" name="id_obj"  value="" />
<input type="hidden" id="id_mag" name="id_mag"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
<input type="hidden" id="id" name="id"  value="<%=zSCOIDHR%>" />
<input type="hidden" id="periodo" name="periodo"  value="<%=zSCOORHRPERIOD%>" />
<input type="hidden" id="inicioev" name="inicioev"  value="<%=zSCODTSTARTEVAL%>" />
<input type="hidden" id="tecnica" name="tecnica"  value="<%=zIDASSTEC%>"/>
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado"  value="<%=zNombre%>"/>
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=NombreProceso%>"/>
</form>
<form action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16_mod.jsp?estado=31" method="post" name="oculto2" id="oculto2">
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="estado" name="estado"  value="" />
<input type="hidden" id="id_obj" name="id_obj"  value="" />
<input type="hidden" id="IDRH" name="IDRH"  value="" />
<input type="hidden" id="RHRole" name="RHRole"  value="" />
<input type="hidden" id="DTStartEval" name="DTStartEval"  value="" />
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado"  value="<%=zNombre%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=NombreProceso%>" />
<input type="hidden" id="zIDASSTEC" name="zIDASSTEC"  value="" />
</form>

<form action="  " method="post" name="oculto3" id="oculto3">
<input type="hidden" id="estado" name="estado"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
<input type="hidden" id="id" name="id"  value="" />
<input type="hidden" id="inicioev" name="inicioev"  value="" />
<input type="hidden" id="mss" name="mss"  value="" />
<input type="hidden" id="tecnica" name="tecnica"  value="" />
<input type="hidden" id="ordinal" name="ordinal"  value="" />
<input type="hidden" id="ordinal1" name="ordinal1"  value="" />
<input type="hidden" id="nombreper" name="nombreper"  value="<%=zNombre%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=NombreProceso%>" />
</form>


<form action="  " method="post" name="oculto4" id="oculto4">
<input type="hidden" id="estado" name="estado"  value="" />
<input type="hidden" id="mss" name="mss"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
<input type="hidden" id="IDRH" name="IDRH"  value="" />
<input type="hidden" id="RHRole" name="RHRole"  value="" />
<input type="hidden" id="DTStartEval" name="DTStartEval"  value="" />
<input type="hidden" id="tecnica" name="tecnica"  value="" />
<input type="hidden" id="NombreEmpleado" name="NombreEmpleado"  value="<%=zNombre%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=NombreProceso%>" />
</form>

<form action="  " method="post" name="oculto5" id="oculto5">
<input type="hidden" id="estado" name="estado"  value="" />
<input type="hidden" id="id_re" name="id_re"  value="" />
<input type="hidden" id="id" name="id"  value="" />
<input type="hidden" id="inicioev" name="inicioev"  value="" />
<input type="hidden" id="mss" name="mss"  value="" />
<input type="hidden" id="tecnica" name="tecnica"  value="" />
<input type="hidden" id="ordinal" name="ordinal"  value="" />
<input type="hidden" id="ordinal1" name="ordinal1"  value="" />
<input type="hidden" id="nombreper" name="nombreper"  value="<%=zNombre%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=NombreProceso%>" />
</form>

<form action="/servlet/CheckSecurity/JSP/mss_g1/mss_g1_cv.jsp?estado=11" method="post" name="cv" id="cv">
	<input type="hidden" id="person" name="person"  value="" />
	<input type="hidden" id="RET" name="RET" value="" />
</form>


<table border="0" width="100%" cellspacing="0" border="0">
<tr><td class="titulofuncional"  width="25%" colspan= "2" ><%=ztitle%></td></tr>
<tr>
	<td><img alt="<%=Selec%>"title="<%=Selec%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif"  width="114" height="100" /></td>
	<td><div class="descripcionfuncional"><%=Description%></div>
		<ul class="listaenlace">
		<li><a  class="enlacefuncional" title ="<%=Selec%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31&mss=<%=mss%>"><%=Selec%></a></li>
		<%if (mss.equals("1")==true){%>
		<li><a  class="enlacefuncional" title ="<%=LinkDelegar%>" href="javascript:navegar('<%=zSCOIDHR%>','<%=zSCOORHRPERIOD %>','<%=zSCODTSTARTEVAL%>','<%=mss%>','<%=zIDASSTEC%>');"><%=LinkDelegar%></a></li>
		<li><a  class="enlacefuncional" title ="<%=LinkFijCrit%>" href="javascript:navegarCriterio('31','<%=mss%>','<%=zSCOIDHR%>','<%=zSCOORHRPERIOD %>','<%=zSCODTSTARTEVAL%>','<%=zIDASSTEC%>');"><%=LinkFijCrit%></a></li>
		<%}%>	
	</ul>
	</td>
</tr>
</table>



<%// Si hay datos temporales o no hay nada cargado %>
<%if ((zcount == 0) || (zcount5 > 0)) { %>
<table class = "tablaestados" width="100%" cellspacing="0" border="0" >

<%// Si hay conocimientos %>
<%if (zcount1 > 0) {
	String znodoaux="";
	String zmoveaux="";
%>
<table border="0" width="100%" cellspacing="0" border="0"><td class="fuenteleyenda_big"  colspan = "6"><a title="<%=Datos%>" href="javascript:load('<%=zSCOIDHR%>')"><%=zNombre%></a> - <%=NombreProceso%></td></tr></table>
<table border="0" width="100%" cellspacing="0" border="0">
<m4:item m4varname="zCkQuestion" m4name="<%=zSCOCKQUESTION%>" />
<tr class="tablaestadosceldatitulo">
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_EXTD_KN%>" htmlsafe = "true"/> </td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_TYPE%>" htmlsafe = "true"/></td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL_REQ%>" htmlsafe = "true"/> </td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_MEANING_1%>" htmlsafe = "true"/> </td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL_SEG%>" htmlsafe = "true"/></td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_VALUE_SEG%>" htmlsafe = "true"/></td>
	<%if (zCkQuestion.equals("1")){%><td>&nbsp;</td><%}%>
	<td class="tablamenuright" >
		<a title="<%=Selec%>"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31&mss=<%=mss%>">
		<%if (mss.equals("0")==true){%>
			<img alt="<%=Selec%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		<%}else{%>
			<img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
		<%}%>
		</a>
	</td>
</tr>
	<m4:dataloop outputdef="<%=znodo1%>">
	<m4:item m4varname="zSCOIDLVLTMPCAP" item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>" />
	<m4:item m4varname="zSCONMLVLTMPCAP" item="SCO_NM_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>" />
	<m4:current m4varname="current" outputdef="<%=znodo1%>"/>
	<%
	znodoaux="M4T_K_LEVEL"+current;
	zmoveaux =znodoaux+ ":" + "M4T_K_LEVEL" + "[FIRST]";
	if (zSCOIDLVLTMPCAP.equals("")) {zSCONMLVLTMPCAP = lblNotAssess ;}
	%>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
	<form name="a<%=current%>" id="a<%=current%>" action=" ">
	<input id="ocultos<%=current%>" name="ocultos<%=current%>" type="hidden" value="<m4:item  item="SCO_ID_CAPABILITY" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
	<input id="ocu<%=current%>" name="ocu<%=current%>" type="hidden" value="<m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
	<input id="comment<%=current%>" name="comment<%=current%>" type="hidden" value="<m4:item  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
	<input id="rvalor<%=current%>" name="rvalor<%=current%>" type="hidden" value=""  />
	<tr>
		<td class="fuentevalor"><a title="<%=Ver%>" href="javascript:visualizar('<m4:item  item="SCO_ID_CAPABILITY" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>',1)">&nbsp;<m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/></a></td >
		<td class="fuentevalor">&nbsp;<m4:item  item="SCO_NM_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
		<td class="fuentevalor">&nbsp;<m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
		<td class="fuentevalor">&nbsp;<m4:item  item="SCO_MEANING_1" htmlsafe="true" outputdef="<%=znodo1%>"/></td>	
			<td class="fuentevalor">
			<select id="select<%=current%>" name="select<%=current%>" class="fuenteformulario" onchange="javscript:cambiar('<%=current%>')">
				<option value=""><%=lblNotAssess%></option>
				<m4:dataloop outputdef="<%=znodoaux%>">
				<option id ="<m4:item  item="SCO_PERCENT" htmlsafe="true" outputdef="<%=znodoaux%>"/>"value="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/>">
					<m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/>
				</option>
				</m4:dataloop>
			</select>
		</td>

		<td class="fuentevalor">&nbsp;<input readonly="readonly" size="10" maxlength="7" class="fuentecampo" type="text" id="val_cono<%=current%>" name="val_cono<%=current%>" value="<m4:item  item="SCO_VALUE_SEG_TMP" htmlsafe="true" outputdef="<%=znodo1%>"/>" />	</td>	
	<%if (zCkQuestion.equals("1")){%><td class="fuentevalor"  width="3%"><a title="<%=lblQuesti%>" href="javascript:open_question('<%=current%>');"><img align="right" alt="<%=lblQuesti%>"  src="/iconos/ic_details_16_16.gif" height="16" width="16"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td><%}%>
	<td class="fuentevalor"  width="3%"><a title="<%=AddComment%>" href="javascript:AddComent(m4objeto('comment<%=current%>','a<%=current%>'));"><img align="right" alt="<%=AddComment%>"  src="<%=pathImgAddComment%>" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
 if ('<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>"  jsafe="true"/>'!= ""){
     searchoption('a<%=current%>','select<%=current%>','<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>');
  }
--></script>
</form>
</m4:dataloop>
</table>
<%} %>
<%if ((zcount3 > 0) || (zcount4 >0 )) {%>
<%if (zcount1 == 0) {%><table class = "tablaestados" width="100%" cellspacing="0" ><tr><td class="fuenteleyenda_big"><a title="<%=Datos%>" href="javascript:load('<%=zSCOIDHR%>')"><%=zNombre%></a> - <%=NombreProceso%></td></tr></table><%}%>
<table class = "tablaestados" width="100%" cellspacing="0">		
<tr class="tablaestadosceldatitulo">
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_OBJECTIVE%>" htmlsafe = "true"/> </td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_TYPE_OBJ%>" htmlsafe = "true"/> </td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL_REQ_OBJ%>" htmlsafe = "true"/> </td>
	<td>&nbsp;<m4:label m4name="<%=zSCO_NM_LEVEL_SEG%>" htmlsafe = "true"/> </td>
	<td class="tablamenuright" >
	<a title="<%=Selec%>" href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31&mss=<%=mss%>" >
	<%if (mss.equals("0")==true){%>
	<img alt="<%=Selec%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}else{%>
	<img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />

	<%}%>
	</a>
	</td>
</tr>
<%}%> 
<%if (zcount4 > 0) {
	String znodoaux4="";
	String zmoveaux4="";
%>
<m4:dataloop outputdef="<%=znodo4%>">
	<m4:item m4varname="zSCO_ID_LVL_TMP4" item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo4%>" />
	<m4:item m4varname="zSCO_NM_LVL_TMP4" item="SCO_NM_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>" />
	<m4:current m4varname="current4" outputdef="<%=znodo4%>"/>
	<%
	znodoaux4="M4T_O_LEVEL"+current4;
	zmoveaux4 =znodoaux4+ ":" + "M4T_O_LEVEL" + "[FIRST]";
	if (zSCO_ID_LVL_TMP4.equals("")) {zSCO_NM_LVL_TMP4 = lblNotAssess ;}
	%>
	<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux4%>"/></m4:move>
<form name="z<%=current4%>" id="z<%=current4%>" action=" ">
<input id="ocultos1<%=current4%>" name="ocultos1<%=current4%>" type="hidden" value="<m4:item  item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<input id="ocu1<%=current4%>" name="ocu1<%=current4%>" type="hidden" value="<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<tr>
	<input id="comment<%=current4%>" name="comment<%=current4%>" type="hidden" value="<m4:item  item="SCO_EXPLANATION" htmlsafe="true" outputdef="<%=znodo4%>" />" />
	<td class="fuentevalor"><a title="<%=Ver%>"  href="javascript:visualizar('<m4:item  item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>" />',3)">&nbsp;<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>" /></a></td >
	<td class="fuentevalor">&nbsp;<m4:item  item="SCO_NM_TYPE" htmlsafe="true" outputdef="<%=znodo4%>" /></td>	
	<td class="fuentevalor">&nbsp;<m4:item  item="SCO_NM_LEVEL_1" htmlsafe="true" outputdef="<%=znodo4%>" /></td>

	<td class="fuentevalor">
	<select id="select<%=current4%>" name="select<%=current4%>" class="fuenteformulario">&nbsp;
		<option value=""><%=lblNotAssess%></option>
		<m4:dataloop outputdef="<%=znodoaux4%>">
			<option id ="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodoaux4%>"/>"value ="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodoaux4%>"/>"	><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux4%>"/></option>
		</m4:dataloop>
	</select></td>
	<script type="text/javascript" language="Javascript1.5"><!--

 if ('<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo4%>" />'!= ""){
     searchoption('z<%=current4%>','select<%=current4%>','<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo4%>"/>');
  }
--></script>
<td class="fuentevalor"  width="3%"><a title="<%=AddComment%>" href="javascript:AddComent(m4objeto('comment<%=current4%>','z<%=current4%>'));"><img align="right" alt="<%=AddComment%>"  src="<%=pathImgAddComment%>" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</form>
</m4:dataloop>
</form>
<%}%>

<% //Si hay cualitativos
	if (zcount3 > 0){
String zposicions3 = "0";

String kk = "" ; 
String zValor = "" ; 
double dValor = 0 ; 
String zSCOEXPLANATION = "";
%>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
<%


try {	
	M4Operations t = new M4Operations(request);
	kk = String.valueOf(m4lix);
	t.moveData(znodo3,zmeta4object,znodo3,kk);
	zValor = t.getItem(znodo3,zmeta4object,znodo3,"","SCO_ACCOMP_DEGREE_TMP"); 
	dValor = Double.valueOf(zValor).doubleValue();
	zSCOEXPLANATION = t.getItem(znodo3,zmeta4object,znodo3,"","SCO_EXPLANATION"); 				
	} catch(Exception e) {}

zposicions3 = m4lix;%>

<form name="b<%=zposicions3%>" id="b<%=zposicions3%>" action=" ">
<input id="bocultos<%=zposicions3%>" name="ocultos<%=zposicions3%>" type="hidden" value="<m4:item m4name="<%=zSCOIDOBJECTIV%>" htmlsafe = "true"/>" />
<input id="bocu<%=zposicions3%>" name="ocu<%=zposicions3%>" type="hidden" value="<m4:item m4name="<%=zSCONMOBJECTIV%>" htmlsafe = "true"/>" />
<input id="bmag<%=zposicions3%>" name="bmag<%=zposicions3%>" type="hidden" value="<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>" />
<input id="bnmag<%=zposicions3%>" name="bnmag<%=zposicions3%>" type="hidden" value="<m4:item m4name="<%=zSCONMMAGNITUD%>" htmlsafe = "true"/>" />
<input id="comment<%=zposicions3%>" name="comment<%=zposicions3%>" type="hidden" value="<%=zSCOEXPLANATION%>" />
<tr>
	<td class="fuentevalor"><a title="<%=Ver%>"  href="javascript:visualizar('<m4:item m4name="<%=zSCOIDOBJECTIV%>" htmlsafe = "true"/>',2,'<m4:item m4name="<%=zSCOIDMAGNITUD%>" htmlsafe = "true"/>')">&nbsp;<m4:item m4name="<%=zSCONMOBJECTIV%>" htmlsafe = "true"/> </a></td >
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMTYPE%>" htmlsafe = "true"/></td>	
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCO_SCHED_VALUE%>" htmlsafe = "true"/></td>&nbsp;<m4:item m4name="<%=zSCOVALUE%>" htmlsafe = "true"/></td>
	<td class="fuentevalor">&nbsp;<input class="fuenteformulario" type="text" id="SCO_ACCOMP_DEGREE<%=zposicions3%>" name="SCO_ACCOMP_DEGREE<%=zposicions3%>" value="<%=dValor%>" size="15" maxlength="12" title="<m4:label m4name="<%=zSCO_SCHED_VALUE%>" htmlsafe = "true"/>"  />&nbsp;<m4:item m4name="<%=zSCONMMAGNITUD%>" htmlsafe = "true"/></td>	
	<td class="fuentevalor"  width="3%"><a title="<%=AddComment%>" href="javascript:AddComent(m4objeto('comment<%=zposicions3%>','b<%=zposicions3%>'));"><img align="right" alt="<%=AddComment%>"  src="<%=pathImgAddComment%>" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>

</form>
</m4:loop>
</table>
<%}if (((zcount3>0) ||  (zcount1 > 0) || (zcount4 > 0)))  {%>
<table  width="100%" cellspacing="0" >
<form name="zcomevaluator" id="zcomevaluator" action=" ">
	<tr>
		
			<td class="fuentecampo" ><m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" /></td>
			<td class="fuentecampo" colspan="3">
			<textarea rows="6" cols="40" id="SCO_EVALUATOR_COMM2" name="SCO_EVALUATOR_COMM2" title="<m4:label  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo%>" />" ><m4:item  item="SCO_EVALUATOR_COMM" htmlsafe="true" outputdef="<%=znodo5%>" /></textarea></td>
		</tr>
</form>
<tr>
	<td class="fuenteboton" colspan="4">
		<a title="<%=Send%>" href="javascript:comprobar(<%=zcount3%>,<%=zcount1%>,<%=zcount4%>,0);"><img alt="<%=Send%>"  src="/iconos/icono_enviar_ess_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
		<a title="<%=Save%>" href="javascript:comprobar(<%=zcount3%>,<%=zcount1%>,<%=zcount4%>,1);"><img alt="<%=Save%>"  src="/iconos/icono_guardar_36_36.gif" width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"  /></a>
	</td>	
</tr>
</table>
<%}else{%>
 <div class="fuentenodatos"><%=NoDataFound3%></div>
<%} %>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19_act.jsp?mss=<%=mss%>" method="post" name="nombreformulario" id="nombreformulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_EVALUATOR_E_SEG" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_EVALUATOR_E" />
<input type="hidden" id="SSE_CONOCIMIENTOS" name="SSE_CONOCIMIENTOS" value="" />
<input type="hidden" id="SSE_OBJETIVOS" name="SSE_OBJETIVOS" value="" />
<input type="hidden" id="SSE_OBJETIVOS_CUAL" name="SSE_OBJETIVOS_CUAL" value="" />
<input type="hidden" id="SSE_TEMPORAL" name="SSE_TEMPORAL" value="" />
<input type="hidden"  id="id" name="id" value="<%=zSCOIDHR%>" />
<input type="hidden"  id="ordinal1" name="ordinal1" value="<%=zSCOORHRPERIOD%>" />
<input type="hidden"  id="inicioev" name="inicioev" value="<%=zSCODTSTARTEVAL%>" />
<input type="hidden"  id="tecnica" name="tecnica" value="<%=zIDASSTEC%>" />
<input type="hidden"  id="nombreper" name="nombreper" value="<%=zNombre%>" />
<input type="hidden"  id="NombreProceso" name="NombreProceso" value="<%=NombreProceso%>" />
<input type="hidden" id="SCO_EVALUATOR_COMM" name="SCO_EVALUATOR_COMM" value="" />
</form>
</table>
<% } %>

<%if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcount - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<table class="tablaestados" width="100%" cellspacing="0" border="0" >
<td class="fuenteleyenda_big"  colspan = "6"> 
<a title="<%=Datos%>" href="javascript:load('<%=zSCOIDHR%>')"><%=zNombre%></a> - <%=NombreProceso%></td>
</tr>
<tr class = "tablaestadosceldatitulo">
	<td>&nbsp;<%=Procpend%></td><td>&nbsp;<m4:label m4name="<%=zSCODTACTUAL%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" >
	<a title="<%=Procpend%>"href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19.jsp?estado=31&mss=<%=mss%>" >
	<%if (mss.equals("0")==true){%>
	<img alt="<%=Selec%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}else{%>
	<img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
	<%}%>
	</a>
	</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;

if (zcontrol==0){%>
<tr>
	<td class="fuentevalor"><a title = "<%=VerPend%>" href="javascript:navegar_pend('31','<m4:item m4name="<%=zordinal%>" jsafe = "true" htmlsafe = "true"/>',<%=zmss%>,'<%=zSCOIDHR%>' ,'<%=zSCOORHRPERIOD%>', '<%=zSCODTSTARTEVAL%>','<%=zIDASSTEC%>')">&nbsp;<m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/></a></td >
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCODTACTUAL%>" htmlsafe = "true"/></td>
	<td class="fuentebotonright">
	<a title="<%=Delete%>" href="javascript:parametros=['TAG','REC','ACC','NOD','mss','id','ordinal1','inicioev','tecnica','nombreper','NombreProceso','SSE_TEMPORAL'];valores=['SSE_EVALUATOR_E_SEG','<m4:item m4name="<%=zordinal%>" jsafe = "true" htmlsafe = "true"/>','BORRAR','SSE_EVALUATOR_E','<%=mss%>','<%=zSCOIDHR%>' ,'<%=zSCOORHRPERIOD%>', '<%=zSCODTSTARTEVAL%>','<%=zIDASSTEC%>','<%=zNombrejs%>','<m4:item m4name="<%=zSCONMEVALPROC%>" jsafe="true" htmlsafe="true"/>','0'];m4navegar('sse_g3/sse_g3_p19_act.jsp',parametros,valores);">																	
	<img class="fuentebotonright"alt="<%=Delete%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" >
	</a>
	</td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2"><a title = "<%=VerPend%>"href="javascript:navegar_pend('31','<m4:item m4name="<%=zordinal%>" jsafe = "true" htmlsafe = "true"/>',<%=zmss%>,'<%=zSCOIDHR%>' ,'<%=zSCOORHRPERIOD%>', '<%=zSCODTSTARTEVAL%>','<%=zIDASSTEC%>')">&nbsp;<m4:item m4name="<%=zSCONMEVALPROC%>" htmlsafe = "true"/></a></td >
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCODTACTUAL%>" htmlsafe = "true"/></td>
	<td class="fuentebotonright2">
	<a title="<%=Delete%>" href="javascript:parametros=['TAG','REC','ACC','NOD','mss','id','ordinal1','inicioev','tecnica','nombreper','NombreProceso'];
	valores=['SSE_EVALUATOR_E_SEG','<m4:item m4name="<%=zordinal%>" jsafe = "true" htmlsafe = "true"/>','BORRAR','SSE_EVALUATOR_E','<%=mss%>','<%=zSCOIDHR%>' ,'<%=zSCOORHRPERIOD%>', '<%=zSCODTSTARTEVAL%>','<%=zIDASSTEC%>','<%=zNombrejs%>','<m4:item m4name="<%=zSCONMEVALPROC%>" jsafe="true" htmlsafe="true"/>'];
	m4navegar('/sse_g3/sse_g3_p19_act.jsp',parametros,valores);">																	
	<img title="<%=Delete%>" class="fuentebotonright2"alt="<%=Delete%>"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" >
	</a>
	</td>
</tr>

 <%}%>

</m4:loop>
<%@include file="../../sse_generico/english/generico_ventanas.jsp"%>
</table>
<%}%>


<%if (mss=="0"){%>
<%@ include file="../../sse_generico/english/generico_disclaimer.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/english/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
</body>
<m4:endpage/>	
</html>


