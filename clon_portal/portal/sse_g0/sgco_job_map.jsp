<%
String zidhr_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id");
String zid_job_param = com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job");
if ((zidhr_param==null)||(zidhr_param.equals(""))){zidhr_param="";}
if ((zid_job_param==null)||(zid_job_param.equals(""))){zid_job_param="";}
String zsubsesion = "SGCO_JOB_MAP";
String zmeta4object = "SGCO_JOB_MAP";
String znodo = "SGCO_JOB_MAP";
String znodo1 = "SGCO_CR_STEPS_TREE";
String zoutputdef = zsubsesion + "!" + znodo + "[*]";
String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";
String znamenodo  = znodo + ":" + zsubsesion  + "!" + znodo;
String znamenodo1  = znodo1 + ":" + zsubsesion  + "!" + znodo1;
String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";
String zmetodocarga = zsubsesion + "!SGCO_JOB_MAP.SGCO_LOAD";
String scount="";
String znodoaux="";
String zmoveaux="";
int zCountaux=0;
%>	
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<m4:exec m4method="<%=zmetodocarga%>">
<m4:param name="ARG_ID_HR" value="<%=zidhr_param%>"/>
<m4:param name="ARG_ID_JOB_CODE" value="<%=zid_job_param%>"/>
</m4:exec>
<m4:exec node="<%=znodo%>" alias="countrut" method="COUNT" m4object="<%=zsubsesion%>"/>
<m4:endjob/>
<m4:beginjob/>	
<m4:outputexec var="scount" alias="countrut"/>
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<%
int iRutJob=0;
String zmoveso=znodo + ":" + znodo ;
String zalias1="";
int hb = 0;
	try {
		iRutJob = Integer.parseInt(scount); 
		for (hb = 0; hb < iRutJob; hb++){
			zmoveso=znodo + ":" + znodo +"["+String.valueOf(hb)+"]";
			zalias1="SGCO_CR_STEPS_TREE"+String.valueOf(hb);
		%>
			<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveso%>"/></m4:move>
			<m4:outputdef m4alias="<%=zalias1%>"><m4:param name="m4name0" value="SGCO_JOB_MAP!SGCO_CR_STEPS_TREE[*]"/></m4:outputdef>
			<%
		}
	} catch(Exception e) {}
%>

<m4:endjob/>
<%
int  zcounti  = 0;	
try {
	M4Operations m = new M4Operations(request);
	zcounti = m.getCount(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String	zcountv = String.valueOf(zcounti);
%>
<%if (zcounti > 0) {%>	
<table width="100%"><tr><td class="titulofuncional" ><%= Transgco_gen.getProperty("sgco_gen.JobMap")%>&nbsp;:&nbsp;<m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr></table>
<m4:dataloop outputdef="<%=znodo%>">
<m4:current m4varname="current" outputdef="<%=znodo%>"/>
 <%
  znodoaux="SGCO_CR_STEPS_TREE"+current;
  zmoveaux =znodoaux+ ":" + "SGCO_CR_STEPS_TREE" + "[FIRST]";
 %>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
<table class = "tablaestados" width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo"><m4:label  item="SCO_NM_CR_PATH" htmlsafe="true" outputdef="<%=znodo%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_NM_CR_PATH" htmlsafe="true" outputdef="<%=znodo%>"/></td></tr>
</table>
</br>
<m4:dataloop outputdef="<%=znodoaux%>">
<m4:current m4varname="currentaux" outputdef="<%=znodoaux%>"/>
<m4:item m4varname="zSCO_TIME" item="SCO_TIME" htmlsafe="true" outputdef="<%=znodoaux%>" />
<table class = "tablaplan" width="500" height="25" align="center" cellspacing="0">
<tr>
<td  width = "30%" class = "fuentevalor"><m4:item  item="STD_N_JOB_CODE" htmlsafe="true" outputdef="<%=znodoaux%>"/></td>
<td width = "70%" class = "fuentevalor">
	<%if (zSCO_TIME.equals("0")){%>
		 &nbsp;&nbsp;
	<%}else{%>
		 <m4:label  item="SCO_TIME" htmlsafe="true" outputdef="<%=znodoaux%>"/>&nbsp;:&nbsp;<m4:item  item="SCO_TIME" htmlsafe="true" outputdef="<%=znodoaux%>"/>&nbsp;<m4:item  item="SCO_NM_TIME_UNIT" htmlsafe="true" outputdef="<%=znodoaux%>"/>		 
	<%}%>
</td>
</tr>
</table>
<table width="300" height="25" border="0" align="center">	
<tr><td align="center"><%if (zSCO_TIME.equals("0")){%>&nbsp;&nbsp;<%}else{%>|<%}%></td></tr>
</table>
</m4:dataloop>
</m4:dataloop>
<% } else{%>


<script type="text/javascript" language="Javascript1.5">

var msg =  m4getmessage("_sl_co_job_map_1");



 		alert(msg);
	window.close();

</script>
<% }%>