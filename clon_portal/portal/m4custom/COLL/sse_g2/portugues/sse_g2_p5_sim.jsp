<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<title>Simula&ccedil;&atilde;o de empr&eacute;stimos</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	

<script type="text/javascript">

var num_clicks=0;

function foco(){
  m4focus("NombreFormulario","SCO_DT_APPLICATION");
}

function prueba() {
   var vcapital = m4valor("NombreFormulario","SCO_AMT_LOAN","","get");
   var miprueba = m4sust_general(vcapital,'.','');
   //alert(vcapital.charAt(2));
   //alert(miprueba);
}
   

function logaritmo(x,b)
{ 
  var num = Math.log(x);
  var den = Math.log(b);
  return(num/den);
}

 function CalculoNumCuotas (){
     
   var base = 10;
   var vcapital = m4valor("NombreFormulario","SCO_AMT_LOAN","","get");
   var capital = parseInt(vcapital);
          
    var vinteres = m4valor("NombreFormulario","RATE","","get");
    var vinteres2 = m4sustituir(vinteres);
          
    if (vinteres =="") {
      var vinteresdef = m4valor("NombreFormulario","SCO_RATE","","get");
      var interes = parseFloat(vinteresdef);
    }
    else{
      var interes = parseFloat(vinteres2);
    }
 
    var vimpcuota = m4valor("NombreFormulario","SCO_QUOTAS","","get");
    var cuota= parseInt(vimpcuota);
   
  
   var vnumperyear = m4valor("NombreFormulario","NUM_PER_YEAR","","get");
   var numperyear= parseInt(vnumperyear);
   
   if (interes == 0) {
                      var numcuotas = (capital/cuota);
                      var aux = Math.round(numcuotas);
                      if (aux > numcuotas)  {aux = aux-1};
                      numcuotas = aux;
                      return(numcuotas);
                     }
   
   else{
          var interescalc = interes/(numperyear * 100);
          var x = (1-((capital * interescalc)/ cuota));
              if (x>0) {
                          var num = logaritmo(x,base);
                          var y = 1 + interescalc;
                          var den = logaritmo(y,base);
                          var numcuotas = -(num/den);
                          var aux = Math.round(numcuotas);
                          if (aux > numcuotas)  {aux = aux-1};
                          numcuotas = aux;
                          return(numcuotas);
                        }
              if(x<=0){
                       return(-1);
                      }
       }
}

function CalculoImpCuotas(){

    var base = 10;
    var vcapital = m4valor("NombreFormulario","SCO_AMT_LOAN","","get");
    var capital = parseInt(vcapital);
    
    var vinteres = m4valor("NombreFormulario","RATE","","get");
    var vinteres2 = m4sustituir(vinteres);
      
    if (vinteres =="") {
      var vinteresdef = m4valor("NombreFormulario","SCO_RATE","","get");
      var interes = parseFloat(vinteresdef);
    }
    else{
    var interes = parseFloat(vinteres2);
    }    
    var vnumcuotas = m4valor("NombreFormulario","SCO_QUOTAS","","get");
    var numcuotas = parseInt(vnumcuotas);
  
    var vnumperyear = m4valor("NombreFormulario","NUM_PER_YEAR","","get");
    var numperyear= parseInt(vnumperyear);
    
    if (interes == 0) {
                       var impcuotas = (capital/numcuotas);
                       var impcuotasf = Math.round(impcuotas);
                       return(impcuotasf);
                      }
                   
    else{
           var interescalc = interes/(numperyear * 100);
           var y = 1 + interescalc;
           var poty = Math.pow(y,-numcuotas);
           var impcuotas = capital * (interescalc / (1-poty));
           var impcuotasf = Math.round(impcuotas);
           return(impcuotasf);
         }
}
            
function filtrar(){

  var zidloan = m4select(m4objeto("SCO_ID_LOAN","NombreFormulario"),"value");
  m4valor("oculto","zidloan",zidloan,"set");

  var vfecsolic = m4valor("NombreFormulario","SCO_DT_APPLICATION","","get"); 
 
  m4valor("oculto","zfecsolic",vfecsolic,"set");   
  m4submit("oculto");
}

