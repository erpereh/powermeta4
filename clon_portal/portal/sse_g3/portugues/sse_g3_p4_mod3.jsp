<%@ taglib uri="M4Tags" prefix="m4" %>
<%@ page import="java.io.*, java.util.*, java.net.*" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "DTD/xhtml1-transitional.dtd">
<html>
<head>


<%
String ztitle = "";
String LinkEv = "";
String LinkEvSeg = "";
String LinkResEv = "";
String LinkResEvSeg =  "";
String LinkPenVal = "";
String LinkPenEV = "";
String zDescrObj ="";
String zDescrEscala ="";
String zDescrFunc ="";
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios"); 
String zidobj = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_obj");
String zidmag = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_mag");
String mss = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss");
String zNombre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreEmpleado");
String zSCOIDHR = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String zSCOORHRPERIOD = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"periodo");
String zSCODTSTARTEVAL = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"inicioev");  
String zIDASSTEC = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tecnica");  
String NombreProceso = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso");
String zidre = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_re");
if ((zidre==null)||(zidre.equals(""))){	zidre = "0";}
if ((estado==null)||(estado.equals(""))){estado="0";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}
if ((mss==null)||(mss.equals(""))){	mss = "0";}


String zmss="'"+mss+"'";
if (mss.equals("0")==true){
%>   
	<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>
	<%@ include file="../../sse_g3/sse_ev_trans.jsp"%>
	<%ztitle = TranEss.getProperty("ev_ess.Obj");%>
	<% zDescrFunc = TranEss.getProperty("ev_ess.DescrValorObj");%>
	<% zDescrEscala = TranEss.getProperty("ev_ess.DescrEscala");%>
	<% LinkEv= TranEss.getProperty("ev_ess.LinkEv");%>
	<% LinkEvSeg= TranEss.getProperty("ev_ess.LinkEvSeg");%>
	<% LinkResEv = TranEss.getProperty("ev_ess.LinkResEv");%>
	<% LinkPenVal = TranEss.getProperty("ev_ess.LinkPenVal");%>
	<% LinkPenEV = TranEss.getProperty("ev_ess.LinkPenEv");%>
	<% LinkResEvSeg = TranEss.getProperty("ev_ess.LinkResEvSeg");%>		
<%}else{%>
	<link href="/css/estilo_mss.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/libreria/funciones_sse_val.js"></script>
	<script type="text/javascript" language="Javascript1.2"src="/libreria/funciones_sse.js"></script>
	<%@ include file="../../mss_generico/portugues/menu_mss.jsp" %>
	<%@ include file="../../mss_g3/mss_ev_trans.jsp"%>
	<% ztitle = TranMss.getProperty("ev_mss.Obj");%>
	<% zDescrFunc = TranMss.getProperty("ev_mss.DescrValorObj");%>
	<% zDescrEscala = TranMss.getProperty("ev_mss.DescrEscala");%>
	<% LinkEv= TranMss.getProperty("ev_mss.LinkEv");%>
	<% LinkEvSeg= TranMss.getProperty("ev_mss.LinkEvSeg");%>
	<% LinkResEv = TranMss.getProperty("ev_mss.LinkResEv");%>
	<% LinkPenVal = TranMss.getProperty("ev_mss.LinkPenVal");%>
	<% LinkPenEV = TranMss.getProperty("ev_mss.LinkPenEv");%>
	<% LinkResEvSeg = TranMss.getProperty("ev_mss.LinkResEvSeg");%>	
	

<%}%>	
<%@ page  import="com.meta4.session.*, com.meta4.m4operations.*,com.meta4.utilities.*" %>



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
</script>
</head>
<body>
<%if (mss.equals("0")==true){%>
<%@ include file="../../sse_generico/portugues/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/portugues/mssgenerico_menusup.jsp" %>
<%@ include file="../../sse_generico/portugues/generico_links.jsp" %>
<%}%>
<%
String zsubsesion = "SSE_EVALUATOR_E";
String zmeta4object = "SSE_EVALUATOR_E";
String znodo = "SSE_OBJETIVE";
String ztipocarga = "VIO";			 
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zmove = znodo + ":" + znodo + "[FIRST]";
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";
%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>

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

<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,znodo,"","SSE_ID_OBJECTIVE",zidobj);
	    m.setItem(zsubsesion,znodo,"","SSE_ID_MAGNITUD",zidmag);      
	} catch(Exception e) {}
