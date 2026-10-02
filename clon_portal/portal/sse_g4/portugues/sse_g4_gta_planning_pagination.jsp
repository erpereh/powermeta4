<!-- ///////////////////////////////////////PLANNING GTA : Pagination Part/////////////////////////////////////// -->
<div id="pagin" class="pagination">
	<table  border="0" width="100%" cellspacing="0">
		<tr >
			<% 
			int nbRow = zcount1/(zventana/nbIndiv); // Available Row's Number
			int last = ((zcount1/zventana) * zventana) + 1 ;
			int remainder = zcount1%(zventana/nbIndiv); // Check Remainder
			int counter = 0; //Counter
			int zsalto = 0;
			if (remainder > 0) {nbRow = nbRow + 1;} // Tout comme l'itération de construction du contenu de la table d'intervalles.
			int first = 1;
			int firstRecord = 1;
			//int limit = Integer.parseInt("zinicios");
			int limit =Integer.valueOf(zinicios).intValue()-1;
			int next = 0;
			int previous = 0;
			//Particular Case: period of 1 day only
			if (zinicios.equals("1")){
				firstRecord = 1;
			}else{
				firstRecord = Integer.valueOf(zinicios).intValue()/(zventana/nbIndiv) + 1;
			}
			if (last >=  zcount1) {
				last = zcount1-zventana + 1;
			}
			if (zcount1 <=  zventana) {
				last = 1;
			}
			limit = (limit + zcounti1)/(zventana/nbIndiv);
			next = Integer.valueOf(zinicios).intValue() + zcounti1;
			previous = Integer.valueOf(zinicios).intValue()- zventana;
			String	firstS = String.valueOf(first); 
			String	lastS  = String.valueOf(last); 
			String	firstRecordS = String.valueOf(firstRecord);
			String  limitS =  String.valueOf(limit);
			String  nextS =  String.valueOf(next);
			String  previousS =  String.valueOf(previous);
			String  employees = Tran_mss_g4_gta_planning.getProperty("pagination.employees");
			if (nbRow == 1) {
				employees = Tran_mss_g4_gta_planning.getProperty("pagination.employee");
			}
			//Get Session Id Person
			M4SessionCl zsesion = M4Context.getM4SessionCl(request);
			String idSession = zsesion.getBagEntries("zIdPerson");
			%>
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
				<strong><%=Tran_mss_g4_gta_planning.getProperty("pagination.display")%></strong> : <span id="textAffichage"></span> &nbsp;| 
				<strong><%=Tran_mss_g4_gta_planning.getProperty("pagination.period")%></strong> <%=Tran_mss_g4_gta_planning.getProperty("pagination.from")%> <strong><%=dtStart%></strong> <%=Tran_mss_g4_gta_planning.getProperty("pagination.to")%> <strong><%=dtEnd%></strong> | 
				<strong><m4:label m4name="<%=filterSort%>"/></strong> : <m4:item m4name="<%=filterSort%>"/>
			</td>
			<!-- First/Previous Population -->
			<td class="pagin_right" width="60px">
				<%if (zinicios.equals("1")) {%>
					<img src="/iconos/lu_dis_first_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.start")%>" />
					<img src="/iconos/lu_dis_rew_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.previousPop")%>" />
				<%}else{%>
					<a  href="javascript:m4valor('oculto','zinicios',<%=firstS%>,'set');filterPage();" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.displayOtherData")%>">
						<img src="/iconos/lu_hot_first_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.start")%>" />
					</a>
					<a  href="javascript:m4valor('oculto','zinicios',<%=previousS%>,'set');filterPage();" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.displayOtherData")%>">
						<img src="/iconos/lu_hot_rew_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.previousPop")%>" />
					</a>
				<%}%>
			</td>
			<!-- Current Population -->
			<td class="pagin_middle" width="70px">
				&nbsp;<strong><%=firstRecordS%> - <%=limitS%></strong>&nbsp;
			</td>
			<!-- Next/Last Population -->
			<td class="pagin_right" width="60px">
				<%if (next >= zcount1) {%>
					<img src="/iconos/lu_dis_for_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.nextPop")%>" />
					<img src="/iconos/lu_dis_last_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.end")%>" />
				<%}else{%>
					<a  href="javascript:m4valor('oculto','zinicios',<%=next%>,'set');filterPage();" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.displayOtherData")%>">
						<img src="/iconos/lu_hot_for_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.nextPop")%>" />
					</a>
					<a  href="javascript:m4valor('oculto','zinicios',<%=lastS%>,'set');filterPage();" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.displayOtherData")%>">
						<img src="/iconos/lu_hot_last_24.png" alt="" title="<%=Tran_mss_g4_gta_planning.getProperty("pagination.end")%>" />
					</a>
				<%}%>
			</td>
			<!-- Total Population -->
			<td class="pagin_middle" width="120px">
				 <strong>/ <%=nbRow%> <%=employees%></strong>
			</td>	
		</tr>
	</table>
</div>