function validar(){
  var mensaje = "Foram detectados os seguintes erros: " + "\n"
  var error=0;
  var escribir = 1;
  var compfec = false;
  var fsol_hoy = false;
  var fppag_hoy = false;
  var constante = 400;
  var max_celdas = 4;
  var contador = num_clicks % max_celdas;
 
  
  var e_celda = m4elemento('celda');
  var e_celda0 = m4elemento('celda0');
  var e_celda1 = m4elemento('celda1');
  var e_celda2 = m4elemento('celda2');
  var e_celda3 = m4elemento('celda3');
  var mititulo = "Resultado da simulação";
  
  var val_idloan = m4select(m4objeto("SCO_ID_LOAN","NombreFormulario"),"value");
    
  ocapital = new m4objvalidacion('_num',1,30,'','',false);
  ocapital.m4validar(m4objeto("SCO_AMT_LOAN","NombreFormulario"));
  
  onumperyear = new m4objvalidacion('_num',1,30,'','',false);
  onumperyear.m4validar(m4objeto("NUM_PER_YEAR","NombreFormulario"));
  
  dinteres = new m4objvalidacion('_decimal',1,4,'','',false);
  ninteres = new m4objvalidacion('_num',1,4,'','',false);
  var val_interes = m4valor("NombreFormulario","RATE","","get");
  if (val_interes != "") {
    var punto_interes = m4sustituir(val_interes);
    if (punto_interes !=false) {
      m4valor("NombreFormulario","RATE",punto_interes,"set");
    }
    else{
      m4focus("NombreFormulario","RATE");
    }      
    dinteres.m4validar(m4objeto("RATE","NombreFormulario"));
    ninteres.m4validar(m4objeto("RATE","NombreFormulario"));
  }
  
  var vinteres = m4valor("NombreFormulario","RATE","","get");
   var vinteres2 = m4sustituir(vinteres);
      
    if (vinteres =="") {
      var vinteresdef = m4valor("NombreFormulario","SCO_RATE","","get");
      var interes = parseFloat(vinteresdef);
    }
    else{
    var interes = parseFloat(vinteres2);
    }    
  
   var vcapital = m4valor("NombreFormulario","SCO_AMT_LOAN","","get");
   var capital = parseInt(vcapital);
  
  //var vcapital = m4objeto("SCO_AMT_LOAN","NombreFormulario");
  var tipomoneda = m4select(m4objeto("ID_CURRENCY","NombreFormulario"),"value");
  var textomoneda = m4select(m4objeto("ID_CURRENCY","NombreFormulario"),"text");
  
  //var valorcapital = parseInt(m4valor("NombreFormulario","SCO_AMT_LOAN","","get"));
  
  var val_fecsol = m4valor("NombreFormulario","SCO_DT_APPLICATION","","get");
  var onumcuotas = m4objeto("QUOTAS1","NombreFormulario");
  var oimpcuota = m4objeto("QUOTAS2","NombreFormulario");
  var vnumcuotas = m4valor("NombreFormulario","SCO_QUOTAS","","get");
  var n_numcuotas = parseInt(vnumcuotas);
  var vimpcuota = m4valor("NombreFormulario","SCO_QUOTAS","","get");
  var n_impcuota = parseInt(vimpcuota);
  var vnumperyear = m4valor("NombreFormulario","NUM_PER_YEAR","","get");
  var numperyear= parseInt(vnumperyear);
  var interescalc = interes/(numperyear * 100);
  var acomparar = capital * interescalc;
  var int_acomparar = parseInt(acomparar);
  var vnumperyear = m4valor("NombreFormulario","NUM_PER_YEAR","","get");
  var cap_min = parseInt(m4valor("Auxiliar","AMT_MIN","","get"));
  var cap_max = parseInt(m4valor("Auxiliar","AMT_MAX","","get"));
  var hoy = m4valor("Auxiliar","TODAY","","get");
  fsol_hoy = m4compfechas(m4objeto("SCO_DT_APPLICATION","NombreFormulario"),">=",m4objeto("TODAY","Auxiliar"));
   if (fsol_hoy == false)
	     {
	        mensaje+=" * A data de pedido do empréstimo não pode ser anterior à data actual" + "\n";
	        error=1;
	        escribir=0;	        
	     }	    	                          
  if ((null==val_idloan) || (''==val_idloan)){
		mensaje+=" * Tipo de empréstimo é um campo obrigatório" + "\n";
		error=1;
		escribir=0;		
	}  
  if ((null != vinteres) && ("" != vinteres)){
       if ((dinteres.resultado==false) && (ninteres.resultado==false)) {
            mensaje+="* Juro é um campo numérico" + "\n";
		    error=1;
		    escribir=0;		   
	     }
  }    
  if ((null==vnumperyear) || (''==vnumperyear)){
		mensaje+=" * Número de prestações por ano é um campo obrigatório" + "\n";
		error=1;	
		escribir=0;	
	}	      		
  else if ((null != vnumperyear) || ('' != vnumperyear)){
     if (onumperyear.resultado==false){
        mensaje+="* Número de prestações por ano é um campo numérico" + "\n";
		error=1;
		escribir=0;	
	 }
  }
 if ((null==vcapital) || (''==vcapital)){
		mensaje+=" * Capital é um campo obrigatório" + "\n";
		error=1;	
		escribir=0;	
	}	      		
  else if ((null != vcapital) || ('' != vcapital)){
     if (ocapital.resultado==false){
        mensaje+="* Capital é um campo numérico" + "\n";
		error=1;
		escribir=0;	
	 }
	 if (ocapital.resultado==true){
	   if (cap_min > capital) {
	       mensaje+=" * O capital não pode ser inferior a  "+ cap_min +"\n";
		   error=1;	
		   escribir=0;	
       }
       if (cap_max < capital){
           mensaje+=" * O capital não pode ser superior a "+ cap_max + "\n";
		   error=1;	
		   escribir=0;	  
	   }           
     }
  }	 
  if ((null==val_fecsol) || (''==val_fecsol)){
		mensaje+=" * Data de pedido do empréstimo é um campo obrigatório" + "\n";
		error=1;
		escribir=0;		
	}
if ((null==tipomoneda) || (''==tipomoneda)){
		mensaje+=" * Tipo de moeda é um campo obrigatório" + "\n";
		error=1;	
		escribir=0;	
	}      		
 if (onumcuotas.checked)
     {       
       m4valor("NombreFormulario","SCO_NUM_QUOTAS",vnumcuotas,"set");
        if ((null==vnumcuotas) || (''==vnumcuotas)){
		  mensaje+=" * Número de prestações é um campo obrigatório" + "\n";
		  error=1;
		  escribir=0;		
		}
		else if ((null!=vnumcuotas) && (''!=vnumcuotas)){
		 if (n_numcuotas > constante){
		     mensaje+=" * O número de prestações não pode ser superior a "+ constante + "\n";
		     error=1;		
		     escribir=0;
		  }
		}   		   		
     }
  else
     {      
       m4valor("NombreFormulario","SCO_AMT_QUOTAS",vimpcuota,"set");
       if ((null==vimpcuota) || (''==vimpcuota)){
		  mensaje+=" * Montante da prestação é um campo obrigatório" + "\n";
		  error=1;	
		  escribir=0;	 
        }
       else if ((null!=vimpcuota) && (''!=vimpcuota)){
         if (n_impcuota < constante){
              mensaje+=" * O montante da prestação não pode ser inferior a "+ constante + "\n";
		      error=1;	
		      escribir=0;	     
		 }
	   }                              
     }   
  if (error ==1) {alert(mensaje);}
	if (0==error)
	  { 
	     if (document.all){ 	     
	        navegador = "className";	     	     
         }
         else{
            navegador = "class";
         }     
      if (escribir==1)
       {
                                  
        if (onumcuotas.checked) {
            
           var imp_calc = CalculoImpCuotas();
           e_celda.setAttribute (navegador,'tablaestadosceldatitulo');
           m4textodentrotd(e_celda,true,mititulo);
         
           celda_actual = eval("e_celda"+contador);
          
           if (contador == 0){
              celda_actual.setAttribute (navegador,'fuentevalor3');
           }
           else{
             celda_actual.setAttribute (navegador,'fuentevalor2');
           }
           var texto = "O montante da prestação a pagar é de:        " + imp_calc + "            " + textomoneda;
           
           var aux2 = m4textodentrotd(e_celda2,false,"");
           var aux1 = m4textodentrotd(e_celda1,false,"");
           var aux0 = m4textodentrotd(e_celda0,false,"");
           
           m4textodentrotd(e_celda3,true,aux2);
           m4textodentrotd(e_celda2,true,aux1);
           m4textodentrotd(e_celda1,true,aux0);
           m4textodentrotd(e_celda0,true,texto);
                                 
           num_clicks = num_clicks + 1;
                                                                                                                                                                                                                                                                                                                                                                   
        }
        else{
          
           var num_calc = CalculoNumCuotas();
           if (num_calc == -1){
             mensaje+=" * Para este capital, o montante da prestação tem de ser maior que: " + int_acomparar + "      "+ textomoneda + "\n";	  
             alert (mensaje);
             escribir=0;
           }
           else{
             e_celda.setAttribute (navegador,'tablaestadosceldatitulo');
             m4textodentrotd(e_celda,true,mititulo);
         
             celda_actual = eval("e_celda"+contador);
             if (contador == 0){
                celda_actual.setAttribute (navegador,'fuentevalor3');
             }
             else{
               celda_actual.setAttribute (navegador,'fuentevalor2');
             }       
         
             var texto = "O número de prestações a pagar é de:          " + num_calc;
           
             var aux2 = m4textodentrotd(e_celda2,false,"");
             var aux1 = m4textodentrotd(e_celda1,false,"");
             var aux0 = m4textodentrotd(e_celda0,false,"");
           
             m4textodentrotd(e_celda3,true,aux2);
             m4textodentrotd(e_celda2,true,aux1);
             m4textodentrotd(e_celda1,true,aux0);
             m4textodentrotd(e_celda0,true,texto);
                                 
             num_clicks = num_clicks + 1;
           }                                                                                                                                                                                                                                                                                                                                                                                      
        }                                                                                                                                                                               
        }
                      
      }  
   
  if (escribir==0)
  {}                
  }
                  
 </script>	
