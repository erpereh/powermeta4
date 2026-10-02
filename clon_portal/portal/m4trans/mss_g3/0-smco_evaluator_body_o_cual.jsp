
<%if (zcount4 > 0) {zSCOIDTYPEtemp="";%>
<table class="eval_form" width="100%" cellspacing="0">
<%if(zCkNotes.equals("1")){%>
<form action=" " method="post" name="notes3" id="notes3"onSubmit="return false">
<input id="N_SCALE3" name="N_SCALE3" type="hidden" value="<m4:item  item="SSCO_ID_SCALE" htmlsafe="true" outputdef="<%=znodo6%>"/>" />
<tr>
<td class="labeli">&nbsp;<m4:label  item="SCO_ID_LEVEL_OBJ_TEMP" htmlsafe="true" outputdef="<%=znodo%>" />  </td> 
<td >
<select id="notes3" name="notes3" class="fvselect" onchange="javascript:ver_notea('notes3');" >
<option value=""><%=lblNotAssess%></option>
<m4:dataloop outputdef="<%=znodo6%>">
<option id ="<m4:item  item="SSCO_PERCENT" htmlsafe="true" outputdef="<%=znodo6%>"/>"value="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodo6%>"/>"><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo6%>"/></option>
</m4:dataloop>
</select>
</td> 
<td >
&nbsp;<input class="finputa"readonly="readonly" size="10" maxlength="7"  type="text" id="val_notes3" name="val_notes3" value="<m4:item  item="SCO_CALCUL_OBJ_TEMP" htmlsafe="true" outputdef="<%=znodo%>"/>" />&nbsp;<a title="<%=zCalcOc%>"alt="<%=zCalcOc%>" href="javascript:calc_obj('<%=zcount4%>');"><img  alt="<%=zCalcOc%>"  src="\iconos\calcular_16_16.gif" height="16" align="center" width="16"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</form>
<script type="text/javascript" language="Javascript1.5"><!--
if ('<m4:item  item="SCO_ID_LEVEL_OBJ_TEMP" htmlsafe="true" outputdef="<%=znodo%>"  jsafe="true"/>'!= ""){
  m4searchoptioness('notes3','notes3','<m4:item  item="SCO_ID_LEVEL_OBJ_TEMP" htmlsafe="true" outputdef="<%=znodo%>"  jsafe="true"/>');
}
--></script>
<%}%> 
<tr class="title">
  <td>&nbsp;<m4:label  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>" /></td>
  <td>&nbsp;<m4:label  item="SCO_NM_TYPE" htmlsafe="true" outputdef="<%=znodo4%>" /></td>
  <td>&nbsp;<m4:label  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo4%>" /></td>
  <%if (zCkSeg.equals("1")){%><td>&nbsp;<m4:label  item="SCO_NM_LEVEL_1" htmlsafe="true" outputdef="<%=znodo4%>" /></td><%}%>
  <td>&nbsp;<m4:label  item="SCO_ID_OBJ_RAT_LVL" htmlsafe="true" outputdef="<%=znodo4%>" /></td>
  <td class="tablamenuright" ><a title="<%=Selec%>"href="/servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp" > <img alt="<%=Selec%>" src="/iconos/icono_flecha2_ocre_mss_11_9.gif"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /></a></td>
</tr>
<m4:dataloop outputdef="<%=znodo4%>">
<m4:item m4varname="zSCO_ID_LVL_TMP4" item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo4%>" />
<m4:current m4varname="current4" outputdef="<%=znodo4%>"/>
<m4:item m4varname="zSCOIDTYPE4" item="SCO_ID_TYPE" htmlsafe="true" outputdef="<%=znodo4%>" />
<m4:item m4varname="zSCO_ID_CRITERIA_TYPE4" item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo4%>" />
<%
znodoaux4="SSCO_O_LEVEL"+current4;
zmoveaux4 =znodoaux4+ ":" + "SSCO_O_LEVEL" + "[FIRST]";
%>
<m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmoveaux4%>"/></m4:move>
<form name="z<%=current4%>" id="z<%=current4%>" action=" "onSubmit="return false">
<input id="ocultos1<%=current4%>" name="ocultos1<%=current4%>" type="hidden" value="<m4:item  item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<input id="ocu1<%=current4%>" name="ocu1<%=current4%>" type="hidden" value="<m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<input id="SCO_ID_CRITERIA_TYPE<%=current4%>" name="SCO_ID_CRITERIA_TYPE<%=current4%>" type="hidden" value="<m4:item  item="SCO_ID_CRITERIA_TYPE" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<input id="SCO_WEIGHT<%=current4%>" name="SCO_WEIGHT<%=current4%>" type="hidden" value="<m4:item  item="SCO_WEIGHT" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<input id="SCO_ID_OBJ_REQ_LVL<%=current4%>" name="SCO_ID_OBJ_REQ_LVL<%=current4%>" type="hidden" value="<m4:item  item="SCO_ID_OBJ_REQ_LVL" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<input id="comment<%=current4%>" name="comment<%=current4%>" type="hidden" value="<m4:item  item="SCO_EXPLANATION_TEMP" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<input id="SCO_COMMENT<%=current4%>" name="SCO_COMMENT<%=current4%>" type="hidden" value="<m4:item  item="SCO_COMMENT" htmlsafe="true" outputdef="<%=znodo4%>" />" />
<tr>
  <td class="label_b">
  <a class="i_r" title="<%=ViewComment%>" href="javascript:ViewComent(m4objeto('SCO_COMMENT<%=current4%>','z<%=current4%>'),'<%=zpathVerComentario%>');"><img align="left" alt="<%=ViewComment%>"  src="<%=pathImgViewComment%>" width="11" height="9" onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a>  
  <img style='cursor:pointer' DtStart="<m4:item item="SCO_DT_START_REQ" htmlsafe="true" outputdef="<%=znodo4%>"/>" IdObjective="<m4:item item="SCO_ID_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>"/>" IdLevel="<m4:item  item="SCO_ID_OBJ_REQ_LVL" htmlsafe="true" outputdef="<%=znodo4%>" />" title="<%=Ver%>" onclick='javascript:m4Eval.evalDetail.show(this);' src="<%=zAyuda%>"  width="12" height="12" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
  <m4:item  item="SCO_NM_OBJECTIVE" htmlsafe="true" outputdef="<%=znodo4%>"/>
  <%if(zSCO_ID_CRITERIA_TYPE4.equals("01")){%>
  <img  title="<%=zlabelOrg%>"alt="<%=zlabelOrg%>" src="<%=zOrg%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
   <%}else if(zSCO_ID_CRITERIA_TYPE4.equals("02")){%>
   <img  title="<%=zlabelPersonal%>"alt="<%=zlabelPersonal%>" src="<%=zPersonal%>"  width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" />
   <%}%>
  </td >  
  <td class="label">&nbsp;<m4:item  item="SCO_NM_TYPE" htmlsafe="true" outputdef="<%=znodo4%>" /></td>
  <td class="label">&nbsp;<m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodo4%>" /></td>
  <%if (zCkSeg.equals("1")){%><td class="label">&nbsp;<m4:item  item="SCO_NM_LEVEL_1" htmlsafe="true" outputdef="<%=znodo4%>" /></td><%}%>
  <td >
  <select class="fvselect" id="select<%=current4%>" name="select<%=current4%>" >&nbsp;
    <option value=""><%=lblNotAssess%></option>
    <m4:dataloop outputdef="<%=znodoaux4%>">
      <option id ="<m4:item  item="SCO_PERCENT" htmlsafe="true" outputdef="<%=znodoaux4%>"/>"value ="<m4:item  item="SCO_ID_LEVEL" htmlsafe="true" outputdef="<%=znodoaux4%>"/>"  ><m4:item  item="SCO_NM_LEVEL" htmlsafe="true" outputdef="<%=znodoaux4%>"/></option>
    </m4:dataloop>
  </select></td>
  <script type="text/javascript" language="Javascript1.5"><!--

 if ('<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" outputdef="<%=znodo4%>" />'!= ""){
     m4searchoptioness('z<%=current4%>','select<%=current4%>','<m4:item  item="SCO_ID_LVL_TMP" htmlsafe="true" jsafe="true" outputdef="<%=znodo4%>"/>');
  }
--></script>
<td ><a title="<%=AddComment%>" href="javascript:AddComent(m4objeto('comment<%=current4%>','z<%=current4%>'));"><img align="right" alt="<%=AddComment%>"  src="<%=pathImgAddComment%>" height="20" width="20"onmouseover ="m4luztotal(this,255,255,255,8,8,200,255,255,255)"  onmouseout="m4oscuridad(this)" /></a></td>
</tr>
</form>
</m4:dataloop>
</table>
</br>
<%}%>