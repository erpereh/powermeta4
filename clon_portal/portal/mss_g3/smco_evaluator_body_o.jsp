<%if (zcount3 > 0) {%>
<table class="eval_form" width="100%" cellspacing="0">
<%if(zCkNotes.equals("1")){%>
<form action=" " method="post" name="notes2" id="notes2"onSubmit="return false">
<tr>
<td class="labeli">&nbsp;<m4:label  item="SCO_VALUE_OBJ_QUANT_TEMP" htmlsafe="true" outputdef="<%=znodo%>" /> </td> 
<td >&nbsp;<input  class="finputa"size="10" maxlength="7"  type="text" id="OBJ_QUANT_TEMP" name="OBJ_QUANT_TEMP" value="<m4:item  item="SCO_VALUE_OBJ_QUANT_TEMP" htmlsafe="true" outputdef="<%=znodo%>"/>" />
<a title="<%=zCalcO%>" href="javascript:calc_o('<%=zcount3%>','<%=zIdHh%>','<%=zOrRole%>','<%=zDtStart%>');"><img  alt="<%=zCalcO%>"  src="\iconos\calcular_16_16.gif" height="16" width="16" align="center" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</form>
<%}%> 
<tr class="title">
  <td>&nbsp;<m4:label  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>" /></td>
  <td>&nbsp;<m4:label  item="SCO_NM_TYPE" htmlsafe="true" outputdef="<%=znodo3%>" /></td>
  <td>&nbsp;<m4:label  item="SCO_SCHED_VALUE" htmlsafe="true" outputdef="<%=znodo3%>" /></td>
  <%if (zCkSeg.equals("1")){%><td>&nbsp;<m4:label  item="SCO_VALUE" htmlsafe="true" outputdef="<%=znodo3%>" /></td><%}%>
  <td>&nbsp;<m4:label  item="SCO_ACCOMP_DEGREE" htmlsafe="true" outputdef="<%=znodo3%>" /></td>
  <td class="tablamenuright" ><a title="<%=Selec%>"href="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp" > <img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>

<m4:dataloop outputdef="<%=znodo3%>">
<m4:current m4varname="zposicions3" outputdef="<%=znodo3%>"/>
<m4:item m4varname="zSCO_ID_CRITERIA_TYPE3" item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo3%>" />
<form name="b<%=zposicions3%>" id="b<%=zposicions3%>" action=" "onSubmit="return false">
<input id="bocultos<%=zposicions3%>" name="bocultos<%=zposicions3%>" type="hidden" value="<m4:item  item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>" />" />
<input id="bocu<%=zposicions3%>" name="bocu<%=zposicions3%>" type="hidden" value="<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>" />" />
<input id="bmag<%=zposicions3%>" name="bmag<%=zposicions3%>" type="hidden" value="<m4:item  item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodo3%>" />" />
<input id="bnmag<%=zposicions3%>" name="bnmag<%=zposicions3%>" type="hidden" value="<m4:item  item="SCO_NM_MAGNITUDE" htmlsafe="true" outputdef="<%=znodo3%>" />" />
<input id="comment<%=zposicions3%>" name="comment<%=zposicions3%>" type="hidden" value="<m4:item  item="SCO_EXPLANATION_TEMP" htmlsafe="true" outputdef="<%=znodo3%>" />" />
<input id="SCO_ID_CRITERIA_TYPE<%=zposicions3%>" name="SCO_ID_CRITERIA_TYPE<%=zposicions3%>" type="hidden" value="<m4:item  item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo3%>" />" />
<input id="SCO_COMMENT_2<%=zposicions3%>" name="SCO_COMMENT_2<%=zposicions3%>" type="hidden" value="<m4:item  item="SCO_COMMENT_2" htmlsafe="true" outputdef="<%=znodo3%>" />" />
<tr>
  
  <td class="label_b">

  <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT_2<%=zposicions3%>','b<%=zposicions3%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>  
  <img style='cursor:pointer' IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>"/>" IdMagnitud="<m4:item item="SCO_ID_MAGNITUD" htmlsafe="true" outputdef="<%=znodo3%>"/>" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo3%>"/>
  <%if(zSCO_ID_CRITERIA_TYPE3.equals("01")){%>
  <img title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>" src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <%}else if(zSCO_ID_CRITERIA_TYPE3.equals("02")){%>
  <img title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>" src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
   <%}%>
  </td>  
  <td class="label">&nbsp;<m4:item  item="SCO_NM_TYPE" htmlsafe="true" outputdef="<%=znodo3%>" /></td>
  <td class="label">&nbsp;<m4:item  item="SCO_SCHED_VALUE" htmlsafe="true" outputdef="<%=znodo3%>" /></td>
  <%if (zCkSeg.equals("1")){%><td class="label">&nbsp;<m4:item  item="SCO_VALUE" htmlsafe="true" outputdef="<%=znodo3%>" /></td><%}%> 
  <td class="label">&nbsp;<input class="finputa" type="text" id="SCO_ACCOMP_DEGREE<%=zposicions3%>" name="SCO_ACCOMP_DEGREE<%=zposicions3%>" value="<m4:item  item="SCO_ACCOMP_DEGREE_TMP" htmlsafe="true" outputdef="<%=znodo3%>" />" size="15" maxlength="12" title=""  /><m4:item  item="SCO_NM_MAGNITUDE" htmlsafe="true" outputdef="<%=znodo3%>" />&nbsp;</td> 
  <td  class="i_r" ><a title="<%=AddComment%>" href="javascript:AddComent(m4objeto('comment<%=zposicions3%>','b<%=zposicions3%>'));"><img align="right" alt="<%=AddComment%>"  src="<%=pathImgAddComment%>" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>  
</tr>
</form>
</m4:dataloop>
</form>
</table>
</br>
<%}%>