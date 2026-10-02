<%@ include file="/m4trans/mss_g1/0-smco_prof_cv_trans.jsp" %>
<%
   String zsubsesion = "SMCO_EMPLOYEE_PROFESIONAL_DATA";
   String znodo = "SMCO_NODES_TO_SHOW";
   String zcomun = zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
   String zcomun2 = zsubsesion + "!" + znodo + ".";

   String zSSMIDNODE = zcomun + "SMCO_ID_NODE";
   String zSSMNAMENODE = zcomun + "SMCO_NAME_NODE";
   String zSSMCURRENTSITUATION = zcomun + "SMCO_CURRENT_SITUATION";
   String zSSMSTARTDATE = zcomun + "SMCO_START_DATE";
   String zSSMTYPEDATA = zcomun + "SMCO_TYPE_DATA";
   String zSMCOHRTOPROCESS = zcomun + "SMCO_HR_TO_PROCESS";
   String zSMCOORHRTOPROCESS = zcomun + "SMCO_OR_HR_TO_PROCESS";
   String zSMCOORHRROLETOPROCESS = zcomun + "SMCO_OR_HR_ROLE_TO_PROCESS";
   String zSMCOLINKPATH = zcomun + "SMCO_LINK_PATH";
   String zSMCONUMRECORDSNOTLINKS = zcomun2 + "SMCO_NUM_RECORDS_NOT_LINKS";
   String zSMCOLAYERNAME = zcomun + "SMCO_LAYER_NAME";
   

	int  zcounti  = 0;	
	try {
	    M4Operations m = new M4Operations(request);
	    zcounti = m.getCountInClient("",zsubsesion,znodo);
	} catch(Exception e) {}

	String	zcountv = String.valueOf(zcounti);

%>

<script type="text/javascript">
function abrirlink(url,empleado,ordinal,role)
{
	var dir="/servlet/CheckSecurity/JSP/" + url + "?SSM_ID_HR=" + empleado + "&zVis=0&SSM_OR_HR=" + ordinal + "&SSM_OR_HR_ROLE=" + role;
	window.open(dir,'Vis','width=700;height=400,resizable,scrollbars');
}

</script>