<%

String zidloan = "";

String zidreason = "";

String zfecsolic = "";



String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
zidloan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidloan");

zidreason = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidreason");

zfecsolic = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfecsolic");


if ((zfecsolic==null)||(zfecsolic.equals(""))) {zfecsolic="";}
if ((zidloan==null)||(zidloan.equals(""))) {zidloan="";}

if ((zidreason==null)||(zidreason.equals(""))) {zidreason="";}



if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>

</head>
<body onload= foco()>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>

<%
   String zsubsesion = "SSE_LOANS";
   String zmeta4object = "SSE_LOANS";
   String znodo = "SSE_LOANS";
   String znodo2 = "M4T_LN_LU_LOANS";
   String znodo5 = "M4T_CURRENCY";
   String ztipocarga = "SSE";


   String zventanas = "4";
   int zvuelta = 2;
   String zdireccion = "sse_g2/sse_g2_p5.jsp";
   String zestado = "11";
   
   int zregistroinicial = Integer.valueOf(zinicios).intValue();
   zregistroinicial = zregistroinicial - 1;
   int zventana  = Integer.valueOf(zventanas).intValue();
   int zregistrofinal = zregistroinicial + zventana - 1;
   
   String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";
   String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";   
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   
   String zORDINAL = zcomun+ "ORDINAL";
   String zSCOIDLOAN = zcomun + "SCO_ID_LOAN";
   String zSCORATE = zcomun + "SCO_RATE";
   String zSCONMLOAN = zcomun + "SCO_NM_LOAN";
   String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";
   String zSCODTAPPLICATION = zcomun + "SCO_DT_APPLICATION";
   String zSCONUMQUOTAS	 = zcomun + "SCO_NUM_QUOTAS";
   String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";
   String zNACCION = zcomun  + "N_ACCION"; 
   
   
   
   String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";   
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zSCOIDLOAN2 = zcomun2 + "SCO_ID_LOAN";
   String zSCONMLOAN2 = zcomun2 + "SCO_NM_LOAN";
   
   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";
   String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&VAR.m4lix]" + ".";
   
   String zIDCURRENCY5 = zcomun5 + "ID_CURRENCY";
   String zNMCURRENCY5 = zcomun5 + "NM_CURRENCY";
        
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
   
   
<m4:startpage m4task="<%=zsubsesion%>"/>

