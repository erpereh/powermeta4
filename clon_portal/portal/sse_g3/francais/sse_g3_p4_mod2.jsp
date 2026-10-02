<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>

<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*" %>
<%
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
String znivel = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cono");
String zidre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_re");
String zNombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreEmpleado");
String zSCOIDHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String zSCOORHRPERIOD = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");
String zSCODTSTARTEVAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"inicioev");  
String zIDASSTEC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tecnica");  
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
if ((zidre==null)||(zidre.equals(""))){	zidre = "0";}		

String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){	mss = "0";}
String zmss="'"+mss+"'";
String ztitle = "";
String LinkEvSeg = "";
String LinkResEv  = "";
String LinkPenVal  = "";
String LinkPenEv = "";
String LinkPref  = "";
String LinkEv  = "";
String DescrValCono = "";
String DescrSigCono = "";
String LinkResEvSeg  = "";

if (mss.equals("0")==true){
%>   
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/francais/menu_ess.jsp" %>
	<%@ include file="/sse_g3/sse_ev_trans.jsp"%>	
	<% ztitle = TranEss.getProperty("ev_ess.Cono");%>
	<% LinkEvSeg  = TranEss.getProperty("ev_ess.LinkEvSeg");%>
	<% LinkEv  = TranEss.getProperty("ev_ess.LinkEv");%>	
	<% LinkResEv  = TranEss.getProperty("ev_ess.LinkResEv");%>
	<% LinkResEvSeg = TranEss.getProperty("ev_ess.LinkResEvSeg");%>
	<% LinkPenVal = TranEss.getProperty("ev_ess.LinkPenVal");%>
	<% LinkPenEv = TranEss.getProperty("ev_ess.LinkPenEv");%>
	<% LinkPref  = TranEss.getProperty("ev_ess.LinkPref");%>
	<% DescrValCono = TranEss.getProperty("ev_ess.DescrValorCono");%>
	<% DescrSigCono  = TranEss.getProperty("ev_ess.DescrSigCono");%>	
<%}else{%>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/francais/menu_mss.jsp" %>
	<%@ include file="/mss_g3/mss_ev_trans.jsp"%>	
	<% ztitle = TranMss.getProperty("ev_mss.Cono");%>
	<% LinkEvSeg  = TranMss.getProperty("ev_mss.LinkEvSeg");%>
	<% LinkEv  = TranMss.getProperty("ev_mss.LinkEv");%>		
	<% LinkResEv  = TranMss.getProperty("ev_mss.LinkResEv");%>
	<% LinkResEvSeg = TranMss.getProperty("ev_mss.LinkResEvSeg");%>	
	<% LinkPenVal = TranMss.getProperty("ev_mss.LinkPenVal");%>
	<% LinkPenEv = TranMss.getProperty("ev_mss.LinkPenEv");%>
	<% LinkPref  = TranMss.getProperty("ev_mss.LinkPref");%>		
	<% DescrValCono = TranMss.getProperty("ev_mss.DescrValorCono");%>
	<% DescrSigCono  = TranMss.getProperty("ev_mss.DescrSigCono");%>			
<%}%>	
<title><%=ztitle%></title>
<script type="text/javascript">

function evaluacion(){
	document.forms["evaluacion"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_mod.jsp?estado=31";
	m4submit("evaluacion");
}
function evaluacion_seg(){
	document.forms["evaluacion"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p19_mod.jsp?estado=31";
	m4submit("evaluacion");
}

function pendeval(){
	document.forms["evaluacion"].action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p19_val.jsp?estado=31";
	m4submit("evaluacion");
}
function pendvalor(){
	document.forms["evaluacion"].action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31";
	m4submit("evaluacion");
}
function pendval(){
	document.forms["evaluacion"].action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_val.jsp?estado=31";
	m4submit("evaluacion");
}

</script>
</head>
<body>
<%if (mss.equals("0")==true){%>
<%@ include file="../../sse_generico/francais/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/francais/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/francais/generico_links.jsp" %>
<%}%>
<%
String zsubsesion = "SSE_EVALUATOR_E";
String zmeta4object = "SSE_EVALUATOR_E";
String znodo = "SSE_KNOW_LEVEL";
String ztipocarga = "VIS";		 
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zraiz =  znodo + ":" + zsubsesion  + "!"+ znodo+"." ;

String zSCONMLEVEL = zcomun + "SCO_NM_LEVEL";
String zSCOMEANING = zcomun + "SCO_MEANING";
String zSCONMEXTDKN = zraiz + "SCO_NM_EXTD_KN";
String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodo,"","SSE_ID_EXTD_KN",znivel);   
		} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;	
