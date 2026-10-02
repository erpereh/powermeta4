<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head><%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>

<title>Demander un pr&ecirc;t financier</title>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	


<script type="text/javascript">

function filtrar(){
  var zidloan = m4select(m4objeto("SCO_ID_LOAN","NombreFormulario"),"value");
  m4valor("oculto","zidloan",zidloan,"set");
 
  var vidreason = m4select(m4objeto("SCO_ID_REASON","NombreFormulario"),"value");
  m4valor("oculto","zidreason",vidreason,"set");

  var vfecsolic = m4valor("NombreFormulario","SCO_DT_APPLICATION","","get"); 

  m4valor("oculto","zfecsolic",vfecsolic,"set");   
  m4submit("oculto");
}

function validar(){  
  var mensaje = "Les erreurs suivantes ont été détectées : " + "\n"
  var error=0;
  var compfec = false;
  var fsol_hoy = false;
  var fppag_hoy = false;
  var constante = 400;
  
  var val_idloan = m4select(m4objeto("SCO_ID_LOAN","NombreFormulario"),"value");
  
  var val_idreason = m4select(m4objeto("SCO_ID_REASON","NombreFormulario"),"value");
  
  var val_payoffreq = m4select(m4objeto("SCO_ID_PAY_OFF_FREQ","NombreFormulario"),"value");
  
  ocapital = new m4objvalidacion('_num',1,30,'','',false);
  ocapital.m4validar(m4objeto("SCO_AMT_LOAN","NombreFormulario"));
  
  var vcapital = m4objeto("SCO_AMT_LOAN","NombreFormulario");
  
  var valorcapital = parseInt(m4valor("NombreFormulario","SCO_AMT_LOAN","","get"));
  
  var tipomoneda = m4select(m4objeto("ID_CURRENCY","NombreFormulario"),"value");
  var textomoneda = m4select(m4objeto("ID_CURRENCY","NombreFormulario"),"text"); 
  
  var val_fecsol = m4valor("NombreFormulario","SCO_DT_APPLICATION","","get");
  
  var val_fecppago = m4valor("NombreFormulario","SCO_DT_REQ_PAYMENT","","get");
  
  var onumcuotas = m4objeto("QUOTAS1","NombreFormulario");
  
  var oimpcuota = m4objeto("QUOTAS2","NombreFormulario");
  
  var vnumcuotas = m4valor("NombreFormulario","SCO_QUOTAS","","get");
  var n_numcuotas = parseInt(vnumcuotas);
  
   var vimpcuota = m4valor("NombreFormulario","SCO_QUOTAS","","get");
   var n_impcuota = parseInt(vimpcuota);
   
   var vinteres = m4valor("NombreFormulario","SCO_RATE","","get");
   var interes = parseFloat(vinteres);
   
   var vnumperyear = m4valor("NombreFormulario","NUM_PER_YEAR","","get");
   var numperyear= parseInt(vnumperyear);
   
   var interescalc = interes/(numperyear * 100);   
 
   var v_num = valorcapital * interescalc;
   var numerador = parseInt(v_num);
   
   var fraccion = numerador/n_impcuota;
   var valor_num = 1-fraccion;
   
 
   
  
  var cap_min = parseInt(m4valor("Auxiliar","AMT_MIN","","get"));
  var cap_max = parseInt(m4valor("Auxiliar","AMT_MAX","","get"));  
  var hoy = m4valor("Auxiliar","TODAY","","get");   
  compfec = m4compfechas(m4objeto("SCO_DT_REQ_PAYMENT","NombreFormulario"),">=",m4objeto("SCO_DT_APPLICATION","NombreFormulario"));
  fsol_hoy = m4compfechas(m4objeto("SCO_DT_APPLICATION","NombreFormulario"),">=",m4objeto("TODAY","Auxiliar"));
  fppag_hoy = m4compfechas(m4objeto("SCO_DT_REQ_PAYMENT","NombreFormulario"),">=",m4objeto("TODAY","Auxiliar"));    
   
   if (fsol_hoy == false)
	     {
	        mensaje+=" * La date de demande du prêt ne peut pas être antérieure à la date du jour" + "\n";
	        error=1;
	     }	     
   if (fppag_hoy == false)
	     {
	        mensaje+=" * La date du premier remboursement ne peut pas être antérieure à la date du jour" + "\n";
	        error=1;
	     }	       	        	                  
  if ((val_fecsol != null && val_fecsol != "") && (val_fecppago != null && val_fecppago != ""))
     {
      if (fsol_hoy == true && fppag_hoy == true)
         {
           if (compfec == false) 
             { 
               mensaje+=" * La date du premier remboursement ne peut pas être antérieure à la date de demande du prêt" + "\n";
	           error=1;
	         }
	     }
	}	         
  if ((null==val_idloan) || (''==val_idloan)){
		mensaje+=" * Type de prêt : champ obligatoire" + "\n";
		error=1;
	}
  if ((null==val_idreason) || (''==val_idreason)){
		mensaje+=" * Motif du prêt : champ obligatoire" + "\n";
		error=1;
	}
  if ((null==val_payoffreq) || (''==val_payoffreq)){
		mensaje+=" * Type de périodicité : champ obligatoire" + "\n";
		error=1;
	}	
 if ((null==vcapital.value) || (''==vcapital.value)){
		mensaje+=" * Capital : champ obligatoire" + "\n";
		error=1;
	}	      		
  else if ((null != vcapital.value) || ('' != vcapital.value)){
     if (ocapital.resultado==false){
        mensaje+="* Capital : champ numérique" + "\n";
		error=1;
	 }
	 if (ocapital.resultado==true){
	   if (cap_min > valorcapital) { 
	       mensaje+=" * Le capital ne peut pas être inférieur à "+ cap_min +"\n";
		   error=1;
       }
       if (cap_max < valorcapital){
           mensaje+=" * Le capital ne peut pas être supérieur à "+ cap_max + "\n";
		   error=1;
	   }           
     }
  }	 
  if ((null==val_fecsol) || (''==val_fecsol)){
		mensaje+=" * Date de demande du prêt : champ obligatoire" + "\n";
		error=1;
	}
  if ((null==val_fecppago) || (''==val_fecppago)){
		mensaje+=" * Date du premier remboursement : champ obligatoire" + "\n";
		error=1;
	}      
 if ((null==tipomoneda) || (''==tipomoneda)){
		mensaje+=" * Type de devise : champ obligatoire" + "\n";
		error=1;
	}      	
 if (onumcuotas.checked) 
     {       
       m4valor("NombreFormulario","SCO_NUM_QUOTAS",vnumcuotas,"set");
       
        if ((null==vnumcuotas) || (''==vnumcuotas)){
		  mensaje+=" * Nb. d'échéances : champ obligatoire" + "\n";
		  error=1;
		}
		else if ((null!=vnumcuotas) && (''!=vnumcuotas)){
		 if (n_numcuotas > constante){
		     mensaje+=" * Le nombre d'échéances ne peut pas dépasser "+ constante + "\n";
		     error=1;
		  }
		}   	 			   		
     }
  else
     {      
       m4valor("NombreFormulario","SCO_AMT_QUOTAS",vimpcuota,"set");       
       if ((null==vimpcuota) || (''==vimpcuota)){
		  mensaje+=" * Montant par échéance : champ obligatoire" + "\n";
		  error=1;
        }
       else if ((null!=vimpcuota) && (''!=vimpcuota)){
         
	   if (valor_num > 0) {
      error = 0;
   }
   if (valor_num <= 0) {
       mensaje+=" * Pour le capital indiqué, le montant des échéances doit être supérieur à : " + numerador + "      "+ textomoneda + "\n";
	   error=1;
   }  
   }                       
     }   
  if (error ==1) {alert(mensaje);}
	if (0==error)
	  {
       m4submit("NombreFormulario");
      }
  }
  