<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	M4Operations m = new M4Operations(request);
    m.setItem(zsubsesion,znodo,"","ID_LOAN",zidloan);
	m.setItem(zsubsesion,znodo,"","DT_APPLICATION",zfecsolic);
} catch(Exception e) {}
%>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>" ><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>



<%
	int  zcount  = 0;
	int  zcounti  = 0;
	int  zcount2  = 0;	
	int  zcount5 = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);	  
	    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcount2);	
	String  zcountv5 = String.valueOf(zcount5);	
	
%>
<% 
   String zinteres = "";
   String zcapmin="";
   String zcapmax="";
   String znumperyear="";
  if (((!(zfecsolic.equals(""))) && (zfecsolic!=null)) &&  ((!(zidloan.equals(""))) && (zidloan!=null)))  {%>
<m4:item var="zinteres" item="RATE" htmlsafe="true" outputdef="<%=znodo%>"/>
<m4:item var="zcapmin" item="AMT_MIN" htmlsafe="true" outputdef="<%=znodo%>"/>		
<m4:item var="zcapmax" item="AMT_MAX" htmlsafe="true" outputdef="<%=znodo%>"/>		
<m4:item var="znumperyear" item="NUM_PER_YEAR" htmlsafe="true" outputdef="<%=znodo%>"/>		
<%}%>
	
	
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2">Simula&ccedil;&atilde;o do empr&eacute;stimo</td></tr>
<tr>
	<td><img alt="Simula&ccedil;&atilde;o do empr&eacute;stimo" title="Simula&ccedil;&atilde;o do empr&eacute;stimo"src="/iconos/Solicitud_prestamos_51x100.gif" width="100" height="100" /></td>
	<td>
	<div class="descripcionfuncional">A partir daqui pode realizar uma simula&ccedil;&atilde;o do empr&eacute;stimo que pretende solicitar.  Introduza primeiro a data de pedido e o tipo de empr&eacute;stimo para obter o juro correspondente a este empr&eacute;stimo. Para a simula&ccedil;&atilde;o pode escolher este juro, ou qualquer outro.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="Pedido de empr&eacute;stimos" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21">Pedido de empr&eacute;stimos</a></li>
	</ul>
	</td>
