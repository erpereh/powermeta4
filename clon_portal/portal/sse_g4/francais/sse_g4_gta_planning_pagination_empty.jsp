<!-- ///////////////////////////////////////PLANNING GTA : Pagination Part If No Datas/////////////////////////////////////// -->
<div id="pagin" class="pagination">
	<table  border="0" width="100%" cellspacing="0">
		<tr >
			<!-- Previous/Next Period + Current Month -->
			<td class="pagin_left" valign="middle" width="80px">
				<a id="<%=startDatePrevious%>|<%=endDatePrevious%>" href="javascript:selectPrevious('<%=startDatePrevious%>|<%=endDatePrevious%>');" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.previous")%>">
					<img src="/iconos/lu_hot_rew_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.previousPeriod")%>" />
				</a>
				<a  id="<%=startDateNext%>|<%=endDateNext%>" href="javascript:selectNext('<%=startDateNext%>|<%=endDateNext%>');" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.next")%>">
					<img src="/iconos/lu_hot_for_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.nextPeriod")%>" />
				</a>
				<a  id="<%=startCurrentMonth%>|<%=endCurrentMonth%>" href="javascript:selectMonth('<%=startCurrentMonth%>|<%=endCurrentMonth%>');" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.currentMonthView")%>">
					<img src="/iconos/calendarIcon_24_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.currentMonth")%>" />
				</a>
			</td>
			<td class="pagin_left" width="100px">
				<strong><%=monthTxt%> <%=yearTxt%> </strong> 
			</td>
			<!-- Data Type / Period / Sort -->
			<td class="pagin_middle">
				<strong><%=Tran_mss_g4_gta_planning.getProperty("pagination.display")%></strong> : <span id="textAffichage"></span> | 
				<strong><%=Tran_mss_g4_gta_planning.getProperty("pagination.period")%></strong> <%=Tran_mss_g4_gta_planning.getProperty("pagination.from")%> <strong><%=dtStart%></strong> <%=Tran_mss_g4_gta_planning.getProperty("pagination.to")%> <strong><%=dtEnd%></strong> | 
				<strong><m4:label m4name="<%=filterSort%>"/></strong> : <m4:item m4name="<%=filterSort%>"/>
			</td>
			<!-- First/Previous Population -->
			<td class="pagin_right" width="60px">
				<img src="/iconos/lu_dis_first_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.start")%>"/>
				<img src="/iconos/lu_dis_rew_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.previousPop")%>"/>
			</td>
			<!-- Current Population -->
			<td class="pagin_middle" width="70px">
				<strong>0</strong>
			</td>
			<!-- Next/Last Population -->
			<td class="pagin_right" width="60px">
				<img src="/iconos/lu_dis_for_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.nextPop")%>" />
				<img src="/iconos/lu_dis_last_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.end")%>" />
			</td>
			<!-- Total Population -->
			<td class="pagin_middle" width="120px">
				 <strong>/ 0 <%=Tran_mss_g4_gta_planning.getProperty("pagination.employees")%></strong>
			</td>
		</tr>
	</table>
</div>
<!--<div width="400px">-->
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div id="snippetContainer">
	<div id="snippets">
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td class="titleMenu"><%=Tran_mss_g4_gta_planning.getProperty("pagination.noDatas")%></td>
			</tr>
			<tr class="background">
				<th colspan="1"></th>
			</tr>
		</table>
		<table width="100%" cellspacing="0" cellpadding="0" >
			<tr>
				<td class="labels" align="center">
					<%=Tran_mss_g4_gta_planning.getProperty("pagination.noDatasInfos")%>
				</td>
			</tr>
		</table>
	</div>
</div>	