function pendientes(ord){
var parametros = new Array("TAG","REC","ACC","NOD");
var valores = new Array("SSE_LOANS",ord,"BORRAR","SSE_LOANS");
m4navegar('sse_generico/generico_actualizar.jsp',parametros,valores);
}
  
 </script>	
 
<%

String zidloan = "";

String zidreason = "";

String zfecsolic = "";
String zfecsolic1 = "";


String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios =com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");
//zidloan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidloan");
zidloan = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidloan");

//zidreason = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidreason");
zidreason = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidreason");

zfecsolic = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfecsolic");
zfecsolic1 = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfecsolic1");

if ((zfecsolic==null)||(zfecsolic.equals(""))) {zfecsolic="";}
if ((zidloan==null)||(zidloan.equals(""))) {zidloan="";}

if ((zidreason==null)||(zidreason.equals(""))) {zidreason="";}

if ((zfecsolic1==null)||(zfecsolic1.equals(""))) {zfecsolic1="";}

if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
%>


</head>
<body>

<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>


<%
   String zsubsesion = "SSE_LOANS";
   String zmeta4object = "SSE_LOANS";
   String znodo = "SSE_LOANS";
   String znodo2 = "M4T_LN_LU_LOANS";
   String znodo3 = "M4T_LN_LU_REASON";
   String znodo4 = "M4T_LN_LU_PAY_OFF_FREQ";  
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
   String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   
   
   String zORDINAL = zcomun + "ORDINAL";
   String zSCOIDLOAN = zcomun + "SCO_ID_LOAN";
   String zSCORATE = zcomun + "SCO_RATE"; 
   String zSCONMLOAN = zcomun + "SCO_NM_LOAN_1";
   String zSCONMREASON = zcomun + "SCO_NM_REASON";
   String zSCONMPAYOFFFREQUENCY = zcomun + "SCO_NM_PAY_OFF_FREQUENCY";
   String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";
   String zSCODTAPPLICATION = zcomun + "SCO_DT_APPLICATION";
   String zSCODTREQPAYMENT = zcomun + "SCO_DT_REQ_PAYMENT";
   String zSCOALLPAYS = zcomun + "SCO_ALL_PAYS";
   String zSCONUMQUOTAS	 = zcomun + "SCO_NUM_QUOTAS";
   String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";
   String zNACCION = zcomun + "N_ACCION";
   String zNMCURRENCY = zcomun + "IDEN_CURRENCY";
   
   
   
   String zoutputdef2= zsubsesion + "!" + znodo2 + "[*]";
   String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";
   String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&VAR.m4lix]" + ".";
   
   String zSCOIDLOAN2 = zcomun2 + "SCO_ID_LOAN";
   String zSCONMLOAN2 = zcomun2 + "SCO_NM_LOAN";   

   
   String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";
   String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";
   String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&VAR.m4lix]" + ".";
   
   String zSCOIDREASON3 = zcomun3 + "SCO_ID_REASON";
   String zSCONMREASON3 = zcomun3 + "SCO_NM_REASON";
 
   
   String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";
   String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";
   String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&VAR.m4lix]" + ".";
   
   String zSCOIDPAYOFFFREQ4 = zcomun4 + "SCO_ID_PAY_OFF_FREQ";
   String zSCONMPAYOFFFREQUENCY4 = zcomun4 + "SCO_NM_PAY_OFF_FREQUENCY";
   String zSCOIDPAYOFFTYPE4 = zcomun4 + "SCO_ID_PAY_OFF_TYPE";     
   
   String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";
   String zmove5 =znodo5 + ":" +  znodo5 + "[FIRST]";
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
<m4:outputdef m4alias="<%=znodo3%>"><m4:param name="m4name0" value="<%=zoutputdef3%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo4%>"><m4:param name="m4name0" value="<%=zoutputdef4%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo5%>"><m4:param name="m4name0" value="<%=zoutputdef5%>"/></m4:outputdef>
<m4:endjob/>

