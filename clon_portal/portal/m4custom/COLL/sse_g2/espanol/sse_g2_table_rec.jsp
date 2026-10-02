
<% 
if (zcounti > 0) {
	String zregistroinicials = String.valueOf(zregistroinicial);
	String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
	String zposicions = "0";
	int zcontrol = 0;
	int zposicion =0;
	String zparidad = "2";%><table class="tablaestados" cellspacing="0" width="100%" border="1"><tr class="valor"><td rowspan="50"><table class="tablaestados" cellspacing="0" width="100%"><tr><td align="center"><b>RECIBO <br /> DE <br /> N&Oacute;MINA</b></td></tr><tr><td class="campo"><br /><br /><br /><br /><br /><br /><br /><br /><tr><td><br /><br /><br /><br /><br /><br /><br /><img title="Logotipo" src="/iconos/logo_meta4_pantalla_login_117_35.gif" width="117" height="35" /></td></tr></table></td><td class="campo" colspan="6" align="left">EMPRESA&nbsp;&nbsp;</td><td class="campo" colspan="2" align="left">PER&Iacute;ODO LIQUIDACI&Oacute;N</td></tr><tr class="valor"><td colspan="6" align="left">&nbsp;<m4:item m4name="<%=zSCO_ID_LEG_ENT%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSTD_N_LEG_ENT%>" htmlsafe="true"/></td><td colspan="2" align="left">&nbsp;<m4:item m4name="<%=zSCO_DT_PAY_START%>" htmlsafe="true"/>&nbsp;/&nbsp;<m4:item m4name="<%=zSCO_DT_PAY_END%>" htmlsafe="true"/></td></tr><tr class="campo"><td colspan="6">TRABAJADOR&nbsp;</td><td colspan="2">MONEDA</td></tr><tr class="valor"><td colspan="6" align="left">&nbsp;<m4:item m4name="<%=zSTD_ID_PERSON%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSTD_N_FAMILY_NAME_1%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSTD_N_FIRST_NAME%>" htmlsafe="true"/></td><td  colspan="2" align="center">&nbsp;<m4:item m4name="<%=zID_CURRENCY%>" htmlsafe="true"/></td></tr><tr class="campo"><td colspan="8">PUESTO DE TRABAJO</td></tr><tr class="valor"><td colspan="8" align="left">&nbsp;<m4:item m4name="<%=zSCO_ID_JOB_CODE%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCO_N_JOB_CODE%>" htmlsafe="true"/></td></tr><tr class="campo"><td align="center">&nbsp;UNIDADES</td><td align="center">&nbsp;PRECIO</td><td align="center" colspan="4">&nbsp;CONCEPTOS</td><td align="center">&nbsp;DEVENGOS</td><td align="center" >&nbsp;RETENCI&Oacute;N</td></tr><m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>"><%
zposicions = m4lix;
zposicion = Integer.valueOf(zposicions).intValue();
zcontrol = zposicion%2;	%><tr><td class="valor">&nbsp;<m4:item m4name="<%=zSCO_COL_1%>" htmlsafe="true"/></td><td class="valor">&nbsp;<m4:item m4name="<%=zSCO_COL_2%>" htmlsafe="true"/></td><td class="valori" colspan="4">&nbsp;<m4:item m4name="<%=zSCO_COL_3%>" htmlsafe="true"/></td><td class="valor">&nbsp;<m4:item m4name="<%=zSCO_COL_4%>" htmlsafe="true"/></td><td class="valor">&nbsp;<m4:item m4name="<%=zSCO_COL_5%>" htmlsafe="true"/></td></tr></m4:loop><tr class="campo" rowspan="2" align="center"><td colspan="6" class="campo" align="left">DATOS DEL BANCO</td><td>TOTAL<br />DEVENGADO</td><td>TOTAL<br />DEDUCIR</td></tr><tr class="valor" rowspan="2" ><td colspan="6" align="left"><m4:item m4name="<%=zSCO_NM_BNK%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zSCO_ACCOUNT_NUMBER%>" htmlsafe="true"/></td><td align="right">&nbsp;<m4:item m4name="<%=zSCO_TOT_EARNINGS%>" htmlsafe="true"/></td><td align="right">&nbsp;<m4:item m4name="<%=zSCO_TOT_DEDUCTIONS%>" htmlsafe="true"/></td></tr><tr><td colspan="6" class="campo" align="left">L&Iacute;QUIDO TOTAL A PERCIBIR</td><td class="campo" colspan="2">&nbsp;<m4:item m4name="<%=zSCO_NET%>" htmlsafe="true"/></td></tr></table><%}else{%><div class="fuentenodatos">Actualmente no tienes ninguna paga calculada.</div><%}%>






