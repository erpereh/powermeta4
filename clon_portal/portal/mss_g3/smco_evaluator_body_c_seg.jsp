
<%if (zcount1 > 0) {%>
<table class="eval_form" width="100%" cellspacing="0"  >
<m4:item  m4varname="zCkQuestion" item="SCO_CK_QUESTION" htmlsafe="true" outputdef="<%=znodo1%>"/>
<tr class="title">
  <td ><m4:label  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>" /></td>
  <td>&nbsp;<m4:label  item="SCO_NM_EXTD_KN_TYP" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
  <td>&nbsp;<m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo1%>" /></td>
  <td>&nbsp;<m4:label  item="SSCO_NM_LEVEL_AUTO_SEG" htmlsafe="true" outputdef="<%=znodo1%>" /></td>
  <td>&nbsp;<m4:label  item="SCO_ID_CAP_SEG_LVL" htmlsafe="true" outputdef="<%=znodo1%>" /></td>
  <td>&nbsp;<m4:label  item="SCO_VALUE_SEG" htmlsafe="true" outputdef="<%=znodo1%>" /></td>
  
  
  <%if (zCkQuestion.equals("1")){%><td>&nbsp;</td><%}%>
  <td class="tablamenuright" ><a title="<%=Selec%>"href="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg_filter.jsp" ><img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:dataloop outputdef="<%=znodo1%>">
  <m4:item m4varname="zSCO_ID_CRITERIA_TYPE" item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo1%>" />
  <m4:item m4varname="zSCOIDLVLTMPCAP" item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>" />
  <m4:current m4varname="current" outputdef="<%=znodo1%>"/>
  <%
  znodoaux="SSCO_K_LEVEL_SEG"+current;
  zmoveaux =znodoaux+ ":" + "SSCO_K_LEVEL_SEG" + "[FIRST]";
  %>
  <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux%>"/></m4:move>
  <form name="a<%=current%>" id="a<%=current%>" action=" "onSubmit="return false">
  <input id="ocultos<%=current%>" name="ocultos<%=current%>" type="hidden" value="<m4:item  item="SCO_ID_CAPABILITY" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
  <input id="ocu<%=current%>" name="ocu<%=current%>" type="hidden" value="<m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
  <input id="comment<%=current%>" name="comment<%=current%>" type="hidden" value="<m4:item  item="SCO_EXPLANATION_TEMP" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
  <input id="rvalor<%=current%>" name="rvalor<%=current%>" type="hidden" value=""  />
  <input id="SCO_ID_CRITERIA_TYPE<%=current%>" name="SCO_ID_CRITERIA_TYPE<%=current%>" type="hidden" value="<m4:item  item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
  <input id="SCO_WEIGHT<%=current%>" name="SCO_WEIGHT<%=current%>" type="hidden" value="<m4:item  item="SCO_WEIGHT" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
  <input id="SCO_ID_CAP_REQ_LVL<%=current%>" name="SCO_ID_CAP_REQ_LVL<%=current%>" type="hidden" value="<m4:item  item="SCO_ID_CAP_REQ_LVL" htmlsafe="true" outputdef="<%=znodo1%>"/>" />
  <tr>
    <td class="label_b">
    <img style='cursor:pointer' bFollowup=true DtStart="<m4:item item="SCO_DT_START_REQ" htmlsafe="true" outputdef="<%=znodo1%>"/>" IdExtdKn="<m4:item item="SCO_ID_CAPABILITY" htmlsafe="true" outputdef="<%=znodo1%>"/>" IdLevel="<m4:item  item="SCO_ID_CAP_REQ_LVL" htmlsafe="true" outputdef="<%=znodo1%>" />" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
    <m4:item  item="SCO_NM_EXTD_KN" htmlsafe="true" outputdef="<%=znodo1%>"/>
    <%if(zSCO_ID_CRITERIA_TYPE.equals("01")){%>
      <img  title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>"src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
     <%}else if(zSCO_ID_CRITERIA_TYPE.equals("02")){%>
     <img title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>" src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
     <%}%>
     </td >
    <td class="label"><m4:item  item="SCO_NM_EXTD_KN_TYP" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
    <td class="label"><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo1%>"/></td>
    <td class="label"><m4:item  item="SSCO_NM_LEVEL_AUTO_SEG" htmlsafe="true" outputdef="<%=znodo1%>"/></td>	
	
    <td >
    <select id="select<%=current%>" name="select<%=current%>" class="fvselect" onchange="javascript:cambiar('<%=current%>')">
    <option value=""><%=lblNotAssess%></option>
    <m4:dataloop outputdef="<%=znodoaux%>">
    <option id ="<m4:item  item="SCO_PERCENT" htmlsafe="true" outputdef="<%=znodoaux%>"/>"value="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/>"><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux%>"/></option>
    </m4:dataloop>
    </select>
    </td>
    <script type="text/javascript" language="Javascript1.5"><!--
    if ('<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>"  jsafe="true"/>'!= ""){
      m4searchoptioness('a<%=current%>','select<%=current%>','<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo1%>" jsafe="true"/>');
    }
    --></script>  
    <td >&nbsp;<input class="finput" readonly="readonly" size="6" maxlength="6"  type="text" id="val_cono<%=current%>" name="val_cono<%=current%>" value="<m4:item  item="SCO_VALUE_RAT_TMP" htmlsafe="true" outputdef="<%=znodo1%>"/>" />  </td> 
    <%if (zCkQuestion.equals("1")){%><td class="i_r"><a title="<%=lblQuesti%>" href="javascript:open_question('<%=current%>','1','1');"><img  alt="<%=lblQuesti%>"  src="/iconos/ic_details_16_16.gif" height="16" width="16"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td><%}%>
  <td class="i_r"  >
  <a title="<%=AddComment%>" href="javascript:AddComent(m4objeto('comment<%=current%>','a<%=current%>'));"><img  alt="<%=AddComment%>"  src="<%=pathImgAddComment%>" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>

  </td>
</tr>
</form>
</m4:dataloop>
</table>
</br>
<%}%>
