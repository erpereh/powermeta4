function open_question(spos,slo,sp){
var spage="sse_g3/ssco_evaluator_questions.jsp"
var sfil = "/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions.jsp";

if (sp=="1"){

var spage="sse_g3/ssco_evaluator_questions_seg.jsp"
var sfil = "/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg.jsp";
}
var sform="a"+spos;
var id_cap="ocultos"+spos;
var vid_cap=m4valor(sform,id_cap,"","get");
sfil=sfil+"?id_cap="+vid_cap+"&spos="+spos+"&mss="+slo;
var v_cono="val_cono"+spos;
var v_rvalor="rvalor"+spos;
var ni = open_question.arguments.length; 
var oarfil=new Array;
oarfil[0]=v_cono;
oarfil[1]=v_rvalor;
miwindow(sfil,sfil,oarfil,sform,700,500);
}
function mod(spos){
var sform="a"+spos;
var v_rvalor="rvalor"+spos;
var vc=m4valor(sform,v_rvalor,"","get");
var idselect="select" + spos;
m4searchoptioness(sform,idselect,vc);
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
function ver_notea(f){


  val_i = "val_"+f;
  var cono=m4select(m4objeto(f,f),"id");
  m4valor(f,val_i,cono,"set");
  
}

function calc_o(nreg,empleado,ordinal,fec){
var sMessage = new String(eval("_gen_error_msg"));
error=0;wn=0;
var sparam="";
for (var p=0;p<nreg;p++){
  fo = "b"+p;
  ocu="bocu"+p;
  vido="bocultos"+p
  nvido=m4valor(fo,vido,"","get");
  vvalor="SCO_ACCOMP_DEGREE"+p
  nvvalor=m4valor(fo,vvalor,"","get");
  if (nvvalor !=""){
    if (m4checknumber(m4objeto(vvalor,fo).value,9,2) == false ){
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_17",m4valor(fo,ocu,"","get"));
        error=1;
      }
  }else{
    wn=wn+1;
  }
sparam=sparam+nvido+"="+nvvalor+"|$|";
}
if (  error==1){
alert(sMessage);
return;
}
if (wn==nreg){
  vmensaje=m4getmessage("_sl_co_mss_ev_15");
  alert(vmensaje);
  return;
}

//var dir="/servlet/CheckSecurity/JSP/mss_g3/ssco_evaluator_notes.jsp?zid="+empleado+"&zor="+ordinal+"&zdt="+fec+"&zValues="+sparam;
//  window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');

var spage="mss_g3/ssco_evaluator_notes.jsp"
var sfil = "/servlet/CheckSecurity/JSP/mss_g3/ssco_evaluator_notes.jsp";
var sform="notes2";
var id_cap="OBJ_QUANT_TEMP";

sfil=sfil+"?zid="+empleado+"&zor="+ordinal+"&zdt="+fec+"&zValues="+sparam;



var oarfil=new Array;
oarfil[0]=id_cap;

miwindow(sfil,sfil,oarfil,sform,20,1);

}

function calc_cono(nreg){
wn=0;
prueba="";
var cono="";
var nNorm=0;
var nTotal=0;
var ndistPartial=100;
for (var p=0;p<nreg;p++){
  idselect="select" + p;
  fo = "a"+p;
  ocu="ocu"+p;
  ocultos="ocultos"+p;
  
  valuerat="val_cono"+p;
  valuereq ="SCO_ID_CAP_REQ_LVL"+p;
  valweight ="SCO_WEIGHT"+p;
  nvalrat=m4valor(fo,valuerat,"","get");
  
  var idrat=m4select(m4objeto(idselect,fo),"value");

  if (idrat== ""){
    wn=wn+1;
  }else{  

    var idreq =m4valor(fo,valuereq,"","get");
    
    var nvaluereq=0;
    oselect=m4objeto(idselect,fo);

    for(var ni=0; ni< oselect.options.length; ni++){ 
  
        if (oselect.options[ni].value == idreq){
          nvaluereq = parseFloat(oselect.options[ni].id); 
          break;
          }
            
    }

     if (nvalrat<nvaluereq){
      ndistPartial=(nvalrat/nvaluereq)*100;

    }else{
      ndistPartial=100;
    }
    nwa= parseFloat(m4valor(fo,valweight,"","get"));
    nTotal=nTotal+ndistPartial*nwa;

    nNorm=nNorm+nwa;
  

  
  } 

}
if (wn==nreg){
  vmensaje=m4getmessage("_sl_co_mss_ev_15");
alert(vmensaje);
return;

}


        
if ((nNorm)>0){nTotal=nTotal/nNorm}else{nTotal=0;}
nTotal=Math.round(nTotal*100)/100 
var vSignificado="";
var nPos=-1;

oselectnotes = m4objeto("notes1","notes1");
var vlon =oselectnotes.options.length;

var nFind=-1;
  for(var ni=1; ni<vlon; ni++){ 
    npct=parseFloat(oselectnotes.options[ni].id);
    if (npct>=nTotal){
      nFind=ni; 
      break;
    }

  } 

if (nFind==-1){
  
nPos=1;

}else{
  if (nFind==vlon){
    
nPos=vlon;
  }else{  
    vdif= parseFloat(oselectnotes.options[nFind].id)-nTotal
    vdif2= parseFloat(oselectnotes.options[nFind-1].id)-nTotal
    if (vdif-vdif2){nPos=nFind;}else{nPos=nFind-1;}
  } 
}
vSignificado =oselectnotes.options[nPos].text;

  var vmensaje=m4getmessage("_sl_co_mss_ev_16",nTotal,vSignificado );
    if ( confirm(vmensaje) == true){
  oselectnotes.selectedIndex =nPos;



  m4valor("notes1","val_notes1",nTotal,"set");
     }


}


function calc_obj(nreg){
wn=0;
prueba="";
var cono="";
var nNorm=0;
var nTotal=0;
var ndistPartial=100;

for (var p=0;p<nreg;p++){
  idselect="select" + p;
  fo = "z"+p;
  ocu="ocu"+p;
  ocultos="ocultos"+p;
  
  valuerat="val_cono"+p;
  valuereq ="SCO_ID_OBJ_REQ_LVL"+p;
  valweight ="SCO_WEIGHT"+p;
  
  
  var idrat=m4select(m4objeto(idselect,fo),"value");

  if (idrat== ""){
    wn=wn+1;
  }else{  
       var idreq =m4valor(fo,valuereq,"","get");

    
nvalrat=m4select(m4objeto(idselect,fo),"id");


    var nvaluereq=0;
    oselect=m4objeto(idselect,fo);
  
    for(var ni=0; ni< oselect.options.length; ni++){ 
  
        if (oselect.options[ni].value == idreq){
          nvaluereq = parseFloat(oselect.options[ni].id);

          break;
          }
            
    }
    
     if (nvalrat<nvaluereq){
      ndistPartial=(nvalrat/nvaluereq)*100;
    }else{
      ndistPartial=100;
    }
    nwa= parseFloat(m4valor(fo,valweight,"","get"));
    nTotal=nTotal+ndistPartial*nwa;
  
    nNorm=nNorm+nwa;

          

  
  } 

}
if (wn==nreg){
  vmensaje=m4getmessage("_sl_co_mss_ev_15");
alert(vmensaje);
return;

}

var nPos=-1;
if ((nNorm)>0){nTotal=nTotal/nNorm}else{nTotal=0;}
nTotal=Math.round(nTotal*100)/100 
oselectnotes = m4objeto("notes3","notes3");
var vlon =oselectnotes.options.length;

var nFind=-1;
  for(var ni=1; ni<vlon; ni++){ 
    npct=parseFloat(oselectnotes.options[ni].id);
    if (npct>=nTotal){
      nFind=ni; 
      break;
    }

  } 

if (nFind==-1){
  
nPos=1;

}else{
  if (nFind==vlon){
    nPos=vlon;
    
  }else{  
    vdif= parseFloat(oselectnotes.options[nFind].id)-nTotal
    vdif2= parseFloat(oselectnotes.options[nFind-1].id)-nTotal
    if (vdif-vdif2){nPos = nFind;}else{nPos= nFind-1;}
  } 
}


var vSignificado =oselectnotes.options[nPos].text;

  var vmensaje=m4getmessage("_sl_co_mss_ev_16",nTotal,vSignificado );
    if ( confirm(vmensaje) == true){
  oselectnotes.selectedIndex =nPos;
//  ver_notea("notes3");
  m4valor("notes3","val_notes3",nTotal,"set");
     }

}
function muestra(cap, e){

 
  margin=7;
  var tempX = 0;
  var tempY = 0;
  var event = window.event ? window.event : e;
  tempX = event.clientX - document.body.scrollLeft;
  tempY = event.clientY + document.body.scrollTop;


  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}

  document.getElementById(cap).style.top = (tempY + margin- 110) + "px";
  var percentage = 2* ((tempX+margin)*25)/100;
  document.getElementById(cap).style.left = (tempX + margin - percentage) + "px";
  document.getElementById(cap).style.display='block';
  document.getElementById(cap).style.visibility = "visible";
  return;
  
  

}
function oculta(cap){

m4elemento(cap).style.visibility = "hidden";


}