<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove2%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove3%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove4%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove5%>"/></m4:move>



<%
	int  zcount  = 0;
	int  zcounti  = 0;
	int  zcount2  = 0;
	int  zcount3  = 0;
	int  zcount4  = 0;
	int  zcount5  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcount = m.getCount(znodo,zsubsesion,znodo);
	    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
	    zcount2 = m.getCount(znodo2,zsubsesion,znodo2);
	    zcount3 = m.getCount(znodo3,zsubsesion,znodo3);
	    zcount4 = m.getCount(znodo4,zsubsesion,znodo4);	   
	    zcount5 = m.getCount(znodo5,zsubsesion,znodo5);
	} catch(Exception e) {}
	String	zcountv = String.valueOf(zcounti);
	String	zcountv2 = String.valueOf(zcount2);
	String	zcountv3 = String.valueOf(zcount3);
	String	zcountv4 = String.valueOf(zcount4);
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
<tr><td class="titulofuncional" colspan="2">Demander un pr&ecirc;t financier</td></tr>
<tr>
	<td><img alt="Demander un pr&ecirc;t financier" title="Demander un pr&ecirc;t financier"src="/iconos/Solicitud_prestamos_51x100.gif" width="100" height="100" /></td>
	<td>
	<div class="descripcionfuncional">Faites votre demande de pr&ecirc;t.  Indiquez pour commencer la date de votre demande ainsi que le type de prêt : vous obtiendrez alors le taux d'intérêt qui sera appliqué.</div>
	<ul class="listaenlace">
	<li><a class="enlacefuncional" title="Pr&ecirc;ts financiers" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21">Pr&ecirc;ts financiers</a></li>
	<li><a class="enlacefuncional" title="Simulation" href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp?estado=21">Simulation</a></li>	
	</ul>
	</td>