<m4:item m4varname="records_to_control" m4name="<%=zSMCONUMRECORDSNOTLINKS%>"/>
<div id="div_control" name="div_control">
<table  width="100%" cellspacing="0">
	<tr>
		<td  width="49%" height="100%"  valign="top">
			<table width="100%" class="barraregistros" cellspacing="0">
				<tr>
					<td class="tablaestadosceldatitulo" colspan="2">&nbsp;<%=ProfCv.getProperty("prof_cv.Label")%></td>
					<td class="tablaestadosceldatitulo">&nbsp;<%=ProfCv.getProperty("prof_cv.Label1")%></td>
				</tr>
				<tr><td colspan="4">&nbsp;</td></tr>
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

				<m4:input name='<%= "TYPE_DATA_" + (m4lix)%>' type="hidden" disabled="disabled"><m4:item m4name="<%=zSSMTYPEDATA%>"/></m4:input>
				<m4:input name='<%= "NODE_TO_VIEW_" + (m4lix)%>' type="hidden" disabled="disabled"><m4:item m4name="<%=zSSMIDNODE%>"/></m4:input>
				<m4:item m4varname="information" m4name="<%=zSSMCURRENTSITUATION%>"/>
				<m4:item m4varname="this_node" m4name="<%=zSSMIDNODE%>"/>
				<m4:item m4varname="data_type" m4name="<%=zSSMTYPEDATA%>"/>

				<% if ((data_type.equals("HIST")) || (data_type.equals("OTHER"))) {%>
					<%if (zcontrol==0){%>
						<tr id = '<%= "LINE_DATA_" + (m4lix)%>' name = '<%= "LINE_DATA_" + (m4lix)%>'>
							<td class="fuentevalorazul">
							&nbsp;<input id = '<%= "CHCK_LINE_DATA_" + (m4lix)%>' name = '<%= "CHCK_LINE_DATA_" + (m4lix)%>' type="checkbox" 	onclick="pon_visible_only('<m4:item m4name="<%=zSSMIDNODE%>"/>')">
							<% if ((information==null)||(information.equals(""))){%>
								<a><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}else{%>
								<a href="javascript:pon_visible('<m4:item m4name="<%=zSSMIDNODE%>"/>',<%=m4lix%>,'_')"><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}%>
							</td>
							<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSMCURRENTSITUATION%>"/>
							<% if (this_node.equals("SMCO_PROFS_INFO_ROLE_WORK_TIME")){%>
								&nbsp;<%=ProfCv.getProperty("prof_cv.HorasLabel")%>
							<%}%></td>
							<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSMSTARTDATE%>"/></td>
						</tr>
					<%}else{%>
						<tr id = '<%= "LINE_DATA_2_" + (m4lix)%>' name = '<%= "LINE_DATA_2_" + (m4lix)%>'>
							<td class="fuentevalorazul2">&nbsp;<input id = '<%= "CHCK_LINE_DATA_" + (m4lix)%>' name = '<%= "CHCK_LINE_DATA_" + (m4lix)%>' type="checkbox" 	onclick="pon_visible_only('<m4:item m4name="<%=zSSMIDNODE%>"/>')">
							<% if ((information==null)||(information.equals(""))){%>
								<a><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}else{%>
								<a href="javascript:pon_visible('<m4:item m4name="<%=zSSMIDNODE%>"/>',<%=m4lix%>,'_2_')"><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}%>
							</td>
							<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=zSSMCURRENTSITUATION%>"/>
							<% if (this_node.equals("SMCO_PROFS_INFO_ROLE_WORK_TIME")){%>
								&nbsp;<%=ProfCv.getProperty("prof_cv.HorasLabel")%>
							<%}%></td>
							<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=zSSMSTARTDATE%>"/></td>
						</tr>
					<%}%>
				<%}%>
				</m4:loop>
				<tr><td class="fuentevalor2" colspan="3">&nbsp;</td></tr><tr><td class="fuentevalor1" colspan="3">&nbsp;</td></tr>
	
			</table>
		</td>

		<script type="text/javaScript">

			var records_number = <%=records_to_control%>
		    for (var i = 0; i < records_number; i++)
			{
				var type_data = document.getElementById("TYPE_DATA_" + i).value;
				var control = i%2;
				if ((type_data=="OTHER") || (type_data=="LINK"))
				{
					var table_control; 
					if (control == 0)
						table_control = "LINE_DATA_" + i
					else
						table_control = "LINE_DATA_2_" + i
					document.getElementById(table_control).className="invisible2";
				}
			}

		</script>


		<td width="2%">&nbsp;</td>

		<td width="49%"  height="100%"  valign="top">
			<table class="barraregistros" width="100%" height="100%" cellspacing="0" >
				<tr>
					<td class="tablaestadosceldatitulo" colspan="2">&nbsp;<%=ProfCv.getProperty("prof_cv.Label4")%></td>
				</tr>
				<tr><td colspan="4">&nbsp;</td></tr>
				<%
					String zposicionsotra = "0";
					int zcontrolotra = 0;
					int zposicionotra =0;
				%>

				<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
				<%
					zposicionsotra = m4lix;
					zposicionotra = Integer.valueOf(zposicionsotra).intValue();
				 	zcontrolotra = zposicionotra%2;
				%>
				<m4:input  name='<%= "TYPE_DATA_OTHER_" + (m4lix)%>' type="hidden" disabled="disabled"><m4:item m4name="<%=zSSMTYPEDATA%>"/></m4:input>
				<m4:input name='<%= "NODE_TO_VIEW_OTHER" + (m4lix)%>' type="hidden" disabled="disabled"><m4:item m4name="<%=zSSMIDNODE%>"/></m4:input>
				<m4:item m4varname="information" m4name="<%=zSSMCURRENTSITUATION%>"/>
				<m4:item m4varname="data_type" m4name="<%=zSSMTYPEDATA%>"/>

				<% if ((data_type.equals("HIST")) || (data_type.equals("OTHER"))) {%>

					<%if (zcontrolotra==0){%>
						<tr  id = '<%= "LINE_DATA_OTHER_" + (m4lix)%>' name = '<%= "LINE_DATA_OTHER_" + (m4lix)%>'>
							<td class="fuentevalorazul">&nbsp;<input id = '<%= "CHCK_LINE_DATA_OTHER_" + (m4lix)%>' name = '<%= "CHCK_LINE_DATA_OTHER_" + (m4lix)%>' 	type="checkbox" onclick="pon_visible_only('<m4:item m4name="<%=zSSMIDNODE%>"/>')">
							<% if ((information==null)||(information.equals(""))){%>
								<a><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}else{%>
								<a href="javascript:pon_visible('<m4:item m4name="<%=zSSMIDNODE%>"/>',<%=m4lix%>,'_')"><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}%>
							</td>
							<td class="fuentevalor">&nbsp;<m4:item m4name="<%=zSSMCURRENTSITUATION%>"/></td>
						</tr>
					<%}else{%>
						<tr id = '<%= "LINE_DATA_OTHER_2_" + (m4lix)%>' name = '<%= "LINE_DATA_OTHER_2_" + (m4lix)%>'>
							<td class="fuentevalorazul2">&nbsp;<input id = '<%= "CHCK_LINE_DATA_OTHER_" + (m4lix)%>' name = '<%= "CHCK_LINE_DATA_OTHER_" + (m4lix)%>' 	type="checkbox" onclick="pon_visible_only('<m4:item m4name="<%=zSSMIDNODE%>"/>')">
							<% if ((information==null)||(information.equals(""))){%>
								<a><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}else{%>
								<a href="javascript:pon_visible('<m4:item m4name="<%=zSSMIDNODE%>"/>',<%=m4lix%>,'_2_')"><m4:item m4name="<%=zSSMNAMENODE%>"/></a>
							<%}%>
							</td>
							<td class="fuentevaloralter">&nbsp;<m4:item m4name="<%=zSSMCURRENTSITUATION%>"/></td>
						</tr>
					<%}%>
				<%}%>

				</m4:loop>	

				<tr><td colspan="2">&nbsp;</td></tr>

				<tr>
					<td class="tablaestadosceldatitulo" colspan="2">&nbsp;<%=ProfCv.getProperty("prof_cv.Label5")%></td>
				</tr>

				<tr><td colspan="4">&nbsp;</td></tr>
				<%
					String zposicionslink = "0";
					int zcontrollink = 0;
					int zposicionlink =0;
				%>

				<tr><td class="fuentevalorazul">
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
				<%
					zposicionslink = m4lix;
					zposicionlink = Integer.valueOf(zposicionslink).intValue();
				 	zcontrollink = zposicionlink%2;
				%>

				<m4:item m4varname="data_type" m4name="<%=zSSMTYPEDATA%>"/>
				<m4:item m4varname="layer_name" m4name="<%=zSMCOLAYERNAME%>"/>

				<%if (data_type.equals("LINK")) {%>
					<%if (zcontrollink==0){%>
							<input id = '<%= "CHCK_" + (layer_name)%>' name = '<%= "CHCK_" + (layer_name)%>' type="checkbox" onclick="pon_visible_only('<m4:item m4name="<%=zSMCOLAYERNAME%>"/>')">
							<a href="" onclick="pon_visible('<m4:item m4name="<%=zSMCOLAYERNAME%>"/>','','&');return false;">&nbsp;<m4:item m4name="<%=zSSMNAMENODE%>"/></a><br/>
					<%}else{%>
					<%}%>
				<%}%>
				</m4:loop>	

				</td>
				<td class="fuentevalorazul">
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountv).intValue()-1).toString()%>">
				<%
					zposicionslink = m4lix;
					zposicionlink = Integer.valueOf(zposicionslink).intValue();
				 	zcontrollink = zposicionlink%2;
				%>
				<m4:item m4varname="data_type" m4name="<%=zSSMTYPEDATA%>"/>
				<m4:item m4varname="layer_name" m4name="<%=zSMCOLAYERNAME%>"/>

				<%if (data_type.equals("LINK")) {%>
					<%if (zcontrollink==0){%>
					<%}else{%>
							<input id = '<%= "CHCK_" + (layer_name)%>' name = '<%= "CHCK_" + (layer_name)%>' type="checkbox" onclick="pon_visible_only('<m4:item m4name="<%=zSMCOLAYERNAME%>"/>')">
							<a href="" onclick="pon_visible('<m4:item m4name="<%=zSMCOLAYERNAME%>"/>','','&');return false;">&nbsp;<m4:item m4name="<%=zSSMNAMENODE%>"/></a><br/>
					<%}%>
				<%}%>
				</m4:loop>	
				</td></tr>


