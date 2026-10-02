
<%
String zsubsesion = "SSE_LAST_HR_PAY_DOCS";
String zmeta4object = "SSE_LAST_HR_PAY_DOCS";
String zmetodocarga = zsubsesion + "!SSE_LAST_HR_PAY_DOCS.CARGA";
String znodo = "SSE_LAST_HR_PAY_DOCS";

String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";   
 
String zventanas = "20";
int zvuelta = 5;
String zdireccion = "sse_g2/ssco_g2_p12.jsp";
String zestado = "21";

// No se modifica en general.

int zregistroinicial = Integer.valueOf(zinicios).intValue();
zregistroinicial = zregistroinicial - 1;
int zventana  = Integer.valueOf(zventanas).intValue();
int zregistrofinal = zregistroinicial + zventana - 1;
//String ztipocarga = "M4T";
String ztipocarga = "MOD";
  
String ziterator = znodo + ":" + zsubsesion + "!" + znodo;
String zmove = znodo + ":" + znodo + "[zregistroinicial]";   
String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";

 // Items que vamos a cargar. Se deben anadir todos aquellos que se deseen visualizar 
String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&VAR.m4lix]" + ".";
String zSCO_DT_PAYMENT = zcomun + "SCO_DT_PAYMENT";
String zSCO_NM_DOC_GENERATED = zcomun + "SCO_NM_DOC_GENERATED";
//-----------------
	String zLIQUIDO = zcomun + "SSP_LIQUIDO";
	String zLIQUIDOEURO = zcomun + "SSP_LIQUIDO";
	String zSCO_NET = zcomun + "SCO_NET";
	String zSCO_SEL_PAY_P = zcomun + "SCO_SEL_PAY_P";
//-----------------
String zID_CURRENCY = zcomun + "ID_CURRENCY";
String zSCO_PAY_FREQ_PAYM = zcomun + "SCO_PAY_FREQ_PAYM";
String zSTD_OR_HR_PERIOD = zcomun + "STD_OR_HR_PERIOD";
String zSCO_PAY_DOC = zcomun + "SCO_PAY_DOC";
String zSTD_DT_START = zcomun + "STD_DT_START";

String zSSCO_COMES_FROM_OLD_DEVELOPMNT = zcomun + "SSCO_COMES_FROM_OLD_DEVELOPMNT";
String zSSCO_RETROACTIVITY_PAYS_FLAG = zcomun + "SSCO_RETROACTIVITY_PAYS_FLAG";
String zNMPAY = zcomun + "SCO_NM_PAY";

%>

<m4:startpage m4task="<%=zsubsesion%>"/>
    <m4:beginjob/>
        <m4:datadef m4o="<%=zmeta4object%>" m4name="<%=zsubsesion%>"/>
        <m4:exec m4method="<%=zmetodocarga%>"><m4:param name="TIPO_CARGA" value="<%=ztipocarga%>"/></m4:exec>
        <m4:outputdef m4alias="<%=znodo%>"><m4:param name="m4name0" value="<%=zoutputdef%>"/></m4:outputdef>
    <m4:endjob/>
    <m4:move><m4:param name="<%=zsubsesion%>" value="<%=zmove%>"/></m4:move>
<%
int  zcount  = 0;
int  zcounti  = 0;  
try {
    M4Operations m = new M4Operations(request);
    zcount = m.getCount(znodo,zsubsesion,znodo);
    zcounti = m.getCountInClient(znodo,zsubsesion,znodo);
} catch(Exception e) {}
String  zcountv = String.valueOf(zcounti);%>

<script type="text/javascript">
function recibo(dIdPaga,sRevision,dPayFreq,sNmPay,sOrPeriod){
//dIdPaga = m4date_back(dIdPaga);
//var dir="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp?SCO_DT_ACCRUED_P=" + dIdPaga + "&SCO_SEL_PAY_P=" + sRevision + "&SCO_ID_PAY_FREQ_AC_P=" + dPayFreq + "&SCO_NM_PAY=" + sNmPay + "&SCO_OR_HR_PERIOD=" + sOrPeriod + "&NUM_REG=1&TYPELOAD=0";
var dir="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp?z_paga=" + dIdPaga + "&zrevision=" + sRevision + "&zmoneda=EUR" + "&znmpay=" + sNmPay;
window.open(dir,'Vis','width=1015;height=600,left=0,top=50,resizable,scrollbars');

}


</script>
</head>
<body>
<table width="100%">
  <tr>
    <td class="titulofuncional" colspan="2"><m4:label m4name="<%=ziterator%>" htmlsafe="true"/></td></tr>
  <tr>
    <td width="100" height="100"><img src="/iconos/noname_recibos_57_100.gif" width="100" height="100"</td>
    <td><div class="descripcionfuncional"><%=ssco_g2Ess.getProperty("Label.sse_g2_p12Des")%></td>
  </tr>
</table>