</tr>
</table>
<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="zidloan" name="zidloan" value="" />
<input type="hidden" id="zidreason" name="zidreason" value="" />    
<input type="hidden" id="zfecsolic" name="zfecsolic" value="" />   
<input type="hidden" id="zfecsolic1" name="zfecsolic1" value="" />    
</form>

<form action="/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp" method="post" name="NombreFormulario" id="NombreFormulario">
<input type="hidden" id="TAG" name="TAG" value="SSE_LOANS" />
<input type="hidden" id="REC" name="REC" value="" />
<input type="hidden" id="ACC" name="ACC" value="INSERTAR" />
<input type="hidden" id="NOD" name="NOD" value="SSE_LOANS" />

<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
    <td colspan="5" >Demander un pr&ecirc;t financier</td>
    	<td class="tablamenuright colspan="1" align="right">
		<a href="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21">
		<img alt="Pr&ecirc;ts financiers" title="Pr&ecirc;ts financiers" src="/iconos/icono_flecha_azul2_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"   />
		</a>
	</td>           		
</tr>
<tr>
 <td class="fuentecampo" colspan="1">*&nbsp;Date de la demande</td>
    <td class="fuentecampo" colspan="2">
      <input class="fuenteformulario" type="text" id="SCO_DT_APPLICATION" name="SCO_DT_APPLICATION" value="<%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfecsolic1)%>" size="10" maxlength="10" readonly="TRUE" disabled="TRUE"/>&nbsp; <a href="javascript:m4calendario(m4objeto('SCO_DT_APPLICATION','NombreFormulario'))" title=""><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="S&eacute;lectionner une date pour la demande" /></a>
        <script type="text/javascript">
            var valorfec = m4fechahoy();
            m4valor("NombreFormulario","SCO_DT_APPLICATION",valorfec,"set");
        </script>
    </td>
<td class="fuentecampo" colspan="1">&nbsp;</td>
    <%
     if ((!(zinteres.equals(""))) && (zinteres!=null)){ 
     %>
       <td class="fuentecampo" colspan="1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taux d'int&eacute;r&ecirc;t&nbsp;:<%=zinteres%>&nbsp;%</td>
       <%
     }
    
     else{%>
     <td class="fuentecampo" colspan="1">&nbsp;</td>
     <%
     }%>
     <td class="fuentecampo" colspan="3">&nbsp;
     <input type = "hidden" id="SCO_RATE" name="SCO_RATE" value ="<%=zinteres%>"/>
     <input type = "hidden" id="NUM_PER_YEAR" name="NUM_PER_YEAR" value ="<%=znumperyear%>"/>
     </td>
     
</tr>

<tr>
 <td class="fuentecampo" colspan="1" >*&nbsp;Type de pr&ecirc;t</td> 
	   <td class="fuentecampo" colspan="5">
	   <select id="SCO_ID_LOAN"  class = fuenteformulario200 name="SCO_ID_LOAN" title="S&eacute;lectionnez un type de pr&ecirc;t" onchange="filtrar()">
	     <option value=""></option>
	   <m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
	    <option value="<m4:item m4name="<%=zSCOIDLOAN2%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMLOAN2%>" htmlsafe="true"/> <selected="selected"></option>
	   </m4:loop>
	</select>
