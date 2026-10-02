  <%


    Generatablaparametros zobjtabla = new Generatablaparametros(request);

    String employee_2_filter = (String) zobjtabla.m4paramvalor("employee_2_filter");
    String employee_2_filterEncripted = employee_2_filter;

    employee_2_filter = com.meta4.taglib.util.M4PresentationUtilTaglib.secureDecrypt(request, "incidencePlan", employee_2_filter);
	if ((employee_2_filter==null)){employee_2_filter="";}
	if ((employee_2_filterEncripted==null)){employee_2_filterEncripted="";}

    String start_date_2_filter = (String) zobjtabla.m4paramvalor("start_date_2_filter");
	if ((start_date_2_filter==null)){start_date_2_filter="";}

    String end_date_2_filter = (String) zobjtabla.m4paramvalor("end_date_2_filter");
	if ((end_date_2_filter==null)){end_date_2_filter="";}

    String tp_sort = (String) zobjtabla.m4paramvalor("tp_sort");
	if ((tp_sort==null)){tp_sort="0";}

    String recors_selected = (String) zobjtabla.m4paramvalor("recors_selected");
	if ((recors_selected==null)){recors_selected="";}

    String tp_operation = (String) zobjtabla.m4paramvalor("tp_operation");
	if ((tp_operation==null)){tp_operation="LOAD";}

	String tp_period = "";

	if ((start_date_2_filter.equals("")) && (end_date_2_filter.equals("")))
	{ 
		tp_period = "NO_DATE_FILTER";
	}

	if (!(end_date_2_filter.equals("")))
	{ 
		tp_period = "PERIOD_FILTER";
	}
	else
	{
		if (!(start_date_2_filter.equals("")))
		{
			tp_period = "DATE_FILTER";
		}
	}
%>
<body>

<%
   String zsubsesion = "SSE_HOLYDAYS";
   String zmeta4object = "SSE_HOLYDAYS";
   String zmetodoToExecute = "";
   if (tp_operation.equals("LOAD")){
	zmetodoToExecute = zsubsesion + "!SSE_GTA_LOAD_INCIDEN_4_1_EMPLO.SSE_GTA_LOAD_INCIDENCES";}

   if (tp_operation.equals("SORT")){
	zmetodoToExecute = zmetodoToExecute = zsubsesion + "!SSE_GTA_LOAD_INCIDEN_4_1_EMPLO.SSE_GTA_CHANGE_ORDER";}

   if (tp_operation.equals("DELETE")){
	zmetodoToExecute = zsubsesion + "!SSE_GTA_LOAD_INCIDEN_4_1_EMPLO.SSE_GTA_EXECUTE_DELETE";}

   String znodo = "SSE_GTA_LOAD_INCIDEN_4_1_EMPLO";
   String zraiz = zsubsesion + "!" + znodo + ".";
   String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
   String zmove = znodo + ":" + znodo + "[FIRST]";   
   String zoutputdef = zsubsesion + "!" + znodo + "[*]";

   String znodo1 = "SSE_REAL_TIME_PRD";
   String zoutputdef1 = zsubsesion + "!" + znodo1 +"[*]";
   String zmove1 = znodo1 + ":" +znodo1 + "[FIRST]";
   String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&VAR.m4lix]" + ".";


   String zSSE_GTA_EMPLOYEE_FORMATED = zcomun + "SSE_GTA_EMPLOYEE_FORMATED";
   String zSSE_GTA_UNITS_FORMATED = zcomun + "SSE_GTA_UNITS_FORMATED";
   String zSSE_GTA_HOURS_FORMATED = zcomun + "SSE_GTA_HOURS_FORMATED";
   String zSSE_GTA_IDX_UNIQUE_IDENTIFIER = zcomun + "SSE_GTA_IDX_UNIQUE_IDENTIFIER";
   String zSSE_GTA_PERIOD_FORMATED = zcomun + "SSE_GTA_PERIOD_FORMATED";
   String zSCO_NM_INC_GROUP = zcomun + "SCO_NM_INC_GROUP";
   String zSCO_NM_INCIDENCE = zcomun + "SCO_NM_INCIDENCE";  
   String zSCO_NM_INCIDENCE_TP = zcomun + "SCO_NM_INCIDENCE_TP"; 
   String zSSE_GTA_TEXT_TO_SHOW_AS_TITLE = zcomun + "SSE_GTA_TEXT_TO_SHOW_AS_TITLE"; 

