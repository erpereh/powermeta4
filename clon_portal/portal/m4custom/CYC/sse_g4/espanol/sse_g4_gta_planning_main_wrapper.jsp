<%///////////////////////////////////////PLANNING GTA : Main Wrapper Code///////////////////////////////////////%>
<!--With_Datas-->
<% if (zcounti1 > 0) { 
	//Use for Pagination
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti1 - 1);
	//Use for Week View
	String currentWeek ="";
	String newWeek ="";
	String currentStartWeekDate="";
	String currentEndWeekDate="";
	String startWeekDate="";
	String endWeekDate="";
	int weekColSpan = 0;
	%>
	<!-- Pagination Part -->
	<%@ include file="../../sse_g4/espanol/sse_g4_gta_planning_pagination.jsp"%>
	<!-- Population Part -->
	<%@ include file="../../sse_g4/espanol/sse_g4_gta_planning_population.jsp"%>
	<!--MainTable/Datas-->
	<table id ="mainTable" class="mainTable" width="100%" cellspacing="0" cellpadding="0" border="0">
		<%
		String zposicions="0";
		int zcontrol=0;
		int zposicion=0;
		%>
		<!--MainTable/Header-->
		<thead id='mainHead' cellspacing="0" cellpadding="0">
			<tr width="100%">
				<!--Counters-->
				<%if(counterC1.equals("")&&counterC2.equals("")&&counterC3.equals("")){%>
					<td class="column"></td>
				<%}else{%>
					<td class="cptcolumn"><%=Tran_mss_g4_gta_planning.getProperty("main.counter")%></td>
				<%}%>
				<!--EmployeesHeader-->
				<td class="column"><%=Tran_mss_g4_gta_planning.getProperty("main.id")%>&nbsp;/<%=Tran_mss_g4_gta_planning.getProperty("main.lastName")%>,<%=Tran_mss_g4_gta_planning.getProperty("main.firstName")%></td>
				<!--WeekHeader-->
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
					<%
					try{
						M4Operations t=new M4Operations(request);
						newWeek=String.valueOf((int)Float.parseFloat(t.getItem(znodo2,zmeta4object,znodo2,m4lix,"SSE_WEEK")));
						startWeekDate=t.getItem(znodo2,zmeta4object,znodo2,m4lix,"SSE_WEEK_START_DATE");
						startWeekDate=oFmt.outFormat(oSess,startWeekDate,com.meta4.format.M4Format.DATE);
						endWeekDate=t.getItem(znodo2,zmeta4object,znodo2,m4lix,"SSE_WEEK_END_DATE");
						endWeekDate=oFmt.outFormat(oSess,endWeekDate,com.meta4.format.M4Format.DATE);
					}catch(Exception e){}
					if(newWeek.equals(currentWeek)||m4lix.equals("0")){
						weekColSpan=weekColSpan+1;
						currentWeek=newWeek;
						currentStartWeekDate=startWeekDate;
						currentEndWeekDate=endWeekDate;
					}else{
					%>
						<td id="<%=currentStartWeekDate%>|<%=currentEndWeekDate%>" class="weekcol"  onclick="selectWeek(this);" colspan="<%=weekColSpan%>" align="center"title="<%=Tran_mss_g4_gta_planning.getProperty("main.selectWeek")%>"><%=currentWeek%></td>
					<%
						weekColSpan=1;
						currentWeek=newWeek;
						currentStartWeekDate=startWeekDate;
						currentEndWeekDate=endWeekDate;
					}%>
				</m4:loop>
				<td id="<%=currentStartWeekDate%>|<%=currentEndWeekDate%>" class="weekcol" onclick="selectWeek(this);" colspan="<%=weekColSpan%>" align="center"title="<%=Tran_mss_g4_gta_planning.getProperty("main.selectWeek")%>"><%=currentWeek%></td>
				<!--TotalHeader-->
				<td class="column"></td>
			</tr>

			<!--DaysHeader-->
			<script type="text/javascript">
				//Day'sNumber
				var nombre=<%=zcounti2%>;
				//Day'sColumnWidth
				var taille=parseInt((document.body.clientWidth-300)/nombre);//350
				//vartaille=(95/nombre);//en%
			</script>
			<tr width="100%" id="dayHeader">
			<!--Counters-->
			<%if(counterC1.equals("")&&counterC2.equals("")&&counterC3.equals("")){%>
				<td class="column"></td>
			<%}else{%>
				<td>
					<table width="100%" cellspacing="0px" cellpadding="0px" border="0">
						<tr style="BACKGROUND-COLOR:#40475C;">
						<%if(!counterC1.equals("")){%>
							<td><div id="C1" class="cpt1col"><%=counterC1Name%></div></td>
							<script type="text/javascript" language="Javascript1.5">
								getTooltipCounterDescription($("C1"));			
							</script>
						<%}%>
						<%if(!counterC2.equals("")){%>
							<td><div id="C2" class="cpt2col"><%=counterC2Name%></div></td>
							<script type="text/javascript" language="Javascript1.5">
								getTooltipCounterDescription($("C2"));			
							</script>
						<%}%>
						<%if(!counterC3.equals("")){%>
							<td><div id="C3" class="cpt3col"><%=counterC3Name%></div></td>
							<script type="text/javascript" language="Javascript1.5">
								getTooltipCounterDescription($("C3"));			
							</script>
						<%}%>
						</tr>
					</table>
				</td>
			<%}%>
				<!--CheckBoxforValidationProcess-->
				<td class="columnLeft" align="left">
					<input title="Tout Valider" id="controlAllAlertSeverity" name="controlAllAlertSeverity" class="checkboxValidation" type="checkbox" onclick="controlAllAlertSeverity();" value=""/>&nbsp;
				</td>
				<!--DayHeader-->
				<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
					<td id="<m4:item m4name="<%=dateHeader%>" />" name="<m4:item m4name="<%=dateHeader%>"/>"  class="daycolumn"  align="center"title="<%=Tran_mss_g4_gta_planning.getProperty("main.selectDay")%>" onContextMenu="unSelectColumn(this);" onclick="selectColumn(this);" >
					<%if (viewType.equals("Day")||viewType.equals("Week")){%>
						<m4:item m4name="<%=dateHeader%>"/>
					<%}else{%>
						<m4:item m4name="<%=dayHeader%>"/>
					<%}%>
					</td>
					<script type="text/javascript">
						document.getElementById('<m4:item m4name="<%=dateHeader%>" />').style.width= taille+"px";
					</script>
				</m4:loop>
				<!--TotalHeader-->
				<%if(checkTotal.equals("Y")){%>
				<td class="column"><div class="totcol"><%=Tran_mss_g4_gta_planning.getProperty("main.total")%></div></td>
				<%}else{%>
				<td class="column"></td>
				<%}%>
			</tr>
			<!--Case:DayView/Header-->
			<%if(viewType.equals("Day")){//Test:DisplayTimeslotsfor"DayView"%>
				<tr width="100%" id="dayHeader">
					<td class="column"></td> <!--Counters-->
					<td class="column" align="center">&nbsp;</td>
					<td class="column" id="allday" align="center">
						<script type="text/javascript">
								$('allday').style.width=taille;
						</script>
						<div class="showtimehead">
							<script type="text/javascript">
							var xhoraires=(taille-40)/<%=nbHeure%>;
							var xinit=0;
							var debHeure=<%=debutHeure%>;
							var nbHeure=<%=nbHeure%>;
							</script>
							<%for(int number=0;number<=nbHeure;number++){%>
								<div class="hourHeader" id="hourHeader<%=number%>">
									<script type="text/javascript">
										var hourHeader="hourHeader<%=number%>";
										$(hourHeader).style.left=xinit+"px";
									</script>
									<%=debutHeure%>:00
									<%if(debutHeure==23){
										debutHeure=0;
									}else{
										debutHeure=debutHeure+1;
									}%>
								</div>
								<div class="grid" id="hourHeaderGrid<%=number%>">
									<script type="text/javascript">
										var hourHeaderGrid="hourHeaderGrid<%=number%>";
										$(hourHeaderGrid).style.left=xinit+"px";
									</script>
								</div>
								<script type="text/javascript">
										xinit=xinit+xhoraires;
								</script>
							<%}%>
						</div>
					</td>
					<!--TotalHeader-->
					<td class="column"></td>
				</tr>
			<%}//Case:DayView%>

			<!--TotalHeaderManagement-->
			<%if(checkTotal.equals("Y")){%>
				<tr width="100%">
					<td class="column"></td>
					<td class="column"><div class="totcol"><%=Tran_mss_g4_gta_planning.getProperty("main.total")%></div></td>
					<m4:loop from="0" to="<%=new Integer(new Integer(zcountv2).intValue()-1).toString()%>">
						<td id="<m4:item m4name="<%=dateHeader%>"/>-Total" class="totcol">0</td>
					</m4:loop>
					<td width="44px" id="finalTotal" rowspan="3" class="totcol">0</td>
				</tr>
			<%}%>
		</thead><!--End:MainTable/Header-->
		<!--MainTable/Body-->
		<tbody id='mainBody' class='mainBody' cellspacing="0" cellpadding="0">
		<%
		String currentId="";
		String idPers="";
		String idPersEncrypt="";
		String startDate="";
		String cellId="";
		String idOrd="";
		String dayManagement="";
		String dayIdDayType="";
		String dayIdStatus="";
		String startWeek="";
		String endWeek="";
		String cssWeek="";
		String startCycle="";
		String endCycle="";
		String cssCycle="";
		String we="";
		String ordinal="";
		String ordPeriod="";
		String currentOrdPeriod="";
		String cssDay="";
		String forEndDisplayOrdPeriod="";
		String forEndDisplayId="";
		String currentSort="";
		String tabIndex="0";
		String affectTooltip="0";
		int ordinalRow=0;
		String ordinalRowIndex="";
		String stringHours="";
		double doubleMinutes=0;
		String dayValidation="";
		String mainSort="";
		%>
		<m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
		<%
			zposicions=m4lix;
			zposicion=Integer.valueOf(zposicions).intValue();
			zcontrol=zposicion%2;
			tabIndex=String.valueOf(zposicion+1);

			try{
				M4Operations t=new M4Operations(request);
				idPers=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"STD_ID_HR");
				idPersEncrypt=com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"gtaEncrypt2012",idPers);
				ordPeriod=String.valueOf((int)Float.parseFloat(t.getItem(znodo1,zmeta4object,znodo1,m4lix,"STD_OR_HR_PERIOD")));
				currentSort=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SSE_MAIN_SORT");
				dayManagement=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SCO_MANAGEMENT_BY_DAYS");
				dayValidation=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SSE_GET_VALIDATION");
				dayIdStatus=String.valueOf((int)Float.parseFloat(t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SCO_ID_STATUS")));
				dayIdDayType=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SCO_ID_DAY_TYPE");
				startDate=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"DT_START");
				//startDate=startDate.substring(0,10);
				startDate=oFmt.outFormat(oSess,startDate,com.meta4.format.M4Format.DATE);
				cellId=startDate+"|"+idPers+"|"+ordPeriod;
				idOrd=idPers+"|"+ordPeriod;
				affectTooltip=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SSE_TOOLTIP");
				//CalculDayCss
				cssDay=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SSE_GET_CSS");
				//CalculWeekCss
				cssWeek=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SSE_WEEK_CSS");
				//CalculCycleCss
				cssCycle=t.getItem(znodo1,zmeta4object,znodo1,m4lix,"SSE_CYCLE_CSS");

			}catch(Exception e){}
			//<!--RowManagement-->
			if(!currentId.equals(idPers)||!currentOrdPeriod.equals(ordPeriod)){
				forEndDisplayId=currentId;
				forEndDisplayOrdPeriod=currentOrdPeriod;
				currentId=idPers;
				currentOrdPeriod=ordPeriod;
				ordinalRow=(zposicion-zregistroinicial)/zcounti2;
				ordinalRowIndex=String.valueOf(ordinalRow);
				
				if(!zposicions.equals(zregistroinicials)){%>
					<!--Total-->
					<%if(checkTotal.equals("Y")){%>
					<td id="<%=forEndDisplayId%>|<%=forEndDisplayOrdPeriod%>-Total" width="44px"><div class="totcol"></div></td>
					<%}else{%>
					<td class="column"></td>
					<%}%>
					</tr><!--RowEnd-->
					<tr name="endInfos"><td class="endLine" colspan="<%=nbCell%>"><div id="end|<%=forEndDisplayId%>|<%=forEndDisplayOrdPeriod%>"></div></td></tr>
				<%}%>

				<!--SortRegroupement-->
				<%
				if(!mainSort.equals(currentSort)){
					mainSort=currentSort;
				%>
					<tr width="100%"><td class="sortcol" colspan="<%=nbCell%>"><%=currentSort%></td></tr>
				<%}%>
				<!--SortRegroupement-->
				<tr id="tr<%=idOrd%>" width="100%">
				<!--Counters-->
				<%if(counterC1.equals("")&&counterC2.equals("")&&counterC3.equals("")){%>
						<td width="0px"></td>
				<%}else{
					try{
						M4Operations c=new M4Operations(request);
						counterC1Value=c.getItem(znodo15,zmeta4object,znodo15,ordinalRowIndex,"SSE_COUNTER_C1");
						counterC2Value=c.getItem(znodo15,zmeta4object,znodo15,ordinalRowIndex,"SSE_COUNTER_C2");
						counterC3Value=c.getItem(znodo15,zmeta4object,znodo15,ordinalRowIndex,"SSE_COUNTER_C3");
						
					}catch(Exception e){}
					%>
					<td style="border-bottom:black 1px solid;">
						<table width="100%" cellspacing="0px" cellpadding="0px" border ="0">
							<tr>
							<%if(!counterC1.equals("")){%>
								<td><div id="<%=idOrd%>|C1" class="cpt1data"><%=counterC1Value%></div></td>
							<%}%>
							<%if(!counterC2.equals("")){%>
								<td><div id="<%=idOrd%>|C2" class="cpt2data"><%=counterC2Value%></div></td>
							<%}%>
							<%if(!counterC3.equals("")){%>
								<td><div id="<%=idOrd%>|C3" class="cpt3data"><%=counterC3Value%></div></td>
							<%}%>
							</tr>
						</table>
					</td>
				<%}%><!--Counters-->

				<!--CellPersonInformation-->
				<td id="td<%=idOrd%>" name="<%=idPersEncrypt%>" class="<%=popMap.get(idOrd+"_RowCss")%>">
					<span>
						<input title="à Valider" id="check_td<%=idOrd%>" name="check_td<%=idOrd%>" class="checkboxValidation"  type="checkbox"onclick="controlValidationChecking(peopleArray['<%=idOrd%>']);"/>
					</span>
					<%if(mss.equals("1")&&!viewType.equals("Day")){%>
						<span>
							<img id="<%=idOrd%>" class="clickAble" src="/iconos/user_add.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("main.selectRow")%>" onmouseover="m4luztotal(this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)" onclick="selectRow(this)" onContextMenu="unSelectRow(this);"/>
						</span>
					<%}%>
					<span id="<%=idOrd%>">
						<img id ="infos|<%=idOrd%>" src="/iconos/infos.gif" class="helpAble" onmouseover="m4luztotal (this,245,245,245,50,40,40,100,100,100)" onmouseout="m4oscuridad(this)"/>
					&nbsp;<m4:item m4name="<%=idPerson%>"/>/<%=popMap.get(idOrd+"_LastName")%>,<%=popMap.get(idOrd+"_FirstName")%>
					</span>
					<script type="text/javascript" language="Javascript1.5">
						var toolTipHRInfos='infos|<%=idOrd%>';
						getTooltipHRInfos($(toolTipHRInfos),"<%=cellId%>","<%=idPersEncrypt%>");
					</script>
				</td>
				<!--FirstDay-->
				<td class="normal">
					<table class="casedecoupe">
						<tbody id="tbody_<%=idOrd%>" name="tbody">
							<%
							if(displayCycle.equals("yes")){//Test:DisplayCycleBar%>
								<!--CycleCell-->
								<tr>
									<td id="cycle|<%=cellId%>" class="<%=cssCycle%>" name="<%=cssCycle%>">
									</td>
								</tr>
							<%}
							if(displayWeek.equals("yes")){//Test:DisplayWeekBar%>
								<!--WeekCell-->
								<tr>
									<td id="week|<%=cellId%>" class="<%=cssWeek%>" name="<%=cssWeek%>">
									</td>
								</tr>
							<%}%>
							<!--DayCell-->
							<tr id="tr<%=cellId%>">
								<td id="<%=cellId%>" class="<%=cssDay%>" name="<%=cssDay%>" title="" style="padding-right: 0px;" onkeydown ="keyPress(event,this,<%=nbDays%>);"onclick="selectDay(this);" onContextMenu="unSelectDay(this);" tabIndex="<%=tabIndex%>">
									<div id="day|<%=cellId%>" class="day_cell_<%=dayValidation%>">
										<div id="type|<%=cellId%>" class="day_type">
											<%
											if(!viewType.equals("Month")){
											%>
												<m4:item m4name="<%=day%>"/>
											<%}%>
										</div>
										<%if(viewType.equals("Week")){//manageDayType%>
											<script type="text/javascript" language="Javascript1.5">
												var dayTypeCurrent ='type|<%=cellId%>';
												manageDayType($(dayTypeCurrent));
											</script>
										<%}%>
										<div id="value|<%=cellId%>" name="<%=dayManagement%>" class="day_value">
											<m4:item m4name="<%=hours%>"/>
											
										</div>
									</div>
								</td>
								<%if(affectTooltip.equals("1")){//ifweneedtooltip%>
								<script type="text/javascript" language="Javascript1.5">
									var toolTipDay='<%=cellId%>';
									getTooltip($(toolTipDay));
								</script>
								<%}%>
							</tr>
							<!--TimeSlots"Text"forWeekView-->
							<%if(viewType.equals("Week")){%>
								<tr>
									<td class="timeslot" id="text|<%=cellId%>" name="" title="">
										<m4:item m4name="<%=timeSlotText%>"/>
									</td>
								</tr>
							<%}%>
							<!--TimeSlotsGraphicViewforDayView-->
							<%
							if(viewType.equals("Day")){%>
								<%@ include file="../../sse_g4/espanol/sse_g4_gta_planning_timeslots.jsp"%>
							<%}%>
						</tbody>
					</table>
				</td>
				<!--End:FirstDay-->
			<!--OtherDays-->
			<%}else{%>
				<td class="normal">
					<table class="casedecoupe">
						<tbody id="tbody_<%=idOrd%>" name="tbody">
							<%
							if(displayCycle.equals("yes")){//Test:DisplayCycleBar%>
								<!--CycleCell-->
								<tr>
									<td id ="cycle|<%=cellId%>" class="<%=cssCycle%>" name="<%=cssCycle%>">
									</td>
								</tr>
							<%}
							if(displayWeek.equals("yes")){//Test:DisplayWeekBar%>
								<!--WeekCell-->
								<tr>
									<td id ="week|<%=cellId%>" class="<%=cssWeek%>" name="<%=cssWeek%>">
										
									</td>
								</tr>
							<%}%>
							<!--DayCell-->
							<tr>
								<td id="<%=cellId%>" class="<%=cssDay%>" name="<%=cssDay%>" title="" style="padding-right: 0px;" onkeydown ="keyPress(event,this,<%=nbDays%>);"onclick="selectDay(this);" onContextMenu="unSelectDay(this);" tabIndex="<%=tabIndex%>">
									<div id="day|<%=cellId%>" class="day_cell_<%=dayValidation%>">
										<div id="type|<%=cellId%>" class="day_type">
											<%
											if(!viewType.equals("Month")){
											%>
												<m4:item m4name="<%=day%>"/>
											<%}%>
										</div>
										<%if(viewType.equals("Week")){//manageDayType%>
											<script type="text/javascript" language="Javascript1.5">
												var dayTypeCurrent ='type|<%=cellId%>';
												manageDayType($(dayTypeCurrent));
											</script>
										<%}%>
										<div id="value|<%=cellId%>" name="<%=dayManagement%>" class="day_value">
											<m4:item m4name="<%=hours%>"/>
											
										</div>
									</div>
								</td>
								<%if(affectTooltip.equals("1")){//ifweneedtooltip%>
								<script type="text/javascript" language="Javascript1.5">
									var toolTipDay='<%=cellId%>';
									getTooltip($(toolTipDay));
								</script>
								<%}%>
							</tr>
							<!--TimeSlots"Text"forWeekView-->
							<%if(viewType.equals("Week")){%>
								<tr>
									<td class="timeslot" id="text|<%=cellId%>" name="" title="">
										<m4:item m4name="<%=timeSlotText%>"/>
									</td>
								</tr>
							<%}%>
						</tbody>
					</table>
				</td>
				<!--End:OtherDays-->
			<%}%>
			<!--LastCellManagement-->
			<%if(zposicions.equals(zregistrofinals)){%>
					<!--TotalManagement-->
					<%if(checkTotal.equals("Y")){%>
					<td id="<%=currentId%>|<%=currentOrdPeriod%>-Total" width="44px"><div class="totcol">0</div></td>
					<%}else{%>
					<td class="column"></td>
					<%}%>
					</tr>
					<tr name="endInfos"><td class="endLine" colspan="<%=nbCell%>" ><div width="95%" id="end|<%=currentId%>|<%=currentOrdPeriod%>"></div></td></tr>
			<%}%>
		</m4:loop>
		</tbody><!--End:MainTable/Body-->
	</table><!--End:MainTable/Datas-->

<!--[if IE 9]>
	<script type="text/javascript">
	if(navigator.userAgent.indexOf("Trident/5")>-1){
		//ie9 Bug Large Table
		cleanWhitespace($("mainTable"));
	}
	</script>
<![endif]-->

<!--WithDatas-->
<%}else{%>
	<!--NoDatas-->
	<%@ include file="../../sse_g4/espanol/sse_g4_gta_planning_pagination_empty.jsp"%>	
	<script type="text/javascript" language="Javascript1.5">
	//displayMessage("Pasdedonnéesdisponibles","Iln'yapasdecollaborateursvisiblespourvotresélection.<br/>Veuillezchangerlescritèresdefiltre.");
	</script>
	<!--NoDatas-->
<%}%>
<br/>
<br/>
<br/>
