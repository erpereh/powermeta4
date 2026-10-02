<%-- =========================================================
	@(#) FileVersion: 818.005.001
	@(#) FileDescription: shco_gen_formats.jsp
	@(#) CompanyName: Meta4 Spain, S.A.
	@(#) LegalCopyright: (c) 2021
	@(#) ProductName: PeopleNet
========================================================= --%>

<%

M4SessionManager z_fsessionmanager = M4Context.getSession(request);
SavParamsInterface z_foSavParams = z_fsessionmanager.getSavParamsInstance();
String zdateformat = (String) z_foSavParams.getParameterValue("FORMAT", "DATE");
String znumformat = (String) z_foSavParams.getParameterValue("FORMAT", "NUMBER");
String zcurrencyformat = (String) z_foSavParams.getParameterValue("FORMAT", "CURRENCY");
String zdigseparatorformat = (String) z_foSavParams.getParameterValue("FORMAT", "GROUPING_SEPARATOR");
String zSepFechas = M4FormatUtils.extractDateSeparator(zdateformat);
String zSepDecimal = (String) z_foSavParams.getParameterValue("FORMAT", "DECIMAL_SEPARATOR");
String zTrailingZeros = M4FormatUtils.extractTrailingZeroes(znumformat);
String zSepDecimal_cur = zSepDecimal;
String zSepDig = M4FormatUtils.extractGroupingSeparator(znumformat,zdigseparatorformat);
String zSepDig_cur = M4FormatUtils.extractGroupingSeparator(zcurrencyformat,zdigseparatorformat);
String zTrailingZeros_cur = M4FormatUtils.extractTrailingZeroes(zcurrencyformat);
%>

<script type="text/javascript" language="Javascript1.5">
var sformatofechas = "<%=zdateformat%>";
var g_ssepfechas ="<%=zSepFechas%>";
var g_ssepdecimal ="<%=zSepDecimal%>";
var g_ssepdig ="<%=zSepDig%>";
var g_strailingzeros ="<%=zTrailingZeros%>";
var g_ssepdecimal_cur ="<%=zSepDecimal_cur%>";
var g_ssepdig_cur ="<%=zSepDig_cur%>";
var g_strailingzeros_cur ="<%=zTrailingZeros_cur%>";
</script>