function comprobar(t,j,x,temporal,zCkNotes)
{
var sMessage = new String(eval("_gen_error_msg"));
var error=0;var prueba="";var obj="";var i=0;var idselect="";var fo="";var ocultos="";var ocu="";var comen= "";
var valor="";
  prueba="";
  var cono="";
  for (var p=0;p<j;p++){
    idselect="select" + p;
    fo = "a"+p;
    ocu="ocu"+p;
    ocultos="ocultos"+p;
    comen = "comment"+p;
    valuerat="val_cono"+p;
    valcritype = "SCO_ID_CRITERIA_TYPE"+p;
    prueba= m4select(m4objeto(idselect,fo),"value");
    if (prueba == "" && temporal==0){         
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_12");
      alert(sMessage);
      return;
    }
  cono=cono+m4valor(fo,ocu,"","get")+"|$|"+ m4valor(fo,ocultos,"","get")+"|$|"+ prueba+"|$|"+m4select(m4objeto(idselect,fo),"text")+"|$|"+ m4valor(fo,comen,"","get") + "|$|"+ m4valor(fo,valuerat,"","get") + "|$|"  + m4valor(fo,valcritype,"","get") + "|$|";
  }
  
if (zCkNotes=="1"){
  if (j>0){
      vnotacono=m4select(m4objeto("notes1","notes1"),"value");
      if (vnotacono == "" && temporal==0){          
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_18");
      alert(sMessage);
      return;
      }
      m4valor("nombreformulario","SCO_ID_EMMITED_CAP",m4valor("notes1","N_SCALE","","get"),"set");
      m4valor("nombreformulario","SCO_ID_LEVEL_CAP",m4select(m4objeto("notes1","notes1"),"value"),"set");
      m4valor("nombreformulario","SCO_CALCUL_CAP",m4valor("notes1","val_notes1","","get"),"set");
  }
}   
for (var p=0;p<t;p++)
{
  fo = "b"+p; 
  ocu="bocu"+p;
  ocultos="bocultos"+p;
  valor="SCO_ACCOMP_DEGREE"+p;
  mag="bmag"+p;
  nmag="bnmag"+p;
  comen = "comment"+p ;
  valcritype = "SCO_ID_CRITERIA_TYPE"+p;
  
  if  (temporal==0){
    if (m4checknumber(m4objeto(valor,fo).value,9,2) == false ){
    sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_11",m4valor(fo,ocu,"","get"));
    error=1;
    }
  }else{
    if (m4objeto(valor,fo).value !=""){
    
    
      if (m4checknumber(m4objeto(valor,fo).value,9,2) == false ){
        sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_17",m4valor(fo,ocu,"","get"));
        error=1;
      }
    }
  }
  prueba=m4valor(fo,valor,"","get");    
  obj=obj +m4valor(fo,ocu,"","get")+"|$|"+ m4valor(fo,ocultos,"","get")+"|$|"+ prueba+"|$|"+m4valor(fo,nmag,"","get")+"|$|"+m4valor(fo,mag,"","get")+"|$|"+m4valor(fo,comen,"","get") + "|$|"+m4valor(fo,valcritype,"","get")+"|$|";            
  }
  if (error == 1) 
  {
    alert(sMessage);
    return;
  }
if (zCkNotes=="1"){
if (t>0){
  obtemp=m4valor("notes2","OBJ_QUANT_TEMP","","get");
  if (temporal==0 ){
    if (m4checknumber(m4objeto("OBJ_QUANT_TEMP","notes2").value,9,2) == false  ){ 
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_19");
      alert(sMessage);
        error=1;
        return;
      }       
  }else{
    if (obtemp !=""){
      if (m4checknumber(m4objeto("OBJ_QUANT_TEMP","notes2").value,9,2) == false  ){ 
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_21");
      alert(sMessage);
        error=1;
        return;
      }
    }
  }
    m4valor("nombreformulario","SCO_VALUE_OBJ_QUANT",m4valor("notes2","OBJ_QUANT_TEMP","","get"),"set");
}
}
  
      
  prueba2="";
  var objcual="";
  for (var p=0;p<x;p++){
    idselect="select" + p;
    fo = "z"+p;
    ocu1="ocu1"+p;
    ocultos1="ocultos1"+p;
    comen = "comment"+p;
      valcritype = "SCO_ID_CRITERIA_TYPE"+p;
    prueba2= m4select(m4objeto(idselect,fo),"value");
    if (prueba2 == "" && temporal==0){          
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_13");
      alert(sMessage);        
      return;
    }
    objcual=objcual+m4valor(fo,ocu1,"","get")+"|$|"+ m4valor(fo,ocultos1,"","get")+"|$|"+ prueba2+"|$|"+m4select(m4objeto(idselect,fo),"text")+"|$|"+ m4valor(fo,comen,"","get") + "|$|"+m4valor(fo,valcritype,"","get")+"|$|";
  }     

  if (zCkNotes=="1"){

  
    if (x>0){
      vnotao=m4select(m4objeto("notes3","notes3"),"value");
      if (vnotao == "" && temporal==0){         
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_20");
      alert(sMessage);
      return;
      }
    
      m4valor("nombreformulario","SCO_ID_EMMITED_OBJ",m4valor("notes3","N_SCALE3","","get"),"set");
      m4valor("nombreformulario","SCO_ID_LEVEL_OBJ",m4select(m4objeto("notes3","notes3"),"value"),"set");
      m4valor("nombreformulario","SCO_CALCUL_OBJ",m4valor("notes3","val_notes3","","get"),"set");
    } 
  } 
  m4valor("nombreformulario","SSCO_CONOCIMIENTOS",cono,"set");
  m4valor("nombreformulario","SSCO_OBJETIVOS",obj,"set");
  m4valor("nombreformulario","SSCO_OBJETIVOS_CUAL",objcual,"set");    
  m4valor("nombreformulario","SSE_TEMPORAL",temporal,"set");    
  m4valor("nombreformulario","SCO_EVALUATOR_COMM",m4valor("zcomevaluator","SCO_EVALUATOR_COMM2","","get"),"set");
  m4valor("nombreformulario","SCO_AREAS_IMP",m4valor("zcomevaluator","SCO_AREAS_IMP2","","get"),"set");
  m4valor("nombreformulario","SCO_STRENGTHS",m4valor("zcomevaluator","SCO_STRENGTHS2","","get"),"set");
  m4submit("nombreformulario");       
    
  
}
function comprobar_seg(t,j,x,temporal)
{
var sMessage = new String(eval("_gen_error_msg"));
var error=0;var prueba="";var obj="";var i=0;var idselect="";var fo="";var ocultos="";var ocu="";var comen= "";
var valor="";
  prueba="";
  var cono="";
  for (var p=0;p<j;p++){
    idselect="select" + p;
    fo = "a"+p;
    ocu="ocu"+p;
    ocultos="ocultos"+p;
    comen = "comment"+p;
    valuerat="val_cono"+p;
  
    prueba= m4select(m4objeto(idselect,fo),"value");
    if (prueba == "" && temporal==0){         
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_12");
      alert(sMessage);
      return;
    }
  cono=cono+m4valor(fo,ocu,"","get")+"|$|"+ m4valor(fo,ocultos,"","get")+"|$|"+ prueba+"|$|"+m4select(m4objeto(idselect,fo),"text")+"|$|"+ m4valor(fo,comen,"","get") + "|$|"+ m4valor(fo,valuerat,"","get") + "|$|" ;
  }
  
    
for (var p=0;p<t;p++)
{
  fo = "b"+p; 
  ocu="bocu"+p;
  ocultos="bocultos"+p;
  valor="SCO_ACCOMP_DEGREE"+p;
  mag="bmag"+p;
  nmag="bnmag"+p;
  comen = "comment"+p ;

  
  if  (temporal==0){
    if (m4checknumber(m4objeto(valor,fo).value,9,2) == false ){
    sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_11",m4valor(fo,ocu,"","get"));
    error=1;
    }
  }else{
    if (m4objeto(valor,fo).value !=""){
    
    
      if (m4checknumber(m4objeto(valor,fo).value,9,2) == false ){
        sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_17",m4valor(fo,ocu,"","get"));
        error=1;
      }
    }
  }
  prueba=m4valor(fo,valor,"","get");    
  obj=obj +m4valor(fo,ocu,"","get")+"|$|"+ m4valor(fo,ocultos,"","get")+"|$|"+ prueba+"|$|"+m4valor(fo,nmag,"","get")+"|$|"+m4valor(fo,mag,"","get")+"|$|"+m4valor(fo,comen,"","get") + "|$|";            
  }
  if (error == 1) 
  {
    alert(sMessage);
    return;
  }
  
      
  prueba2="";
  var objcual="";
  for (var p=0;p<x;p++){
    idselect="select" + p;
    fo = "z"+p;
    ocu1="ocu1"+p;
    ocultos1="ocultos1"+p;
    comen = "comment"+p;
      valcritype = "SCO_ID_CRITERIA_TYPE"+p;
    prueba2= m4select(m4objeto(idselect,fo),"value");
    if (prueba2 == "" && temporal==0){          
      sMessage = sMessage + "\n" + m4getmessage("_sl_co_mss_ev_13");
      alert(sMessage);        
      return;
    }
    objcual=objcual+m4valor(fo,ocu1,"","get")+"|$|"+ m4valor(fo,ocultos1,"","get")+"|$|"+ prueba2+"|$|"+m4select(m4objeto(idselect,fo),"text")+"|$|"+ m4valor(fo,comen,"","get") + "|$|";
  }     

  
  m4valor("nombreformulario","SSCO_CONOCIMIENTOS",cono,"set");
  m4valor("nombreformulario","SSCO_OBJETIVOS",obj,"set");
  m4valor("nombreformulario","SSCO_OBJETIVOS_CUAL",objcual,"set");    
  m4valor("nombreformulario","SSE_TEMPORAL",temporal,"set");    
  m4valor("nombreformulario","SCO_EVALUATOR_COMM",m4valor("zcomevaluator","SCO_EVALUATOR_COMM2","","get"),"set");

  m4submit("nombreformulario");       
    
  
}