<form action="/servlet/CheckSecurity/JSP/sse_g2/sse_g2_rec.jsp" method="post" name="oculto" id="oculto">
<input type="hidden" id="SCO_DT_ACCRUED_P" name="SCO_DT_ACCRUED_P"/>
<input type="hidden" id="SCO_SEL_PAY_P" name="SCO_SEL_PAY_P" />
<input type="hidden" id="SCO_ID_PAY_FREQ_AC_P" name="SCO_ID_PAY_FREQ_AC_P"/>
<input type="hidden" id="SCO_OR_HR_PERIOD" name="SCO_OR_HR_PERIOD"/>
<input type="hidden" id="SCO_NM_DOC" name="SCO_NM_DOC"/>
<input type="hidden" id="NUM_REG" name="NUM_REG" value="1" />
<input type="hidden" id="TYPELOAD" name="TYPELOAD" value="0"/>
</form>
<%
if (zcounti > 0) {
    String zregistroinicials = String.valueOf(zregistroinicial);
    String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);
    String zposicions = "0";
    int zcontrol = 0;
    int zposicion =0;
    int zLastPeriod =0;
    int zThisPeriod =0;
    String zOr_Period = "";

    String zoldDevelopment = "";
    String zoldDevRetroactivity = "";
		String zSelPayP = "";	//Tipo de paga

    String zparidad = "2";%>
    <m4:loop from="<%=zregistroinicials%>" to="<%=zregistrofinals%>">
      <%
      zposicions = m4lix;
      zposicion = Integer.valueOf(zposicions).intValue();
      zcontrol = zposicion%2;
      try {
        M4Operations Introduccion = new M4Operations(request);  
        } catch(Exception e) {}
      if (zcontrol==0){zparidad = "";}else{zparidad = "2";}
      %>
      <m4:item m4name="<%=zSTD_OR_HR_PERIOD%>" var="zOr_Period" htmlsafe="true"/>

      <m4:item m4name="<%=zSSCO_COMES_FROM_OLD_DEVELOPMNT%>" var="zoldDevelopment" htmlsafe="true"/>
      <m4:item m4name="<%=zSSCO_RETROACTIVITY_PAYS_FLAG%>" var="zoldDevRetroactivity" htmlsafe="true"/>
			<m4:item m4name="<%=zSCO_SEL_PAY_P%>" var="zSelPayP" htmlsafe="true"/>

      <%zThisPeriod = Integer.valueOf(zOr_Period).intValue();
        if (zLastPeriod != zThisPeriod) {
      
        if (zLastPeriod != 0) {%></table><br><%}%>
        <table class="tablaestados" cellspacing="0" width="100%" >
          <tr class="tablaestadosceldatitulo">
            <td colspan=4>&nbsp;<m4:label m4name="<%=zSTD_DT_START%>" htmlsafe="true"/>: &nbsp;<m4:item m4name="<%=zSTD_DT_START%>" htmlsafe="true"/></td>
          </tr>
          <tr class="tablaestadosceldatitulo">
            <td><m4:label m4name="<%=zSCO_NM_DOC_GENERATED%>" htmlsafe="true"/></td>
            <td><m4:label m4name="<%=zSCO_DT_PAYMENT%>" htmlsafe="true"/></td>
            <td><m4:label m4name="<%=zSCO_NET%>" htmlsafe="true"/></td>
            <td><m4:label m4name="<%=zSCO_PAY_DOC%>" htmlsafe="true"/></td>
          </tr>
        <%}%>   
      <tr class="fuentevalor<%=zparidad%>">
        <td>
          &nbsp;<m4:item m4name="<%=zSCO_NM_DOC_GENERATED%>" htmlsafe="true"/>
        </td>
        <td>
          &nbsp;<m4:item m4name="<%=zSCO_DT_PAYMENT%>" htmlsafe="true"/>
        </td>
        <td class="fuentevalor<%=zparidad%>e">
          &nbsp;<m4:item m4name="<%=zSCO_NET%>" htmlsafe="true"/>&nbsp;<m4:item m4name="<%=zID_CURRENCY%>" htmlsafe="true"/>
        </td>

        <td class="fuentevalor<%=zparidad%>e">  
		
		<%  String sPagaNoEncriptada = ""; 
		    String sPagaEncriptada = "";
			try {
				M4Operations m = new M4Operations(request);
				sPagaNoEncriptada = m.getItem(znodo,zsubsesion,znodo,"","SCO_DT_PAYMENT");	//se obtiene con formato YYYY-MM-DD HH:MM:SS
				int longitudFormatoFecha = "YYYY-MM-DD".length();
				sPagaNoEncriptada = sPagaNoEncriptada.substring(0,longitudFormatoFecha);	//eliminar la hora de la fecha de la paga
				sPagaEncriptada = com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request,"EncCorp76",sPagaNoEncriptada);
			} catch (Exception e) {}
		
          if (zoldDevelopment.equals("1")){ %>

          &nbsp;<a href="javascript:recibo('<%=sPagaEncriptada%>','1','<m4:item m4name="<%=zSCO_PAY_FREQ_PAYM%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zNMPAY%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSTD_OR_HR_PERIOD%>" jsafe="true" htmlsafe="true"/>'); "><img src="/iconos/lu_zoom_16.png"/></a>

          <% if (zoldDevRetroactivity.equals("1")){ %>
            &nbsp;<a href="javascript:recibo('<%=sPagaEncriptada%>','2','<m4:item m4name="<%=zSCO_PAY_FREQ_PAYM%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zNMPAY%>" jsafe="true" htmlsafe="true"/>','<m4:item m4name="<%=zSTD_OR_HR_PERIOD%>" jsafe="true" htmlsafe="true"/>'); "><m4:label m4name="<%=zSSCO_RETROACTIVITY_PAYS_FLAG%>" htmlsafe="true"/></a>
          <%}%>

        <%}else{%>
          &nbsp;<a href="/servlet/download_blob?task=<%=zsubsesion%>&item=SSE_LAST_HR_PAY_DOCS!SSE_LAST_HR_PAY_DOCS[<%=m4lix%>].SCO_PAY_DOC" onclick="window.open(this.href,'XXXXX','resizable=0, menubar=0, toolbar=0, directories=0, location=0, scrollbars=0, status=0');return false"><img src="/iconos/lu_zoom_16.png"/></a>
        <%}%>

        </td>

      </tr>
    <%zLastPeriod = zThisPeriod;%>
    </m4:loop>
  </table>
  <br>                            