%>
<m4:startpage m4task="<%=zsubsesion%>"/>
<m4:beginjob/>
<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
<% try {
      M4Operations m = new M4Operations(request); 
      m.setItem(zsubsesion,znodo,"","SSE_GTA_ID_EMPLOYEE_2_FILTER",employee_2_filter);
      m.setItem(zsubsesion,znodo,"","SSE_GTA_START_PERIOD_2_FILTER",start_date_2_filter);
      m.setItem(zsubsesion,znodo,"","SSE_GTA_END_PERIOD_2_FILTER",end_date_2_filter);
      m.setItem(zsubsesion,znodo,"","SSE_GTA_ORDER_TO_SET",tp_sort);
      m.setItem(zsubsesion,znodo,"","SSE_GTA_STRING_TO_STUDY",recors_selected);
      m.setItem(zsubsesion,znodo,"","SSE_GTA_TP_DATE_FILTER",tp_period);
	  m.setItem(zsubsesion,"SSE_REAL_TIME_PRD","","SET_OF_EMPLOYEES_SELECTED","");

    } catch(Exception e) {}
%>


<m4:exec m4method="<%=zmetodoToExecute%>"></m4:exec> 
<m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
<m4:endjob/>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove1%>"/></m4:move>

<m4:item outputdef="<%=znodo1%>" item="SCO_GTA_MASSIVE_ERROR_MESSAGE" m4varname="massiveErrorReturned"/>
<m4:item outputdef="<%=znodo1%>" item="SCO_GTA_MASSIVE_TP_ERROR" m4varname="massiveTpErrorReturned"/>

