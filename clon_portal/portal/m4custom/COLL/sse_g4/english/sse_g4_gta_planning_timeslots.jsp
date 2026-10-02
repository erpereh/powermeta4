<%///////////////////////////////////////PLANNING GTA : Timeslots Part ("Day View")///////////////////////////////////////%>
<%
String znodo20 = "SSE_GTA_TIMESLOT_CONSTRUCTOR";
String znodo21 = "SSE_GTA_CLOCKING";

String zoutputdef20 = zsubsesion + "!" + znodo20 + "[*]";
String zmove20 = znodo20 + ":" +znodo20 + "[FIRST]";
String zlectura20 = znodo20 + ":" +zsubsesion + "!" + znodo20;
String zcomun20 = znodo20 + ":" +zsubsesion + "!" + znodo20 + "[&VAR.m4lix]" + ".";

String zoutputdef21 = zsubsesion + "!" + znodo21 + "[*]";
String zmove21 = znodo21 + ":" +znodo21 + "[FIRST]";
String zlectura21 = znodo21 + ":" +zsubsesion + "!" + znodo21;
String zcomun21 = znodo21 + ":" +zsubsesion + "!" + znodo21 + "[&VAR.m4lix]" + ".";

String hourStartTS = zcomun20 + "SCO_STARTS_AT";
String hourEndTS = zcomun20 + "SCO_ENDS_AT";
String timeSlotType = zcomun20 + "SCO_NM_TIMESLOT_TYPE";

String hourDayClock = zcomun21 + "SCO_DT_DATE_AND_HOUR";
String hourDayInOut = zcomun21 + "SCO_IN_OR_OUT";
String hourDayNumeric = zcomun21 + "DAY_NUMERIC";

String loadTimeSlots = "LOADTS:" + zsubsesion + "!SSE_GTA_PLAN.SSE_GET_DAY_TIMESLOTS";