</tr>
</table>

<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp" method="post" name="oculto" id="oculto">
  <input type="hidden" id="zidloan" name="zidloan" value="" />
  <input type="hidden" id="zidreason" name="zidreason" value="" />    
  <input type="hidden" id="zfecsolic" name="zfecsolic" value="" />   

</form>

<form action="" method="" name="NombreFormulario" id="NombreFormulario" >

<table class = "tablaestados" width="100%" cellspacing="0" border="0" >
<tr class = "tablaestadosceldatitulo">
    <td colspan="5">Simula&ccedil;&atilde;o do empr&eacute;stimo</td>
    	<td class="tablamenuright colspan="1" align="right">
		<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21">
		<img alt="Pedido de empr&eacute;stimos" title="Pedido de empr&eacute;stimos" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"   />
		</a>
	</td>           		
</tr>

<tr>
 <td class="fuentecampo" colspan="1">*&nbsp;Data pedido</td>
    <td class="fuentecampo" colspan="2">
      <input class="fuenteformulario150" type="text" id="SCO_DT_APPLICATION" name="SCO_DT_APPLICATION" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfecsolic1)%>" />&nbsp; <a href="javascript:m4calendario(m4objeto('SCO_DT_APPLICATION','NombreFormulario'))" title=""><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="Seleccione a data de pedido do empr&eacute;stimo" /></a>
    </td>
    <td class="fuentecampo" colspan="2">*&nbsp;Tipo empr&eacute;stimo</td> 
	   <td class="fuentecampo" colspan="1" >
	   <select id="SCO_ID_LOAN" class="fuenteformulario150" name="SCO_ID_LOAN" title="Seleccione o tipo de empr&eacute;stimo" onchange="filtrar()">
	     <option value=""></option>
	   <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	    <option value="<m4:item m4name="<%=zSCOIDLOAN2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMLOAN2%>" htmlsafe="true"/> <selected="selected"></option>
	   </m4:loop>
	</select>
	</td>	
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
if ('<%=zidloan%>'!= ""){
	 m4searchoptioness("NombreFormulario","SCO_ID_LOAN",'<%=zidloan%>');
  }
--></script>