</td>
</tr>
<script type="text/javascript" language="Javascript1.5"><!--
 if ('<%=zidloan%>'!= ""){
     m4searchoptioness('NombreFormulario','SCO_ID_LOAN','<%=zidloan%>');
  }
--></script>

<tr>     	
	<td class="fuentecampo" colspan="1">*&nbsp;Motif du pr&ecirc;t&nbsp;</td>
	<td class="fuentecampo" colspan="2">
	   <select id="SCO_ID_REASON" class="fuenteformulario150" name="SCO_ID_REASON" title="S&eacute;lectionnez un motif pour le pr&ecirc;t">	   
       <option value=""></option>
	   <m4:loop from="0" to="<%=new Integer(new Integer(zcountv3).intValue()-1).toString()%>">
	    <option value="<m4:item m4name="<%=zSCOIDREASON3%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMREASON3%>" htmlsafe="true"/></option>
	   </m4:loop>
	</select>
	</td>	
	<script type="text/javascript" language="Javascript1.5"><!--
 if ('<%=zidreason%>'!= ""){
     m4searchoptioness('NombreFormulario','SCO_ID_REASON','<%=zidreason%>');
  }
--></script>		
	<td class="fuentecampo" colspan="2">*&nbsp;Type de p&eacute;riodicit&eacute;</td>
	<td class="fuentecampo" colspan="1">
	   <select id="SCO_ID_PAY_OFF_FREQ" class="fuenteformulario150" name="SCO_ID_PAY_OFF_FREQ" title="S&eacute;lectionnez un type de p&eacute;riodicit&eacute;">
	   <option value=""></option>
	   <m4:loop from="0" to="<%=new Integer(new Integer(zcountv4).intValue()-1).toString()%>">
	    <option value="<m4:item m4name="<%=zSCOIDPAYOFFFREQ4%>" htmlsafe="true"/>"><m4:item m4name="<%=zSCONMPAYOFFFREQUENCY4%>" htmlsafe="true"/></option>
	   </m4:loop>
	</select>
	</td>		
</tr>

<tr>	
	<td class="fuentecampo" colspan="1">*&nbsp;Capital</td>
	<td class="fuentecampo" colspan="5">
      <input class="fuenteformulario150" type="text" id="SCO_AMT_LOAN" name="SCO_AMT_LOAN" value="" />      
       
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
	   <select id="ID_CURRENCY" class="fuenteformulario150" name="ID_CURRENCY" title="S&eacute;lectionnez une devise">
	     <option value=""></option>
	   <m4:loop from="0" to="<%=new Integer(new Integer(zcountv5).intValue()-1).toString()%>">
	    <option value="<m4:item m4name="<%=zIDCURRENCY5%>" htmlsafe="true"/>"><m4:item m4name="<%=zNMCURRENCY5%>" htmlsafe="true"/> <selected="selected"></option>
	   </m4:loop>
	</select>
	</td>
				
</tr>

<tr>
    <td class="fuentecampo" colspan="6">*&nbsp;Date du 1er remboursement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input class="fuenteformulario" size="10" maxlength="10" type="text" id="SCO_DT_REQ_PAYMENT" name="SCO_DT_REQ_PAYMENT" value="" />&nbsp; <a href="javascript:m4calendario(m4objeto('SCO_DT_REQ_PAYMENT','NombreFormulario'))" title=""><img src="/iconos/icono_calendario_14_18.gif" width="14" height="18" alt="S&eacute;lectionner une date pour le premier remboursement du pr&ecirc;t" /></a>
    </td>
</tr>

<tr>
<td class= "fuentecampo" width=150>
<table width="150">
<tr>
   <td class="fuentecampo" >*&nbsp;Nb. d'&eacute;ch&eacute;ances
      <input type = "radio" id = "QUOTAS1" name = "QUOTAS" Value = "Primero" checked = "checked"/>
   </td>
</tr>
<tr>
      <td class="fuentecampo" >*&nbsp;Montant par &eacute;ch&eacute;ance&nbsp;&nbsp;
      <input type = "radio" id = "QUOTAS2" name = "QUOTAS" Value = "Segundo" />
      </td>
</tr>

</table>
</td>