int  zcounti20  = 0;
int  zcounti21  = 0;	
%>
<!-- TimeSlots Graphic View for Day View -->
<tr>
	<td  class="timeslot" name="" title="">
	<div id="<m4:item m4name="<%=idPerson%>"/>|<m4:item m4name="<%=ordinalPeriod%>"/>|TS" class="showtimecell">
		<script type="text/javascript">
			xinit = 0;
		</script>	
		<%
		for (int number = 0; number <= nbHeure; number++) {
		%>
			<div  class= "grid" id ="<%=m4lix%>Grid<%=number%>">
				<script type="text/javascript">
					var grid = "<%=m4lix%>Grid<%=number%>";
					$(grid).style.left = xinit+"px";
					xinit = xinit+ xhoraires;
				</script>
			</div>
		<%
		}
		%>
		<!-- TimeSlots Construction -->
		<m4:beginjob/>
		<m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
		<m4:exec m4method="<%=loadTimeSlots%>">
			<m4:param name="ARG_ID_HR" value="<%=idPers%>"/>
			<m4:param name="ARG_OR_HR_PERIOD" value="<%=ordPeriod%>"/>
			<m4:param name="ARG_DT_START" value="<%=dtStart%>"/>
			<m4:param name="ARG_ID_STATUS" value="<%=dayIdStatus%>"/>
			<m4:param name="ARG_ID_DAY_TYPE" value="<%=dayIdDayType%>"/>
		</m4:exec>
		<m4:outputdef m4alias="<%=znodo1%>"><m4:param name="m4name0" value="<%=zoutputdef1%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodo2%>"><m4:param name="m4name0" value="<%=zoutputdef2%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodo20%>"><m4:param name="m4name0" value="<%=zoutputdef20%>"/></m4:outputdef>
		<m4:outputdef m4alias="<%=znodo21%>"><m4:param name="m4name0" value="<%=zoutputdef21%>"/></m4:outputdef>
		<m4:endjob/>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove20%>"/></m4:move>
		<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove21%>"/></m4:move>
		<%
		String startNumeric = "";
		String endNumeric = "";
		String lenghtNumeric ="";
		try {
			M4Operations m = new M4Operations(request);
			zcounti20 = m.getCountInClient(znodo20,zsubsesion,znodo20);
			zcounti21 = m.getCountInClient(znodo21,zsubsesion,znodo21);

		} catch(Exception e) {}
		String zcountv20 = String.valueOf(zcounti20);
		String zcountv21 = String.valueOf(zcounti21);
		double debutHeureTS = Double.parseDouble(startHourDay);
		double startDeb = 0;
		double endDeb = 0;
		double taille = 0;
		String type ="variable";
		double left = 0;
		String timeslotType = "";
		String clockType = "";
		String clockTypeText = "";
		%>
		<!-- Time Slots -->
		<m4:loop from="0" to="<%=new Integer(new Integer(zcountv20).intValue()-1).toString()%>">
		<%
		try {
			M4Operations m = new M4Operations(request);
			zcounti20 = m.getCountInClient(znodo20,zsubsesion,znodo20);
			startNumeric = m.getItem(znodo20,zsubsesion,znodo20,m4lix,"START_NUMERIC");
			endNumeric = m.getItem(znodo20,zsubsesion,znodo20,m4lix,"END_NUMERIC");
			lenghtNumeric = m.getItem(znodo20,zsubsesion,znodo20,m4lix,"LENGHT_NUMERIC");
			timeslotType = m.getItem(znodo20,zsubsesion,znodo20,m4lix,"SCO_ID_TIMESLOT_TYPE");
		} catch(Exception e) {}

		if (!startNumeric.equals(null) && !startNumeric.equals("") && !endNumeric.equals("") && !endNumeric.equals(null) && !lenghtNumeric.equals("")&& !lenghtNumeric.equals(null)) {
			startDeb =Double.parseDouble(startNumeric);
			endDeb = Double.parseDouble(endNumeric);
			taille = Double.parseDouble(lenghtNumeric);
			left = startDeb - debutHeureTS;
			%>
			<div id="<%=idPers%><%=m4lix%>TimeSlot" class="<%=timeslotType%>">
				<script type="text/javascript">
					var TimeSlot = "<%=idPers%><%=m4lix%>TimeSlot";
					var posLeft = <%=left%>
					var resultLeft = (posLeft * (taille - 40))/nbHeure;
					$(TimeSlot).style.left = resultLeft+"px";
					var widthTS = <%=taille%>
					var resultWidth = (widthTS * (taille - 40))/nbHeure;
					$(TimeSlot).tween('width', resultWidth);
					getTooltipTimeSlot($(TimeSlot),'<m4:item m4name="<%=hourStartTS%>" typename="HOUR"/>','<m4:item m4name="<%=hourEndTS%>" typename="HOUR"/>','<m4:item m4name="<%=timeSlotType%>"/>');
				</script>
			</div>
		<%
		}
		%>
		</m4:loop>

		<!-- Clocking -->
		<m4:loop from="0" to="<%=new Integer(new Integer(zcountv21).intValue()-1).toString()%>">
		<%
		try {
			M4Operations m = new M4Operations(request);
			zcounti21 = m.getCountInClient(znodo21,zsubsesion,znodo21);
			startNumeric = m.getItem(znodo21,zsubsesion,znodo21,m4lix,"DAY_NUMERIC");
			clockType = m.getItem(znodo21,zsubsesion,znodo21,m4lix,"SCO_IN_OR_OUT");


			zposicions = m4lix;
			zposicion = Integer.valueOf(zposicions).intValue();
			zcontrol = zposicion%2;
			if (zcontrol==0){
				clockType = "CLOCKING_IN";
				clockTypeText = Tran_mss_g4_gta_planning.getProperty("timeSlot.in");
			}else{
				clockType = "CLOCKING_OUT";
				clockTypeText = Tran_mss_g4_gta_planning.getProperty("timeSlot.out");
			}
		} catch(Exception e) {}

		if (!startNumeric.equals(null) && !startNumeric.equals("")) {
			startDeb =Double.parseDouble(startNumeric);
			left = startDeb - debutHeureTS;
			%>
			<div id="<%=idPers%><%=m4lix%>Clocking" class="<%=clockType%>">
				<script type="text/javascript">
					var clocking = "<%=idPers%><%=m4lix%>Clocking";
					var posLeft = <%=left%>
					var resultLeft = ((posLeft * (taille - 40))/nbHeure) - 8;
					$(clocking).style.left = resultLeft+"px";
					getTooltipClocking($(clocking),'<m4:item m4name="<%=hourDayClock%>" typename="HOUR"/>','<%=clockTypeText%>');
				</script>
				
			</div>
		<%
		}
		%>
		</m4:loop>

	</div>
	</td>
</tr>