<!--
					<tr>
						<td class="fuentevalorazul">&nbsp;<a href="" onclick="abrirlink('sse_g2/sse_g2_p10.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Historial Salarial del empleado</a></td>
						<td class="fuentevalorazul">&nbsp;<a href="" onclick="abrirlink('mss_g3/mss_g3_p20.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Historial de Evaluaciones</a></td></tr>

					<tr>
						<td class="fuentevalorazul2">&nbsp;<a href="" onclick="abrirlink('mss_g3/smco_g3_p17_mod_prof.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Plan de Acción para el empleado</a></td>
						<td class="fuentevalorazul2">&nbsp;<a href="" onclick="abrirlink('mss_g1/mss_g1_cv.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Acceso al CV del empleado</a></td></tr>
					<tr>
						<td class="fuentevalorazul">&nbsp;<a href="" onclick="abrirlink('sse_g3/sse_g3_p21.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Historial de Cursos</a></td>
						<td class="fuentevalorazul">&nbsp;<a href="" onclick="abrirlink('sse_g3/sse_g3_p9.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Plan de Carrera del empleado</a></td></tr>

					<tr>
						<td class="fuentevalorazul2">&nbsp;<a href="" onclick="abrirlink('mss_g3/mss_g3_p9.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Competencias para el puesto</a></td>
						<td class="fuentevalorazul2">&nbsp;<a href="" onclick="abrirlink('mss_g3/smco_g3_p30_list.jsp','<m4:item m4name="<%=zSMCOHRTOPROCESS%>"/>','<m4:item m4name="<%=zSMCOORHRTOPROCESS%>"/>');return false;">Entrevistas</a></td></tr>
					<tr><td colspan="4">&nbsp;</td></tr>
-->
			</table>
		</td>

		<script type="text/javaScript">

			var records_number = <%=records_to_control%>
		    for (var j = 0; j < records_number; j++)
			{
				var type_data = document.getElementById("TYPE_DATA_OTHER_" + j).value;
				var control = j%2;
				if ((type_data=="HIST") || (type_data=="LINK"))
				{
					var table_control; 
					if (control == 0)
						table_control = "LINE_DATA_OTHER_" + j
					else
						table_control = "LINE_DATA_OTHER_2_" + j

					document.getElementById(table_control).className="invisible2";
				}
			}

		</script>

	</tr>
</table>
</div>