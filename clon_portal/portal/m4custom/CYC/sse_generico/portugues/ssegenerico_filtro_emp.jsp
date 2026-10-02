<%@ include file="../../sse_generico/portugues/menu_ess.jsp" %>	
<%@ include file="/sse_g3/sse_ev_trans.jsp"%>

<%
String sFiltroNameL=Tran.getProperty("Label.All");
String sFiltroNameL2=Tran.getProperty("Label.All");


if (zfiltrowu.equals("XXX01"))
{
 znombrewu =sFiltroNameL;
}

if (zfiltrojob.equals("XXX01"))
{
 znombrepuesto =sFiltroNameL2; 
}
%>


<table width="100%" cellspacing="0">
<tr><td class="tablaestadosceldatitulo" colspan="6"><%=Tran.getProperty("Label.Filter")%></td></tr>
<form name="formFiltro" id="formFiltro" action="">
<tr>
	<td class="fuentecampofiltro" colspan="3"><m4:label m4name="<%=zSSENM_WORK_UNIT%>" htmlsafe="true"/>
	<select id="filtro_wu" class="fuenteformulario200" onchange="filtrar()"title="<%=Tran.getProperty("Label.Uo")%>">
	<option value="<%=zfiltrowu%>"><%=znombrewu%></option>
	<option value="XXX01"><%=sFiltroNameL%></option>
	<m4:loop from="0" to="<%=zcountvwu%>">
	<option value="<m4:item m4name="<%=zSSEWORK_UNIT%>" htmlsafe="true"/>"><m4:item m4name="<%=zSSENM_WORK_UNIT%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>

</tr>	
<tr>
	<td class="fuentecampofiltro" colspan="3"><m4:label m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe="true"/>
	<select id="filtro_job" class="fuenteformulario200" onchange="filtrar()"title="<%=Tran.getProperty("Label.Job")%>">
	<option value="<%=zfiltrojob%>"><%=znombrepuesto%></option>
	<option value="XXX01"><%=sFiltroNameL2%></option>
	<m4:loop from="0" to="<%=zcountvjob%>">
	<option value="<m4:item m4name="<%=zSTD_ID_JOB_CODE%>" htmlsafe="true"/>"><m4:item m4name="<%=zSTD_N_JOB_CODE%>" htmlsafe="true"/></option>
	</m4:loop>
	</select>

</tr>	

</form>