try {
	M4Operations m = new M4Operations(request);
	zcount = m.getCount(znodo,zsubsesion,znodo);
	zcounti = m.getCountInClient(znodo,zsubsesion,znodo);			
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>

<form action="" method="post" name="evaluacion" id="evaluacion">
<input type="hidden" id="id" name="id"  value="<%=zSCOIDHR%>" />
<input type="hidden" id="periodo" name="periodo"  value="<%=zSCOORHRPERIOD%>" />
<input type="hidden" id="inicioev" name="inicioev"  value="<%=zSCODTSTARTEVAL%>" />
<input type="hidden" id="mss" name="mss"  value="<%=mss%>" />
<input type="hidden" id="tecnica" name="tecnica"  value="<%=zIDASSTEC%>" />
<input type="hidden" id="nombreper" name="nombreper"  value="<%=zNombre%>" />
<input type="hidden" id="NombreProceso" name="NombreProceso"  value="<%=NombreProceso%>" />
<input type="hidden" id="ordinal1" name="ordinal1"  value="<%=zSCOORHRPERIOD%>" />

</form>

<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=DescrValCono%>:<m4:item m4name="<%=zSCONMEXTDKN%>" htmlsafe="true"/></td></tr>
<tr>
	<td><img alt="<%=ztitle%>" title="<%=ztitle%>" src="/iconos/noname_listado_63_80.gif" width="63" height="80"/></td>
	<td>
	<div class="descripcionfuncional"><%=DescrSigCono%></div>
	<ul  class="listaenlace"><li>
	<%if ((zidre=="0")||(zidre.equals("0"))){%>	
		<a class="enlacefuncional" title ="<%=LinkEv%>" href="javascript:evaluacion()" ><%=LinkEv%></a>
	<%}
        
        if((zidre=="1")||(zidre.equals("1")))
         {
		if (mss.equals("0")==true)
                {%>
			<a class="enlacefuncional" title ="<%=LinkResEv%>" href="javascript:history.back();"><%=LinkResEv%></a>
		<%}
                else
                {%>
			<a class="enlacefuncional" title ="<%=LinkPenVal%>" href="javascript:pendval();"><%=LinkPenVal%></a>
			
	        <%}
          }
          if ((zidre=="2")||(zidre.equals("2")))
          {%>
		<a class="enlacefuncional" title ="<%=LinkPenEv%>" href="javascript:pendvalor();"><%=LinkPenEv%></a>
	  <%}


          if((zidre=="3")||(zidre.equals("3")))
	  {%>
		<a class="enlacefuncional" title ="<%=LinkEvSeg%>" href="javascript:evaluacion_seg()"><%=LinkEvSeg%></a>
	  <%}
          if((zidre=="4")||(zidre.equals("4")))
	  {%>
		<a class="enlacefuncional" title ="<%=LinkResEvSeg%>" href="javascript:history.back();"><%=LinkResEvSeg%></a>
	  <%}%>	  
	</li></ul>
	</td>
</tr>
</table>
<%if (zcount > 0) {
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;%>	
<table class = "tablaestados" width="100%" cellspacing="0" border="0">
<tr class = "tablaestadosceldatitulo">
	<td>&nbsp;<m4:label m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td><td>&nbsp;<m4:label m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
	<td class="tablamenuright" >
<%if (mss.equals("0")==true){%>
		<%if ((zidre=="0") ){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		<%}if((zidre=="1")||(zidre.equals("1"))){%>
		<a title="<%=LinkResEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkResEv%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		<%}if ((zidre=="2")||(zidre.equals("2"))){%>
		<a title="<%=LinkPenEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenEv%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if((zidre=="3")||(zidre.equals("3"))){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}%>
	<%}else{%>
		<%if ((zidre=="0") ){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"    />	
		<%}if((zidre=="1")||(zidre.equals("1"))){%>
		<a title="<%=LinkResEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkResEv%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if ((zidre=="2")||(zidre.equals("2"))){%>
		<a title="<%=LinkPenEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenEv%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if((zidre=="3")||(zidre.equals("3"))){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}%>
	<%}%>
	</a>
	</td>
</tr>
<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
<%zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
 	zcontrol = zposicion%2;
%>
<%if (zcontrol==0){%>
 <tr>
	<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td>
	<td class="fuentevalor"colspan="2">&nbsp;<m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
</tr>
<%}else{%>
 <tr>
	<td class="fuentevalor2">&nbsp;<m4:item m4name="<%=zSCONMLEVEL%>" htmlsafe = "true"/></td>
	<td class="fuentevalor2"colspan="2">&nbsp;<m4:item m4name="<%=zSCOMEANING%>" htmlsafe = "true"/></td>
</tr>
 <%}%>
</m4:loop>
</table>
<%}%>	
<%if (mss=="0"){%>
<%@ include file="../../sse_generico/francais/generico_disclaimer.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/francais/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
<m4:endpage/>
</body>
</html>