<tr><td class="fuentecampo" colspan="2">&nbsp;&nbsp;&nbsp;Taxa de juro do empr&eacute;stimo:</td>
     <%
     if ((!(zinteres.equals(""))) && (zinteres!=null)){
     %>
       <td class="fuentecampo" colspan="1"><%=zinteres%>&nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ou</td>
         
       <%
     }
    
     else{%>
     <td class="fuentecampo" colspan="1">&nbsp;</td>
     <%
     }%>
     <td class="fuentecampo" colspan="2">&nbsp;Alterar taxa de juro</td>
     <td class="fuentecampo" colspan="1" >
       <input type = "text" name="RATE" id="RATE" size="4" maxlength="4" value=""/>
     </td>
 </tr>
 </tr>
     <input type = "hidden" id="SCO_RATE" name="SCO_RATE" value ="<%=zinteres%>"/>
     <tr class="fuentecampo">
  <td colspan = "6">
  </td>
</tr>

<tr>	
	<td class="fuentecampo" colspan="1">*&nbsp;Capital</td>
	<td class="fuentecampo" colspan="5">
      <input class="fuenteformulario150" type="text" id="SCO_AMT_LOAN" name="SCO_AMT_LOAN" value="" onblur = "javascript:prueba();"/>
       
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	   <select id="ID_CURRENCY" class="fuenteformulario150" name="ID_CURRENCY" title="Seleccione o tipo de divisa">
	     <option value=""></option>
	   <m4:loop from="0" to="<%=new Integer(new Integer(zcountv5).intValue()-1).toString()%>">
	    <option value="<m4:item m4name="<%=zIDCURRENCY5%>" htmlsafe="true"/>"><m4:item m4name="<%=zNMCURRENCY5%>" htmlsafe="true"/> <selected="selected"></option>
	   </m4:loop>
	</select>
	</td> 				
</tr>

<tr>
<td class= "fuentecampo" width=150>
<table width="150">
<tr>
   <td class="fuentecampo" >*&nbsp;Número de presta&ccedil;&otilde;es
      <input type = "radio" id = "QUOTAS1" name = "QUOTAS" Value = "Primeiro" checked = "checked"/>
   </td>
</tr>
<tr>
      <td class="fuentecampo" >*&nbsp;Montante da presta&ccedil;&atilde;o&nbsp;&nbsp;
      <input type = "radio" id = "QUOTAS2" name = "QUOTAS" Value = "Segundo" />
      </td>
</tr>
</table>
</td>
<td class="fuentecampo" colspan = "2">
<input class="fuenteformulario150"type="text" id="SCO_QUOTAS" name="SCO_QUOTAS" value="" />
</td>

<td class="fuentecampo" colspan = "4" >*&nbsp;N&uacutemero de presta&ccedil;&otilde;es por ano&nbsp;&nbsp;
      
      <input type="text" id="NUM_PER_YEAR" name="NUM_PER_YEAR" size="4" maxlength="4" value="" />
        
    </td>

</tr>

   <input type="hidden" id="SCO_AMT_QUOTAS" name = "SCO_AMT_QUOTAS" value="" />
   <input type="hidden" id="SCO_NUM_QUOTAS" name = "SCO_NUM_QUOTAS" value="" />
<tr>
	<td class="fuenteboton" colspan="6">&nbsp;
	<a title="Simular" onclick="javascript:validar();" tabindex="2"><img alt="Simular"border="0" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>

<!--
Estos son los símbolos para los comentarios
-->	
</table>
</form>
   <table class = 'tablaestados' width='100%' cellspacing='0' border='0'>
   <tr id='fila' name='fila'>
   <td id='celda' name='celda' align="left"></td>
   </tr>
   <tr id='fila0' name='fila0'>
   <td id='celda0' name='celda2' align="left">&nbsp; </td>
   </tr>
   <tr id='fila1' name='fila1'>
   <td id='celda1' name='celda1' align="left">&nbsp; </td>
   </tr>
   <tr id='fila2' name='fila2'>
   <td id='celda2' name='celda2' align="left">&nbsp; </td>
   </tr>
   <tr id='fila3' name='fila3'>
   <td id='celda3' name='celda3' align="left">&nbsp; </td>
   </tr>
   </table>
<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?" method="post" name="Auxiliar" id="Auxiliar">
  <input type="hidden" id="TODAY"  name = "TODAY"  />
      <script type="text/javascript">
         var valorfec = m4fechahoy();
         m4valor("Auxiliar","TODAY",valorfec,"set");
      </script>
  <input type="hidden" id="AMT_MAX" name = "AMT_MAX" value = "<%=zcapmax%>" />
  <input type="hidden" id="AMT_MIN" name = "AMT_MIN" value = "<%=zcapmin%>" />
</form>



<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>

<m4:endpage/>
</body>
</html>