<td class="fuentecampo" colspan = "6">
<input class="fuenteformulario150"type="text" id="SCO_QUOTAS" name="SCO_QUOTAS" value="" />
</td>
</tr>

   <input type="hidden" id="SCO_AMT_QUOTAS" name = "SCO_AMT_QUOTAS" value="" />
   <input type="hidden" id="SCO_NUM_QUOTAS" name = "SCO_NUM_QUOTAS" value="" />

<tr>
	<td class="fuenteboton" colspan="6" >&nbsp;
	<a title="Envoyer"href="javascript:validar()" tabindex="2"><img alt="Envoyer"border="0" src="/iconos/icono_enviar_ess_36_36.gif"  width="36" height="36" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
	</td>
</tr>
</table>
</tr>

   
<!--
Estos son los símbolos para los comentarios
-->	
</table>
</form>

<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?" method="post" name="Auxiliar" id="Auxiliar">
  <input type="hidden" id="TODAY"  name = "TODAY"  />
      <script type="text/javascript">
         var valorfec = m4fechahoy();
         m4valor("Auxiliar","TODAY",valorfec,"set");
      </script>
     
  <input type="hidden" id="AMT_MAX" name = "AMT_MAX" value = "<%=zcapmax%>" />
  <input type="hidden" id="AMT_MIN" name = "AMT_MIN" value = "<%=zcapmin%>" />    
  
</form>

<% 
if (zcount > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
%>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr>
	
	<td class="tablaestadosceldatitulo">Type de pr&ecirc;t</td>
	<td class="tablaestadosceldatitulo">Taux d'intér&ecirc;t</td>
	<td class="tablaestadosceldatitulo" >&nbsp;&nbsp;&nbsp;Capital&nbsp;&nbsp;</td>
	<td class="tablaestadosceldatitulo" >&nbsp;</td>
	<td class="tablaestadosceldatitulo" >&nbsp;Date 1er remboursement</td>
	<td class="tablaestadosceldatitulo" colspan="2">&nbsp;Montant /&eacute;ch&eacute;ance</td>
	<td class="tablaestadosceldatitulo" colspan="1">&nbsp;Nb. d'&eacute;ch&eacute;ances</td>
	<td class="tablaestadosceldatitulo" >&nbsp;</td>
</tr>
<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
if (zcontrol==0){%>
<tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMLOAN%>" htmlsafe="true"/></td>
	<td class="fuentevalor" >&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCORATE%>" htmlsafe="true"/>&nbsp;%</td>
	<td class="fuentevalor" >&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCOAMTLOAN%>" htmlsafe="true"/></td>
	<td class="fuentevalor" ><m4:item m4name="<%=zNMCURRENCY%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCODTREQPAYMENT%>" htmlsafe="true"/></td>
	<td class="fuentevalor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCOAMTQUOTAS%>" htmlsafe="true"/></td>	
	<td class="fuentevalor" colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCONUMQUOTAS%>" htmlsafe="true"/></td>
	<td class="fuentebotonright">
	<a title="Supprimer la demande"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
<%}else{%>
<tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONMLOAN%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" >&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCORATE%>" htmlsafe="true"/>&nbsp;%</td>
	<td class="fuentevalor2" >&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCOAMTLOAN%>" htmlsafe="true"/></td>
	<td class="fuentevalor2" ><m4:item m4name="<%=zNMCURRENCY%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCODTREQPAYMENT%>" htmlsafe="true"/></td>
	<td class="fuentevalor2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCOAMTQUOTAS%>" htmlsafe="true"/></td>	
     <td class="fuentevalor2"  colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<m4:item m4name="<%=zSCONUMQUOTAS%>" htmlsafe="true"/></td>  
	<td class="fuentebotonright2">
	<a title="Supprimer la demande"href="javascript:pendientes('<m4:item m4name="<%=zORDINAL%>" jsafe="true" htmlsafe="true"/>');">
	<img class="tablamenuright" alt="Supprimer la demande"  src="/iconos/icono_eliminar_ess_11_12.gif" height="11" width="12" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" />
	</a>
	</td>
</tr>
 <%}%>
</m4:loop>
</table>
<%@include file="../../sse_generico/francais/generico_ventanas.jsp"%>


 <%}%>


<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>

<m4:endpage/>
</body>
</html>