<%
    int  zcount  = 0;
    int  zcounti  = 0;  
    try {
      M4Operations m = new M4Operations(request);
      zcount = m.getCount(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    try {
      M4Operations m = new M4Operations(request);
      zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
    } catch(Exception e) {}
    String  zcountv = String.valueOf(zcounti);
    
%>


<script>

	function SelectAll ()
	{
		num_records = document.getElementById('number_of_records').value

		if (num_records==0)
			return;
		for (var i = 0; i < num_records; i++)
		{
			document.getElementById('record_' + i).checked=true
		}			
	}

	function UnselectAll ()
	{
		num_records = document.getElementById('number_of_records').value
		if (num_records==0)
			return;
		for (var i = 0; i < num_records; i++)
		{
			document.getElementById('record_' + i).checked=false;
		}			
	}

	function ExecuteOrder(type_order)
	{
		var parametros = new Array("employee_2_filter","start_date_2_filter","end_date_2_filter","tp_sort","recors_selected","tp_operation");
		var valores = new Array("","","",type_order,"","SORT");

		m4navegar("mss_g4/mss_g4_gta_delete_masive_incidences.jsp?",parametros,valores);

//		m4submit("ExecuteOrderOrDelete") ;
		
	}

	function ExecuteDelete()
	{
		document.getElementById('tp_operation').value = "DELETE";
		num_records = document.getElementById('number_of_records').value
		if (num_records==0)
			return;

		text_with_records = ""
		for (var i = 0; i < num_records; i++)
		{
			if (document.getElementById('record_' + i).checked==true)
				text_with_records = text_with_records + "##" + document.getElementById('record_' + i).value; 
		}			

		if (text_with_records == "")
			return;

		document.getElementById('recors_selected').value = text_with_records + "##"
//		text_with_records = text_with_records + "##"

//		var parametros = new Array("employee_2_filter","start_date_2_filter","end_date_2_filter","tp_sort","recors_selected","tp_operation");
//		var valores = new Array("<%=employee_2_filterEncripted%>","","","",text_with_records,"DELETE");

//		m4navegar("mss_g4/mss_g4_gta_delete_masive_incidences.jsp?",parametros,valores);


		m4submit("ExecuteOrderOrDelete") ;

	}
</script>

    <table border="0" width="100%">
      <tr><td class="titulofuncional" colspan="2"><%=Tran.getProperty("GTA_57")%></td></tr><tr><td colspan="2">&nbsp;</td></tr>
    </table>

	<m4:item m4varname="tp_popullation_used" item="SSE_GTA_TP_POPULATION" htmlsafe="true" outputdef="<%=znodo%>"/>
	<m4:item m4varname="titleMessage" item="SSE_GTA_TEXT_TO_SHOW_AS_TITLE" htmlsafe="true" outputdef="<%=znodo%>"/>

	<table class = "tablaestados" width="100%" cellspacing="0" border="0">
		<tr><td class="fuentecalendario"><b><u><%=titleMessage%></b></u></td></tr>
	</table>

 
<form action="../mss_g4/mss_g4_gta_delete_masive_incidences.jsp" method="post" name="ExecuteOrderOrDelete" id="ExecuteOrderOrDelete">

  <input type="hidden" id="employee_2_filter" name="employee_2_filter"  value="<%=employee_2_filterEncripted%>" />
  <input type="hidden" id="start_date_2_filter" name="start_date_2_filter"  value="<%=start_date_2_filter%>" />
  <input type="hidden" id="end_date_2_filter" name="end_date_2_filter"  value="<%=end_date_2_filter%>" />
  <input type="hidden" id="tp_sort" name="tp_sort"  value="" />
  <input type="hidden" id="recors_selected" name="recors_selected"  value="" />
  <input type="hidden" id="tp_operation" name="tp_operation"  value="" />

</form>


<input type="hidden" id="number_of_records" name="number_of_records"  value="<%=zcounti%>" />

<% 
  if (zcounti > 0) {
%>  
    <table class = "tablaestados" width="100%" cellspacing="0">
    <tr class = "tablaestadosceldatitulo">
    <%if (tp_popullation_used.equals("POPULLATION")){%>
      <td ><a href="javascript:ExecuteOrder('2')"><img src="/iconos/ic_ord_15_15.gif" title="<%=Tran.getProperty("GTA_72")%>"/></a>&nbsp;<%=Tran.getProperty("GTA_59")%></td ><%}%>    
      <td><a href="javascript:ExecuteOrder('5')"><img src="/iconos/ic_ord_15_15.gif" title="<%=Tran.getProperty("GTA_73")%>"/></a>&nbsp;<%=Tran.getProperty("GTA_60")%></td> 
      <td><a href="javascript:ExecuteOrder('1')"><img src="/iconos/ic_ord_15_15.gif" title="<%=Tran.getProperty("GTA_74")%>"/></a>&nbsp;<%=Tran.getProperty("GTA_61")%></td> 
      <td><%=Tran.getProperty("GTA_62")%></td>   
      <td><%=Tran.getProperty("GTA_63")%></td>   
      <td><a href="javascript:ExecuteOrder('3')"><img src="/iconos/ic_ord_15_15.gif" title="<%=Tran.getProperty("GTA_75")%>"/></a>&nbsp;<%=Tran.getProperty("GTA_64")%></td> 
      <td><a href="javascript:ExecuteOrder('4')"><img src="/iconos/ic_ord_15_15.gif" title="<%=Tran.getProperty("GTA_76")%>"/></a>&nbsp;<%=Tran.getProperty("GTA_65")%></td> <td><%=Tran.getProperty("GTA_66")%></td>   
    </tr>

    <%
      String zposicions = "0";
      int zcontrol = 0;
      int zposicion =0;
    %>
    <m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
    <%
      zposicions = m4lix;
      zposicion = Integer.valueOf(zposicions).intValue();
      zcontrol = zposicion%2;
    %>
    <%if (zcontrol==0){%>
      <tr>


    <%if (tp_popullation_used.equals("POPULLATION")){%>
          <td class="fuentevalor"  >
            <m4:item m4name="<%=zSSE_GTA_EMPLOYEE_FORMATED%>" htmlsafe="true"/>
          </td >
	  <%}%>    

        <td class="fuentevalor"  ><m4:item m4name="<%=zSCO_NM_INCIDENCE%>" htmlsafe="true"/></td>
        <td class="fuentevalor"  ><m4:item m4name="<%=zSSE_GTA_PERIOD_FORMATED%>" htmlsafe="true"/></td>
        <td class="fuentevalor"  ><m4:item m4name="<%=zSSE_GTA_HOURS_FORMATED%>" htmlsafe="true"/></td>
        <td class="fuentevalor"  ><m4:item m4name="<%=zSSE_GTA_UNITS_FORMATED%>" htmlsafe="true"/></td>
        <td class="fuentevalor"  ><m4:item m4name="<%=zSCO_NM_INCIDENCE_TP%>" htmlsafe="true"/></td>
        <td class="fuentevalor"  ><m4:item m4name="<%=zSCO_NM_INC_GROUP%>" htmlsafe="true"/></td>
        <td class="fuentevalor"  >  <input type="checkbox" id="record_<%=m4lix%>" name="record_<%=m4lix%>"  value="<m4:item m4name="<%=zSSE_GTA_IDX_UNIQUE_IDENTIFIER%>" htmlsafe="true"/>" /></td>

      </tr>
    <%}else{%>

    <%if (tp_popullation_used.equals("POPULLATION")){%>
          <td class="fuentevalor2"  >
            <m4:item m4name="<%=zSSE_GTA_EMPLOYEE_FORMATED%>" htmlsafe="true"/>
          </td >


	  <%}%>    

        <td class="fuentevalor2"  ><m4:item m4name="<%=zSCO_NM_INCIDENCE%>" htmlsafe="true"/></td>
        <td class="fuentevalor2"  ><m4:item m4name="<%=zSSE_GTA_PERIOD_FORMATED%>" htmlsafe="true"/></td>
        <td class="fuentevalor2"  ><m4:item m4name="<%=zSSE_GTA_HOURS_FORMATED%>" htmlsafe="true"/></td>
        <td class="fuentevalor2"  ><m4:item m4name="<%=zSSE_GTA_UNITS_FORMATED%>" htmlsafe="true"/></td>
        <td class="fuentevalor2"  ><m4:item m4name="<%=zSCO_NM_INCIDENCE_TP%>" htmlsafe="true"/></td>
        <td class="fuentevalor2"  ><m4:item m4name="<%=zSCO_NM_INC_GROUP%>" htmlsafe="true"/></td>
        <td class="fuentevalor2"  >  <input type="checkbox" id="record_<%=m4lix%>" name="record_<%=m4lix%>"  value="<m4:item m4name="<%=zSSE_GTA_IDX_UNIQUE_IDENTIFIER%>" htmlsafe="true"/>" /></td>

      </tr>

    <%}%>
    </m4:loop>    
  </table>  
    <table width="100%" cellspacing="0">
	<tr><td colspan="2">&nbsp;</td></tr>
	<tr><td width="85%">&nbsp;</td>
		<td>
			<a href="javascript:SelectAll();" title="<%=Tran.getProperty("GTA_67")%>"><img alt="<%=Tran.getProperty("GTA_67")%>" src="/iconos/icono_aceptar_todas_36_36.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
			&nbsp;<a href="javascript:UnselectAll();" title="<%=Tran.getProperty("GTA_68")%>"><img alt="<%=Tran.getProperty("GTA_68")%>" src="/iconos/icono_cancelar_todas_mss_36_36.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
		</td>
	</tr>
	<tr>
		<td colspan="2" align="right">
		<a href="javascript:ExecuteDelete();" title="<%=Tran.getProperty("GTA_69")%>"><img alt="<%=Tran.getProperty("GTA_69")%>" src="/iconos/icono_eliminar_mss_36_36_dis.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
		&nbsp;<a href="javascript:window.close();;" title="<%=Tran.getProperty("GTA_70")%>"><img alt="<%=Tran.getProperty("GTA_70")%>" src="/iconos/entrar_blanco.gif" style="cursor:hand" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" /></a>
	</td>
	</tr>

  </table>  







<%if (massiveTpErrorReturned.equals("N")) {%>
	<table width="100%" cellspacing="0">
		<tr>
			<td width="70%">&nbsp;</td>
			<td width="30%">&nbsp;<a href="javascript:collapseMessageSection.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Tran.getProperty("GTA_4")%>" title="<%=Tran.getProperty("GTA_4")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=Tran.getProperty("GTA_4")%></a></td>
		</tr>
	</table>

	<div id="MessageSection" name="MessageSection">

		<script type="text/javascript">
			document.getElementById('MessageSection').className="";
			var collapseMessageSection=new animatedcollapse('MessageSection', 800,1);
		</script>

		<table width="100%" cellspacing="0">
		<tr>
			<td width="10%">&nbsp;</td>
			<td><div class="descripcionfuncionalVerde"><br/><br/><%=massiveErrorReturned%></div><br/><br/><br/>
			</td>	
		</tr>
		</table>
	</div>
	<table width="100%" cellspacing="0"><tr><td>&nbsp;</td></tr></table>


<%}
if (massiveTpErrorReturned.equals("Y")) {%>

	<table width="100%" cellspacing="0">
		<tr>
			<td width="70%">&nbsp;</td>
			<td width="30%">&nbsp;<a href="javascript:collapseMessageSection.slideit()"><img src="/iconos/ic_ord_15_15.gif" alt="<%=Tran.getProperty("GTA_4")%>" title="<%=Tran.getProperty("GTA_4")%>" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" />&nbsp;<%=Tran.getProperty("GTA_4")%></a></td>
		</tr>
	</table>

	<div id="MessageSection" name="MessageSection">

		<script type="text/javascript">
			document.getElementById('MessageSection').className="";
			var collapseMessageSection=new animatedcollapse('MessageSection', 800,1);
		</script>

		<table width="100%" cellspacing="0">
			<tr>
				<td width="10%">&nbsp;</td>
				<td><div class="descripcionfuncionalRojo"><%=massiveErrorReturned%></div><br/><br/>
				</td>	
			</tr>
		</table>
	</div>
	<table width="100%" cellspacing="0"><tr><td>&nbsp;</td></tr></table>

<%}%>





  <%
  }
  else{%>
    <div class="fuentenodatos"><%=Tran.getProperty("GTA_71")%></div>
    <%
    }
  %>
<br>




