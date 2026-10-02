<%@ include file="../../sse_generico/sse_generico_taglib.jsp" %>
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "DTD/xhtml1-strict.dtd">
<html><head><%@ include file="../../sse_generico/sse_generico_taglib_2.jsp" %>
<link href="/css/estilo_sse.css" type="text/css" rel="stylesheet" />
<script type="text/Javascript" src="/libreria/funciones_sse.js"></script>
<%@ include file="../../sse_generico/espanol/menu_ess.jsp" %>
<script type="text/javascript" src="/libreria/clase_val_entradas.js"></script>	
<%@ include file="../../sse_g3/sse_ev_trans.jsp" %>
<title><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_title")%></title>	
<%		
String estado = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado");
String zinicios = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios");  
if ((estado==null)||(estado.equals(""))){estado="31";}
if ((zinicios==null)||(zinicios.equals(""))){zinicios = "1";}

 

%>

</head>
<body>
<%@ include file="../../sse_generico/espanol/generico_menusup.jsp" %>
<%@ include file="../../sse_generico/espanol/generico_links.jsp" %>
<%
   String zsubsesion = "SSE_EVAL360";
   String zmeta4object = "SSE_EVAL360";  
   String znodo = "M4T_EVAL_PROC";

   String ztipocarga = "PRE";
 
   String zventanas = "20";
   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";
   String zmove = znodo + ":" + znodo + "[FIRST]"; 
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";

   String zSCO_NM_EVAL_PROC = zcomun + "SCO_NM_EVAL_PROC";
   String zSCO_DT_ST_EV_PER = zcomun + "SCO_DT_ST_EV_PER";
   String zSCO_DT_END_EV_PER = zcomun + "SCO_DT_END_EV_PER";
   String zSCO_N_ROLE = zcomun + "SCO_N_ROLE";
   String zSCO_DT_START_EVAL = zcomun + "SCO_DT_START_EVAL";
  String zSCO_OR_HR_ROLE = zcomun + "SCO_OR_HR_ROLE";
   String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";


%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
	    M4Operations m = new M4Operations(request); 
	    m.setItem(zsubsesion,"SSE_PRINCIPAL","","NIVEL","0");
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
<table width="100%">
<tr><td class="titulofuncional" colspan="2"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_DescTitle")%></td></tr>
<tr>
<td><img src="/iconos/noname_procesos_evaluacion_ess_114_100.gif" width="114" height="100" alt="<%=TranEss.getProperty("ev_ess.sse_g3_p4_1_DescTitle")%>"/></td>
<td>
<div class="fuentedescripcion"><%=TranEss.getProperty("ev_ess.sse_g3_p4_1_Desc")%></div>
<ul class="listaenlace"><li><a class="enlacefuncional" title= "<%=TranEss.getProperty("ev_ess.LblJob")%>"  href="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3">
<%=TranEss.getProperty("ev_ess.LinkJob")%></a></li></ul>
</td>
</tr>
</table>


<%if (zcounti > 0){String zregistrofinals = String.valueOf( zcounti - 1);String zposicions = "0";int zcontrol = 0;int zposicion =0;	String zPaint="";%>
<table class = "tablaestados" cellspacing="0" width="100%">
<tr class="tablaestadosceldatitulo">
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_NM_EVAL_PROC" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_N_ROLE" htmlsafe="true" outputdef="<%=znodo%>"/></td>
<td class = "tablaestadosceldatitulo"> <m4:label  item="SCO_DT_ST_EV_PER" htmlsafe="true" outputdef="<%=znodo%>"/></td>
</tr> 
<m4:loop from="0" to="<%=zregistrofinals%>">
<%	zposicions = m4lix;
	zposicion = Integer.valueOf(zposicions).intValue();
	zcontrol = zposicion%2;
%><%if (zcontrol==0){zPaint="";}else{zPaint="2";}%>
<form action="/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1_mod.jsp" method="post" name="oculto<%=zposicions%>" id="oculto<%=zposicions%>">
<input type="hidden" id="SCO_DT_START_EVAL" name="SCO_DT_START_EVAL"  value="<m4:item m4name="<%=zSCO_DT_START_EVAL%>" htmlsafe="true"/>" />
<input type="hidden" id="SCO_OR_HR_ROLE" name="SCO_OR_HR_ROLE"  value="<m4:item m4name="<%=zSCO_OR_HR_ROLE%>" htmlsafe="true"/>" />
</form>
<tr class="fuentevalor<%=zPaint%>">
<td class="fuentecampoaccion<%=zPaint%>">
<a title="" href="javascript:m4submit('oculto<%=zposicions%>');"><m4:item m4name="<%=zSCO_NM_EVAL_PROC%>" htmlsafe = "true"/></a></td>

<td class="fuentecampoaccion<%=zPaint%>"><m4:item m4name="<%=zSCO_N_ROLE%>" htmlsafe="true"/>&nbsp;</td>	
<td class="fuentecampoaccion<%=zPaint%>"><m4:item m4name="<%=zSCO_DT_ST_EV_PER%>" htmlsafe="true"/>&nbsp;-&nbsp;<m4:item m4name="<%=zSCO_DT_END_EV_PER%>" htmlsafe="true"/></td>	
</tr>
</m4:loop>
</table>	
<%} else {%>	
<div class="fuentenodatos">	<%=TranEss.getProperty("ev_ess.LblHistOpenNodata")%></div>
<%}	%>				
</br>
<%@ include file="../../sse_generico/espanol/generico_disclaimer.jsp" %>
</div>	
<m4:endpage/>
</body>