%>
<m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
try {
	M4Operations m = new M4Operations(request);
	String zSCOCOMMENTOBJ="";
	String zSCOCOMMENTMAG="";
	String zSCONMMAGNITUDE="";
	String zSCONMOBJECTIVE="";
	String zSCONOBJECTIVE="";	
	String zSCONMAGNITUDE="";	
	
	zSCONMOBJECTIVE = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_OBJECTIVE"); 
	zSCONOBJECTIVE = m.getLabel(znodo,zmeta4object,znodo,"SCO_NM_OBJECTIVE"); 
	zSCOCOMMENTOBJ = m.getItem(znodo,zmeta4object,znodo,"","SCO_COMMENT_OBJ"); 
	zSCOCOMMENTMAG = m.getItem(znodo,zmeta4object,znodo,"","SCO_COMMENT_MAG"); 
	zSCONMMAGNITUDE = m.getItem(znodo,zmeta4object,znodo,"","SCO_NM_MAGNITUDE");
	zSCONMAGNITUDE = m.getLabel(znodo,zmeta4object,znodo,"SCO_NM_MAGNITUDE");
	if  ((zSCOCOMMENTOBJ==null)||(zSCOCOMMENTOBJ.equals(""))){
		zSCOCOMMENTOBJ=zDescrObj;
	}
	if  ((zSCOCOMMENTMAG==null)||(zSCOCOMMENTMAG.equals(""))){
		zSCOCOMMENTMAG=zDescrEscala;
	}
%>
<table border="0" width="100%">
<tr><td class="titulofuncional" colspan="2"><%=ztitle%>:&nbsp;<%=zSCONMOBJECTIVE%> </td></tr>
<tr>
	<td>
	<img class="enlacefuncional" title="<%=zDescrFunc%>"alt="<%=zDescrFunc%>" src="/iconos/noname_procesos_evaluacion_ess_114_100.gif" width="114" height="100"/></td>
	<td>
	<div class="descripcionfuncional"><%=zDescrFunc%></div>
	<ul  class="listaenlace"><li>
	<%if ((zidre=="0")||(zidre.equals("0"))){%>	
		<a class="enlacefuncional" title ="<%=LinkEv%>" href="javascript:evaluacion()" ><%=LinkEv%></a>
	<%}
        
        if((zidre=="1")||(zidre.equals("1")))
         {
		if (mss.equals("0")==true)
                {%>
			<a class="enlacefuncional"title ="<%=LinkResEv%>" href="javascript:history.back();"><%=LinkResEv%></a>
		<%}
                else
                {%>
			<a class="enlacefuncional"title ="<%=LinkPenVal%>" href="javascript:history.back();"><%=LinkPenVal%></a>
			
	        <%}
          }
          if ((zidre=="2")||(zidre.equals("2")))
          {%>
		<a class="enlacefuncional"title ="<%=LinkPenEV%>" href="javascript:history.back();"><%=LinkPenEV%></a>
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
<table class = "tablaestados" width="100%" cellspacing="0" border="0">

<tr class = "tablaestadosceldatitulo">
	<td ><%=zSCONOBJECTIVE%>:&nbsp;<%=zSCONMOBJECTIVE%></td>
	<td  class="tablamenuright">
	
	<%if (mss.equals("0")==true){%>
		<%if ((zidre=="0") ){%>
		<a title="<%=LinkEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkEv%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		<%}if((zidre=="1")||(zidre.equals("1"))){%>
		<a title="<%=LinkPenVal%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenVal%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		<%}if ((zidre=="2")||(zidre.equals("2"))){%>
		<a title="<%=LinkPenEV%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenEV%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if((zidre=="3")||(zidre.equals("3"))){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}
           if((zidre=="4")||(zidre.equals("4")))
	  {%>
				<a title="<%=LinkResEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkResEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		
	  <%}%>
		
	<%}else{%>
		<%if ((zidre=="0") ){%>
		<a title="<%=LinkEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkEv%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"    />	
		<%}if((zidre=="1")||(zidre.equals("1"))){%>
		<a title="<%=LinkPenVal%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenVal%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if ((zidre=="2")||(zidre.equals("2"))){%>
		<a title="<%=LinkPenEV%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenEV%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if((zidre=="3")||(zidre.equals("3"))){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}
           if((zidre=="4")||(zidre.equals("4")))
	  	{%>
		<a title="<%=LinkResEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkResEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		
	  	<%}%>
		
	<%}%>		
	</a>
	</td>	
</tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<%=zSCOCOMMENTOBJ%></td ></tr>
<tr class = "tablaestadosceldatitulo">
	<td><%=zSCONMAGNITUDE%>:&nbsp;<%=zSCONMMAGNITUDE%></td >
	<td  class="tablamenuright" >
	<%if (mss.equals("0")==true){%>
		<%if ((zidre=="0") ){%>
		<a title="<%=LinkEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkEv%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		<%}if((zidre=="1")||(zidre.equals("1"))){%>
		<a title="<%=LinkPenVal%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenVal%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />	
		<%}if ((zidre=="2")||(zidre.equals("2"))){%>
		<a title="<%=LinkPenEV%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenEV%>" src="/iconos/icono_flecha_azul2_ess_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if((zidre=="3")||(zidre.equals("3"))){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}%>
	<%}else{%>
		<%if ((zidre=="0") ){%>
		<a title="<%=LinkEv%>"href="javascript:history.back();" >
		<img alt="<%=LinkEv%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"    />	
		<%}if((zidre=="1")||(zidre.equals("1"))){%>
		<a title="<%=LinkPenVal%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenVal%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if ((zidre=="2")||(zidre.equals("2"))){%>
		<a title="<%=LinkPenEV%>"href="javascript:history.back();" >
		<img alt="<%=LinkPenEV%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}if((zidre=="3")||(zidre.equals("3"))){%>
		<a title="<%=LinkEvSeg%>"href="javascript:history.back();" >
		<img alt="<%=LinkEvSeg%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)"  />	
		<%}%>
	<%}%>
	</a>
	</td>
</tr>
<tr><td class="fuentevalor" colspan="2">&nbsp;<%=zSCOCOMMENTMAG%></td></tr>
</table>

<%
} catch(Exception e) {}
%>
<%if (mss.equals("0")==true){%>
<%@ include file="../../sse_generico/portugues/generico_disclaimer.jsp" %>
<%}else{%>
<%@ include file="../../mss_generico/portugues/mssgenerico_disclaimer.jsp" %>
<%}%>
</div>
<m4:endpage/>
</body>
</html>
